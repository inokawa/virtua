import{i as e}from"./preload-helper-xPQekRTU.js";import{A as t,C as n,E as r,M as i,N as a,d as o,g as s,h as c,i as l,k as u,l as d,p as f,w as p}from"./iframe-z67EwHsC.js";import{o as m,t as h}from"./vue-CLyjnD-R.js";import{n as g,t as _}from"./_plugin-vue_export-helper-C3HqjvoV.js";var v,y,b,x=e((()=>{l(),h(),v={style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},y=400,b=s({__name:`HeaderAndFooter`,setup(e){let s=[20,40,180,77],l=Array.from({length:1e3}).map((e,t)=>s[t%4]);return(e,s)=>(n(),f(`div`,v,[o(`div`,{style:i({backgroundColor:`burlywood`,height:`400px`})},` header `,4),c(t(m),{data:t(l),startMargin:y},{default:r(({item:e,index:t})=>[(n(),f(`div`,{key:t,style:i({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},a(t),5))]),_:1},8,[`data`]),s[0]||=o(`div`,{style:{backgroundColor:`steelblue`,height:`600px`}},`footer`,-1)]))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),g(),C=_(b,[[`__scopeId`,`data-v-15440bb7`]])})),T,E=e((()=>{l(),h(),T=s({__name:`Nested`,setup(e){let s=[20,40,180,77],l=Array.from({length:1e3}).map((e,t)=>s[t%4]),d=u();return(e,s)=>(n(),f(`div`,{ref_key:`scrollRef`,ref:d,style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},[o(`div`,{style:i({backgroundColor:`burlywood`,padding:`40px`})},[o(`div`,{style:i({backgroundColor:`steelblue`,padding:`60px`})},[c(t(m),{data:t(l),scrollRef:d.value,startMargin:100},{default:r(({item:e,index:t})=>[(n(),f(`div`,{key:t,style:i({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},a(t),5))]),_:1},8,[`data`,`scrollRef`,`startMargin`])],4)],4)],512))}})})),D=e((()=>{})),O,k=e((()=>{E(),E(),D(),g(),O=_(T,[[`__scopeId`,`data-v-afa479f8`]])})),A,j,M=e((()=>{l(),h(),A=40,j=s({__name:`TableElement`,setup(e){let s=[100,200,300,100,200,300,100,300,400,200],l=Array.from({length:1e4}).map((e,t)=>t),h=u();return(e,u)=>(n(),f(`div`,{style:{height:`500px`,overflow:`auto`},ref_key:`scrollRef`,ref:h},[o(`table`,null,[o(`thead`,null,[o(`tr`,{style:i({height:`40px`})},[(n(),f(d,null,p(s,(e,t)=>o(`th`,{style:i({width:`${e}px`})},` Header`+a(t),5)),64))],4)]),c(t(m),{scrollRef:h.value,data:t(l),startMargin:A,as:`tbody`,item:`tr`},{default:r(({item:e})=>[(n(),f(d,null,p(s,(t,n)=>o(`th`,{style:i({width:`${t}px`})},a(e)+` `+a(n),5)),64))]),_:1},8,[`scrollRef`,`data`])])],512))}})})),N=e((()=>{})),P,F=e((()=>{M(),M(),N(),g(),P=_(j,[[`__scopeId`,`data-v-05dcfc2a`]])})),I,L,R,z,B;e((()=>{h(),w(),k(),F(),I={component:m},L={render:()=>({components:{Component:C},template:`<Component />`})},R={render:()=>({components:{Component:O},template:`<Component />`})},z={render:()=>({components:{Component:P},template:`<Component />`})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: TableComponent
    },
    template: "<Component />"
  })
}`,...z.parameters?.docs?.source}}},B=[`HeaderAndFooter`,`Nested`,`TableElement`]}))();export{L as HeaderAndFooter,R as Nested,z as TableElement,B as __namedExportsOrder,I as default};