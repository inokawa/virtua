import{j as f}from"./jsx-runtime-f8a6c6ea.js";import{r as i}from"./index-5284b0bf.js";import{b as d,c as y,r as h}from"./Window-2217e727.js";const m=i.memo(({_children:l,_resizer:p,_store:e,_index:t,_element:_,_isHorizontal:r,_isRtl:c})=>{const n=i.useRef(null),s=d(e,()=>e._getItemOffset(t),!0),a=d(e,()=>e._isUnmeasuredItem(t),!0);return y(()=>p._observeItem(n[h],t),[t]),f(_,{ref:n,style:i.useMemo(()=>{const u=c?"right":"left",o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":u]:0,[r?u:"top"]:s,visibility:a?"hidden":"visible"};return r&&(o.display="flex"),o},[s,a]),children:l})});try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{_children:{defaultValue:null,description:"",name:"_children",required:!0,type:{name:"ReactNode"}},_resizer:{defaultValue:null,description:"",name:"_resizer",required:!0,type:{name:"ListResizer"}},_store:{defaultValue:null,description:"",name:"_store",required:!0,type:{name:"VirtualStore"}},_index:{defaultValue:null,description:"",name:"_index",required:!0,type:{name:"number"}},_element:{defaultValue:null,description:"",name:"_element",required:!0,type:{name:'"div"'}},_isHorizontal:{defaultValue:null,description:"",name:"_isHorizontal",required:!0,type:{name:"boolean"}},_isRtl:{defaultValue:null,description:"",name:"_isRtl",required:!0,type:{name:"boolean"}}}}}catch{}export{m as L};
//# sourceMappingURL=ListItem-25b7751f.js.map