function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,r){if(t){const o=c(t,n,e,r);return t[0](o)}}function c(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function u(t,n,e,r,o,i,a){const s=function(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let r=0;r<e;r+=1)t[r]=n.dirty[r]|o[r];return t}return n.dirty|o}return n.dirty}(n,r,o,i);if(s){const o=c(n,e,r,a);t.p(o,s)}}let l,f=!1;function h(t,n,e,r){for(;t<n;){const o=t+(n-t>>1);e(o)<=r?t=o+1:n=o}return t}function d(t,n){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let o=0;for(let c=0;c<n.length;c++){const t=h(1,o+1,(t=>n[e[t]].claim_order),n[c].claim_order)-1;r[c]=e[t]+1;const i=t+1;e[i]=c,o=Math.max(i,o)}const i=[],a=[];let s=n.length-1;for(let c=e[o]+1;0!=c;c=r[c-1]){for(i.push(n[c-1]);s>=c;s--)a.push(n[s]);s--}for(;s>=0;s--)a.push(n[s]);i.reverse(),a.sort(((t,n)=>t.claim_order-n.claim_order));for(let c=0,u=0;c<a.length;c++){for(;u<i.length&&a[c].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(a[c],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){f&&!e?d(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function b(){return v("")}function $(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function M(t,n,e,r,o=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const i=t[r];if(n(i))return e(i),t.splice(r,1),o||(t.claim_info.last_index=r),i}for(let r=t.claim_info.last_index-1;r>=0;r--){const i=t[r];if(n(i))return e(i),t.splice(r,1),o?t.claim_info.last_index--:t.claim_info.last_index=r,i}return r()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function k(t,n,e,r){return M(t,(t=>t.nodeName===n),(t=>{const n=[];for(let r=0;r<t.attributes.length;r++){const o=t.attributes[r];e[o.name]||n.push(o.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):y(n)))}function E(t,n){return M(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>v(n)),!0)}function A(t){return E(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n,e){t.classList[e?"add":"remove"](n)}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}function O(t){l=t}function z(){if(!l)throw new Error("Function called outside component initialization");return l}function P(t){z().$$.on_mount.push(t)}function C(t){z().$$.after_update.push(t)}function L(t,n){z().$$.context.set(t,n)}const B=[],F=[],T=[],q=[],I=Promise.resolve();let G=!1;function X(t){T.push(t)}function D(t){q.push(t)}let H=!1;const J=new Set;function K(){if(!H){H=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];O(n),Q(n.$$)}for(O(null),B.length=0;F.length;)F.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];J.has(n)||(J.add(n),n())}T.length=0}while(B.length);for(;q.length;)q.pop()();G=!1,H=!1,J.clear()}}function Q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}const R=new Set;let U;function Y(){U={r:0,c:[],p:U}}function Z(){U.r||o(U.c),U=U.p}function V(t,n){t&&t.i&&(R.delete(t),t.i(n))}function W(t,n,e,r){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push((()=>{R.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function tt(t,n){const e={},r={},o={$$scope:1};let i=t.length;for(;i--;){const a=t[i],s=n[i];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(e[t]=s[t],o[t]=1);t[i]=s}else for(const t in a)o[t]=1}for(const a in r)a in e||(e[a]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function rt(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function it(t,n,r,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,r),a||X((()=>{const n=c.map(e).filter(i);u?u.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(X)}function at(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){-1===t.$$.dirty[0]&&(B.push(t),G||(G=!0,I.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,i,a,s,c,u=[-1]){const h=l;O(n);const d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&st(n,t)),e})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),e.target){if(e.hydrate){f=!0;const t=x(e.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();e.intro&&V(n.$$.fragment),it(n,e.target,e.anchor,e.customElement),f=!1,K()}O(h)}class ut{$destroy(){at(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function ft(n,e=t){let r;const o=[];function i(t){if(a(n,t)&&(n=t,r)){const t=!lt.length;for(let e=0;e<o.length;e+=1){const t=o[e];t[1](),lt.push(t,n)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(a,s=t){const c=[a,s];return o.push(c),1===o.length&&(r=e(i)||t),a(n),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ht(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}class dt extends Map{constructor(t,n=mt){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(pt(this,t))}has(t){return super.has(pt(this,t))}set(t,n){return super.set(function({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}(this,t),n)}delete(t){return super.delete(function({_intern:t,_key:n},e){const r=n(e);t.has(r)&&(e=t.get(e),t.delete(r));return e}(this,t))}}function pt({_intern:t,_key:n},e){const r=n(e);return t.has(r)?t.get(r):e}function mt(t){return null!==t&&"object"==typeof t?t.valueOf():t}function gt(t){return t}function yt(t,...n){return function(t,n,e,r){return function t(o,i){if(i>=r.length)return e(o);const a=new dt,s=r[i++];let c=-1;for(const n of o){const t=s(n,++c,o),e=a.get(t);e?e.push(n):a.set(t,[n])}for(const[n,e]of a)a.set(n,t(e,i));return n(a)}(t,0)}(t,Array.from,gt,n)}function vt(t,n){let e=0,r=0;if(void 0===n)for(let o of t)null!=o&&(o=+o)>=o&&(++e,r+=o);else{let o=-1;for(let i of t)null!=(i=n(i,++o,t))&&(i=+i)>=i&&(++e,r+=i)}if(e)return r/e}var _t={value:()=>{}};function bt(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new $t(r)}function $t(t){this._=t}function wt(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function xt(t,n){for(var e,r=0,o=t.length;r<o;++r)if((e=t[r]).name===n)return e.value}function Mt(t,n,e){for(var r=0,o=t.length;r<o;++r)if(t[r].name===n){t[r]=_t,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function kt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}$t.prototype=bt.prototype={constructor:$t,on:function(t,n){var e,r=this._,o=wt(t+"",r),i=-1,a=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++i<a;)if(e=(t=o[i]).type)r[e]=Mt(r[e],t.name,n);else if(null==n)for(e in r)r[e]=Mt(r[e],t.name,null);return this}for(;++i<a;)if((e=(t=o[i]).type)&&(e=xt(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new $t(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,o=new Array(e),i=0;i<e;++i)o[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,e=(r=this._[t]).length;i<e;++i)r[i].value.apply(n,o)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,i=r.length;o<i;++o)r[o].value.apply(n,e)}},bt("start","end","cancel","interrupt");var Et,At=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Nt(t){if(!(n=At.exec(t)))throw new Error("invalid format: "+t);var n;return new St({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function St(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function jt(t,n){var e=kt(t,n);if(!e)return t+"";var r=e[0],o=e[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}Nt.prototype=St.prototype,St.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ot={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>jt(100*t,n),r:jt,s:function(t,n){var e=kt(t,n);if(!e)return t+"";var r=e[0],o=e[1],i=o-(Et=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,a=r.length;return i===a?r:i>a?r+new Array(i-a+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+kt(t,Math.max(0,n+i-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function zt(t){return t}var Pt,Ct,Lt=Array.prototype.map,Bt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ft(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?zt:(n=Lt.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var o=t.length,i=[],a=0,s=n[0],c=0;o>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),i.push(t.substring(o-=s,o+s)),!((c+=s+1)>r));)s=n[a=(a+1)%n.length];return i.reverse().join(e)}),o=void 0===t.currency?"":t.currency[0]+"",i=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?zt:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Lt.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",u=void 0===t.minus?"−":t.minus+"",l=void 0===t.nan?"NaN":t.nan+"";function f(t){var n=(t=Nt(t)).fill,e=t.align,f=t.sign,h=t.symbol,d=t.zero,p=t.width,m=t.comma,g=t.precision,y=t.trim,v=t.type;"n"===v?(m=!0,v="g"):Ot[v]||(void 0===g&&(g=12),y=!0,v="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var _="$"===h?o:"#"===h&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",b="$"===h?i:/[%p]/.test(v)?c:"",$=Ot[v],w=/[defgprs%]/.test(v);function x(t){var o,i,c,h=_,x=b;if("c"===v)x=$(t)+x,t="";else{var M=(t=+t)<0||1/t<0;if(t=isNaN(t)?l:$(Math.abs(t),g),y&&(t=function(t){t:for(var n,e=t.length,r=1,o=-1;r<e;++r)switch(t[r]){case".":o=n=r;break;case"0":0===o&&(o=r),n=r;break;default:if(!+t[r])break t;o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(n+1):t}(t)),M&&0==+t&&"+"!==f&&(M=!1),h=(M?"("===f?f:u:"-"===f||"("===f?"":f)+h,x=("s"===v?Bt[8+Et/3]:"")+x+(M&&"("===f?")":""),w)for(o=-1,i=t.length;++o<i;)if(48>(c=t.charCodeAt(o))||c>57){x=(46===c?a+t.slice(o+1):t.slice(o))+x,t=t.slice(0,o);break}}m&&!d&&(t=r(t,1/0));var k=h.length+t.length+x.length,E=k<p?new Array(p-k+1).join(n):"";switch(m&&d&&(t=r(E+t,E.length?p-x.length:1/0),E=""),e){case"<":t=h+t+x+E;break;case"=":t=h+E+t+x;break;case"^":t=E.slice(0,k=E.length>>1)+h+t+x+E.slice(k);break;default:t=E+h+t+x}return s(t)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),x.toString=function(){return t+""},x}return{format:f,formatPrefix:function(t,n){var e,r=f(((t=Nt(t)).type="f",t)),o=3*Math.max(-8,Math.min(8,Math.floor((e=n,((e=kt(Math.abs(e)))?e[1]:NaN)/3)))),i=Math.pow(10,-o),a=Bt[8+o/3];return function(t){return r(i*t)+a}}}}Pt=Ft({thousands:",",grouping:[3],currency:["$",""]}),Ct=Pt.format;export{P as A,n as B,ft as C,d as D,t as E,s as F,u as G,j as H,$ as I,S as J,g as K,yt as L,ht as M,Ct as N,vt as O,F as P,et as Q,D as R,ut as S,x as a,w as b,k as c,m as d,y as e,p as f,E as g,N as h,ct as i,rt as j,_ as k,b as l,ot as m,A as n,it as o,tt as p,nt as q,Y as r,a as s,v as t,W as u,at as v,Z as w,V as x,L as y,C as z};