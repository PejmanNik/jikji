import {ReactNode} from 'react';
import {LayoutOptions} from './LayoutComponentPulp';

export interface LayoutProps extends Partial<LayoutOptions> {
  children: ReactNode;
}

function Layout({children}: LayoutProps) {
  return <>{children}</>;
}

export default Layout;
