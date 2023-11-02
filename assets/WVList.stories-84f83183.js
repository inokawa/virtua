import{j as e,a as v}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as le,d as ce}from"./common-4271bb5e.js";import{f as de,u as ue,A as me,a as pe,b as M,r as E,U as he,c as fe,e as ge,v as ye,V as ve,d as Se,g as be,h as _e,i as Ie,S as we,j as xe,k as Ce}from"./useRerender-a0969a0c.js";import{u as Re,L as ke}from"./ListItem-5575172d.js";import{r as Le}from"./index-eb008d06.js";const u=o.forwardRef(({children:r,overscan:s=4,initialItemSize:n,initialItemCount:a,horizontal:i,cache:c,components:{Root:f=ve,Item:m="div"}=Se,onScrollStop:S,onRangeChange:b,...h},g)=>{const k=o.useMemo(()=>de(r),[r]),d=k.length,A=Re(S),[l,H,N,y]=ue(()=>{const t=!!i,p=be(d,n,a,c,!1,!n);return[p,_e(p,t),Ie(p,t),t]});d!==l._getItemsLength()&&l._update(me,[d]);const O=pe(),[L,V]=l._getRange(),T=l._getScrollDirection(),re=l._getJumpCount(),D=l._getCorrectedScrollSize(),q=o.useRef(null),z=T!==we;M(()=>{const t=q[E],p=l._subscribe(he+fe,ae=>{ae?Le.flushSync(O):O()}),_=H._observeRoot(t),ie=N._initRoot(t);return()=>{p(),_(),ie()}},[]),M(()=>{const t=l._flushJump();t&&N._fixScrollJump(t)},[re]),o.useEffect(()=>{z||A[E]&&A[E]()},[z]),o.useEffect(()=>{b&&b(L,V)},[L,V]),o.useImperativeHandle(g,()=>({get cache(){return l._getCache()}}),[]);const se=Ce(L,s,T),oe=xe(V,s,T,d),B=[];for(let t=se;t<=oe;t++){const p=k[t],_=p.key;B.push(e(ke,{_resizer:H,_index:t,_offset:l._getItemOffset(t),_hide:l._isUnmeasuredItem(t),_element:m,_children:p,_isHorizontal:y},ge(_)?_:"_"+t))}return e(f,{ref:q,width:y?D:void 0,height:y?void 0:D,scrolling:z,attrs:o.useMemo(()=>({...h,style:{display:y?"inline-block":"block",width:y?"auto":"100%",height:y?"100%":"auto",...h.style}}),ye(h)),children:B})});try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const W=r=>{const s=[20,40,80,77];return Array.from({length:r}).map((n,a)=>e("div",{style:{height:s[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},Ve=r=>Array.from({length:r}).map((s,n)=>v("div",{style:{width:n%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",n]},n)),Oe={component:u},I={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:W(1e3)})})},w={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Ve(1e3)})})},x={render:()=>v("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(u,{style:{margin:10},children:Array.from({length:1e3}).map((r,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},C={render:()=>{const r=(b,h=0)=>{const g=[20,40,80,77];return Array.from({length:b}).map((k,d)=>(d+=h,e("div",{style:{height:g[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d)))},[s,n]=o.useState(!1),a=async()=>{n(!0),await ce(1e3),n(!1)},i=100,[c,f]=o.useState(()=>r(i)),m=o.useRef(-1),S=c.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:v(u,{onRangeChange:async(b,h)=>{h+50>S&&m.current<S&&(m.current=S,await a(),f(g=>[...g,...r(i,g.length)]))},children:[c,s&&e(le,{})]})})}},Te=({id:r})=>{const s="window-list-cache-"+r,n=o.useRef(null),[a,i]=o.useMemo(()=>{const c=sessionStorage.getItem(s);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!n.current)return;const c=n.current;window.scrollTo(0,a??0);let f=0;const m=()=>{f=window.scrollY};return window.addEventListener("scroll",m),m(),()=>{window.removeEventListener("scroll",m),sessionStorage.setItem(s,JSON.stringify([f,c.cache]))}},[]),e(u,{ref:n,cache:i,children:W(1e3)})},R={render:()=>{const[r,s]=o.useState(!0),[n,a]=o.useState("1");return v("div",{style:{position:"relative"},children:[v("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{s(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>v("label",{children:[e("input",{type:"radio",checked:n===i,onChange:()=>{a(i)}}),i]},i))]}),r&&e(Te,{id:n},n)]})}};var U,j,F;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(j=I.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var J,Y,P;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(P=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var G,K,Z;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
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
        flex: 3,
        paddingBottom: 600
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
      </div>;
  }
}`,...(Z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,X,$;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const De=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration"];export{x as Complex,I as Default,w as Horizontal,C as InfiniteScrolling,R as ScrollRestoration,De as __namedExportsOrder,Oe as default};
//# sourceMappingURL=WVList.stories-84f83183.js.map
