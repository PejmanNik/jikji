import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLayoutSuspension } from "@jikji/react";

async function fetchQuote() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  return await response.json();
}

function QuoteFromAPI() {
  const { data, isLoading } = useQuery("quote", fetchQuote);
  const { release } = useLayoutSuspension("quote");

  useEffect(() => {
    if (!isLoading) {
      release();
    }
  }, [isLoading, release]);

  if (isLoading) {
    return null;
  }

  return (
    <div
      style={{
        border: "solid rgb(255 214 0) 6px",
        padding: 10,
      }}
    >
      <h2>{data.author}</h2>
      <p>{data.content}</p>
    </div>
  );
}

export default QuoteFromAPI;
