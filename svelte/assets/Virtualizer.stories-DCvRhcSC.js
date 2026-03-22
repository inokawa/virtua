import{n as e}from"./chunk-BneVvdWh.js";import{D as t,E as n,G as r,H as i,J as a,L as o,N as s,R as c,T as l,V as u,W as d,X as f,Y as p,Z as m,_ as h,h as g,j as _,l as v,o as y,u as b,v as x,w as S,z as C}from"./iframe-CU0tn924.js";import{i as w,t as T}from"./svelte-B3v0s-XD.js";import{t as E}from"./legacy-CeGhDfuo.js";function D(e,t){r(t,!1);let n=[20,40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%4]);v();var c=k();g(c,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var u=o(c);g(u,`background-color: burlywood; height: 400px;`),w(C(u,2),{get data(){return i},getKey:(e,t)=>t,startMargin:400,children:(e,t=f,n=f)=>{var r=O(),i=o(r,!0);p(r),s(()=>{g(r,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),S(i,n())}),l(e,r)},$$slots:{default:!0}}),a(2),p(c),l(e,c),d()}var O,k,A=e((()=>{m(),E(),y(),T(),O=t(`<div> </div>`),k=t(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)}));function j(e,t){r(t,!0);let n=[20,40,180,77],a=Array.from({length:1e3}).map((e,t)=>n[t%4]),c=i(void 0);var m=N();g(m,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var h=o(m);g(h,`background-color: burlywood; padding: 40px;`);var v=o(h);g(v,`background-color: steelblue; padding: 60px;`),w(o(v),{get data(){return a},getKey:(e,t)=>t,get scrollRef(){return _(c)},startMargin:100,children:(e,t=f,n=f)=>{var r=M(),i=o(r,!0);p(r),s(()=>{g(r,`
              height: ${t()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),S(i,n())}),l(e,r)},$$slots:{default:!0}}),p(v),p(h),p(m),b(m,e=>u(c,e),()=>_(c)),l(e,m),d()}var M,N,P=e((()=>{m(),y(),T(),M=t(`<div> </div>`),N=t(`<div><div><div><!></div></div></div>`)}));function F(e,t){r(t,!0);let a=[100,200,300,100,200,300,100,300,400,200],m=Array.from({length:1e3}).map((e,t)=>t),v=i(void 0);var y=R(),T=o(y),E=o(T),D=o(E);g(D,`height: 40px`),h(D,21,()=>a,x,(e,t,n)=>{var r=I();r.textContent=`Header${n}`,s(()=>g(r,`width: ${_(t)??``}px`)),l(e,r)}),p(D),p(E),w(C(E),{get data(){return m},getKey:(e,t)=>t,get scrollRef(){return _(v)},as:`tbody`,item:`tr`,startMargin:40,children:(e,t=f)=>{var r=n();h(c(r),17,()=>a,x,(e,n,r)=>{var i=L(),a=o(i);p(i),s(()=>{g(i,`width: ${_(n)??``}px`),S(a,`${t()??``} ${r}`)}),l(e,i)}),l(e,r)},$$slots:{default:!0}}),p(T),p(y),b(y,e=>u(v,e),()=>_(v)),l(e,y),d()}var I,L,R,z=e((()=>{m(),y(),T(),I=t(`<th></th>`),L=t(`<th> </th>`),R=t(`<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>`)})),B,V,H,U,W;e((()=>{T(),A(),P(),z(),B={component:w},V={render:()=>({Component:D})},H={render:()=>({Component:j})},U={render:()=>({Component:F})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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