import {CSSProperties, forwardRef, ReactNode, Ref, useContext} from 'react';
import {SectionContext} from 'components/Section/context';
import {shorthand} from 'core/cssHelper';
import {PageContext} from './context';

interface PageProps {
  size?: string;
  content: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  overlay?: ReactNode;
  pageNumber: number;
  totalPages: number;
}

function Page(
  {content, header, footer, overlay, pageNumber, totalPages}: PageProps,
  ref: Ref<HTMLDivElement>,
) {
  const {dimension, margin} = useContext(SectionContext);

  const pageStyle: CSSProperties = {
    display: 'flex',
    width: dimension.width,
    height: dimension.height,
    maxHeight: dimension.height,
    position: 'relative',
    flexDirection: 'column',
    padding: shorthand(margin),
    zIndex: 1,
  };

  const pageContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0,
    height: '100%',
  };

  return (
    <PageContext.Provider value={{pageNumber, totalPages}}>
      <div className="jikji page" style={pageStyle}>
        {overlay}
        {header}
        <div
          className="jikji page-container"
          style={pageContainerStyle}
          ref={ref}>
          {content}
        </div>
        {footer}
      </div>
    </PageContext.Provider>
  );
}

export default forwardRef(Page);
