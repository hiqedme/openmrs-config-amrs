var _ampath_esm_otz_app;(()=>{"use strict";var e,r,t,o,n,a,i,l,u,f,s,p,d,c,h,m,v,g,b={7910:(e,r,t)=>{var o={"./start":()=>Promise.all([t.e(878),t.e(380),t.e(132)]).then((()=>()=>t(9132)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},y={};function w(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,loaded:!1,exports:{}};return b[e](t,t.exports,w),t.loaded=!0,t.exports}w.m=b,w.c=y,w.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return w.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,w.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var n=Object.create(null);w.r(n);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&o&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,w.d(n,a),n},w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+".js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},o="@ampath/esm-otz-app:",w.l=(e,r,n,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",o+n),i.src=e),t[e]=[r];var p=(r,o)=>{i.onerror=i.onload=null,clearTimeout(d);var n=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},r={};w.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var a=w.S[t],i="@ampath/esm-otz-app",l=(e,r,t,o)=>{var n=a[e]=a[e]||{},l=n[r];(!l||!l.loaded&&(!o!=!l.eager?o:i>l.from))&&(n[r]={get:t,from:i,eager:!!o})},u=[];return"default"===t&&(l("@openmrs/esm-framework","5.4.1-pre.1596",(()=>Promise.all([w.e(831),w.e(380)]).then((()=>()=>w(831))))),l("react-i18next","11.18.6",(()=>Promise.all([w.e(917),w.e(380)]).then((()=>()=>w(5917))))),l("react-router-dom","6.22.2",(()=>Promise.all([w.e(913),w.e(380)]).then((()=>()=>w(2913))))),l("react","18.2.0",(()=>w.e(41).then((()=>()=>w(4041)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var r=w.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),n=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},a=(e,r)=>{e=n(e),r=n(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var o=e[t],a=(typeof o)[0];if(t>=r.length)return"u"==a;var i=r[t],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,t+="u"==(typeof(l=e[n]))[0]?"-":(o>0?".":"")+(o=2,l);return t}var a=[];for(n=1;n<e.length;n++){var l=e[n];a.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?a.pop()+" "+a.pop():i(l))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=n(r);var t=e[0],o=t<0;o&&(t=-t-1);for(var a=0,i=1,u=!0;;i++,a++){var f,s,p=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(s=(typeof(f=r[a]))[0]))return!u||("u"==p?i>t&&!o:""==p!=o);if("u"==s){if(!u||"u"!=p)return!1}else if(u)if(p==s)if(i<=t){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(u=!1)}else if("s"!=p&&"n"!=p){if(o||i<=t)return!1;u=!1,i--}else{if(i<=t||s<p!=o)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,i--)}}var d=[],c=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?c()|c():2==h?c()&c():h?l(h,r):!c())}return!!c()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},f=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(o)+")",s=(e,r,t,o)=>{var n=u(e,t);return l(o,n)||p(f(e,t,n,o)),d(e[t][n])},p=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,o,n){var a=w.I(r);return a&&a.then?a.then(e.bind(e,r,w.S[r],t,o,n)):e(0,w.S[r],t,o,n)})(((e,r,t,o,n)=>r&&w.o(r,t)?s(r,0,t,o):n())),h={},m={380:()=>c("default","react",[1,18,1,0],(()=>w.e(41).then((()=>()=>w(4041))))),1083:()=>c("default","@openmrs/esm-framework",[1,5],(()=>w.e(831).then((()=>()=>w(831))))),3150:()=>c("default","react-i18next",[1,11],(()=>w.e(917).then((()=>()=>w(5917))))),8877:()=>c("default","react-router-dom",[1,6],(()=>w.e(913).then((()=>()=>w(2913)))))},v={132:[1083,3150,8877],380:[380]},g={},w.f.consumes=(e,r)=>{w.o(v,e)&&v[e].forEach((e=>{if(w.o(h,e))return r.push(h[e]);if(!g[e]){var t=r=>{h[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}};g[e]=!0;var o=r=>{delete h[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var n=m[e]();n.then?r.push(h[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}}))},(()=>{var e={746:0};w.f.j=(r,t)=>{var o=w.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(380!=r){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=w.p+w.u(r),i=new Error;w.l(a,(t=>{if(w.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var o,n,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in i)w.o(i,o)&&(w.m[o]=i[o]);l&&l(w)}for(r&&r(t);u<a.length;u++)n=a[u],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=globalThis.webpackChunk_ampath_esm_otz_app=globalThis.webpackChunk_ampath_esm_otz_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w.nc=void 0;var _=w(7910);_ampath_esm_otz_app=_})();