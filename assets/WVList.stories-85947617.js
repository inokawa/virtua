import{j as e,a as T}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as ne}from"./components-0dcd7504.js";import{f as te,u as re,a as se,b as _,c as M,r as W,e as oe,v as ie,W as ae,d as le,g as de,h as ce,m as ue,i as me}from"./Window-9f94ab1e.js";import{L as pe}from"./ListItem-404fc32d.js";import"./index-eb008d06.js";const d=o.forwardRef(({children:r,overscan:i=4,initialItemSize:a,initialItemCount:c,horizontal:y,cache:v,element:R=ae,itemElement:b="div",onScrollStop:h,onRangeChange:u,...m},p)=>{const x=o.useMemo(()=>te(r),[r]),l=x.length,L=re(h),[n,E,H,f]=se(()=>{const t=!!y,s=le(l,a,c,!1,v);return[s,de(s,t),ce(s,t),t]});n._updateCacheLength(l);const[V,k]=_(n,n._getRange),z=_(n,n._getIsScrolling),$=_(n,n._getJumpCount),q=_(n,n._getCorrectedScrollSize,!0),A=o.useRef(null);M(()=>{const t=A[W],s=E._observeRoot(t),g=H._initRoot(t);return()=>{s(),g()}},[]),M(()=>{const t=n._flushJump();t&&H._fixScrollJump(t)},[$]),o.useEffect(()=>{z||L[W]&&L[W]()},[z]),o.useEffect(()=>{u&&u(V,k)},[V,k]),o.useImperativeHandle(p,()=>({get cache(){return n._getCache()}}),[]);const B=ue(V-i,0),N=me(k+i,l-1),ee=o.useMemo(()=>{const t=[];for(let s=B;s<=N;s++){const g=x[s];oe(g)&&t.push(e(pe,{_resizer:E,_store:n,_index:s,_element:b,_children:g,_isHorizontal:f,_isRtl:!1},g.key||s))}return t},[x,B,N]);return e(R,{ref:A,width:f?q:void 0,height:f?void 0:q,scrolling:z,attrs:o.useMemo(()=>({...m,style:{overflow:"visible",display:f?"inline-block":"block",width:f?"auto":"100%",height:f?"100%":"auto",padding:0,margin:0,...m.style}}),ie(m)),children:ee})});try{d.displayName="WVList",d.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const Z=r=>{const i=[20,40,80,77];return Array.from({length:r}).map((a,c)=>e("div",{style:{height:i[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c))},fe=r=>Array.from({length:r}).map((i,a)=>T("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),_e={component:d},C={render:()=>e("div",{style:{padding:200},children:e(d,{style:{border:"solid 1px gray"},children:Z(1e3)})})},w={render:()=>e("div",{style:{padding:200},children:e(d,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:fe(1e3)})})},S={render:()=>T("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(d,{style:{margin:10},children:Z(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(d,{style:{margin:10},children:Array.from({length:1e3}).map((r,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},I={render:()=>{const r=(u,m=0)=>{const p=[20,40,80,77];return Array.from({length:u}).map((x,l)=>(l+=m,e("div",{style:{height:p[l%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l},l)))},[i,a]=o.useState(!1),c=async()=>{a(!0),await new Promise(u=>setTimeout(u,1e3)),a(!1)},y=100,[v,R]=o.useState(()=>r(y)),b=o.useRef(-1),h=v.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:T(d,{onRangeChange:async(u,m)=>{m+50>h&&b.current<h&&(b.current=h,await c(),R(p=>[...p,...r(y,p.length)]))},children:[v,i&&e(ne,{})]})})}};var O,j,F;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(j=C.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var P,U,D;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(U=w.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var J,Y,K;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var G,Q,X;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ce=["Default","Horizontal","Complex","InfiniteScrolling"];export{S as Complex,C as Default,w as Horizontal,I as InfiniteScrolling,Ce as __namedExportsOrder,_e as default};
//# sourceMappingURL=WVList.stories-85947617.js.map
