import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{a as i,t as a}from"./src-De5IyaZp.js";import{n as o,t as s}from"./dist-S2M97FKQ.js";var c,l,u,d,f,p,m;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d={border:`solid 1px #ccc`,background:`#fff`,margin:10,padding:10,borderRadius:8,whiteSpace:`pre-wrap`},f=({me:e,children:t})=>(0,l.jsx)(`div`,{style:{...d,...e?{background:`lightyellow`,marginLeft:160}:{marginRight:160}},children:t}),p={name:`Chat`,render:()=>{let e=(0,c.useRef)(0),t=({value:t=o.lorem.paragraphs(1),me:n}={})=>({id:e.current++,value:t,me:n}),[n,r]=(0,c.useState)(()=>Array.from({length:100},()=>t())),[a,s]=(0,c.useState)(!0),u=(0,c.useRef)(null),d=(0,c.useRef)(!1),p=(0,c.useRef)(!0),[m,h]=(0,c.useState)(`Hello world!`);(0,c.useLayoutEffect)(()=>{d.current=!1}),(0,c.useEffect)(()=>{if(!u.current)return;let e=u.current,t=n.length-1;p.current&&e.scrollToIndex(t,{align:`end`})},[n]),(0,c.useEffect)(()=>{if(!a)return;let e=!1,n=null,i=()=>{n=setTimeout(()=>{e||(r(e=>[...e,t()]),i())},5e3)};return i(),()=>{e=!0,n&&clearTimeout(n)}},[a]);let g=!m.length,_=()=>{g||(p.current=!0,r(e=>[...e,t({value:m,me:!0})]),h(``))};return(0,l.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,l.jsxs)(`div`,{style:{overflowY:`auto`,flex:1,overflowAnchor:`none`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(`div`,{style:{flexGrow:1}}),(0,l.jsx)(i,{ref:u,shift:d.current,onScroll:e=>{u.current&&(p.current=e-u.current.scrollSize+u.current.viewportSize>=-1.5,e<100&&(d.current=!0,r(e=>[...Array.from({length:100},()=>t()),...e])))},children:n.map(e=>(0,l.jsx)(f,{me:e.me,children:e.value},e.id))})]}),(0,l.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),_()},children:[(0,l.jsx)(`textarea`,{style:{flex:1},rows:6,value:m,onChange:e=>{h(e.target.value)},onKeyDown:e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(_(),e.preventDefault())}}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:8,justifyContent:`flex-end`},children:[(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`input`,{type:`checkbox`,checked:a,onChange:()=>{s(e=>!e)}}),`auto update`]}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>{u.current?.scrollTo(0)},children:`jump to top`}),(0,l.jsx)(`button`,{type:`submit`,disabled:g,children:`submit`})]})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Chat",
  render: () => {
    const id = useRef(0);
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me
    }: {
      value?: string;
      me?: boolean;
    } = {}): Data => ({
      id: id.current++,
      value: value,
      me
    });
    const [items, setItems] = useState(() => Array.from({
      length: 100
    }, () => createItem()));
    const [autoUpdating, setAutoUpdating] = useState(true);
    const ref = useRef<VirtualizerHandle>(null);
    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);
    const [value, setValue] = useState("Hello world!");
    useLayoutEffect(() => {
      isPrepend.current = false;
    });
    useEffect(() => {
      if (!ref.current) return;
      const handle = ref.current;
      const lastItemIndex = items.length - 1;
      if (shouldStickToBottom.current) {
        handle.scrollToIndex(lastItemIndex, {
          align: "end"
        });
      }
    }, [items]);
    useEffect(() => {
      if (!autoUpdating) return;
      let canceled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;
      const setTimer = () => {
        timer = setTimeout(() => {
          if (canceled) return;
          setItems(p => [...p, createItem()]);
          setTimer();
        }, 5000);
      };
      setTimer();
      return () => {
        canceled = true;
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [autoUpdating]);
    const disabled = !value.length;
    const submit = () => {
      if (disabled) return;
      shouldStickToBottom.current = true;
      setItems(p => [...p, createItem({
        value,
        me: true
      })]);
      setValue("");
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        overflowY: "auto",
        flex: 1,
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
        overflowAnchor: "none",
        // flex style for spacer
        display: "flex",
        flexDirection: "column"
      }}>
          <div style={{
          // spacer to align virtualizer to the bottom when all items are visible in the viewport
          flexGrow: 1
        }} />
          <Virtualizer ref={ref} shift={isPrepend.current} onScroll={offset => {
          if (!ref.current) return;
          shouldStickToBottom.current = offset - ref.current.scrollSize + ref.current.viewportSize >=
          // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
          -1.5;
          if (offset < 100) {
            isPrepend.current = true;
            setItems(p => [...Array.from({
              length: 100
            }, () => createItem()), ...p]);
          }
        }}>
            {items.map(d => <Item key={d.id} me={d.me}>
                {d.value}
              </Item>)}
          </Virtualizer>
        </div>
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
            <label>
              <input type="checkbox" checked={autoUpdating} onChange={() => {
              setAutoUpdating(prev => !prev);
            }} />
              auto update
            </label>
            <button type="button" onClick={() => {
            ref.current?.scrollTo(0);
          }}>
              jump to top
            </button>
            <button type="submit" disabled={disabled}>
              submit
            </button>
          </div>
        </form>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,u as default};