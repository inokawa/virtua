function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Chat.stories-jtnwTaR6.js","./jsx-runtime-DR9Q75dM.js","./index-DRjF_FHU.js","./chunk-IJTMZAVK-C2T6v0-z.js","./VList-BToeLAfy.js","./Virtualizer-o9O8KrDL.js","./useRerender-DeSRbwdm.js","./useChildren-Fp7eolT8.js","./index-uWwxbAOW.js","./Collapse.stories-CDyswsH_.js","./common-B4Hkentz.js","./DatePicker.stories-UvS5R1MH.js","./DynamicColumns.stories-D-n8Nrbe.js","./Feed.stories-D4HxsGp4.js","./Keep offscreen items.stories-C0UjsL4p.js","./Lazy.stories-NSZLEbhU.js","./Loop.stories-DzrJCUmf.js","./NewWindow.stories-C1rnqgxl.js","./SSR.stories-Ky5RsDZT.js","./client-CGQ9Ocie.js","./Search.stories-DISW_WtH.js","./Sticky Group.stories-CrzYleVj.js","./With auto-animate.stories-DJgC5gK0.js","./With cmdk.stories-Cu1KOt_I.js","./extends-CF3RwP-h.js","./index-BgIlpccr.js","./With dnd-kit.stories-ukgJLz1_.js","./With material-ui.stories-Xjl0NMYJ.js","./emotion-react.browser.esm-MWh1n9zF.js","./objectWithoutPropertiesLoose-CAYKN5F1.js","./assertThisInitialized-Vk491Nbt.js","./inheritsLoose-D3k9JupM.js","./With pragmatic-drag-and-drop.stories-Coj_oa3D.js","./defineProperty-EJDAiRQC.js","./With radix-ui.stories-BGhT90Bt.js","./With radix-ui-C7wxDTLR.css","./With re-resizable.stories-B4h3v31G.js","./Zoomable.stories-DGXBG3W_.js","./VGrid.stories-DC8x_b6p.js","./VList.stories-ASNMUaUO.js","./Virtualizer.stories-iBLJn5qb.js","./WindowVirtualizer.stories-CTEbw-cT.js","./comparisons.stories-BVNxzY7X.js","./common-CLNgeDZn.js","./react-virtual-RAYhf2uW.js","./react-virtuoso-CArUMRFT.js","./react-virtualized-DycviQo6.js","./AutoSizer-DX5ezaDX.js","./react-window-Bl-Lk_Bn.js","./virtua-udUBLWTa.js","./react-virtual.stories-PEk5X2No.js","./react-virtualized.stories-C9hi2c0D.js","./react-virtuoso.stories-B-kNAktr.js","./react-window.stories-D2ZVIstG.js","./virtua.stories-CsGdHlnx.js","./entry-preview-XN498bYr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function _(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=_(e);fetch(e.href,r)}})();const E="modulepreload",O=function(i,o){return new URL(i,o).href},l={},t=function(o,_,n){let e=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");e=Promise.all(_.map(s=>{if(s=O(s,n),s in l)return;l[s]=!0;const c=s.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!n)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===s&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":E,c||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),c)return new Promise((m,d)=>{a.addEventListener("load",m),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return e.then(()=>o()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=v({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./stories/react/advanced/Chat.stories.tsx":async()=>t(()=>import("./Chat.stories-jtnwTaR6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Collapse.stories.tsx":async()=>t(()=>import("./Collapse.stories-CDyswsH_.js"),__vite__mapDeps([9,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DatePicker.stories.tsx":async()=>t(()=>import("./DatePicker.stories-UvS5R1MH.js"),__vite__mapDeps([11,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/DynamicColumns.stories.tsx":async()=>t(()=>import("./DynamicColumns.stories-D-n8Nrbe.js"),__vite__mapDeps([12,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Feed.stories.tsx":async()=>t(()=>import("./Feed.stories-D4HxsGp4.js"),__vite__mapDeps([13,1,2,10,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Keep offscreen items.stories.tsx":async()=>t(()=>import("./Keep offscreen items.stories-C0UjsL4p.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Lazy.stories.tsx":async()=>t(()=>import("./Lazy.stories-NSZLEbhU.js"),__vite__mapDeps([15,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Loop.stories.tsx":async()=>t(()=>import("./Loop.stories-DzrJCUmf.js"),__vite__mapDeps([16,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/NewWindow.stories.tsx":async()=>t(()=>import("./NewWindow.stories-C1rnqgxl.js"),__vite__mapDeps([17,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/SSR.stories.tsx":async()=>t(()=>import("./SSR.stories-Ky5RsDZT.js"),__vite__mapDeps([18,1,2,19,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Search.stories.tsx":async()=>t(()=>import("./Search.stories-DISW_WtH.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/Sticky Group.stories.tsx":async()=>t(()=>import("./Sticky Group.stories-CrzYleVj.js"),__vite__mapDeps([21,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With auto-animate.stories.tsx":async()=>t(()=>import("./With auto-animate.stories-DJgC5gK0.js"),__vite__mapDeps([22,1,2,3,5,6,7,8]),import.meta.url),"./stories/react/advanced/With cmdk.stories.tsx":async()=>t(()=>import("./With cmdk.stories-Cu1KOt_I.js"),__vite__mapDeps([23,1,2,24,8,25,3,5,6,7]),import.meta.url),"./stories/react/advanced/With dnd-kit.stories.tsx":async()=>t(()=>import("./With dnd-kit.stories-ukgJLz1_.js"),__vite__mapDeps([26,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With material-ui.stories.tsx":async()=>t(()=>import("./With material-ui.stories-Xjl0NMYJ.js"),__vite__mapDeps([27,1,2,24,28,29,30,31,4,5,6,7,8]),import.meta.url),"./stories/react/advanced/With pragmatic-drag-and-drop.stories.tsx":async()=>t(()=>import("./With pragmatic-drag-and-drop.stories-Coj_oa3D.js"),__vite__mapDeps([32,1,2,33,28,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/With radix-ui.stories.tsx":async()=>t(()=>import("./With radix-ui.stories-BGhT90Bt.js"),__vite__mapDeps([34,1,2,3,8,25,5,6,7,35]),import.meta.url),"./stories/react/advanced/With re-resizable.stories.tsx":async()=>t(()=>import("./With re-resizable.stories-B4h3v31G.js"),__vite__mapDeps([36,1,2,8,4,5,6,7]),import.meta.url),"./stories/react/advanced/Zoomable.stories.tsx":async()=>t(()=>import("./Zoomable.stories-DGXBG3W_.js"),__vite__mapDeps([37,1,2,4,5,6,7,8]),import.meta.url),"./stories/react/basics/VGrid.stories.tsx":async()=>t(()=>import("./VGrid.stories-DC8x_b6p.js"),__vite__mapDeps([38,1,2,6,8]),import.meta.url),"./stories/react/basics/VList.stories.tsx":async()=>t(()=>import("./VList.stories-ASNMUaUO.js"),__vite__mapDeps([39,1,2,10,4,5,6,7,8]),import.meta.url),"./stories/react/basics/Virtualizer.stories.tsx":async()=>t(()=>import("./Virtualizer.stories-iBLJn5qb.js"),__vite__mapDeps([40,1,2,10,5,6,7,8]),import.meta.url),"./stories/react/basics/WindowVirtualizer.stories.tsx":async()=>t(()=>import("./WindowVirtualizer.stories-CTEbw-cT.js"),__vite__mapDeps([41,1,2,10,6,7,8]),import.meta.url),"./stories/react/comparisons/comparisons.stories.tsx":async()=>t(()=>import("./comparisons.stories-BVNxzY7X.js"),__vite__mapDeps([42,1,2,43,3,44,8,45,46,24,47,33,30,29,48,31,49]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtual.stories.tsx":async()=>t(()=>import("./react-virtual.stories-PEk5X2No.js"),__vite__mapDeps([50,1,2,43,3,44,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtualized.stories.tsx":async()=>t(()=>import("./react-virtualized.stories-C9hi2c0D.js"),__vite__mapDeps([51,1,2,43,3,46,24,47,33,30,29,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-virtuoso.stories.tsx":async()=>t(()=>import("./react-virtuoso.stories-B-kNAktr.js"),__vite__mapDeps([52,1,2,43,3,45,8]),import.meta.url),"./stories/react/comparisons/for benchmarks/react-window.stories.tsx":async()=>t(()=>import("./react-window.stories-D2ZVIstG.js"),__vite__mapDeps([53,1,2,43,3,48,47,33,30,24,31]),import.meta.url),"./stories/react/comparisons/for benchmarks/virtua.stories.tsx":async()=>t(()=>import("./virtua.stories-CsGdHlnx.js"),__vite__mapDeps([54,1,2,43,3,49,8]),import.meta.url)};async function P(i){return f[i]()}const{composeConfigs:y,PreviewWeb:L,ClientApi:A}=__STORYBOOK_MODULE_PREVIEW_API__,T=async(i=[])=>{const o=await Promise.all([i[0]??t(()=>import("./entry-preview-XN498bYr.js"),__vite__mapDeps([55,2,8]),import.meta.url),i[1]??t(()=>import("./preview-m5ryCSDP.js"),__vite__mapDeps([]),import.meta.url)]);return y(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(P,T);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};