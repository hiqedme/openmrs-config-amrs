"use strict";(globalThis.webpackChunk_openmrs_esm_laboratory_app=globalThis.webpackChunk_openmrs_esm_laboratory_app||[]).push([[664],{5472:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(6004),a=n.n(r),o=n(1056),i=n.n(o)()(a());i.push([e.id,".-esm-laboratory__add-to-worklist-dialog__radioButton___h43GK{padding:.25rem .25rem;margin:.5rem 0}section{margin:.5rem}.-esm-laboratory__add-to-worklist-dialog__sectionTitle___GIQ14{margin-bottom:.75rem}.-esm-laboratory__add-to-worklist-dialog__modalBody___uWdtA{padding-bottom:1rem}","",{version:3,sources:["webpack://./src/queue-list/lab-dialogs/add-to-worklist-dialog.scss","webpack://./node_modules/@carbon/layout/scss/generated/_spacing.scss"],names:[],mappings:"AAIA,8DACE,qBAAA,CACA,cAAA,CAGF,QACE,YCWW,CDRb,+DACE,oBCYW,CDTb,4DACE,mBCaW",sourceRoot:""}]),i.locals={radioButton:"-esm-laboratory__add-to-worklist-dialog__radioButton___h43GK",sectionTitle:"-esm-laboratory__add-to-worklist-dialog__sectionTitle___GIQ14",modalBody:"-esm-laboratory__add-to-worklist-dialog__modalBody___uWdtA"};const l=i},2664:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(7244),a=n.n(r),o=n(3444),i=n(4652),l=n(3604),c=n.n(l),s=n(7200),u=n.n(s),d=n(8272),p=n.n(d),f=n(712),m=n.n(f),y=n(6768),b=n.n(y),h=n(2116),v=n.n(h),g=n(5472),w={};w.styleTagTransform=v(),w.setAttributes=m(),w.insert=p().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=b(),c()(g.c,w);const E=g.c&&g.c.locals?g.c.locals:void 0;var _=n(8704),k=n(7648),C=(n(2544),n(9804));function x(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){x(o,r,a,i,l,"next",e)}function l(e){x(o,r,a,i,l,"throw",e)}i(void 0)}))}}function I(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function A(){return(A=S((function(e){var t;return I(this,(function(n){return t=new AbortController,[2,(0,_.openmrsFetch)("/ws/rest/v1/generatesampleId?uuid=".concat(e),{method:"GET",headers:{"Content-Type":"application/json"},signal:t.signal})]}))}))).apply(this,arguments)}function T(){return(T=S((function(e,t){var n;return I(this,(function(r){return n=new AbortController,[2,(0,_.openmrsFetch)("/ws/rest/v1/accessionorder/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},signal:n.signal,body:t})]}))}))).apply(this,arguments)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){P(o,r,a,i,l,"next",e)}function l(e){P(o,r,a,i,l,"throw",e)}i(void 0)}))}}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}const D=function(e){var t,n,l,c,s,u,d,p=e.queueId,f=e.order,m=e.closeModal,y=(0,i.useTranslation)().t,b=G((0,r.useState)(!1),2),h=b[0],v=b[1],g=G((0,r.useState)(""),2),w=g[0],x=g[1],S=function(){var e,t,n,r,a=(0,_.useConfig)().laboratorySpecimenTypeConcept,o="/ws/rest/v1/concept/".concat(a),i=(0,C.c)(o,_.openmrsFetch),l=i.data,c=(i.error,i.isLoading),s=[];return l&&((null==l||null===(t=l.data)||void 0===t||null===(e=t.setMembers)||void 0===e?void 0:e.length)?s=l.data.setMembers:(null==l||null===(r=l.data)||void 0===r||null===(n=r.answers)||void 0===n?void 0:n.length)&&(s=l.data.answers)),{specimenTypes:s,isLoading:c}}().specimenTypes,I=(n=(0,_.useConfig)().laboratoryReferalDestinationUuid,l="/ws/rest/v1/concept/".concat(n),c=(0,C.c)(l,_.openmrsFetch),s=c.data,c.error,u=c.isLoading,{referrals:s?null==s||null===(t=s.data)||void 0===t?void 0:t.answers:[],isLoading:u}).referrals,O=G((0,r.useState)(),2),P=O[0],D=O[1],N=G((0,r.useState)(""),2),L=N[0],R=N[1],M=G((0,r.useState)(""),2),Q=M[0],F=M[1],W=G((0,r.useState)(""),2),Y=W[0],U=W[1],V=G((0,r.useState)(""),2),z=V[0],K=V[1],$=(0,_.useConfig)(),H=(d=q((function(e){var t;return j(this,(function(n){return e.preventDefault(),t={sampleId:w,specimenSourceId:P,unProcessedOrders:"",patientQueueId:p},function(e,t){return T.apply(this,arguments)}(f.uuid,t).then((function(){(0,_.showSnackbar)({isLowContrast:!0,title:y("pickedAnOrder","Picked an order"),kind:"success",subtitle:y("pickSuccessfully","You have successfully picked an Order")}),m()}),(function(e){(0,_.showNotification)({title:y("errorPicking an order', 'Error Picking an Order"),kind:"error",critical:!0,description:null==e?void 0:e.message})})),[2]}))})),function(e){return d.apply(this,arguments)}),J=function(){var e=q((function(e){return j(this,(function(t){return e.preventDefault(),function(e){return A.apply(this,arguments)}(f.uuid).then((function(e){x(e.data.results[0].sampleId),(0,_.showSnackbar)({isLowContrast:!0,title:y("generatesampleID","Generate Sample Id"),kind:"success",subtitle:y("generateSuccessfully","You have successfully generated a Sample Id")})}),(function(e){(0,_.showNotification)({title:y("errorGeneratingId', 'Error Generating Sample Id"),kind:"error",critical:!0,description:null==e?void 0:e.message})})),[2]}))}));return function(t){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){""!==Q&&""!==Y&&Q==Y&&x(Q)}),[Q,Y]),a().createElement("div",null,a().createElement(o.QFz,{onSubmit:H},a().createElement(o.kPY,{closeModal:m,title:y("pickRequest","Pick Lab Request")}),a().createElement(o.aUI,null,a().createElement("div",{className:E.modalBody},a().createElement("section",{className:E.section},a().createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",alignContent:"stretch"}},a().createElement("div",{className:E.sectionTitle},h?y("barcode","Barcode"):y("specimenID","Specimen ID")),a().createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",columnGap:"10px"}},a().createElement("div",{style:{width:"430px"}},a().createElement(o.gf6,{type:"text",id:"specimentId",value:w,readOnly:$.enableSpecimenIdAutoGeneration?$.enableSpecimenIdAutoGeneration:h,hideReadOnly:h,onChange:function(e){return x(e.target.value)}})),a().createElement("div",{style:{width:"50px"}},$.enableSpecimenIdAutoGeneration&&a().createElement(o.qaq,{hasIconOnly:!0,onClick:function(e){return J(e)},renderIcon:function(e){return a().createElement(k.Ow,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){B(e,t,n[t])}))}return e}({size:16},e))},disabled:h}))))),a().createElement("section",{className:E.section},a().createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",alignContent:"stretch"}},a().createElement("div",{className:E.sectionTitle},y("specimenType","Specimen Type")),a().createElement("div",{style:{width:"500px"}},a().createElement("section",{className:E.section},a().createElement(o.M1e,{labelText:"",id:"speciment-types",name:"specimen-types",value:P,onChange:function(e){return D(e.target.value)}},P?null:a().createElement(o.gV5,{text:y("specimenType","Select Specimen Type"),value:""}),S.map((function(e){return a().createElement(o.gV5,{key:e.uuid,text:e.display,value:e.uuid},e.display)}))))))),a().createElement("section",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",alignContent:"stretch"}},a().createElement("div",null,a().createElement(o.ywS,{checked:h,onChange:function(){v(!h)},labelText:"Referred",id:"test-referred"})),h&&a().createElement("div",{style:{width:"500px"}},a().createElement("section",{className:E.section},a().createElement(o.M1e,{labelText:y("locationReferral","Referral Location "),id:"nextQueueLocation",name:"nextQueueLocation",invalidText:"Required",value:L,onChange:function(e){return R(e.target.value)}},I.map((function(e){return a().createElement(o.gV5,{key:e.uuid,text:e.display,value:e.uuid},e.display)})))),a().createElement("section",{className:E.section},"3476fd97-71da-4e9c-bf57-2b6318dc0c9f"===L&&a().createElement("div",{style:{display:"flex",alignItems:"center"}},a().createElement("div",{style:{width:"500px"}},a().createElement(o.gf6,{type:"text",id:"locationName",labelText:"Enter Name",value:z,required:!0,onChange:function(e){return K(e.target.value)}}))),a().createElement("div",{style:{display:"flex",alignItems:"center"}},a().createElement("div",{style:{width:"500px"}},a().createElement(o.gf6,{type:"text",id:"enterBarcode",labelText:"Enter Barcode",value:Q,required:!0,onChange:function(e){F(e.target.value)}}))),a().createElement("div",{style:{display:"flex",alignItems:"center"}},a().createElement("div",{style:{width:"500px"}},a().createElement(o.gf6,{type:"text",id:"confirmBarcode",labelText:"Confirm Barcode",value:Y,required:!0,onChange:function(e){U(e.target.value)}})))))))),a().createElement(o._AC,null,a().createElement(o.qaq,{kind:"secondary",onClick:m},y("cancel","Cancel")),a().createElement(o.qaq,{type:"submit",onClick:H},y("pickPatient","Pick Lab Request")))))}}}]);