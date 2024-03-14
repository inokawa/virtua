import{d as x,o as a,g as s,j as d,n as r,e as C,w as y,u as c,t as v}from"./vue.esm-bundler-CbvoPaxB.js";import{V as _}from"./Virtualizer-pman-Lc-.js";import{_ as w}from"./_plugin-vue_export-helper-BHkSwluB.js";const A={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},i=400,p=600,H=x({__name:"HeaderAndFooter",setup(k){const u=[20,40,180,77],g=e=>({index:e,size:u[e%4]+"px"}),f=Array.from({length:1e3}).map((e,n)=>g(n));return(e,n)=>(a(),s("div",A,[d("div",{style:r({backgroundColor:"burlywood",height:i+"px"})}," header ",4),C(c(_),{data:c(f),startMargin:i,endMargin:p},{default:y(t=>[(a(),s("div",{key:t.index,style:r({height:t.size,background:"white",borderBottom:"solid 1px #ccc"})},v(t.index),5))]),_:1},8,["data"]),d("div",{style:r({backgroundColor:"steelblue",height:p+"px"})}," footer ",4)]))}}),b=w(H,[["__scopeId","data-v-7356843c"]]),B={component:_},o={render:()=>({components:{Component:b},template:"<Component />"})};var m,l,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const S=["HeaderAndFooter"];export{o as HeaderAndFooter,S as __namedExportsOrder,B as default};
