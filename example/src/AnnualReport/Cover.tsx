import { usePageInfo } from "@jikji/react";

function Cover() {
  const { pageDimension } = usePageInfo();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: pageDimension.height,
      }}
    >
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          height: "65%",
          position: "relative",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--secondary-color)",
            width: "36px",
            height: "20%",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        ></div>
        <div
          style={{
            marginTop: "auto",
            padding: "22px",
          }}
        >
          <h1 style={{ fontSize: "80px ", marginBottom: "10px" }}>
            Annual Report
          </h1>
          <h2
            style={{
              fontSize: "60px",
              fontWeight: "lighter",
              margin: "0 0 20px",
            }}
          >
            2022
          </h2>
        </div>
      </div>
      <div
        style={{
          marginTop: "auto",
          padding: "22px",
        }}
      >
        <h3>Mewo Company</h3>
        <p>Helsinki - Finland</p>
      </div>
    </div>
  );
}

export default Cover;
