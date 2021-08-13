"use strict";(self.webpackChunkarbor_vote_docs=self.webpackChunkarbor_vote_docs||[]).push([[128],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return c}});var n=r(2263),o=r(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,u=void 0!==c&&c,a=i.absolute,l=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(i,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1143:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=r(4996),u=["components"],a={slug:"/",title:"Introduction",sidebar_label:"Introduction"},l=void 0,s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Welcome to the ArborVote docs where you find a documentation of the voting algorithm with",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/ArborVote-docs/docs/",version:"current",lastUpdatedAt:1627402571,formattedLastUpdatedAt:"7/27/2021",frontMatter:{slug:"/",title:"Introduction",sidebar_label:"Introduction"},sidebar:"someSidebar",next:{title:"Stages",permalink:"/ArborVote-docs/docs/stages"}},f=[],d={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("link",{rel:"stylesheet",href:(0,c.Z)("katex/katex.min.css")}),(0,i.kt)("img",{alt:"Image",src:(0,c.Z)("img/LogoWithBackgroundMedium.png")}),(0,i.kt)("p",null,"Welcome to the ArborVote docs where you find a documentation of the voting algorithm with\nits mechanics and economic incentivization strategies."))}p.isMDXComponent=!0}}]);