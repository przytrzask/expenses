import Head from "next/head";

import { withApollo } from "../lib/Apollo";
import { Comments } from "../components/Comments";
import { Layout, leftPane, rightPane } from "../components/Layout";

const Home = () => {
  return <Comments />;
};

export default withApollo(Home);
