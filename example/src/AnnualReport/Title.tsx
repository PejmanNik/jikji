import React from "react";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 style={{ fontSize: "98px ", margin: "10px 0 40px" }}>{children}</h1>
  );
}

export default Title;
