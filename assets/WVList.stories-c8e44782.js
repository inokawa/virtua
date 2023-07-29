import{j as e,a as W}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{S as ne}from"./components-951de649.js";import{f as te,u as re,a as se,b,c as M,r as z,e as ie,v as oe,W as ae,d as le,g as de,h as ce,m as ue,i as me}from"./Window-a2af8e74.js";import{L as pe}from"./ListItem-24126322.js";import"./index-eb008d06.js";const u=i.forwardRef(({children:r,overscan:o=4,initialItemSize:a,initialItemCount:m,horizontal:g,cache:S,element:R=ae,itemElement:y="div",onScrollStop:p,onRangeChange:l,...d},T)=>{const c=i.useMemo(()=>te(r),[r]),v=c.length,L=re(p),[n,E,H,f]=se(()=>{const t=!!g,s=le(v,a,m,!1,S);return[s,de(s,t),ce(s,t),t]});n._updateCacheLength(v);const[I,V]=b(n,n._getRange),k=b(n,n._getIsScrolling),$=b(n,n._getJumpCount),q=b(n,n._getCorrectedScrollSize,!0),A=i.useRef(null);M(()=>{const t=A[z],s=E._observeRoot(t),h=H._initRoot(t);return()=>{s(),h()}},[]),M(()=>{const t=n._flushJump();t&&H._fixScrollJump(t)},[$]),i.useEffect(()=>{k||L[z]&&L[z]()},[k]),i.useEffect(()=>{l&&l({start:I,end:V,count:v})},[I,V]),i.useImperativeHandle(T,()=>({get cache(){return n._getCache()}}),[]);const B=ue(I-o,0),N=me(V+o,v-1),ee=i.useMemo(()=>{const t=[];for(let s=B;s<=N;s++){const h=c[s];ie(h)&&t.push(e(pe,{_resizer:E,_store:n,_index:s,_element:y,_children:h,_isHorizontal:f,_isRtl:!1},h.key||s))}return t},[c,B,N]);return e(R,{ref:A,width:f?q:void 0,height:f?void 0:q,scrolling:k,attrs:i.useMemo(()=>({...d,style:{overflow:"visible",display:f?"inline-block":"block",width:f?"auto":"100%",height:f?"100%":"auto",padding:0,margin:0,...d.style}}),oe(d)),children:ee})});try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const Z=r=>{const o=[20,40,80,77];return Array.from({length:r}).map((a,m)=>e("div",{style:{height:o[m%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:m},m))},fe=r=>Array.from({length:r}).map((o,a)=>W("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),Ce={component:u},w={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:Z(1e3)})})},C={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:fe(1e3)})})},x={render:()=>W("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:Z(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(u,{style:{margin:10},children:Array.from({length:1e3}).map((r,o)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:o},o))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},_={render:()=>{const r=(p,l=0)=>{const d=[20,40,80,77];return Array.from({length:p}).map((T,c)=>(c+=l,e("div",{style:{height:d[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c)))},[o,a]=i.useState(!1),m=async()=>{a(!0),await new Promise(p=>setTimeout(p,1e3)),a(!1)},g=100,[S,R]=i.useState(()=>r(g)),y=i.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:W(u,{onRangeChange:async({end:p,count:l})=>{p+50>l&&y.current<l&&(y.current=l,await m(),R(d=>[...d,...r(g,d.length)]))},children:[S,e(ne,{show:o})]})})}};var O,j,F;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(j=w.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var P,U,D;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(U=C.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var J,Y,K;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var G,Q,X;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    return <div style={{
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async ({
        end,
        count
      }) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner show={fetching} />
        </WVList>
      </div>;
  }
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const xe=["Default","Horizontal","Complex","InfiniteScrolling"];export{x as Complex,w as Default,C as Horizontal,_ as InfiniteScrolling,xe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=WVList.stories-c8e44782.js.map
