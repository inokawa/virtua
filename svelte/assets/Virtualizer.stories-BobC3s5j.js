import{G as $,e as l,g as F,h as N,J as R,F as H,D as p,C as n,H as T,i as u,a as S,s as K,d as G,f as I}from"./iframe-BejLQ092.js";import{i as J}from"./legacy-wHCGpZOS.js";import{r as s,k as V,m as E,u as M}from"./ListItem-BgY3xKk5.js";import{V as k}from"./Virtualizer-Cz9bL6a4.js";import"./preload-helper-PPVm8Dsz.js";var L=p("<div> </div>"),U=p('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function W(g,f){N(f,!1);const m=[20,40,180,77],b=Array.from({length:1e3}).map((v,a)=>m[a%4]),_=400;J();var d=U();s(d,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(d);s(o,"background-color: burlywood; height: 400px;");var i=R(o,2);k(i,{get data(){return b},getKey:(a,h)=>h,startMargin:_,children:(a,h=$,r=$)=>{var e=L(),t=n(e);H(()=>{s(e,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),T(t,r())}),l(a,e)},$$slots:{default:!0}}),l(g,d),F()}var j=p("<div> </div>"),q=p("<div><div><div><!></div></div></div>");function B(g,f){N(f,!0);const m=[20,40,180,77],b=Array.from({length:1e3}).map((r,e)=>m[e%4]),_=40,d=60;let o=S(void 0);var i=q();s(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(i);s(v,"background-color: burlywood; padding: 40px;");var a=n(v);s(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const r=(e,t=$,c=$)=>{var x=j(),A=n(x);H(()=>{s(x,`
              height: ${t()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),T(A,c())}),l(e,x)};k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return u(o)},startMargin:_+d,children:r,$$slots:{default:!0}})}V(i,r=>K(o,r),()=>u(o)),l(g,i),F()}var Q=p("<th></th>"),X=p("<th> </th>"),Y=p('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function Z(g,f){N(f,!0);const m=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((r,e)=>e),_=40;let d=S(void 0);var o=Y(),i=n(o),v=n(i),a=n(v);s(a,"height: 40px"),E(a,21,()=>m,M,(r,e,t)=>{var c=Q();c.textContent=`Header${t}`,H(()=>s(c,`width: ${u(e)??""}px`)),l(r,c)});var h=R(v);k(h,{get data(){return b},getKey:(e,t)=>t,get scrollRef(){return u(d)},as:"tbody",item:"tr",startMargin:_,children:(e,t=$)=>{var c=G(),x=I(c);E(x,17,()=>m,M,(A,D,O)=>{var z=X(),P=n(z);H(()=>{s(z,`width: ${u(D)??""}px`),T(P,`${t()??""} ${O}`)}),l(A,z)}),l(e,c)},$$slots:{default:!0}}),V(o,r=>K(d,r),()=>u(d)),l(g,o),F()}const ne={component:k},w={render:()=>({Component:W})},y={render:()=>({Component:B})},C={render:()=>({Component:Z})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
