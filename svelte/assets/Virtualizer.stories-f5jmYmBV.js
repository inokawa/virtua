import{c as N,i as Z,h as v,j as T,B as m,I as B,A as k,G as $,C as s,H as E,n as G,k as g,D as L,s as U,f as ee,g as te}from"./props-EeEA5hs9.js";import{c as d,e as F,i as M}from"./ListItem-CrEDn9Xp.js";import{V as H}from"./Virtualizer-CkBOds7q.js";var re=m("<div> </div>"),oe=m('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function W(f,_){N(_,!1);const u=[20,40,180,77],b=Array.from({length:1e3}).map((h,n)=>u[n%4]),i=400;Z();var o=oe();d(o,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var a=s(o);d(a,"style",`background-color: burlywood; height: ${i}px;`);var l=B(a,2);H(l,{data:b,getKey:(n,p)=>p,startMargin:i,children:(n,p=$,t=$)=>{var e=re(),r=s(e);k(()=>{d(e,"style",`
        height: ${p()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),E(r,t())}),v(n,e)},$$slots:{default:!0}}),v(f,o),T()}W.__docgen={keywords:[],data:[],name:"HeaderAndFooter.svelte"};var ae=m("<div> </div>"),ne=m("<div><div><div><!></div></div></div>");function q(f,_){N(_,!0);const u=[20,40,180,77],b=Array.from({length:1e3}).map((t,e)=>u[e%4]),i=40,o=60;let a=L(void 0);var l=ne();G(l,t=>U(a,t),()=>g(a)),d(l,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var h=s(l);d(h,"style",`background-color: burlywood; padding: ${i}px;`);var n=s(h);d(n,"style",`background-color: steelblue; padding: ${o}px;`);var p=s(n);{const t=(e,r=$,c=$)=>{var y=ae(),A=s(y);k(()=>{d(y,"style",`
              height: ${r()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),E(A,c())}),v(e,y)};H(p,{data:b,getKey:(e,r)=>r,get scrollRef(){return g(a)},startMargin:i+o,children:t,$$slots:{default:!0}})}v(f,l),T()}q.__docgen={keywords:[],data:[],name:"Nested.svelte"};var se=m("<th></th>"),de=m("<th> </th>"),ie=m('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function J(f,_){N(_,!0);const u=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((t,e)=>e),i=40;let o=L(void 0);var a=ie();G(a,t=>U(o,t),()=>g(o));var l=s(a),h=s(l),n=s(h);d(n,"style",`height: ${i}px`),F(n,21,()=>u,M,(t,e,r)=>{var c=se();c.textContent=`Header${r??""}`,k(()=>d(c,"style",`width: ${g(e)??""}px`)),v(t,c)});var p=B(h);H(p,{data:b,getKey:(e,r)=>r,get scrollRef(){return g(o)},as:"tbody",item:"tr",startMargin:i,children:(e,r=$)=>{var c=ee(),y=te(c);F(y,17,()=>u,M,(A,Q,X)=>{var z=de(),Y=s(z);k(()=>{d(z,"style",`width: ${g(Q)??""}px`),E(Y,`${r()??""} ${X??""}`)}),v(A,z)}),v(e,c)},$$slots:{default:!0}}),v(f,a),T()}J.__docgen={keywords:[],data:[],name:"TableElement.svelte"};const he={component:H},w={render:()=>({Component:W})},x={render:()=>({Component:q})},C={render:()=>({Component:J})};var R,S,K;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...(K=(S=w.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};var V,D,I;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,P,j;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...(j=(P=C.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const pe=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,x as Nested,C as TableElement,pe as __namedExportsOrder,he as default};
