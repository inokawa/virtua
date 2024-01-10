import{a as l}from"./jsx-runtime-sgeEVxPu.js";import{r as t}from"./index-yp3VsGQP.js";import{r as _}from"./common-4ZgZpLnL.js";import{V as m}from"./VList-WEem2yIi.js";import"./Virtualizer-ZKVDkuhM.js";import"./useRerender-UX2I9-vj.js";import"./useChildren-Y4SPNIvf.js";import"./index-8dy-jdxy.js";const F={component:m},c={name:"Loop",render:()=>{const a=t.useRef(0),L=()=>({id:a.current++}),u=e=>_(e,L),s=t.useRef(null),[O,o]=t.useState(()=>u(200)),i=t.useRef(-1),n=t.useRef(!1);return t.useLayoutEffect(()=>{var e;(e=s.current)==null||e.scrollToIndex(200/2)},[]),l(m,{ref:s,style:{flex:1},shift:n.current,onScroll:e=>{if(n.current=e-i.current<0,i.current=e,!!s.current){if(e<100){const d=n.current;o(r=>[...u(200/4),...r]),setTimeout(()=>{n.current=!d,o(r=>[...r.slice(0,200*3/4)])})}else if(s.current.scrollSize-s.current.viewportSize-e<100){const d=n.current;o(r=>[...r,...u(200/4)]),setTimeout(()=>{n.current=!d,o(r=>[...r.slice(200/4)])})}}},children:O.map(e=>l("div",{style:{height:100,backgroundColor:e.id%100===0?"darkgray":e.id%10===0?"smokegray":"white",borderBottom:"solid 1px #ccc"},children:e.id},e.id))})}};var T,f,p;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const g=["Default"];export{c as Default,g as __namedExportsOrder,F as default};