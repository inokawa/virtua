import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./iframe-kXGK60IA.js";import{f as u}from"./chunk-4X5ZEQ5K-BPNiwWK2.js";import{V as y}from"./VList-BCMm9ZRU.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-CXc8ddXE.js";import"./useLatestRef-DwlwYKuf.js";import"./useChildren-BiUsfatA.js";import"./index-CYCeAwim.js";const M={component:y},C={borderBottom:"solid 1px #ccc",display:"flex",flexDirection:"row"},w={minWidth:120},N={minWidth:240},p=({id:a,name:l,description:s})=>e.jsxs("div",{style:C,children:[e.jsx("div",{style:w,children:a}),e.jsx("div",{style:N,children:l}),e.jsx("div",{children:s})]}),d={name:"Search",render:()=>{const a=r.useState(()=>Array.from({length:1e3},(n,t)=>({id:String(t),name:`${u.person.firstName()} ${u.person.lastName()}`,description:u.lorem.paragraphs(1)})))[0],l=r.useRef(null),[s,S]=r.useState(""),[b,j]=r.useState(0),[o,m]=r.useState(!1),c=r.useMemo(()=>{const n=s.toLowerCase(),t=a.filter(i=>i.id.toLowerCase().includes(n)||i.name.toLowerCase().includes(n)||i.description.toLowerCase().includes(n));return o&&t.reverse(),t},[s,a,o]);return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("label",{style:{marginRight:4},children:["search",e.jsx("input",{style:{marginLeft:4},value:s,onChange:n=>{S(n.target.value)}})]}),e.jsxs("label",{style:{marginRight:4},children:["scroll to",e.jsx("input",{style:{marginLeft:4},value:b,type:"number",min:0,max:999,onChange:n=>{var g;const t=Number(n.target.value);if(Number.isNaN(t))return;j(t);const i=String(t),f=c.findIndex(L=>L.id===i);f!==-1&&((g=l.current)==null||g.scrollToIndex(f))}})]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:!o,onChange:()=>{m(!1)}}),"asc"]}),e.jsxs("label",{style:{marginRight:4},children:[e.jsx("input",{type:"radio",style:{marginLeft:4},checked:o,onChange:()=>{m(!0)}}),"desc"]})]}),e.jsxs("div",{style:{width:"90vw",height:"90vh",border:"solid 1px #ddd",background:"#fff",display:"flex",flexDirection:"column"},children:[e.jsx(p,{id:"id",name:"name",description:"description"}),e.jsx(y,{ref:l,style:{flex:1},children:c.length?c.map((n,t)=>e.jsx(p,{...n},t)):e.jsx("div",{children:"No data."})})]})]})}};var h,x,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const T=["Default"];export{d as Default,T as __namedExportsOrder,M as default};
