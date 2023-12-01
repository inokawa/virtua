import{a as e,j as l}from"./jsx-runtime-sgeEVxPu.js";import{r as s}from"./index-yp3VsGQP.js";import{S as he,d as fe}from"./common-jfrYHwuZ.js";import{a as ge,A as ye,b as ve,u as j,r as D,U as be,c as xe,l as we,v as Se,V as Ie,e as Re,d as Ce,n as _e,o as ke,S as Le,h as Ve,j as Te}from"./useRerender-udfIvsB1.js";import{u as Ee,a as ze,L as Ae}from"./useChildren-0kHPHoc8.js";import{r as We}from"./index-lP7UrUYH.js";const f=s.forwardRef(({children:o,count:i,overscan:t=4,initialItemSize:c,initialItemCount:r,shift:p,horizontal:u,cache:m,components:{Root:g=Ie,Item:w="div"}=Re,onScrollStop:S,onRangeChange:h,...v},b)=>{const[n,y]=Ee(o,i),I=ze(S),[d,O,q,R]=ge(()=>{const a=!!u,x=Ce(y,c,r,m,!1,!c);return[x,_e(x,a),ke(x,a),a]});y!==d._getItemsLength()&&d._update(ye,[y,p]);const B=ve(),[z,A]=d._getRange(),W=d._getScrollDirection(),ce=d._getJumpCount(),M=d._getTotalSize(),P=s.useRef(null),N=W!==Le;j(()=>{const a=P[D],x=d._subscribe(be+xe,me=>{me?We.flushSync(B):B()}),C=O._observeRoot(a),pe=q._observe(a);return()=>{x(),C(),pe()}},[]),j(()=>{const a=d._flushJump();a&&q._fixScrollJump(a)},[ce]),s.useEffect(()=>{N||I[D]&&I[D]()},[N]),s.useEffect(()=>{h&&h(z,A)},[z,A]),s.useImperativeHandle(b,()=>({get cache(){return d._getCache()}}),[]);const de=Te(z,t,W),ue=Ve(A,t,W,y),U=[];for(let a=de;a<=ue;a++){const x=n(a),C=x.key;U.push(e(Ae,{_resizer:O,_index:a,_offset:d._getItemOffset(a),_hide:d._isUnmeasuredItem(a),_element:w,_children:x,_isHorizontal:R},we(C)?C:"_"+a))}return e(g,{ref:P,width:R?M:void 0,height:R?void 0:M,scrolling:N,attrs:s.useMemo(()=>({...v,style:{display:R?"inline-block":"block",width:R?"auto":"100%",height:R?"100%":"auto",...v.style}}),Se(v)),children:U})});try{f.displayName="WVList",f.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link WVListProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link WVListProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},shift:{defaultValue:null,description:"While true is set, scroll position will be maintained from the end not usual start when items are shifted/unshifted. It is useful for reverse infinite scrolling.",name:"shift",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const H=o=>{const i=[20,40,80,77];return Array.from({length:o}).map((t,c)=>e("div",{style:{height:i[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},Ne=o=>Array.from({length:o}).map((i,t)=>l("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),Ue={component:f},_={render:()=>e("div",{style:{padding:200},children:e(f,{style:{border:"solid 1px gray"},children:H(1e3)})})},k={render:()=>e("div",{style:{padding:200},children:e(f,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Ne(1e3)})})},L={render:()=>l("div",{style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),l("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(f,{style:{margin:10},children:H(1e3)})}),e("div",{style:{flex:3},children:e(f,{style:{margin:10},children:Array.from({length:1e3}).map((o,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},V={render:()=>{const o=(w,S=0)=>{const h=[20,40,80,77];return Array.from({length:w}).map((v,b)=>(b+=S,e("div",{style:{height:h[b%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:b},b)))},[i,t]=s.useState(!1),c=async()=>{t(!0),await fe(1e3),t(!1)},r=100,[p,u]=s.useState(()=>o(r)),m=s.useRef(-1),g=p.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:l(f,{onRangeChange:async(w,S)=>{S+50>g&&m.current<g&&(m.current=g,await c(),u(h=>[...h,...o(r,h.length)]))},children:[p,i&&e(he,{})]})})}},De=({id:o})=>{const i="window-list-cache-"+o,t=s.useRef(null),[c,r]=s.useMemo(()=>{const p=sessionStorage.getItem(i);if(!p)return[];try{return JSON.parse(p)}catch{return[]}},[]);return s.useLayoutEffect(()=>{if(!t.current)return;const p=t.current;window.scrollTo(0,c??0);let u=0;const m=()=>{u=window.scrollY};return window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m),sessionStorage.setItem(i,JSON.stringify([u,p.cache]))}},[]),e(f,{ref:t,cache:r,children:H(1e3)})},T={render:()=>{const[o,i]=s.useState(!0),[t,c]=s.useState("1");return l("div",{style:{position:"relative"},children:[l("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{i(r=>!r)},children:o?"hide":"show"}),["1","2","3"].map(r=>l("label",{children:[e("input",{type:"radio",checked:t===r,onChange:()=>{c(r)}}),r]},r))]}),o&&e(De,{id:t},t)]})}},E={render:()=>{const o=s.useRef(0),i=(n,y)=>Array.from({length:n}).map((I,d)=>(d+=y,{id:o.current++,index:d})),[t,c]=s.useState(!1),[r,p]=s.useState(4),[u,m]=s.useState(!1),[g,w]=s.useState(!0),[S,h]=s.useState(()=>i(r,0)),v=()=>{h(g?n=>{var y,I;return u?[...i(r,(((y=n[0])==null?void 0:y.index)??0)-r),...n]:[...n,...i(r,(((I=n[n.length-1])==null?void 0:I.index)??0)+1)]}:u?n=>n.slice(r):n=>n.slice(0,-r))};s.useEffect(()=>{if(!t)return;const n=setInterval(v,500);return()=>{clearInterval(n)}},[v,t]);const b=[20,40,80,77];return l("div",{style:{display:"flex",flexDirection:"column"},children:[l("div",{style:{position:"sticky",top:0,zIndex:1,background:"whitesmoke"},children:[l("div",{children:[l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!u,onChange:()=>{m(!1)}}),"append"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:u,onChange:()=>{m(!0)}}),"prepend"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:g,onChange:()=>{w(!0)}}),"increase"]}),l("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!g,onChange:()=>{w(!1)}}),"decrease"]}),e("input",{style:{marginLeft:4},value:r,type:"number",min:1,max:1e4,step:1,onChange:n=>{p(Number(n.target.value))}})]}),l("div",{children:[l("label",{style:{marginRight:16},children:[e("input",{type:"checkbox",style:{marginLeft:4},checked:t,onChange:()=>{c(n=>!n)}}),"auto"]}),e("button",{onClick:()=>{v()},children:"update"})]})]}),e(f,{style:{flex:1,paddingTop:30},shift:u,children:S.map(n=>e("div",{style:{height:b[Math.abs(n.index)%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n.index},n.id))})]})}};var J,F,Y;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList style={{
        border: "solid 1px gray"
      }}>
          {createRows(1000)}
        </WVList>
      </div>;
  }
}`,...(Y=(F=_.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var G,K,X;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList horizontal style={{
        height: 400,
        border: "solid 1px gray"
      }}>
          {createColumns(1000)}
        </WVList>
      </div>;
  }
}`,...(X=(K=k.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,Q,$;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        background: "white",
        height: 60,
        marginBottom: 40
      }}>
          header
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1,
          display: "flex",
          paddingTop: 600
        }}>
            <WVList style={{
            margin: 10
          }}>
              {createRows(1000)}
            </WVList>
          </div>
          <div style={{
          flex: 3
        }}>
            <WVList style={{
            margin: 10
          }}>
              {Array.from({
              length: 1000
            }).map((_, i) => {
              return <div key={i} style={{
                height: 200,
                borderRadius: 8,
                margin: 16,
                background: "#fff"
              }}>
                    {i}
                  </div>;
            })}
            </WVList>
          </div>
          <div style={{
          flex: 2,
          padding: 20,
          paddingTop: 300
        }}>
            <div style={{
            top: 0,
            height: 400,
            position: "sticky",
            background: "white"
          }}></div>
          </div>
        </div>
        <div style={{
        background: "white",
        height: 60,
        marginTop: 40
      }}>
          footer
        </div>
      </div>;
  }
}`,...($=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var ee,ne,te;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const createRows = (num: number, offset: number = 0) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(1000);
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <div style={{
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async (_, end) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {fetching && <Spinner />}
        </WVList>
      </div>;
  }
}`,...(te=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,ie;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");
    return <div style={{
      position: "relative"
    }}>
        <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10
      }}>
          <button onClick={() => {
          setShow(prev => !prev);
        }}>
            {show ? "hide" : "show"}
          </button>
          {["1", "2", "3"].map(id => <label key={id}>
              <input type="radio" checked={selectedId === id} onChange={() => {
            setSelectedId(id);
          }} />
              {id}
            </label>)}
        </div>
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...(ie=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ae,le;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createRows = (num: number, offset: number) => {
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return {
          id: id.current++,
          index: i
        };
      });
    };
    const [auto, setAuto] = useState(false);
    const [amount, setAmount] = useState(4);
    const [prepend, setPrepend] = useState(false);
    const [increase, setIncrease] = useState(true);
    const [rows, setRows] = useState(() => createRows(amount, 0));
    const update = () => {
      if (increase) {
        setRows(prev => prepend ? [...createRows(amount, (prev[0]?.index ?? 0) - amount), ...prev] : [...prev, ...createRows(amount, (prev[prev.length - 1]?.index ?? 0) + 1)]);
      } else {
        if (prepend) {
          setRows(prev => prev.slice(amount));
        } else {
          setRows(prev => prev.slice(0, -amount));
        }
      }
    };
    useEffect(() => {
      if (!auto) return;
      const timer = setInterval(update, 500);
      return () => {
        clearInterval(timer);
      };
    }, [update, auto]);
    const heights = [20, 40, 80, 77];
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: "whitesmoke"
      }}>
          <div>
            <label style={{
            marginRight: 4
          }}>
              <input type="radio" style={{
              marginLeft: 4
            }} checked={!prepend} onChange={() => {
              setPrepend(false);
            }} />
              append
            </label>
            <label style={{
            marginRight: 4
          }}>
              <input type="radio" style={{
              marginLeft: 4
            }} checked={prepend} onChange={() => {
              setPrepend(true);
            }} />
              prepend
            </label>
            <label style={{
            marginRight: 4
          }}>
              <input type="radio" style={{
              marginLeft: 4
            }} checked={increase} onChange={() => {
              setIncrease(true);
            }} />
              increase
            </label>
            <label style={{
            marginRight: 4
          }}>
              <input type="radio" style={{
              marginLeft: 4
            }} checked={!increase} onChange={() => {
              setIncrease(false);
            }} />
              decrease
            </label>
            <input style={{
            marginLeft: 4
          }} value={amount} type="number" min={1} max={10000} step={1} onChange={e => {
            setAmount(Number(e.target.value));
          }} />
          </div>

          <div>
            <label style={{
            marginRight: 16
          }}>
              <input type="checkbox" style={{
              marginLeft: 4
            }} checked={auto} onChange={() => {
              setAuto(prev => !prev);
            }} />
              auto
            </label>
            <button onClick={() => {
            update();
          }}>
              update
            </button>
          </div>
        </div>
        <WVList style={{
        flex: 1,
        paddingTop: 30
      }} shift={prepend}>
          {rows.map(d => <div key={d.id} style={{
          height: heights[Math.abs(d.index) % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d.index}
            </div>)}
        </WVList>
      </div>;
  }
}`,...(le=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const je=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration","IncreasingItems"];export{L as Complex,_ as Default,k as Horizontal,E as IncreasingItems,V as InfiniteScrolling,T as ScrollRestoration,je as __namedExportsOrder,Ue as default};
