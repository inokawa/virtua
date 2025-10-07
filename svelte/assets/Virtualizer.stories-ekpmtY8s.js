import{f as p,n as $,a as l,b as N,d as T,o as R,j as H,e as n,k as E,g as m,s as S,i as K,v as D,w as I}from"./iframe-ps94CK5j.js";import{i as L,c as s,b as V,e as F,f as M}from"./legacy-C3-HjQRH.js";import{V as k}from"./Virtualizer-BSNLGK_i.js";import"./preload-helper-PPVm8Dsz.js";var U=p("<div> </div>"),W=p('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function q(g,f){T(f,!1);const u=[20,40,180,77],b=Array.from({length:1e3}).map((v,a)=>u[a%4]),_=400;L();var d=W();s(d,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(d);s(o,"background-color: burlywood; height: 400px;");var i=R(o,2);k(i,{get data(){return b},getKey:(a,h)=>h,startMargin:_,children:(a,h=$,r=$)=>{var e=U(),t=n(e);H(()=>{s(e,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),E(t,r())}),l(a,e)},$$slots:{default:!0}}),l(g,d),N()}var B=p("<div> </div>"),G=p("<div><div><div><!></div></div></div>");function J(g,f){T(f,!0);const u=[20,40,180,77],b=Array.from({length:1e3}).map((r,e)=>u[e%4]),_=40,d=60;let o=S(void 0);var i=G();s(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(i);s(v,"background-color: burlywood; padding: 40px;");var a=n(v);s(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const r=(e,t=$,c=$)=>{var x=B(),A=n(x);H(()=>{s(x,`
              height: ${t()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),E(A,c())}),l(e,x)};k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return m(o)},startMargin:_+d,children:r,$$slots:{default:!0}})}V(i,r=>K(o,r),()=>m(o)),l(g,i),N()}var Q=p("<th></th>"),X=p("<th> </th>"),Y=p('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function Z(g,f){T(f,!0);const u=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((r,e)=>e),_=40;let d=S(void 0);var o=Y(),i=n(o),v=n(i),a=n(v);s(a,"height: 40px"),F(a,21,()=>u,M,(r,e,t)=>{var c=Q();c.textContent=`Header${t}`,H(()=>s(c,`width: ${m(e)??""}px`)),l(r,c)});var h=R(v);k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return m(d)},as:"tbody",item:"tr",startMargin:_,children:(e,t=$)=>{var c=D(),x=I(c);F(x,17,()=>u,M,(A,O,P)=>{var z=X(),j=n(z);H(()=>{s(z,`width: ${m(O)??""}px`),E(j,`${t()??""} ${P}`)}),l(A,z)}),l(e,c)},$$slots:{default:!0}}),V(o,r=>K(d,r),()=>m(d)),l(g,o),N()}const ae={component:k},w={render:()=>({Component:q})},y={render:()=>({Component:J})},C={render:()=>({Component:Z})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...C.parameters?.docs?.source}}};const ne=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,y as Nested,C as TableElement,ne as __namedExportsOrder,ae as default};
