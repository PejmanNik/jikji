"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[107],{3408:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6270:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(744),a=n(4690),o=(n(3289),n(3408)),i=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You must avoid adding content with ",(0,o.kt)("a",{parentName:"p",href:"../../avoid-dynamic-height"},"dynamic height")," to this component.\nit will break the layout logic system.")))}c.isMDXComponent=!0},6777:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(744),a=n(4690),o=(n(3289),n(3408)),i=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This component must be used as a direct children of ",(0,o.kt)("a",{parentName:"p",href:"../section"},"Section"),"\ncomponent and only one instance of it must exist per section.")))}c.isMDXComponent=!0},10:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=n(744),a=n(4690),o=(n(3289),n(3408)),i=n(6777),p=n(6270),c=["components"],l={sidebar_position:6},s="PageOverlay",m={unversionedId:"components/page/page-overlay",id:"components/page/page-overlay",title:"PageOverlay",description:"This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and only PageOverlayItem can be used as it children.",source:"@site/docs/components/page/page-overlay.md",sourceDirName:"components/page",slug:"/components/page/page-overlay",permalink:"/docs/components/page/page-overlay",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/page/page-overlay.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PageBreak",permalink:"/docs/components/page/page-break"},next:{title:"usePageInfo",permalink:"/docs/components/page/use-page-info"}},u={},d=[{value:"PageOverlayItem",id:"pageoverlayitem",level:2}],g={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pageoverlay"},"PageOverlay"),(0,o.kt)("p",null,"This component is responsible for providing a overlay item for page, and will repeat for each page; This component act as as group wrapper and ",(0,o.kt)("strong",{parentName:"p"},"only")," ",(0,o.kt)("a",{parentName:"p",href:"#pageoverlayitem"},"PageOverlayItem")," can be used as it children."),(0,o.kt)("inline-svg",{width:"340px",src:"/img/page/page-overlay.svg"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<PageOverlay>\n  <PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>\n</PageOverlay>\n")),(0,o.kt)(i.ZP,{mdxType:"SectionComponentAlert"}),(0,o.kt)(p.ZP,{mdxType:"AvoidDynamicHeightAlert"}),(0,o.kt)("h2",{id:"pageoverlayitem"},"PageOverlayItem"),(0,o.kt)("p",null,"Pages can continues several different overlay items, For each overlay item you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"PageOverlayItem")," component and provide a proper ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"},"z-index")," and desired content as children."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<PageOverlayItem zIndex={-1}>Report watermark</PageOverlayItem>\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Is Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"zIndex"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:"left"},"z-order of item")))))}f.isMDXComponent=!0}}]);