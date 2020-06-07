import Head from "next/head";

import { withApollo } from "../lib/Apollo";
import { Expenses } from "../components/Expenses";

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

      <Expenses />
    </div>
  );
};

export default withApollo(Home);
