import{d as y,b as a,e,f as C,l as o,g as v,u as m,s as F,x as I,j as s,t as _,r as N,F as x,y as w}from"./iframe-BzdsgJ0-.js";import{V as g}from"./Virtualizer-BsO86q9q.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Beowed2L.js";const T=d=>(F("data-v-df9e896c"),d=d(),I(),d),z={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},B=T(()=>e("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),k=400,E=y({__name:"HeaderAndFooter",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((r,l)=>c[l%4]);return(r,l)=>(s(),a("div",z,[e("div",{style:o({backgroundColor:"burlywood",height:k+"px"})}," header ",4),C(m(g),{data:m(i),startMargin:k},{default:v(({item:n,index:t})=>[(s(),a("div",{key:t,style:o({height:n+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(t),5))]),_:1},8,["data"]),B]))}}),M=b(E,[["__scopeId","data-v-df9e896c"]]),A=40,H=60,V=y({__name:"Nested",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((l,n)=>c[n%4]),r=N();return(l,n)=>(s(),a("div",{ref_key:"scrollRef",ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[e("div",{style:o({backgroundColor:"burlywood",padding:A+"px"})},[e("div",{style:o({backgroundColor:"steelblue",padding:H+"px"})},[C(m(g),{data:m(i),scrollRef:r.value,startMargin:A+H},{default:v(({item:t,index:p})=>[(s(),a("div",{key:p,style:o({height:t+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(p),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),$=b(V,[["__scopeId","data-v-df335e50"]]),S=40,D=y({__name:"TableElement",setup(d){const c=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((l,n)=>n),r=N();return(l,n)=>(s(),a("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:r},[e("table",null,[e("thead",null,[e("tr",{style:o({height:S+"px"})},[(s(),a(x,null,w(c,(t,p)=>e("th",{style:o({width:`${t}px`})},"Header"+_(p),5)),64))],4)]),C(m(g),{scrollRef:r.value,data:m(i),startMargin:S,as:"tbody",item:"tr"},{default:v(({item:t})=>[(s(),a(x,null,w(c,(p,R)=>e("th",{style:o({width:`${p}px`})},_(t)+" "+_(R),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),L=b(D,[["__scopeId","data-v-df198874"]]),W={component:g},u={render:()=>({components:{Component:M},template:"<Component />"})},h={render:()=>({components:{Component:$},template:"<Component />"})},f={render:()=>({components:{Component:L},template:"<Component />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: TableComponent
    },
    template: "<Component />"
  })
}`,...f.parameters?.docs?.source}}};const q=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,q as __namedExportsOrder,W as default};
