import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-OWPRZ4Cs.js";import{f as I}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as b}from"./VList-FqjhDFFx.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-DIP-kXGR.js";import"./useLatestRef-ByLoklyT.js";import"./useChildren-CLsRcnMS.js";import"./index-CUpqUG9n.js";import"./index-CZy5UoP5.js";const q={component:b},j={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},R=({children:r})=>t.jsx("div",{style:{padding:10,minHeight:"50vh"},children:r?t.jsx("div",{style:{...j,marginRight:160},children:r}):null}),T=({children:r})=>t.jsx("div",{style:{...j,background:"lightyellow",margin:10,marginLeft:160},children:r}),o={name:"Chatbot",render:()=>{const r=n.useRef(0),f=({value:e=I.lorem.paragraphs(1),role:s})=>({id:r.current++,value:e,role:s}),[i,p]=n.useState([]),l=n.useRef(null),x=n.useRef(!1),u=n.useRef(!0),[S,v]=n.useState(!1),[c,h]=n.useState("Hello world!");n.useLayoutEffect(()=>{x.current=!1}),n.useEffect(()=>{if(!l.current)return;const e=l.current,s=i.length-1;u.current&&e.scrollToIndex(s,{align:"end"})},[i]);const g=!c.length,y=()=>{if(g)return;h("");const e=i.length,s=f({value:"",role:"assistant"}),{id:w}=s;p(d=>[...d,f({role:"user",value:c}),s]),v(!0),u.current=!1,requestAnimationFrame(()=>{l.current?.scrollToIndex(e,{smooth:!0,align:"start"})}),setTimeout(()=>{u.current=!0;let d=0;const D=setInterval(()=>{d++>40&&(v(!1),clearInterval(D)),p(k=>{const a=[...k],m=a.findIndex(C=>C.id===w);return a[m]={...a[m],value:a[m].value+I.lorem.paragraph(2)},a})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(b,{ref:l,style:{flex:1},reverse:!0,shift:x.current,children:i.map((e,s)=>e.role==="assistant"?t.jsx(R,{children:e.value},e.id):t.jsx(T,{children:e.value},e.id))}),t.jsx("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),y()},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:c,onChange:e=>{h(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(y(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:S||g,children:"ask ai"})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      role
    }: {
      value?: string;
      role: Data["role"];
    }): Data => ({
      id: id.current++,
      value: value,
      role
    });
    const [items, setItems] = useState<Data[]>([]);
    const ref = useRef<VListHandle>(null);
    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);
    const [streaming, setStreaming] = useState(false);
    const [value, setValue] = useState("Hello world!");
    useLayoutEffect(() => {
      isPrepend.current = false;
    });
    useEffect(() => {
      if (!ref.current) return;
      const handle = ref.current;
      const lastItemIndex = items.length - 1;
      if (shouldStickToBottom.current) {
        handle.scrollToIndex(lastItemIndex, {
          align: "end"
        });
      }
    }, [items]);
    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      setValue("");
      const lastIndex = items.length;
      const item = createItem({
        value: "",
        role: "assistant"
      });
      const {
        id
      } = item;
      setItems(p => [...p, createItem({
        role: "user",
        value
      }), item]);
      setStreaming(true);
      shouldStickToBottom.current = false;
      requestAnimationFrame(() => {
        ref.current?.scrollToIndex(lastIndex, {
          smooth: true,
          align: "start"
        });
      });
      setTimeout(() => {
        shouldStickToBottom.current = true;
        let counter = 0;
        const interval = setInterval(() => {
          if (counter++ > 40) {
            setStreaming(false);
            clearInterval(interval);
          }
          setItems(p => {
            const next = [...p];
            const i = next.findIndex(item => item.id === id);
            next[i] = {
              ...next[i],
              value: next[i].value + faker.lorem.paragraph(2)
            };
            return next;
          });
        }, 100);
      }, 1000);
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <VList ref={ref} style={{
        flex: 1
      }} reverse shift={isPrepend.current}>
          {items.map((d, i) => d.role === "assistant" ? <AiItem key={d.id}>{d.value}</AiItem> : <MeItem key={d.id}>{d.value}</MeItem>)}
        </VList>
        <form style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: 10
      }} onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submit();
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}>
            <textarea style={{
            width: 400
          }} rows={6} value={value} onChange={e => {
            setValue(e.target.value);
          }} onKeyDown={e => {
            if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
              submit();
              e.preventDefault();
            }
          }} />
            <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            justifyContent: "flex-end"
          }}>
              <button type="submit" disabled={streaming || disabled}>
                ask ai
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,q as default};
