import{I as k,d as D,e as K,w as x,H as w,b,J as f,x as l,g as h,h as P,K as g,s as u,i as r,L as Q}from"./iframe-D7FQYxUY.js";import{i as N}from"./legacy-CyxuIC3F.js";import{r as T,k as R,t as U}from"./ListItem-XWoQW3tE.js";import{V as H,b as W}from"./VList-DHNNBmpD.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-B1vhoOS6.js";var X=x("<div> </div>");function Y(n,e){K(e,!1);const o=[20,40,180,77],v=Array.from({length:1e3}).map((s,a)=>o[a%4]);N(),H(n,{get data(){return v},style:"height: 100vh;",getKey:(a,i)=>i,children:(a,i=k,d=k)=>{var t=X(),c=l(t);w(()=>{T(t,`
        height: ${i()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),f(c,d())}),b(a,t)},$$slots:{default:!0}}),D()}var Z=x("<div> </div>"),ee=x('<div style="padding: 10px;"><!></div>');function te(n,e){K(e,!1);const o=[40,180,77],v=d=>({id:d,size:o[d%4]+"px"}),s=Array.from({length:1e3}).map((d,t)=>v(t));N();var a=ee(),i=l(a);H(i,{get data(){return s},style:"width: 100%; height: 200px;",getKey:t=>t.id,horizontal:!0,children:(t,c=k)=>{var m=Z(),$=l(m);w(()=>{T(m,`
          width: ${c().size??""};
          background: white;
          border-right: solid 1px #ccc;
        `),f($,c().id)}),b(t,m)},$$slots:{default:!0}}),b(n,a),D()}var re=(n,e)=>{u(e,Number(n.currentTarget.value),!0)},oe=(n,e,o)=>{r(e).scrollToIndex(r(o))},ae=(n,e,o,v)=>{const s=Array.from({length:100}).map((a,i)=>e(i+r(o).length));u(o,r(v)?[...s,...r(o)]:[...r(o),...s],!0)},ne=(n,e)=>{u(e,!r(e))},se=x("<div> </div>"),ie=x('<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label></div> <!></div>');function de(n,e){K(e,!0);const o=[20,40,180,77],v=_=>({id:_,size:o[_%4]+"px"});let s=h(void 0),a=h(P(Array.from({length:1e3}).map((_,p)=>v(p)))),i=h(0),d=h(!1),t=h(567),c=h(!1);var m=ie(),$=l(m),j=l($),L=g($,2),q=l(L),S=g(L,2),I=l(S);I.__input=[re,t];var B=g(I,2);B.__click=[oe,s,t];var V=g(S,2),O=l(V);O.__click=[ae,v,a,c];var F=g(O,2),E=l(F);E.__change=[ne,c];var G=g(V,2);R(H(G,{get data(){return r(a)},get shift(){return r(c)},getKey:p=>p.id,onscroll:p=>{u(i,p,!0),u(d,!0)},onscrollend:()=>{u(d,!1)},children:(p,J=k)=>{var A=se(),M=l(A);w(()=>{T(A,`
          height: ${J().size??""};
          background: white;
          border-bottom: solid 1px #ccc;
        `),f(M,J().id)}),b(p,A)},$$slots:{default:!0}}),p=>u(s,p,!0),()=>r(s)),w(()=>{f(j,`offset: ${r(i)??""}`),f(q,`scrolling: ${r(d)??""}`),U(E,r(c))}),W(I,()=>r(t),_=>u(t,_)),b(n,m),D()}Q(["input","click","change"]);const _e={component:H},y={render:()=>({Component:Y})},C={render:()=>({Component:te})},z={render:()=>({Component:de})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...z.parameters?.docs?.source}}};const he=["Default","Horizontal","Controls"];export{z as Controls,y as Default,C as Horizontal,he as __namedExportsOrder,_e as default};
