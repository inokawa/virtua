import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CWs8TCvg.js";import{f as j}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as g}from"./VList-DBUWzpIM.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-Bpu6Y1us.js";import"./useLatestRef-UWddWsJQ.js";import"./useChildren-DSXxnnqq.js";import"./index-BsLVlOXQ.js";import"./index-zu_bgqpA.js";const A={component:g},w={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},I=({me:i,children:o})=>t.jsx("div",{style:{...w,...i?{background:"lightyellow",marginLeft:160}:{marginRight:160}},children:o}),l={name:"Chat",render:()=>{const i=r.useRef(0),o=({value:e=j.lorem.paragraphs(1),me:s}={})=>({id:i.current++,value:e,me:s}),[u,a]=r.useState(()=>Array.from({length:100},()=>o())),[c,v]=r.useState(!0),n=r.useRef(null),d=r.useRef(!1),f=r.useRef(!0),[m,p]=r.useState("Hello world!");r.useLayoutEffect(()=>{d.current=!1}),r.useEffect(()=>{if(!n.current)return;const e=n.current,s=u.length-1;f.current&&e.scrollToIndex(s,{align:"end"})},[u]),r.useEffect(()=>{if(!c)return;let e=!1,s=null;const x=()=>{s=setTimeout(()=>{e||(a(b=>[...b,o()]),x())},5e3)};return x(),()=>{e=!0,s&&clearTimeout(s)}},[c]);const h=!m.length,y=()=>{h||(f.current=!0,a(e=>[...e,o({value:m,me:!0})]),p(""))};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(g,{ref:n,style:{flex:1},reverse:!0,shift:d.current,onScroll:e=>{n.current&&(f.current=e-n.current.scrollSize+n.current.viewportSize>=-1.5,e<100&&(d.current=!0,a(s=>[...Array.from({length:100},()=>o()),...s])))},children:u.map(e=>t.jsx(I,{me:e.me,children:e.value},e.id))}),t.jsxs("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),y()},children:[t.jsxs("div",{style:{position:"absolute",left:10,bottom:10,display:"flex",gap:4},children:[t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:c,onChange:()=>{v(e=>!e)}}),"auto update"]}),t.jsx("button",{type:"button",onClick:()=>{n.current?.scrollTo(0)},children:"jump to top"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:m,onChange:e=>{p(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(y(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:h,children:"submit"})})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me
    }: {
      value?: string;
      me?: boolean;
    } = {}): Data => ({
      id: id.current++,
      value: value,
      me
    });
    const [items, setItems] = useState(() => Array.from({
      length: 100
    }, () => createItem()));
    const [autoUpdating, setAutoUpdating] = useState(true);
    const ref = useRef<VListHandle>(null);
    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);
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
      if (!autoUpdating) return;
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
    }, [autoUpdating]);
    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      shouldStickToBottom.current = true;
      setItems(p => [...p, createItem({
        value,
        me: true
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
          {items.map(d => <Item key={d.id} me={d.me}>
              {d.value}
            </Item>)}
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
          position: "absolute",
          left: 10,
          bottom: 10,
          display: "flex",
          gap: 4
        }}>
            <label>
              <input type="checkbox" checked={autoUpdating} onChange={() => {
              setAutoUpdating(prev => !prev);
            }} />
              auto update
            </label>
            <button type="button" onClick={() => {
            ref.current?.scrollTo(0);
          }}>
              jump to top
            </button>
          </div>
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
                submit
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,A as default};
