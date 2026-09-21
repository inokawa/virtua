import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,G as n,H as r,I as i,L as a,V as o,Y as s,_t as c,at as l,bt as u,ct as d,d as f,et as p,ft as m,h,p as g,pt as _,rt as v,s as y,st as b,vt as x,x as S,xt as C,y as w,z as T}from"./iframe-hleXRD6R.js";import{n as E,t as D}from"./VList-BDxu7rMZ.js";import{t as O}from"./legacy-Bd_6Sv8W.js";function k(e,n){_(n,!1);let r=[20,40,180,77],o=Array.from({length:1e3}).map((e,t)=>r[t%4]);f(),D(e,{get data(){return o},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,n=u,r=u)=>{var o=A(),c=p(o,!0);x(o),s(()=>{t(o,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),i(c,r())}),a(e,o)},$$slots:{default:!0}}),m()}var A;function j(){return(j=e((()=>{C(),O(),y(),E(),A=T(`<div> </div>`)})))()}function M(e,n){_(n,!1);let r=[40,180,77],o=e=>({id:e,size:r[e%4]+`px`}),c=Array.from({length:1e3}).map((e,t)=>o(t));f();var l=P(),d=p(l);D(d,{get data(){return c},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,n=u)=>{var r=N(),o=p(r,!0);x(r),s(()=>{t(r,`
          width: ${n().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),i(o,n().id)}),a(e,r)},$$slots:{default:!0}}),x(l),a(e,l),m()}var N,P;function F(){return(F=e((()=>{C(),O(),y(),E(),N=T(`<div> </div>`),P=T(`<div style="padding: 10px;"><!></div>`)})))()}function I(e,o){_(o,!0);let f=[20,40,180,77],y=e=>({id:e,size:f[e%4]+`px`}),C=d(void 0),T=d(l(Array.from({length:1e3}).map((e,t)=>y(t)))),E=d(0),O=d(!1),k=d(567),A=d(!1);var j=R(),M=p(j),N=p(M);x(M);var P=v(M,2),F=p(P);x(P);var I=v(P,2),z=p(I);w(z);var B=v(z,2);x(I);var V=v(I,2),H=p(V),U=v(H,2),W=p(U);w(W),c(),x(U);var G=v(U,2);x(V);var K=v(V,2);g(D(K,{get data(){return n(T)},get shift(){return n(A)},getKey:e=>e.id,onscroll:e=>{b(E,e,!0),b(O,!0)},onscrollend:()=>{b(O,!1)},children:(e,n=u)=>{var r=L(),o=p(r,!0);x(r),s(()=>{t(r,`
          height: ${n().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),i(o,n().id)}),a(e,r)},$$slots:{default:!0}}),e=>b(C,e,!0),()=>n(C)),x(j),s(()=>{i(N,`offset: ${n(E)??``}`),i(F,`scrolling: ${n(O)??``}`),S(W,n(A))}),r(`input`,z,e=>{b(k,Number(e.currentTarget.value),!0)}),h(z,()=>n(k),e=>b(k,e)),r(`click`,B,()=>{n(C).scrollToIndex(n(k))}),r(`click`,H,()=>{let e=Array.from({length:100}).map((e,t)=>y(t+n(T).length));b(T,n(A)?[...e,...n(T)]:[...n(T),...e],!0)}),r(`change`,W,()=>{b(A,!n(A))}),r(`click`,G,()=>{let e=[...n(T)];e.pop(),b(T,e,!0)}),a(e,j),m()}var L,R;function z(){return(z=e((()=>{C(),y(),E(),L=T(`<div> </div>`),R=T(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),o([`input`,`click`,`change`])})))()}var B,V,H,U,W;function G(){return(G=e((()=>{E(),j(),F(),z(),B={component:D},V={render:()=>({Component:k})},H={render:()=>({Component:M})},U={render:()=>({Component:I})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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