import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CyHCiROF.js";import{f as y}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as S}from"./VList-CE6vQ1f_.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-Or-6A33U.js";import"./useLatestRef-DSxRTkKQ.js";import"./useChildren-D9QB-m3M.js";import"./index-BibYxK2F.js";import"./index-C1CHLglm.js";const F={component:S},b={border:"solid 1px #ccc",background:"#fff",padding:10,borderRadius:8,whiteSpace:"pre-wrap"},V=({children:i,blankSize:a})=>t.jsx("div",{style:{padding:10,boxSizing:"border-box",minHeight:a},children:i?t.jsx("div",{style:{...b,marginRight:160},children:i}):null}),E=({children:i,onMeasure:a})=>{const s=n.useRef(null);return n.useEffect(()=>{s.current&&a&&a(s.current.getBoundingClientRect().height)},[]),t.jsx("div",{ref:s,style:{padding:10,boxSizing:"border-box"},children:t.jsx("div",{style:{...b,background:"lightyellow",marginLeft:160},children:i})})},o={name:"Chatbot",render:()=>{const i=n.useRef(0),a=({value:e=y.lorem.paragraphs(1),role:r})=>({id:i.current++,value:e,role:r}),[s,c]=n.useState([]),f=n.useRef(null),[I,p]=n.useState(!1),[j,z]=n.useState(0),[w,D]=n.useState(0),[d,x]=n.useState("Hello world!"),v=!d.length||I,h=()=>{if(v)return;x("");const e=f.current;if(!e)return;const r=s.length-1,g=a({value:"",role:"assistant"}),{id:k}=g;c(u=>[...u,a({role:"user",value:d}),g]),p(!0),D(e.viewportSize),e.scrollToIndex(r,{smooth:!0,align:"start",offset:e.getItemSize(r)}),setTimeout(()=>{let u=0;const C=Math.floor(Math.random()*5)+1,L=setInterval(()=>{u++>20&&(p(!1),clearInterval(L)),c(R=>{const l=[...R],m=l.findIndex(U=>U.id===k);return l[m]={...l[m],value:l[m].value+y.lorem.paragraph(C)},l})},100)},1e3)};return t.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(S,{ref:f,children:s.map((e,r)=>e.role==="assistant"?t.jsx(V,{blankSize:r===s.length-1?w-j:void 0,children:e.value},e.id):t.jsx(E,{onMeasure:r===s.length-2?z:void 0,children:e.value},e.id))}),t.jsx("form",{style:{display:"flex",justifyContent:"flex-end",margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),h()},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:[t.jsx("textarea",{style:{width:400},rows:6,value:d,onChange:e=>{x(e.target.value)},onKeyDown:e=>{e.code==="Enter"&&(e.ctrlKey||e.metaKey)&&(h(),e.preventDefault())}}),t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:8,justifyContent:"flex-end"},children:t.jsx("button",{type:"submit",disabled:v,children:"ask ai"})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      handle.scrollToIndex(lastItemIndex, {
        smooth: true,
        align: "start",
        offset: handle.getItemSize(lastItemIndex)
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
}`,...o.parameters?.docs?.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,F as default};
