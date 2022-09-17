import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: "30px" }}>{children}</div>;
}

export default Page;
