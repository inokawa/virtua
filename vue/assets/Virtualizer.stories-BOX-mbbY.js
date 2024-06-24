import{d as z,o as d,g as c,j as p,n as r,e as A,w as I,u as i,t as N,p as H,k as B,b as F}from"./vue.esm-bundler-B7NV8nxH.js";import{V as h}from"./Virtualizer-DsYsRrro.js";import{_ as S}from"./_plugin-vue_export-helper-DQenFFzL.js";const V=n=>(H("data-v-467a80dc"),n=n(),B(),n),R={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},M=V(()=>p("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),g=400,E=z({__name:"HeaderAndFooter",setup(n){const l=[20,40,180,77],m=e=>({index:e,size:l[e%4]+"px"}),_=Array.from({length:1e3}).map((e,o)=>m(o));return(e,o)=>(d(),c("div",R,[p("div",{style:r({backgroundColor:"burlywood",height:g+"px"})}," header ",4),A(i(h),{data:i(_),startMargin:g},{default:I(t=>[(d(),c("div",{key:t.index,style:r({height:t.size,background:"white",borderBottom:"solid 1px #ccc"})},N(t.index),5))]),_:1},8,["data"]),M]))}}),P=S(E,[["__scopeId","data-v-467a80dc"]]),f=40,x=60,Y=z({__name:"Nested",setup(n){const l=[20,40,180,77],m=o=>({index:o,size:l[o%4]+"px"}),_=Array.from({length:1e3}).map((o,t)=>m(t)),e=F();return(o,t)=>(d(),c("div",{ref_key:"scrollRef",ref:e,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[p("div",{style:r({backgroundColor:"burlywood",padding:f+"px"})},[p("div",{style:r({backgroundColor:"steelblue",padding:x+"px"})},[A(i(h),{data:i(_),scrollRef:e.value,startMargin:f+x},{default:I(u=>[(d(),c("div",{key:u.index,style:r({height:u.size,background:"white",borderBottom:"solid 1px #ccc"})},N(u.index),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),j=S(Y,[["__scopeId","data-v-e2a78a00"]]),q={component:h},a={render:()=>({components:{Component:P},template:"<Component />"})},s={render:()=>({components:{Component:j},template:"<Component />"})};var v,C,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,w,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const G=["HeaderAndFooter","Nested"];export{a as HeaderAndFooter,s as Nested,G as __namedExportsOrder,q as default};
