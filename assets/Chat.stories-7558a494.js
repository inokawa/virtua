import{a as h,j as s}from"./jsx-runtime-f8a6c6ea.js";import{r as n}from"./index-5284b0bf.js";import{f as w}from"./index-4a193f06.js";import{V as b}from"./VList-86059cd7.js";import"./Window-f3816797.js";import"./index-480187bb.js";import"./ListItem-47ecffc8.js";const L={component:b},I={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},D=({value:l,me:r})=>s("div",{style:{...I,...r?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:l}),a={name:"Chat",render:()=>{const l=n.useRef(0),r=({value:e=w.lorem.paragraphs(1),me:t=!1}={})=>({id:l.current++,value:e,me:t}),[i,m]=n.useState(()=>Array.from({length:100},()=>r())),o=n.useRef(null),[u,c]=n.useState("Hello world!");n.useEffect(()=>{o.current&&o.current.scrollToIndex(i.length-1)},[i.length]),n.useEffect(()=>{let e=!1,t=null;const p=()=>{t=setTimeout(()=>{e||(m(x=>[...x,r()]),p())},5e3)};return p(),()=>{e=!0,t&&clearTimeout(t)}},[]);const d=!u.length,f=()=>{d||(m(e=>[...e,r({value:u,me:!0})]),c(""))};return h("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[s(b,{ref:o,style:{flex:1},mode:"reverse",children:i.map((e,t)=>s(D,{...e},e.id))}),h("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),f()},children:[s("textarea",{style:{width:400},rows:6,value:u,onChange:e=>{c(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(f(),e.preventDefault())}}),s("button",{type:"submit",disabled:d,children:"submit"})]})]})}};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    const [value, setValue] = useState("Hello world!");
    useEffect(() => {
      if (!ref.current) return;
      ref.current.scrollToIndex(items.length - 1);
    }, [items.length]);
    useEffect(() => {
      let canceled = false;
      let timer: NodeJS.Timeout | null = null;
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
      }} mode="reverse">
          {items.map((d, i) => <Item key={d.id} {...d} />)}
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,L as default};
//# sourceMappingURL=Chat.stories-7558a494.js.map
