import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-De5IyaZp.js";import{n as o,t as s}from"./dist-S2M97FKQ.js";var c,l,u,d,f,p,m,h,g,_,v;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d=[20,40,80,77],f=({i:e,onMount:t})=>((0,c.useEffect)(()=>{t(e)},[]),(0,l.jsx)(`div`,{style:{height:d[e%4],borderBottom:`solid 1px #ccc`,background:`#fff`},children:e})),p={render:()=>{let e=(0,c.useMemo)(()=>Array.from({length:1e3}).map((e,t)=>t),[]),[t,n]=(0,c.useState)([]);return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(`div`,{children:(0,l.jsx)(`button`,{onClick:()=>{n([])},children:`clear`})}),(0,l.jsx)(i,{data:e,keepMounted:t,children:e=>(0,l.jsx)(f,{i:e,onMount:e=>{n(t=>{let n=new Set(t);return n.add(e),Array.from(n).sort((e,t)=>e-t)})}},e)})]})}},m={border:`solid 1px #ccc`,background:`#fff`,margin:10,padding:10,borderRadius:8,whiteSpace:`pre-wrap`},h=({value:e})=>{let t=(0,c.useRef)(null);return(0,c.useEffect)(()=>{t.current?.focus()},[]),(0,l.jsx)(`textarea`,{style:{width:`100%`},rows:6,ref:t,defaultValue:e})},g=({id:e,value:t,isEditing:n,toggleEditing:r})=>(0,l.jsxs)(`div`,{style:{...m},children:[n?(0,l.jsx)(h,{value:t}):t,(0,l.jsx)(`div`,{children:(0,l.jsx)(`button`,{onClick:()=>r(e),children:n?`Stop editing`:`Edit`})})]}),_={render:()=>{let e=(0,c.useRef)(0),t=({value:t=o.lorem.paragraphs(1)}={})=>({id:e.current++,value:t}),[n,r]=(0,c.useState)(()=>Array.from({length:20},()=>t())),[a,s]=(0,c.useState)(null),u=(0,c.useRef)(null),d=(0,c.useRef)(!1);(0,c.useLayoutEffect)(()=>{d.current=!1}),(0,c.useEffect)(()=>{u.current&&u.current.scrollToIndex(n.length-1,{align:`end`})},[]);let f=(0,c.useCallback)(e=>{s(t=>e===t?null:e)},[]);return(0,l.jsxs)(`div`,{style:{width:`90vw`,height:`90vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsxs)(`div`,{style:{padding:10},children:[`1. Click "edit" button on any item`,(0,l.jsx)(`br`,{}),`2. Modify text`,(0,l.jsx)(`br`,{}),`3. Scroll that item out of view and back - the editor state is not lost, and item in edit mode is not unmounted when goes offscreen`]}),(0,l.jsx)(i,{ref:u,style:{flex:1},keepMounted:a?[n.findIndex(e=>e.id===a)]:void 0,shift:!0,onScroll:e=>{u.current&&e<100&&(d.current=!0,r(e=>[...Array.from({length:20},()=>t()),...e]))},children:n.map(e=>(0,l.jsx)(g,{isEditing:e.id===a,toggleEditing:f,...e},e.id))})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      }} keepMounted={editingItemId ? [items.findIndex(item => item.id === editingItemId)] : undefined} shift onScroll={offset => {
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
}`,..._.parameters?.docs?.source}}},v=[`AppendOnly`,`SelectedIndex`]}))();export{p as AppendOnly,_ as SelectedIndex,v as __namedExportsOrder,u as default};