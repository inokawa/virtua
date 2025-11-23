import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BupIZz3p.js";import{f as j}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as T}from"./VList-M4xrSdHe.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CQPF-CAJ.js";import"./useLatestRef-DXBPM1GZ.js";import"./useChildren-DPLmZjPY.js";import"./index-CFSQfNvx.js";import"./index-DyEVMGyT.js";const _={component:T},y={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},C=({children:s})=>t.jsx("div",{style:{padding:10,minHeight:"50vh"},children:s?t.jsx("div",{style:{...y,marginRight:160},children:s}):null}),R=({children:s})=>t.jsx("div",{style:{...y,background:"lightyellow",margin:10,marginLeft:160},children:s}),E=({children:s})=>t.jsx("div",{style:{...y,margin:10,marginRight:160},children:s}),f={name:"Chat",render:()=>{const s=n.useRef(0),o=({value:e=j.lorem.paragraphs(1),role:r}={})=>({id:s.current++,value:e,role:r}),[m,l]=n.useState(()=>Array.from({length:100},()=>o())),i=n.useRef(null),p=n.useRef(!1),a=n.useRef(!0),[x,g]=n.useState(!1),[h,I]=n.useState("Hello world!");n.useLayoutEffect(()=>{p.current=!1}),n.useEffect(()=>{if(!i.current)return;const e=i.current,r=m.length-1;a.current&&e.scrollToIndex(r,{align:"end"})},[m]),n.useEffect(()=>{if(x)return;let e=!1,r=null;const d=()=>{r=setTimeout(()=>{e||(l(u=>[...u,o()]),d())},5e3)};return d(),()=>{e=!0,r&&clearTimeout(r)}},[x]);const b=!h.length,S=()=>{b||(a.current=!0,l(e=>[...e,o({value:h,role:"me"})]),I(""))};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(T,{ref:i,style:{flex:1},reverse:!0,shift:p.current,onScroll:e=>{i.current&&(a.current=e-i.current.scrollSize+i.current.viewportSize>=-1.5,e<100&&(p.current=!0,l(r=>[...Array.from({length:100},()=>o()),...r])))},children:m.map((e,r)=>e.role==="ai"?t.jsx(C,{children:e.value},e.id):e.role==="me"?t.jsx(R,{children:e.value},e.id):t.jsx(E,{children:e.value},e.id))}),t.jsxs("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),S()},children:[t.jsx("button",{style:{position:"absolute",left:10,bottom:10},type:"button",onClick:()=>{i.current?.scrollTo(0)},children:"jump to top"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:h,onChange:e=>{I(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(S(),e.preventDefault())}}),t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:[t.jsx("button",{type:"button",disabled:x,onClick:()=>{const e=m.length,r=o({value:"",role:"ai"}),{id:d}=r;l(u=>[...u,o({role:"me"}),r]),g(!0),a.current=!1,requestAnimationFrame(()=>{i.current?.scrollToIndex(e,{smooth:!0,align:"start"})}),setTimeout(()=>{a.current=!0;let u=0;const w=setInterval(()=>{u++>40&&(g(!1),clearInterval(w)),l(k=>{const c=[...k],v=c.findIndex(D=>D.id===d);return c[v]={...c[v],value:c[v].value+j.lorem.paragraph(2)},c})},100)},1e3)},children:"ask ai"}),t.jsx("button",{type:"submit",disabled:b,children:"submit"})]})]})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      role
    }: {
      value?: string;
      role?: Data["role"];
    } = {}): Data => ({
      id: id.current++,
      value: value,
      role
    });
    const [items, setItems] = useState(() => Array.from({
      length: 100
    }, () => createItem()));
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
    useEffect(() => {
      if (streaming) return;
      let canceled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;
      const setTimer = () => {
        timer = setTimeout(() => {
          if (canceled) return;
          setItems(p => [...p, createItem()]);
          setTimer();
        }, 5000);
      };
      setTimer();
      return () => {
        canceled = true;
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [streaming]);
    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      shouldStickToBottom.current = true;
      setItems(p => [...p, createItem({
        value,
        role: "me"
      })]);
      setValue("");
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <VList ref={ref} style={{
        flex: 1
      }} reverse shift={isPrepend.current} onScroll={offset => {
        if (!ref.current) return;
        shouldStickToBottom.current = offset - ref.current.scrollSize + ref.current.viewportSize >=
        // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
        -1.5;
        if (offset < 100) {
          isPrepend.current = true;
          setItems(p => [...Array.from({
            length: 100
          }, () => createItem()), ...p]);
        }
      }}>
          {items.map((d, i) => d.role === "ai" ? <AiItem key={d.id}>{d.value}</AiItem> : d.role === "me" ? <MeItem key={d.id}>{d.value}</MeItem> : <Item key={d.id}>{d.value}</Item>)}
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
          <button style={{
          position: "absolute",
          left: 10,
          bottom: 10
        }} type="button" onClick={() => {
          ref.current?.scrollTo(0);
        }}>
            jump to top
          </button>
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
              <button type="button" disabled={streaming} onClick={() => {
              const lastIndex = items.length;
              const item = createItem({
                value: "",
                role: "ai"
              });
              const {
                id
              } = item;
              setItems(p => [...p, createItem({
                role: "me"
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
            }}>
                ask ai
              </button>
              <button type="submit" disabled={disabled}>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const q=["Default"];export{f as Default,q as __namedExportsOrder,_ as default};
