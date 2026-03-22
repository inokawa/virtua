import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i,t as a}from"./src-CBByf-Sv.js";import{n as o,t as s}from"./dist-BeG0fXPU.js";var c,l,u,d,f,p,m,h;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d={border:`solid 1px #ccc`,background:`#fff`,padding:10,borderRadius:8,whiteSpace:`pre-wrap`},f=({children:e,blankSize:t})=>(0,l.jsx)(`div`,{style:{padding:10,boxSizing:`border-box`,minHeight:t},children:e?(0,l.jsx)(`div`,{style:{...d,marginRight:160},children:e}):null}),p=({children:e,onMeasure:t})=>{let n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{n.current&&t&&t(n.current.getBoundingClientRect().height)},[]),(0,l.jsx)(`div`,{ref:n,style:{padding:10,boxSizing:`border-box`},children:(0,l.jsx)(`div`,{style:{...d,background:`lightyellow`,marginLeft:160},children:e})})},m={name:`Chatbot`,render:()=>{let e=(0,c.useRef)(0),t=({value:t=o.lorem.paragraphs(1),role:n})=>({id:e.current++,value:t,role:n}),[n,r]=(0,c.useState)([]),a=(0,c.useRef)(null),[s,u]=(0,c.useState)(!1),[d,m]=(0,c.useState)(0),[h,g]=(0,c.useState)(0),[_,v]=(0,c.useState)(`Hello world!`),y=!_.length||s,b=()=>{if(y)return;v(``);let e=a.current;if(!e)return;let i=n.length-1,s=t({value:``,role:`assistant`}),{id:c}=s;r(e=>[...e,t({role:`user`,value:_}),s]),u(!0),g(e.viewportSize),requestAnimationFrame(()=>{e.scrollToIndex(i+1,{smooth:!0,align:`start`})}),setTimeout(()=>{let e=0,t=Math.floor(Math.random()*5)+1,n=setInterval(()=>{e++>20&&(u(!1),clearInterval(n)),r(e=>{let n=[...e],r=n.findIndex(e=>e.id===c);return n[r]={...n[r],value:n[r].value+o.lorem.paragraph(t)},n})},100)},1e3)};return(0,l.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(i,{ref:a,children:n.map((e,t)=>e.role===`assistant`?(0,l.jsx)(f,{blankSize:t===n.length-1?h-d:void 0,children:e.value},e.id):(0,l.jsx)(p,{onMeasure:t===n.length-2?m:void 0,children:e.value},e.id))}),(0,l.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),b()},children:[(0,l.jsx)(`textarea`,{style:{flex:1},rows:6,value:_,onChange:e=>{v(e.target.value)},onKeyDown:e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(b(),e.preventDefault())}}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:8,justifyContent:`flex-end`},children:(0,l.jsx)(`button`,{type:`submit`,disabled:y,children:`ask ai`})})]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,u as default};