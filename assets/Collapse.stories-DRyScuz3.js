import{j as t}from"./jsx-runtime-DCrfGL6_.js";import{r as n}from"./index-98wxwTcn.js";import{r as j}from"./common--WXKQNr2.js";import{V as f}from"./VList-BgOF-QdV.js";import"./Virtualizer-C7XGUY4O.js";import"./useRerender-BFndcX2P.js";import"./useChildren-DCznRAPA.js";import"./index-SCI4cgSJ.js";const A={component:f},R=({content:s})=>t.jsx("div",{style:{borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},children:s}),m={render:()=>{const[s,o]=n.useState({}),r=n.useRef(0),i=()=>({id:r.current++}),l=e=>j(e,i),c=n.useRef(null),[a]=n.useState(()=>l(30)),p=n.useMemo(()=>a.map(e=>t.jsx(R,{content:t.jsx(y,{id:e.id,isCollapsed:s[e.id],resize:()=>{o(d=>({...d,[e.id]:!d[e.id]}))},scroll:()=>{var d;(d=c.current)==null||d.scrollToIndex(e.id,{smooth:!0})}})},e.id)),[a,s]);return t.jsx(f,{ref:c,style:{flex:1},children:p})}},y=({id:s,isCollapsed:o,resize:r,scroll:i})=>t.jsxs("div",{style:{transition:"height 250ms linear",height:o?200:600,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[t.jsx("div",{children:s}),t.jsx("button",{onClick:r,children:"Resize"}),t.jsx("button",{onClick:i,children:"Smooth Scroll"}),t.jsx("button",{onClick:()=>{r(),i()},children:"Resize + Smooth Scroll"})]}),b=({content:s})=>t.jsx("div",{style:{borderTop:"solid 1px red",background:"#fff",whiteSpace:"pre-wrap",overflow:"hidden"},children:s}),u={render:()=>{const[s,o]=n.useState({}),r=n.useRef(0),i=()=>({id:r.current++}),l=e=>j(e,i),c=n.useRef(null),[a]=n.useState(()=>l(60)),p=n.useMemo(()=>a.filter(({id:e})=>!s[e]).map(e=>t.jsx(b,{content:t.jsx(H,{id:e.id,onHidden:()=>{o(d=>({...d,[e.id]:!0}))}})},e.id)),[a,s]);return t.jsx(f,{ref:c,style:{flex:1},children:p})}},H=({id:s,onHidden:o})=>{const[r,i]=n.useState(!1),l=n.useRef(!1),c=n.useRef(!1);return n.useEffect(()=>{l.current=r},[r]),n.useEffect(()=>()=>{c.current||l.current&&o()},[]),t.jsx("div",{style:{transition:"height 250ms linear",height:r?0:300,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},onTransitionEnd:()=>{r&&(c.current=!0,o())},onClick:()=>{i(!0)},children:t.jsx("div",{children:s})})};var x,h,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    type Data = {
      id: number;
    };
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
}`,...(S=(h=m.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var I,C,g;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    type Data = {
      id: number;
    };
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
    }) => !itemsHidden[id]).map(d => <Item2 key={d.id} content={<Collapser2 id={d.id} onHidden={() => {
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
}`,...(g=(C=u.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const M=["CollapseAndScroll","CollapseAndRemove"];export{u as CollapseAndRemove,m as CollapseAndScroll,M as __namedExportsOrder,A as default};
