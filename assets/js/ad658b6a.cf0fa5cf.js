"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[103],{3408:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(3289);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(744),o=r(4690),i=(r(3289),r(3408)),a=["components"],s={sidebar_position:10,title:"CSR vs SSG"},c="Client Side Rendering VS Server Side Generation",p={unversionedId:"csr-vs-ssg",id:"csr-vs-ssg",title:"CSR vs SSG",description:"Client Side Rendering",source:"@site/docs/csr-vs-ssg.md",sourceDirName:".",slug:"/csr-vs-ssg",permalink:"/docs/csr-vs-ssg",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/csr-vs-ssg.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"CSR vs SSG"},sidebar:"tutorialSidebar",previous:{title:"Plugin",permalink:"/docs/plugin"},next:{title:"Avoid Dynamic Height",permalink:"/docs/avoid-dynamic-height"}},l={},u=[{value:"Client Side Rendering",id:"client-side-rendering",level:2},{value:"Server Side Generation",id:"server-side-generation",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client-side-rendering-vs-server-side-generation"},"Client Side Rendering VS Server Side Generation"),(0,i.kt)("h2",{id:"client-side-rendering"},"Client Side Rendering"),(0,i.kt)("p",null,"This library is used as part of your web application in this mode. You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/report/report-view"},"ReportView")," component to provide a similar styling to Chrome's print preview style for user.The layout engine splits and paginates your content during the rendering and will show print-ready content to the user. It can easily be converted to PDF by browser."),(0,i.kt)("p",null,"In the CSR mode, everything will happen in the client browser, Currently, there is no way to output a PDF file directly, and it is up to the browser and the user to choose the ",(0,i.kt)("em",{parentName:"p"},"Save To PDF")," option in the browser."),(0,i.kt)("h2",{id:"server-side-generation"},"Server Side Generation"),(0,i.kt)("p",null,"In this mode, you need two separate projects that are hosted on a server. The first project is a React application that contains your reports. You can skip the ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/report/report-view"},"ReportView")," component as there will be no preview. You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/router/browser-router"},"BrowserRouter")," to organize reports, and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/inject-json-data"},"Inject Json Data")," component to send data as JSON to React components directly. Then you need to build the project to a static HTML + CSS + Js file."),(0,i.kt)("p",null,"The second project as a server application, uses the ",(0,i.kt)("a",{parentName:"p",href:"generator"},"Generator")," library and needs access to the react static output files (first project) to render the report (directly or served version) and convert it to PDF, Image, or HTML file and will you have complete control in this mode over the output files."))}f.isMDXComponent=!0}}]);