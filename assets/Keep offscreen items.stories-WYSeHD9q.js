import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DOe2YkSO.js";import{f as g}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as x}from"./VList-CM0o0E2l.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-DeyaN0jh.js";import"./useLatestRef-1l8qdMri.js";import"./useChildren-_5P_Gnjr.js";import"./index-D6ryCu6w.js";import"./index-TZyBNz0C.js";const C={component:x},h=[20,40,80,77],I=({i:s,onMount:t})=>(n.useEffect(()=>{t(s)},[]),e.jsx("div",{style:{height:h[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s})),a={render:()=>{const s=n.useMemo(()=>Array.from({length:1e3}).map((o,d)=>d),[]),[t,i]=n.useState([]);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{i([])},children:"clear"})}),e.jsx(x,{data:s,keepMounted:t,children:o=>e.jsx(I,{i:o,onMount:d=>{i(m=>{const c=new Set(m);return c.add(d),Array.from(c).sort((l,f)=>l-f)})}},o)})]})}},y={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},v=({value:s})=>{const t=n.useRef(null);return n.useEffect(()=>{t.current?.focus()},[]),e.jsx("textarea",{style:{width:"100%"},rows:6,ref:t,defaultValue:s})},b=({id:s,value:t,isEditing:i,toggleEditing:o})=>e.jsxs("div",{style:{...y},children:[i?e.jsx(v,{value:t}):t,e.jsx("div",{children:e.jsx("button",{onClick:()=>o(s),children:i?"Stop editing":"Edit"})})]}),u={render:()=>{const s=n.useRef(0),t=({value:r=g.lorem.paragraphs(1)}={})=>({id:s.current++,value:r}),[i,o]=n.useState(()=>Array.from({length:20},()=>t())),[d,m]=n.useState(null),c=n.useRef(null),l=n.useRef(!1);n.useLayoutEffect(()=>{l.current=!1}),n.useEffect(()=>{c.current&&c.current.scrollToIndex(i.length-1,{align:"end"})},[]);const f=n.useCallback(r=>{m(p=>r===p?null:r)},[]);return e.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:10},children:['1. Click "edit" button on any item',e.jsx("br",{}),"2. Modify text",e.jsx("br",{}),"3. Scroll that item out of view and back - the editor state is not lost, and item in edit mode is not unmounted when goes offscreen"]}),e.jsx(x,{ref:c,style:{flex:1},reverse:!0,keepMounted:d?[i.findIndex(r=>r.id===d)]:void 0,shift:!0,onScroll:r=>{c.current&&r<100&&(l.current=!0,o(p=>[...Array.from({length:20},()=>t()),...p]))},children:i.map(r=>e.jsx(b,{isEditing:r.id===d,toggleEditing:f,...r},r.id))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => Array.from({
      length: 1000
    }).map((_, i) => i), []);
    const [indexes, setIndexes] = useState<number[]>([]);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <button onClick={() => {
          setIndexes([]);
        }}>
            clear
          </button>
        </div>
        <VList data={data} keepMounted={indexes}>
          {i => <ItemWithOnMount key={i} i={i} onMount={i => {
          setIndexes(prev => {
            const next = new Set(prev);
            next.add(i);
            return Array.from(next).sort((a, b) => a - b);
          });
        }} />}
        </VList>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1)
    }: {
      value?: string;
    } = {}): Data => ({
      id: id.current++,
      value: value
    });
    const [items, setItems] = useState(() => Array.from({
      length: 20
    }, () => createItem()));
    const [editingItemId, setEditingItemId] = useState<number | null>(null);
    const ref = useRef<VListHandle>(null);
    const isPrepend = useRef(false);
    useLayoutEffect(() => {
      isPrepend.current = false;
    });
    useEffect(() => {
      if (!ref.current) return;
      ref.current.scrollToIndex(items.length - 1, {
        align: "end"
      });
    }, []);
    const toggleEditing = useCallback((itemId: number) => {
      setEditingItemId(currentValue => itemId === currentValue ? null : itemId);
    }, []);
    return <div style={{
      width: "90vw",
      height: "90vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        padding: 10
      }}>
          1. Click "edit" button on any item
          <br />
          2. Modify text
          <br />
          3. Scroll that item out of view and back - the editor state is not
          lost, and item in edit mode is not unmounted when goes offscreen
        </div>
        <VList ref={ref} style={{
        flex: 1
      }} reverse keepMounted={editingItemId ? [items.findIndex(item => item.id === editingItemId)] : undefined} shift onScroll={offset => {
        if (!ref.current) return;
        if (offset < 100) {
          isPrepend.current = true;
          setItems(p => [...Array.from({
            length: 20
          }, () => createItem()), ...p]);
        }
      }}>
          {items.map(d => <Item key={d.id} isEditing={d.id === editingItemId} toggleEditing={toggleEditing} {...d} />)}
        </VList>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const _=["AppendOnly","SelectedIndex"];export{a as AppendOnly,u as SelectedIndex,_ as __namedExportsOrder,C as default};
