import {LineInfo} from 'core/textNodeParser';

export function handleMultiColumnText(
  linesInfo: LineInfo[],
  columnCount: number,
  selectedLines: LineInfo[],
): [LineInfo[], LineInfo[]] {
  if (columnCount == 1) {
    return [linesInfo.slice(selectedLines.length), selectedLines];
  }

  const newSelectedLines = linesInfo.slice(
    0,
    Math.min(selectedLines.length * columnCount, linesInfo.length),
  );

  const newLinesInfo = linesInfo.slice(newSelectedLines.length);

  let y = linesInfo[selectedLines.length].y;
  for (const lineInfo of newLinesInfo) {
    lineInfo.y = y;
    y += lineInfo.height;
  }

  return [newLinesInfo, newSelectedLines];
}
