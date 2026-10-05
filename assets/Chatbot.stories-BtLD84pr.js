import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-BsQGkceS.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-BBS6rBFB.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d={border:`solid 1px #ccc`,background:`#fff`,padding:10,borderRadius:8,whiteSpace:`pre-wrap`},f=({question:e,answer:t,isLast:n})=>(0,l.jsxs)(`div`,{style:{minHeight:n?`100cqh`:void 0},children:[(0,l.jsx)(`div`,{style:{padding:10},children:(0,l.jsx)(`div`,{style:{...d,background:`lightyellow`,marginLeft:160},children:e})}),t?(0,l.jsx)(`div`,{style:{padding:10},children:(0,l.jsx)(`div`,{style:{...d,marginRight:160},children:t})}):null]}),p={name:`Chatbot`,render:()=>{let e=(0,c.useRef)(0),[t,n]=(0,c.useState)([]),r=(0,c.useRef)(null),[i,s]=(0,c.useState)(!1),[u,d]=(0,c.useState)(`Hello world!`);(0,c.useEffect)(()=>{r.current&&t.length&&r.current.scrollToIndex(t.length-1,{smooth:!0,align:`start`})},[t.length]);let p=!u.length||i,m=()=>{if(p)return;d(``);let t={id:e.current++,question:u,answer:``};n(e=>[...e,t]),s(!0),setTimeout(()=>{let e=0,r=Math.floor(Math.random()*5)+1,i=setInterval(()=>{e++>20&&(s(!1),clearInterval(i)),n(e=>e.map(e=>e.id===t.id?{...e,answer:e.answer+o.lorem.paragraph(r)}:e))},100)},1e3)};return(0,l.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(a,{ref:r,style:{containerType:`size`},children:t.map((e,n)=>(0,l.jsx)(f,{question:e.question,answer:e.answer,isLast:n===t.length-1},e.id))}),(0,l.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),m()},children:[(0,l.jsx)(`textarea`,{style:{flex:1},rows:6,value:u,onChange:e=>{d(e.target.value)},onKeyDown:e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(m(),e.preventDefault())}}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:8,justifyContent:`flex-end`},children:(0,l.jsx)(`button`,{type:`submit`,disabled:p,children:`ask ai`})})]})]})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const [items, setItems] = useState<Data[]>([]);
    const ref = useRef<VListHandle>(null);
    const [streaming, setStreaming] = useState(false);
    const [value, setValue] = useState("Hello world!");
    useEffect(() => {
      if (!ref.current || !items.length) return;
      ref.current.scrollToIndex(items.length - 1, {
        smooth: true,
        align: "start"
      });
    }, [items.length]);
    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");
      const item: Data = {
        id: id.current++,
        question: value,
        answer: ""
      };
      setItems(p => [...p, item]);
      setStreaming(true);

      // emulate streaming from LLM
      setTimeout(() => {
        let counter = 0;
        const amount = Math.floor(Math.random() * 5) + 1;
        const interval = setInterval(() => {
          if (counter++ > 20) {
            setStreaming(false);
            clearInterval(interval);
          }
          setItems(p => p.map(d => d.id === item.id ? {
            ...d,
            answer: d.answer + faker.lorem.paragraph(amount)
          } : d));
        }, 100);
      }, 1000);
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <VList ref={ref} style={{
        // 100cqh is the height of the viewport
        containerType: "size"
      }}>
          {items.map((d, i) => <Turn key={d.id} question={d.question} answer={d.answer} isLast={i === items.length - 1} />)}
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Default,m as __namedExportsOrder,u as default};