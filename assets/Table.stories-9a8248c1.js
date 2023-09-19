import{j as t,a as h}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{V as p}from"./VList-8b1f9407.js";import"./Viewport-142a99e0.js";import"./ListItem-ef3e3b6c.js";import"./index-eb008d06.js";const k={component:p},e=[100,200,300,100,200,300,100,300,400,200],g=o.forwardRef(({children:d,height:n,attrs:a},i)=>{const[f,u]=o.useState(0),l=o.useRef(null);o.useLayoutEffect(()=>{l.current&&u(l.current.getBoundingClientRect().height)},[]);const r={color:"white",background:"darkgray"};return t("div",{...a,ref:i,children:h("table",{style:{height:n,tableLayout:"fixed",borderCollapse:"collapse",whiteSpace:"nowrap"},border:1,children:[t("thead",{ref:l,style:{position:"sticky",top:0,zIndex:1,height:20},children:h("tr",{style:{width:"100%"},children:[t("th",{style:{...r,minWidth:e[0]},children:"0"}),t("th",{style:{...r,minWidth:e[1]},children:"1"}),t("th",{style:{...r,minWidth:e[2]},children:"2"}),t("th",{style:{...r,minWidth:e[3]},children:"3"}),t("th",{style:{...r,minWidth:e[4]},children:"4"}),t("th",{style:{...r,minWidth:e[5]},children:"5"}),t("th",{style:{...r,minWidth:e[6]},children:"6"}),t("th",{style:{...r,minWidth:e[7]},children:"7"}),t("th",{style:{...r,minWidth:e[8]},children:"8"}),t("th",{style:{...r,minWidth:e[9]},children:"9"})]})}),t("tbody",{style:{height:n,marginTop:f,position:"absolute",top:0,left:0},children:d})]})})}),s={render:()=>t(p,{style:{width:"100%",height:"75%",background:"#fff",overflow:"auto"},components:{Root:g,Item:"tr"},children:Array.from({length:1e3}).map((d,n)=>t(o.Fragment,{children:Array.from({length:10}).map((a,i)=>h("td",{style:{minWidth:e[i]},children:[n,", ",i]},i))},n))})};var c,m,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            {Array.from({
          length: 10
        }).map((_, j) => <td key={j} style={{
          minWidth: COLUMN_WIDTHS[j]
        }}>
                {i}, {j}
              </td>)}
          </Fragment>)}
      </VList>;
  }
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const x=["Table"];export{s as Table,x as __namedExportsOrder,k as default};
//# sourceMappingURL=Table.stories-9a8248c1.js.map
