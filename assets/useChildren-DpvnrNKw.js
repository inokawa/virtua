import{j as l}from"./jsx-runtime-DR9Q75dM.js";import{r as i}from"./index-DRjF_FHU.js";import{u as f,r as y,i as c,q as _}from"./useLatestRef-DtidVAlg.js";const T=i.memo(({_children:e,_resizer:r,_index:t,_offset:s,_hide:o,_as:m,_isHorizontal:n,_isSSR:u})=>{const a=i.useRef(null);f(()=>r(a[y],t),[t]);const p=i.useMemo(()=>{const d={position:o&&u?void 0:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:0,[n?c()?"right":"left":"top"]:s,visibility:!o||u?"visible":"hidden"};return n&&(d.display="flex"),d},[s,o,u,n]);return typeof m=="string"?l.jsx(m,{ref:a,style:p,children:e}):l.jsx(m,{ref:a,style:p,index:t,children:e})});T.__docgenInfo={description:"@internal",methods:[],displayName:"ListItem",props:{_children:{required:!0,tsType:{name:"ReactNode"},description:""},_resizer:{required:!0,tsType:{name:"signature",type:"function",raw:"(el: HTMLElement, i: number) => () => void",signature:{arguments:[{type:{name:"HTMLElement"},name:"el"},{type:{name:"number"},name:"i"}],return:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}}}},description:""},_index:{required:!0,tsType:{name:"number"},description:""},_offset:{required:!0,tsType:{name:"number"},description:""},_hide:{required:!0,tsType:{name:"boolean"},description:""},_as:{required:!0,tsType:{name:"union",raw:'"div" | CustomItemComponent',elements:[{name:"literal",value:'"div"'},{name:"ComponentType",elements:[{name:"CustomItemComponentProps"}],raw:"ComponentType<CustomItemComponentProps>"}]},description:""},_isHorizontal:{required:!0,tsType:{name:"boolean"},description:""},_isSSR:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""}}};const q=(e,r)=>i.useMemo(()=>{if(typeof e=="function")return[e,r||0];const t=_(e);return[s=>t[s],t.length]},[e,r]);export{T as L,q as u};
