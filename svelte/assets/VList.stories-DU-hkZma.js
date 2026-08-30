import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{G as t,H as n,I as r,L as i,S as a,V as o,Y as s,_t as c,at as l,b as u,bt as d,ct as f,d as p,et as m,ft as h,h as g,p as _,pt as v,rt as y,s as b,st as x,vt as S,xt as C,y as w,z as T}from"./iframe-DD3UuEOk.js";import{n as E,t as D}from"./VList-BpASsO7j.js";import{t as O}from"./legacy-jx2DCHbP.js";function k(e,t){v(t,!1);let n=[20,40,180,77],o=Array.from({length:1e3}).map((e,t)=>n[t%4]);p(),D(e,{get data(){return o},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,t=d,n=d)=>{var o=A(),c=m(o,!0);S(o),s(()=>{a(o,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),r(c,n())}),i(e,o)},$$slots:{default:!0}}),h()}var A;function j(){return(j=e((()=>{C(),O(),b(),E(),A=T(`<div> </div>`)})))()}function M(e,t){v(t,!1);let n=[40,180,77],o=e=>({id:e,size:n[e%4]+`px`}),c=Array.from({length:1e3}).map((e,t)=>o(t));p();var l=P(),u=m(l);D(u,{get data(){return c},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,t=d)=>{var n=N(),o=m(n,!0);S(n),s(()=>{a(n,`
          width: ${t().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),r(o,t().id)}),i(e,n)},$$slots:{default:!0}}),S(l),i(e,l),h()}var N,P;function F(){return(F=e((()=>{C(),O(),b(),E(),N=T(`<div> </div>`),P=T(`<div style="padding: 10px;"><!></div>`)})))()}function I(e,o){v(o,!0);let p=[20,40,180,77],b=e=>({id:e,size:p[e%4]+`px`}),C=f(void 0),T=f(l(Array.from({length:1e3}).map((e,t)=>b(t)))),E=f(0),O=f(!1),k=f(567),A=f(!1);var j=R(),M=m(j),N=m(M);S(M);var P=y(M,2),F=m(P);S(P);var I=y(P,2),z=m(I);w(z);var B=y(z,2);S(I);var V=y(I,2),H=m(V),U=y(H,2),W=m(U);w(W),c(),S(U);var G=y(U,2);S(V);var K=y(V,2);_(D(K,{get data(){return t(T)},get shift(){return t(A)},getKey:e=>e.id,onscroll:e=>{x(E,e,!0),x(O,!0)},onscrollend:()=>{x(O,!1)},children:(e,t=d)=>{var n=L(),o=m(n,!0);S(n),s(()=>{a(n,`
          height: ${t().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),r(o,t().id)}),i(e,n)},$$slots:{default:!0}}),e=>x(C,e,!0),()=>t(C)),S(j),s(()=>{r(N,`offset: ${t(E)??``}`),r(F,`scrolling: ${t(O)??``}`),u(W,t(A))}),n(`input`,z,e=>{x(k,Number(e.currentTarget.value),!0)}),g(z,()=>t(k),e=>x(k,e)),n(`click`,B,()=>{t(C).scrollToIndex(t(k))}),n(`click`,H,()=>{let e=Array.from({length:100}).map((e,n)=>b(n+t(T).length));x(T,t(A)?[...e,...t(T)]:[...t(T),...e],!0)}),n(`change`,W,()=>{x(A,!t(A))}),n(`click`,G,()=>{let e=[...t(T)];e.pop(),x(T,e,!0)}),i(e,j),h()}var L,R;function z(){return(z=e((()=>{C(),b(),E(),L=T(`<div> </div>`),R=T(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),o([`input`,`click`,`change`])})))()}var B,V,H,U,W;function G(){return(G=e((()=>{E(),j(),F(),z(),B={component:D},V={render:()=>({Component:k})},H={render:()=>({Component:M})},U={render:()=>({Component:I})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Horizontal`,`Controls`]})))()}G();export{U as Controls,V as Default,H as Horizontal,W as __namedExportsOrder,B as default};