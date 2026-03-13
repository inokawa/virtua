import{d as _,r as c,o as p,c as k,w as y,a as v,n as S,t as h,u as i}from"./iframe-B7fNk55i.js";import{V as m}from"./VList-G9ys2dGk.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BbMbGUvC.js";import"./utils-Dv4iZK3k.js";const C=_({__name:"StickyGroup",setup(G){const l=[20,40,180,77],n=c(0),u=Array.from({length:1e3}).map((e,o)=>l[o%4]),d=({index:e})=>e%100===0?{style:{...n.value===e?{position:"sticky",top:0}:{},zIndex:1}}:{},t=c();function f(){if(!t.value)return;const e=t.value.findItemIndex(t.value.scrollOffset),o=[0,100,200,300,400,500,600,700,800,900].reverse().find(s=>e>=s);n.value=o}return(e,o)=>(p(),k(i(m),{ref_key:"listRef",ref:t,data:i(u),style:{height:"100vh"},"item-props":d,"keep-mounted":[n.value],onScroll:f},{default:y(({item:s,index:a})=>[(p(),v("div",{key:a,style:S({height:s+"px",background:"white",borderBottom:"solid 1px #ccc",...a%100===0?{background:"yellow"}:{}})},h(a),5))]),_:1},8,["data","keep-mounted"]))}}),g=x(C,[["__scopeId","data-v-df151226"]]),O={component:m},r={render:()=>({components:{Component:g},template:"<Component />"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: StickyGroupComponent
    },
    template: "<Component />"
  })
}`,...r.parameters?.docs?.source}}};const R=["StickyGroup"];export{r as StickyGroup,R as __namedExportsOrder,O as default};
