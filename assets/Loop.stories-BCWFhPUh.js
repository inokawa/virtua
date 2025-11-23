import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-BupIZz3p.js";import{r as a}from"./common-BqtzafjA.js";import{V as T}from"./VList-M4xrSdHe.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CQPF-CAJ.js";import"./useLatestRef-DXBPM1GZ.js";import"./useChildren-DPLmZjPY.js";import"./index-CFSQfNvx.js";import"./index-DyEVMGyT.js";const x={component:T},c={name:"Loop",render:()=>{const m=t.useRef(0),f=()=>({id:m.current++}),u=e=>a(e,f),n=t.useRef(null),[p,o]=t.useState(()=>u(200)),i=t.useRef(-1),s=t.useRef(!1);return t.useLayoutEffect(()=>{n.current?.scrollToIndex(200/2)},[]),l.jsx(T,{ref:n,style:{flex:1},shift:s.current,onScroll:e=>{if(s.current=e-i.current<0,i.current=e,!n.current)return;const d=s.current;e<100?(o(r=>[...u(200/4),...r]),setTimeout(()=>{s.current=!d,o(r=>[...r.slice(0,600/4)])})):n.current.scrollSize-n.current.viewportSize-e<100&&(o(r=>[...r,...u(200/4)]),setTimeout(()=>{s.current=!d,o(r=>[...r.slice(200/4)])}))},children:p.map(e=>l.jsx("div",{style:{height:100,backgroundColor:e.id%100===0?"darkgray":e.id%10===0?"smokegray":"white",borderBottom:"solid 1px #ccc"},children:e.id},e.id))})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      const currentShouldPrepend = shouldPrepend.current;
      if (offset < OFFSET_TO_BOUND) {
        setItems(prev => [...createItems(TOTAL_LENGTH / 4), ...prev]);
        setTimeout(() => {
          shouldPrepend.current = !currentShouldPrepend;
          setItems(prev => [...prev.slice(0, TOTAL_LENGTH * 3 / 4)]);
        });
      } else if (ref.current.scrollSize - ref.current.viewportSize - offset < OFFSET_TO_BOUND) {
        setItems(prev => [...prev, ...createItems(TOTAL_LENGTH / 4)]);
        setTimeout(() => {
          shouldPrepend.current = !currentShouldPrepend;
          setItems(prev => [...prev.slice(TOTAL_LENGTH / 4)]);
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
}`,...c.parameters?.docs?.source}}};const F=["Default"];export{c as Default,F as __namedExportsOrder,x as default};
