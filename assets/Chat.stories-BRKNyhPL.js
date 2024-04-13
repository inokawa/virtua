import{j as n}from"./jsx-runtime-WtcO95wV.js";import{r as t}from"./index-DaO3jVNX.js";import{f as S}from"./index-xJp9Kd2E.js";import{V as x}from"./VList-C7FSzbEc.js";import"./Virtualizer-DC_CXDP0.js";import"./useRerender-2nbuV_q9.js";import"./useChildren-BpMocZl7.js";import"./index-DpI4bZRz.js";const L={component:x},T={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},I=({value:l,me:o})=>n.jsx("div",{style:{...T,...o?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:l}),u={name:"Chat",render:()=>{const l=t.useRef(0),o=({value:e=S.lorem.paragraphs(1),me:s=!1}={})=>({id:l.current++,value:e,me:s}),[i,a]=t.useState(()=>Array.from({length:100},()=>o())),r=t.useRef(null),c=t.useRef(!1),m=t.useRef(!0),[f,d]=t.useState("Hello world!");t.useLayoutEffect(()=>{c.current=!1}),t.useEffect(()=>{r.current&&m.current&&r.current.scrollToIndex(i.length-1,{align:"end"})},[i.length]),t.useEffect(()=>{let e=!1,s=null;const g=()=>{s=setTimeout(()=>{e||(a(w=>[...w,o()]),g())},5e3)};return g(),()=>{e=!0,s&&clearTimeout(s)}},[]);const p=!f.length,h=()=>{p||(m.current=!0,a(e=>[...e,o({value:f,me:!0})]),d(""))};return n.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[n.jsx(x,{ref:r,style:{flex:1},reverse:!0,shift:c.current,onScroll:e=>{r.current&&(m.current=e-r.current.scrollSize+r.current.viewportSize>=-1.5,e<100&&(c.current=!0,a(s=>[...Array.from({length:100},()=>o()),...s])))},children:i.map(e=>n.jsx(I,{...e},e.id))}),n.jsxs("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:[n.jsx("textarea",{style:{width:400},rows:6,value:f,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),n.jsx("button",{type:"submit",disabled:p,children:"submit"}),n.jsx("button",{type:"button",onClick:()=>{var e;(e=r.current)==null||e.scrollTo(0)},children:"jump to top"})]})]})}};var v,y,b;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me = false
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
      if (!shouldStickToBottom.current) return;
      ref.current.scrollToIndex(items.length - 1, {
        align: "end"
      });
    }, [items.length]);
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
      width: "90vw",
      height: "90vh",
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
          {items.map(d => <Item key={d.id} {...d} />)}
        </VList>
        <form style={{
        margin: 10
      }} onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submit();
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
          <button type="submit" disabled={disabled}>
            submit
          </button>
          <button type="button" onClick={() => {
          ref.current?.scrollTo(0);
        }}>
            jump to top
          </button>
        </form>
      </div>;
  }
}`,...(b=(y=u.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const K=["Default"];export{u as Default,K as __namedExportsOrder,L as default};
