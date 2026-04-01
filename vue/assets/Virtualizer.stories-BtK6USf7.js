import{n as e}from"./chunk-BneVvdWh.js";import{D as t,E as n,O as r,S as i,c as a,f as o,h as s,i as c,k as l,m as u,u as d,w as f,x as p}from"./iframe-rkOO_9Dz.js";import{i as m,t as h}from"./vue-RrZdpIKn.js";import{n as g,t as _}from"./_plugin-vue_export-helper-6nPRbwJT.js";var v,y,b,x=e((()=>{c(),h(),v={style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},y=400,b=s({__name:`HeaderAndFooter`,setup(e){let n=[20,40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%4]);return(e,n)=>(p(),o(`div`,v,[d(`div`,{style:r({backgroundColor:`burlywood`,height:y+`px`})},` header `,4),u(t(m),{data:t(i),startMargin:y},{default:f(({item:e,index:t})=>[(p(),o(`div`,{key:t,style:r({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},l(t),5))]),_:1},8,[`data`]),n[0]||=d(`div`,{style:{backgroundColor:`steelblue`,height:`600px`}},`footer`,-1)]))}})})),S=e((()=>{})),C,w=e((()=>{x(),x(),S(),g(),C=_(b,[[`__scopeId`,`data-v-15440bb7`]])})),T,E,D,O=e((()=>{c(),h(),T=40,E=60,D=s({__name:`Nested`,setup(e){let i=[20,40,180,77],a=Array.from({length:1e3}).map((e,t)=>i[t%4]),s=n();return(e,n)=>(p(),o(`div`,{ref_key:`scrollRef`,ref:s,style:{width:`100%`,height:`100vh`,overflowY:`auto`,overflowAnchor:`none`}},[d(`div`,{style:r({backgroundColor:`burlywood`,padding:T+`px`})},[d(`div`,{style:r({backgroundColor:`steelblue`,padding:E+`px`})},[u(t(m),{data:t(a),scrollRef:s.value,startMargin:T+E},{default:f(({item:e,index:t})=>[(p(),o(`div`,{key:t,style:r({height:e+`px`,background:`white`,borderBottom:`solid 1px #ccc`})},l(t),5))]),_:1},8,[`data`,`scrollRef`,`startMargin`])],4)],4)],512))}})})),k=e((()=>{})),A,j=e((()=>{O(),O(),k(),g(),A=_(D,[[`__scopeId`,`data-v-afa479f8`]])})),M,N,P=e((()=>{c(),h(),M=40,N=s({__name:`TableElement`,setup(e){let s=[100,200,300,100,200,300,100,300,400,200],c=Array.from({length:1e4}).map((e,t)=>t),h=n();return(e,n)=>(p(),o(`div`,{style:{height:`500px`,overflow:`auto`},ref_key:`scrollRef`,ref:h},[d(`table`,null,[d(`thead`,null,[d(`tr`,{style:r({height:M+`px`})},[(p(),o(a,null,i(s,(e,t)=>d(`th`,{style:r({width:`${e}px`})},` Header`+l(t),5)),64))],4)]),u(t(m),{scrollRef:h.value,data:t(c),startMargin:M,as:`tbody`,item:`tr`},{default:f(({item:e})=>[(p(),o(a,null,i(s,(t,n)=>d(`th`,{style:r({width:`${t}px`})},l(e)+` `+l(n),5)),64))]),_:1},8,[`scrollRef`,`data`])])],512))}})})),F=e((()=>{})),I,L=e((()=>{P(),P(),F(),g(),I=_(N,[[`__scopeId`,`data-v-05dcfc2a`]])})),R,z,B,V,H;e((()=>{h(),w(),j(),L(),R={component:m},z={render:()=>({components:{Component:C},template:`<Component />`})},B={render:()=>({components:{Component:A},template:`<Component />`})},V={render:()=>({components:{Component:I},template:`<Component />`})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: TableComponent
    },
    template: "<Component />"
  })
}`,...V.parameters?.docs?.source}}},H=[`HeaderAndFooter`,`Nested`,`TableElement`]}))();export{z as HeaderAndFooter,B as Nested,V as TableElement,H as __namedExportsOrder,R as default};