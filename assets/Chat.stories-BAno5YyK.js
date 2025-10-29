import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-D_zc_qzK.js";import{f as b}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as v}from"./VList-DlVGrLTp.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-BumCW0Eg.js";import"./useLatestRef-DlIB5yyB.js";import"./useChildren-DfrdrrEv.js";import"./index-id_A3JE_.js";import"./index-DtPlrv9d.js";const C={component:v},x={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},w=({value:l,me:n})=>r.jsx("div",{style:{...x,...n?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:l}),u={name:"Chat",render:()=>{const l=t.useRef(0),n=({value:e=b.lorem.paragraphs(1),me:o=!1}={})=>({id:l.current++,value:e,me:o}),[i,a]=t.useState(()=>Array.from({length:100},()=>n())),s=t.useRef(null),c=t.useRef(!1),m=t.useRef(!0),[f,d]=t.useState("Hello world!");t.useLayoutEffect(()=>{c.current=!1}),t.useEffect(()=>{s.current&&m.current&&s.current.scrollToIndex(i.length-1,{align:"end"})},[i.length]),t.useEffect(()=>{let e=!1,o=null;const g=()=>{o=setTimeout(()=>{e||(a(y=>[...y,n()]),g())},5e3)};return g(),()=>{e=!0,o&&clearTimeout(o)}},[]);const p=!f.length,h=()=>{p||(m.current=!0,a(e=>[...e,n({value:f,me:!0})]),d(""))};return r.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[r.jsx(v,{ref:s,style:{flex:1},reverse:!0,shift:c.current,onScroll:e=>{s.current&&(m.current=e-s.current.scrollSize+s.current.viewportSize>=-1.5,e<100&&(c.current=!0,a(o=>[...Array.from({length:100},()=>n()),...o])))},children:i.map(e=>r.jsx(w,{...e},e.id))}),r.jsxs("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:[r.jsx("textarea",{style:{width:400},rows:6,value:f,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),r.jsx("button",{type:"submit",disabled:p,children:"submit"}),r.jsx("button",{type:"button",onClick:()=>{s.current?.scrollTo(0)},children:"jump to top"})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const L=["Default"];export{u as Default,L as __namedExportsOrder,C as default};
