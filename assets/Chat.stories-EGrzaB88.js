import{j as v,a as o}from"./jsx-runtime-sgeEVxPu.js";import{r as t}from"./index-yp3VsGQP.js";import{f as x}from"./index-1aVAeLWL.js";import{V as S}from"./VList-URP5GthR.js";import"./Virtualizer-1QRAw4HC.js";import"./useRerender-2CcH0J4h.js";import"./useChildren--0WswfAC.js";import"./index-8dy-jdxy.js";const j={component:S},I={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},R=({value:l,me:s})=>o("div",{style:{...I,...s?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:l}),u={name:"Chat",render:()=>{const l=t.useRef(0),s=({value:e=x.lorem.paragraphs(1),me:r=!1}={})=>({id:l.current++,value:e,me:r}),[i,a]=t.useState(()=>Array.from({length:100},()=>s())),n=t.useRef(null),c=t.useRef(!1),m=t.useRef(!0),[f,d]=t.useState("Hello world!");t.useLayoutEffect(()=>{c.current=!1}),t.useEffect(()=>{n.current&&m.current&&n.current.scrollToIndex(i.length-1,{align:"end"})},[i.length]),t.useEffect(()=>{let e=!1,r=null;const g=()=>{r=setTimeout(()=>{e||(a(T=>[...T,s()]),g())},5e3)};return g(),()=>{e=!0,r&&clearTimeout(r)}},[]);const p=!f.length,h=()=>{p||(m.current=!0,a(e=>[...e,s({value:f,me:!0})]),d(""))};return v("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[o(S,{ref:n,style:{flex:1},reverse:!0,shift:c.current,onScroll:e=>{n.current&&(m.current=e-n.current.scrollSize+n.current.viewportSize>=-1.5,e<100&&(c.current=!0,a(r=>[...Array.from({length:100},()=>s()),...r])))},children:i.map(e=>o(R,{...e},e.id))}),v("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:[o("textarea",{style:{width:400},rows:6,value:f,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),o("button",{type:"submit",disabled:p,children:"submit"}),o("button",{type:"button",onClick:()=>{var e;(e=n.current)==null||e.scrollTo(0)},children:"jump to top"})]})]})}};var y,b,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const B=["Default"];export{u as Default,B as __namedExportsOrder,j as default};
