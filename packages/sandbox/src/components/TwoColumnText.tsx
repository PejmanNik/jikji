import { loremContents } from "./LoremContent";

function TwoColumnText() {
  return (
    <p style={{ columnCount: 2 }}>
      {loremContents.slice(0, 4).map((v, i) => `${i}- ${v}`).join('/n')}
    </p>
  );
}

export default TwoColumnText;
