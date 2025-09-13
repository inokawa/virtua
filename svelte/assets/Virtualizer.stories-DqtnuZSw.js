import{f as p,n as $,a as l,b as N,d as T,o as L,j as H,e as n,k as E,g as u,s as U,i as W,v as Z,w as ee}from"./iframe-B9LfTXKY.js";import{i as te,c as d,b as q,e as F,f as M}from"./legacy-lfkaat-L.js";import{V as A}from"./Virtualizer-CjCXV-vB.js";import"./preload-helper-BQ24v_F8.js";var re=p("<div> </div>"),oe=p('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function B(g,f){T(f,!1);const m=[20,40,180,77],_=Array.from({length:1e3}).map((v,a)=>m[a%4]),b=400;te();var s=oe();d(s,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(s);d(o,"background-color: burlywood; height: 400px;");var i=L(o,2);A(i,{get data(){return _},getKey:(a,h)=>h,startMargin:b,children:(a,h=$,t=$)=>{var e=re(),r=n(e);H(()=>{d(e,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),E(r,t())}),l(a,e)},$$slots:{default:!0}}),l(g,s),N()}B.__docgen={data:[],name:"HeaderAndFooter.svelte"};var ae=p("<div> </div>"),ne=p("<div><div><div><!></div></div></div>");function G(g,f){T(f,!0);const m=[20,40,180,77],_=Array.from({length:1e3}).map((t,e)=>m[e%4]),b=40,s=60;let o=U(void 0);var i=ne();d(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(i);d(v,"background-color: burlywood; padding: 40px;");var a=n(v);d(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const t=(e,r=$,c=$)=>{var x=ae(),k=n(x);H(()=>{d(x,`
              height: ${r()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),E(k,c())}),l(e,x)};A(h,{get data(){return _},getKey:(e,r)=>r,get scrollRef(){return u(o)},startMargin:b+s,children:t,$$slots:{default:!0}})}q(i,t=>W(o,t),()=>u(o)),l(g,i),N()}G.__docgen={data:[],name:"Nested.svelte"};var de=p("<th></th>"),se=p("<th> </th>"),ie=p('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function J(g,f){T(f,!0);const m=[100,200,300,100,200,300,100,300,400,200],_=Array.from({length:1e3}).map((t,e)=>e),b=40;let s=U(void 0);var o=ie(),i=n(o),v=n(i),a=n(v);d(a,"height: 40px"),F(a,21,()=>m,M,(t,e,r)=>{var c=de();c.textContent=`Header${r}`,H(()=>d(c,`width: ${u(e)??""}px`)),l(t,c)});var h=L(v);A(h,{get data(){return _},getKey:(e,r)=>r,get scrollRef(){return u(s)},as:"tbody",item:"tr",startMargin:b,children:(e,r=$)=>{var c=Z(),x=ee(c);F(x,17,()=>m,M,(k,Q,X)=>{var z=se(),Y=n(z);H(()=>{d(z,`width: ${u(Q)??""}px`),E(Y,`${r()??""} ${X}`)}),l(k,z)}),l(e,c)},$$slots:{default:!0}}),q(o,t=>W(s,t),()=>u(s)),l(g,o),N()}J.__docgen={data:[],name:"TableElement.svelte"};const pe={component:A},w={render:()=>({Component:B})},y={render:()=>({Component:G})},C={render:()=>({Component:J})};var R,S,K;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...(K=(S=w.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};var V,O,P;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...(P=(O=y.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,D,I;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...(I=(D=C.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const me=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,y as Nested,C as TableElement,me as __namedExportsOrder,pe as default};
