import{j as v,a as o}from"./jsx-runtime-sgeEVxPu.js";import{r as t}from"./index-yp3VsGQP.js";import{f as T}from"./index-KLTnsmU9.js";import{V as S}from"./VList-fiTQE1u3.js";import"./Virtualizer-B_JEn3JG.js";import"./useRerender-w40Cc3mi.js";import"./useChildren-q2gAaA-7.js";import"./index-8dy-jdxy.js";const C={component:S},I={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},R=({value:i,me:r})=>o("div",{style:{...I,...r?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:i}),u={name:"Chat",render:()=>{const i=t.useRef(0),r=({value:e=T.lorem.paragraphs(1),me:n=!1}={})=>({id:i.current++,value:e,me:n}),[l,a]=t.useState(()=>Array.from({length:100},()=>r())),s=t.useRef(null),c=t.useRef(!1),m=t.useRef(!0),[f,d]=t.useState("Hello world!");t.useLayoutEffect(()=>{c.current=!1}),t.useEffect(()=>{s.current&&m.current&&s.current.scrollToIndex(l.length-1,{align:"end"})},[l.length]),t.useEffect(()=>{let e=!1,n=null;const g=()=>{n=setTimeout(()=>{e||(a(x=>[...x,r()]),g())},5e3)};return g(),()=>{e=!0,n&&clearTimeout(n)}},[]);const p=!f.length,h=()=>{p||(m.current=!0,a(e=>[...e,r({value:f,me:!0})]),d(""))};return v("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[o(S,{ref:s,style:{flex:1},reverse:!0,shift:c.current,onScroll:e=>{s.current&&(m.current=e-s.current.scrollSize+s.current.viewportSize>=-1.5,e<100&&(c.current=!0,a(n=>[...Array.from({length:100},()=>r()),...n])))},children:l.map(e=>o(R,{...e},e.id))}),v("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:[o("textarea",{style:{width:400},rows:6,value:f,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),o("button",{type:"submit",disabled:p,children:"submit"})]})]})}};var y,b,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        </form>
      </div>;
  }
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const z=["Default"];export{u as Default,z as __namedExportsOrder,C as default};
