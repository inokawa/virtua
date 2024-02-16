import{a as t,j as C}from"./jsx-runtime-CWvgoIdH.js";import{r}from"./index-D3g0PtM7.js";import{r as I}from"./common-D8xz_2Ta.js";import{V as u}from"./VList-Daf3yFrj.js";import"./Virtualizer-BlB1D_u-.js";import"./useRerender-D3G6ebUl.js";import"./useChildren-B8Yfl8FH.js";import"./index-4KpVZEbj.js";const L={component:u},g={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},x=({content:n})=>t("div",{style:g,children:n}),i={name:"Resize and scroll",render:()=>{const[n,o]=r.useState({}),a=r.useRef(0),f=()=>({id:a.current++}),S=e=>I(e,f),l=r.useRef(null),[c]=r.useState(()=>S(30)),h=r.useMemo(()=>c.map(e=>t(x,{content:t(R,{isCollapsed:n[e.id],resize:()=>{o(s=>({...s,[e.id]:!s[e.id]}))},scroll:()=>{var s;(s=l.current)==null||s.scrollToIndex(e.id,{smooth:!0})}})},e.id)),[c,n]);return t(u,{ref:l,style:{flex:1},children:h})}},R=({isCollapsed:n,resize:o,scroll:a})=>C("div",{style:{transition:"height 250ms linear",height:n?200:800,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[t("button",{onClick:o,children:"Resize"}),t("button",{onClick:a,children:"Smooth Scroll"}),t("button",{onClick:()=>{o(),a()},children:"Resize + Smooth Scroll"})]});var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Resize and scroll",
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
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={<Collapser isCollapsed={itemCollapseState[d.id]} resize={() => {
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,L as default};
