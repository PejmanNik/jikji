import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Support CSR And SSG",
    image: "/img/support_csr_ssg.svg",
    description: (
      <>
        You can import the React library in your Web App or use the CLI in the
        backend and build the perfect report in different formats
        PDF/HTML/Image.
      </>
    ),
  },
  {
    title: "Extend or Customize",
    image: "/img/extend_customize.svg",
    description: (
      <>
        This library provides a 100% customizable layout handler, unlike the
        built-in browser engine. You can add pagination, different wrapping
        strategy, and a lot more.
      </>
    ),
  },
  {
    title: "Powered by HTML/CSS/JS",
    image: "/img/html_css_js.svg",
    description: (
      <>
        You can use the last versions of HTML/CSS/JS and a lot of built-in
        third-party libraries and tools for designing your report without any
        limitation
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
