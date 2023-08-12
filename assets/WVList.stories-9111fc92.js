import{j as e,a as z}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as te}from"./components-0dcd7504.js";import{f as re,u as se,a as oe,b as C,c as M,r as k,e as ie,v as ae,V as le,d as ce,g as de,h as ue,i as me,S as pe,j as fe,k as he,l as ge,m as ye,n as ve}from"./Viewport-61f456bf.js";import{L as _e}from"./ListItem-ab9501d6.js";import"./index-eb008d06.js";const c=o.forwardRef(({children:r,overscan:i=4,initialItemSize:a,initialItemCount:d,horizontal:g,cache:y,components:{Root:R=le,Item:v="div"}=ce,onScrollStop:h,onRangeChange:u,...m},p)=>{const _=o.useMemo(()=>re(r),[r]),l=_.length,E=se(h),[n,W,H,f]=oe(()=>{const t=!!g,s=de(l,a,d,y,!1,!a);return[s,ue(s,t),me(s,t),t]});n._updateCacheLength(l);const[V,L]=C(n,n._getRange,pe),T=C(n,n._getIsScrolling,fe),ee=C(n,n._getJumpCount,he),N=C(n,n._getCorrectedScrollSize,ge,!0),A=o.useRef(null);M(()=>{const t=A[k],s=W._observeRoot(t),b=H._initRoot(t);return()=>{s(),b()}},[]),M(()=>{const t=n._flushJump();t&&H._fixScrollJump(t)},[ee]),o.useEffect(()=>{T||E[k]&&E[k]()},[T]),o.useEffect(()=>{u&&u(V,L)},[V,L]),o.useImperativeHandle(p,()=>({get cache(){return n._getCache()}}),[]);const O=ye(V-i,0),q=ve(L+i,l-1),ne=o.useMemo(()=>{const t=[];for(let s=O;s<=q;s++){const b=_[s],B=b.key;t.push(e(_e,{_resizer:W,_store:n,_index:s,_element:v,_children:b,_isHorizontal:f,_isRtl:!1},ie(B)?B:"_"+s))}return t},[_,O,q]);return e(R,{ref:A,width:f?N:void 0,height:f?void 0:N,scrolling:T,attrs:o.useMemo(()=>({...m,style:{overflow:"visible",display:f?"inline-block":"block",width:f?"auto":"100%",height:f?"100%":"auto",padding:0,margin:0,...m.style}}),ae(m)),children:ne})});try{c.displayName="WVList",c.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const $=r=>{const i=[20,40,80,77];return Array.from({length:r}).map((a,d)=>e("div",{style:{height:i[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},be=r=>Array.from({length:r}).map((i,a)=>z("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),Ve={component:c},x={render:()=>e("div",{style:{padding:200},children:e(c,{style:{border:"solid 1px gray"},children:$(1e3)})})},S={render:()=>e("div",{style:{padding:200},children:e(c,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:be(1e3)})})},w={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(c,{style:{margin:10},children:$(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(c,{style:{margin:10},children:Array.from({length:1e3}).map((r,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},I={render:()=>{const r=(u,m=0)=>{const p=[20,40,80,77];return Array.from({length:u}).map((_,l)=>(l+=m,e("div",{style:{height:p[l%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l},l)))},[i,a]=o.useState(!1),d=async()=>{a(!0),await new Promise(u=>setTimeout(u,1e3)),a(!1)},g=100,[y,R]=o.useState(()=>r(g)),v=o.useRef(-1),h=y.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:z(c,{onRangeChange:async(u,m)=>{m+50>h&&v.current<h&&(v.current=h,await d(),R(p=>[...p,...r(g,p.length)]))},children:[y,i&&e(te,{})]})})}};var j,U,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(U=x.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var D,J,P;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(J=S.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var G,Y,K;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var Z,Q,X;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
      await new Promise(r => setTimeout(r, 1000));
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
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Le=["Default","Horizontal","Complex","InfiniteScrolling"];export{w as Complex,x as Default,S as Horizontal,I as InfiniteScrolling,Le as __namedExportsOrder,Ve as default};
//# sourceMappingURL=WVList.stories-9111fc92.js.map
