import {ReactElement, Children} from 'react';
import {RouteProps} from './Route';

export interface BrowserRouterProps {
  children: ReactElement<RouteProps> | ReactElement<RouteProps>[];
}

function BrowserRouter({children}: BrowserRouterProps) {
  const path = window.location.pathname.replace(/^\/?([^\/]*)\/?$/, '$1');
  const childrenArray = Children.toArray(
    children,
  ) as ReactElement<RouteProps>[];

  const defaultRouter = childrenArray.find(x => x.props.isDefault);
  const activeRouter = childrenArray.find(x => x.props.path === path);
  const Component =
    activeRouter?.props.component ??
    defaultRouter?.props.component ??
    RouteError;

  return <Component />;
}

function RouteError() {
  return <>The path is invalid, please check your router specification</>;
}

export default BrowserRouter;
