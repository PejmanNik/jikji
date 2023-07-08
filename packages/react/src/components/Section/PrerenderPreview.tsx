import {CSSProperties, ReactNode} from 'react';
import debugHelper from 'core/debugHelper';

export interface PrerenderPreviewProps {
  children: ReactNode;
  isSplitted: boolean;
}

function PrerenderPreview({children, isSplitted}: PrerenderPreviewProps) {
  const style: CSSProperties = {
    visibility: debugHelper.showPrerender ? 'visible' : 'hidden',
    display: isSplitted && debugHelper.keepPrerender ? 'none' : 'block',
    overflow: 'hidden',
  };

  if (!isSplitted || debugHelper.keepPrerender) {
    return <div style={style}>{children}</div>;
  }

  return null;
}

export default PrerenderPreview;
