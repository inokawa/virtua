import{j as e,a as f}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as le,d as ce}from"./common-4271bb5e.js";import{f as de,u as ue,A as me,a as he,b as M,r as E,U as pe,c as fe,e as ge,v as ye,V as ve,d as be,g as Se,h as _e,i as we,S as xe,j as Ie,k as Ce}from"./useRerender-127d03c8.js";import{u as Re,L as ke}from"./ListItem-d1b805b6.js";import{r as Le}from"./index-eb008d06.js";const u=o.forwardRef(({children:r,overscan:s=4,initialItemSize:n,initialItemCount:a,horizontal:i,cache:c,components:{Root:g=ve,Item:m="div"}=be,onScrollStop:b,onRangeChange:S,...p},y)=>{const k=o.useMemo(()=>de(r),[r]),d=k.length,A=Re(b),[l,H,N,v]=ue(()=>{const t=!!i,h=Se(d,n,a,c,!1,!n);return[h,_e(h,t),we(h,t),t]});d!==l._getItemsLength()&&l._update(me,[d]);const O=he(),[L,T]=l._getRange(),V=l._getScrollDirection(),re=l._getJumpCount(),D=l._getCorrectedScrollSize(),q=o.useRef(null),z=V!==xe;M(()=>{const t=q[E],h=l._subscribe(pe+fe,ae=>{ae?Le.flushSync(O):O()}),_=H._observeRoot(t),ie=N._observe(t);return()=>{h(),_(),ie()}},[]),M(()=>{const t=l._flushJump();t&&N._fixScrollJump(t)},[re]),o.useEffect(()=>{z||A[E]&&A[E]()},[z]),o.useEffect(()=>{S&&S(L,T)},[L,T]),o.useImperativeHandle(y,()=>({get cache(){return l._getCache()}}),[]);const se=Ce(L,s,V),oe=Ie(T,s,V,d),B=[];for(let t=se;t<=oe;t++){const h=k[t],_=h.key;B.push(e(ke,{_resizer:H,_index:t,_offset:l._getItemOffset(t),_hide:l._isUnmeasuredItem(t),_element:m,_children:h,_isHorizontal:v},ge(_)?_:"_"+t))}return e(g,{ref:q,width:v?D:void 0,height:v?void 0:D,scrolling:z,attrs:o.useMemo(()=>({...p,style:{display:v?"inline-block":"block",width:v?"auto":"100%",height:v?"100%":"auto",...p.style}}),ye(p)),children:B})});try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const W=r=>{const s=[20,40,80,77];return Array.from({length:r}).map((n,a)=>e("div",{style:{height:s[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},Te=r=>Array.from({length:r}).map((s,n)=>f("div",{style:{width:n%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",n]},n)),Oe={component:u},w={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:W(1e3)})})},x={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Te(1e3)})})},I={render:()=>f("div",{style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),f("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3},children:e(u,{style:{margin:10},children:Array.from({length:1e3}).map((r,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},C={render:()=>{const r=(S,p=0)=>{const y=[20,40,80,77];return Array.from({length:S}).map((k,d)=>(d+=p,e("div",{style:{height:y[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d)))},[s,n]=o.useState(!1),a=async()=>{n(!0),await ce(1e3),n(!1)},i=100,[c,g]=o.useState(()=>r(i)),m=o.useRef(-1),b=c.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:f(u,{onRangeChange:async(S,p)=>{p+50>b&&m.current<b&&(m.current=b,await a(),g(y=>[...y,...r(i,y.length)]))},children:[c,s&&e(le,{})]})})}},Ve=({id:r})=>{const s="window-list-cache-"+r,n=o.useRef(null),[a,i]=o.useMemo(()=>{const c=sessionStorage.getItem(s);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!n.current)return;const c=n.current;window.scrollTo(0,a??0);let g=0;const m=()=>{g=window.scrollY};return window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m),sessionStorage.setItem(s,JSON.stringify([g,c.cache]))}},[]),e(u,{ref:n,cache:i,children:W(1e3)})},R={render:()=>{const[r,s]=o.useState(!0),[n,a]=o.useState("1");return f("div",{style:{position:"relative"},children:[f("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{s(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>f("label",{children:[e("input",{type:"radio",checked:n===i,onChange:()=>{a(i)}}),i]},i))]}),r&&e(Ve,{id:n},n)]})}};var U,j,F;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(j=w.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var J,Y,P;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(P=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var G,K,Z;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Z=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,X,$;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(X=C.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ne,te;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const De=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration"];export{I as Complex,w as Default,x as Horizontal,C as InfiniteScrolling,R as ScrollRestoration,De as __namedExportsOrder,Oe as default};
//# sourceMappingURL=WVList.stories-be502f20.js.map