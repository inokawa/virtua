import{j as m,a as H}from"./jsx-runtime-c3d7f245.js";import{r as t}from"./index-c6dae603.js";import{S as w}from"./components-af8ae1f4.js";import{f as C}from"./index-4a193f06.js";import{V as _}from"./VList-ac1de703.js";import"./Viewport-023ab0bc.js";import"./index-eb008d06.js";import"./ListItem-3e862e96.js";const q={component:_},D={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},L=({content:n})=>H("div",{style:D,children:[n," "]}),b=(n,i)=>Array.from({length:n}).map((r,o)=>i(o)),c={name:"Feed",render:()=>{const n=t.useRef(0),i=()=>Math.random()>.2?{type:"text",id:n.current++,value:C.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:n.current++,src:C.image.url(),size:100*(Math.floor(Math.random()*4)+1)},r=e=>b(e,i),[o,l]=t.useState(!1),[k,h]=t.useState(!1),[x,g]=t.useState(!1),p=async e=>{e?(l(!0),h(!0)):(l(!1),g(!0)),await new Promise(f=>setTimeout(f,1e3)),e?h(!1):g(!1)},S=t.useRef(null),u=30,[a,y]=t.useState(()=>r(u*2)),O=t.useMemo(()=>a.map(e=>m(L,{content:e.type==="image"?m("img",{src:e.src,height:e.size}):e.value},e.id)),[a]),T=10,s=a.length,F=t.useRef(-1),I=t.useRef(-1),R=t.useRef(!1);return t.useEffect(()=>{var e;(e=S.current)==null||e.scrollToIndex(a.length/2+1),R.current=!0},[]),H(_,{ref:S,style:{flex:1},shift:!!o,onRangeChange:async(e,f)=>{R.current&&(f+T>s&&I.current<s?(I.current=s,await p(),y(d=>[...d,...r(u)])):e-T<0&&F.current<s&&(F.current=s,await p(!0),y(d=>[...r(u).reverse(),...d])))},children:[O,m(w,{style:x?void 0:{visibility:"hidden"}},"foot")]})}};var E,M,v;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    const fetchItems = async (isStart?: boolean) => {
      if (isStart) {
        setShifting(true);
        setStartFetching(true);
      } else {
        setShifting(false);
        setEndFetching(true);
      }
      await new Promise(r => setTimeout(r, 1000));
      if (isStart) {
        setStartFetching(false);
      } else {
        setEndFetching(false);
      }
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
}`,...(v=(M=c.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};const G=["Default"];export{c as Default,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Feed.stories-b9c251f0.js.map
