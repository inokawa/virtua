import{w as p,I as $,b as l,d as N,e as T,K as M,H,x as n,J as E,i as u,g as R,s as S,c as D,f as J}from"./iframe-D7FQYxUY.js";import{i as L}from"./legacy-CyxuIC3F.js";import{r as s,k as V,m as F,u as K}from"./ListItem-XWoQW3tE.js";import{V as k}from"./Virtualizer-B1vhoOS6.js";import"./preload-helper-PPVm8Dsz.js";var U=p("<div> </div>"),W=p('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function j(g,f){T(f,!1);const m=[20,40,180,77],b=Array.from({length:1e3}).map((v,a)=>m[a%4]),_=400;L();var d=W();s(d,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(d);s(o,"background-color: burlywood; height: 400px;");var i=M(o,2);k(i,{get data(){return b},getKey:(a,h)=>h,startMargin:_,children:(a,h=$,r=$)=>{var e=U(),t=n(e);H(()=>{s(e,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),E(t,r())}),l(a,e)},$$slots:{default:!0}}),l(g,d),N()}var q=p("<div> </div>"),B=p("<div><div><div><!></div></div></div>");function G(g,f){T(f,!0);const m=[20,40,180,77],b=Array.from({length:1e3}).map((r,e)=>m[e%4]),_=40,d=60;let o=R(void 0);var i=B();s(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(i);s(v,"background-color: burlywood; padding: 40px;");var a=n(v);s(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const r=(e,t=$,c=$)=>{var x=q(),A=n(x);H(()=>{s(x,`
              height: ${t()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),E(A,c())}),l(e,x)};k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return u(o)},startMargin:_+d,children:r,$$slots:{default:!0}})}V(i,r=>S(o,r),()=>u(o)),l(g,i),N()}var Q=p("<th></th>"),X=p("<th> </th>"),Y=p('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function Z(g,f){T(f,!0);const m=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((r,e)=>e),_=40;let d=R(void 0);var o=Y(),i=n(o),v=n(i),a=n(v);s(a,"height: 40px"),F(a,21,()=>m,K,(r,e,t)=>{var c=Q();c.textContent=`Header${t}`,H(()=>s(c,`width: ${u(e)??""}px`)),l(r,c)});var h=M(v);k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return u(d)},as:"tbody",item:"tr",startMargin:_,children:(e,t=$)=>{var c=D(),x=J(c);F(x,17,()=>m,K,(A,I,O)=>{var z=X(),P=n(z);H(()=>{s(z,`width: ${u(I)??""}px`),E(P,`${t()??""} ${O}`)}),l(A,z)}),l(e,c)},$$slots:{default:!0}}),V(o,r=>S(d,r),()=>u(d)),l(g,o),N()}const ne={component:k},w={render:()=>({Component:j})},y={render:()=>({Component:G})},C={render:()=>({Component:Z})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const se=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,y as Nested,C as TableElement,se as __namedExportsOrder,ne as default};
