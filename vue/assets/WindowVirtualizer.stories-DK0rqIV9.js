import{d as I,b as v,o as L,e as R,w as p,f as g,g as x,l as b,m as k,k as O,u as E,n as W,t as B}from"./vue.esm-bundler-CtIVE62n.js";import{c as U,U as H,a as P,d as j,e as G,f as J,L as M,S as q,j as F,k as K,A as Z,_ as Q}from"./_plugin-vue_export-helper-DrZGmSxU.js";const X={data:{type:Array,required:!0},overscan:{type:Number,default:4},itemSize:Number,shift:Boolean,horizontal:Boolean},D=I({props:X,emits:["scrollEnd","rangeChange"],setup(n,{emit:c,slots:u}){const o=n.horizontal,s=v(),e=U(n.data.length,n.itemSize??40,void 0,void 0,!n.itemSize),r=F(e,o),m=K(e,o),d=v(e._getStateVersion()),A=e._subscribe(H+P,()=>{d.value=e._getStateVersion()}),N=e._subscribe(j,()=>{c("scrollEnd")});return L(()=>{const t=s.value;t&&(r._observeRoot(t),m._observe(t))}),R(()=>{A(),N(),r._dispose(),m._dispose()}),p(()=>n.data.length,t=>{e._update(Z,[t,n.shift])}),p([d,e._getJumpCount],([,t],[,i])=>{t!==i&&m._fixScrollJump()},{flush:"post"}),p([d,e._getRange],([,[t,i]],[,[f,l]])=>{f===t&&l===i||c("rangeChange",t,i)},{flush:"post"}),()=>{d.value;const t=n.data.length,[i,f]=e._getRange(),l=e._getScrollDirection(),h=e._getTotalSize(),S=[];for(let[a,V]=G(i,f,n.overscan,l,t);a<=V;a++){const z=u.default(n.data[a])[0];S.push(g(M,{key:J(z,a),_resizer:r._observeItem,_index:a,_offset:e._getItemOffset(a),_hide:e._isUnmeasuredItem(a),_children:z,_isHorizontal:o},null,8,["_resizer","_index","_offset","_hide","_children","_isHorizontal"]))}return g("div",{ref:s,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:o?h+"px":"100%",height:o?"100%":h+"px",pointerEvents:l!==q?"none":"auto"}},[S],4)}}}),Y={style:{padding:"200px 100px"}},$={style:{border:"solid 1px gray"}},T=I({__name:"WindowVirtualizer",setup(n){const c=[20,40,180,77],u=s=>({index:s,size:c[s%4]+"px"}),o=Array.from({length:1e3}).map((s,e)=>u(e));return(s,e)=>(x(),b("div",Y,[k("div",$,[g(E(D),{data:E(o)},{default:O(r=>[(x(),b("div",{key:r.index,style:W({height:r.size,background:"white",borderBottom:"solid 1px #ccc"})},B(r.index),5))]),_:1},8,["data"])])]))}}),ee=Q(T,[["__scopeId","data-v-943c8ab4"]]);T.__docgenInfo={exportName:"default",displayName:"WindowVirtualizer",description:"",tags:{},sourceFiles:["/home/runner/work/virtua/virtua/stories/vue/WindowVirtualizer.vue"]};const oe={component:D},_={render:()=>({components:{Component:ee},template:"<Component />"})};var y,C,w;_.parameters={..._.parameters,docs:{...(y=_.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...(w=(C=_.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const se=["Default"];export{_ as Default,se as __namedExportsOrder,oe as default};
