import{r as d}from"./index-98wxwTcn.js";var y=function(){return y=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},y.apply(this,arguments)};function _(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(e[r[a]]=n[r[a]]);return e}function Z(n,t,e){for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}var w="right-scroll-bar-position",b="width-before-scroll-bar",R="with-scroll-bars-hidden",j="--removed-body-scroll-bar-size";function S(n,t){return typeof n=="function"?n(t):n&&(n.current=t),n}function N(n,t){var e=d.useState(function(){return{value:n,callback:t,facade:{get current(){return e.value},set current(r){var a=e.value;a!==r&&(e.value=r,e.callback(r,a))}}}})[0];return e.callback=t,e.facade}var k=new WeakMap;function $(n,t){var e=N(null,function(r){return n.forEach(function(a){return S(a,r)})});return d.useLayoutEffect(function(){var r=k.get(e);if(r){var a=new Set(r),i=new Set(n),c=e.current;a.forEach(function(o){i.has(o)||S(o,null)}),i.forEach(function(o){a.has(o)||S(o,c)})}k.set(e,n)},[n]),e}function P(n){return n}function T(n,t){t===void 0&&(t=P);var e=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return e.length?e[e.length-1]:n},useMedium:function(i){var c=t(i,r);return e.push(c),function(){e=e.filter(function(o){return o!==c})}},assignSyncMedium:function(i){for(r=!0;e.length;){var c=e;e=[],c.forEach(i)}e={push:function(o){return i(o)},filter:function(){return e}}},assignMedium:function(i){r=!0;var c=[];if(e.length){var o=e;e=[],o.forEach(i),c=e}var m=function(){var l=c;c=[],l.forEach(i)},v=function(){return Promise.resolve().then(m)};v(),e={push:function(l){c.push(l),v()},filter:function(l){return c=c.filter(l),e}}}};return a}function nn(n){n===void 0&&(n={});var t=T(null);return t.options=y({async:!0,ssr:!1},n),t}var M=function(n){var t=n.sideCar,e=_(n,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,y({},e))};M.isSideCarExport=!0;function en(n,t){return n.useMedium(t),M}var I=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function z(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var t=I();return t&&n.setAttribute("nonce",t),n}function B(n,t){n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}function V(n){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(n)}var D=function(){var n=0,t=null;return{add:function(e){n==0&&(t=z())&&(B(t,e),V(t)),n++},remove:function(){n--,!n&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},L=function(){var n=D();return function(t,e){d.useEffect(function(){return n.add(t),function(){n.remove()}},[t&&e])}},G=function(){var n=L(),t=function(e){var r=e.styles,a=e.dynamic;return n(r,a),null};return t},Q={left:0,top:0,right:0,gap:0},E=function(n){return parseInt(n||"",10)||0},q=function(n){var t=window.getComputedStyle(document.body),e=t[n==="padding"?"paddingLeft":"marginLeft"],r=t[n==="padding"?"paddingTop":"marginTop"],a=t[n==="padding"?"paddingRight":"marginRight"];return[E(e),E(r),E(a)]},H=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return Q;var t=q(n),e=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-e+t[2]-t[0])}},K=G(),F=function(n,t,e,r){var a=n.left,i=n.top,c=n.right,o=n.gap;return e===void 0&&(e="margin"),`
  .`.concat(R,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),e==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),e==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(w,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(b,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(b," .").concat(b,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(j,": ").concat(o,`px;
  }
`)},tn=function(n){var t=n.noRelative,e=n.noImportant,r=n.gapMode,a=r===void 0?"margin":r,i=d.useMemo(function(){return H(a)},[a]);return d.createElement(K,{styles:F(i,!t,a,e?"":"!important")})},J=function(n){if(typeof document>"u")return null;var t=Array.isArray(n)?n[0]:n;return t.ownerDocument.body},s=new WeakMap,p=new WeakMap,g={},x=0,W=function(n){return n&&(n.host||W(n.parentNode))},U=function(n,t){return t.map(function(e){if(n.contains(e))return e;var r=W(e);return r&&n.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",n,". Doing nothing"),null)}).filter(function(e){return!!e})},X=function(n,t,e,r){var a=U(t,Array.isArray(n)?n:[n]);g[e]||(g[e]=new WeakMap);var i=g[e],c=[],o=new Set,m=new Set(a),v=function(u){!u||o.has(u)||(o.add(u),v(u.parentNode))};a.forEach(v);var l=function(u){!u||m.has(u)||Array.prototype.forEach.call(u.children,function(f){if(o.has(f))l(f);else{var h=f.getAttribute(r),A=h!==null&&h!=="false",C=(s.get(f)||0)+1,O=(i.get(f)||0)+1;s.set(f,C),i.set(f,O),c.push(f),C===1&&A&&p.set(f,!0),O===1&&f.setAttribute(e,"true"),A||f.setAttribute(r,"true")}})};return l(t),o.clear(),x++,function(){c.forEach(function(u){var f=s.get(u)-1,h=i.get(u)-1;s.set(u,f),i.set(u,h),f||(p.has(u)||u.removeAttribute(r),p.delete(u)),h||u.removeAttribute(e)}),x--,x||(s=new WeakMap,s=new WeakMap,p=new WeakMap,g={})}},rn=function(n,t,e){e===void 0&&(e="data-aria-hidden");var r=Array.from(Array.isArray(n)?n:[n]),a=J(n);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),X(r,a,e,"aria-hidden")):function(){return null}};export{tn as R,_,y as a,Z as b,nn as c,en as e,b as f,rn as h,G as s,$ as u,w as z};
