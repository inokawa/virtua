import{a as h,j as s}from"./jsx-runtime-KhpQ_ow-.js";import{r as t}from"./index-G6kSzgdV.js";import{f as w}from"./index-KLTnsmU9.js";import{V as b}from"./VList-YWuVoCIh.js";import"./useRerender-uJVamCu3.js";import"./useChildren-FXst0y8i.js";import"./index-xBZDQ2qw.js";const L={component:b},I={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},T=({value:l,me:n})=>s("div",{style:{...I,...n?{background:"lightyellow",marginLeft:80}:{marginRight:80}},children:l}),a={name:"Chat",render:()=>{const l=t.useRef(0),n=({value:e=w.lorem.paragraphs(1),me:r=!1}={})=>({id:l.current++,value:e,me:r}),[i,m]=t.useState(()=>Array.from({length:100},()=>n())),o=t.useRef(null),[u,c]=t.useState("Hello world!");t.useEffect(()=>{o.current&&o.current.scrollToIndex(i.length-1,{align:"end"})},[i.length]),t.useEffect(()=>{let e=!1,r=null;const p=()=>{r=setTimeout(()=>{e||(m(x=>[...x,n()]),p())},5e3)};return p(),()=>{e=!0,r&&clearTimeout(r)}},[]);const d=!u.length,f=()=>{d||(m(e=>[...e,n({value:u,me:!0})]),c(""))};return h("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[s(b,{ref:o,style:{flex:1},reverse:!0,children:i.map(e=>s(T,{...e},e.id))}),h("form",{style:{margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),f()},children:[s("textarea",{style:{width:400},rows:6,value:u,onChange:e=>{c(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(f(),e.preventDefault())}}),s("button",{type:"submit",disabled:d,children:"submit"})]})]})}};var g,v,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      }} reverse>
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,L as default};
//# sourceMappingURL=Chat.stories-snl4uyW3.js.map
