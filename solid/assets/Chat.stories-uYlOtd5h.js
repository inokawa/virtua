import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{T as t,_ as n,a as r,b as i,c as a,d as o,i as s,m as c,r as l,u,w as d,x as f,y as p}from"./iframe-xijWIvb4.js";import{n as m,t as h}from"./Virtualizer-oeCFXw5m.js";import{n as g,t as _}from"./en-DltMjSLJ.js";function v(e){return[(()=>{var t=b();return p(n=>a(t,`visibility`,e.visible?`visible`:`hidden`)),t})(),x()]}function y(e){return(()=>{var t=S();return r(t,()=>e.children),p(n=>u(t,{...T,...e.me?{background:`lightyellow`,"margin-left":`160px`}:{"margin-right":`160px`}},n)),t})()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{s(),m(),f(),_(),b=o(`<div style=flex:none;height:48px;display:flex;align-items:center;justify-content:center><span class=loader>`),x=o(`<style>
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
      }`),S=o(`<div>`),C=o(`<div style=width:100vw;height:100vh;display:flex;flex-direction:column><div style=overflow-y:auto;flex:1;overflow-anchor:none;display:flex;flex-direction:column><div style=flex-grow:1></div></div><form style=display:flex;flex-direction:column;margin:10px><textarea rows=6 style=flex:1></textarea><div style=display:flex;flex-direction:row;gap:8px;justify-content:flex-end><button type=submit>submit`),w={component:h},T={border:`solid 1px #ccc`,background:`#fff`,margin:`10px`,padding:`10px`,"border-radius":`8px`,"white-space":`pre-wrap`},E=48,D={name:`Chat`,render:()=>{let e=0,a=({value:t=g.lorem.paragraphs(1),me:n}={})=>({id:e++,value:t,me:n}),[o,s]=i(Array.from({length:100},()=>a())),l,[u,f]=i(!1),[m,_]=i(!0),[b,x]=i(`Hello world!`),[S,w]=i(!1);n(()=>{o(),f(!1)}),n(()=>{let e=o().length-1;m()&&l?.scrollToIndex(e,{align:`end`})}),t(()=>{let e=!1,t=null,n=()=>{t=setTimeout(()=>{e||(s(e=>[...e,a()]),n())},5e3)};n(),d(()=>{e=!0,t&&clearTimeout(t)})});let T=()=>!b().length,D=()=>{T()||(_(!0),s(e=>[...e,a({value:b(),me:!0})]),x(``))};return(()=>{var e=C(),t=e.firstChild;t.firstChild;var n=t.nextSibling,i=n.firstChild,d=i.nextSibling.firstChild;return r(t,c(v,{get visible(){return S()}}),null),r(t,c(h,{ref(e){var t=l;typeof t==`function`?t(e):l=e},get data(){return o()},get shift(){return u()},startMargin:E,onScroll:async e=>{let t=l;t&&(_(e-E-t.scrollSize+t.viewportSize>=-1.5),e<148&&!S()&&(w(!0),await new Promise(e=>setTimeout(e,1e3)),f(!0),s(e=>[...Array.from({length:100},()=>a()),...e]),w(!1)))},children:e=>c(y,{get me(){return e.me},get children(){return e.value}})}),null),n.addEventListener(`submit`,e=>{e.preventDefault(),e.stopPropagation(),D()}),i.$$keydown=e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(D(),e.preventDefault())},i.$$input=e=>x(e.currentTarget.value),p(()=>d.disabled=T()),p(()=>i.value=b()),e})()}},l([`input`,`keydown`]),O=[`Default`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{code:`const Default = () => {
  let id = 0;
  const createItem = ({
    value = faker.lorem.paragraphs(1),
    me,
  }: { value?: string; me?: boolean } = {}): Data => ({
    id: id++,
    value,
    me,
  });
  const [items, setItems] = createSignal<Data[]>(
    Array.from({ length: 100 }, () => createItem()),
  );
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
      virtualizerHandle?.scrollToIndex(lastItemIndex, { align: "end" });
    }
  });

  onMount(() => {
    let canceled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const setTimer = () => {
      timer = setTimeout(() => {
        if (canceled) return;
        setItems((prev) => [...prev, createItem()]);
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
    setItems((prev) => [...prev, createItem({ value: value(), me: true })]);
    setValue("");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <div
        style={{
          "overflow-y": "auto",
          flex: 1,
          // opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer
          "overflow-anchor": "none",
          // flex style for spacer
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <div
          style={{
            // spacer to align virtualizer to the bottom when all items are visible in the viewport
            "flex-grow": 1,
          }}
        />
        <Spinner visible={fetching()} />
        <Virtualizer
          ref={virtualizerHandle}
          data={items()}
          shift={isPrepend()}
          startMargin={spinnerHeight}
          onScroll={async (offset) => {
            const handle = virtualizerHandle;
            if (!handle) return;
            setShouldStickToBottom(
              offset -
                spinnerHeight -
                handle.scrollSize +
                handle.viewportSize >=
                -1.5,
            );
            if (offset < spinnerHeight + 100 && !fetching()) {
              setFetching(true);
              await new Promise((resolve) => setTimeout(resolve, 1000));
              setIsPrepend(true);
              setItems((prev) => [
                ...Array.from({ length: 100 }, () => createItem()),
                ...prev,
              ]);
              setFetching(false);
            }
          }}
        >
          {(d) => <Item me={d.me}>{d.value}</Item>}
        </Virtualizer>
      </div>
      <form
        style={{
          display: "flex",
          "flex-direction": "column",
          margin: "10px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          submit();
        }}
      >
        <textarea
          style={{ flex: 1 }}
          rows={6}
          value={value()}
          onInput={(e) => setValue(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter" && (e.ctrlKey || e.metaKey)) {
              submit();
              e.preventDefault();
            }
          }}
        />
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            gap: "8px",
            "justify-content": "flex-end",
          }}
        >
          <button type="submit" disabled={disabled()}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
`,...D.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Default,O as __namedExportsOrder,w as default};