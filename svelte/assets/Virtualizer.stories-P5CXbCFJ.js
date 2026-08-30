import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{E as t,G as n,I as r,L as i,R as a,S as o,T as s,Y as c,_t as l,bt as u,ct as d,d as f,et as p,ft as m,p as h,pt as g,rt as _,s as v,st as y,tt as b,vt as x,xt as S,z as C}from"./iframe-DD3UuEOk.js";import{n as w,t as T}from"./Virtualizer--W2LjnkN.js";import{t as E}from"./legacy-jx2DCHbP.js";function D(e,t){g(t,!1);let n=[20,40,180,77],a=Array.from({length:1e3}).map((e,t)=>n[t%4]);f();var s=k();o(s,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var d=p(s);o(d,`background-color: burlywood; height: 400px;`);var h=_(d,2);T(h,{get data(){return a},getKey:(e,t)=>t,startMargin:400,children:(e,t=u,n=u)=>{var a=O(),s=p(a,!0);x(a),c(()=>{o(a,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),r(s,n())}),i(e,a)},$$slots:{default:!0}}),l(2),x(s),i(e,s),m()}var O,k;function A(){return(A=e((()=>{S(),E(),v(),w(),O=C(`<div> </div>`),k=C(`<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>`)})))()}function j(e,t){g(t,!0);let a=[20,40,180,77],s=Array.from({length:1e3}).map((e,t)=>a[t%4]),l=d(void 0);var f=N();o(f,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var _=p(f);o(_,`background-color: burlywood; padding: 40px;`);var v=p(_);o(v,`background-color: steelblue; padding: 60px;`);var b=p(v);T(b,{get data(){return s},getKey:(e,t)=>t,get scrollRef(){return n(l)},startMargin:100,children:(e,t=u,n=u)=>{var a=M(),s=p(a,!0);x(a),c(()=>{o(a,`
              height: ${t()??``}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),r(s,n())}),i(e,a)},$$slots:{default:!0}}),x(v),x(_),x(f),h(f,e=>y(l,e),()=>n(l)),i(e,f),m()}var M,N;function P(){return(P=e((()=>{S(),v(),w(),M=C(`<div> </div>`),N=C(`<div><div><div><!></div></div></div>`)})))()}function F(e,l){g(l,!0);let f=[100,200,300,100,200,300,100,300,400,200],v=Array.from({length:1e3}).map((e,t)=>t),S=d(void 0);var C=R(),w=p(C),E=p(w),D=p(E);o(D,`height: 40px`),s(D,21,()=>f,t,(e,t,r)=>{var a=I();a.textContent=`Header${r}`,c(()=>o(a,`width: ${n(t)??``}px`)),i(e,a)}),x(D),x(E);var O=_(E);T(O,{get data(){return v},getKey:(e,t)=>t,get scrollRef(){return n(S)},as:`tbody`,item:`tr`,startMargin:40,children:(e,l=u)=>{var d=a(),m=b(d);s(m,17,()=>f,t,(e,t,a)=>{var s=L(),u=p(s);x(s),c(()=>{o(s,`width: ${n(t)??``}px`),r(u,`${l()??``} ${a}`)}),i(e,s)}),i(e,d)},$$slots:{default:!0}}),x(w),x(C),h(C,e=>y(S,e),()=>n(S)),i(e,C),m()}var I,L,R;function z(){return(z=e((()=>{S(),v(),w(),I=C(`<th></th>`),L=C(`<th> </th>`),R=C(`<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>`)})))()}var B,V,H,U,W;function G(){return(G=e((()=>{w(),A(),P(),z(),B={component:T},V={render:()=>({Component:D})},H={render:()=>({Component:j})},U={render:()=>({Component:F})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`HeaderAndFooter`,`Nested`,`TableElement`]})))()}G();export{V as HeaderAndFooter,H as Nested,U as TableElement,W as __namedExportsOrder,B as default};