"use strict";(self.webpackChunkopenmrs=self.webpackChunkopenmrs||[]).push([[79],{1079:(t,e,r)=>{r.r(e),r.d(e,{Breadcrumbs:()=>h,CustomBreadcrumbItem:()=>v,default:()=>O});var n=r(9602),o=r.n(n),a=r(3536),i=r(5497);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t){if(Array.isArray(t))return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){l(t,e,r[e])}))}return t}function b(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function m(t,e){return c(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(t,e)||y(t,e)||f()}function y(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function d(t,e){var r,n=function(t){if(Array.isArray(t))return u(t)}(r=e)||s(r)||y(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return t.replace(/:([A-Za-z0-9_]+)/g,(function(t){var e;return null!==(e=n.shift())&&void 0!==e?e:t}))}function g(t,e){var r=null==e?void 0:e.exec(t);if(r)return(c(n=r)||s(n)||y(n)||f()).slice(1);var n,o=t.split("/");return o.pop(),o.length>1?g(o.join("/"),e):[]}var v=function(t){var e=t.breadcrumbRegistration,r=t.params,u=m((0,n.useState)(""),2),c=u[0],l=u[1];return(0,n.useEffect)((function(){"function"==typeof e.settings.title?Promise.resolve(e.settings.title(r)).then((function(t){return l(t)})):l(e.settings.title)}),[e,r]),o().createElement(a.J53,{key:e.settings.path},o().createElement(i.ConfigurableLink,{to:d(e.settings.path,r)},c||o().createElement(a.OuH,null)))},h=function(){var t=m((0,n.useState)(location.pathname),2),e=t[0],r=t[1],u=(0,i.getBreadcrumbsFor)(e),c=u[u.length-1],l=g(e,null==c?void 0:c.matcher);return(0,n.useEffect)((function(){var t=function(){return r(location.pathname)};return window.addEventListener("popstate",t),function(){return window.removeEventListener("popstate",t)}}),[]),u.length>4&&u.splice(1,u.length-3,b(p({},u[1]),{settings:b(p({},u[1].settings),{title:"..."})})),o().createElement(a.QpV,{className:"breadcrumbs-container"},u.map((function(t,e){return o().createElement(v,{key:"breadcrumb-item-".concat(e),breadcrumbRegistration:t,params:l})})))};const O=h}}]);