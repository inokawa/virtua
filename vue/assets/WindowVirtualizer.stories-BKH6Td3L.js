import{d as C,b as x,m as u,q as B,s as U,v as h,e as S,i as H,o as v,g as E,j as W,w as P,u as $,n as q,t as G}from"./vue.esm-bundler-lSza16jR.js";import{c as J,U as M,a as K,b as F,d as Q,L as X,j as Y,k as Z,i as ee,A as te,_ as ne}from"./_plugin-vue_export-helper-CYKqsqUc.js";function oe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}const se={data:{type:Array,required:!0},overscan:Number,itemSize:Number,shift:Boolean,horizontal:Boolean,as:{type:String,default:"div"},item:{type:String,default:"div"}},T=C({props:se,emits:["scroll","scrollEnd"],setup(t,{emit:a,slots:_,expose:f}){const o=t.horizontal,i=x(),e=J(t.data.length,t.itemSize,t.overscan,void 0,void 0,!t.itemSize),p=Y(e,o),l=Z(e,o),s=x(e.$getStateVersion()),V=e.$subscribe(M,()=>{s.value=e.$getStateVersion()}),w=e.$subscribe(K,()=>{a("scroll",e.$getScrollOffset())}),A=e.$subscribe(F,()=>{a("scrollEnd")}),N=u(n=>{s.value;const c=e.$getRange();return n&&ee(n,c)?n:c}),D=u(()=>s.value&&e.$isScrolling()),O=u(()=>s.value&&e.$getTotalSize()),L=u(()=>s.value&&e.$getJumpCount());return B(()=>{const n=i.value;n&&(p.$observeRoot(n),l.$observe(n))}),U(()=>{V(),w(),A(),p.$dispose(),l.$dispose()}),h(()=>t.data.length,n=>{e.$update(te,[n,t.shift])}),h([L],()=>{l.$fixScrollJump()},{flush:"post"}),f({findStartIndex:e.$findStartIndex,findEndIndex:e.$findEndIndex,scrollToIndex:l.$scrollToIndex}),()=>{const n=t.as,c=t.item,[R,j]=N.value,b=O.value,d=[];for(let r=R,k=j;r<=k;r++){const g=_.default({item:t.data[r],index:r})[0];d.push(S(X,{key:Q(g,r),_rerender:s,_store:e,_resizer:p.$observeItem,_index:r,_children:g,_isHorizontal:o,_as:c},null,8,["_rerender","_store","_resizer","_index","_children","_isHorizontal","_as"]))}return S(n,{ref:i,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:o?b+"px":"100%",height:o?"100%":b+"px",pointerEvents:D.value?"none":void 0}},oe(d)?d:{default:()=>[d],_:2},8,["style"])}}}),re={style:{padding:"200px 100px"}},ae={style:{border:"solid 1px gray"}},ie=C({__name:"WindowVirtualizer",setup(t){const a=[20,40,180,77],_=Array.from({length:1e3}).map((f,o)=>a[o%4]);return(f,o)=>(v(),E("div",re,[W("div",ae,[S($(T),{data:$(_)},{default:P(({item:i,index:e})=>[(v(),E("div",{key:e,style:q({height:i+"px",background:"white",borderBottom:"solid 1px #ccc"})},G(e),5))]),_:1},8,["data"])])]))}}),le=ne(ie,[["__scopeId","data-v-16b9c0e0"]]),ue={component:T},m={render:()=>({components:{Component:le},template:"<Component />"})};var y,z,I;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const me=["Default"];export{m as Default,me as __namedExportsOrder,ue as default};
