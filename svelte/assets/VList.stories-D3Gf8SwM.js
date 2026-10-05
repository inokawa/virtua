import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,R as n,St as r,T as i,Tt as a,U as o,V as s,W as c,Z as l,_ as u,_t as d,ct as f,d as p,et as m,gt as h,it as g,lt as _,ot as v,p as y,q as b,rt as x,s as S,wt as C,x as w,xt as T,z as E}from"./iframe-C408IRfh.js";import{n as D,t as O}from"./VList-BpjKRQFU.js";import{t as k}from"./legacy-60eNXo3X.js";function A(e,t){d(t,!1);let r=[20,40,180,77],a=Array.from({length:1e3}).map((e,t)=>r[t%4]);p(),O(e,{get data(){return a},style:`height: 100vh;`,getKey:(e,t)=>t,children:(e,t=C,r=C)=>{var a=j(),o=x(a,!0);l(()=>{i(a,`
        height: ${t()??``}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),n(o,r())}),E(e,a)},$$slots:{default:!0}}),h()}var j;function M(){return(M=e((()=>{a(),k(),S(),D(),j=s(`<div> </div>`)})))()}function N(e,t){d(t,!1);let a=[40,180,77],o=e=>({id:e,size:a[e%4]+`px`}),s=Array.from({length:1e3}).map((e,t)=>o(t));p();var c=F(),u=m(c);O(u,{get data(){return s},style:`width: 100%; height: 200px;`,getKey:e=>e.id,horizontal:!0,children:(e,t=C)=>{var r=P(),a=x(r,!0);l(()=>{i(r,`
          width: ${t().size??``};
          background: white;
          border-right: solid 1px #ccc;
        `),n(a,t().id)}),E(e,r)},$$slots:{default:!0}}),r(c),E(e,c),h()}var P,F;function I(){return(I=e((()=>{a(),k(),S(),D(),P=s(`<div> </div>`),F=s(`<div style="padding: 10px;"><!></div>`)})))()}function L(e,a){d(a,!0);let o=[20,40,180,77],s=e=>({id:e,size:o[e%4]+`px`}),p=_(void 0),S=_(v(Array.from({length:1e3}).map((e,t)=>s(t)))),D=_(0),k=_(!1),A=_(567),j=_(!1);var M=z(),N=m(M),P=x(N),F=g(N,2),I=x(F),L=g(F,2),B=m(L);w(B);var V=g(B,2);r(L);var H=g(L,2),U=m(H),W=g(U,2),G=m(W);w(G),T(),r(W);var K=g(W,2);r(H);var q=g(H,2);y(O(q,{get data(){return b(S)},get shift(){return b(j)},getKey:e=>e.id,onscroll:e=>{f(D,e,!0),f(k,!0)},onscrollend:()=>{f(k,!1)},children:(e,t=C)=>{var r=R(),a=x(r,!0);l(()=>{i(r,`
          height: ${t().size??``};
          background: white;
          border-bottom: solid 1px #ccc;
        `),n(a,t().id)}),E(e,r)},$$slots:{default:!0}}),e=>f(p,e,!0),()=>b(p)),r(M),l(()=>{n(P,`offset: ${b(D)??``}`),n(I,`scrolling: ${b(k)??``}`),t(G,b(j))}),c(`input`,B,e=>{f(A,Number(e.currentTarget.value),!0)}),u(B,()=>b(A),e=>f(A,e)),c(`click`,V,()=>{b(p).scrollToIndex(b(A))}),c(`click`,U,()=>{let e=Array.from({length:100}).map((e,t)=>s(t+b(S).length));f(S,b(j)?[...e,...b(S)]:[...b(S),...e],!0)}),c(`change`,G,()=>{f(j,!b(j))}),c(`click`,K,()=>{let e=[...b(S)];e.pop(),f(S,e,!0)}),E(e,M),h()}var R,z;function B(){return(B=e((()=>{a(),S(),D(),R=s(`<div> </div>`),z=s(`<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label> <button>pop</button></div> <!></div>`),o([`input`,`click`,`change`])})))()}var V,H,U,W,G;function K(){return(K=e((()=>{D(),M(),I(),B(),V={component:O},H={render:()=>({Component:A})},U={render:()=>({Component:N})},W={render:()=>({Component:L})},G=[`Default`,`Horizontal`,`Controls`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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