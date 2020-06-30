import Head from "next/head";

import { withApollo } from "../lib/Apollo";
import { Expenses } from "../components/Expenses";

const Home = () => {
  return <Expenses />;
};

export default withApollo(Home);
