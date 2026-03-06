import{d as x,c as B,w as y,u,o as d,a as _,n as b,t as i,b as w,r as p,e as n,f as H,v as A,g as E}from"./iframe-FSNbKt7F.js";import{V as g}from"./VList-CwvPk5bz.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-ZwsjVgli.js";import"./utils-Gv5sTYlY.js";const N=x({__name:"Default",setup(z){const m=[20,40,180,77],c=Array.from({length:1e3}).map((e,r)=>m[r%4]);return(e,r)=>(d(),B(u(g),{data:u(c),style:{height:"100vh"}},{default:y(({item:s,index:a})=>[(d(),_("div",{key:a,style:b({height:s+"px",background:"white",borderBottom:"solid 1px #ccc"})},i(a),5))]),_:1},8,["data"]))}}),T=k(N,[["__scopeId","data-v-d8f10d17"]]),$={style:{padding:"10px"}},L=x({__name:"Horizontal",setup(z){const m=[40,180,77],c=Array.from({length:1e3}).map((e,r)=>m[r%3]);return(e,r)=>(d(),_("div",$,[w(u(g),{data:u(c),style:{width:"100%",height:"200px"},horizontal:""},{default:y(({item:s,index:a})=>[(d(),_("div",{key:a,style:b({width:s+"px",background:"white",borderRight:"solid 1px #ccc"})},i(a),5))]),_:1},8,["data"])]))}}),O=k(L,[["__scopeId","data-v-964efdb8"]]),M={style:{height:"100%",display:"flex","flex-direction":"column"}},R=["value"],U=x({__name:"Controlls",setup(z){const m=[20,40,180,77],c=t=>({index:t,height:m[t%4]+"px"}),e=p(Array.from({length:1e3}).map((t,l)=>c(l))),r=p(0),s=p(!1),a=p(567),f=p(!1),S=p(),D=()=>{S.value?.scrollToIndex(a.value)},I=()=>{const t=Array.from({length:100}).map((l,o)=>c(o+e.value.length));e.value=f.value?[...t,...e.value]:[...e.value,...t]},V=()=>{const t=[...e.value];t.pop(),e.value=t};return(t,l)=>(d(),_("div",M,[n("div",null,"offset: "+i(r.value),1),n("div",null,"scrolling: "+i(s.value),1),n("div",null,[n("input",{type:"number",value:a.value,onInput:l[0]||(l[0]=o=>{a.value=Number(o.target.value)})},null,40,R),n("button",{onClick:D},"scrollToIndex")]),n("div",null,[n("button",{onClick:I},"append"),n("label",null,[H(n("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=o=>f.value=o)},null,512),[[A,f.value]]),E(" prepend")]),n("button",{onClick:V},"pop")]),w(u(g),{ref_key:"handle",ref:S,data:e.value,shift:f.value,onScroll:o=>{r.value=o,s.value=!0},onScrollEnd:()=>{s.value=!1}},{default:y(({item:o})=>[(d(),_("div",{key:o.index,style:b({height:o.height,background:"white",borderBottom:"solid 1px #ccc"})},i(o.index),5))]),_:1},8,["data","shift","onScroll","onScrollEnd"])]))}}),j=k(U,[["__scopeId","data-v-d8e56627"]]),Q={component:g},h={render:()=>({components:{Component:T},template:"<Component />"})},v={render:()=>({components:{Component:O},template:"<Component />"})},C={render:()=>({components:{Component:j},template:"<Component />"})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const W=["Default","Horizontal","Controlls"];export{C as Controlls,h as Default,v as Horizontal,W as __namedExportsOrder,Q as default};
