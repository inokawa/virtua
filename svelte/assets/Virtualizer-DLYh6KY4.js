import{c as W,d as r,D as k,v as f,o as Y,K as Q,L as v,M as $,f as g,g as T,h as E,j as ee,s as I,k as t,n as te,A as ie,N as s,O as ne}from"./props-EeEA5hs9.js";import{d as se,f as ae,g as le,O as S,h as re,F as oe,G as de,j as ce,k as fe,l as ue,m as me,n as w,o as ye,S as pe,p as be,q as he,e as _e,r as ke,t as ve,C as ge,u as Te,v as Ee,b as Ie,L as Se,w as we,x as xe,y as Ne,s as Oe,I as ze,z as Re,A as Ge}from"./ListItem-DzOmxiRa.js";function Le(x,i){W(i,!0);let N=r(i,"getKey",3,le),O=r(i,"as",3,"div"),z=r(i,"shift",3,!1),o=r(i,"horizontal",3,!1),u=r(i,"startMargin",3,0);const e=se(i.data.length,i.itemSize,i.overscan,o(),n=>{I(a,f(n))},n=>{i.onscroll&&i.onscroll(n)},()=>{i.onscrollend&&i.onscrollend()});let c=k(void 0),a=k(f([])),R=s(()=>t(a)&&e[xe]()),G=s(()=>t(a)&&e[Re]()),m=s(()=>t(a)&&e[Ge]()),y=s(()=>t(a)&&e[Ne]());Y(()=>{i.scrollRef?e[S](i.scrollRef):e[S](t(c).parentElement)}),Q(()=>{e[re]()}),v(()=>{i.data.length!==e[ve]()&&e[ge](i.data.length,z())}),v(()=>{u()!==e[Te]()&&e[Ee](u())});let p;$(()=>{p!==t(y)&&(p=t(y),e[oe]())});const L=e[de],C=e[ce],M=e[fe],A=e[ue],V=e[me],D=e[w],F=e[ye],U=e[pe],H=e[be],Z=e[he];let j=s(()=>Oe({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden",width:o()?t(m)+"px":"100%",height:o()?"100%":t(m)+"px","pointer-events":t(G)?"none":void 0}));var b=g(),K=T(b);return ae(K,O,!1,(n,P)=>{te(n,l=>I(c,f(l)),()=>t(c));let h;ie(()=>h=Ie(n,h,{style:t(j)},void 0,n.namespaceURI===ne,n.nodeName.includes("-")));var _=g(),X=T(_);_e(X,17,()=>ke(t(R)),l=>N()(i.data[l],l),(l,d)=>{const q=s(()=>i.data[t(d)]);var B=s(()=>t(a)&&e[w](t(d))),J=s(()=>t(a)&&e[ze](t(d)));Se(l,{get children(){return i.children},get item(){return t(q)},get index(){return t(d)},get as(){return i.item},get offset(){return t(B)},get hide(){return t(J)},get horizontal(){return o()},get resizer(){return e[we]}})}),E(P,_)}),E(x,b),ee({getScrollOffset:L,getScrollSize:C,getViewportSize:M,findStartIndex:A,findEndIndex:V,getItemOffset:D,getItemSize:F,scrollToIndex:U,scrollTo:H,scrollBy:Z})}Le.__docgen={data:[{name:"data",visibility:"public",description:"The data items rendered by this component.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"array",text:"T[]"},static:!1,readonly:!1},{name:"children",visibility:"public",description:"The elements renderer snippet.",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[item: T, index: number]>"},static:!1,readonly:!1},{name:"getKey",visibility:"public",description:"Function that returns the key of an item in the list. It's recommended to specify whenever possible for performance.",keywords:[],kind:"let",type:{kind:"function",text:"(data: T, index: number) => string | number"},static:!1,readonly:!1,defaultValue:"function"},{name:"as",visibility:"public",description:"Component or element type for container element.",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"number",text:"number"}],text:"string | number"},static:!1,readonly:!1,defaultValue:'"div"'},{name:"item",visibility:"public",description:"Component or element type for item element.",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"number",text:"number"}],text:"string | number"},static:!1,readonly:!1},{name:"overscan",visibility:"public",description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"scrollRef",visibility:"public",description:"Reference to the scrollable element. The default will get the direct parent element of virtualizer.",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"HTMLElement"},static:!1,readonly:!1},{name:"itemSize",visibility:"public",description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"shift",visibility:"public",description:"While true is set, scroll position will be maintained from the end not usual start when items are added to/removed from start. It's recommended to set false if you add to/remove from mid/end of the list because it can cause unexpected behavior. This prop is useful for reverse infinite scrolling.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"horizontal",visibility:"public",description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"startMargin",visibility:"public",description:"If you put an element before virtualizer, you have to define its height with this prop.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"onscroll",visibility:"public",description:"Callback invoked whenever scroll offset changes.",keywords:[],kind:"let",type:{kind:"function",text:"(offset: number) => void"},static:!1,readonly:!1},{name:"onscrollend",visibility:"public",description:"Callback invoked when scrolling stops.",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1}],name:"Virtualizer.svelte"};export{Le as V};
