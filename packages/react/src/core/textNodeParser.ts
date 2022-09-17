export interface LineInfo {
  y: number;
  height: number;
  endY: number;
  text: string;
}

/* the actual value for height is not accurate,
 * it does not include the space between this line and the after
 *
 *  ───────────  TOP
 *  xxxxxxxxxxx
 *  ─────────── BOTTOM
 *
 *  ──────────── TOP
 *  xxxxxxxxxxx
 *  ────────────
 */
export function adjustLineHeight(linesInfo: LineInfo[]) {
  let i = 0;
  for (; i < linesInfo.length - 1; i++) {
    if (linesInfo[i + 1].y > linesInfo[i].y) {
      // add the line space to line heights
      linesInfo[i].height +=
        linesInfo[i + 1].y - (linesInfo[i].y + linesInfo[i].height);

      linesInfo[i].endY = linesInfo[i].y + linesInfo[i].height;
    }
  }

  // last line
  linesInfo[i].endY = linesInfo[i].y + linesInfo[i].height;

  return linesInfo;
}

export function getTextNodeLinesInfo(node: ChildNode) {
  const range = document.createRange();
  range.setStart(node, 0);

  const lineHeight = range.getBoundingClientRect().height;
  const linesInfo: LineInfo[] = [];

  const textLength = node.textContent?.length ?? 0;
  let currentPos = 1;

  while (currentPos < textLength) {
    range.setEnd(node, currentPos);

    const rangeHeight = range.getBoundingClientRect().height;
    if (rangeHeight - lineHeight > 1) {
      range.setEnd(node, currentPos - 1);

      const lineRect = range.getBoundingClientRect();
      linesInfo.push({
        height: lineRect.height,
        y: lineRect.y,
        text: range.toString(),
        endY: 0,
      });
      range.setStart(node, currentPos - 1);
    }

    currentPos++;
  }

  range.setEndAfter(node);

  const lineRect = range.getBoundingClientRect();
  linesInfo.push({
    height: lineRect.height,
    y: lineRect.y,
    text: range.toString(),
    endY: 0,
  });

  return adjustLineHeight(linesInfo);
}
