import React from "react";
import App from "next/app";
import "../pages/normalize.css";
import { Layout } from "../components/Layout";
import "../styles/base.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    );
  }
}

export default MyApp;
