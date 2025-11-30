import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-C22uSV83.js";import{f as w}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as v}from"./Virtualizer-BEHlAVz9.js";import"./preload-helper-PPVm8Dsz.js";import"./useLatestRef-BdgClSOl.js";import"./useChildren-BSYCGnNh.js";import"./index-nTStK9Ff.js";import"./index-DxxqmEng.js";const V={component:v},j={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},I=({me:i,children:l})=>t.jsx("div",{style:{...j,...i?{background:"lightyellow",marginLeft:160}:{marginRight:160}},children:l}),s={name:"Chat",render:()=>{const i=r.useRef(0),l=({value:e=w.lorem.paragraphs(1),me:o}={})=>({id:i.current++,value:e,me:o}),[a,u]=r.useState(()=>Array.from({length:100},()=>l())),[c,g]=r.useState(!0),n=r.useRef(null),f=r.useRef(!1),d=r.useRef(!0),[m,p]=r.useState("Hello world!");r.useLayoutEffect(()=>{f.current=!1}),r.useEffect(()=>{if(!n.current)return;const e=n.current,o=a.length-1;d.current&&e.scrollToIndex(o,{align:"end"})},[a]),r.useEffect(()=>{if(!c)return;let e=!1,o=null;const y=()=>{o=setTimeout(()=>{e||(u(b=>[...b,l()]),y())},5e3)};return y(),()=>{e=!0,o&&clearTimeout(o)}},[c]);const h=!m.length,x=()=>{h||(d.current=!0,u(e=>[...e,l({value:m,me:!0})]),p(""))};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{overflowY:"auto",flex:1,overflowAnchor:"none",display:"flex",flexDirection:"column"},children:[t.jsx("div",{style:{flexGrow:1}}),t.jsx(v,{ref:n,shift:f.current,onScroll:e=>{n.current&&(d.current=e-n.current.scrollSize+n.current.viewportSize>=-1.5,e<100&&(f.current=!0,u(o=>[...Array.from({length:100},()=>l()),...o])))},children:a.map(e=>t.jsx(I,{me:e.me,children:e.value},e.id))})]}),t.jsxs("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),x()},children:[t.jsxs("div",{style:{position:"absolute",left:10,bottom:10,display:"flex",gap:4},children:[t.jsxs("label",{children:[t.jsx("input",{type:"checkbox",checked:c,onChange:()=>{g(e=>!e)}}),"auto update"]}),t.jsx("button",{type:"button",onClick:()=>{n.current?.scrollTo(0)},children:"jump to top"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:m,onChange:e=>{p(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(x(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:h,children:"submit"})})]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    const ref = useRef<VirtualizerHandle>(null);
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
        <div style={{
        overflowY: "auto",
        flex: 1,
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
        overflowAnchor: "none",
        // flex style for spacer
        display: "flex",
        flexDirection: "column"
      }}>
          <div style={{
          // spacer to align virtualizer to the bottom when all items are visible in the viewport
          flexGrow: 1
        }} />
          <Virtualizer ref={ref} shift={isPrepend.current} onScroll={offset => {
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
          </Virtualizer>
        </div>
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
}`,...s.parameters?.docs?.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,V as default};
