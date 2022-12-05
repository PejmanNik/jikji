"use strict";(self.webpackChunk_jikji_website=self.webpackChunk_jikji_website||[]).push([[920],{3408:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(3289);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(3147),o=(r(3289),r(3408));const a={sidebar_position:2},i="Route",p={unversionedId:"components/router/route",id:"components/router/route",title:"Route",description:"The Route component assign a path to a report, so you can server multiple reports in one project, All routes must be direct children of Browser Router.",source:"@site/docs/components/router/route.md",sourceDirName:"components/router",slug:"/components/router/route",permalink:"/docs/components/router/route",draft:!1,editUrl:"https://github.com/PejmanNik/jikji/edit/main/docs/docs/docs/components/router/route.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Browser Router",permalink:"/docs/components/router/browser-router"},next:{title:"Image",permalink:"/docs/components/utilize/image"}},l={},u=[{value:"Sample",id:"sample",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"route"},"Route"),(0,o.kt)("p",null,"The Route component assign a path to a report, so you can server multiple reports in one project, All routes must be direct children of ",(0,o.kt)("a",{parentName:"p",href:"./browser-router"},"Browser Router"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Route path="report-1" element={<Report1 />} isDefault />\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Is Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"path"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Route URL path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Route"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ComponentType"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The represented component (report) by the URL path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isDefault"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the current URL does not match any route's path, ",(0,o.kt)("a",{parentName:"p",href:"./browser-router"},"Browser Router")," will use the first Route, which has ",(0,o.kt)("inlineCode",{parentName:"p"},"isDefault=true"),".")),(0,o.kt)("h2",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  return (\n    <ReportView>\n      <ReportRoot>\n        <BrowserRouter>\n          <Route path="report-1" component={Report1} isDefault />\n          <Route path="report-2" component={Report2} />\n        </BrowserRouter>\n      </ReportRoot>\n    </ReportView>\n  );\n}\n\nfunction Report1() {\n  return (\n    <Section dimension={pageSize.A6} margin={pageMargin.Narrow}>\n      <PageContent>...Content...</PageContent>\n    </Section>\n  );\n}\n\nfunction Report2() {\n  return (\n    <Section dimension={pageSize.A5} margin={pageMargin.Narrow}>\n      <PageContent>...Content...</PageContent>\n    </Section>\n  );\n}\n')))}s.isMDXComponent=!0}}]);