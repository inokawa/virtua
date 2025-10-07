import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-By3Y0unl.js";import{f as g}from"./chunk-4X5ZEQ5K-DKZdp5Hc.js";import{V as p}from"./VList-Dk3zODM9.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CEBzCCdQ.js";import"./useLatestRef-BbTzUwKr.js";import"./useChildren-eZM4paAO.js";import"./index-CH5wfhwi.js";import"./index-BX39yeK7.js";const C={component:p},h=[20,40,80,77],I=({i:s,onMount:n})=>(r.useEffect(()=>{n(s)},[]),e.jsx("div",{style:{height:h[s%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:s})),a={render:()=>{const[s,n]=r.useState([]);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{n([])},children:"clear"})}),e.jsx(p,{count:1e3,keepMounted:s,children:i=>e.jsx(I,{i,onMount:d=>{n(c=>{const l=new Set(c);return l.add(d),Array.from(l).sort((o,u)=>o-u)})}},i)})]})}},y={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},v=({value:s})=>{const n=r.useRef(null);return r.useEffect(()=>{n.current?.focus()},[]),e.jsx("textarea",{style:{width:"100%"},rows:6,ref:n,defaultValue:s})},b=({id:s,value:n,isEditing:i,toggleEditing:d})=>e.jsxs("div",{style:{...y},children:[i?e.jsx(v,{value:n}):n,e.jsx("div",{children:e.jsx("button",{onClick:()=>d(s),children:i?"Stop editing":"Edit"})})]}),f={render:()=>{const s=r.useRef(0),n=({value:t=g.lorem.paragraphs(1)}={})=>({id:s.current++,value:t}),[i,d]=r.useState(()=>Array.from({length:20},()=>n())),[c,l]=r.useState(null),o=r.useRef(null),u=r.useRef(!1);r.useLayoutEffect(()=>{u.current=!1}),r.useEffect(()=>{o.current&&o.current.scrollToIndex(i.length-1,{align:"end"})},[]);const x=r.useCallback(t=>{l(m=>t===m?null:t)},[]);return e.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:10},children:['1. Click "edit" button on any item',e.jsx("br",{}),"2. Modify text",e.jsx("br",{}),"3. Scroll that item out of view and back - the editor state is not lost, and item in edit mode is not unmounted when goes offscreen"]}),e.jsx(p,{ref:o,style:{flex:1},reverse:!0,keepMounted:c?[i.findIndex(t=>t.id===c)]:void 0,shift:!0,onScroll:t=>{o.current&&t<100&&(u.current=!0,d(m=>[...Array.from({length:20},()=>n()),...m]))},children:i.map(t=>e.jsx(b,{isEditing:t.id===c,toggleEditing:x,...t},t.id))})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        <VList count={1000} keepMounted={indexes}>
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
}`,...a.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const D=["AppendOnly","SelectedIndex"];export{a as AppendOnly,f as SelectedIndex,D as __namedExportsOrder,C as default};
