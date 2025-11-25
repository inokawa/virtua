import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-CMxD3VeO.js";import{f as S}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as b}from"./VList-BWbaoc_q.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BvKCf61-.js";import"./useLatestRef-CyXWiUb2.js";import"./useChildren-DB0oqkLT.js";import"./index-x26Rr9xZ.js";import"./index-C2VGkcmR.js";const q={component:b},w={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},C=({children:r,blankSize:a})=>t.jsx("div",{style:{padding:10,boxSizing:"border-box",minHeight:a},children:r?t.jsx("div",{style:{...w,marginRight:160},children:r}):null}),E=({children:r})=>t.jsx("div",{style:{...w,background:"lightyellow",margin:10,marginLeft:160},children:r}),d={name:"Chatbot",render:()=>{const r=s.useRef(0),a=({value:e=S.lorem.paragraphs(1),role:n})=>({id:r.current++,value:e,role:n}),[l,x]=s.useState([]),u=s.useRef(null),p=s.useRef(!1),c=s.useRef(!0),[k,h]=s.useState(!1),[j,z]=s.useState(0),[m,v]=s.useState("Hello world!");s.useLayoutEffect(()=>{p.current=!1}),s.useEffect(()=>{if(!u.current)return;const e=u.current,n=l.length-1;c.current&&e.scrollToIndex(n,{align:"end"})},[l]);const g=!m.length||k,I=()=>{if(g)return;v("");const e=u.current;if(!e)return;const n=l.length-1,y=a({value:"",role:"assistant"}),{id:D}=y;x(i=>[...i,a({role:"user",value:m}),y]),h(!0),c.current=!1,e.scrollOffset-e.scrollSize+e.viewportSize>=-1.5||e.scrollToIndex(n,{align:"start",offset:e.getItemSize(n)}),setTimeout(()=>{const i=n+1;z(e.viewportSize-e.getItemSize(i)),e.scrollToIndex(i,{smooth:!0,align:"start"})},50),setTimeout(()=>{c.current=!0;let i=0;const T=setInterval(()=>{i++>40&&(h(!1),clearInterval(T)),x(B=>{const o=[...B],f=o.findIndex(R=>R.id===D);return o[f]={...o[f],value:o[f].value+S.lorem.paragraph(2)},o})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(b,{ref:u,shift:p.current,children:l.map((e,n)=>e.role==="assistant"?t.jsx(C,{blankSize:n===l.length-1?j:void 0,children:e.value},e.id):t.jsx(E,{children:e.value},e.id))}),t.jsx("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),I()},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:m,onChange:e=>{v(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(I(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:g,children:"ask ai"})})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <VList ref={ref} shift={isPrepend.current}>
          {items.map((d, i) => d.role === "assistant" ? <AiItem key={d.id} blankSize={i === items.length - 1 ? blankSize : undefined}>
                {d.value}
              </AiItem> : <MeItem key={d.id}>{d.value}</MeItem>)}
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
