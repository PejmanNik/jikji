import {ReactNode} from 'react';
import debugHelper from 'core/debugHelper';

function PrerenderPreview({children}: {children: ReactNode}) {
  if (!debugHelper.showPrerender) {
    return (
      <div
        style={{
          visibility: 'hidden',
          overflow: 'hidden',
        }}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}

export default PrerenderPreview;
