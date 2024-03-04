import{d as v,o as a,g as s,j as d,n as r,e as y,w as C,u as c,t as A}from"./vue.esm-bundler-CbvoPaxB.js";import{V as _}from"./Virtualizer-NvVxlUOi.js";import{_ as H}from"./_plugin-vue_export-helper-DyODKt5_.js";const w={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},i=400,p=600,h=v({__name:"HeaderAndFooter",setup(b){const f=[20,40,180,77],g=e=>({index:e,size:f[e%4]+"px"}),x=Array.from({length:1e3}).map((e,n)=>g(n));return(e,n)=>(a(),s("div",w,[d("div",{style:r({backgroundColor:"burlywood",height:i+"px"})}," header ",4),y(c(_),{data:c(x),startMargin:i,endMargin:p},{default:C(t=>[(a(),s("div",{key:t.index,style:r({height:t.size,background:"white",borderBottom:"solid 1px #ccc"})},A(t.index),5))]),_:1},8,["data"]),d("div",{style:r({backgroundColor:"steelblue",height:p+"px"})}," footer ",4)]))}}),F=H(h,[["__scopeId","data-v-1b2ffd25"]]);h.__docgenInfo={exportName:"default",displayName:"HeaderAndFooter",description:"",tags:{},sourceFiles:["/home/runner/work/virtua/virtua/stories/vue/HeaderAndFooter.vue"]};const B={component:_},o={render:()=>({components:{Component:F},template:"<Component />"})};var m,l,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const N=["HeaderAndFooter"];export{o as HeaderAndFooter,N as __namedExportsOrder,B as default};
