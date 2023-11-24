import{j as e,a as h}from"./jsx-runtime-KhpQ_ow-.js";import{r}from"./index-G6kSzgdV.js";import{V as p}from"./VList-XEmRj9j-.js";import"./useRerender-1pMZLdR9.js";import"./useChildren-haSzPNdg.js";import"./index-xBZDQ2qw.js";const R={component:p},f=[100,200,300,100,200,300,100,300,400,200],b=r.forwardRef(({children:i,height:t,attrs:a},n)=>{const[u,g]=r.useState(0),s=r.useRef(null);return r.useLayoutEffect(()=>{s.current&&g(s.current.getBoundingClientRect().height)},[]),e("div",{...a,ref:n,children:h("table",{style:{height:t,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[e("thead",{ref:s,style:{position:"sticky",top:0,zIndex:1,height:20},children:e("tr",{style:{width:"100%"},children:f.map((y,d)=>e("th",{style:{color:"white",background:"darkgray",minWidth:y},children:d},d))})}),e("tbody",{style:{height:t,marginTop:u,position:"absolute",top:0,left:0},children:i})]})})}),o={render:()=>e(p,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},components:{Root:b,Item:"tr"},children:Array.from({length:1e3}).map((i,t)=>e(r.Fragment,{children:f.map((a,n)=>h("td",{style:{minWidth:a},children:[t,", ",n]},n))},t))})};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: "100%",
      height: "75%",
      background: "#fff",
      overflow: "auto"
    }} components={{
      Root: TableList,
      Item: "tr"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => <Fragment key={i}>
            {COLUMN_WIDTHS.map((width, j) => <td key={j} style={{
          minWidth: width
        }}>
                {i}, {j}
              </td>)}
          </Fragment>)}
      </VList>;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Table"];export{o as Table,j as __namedExportsOrder,R as default};
//# sourceMappingURL=Table.stories-18-cg_gJ.js.map
