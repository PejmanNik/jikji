import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageHeader.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.banner)}>
      <div className={clsx("container", styles.container)}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="github-button"
            href="https://github.com/PejmanNik/jikji"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star PejmanNik/jikji on GitHub"
          >
            Star
          </a>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
