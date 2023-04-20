import{r as i}from"./index-fcd6345f.js";var o={},u={get exports(){return o},set exports(t){o=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i,m=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,y=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,f){var e,s={},p=null,_=null;f!==void 0&&(p=""+f),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)c.call(r,e)&&!j.hasOwnProperty(e)&&(s[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:m,type:t,key:p,ref:_,props:s,_owner:y.current}}n.Fragment=l;n.jsx=a;n.jsxs=a;(function(t){t.exports=n})(u);const d=o.Fragment,E=o.jsx,O=o.jsxs;export{d as F,O as a,E as j};
//# sourceMappingURL=jsx-runtime-6c4ce591.js.map
