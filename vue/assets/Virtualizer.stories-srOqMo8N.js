import{d as x,o as n,g as s,j as _,n as d,e as C,w as v,u as c,t as y,p as w,k}from"./vue.esm-bundler-BDuSoBIa.js";import{V as h}from"./Virtualizer-Bj04_NeL.js";import{_ as A}from"./_plugin-vue_export-helper-C-eE2DD6.js";const b=e=>(w("data-v-7ad891a2"),e=e(),k(),e),z={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},H=b(()=>_("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),p=400,S=x({__name:"HeaderAndFooter",setup(e){const u=[20,40,180,77],f=o=>({index:o,size:u[o%4]+"px"}),g=Array.from({length:1e3}).map((o,a)=>f(a));return(o,a)=>(n(),s("div",z,[_("div",{style:d({backgroundColor:"burlywood",height:p+"px"})}," header ",4),C(c(h),{data:c(g),startMargin:p},{default:v(r=>[(n(),s("div",{key:r.index,style:d({height:r.size,background:"white",borderBottom:"solid 1px #ccc"})},y(r.index),5))]),_:1},8,["data"]),H]))}}),F=A(S,[["__scopeId","data-v-7ad891a2"]]),E={component:h},t={render:()=>({components:{Component:F},template:"<Component />"})};var i,m,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const N=["HeaderAndFooter"];export{t as HeaderAndFooter,N as __namedExportsOrder,E as default};
