import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{r as t}from"./index-DRjF_FHU.js";import{r as H,d as _}from"./common-B4Hkentz.js";import{f as I}from"./chunk-IJTMZAVK-C2T6v0-z.js";import{V as R}from"./VList-Cm1R7_Bo.js";import"./Virtualizer-tXQiGAK5.js";import"./useRerender-CoF9yDGp.js";import"./useChildren-DqJQo84Z.js";import"./index-uWwxbAOW.js";const U={component:R},F={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},M=({content:o})=>a.jsxs("div",{style:F,children:[o," "]}),c={name:"Feed",render:()=>{const o=t.useRef(0),T=()=>{const e=o.current++;return e%3!==1?{type:"text",id:e,value:I.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:e,src:I.image.url()}},u=e=>H(e,T),[C,S]=t.useState(!1),f=async(e=!1)=>{S(e),await _(1e3)},n=t.useRef(null),i=30,[s,m]=t.useState(()=>u(i*2)),E=t.useMemo(()=>s.map(e=>a.jsx(M,{content:e.type==="image"?a.jsx("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[s]),d=10,r=s.length,l=t.useRef(-1),p=t.useRef(-1),h=t.useRef(!1);return t.useEffect(()=>{var e;(e=n.current)==null||e.scrollToIndex(s.length/2+1),h.current=!0},[]),a.jsx(R,{ref:n,style:{flex:1},shift:!!C,onScroll:async()=>{h.current&&n.current&&(p.current<r&&n.current.endIndex+d>r?(p.current=r,await f(),m(e=>[...e,...u(i)])):l.current<r&&n.current.startIndex-d<0&&(l.current=r,await f(!0),m(e=>[...u(i),...e])))},children:E})}};var g,x,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      if (endFetchedCountRef.current < count && ref.current.endIndex + THRESHOLD > count) {
        endFetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createItems(ITEM_BATCH_COUNT)]);
      } else if (startFetchedCountRef.current < count && ref.current.startIndex - THRESHOLD < 0) {
        startFetchedCountRef.current = count;
        await fetchItems(true);
        setItems(prev => [...createItems(ITEM_BATCH_COUNT), ...prev]);
      }
    }}>
        {elements}
      </VList>;
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const V=["Default"];export{c as Default,V as __namedExportsOrder,U as default};
