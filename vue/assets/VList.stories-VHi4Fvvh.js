import{d as x,j as B,k as y,u,h as d,l as _,n as k,t as i,c as w,r as p,m as n,p as H,y as A,z as E}from"./iframe-CJrT3t4x.js";import{V as g}from"./VList-emXC53HN.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-1ztr9K3e.js";import"./utils-BjWZxIVt.js";const N=x({__name:"Default",setup(z){const m=[20,40,180,77],c=Array.from({length:1e3}).map((e,r)=>m[r%4]);return(e,r)=>(d(),B(u(g),{data:u(c),style:{height:"100vh"}},{default:y(({item:s,index:a})=>[(d(),_("div",{key:a,style:k({height:s+"px",background:"white",borderBottom:"solid 1px #ccc"})},i(a),5))]),_:1},8,["data"]))}}),T=b(N,[["__scopeId","data-v-d8f10d17"]]),$={style:{padding:"10px"}},L=x({__name:"Horizontal",setup(z){const m=[40,180,77],c=Array.from({length:1e3}).map((e,r)=>m[r%3]);return(e,r)=>(d(),_("div",$,[w(u(g),{data:u(c),style:{width:"100%",height:"200px"},horizontal:""},{default:y(({item:s,index:a})=>[(d(),_("div",{key:a,style:k({width:s+"px",background:"white",borderRight:"solid 1px #ccc"})},i(a),5))]),_:1},8,["data"])]))}}),O=b(L,[["__scopeId","data-v-964efdb8"]]),j={style:{height:"100%",display:"flex","flex-direction":"column"}},M=["value"],R=x({__name:"Controlls",setup(z){const m=[20,40,180,77],c=t=>({index:t,height:m[t%4]+"px"}),e=p(Array.from({length:1e3}).map((t,l)=>c(l))),r=p(0),s=p(!1),a=p(567),h=p(!1),S=p(),D=()=>{S.value?.scrollToIndex(a.value)},I=()=>{const t=Array.from({length:100}).map((l,o)=>c(o+e.value.length));e.value=h.value?[...t,...e.value]:[...e.value,...t]},V=()=>{const t=[...e.value];t.pop(),e.value=t};return(t,l)=>(d(),_("div",j,[n("div",null,"offset: "+i(r.value),1),n("div",null,"scrolling: "+i(s.value),1),n("div",null,[n("input",{type:"number",value:a.value,onInput:l[0]||(l[0]=o=>{a.value=Number(o.target.value)})},null,40,M),n("button",{onClick:D},"scrollToIndex")]),n("div",null,[n("button",{onClick:I},"append"),n("label",null,[H(n("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=o=>h.value=o)},null,512),[[A,h.value]]),E(" prepend")]),n("button",{onClick:V},"pop")]),w(u(g),{ref_key:"handle",ref:S,data:e.value,shift:h.value,onScroll:o=>{r.value=o,s.value=!0},onScrollEnd:()=>{s.value=!1}},{default:y(({item:o})=>[(d(),_("div",{key:o.index,style:k({height:o.height,background:"white",borderBottom:"solid 1px #ccc"})},i(o.index),5))]),_:1},8,["data","shift","onScroll","onScrollEnd"])]))}}),U=b(R,[["__scopeId","data-v-d8e56627"]]),Q={component:g},f={render:()=>({components:{Component:T},template:"<Component />"})},v={render:()=>({components:{Component:O},template:"<Component />"})},C={render:()=>({components:{Component:U},template:"<Component />"})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HorizontalComponent
    },
    template: "<Component />"
  })
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ControllsComponent
    },
    template: "<Component />"
  })
}`,...C.parameters?.docs?.source}}};const W=["Default","Horizontal","Controlls"];export{C as Controlls,f as Default,v as Horizontal,W as __namedExportsOrder,Q as default};
