import{r as l}from"./index-DRjF_FHU.js";var m=function(){return m=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},m.apply(this,arguments)};function j(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function te(e,n,t){for(var r=0,a=n.length,i;r<a;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return e.concat(i||Array.prototype.slice.call(n))}var w="right-scroll-bar-position",S="width-before-scroll-bar",I="with-scroll-bars-hidden",N="--removed-body-scroll-bar-size";function A(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function P(e,n){var t=l.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=n,t.facade}var M=new WeakMap;function ne(e,n){var t=P(null,function(r){return e.forEach(function(a){return A(a,r)})});return l.useLayoutEffect(function(){var r=M.get(t);if(r){var a=new Set(r),i=new Set(e),c=t.current;a.forEach(function(o){i.has(o)||A(o,null)}),i.forEach(function(o){a.has(o)||A(o,c)})}M.set(t,e)},[e]),t}function T(e){return e}function z(e,n){n===void 0&&(n=T);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(i){var c=n(i,r);return t.push(c),function(){t=t.filter(function(o){return o!==c})}},assignSyncMedium:function(i){for(r=!0;t.length;){var c=t;t=[],c.forEach(i)}t={push:function(o){return i(o)},filter:function(){return t}}},assignMedium:function(i){r=!0;var c=[];if(t.length){var o=t;t=[],o.forEach(i),c=t}var b=function(){var s=c;c=[],s.forEach(i)},p=function(){return Promise.resolve().then(b)};p(),t={push:function(s){c.push(s),p()},filter:function(s){return c=c.filter(s),t}}}};return a}function re(e){e===void 0&&(e={});var n=z(null);return n.options=m({async:!0,ssr:!1},e),n}var _=function(e){var n=e.sideCar,t=j(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return l.createElement(r,m({},t))};_.isSideCarExport=!0;function ae(e,n){return e.useMedium(n),_}var B=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function L(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=B();return n&&e.setAttribute("nonce",n),e}function V(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function D(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var G=function(){var e=0,n=null;return{add:function(t){e==0&&(n=L())&&(V(n,t),D(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},Q=function(){var e=G();return function(n,t){l.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},q=function(){var e=Q(),n=function(t){var r=t.styles,a=t.dynamic;return e(r,a),null};return n},F={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},H=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[E(t),E(r),E(a)]},K=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F;var n=H(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},U=q(),v="data-scroll-locked",J=function(e,n,t,r){var a=e.left,i=e.top,c=e.right,o=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(I,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(v,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(w,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(S,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(S," .").concat(S,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(v,`] {
    `).concat(N,": ").concat(o,`px;
  }
`)},W=function(){var e=parseInt(document.body.getAttribute(v)||"0",10);return isFinite(e)?e:0},X=function(){l.useEffect(function(){return document.body.setAttribute(v,(W()+1).toString()),function(){var e=W()-1;e<=0?document.body.removeAttribute(v):document.body.setAttribute(v,e.toString())}},[])},ie=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;X();var i=l.useMemo(function(){return K(a)},[a]);return l.createElement(U,{styles:J(i,!n,a,t?"":"!important")})},Y=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},d=new WeakMap,g=new WeakMap,y={},C=0,R=function(e){return e&&(e.host||R(e.parentNode))},Z=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=R(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},$=function(e,n,t,r){var a=Z(n,Array.isArray(e)?e:[e]);y[t]||(y[t]=new WeakMap);var i=y[t],c=[],o=new Set,b=new Set(a),p=function(u){!u||o.has(u)||(o.add(u),p(u.parentNode))};a.forEach(p);var s=function(u){!u||b.has(u)||Array.prototype.forEach.call(u.children,function(f){if(o.has(f))s(f);else{var h=f.getAttribute(r),x=h!==null&&h!=="false",k=(d.get(f)||0)+1,O=(i.get(f)||0)+1;d.set(f,k),i.set(f,O),c.push(f),k===1&&x&&g.set(f,!0),O===1&&f.setAttribute(t,"true"),x||f.setAttribute(r,"true")}})};return s(n),o.clear(),C++,function(){c.forEach(function(u){var f=d.get(u)-1,h=i.get(u)-1;d.set(u,f),i.set(u,h),f||(g.has(u)||u.removeAttribute(r),g.delete(u)),h||u.removeAttribute(t)}),C--,C||(d=new WeakMap,d=new WeakMap,g=new WeakMap,y={})}},oe=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=Y(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),$(r,a,t,"aria-hidden")):function(){return null}};export{ie as R,j as _,m as a,te as b,re as c,ae as e,S as f,oe as h,q as s,ne as u,w as z};
