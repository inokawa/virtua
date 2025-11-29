import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-B_-wC5Mi.js";import{f as S}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as b}from"./VList-Ccv8859I.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-1LrIGV9L.js";import"./useLatestRef-BCst7SqF.js";import"./useChildren-WhXWD5Ls.js";import"./index-CqA6agiU.js";import"./index-CvzE82D6.js";const q={component:b},w={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},E=({children:r,blankSize:l})=>t.jsx("div",{style:{padding:10,boxSizing:"border-box",minHeight:l},children:r?t.jsx("div",{style:{...w,marginRight:160},children:r}):null}),L=({children:r})=>t.jsx("div",{style:{...w,background:"lightyellow",margin:10,marginLeft:160},children:r}),d={name:"Chatbot",render:()=>{const r=s.useRef(0),l=({value:e=S.lorem.paragraphs(1),role:n})=>({id:r.current++,value:e,role:n}),[o,x]=s.useState([]),u=s.useRef(null),h=s.useRef(!1),c=s.useRef(!0),[k,p]=s.useState(!1),[j,z]=s.useState(0),[m,v]=s.useState("Hello world!");s.useLayoutEffect(()=>{h.current=!1}),s.useEffect(()=>{if(!u.current)return;const e=u.current,n=o.length-1;c.current&&e.scrollToIndex(n,{align:"end"})},[o]);const g=!m.length||k,I=()=>{if(g)return;v("");const e=u.current;if(!e)return;const n=o.length-1,y=l({value:"",role:"assistant"}),{id:D}=y;x(a=>[...a,l({role:"user",value:m}),y]),p(!0),c.current=!1,e.scrollOffset-e.scrollSize+e.viewportSize>=-1.5||e.scrollToIndex(n,{align:"start",offset:e.getItemSize(n)}),setTimeout(()=>{const a=n+1;z(e.viewportSize-e.getItemSize(a)),e.scrollToIndex(a,{smooth:!0,align:"start"})},50),setTimeout(()=>{c.current=!0;let a=0;const T=Math.floor(Math.random()*5)+1,B=setInterval(()=>{a++>20&&(p(!1),clearInterval(B)),x(R=>{const i=[...R],f=i.findIndex(C=>C.id===D);return i[f]={...i[f],value:i[f].value+S.lorem.paragraph(T)},i})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(b,{ref:u,shift:h.current,children:o.map((e,n)=>e.role==="assistant"?t.jsx(E,{blankSize:n===o.length-1?j:void 0,children:e.value},e.id):t.jsx(L,{children:e.value},e.id))}),t.jsx("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),I()},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:m,onChange:e=>{v(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(I(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:g,children:"ask ai"})})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const [blankSize, setBlankSize] = useState(0);
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
    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");
      const handle = ref.current;
      if (!handle) return;
      const lastItemIndex = items.length - 1;
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
      const isAtBottom = handle.scrollOffset - handle.scrollSize + handle.viewportSize >=
      // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
      -1.5;
      if (!isAtBottom) {
        handle.scrollToIndex(lastItemIndex, {
          align: "start",
          offset: handle.getItemSize(lastItemIndex)
        });
      }

      // wait for new item mounts
      setTimeout(() => {
        const userIndex = lastItemIndex + 1;
        setBlankSize(handle.viewportSize - handle.getItemSize(userIndex));
        handle.scrollToIndex(userIndex, {
          smooth: true,
          align: "start"
        });
      }, 50);

      // emulate streaming from LLM
      setTimeout(() => {
        shouldStickToBottom.current = true;
        let counter = 0;
        const amount = Math.floor(Math.random() * 5) + 1;
        const interval = setInterval(() => {
          if (counter++ > 20) {
            setStreaming(false);
            clearInterval(interval);
          }
          setItems(p => {
            const next = [...p];
            const i = next.findIndex(item => item.id === id);
            next[i] = {
              ...next[i],
              value: next[i].value + faker.lorem.paragraph(amount)
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
        <VList ref={ref} shift={isPrepend.current}>
          {items.map((d, i) => d.role === "assistant" ? <AssistantItem key={d.id} blankSize={i === items.length - 1 ? blankSize : undefined}>
                {d.value}
              </AssistantItem> : <UserItem key={d.id}>{d.value}</UserItem>)}
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
              <button type="submit" disabled={disabled}>
                ask ai
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const G=["Default"];export{d as Default,G as __namedExportsOrder,q as default};
