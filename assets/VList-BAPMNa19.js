import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{r as o}from"./index-DRjF_FHU.js";import{V as R}from"./Virtualizer-CaPS7AGl.js";const k=o.forwardRef(({children:r,count:n,overscan:d,itemSize:c,shift:f,horizontal:e,keepMounted:a,reverse:m,cache:p,ssrCount:u,item:x,onScroll:V,onScrollEnd:v,style:y,...h},j)=>{const s=o.useRef(null),l=m&&!e;let i=t.jsx(R,{ref:j,scrollRef:l?s:void 0,count:n,overscan:d,itemSize:c,shift:f,horizontal:e,keepMounted:a,cache:p,ssrCount:u,item:x,onScroll:V,onScrollEnd:v,children:r});return l&&(i=t.jsx("div",{style:{visibility:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"100%"},children:i})),t.jsx("div",{ref:s,...h,style:{display:e?"inline-block":"block",[e?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...y},children:i})});k.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",methods:[],displayName:"VList"};export{k as V};