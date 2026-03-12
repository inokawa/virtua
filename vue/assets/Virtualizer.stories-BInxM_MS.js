import{d as C,a,e,n as o,b,w as y,u as m,p as F,h as I,o as s,t as _,r as N,F as x,i as w}from"./iframe-CKh1NdY-.js";import{V as g}from"./Virtualizer-tpFdJr-N.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-oS7ZABWr.js";const T=d=>(F("data-v-15440bb7"),d=d(),I(),d),z={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},B=T(()=>e("div",{style:{backgroundColor:"steelblue",height:"600px"}},"footer",-1)),k=400,E=C({__name:"HeaderAndFooter",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((r,p)=>c[p%4]);return(r,p)=>(s(),a("div",z,[e("div",{style:o({backgroundColor:"burlywood",height:k+"px"})}," header ",4),b(m(g),{data:m(i),startMargin:k},{default:y(({item:n,index:t})=>[(s(),a("div",{key:t,style:o({height:n+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(t),5))]),_:1},8,["data"]),B]))}}),M=v(E,[["__scopeId","data-v-15440bb7"]]),A=40,H=60,V=C({__name:"Nested",setup(d){const c=[20,40,180,77],i=Array.from({length:1e3}).map((p,n)=>c[n%4]),r=N();return(p,n)=>(s(),a("div",{ref_key:"scrollRef",ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[e("div",{style:o({backgroundColor:"burlywood",padding:A+"px"})},[e("div",{style:o({backgroundColor:"steelblue",padding:H+"px"})},[b(m(g),{data:m(i),scrollRef:r.value,startMargin:A+H},{default:y(({item:t,index:l})=>[(s(),a("div",{key:l,style:o({height:t+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(l),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),$=v(V,[["__scopeId","data-v-afa479f8"]]),S=40,D=C({__name:"TableElement",setup(d){const c=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((p,n)=>n),r=N();return(p,n)=>(s(),a("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:r},[e("table",null,[e("thead",null,[e("tr",{style:o({height:S+"px"})},[(s(),a(x,null,w(c,(t,l)=>e("th",{style:o({width:`${t}px`})}," Header"+_(l),5)),64))],4)]),b(m(g),{scrollRef:r.value,data:m(i),startMargin:S,as:"tbody",item:"tr"},{default:y(({item:t})=>[(s(),a(x,null,w(c,(l,R)=>e("th",{style:o({width:`${l}px`})},_(t)+" "+_(R),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),L=v(D,[["__scopeId","data-v-05dcfc2a"]]),j={component:g},u={render:()=>({components:{Component:M},template:"<Component />"})},h={render:()=>({components:{Component:$},template:"<Component />"})},f={render:()=>({components:{Component:L},template:"<Component />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const q=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,q as __namedExportsOrder,j as default};
