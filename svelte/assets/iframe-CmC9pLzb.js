function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./VList.stories-d-1dzsOw.js","./props-BiVqxi0i.js","./Virtualizer-B7j0e1k5.js","./Virtualizer.stories-B4g75Fhd.js","./entry-preview-H5bC1sRO.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))_(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&_(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function _(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const E="modulepreload",m=function(n,o){return new URL(n,o).href},d={},u=function(o,i,_){let e=Promise.resolve();if(i&&i.length>0){const t=document.getElementsByTagName("link");e=Promise.all(i.map(r=>{if(r=m(r,_),r in d)return;d[r]=!0;const c=r.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!_)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===r&&(!c||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${f}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":E,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>o()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=p({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./stories/svelte/VList.stories.tsx":async()=>u(()=>import("./VList.stories-d-1dzsOw.js"),__vite__mapDeps([0,1,2]),import.meta.url),"./stories/svelte/Virtualizer.stories.tsx":async()=>u(()=>import("./Virtualizer.stories-B4g75Fhd.js"),__vite__mapDeps([3,1,2]),import.meta.url)};async function h(n){return w[n]()}const{composeConfigs:P,PreviewWeb:S,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,y=async(n=[])=>{const o=await Promise.all([n.at(0)??u(()=>import("./entry-preview-H5bC1sRO.js"),__vite__mapDeps([4,1]),import.meta.url),n.at(1)??u(()=>import("./preview-DPD4nxcH.js"),__vite__mapDeps([]),import.meta.url)]);return P(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S(h,y);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;
