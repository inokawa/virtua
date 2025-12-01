import{d as x,k as I,l as y,u,m as d,n as _,p as k,t as i,c as w,r as p,q as n,s as V,A,B as H}from"./iframe-DNrFp9Sp.js";import{V as g}from"./VList-Dyt_ibGH.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-Dg8UJoiX.js";import"./utils-B8qig9U6.js";const E=x({__name:"Default",setup(z){const m=[20,40,180,77],c=Array.from({length:1e3}).map((t,a)=>m[a%4]);return(t,a)=>(d(),I(u(g),{data:u(c),style:{height:"100vh"}},{default:y(({item:r,index:o})=>[(d(),_("div",{key:o,style:k({height:r+"px",background:"white",borderBottom:"solid 1px #ccc"})},i(o),5))]),_:1},8,["data"]))}}),N=b(E,[["__scopeId","data-v-67604d16"]]),T={style:{padding:"10px"}},$=x({__name:"Horizontal",setup(z){const m=[40,180,77],c=Array.from({length:1e3}).map((t,a)=>m[a%3]);return(t,a)=>(d(),_("div",T,[w(u(g),{data:u(c),style:{width:"100%",height:"200px"},horizontal:""},{default:y(({item:r,index:o})=>[(d(),_("div",{key:o,style:k({width:r+"px",background:"white",borderRight:"solid 1px #ccc"})},i(o),5))]),_:1},8,["data"])]))}}),L=b($,[["__scopeId","data-v-e55f6f77"]]),O={style:{height:"100%",display:"flex","flex-direction":"column"}},q=["value"],M=x({__name:"Controlls",setup(z){const m=[20,40,180,77],c=s=>({index:s,height:m[s%4]+"px"}),t=p(Array.from({length:1e3}).map((s,l)=>c(l))),a=p(0),r=p(!1),o=p(567),h=p(!1),S=p(),B=()=>{S.value?.scrollToIndex(o.value)},D=()=>{const s=Array.from({length:100}).map((l,e)=>c(e+t.value.length));t.value=h.value?[...s,...t.value]:[...t.value,...s]};return(s,l)=>(d(),_("div",O,[n("div",null,"offset: "+i(a.value),1),n("div",null,"scrolling: "+i(r.value),1),n("div",null,[n("input",{type:"number",value:o.value,onInput:l[0]||(l[0]=e=>{o.value=Number(e.target.value)})},null,40,q),n("button",{onClick:B},"scrollToIndex")]),n("div",null,[n("button",{onClick:D},"append"),n("label",null,[V(n("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=e=>h.value=e)},null,512),[[H,h.value]]),A(" prepend")])]),w(u(g),{ref_key:"handle",ref:S,data:t.value,shift:h.value,onScroll:e=>{a.value=e,r.value=!0},onScrollEnd:()=>{r.value=!1}},{default:y(({item:e})=>[(d(),_("div",{key:e.index,style:k({height:e.height,background:"white",borderBottom:"solid 1px #ccc"})},i(e.index),5))]),_:1},8,["data","shift","onScroll","onScrollEnd"])]))}}),R=b(M,[["__scopeId","data-v-beca06e1"]]),P={component:g},f={render:()=>({components:{Component:N},template:"<Component />"})},v={render:()=>({components:{Component:L},template:"<Component />"})},C={render:()=>({components:{Component:R},template:"<Component />"})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Q=["Default","Horizontal","Controlls"];export{C as Controlls,f as Default,v as Horizontal,Q as __namedExportsOrder,P as default};
