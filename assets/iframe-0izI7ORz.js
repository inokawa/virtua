function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Chat.stories-L4MGCGie.js","./jsx-runtime-DiTpbvcX.js","./index-BqFXtf2T.js","./index-xJp9Kd2E.js","./VList-D4x_btea.js","./Virtualizer-K-LSpilM.js","./useRerender-C26KvfGx.js","./useChildren-DJqhcXui.js","./index-ChcDFWtF.js","./Collapse and remove.stories-TGjYxty2.js","./common-dEik_yUu.js","./Collapse and scroll.stories-DtWPhQZh.js","./DatePicker.stories-Cvqb6H4Y.js","./DynamicColumns.stories-RVjrmGXd.js","./Feed.stories-DloujN1C.js","./Lazy.stories-C1P_L7u5.js","./Loop.stories-DwWXSi-f.js","./SSR.stories-5KNUALIG.js","./client-B6vAMQfc.js","./Search.stories-CryGIaNS.js","./With auto-animate.stories-BSbVJqX3.js","./With cmdk.stories-S4cI2NRk.js","./extends-B6xKY8K9.js","./With dnd-kit.stories-BE7eFsBT.js","./With material-ui.stories-DZYT6Jqd.js","./objectWithoutPropertiesLoose-1QL-frMM.js","./emotion-react.browser.esm-DXLLLGwI.js","./hoist-non-react-statics.cjs-BRXMYn1-.js","./assertThisInitialized-B9jnkVVz.js","./inheritsLoose-1HkgTRWY.js","./setPrototypeOf-DgZC2w_0.js","./With pragmatic-drag-and-drop.stories-DkhOe20Z.js","./defineProperty-CGxbSGuy.js","./raf-schd.esm-CmoV45_-.js","./With radix-ui.stories-CCn2LVA1.js","./With radix-ui-B1NWoeXM.css","./With re-resizable.stories-Bdj9scid.js","./With react-beautiful-dnd.stories-Dx5FhAUb.js","./memoize-one.esm-CcMeOnPo.js","./Zoomable.stories-BSwI0ymm.js","./VGrid.stories-DLQRRDDb.js","./VList.stories-Csak8AfA.js","./Virtualizer.stories-AMxdQioR.js","./WindowVirtualizer.stories-j5PVOi04.js","./comparisons.stories-KoXwQZRh.js","./common-DoLPdg3h.js","./react-virtual-TOqTnJJZ.js","./react-virtuoso-J2EJ0-NB.js","./react-virtualized-Cknhm42-.js","./AutoSizer-B7UFab61.js","./react-window-B5xFLALV.js","./virtua-BUrrLerI.js","./react-virtual.stories-Doa8dkru.js","./react-virtualized.stories-CVPsRczl.js","./react-virtuoso.stories-C0NrxbKq.js","./react-window.stories-BpWOidX2.js","./virtua.stories-Dx17DfJ5.js","./entry-preview-Ddz7D9_z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function _(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=_(e);fetch(e.href,r)}})();const E="modulepreload",O=function(o,i){return new URL(o,i).href},l={},t=function(i,_,n){let e=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");e=Promise.all(_.map(s=>{if(s=O(s,n),s in l)return;l[s]=!0;const c=s.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":E,c||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),c)return new Promise((m,d)=>{a.addEventListener("load",m),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=v({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./stories/react/advanced/Chat.stories.tsx":async()=>t(()=>import("./Chat.stories-L4MGCGie.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse and remove.stories.tsx":async()=>t(()=>import("./Collapse and remove.stories-TGjYxty2.js"),__vite__mapDeps([9,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse and scroll.stories.tsx":async()=>t(()=>import("./Collapse and scroll.stories-DtWPhQZh.js"),__vite__mapDeps([11,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DatePicker.stories.tsx":async()=>t(()=>import("./DatePicker.stories-Cvqb6H4Y.js"),__vite__mapDeps([12,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DynamicColumns.stories.tsx":async()=>t(()=>import("./DynamicColumns.stories-RVjrmGXd.js"),__vite__mapDeps([13,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Feed.stories.tsx":async()=>t(()=>import("./Feed.stories-DloujN1C.js"),__vite__mapDeps([14,1,2,10,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Lazy.stories.tsx":async()=>t(()=>import("./Lazy.stories-C1P_L7u5.js"),__vite__mapDeps([15,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Loop.stories.tsx":async()=>t(()=>import("./Loop.stories-DwWXSi-f.js"),__vite__mapDeps([16,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/SSR.stories.tsx":async()=>t(()=>import("./SSR.stories-5KNUALIG.js"),__vite__mapDeps([17,1,2,18,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Search.stories.tsx":async()=>t(()=>import("./Search.stories-CryGIaNS.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With auto-animate.stories.tsx":async()=>t(()=>import("./With auto-animate.stories-BSbVJqX3.js"),__vite__mapDeps([20,1,2,3,5,6,7,8]),import.meta.url),"./stories/react/advanced/With cmdk.stories.tsx":async()=>t(()=>import("./With cmdk.stories-S4cI2NRk.js"),__vite__mapDeps([21,1,2,22,8,3,5,6,7]),import.meta.url),"./stories/react/advanced/With dnd-kit.stories.tsx":async()=>t(()=>import("./With dnd-kit.stories-BE7eFsBT.js"),__vite__mapDeps([23,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With material-ui.stories.tsx":async()=>t(()=>import("./With material-ui.stories-DZYT6Jqd.js"),__vite__mapDeps([24,1,2,22,25,26,27,28,29,30,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With pragmatic-drag-and-drop.stories.tsx":async()=>t(()=>import("./With pragmatic-drag-and-drop.stories-DkhOe20Z.js"),__vite__mapDeps([31,1,2,32,33,26,27,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With radix-ui.stories.tsx":async()=>t(()=>import("./With radix-ui.stories-CCn2LVA1.js"),__vite__mapDeps([34,1,2,3,22,8,5,6,7,35]),import.meta.url),"./stories/react/advanced/With re-resizable.stories.tsx":async()=>t(()=>import("./With re-resizable.stories-Bdj9scid.js"),__vite__mapDeps([36,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With react-beautiful-dnd.stories.tsx":async()=>t(()=>import("./With react-beautiful-dnd.stories-Dx5FhAUb.js"),__vite__mapDeps([37,1,2,29,30,22,32,27,8,38,33,25,5,6,7]),import.meta.url),"./stories/react/advanced/Zoomable.stories.tsx":async()=>t(()=>import("./Zoomable.stories-BSwI0ymm.js"),__vite__mapDeps([39,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/basics/VGrid.stories.tsx":async()=>t(()=>import("./VGrid.stories-DLQRRDDb.js"),__vite__mapDeps([40,1,2,6,8]),import.meta.url),"./stories/react/basics/VList.stories.tsx":async()=>t(()=>import("./VList.stories-Csak8AfA.js"),__vite__mapDeps([41,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/basics/Virtualizer.stories.tsx":async()=>t(()=>import("./Virtualizer.stories-AMxdQioR.js"),__vite__mapDeps([42,1,2,10,5,6,7,8]),import.meta.url),"./stories/react/basics/WindowVirtualizer.stories.tsx":async()=>t(()=>import("./WindowVirtualizer.stories-j5PVOi04.js"),__vite__mapDeps([43,1,2,10,6,7,8]),import.meta.url),"./stories/react/comparisons/comparisons.stories.tsx":async()=>t(()=>import("./comparisons.stories-KoXwQZRh.js"),__vite__mapDeps([44,1,2,45,3,46,8,47,48,22,49,32,28,30,25,50,29,38,51]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtual.stories.tsx":async()=>t(()=>import("./react-virtual.stories-Doa8dkru.js"),__vite__mapDeps([52,1,2,45,3,46,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtualized.stories.tsx":async()=>t(()=>import("./react-virtualized.stories-CVPsRczl.js"),__vite__mapDeps([53,1,2,45,3,48,22,49,32,28,30,25,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtuoso.stories.tsx":async()=>t(()=>import("./react-virtuoso.stories-C0NrxbKq.js"),__vite__mapDeps([54,1,2,45,3,47,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-window.stories.tsx":async()=>t(()=>import("./react-window.stories-BpWOidX2.js"),__vite__mapDeps([55,1,2,45,3,50,49,32,28,30,22,29,38]),import.meta.url),"./stories/react/comparisons/for benchmarks/virtua.stories.tsx":async()=>t(()=>import("./virtua.stories-Dx17DfJ5.js"),__vite__mapDeps([56,1,2,45,3,51,8]),import.meta.url)};async function f(o){return P[o]()}const{composeConfigs:y,PreviewWeb:L,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,T=async()=>{const o=await Promise.all([t(()=>import("./entry-preview-Ddz7D9_z.js"),__vite__mapDeps([57,2,18,8]),import.meta.url),t(()=>import("./preview-m5ryCSDP.js"),__vite__mapDeps([]),import.meta.url)]);return y(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(f,T);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;
