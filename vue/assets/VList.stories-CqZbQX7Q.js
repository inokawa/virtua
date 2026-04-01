import{n as e}from"./chunk-BneVvdWh.js";import{D as t,E as n,O as r,T as i,a,d as o,f as s,h as c,i as l,k as u,m as d,p as f,u as p,w as m,x as h}from"./iframe-rkOO_9Dz.js";import{r as g,t as _}from"./vue-RrZdpIKn.js";import{n as v,t as y}from"./_plugin-vue_export-helper-6nPRbwJT.js";var b,x=e((()=>{l(),_(),b=c({__name:`Default`,setup(e){let n=[20,40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%4]);return(e,n)=>(h(),o(t(g),{data:t(i),style:{height:`100vh`}},{default:m(({item:e,index:t})=>[(h(),s(`div`,{key:t,style:r({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},u(t),5))]),_:1},8,[`data`]))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),v(),C=y(b,[[`__scopeId`,`data-v-d8f10d17`]])})),T,E,D=e((()=>{l(),_(),T={style:{padding:`10px`}},E=c({__name:`Horizontal`,setup(e){let n=[40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%3]);return(e,n)=>(h(),s(`div`,T,[d(t(g),{data:t(i),style:{width:`100%`,height:`200px`},horizontal:``},{default:m(({item:e,index:t})=>[(h(),s(`div`,{key:t,style:r({width:e+`px`,background:`white`,borderRight:`solid 1px #ccc`})},u(t),5))]),_:1},8,[`data`])]))}})})),O=e((()=>{})),k,A=e((()=>{D(),D(),O(),v(),k=y(E,[[`__scopeId`,`data-v-964efdb8`]])})),j,M,N,P=e((()=>{l(),_(),j={style:{height:`100%`,display:`flex`,"flex-direction":`column`}},M=[`value`],N=c({__name:`Controlls`,setup(e){let o=[20,40,180,77],c=e=>({index:e,height:o[e%4]+`px`}),l=n(Array.from({length:1e3}).map((e,t)=>c(t))),_=n(0),v=n(!1),y=n(567),b=n(!1),x=n(),S=()=>{x.value?.scrollToIndex(y.value)},C=()=>{let e=Array.from({length:100}).map((e,t)=>c(t+l.value.length));l.value=b.value?[...e,...l.value]:[...l.value,...e]},w=()=>{let e=[...l.value];e.pop(),l.value=e};return(e,n)=>(h(),s(`div`,j,[p(`div`,null,`offset: `+u(_.value),1),p(`div`,null,`scrolling: `+u(v.value),1),p(`div`,null,[p(`input`,{type:`number`,value:y.value,onInput:n[0]||=e=>{y.value=Number(e.target.value)}},null,40,M),p(`button`,{onClick:S},`scrollToIndex`)]),p(`div`,null,[p(`button`,{onClick:C},`append`),p(`label`,null,[i(p(`input`,{type:`checkbox`,"onUpdate:modelValue":n[1]||=e=>b.value=e},null,512),[[a,b.value]]),n[2]||=f(` prepend`,-1)]),p(`button`,{onClick:w},`pop`)]),d(t(g),{ref_key:`handle`,ref:x,data:l.value,shift:b.value,onScroll:e=>{_.value=e,v.value=!0},onScrollEnd:()=>{v.value=!1}},{default:m(({item:e})=>[(h(),s(`div`,{key:e.index,style:r({height:e.height,background:`white`,borderBottom:`solid 1px #ccc`})},u(e.index),5))]),_:1},8,[`data`,`shift`,`onScroll`,`onScrollEnd`])]))}})})),F=e((()=>{})),I,L=e((()=>{P(),P(),F(),v(),I=y(N,[[`__scopeId`,`data-v-d8e56627`]])})),R,z,B,V,H;e((()=>{_(),w(),A(),L(),R={component:g},z={render:()=>({components:{Component:C},template:`<Component />`})},B={render:()=>({components:{Component:k},template:`<Component />`})},V={render:()=>({components:{Component:I},template:`<Component />`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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