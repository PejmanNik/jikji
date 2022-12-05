"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[686],{3408:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,y=l["".concat(u,".").concat(d)]||l[d]||m[d]||a;return n?o.createElement(y,s(s({ref:t},c),{},{components:n})):o.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(3147),r=(n(3289),n(3408));const a={sidebar_position:2},s="useLayoutSuspension",i={unversionedId:"components/utilize/use-layout-suspension",id:"components/utilize/use-layout-suspension",title:"useLayoutSuspension",description:"If your component needs to fetch data asynchronously, you need to suspend the layout engine because it will automatically start the parsing process immediately.",source:"@site/docs/components/utilize/use-layout-suspension.md",sourceDirName:"components/utilize",slug:"/components/utilize/use-layout-suspension",permalink:"/docs/components/utilize/use-layout-suspension",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/utilize/use-layout-suspension.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image",permalink:"/docs/components/utilize/image"},next:{title:"useFontLoadSuspension",permalink:"/docs/components/utilize/use-font-load-suspension"}},u={},p=[],c={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uselayoutsuspension"},"useLayoutSuspension"),(0,r.kt)("p",null,"If your component needs to fetch data asynchronously, you need to suspend the layout engine because it will automatically start the parsing process immediately."),(0,r.kt)("p",null,"For instance, calling an API endpoint as an asynchronous operation, you need to suspend the layout engine until the component receives the response from API and renders it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const key = "static key";\nconst { release } = useLayoutSuspension(key);\n')),(0,r.kt)("p",null,"The hook accepts a static key as parameter; it is expected that this key not changed even after ",(0,r.kt)("strong",{parentName:"p"},"mount")," and ",(0,r.kt)("strong",{parentName:"p"},"unmount")," the component. So avoid using random values for this key; for instance, in the ",(0,r.kt)("a",{parentName:"p",href:"./image"},"Image")," component, the key used for calling the hook is the image ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," property."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLayoutSuspension")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," function that must be called after the asynchronous operation gets completed in order to release the suspension."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Components will ",(0,r.kt)("strong",{parentName:"p"},"mount")," and ",(0,r.kt)("strong",{parentName:"p"},"unmount")," during the layout process at least two times. In order to have better performance, it is better to use a library like ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," that cache the API response. So the component only gets the data one time per layout."),(0,r.kt)("p",{parentName:"admonition"},"This hook only suspends the layout process ",(0,r.kt)("strong",{parentName:"p"},"once")," per ",(0,r.kt)("strong",{parentName:"p"},"key")," regardless of the number of mount and unmount.")))}l.isMDXComponent=!0}}]);