function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,i,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(u){const r=a(n,e,o,c);t.p(r,u)}}let l,d,p=!1;function h(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function m(t,n){p?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=h(1,r+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;o[s]=e[t]+1;const i=t+1;e[i]=s,r=Math.max(i,r)}const i=[],c=[];let u=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(i.push(n[s-1]);u>=s;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,a=0;s<c.length;s++){for(;a<i.length&&c[s].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function g(t,n,e){p&&!e?m(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function x(){return $("")}function w(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function j(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t){return Array.from(t.childNodes)}function N(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function k(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):y(n)))}function A(t,n){return N(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>$(n)),!0)}function O(t){return A(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function M(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}}function z(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function C(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=y("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=function(){if(void 0===l){l=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){l=!0}}return l}();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=w(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=w(e.contentWindow,"resize",n)}),m(t,e),()=>{(o||r&&e.contentWindow)&&r(),_(e)}}function I(t,n,e){t.classList[e?"add":"remove"](n)}function W(t,n=document.body){return Array.from(n.querySelectorAll(t))}function q(t){d=t}function B(){if(!d)throw new Error("Function called outside component initialization");return d}function L(t){B().$$.on_mount.push(t)}function F(t){B().$$.after_update.push(t)}function P(t,n){B().$$.context.set(t,n)}function D(t){return B().$$.context.get(t)}const G=[],H=[],J=[],K=[],Q=Promise.resolve();let R=!1;function U(t){J.push(t)}let V=!1;const X=new Set;function Y(){if(!V){V=!0;do{for(let t=0;t<G.length;t+=1){const n=G[t];q(n),Z(n.$$)}for(q(null),G.length=0;H.length;)H.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];X.has(n)||(X.add(n),n())}J.length=0}while(G.length);for(;K.length;)K.pop()();R=!1,V=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}const tt=new Set;let nt;function et(){nt={r:0,c:[],p:nt}}function ot(){nt.r||r(nt.c),nt=nt.p}function rt(t,n){t&&t.i&&(tt.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(tt.has(t))return;tt.add(t),nt.c.push((()=>{tt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ct(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],u=n[i];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[i]=u}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ut(t){return"object"==typeof t&&null!==t?t:{}}function st(t){t&&t.c()}function at(t,n){t&&t.l(n)}function ft(t,n,o,c){const{fragment:u,on_mount:s,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,o),c||U((()=>{const n=s.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(U)}function lt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(G.push(t),R||(R=!0,Q.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function pt(n,e,i,c,u,s,a=[-1]){const f=d;q(n);const l=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let h=!1;if(l.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&dt(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){p=!0;const t=E(e.target);l.fragment&&l.fragment.l(t),t.forEach(_)}else l.fragment&&l.fragment.c();e.intro&&rt(n.$$.fragment),ft(n,e.target,e.anchor,e.customElement),p=!1,Y()}q(f)}class ht{$destroy(){lt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function gt(t,n){return{subscribe:_t(t,n).subscribe}}function _t(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!mt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),mt.push(t,n)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,u=t){const s=[c,u];return r.push(s),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},yt=/^\s+|\s+$/g,$t=/^[-+]0x[0-9a-f]+$/i,vt=/^0b[01]+$/i,xt=/^0o[0-7]+$/i,wt=parseInt,jt="object"==typeof bt&&bt&&bt.Object===Object&&bt,Et="object"==typeof self&&self&&self.Object===Object&&self,Nt=jt||Et||Function("return this")(),kt=Object.prototype.toString,At=Math.max,Ot=Math.min,Tt=function(){return Nt.Date.now()};function St(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Mt(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==kt.call(t)}(t))return NaN;if(St(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=St(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(yt,"");var e=vt.test(t);return e||xt.test(t)?wt(t.slice(2),e?2:8):$t.test(t)?NaN:+t}var zt=function(t,n,e){var o,r,i,c,u,s,a=0,f=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(n){var e=o,i=r;return o=r=void 0,a=n,c=t.apply(i,e)}function h(t){return a=t,u=setTimeout(g,n),f?p(t):c}function m(t){var e=t-s;return void 0===s||e>=n||e<0||l&&t-a>=i}function g(){var t=Tt();if(m(t))return _(t);u=setTimeout(g,function(t){var e=n-(t-s);return l?Ot(e,i-(t-a)):e}(t))}function _(t){return u=void 0,d&&o?p(t):(o=r=void 0,c)}function b(){var t=Tt(),e=m(t);if(o=arguments,r=this,s=t,e){if(void 0===u)return h(s);if(l)return u=setTimeout(g,n),p(s)}return void 0===u&&(u=setTimeout(g,n)),c}return n=Mt(n)||0,St(e)&&(f=!!e.leading,i=(l="maxWait"in e)?At(Mt(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),a=0,o=s=r=u=void 0},b.flush=function(){return void 0===u?c:_(Tt())},b};export{L as A,n as B,_t as C,m as D,t as E,s as F,f as G,W as H,b as I,D as J,gt as K,zt as L,S as M,I as N,U as O,M as P,C as Q,w as R,ht as S,u as T,z as U,E as a,j as b,k as c,_ as d,y as e,g as f,A as g,T as h,pt as i,st as j,v as k,x as l,at as m,O as n,ft as o,ct as p,ut as q,et as r,c as s,$ as t,it as u,lt as v,ot as w,rt as x,P as y,F as z};
