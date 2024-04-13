import{j as t}from"./jsx-runtime-DiTpbvcX.js";import{r as n}from"./index-BqFXtf2T.js";import{f as I}from"./index-xJp9Kd2E.js";import{V as g}from"./VList-BFaDpnIl.js";import"./Virtualizer-BtQlFkWT.js";import"./useRerender-vSgwX44C.js";import"./useChildren-vNruQF0S.js";import"./index-ChcDFWtF.js";const _={component:g},y={border:"solid 1px #ccc",background:"#fff",margin:10,padding:10,borderRadius:8,whiteSpace:"pre-wrap"},v=({value:s})=>{const i=n.useRef(null);return n.useEffect(()=>{var r;(r=i.current)==null||r.focus()},[]),t.jsx("textarea",{style:{width:"100%"},rows:6,ref:i,defaultValue:s})},E=({id:s,value:i,isEditing:r,toggleEditing:l})=>t.jsxs("div",{style:{...y},children:[r?t.jsx(v,{value:i}):i,t.jsx("div",{children:t.jsx("button",{onClick:()=>l(s),children:r?"Stop editing":"Edit"})})]}),d={name:"Keep offscreen items mounted",render:()=>{const s=n.useRef(0),i=({value:e=I.lorem.paragraphs(1)}={})=>({id:s.current++,value:e}),[r,l]=n.useState(()=>Array.from({length:20},()=>i())),[u,h]=n.useState(null),o=n.useRef(null),c=n.useRef(!1);n.useLayoutEffect(()=>{c.current=!1}),n.useEffect(()=>{o.current&&o.current.scrollToIndex(r.length-1,{align:"end"})},[]);const x=n.useCallback(e=>{h(a=>e===a?null:e)},[]);return t.jsxs("div",{style:{width:"90vw",height:"90vh",display:"flex",flexDirection:"column"},children:[t.jsxs("div",{style:{padding:10},children:['1. Click "edit" button on any item',t.jsx("br",{}),"2. Modify text",t.jsx("br",{}),"3. Scroll that item out of view and back - the editor state is not lost, and item in edit mode is not unmounted when goes offscreen"]}),t.jsx(g,{ref:o,style:{flex:1},reverse:!0,keepMounted:u?[r.findIndex(e=>e.id===u)]:void 0,shift:!0,onScroll:e=>{o.current&&e<100&&(c.current=!0,l(a=>[...Array.from({length:20},()=>i()),...a]))},children:r.map(e=>t.jsx(E,{isEditing:e.id===u,toggleEditing:x,...e},e.id))})]})}};var f,m,p;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Keep offscreen items mounted",
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
          1. Click "edit" button on any item<br />
          2. Modify text<br />
          3. Scroll that item out of view and back - the editor state is not lost, and 
          item in edit mode is not unmounted when goes offscreen
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
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,_ as default};
