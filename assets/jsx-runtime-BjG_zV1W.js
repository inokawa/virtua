var o={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(v,r,t){var e=null;if(t!==void 0&&(e=""+t),r.key!==void 0&&(e=""+r.key),"key"in r){t={};for(var x in r)x!=="key"&&(t[x]=r[x])}else t=r;return r=t.ref,{$$typeof:E,type:v,key:e,ref:r!==void 0?r:null,props:t}}s.Fragment=n;s.jsx=l;s.jsxs=l;o.exports=s;var u=o.exports;export{u as j};
