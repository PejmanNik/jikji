import {forwardRef, Ref} from 'react';
import {ChildrenProps} from '../../core/reactTypeHelper';

function PageContent({children}: ChildrenProps, ref: Ref<HTMLDivElement>) {
  return <div ref={ref}>{children}</div>;
}

export default forwardRef(PageContent);
