function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,i,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(u){const r=s(n,e,o,c);t.p(r,u)}}let l,d=!1;function h(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function p(t,n){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=h(1,r+1,(t=>n[e[t]].claim_order),n[a].claim_order)-1;o[a]=e[t]+1;const i=t+1;e[i]=a,r=Math.max(i,r)}const i=[],c=[];let u=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(i.push(n[a-1]);u>=a;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,s=0;a<c.length;a++){for(;s<i.length&&c[a].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function m(t,n,e){d&&!e?p(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function g(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function b(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function v(){return y("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function j(t){return Array.from(t.childNodes)}function E(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function N(t,n,e,o){return E(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):b(n)))}function O(t,n){return E(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>y(n)),!0)}function T(t){return O(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function A(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function S(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}}function M(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function q(t,n,e){t.classList[e?"add":"remove"](n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}function C(t){l=t}function I(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){I().$$.on_mount.push(t)}function F(t){I().$$.after_update.push(t)}function P(t,n){I().$$.context.set(t,n)}function z(t){return I().$$.context.get(t)}const D=[],W=[],G=[],H=[],J=Promise.resolve();let K=!1;function Q(t){G.push(t)}let R=!1;const U=new Set;function V(){if(!R){R=!0;do{for(let t=0;t<D.length;t+=1){const n=D[t];C(n),X(n.$$)}for(C(null),D.length=0;W.length;)W.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];U.has(n)||(U.add(n),n())}G.length=0}while(D.length);for(;H.length;)H.pop()();K=!1,R=!1,U.clear()}}function X(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function nt(){Z.r||r(Z.c),Z=Z.p}function et(t,n){t&&t.i&&(Y.delete(t),t.i(n))}function ot(t,n,e,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push((()=>{Y.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function rt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],u=n[i];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[i]=u}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function it(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function ut(t,n){t&&t.l(n)}function at(t,n,o,c){const{fragment:u,on_mount:a,on_destroy:s,after_update:f}=t.$$;u&&u.m(n,o),c||Q((()=>{const n=a.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(Q)}function st(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(D.push(t),K||(K=!0,J.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(n,e,i,c,u,a,s=[-1]){const f=l;C(n);const h=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1};let p=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&ft(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){d=!0;const t=j(e.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();e.intro&&et(n.$$.fragment),at(n,e.target,e.anchor,e.customElement),d=!1,V()}C(f)}class dt{$destroy(){st(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ht=[];function pt(t,n){return{subscribe:mt(t,n).subscribe}}function mt(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!ht.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ht.push(t,n)}if(t){for(let t=0;t<ht.length;t+=2)ht[t][0](ht[t+1]);ht.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,u=t){const a=[c,u];return r.push(a),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var _t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},gt=/^\s+|\s+$/g,bt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,$t=/^0o[0-7]+$/i,vt=parseInt,xt="object"==typeof _t&&_t&&_t.Object===Object&&_t,wt="object"==typeof self&&self&&self.Object===Object&&self,jt=xt||wt||Function("return this")(),Et=Object.prototype.toString,Nt=Math.max,Ot=Math.min,Tt=function(){return jt.Date.now()};function kt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function At(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==Et.call(t)}(t))return NaN;if(kt(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=kt(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(gt,"");var e=yt.test(t);return e||$t.test(t)?vt(t.slice(2),e?2:8):bt.test(t)?NaN:+t}var St=function(t,n,e){var o,r,i,c,u,a,s=0,f=!1,l=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,i=r;return o=r=void 0,s=n,c=t.apply(i,e)}function p(t){return s=t,u=setTimeout(_,n),f?h(t):c}function m(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-s>=i}function _(){var t=Tt();if(m(t))return g(t);u=setTimeout(_,function(t){var e=n-(t-a);return l?Ot(e,i-(t-s)):e}(t))}function g(t){return u=void 0,d&&o?h(t):(o=r=void 0,c)}function b(){var t=Tt(),e=m(t);if(o=arguments,r=this,a=t,e){if(void 0===u)return p(a);if(l)return u=setTimeout(_,n),h(a)}return void 0===u&&(u=setTimeout(_,n)),c}return n=At(n)||0,kt(e)&&(f=!!e.leading,i=(l="maxWait"in e)?Nt(At(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),b.cancel=function(){void 0!==u&&clearTimeout(u),s=0,o=a=r=u=void 0},b.flush=function(){return void 0===u?c:g(Tt())},b};export{L as A,n as B,mt as C,p as D,t as E,a as F,f as G,B as H,g as I,z as J,pt as K,St as L,A as M,q as N,Q as O,S as P,x as Q,u as R,dt as S,M as T,j as a,w as b,N as c,_ as d,b as e,m as f,O as g,k as h,lt as i,ct as j,$ as k,v as l,ut as m,T as n,at as o,rt as p,it as q,tt as r,c as s,y as t,ot as u,st as v,nt as w,et as x,P as y,F as z};
