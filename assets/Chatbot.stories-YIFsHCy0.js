import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-XU4DPr_4.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-C4yH8Vox.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=e=>{let t=[];for(let n of e)n.role===`user`||!t.length?t.push([n]):t[t.length-1].push(n);return t},f=({value:e,role:t})=>(0,l.jsx)(`div`,{style:{padding:10},children:(0,l.jsx)(`div`,{style:{border:`solid 1px #ccc`,background:`#fff`,padding:10,borderRadius:8,whiteSpace:`pre-wrap`,...t===`user`?{background:`lightyellow`,marginLeft:160}:{marginRight:160}},children:e})}),p={name:`Chatbot`,render:()=>{let e=(0,c.useRef)(0),[t,n]=(0,c.useState)([]),r=(0,c.useRef)(null),[i,s]=(0,c.useState)(!1),[u,p]=(0,c.useState)(`Hello world!`),m=d(t);(0,c.useEffect)(()=>{r.current&&m.length&&r.current.scrollToIndex(m.length-1,{smooth:!0,align:`start`})},[m.length]);let h=!u.length||i,g=()=>{if(h)return;p(``);let t={id:e.current++,value:u,role:`user`},r={id:e.current++,value:``,role:`assistant`};n(e=>[...e,t,r]),s(!0),setTimeout(()=>{let e=0,t=Math.floor(Math.random()*5)+1,i=setInterval(()=>{e++>20&&(s(!1),clearInterval(i)),n(e=>e.map(e=>e.id===r.id?{...e,value:e.value+o.lorem.paragraph(t)}:e))},100)},1e3)};return(0,l.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(a,{ref:r,style:{containerType:`size`},children:m.map((e,t)=>(0,l.jsx)(`div`,{style:{minHeight:t===m.length-1?`100cqh`:void 0},children:e.map(e=>e.value?(0,l.jsx)(f,{value:e.value,role:e.role},e.id):null)},e[0].id))}),(0,l.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),g()},children:[(0,l.jsx)(`textarea`,{style:{flex:1},rows:6,value:u,onChange:e=>{p(e.target.value)},onKeyDown:e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(g(),e.preventDefault())}}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:8,justifyContent:`flex-end`},children:(0,l.jsx)(`button`,{type:`submit`,disabled:h,children:`ask ai`})})]})]})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Chatbot",
  render: () => {
    const id = useRef(0);
    const [items, setItems] = useState<Data[]>([]);
    const ref = useRef<VListHandle>(null);
    const [streaming, setStreaming] = useState(false);
    const [value, setValue] = useState("Hello world!");
    const turns = groupByTurn(items);
    useEffect(() => {
      if (!ref.current || !turns.length) return;
      ref.current.scrollToIndex(turns.length - 1, {
        smooth: true,
        align: "start"
      });
    }, [turns.length]);
    const disabled = !value.length || streaming;
    const submit = () => {
      if (disabled) return;
      setValue("");
      const question: Data = {
        id: id.current++,
        value,
        role: "user"
      };
      const answer: Data = {
        id: id.current++,
        value: "",
        role: "assistant"
      };
      setItems(p => [...p, question, answer]);
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
          setItems(p => p.map(d => d.id === answer.id ? {
            ...d,
            value: d.value + faker.lorem.paragraph(amount)
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
          {turns.map((turn, i) => <div key={turn[0].id} style={{
          // The last turn fills the viewport, so its question can be scrolled to the top while its answer is short
          minHeight: i === turns.length - 1 ? "100cqh" : undefined
        }}>
              {turn.map(d => d.value ? <Message key={d.id} value={d.value} role={d.role} /> : null)}
            </div>)}
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