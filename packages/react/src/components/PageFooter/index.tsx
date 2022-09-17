import {ChildrenProps} from '../../core/reactTypeHelper';

function PageFooter({children}: ChildrenProps) {
  return <div style={{marginTop: 'auto'}}>{children}</div>;
}

export default PageFooter;
