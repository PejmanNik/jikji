import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLayoutSuspension } from "@jikji/react";

async function fetchQuote() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  return await response.json();
}

function FetchTextFromAPI() {
  const { data, isLoading } = useQuery("quote", fetchQuote);
  const { release } = useLayoutSuspension("quote");

  console.log({ isLoading })
  useEffect(() => {
    if (!isLoading) {
      release()
    }
  }, [isLoading, release]);

  if (isLoading) {
    return <div>"Loading From API..."</div>;
  }

  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <h2>{data?.author ?? "?"}</h2>
      <p>{data?.content ?? "?"}</p>
    </div>
  );
}

export default FetchTextFromAPI;
