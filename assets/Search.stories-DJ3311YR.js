import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-CvTW62Ax.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-C37j8I5k.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m;function h(){return(h=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d={display:`flex`,alignItems:`center`,marginRight:4},f=({id:e,name:t,description:n,style:r})=>(0,l.jsxs)(`div`,{style:{display:`flex`,padding:`10px 16px`,borderBottom:`solid 1px #eee`,...r},children:[(0,l.jsx)(`div`,{style:{minWidth:80},children:e}),(0,l.jsx)(`div`,{style:{minWidth:200},children:t}),(0,l.jsx)(`div`,{style:{flex:1,minWidth:0},children:n})]}),p={name:`Search`,render:()=>{let e=(0,c.useState)(()=>Array.from({length:1e3}).map((e,t)=>({id:String(t),name:`${o.person.firstName()} ${o.person.lastName()}`,description:o.lorem.paragraphs(1)})))[0],t=(0,c.useRef)(null),[n,r]=(0,c.useState)(``),[i,s]=(0,c.useState)(0),[u,p]=(0,c.useState)(!1),m=(0,c.useMemo)(()=>{let t=n.toLowerCase(),r=e.filter(e=>e.id.toLowerCase().includes(t)||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t));return u&&r.reverse(),r},[n,e,u]);return(0,l.jsxs)(`div`,{style:{height:`100vh`,boxSizing:`border-box`,padding:16,background:`#f6f7f9`,fontFamily:`system-ui, sans-serif`,fontSize:14,display:`flex`,flexDirection:`column`,gap:12},children:[(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[(0,l.jsxs)(`label`,{style:d,children:[`search`,(0,l.jsx)(`input`,{style:{marginLeft:4},value:n,onChange:e=>{r(e.target.value)}})]}),(0,l.jsxs)(`label`,{style:d,children:[`scroll to`,(0,l.jsx)(`input`,{style:{marginLeft:4},value:i,type:`number`,min:0,max:999,onChange:e=>{let n=Number(e.target.value);if(Number.isNaN(n))return;s(n);let r=String(n),i=m.findIndex(e=>e.id===r);i!==-1&&t.current?.scrollToIndex(i)}})]}),(0,l.jsxs)(`label`,{style:d,children:[(0,l.jsx)(`input`,{type:`radio`,style:{marginLeft:4,marginTop:0,marginBottom:0},checked:!u,onChange:()=>{p(!1)}}),`asc`]}),(0,l.jsxs)(`label`,{style:d,children:[(0,l.jsx)(`input`,{type:`radio`,style:{marginLeft:4,marginTop:0,marginBottom:0},checked:u,onChange:()=>{p(!0)}}),`desc`]})]}),(0,l.jsxs)(`div`,{style:{flex:1,minHeight:0,border:`solid 1px #e5e7eb`,borderRadius:8,overflow:`hidden`,boxShadow:`0 1px 2px rgba(0, 0, 0, 0.05)`,background:`#fff`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(f,{id:`id`,name:`name`,description:`description`,style:{background:`#fafafa`,color:`#6b7280`,fontSize:12,fontWeight:600,textTransform:`uppercase`}}),(0,l.jsx)(a,{ref:t,style:{flex:1},children:m.length?m.map(e=>(0,l.jsx)(f,{...e},e.id)):(0,l.jsx)(`div`,{style:{padding:32,textAlign:`center`,color:`#6b7280`},children:`No data.`})})]})]})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Search",
  render: () => {
    const items = useState(() => Array.from({
      length: 1000
    }).map((_, i): Data => ({
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
    return <div style={{
      height: "100vh",
      boxSizing: "border-box",
      padding: 16,
      background: "#f6f7f9",
      fontFamily: "system-ui, sans-serif",
      fontSize: 14,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <div style={{
        display: "flex",
        alignItems: "center"
      }}>
          <label style={labelStyle}>
            search
            <input style={{
            marginLeft: 4
          }} value={value} onChange={e => {
            setValue(e.target.value);
          }} />
          </label>
          <label style={labelStyle}>
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
          <label style={labelStyle}>
            <input type="radio" style={{
            marginLeft: 4,
            marginTop: 0,
            marginBottom: 0
          }} checked={!desc} onChange={() => {
            setDesc(false);
          }} />
            asc
          </label>
          <label style={labelStyle}>
            <input type="radio" style={{
            marginLeft: 4,
            marginTop: 0,
            marginBottom: 0
          }} checked={desc} onChange={() => {
            setDesc(true);
          }} />
            desc
          </label>
        </div>
        <div style={{
        flex: 1,
        minHeight: 0,
        border: "solid 1px #e5e7eb",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        background: "#fff",
        display: "flex",
        flexDirection: "column"
      }}>
          <Row id="id" name="name" description="description" style={{
          background: "#fafafa",
          color: "#6b7280",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase"
        }} />
          <VList ref={ref} style={{
          flex: 1
        }}>
            {!filtered.length ? <div style={{
            padding: 32,
            textAlign: "center",
            color: "#6b7280"
          }}>
                No data.
              </div> : filtered.map(d => <Row key={d.id} {...d} />)}
          </VList>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Default,m as __namedExportsOrder,u as default};