import{a as t,j as h}from"./jsx-runtime-CWvgoIdH.js";import{r}from"./index-D3g0PtM7.js";import{r as I}from"./common-D8xz_2Ta.js";import{V as f}from"./VList-BaunGPRB.js";import"./Virtualizer-D3buUo60.js";import"./useRerender-B6o5S4_7.js";import"./useChildren-B22rYYG4.js";import"./index-4KpVZEbj.js";const T={component:f},g={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},x=({content:n})=>t("div",{style:g,children:n}),a={name:"Collapse and scroll",render:()=>{const[n,i]=r.useState({}),o=r.useRef(0),l=()=>({id:o.current++}),C=e=>I(e,l),c=r.useRef(null),[d]=r.useState(()=>C(30)),S=r.useMemo(()=>d.map(e=>t(x,{content:t(b,{id:e.id,isCollapsed:n[e.id],resize:()=>{i(s=>({...s,[e.id]:!s[e.id]}))},scroll:()=>{var s;(s=c.current)==null||s.scrollToIndex(e.id,{smooth:!0})}})},e.id)),[d,n]);return t(f,{ref:c,style:{flex:1},children:S})}},b=({id:n,isCollapsed:i,resize:o,scroll:l})=>h("div",{style:{transition:"height 250ms linear",height:i?200:600,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[t("div",{children:n}),t("button",{onClick:o,children:"Resize"}),t("button",{onClick:l,children:"Smooth Scroll"}),t("button",{onClick:()=>{o(),l()},children:"Resize + Smooth Scroll"})]});var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Collapse and scroll",
  render: () => {
    const [itemCollapseState, setItemCollapseState] = useState<Record<string, boolean>>({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(30));
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={<Collapser id={d.id} isCollapsed={itemCollapseState[d.id]} resize={() => {
      setItemCollapseState(state => ({
        ...state,
        [d.id]: !state[d.id]
      }));
    }} scroll={() => {
      ref.current?.scrollToIndex(d.id, {
        smooth: true
      });
    }} />} />), [items, itemCollapseState]);
    return <VList ref={ref} style={{
      flex: 1
    }}>
        {elements}
      </VList>;
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,T as default};
