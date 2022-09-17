import LoremIpsum from "../Components/LoremIpsum";
import Chart from "./Chart";
import Page from "./Page";
import Title from "./Title";

function Finance() {
  return (
    <Page>
      <Title>Finance</Title>
      <LoremIpsum />
      <Chart />
      <LoremIpsum />
    </Page>
  );
}

export default Finance;
