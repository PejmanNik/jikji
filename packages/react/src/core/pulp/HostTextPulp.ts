import type { Fiber } from 'react-reconciler';
import { getTextNodeLinesInfo, LineInfo } from 'core/textNodeParser';
import { PulpType, SplitPulp } from './pulpTypes';
import { handleMultiColumnText } from './multiColumnTextHelper';

export class HostTextPulp {
  readonly type: PulpType.HostText;
  readonly text: string;
  readonly domNode: Text;

  // split info
  readonly linesInfo: LineInfo[] = [];
  readonly nodeY: number;
  readonly height: number;
  readonly columnCount: number;
  readonly component: string | number;

  private constructor(
    text: string,
    linesInfo: LineInfo[],
    columnCount: number,
    domNode: Text,
  ) {
    this.type = PulpType.HostText;
    this.text = text;
    this.domNode = domNode;
    this.columnCount = columnCount;

    this.linesInfo = linesInfo;
    this.nodeY = linesInfo[0].y;
    this.height =
      linesInfo.reduce((sum, x) => (sum += x.height), 0) / columnCount;
    this.linesInfo = linesInfo;
    this.component = text;
  }

  public static fromChildrenProps(text: string, domNode: Text): HostTextPulp {
    const linesInfo = getTextNodeLinesInfo(domNode);
    const columnCount = this.getColumnCount(linesInfo);
    return new HostTextPulp(text, linesInfo, columnCount, domNode);
  }

  public static fromFiber(fiber: Fiber): HostTextPulp {
    const text = fiber.memoizedProps;
    const domNode = fiber.stateNode;
    const linesInfo = getTextNodeLinesInfo(fiber.stateNode);
    const columnCount = this.getColumnCount(linesInfo);

    return new HostTextPulp(text, linesInfo, columnCount, domNode);
  }

  private static getColumnCount(linesInfo: LineInfo[]) {
    return linesInfo.filter(x => x.y === linesInfo[0].y).length;
  }

  private update(linesInfo: LineInfo[]): HostTextPulp | null {
    if (linesInfo.length > 0) {
      const text = linesInfo.map(x => x.text).join('');
      return new HostTextPulp(text, linesInfo, this.columnCount, this.domNode);
    }

    return null;
  }

  split(selectedLines: LineInfo[]): SplitPulp<string | number> {
    const [alternateLinesInfo, mcSelectedLines] = handleMultiColumnText(
      this.linesInfo,
      this.columnCount,
      selectedLines,
    );
    const component = mcSelectedLines.map(x => x.text).join('');
    const pulp = this.update(alternateLinesInfo);

    return { pulp, component };
  }
}
