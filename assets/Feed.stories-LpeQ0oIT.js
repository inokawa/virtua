import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-PJdxjuIz.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-CVM7cRJ_.js";import{n as o,t as s}from"./en-DltMjSLJ.js";import{i as c,n as l,r as u}from"./common-lIuQL22U.js";var d,f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{i(),d=e(n(),1),u(),s(),f=r(),p={component:a},m={borderTop:`solid 1px #ccc`,background:`#fff`,padding:32,paddingTop:48,paddingBottom:48,whiteSpace:`pre-wrap`},h=800,g=[400,600,800,1e3],_=e=>{let t=o.helpers.arrayElement(g);return{type:`image`,id:e,src:o.image.url({width:h,height:t}),width:h,height:t}},v=({content:e})=>(0,f.jsxs)(`div`,{style:m,children:[e,` `]}),y={name:`Feed`,render:()=>{let e=(0,d.useRef)(0),t=()=>{let t=e.current++;return t%3==1?_(t):{type:`text`,id:t,value:o.lorem.paragraphs(Math.floor(Math.random()*10)+1)}},n=e=>c(e,t),[r,i]=(0,d.useState)(!1),s=async(e=!1)=>{i(e),await l(1e3)},u=(0,d.useRef)(null),[p,m]=(0,d.useState)(()=>n(60)),h=(0,d.useMemo)(()=>p.map(e=>(0,f.jsx)(v,{content:e.type===`image`?(0,f.jsx)(`img`,{src:e.src,width:e.width,height:e.height,style:{maxWidth:`100%`,height:`auto`}}):e.value},e.id)),[p]),g=p.length,y=(0,d.useRef)(-1),b=(0,d.useRef)(-1),x=(0,d.useRef)(!1);return(0,d.useEffect)(()=>{u.current?.scrollToIndex(p.length/2+1),x.current=!0},[]),(0,f.jsx)(a,{ref:u,style:{flex:1},shift:!!r,onScroll:async()=>{if(!x.current||!u.current)return;let e=u.current.scrollOffset,t=e+u.current.viewportSize;b.current<g&&u.current.findItemIndex(t)+10>g?(b.current=g,await s(),m(e=>[...e,...n(30)])):y.current<g&&u.current.findItemIndex(e)-10<0&&(y.current=g,await s(!0),m(e=>[...n(30),...e]))},children:h})}},b=[`Default`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Feed",
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => {
      const nextId = id.current++;
      return nextId % 3 !== 1 ? {
        type: "text",
        id: nextId,
        value: faker.lorem.paragraphs(Math.floor(Math.random() * 10) + 1)
      } : createImage(nextId);
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
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={d.type === "image" ? <img src={d.src} width={d.width} height={d.height} style={{
      maxWidth: "100%",
      height: "auto"
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Default,b as __namedExportsOrder,p as default};