import{d as x,o as s,g as d,j as n,n as r,e as C,w as y,u as m,t as _,p as D,k as L,b as V,F as b,l as w}from"./vue.esm-bundler-BiYP0pPG.js";import{V as g}from"./Virtualizer-BZoFBjSh.js";import{_ as v}from"./_plugin-vue_export-helper-C0KS6D70.js";const O=c=>(D("data-v-467a80dc"),c=c(),L(),c),P={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},Y=O(()=>n("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),k=400,j=x({__name:"HeaderAndFooter",setup(c){const l=[20,40,180,77],i=o=>({index:o,size:l[o%4]+"px"}),p=Array.from({length:1e3}).map((o,e)=>i(e));return(o,e)=>(s(),d("div",P,[n("div",{style:r({backgroundColor:"burlywood",height:k+"px"})}," header ",4),C(m(g),{data:m(p),startMargin:k},{default:y(t=>[(s(),d("div",{key:t.index,style:r({height:t.size,background:"white",borderBottom:"solid 1px #ccc"})},_(t.index),5))]),_:1},8,["data"]),Y]))}}),U=v(j,[["__scopeId","data-v-467a80dc"]]),A=40,z=60,W=x({__name:"Nested",setup(c){const l=[20,40,180,77],i=e=>({index:e,size:l[e%4]+"px"}),p=Array.from({length:1e3}).map((e,t)=>i(t)),o=V();return(e,t)=>(s(),d("div",{ref_key:"scrollRef",ref:o,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[n("div",{style:r({backgroundColor:"burlywood",padding:A+"px"})},[n("div",{style:r({backgroundColor:"steelblue",padding:z+"px"})},[C(m(g),{data:m(p),scrollRef:o.value,startMargin:A+z},{default:y(a=>[(s(),d("div",{key:a.index,style:r({height:a.size,background:"white",borderBottom:"solid 1px #ccc"})},_(a.index),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),q=v(W,[["__scopeId","data-v-e2a78a00"]]),H=40,G=x({__name:"TableElement",setup(c){const l=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((o,e)=>e),p=V();return(o,e)=>(s(),d("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:p},[n("table",null,[n("thead",null,[n("tr",{style:r({height:H+"px"})},[(s(),d(b,null,w(l,(t,a)=>n("th",{style:r({width:`${t}px`})},"Header"+_(a),5)),64))],4)]),C(m(g),{scrollRef:p.value,data:m(i),startMargin:H,as:"tbody",item:"tr"},{default:y(t=>[(s(),d(b,null,w(l,(a,$)=>n("th",{style:r({width:`${a}px`})},_(t)+" "+_($),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),J=v(G,[["__scopeId","data-v-999a6612"]]),Z={component:g},u={render:()=>({components:{Component:U},template:"<Component />"})},h={render:()=>({components:{Component:q},template:"<Component />"})},f={render:()=>({components:{Component:J},template:"<Component />"})};var I,S,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var R,F,T;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...(T=(F=h.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var B,E,M;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: TableComponent
    },
    template: "<Component />"
  })
}`,...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const ee=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,ee as __namedExportsOrder,Z as default};
