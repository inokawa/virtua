import{d as C,k as a,l as e,b as y,p as o,m as v,u as m,s as F,v as I,n as s,t as _,r as N,F as x,x as w}from"./iframe-ZEKpq4U4.js";import{V as g}from"./Virtualizer-GICFBRrk.js";import{_ as b}from"./_plugin-vue_export-helper-DZJuyPAm.js";import"./preload-helper-PPVm8Dsz.js";const T=c=>(F("data-v-3d724ccc"),c=c(),I(),c),z={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},B=T(()=>e("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),k=400,E=C({__name:"HeaderAndFooter",setup(c){const d=[20,40,180,77],i=Array.from({length:1e3}).map((r,l)=>d[l%4]);return(r,l)=>(s(),a("div",z,[e("div",{style:o({backgroundColor:"burlywood",height:k+"px"})}," header ",4),y(m(g),{data:m(i),startMargin:k},{default:v(({item:n,index:t})=>[(s(),a("div",{key:t,style:o({height:n+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(t),5))]),_:1},8,["data"]),B]))}}),M=b(E,[["__scopeId","data-v-3d724ccc"]]),A=40,H=60,V=C({__name:"Nested",setup(c){const d=[20,40,180,77],i=Array.from({length:1e3}).map((l,n)=>d[n%4]),r=N();return(l,n)=>(s(),a("div",{ref_key:"scrollRef",ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[e("div",{style:o({backgroundColor:"burlywood",padding:A+"px"})},[e("div",{style:o({backgroundColor:"steelblue",padding:H+"px"})},[y(m(g),{data:m(i),scrollRef:r.value,startMargin:A+H},{default:v(({item:t,index:p})=>[(s(),a("div",{key:p,style:o({height:t+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(p),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),$=b(V,[["__scopeId","data-v-29e66eef"]]),S=40,D=C({__name:"TableElement",setup(c){const d=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((l,n)=>n),r=N();return(l,n)=>(s(),a("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:r},[e("table",null,[e("thead",null,[e("tr",{style:o({height:S+"px"})},[(s(),a(x,null,w(d,(t,p)=>e("th",{style:o({width:`${t}px`})},"Header"+_(p),5)),64))],4)]),y(m(g),{scrollRef:r.value,data:m(i),startMargin:S,as:"tbody",item:"tr"},{default:v(({item:t})=>[(s(),a(x,null,w(d,(p,R)=>e("th",{style:o({width:`${p}px`})},_(t)+" "+_(R),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),L=b(D,[["__scopeId","data-v-10a8bbca"]]),W={component:g},u={render:()=>({components:{Component:M},template:"<Component />"})},h={render:()=>({components:{Component:$},template:"<Component />"})},f={render:()=>({components:{Component:L},template:"<Component />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const j=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,j as __namedExportsOrder,W as default};
