import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-pXz_WXok.js";import{f as y}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as S}from"./VList-ByWkYDWO.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-OJ4SXwTN.js";import"./useLatestRef-DVXRfYWH.js";import"./useChildren-pgO8o4PK.js";import"./index-dfU6YSHu.js";import"./index-CA1pwbx-.js";const O={component:S},b={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},V=({children:a,blankSize:r})=>t.jsx("div",{style:{padding:10,boxSizing:"border-box",minHeight:r},children:a?t.jsx("div",{style:{...b,marginRight:160},children:a}):null}),E=({children:a,onMeasure:r})=>{const s=n.useRef(null);return n.useEffect(()=>{s.current&&r&&r(s.current.getBoundingClientRect().height)},[]),t.jsx("div",{ref:s,style:{padding:10,boxSizing:"border-box"},children:t.jsx("div",{style:{...b,background:"lightyellow",marginLeft:160},children:a})})},o={name:"Chatbot",render:()=>{const a=n.useRef(0),r=({value:e=y.lorem.paragraphs(1),role:i})=>({id:a.current++,value:e,role:i}),[s,c]=n.useState([]),f=n.useRef(null),[I,p]=n.useState(!1),[j,w]=n.useState(0),[z,D]=n.useState(0),[u,x]=n.useState("Hello world!"),v=!u.length||I,h=()=>{if(v)return;x("");const e=f.current;if(!e)return;const i=s.length-1,g=r({value:"",role:"assistant"}),{id:k}=g;c(d=>[...d,r({role:"user",value:u}),g]),p(!0),D(e.viewportSize),requestAnimationFrame(()=>{e.scrollToIndex(i+1,{smooth:!0,align:"start"})}),setTimeout(()=>{let d=0;const C=Math.floor(Math.random()*5)+1,L=setInterval(()=>{d++>20&&(p(!1),clearInterval(L)),c(R=>{const l=[...R],m=l.findIndex(U=>U.id===k);return l[m]={...l[m],value:l[m].value+y.lorem.paragraph(C)},l})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(S,{ref:f,children:s.map((e,i)=>e.role==="assistant"?t.jsx(V,{blankSize:i===s.length-1?z-j:void 0,children:e.value},e.id):t.jsx(E,{onMeasure:i===s.length-2?w:void 0,children:e.value},e.id))}),t.jsx("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:u,onChange:e=>{x(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:v,children:"ask ai"})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        justifyContent: "flex-end",
        margin: 10
      }} onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submit();
      }}>
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
                ask ai
              </button>
            </div>
          </div>
        </form>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,O as default};
