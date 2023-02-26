import { loremContents } from "./LoremContent";

function TwoColumnText() {
  return (
    <p style={{ columnCount: 2 }}>
       {loremContents.slice(0, 4).map((v, i) => `${i}- ${v}`)}
    </p>
  );
}

export default TwoColumnText;
