"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[1020],{5788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>g});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(5072),a=(r(1504),r(5788));const i={sidebar_position:1},o="Getting Started",c={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Get started by creating a new package.",source:"@site/docs/01-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Packaging - Overview",permalink:"/docs/category/packaging---overview"}},s={},l=[{value:"Obtain the source",id:"obtain-the-source",level:2},{value:"Obtain specifications files",id:"obtain-specifications-files",level:2},{value:"Generate debian directory",id:"generate-debian-directory",level:2},{value:"Build the package",id:"build-the-package",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Get started by ",(0,a.yg)("strong",{parentName:"p"},"creating a new package"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"debcrafter")," is a tool that simplifies the process of creating Debian packages."),(0,a.yg)("h2",{id:"obtain-the-source"},"Obtain the source"),(0,a.yg)("h2",{id:"obtain-specifications-files"},"Obtain specifications files"),(0,a.yg)("h2",{id:"generate-debian-directory"},"Generate debian directory"),(0,a.yg)("h2",{id:"build-the-package"},"Build the package"))}d.isMDXComponent=!0}}]);