import{d as C,n as a,q as e,c as y,p as o,l as v,u as m,z as F,A as I,m as s,t as _,r as N,F as x,B as w}from"./iframe-B6IXbo8R.js";import{V as g}from"./Virtualizer-DEvD26xA.js";import{_ as b}from"./_plugin-vue_export-helper-GD5n107d.js";import"./preload-helper-PPVm8Dsz.js";const z=d=>(F("data-v-df9e896c"),d=d(),I(),d),B={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},T=z(()=>e("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),k=400,E=C({__name:"HeaderAndFooter",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((r,l)=>c[l%4]);return(r,l)=>(s(),a("div",B,[e("div",{style:o({backgroundColor:"burlywood",height:k+"px"})}," header ",4),y(m(g),{data:m(i),startMargin:k},{default:v(({item:n,index:t})=>[(s(),a("div",{key:t,style:o({height:n+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(t),5))]),_:1},8,["data"]),T]))}}),M=b(E,[["__scopeId","data-v-df9e896c"]]),A=40,H=60,V=C({__name:"Nested",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((l,n)=>c[n%4]),r=N();return(l,n)=>(s(),a("div",{ref_key:"scrollRef",ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[e("div",{style:o({backgroundColor:"burlywood",padding:A+"px"})},[e("div",{style:o({backgroundColor:"steelblue",padding:H+"px"})},[y(m(g),{data:m(i),scrollRef:r.value,startMargin:A+H},{default:v(({item:t,index:p})=>[(s(),a("div",{key:p,style:o({height:t+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(p),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),$=b(V,[["__scopeId","data-v-df335e50"]]),S=40,D=C({__name:"TableElement",setup(d){const c=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((l,n)=>n),r=N();return(l,n)=>(s(),a("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:r},[e("table",null,[e("thead",null,[e("tr",{style:o({height:S+"px"})},[(s(),a(x,null,w(c,(t,p)=>e("th",{style:o({width:`${t}px`})},"Header"+_(p),5)),64))],4)]),y(m(g),{scrollRef:r.value,data:m(i),startMargin:S,as:"tbody",item:"tr"},{default:v(({item:t})=>[(s(),a(x,null,w(c,(p,R)=>e("th",{style:o({width:`${p}px`})},_(t)+" "+_(R),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),L=b(D,[["__scopeId","data-v-df198874"]]),U={component:g},u={render:()=>({components:{Component:M},template:"<Component />"})},h={render:()=>({components:{Component:$},template:"<Component />"})},f={render:()=>({components:{Component:L},template:"<Component />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const W=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,W as __namedExportsOrder,U as default};
