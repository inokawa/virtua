import{d as x,k as V,g as y,u,j as d,b as _,l as b,t as i,f as w,r as p,e as n,h as B,m as H,p as A}from"./iframe-MgFeYhMd.js";import{V as g}from"./VList-egOli11B.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BVGRo7vn.js";import"./utils-CFcXto2p.js";const E=x({__name:"Default",setup(z){const m=[20,40,180,77],c=Array.from({length:1e3}).map((t,a)=>m[a%4]);return(t,a)=>(d(),V(u(g),{data:u(c),style:{height:"100vh"}},{default:y(({item:r,index:o})=>[(d(),_("div",{key:o,style:b({height:r+"px",background:"white",borderBottom:"solid 1px #ccc"})},i(o),5))]),_:1},8,["data"]))}}),N=k(E,[["__scopeId","data-v-dfef624f"]]),T={style:{padding:"10px"}},$=x({__name:"Horizontal",setup(z){const m=[40,180,77],c=Array.from({length:1e3}).map((t,a)=>m[a%3]);return(t,a)=>(d(),_("div",T,[w(u(g),{data:u(c),style:{width:"100%",height:"200px"},horizontal:""},{default:y(({item:r,index:o})=>[(d(),_("div",{key:o,style:b({width:r+"px",background:"white",borderRight:"solid 1px #ccc"})},i(o),5))]),_:1},8,["data"])]))}}),L=k($,[["__scopeId","data-v-bdfa1fc7"]]),O={style:{height:"100%",display:"flex","flex-direction":"column"}},j=["value"],M=x({__name:"Controlls",setup(z){const m=[20,40,180,77],c=s=>({index:s,height:m[s%4]+"px"}),t=p(Array.from({length:1e3}).map((s,l)=>c(l))),a=p(0),r=p(!1),o=p(567),f=p(!1),S=p(),D=()=>{S.value?.scrollToIndex(o.value)},I=()=>{const s=Array.from({length:100}).map((l,e)=>c(e+t.value.length));t.value=f.value?[...s,...t.value]:[...t.value,...s]};return(s,l)=>(d(),_("div",O,[n("div",null,"offset: "+i(a.value),1),n("div",null,"scrolling: "+i(r.value),1),n("div",null,[n("input",{type:"number",value:o.value,onInput:l[0]||(l[0]=e=>{o.value=Number(e.target.value)})},null,40,j),n("button",{onClick:D},"scrollToIndex")]),n("div",null,[n("button",{onClick:I},"append"),n("label",null,[B(n("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=e=>f.value=e)},null,512),[[A,f.value]]),H(" prepend")])]),w(u(g),{ref_key:"handle",ref:S,data:t.value,shift:f.value,onScroll:e=>{a.value=e,r.value=!0},onScrollEnd:()=>{r.value=!1}},{default:y(({item:e})=>[(d(),_("div",{key:e.index,style:b({height:e.height,background:"white",borderBottom:"solid 1px #ccc"})},i(e.index),5))]),_:1},8,["data","shift","onScroll","onScrollEnd"])]))}}),R=k(M,[["__scopeId","data-v-00d0512a"]]),P={component:g},h={render:()=>({components:{Component:N},template:"<Component />"})},v={render:()=>({components:{Component:L},template:"<Component />"})},C={render:()=>({components:{Component:R},template:"<Component />"})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Q=["Default","Horizontal","Controlls"];export{C as Controlls,h as Default,v as Horizontal,Q as __namedExportsOrder,P as default};
