import {ChildrenProps} from 'core/reactTypeHelper';
import './styles.css';

function ReportView({children}: ChildrenProps) {
  return <div className="jikji view">{children}</div>;
}

export default ReportView;
