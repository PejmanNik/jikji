"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[747],{3408:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(744),o=n(4690),i=(n(3289),n(3408)),a=["components"],u={sidebar_position:1},s="Image",c={unversionedId:"components/utilize/image",id:"components/utilize/image",title:"Image",description:"This component uses useLayoutSuspension hook to provide a reliable way to load images in the reports. It will accept all standard properties of the HTML img element. So you can easily replace it with the build-in image component.",source:"@site/docs/components/utilize/image.md",sourceDirName:"components/utilize",slug:"/components/utilize/image",permalink:"/docs/components/utilize/image",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/utilize/image.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Route",permalink:"/docs/components/router/route"},next:{title:"useLayoutSuspension",permalink:"/docs/components/utilize/use-layout-suspension"}},l={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image"},"Image"),(0,i.kt)("p",null,"This component uses ",(0,i.kt)("a",{parentName:"p",href:"use-layout-suspension"},"useLayoutSuspension")," hook to provide a reliable way to load images in the reports. It will accept all standard properties of the HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," element. So you can easily replace it with the build-in image component."),(0,i.kt)("p",null,"In a nutshell, it will suspend the layout engine until the image load completely, so the pagination and layouting will be applied considering the image dimensions and position. for more information you can check ",(0,i.kt)("a",{parentName:"p",href:"use-layout-suspension"},"useLayoutSuspension"),"."))}f.isMDXComponent=!0}}]);