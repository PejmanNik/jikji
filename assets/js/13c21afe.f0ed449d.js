"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[673],{3408:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5960:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(744),a=n(4690),o=(n(3289),n(3408)),i=["components"],p={sidebar_position:9},l="Plugin",c={unversionedId:"plugin",id:"plugin",title:"Plugin",description:"A plugin can customize the layout engine; each plugin can only affect one type of react component. The component property will provide the expected component for this plugin. The library call corresponding property of plugins for each component by order in the building layout tree stage and splitting system stage.",source:"@site/docs/plugin.md",sourceDirName:".",slug:"/plugin",permalink:"/docs/plugin",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/plugin.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Inject Json Data",permalink:"/docs/inject-json-data"},next:{title:"CSR vs SSG",permalink:"/docs/csr-vs-ssg"}},u={},s=[{value:"Properties",id:"properties",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin"},"Plugin"),(0,o.kt)("p",null,"A plugin can customize the layout engine; each plugin can only affect one type of react component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," property will provide the expected component for this plugin. The library call corresponding property of plugins for each component by order in the building layout tree stage and splitting system stage."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a very advanced and core topic for this library, and there is a slight chance that you are going to need it. The document is very shallow and straightforward, so you need to check the source code. Some interior features of the library use plugin to work. For instance, you can check ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PageBreak")," component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Plugin } from "@jikji/react";\n\nexport function Awesome()\n{\n    return <div>Awesome Component</div>;\n}\n\nexport const awesomePlugin: Plugin = {\n  order: 0,\n  component: Awesome;\n  build: (pulp) => {\n    ...\n  };\n  split: ( splitNodeInfo, pulp) => {\n    ...\n  }\n};\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Is Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"order"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The order for applying plugin over one component, Default: 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"component"),(0,o.kt)("td",{parentName:"tr",align:"left"},"React.ElementType"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:"left"},"React component that this plugin will be applied on it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"build"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Use it for overwriting the pulp building logic")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"split"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Use it for overwriting the pulp splitting logic")))),(0,o.kt)("p",null,"A Pulp (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pulp_(paper)"},"pulp")," is the major raw material used in papermaking) is a transformed object from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acdlite/react-fiber-architecture"},"React Fiber")," and is the core model behind this library. Pulps make the pages and have the ability to split into two parts."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Pulp")," represent ",(0,o.kt)("inlineCode",{parentName:"p"},"HostTextPulp")," (string or number component) or ",(0,o.kt)("inlineCode",{parentName:"p"},"HostComponentPulp")," (native HTML elements) or ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentPulp")," (React components) class. All Pulp implementations are immutable, and you need to create a new instance in order to update it"))}d.isMDXComponent=!0}}]);