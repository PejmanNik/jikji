function SequenceContent() {
  const content: [string, string, string][] = [];

  for (let i = 1; i < 250; i++) {
    content.push(
      ["Aphrodite" + (i * 3 - 2), "Brizo" + (i * 3 - 1), "Cronus" + (i * 3)],
    );
  }

  return (
    <div>
      <div>
        {content.map((r, i) =>
          i % 3 === 0 ? (
            <span key={i}>
              <span>{r[0]} </span>
              <span>{r[1]} </span>
              <span>{r[2]} </span>
            </span>
          ) : i % 4 === 0 ? (
            `${r[0]} ${r[1]} ${r[2]} `
          ) : (
            <span key={i}>{`${r[0]} ${r[1]} ${r[2]}`} </span>
          )
        )}
      </div>
    </div>
  );
}

export default SequenceContent;
