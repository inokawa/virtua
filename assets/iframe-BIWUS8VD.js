function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Chat.stories-BRKNyhPL.js","./jsx-runtime-WtcO95wV.js","./index-DaO3jVNX.js","./index-xJp9Kd2E.js","./VList-C7FSzbEc.js","./Virtualizer-DC_CXDP0.js","./useRerender-2nbuV_q9.js","./useChildren-BpMocZl7.js","./index-DpI4bZRz.js","./Collapse.stories-CFKWZNeS.js","./common-Bcsa0J7j.js","./DatePicker.stories-DEa2d9jy.js","./DynamicColumns.stories-DIhchALu.js","./Feed.stories-Dxx2wbJZ.js","./Keep offscreen items.stories-B2CbE4zn.js","./Lazy.stories-B53dlQjk.js","./Loop.stories-C9RV1mTP.js","./SSR.stories-CL37R4GJ.js","./client-C4sPHC_D.js","./Search.stories-CM89FB40.js","./With auto-animate.stories-DwOhi2vQ.js","./With cmdk.stories-IHi6JXLQ.js","./extends-B6xKY8K9.js","./index-YZsPVGoB.js","./With dnd-kit.stories-oblIh7lA.js","./With material-ui.stories-DQ8ANQ3A.js","./objectWithoutPropertiesLoose-1QL-frMM.js","./emotion-react.browser.esm-CgwcAgG2.js","./hoist-non-react-statics.cjs-Cit_kTu0.js","./assertThisInitialized-B9jnkVVz.js","./inheritsLoose-1HkgTRWY.js","./setPrototypeOf-DgZC2w_0.js","./With pragmatic-drag-and-drop.stories-BQA8RJr_.js","./defineProperty-CGxbSGuy.js","./raf-schd.esm-CmoV45_-.js","./With radix-ui.stories-BkrHI-V8.js","./With radix-ui-C7wxDTLR.css","./With re-resizable.stories-DEjyHpXz.js","./With react-beautiful-dnd.stories-DBONOvE1.js","./memoize-one.esm-CcMeOnPo.js","./Zoomable.stories-3aERAlN4.js","./VGrid.stories-OSC6LblG.js","./VList.stories-CBMAPL7Y.js","./Virtualizer.stories-CbwvqFq4.js","./WindowVirtualizer.stories-DXHrBPlE.js","./comparisons.stories-DcH5Gpco.js","./common-Dvm1o2Tb.js","./react-virtual-e31AP1Mn.js","./react-virtuoso-BkpDZUjx.js","./react-virtualized-8InSGG-2.js","./AutoSizer-CIxBGUy6.js","./react-window-DwJQOpK0.js","./virtua-4Z7qFuQh.js","./react-virtual.stories-sfiWUFqz.js","./react-virtualized.stories-wVqaKByM.js","./react-virtuoso.stories-DvzVG7Vn.js","./react-window.stories-vw2k2rZA.js","./virtua.stories-D2N9Hi2l.js","./entry-preview-QIBz1KtG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function _(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=_(e);fetch(e.href,r)}})();const E="modulepreload",O=function(o,i){return new URL(o,i).href},l={},t=function(i,_,n){let e=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");e=Promise.all(_.map(s=>{if(s=O(s,n),s in l)return;l[s]=!0;const c=s.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":E,c||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),c)return new Promise((m,d)=>{a.addEventListener("load",m),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>i()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=v({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./stories/react/advanced/Chat.stories.tsx":async()=>t(()=>import("./Chat.stories-BRKNyhPL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse.stories.tsx":async()=>t(()=>import("./Collapse.stories-CFKWZNeS.js"),__vite__mapDeps([9,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DatePicker.stories.tsx":async()=>t(()=>import("./DatePicker.stories-DEa2d9jy.js"),__vite__mapDeps([11,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DynamicColumns.stories.tsx":async()=>t(()=>import("./DynamicColumns.stories-DIhchALu.js"),__vite__mapDeps([12,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Feed.stories.tsx":async()=>t(()=>import("./Feed.stories-Dxx2wbJZ.js"),__vite__mapDeps([13,1,2,10,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Keep offscreen items.stories.tsx":async()=>t(()=>import("./Keep offscreen items.stories-B2CbE4zn.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Lazy.stories.tsx":async()=>t(()=>import("./Lazy.stories-B53dlQjk.js"),__vite__mapDeps([15,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Loop.stories.tsx":async()=>t(()=>import("./Loop.stories-C9RV1mTP.js"),__vite__mapDeps([16,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/SSR.stories.tsx":async()=>t(()=>import("./SSR.stories-CL37R4GJ.js"),__vite__mapDeps([17,1,2,18,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Search.stories.tsx":async()=>t(()=>import("./Search.stories-CM89FB40.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With auto-animate.stories.tsx":async()=>t(()=>import("./With auto-animate.stories-DwOhi2vQ.js"),__vite__mapDeps([20,1,2,3,5,6,7,8]),import.meta.url),"./stories/react/advanced/With cmdk.stories.tsx":async()=>t(()=>import("./With cmdk.stories-IHi6JXLQ.js"),__vite__mapDeps([21,1,2,22,8,23,3,5,6,7]),import.meta.url),"./stories/react/advanced/With dnd-kit.stories.tsx":async()=>t(()=>import("./With dnd-kit.stories-oblIh7lA.js"),__vite__mapDeps([24,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With material-ui.stories.tsx":async()=>t(()=>import("./With material-ui.stories-DQ8ANQ3A.js"),__vite__mapDeps([25,1,2,22,26,27,28,29,30,31,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With pragmatic-drag-and-drop.stories.tsx":async()=>t(()=>import("./With pragmatic-drag-and-drop.stories-BQA8RJr_.js"),__vite__mapDeps([32,1,2,33,34,27,28,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With radix-ui.stories.tsx":async()=>t(()=>import("./With radix-ui.stories-BkrHI-V8.js"),__vite__mapDeps([35,1,2,3,22,8,23,5,6,7,36]),import.meta.url),"./stories/react/advanced/With re-resizable.stories.tsx":async()=>t(()=>import("./With re-resizable.stories-DEjyHpXz.js"),__vite__mapDeps([37,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With react-beautiful-dnd.stories.tsx":async()=>t(()=>import("./With react-beautiful-dnd.stories-DBONOvE1.js"),__vite__mapDeps([38,1,2,30,31,22,33,28,8,39,34,26,5,6,7]),import.meta.url),"./stories/react/advanced/Zoomable.stories.tsx":async()=>t(()=>import("./Zoomable.stories-3aERAlN4.js"),__vite__mapDeps([40,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/basics/VGrid.stories.tsx":async()=>t(()=>import("./VGrid.stories-OSC6LblG.js"),__vite__mapDeps([41,1,2,6,8]),import.meta.url),"./stories/react/basics/VList.stories.tsx":async()=>t(()=>import("./VList.stories-CBMAPL7Y.js"),__vite__mapDeps([42,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/basics/Virtualizer.stories.tsx":async()=>t(()=>import("./Virtualizer.stories-CbwvqFq4.js"),__vite__mapDeps([43,1,2,10,5,6,7,8]),import.meta.url),"./stories/react/basics/WindowVirtualizer.stories.tsx":async()=>t(()=>import("./WindowVirtualizer.stories-DXHrBPlE.js"),__vite__mapDeps([44,1,2,10,6,7,8]),import.meta.url),"./stories/react/comparisons/comparisons.stories.tsx":async()=>t(()=>import("./comparisons.stories-DcH5Gpco.js"),__vite__mapDeps([45,1,2,46,3,47,8,48,49,22,50,33,29,31,26,51,30,39,52]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtual.stories.tsx":async()=>t(()=>import("./react-virtual.stories-sfiWUFqz.js"),__vite__mapDeps([53,1,2,46,3,47,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtualized.stories.tsx":async()=>t(()=>import("./react-virtualized.stories-wVqaKByM.js"),__vite__mapDeps([54,1,2,46,3,49,22,50,33,29,31,26,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtuoso.stories.tsx":async()=>t(()=>import("./react-virtuoso.stories-DvzVG7Vn.js"),__vite__mapDeps([55,1,2,46,3,48,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-window.stories.tsx":async()=>t(()=>import("./react-window.stories-vw2k2rZA.js"),__vite__mapDeps([56,1,2,46,3,51,50,33,29,31,22,30,39]),import.meta.url),"./stories/react/comparisons/for benchmarks/virtua.stories.tsx":async()=>t(()=>import("./virtua.stories-D2N9Hi2l.js"),__vite__mapDeps([57,1,2,46,3,52,8]),import.meta.url)};async function P(o){return f[o]()}const{composeConfigs:y,PreviewWeb:L,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,T=async()=>{const o=await Promise.all([t(()=>import("./entry-preview-QIBz1KtG.js"),__vite__mapDeps([58,2,18,8]),import.meta.url),t(()=>import("./preview-m5ryCSDP.js"),__vite__mapDeps([]),import.meta.url)]);return y(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(P,T);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;
