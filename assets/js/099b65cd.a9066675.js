"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[426],{3408:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(a,".").concat(d)]||f[d]||l[d]||s;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var o=n(744),r=n(4690),s=(n(3289),n(3408)),i=["components"],u={sidebar_position:3},a="useFontLoadSuspension",c={unversionedId:"components/utilize/use-font-load-suspension",id:"components/utilize/use-font-load-suspension",title:"useFontLoadSuspension",description:"This hook uses useLayoutSuspension hook to suspend the layout engine until all fonts are loaded by the browser. If you used a custom font, you need to call this hook under the ReportRoot component at any level.",source:"@site/docs/components/utilize/use-font-load-suspension.md",sourceDirName:"components/utilize",slug:"/components/utilize/use-font-load-suspension",permalink:"/docs/components/utilize/use-font-load-suspension",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/utilize/use-font-load-suspension.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useLayoutSuspension",permalink:"/docs/components/utilize/use-layout-suspension"},next:{title:"Layout",permalink:"/docs/components/utilize/layout"}},p={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usefontloadsuspension"},"useFontLoadSuspension"),(0,s.kt)("p",null,"This hook uses ",(0,s.kt)("a",{parentName:"p",href:"./use-layout-suspension"},"useLayoutSuspension")," hook to suspend the layout engine until all fonts are loaded by the browser. If you used a custom font, you need to call this hook under the ",(0,s.kt)("a",{parentName:"p",href:"../report/report-root"},"ReportRoot")," component at any level."))}d.isMDXComponent=!0}}]);