import{j as a}from"./jsx-runtime-DCrfGL6_.js";import{r as t}from"./index-98wxwTcn.js";import{r as F,d as M}from"./common--WXKQNr2.js";import{f as I}from"./index-xJp9Kd2E.js";import{V as T}from"./VList-BGRhMAZU.js";import"./Virtualizer-pNNcwjhZ.js";import"./useRerender-CU3mIZIA.js";import"./useChildren-Dna_xFfd.js";import"./index-SCI4cgSJ.js";const b={component:T},O={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},v=({content:c})=>a.jsxs("div",{style:O,children:[c," "]}),r={name:"Feed",render:()=>{const c=t.useRef(0),C=()=>{const e=c.current++;return e%3!==1?{type:"text",id:e,value:I.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:e,src:I.image.url()}},o=e=>F(e,C),[S,E]=t.useState(!1),m=async(e=!1)=>{E(e),await M(1e3)},f=t.useRef(null),u=30,[s,d]=t.useState(()=>o(u*2)),H=t.useMemo(()=>s.map(e=>a.jsx(v,{content:e.type==="image"?a.jsx("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[s]),l=10,n=s.length,p=t.useRef(-1),h=t.useRef(-1),g=t.useRef(!1);return t.useEffect(()=>{var e;(e=f.current)==null||e.scrollToIndex(s.length/2+1),g.current=!0},[]),a.jsx(T,{ref:f,style:{flex:1},shift:!!S,onRangeChange:async(e,_)=>{g.current&&(_+l>n&&h.current<n?(h.current=n,await m(),d(i=>[...i,...o(u)])):e-l<0&&p.current<n&&(p.current=n,await m(!0),d(i=>[...o(u),...i])))},children:H})}};var R,x,y;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Feed",
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => {
      const nextId = id.current++;
      return nextId % 3 !== 1 ? {
        type: "text",
        id: nextId,
        value: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1)
      } : {
        type: "image",
        id: nextId,
        src: faker.image.url()
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const [shifting, setShifting] = useState(false);
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);
      await delay(1000);
    };
    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 30;
    const [items, setItems] = useState(() => createItems(ITEM_BATCH_COUNT * 2));
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={d.type === "image" ? <img src={d.src} style={{
      maxWidth: "100%"
    }} /> : d.value} />), [items]);
    const THRESHOLD = 10;
    const count = items.length;
    const startFetchedCountRef = useRef(-1);
    const endFetchedCountRef = useRef(-1);
    const ready = useRef(false);
    useEffect(() => {
      ref.current?.scrollToIndex(items.length / 2 + 1);
      ready.current = true;
    }, []);
    return <VList ref={ref} style={{
      flex: 1
    }} shift={shifting ? true : false} onRangeChange={async (start, end) => {
      if (!ready.current) return;
      if (end + THRESHOLD > count && endFetchedCountRef.current < count) {
        endFetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createItems(ITEM_BATCH_COUNT)]);
      } else if (start - THRESHOLD < 0 && startFetchedCountRef.current < count) {
        startFetchedCountRef.current = count;
        await fetchItems(true);
        setItems(prev => [...createItems(ITEM_BATCH_COUNT), ...prev]);
      }
    }}>
        {elements}
      </VList>;
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,b as default};
