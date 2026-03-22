import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i,t as a}from"./src-CBByf-Sv.js";import{i as o,r as s}from"./common-DfO3d2vn.js";var c,l,u,d,f;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d={name:`Loop`,render:()=>{let e=(0,c.useRef)(0),t=()=>({id:e.current++}),n=e=>o(e,t),r=(0,c.useRef)(null),[a,s]=(0,c.useState)(()=>n(200)),u=(0,c.useRef)(-1),d=(0,c.useRef)(!1);return(0,c.useLayoutEffect)(()=>{r.current?.scrollToIndex(200/2)},[]),(0,l.jsx)(i,{ref:r,style:{flex:1},shift:d.current,onScroll:e=>{if(d.current=e-u.current<0,u.current=e,!r.current)return;let t=d.current;e<100?(s(e=>[...n(200/4),...e]),setTimeout(()=>{d.current=!t,s(e=>[...e.slice(0,600/4)])},50)):r.current.scrollSize-r.current.viewportSize-e<100&&(s(e=>[...e,...n(200/4)]),setTimeout(()=>{d.current=!t,s(e=>[...e.slice(200/4)])},50))},children:a.map(e=>(0,l.jsx)(`div`,{style:{height:100,backgroundColor:e.id%100==0?`darkgray`:e.id%10==0?`smokegray`:`white`,borderBottom:`solid 1px #ccc`},children:e.id},e.id))})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        }, 50);
      } else if (ref.current.scrollSize - ref.current.viewportSize - offset < OFFSET_TO_BOUND) {
        setItems(prev => [...prev, ...createItems(TOTAL_LENGTH / 4)]);
        setTimeout(() => {
          shouldPrepend.current = !currentShouldPrepend;
          setItems(prev => [...prev.slice(TOTAL_LENGTH / 4)]);
        }, 50);
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
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};