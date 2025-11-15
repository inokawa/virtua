import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CQawATb7.js";import{r as S,d as C}from"./common-BqtzafjA.js";import{f as I}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as g}from"./VList-CJLIHQcl.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-D8qBjnoa.js";import"./useLatestRef-BYGX9JTd.js";import"./useChildren-Ba0_XaVL.js";import"./index-DDpLiQud.js";import"./index-mHR3pCac.js";const N={component:g},E={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},H=({content:o})=>a.jsxs("div",{style:E,children:[o," "]}),c={name:"Feed",render:()=>{const o=t.useRef(0),x=()=>{const e=o.current++;return e%3!==1?{type:"text",id:e,value:I.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:e,src:I.image.url()}},u=e=>S(e,x),[y,R]=t.useState(!1),f=async(e=!1)=>{R(e),await C(1e3)},n=t.useRef(null),i=30,[s,d]=t.useState(()=>u(i*2)),T=t.useMemo(()=>s.map(e=>a.jsx(H,{content:e.type==="image"?a.jsx("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[s]),m=10,r=s.length,l=t.useRef(-1),p=t.useRef(-1),h=t.useRef(!1);return t.useEffect(()=>{n.current?.scrollToIndex(s.length/2+1),h.current=!0},[]),a.jsx(g,{ref:n,style:{flex:1},shift:!!y,onScroll:async()=>{h.current&&n.current&&(p.current<r&&n.current.findEndIndex()+m>r?(p.current=r,await f(),d(e=>[...e,...u(i)])):l.current<r&&n.current.findStartIndex()-m<0&&(l.current=r,await f(!0),d(e=>[...u(i),...e])))},children:T})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    }} shift={shifting ? true : false} onScroll={async () => {
      if (!ready.current) return;
      if (!ref.current) return;
      if (endFetchedCountRef.current < count && ref.current.findEndIndex() + THRESHOLD > count) {
        endFetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createItems(ITEM_BATCH_COUNT)]);
      } else if (startFetchedCountRef.current < count && ref.current.findStartIndex() - THRESHOLD < 0) {
        startFetchedCountRef.current = count;
        await fetchItems(true);
        setItems(prev => [...createItems(ITEM_BATCH_COUNT), ...prev]);
      }
    }}>
        {elements}
      </VList>;
  }
}`,...c.parameters?.docs?.source}}};const U=["Default"];export{c as Default,U as __namedExportsOrder,N as default};
