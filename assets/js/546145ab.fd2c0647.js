"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[254],{3408:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(3289);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||u;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<u;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1509:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(744),o=r(4690),u=(r(3289),r(3408)),a=["components"],s={sidebar_position:1},i="Browser Router",c={unversionedId:"components/router/browser-router",id:"components/router/browser-router",title:"Browser Router",description:"In order to serve multiple reports in one React project, you can use this component to separate them by routes. this is only useful for Server side generator. The BrowserRouter must be used as the parent of Route components.",source:"@site/docs/components/router/browser-router.md",sourceDirName:"components/router",slug:"/components/router/browser-router",permalink:"/docs/components/router/browser-router",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/router/browser-router.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"usePageInfo",permalink:"/docs/components/page/use-page-info"},next:{title:"Route",permalink:"/docs/components/router/route"}},p={},l=[],f={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"browser-router"},"Browser Router"),(0,u.kt)("p",null,"In order to serve multiple reports in one React project, you can use this component to separate them by routes. this is only useful for ",(0,u.kt)("a",{parentName:"p",href:"../../generator"},"Server side generator"),". The ",(0,u.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," must be used as the parent of ",(0,u.kt)("a",{parentName:"p",href:"./route"},"Route")," components."),(0,u.kt)("p",null,"Only one instance of it must be used, and the suggested place for it is before the ",(0,u.kt)("a",{parentName:"p",href:"../section"},"Section")," component. please check the ",(0,u.kt)("a",{parentName:"p",href:"./route?#sample"},"sample")," usage at the end of ",(0,u.kt)("a",{parentName:"p",href:"./route"},"Route")," component documentation."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"<BrowserRouter>\n    <Route ... />\n    <Route ... />\n    <Route ... />\n</BrowserRouter>\n")))}m.isMDXComponent=!0}}]);