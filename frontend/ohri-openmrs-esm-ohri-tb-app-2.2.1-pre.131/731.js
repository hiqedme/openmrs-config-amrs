(globalThis.webpackChunk_ohri_openmrs_esm_ohri_tb_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_tb_app||[]).push([[731],{4731:function(t){function e(t,e){return null!=e&&"undefined"!=typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}t.exports=function(){"use strict";var t=6e4,n=36e5,r="millisecond",s="second",i="minute",u="hour",a="day",o="week",c="month",h="quarter",f="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,u=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:a,D:d,h:u,m:i,s,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",g={};g[v]=y;var D="$isDayjsObject",S=function(t){return e(t,O)||!(!t||!t[D])},_=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(s=i),n&&(g[i]=n,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,s=a}return!r&&s&&(v=s),s||!r&&v},w=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},b=p;b.l=_,b.i=S,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function y(t){this.$L=_(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var M=y.prototype;return M.parse=function(t){this.$d=function(t){var n=t.date,r=t.utc;if(null===n)return new Date(NaN);if(b.u(n))return new Date;if(e(n,Date))return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var s=n.match($);if(s){var i=s[2]-1||0,u=(s[7]||"0").substring(0,3);return r?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,u)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,u)}}return new Date(n)}(t),this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return b},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,r=!!b.u(e)||e,h=b.p(t),l=function(t,e){var s=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,M=this.$D,p="set"+(this.$u?"UTC":"");switch(h){case f:return r?l(1,0):l(31,11);case c:return r?l(1,y):l(0,y+1);case o:var v=this.$locale().weekStart||0,g=(m<v?m+7:m)-v;return l(r?M-g:M+(6-g),y);case a:case d:return $(p+"Hours",0);case u:return $(p+"Minutes",1);case i:return $(p+"Seconds",2);case s:return $(p+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,o=b.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[f]=h+"FullYear",n[u]=h+"Hours",n[i]=h+"Minutes",n[s]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===f){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[b.p(t)]()},M.add=function(e,r){var h,d=this;e=Number(e);var l=b.p(r),$=function(t){var n=w(d);return b.w(n.date(n.date()+Math.round(t*e)),d)};if(l===c)return this.set(c,this.$M+e);if(l===f)return this.set(f,this.$y+e);if(l===a)return $(1);if(l===o)return $(7);var m=(h={},h[i]=t,h[u]=n,h[s]=1e3,h)[l]||1,y=this.$d.getTime()+e*m;return b.w(y,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,h=n.meridiem,f=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},d=function(t){return b.s(i%12||12,t,"0")},$=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return f(n.monthsShort,a,c,3);case"MMMM":return f(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,u,!0);case"A":return $(i,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(e,r,d){var l,$=this,m=b.p(r),y=w(e),M=(y.utcOffset()-this.utcOffset())*t,p=this-y,v=function(){return b.m($,y)};switch(m){case f:l=v()/12;break;case c:l=v();break;case h:l=v()/3;break;case o:l=(p-M)/6048e5;break;case a:l=(p-M)/864e5;break;case u:l=p/n;break;case i:l=p/t;break;case s:l=p/1e3;break;default:l=p}return d?l:b.a(l)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return g[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return b.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},y}(),k=O.prototype;return w.prototype=k,[["$ms",r],["$s",s],["$m",i],["$H",u],["$W",a],["$M",c],["$y",f],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,O,w),t.$i=!0),w},w.locale=_,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=g[v],w.Ls=g,w.p={},w}()}}]);