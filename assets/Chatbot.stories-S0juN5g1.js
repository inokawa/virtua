import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BF_aPKkf.js";import{f as S}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as b}from"./VList-D_eBL5Xq.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CdyCQmbd.js";import"./useLatestRef-Cj605irw.js";import"./useChildren-CHUEFLpo.js";import"./index-CFeHGsZ9.js";import"./index-CP3hDdgp.js";const O={component:b},y={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},C=({children:a,blankSize:r})=>t.jsx("div",{style:{padding:10,boxSizing:"border-box",minHeight:r},children:a?t.jsx("div",{style:{...y,marginRight:160},children:a}):null}),E=({children:a,onMeasure:r})=>{const s=n.useRef(null);return n.useEffect(()=>{s.current&&r&&r(s.current.getBoundingClientRect().height)},[]),t.jsx("div",{ref:s,style:{padding:10,boxSizing:"border-box"},children:t.jsx("div",{style:{...y,background:"lightyellow",marginLeft:160},children:a})})},o={name:"Chatbot",render:()=>{const a=n.useRef(0),r=({value:e=S.lorem.paragraphs(1),role:i})=>({id:a.current++,value:e,role:i}),[s,c]=n.useState([]),f=n.useRef(null),[I,p]=n.useState(!1),[z,w]=n.useState(0),[D,j]=n.useState(0),[u,x]=n.useState("Hello world!"),v=!u.length||I,g=()=>{if(v)return;x("");const e=f.current;if(!e)return;const i=s.length-1,h=r({value:"",role:"assistant"}),{id:k}=h;c(d=>[...d,r({role:"user",value:u}),h]),p(!0),j(e.viewportSize),requestAnimationFrame(()=>{e.scrollToIndex(i+1,{smooth:!0,align:"start"})}),setTimeout(()=>{let d=0;const L=Math.floor(Math.random()*5)+1,R=setInterval(()=>{d++>20&&(p(!1),clearInterval(R)),c(U=>{const l=[...U],m=l.findIndex(V=>V.id===k);return l[m]={...l[m],value:l[m].value+S.lorem.paragraph(L)},l})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(b,{ref:f,children:s.map((e,i)=>e.role==="assistant"?t.jsx(C,{blankSize:i===s.length-1?D-z:void 0,children:e.value},e.id):t.jsx(E,{onMeasure:i===s.length-2?w:void 0,children:e.value},e.id))}),t.jsxs("form",{style:{display:"flex",flexDirection:"column",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),g()},children:[t.jsx("textarea",{style:{flex:1},rows:6,value:u,onChange:e=>{x(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(g(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:v,children:"ask ai"})})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      role
    }: {
      value?: string;
      role: Data["role"];
    }): Data => ({
      id: id.current++,
      value: value,
      role
    });
    const [items, setItems] = useState<Data[]>([]);
    const ref = useRef<VListHandle>(null);
    const [streaming, setStreaming] = useState(false);
    const [lastUserSize, setLastUserSize] = useState(0);
    const [blankSize, setBlankSize] = useState(0);
    const [value, setValue] = useState("Hello world!");
    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");
      const handle = ref.current;
      if (!handle) return;
      const lastItemIndex = items.length - 1;
      const item = createItem({
        value: "",
        role: "assistant"
      });
      const {
        id
      } = item;
      setItems(p => [...p, createItem({
        role: "user",
        value
      }), item]);
      setStreaming(true);
      setBlankSize(handle.viewportSize);
      requestAnimationFrame(() => {
        handle.scrollToIndex(lastItemIndex + 1, {
          smooth: true,
          align: "start"
        });
      });

      // emulate streaming from LLM
      setTimeout(() => {
        let counter = 0;
        const amount = Math.floor(Math.random() * 5) + 1;
        const interval = setInterval(() => {
          if (counter++ > 20) {
            setStreaming(false);
            clearInterval(interval);
          }
          setItems(p => {
            const next = [...p];
            const i = next.findIndex(item => item.id === id);
            next[i] = {
              ...next[i],
              value: next[i].value + faker.lorem.paragraph(amount)
            };
            return next;
          });
        }, 100);
      }, 1000);
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <VList ref={ref}>
          {items.map((d, i) => d.role === "assistant" ? <AssistantItem key={d.id} blankSize={i === items.length - 1 ? blankSize - lastUserSize : undefined}>
                {d.value}
              </AssistantItem> : <UserItem key={d.id} onMeasure={i === items.length - 2 ? setLastUserSize : undefined}>
                {d.value}
              </UserItem>)}
        </VList>

        <form style={{
        display: "flex",
        flexDirection: "column",
        margin: 10
      }} onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submit();
      }}>
          <textarea style={{
          flex: 1
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
              ask ai
            </button>
          </div>
        </form>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,O as default};
