import { Layout } from "@jikji/react";
import LoremContent from "./LoremContent";

function Unbreakable() {
  return (
    <Layout disableWrap>
      ---Unbreakable Start---
      <LoremContent paragraphs={2}  />
      ---Unbreakable End---
    </Layout>
  );
}

export default Unbreakable;
