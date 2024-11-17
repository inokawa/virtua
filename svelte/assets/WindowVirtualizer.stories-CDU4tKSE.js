import{c as G,d as k,D as E,v as I,o as K,K as U,L as H,M as j,n as B,A as O,h as w,j as D,B as T,s as x,k as e,N as s,i as J,C as g,G as z,H as X}from"./props-EeEA5hs9.js";import{B as q,e as P,g as Z,O as Y,h as Q,l as $,m as ee,r as te,t as ie,C as ne,F as ae,L as se,w as re,c as M,x as oe,y as le,s as de,n as ce,I as ue,z as fe,A as me}from"./ListItem-DzOmxiRa.js";var ye=T("<div></div>");function v(h,t){G(t,!0);let b=k(t,"getKey",3,Z),_=k(t,"shift",3,!1),r=k(t,"horizontal",3,!1);const i=q(t.data.length,t.itemSize,t.overscan,r(),n=>{x(a,I(n))},n=>{t.onscroll&&t.onscroll(n)},()=>{t.onscrollend&&t.onscrollend()});let d=E(void 0),a=E(I([])),o=s(()=>e(a)&&i[oe]()),c=s(()=>e(a)&&i[fe]()),u=s(()=>e(a)&&i[me]()),l=s(()=>e(a)&&i[le]());K(()=>{i[Y](e(d))}),U(()=>{i[Q]()}),H(()=>{t.data.length!==i[ie]()&&i[ne](t.data.length,_())});let f;j(()=>{f!==e(l)&&(f=e(l),i[ae]())});const L=i[$],V=i[ee];let R=s(()=>de({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden",width:r()?e(u)+"px":"100%",height:r()?"100%":e(u)+"px","pointer-events":e(c)?"none":void 0}));var m=ye();return B(m,n=>x(d,n),()=>e(d)),P(m,21,()=>te(e(o)),n=>b()(t.data[n],n),(n,y)=>{const A=s(()=>t.data[e(y)]);var F=s(()=>e(a)&&i[ce](e(y))),W=s(()=>e(a)&&i[ue](e(y)));se(n,{get children(){return t.children},get item(){return e(A)},get index(){return e(y)},as:"div",get offset(){return e(F)},get hide(){return e(W)},get horizontal(){return r()},get resizer(){return i[re]}})}),O(()=>M(m,"style",e(R))),w(h,m),D({findStartIndex:L,findEndIndex:V})}v.__docgen={data:[{name:"data",visibility:"public",description:"The data items rendered by this component.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"array",text:"T[]"},static:!1,readonly:!1},{name:"children",visibility:"public",description:"The elements renderer snippet.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[item: T, index: number]>"},static:!1,readonly:!1},{name:"getKey",visibility:"public",description:"Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.",keywords:[],kind:"let",type:{kind:"function",text:"(data: T, index: number) => string | number"},static:!1,readonly:!1,defaultValue:"function"},{name:"overscan",visibility:"public",description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"itemSize",visibility:"public",description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"shift",visibility:"public",description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"horizontal",visibility:"public",description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onscroll",visibility:"public",description:"Callback invoked whenever scroll offset changes.",keywords:[],kind:"let",type:{kind:"function",text:"(offset: number) => void"},static:!1,readonly:!1},{name:"onscrollend",visibility:"public",description:"Callback invoked when scrolling stops.",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1}],name:"WindowVirtualizer.svelte"};var pe=T("<div> </div>"),ve=T('<div style="padding: 200px 100px;"><div style="border: solid 1px gray;"><!></div></div>');function he(h,t){G(t,!1);const b=[20,40,180,77],_=Array.from({length:1e3}).map((a,o)=>b[o%4]);J();var r=ve(),i=g(r),d=g(i);v(d,{data:_,getKey:(o,c)=>c,children:(o,c=z,u=z)=>{var l=pe(),f=g(l);O(()=>{M(l,"style",`
            height: ${c()}px;
            background: white;
            border-bottom: solid 1px #ccc;
          `),X(f,u())}),w(o,l)},$$slots:{default:!0}}),w(h,r),D()}v.__docgen={keywords:[],data:[],name:"WindowVirtualizer.svelte"};const ke={component:v},p={render:()=>({Component:he})};var N,S,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ge=["Default"];export{p as Default,ge as __namedExportsOrder,ke as default};
