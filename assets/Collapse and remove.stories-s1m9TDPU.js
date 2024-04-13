import{j as s}from"./jsx-runtime-DiTpbvcX.js";import{r as e}from"./index-BqFXtf2T.js";import{r as H}from"./common-dEik_yUu.js";import{V as p}from"./VList-BFaDpnIl.js";import"./Virtualizer-BtQlFkWT.js";import"./useRerender-vSgwX44C.js";import"./useChildren-vNruQF0S.js";import"./index-ChcDFWtF.js";const b={component:p},I={borderTop:"solid 1px red",background:"#fff",whiteSpace:"pre-wrap",overflow:"hidden"},g=({content:n})=>s.jsx("div",{style:I,children:n}),c={name:"Collapse and remove",render:()=>{const[n,i]=e.useState({}),r=e.useRef(0),a=()=>({id:r.current++}),o=t=>H(t,a),d=e.useRef(null),[m]=e.useState(()=>o(60)),x=e.useMemo(()=>m.filter(({id:t})=>!n[t]).map(t=>s.jsx(g,{content:s.jsx(R,{id:t.id,onHidden:()=>{i(h=>({...h,[t.id]:!0}))}})},t.id)),[m,n]);return s.jsx(p,{ref:d,style:{flex:1},children:x})}},R=({id:n,onHidden:i})=>{const[r,a]=e.useState(!1),o=e.useRef(!1),d=e.useRef(!1);return e.useEffect(()=>{o.current=r},[r]),e.useEffect(()=>()=>{d.current||o.current&&i()},[]),s.jsx("div",{style:{transition:"height 250ms linear",height:r?0:300,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},onTransitionEnd:()=>{r&&(d.current=!0,i())},onClick:()=>{a(!0)},children:s.jsx("div",{children:n})})};var u,l,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Collapse and remove",
  render: () => {
    const [itemsHidden, setItemsHidden] = useState<Record<string, true>>({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(60));
    const elements = useMemo(() => items.filter(({
      id
    }) => !itemsHidden[id]).map(d => <Item key={d.id} content={<Collapser id={d.id} onHidden={() => {
      setItemsHidden(state => ({
        ...state,
        [d.id]: true
      }));
    }} />} />), [items, itemsHidden]);
    return <VList ref={ref} style={{
      flex: 1
    }}>
        {elements}
      </VList>;
  }
}`,...(f=(l=c.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const k=["Default"];export{c as Default,k as __namedExportsOrder,b as default};
