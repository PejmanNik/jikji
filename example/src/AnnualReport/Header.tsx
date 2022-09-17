import { usePageInfo } from "@jikji/react";

const height = "30px";

function Header() {
  const { pageNumber } = usePageInfo();
  return (
    <div style={{ display: "flex", padding: "30px 0" }}>
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          width: "100px",
          height: height,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "var(--secondary-color)",
          width: "66px",
          height: height,
          margin: "0 6px",
          textAlign: "center",
          padding: 5,
        }}
      >
        Page {pageNumber}
      </div>
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          width: "35px",
          height: height,
        }}
      ></div>
    </div>
  );
}

export default Header;
