import{j as e}from"./index-DvWd75dA.js";import{r}from"./entry-preview-8m_gBI-P.js";import{r as S}from"./common-CWTTb5Tw.js";import{V as f}from"./VList-CalZKaqG.js";import"./Virtualizer-DX5edObc.js";import"./useRerender-CUup1IBo.js";import"./useChildren-BbHk2Kcs.js";const D={component:f},h={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},I=({content:n})=>e.jsx("div",{style:h,children:n}),a={name:"Collapse and scroll",render:()=>{const[n,i]=r.useState({}),o=r.useRef(0),l=()=>({id:o.current++}),x=t=>S(t,l),c=r.useRef(null),[d]=r.useState(()=>x(30)),C=r.useMemo(()=>d.map(t=>e.jsx(I,{content:e.jsx(g,{id:t.id,isCollapsed:n[t.id],resize:()=>{i(s=>({...s,[t.id]:!s[t.id]}))},scroll:()=>{var s;(s=c.current)==null||s.scrollToIndex(t.id,{smooth:!0})}})},t.id)),[d,n]);return e.jsx(f,{ref:c,style:{flex:1},children:C})}},g=({id:n,isCollapsed:i,resize:o,scroll:l})=>e.jsxs("div",{style:{transition:"height 250ms linear",height:i?200:600,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[e.jsx("div",{children:n}),e.jsx("button",{onClick:o,children:"Resize"}),e.jsx("button",{onClick:l,children:"Smooth Scroll"}),e.jsx("button",{onClick:()=>{o(),l()},children:"Resize + Smooth Scroll"})]});var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const L=["Default"];export{a as Default,L as __namedExportsOrder,D as default};
