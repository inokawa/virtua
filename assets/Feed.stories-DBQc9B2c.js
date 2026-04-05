import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dw7v-Uf5.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-p2r-qAdR.js";import{n as o,t as s}from"./dist-S2M97FKQ.js";import{i as c,n as l,r as u}from"./common-PhgBxrtJ.js";var d,f,p,m,h,g,_;t((()=>{a(),d=e(n(),1),u(),s(),f=r(),p={component:i},m={borderTop:`solid 1px #ccc`,background:`#fff`,padding:32,paddingTop:48,paddingBottom:48,whiteSpace:`pre-wrap`},h=({content:e})=>(0,f.jsxs)(`div`,{style:m,children:[e,` `]}),g={name:`Feed`,render:()=>{let e=(0,d.useRef)(0),t=()=>{let t=e.current++;return t%3==1?{type:`image`,id:t,src:o.image.url()}:{type:`text`,id:t,value:o.lorem.paragraphs(Math.floor(Math.random()*10)+1)}},n=e=>c(e,t),[r,a]=(0,d.useState)(!1),s=async(e=!1)=>{a(e),await l(1e3)},u=(0,d.useRef)(null),[p,m]=(0,d.useState)(()=>n(60)),g=(0,d.useMemo)(()=>p.map(e=>(0,f.jsx)(h,{content:e.type===`image`?(0,f.jsx)(`img`,{src:e.src,style:{maxWidth:`100%`}}):e.value},e.id)),[p]),_=p.length,v=(0,d.useRef)(-1),y=(0,d.useRef)(-1),b=(0,d.useRef)(!1);return(0,d.useEffect)(()=>{u.current?.scrollToIndex(p.length/2+1),b.current=!0},[]),(0,f.jsx)(i,{ref:u,style:{flex:1},shift:!!r,onScroll:async()=>{if(!b.current||!u.current)return;let e=u.current.scrollOffset,t=e+u.current.viewportSize;y.current<_&&u.current.findItemIndex(t)+10>_?(y.current=_,await s(),m(e=>[...e,...n(30)])):v.current<_&&u.current.findItemIndex(e)-10<0&&(v.current=_,await s(!0),m(e=>[...n(30),...e]))},children:g})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      const startOffset = ref.current.scrollOffset;
      const endOffset = startOffset + ref.current.viewportSize;
      if (endFetchedCountRef.current < count && ref.current.findItemIndex(endOffset) + THRESHOLD > count) {
        endFetchedCountRef.current = count;
        await fetchItems();
        setItems(prev => [...prev, ...createItems(ITEM_BATCH_COUNT)]);
      } else if (startFetchedCountRef.current < count && ref.current.findItemIndex(startOffset) - THRESHOLD < 0) {
        startFetchedCountRef.current = count;
        await fetchItems(true);
        setItems(prev => [...createItems(ITEM_BATCH_COUNT), ...prev]);
      }
    }}>
        {elements}
      </VList>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,p as default};