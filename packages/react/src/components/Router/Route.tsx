import {ComponentType} from 'react';

export interface RouteProps {
  path: string;
  isDefault?: boolean;
  component: ComponentType;
}

// This component only keep different route states,
// the BrowserRouter uses this info to render the element
function Route({}: RouteProps) {
  return null;
}

export default Route;
