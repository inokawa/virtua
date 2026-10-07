import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,Ct as n,Et as r,R as i,St as a,T as o,Tt as s,U as c,V as l,W as u,Z as d,_ as f,_t as p,d as m,et as h,it as g,lt as _,ot as v,p as y,q as b,rt as x,s as S,ut as C,vt as w,x as T,z as E}from"./iframe-DRyZoePU.js";import{n as D,t as O}from"./VList-DW36NqwO.js";import{t as k}from"./legacy-D1wNO7JI.js";function A(e,t){w(t,!1);let n=[20,40,180,77],r=Array.from({length:1e3}).map((e,t)=>n[t%4]);m(),O(e,{get data(){return r},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,t=s,n=s)=>{var r=j(),a=x(r,!0);d(()=>{o(r,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),i(a,n())}),E(e,r)},$$slots:{default:!0}}),p()}var j;function M(){return(M=e((()=>{r(),k(),S(),D(),j=l(`<div> </div>`)})))()}function N(e,t){w(t,!1);let r=[40,180,77],a=e=>({id:e,size:r[e%4]+`px`}),c=Array.from({length:1e3}).map((e,t)=>a(t));m();var l=F(),u=h(l);O(u,{get data(){return c},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,t=s)=>{var n=P(),r=x(n,!0);d(()=>{o(n,`
          width: ${t().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),i(r,t().id)}),E(e,n)},$$slots:{default:!0}}),n(l),E(e,l),p()}var P,F;function I(){return(I=e((()=>{r(),k(),S(),D(),P=l(`<div> </div>`),F=l(`<div style="padding: 10px;"><!></div>`)})))()}function L(e,r){w(r,!0);let c=[20,40,180,77],l=e=>({id:e,size:c[e%4]+`px`}),m=C(void 0),S=C(v(Array.from({length:1e3}).map((e,t)=>l(t)))),D=C(0),k=C(!1),A=C(567),j=C(!1);var M=z(),N=h(M),P=x(N),F=g(N,2),I=x(F),L=g(F,2),B=h(L);T(B);var V=g(B,2);n(L);var H=g(L,2),U=h(H),W=g(U,2),G=h(W);T(G),a(),n(W);var K=g(W,2);n(H);var q=g(H,2);y(O(q,{get data(){return b(S)},get shift(){return b(j)},getKey:e=>e.id,onscroll:e=>{_(D,e,!0),_(k,!0)},onscrollend:()=>{_(k,!1)},children:(e,t=s)=>{var n=R(),r=x(n,!0);d(()=>{o(n,`
          height: ${t().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),i(r,t().id)}),E(e,n)},$$slots:{default:!0}}),e=>_(m,e,!0),()=>b(m)),n(M),d(()=>{i(P,`offset: ${b(D)??``}`),i(I,`scrolling: ${b(k)??``}`),t(G,b(j))}),u(`input`,B,e=>{_(A,Number(e.currentTarget.value),!0)}),f(B,()=>b(A),e=>_(A,e)),u(`click`,V,()=>{b(m).scrollToIndex(b(A))}),u(`click`,U,()=>{let e=Array.from({length:100}).map((e,t)=>l(t+b(S).length));_(S,b(j)?[...e,...b(S)]:[...b(S),...e],!0)}),u(`change`,G,()=>{_(j,!b(j))}),u(`click`,K,()=>{let e=[...b(S)];e.pop(),_(S,e,!0)}),E(e,M),p()}var R,z;function B(){return(B=e((()=>{r(),S(),D(),R=l(`<div> </div>`),z=l(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),c([`input`,`click`,`change`])})))()}var V,H,U,W,G;function K(){return(K=e((()=>{D(),M(),I(),B(),V={component:O},H={render:()=>({Component:A})},U={render:()=>({Component:N})},W={render:()=>({Component:L})},G=[`Default`,`Horizontal`,`Controls`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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