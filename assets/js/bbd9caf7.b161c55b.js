"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[570],{3408:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(744),o=n(4690),i=(n(3289),n(3408)),c=["components"],a={sidebar_position:2},s="Section Header",p={unversionedId:"components/section/section-header",id:"components/section/section-header",title:"Section Header",description:"This component will render the child element at the top of the first page in the section, It will place before the first page PageHeader.",source:"@site/docs/components/section/section-header.md",sourceDirName:"components/section",slug:"/components/section/section-header",permalink:"/docs/components/section/section-header",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/section/section-header.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Section",permalink:"/docs/components/section/"},next:{title:"Section Footer",permalink:"/docs/components/section/section-footer"}},l={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"section-header"},"Section Header"),(0,i.kt)("p",null,"This component will render the child element at the top of the first page in the section, It will place before the first page ",(0,i.kt)("a",{parentName:"p",href:"../page/page-header"},"PageHeader"),"."),(0,i.kt)("inline-svg",{width:"340px",src:"/img/page/section-header.svg"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<SectionHeader>...</SectionHeader>\n")),(0,i.kt)("p",null,"In order to access to section and page information you can use ",(0,i.kt)("a",{parentName:"p",href:"../page/use-page-info"},"usePageInfo")," hook."))}d.isMDXComponent=!0}}]);