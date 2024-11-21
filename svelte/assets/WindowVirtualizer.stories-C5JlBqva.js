import{c as C,d as k,D as I,v as E,o as U,K as H,L as X,M as j,n as B,A as D,h as w,j as G,B as T,s as x,k as e,N as s,i as J,C as g,G as z,H as q}from"./props-EeEA5hs9.js";import{B as P,e as Z,g as Y,O as Q,h as $,l as ee,m as te,S as ie,r as ne,t as ae,C as se,F as re,L as oe,w as le,c as L,x as de,y as ce,s as ue,n as fe,I as me,z as ye,A as pe}from"./ListItem-ChqQMuun.js";var ve=T("<div></div>");function v(h,t){C(t,!0);let b=k(t,"getKey",3,Y),_=k(t,"shift",3,!1),r=k(t,"horizontal",3,!1);const i=P(t.data.length,t.itemSize,t.overscan,r(),n=>{x(a,E(n))},n=>{t.onscroll&&t.onscroll(n)},()=>{t.onscrollend&&t.onscrollend()});let d=I(void 0),a=I(E([])),o=s(()=>e(a)&&i[de]()),c=s(()=>e(a)&&i[ye]()),u=s(()=>e(a)&&i[pe]()),l=s(()=>e(a)&&i[ce]());U(()=>{i[Q](e(d))}),H(()=>{i[$]()}),X(()=>{t.data.length!==i[ae]()&&i[se](t.data.length,_())});let f;j(()=>{f!==e(l)&&(f=e(l),i[re]())});const M=i[ee],V=i[te],R=i[ie];let A=s(()=>ue({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden",width:r()?e(u)+"px":"100%",height:r()?"100%":e(u)+"px","pointer-events":e(c)?"none":void 0}));var m=ve();return B(m,n=>x(d,n),()=>e(d)),Z(m,21,()=>ne(e(o)),n=>b()(t.data[n],n),(n,y)=>{const F=s(()=>t.data[e(y)]);var W=s(()=>e(a)&&i[fe](e(y))),K=s(()=>e(a)&&i[me](e(y)));oe(n,{get children(){return t.children},get item(){return e(F)},get index(){return e(y)},as:"div",get offset(){return e(W)},get hide(){return e(K)},get horizontal(){return r()},get resizer(){return i[le]}})}),D(()=>L(m,"style",e(A))),w(h,m),G({findStartIndex:M,findEndIndex:V,scrollToIndex:R})}v.__docgen={data:[{name:"data",visibility:"public",description:"The data items rendered by this component.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"array",text:"T[]"},static:!1,readonly:!1},{name:"children",visibility:"public",description:"The elements renderer snippet.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[item: T, index: number]>"},static:!1,readonly:!1},{name:"getKey",visibility:"public",description:"Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.",keywords:[],kind:"let",type:{kind:"function",text:"(data: T, index: number) => string | number"},static:!1,readonly:!1,defaultValue:"function"},{name:"overscan",visibility:"public",description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"itemSize",visibility:"public",description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"shift",visibility:"public",description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"horizontal",visibility:"public",description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onscroll",visibility:"public",description:"Callback invoked whenever scroll offset changes.",keywords:[],kind:"let",type:{kind:"function",text:"(offset: number) => void"},static:!1,readonly:!1},{name:"onscrollend",visibility:"public",description:"Callback invoked when scrolling stops.",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1}],name:"WindowVirtualizer.svelte"};var he=T("<div> </div>"),be=T('<div style="padding: 200px 100px;"><div style="border: solid 1px gray;"><!></div></div>');function _e(h,t){C(t,!1);const b=[20,40,180,77],_=Array.from({length:1e3}).map((a,o)=>b[o%4]);J();var r=be(),i=g(r),d=g(i);v(d,{data:_,getKey:(o,c)=>c,children:(o,c=z,u=z)=>{var l=he(),f=g(l);D(()=>{L(l,"style",`
            height: ${c()}px;
            background: white;
            border-bottom: solid 1px #ccc;
          `),q(f,u())}),w(o,l)},$$slots:{default:!0}}),w(h,r),G()}v.__docgen={keywords:[],data:[],name:"WindowVirtualizer.svelte"};const we={component:v},p={render:()=>({Component:_e})};var S,N,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const Te=["Default"];export{p as Default,Te as __namedExportsOrder,we as default};
