"use strict";(globalThis.webpackChunk_openmrs_esm_patient_forms_app=globalThis.webpackChunk_openmrs_esm_patient_forms_app||[]).push([[729],{4729:(e,t,n)=>{n.r(t),n.d(t,{INFINITE_PREFIX:()=>B,IS_REACT_LEGACY:()=>S,IS_SERVER:()=>k,OBJECT:()=>s,SWRConfig:()=>H,SWRGlobalState:()=>_,UNDEFINED:()=>i,cache:()=>q,compare:()=>$,createCacheHelper:()=>y,defaultConfig:()=>j,defaultConfigOptions:()=>O,getTimestamp:()=>V,hasRequestAnimationFrame:()=>v,initCache:()=>U,internalMutate:()=>x,isDocumentDefined:()=>g,isFunction:()=>c,isPromiseLike:()=>l,isUndefined:()=>a,isWindowDefined:()=>w,mergeConfigs:()=>z,mergeObjects:()=>u,mutate:()=>J,noop:()=>r,normalize:()=>K,preload:()=>Z,preset:()=>T,rAF:()=>I,revalidateEvents:()=>M,serialize:()=>F,slowConnection:()=>L,stableHash:()=>p,subscribeCallback:()=>ne,useIsomorphicLayoutEffect:()=>A,useSWRConfig:()=>Q,withArgs:()=>te,withMiddleware:()=>oe});var o=n(268);const r=()=>{},i=r(),s=Object,a=e=>e===i,c=e=>"function"==typeof e,u=(e,t)=>({...e,...t}),l=e=>c(e.then),f=new WeakMap;let d=0;const p=e=>{const t=typeof e,n=e&&e.constructor,o=n==Date;let r,i;if(s(e)!==e||o||n==RegExp)r=o?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(r=f.get(e),r)return r;if(r=++d+"~",f.set(e,r),n==Array){for(r="@",i=0;i<e.length;i++)r+=p(e[i])+",";f.set(e,r)}if(n==s){r="#";const t=s.keys(e).sort();for(;!a(i=t.pop());)a(e[i])||(r+=i+":"+p(e[i])+",");f.set(e,r)}}return r},_=new WeakMap,h={},E={},m="undefined",w=typeof window!=m,g=typeof document!=m,v=()=>w&&typeof window.requestAnimationFrame!=m,y=(e,t)=>{const n=_.get(e);return[()=>!a(t)&&e.get(t)||h,o=>{if(!a(t)){const r=e.get(t);t in E||(E[t]=r),n[5](t,u(r,o),r||h)}},n[6],()=>!a(t)&&t in E?E[t]:!a(t)&&e.get(t)||h]};let b=!0;const[R,C]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[r,r],T={isOnline:()=>b,isVisible:()=>{const e=g&&document.visibilityState;return a(e)||"hidden"!==e}},O={initFocus:e=>(g&&document.addEventListener("visibilitychange",e),R("focus",e),()=>{g&&document.removeEventListener("visibilitychange",e),C("focus",e)}),initReconnect:e=>{const t=()=>{b=!0,e()},n=()=>{b=!1};return R("online",t),R("offline",n),()=>{C("online",t),C("offline",n)}}},S=!o.useId,k=!w||"Deno"in window,I=e=>v()?window.requestAnimationFrame(e):setTimeout(e,1),A=k?o.useEffect:o.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,L=!k&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),F=e=>{if(c(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?p(e):"",t]};let N=0;const V=()=>++N,W=2;var M={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:W,RECONNECT_EVENT:1};async function x(...e){const[t,n,o,r]=e,s=u({populateCache:!0,throwOnError:!0},"boolean"==typeof r?{revalidate:r}:r||{});let f=s.populateCache;const d=s.rollbackOnError;let p=s.optimisticData;const h=!1!==s.revalidate,E=s.throwOnError;if(c(n)){const e=n,o=[],r=t.keys();for(const n of r)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&o.push(n);return Promise.all(o.map(m))}return m(n);async function m(n){const[r]=F(n);if(!r)return;const[s,u]=y(t,r),[m,w,g,v]=_.get(t),b=()=>{const e=m[r];return h&&(delete g[r],delete v[r],e&&e[0])?e[0](W).then((()=>s().data)):s().data};if(e.length<3)return b();let R,C=o;const T=V();w[r]=[T,0];const O=!a(p),S=s(),k=S.data,I=S._c,A=a(I)?k:I;if(O&&(p=c(p)?p(A,k):p,u({data:p,_c:A})),c(C))try{C=C(A)}catch(e){R=e}if(C&&l(C)){if(C=await C.catch((e=>{R=e})),T!==w[r][0]){if(R)throw R;return C}R&&O&&(e=>"function"==typeof d?d(e):!1!==d)(R)&&(f=!0,u({data:A,_c:i}))}if(f&&!R)if(c(f)){const e=f(C,A);u({data:e,error:i,_c:i})}else u({data:C,error:i,_c:i});if(w[r][1]=V(),Promise.resolve(b()).then((()=>{u({_c:i})})),!R)return C;if(E)throw R}}const P=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},U=(e,t)=>{if(!_.has(e)){const n=u(O,t),o={},s=x.bind(i,e);let a=r;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,o)=>{e.set(t,n);const r=c[t];if(r)for(const e of r)e(n,o)},d=()=>{if(!_.has(e)&&(_.set(e,[o,{},{},{},s,f,l]),!k)){const t=n.initFocus(setTimeout.bind(i,P.bind(i,o,0))),r=n.initReconnect(setTimeout.bind(i,P.bind(i,o,1)));a=()=>{t&&t(),r&&r(),_.delete(e)}}};return d(),[e,s,d,a]}return[e,_.get(e)[4]]},$=(e,t)=>p(e)==p(t),[q,J]=U(new Map),j=u({onLoadingSlow:r,onSuccess:r,onError:r,onErrorRetry:(e,t,n,o,r)=>{const i=n.errorRetryCount,s=r.retryCount,c=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;!a(i)&&s>i||setTimeout(o,c,r)},onDiscarded:r,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:$,isPaused:()=>!1,cache:q,mutate:J,fallback:{}},T),z=(e,t)=>{const n=u(e,t);if(t){const{use:o,fallback:r}=e,{use:i,fallback:s}=t;o&&i&&(n.use=o.concat(i)),r&&s&&(n.fallback=u(r,s))}return n},G=(0,o.createContext)({}),H=e=>{const{value:t}=e,n=(0,o.useContext)(G),r=c(t),s=(0,o.useMemo)((()=>r?t(n):t),[r,n,t]),a=(0,o.useMemo)((()=>r?s:z(n,s)),[r,n,s]),l=s&&s.provider,f=(0,o.useRef)(i);l&&!f.current&&(f.current=U(l(a.cache||q),s));const d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),A((()=>{if(d)return d[2]&&d[2](),d[3]}),[]),(0,o.createElement)(G.Provider,u(e,{value:a}))},B="$inf$",X=w&&window.__SWR_DEVTOOLS_USE__,Y=X?window.__SWR_DEVTOOLS_USE__:[],K=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Q=()=>u(j,(0,o.useContext)(G)),Z=(e,t)=>{const[n,o]=F(e),[,,,r]=_.get(q);if(r[n])return r[n];const i=t(o);return r[n]=i,i},ee=Y.concat((e=>(t,n,o)=>e(t,n&&((...e)=>{const[o]=F(t),[,,,r]=_.get(q);if(o.startsWith(B))return n(...e);const i=r[o];return a(i)?n(...e):(delete r[o],i)}),o))),te=e=>function(...t){const n=Q(),[o,r,i]=K(t),s=z(n,i);let a=e;const{use:c}=s,u=(c||[]).concat(ee);for(let e=u.length;e--;)a=u[e](a);return a(o,r||s.fetcher||null,s)},ne=(e,t,n)=>{const o=t[e]||(t[e]=[]);return o.push(n),()=>{const e=o.indexOf(n);e>=0&&(o[e]=o[o.length-1],o.pop())}},oe=(e,t)=>(...n)=>{const[o,r,i]=K(n),s=(i.use||[]).concat(t);return e(o,r,{...i,use:s})};X&&(window.__SWR_DEVTOOLS_REACT__=o)}}]);