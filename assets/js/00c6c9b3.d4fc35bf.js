"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[107],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1984:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(5773),r=(n(7378),n(5318));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must avoid adding content with ",(0,r.kt)("a",{parentName:"p",href:"../../avoid-dynamic-height"},"dynamic height")," to this component.\nit will break the layout logic system.")))}i.isMDXComponent=!0},4160:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(5773),r=(n(7378),n(5318));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This component must be used as a direct children of ",(0,r.kt)("a",{parentName:"p",href:"../section"},"Section"),"\ncomponent and only one instance of it must exist per section.")))}i.isMDXComponent=!0},41:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=n(5773),r=(n(7378),n(5318)),o=n(4160),i=n(1984);const p={sidebar_position:6},l="PageOverlay",c={unversionedId:"components/page/page-overlay",id:"components/page/page-overlay",title:"PageOverlay",description:"This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and only PageOverlayItem can be used as it children.",source:"@site/docs/components/page/page-overlay.md",sourceDirName:"components/page",slug:"/components/page/page-overlay",permalink:"/docs/components/page/page-overlay",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/page/page-overlay.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PageBreak",permalink:"/docs/components/page/page-break"},next:{title:"usePageInfo",permalink:"/docs/components/page/use-page-info"}},s={},m=[{value:"PageOverlayItem",id:"pageoverlayitem",level:2}],d={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pageoverlay"},"PageOverlay"),(0,r.kt)("p",null,"This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and ",(0,r.kt)("strong",{parentName:"p"},"only")," ",(0,r.kt)("a",{parentName:"p",href:"#pageoverlayitem"},"PageOverlayItem")," can be used as it children."),(0,r.kt)("inline-svg",{width:"340px",src:"/img/page/page-overlay.svg"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<PageOverlay>\n  <PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>\n</PageOverlay>\n")),(0,r.kt)(o.ZP,{mdxType:"SectionComponentAlert"}),(0,r.kt)(i.ZP,{mdxType:"AvoidDynamicHeightAlert"}),(0,r.kt)("h2",{id:"pageoverlayitem"},"PageOverlayItem"),(0,r.kt)("p",null,"Pages can continues several different overlay items, For each overlay item you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"PageOverlayItem")," component and provide a proper ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"},"z-index")," and desired content as children."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Is Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"zIndex"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"z-order of item")))))}g.isMDXComponent=!0}}]);