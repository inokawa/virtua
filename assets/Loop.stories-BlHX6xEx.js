import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-6KVf9xvT.js";import{r as a}from"./common-BqtzafjA.js";import{V as T}from"./VList-DJcvYGwH.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-C5pT-_V3.js";import"./useLatestRef-B_qyb_Om.js";import"./useChildren-CljfLjvh.js";import"./index-BP5iqN4X.js";import"./index-Db-AAs5E.js";const P={component:T},c={name:"Loop",render:()=>{const p=n.useRef(0),m=()=>({id:p.current++}),u=e=>a(e,m),s=n.useRef(null),[f,o]=n.useState(()=>u(200)),i=n.useRef(-1),t=n.useRef(!1);return n.useLayoutEffect(()=>{s.current?.scrollToIndex(200/2)},[]),l.jsx(T,{ref:s,style:{flex:1},shift:t.current,onScroll:e=>{if(t.current=e-i.current<0,i.current=e,!!s.current){if(e<100){const d=t.current;o(r=>[...u(200/4),...r]),setTimeout(()=>{t.current=!d,o(r=>[...r.slice(0,600/4)])})}else if(s.current.scrollSize-s.current.viewportSize-e<100){const d=t.current;o(r=>[...r,...u(200/4)]),setTimeout(()=>{t.current=!d,o(r=>[...r.slice(200/4)])})}}},children:f.map(e=>l.jsx("div",{style:{height:100,backgroundColor:e.id%100===0?"darkgray":e.id%10===0?"smokegray":"white",borderBottom:"solid 1px #ccc"},children:e.id},e.id))})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Loop",
  render: () => {
    const TOTAL_LENGTH = 200;
    const OFFSET_TO_BOUND = 100;
    const id = useRef(0);
    const createItem = () => {
      return {
        id: id.current++
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const ref = useRef<VListHandle>(null);
    const [items, setItems] = useState(() => createItems(TOTAL_LENGTH));
    const prevScrollOffset = useRef(-1);
    const shouldPrepend = useRef(false);
    useLayoutEffect(() => {
      ref.current?.scrollToIndex(TOTAL_LENGTH / 2);
    }, []);
    return <VList ref={ref} style={{
      flex: 1
    }} shift={shouldPrepend.current} onScroll={offset => {
      shouldPrepend.current = offset - prevScrollOffset.current < 0;
      prevScrollOffset.current = offset;
      if (!ref.current) return;
      if (offset < OFFSET_TO_BOUND) {
        const currentShouldPrepend = shouldPrepend.current;
        setItems(prev => {
          return [...createItems(TOTAL_LENGTH / 4), ...prev];
        });
        setTimeout(() => {
          shouldPrepend.current = !currentShouldPrepend;
          setItems(prev => {
            return [...prev.slice(0, TOTAL_LENGTH * 3 / 4)];
          });
        });
      } else if (ref.current.scrollSize - ref.current.viewportSize - offset < OFFSET_TO_BOUND) {
        const currentShouldPrepend = shouldPrepend.current;
        setItems(prev => {
          return [...prev, ...createItems(TOTAL_LENGTH / 4)];
        });
        setTimeout(() => {
          shouldPrepend.current = !currentShouldPrepend;
          setItems(prev => {
            return [...prev.slice(TOTAL_LENGTH / 4)];
          });
        });
      }
    }}>
        {items.map(d => <div key={d.id} style={{
        height: 100,
        backgroundColor: d.id % 100 === 0 ? "darkgray" : d.id % 10 === 0 ? "smokegray" : "white",
        borderBottom: "solid 1px #ccc"
      }}>
            {d.id}
          </div>)}
      </VList>;
  }
}`,...c.parameters?.docs?.source}}};const x=["Default"];export{c as Default,x as __namedExportsOrder,P as default};
