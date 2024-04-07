import{j as e}from"./jsx-runtime-DiTpbvcX.js";import{r}from"./index-BqFXtf2T.js";import{r as S}from"./common-dEik_yUu.js";import{V as f}from"./VList-D4x_btea.js";import"./Virtualizer-K-LSpilM.js";import"./useRerender-C26KvfGx.js";import"./useChildren-DJqhcXui.js";import"./index-ChcDFWtF.js";const L={component:f},h={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},I=({content:n})=>e.jsx("div",{style:h,children:n}),i={name:"Collapse and scroll",render:()=>{const[n,a]=r.useState({}),o=r.useRef(0),l=()=>({id:o.current++}),x=t=>S(t,l),c=r.useRef(null),[d]=r.useState(()=>x(30)),C=r.useMemo(()=>d.map(t=>e.jsx(I,{content:e.jsx(g,{id:t.id,isCollapsed:n[t.id],resize:()=>{a(s=>({...s,[t.id]:!s[t.id]}))},scroll:()=>{var s;(s=c.current)==null||s.scrollToIndex(t.id,{smooth:!0})}})},t.id)),[d,n]);return e.jsx(f,{ref:c,style:{flex:1},children:C})}},g=({id:n,isCollapsed:a,resize:o,scroll:l})=>e.jsxs("div",{style:{transition:"height 250ms linear",height:a?200:600,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[e.jsx("div",{children:n}),e.jsx("button",{onClick:o,children:"Resize"}),e.jsx("button",{onClick:l,children:"Smooth Scroll"}),e.jsx("button",{onClick:()=>{o(),l()},children:"Resize + Smooth Scroll"})]});var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,L as default};
