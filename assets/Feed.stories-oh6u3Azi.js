import{j as d,a as T}from"./jsx-runtime-KhpQ_ow-.js";import{r as t}from"./index-G6kSzgdV.js";import{S as w,r as D,d as L}from"./common-7gvj7Fb1.js";import{f as F}from"./index-KLTnsmU9.js";import{V as C}from"./VList-0GJl-Bfw.js";import"./useRerender-5pxUOkH4.js";import"./useChildren-TCG2xWgs.js";import"./index-xBZDQ2qw.js";const G={component:C},b={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},k=({content:s})=>T("div",{style:b,children:[s," "]}),c={name:"Feed",render:()=>{const s=t.useRef(0),E=()=>Math.random()>.2?{type:"text",id:s.current++,value:F.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:s.current++,src:F.image.url()},i=e=>D(e,E),[v,x]=t.useState(!1),[B,H]=t.useState(!1),[M,_]=t.useState(!1),f=async(e=!1)=>{x(e);const a=e?H:_;a(!0),await L(1e3),a(!1)},m=t.useRef(null),o=30,[r,l]=t.useState(()=>i(o*2)),O=t.useMemo(()=>r.map(e=>d(k,{content:e.type==="image"?d("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[r]),h=10,n=r.length,g=t.useRef(-1),p=t.useRef(-1),y=t.useRef(!1);return t.useEffect(()=>{var e;(e=m.current)==null||e.scrollToIndex(r.length/2+1),y.current=!0},[]),T(C,{ref:m,style:{flex:1},shift:!!v,onRangeChange:async(e,a)=>{y.current&&(a+h>n&&p.current<n?(p.current=n,await f(),l(u=>[...u,...i(o)])):e-h<0&&g.current<n&&(g.current=n,await f(!0),l(u=>[...i(o).reverse(),...u])))},children:[O,d(w,{style:M?void 0:{visibility:"hidden"}},"foot")]})}};var S,I,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    const [startFetching, setStartFetching] = useState(false);
    const [endFetching, setEndFetching] = useState(false);
    const fetchItems = async (isStart: boolean = false) => {
      setShifting(isStart);
      const setFetching = isStart ? setStartFetching : setEndFetching;
      setFetching(true);
      await delay(1000);
      setFetching(false);
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
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const J=["Default"];export{c as Default,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Feed.stories-oh6u3Azi.js.map
