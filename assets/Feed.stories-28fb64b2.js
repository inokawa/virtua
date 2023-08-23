import{j as m,a as M}from"./jsx-runtime-c3d7f245.js";import{r as t}from"./index-c6dae603.js";import{S as w}from"./components-af8ae1f4.js";import{f as T}from"./index-4a193f06.js";import{V as E}from"./VList-ac1de703.js";import"./Viewport-023ab0bc.js";import"./index-eb008d06.js";import"./ListItem-3e862e96.js";const q={component:E},D={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},L=({content:n})=>M("div",{style:D,children:[n," "]}),b=(n,u)=>Array.from({length:n}).map((a,d)=>u(d)),i={name:"Feed",render:()=>{const n=t.useRef(0),u=()=>Math.random()>.2?{type:"text",id:n.current++,value:T.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:n.current++,src:T.image.url(),size:100*(Math.floor(Math.random()*4)+1)},a=e=>b(e,u),[d,v]=t.useState(!1),[k,H]=t.useState(!1),[_,x]=t.useState(!1),h=async(e=!1)=>{v(e);const o=e?H:x;o(!0),await new Promise(r=>setTimeout(r,1e3)),o(!1)},l=t.useRef(null),f=30,[c,g]=t.useState(()=>a(f*2)),O=t.useMemo(()=>c.map(e=>m(L,{content:e.type==="image"?m("img",{src:e.src,height:e.size}):e.value},e.id)),[c]),p=10,s=c.length,y=t.useRef(-1),F=t.useRef(-1),S=t.useRef(!1);return t.useEffect(()=>{var e;(e=l.current)==null||e.scrollToIndex(c.length/2+1),S.current=!0},[]),M(E,{ref:l,style:{flex:1},shift:!!d,onRangeChange:async(e,o)=>{S.current&&(o+p>s&&F.current<s?(F.current=s,await h(),g(r=>[...r,...a(f)])):e-p<0&&y.current<s&&(y.current=s,await h(!0),g(r=>[...a(f).reverse(),...r])))},children:[O,m(w,{style:_?void 0:{visibility:"hidden"}},"foot")]})}};var I,R,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Feed",
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => {
      const rand = Math.random();
      return rand > 0.2 ? {
        type: "text",
        id: id.current++,
        value: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1)
      } : {
        type: "image",
        id: id.current++,
        src: faker.image.url(),
        size: 100 * (Math.floor(Math.random() * 4) + 1)
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const [shifting, setShifting] = useState(false);
    const [startFetching, setStartFetching] = useState(false);
    const [endFetching, setEndFetching] = useState(false);
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);
      const setFetching = isStart ? setStartFetching : setEndFetching;
      setFetching(true);
      await new Promise(r => setTimeout(r, 1000));
      setFetching(false);
    };
    const ref = useRef<VListHandle>(null);
    const ITEM_BATCH_COUNT = 30;
    const [items, setItems] = useState(() => createItems(ITEM_BATCH_COUNT * 2));
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={d.type === "image" ? <img src={d.src} height={d.size} /> : d.value} />), [items]);
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
        setItems(prev => [...createItems(ITEM_BATCH_COUNT).reverse(), ...prev]);
      }
    }}>
        {/* // TODO support the case when spinner is at index 0
         <Spinner
          key="head"
          style={startFetching ? undefined : { visibility: "hidden" }}
         /> */}
        {elements}
        <Spinner key="foot" style={endFetching ? undefined : {
        visibility: "hidden"
      }} />
      </VList>;
  }
}`,...(C=(R=i.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const G=["Default"];export{i as Default,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Feed.stories-28fb64b2.js.map
