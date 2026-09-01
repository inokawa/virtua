import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-Fe-bCtr_.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Virtualizer-ondebXrn.js";import{n as o,t as s}from"./en-DltMjSLJ.js";import{n as c,r as l}from"./common-CYh9P3-1.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{i(),u=e(n(),1),s(),l(),d=r(),f={component:a},p={border:`solid 1px #ccc`,background:`#fff`,margin:10,padding:10,borderRadius:8,whiteSpace:`pre-wrap`},m=48,h=({visible:e})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{style:{flex:`none`,visibility:e?`visible`:`hidden`,height:m,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,d.jsx)(`span`,{className:`loader`})}),(0,d.jsx)(`style`,{children:`
      .loader {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid #ccc;
        border-top-color: transparent;
        animation: rotate 1s linear infinite;
      }

      @keyframes rotate {
        100% {transform: rotate(360deg)}
      }`})]}),g=({me:e,children:t})=>(0,d.jsx)(`div`,{style:{...p,...e?{background:`lightyellow`,marginLeft:160}:{marginRight:160}},children:t}),_={name:`Chat`,render:()=>{let e=(0,u.useRef)(0),t=({value:t=o.lorem.paragraphs(1),me:n}={})=>({id:e.current++,value:t,me:n}),[n,r]=(0,u.useState)(()=>Array.from({length:100},()=>t())),i=(0,u.useRef)(null),s=(0,u.useRef)(!1),l=(0,u.useRef)(!0),[f,p]=(0,u.useState)(!1),[_,v]=(0,u.useState)(`Hello world!`);(0,u.useLayoutEffect)(()=>{s.current=!1}),(0,u.useEffect)(()=>{if(!i.current)return;let e=i.current,t=n.length-1;l.current&&e.scrollToIndex(t,{align:`end`})},[n]),(0,u.useEffect)(()=>{let e=!1,n=null,i=()=>{n=setTimeout(()=>{e||(r(e=>[...e,t()]),i())},5e3)};return i(),()=>{e=!0,n&&clearTimeout(n)}},[]);let y=!_.length,b=()=>{y||(l.current=!0,r(e=>[...e,t({value:_,me:!0})]),v(``))};return(0,d.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,d.jsxs)(`div`,{style:{overflowY:`auto`,flex:1,overflowAnchor:`none`,display:`flex`,flexDirection:`column`},children:[(0,d.jsx)(`div`,{style:{flexGrow:1}}),(0,d.jsx)(h,{visible:f}),(0,d.jsx)(a,{ref:i,shift:s.current,startMargin:m,onScroll:async e=>{i.current&&(l.current=e-m-i.current.scrollSize+i.current.viewportSize>=-1.5,e<148&&!f&&(p(!0),await c(1e3),s.current=!0,r(e=>[...Array.from({length:100},()=>t()),...e]),p(!1)))},children:n.map(e=>(0,d.jsx)(g,{me:e.me,children:e.value},e.id))})]}),(0,d.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,margin:10},onSubmit:e=>{e.preventDefault(),e.stopPropagation(),b()},children:[(0,d.jsx)(`textarea`,{style:{flex:1},rows:6,value:_,onChange:e=>{v(e.target.value)},onKeyDown:e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(b(),e.preventDefault())}}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:8,justifyContent:`flex-end`},children:(0,d.jsx)(`button`,{type:`submit`,disabled:y,children:`submit`})})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    const ref = useRef<VirtualizerHandle>(null);
    const isPrepend = useRef(false);
    const shouldStickToBottom = useRef(true);
    const [fetching, setFetching] = useState(false);
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
    }, []);
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
          <Spinner visible={fetching} />
          <Virtualizer ref={ref} shift={isPrepend.current} startMargin={spinnerHeight} onScroll={async offset => {
          if (!ref.current) return;
          shouldStickToBottom.current = offset - spinnerHeight - ref.current.scrollSize + ref.current.viewportSize >=
          // FIXME: The sum may not be 0 because of sub-pixel value when browser's window.devicePixelRatio has decimal value
          -1.5;
          if (offset < spinnerHeight + 100 && !fetching) {
            setFetching(true);
            await delay(1000);
            isPrepend.current = true;
            setItems(p => [...Array.from({
              length: 100
            }, () => createItem()), ...p]);
            setFetching(false);
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
            <button type="submit" disabled={disabled}>
              submit
            </button>
          </div>
        </form>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]})))()}y();export{_ as Default,v as __namedExportsOrder,f as default};