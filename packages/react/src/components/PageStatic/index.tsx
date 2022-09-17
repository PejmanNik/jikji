import {ReactNode} from 'react';

//TODO: implement the PageStatic component
// My initial idea was changing the page display from `flex` to `grid` and
// let the developer specify the grid template in this component and
// assign the content with PageStaticItem components to each area.

export interface PageStaticProps {
  children: ReactNode;
}

function PageStatic({children}: PageStaticProps) {
  return <div>{children}</div>;
}

export default PageStatic;
