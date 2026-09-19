import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,E as r,N as i,O as a,P as o,_ as s,b as c,f as l,k as u,m as d,p as f,y as p}from"./iframe-DEip7X7c.js";import{n as m,t as h}from"./Virtualizer-DSIe4voh.js";import{n as g,t as _}from"./en-DltMjSLJ.js";function v(e){return[(()=>{var t=b();return a(n=>s(t,`visibility`,e.visible?`visible`:`hidden`)),t})(),x()]}function y(e){return(()=>{var t=S();return d(t,()=>e.children),a(n=>p(t,{...T,...e.me?{background:`lightyellow`,"margin-left":`160px`}:{"margin-right":`160px`}},n)),t})()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f(),m(),t(),_(),b=c(`<div style=flex:none;height:48px;display:flex;align-items:center;justify-content:center><span class=loader>`),x=c(`<style>
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
      }`),S=c(`<div>`),C=c(`<div style=width:100vw;height:100vh;display:flex;flex-direction:column><div style=overflow-y:auto;flex:1;overflow-anchor:none;display:flex;flex-direction:column><div style=flex-grow:1></div></div><form style=display:flex;flex-direction:column;margin:10px><textarea rows=6 style=flex:1></textarea><div style=display:flex;flex-direction:row;gap:8px;justify-content:flex-end><button type=submit>submit`),w={component:h},T={border:`solid 1px #ccc`,background:`#fff`,margin:`10px`,padding:`10px`,"border-radius":`8px`,"white-space":`pre-wrap`},E=48,D={name:`Chat`,render:()=>{let e=0,t=({value:t=g.lorem.paragraphs(1),me:n}={})=>({id:e++,value:t,me:n}),[s,c]=u(Array.from({length:100},()=>t())),l,[f,p]=u(!1),[m,_]=u(!0),[b,x]=u(`Hello world!`),[S,w]=u(!1);r(()=>{s(),p(!1)}),r(()=>{let e=s().length-1;m()&&l?.scrollToIndex(e,{align:`end`})}),o(()=>{let e=!1,n=null,r=()=>{n=setTimeout(()=>{e||(c(e=>[...e,t()]),r())},5e3)};r(),i(()=>{e=!0,n&&clearTimeout(n)})});let T=()=>!b().length,D=()=>{T()||(_(!0),c(e=>[...e,t({value:b(),me:!0})]),x(``))};return(()=>{var e=C(),r=e.firstChild;r.firstChild;var i=r.nextSibling,o=i.firstChild,u=o.nextSibling.firstChild;return d(r,n(v,{get visible(){return S()}}),null),d(r,n(h,{ref(e){var t=l;typeof t==`function`?t(e):l=e},get data(){return s()},get shift(){return f()},startMargin:E,onScroll:async e=>{let n=l;n&&(_(e-E-n.scrollSize+n.viewportSize>=-1.5),e<148&&!S()&&(w(!0),await new Promise(e=>setTimeout(e,1e3)),p(!0),c(e=>[...Array.from({length:100},()=>t()),...e]),w(!1)))},children:e=>n(y,{get me(){return e.me},get children(){return e.value}})}),null),i.addEventListener(`submit`,e=>{e.preventDefault(),e.stopPropagation(),D()}),o.$$keydown=e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(D(),e.preventDefault())},o.$$input=e=>x(e.currentTarget.value),a(()=>u.disabled=T()),a(()=>o.value=b()),e})()}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Chat",
  render: () => {
    let id = 0;
    const createItem = ({
      value = faker.lorem.paragraphs(1),
      me
    }: {
      value?: string;
      me?: boolean;
    } = {}): Data => ({
      id: id++,
      value,
      me
    });
    const [items, setItems] = createSignal<Data[]>(Array.from({
      length: 100
    }, () => createItem()));
    let virtualizerHandle: VirtualizerHandle | undefined;
    const [isPrepend, setIsPrepend] = createSignal(false);
    const [shouldStickToBottom, setShouldStickToBottom] = createSignal(true);
    const [value, setValue] = createSignal("Hello world!");
    const [fetching, setFetching] = createSignal(false);
    createEffect(() => {
      items();
      setIsPrepend(false);
    });
    createEffect(() => {
      const lastItemIndex = items().length - 1;
      if (shouldStickToBottom()) {
        virtualizerHandle?.scrollToIndex(lastItemIndex, {
          align: "end"
        });
      }
    });
    onMount(() => {
      let canceled = false;
      let timer: ReturnType<typeof setTimeout> | null = null;
      const setTimer = () => {
        timer = setTimeout(() => {
          if (canceled) return;
          setItems(prev => [...prev, createItem()]);
          setTimer();
        }, 5000);
      };
      setTimer();
      onCleanup(() => {
        canceled = true;
        if (timer) clearTimeout(timer);
      });
    });
    const disabled = () => !value().length;
    const submit = () => {
      if (disabled()) return;
      setShouldStickToBottom(true);
      setItems(prev => [...prev, createItem({
        value: value(),
        me: true
      })]);
      setValue("");
    };
    return <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      "flex-direction": "column"
    }}>
        <div style={{
        "overflow-y": "auto",
        flex: 1,
        // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
        "overflow-anchor": "none",
        // flex style for spacer
        display: "flex",
        "flex-direction": "column"
      }}>
          <div style={{
          // spacer to align virtualizer to the bottom when all items are visible in the viewport
          "flex-grow": 1
        }} />
          <Spinner visible={fetching()} />
          <Virtualizer ref={virtualizerHandle} data={items()} shift={isPrepend()} startMargin={spinnerHeight} onScroll={async offset => {
          const handle = virtualizerHandle;
          if (!handle) return;
          setShouldStickToBottom(offset - spinnerHeight - handle.scrollSize + handle.viewportSize >= -1.5);
          if (offset < spinnerHeight + 100 && !fetching()) {
            setFetching(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsPrepend(true);
            setItems(prev => [...Array.from({
              length: 100
            }, () => createItem()), ...prev]);
            setFetching(false);
          }
        }}>
            {d => <Item me={d.me}>{d.value}</Item>}
          </Virtualizer>
        </div>
        <form style={{
        display: "flex",
        "flex-direction": "column",
        margin: "10px"
      }} onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        submit();
      }}>
          <textarea style={{
          flex: 1
        }} rows={6} value={value()} onInput={e => setValue(e.currentTarget.value)} onKeyDown={e => {
          if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
            submit();
            e.preventDefault();
          }
        }} />
          <div style={{
          display: "flex",
          "flex-direction": "row",
          gap: "8px",
          "justify-content": "flex-end"
        }}>
            <button type="submit" disabled={disabled()}>
              submit
            </button>
          </div>
        </form>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},l([`input`,`keydown`]),O=[`Default`]})))()}k();export{D as Default,O as __namedExportsOrder,w as default};