import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CavRFArs.js";import{r as C,d as E}from"./common-BqtzafjA.js";import{f as g}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as x}from"./VList-BOSsIUxy.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-zqq7pQj5.js";import"./useLatestRef-BflRiuwR.js";import"./useChildren-DoMXaMzJ.js";import"./index-n-p_IO-p.js";import"./index-BWYOi5r-.js";const V={component:x},H={borderTop:"solid 1px #ccc",background:"#fff",padding:32,paddingTop:48,paddingBottom:48,whiteSpace:"pre-wrap"},_=({content:a})=>o.jsxs("div",{style:H,children:[a," "]}),c={name:"Feed",render:()=>{const a=t.useRef(0),y=()=>{const e=a.current++;return e%3!==1?{type:"text",id:e,value:g.lorem.paragraphs(Math.floor(Math.random()*10)+1)}:{type:"image",id:e,src:g.image.url()}},f=e=>C(e,y),[R,T]=t.useState(!1),m=async(e=!1)=>{T(e),await E(1e3)},n=t.useRef(null),u=30,[s,d]=t.useState(()=>f(u*2)),S=t.useMemo(()=>s.map(e=>o.jsx(_,{content:e.type==="image"?o.jsx("img",{src:e.src,style:{maxWidth:"100%"}}):e.value},e.id)),[s]),l=10,r=s.length,p=t.useRef(-1),I=t.useRef(-1),h=t.useRef(!1);return t.useEffect(()=>{n.current?.scrollToIndex(s.length/2+1),h.current=!0},[]),o.jsx(x,{ref:n,style:{flex:1},shift:!!R,onScroll:async()=>{if(!h.current||!n.current)return;const e=n.current.scrollOffset,O=e+n.current.viewportSize;I.current<r&&n.current.findItemIndex(O)+l>r?(I.current=r,await m(),d(i=>[...i,...f(u)])):p.current<r&&n.current.findItemIndex(e)-l<0&&(p.current=r,await m(!0),d(i=>[...f(u),...i]))},children:S})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const b=["Default"];export{c as Default,b as __namedExportsOrder,V as default};
