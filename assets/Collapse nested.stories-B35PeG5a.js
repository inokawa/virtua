import{a as n}from"./jsx-runtime-CWvgoIdH.js";import{r as s}from"./index-D3g0PtM7.js";import{r as I}from"./common-D8xz_2Ta.js";import{V as g}from"./VList-QUutdii-.js";import"./Virtualizer-C19enlUg.js";import"./useRerender-HspPmvuw.js";import"./useChildren-AMeck3n4.js";import"./index-4KpVZEbj.js";const D={component:g},y={borderTop:"solid 1px limegreen",background:"#fff",padding:32},b=({content:e})=>n("div",{style:y,children:e}),o={name:"Collapse nested",render:()=>{const[e,a]=s.useState({}),l=s.useRef(0),t=()=>({id:l.current++}),m=r=>I(r,t),C=s.useRef(null),[i]=s.useState(()=>m(30)),S=s.useMemo(()=>i.map(r=>n(b,{content:n(x,{id:r.id,collapseState:e,toggleCollapse:c=>{a(p=>({...p,[c]:!p[c]}))}})},r.id)),[i,e]);return n(g,{ref:C,style:{flex:1},children:S})}},x=({id:e,collapseState:a,toggleCollapse:l})=>new Array(5).fill(0).map((t,m)=>m).map(t=>n("div",{style:{transition:"height 100ms linear",height:a[`${e}-${t}`]?20:100,background:"#ccc",display:"flex",border:"1px solid rebeccapurple"},onClick:()=>l(`${e}-${t}`)},t));var d,u,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Collapse nested",
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
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={<Collapser id={d.id} collapseState={itemCollapseState} toggleCollapse={(id: string) => {
      setItemCollapseState(state => ({
        ...state,
        [id]: !state[id]
      }));
    }} />} />), [items, itemCollapseState]);
    return <VList ref={ref} style={{
      flex: 1
    }}>
        {elements}
      </VList>;
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,D as default};
