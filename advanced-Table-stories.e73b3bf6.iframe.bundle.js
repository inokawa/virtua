/*! For license information please see advanced-Table-stories.e73b3bf6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[499],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var e=__webpack_require__("./node_modules/react/index.js");var k="function"==typeof Object.is?Object.is:function h(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function t(a,b){return b()}:function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];return n((function(){c.value=d,c.getSnapshot=b,r(c)&&g({inst:c})}),[a,d,b]),m((function(){return r(c)&&g({inst:c}),a((function(){r(c)&&g({inst:c})}))}),[a]),p(d),d};exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u},"./node_modules/use-sync-external-store/shim/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js")},"./stories/advanced/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/react/List.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_1__.a},COLUMN_WIDTHS=[100,200,300,100,200,300,100,300,400,200],TableList=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({children,style,scrollSize},ref)=>{const[headerHeight,setHeaderHeight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),headerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{headerRef.current&&setHeaderHeight(headerRef.current.getBoundingClientRect().height)}),[]);const baseThStyle={color:"white",background:"darkgray"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style,ref},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{style:{height:scrollSize,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1},react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",{ref:headerRef,style:{position:"sticky",top:0,zIndex:1,height:20}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[0]}},"0"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[1]}},"1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[2]}},"2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[3]}},"3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[4]}},"4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[5]}},"5"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[6]}},"6"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[7]}},"7"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[8]}},"8"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{style:{...baseThStyle,minWidth:COLUMN_WIDTHS[9]}},"9"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",{style:{height:scrollSize,marginTop:headerHeight,position:"absolute",top:0,left:0}},children)))})),Table={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},element:TableList,itemElement:"tr"},Array.from({length:1e3}).map(((_,i)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:i},Array.from({length:10}).map(((_2,j)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:j,style:{minWidth:COLUMN_WIDTHS[j]}},i,", ",j)))))))};Table.parameters={...Table.parameters,docs:{...Table.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return /* @__PURE__ */React.createElement(List, {\n      style: {\n        width: "100%",\n        height: "75%",\n        background: "#fff",\n        overflow: "auto"\n      },\n      element: TableList,\n      itemElement: "tr"\n    }, Array.from({\n      length: 1e3\n    }).map((_, i) => /* @__PURE__ */React.createElement(Fragment, {\n      key: i\n    }, Array.from({\n      length: 10\n    }).map((_2, j) => /* @__PURE__ */React.createElement("td", {\n      key: j,\n      style: {\n        minWidth: COLUMN_WIDTHS[j]\n      }\n    }, i, ", ", j)))));\n  }\n}',...Table.parameters?.docs?.source}}}}}]);