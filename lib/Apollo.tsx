// https://github.com/zeit/next.js/tree/ff2d28c4ff0a2cc1ce408817f2714eebf1cf72c2/examples/with-apollo

import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { createPersistedQueryLink } from "apollo-link-persisted-queries";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export function withApollo<PageProps>(
  PageComponent: NextPage<PageProps>,
  { ssr = true } = {}
) {
  type ApolloPageProps = PageProps & {
    apolloClient?: ApolloClient<NormalizedCacheObject> | null;
    apolloState?: NormalizedCacheObject;
  };
  const WithApollo: NextPage<ApolloPageProps> = ({
    apolloClient,
    apolloState,
    ...pageProps
  }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...((pageProps as any) as PageProps)} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx;

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const cookie =
        ctx &&
        ctx.req &&
        ctx.req.headers &&
        ctx.req.headers.cookie &&
        String(ctx.req.headers.cookie);
      // @ts-ignore
      const apolloClient = (ctx.apolloClient = initApolloClient({}, cookie));

      // Run wrapped getInitialProps methods
      let pageProps = {} as PageProps;
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === "undefined") {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
function initApolloClient(
  initialState?: NormalizedCacheObject,
  cookie?: string
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return createApolloClient(initialState, cookie);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

/**
 * Creates and configures the ApolloClient
 */
function createApolloClient(
  initialState: NormalizedCacheObject = {},
  cookie?: string
): ApolloClient<NormalizedCacheObject> {
  const headers = cookie ? { cookie } : undefined;
  const link = createPersistedQueryLink().concat(
    new HttpLink({
      // @todo move to enviroment var
      uri: "./api/graphql", // Server URL (must be absolute)
      credentials: "include", // Additional fetch() options like `credentials` or `headers`
      headers,
      fetch,
      useGETForQueries: true,
    })
  );
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link,
    cache: new InMemoryCache().restore(initialState),
    connectToDevTools: true,
  });
}
