function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,i,c){const a=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(a){const r=l(n,e,o,c);t.p(r,a)}}let f,s=!1;function d(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function h(t,n){s?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=d(1,r+1,(t=>n[e[t]].claim_order),n[l].claim_order)-1;o[l]=e[t]+1;const i=t+1;e[i]=l,r=Math.max(i,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,u=0;l<c.length;l++){for(;u<i.length&&c[l].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){s&&!e?h(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function $(){return y(" ")}function w(){return y("")}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function E(t,n,e,o){return v(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):g(n)))}function k(t,n){return v(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>y(n)),!0)}function A(t){return k(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function O(t,n=document.body){return Array.from(n.querySelectorAll(t))}function S(t){f=t}function j(){if(!f)throw new Error("Function called outside component initialization");return f}function B(t){j().$$.on_mount.push(t)}function C(t){j().$$.after_update.push(t)}function P(t,n){j().$$.context.set(t,n)}const q=[],I=[],M=[],T=[],z=Promise.resolve();let F=!1;function D(t){M.push(t)}let G=!1;const H=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<q.length;t+=1){const n=q[t];S(n),K(n.$$)}for(S(null),q.length=0;I.length;)I.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];H.has(n)||(H.add(n),n())}M.length=0}while(q.length);for(;T.length;)T.pop()();F=!1,G=!1,H.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(D)}}const L=new Set;let Q;function R(){Q={r:0,c:[],p:Q}}function U(){Q.r||r(Q.c),Q=Q.p}function V(t,n){t&&t.i&&(L.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),Q.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:u,after_update:f}=t.$$;a&&a.m(n,o),c||D((()=>{const n=l.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(D)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(q.push(t),F||(F=!0,z.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,i,c,a,l,u=[-1]){const d=f;S(n);const h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let p=!1;if(h.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&ot(n,t)),e})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){s=!0;const t=x(e.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();e.intro&&V(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),s=!1,J()}S(d)}class it{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function at(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!ct.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ct.push(t,n)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.push(l),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var lt={value:()=>{}};function ut(){for(var t,n=0,e=arguments.length,o={};n<e;++n){if(!(t=arguments[n]+"")||t in o||/[\s.]/.test(t))throw new Error("illegal type: "+t);o[t]=[]}return new ft(o)}function ft(t){this._=t}function st(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",o=t.indexOf(".");if(o>=0&&(e=t.slice(o+1),t=t.slice(0,o)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function dt(t,n){for(var e,o=0,r=t.length;o<r;++o)if((e=t[o]).name===n)return e.value}function ht(t,n,e){for(var o=0,r=t.length;o<r;++o)if(t[o].name===n){t[o]=lt,t=t.slice(0,o).concat(t.slice(o+1));break}return null!=e&&t.push({name:n,value:e}),t}ft.prototype=ut.prototype={constructor:ft,on:function(t,n){var e,o=this._,r=st(t+"",o),i=-1,c=r.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++i<c;)if(e=(t=r[i]).type)o[e]=ht(o[e],t.name,n);else if(null==n)for(e in o)o[e]=ht(o[e],t.name,null);return this}for(;++i<c;)if((e=(t=r[i]).type)&&(e=dt(o[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new ft(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,o,r=new Array(e),i=0;i<e;++i)r[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(i=0,e=(o=this._[t]).length;i<e;++i)o[i].value.apply(n,r)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(n,e)}},ut("start","end","cancel","interrupt");export{B as A,n as B,at as C,h as D,t as E,a as F,u as G,O as H,_ as I,it as S,x as a,b,E as c,m as d,g as e,p as f,k as g,N as h,rt as i,Z as j,$ as k,w as l,tt as m,A as n,nt as o,X as p,Y as q,R as r,c as s,y as t,W as u,et as v,U as w,V as x,P as y,C as z};