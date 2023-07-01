import{a as r,j as e}from"./jsx-runtime-f8a6c6ea.js";import{r as a}from"./index-5284b0bf.js";import{f as m}from"./index-4a193f06.js";import{V as S}from"./VList-10ac88ac.js";import"./DefaultWindow-0bf0a58a.js";import"./index-480187bb.js";const A={component:S},N={borderBottom:"solid 1px #ccc",display:"flex",flexDirection:"row"},V={minWidth:120},R={minWidth:240},p=({id:l,name:o,description:s})=>r("div",{style:N,children:[e("div",{style:V,children:l}),e("div",{style:R,children:o}),e("div",{children:s})]}),c={name:"Search",render:()=>{const l=a.useState(()=>Array.from({length:1e3},(n,t)=>({id:String(t),name:`${m.name.firstName()} ${m.name.lastName()}`,description:m.lorem.paragraphs(1)})))[0],o=a.useRef(null),[s,b]=a.useState(""),[L,C]=a.useState(0),[d,f]=a.useState(!1),u=a.useMemo(()=>{const n=s.toLowerCase(),t=l.filter(i=>i.id.toLowerCase().includes(n)||i.name.toLowerCase().includes(n)||i.description.toLowerCase().includes(n));return d&&t.reverse(),t},[s,l,d]);return r("div",{children:[r("div",{children:[r("label",{style:{marginRight:4},children:["search",e("input",{style:{marginLeft:4},value:s,onChange:n=>{b(n.target.value)}})]}),r("label",{style:{marginRight:4},children:["scroll to",e("input",{style:{marginLeft:4},value:L,type:"number",min:0,max:999,onChange:n=>{var h;const t=Number(n.target.value);if(Number.isNaN(t))return;C(t);const i=String(t),g=u.findIndex(w=>w.id===i);g!==-1&&((h=o.current)==null||h.scrollToIndex(g))}})]}),r("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!d,onChange:()=>{f(!1)}}),"asc"]}),r("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:d,onChange:()=>{f(!0)}}),"desc"]})]}),r("div",{style:{width:"90vw",height:"90vh",border:"solid 1px #ddd",background:"#fff",display:"flex",flexDirection:"column"},children:[e(p,{id:"id",name:"name",description:"description"}),e(S,{ref:o,style:{flex:1},children:u.length?u.map((n,t)=>e(p,{...n},t)):e("div",{children:"No data."})})]})]})}};var v,y,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Search",
  render: () => {
    const items = useState(() => Array.from({
      length: 1000
    }, (_, i): Data => ({
      id: String(i),
      name: \`\${faker.name.firstName()} \${faker.name.lastName()}\`,
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
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const E=["Default"];export{c as Default,E as __namedExportsOrder,A as default};
//# sourceMappingURL=Search.stories-3ed91a28.js.map
