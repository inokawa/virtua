import{n as e}from"./chunk-BneVvdWh.js";import{B as t,D as n,G as r,H as i,J as a,L as o,N as s,O as c,T as l,V as u,W as d,X as f,Y as p,Z as m,d as h,h as g,j as _,k as v,l as y,m as b,o as x,p as S,u as C,w,z as T}from"./iframe-CYmMu57k.js";import{r as E,t as D}from"./svelte-D0pfT3Xr.js";import{t as O}from"./legacy-DqIzWxpa.js";function k(e,t){r(t,!1);let n=[20,40,180,77],i=Array.from({length:1e3}).map((e,t)=>n[t%4]);y(),E(e,{get data(){return i},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,t=f,n=f)=>{var r=A(),i=o(r,!0);p(r),s(()=>{g(r,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),w(i,n())}),l(e,r)},$$slots:{default:!0}}),d()}var A,j=e((()=>{m(),O(),x(),D(),A=n(`<div> </div>`)}));function M(e,t){r(t,!1);let n=[40,180,77],i=e=>({id:e,size:n[e%4]+`px`}),a=Array.from({length:1e3}).map((e,t)=>i(t));y();var c=P();E(o(c),{get data(){return a},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,t=f)=>{var n=N(),r=o(n,!0);p(n),s(()=>{g(n,`
          width: ${t().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),w(r,t().id)}),l(e,n)},$$slots:{default:!0}}),p(c),l(e,c),d()}var N,P,F=e((()=>{m(),O(),x(),D(),N=n(`<div> </div>`),P=n(`<div style="padding: 10px;"><!></div>`)}));function I(e,n){r(n,!0);let c=[20,40,180,77],m=e=>({id:e,size:c[e%4]+`px`}),y=i(void 0),x=i(t(Array.from({length:1e3}).map((e,t)=>m(t)))),D=i(0),O=i(!1),k=i(567),A=i(!1);var j=R(),M=o(j),N=o(M);p(M);var P=T(M,2),F=o(P);p(P);var I=T(P,2),z=o(I);S(z);var B=T(z,2);p(I);var V=T(I,2),H=o(V),U=T(H,2),W=o(U);S(W),a(),p(U);var G=T(U,2);p(V),C(E(T(V,2),{get data(){return _(x)},get shift(){return _(A)},getKey:e=>e.id,onscroll:e=>{u(D,e,!0),u(O,!0)},onscrollend:()=>{u(O,!1)},children:(e,t=f)=>{var n=L(),r=o(n,!0);p(n),s(()=>{g(n,`
          height: ${t().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),w(r,t().id)}),l(e,n)},$$slots:{default:!0}}),e=>u(y,e,!0),()=>_(y)),p(j),s(()=>{w(N,`offset: ${_(D)??``}`),w(F,`scrolling: ${_(O)??``}`),b(W,_(A))}),v(`input`,z,e=>{u(k,Number(e.currentTarget.value),!0)}),h(z,()=>_(k),e=>u(k,e)),v(`click`,B,()=>{_(y).scrollToIndex(_(k))}),v(`click`,H,()=>{let e=Array.from({length:100}).map((e,t)=>m(t+_(x).length));u(x,_(A)?[...e,..._(x)]:[..._(x),...e],!0)}),v(`change`,W,()=>{u(A,!_(A))}),v(`click`,G,()=>{let e=[..._(x)];e.pop(),u(x,e,!0)}),l(e,j),d()}var L,R,z=e((()=>{m(),x(),D(),L=n(`<div> </div>`),R=n(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),c([`input`,`click`,`change`])})),B,V,H,U,W;e((()=>{D(),j(),F(),z(),B={component:E},V={render:()=>({Component:k})},H={render:()=>({Component:M})},U={render:()=>({Component:I})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Horizontal`,`Controls`]}))();export{U as Controls,V as Default,H as Horizontal,W as __namedExportsOrder,B as default};