import { ComponentProps, ReactNode} from 'react';

export interface TableProps {
  children: ReactNode;
}

function Table({children, ...props}: ComponentProps<'table'>) {
  return <table {...props}>{children}</table>;
}


export default Table;
