import { Image } from "@jikji/react";
import LoremIpsum from "../Components/LoremIpsum";
import Page from "./Page";
import QuoteFromAPI from "./QuoteFromAPI";
import Title from "./Title";

function Business() {
  return (
    <Page>
      <Title>Business</Title>
      <LoremIpsum />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <Image
          height={350}
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <Image
          height={450}
          src="https://images.unsplash.com/photo-1583382525248-bcbc20a7a79a"
        />
      </div>

      <LoremIpsum />
      <QuoteFromAPI />
    </Page>
  );
}

export default Business;
