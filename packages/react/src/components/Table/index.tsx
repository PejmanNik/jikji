import {ReactNode} from 'react';

export interface TableProps {
  children: ReactNode;
}

function Table({children}: TableProps) {
  return <>{children}</>;
}

export default Table;
