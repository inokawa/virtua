import{d as _,r as c,k,l as y,u as p,m as i,n as v,p as S,t as h}from"./iframe-Dkg3J_t3.js";import{V as m}from"./VList-DlNcX1Cx.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-Dl-A_B-D.js";import"./utils-B7Wuo3vK.js";const C=_({__name:"StickyGroup",setup(G){const l=[20,40,180,77],n=c(0),u=Array.from({length:1e3}).map((e,o)=>l[o%4]),d=({index:e})=>e%100===0?{style:{...n.value===e?{position:"sticky",top:0}:{},zIndex:1}}:{},t=c();function f(){if(!t.value)return;const e=t.value.findItemIndex(t.value.scrollOffset),o=[0,100,200,300,400,500,600,700,800,900].reverse().find(s=>e>=s);n.value=o}return(e,o)=>(i(),k(p(m),{ref_key:"listRef",ref:t,data:p(u),style:{height:"100vh"},"item-props":d,"keep-mounted":[n.value],onScroll:f},{default:y(({item:s,index:a})=>[(i(),v("div",{key:a,style:S({height:s+"px",background:"white",borderBottom:"solid 1px #ccc",...a%100===0?{background:"yellow"}:{}})},h(a),5))]),_:1},8,["data","keep-mounted"]))}}),g=x(C,[["__scopeId","data-v-d3110984"]]),O={component:m},r={render:()=>({components:{Component:g},template:"<Component />"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: StickyGroupComponent
    },
    template: "<Component />"
  })
}`,...r.parameters?.docs?.source}}};const R=["StickyGroup"];export{r as StickyGroup,R as __namedExportsOrder,O as default};
