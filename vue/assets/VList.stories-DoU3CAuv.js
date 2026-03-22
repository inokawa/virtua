import{n as e}from"./chunk-BneVvdWh.js";import{A as t,D as n,E as r,O as i,a,d as o,f as s,h as c,i as l,j as u,k as d,m as f,p,u as m,x as h}from"./iframe-C9RY6t2E.js";import{r as g,t as _}from"./vue-D40AGNY_.js";import{n as v,t as y}from"./_plugin-vue_export-helper-6nPRbwJT.js";var b,x=e((()=>{l(),_(),b=c({__name:`Default`,setup(e){let n=[20,40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%4]);return(e,n)=>(h(),o(d(g),{data:d(i),style:{height:`100vh`}},{default:r(({item:e,index:n})=>[(h(),s(`div`,{key:n,style:t({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},u(n),5))]),_:1},8,[`data`]))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),v(),C=y(b,[[`__scopeId`,`data-v-d8f10d17`]])})),T,E,D=e((()=>{l(),_(),T={style:{padding:`10px`}},E=c({__name:`Horizontal`,setup(e){let n=[40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%3]);return(e,n)=>(h(),s(`div`,T,[f(d(g),{data:d(i),style:{width:`100%`,height:`200px`},horizontal:``},{default:r(({item:e,index:n})=>[(h(),s(`div`,{key:n,style:t({width:e+`px`,background:`white`,borderRight:`solid 1px #ccc`})},u(n),5))]),_:1},8,[`data`])]))}})})),O=e((()=>{})),k,A=e((()=>{D(),D(),O(),v(),k=y(E,[[`__scopeId`,`data-v-964efdb8`]])})),j,M,N,P=e((()=>{l(),_(),j={style:{height:`100%`,display:`flex`,"flex-direction":`column`}},M=[`value`],N=c({__name:`Controlls`,setup(e){let o=[20,40,180,77],c=e=>({index:e,height:o[e%4]+`px`}),l=i(Array.from({length:1e3}).map((e,t)=>c(t))),_=i(0),v=i(!1),y=i(567),b=i(!1),x=i(),S=()=>{x.value?.scrollToIndex(y.value)},C=()=>{let e=Array.from({length:100}).map((e,t)=>c(t+l.value.length));l.value=b.value?[...e,...l.value]:[...l.value,...e]},w=()=>{let e=[...l.value];e.pop(),l.value=e};return(e,i)=>(h(),s(`div`,j,[m(`div`,null,`offset: `+u(_.value),1),m(`div`,null,`scrolling: `+u(v.value),1),m(`div`,null,[m(`input`,{type:`number`,value:y.value,onInput:i[0]||=e=>{y.value=Number(e.target.value)}},null,40,M),m(`button`,{onClick:S},`scrollToIndex`)]),m(`div`,null,[m(`button`,{onClick:C},`append`),m(`label`,null,[n(m(`input`,{type:`checkbox`,"onUpdate:modelValue":i[1]||=e=>b.value=e},null,512),[[a,b.value]]),p(` prepend`)]),m(`button`,{onClick:w},`pop`)]),f(d(g),{ref_key:`handle`,ref:x,data:l.value,shift:b.value,onScroll:e=>{_.value=e,v.value=!0},onScrollEnd:()=>{v.value=!1}},{default:r(({item:e})=>[(h(),s(`div`,{key:e.index,style:t({height:e.height,background:`white`,borderBottom:`solid 1px #ccc`})},u(e.index),5))]),_:1},8,[`data`,`shift`,`onScroll`,`onScrollEnd`])]))}})})),F=e((()=>{})),I,L=e((()=>{P(),P(),F(),v(),I=y(N,[[`__scopeId`,`data-v-d8e56627`]])})),R,z,B,V,H;e((()=>{_(),w(),A(),L(),R={component:g},z={render:()=>({components:{Component:C},template:`<Component />`})},B={render:()=>({components:{Component:k},template:`<Component />`})},V={render:()=>({components:{Component:I},template:`<Component />`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HorizontalComponent
    },
    template: "<Component />"
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ControllsComponent
    },
    template: "<Component />"
  })
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Horizontal`,`Controlls`]}))();export{V as Controlls,z as Default,B as Horizontal,H as __namedExportsOrder,R as default};