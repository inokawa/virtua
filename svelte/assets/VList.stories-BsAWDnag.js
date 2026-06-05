import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,B as n,F as r,I as i,J as a,R as o,V as s,W as c,_t as l,bt as u,dt as d,f,ft as p,gt as m,it as h,m as g,nt as _,o as v,ot as y,st as b,u as x,v as S,x as C,y as w,yt as T}from"./iframe-BsWqi-G5.js";import{i as E,t as D}from"./svelte-ZvgAO1m0.js";import{t as O}from"./legacy-ra_XYHuT.js";function k(e,n){p(n,!1);let o=[20,40,180,77],s=Array.from({length:1e3}).map((e,t)=>o[t%4]);x(),E(e,{get data(){return s},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,n=T,o=T)=>{var s=A(),c=t(s,!0);l(s),a(()=>{C(s,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),r(c,o())}),i(e,s)},$$slots:{default:!0}}),d()}var A,j=e((()=>{u(),O(),v(),D(),A=o(`<div> </div>`)}));function M(e,n){p(n,!1);let o=[40,180,77],s=e=>({id:e,size:o[e%4]+`px`}),c=Array.from({length:1e3}).map((e,t)=>s(t));x();var u=P();E(t(u),{get data(){return c},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,n=T)=>{var o=N(),s=t(o,!0);l(o),a(()=>{C(o,`
          width: ${n().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),r(s,n().id)}),i(e,o)},$$slots:{default:!0}}),l(u),i(e,u),d()}var N,P,F=e((()=>{u(),O(),v(),D(),N=o(`<div> </div>`),P=o(`<div style="padding: 10px;"><!></div>`)}));function I(e,n){p(n,!0);let o=[20,40,180,77],u=e=>({id:e,size:o[e%4]+`px`}),v=b(void 0),x=b(h(Array.from({length:1e3}).map((e,t)=>u(t)))),D=b(0),O=b(!1),k=b(567),A=b(!1);var j=R(),M=t(j),N=t(M);l(M);var P=_(M,2),F=t(P);l(P);var I=_(P,2),z=t(I);S(z);var B=_(z,2);l(I);var V=_(I,2),H=t(V),U=_(H,2),W=t(U);S(W),m(),l(U);var G=_(U,2);l(V),f(E(_(V,2),{get data(){return c(x)},get shift(){return c(A)},getKey:e=>e.id,onscroll:e=>{y(D,e,!0),y(O,!0)},onscrollend:()=>{y(O,!1)},children:(e,n=T)=>{var o=L(),s=t(o,!0);l(o),a(()=>{C(o,`
          height: ${n().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),r(s,n().id)}),i(e,o)},$$slots:{default:!0}}),e=>y(v,e,!0),()=>c(v)),l(j),a(()=>{r(N,`offset: ${c(D)??``}`),r(F,`scrolling: ${c(O)??``}`),w(W,c(A))}),s(`input`,z,e=>{y(k,Number(e.currentTarget.value),!0)}),g(z,()=>c(k),e=>y(k,e)),s(`click`,B,()=>{c(v).scrollToIndex(c(k))}),s(`click`,H,()=>{let e=Array.from({length:100}).map((e,t)=>u(t+c(x).length));y(x,c(A)?[...e,...c(x)]:[...c(x),...e],!0)}),s(`change`,W,()=>{y(A,!c(A))}),s(`click`,G,()=>{let e=[...c(x)];e.pop(),y(x,e,!0)}),i(e,j),d()}var L,R,z=e((()=>{u(),v(),D(),L=o(`<div> </div>`),R=o(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),n([`input`,`click`,`change`])})),B,V,H,U,W;e((()=>{D(),j(),F(),z(),B={component:E},V={render:()=>({Component:k})},H={render:()=>({Component:M})},U={render:()=>({Component:I})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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