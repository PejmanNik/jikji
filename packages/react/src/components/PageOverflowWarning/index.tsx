import log, { LogFlag } from 'core/log';
import { RefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PageOverflowWarningProps {
  sectionRef: RefObject<HTMLDivElement>;
}

interface Rect {
  height: number;
  width: number;
  top: number;
  left: number;
}

function isValidNodeElement(node: Node): node is Element {
  return node.nodeType === 1;
}

function PageOverflowWarning({ sectionRef }: PageOverflowWarningProps): React.ReactPortal | null {
  const [rects, setRects] = useState<Rect[]>([]);
  useEffect(() => {
    if (!sectionRef.current) return;

    const rects: Rect[] = [];
    sectionRef.current.childNodes.forEach((page, pageIndex) => {

      if (!isValidNodeElement(page)) return;

      page.childNodes.forEach(item => {
        if (
          isValidNodeElement(item) &&
          item.scrollHeight - item.clientHeight > 3
        ) {
          // prettier-ignore
          log.error('overflow detected', { pageIndex, text: item.innerHTML }, [LogFlag.Overflow]);

          const rect = item.getBoundingClientRect();
          rects.push({
            height: item.scrollHeight - rect.height,
            width: rect.width,
            left: rect.x,
            top: rect.y + window.scrollY + rect.height,
          });
        }
      });
    });

    setRects(rects);
  }, [sectionRef]);

  if (rects.length === 0) return null;

  const node = (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        zIndex: 10,
      }}>
      {rects.map((r, i) => (
        <div
          key={i}
          className="jikji overflow-warning"
          style={{
            position: 'absolute',
            ...r,
          }}
        />
      ))}
    </div>
  );

  return createPortal(node, document.body);
}

export default PageOverflowWarning;
