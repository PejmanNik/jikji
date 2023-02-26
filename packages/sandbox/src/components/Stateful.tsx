import { useState } from "react";
import { Layout } from "@jikji/react";

function Stateful() {
  return (
    <Layout disableSnapshot>
      <Counter />
    </Layout>
  );
}

function Counter() {
  const [counter, setCounter] = useState(1);
  return (
    <div style={{margin: 5}}>
      <button onClick={() => setCounter((x) => x + 1)}>Add</button>
      <span> Counter: {counter}</span>
    </div>
  );
}

export default Stateful;
