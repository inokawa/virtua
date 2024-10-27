import{c as E,i as $,h as v,j as F,B as p,H as T,A as H,C as d,G as M,n as L,k as _,D as U,s as W,f as ee,g as te}from"./props-BiVqxi0i.js";import{c as r,V as A,e as R,i as S}from"./Virtualizer-B7j0e1k5.js";var oe=p("<div> </div>"),re=p("<div><div>header</div> <!> <div>footer</div></div>");function q(b,y){E(y,!1);const u=[20,40,180,77],x=Array.from({length:1e3}).map((m,c)=>u[c%4]),l=400;$();var s=re();r(s,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var n=d(s);r(n,"style",`background-color: burlywood; height: ${l}px;`);var i=T(n,2);A(i,{data:x,getKey:(c,e)=>e,startMargin:l,children:(c,e)=>{let o=()=>e==null?void 0:e().item,t=()=>e==null?void 0:e().index;var a=oe(),f=d(a);H(()=>{r(a,"style",`
        height: ${o()}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),M(f,t())}),v(c,a)},$$slots:{default:!0}});var h=T(i,2);r(h,"style","background-color: steelblue; height: 600px;"),v(b,s),F()}q.__docgen={keywords:[],data:[],name:"HeaderAndFooter.svelte"};var ne=p("<div> </div>"),ae=p("<div><div><div><!></div></div></div>");function J(b,y){E(y,!0);const u=[20,40,180,77],x=Array.from({length:1e3}).map((e,o)=>u[o%4]),l=40,s=60;let n=U(void 0);var i=ae();L(i,e=>W(n,e),()=>_(n)),r(i,"style",`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var h=d(i);r(h,"style",`background-color: burlywood; padding: ${l}px;`);var m=d(h);r(m,"style",`background-color: steelblue; padding: ${s}px;`);var c=d(m);{const e=(o,t)=>{let a=()=>t==null?void 0:t().item,f=()=>t==null?void 0:t().index;var g=ne(),z=d(g);H(()=>{r(g,"style",`
              height: ${a()}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),M(z,f())}),v(o,g)};A(c,{data:x,getKey:(o,t)=>t,get scrollRef(){return _(n)},startMargin:l+s,children:e,$$slots:{default:!0}})}v(b,i),F()}J.__docgen={keywords:[],data:[],name:"Nested.svelte"};var se=p("<th></th>"),de=p("<th> </th>"),ie=p("<div><table><thead><tr></tr></thead><!></table></div>");function Q(b,y){E(y,!0);const u=[100,200,300,100,200,300,100,300,400,200],x=Array.from({length:1e3}).map((e,o)=>o),l=40;let s=U(void 0);var n=ie();L(n,e=>W(s,e),()=>_(s)),r(n,"style","height: 500px; overflow: auto;");var i=d(n),h=d(i),m=d(h);r(m,"style",`height: ${l}px`),R(m,21,()=>u,S,(e,o,t)=>{var a=se();a.textContent=`Header${t??""}`,H(()=>r(a,"style",`width: ${_(o)}px`)),v(e,a)});var c=T(h);A(c,{data:x,getKey:(o,t)=>t,get scrollRef(){return _(s)},as:"tbody",item:"tr",startMargin:l,children:(o,t)=>{let a=()=>t==null?void 0:t().item;var f=ee(),g=te(f);R(g,17,()=>u,S,(z,X,Y)=>{var N=de(),Z=d(N);H(()=>{r(N,"style",`width: ${_(X)}px`),M(Z,`${a()??""} ${Y??""}`)}),v(z,N)}),v(o,f)},$$slots:{default:!0}}),v(b,n),F()}Q.__docgen={keywords:[],data:[],name:"TableElement.svelte"};const ve={component:A},w={render:()=>({Component:q})},C={render:()=>({Component:J})},k={render:()=>({Component:Q})};var K,V,D;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    Component: HeaderAndFooterComponent
  })
}`,...(D=(V=w.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var O,P,j;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    Component: NestedComponent
  })
}`,...(j=(P=C.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var B,G,I;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    Component: TableComponent
  })
}`,...(I=(G=k.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const he=["HeaderAndFooter","Nested","TableElement"];export{w as HeaderAndFooter,C as Nested,k as TableElement,he as __namedExportsOrder,ve as default};
