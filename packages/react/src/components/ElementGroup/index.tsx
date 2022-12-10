import useIdGenerator from 'components/useIdGenerator';
import {PluginPulp} from 'core/engine/plugin';
import {
  Children,
  ReactNode,
  isValidElement,
  createContext,
  useMemo,
} from 'react';

export interface TableProps {
  children: ReactNode;
}

function useElementGroupData() {}

function TableHeader({children}: TableProps) {
  return <>{children}</>;
}

function TableBody({children}: TableProps) {
  return <>{children}</>;
}

function TableFooter({children}: TableProps) {
  return <>{children}</>;
}

interface ElementGroupProps {
  children: ReactNode;
}

const ElementGroupContext = createContext({id: 0});

function Table({children}: ElementGroupProps) {
  validateChildren(children);

  const value = useMemo(() => ({
    id: useIdGenerator();
  }), []);

  return (
    <ElementGroupContext.Provider value={value}>
      {children}
    </ElementGroupContext.Provider>
  );
}

const validChildren: unknown[] = [TableHeader, TableBody, TableFooter];

function validateChildren(children: ReactNode) {
  Children.forEach(children, child => {
    if (!isValidElement(child) || !validChildren.includes(child.type)) {
      throw Error(
        `Component "${child}" is not valid as a child for ElementGroup, you can use only these components: ${validChildren
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((x: any) => x.name ?? x.render?.name)
          .join(',')}`,
      );
    }
  });
}

export default {
  ElementGroup: Table,
};
