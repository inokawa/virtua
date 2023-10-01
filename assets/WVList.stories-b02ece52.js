import{j as e,a as z}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as se,d as oe}from"./common-4271bb5e.js";import{f as ie,u as ae,a as le,A as ce,b as x,c as B,r as E,e as de,v as ue,V as me,d as pe,g as fe,h as he,i as ge,U as ye,j as M,k as _e,l as ve,S as be,m as xe,n as Ce}from"./Viewport-578ea796.js";import{L as Se}from"./ListItem-60c2fe4f.js";import{r as Ie}from"./index-eb008d06.js";const c=o.forwardRef(({children:r,overscan:i=4,initialItemSize:a,initialItemCount:d,horizontal:g,cache:y,components:{Root:w=me,Item:_="div"}=pe,onScrollStop:f,onRangeChange:h,...u},m)=>{const v=o.useMemo(()=>ie(r),[r]),l=v.length,W=ae(f),[n,A,H,p]=le(()=>{const t=!!g,s=fe(Ie.flushSync,l,a,d,y,!1,!a);return[s,he(s,t),ge(s,t),t]});l!==n._getItemsLength()&&n._update(ce,[l]);const[V,L]=x(n,n._getRange,ye+M),T=x(n,n._getScrollDirection,_e),te=x(n,n._getJumpCount,ve),D=x(n,n._getCorrectedScrollSize,M,!0),N=o.useRef(null),k=T!==be;B(()=>{const t=N[E],s=A._observeRoot(t),b=H._initRoot(t);return()=>{s(),b()}},[]),B(()=>{const t=n._flushJump();t&&H._fixScrollJump(t)},[te]),o.useEffect(()=>{k||W[E]&&W[E]()},[k]),o.useEffect(()=>{h&&h(V,L)},[V,L]),o.useImperativeHandle(m,()=>({get cache(){return n._getCache()}}),[]);const O=xe(V,i,T),U=Ce(L,i,T,l),re=o.useMemo(()=>{const t=[];for(let s=O;s<=U;s++){const b=v[s],q=b.key;t.push(e(Se,{_resizer:A,_store:n,_index:s,_element:_,_children:b,_isHorizontal:p,_isRtl:!1},de(q)?q:"_"+s))}return t},[v,O,U]);return e(w,{ref:N,width:p?D:void 0,height:p?void 0:D,scrolling:k,attrs:o.useMemo(()=>({...u,style:{display:p?"inline-block":"block",width:p?"auto":"100%",height:p?"100%":"auto",...u.style}}),ue(u)),children:re})});try{c.displayName="WVList",c.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const ne=r=>{const i=[20,40,80,77];return Array.from({length:r}).map((a,d)=>e("div",{style:{height:i[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},Re=r=>Array.from({length:r}).map((i,a)=>z("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),ze={component:c},C={render:()=>e("div",{style:{padding:200},children:e(c,{style:{border:"solid 1px gray"},children:ne(1e3)})})},S={render:()=>e("div",{style:{padding:200},children:e(c,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Re(1e3)})})},I={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(c,{style:{margin:10},children:ne(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(c,{style:{margin:10},children:Array.from({length:1e3}).map((r,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},R={render:()=>{const r=(h,u=0)=>{const m=[20,40,80,77];return Array.from({length:h}).map((v,l)=>(l+=u,e("div",{style:{height:m[l%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l},l)))},[i,a]=o.useState(!1),d=async()=>{a(!0),await oe(1e3),a(!1)},g=100,[y,w]=o.useState(()=>r(g)),_=o.useRef(-1),f=y.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:z(c,{onRangeChange:async(h,u)=>{u+50>f&&_.current<f&&(_.current=f,await d(),w(m=>[...m,...r(g,m.length)]))},children:[y,i&&e(se,{})]})})}};var j,P,F;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(P=C.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var J,G,Y;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var K,Z,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,$,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=($=R.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const We=["Default","Horizontal","Complex","InfiniteScrolling"];export{I as Complex,C as Default,S as Horizontal,R as InfiniteScrolling,We as __namedExportsOrder,ze as default};
//# sourceMappingURL=WVList.stories-b02ece52.js.map
