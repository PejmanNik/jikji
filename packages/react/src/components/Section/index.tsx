import {ReactNode, useEffect, useMemo} from 'react';
import type {PageDimension, PageMargin, PageOrientation} from 'core/pageType';
import {pageMargin} from 'core/pageConst';
import adjustDimension from 'core/adjustDimension';
import useIdGenerator from 'components/useIdGenerator';
import {SectionContext} from './context';
import SectionLayoutInitializer from './SectionLayoutInitializer';

export interface SectionProps {
  children: ReactNode;
  dimension: PageDimension;
  orientation?: PageOrientation;
  margin?: PageMargin;
}

function Section({
  children,
  dimension,
  margin = pageMargin.None,
  orientation = 'portrait',
}: SectionProps) {
  const id = useIdGenerator();
  const sectionName = `section-${id}`;

  const sectionInfo = useMemo(
    () => ({
      id,
      dimension: adjustDimension(dimension, orientation),
      margin,
    }),
    [id, dimension, orientation, margin],
  );

  //TODO: fix the issue with supporting sections with different size/orations
  // probably related to: https://bugs.chromium.org/p/chromium/issues/detail?id=1160301
  useEffect(() => {
    const style = document.createElement('style');

    // #${sectionName} {
    //   page: ${sectionName}
    // }
    style.appendChild(
      document.createTextNode(`
    @page { 
      margin: none; 
      size:${sectionInfo.dimension.width} ${sectionInfo.dimension.height}; 
      width:${sectionInfo.dimension.width};
      height:${sectionInfo.dimension.height};
    }
    `),
    );

    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [sectionInfo, sectionName]);

  //in order to restart the init page builder and suspension handler
  //we will pass a new key each time to force react to unmount
  //and mount a new component on each section re-render
  const key = Date.now();

  return (
    <div className="jikji section" id={sectionName}>
      <SectionContext.Provider value={sectionInfo}>
        <SectionLayoutInitializer key={key}>
          {children}
        </SectionLayoutInitializer>
      </SectionContext.Provider>
    </div>
  );
}

export default Section;
