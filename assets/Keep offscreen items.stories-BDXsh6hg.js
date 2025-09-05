import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./iframe-Cb1Ql03H.js";import{f as j}from"./chunk-4X5ZEQ5K-BPNiwWK2.js";import{V as p}from"./VList-DvqsYCdp.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-Dwg_kqim.js";import"./useLatestRef-Cgupfomj.js";import"./useChildren-xFx5aaUQ.js";import"./index-W5EcgI0z.js";const T={component:p},E=[20,40,80,77],S=({i,onMount:n})=>(s.useEffect(()=>{n(i)},[]),e.jsx("div",{style:{height:E[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i})),a={render:()=>{const[i,n]=s.useState([]);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{n([])},children:"clear"})}),e.jsx(p,{count:1e3,keepMounted:i,children:t=>e.jsx(S,{i:t,onMount:d=>{n(c=>{const l=new Set(c);return l.add(d),Array.from(l).sort((o,u)=>o-u)})}},t)})]})}},k={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},w=({value:i})=>{const n=s.useRef(null);return s.useEffect(()=>{var t;(t=n.current)==null||t.focus()},[]),e.jsx("textarea",{style:{width:"100%"},rows:6,ref:n,defaultValue:i})},M=({id:i,value:n,isEditing:t,toggleEditing:d})=>e.jsxs("div",{style:{...k},children:[t?e.jsx(w,{value:n}):n,e.jsx("div",{children:e.jsx("button",{onClick:()=>d(i),children:t?"Stop editing":"Edit"})})]}),f={render:()=>{const i=s.useRef(0),n=({value:r=j.lorem.paragraphs(1)}={})=>({id:i.current++,value:r}),[t,d]=s.useState(()=>Array.from({length:20},()=>n())),[c,l]=s.useState(null),o=s.useRef(null),u=s.useRef(!1);s.useLayoutEffect(()=>{u.current=!1}),s.useEffect(()=>{o.current&&o.current.scrollToIndex(t.length-1,{align:"end"})},[]);const b=s.useCallback(r=>{l(m=>r===m?null:r)},[]);return e.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:10},children:['1. Click "edit" button on any item',e.jsx("br",{}),"2. Modify text",e.jsx("br",{}),"3. Scroll that item out of view and back - the editor state is not lost, and item in edit mode is not unmounted when goes offscreen"]}),e.jsx(p,{ref:o,style:{flex:1},reverse:!0,keepMounted:c?[t.findIndex(r=>r.id===c)]:void 0,shift:!0,onScroll:r=>{o.current&&r<100&&(u.current=!0,d(m=>[...Array.from({length:20},()=>n()),...m]))},children:t.map(r=>e.jsx(M,{isEditing:r.id===c,toggleEditing:b,...r},r.id))})]})}};var x,g,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,y,v;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(y=f.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const W=["AppendOnly","SelectedIndex"];export{a as AppendOnly,f as SelectedIndex,W as __namedExportsOrder,T as default};
