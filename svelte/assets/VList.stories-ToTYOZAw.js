import{n as k,b as I,d as T,f as x,t as w,a as b,q as g,c as l,s as h,p as P,j as f,h as u,g as r,o as Q}from"./iframe-Bb-0z02J.js";import{i as E}from"./legacy-DGQyhQJb.js";import{s as K,b as R,a as U}from"./ListItem-B4wkczzA.js";import{V as A,b as W}from"./VList-Bu43cT-D.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BAiI_QP1.js";var X=x("<div> </div>");function Y(n,e){T(e,!1);const o=[20,40,180,77],v=Array.from({length:1e3}).map((s,a)=>o[a%4]);E(),A(n,{get data(){return v},style:"height: 100vh;",getKey:(a,i)=>i,children:(a,i=k,d=k)=>{var t=X(),c=l(t);w(()=>{K(t,`
        height: ${i()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),g(c,d())}),b(a,t)},$$slots:{default:!0}}),I()}var Z=x("<div> </div>"),ee=x('<div style="padding: 10px;"><!></div>');function te(n,e){T(e,!1);const o=[40,180,77],v=d=>({id:d,size:o[d%4]+"px"}),s=Array.from({length:1e3}).map((d,t)=>v(t));E();var a=ee(),i=l(a);A(i,{get data(){return s},style:"width: 100%; height: 200px;",getKey:t=>t.id,horizontal:!0,children:(t,c=k)=>{var m=Z(),$=l(m);w(()=>{K(m,`
          width: ${c().size??""};
          background: white;
          border-right: solid 1px #ccc;
        `),g($,c().id)}),b(t,m)},$$slots:{default:!0}}),b(n,a),I()}var re=(n,e)=>{u(e,Number(n.currentTarget.value),!0)},oe=(n,e,o)=>{r(e).scrollToIndex(r(o))},ae=(n,e,o,v)=>{const s=Array.from({length:100}).map((a,i)=>e(i+r(o).length));u(o,r(v)?[...s,...r(o)]:[...r(o),...s],!0)},ne=(n,e)=>{u(e,!r(e))},se=x("<div> </div>"),ie=x('<div style="height: 100%; display: flex; flex-direction: column;"><div> </div> <div> </div> <div><input type="number"/> <button>scrollToIndex</button></div> <div><button>append</button> <label><input type="checkbox"/> prepend</label></div> <!></div>');function de(n,e){T(e,!0);const o=[20,40,180,77],v=_=>({id:_,size:o[_%4]+"px"});let s=h(void 0),a=h(P(Array.from({length:1e3}).map((_,p)=>v(p)))),i=h(0),d=h(!1),t=h(567),c=h(!1);var m=ie(),$=l(m),N=l($),S=f($,2),B=l(S),V=f(S,2),D=l(V);D.__input=[re,t];var F=f(D,2);F.__click=[oe,s,t];var L=f(V,2),O=l(L);O.__click=[ae,v,a,c];var G=f(O,2),j=l(G);j.__change=[ne,c];var J=f(L,2);R(A(J,{get data(){return r(a)},get shift(){return r(c)},getKey:p=>p.id,onscroll:p=>{u(i,p,!0),u(d,!0)},onscrollend:()=>{u(d,!1)},children:(p,q=k)=>{var H=se(),M=l(H);w(()=>{K(H,`
          height: ${q().size??""};
          background: white;
          border-bottom: solid 1px #ccc;
        `),g(M,q().id)}),b(p,H)},$$slots:{default:!0}}),p=>u(s,p,!0),()=>r(s)),w(()=>{g(N,`offset: ${r(i)??""}`),g(B,`scrolling: ${r(d)??""}`),U(j,r(c))}),W(D,()=>r(t),_=>u(t,_)),b(n,m),I()}Q(["input","click","change"]);const _e={component:A},y={render:()=>({Component:Y})},C={render:()=>({Component:te})},z={render:()=>({Component:de})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
