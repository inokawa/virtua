import{c as F,i as Z,h as l,j as N,C as p,J as q,B as k,H as x,D as n,I as T,k as u,q as B,F as J,s as L,f as ee,g as re}from"./legacy-Dknq7eTc.js";import{b as s,e as E,i as M}from"./ListItem-egg9N8Lx.js";import{V as H}from"./Virtualizer-BtjficuY.js";var te=p("<div> </div>"),oe=p('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function U(g,f){F(f,!1);const m=[20,40,180,77],_=Array.from({length:1e3}).map((v,a)=>m[a%4]),b=400;Z();var d=oe();s(d,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(d);s(o,"background-color: burlywood; height: 400px;");var i=q(o,2);H(i,{data:_,getKey:(a,h)=>h,startMargin:b,children:(a,h=x,r=x)=>{var e=te(),t=n(e);k(()=>{s(e,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),T(t,r())}),l(a,e)},$$slots:{default:!0}}),l(g,d),N()}U.__docgen={keywords:[],data:[],name:"HeaderAndFooter.svelte"};var ae=p("<div> </div>"),ne=p("<div><div><div><!></div></div></div>");function W(g,f){F(f,!0);const m=[20,40,180,77],_=Array.from({length:1e3}).map((r,e)=>m[e%4]),b=40,d=60;let o=J(void 0);var i=ne();s(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(i);s(v,"background-color: burlywood; padding: 40px;");var a=n(v);s(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const r=(e,t=x,c=x)=>{var w=ae(),A=n(w);k(()=>{s(w,`
              height: ${t()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),T(A,c())}),l(e,w)};H(h,{data:_,getKey:(e,t)=>t,get scrollRef(){return u(o)},startMargin:b+d,children:r,$$slots:{default:!0}})}B(i,r=>L(o,r),()=>u(o)),l(g,i),N()}W.__docgen={keywords:[],data:[],name:"Nested.svelte"};var se=p("<th></th>"),de=p("<th> </th>"),ie=p('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function G(g,f){F(f,!0);const m=[100,200,300,100,200,300,100,300,400,200],_=Array.from({length:1e3}).map((r,e)=>e),b=40;let d=J(void 0);var o=ie(),i=n(o),v=n(i),a=n(v);s(a,"height: 40px"),E(a,21,()=>m,M,(r,e,t)=>{var c=se();c.textContent=`Header${t}`,k(()=>s(c,`width: ${u(e)??""}px`)),l(r,c)});var h=q(v);H(h,{data:_,getKey:(e,t)=>t,get scrollRef(){return u(d)},as:"tbody",item:"tr",startMargin:b,children:(e,t=x)=>{var c=ee(),w=re(c);E(w,17,()=>m,M,(A,Q,X)=>{var z=de(),Y=n(z);k(()=>{s(z,`width: ${u(Q)??""}px`),T(Y,`${t()??""} ${X}`)}),l(A,z)}),l(e,c)},$$slots:{default:!0}}),B(o,r=>L(d,r),()=>u(d)),l(g,o),N()}G.__docgen={keywords:[],data:[],name:"TableElement.svelte"};const he={component:H},$={render:()=>({Component:U})},y={render:()=>({Component:W})},C={render:()=>({Component:G})};var R,S,K;$.parameters={...$.parameters,docs:{...(R=$.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...(K=(S=$.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};var V,D,I;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...(I=(D=y.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,P,j;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...(j=(P=C.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const pe=["HeaderAndFooter","Nested","TableElement"];export{$ as HeaderAndFooter,y as Nested,C as TableElement,pe as __namedExportsOrder,he as default};
