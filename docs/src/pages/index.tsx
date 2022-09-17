import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import Separation from "../components/Separator";
import HomepageHeader from "../components/HomepageHeader";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.root}>
      <Head>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <HomepageHeader />
      <Separation />
      <main>
        <HomepageFeatures />
      </main>
      </div>
    </Layout>
  );
}
