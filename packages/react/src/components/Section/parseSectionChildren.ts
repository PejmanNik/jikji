import { Children, isValidElement, ReactElement, ReactNode } from 'react';
import PageContent from 'components/PageContent';
import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';
import PageOverlay from 'components/PageOverlay';
import PageStatic from 'components/PageStatic';
import SectionFooter from 'components/SectionFooter';
import SectionHeader from 'components/SectionHeader';
import { isInstanceOfComponent } from 'core/reactTypeHelper';


const validChildren = [
  PageContent,
  PageHeader,
  PageFooter,
  PageStatic,
  PageOverlay,
  SectionHeader,
  SectionFooter,
];

export interface PageElement {
  content: ReactElement;
  header?: ReactElement;
  footer?: ReactElement;
  static?: ReactElement;
  overlay?: ReactElement;
}

export interface SectionElement {
  header?: ReactElement;
  footer?: ReactElement;
}

export type SectionChildren = {
  pageElements: PageElement;
  sectionElements: SectionElement;
};

function getComponentName(component: unknown): string {
  if (typeof component === 'function')
    return component.name;
  else if (component && typeof component === 'object' &&
    'render' in component) {
    //forward ref component
    return getComponentName(component.render);
  }

  return "Unknown"
}

function parseSectionChildren(children: ReactNode): SectionChildren {
  const pageElements: Partial<PageElement> = {};
  const sectionElements: SectionElement = {};

  Children.forEach(children, child => {
    if (!isValidElement(child))
      throw Error(`Component "${child}" is not valid React components`);

    const component = validChildren.find(x => isInstanceOfComponent(child.type, x));
    if (!component) {
      throw Error(
        `Component "${getComponentName(child.type)}" is not valid as a child for Section, 
        you can use only these components: ${validChildren
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((x: any) => x.name ?? x.render?.name)
          .join(',')}`,
      );
    }

    switch (component) {
      case SectionHeader:
        sectionElements.header = child;
        break;

      case SectionFooter:
        sectionElements.footer = child;
        break;

      case PageContent:
        pageElements.content = child;
        break;

      case PageHeader:
        pageElements.header = child;
        break;

      case PageFooter:
        pageElements.footer = child;
        break;

      case PageStatic:
        pageElements.static = child.props.children;
        break;

      case PageOverlay:
        pageElements.overlay = child.props.children;
        break;
    }
  });

  if (!pageElements.content) {
    throw Error('PageContent component is a required child for Section');
  }

  return {
    pageElements: pageElements as PageElement,
    sectionElements,
  };
}

export default parseSectionChildren;



