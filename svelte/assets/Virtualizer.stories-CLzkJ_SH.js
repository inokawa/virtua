import{f as g,n as $,a as c,b as z,d as A,j as N,t as w,c as n,q as C,g as f,s as R,h as T,k as P,l as j}from"./iframe-DmbpJxkR.js";import{i as q}from"./legacy-BHBpEgE3.js";import{s as d,b as F,e as E,i as M}from"./ListItem-D_G_P-Af.js";import{V as y}from"./Virtualizer-CwmhorWF.js";var D=g("<div> </div>"),I=g('<div><div>header</div> <!> <div style="background-color: steelblue; height: 600px;">footer</div></div>');function L(p,m){A(m,!1);const u=[20,40,180,77],b=Array.from({length:1e3}).map((v,a)=>u[a%4]),_=400;q();var i=I();d(i,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var o=n(i);d(o,"background-color: burlywood; height: 400px;");var s=N(o,2);y(s,{get data(){return b},getKey:(a,h)=>h,startMargin:_,children:(a,h=$,e=$)=>{var t=D(),r=n(t);w(()=>{d(t,`
        height: ${h()??""}px;
        background: white;
        border-bottom: solid 1px #ccc;
      `),C(r,e())}),c(a,t)},$$slots:{default:!0}}),c(p,i),z()}var S=g("<div> </div>"),U=g("<div><div><div><!></div></div></div>");function W(p,m){A(m,!0);const u=[20,40,180,77],b=Array.from({length:1e3}).map((e,t)=>u[t%4]),_=40,i=60;let o=R(void 0);var s=U();d(s,`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
  overflow-anchor: none;
`);var v=n(s);d(v,"background-color: burlywood; padding: 40px;");var a=n(v);d(a,"background-color: steelblue; padding: 60px;");var h=n(a);{const e=(t,r=$,l=$)=>{var x=S(),k=n(x);w(()=>{d(x,`
              height: ${r()??""}px;
              background: white;
              border-bottom: solid 1px #ccc;
            `),C(k,l())}),c(t,x)};y(h,{get data(){return b},getKey:(t,r)=>r,get scrollRef(){return f(o)},startMargin:_+i,children:e,$$slots:{default:!0}})}F(s,e=>T(o,e),()=>f(o)),c(p,s),z()}var B=g("<th></th>"),G=g("<th> </th>"),J=g('<div style="height: 500px; overflow: auto;"><table><thead><tr></tr></thead><!></table></div>');function Q(p,m){A(m,!0);const u=[100,200,300,100,200,300,100,300,400,200],b=Array.from({length:1e3}).map((e,t)=>t),_=40;let i=R(void 0);var o=J(),s=n(o),v=n(s),a=n(v);d(a,"height: 40px"),E(a,21,()=>u,M,(e,t,r)=>{var l=B();l.textContent=`Header${r}`,w(()=>d(l,`width: ${f(t)??""}px`)),c(e,l)});var h=N(v);y(h,{get data(){return b},getKey:(t,r)=>r,get scrollRef(){return f(i)},as:"tbody",item:"tr",startMargin:_,children:(t,r=$)=>{var l=P(),x=j(l);E(x,17,()=>u,M,(k,K,V)=>{var H=G(),O=n(H);w(()=>{d(H,`width: ${f(K)??""}px`),C(O,`${r()??""} ${V}`)}),c(k,H)}),c(t,l)},$$slots:{default:!0}}),F(o,e=>T(i,e),()=>f(i)),c(p,o),z()}const et={component:y},rt={render:()=>({Component:L})},ot={render:()=>({Component:W})},at={render:()=>({Component:Q})},nt=["HeaderAndFooter","Nested","TableElement"];export{rt as HeaderAndFooter,ot as Nested,at as TableElement,nt as __namedExportsOrder,et as default};
