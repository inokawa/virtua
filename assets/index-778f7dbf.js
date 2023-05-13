import{r as a}from"./index-c6dae603.js";var c={exports:{}},f={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a;function p(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var d=typeof Object.is=="function"?Object.is:p,v=o.useState,S=o.useEffect,l=o.useLayoutEffect,m=o.useDebugValue;function x(t,e){var r=e(),u=v({inst:{value:r,getSnapshot:e}}),n=u[0].inst,i=u[1];return l(function(){n.value=r,n.getSnapshot=e,s(n)&&i({inst:n})},[t,r,e]),S(function(){return s(n)&&i({inst:n}),t(function(){s(n)&&i({inst:n})})},[t]),m(r),r}function s(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!d(t,r)}catch{return!0}}function y(t,e){return e()}var E=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:x;f.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:E;c.exports=f;var w=c.exports;export{w as s};
//# sourceMappingURL=index-778f7dbf.js.map
