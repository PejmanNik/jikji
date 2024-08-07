"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[264],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,p(p({ref:t},l),{},{components:n})):o.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4160:(e,t,n)=>{n.d(t,{ZP:()=>p});var o=n(5773),r=(n(7378),n(5318));const a={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This component must be used as a direct children of ",(0,r.kt)("a",{parentName:"p",href:"../section"},"Section"),"\ncomponent and only one instance of it must exist per section.")))}p.isMDXComponent=!0},1150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var o=n(5773),r=(n(7378),n(5318)),a=n(4160);const p={sidebar_position:2},i="PageContent",c={unversionedId:"components/page/page-content",id:"components/page/page-content",title:"PageContent",description:"This is the main component that must contain the content of the report. The pagination and layout will apply to this component content.",source:"@site/docs/components/page/page-content.md",sourceDirName:"components/page",slug:"/components/page/page-content",permalink:"/docs/components/page/page-content",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/page/page-content.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PageHeader",permalink:"/docs/components/page/page-header"},next:{title:"PageFooter",permalink:"/docs/components/page/page-footer"}},s={},l=[],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagecontent"},"PageContent"),(0,r.kt)("p",null,"This is the main component that must contain the content of the report. The pagination and layout will apply to this component content."),(0,r.kt)("inline-svg",{width:"440px",src:"/img/page/page-content.svg"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<PageContent>...report content...</PageContent>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The children components of ",(0,r.kt)("inlineCode",{parentName:"p"},"PageContent")," are subject to ",(0,r.kt)("a",{parentName:"p",href:"../../component-snapshot"},"ComponentSnapshot"),".")),(0,r.kt)(a.ZP,{mdxType:"SectionComponentAlert"}))}u.isMDXComponent=!0}}]);