"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[963],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,h=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(5773),o=(n(7378),n(5318));const i={sidebar_position:11},a="Avoid Dynamic Height",s={unversionedId:"avoid-dynamic-height",id:"avoid-dynamic-height",title:"Avoid Dynamic Height",description:"This library uses two-phase rendering to create a report. The first render (it is not visible to the user) uses to get elements' dimensions and measure layouts; then the layout engine will split the elements based on page sizes and create new components. The second phase will render this new split and paginated components and will add page and section's static parts like header and footer.",source:"@site/docs/avoid-dynamic-height.md",sourceDirName:".",slug:"/avoid-dynamic-height",permalink:"/docs/avoid-dynamic-height",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/avoid-dynamic-height.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"CSR vs SSG",permalink:"/docs/csr-vs-ssg"},next:{title:"Component Snapshot",permalink:"/docs/component-snapshot"}},c={},p=[],d={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avoid-dynamic-height"},"Avoid Dynamic Height"),(0,o.kt)("p",null,"This library uses two-phase rendering to create a report. The first render (it is not visible to the user) uses to get elements' dimensions and measure layouts; then the layout engine will split the elements based on page sizes and create new components. The second phase will render this new split and paginated components and will add page and section's static parts like header and footer."),(0,o.kt)("inline-svg",{width:"700px",src:"/img/two-phase-rendering.svg"}),(0,o.kt)("p",null,"During these phase components get mount ",(0,o.kt)("strong",{parentName:"p"},"->")," unmount ",(0,o.kt)("strong",{parentName:"p"},"->")," mount again. Components that uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/page/use-page-info"},"usePageInfo")," receive page number and total page only in the second render. Also, some dynamic content like date-time or random content can have different values between two phases; You must consider enough space for such use cases. Components dimensions ",(0,o.kt)("strong",{parentName:"p"},"MUST NOT")," changed during these two phases. Otherwise, your report will contain overlap and a broken layout."))}l.isMDXComponent=!0}}]);