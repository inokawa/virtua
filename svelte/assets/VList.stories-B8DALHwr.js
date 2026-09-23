import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,G as n,H as r,I as i,L as a,Q as o,St as s,V as c,Y as l,d as u,h as d,it as f,mt as p,nt as m,ot as h,p as g,pt as _,s as v,st as y,tt as b,vt as x,x as S,xt as C,y as w,yt as T,z as E}from"./iframe-Dqnub9mu.js";import{n as D,t as O}from"./VList-DN0sBn14.js";import{t as k}from"./legacy-8fltIMpf.js";function A(e,n){p(n,!1);let r=[20,40,180,77],o=Array.from({length:1e3}).map((e,t)=>r[t%4]);u(),O(e,{get data(){return o},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,n=C,r=C)=>{var o=j(),s=b(o,!0);l(()=>{t(o,`
        height: ${n()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),i(s,r())}),a(e,o)},$$slots:{default:!0}}),_()}var j;function M(){return(M=e((()=>{s(),k(),v(),D(),j=E(`<div> </div>`)})))()}function N(e,n){p(n,!1);let r=[40,180,77],s=e=>({id:e,size:r[e%4]+`px`}),c=Array.from({length:1e3}).map((e,t)=>s(t));u();var d=F(),f=o(d);O(f,{get data(){return c},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,n=C)=>{var r=P(),o=b(r,!0);l(()=>{t(r,`
          width: ${n().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),i(o,n().id)}),a(e,r)},$$slots:{default:!0}}),T(d),a(e,d),_()}var P,F;function I(){return(I=e((()=>{s(),k(),v(),D(),P=E(`<div> </div>`),F=E(`<div style="padding: 10px;"><!></div>`)})))()}function L(e,s){p(s,!0);let c=[20,40,180,77],u=e=>({id:e,size:c[e%4]+`px`}),v=y(void 0),E=y(f(Array.from({length:1e3}).map((e,t)=>u(t)))),D=y(0),k=y(!1),A=y(567),j=y(!1);var M=z(),N=o(M),P=b(N),F=m(N,2),I=b(F),L=m(F,2),B=o(L);w(B);var V=m(B,2);T(L);var H=m(L,2),U=o(H),W=m(U,2),G=o(W);w(G),x(),T(W);var K=m(W,2);T(H);var q=m(H,2);g(O(q,{get data(){return n(E)},get shift(){return n(j)},getKey:e=>e.id,onscroll:e=>{h(D,e,!0),h(k,!0)},onscrollend:()=>{h(k,!1)},children:(e,n=C)=>{var r=R(),o=b(r,!0);l(()=>{t(r,`
          height: ${n().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),i(o,n().id)}),a(e,r)},$$slots:{default:!0}}),e=>h(v,e,!0),()=>n(v)),T(M),l(()=>{i(P,`offset: ${n(D)??``}`),i(I,`scrolling: ${n(k)??``}`),S(G,n(j))}),r(`input`,B,e=>{h(A,Number(e.currentTarget.value),!0)}),d(B,()=>n(A),e=>h(A,e)),r(`click`,V,()=>{n(v).scrollToIndex(n(A))}),r(`click`,U,()=>{let e=Array.from({length:100}).map((e,t)=>u(t+n(E).length));h(E,n(j)?[...e,...n(E)]:[...n(E),...e],!0)}),r(`change`,G,()=>{h(j,!n(j))}),r(`click`,K,()=>{let e=[...n(E)];e.pop(),h(E,e,!0)}),a(e,M),_()}var R,z;function B(){return(B=e((()=>{s(),v(),D(),R=E(`<div> </div>`),z=E(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),c([`input`,`click`,`change`])})))()}var V,H,U,W,G;function K(){return(K=e((()=>{D(),M(),I(),B(),V={component:O},H={render:()=>({Component:A})},U={render:()=>({Component:N})},W={render:()=>({Component:L})},G=[`Default`,`Horizontal`,`Controls`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...W.parameters?.docs?.source}}}})))()}K();export{W as Controls,H as Default,U as Horizontal,G as __namedExportsOrder,V as default};