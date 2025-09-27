import{d as C,b as a,e,c as y,n as o,w as b,u as m,p as D,h as L,o as s,t as _,r as V,F as x,j as w}from"./iframe-B1i9QHzz.js";import{V as g}from"./Virtualizer-Cel9S43o.js";import{_ as v}from"./_plugin-vue_export-helper-CwCLJ19Z.js";import"./preload-helper-BQ24v_F8.js";const O=c=>(D("data-v-3d724ccc"),c=c(),L(),c),P={style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},Y=O(()=>e("div",{style:{backgroundColor:"steelblue",height:"600px"}}," footer ",-1)),k=400,j=C({__name:"HeaderAndFooter",setup(c){const d=[20,40,180,77],i=Array.from({length:1e3}).map((r,p)=>d[p%4]);return(r,p)=>(s(),a("div",P,[e("div",{style:o({backgroundColor:"burlywood",height:k+"px"})}," header ",4),y(m(g),{data:m(i),startMargin:k},{default:b(({item:n,index:t})=>[(s(),a("div",{key:t,style:o({height:n+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(t),5))]),_:1},8,["data"]),Y]))}}),U=v(j,[["__scopeId","data-v-3d724ccc"]]),A=40,H=60,W=C({__name:"Nested",setup(c){const d=[20,40,180,77],i=Array.from({length:1e3}).map((p,n)=>d[n%4]),r=V();return(p,n)=>(s(),a("div",{ref_key:"scrollRef",ref:r,style:{width:"100%",height:"100vh",overflowY:"auto",overflowAnchor:"none"}},[e("div",{style:o({backgroundColor:"burlywood",padding:A+"px"})},[e("div",{style:o({backgroundColor:"steelblue",padding:H+"px"})},[y(m(g),{data:m(i),scrollRef:r.value,startMargin:A+H},{default:b(({item:t,index:l})=>[(s(),a("div",{key:l,style:o({height:t+"px",background:"white",borderBottom:"solid 1px #ccc"})},_(l),5))]),_:1},8,["data","scrollRef","startMargin"])],4)],4)],512))}}),q=v(W,[["__scopeId","data-v-29e66eef"]]),S=40,G=C({__name:"TableElement",setup(c){const d=[100,200,300,100,200,300,100,300,400,200],i=Array.from({length:1e4}).map((p,n)=>n),r=V();return(p,n)=>(s(),a("div",{style:{height:"500px",overflow:"auto"},ref_key:"scrollRef",ref:r},[e("table",null,[e("thead",null,[e("tr",{style:o({height:S+"px"})},[(s(),a(x,null,w(d,(t,l)=>e("th",{style:o({width:`${t}px`})},"Header"+_(l),5)),64))],4)]),y(m(g),{scrollRef:r.value,data:m(i),startMargin:S,as:"tbody",item:"tr"},{default:b(({item:t})=>[(s(),a(x,null,w(d,(l,$)=>e("th",{style:o({width:`${l}px`})},_(t)+" "+_($),5)),64))]),_:1},8,["scrollRef","data"])])],512))}}),J=v(G,[["__scopeId","data-v-10a8bbca"]]),ee={component:g},u={render:()=>({components:{Component:U},template:"<Component />"})},h={render:()=>({components:{Component:q},template:"<Component />"})},f={render:()=>({components:{Component:J},template:"<Component />"})};var N,R,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: HeaderAndFooterComponent
    },
    template: "<Component />"
  })
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var I,T,z;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: NestedComponent
    },
    template: "<Component />"
  })
}`,...(z=(T=h.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var B,E,M;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Component: TableComponent
    },
    template: "<Component />"
  })
}`,...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const te=["HeaderAndFooter","Nested","TableElement"];export{u as HeaderAndFooter,h as Nested,f as TableElement,te as __namedExportsOrder,ee as default};
