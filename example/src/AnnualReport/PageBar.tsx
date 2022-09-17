function PageBar() {
  return (
    <div
      style={{
        width: 19,
        height: "65%",
        position: "absolute",
        bottom: 0,
        right: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "var(--primary-color)",
          width: "inherit",
          height: "85%",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "var(--secondary-color)",
          width: "inherit",
          height: "15%",
        }}
      ></div>
    </div>
  );
}

export default PageBar;
