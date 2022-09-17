import PageOverlayItem from 'components/PageOverlayItem';
import {ComponentProps, ReactElement} from 'react';

export interface PageOverlayProps {
  children: ReactElement<ComponentProps<typeof PageOverlayItem>>;
}

function PageOverlay({children}: PageOverlayProps) {
  return <>{children}</>;
}

export default PageOverlay;
