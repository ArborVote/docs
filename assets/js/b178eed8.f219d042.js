"use strict";(self.webpackChunkarbor_vote_docs=self.webpackChunkarbor_vote_docs||[]).push([[98],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,b=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,s=void 0!==i&&i,u=a.absolute,c=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(s)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3369:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(4996),["components"]),s={slug:"stakeholders",title:"Stakeholders of the Debate",sidebar_label:"Stakeholders"},u=void 0,c={unversionedId:"stakeholders",id:"stakeholders",isDocsHomePage:!1,title:"Stakeholders of the Debate",description:"Four stakeholder types participate in the ArborVote decision-making process:",source:"@site/docs/stakeholders.md",sourceDirName:".",slug:"/stakeholders",permalink:"/ArborVote-docs/docs/stakeholders",version:"current",lastUpdatedAt:1629240999,formattedLastUpdatedAt:"8/18/2021",frontMatter:{slug:"stakeholders",title:"Stakeholders of the Debate",sidebar_label:"Stakeholders"},sidebar:"someSidebar",previous:{title:"Phases",permalink:"/ArborVote-docs/docs/phases"},next:{title:"Editing Phase",permalink:"/ArborVote-docs/docs/editing"}},l=[{value:"Debaters",id:"debaters",children:[]},{value:"Curators",id:"curators",children:[]},{value:"Jurors",id:"jurors",children:[]},{value:"Voters",id:"voters",children:[]}],d={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Four stakeholder types participate in the ArborVote decision-making process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"debaters"),(0,a.kt)("li",{parentName:"ol"},"curators"),(0,a.kt)("li",{parentName:"ol"},"jurors"),(0,a.kt)("li",{parentName:"ol"},"voters")),(0,a.kt)("h2",{id:"debaters"},"Debaters"),(0,a.kt)("p",null,"Debaters author arguments or fact nodes and add them to the debate tree."),(0,a.kt)("h2",{id:"curators"},"Curators"),(0,a.kt)("p",null,"Curators can flag and propose edits to the content that authors can accept or reject."),(0,a.kt)("h2",{id:"jurors"},"Jurors"),(0,a.kt)("p",null,"In the latter case, a dispute is raised that is resolved by jurors in a digital court."),(0,a.kt)("h2",{id:"voters"},"Voters"),(0,a.kt)("p",null,"Lastly, voters can invest debate tokens to rate the impact of nodes in the debate tree."))}p.isMDXComponent=!0}}]);