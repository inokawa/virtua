import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./iframe-Btfuwnu6.js";import{r as H}from"./common-BuJuiJCc.js";import{V as h}from"./VList-BpIghDhP.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-CHXJ1FOf.js";import"./useLatestRef-hMrdq1wa.js";import"./useChildren-KulytOuO.js";import"./index-biiJE4z2.js";const q={component:h},k=({content:n})=>e.jsx("div",{style:{borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},children:n}),u={render:()=>{const[n,r]=t.useState({}),o=t.useRef(0),i=()=>({id:o.current++}),d=s=>H(s,i),a=t.useRef(null),[c]=t.useState(()=>d(30)),m=t.useMemo(()=>c.map(s=>e.jsx(k,{content:e.jsx(v,{id:s.id,isCollapsed:n[s.id],resize:()=>{r(l=>({...l,[s.id]:!l[s.id]}))},scroll:()=>{var l;(l=a.current)==null||l.scrollToIndex(s.id,{smooth:!0})}})},s.id)),[c,n]);return e.jsx(h,{ref:a,style:{flex:1},children:m})}},v=({id:n,isCollapsed:r,resize:o,scroll:i})=>e.jsxs("div",{style:{transition:"height 250ms linear",height:r?200:600,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},children:[e.jsx("div",{children:n}),e.jsx("button",{onClick:o,children:"Resize"}),e.jsx("button",{onClick:i,children:"Smooth Scroll"}),e.jsx("button",{onClick:()=>{o(),i()},children:"Resize + Smooth Scroll"})]}),T=({content:n})=>e.jsx("div",{style:{borderTop:"solid 1px red",background:"#fff",whiteSpace:"pre-wrap",overflow:"hidden"},children:n}),p={render:()=>{const[n,r]=t.useState({}),o=t.useRef(0),i=()=>({id:o.current++}),d=s=>H(s,i),a=t.useRef(null),[c]=t.useState(()=>d(60)),m=t.useMemo(()=>c.filter(({id:s})=>!n[s]).map(s=>e.jsx(T,{content:e.jsx(w,{id:s.id,onHidden:()=>{r(l=>({...l,[s.id]:!0}))}})},s.id)),[c,n]);return e.jsx(h,{ref:a,style:{flex:1},children:m})}},w=({id:n,onHidden:r})=>{const[o,i]=t.useState(!1),d=t.useRef(!1),a=t.useRef(!1);return t.useEffect(()=>{d.current=o},[o]),t.useEffect(()=>()=>{a.current||d.current&&r()},[]),e.jsx("div",{style:{transition:"height 250ms linear",height:o?0:300,background:"#ccc",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px"},onTransitionEnd:()=>{o&&(a.current=!0,r())},onClick:()=>{i(!0)},children:e.jsx("div",{children:n})})},L=({index:n})=>{const r=()=>Math.floor(Math.random()*100)+50,o=()=>Math.floor(Math.random()*300)+100,[i]=t.useState(()=>r()),[d,a]=t.useState(null);return t.useEffect(()=>{const c=o(),m=setTimeout(()=>{a(r())},c);return()=>clearTimeout(m)},[]),e.jsxs("div",{style:{border:"5px solid black",margin:"5px 0"},children:[e.jsxs("div",{style:{height:i,background:"#e0e0e0"},children:["Immediate Content ",n," (Height: ",i,"px)"]}),d!==null?e.jsxs("div",{style:{height:d,background:"#f0f0f0"},children:["Delayed Content ",n," (Height: ",d,"px)"]}):e.jsx("div",{style:{padding:"10px",background:"#ffe0e0"},children:"Loading..."})]})},f={render:()=>e.jsx("div",{style:{height:"400px",border:"1px solid black"},children:e.jsx(h,{style:{height:"100%",width:"100%"},children:Array.from({length:100}).map((n,r)=>e.jsx(L,{index:r},r))})})};var x,g,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(g=u.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,I,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,R,b;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: "400px",
      border: "1px solid black"
    }}>
        <VList style={{
        height: "100%",
        width: "100%"
      }}>
          {Array.from({
          length: 100
        }).map((_, index) => <TwoStageRenderItem key={index} index={index} />)}
        </VList>
      </div>;
  }
}`,...(b=(R=f.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const F=["CollapseAndScroll","CollapseAndRemove","TwoStageRender"];export{p as CollapseAndRemove,u as CollapseAndScroll,f as TwoStageRender,F as __namedExportsOrder,q as default};
