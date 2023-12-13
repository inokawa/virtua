import{a as i,j as _}from"./jsx-runtime-sgeEVxPu.js";import{r as t}from"./index-yp3VsGQP.js";import{r as v,d as F}from"./common-jfrYHwuZ.js";import{f as I}from"./index-KLTnsmU9.js";import{V as C}from"./VList-7OgElnrh.js";import"./useRerender-DoOyeK1s.js";import"./useChildren-mVfKhaZv.js";import"./index-8dy-jdxy.js";const k={component:C},O={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},w=({content:r})=>_("div",{style:O,children:[r," "]}),a={name:"Feed",render:()=>{const r=t.useRef(0),S=()=>Math.random()>.2?{type:"text",id:r.current++,value:I.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:r.current++,src:I.image.url()},c=e=>v(e,S),[x,H]=t.useState(!1),m=async(e=!1)=>{H(e),await F(1e3)},f=t.useRef(null),o=30,[s,d]=t.useState(()=>c(o*2)),E=t.useMemo(()=>s.map(e=>i(w,{content:e.type==="image"?i("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[s]),l=10,n=s.length,p=t.useRef(-1),h=t.useRef(-1),g=t.useRef(!1);return t.useEffect(()=>{var e;(e=f.current)==null||e.scrollToIndex(s.length/2+1),g.current=!0},[]),i(C,{ref:f,style:{flex:1},shift:!!x,onRangeChange:async(e,M)=>{g.current&&(M+l>n&&h.current<n?(h.current=n,await m(),d(u=>[...u,...c(o)])):e-l<0&&p.current<n&&(p.current=n,await m(!0),d(u=>[...c(o).reverse(),...u])))},children:E})}};var R,y,T;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        setItems(prev => [...createItems(ITEM_BATCH_COUNT).reverse(), ...prev]);
      }
    }}>
        {elements}
      </VList>;
  }
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,k as default};
