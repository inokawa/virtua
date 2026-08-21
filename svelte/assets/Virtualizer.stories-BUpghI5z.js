import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,F as n,I as r,J as i,L as a,R as o,T as s,W as c,_t as l,bt as u,dt as d,et as f,f as p,ft as m,gt as h,nt as g,o as _,ot as v,st as y,u as b,w as x,x as S,yt as C}from"./iframe-DOUeKHdQ.js";import{o as w,t as T}from"./svelte-DZqnLcV8.js";import{t as E}from"./legacy-BIfJC125.js";function D(e,a){m(a,!1);let o=[20,40,180,77],s=Array.from({length:1e3}).map((e,t)=>o[t%4]);b();var c=k();S(c,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var u=t(c);S(u,`background-color: burlywood; height: 400px;`),w(g(u,2),{get data(){return s},getKey:(e,t)=>t,startMargin:400,children:(e,a=C,o=C)=>{var s=O(),c=t(s,!0);l(s),i(()=>{S(s,`
        height: ${a()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),n(c,o())}),r(e,s)},$$slots:{default:!0}}),h(2),l(c),r(e,c),d()}var O,k,A=e((()=>{u(),E(),_(),T(),O=o(`<div> </div>`),k=o(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)}));function j(e,a){m(a,!0);let o=[20,40,180,77],s=Array.from({length:1e3}).map((e,t)=>o[t%4]),u=y(void 0);var f=N();S(f,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var h=t(f);S(h,`background-color: burlywood; padding: 40px;`);var g=t(h);S(g,`background-color: steelblue; padding: 60px;`),w(t(g),{get data(){return s},getKey:(e,t)=>t,get scrollRef(){return c(u)},startMargin:100,children:(e,a=C,o=C)=>{var s=M(),c=t(s,!0);l(s),i(()=>{S(s,`
              height: ${a()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),n(c,o())}),r(e,s)},$$slots:{default:!0}}),l(g),l(h),l(f),p(f,e=>v(u,e),()=>c(u)),r(e,f),d()}var M,N,P=e((()=>{u(),_(),T(),M=o(`<div> </div>`),N=o(`<div><div><div><!></div></div></div>`)}));function F(e,o){m(o,!0);let u=[100,200,300,100,200,300,100,300,400,200],h=Array.from({length:1e3}).map((e,t)=>t),_=y(void 0);var b=R(),T=t(b),E=t(T),D=t(E);S(D,`height: 40px`),x(D,21,()=>u,s,(e,t,n)=>{var a=I();a.textContent=`Header${n}`,i(()=>S(a,`width: ${c(t)??``}px`)),r(e,a)}),l(D),l(E),w(g(E),{get data(){return h},getKey:(e,t)=>t,get scrollRef(){return c(_)},as:`tbody`,item:`tr`,startMargin:40,children:(e,o=C)=>{var d=a();x(f(d),17,()=>u,s,(e,a,s)=>{var u=L(),d=t(u);l(u),i(()=>{S(u,`width: ${c(a)??``}px`),n(d,`${o()??``} ${s}`)}),r(e,u)}),r(e,d)},$$slots:{default:!0}}),l(T),l(b),p(b,e=>v(_,e),()=>c(_)),r(e,b),d()}var I,L,R,z=e((()=>{u(),_(),T(),I=o(`<th></th>`),L=o(`<th> </th>`),R=o(`<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>`)})),B,V,H,U,W;e((()=>{T(),A(),P(),z(),B={component:w},V={render:()=>({Component:D})},H={render:()=>({Component:j})},U={render:()=>({Component:F})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...U.parameters?.docs?.source}}},W=[`HeaderAndFooter`,`Nested`,`TableElement`]}))();export{V as HeaderAndFooter,H as Nested,U as TableElement,W as __namedExportsOrder,B as default};