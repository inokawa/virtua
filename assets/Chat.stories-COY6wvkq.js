import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-OWPRZ4Cs.js";import{f as b}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as x}from"./VList-FqjhDFFx.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-DIP-kXGR.js";import"./useLatestRef-ByLoklyT.js";import"./useChildren-CLsRcnMS.js";import"./index-CUpqUG9n.js";import"./index-CZy5UoP5.js";const P={component:x},g={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},w=({me:i,children:o})=>t.jsx("div",{style:{...g,...i?{background:"lightyellow",marginLeft:160}:{marginRight:160}},children:o}),l={name:"Chat",render:()=>{const i=s.useRef(0),o=({value:e=b.lorem.paragraphs(1),me:r}={})=>({id:i.current++,value:e,me:r}),[u,a]=s.useState(()=>Array.from({length:100},()=>o())),n=s.useRef(null),c=s.useRef(!1),f=s.useRef(!0),[m,d]=s.useState("Hello world!");s.useLayoutEffect(()=>{c.current=!1}),s.useEffect(()=>{if(!n.current)return;const e=n.current,r=u.length-1;f.current&&e.scrollToIndex(r,{align:"end"})},[u]),s.useEffect(()=>{let e=!1,r=null;const h=()=>{r=setTimeout(()=>{e||(a(v=>[...v,o()]),h())},5e3)};return h(),()=>{e=!0,r&&clearTimeout(r)}},[]);const p=!m.length,y=()=>{p||(f.current=!0,a(e=>[...e,o({value:m,me:!0})]),d(""))};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(x,{ref:n,style:{flex:1},reverse:!0,shift:c.current,onScroll:e=>{n.current&&(f.current=e-n.current.scrollSize+n.current.viewportSize>=-1.5,e<100&&(c.current=!0,a(r=>[...Array.from({length:100},()=>o()),...r])))},children:u.map(e=>t.jsx(w,{me:e.me,children:e.value},e.id))}),t.jsxs("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),y()},children:[t.jsx("button",{style:{position:"absolute",left:10,bottom:10},type:"button",onClick:()=>{n.current?.scrollTo(0)},children:"jump to top"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:m,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(y(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:p,children:"submit"})})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    }, []);
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
              <button type="submit" disabled={disabled}>
                submit
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,P as default};
