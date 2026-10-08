import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,I as r,M as i,N as a,T as o,_ as s,a as c,h as l,k as u,p as d,v as f}from"./iframe-C1d1Oek2.js";import{n as p,t as m}from"./Virtualizer-DIZyxrYh.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BqBa3wPr.js";var _,v,y;function b(){return(b=e((()=>{c(),p(),_={style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},v=400,y=f({__name:`HeaderAndFooter`,setup(e){let t=[20,40,80,77],i=Array.from({length:1e3}).map((e,n)=>t[n%4]);return(e,t)=>(o(),l(`div`,_,[d(`div`,{style:n({backgroundColor:`burlywood`,height:`400px`})},` header `,4),s(a(m),{data:a(i),startMargin:v},{default:u(({item:e,index:t})=>[(o(),l(`div`,{key:t,style:n({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},r(t),5))]),_:1},8,[`data`]),t[0]||=d(`div`,{style:{backgroundColor:`steelblue`,height:`600px`}},`footer`,-1)]))}})})))()}var x;function S(){return(S=e((()=>{b(),h(),x=g(y,[[`__scopeId`,`data-v-5414d65f`]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`HeaderAndFooter`,description:``,tags:{},sourceFiles:[`/home/runner/work/virtua/virtua/stories/vue/basics/HeaderAndFooter.vue`]})})))()}var C;function w(){return(w=e((()=>{c(),p(),C=f({__name:`Nested`,setup(e){let t=[20,40,80,77],c=Array.from({length:1e3}).map((e,n)=>t[n%4]),f=i();return(e,t)=>(o(),l(`div`,{ref_key:`scrollRef`,ref:f,style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},[d(`div`,{style:n({backgroundColor:`burlywood`,padding:`40px`})},[d(`div`,{style:n({backgroundColor:`steelblue`,padding:`60px`})},[s(a(m),{data:a(c),scrollRef:f.value,startMargin:100},{default:u(({item:e,index:t})=>[(o(),l(`div`,{key:t,style:n({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},r(t),5))]),_:1},8,[`data`,`scrollRef`,`startMargin`])],4)],4)],512))}})})))()}var T;function E(){return(E=e((()=>{w(),h(),T=g(C,[[`__scopeId`,`data-v-44a38a5d`]]),C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`Nested`,description:``,tags:{},sourceFiles:[`/home/runner/work/virtua/virtua/stories/vue/basics/Nested.vue`]})})))()}var D,O;function k(){return(k=e((()=>{c(),p(),D={style:{height:`100vh`,overflowY:`auto`,overflowAnchor:`none`,display:`flex`,flexDirection:`column`}},O=f({__name:`Reverse`,setup(e){let c=[20,40,80,77],f=Array.from({length:1e3}).map((e,t)=>c[t%4]),p=i();return t(()=>{p.value?.scrollToIndex(999)}),(e,t)=>(o(),l(`div`,D,[t[0]||=d(`div`,{style:{flexGrow:1}},null,-1),s(a(m),{ref_key:`handleRef`,ref:p,data:a(f)},{default:u(({item:e,index:t})=>[(o(),l(`div`,{key:t,style:n({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},r(t),5))]),_:1},8,[`data`])]))}})})))()}var A;function j(){return(j=e((()=>{k(),h(),A=g(O,[[`__scopeId`,`data-v-cc56db0d`]]),O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:`default`,displayName:`Reverse`,description:``,tags:{},sourceFiles:[`/home/runner/work/virtua/virtua/stories/vue/basics/Reverse.vue`]})})))()}var M,N,P,F,I;function L(){return(L=e((()=>{p(),S(),E(),j(),M={component:m},N={render:()=>({components:{Component:x},template:`<Component />`})},P={render:()=>({components:{Component:T},template:`<Component />`})},F={render:()=>({components:{Component:A},template:`<Component />`})},I=[`HeaderAndFooter`,`Nested`,`Reverse`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ReverseComponent
    },
    template: "<Component />"
  })
}`,...F.parameters?.docs?.source}}}})))()}L();export{N as HeaderAndFooter,P as Nested,F as Reverse,I as __namedExportsOrder,M as default};