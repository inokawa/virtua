import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,a as n,d as r,f as i,g as a,h as o,k as s,m as c,n as l,o as u,r as d,s as f,w as p,x as m,y as h}from"./iframe-BeAdlezq.js";import{n as g,t as _}from"./Virtualizer-CqKga7xR.js";import{n as v,t as y}from"./en-uMSCgswj.js";function b(e){return[(()=>{var t=S();return n(()=>e.visible?`visible`:`hidden`,e=>{i(t,`visibility`,e)}),t})(),C()]}function x(e){var t=w();return f(t,()=>e.children),n(()=>({...D,...e.me?{background:`lightyellow`,"margin-left":`160px`}:{"margin-right":`160px`}}),(e,n)=>{c(t,e,n)}),t}var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{u(),g(),p(),y(),S=o(`<div style=flex:none;height:48px;display:flex;align-items:center;justify-content:center><span class=loader>`),C=o(`<style>
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
      }`),w=o(`<div>`),T=o(`<div style=width:100vw;height:100vh;display:flex;flex-direction:column><div style=overflow-y:auto;flex:1;overflow-anchor:none;display:flex;flex-direction:column><div style=flex-grow:1></div><!><!></div><form style=display:flex;flex-direction:column;margin:10px><textarea rows=6 style=flex:1></textarea><div style=display:flex;flex-direction:row;gap:8px;justify-content:flex-end><button type=submit>submit`),E={component:_},D={border:`solid 1px #ccc`,background:`#fff`,margin:`10px`,padding:`10px`,"border-radius":`8px`,"white-space":`pre-wrap`},O=48,k={name:`Chat`,render:()=>{let e=0,i=({value:t=v.lorem.paragraphs(1),me:n}={})=>({id:e++,value:t,me:n}),[o,c]=t(Array.from({length:100}).map(()=>i())),u,[d,p]=t(!1),[g,y]=t(!0),[S,C]=t(`Hello world!`),[w,E]=t(!1);m(()=>o(),()=>{p(!1)});let D=(e,t)=>{u&&t&&u.scrollToIndex(e-1,{align:`end`})},k=()=>{D(o().length,g())};m(()=>[o(),g()],([e,t])=>{D(e.length,t)}),s(()=>{let e=!1,t=null,n=()=>{t=setTimeout(()=>{e||(c(e=>[...e,i()]),n())},5e3)};return n(),()=>{e=!0,t&&clearTimeout(t)}});let A=()=>!S().length,j=()=>{A()||(y(!0),c(e=>[...e,i({value:S(),me:!0})]),C(``))};var M=T(),N=M.firstChild,P=N.firstChild.nextSibling,F=P.nextSibling,I=N.nextSibling,L=I.firstChild,R=L.nextSibling.firstChild;return f(N,h(b,{get visible(){return w()}}),P),f(N,h(_,{ref(e){var t=u;typeof t==`function`||Array.isArray(t)?l(t,e):u=e},get data(){return o()},get shift(){return d()},startMargin:O,onResize:k,onScroll:async e=>{let t=u;t&&(y(e-O-t.scrollSize+t.viewportSize>=-1.5),e<148&&!w()&&(E(!0),await new Promise(e=>setTimeout(e,1e3)),p(!0),c(e=>[...Array.from({length:100}).map(()=>i()),...e]),E(!1)))},children:e=>h(x,{get me(){return e.me},get children(){return e.value}})}),F),I.addEventListener(`submit`,e=>{e.preventDefault(),e.stopPropagation(),j()}),L._$$keydown=e=>{e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(j(),e.preventDefault())},L._$$input=e=>C(e.currentTarget.value),n(()=>({e:S(),t:A(),a:a()}),({e,t,a:n},i)=>{e===i?.e&&n||(L.value=e??``),t!==i?.t&&r(R,`disabled`,t)}),M}},d([`input`,`keydown`]),A=[`Default`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{code:`const Default = () => {
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
    Array.from({ length: 100 }).map(() => createItem()),
  );
  let virtualizerHandle: VirtualizerHandle | undefined;
  const [isPrepend, setIsPrepend] = createSignal(false);
  const [shouldStickToBottom, setShouldStickToBottom] = createSignal(true);
  const [value, setValue] = createSignal("Hello world!");
  const [fetching, setFetching] = createSignal(false);

  createEffect(
    () => items(),
    () => {
      setIsPrepend(false);
    },
  );

  const scrollToBottom = (length: number, shouldStick: boolean) => {
    if (virtualizerHandle && shouldStick) {
      virtualizerHandle.scrollToIndex(length - 1, { align: "end" });
    }
  };
  const stickToBottom = () => {
    scrollToBottom(items().length, shouldStickToBottom());
  };

  createEffect(
    () => [items(), shouldStickToBottom()] as const,
    ([items, shouldStick]) => {
      scrollToBottom(items.length, shouldStick);
    },
  );

  onSettled(() => {
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
    return () => {
      canceled = true;
      if (timer) clearTimeout(timer);
    };
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
          // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
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
          onResize={stickToBottom}
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
                ...Array.from({ length: 100 }).map(() => createItem()),
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
`,...k.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    }).map(() => createItem()));
    let virtualizerHandle: VirtualizerHandle | undefined;
    const [isPrepend, setIsPrepend] = createSignal(false);
    const [shouldStickToBottom, setShouldStickToBottom] = createSignal(true);
    const [value, setValue] = createSignal("Hello world!");
    const [fetching, setFetching] = createSignal(false);
    createEffect(() => items(), () => {
      setIsPrepend(false);
    });
    const scrollToBottom = (length: number, shouldStick: boolean) => {
      if (virtualizerHandle && shouldStick) {
        virtualizerHandle.scrollToIndex(length - 1, {
          align: "end"
        });
      }
    };
    const stickToBottom = () => {
      scrollToBottom(items().length, shouldStickToBottom());
    };
    createEffect(() => [items(), shouldStickToBottom()] as const, ([items, shouldStick]) => {
      scrollToBottom(items.length, shouldStick);
    });
    onSettled(() => {
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
      return () => {
        canceled = true;
        if (timer) clearTimeout(timer);
      };
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
        // opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
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
          <Virtualizer ref={virtualizerHandle} data={items()} shift={isPrepend()} startMargin={spinnerHeight} onResize={stickToBottom} onScroll={async offset => {
          const handle = virtualizerHandle;
          if (!handle) return;
          setShouldStickToBottom(offset - spinnerHeight - handle.scrollSize + handle.viewportSize >= -1.5);
          if (offset < spinnerHeight + 100 && !fetching()) {
            setFetching(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsPrepend(true);
            setItems(prev => [...Array.from({
              length: 100
            }).map(() => createItem()), ...prev]);
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as Default,A as __namedExportsOrder,E as default};