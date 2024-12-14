import{d as y,b as d,e as b,i as R,o as p,f as $,u as f,w as I,g as h,t as v,n as w,j as m}from"./vue.esm-bundler-CLFsV--v.js";import{V as L}from"./Virtualizer-DamGmUdr.js";import{_ as B}from"./_plugin-vue_export-helper-_-lYT1Y7.js";function q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!R(o)}const F={data:{type:Array,required:!0},overscan:Number,itemSize:Number,shift:Boolean,horizontal:Boolean,ssrCount:Number,itemProps:Function,keepMounted:Array},S=y({props:F,emits:["scroll","scrollEnd"],setup(o,{emit:i,expose:l,slots:n}){const r=o.horizontal,a=e=>{i("scroll",e)},s=()=>{i("scrollEnd")},t=d();return l({get scrollOffset(){return t.value.scrollOffset},get scrollSize(){return t.value.scrollSize},get viewportSize(){return t.value.viewportSize},findStartIndex:(...e)=>t.value.findStartIndex(...e),findEndIndex:(...e)=>t.value.findEndIndex(...e),getItemOffset:(...e)=>t.value.getItemOffset(...e),getItemSize:(...e)=>t.value.getItemSize(...e),scrollToIndex:(...e)=>t.value.scrollToIndex(...e),scrollTo:(...e)=>t.value.scrollTo(...e),scrollBy:(...e)=>t.value.scrollBy(...e)}),()=>b("div",{style:{display:r?"inline-block":"block",[r?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%"}},[b(L,{ref:t,data:o.data,overscan:o.overscan,itemSize:o.itemSize,itemProps:o.itemProps,shift:o.shift,ssrCount:o.ssrCount,horizontal:r,keepMounted:o.keepMounted,onScroll:a,onScrollEnd:s},q(n)?n:{default:()=>[n],_:2},8,["data","overscan","itemSize","itemProps","shift","ssrCount","horizontal","keepMounted","onScroll","onScrollEnd"])],4)}}),X=y({__name:"Default",setup(o){const i=[20,40,180,77],l=Array.from({length:1e3}).map((n,r)=>i[r%4]);return(n,r)=>(p(),$(f(S),{data:f(l),style:{height:"100vh"}},{default:I(({item:a,index:s})=>[(p(),h("div",{key:s,style:w({height:a+"px",background:"white",borderBottom:"solid 1px #ccc"})},v(s),5))]),_:1},8,["data"]))}}),Y=B(X,[["__scopeId","data-v-34d8090d"]]),J={style:{padding:"10px"}},K=y({__name:"Horizontal",setup(o){const i=[40,180,77],l=Array.from({length:1e3}).map((n,r)=>i[r%3]);return(n,r)=>(p(),h("div",J,[b(f(S),{data:f(l),style:{width:"100%",height:"200px"},horizontal:""},{default:I(({item:a,index:s})=>[(p(),h("div",{key:s,style:w({width:a+"px",background:"white",borderRight:"solid 1px #ccc"})},v(s),5))]),_:1},8,["data"])]))}}),Q=B(K,[["__scopeId","data-v-68133a37"]]),U={style:{height:"100%",display:"flex","flex-direction":"column"}},W=["value"],Z=y({__name:"Controlls",setup(o){const i=[20,40,180,77],l=c=>({index:c,height:i[c%4]+"px"}),n=d(Array.from({length:1e3}).map((c,_)=>l(_))),r=d(0),a=d(!1),s=d(567),t=d(),e=()=>{var c;(c=t.value)==null||c.scrollToIndex(s.value)},g=()=>{n.value=[...n.value,...Array.from({length:100}).map((c,_)=>l(_+n.value.length))]};return(c,_)=>(p(),h("div",U,[m("div",null,"offset: "+v(r.value),1),m("div",null,"scrolling: "+v(a.value),1),m("div",null,[m("input",{type:"number",value:s.value,onInput:_[0]||(_[0]=u=>{s.value=Number(u.target.value)})},null,40,W),m("button",{onClick:e},"scrollToIndex")]),m("div",null,[m("button",{onClick:g},"append")]),b(f(S),{ref_key:"handle",ref:t,data:n.value,onScroll:u=>{r.value=u,a.value=!0},onScrollEnd:()=>{a.value=!1}},{default:I(({item:u})=>[(p(),h("div",{key:u.index,style:w({height:u.height,background:"white",borderBottom:"solid 1px #ccc"})},v(u.index),5))]),_:1},8,["data","onScroll","onScrollEnd"])]))}}),ee=B(Z,[["__scopeId","data-v-877aa5fb"]]),te=y({__name:"StickyGroup",setup(o){const i=[20,40,180,77],l=d(0),n=Array.from({length:1e3}).map((t,e)=>i[e%4]),r=({index:t})=>t%100===0?{style:{...l.value===t?{position:"sticky",top:0}:{},zIndex:1}}:{},a=d();function s(){if(!a.value)return;const t=a.value.findStartIndex(),e=[0,100,200,300,400,500,600,700,800,900].reverse().find(g=>t>=g);l.value=e}return(t,e)=>(p(),$(f(S),{ref_key:"listRef",ref:a,data:f(n),style:{height:"100vh"},"item-props":r,"keep-mounted":[l.value],onScroll:s},{default:I(({item:g,index:c})=>[(p(),h("div",{key:c,style:w({height:g+"px",background:"white",borderBottom:"solid 1px #ccc",...c%100===0?{background:"yellow"}:{}})},v(c),5))]),_:1},8,["data","keep-mounted"]))}}),oe=B(te,[["__scopeId","data-v-abe236ee"]]),se={component:S},C={render:()=>({components:{Component:Y},template:"<Component />"})},k={render:()=>({components:{Component:Q},template:"<Component />"})},x={render:()=>({components:{Component:ee},template:"<Component />"})},z={render:()=>({components:{Component:oe},template:"<Component />"})};var E,O,A;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: DefaultComponent
    },
    template: "<Component />"
  })
}`,...(A=(O=C.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var N,T,V;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HorizontalComponent
    },
    template: "<Component />"
  })
}`,...(V=(T=k.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,G,H;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: ControllsComponent
    },
    template: "<Component />"
  })
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var P,j,M;z.parameters={...z.parameters,docs:{...(P=z.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: StickyGroupComponent
    },
    template: "<Component />"
  })
}`,...(M=(j=z.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const le=["Default","Horizontal","Controlls","StickyGroup"];export{x as Controlls,C as Default,k as Horizontal,z as StickyGroup,le as __namedExportsOrder,se as default};
