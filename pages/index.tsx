import Head from "next/head";
import React from "react";

import { withApollo } from "../lib/Apollo";
import { Home } from "../components/Home/Home";

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </React.Fragment>
  );
};

export default withApollo(Index);
