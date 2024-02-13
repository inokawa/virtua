import{a as i,j as F}from"./jsx-runtime-CWvgoIdH.js";import{r as t}from"./index-D3g0PtM7.js";import{r as M,d as O}from"./common-D8xz_2Ta.js";import{f as I}from"./index-xJp9Kd2E.js";import{V as C}from"./VList-BBY_UA98.js";import"./Virtualizer-B64BZDnX.js";import"./useRerender-GHRp0xKL.js";import"./useChildren-DX_Wbon4.js";import"./index-4KpVZEbj.js";const j={component:C},v={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},w=({content:a})=>F("div",{style:v,children:[a," "]}),s={name:"Feed",render:()=>{const a=t.useRef(0),x=()=>{const e=a.current++;return e%3!==1?{type:"text",id:e,value:I.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:e,src:I.image.url()}},c=e=>M(e,x),[S,H]=t.useState(!1),m=async(e=!1)=>{H(e),await O(1e3)},f=t.useRef(null),o=30,[r,d]=t.useState(()=>c(o*2)),E=t.useMemo(()=>r.map(e=>i(w,{content:e.type==="image"?i("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[r]),l=10,n=r.length,p=t.useRef(-1),h=t.useRef(-1),g=t.useRef(!1);return t.useEffect(()=>{var e;(e=f.current)==null||e.scrollToIndex(r.length/2+1),g.current=!0},[]),i(C,{ref:f,style:{flex:1},shift:!!S,onRangeChange:async(e,_)=>{g.current&&(_+l>n&&h.current<n?(h.current=n,await m(),d(u=>[...u,...c(o)])):e-l<0&&p.current<n&&(p.current=n,await m(!0),d(u=>[...c(o),...u])))},children:E})}};var R,y,T;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const W=["Default"];export{s as Default,W as __namedExportsOrder,j as default};
