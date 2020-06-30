import Head from "next/head";
import React from "react";

import { withApollo } from "../lib/Apollo";
import { Expenses } from "../components/Expenses";
import { Layout, leftPane, rightPane } from "../components/Layout";

const Home = () => {
  return (
    <div className="container">
      <style jsx>{`
        min-height: 100vh;
      `}</style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      index
    </div>
  );
};

export default withApollo(Home);
