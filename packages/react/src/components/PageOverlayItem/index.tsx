import {SectionContext} from 'components/Section/context';
import {ReactNode, useContext} from 'react';

export interface PageOverlayItemProps {
  zIndex: number;
  children: ReactNode;
}

function PageOverlayItem({zIndex, children}: PageOverlayItemProps) {
  const {dimension, margin} = useContext(SectionContext);

  return (
    <div
      style={{
        zIndex,
        position: 'absolute',
        top: margin.top,
        left: margin.left,
        width: `calc(${dimension.width} - ${margin.right} - ${margin.left})`,
        height: `calc(${dimension.height} - ${margin.top} - ${margin.bottom})`,
        overflow: 'hidden',
      }}>
      {children}
    </div>
  );
}

export default PageOverlayItem;
