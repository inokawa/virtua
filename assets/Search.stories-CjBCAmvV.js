import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i,t as a}from"./src-CBByf-Sv.js";import{n as o,t as s}from"./dist-BeG0fXPU.js";var c,l,u,d,f,p,m,h,g;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d={borderBottom:`solid 1px #ccc`,display:`flex`,flexDirection:`row`},f={minWidth:120},p={minWidth:240},m=({id:e,name:t,description:n})=>(0,l.jsxs)(`div`,{style:d,children:[(0,l.jsx)(`div`,{style:f,children:e}),(0,l.jsx)(`div`,{style:p,children:t}),(0,l.jsx)(`div`,{children:n})]}),h={name:`Search`,render:()=>{let e=(0,c.useState)(()=>Array.from({length:1e3},(e,t)=>({id:String(t),name:`${o.person.firstName()} ${o.person.lastName()}`,description:o.lorem.paragraphs(1)})))[0],t=(0,c.useRef)(null),[n,r]=(0,c.useState)(``),[a,s]=(0,c.useState)(0),[u,d]=(0,c.useState)(!1),f=(0,c.useMemo)(()=>{let t=n.toLowerCase(),r=e.filter(e=>e.id.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t));return u&&r.reverse(),r},[n,e,u]);return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`label`,{style:{marginRight:4},children:[`search`,(0,l.jsx)(`input`,{style:{marginLeft:4},value:n,onChange:e=>{r(e.target.value)}})]}),(0,l.jsxs)(`label`,{style:{marginRight:4},children:[`scroll to`,(0,l.jsx)(`input`,{style:{marginLeft:4},value:a,type:`number`,min:0,max:999,onChange:e=>{let n=Number(e.target.value);if(Number.isNaN(n))return;s(n);let r=String(n),i=f.findIndex(e=>e.id===r);i!==-1&&t.current?.scrollToIndex(i)}})]}),(0,l.jsxs)(`label`,{style:{marginRight:4},children:[(0,l.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:!u,onChange:()=>{d(!1)}}),`asc`]}),(0,l.jsxs)(`label`,{style:{marginRight:4},children:[(0,l.jsx)(`input`,{type:`radio`,style:{marginLeft:4},checked:u,onChange:()=>{d(!0)}}),`desc`]})]}),(0,l.jsxs)(`div`,{style:{width:`90vw`,height:`90vh`,border:`solid 1px #ddd`,background:`#fff`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(m,{id:`id`,name:`name`,description:`description`}),(0,l.jsx)(i,{ref:t,style:{flex:1},children:f.length?f.map((e,t)=>(0,l.jsx)(m,{...e},t)):(0,l.jsx)(`div`,{children:`No data.`})})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Search",
  render: () => {
    const items = useState(() => Array.from({
      length: 1000
    }, (_, i): Data => ({
      id: String(i),
      name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
      description: faker.lorem.paragraphs(1)
    })))[0];
    const ref = useRef<VListHandle>(null);
    const [value, setValue] = useState("");
    const [scrollValue, setScrollValue] = useState(0);
    const [desc, setDesc] = useState(false);
    const filtered = useMemo(() => {
      const v = value.toLowerCase();
      const res = items.filter(d => {
        return d.id.toLowerCase().includes(v) || d.name.toLowerCase().includes(v) || d.description.toLowerCase().includes(v);
      });
      if (desc) {
        res.reverse();
      }
      return res;
    }, [value, items, desc]);
    return <div>
        <div>
          <label style={{
          marginRight: 4
        }}>
            search
            <input style={{
            marginLeft: 4
          }} value={value} onChange={e => {
            setValue(e.target.value);
          }} />
          </label>
          <label style={{
          marginRight: 4
        }}>
            scroll to
            <input style={{
            marginLeft: 4
          }} value={scrollValue} type="number" min={0} max={999} onChange={e => {
            const targetId = Number(e.target.value);
            if (Number.isNaN(targetId)) return;
            setScrollValue(targetId);
            const targetIdStar = String(targetId);
            const index = filtered.findIndex(d => d.id === targetIdStar);
            if (index === -1) return;
            ref.current?.scrollToIndex(index);
          }} />
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={!desc} onChange={() => {
            setDesc(false);
          }} />
            asc
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={desc} onChange={() => {
            setDesc(true);
          }} />
            desc
          </label>
        </div>
        <div style={{
        width: "90vw",
        height: "90vh",
        border: "solid 1px #ddd",
        background: "#fff",
        display: "flex",
        flexDirection: "column"
      }}>
          <Row id="id" name="name" description="description" />
          <VList ref={ref} style={{
          flex: 1
        }}>
            {!filtered.length ? <div>No data.</div> : filtered.map((d, i) => <Row key={i} {...d} />)}
          </VList>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,u as default};