import React from "react";
import styles from "./HomepageLayoutEngine.module.css";
import SVG from "react-inlinesvg";

function HomepageLayoutEngine() {
  return (
    <section className={styles.layoutEngine}>
      <h2>Layout your pages as you like!</h2>
      <SVG width="90%" src="/img/layout_convert.svg" />
    </section>
  );
}

export default HomepageLayoutEngine;
