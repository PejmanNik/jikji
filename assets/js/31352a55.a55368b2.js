"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[296],{5318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(5773),r=(n(7378),n(5318));const a={sidebar_position:11},i="Component Snapshot",p={unversionedId:"component-snapshot",id:"component-snapshot",title:"Component Snapshot",description:"By default, for rendering the children of PageContent the layout engine try to use the original component but in order to split a component into two parts for pagination, a Snapshot of the component will be created. This behavior causes the component to lose any logic or state. For a report, this behavior must not be problematic but if you need to keep the component logic and state, try to separate the stateful component with a minimal render element that is not subject to breaking/splitting between pages.",source:"@site/docs/component-snapshot.md",sourceDirName:".",slug:"/component-snapshot",permalink:"/docs/component-snapshot",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/component-snapshot.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Avoid Dynamic Height",permalink:"/docs/avoid-dynamic-height"},next:{title:"Report Root",permalink:"/docs/components/report/report-root"}},s={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component-snapshot"},"Component Snapshot"),(0,r.kt)("p",null,"By default, for rendering the children of ",(0,r.kt)("inlineCode",{parentName:"p"},"PageContent")," the layout engine ",(0,r.kt)("strong",{parentName:"p"},"try")," to use the original component but in order to split a component into two parts for pagination, a Snapshot of the component will be created. This behavior causes the component to lose any logic or state. For a report, this behavior must not be problematic but if you need to keep the component logic and state, try to separate the stateful component with a minimal render element that is not subject to breaking/splitting between pages."),(0,r.kt)("p",null,"The term ",(0,r.kt)("inlineCode",{parentName:"p"},"Snapshot")," does not mean an image. It is simply a dummy version of the react component that returns the same output and style as the original one but doesn't have the same type and, as a result, loses the state."),(0,r.kt)("inline-svg",{width:"700px",src:"/img/component-snapshot.svg"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nfunction ComponentX()\n{\n    const value = useSomeHook();\n    const margin = 1 * 10;\n\n    return <p style={{marginTop: `${margin}px`}}>\n        LONG LINE 1\n        LONG LINE 2\n        LONG LINE 3\n        SHORT LINE 4 + {value}\n    </p>\n}\n")),(0,r.kt)("p",null,"will be converted two:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nfunction ComponentXFragment1()\n{\n    return <p style={{marginTop: `10px`}}>\n        LONG LINE 1\n        LONG LINE 2\n    </p>\n}\n\nfunction ComponentXFragment2()\n{\n    return <p style={{marginTop: `10px`}}>\n        LONG LINE 3\n        SHORT LINE 4 + SOME VALUE\n    </p>\n}\n")))}m.isMDXComponent=!0}}]);