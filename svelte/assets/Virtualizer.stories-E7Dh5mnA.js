import{c as T,i as Z,h as v,j as E,B as m,I as N,A as k,G as $,C as d,H as F,n as G,k as g,D as L,s as U,f as ee,g as te}from"./props-EeEA5hs9.js";import{c as o,e as M,i as R}from"./ListItem-DeaMjxuX.js";import{V as H}from"./Virtualizer-DisoBVPD.js";var re=m("<div> </div>"),oe=m("<div><div>header</div> <!> <div>footer</div></div>");function W(f,_){T(_,!1);const u=[20,40,180,77],b=Array.from({length:1e3}).map((p,c)=>u[c%4]),l=400;Z();var n=oe();o(n,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var a=d(n);o(a,"style",`background-color: burlywood; height: ${l}px;`);var i=N(a,2);H(i,{data:b,getKey:(c,e)=>e,startMargin:l,children:(c,e=$,t=$)=>{var r=re(),s=d(r);k(()=>{o(r,"style",`
        height: ${e()}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),F(s,t())}),v(c,r)},$$slots:{default:!0}});var h=N(i,2);o(h,"style","background-color: steelblue; height: 600px;"),v(f,n),E()}W.__docgen={keywords:[],data:[],name:"HeaderAndFooter.svelte"};var ae=m("<div> </div>"),ne=m("<div><div><div><!></div></div></div>");function q(f,_){T(_,!0);const u=[20,40,180,77],b=Array.from({length:1e3}).map((e,t)=>u[t%4]),l=40,n=60;let a=L(void 0);var i=ne();G(i,e=>U(a,e),()=>g(a)),o(i,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var h=d(i);o(h,"style",`background-color: burlywood; padding: ${l}px;`);var p=d(h);o(p,"style",`background-color: steelblue; padding: ${n}px;`);var c=d(p);{const e=(t,r=$,s=$)=>{var y=ae(),A=d(y);k(()=>{o(y,"style",`
              height: ${r()}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),F(A,s())}),v(t,y)};H(c,{data:b,getKey:(t,r)=>r,get scrollRef(){return g(a)},startMargin:l+n,children:e,$$slots:{default:!0}})}v(f,i),E()}q.__docgen={keywords:[],data:[],name:"Nested.svelte"};var se=m("<th></th>"),de=m("<th> </th>"),ie=m("<div><table><thead><tr></tr></thead><!></table></div>");function J(f,_){T(_,!0);const u=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((e,t)=>t),l=40;let n=L(void 0);var a=ie();G(a,e=>U(n,e),()=>g(n)),o(a,"style","height: 500px; overflow: auto;");var i=d(a),h=d(i),p=d(h);o(p,"style",`height: ${l}px`),M(p,21,()=>u,R,(e,t,r)=>{var s=se();s.textContent=`Header${r??""}`,k(()=>o(s,"style",`width: ${g(t)}px`)),v(e,s)});var c=N(h);H(c,{data:b,getKey:(t,r)=>r,get scrollRef(){return g(n)},as:"tbody",item:"tr",startMargin:l,children:(t,r=$)=>{var s=ee(),y=te(s);M(y,17,()=>u,R,(A,Q,X)=>{var z=de(),Y=d(z);k(()=>{o(z,"style",`width: ${g(Q)}px`),F(Y,`${r()??""} ${X??""}`)}),v(A,z)}),v(t,s)},$$slots:{default:!0}}),v(f,a),E()}J.__docgen={keywords:[],data:[],name:"TableElement.svelte"};const he={component:H},w={render:()=>({Component:W})},x={render:()=>({Component:q})},C={render:()=>({Component:J})};var S,K,V;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...(V=(K=w.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var D,I,O;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var P,j,B;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...(B=(j=C.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const pe=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,x as Nested,C as TableElement,pe as __namedExportsOrder,he as default};
