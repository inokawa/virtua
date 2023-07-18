import{a as e,j as T}from"./jsx-runtime-e162df28.js";import{r as l}from"./index-5284b0bf.js";import{S as re}from"./components-10a25408.js";import{f as se,u as A,a as oe,b as z,c as O,r as g,e as ie,v as ae,W as le,d as ce,k as de,l as ue,m as me,i as pe}from"./Window-13b438fe.js";import{L as fe}from"./ListItem-ad3cfd28.js";import"./index-480187bb.js";const u=({children:s,overscan:m=4,initialItemSize:o,initialItemCount:p,horizontal:y,element:S=le,itemElement:R="div",onScroll:v,onScrollStop:f,onRangeChange:c,...d})=>{const b=l.useMemo(()=>se(s),[s]),i=b.length,k=A(v),L=A(f),[$,ee]=l.useState(!1),[a,E,q,h]=oe(()=>{const n=!!y,r=ce(i,o,p,!1,t=>{ee(t),t||L[g]&&L[g]()},t=>{k[g]&&k[g](t)});return[r,de(r,n),ue(r,n),n]});a._updateCacheLength(i);const[I,V]=z(a,a._getRange),ne=z(a,a._getJumpCount),B=z(a,a._getCorrectedScrollSize,!0),H=l.useRef(null);O(()=>{const n=H[g],r=E._observeRoot(n),t=q._initRoot(n);return()=>{r(),t()}},[]),O(()=>{const n=a._flushJump();n&&q._fixScrollJump(n)},[ne]),l.useEffect(()=>{c&&c({start:I,end:V,count:i})},[I,V]);const M=me(I-m,0),N=pe(V+m,i-1),te=l.useMemo(()=>{const n=[];for(let r=M;r<=N;r++){const t=b[r];ie(t)&&n.push(e(fe,{_resizer:E,_store:a,_index:r,_element:R,_children:t,_isHorizontal:h,_isRtl:!1},(t==null?void 0:t.key)||r))}return n},[b,M,N]);return e(S,{ref:H,width:h?B:void 0,height:h?void 0:B,scrolling:$,attrs:l.useMemo(()=>({...d,style:{overflow:"visible",display:h?"inline-block":"block",width:h?"auto":"100%",height:h?"100%":"auto",padding:0,margin:0,...d.style}}),ae(d)),children:te})};try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const W=s=>{const m=[20,40,80,77];return Array.from({length:s}).map((o,p)=>e("div",{style:{height:m[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p))},he=s=>Array.from({length:s}).map((m,o)=>T("div",{style:{width:o%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",o]},o)),xe={component:u},C={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:W(1e3)})})},w={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:he(1e3)})})},x={render:()=>T("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(u,{style:{margin:10},children:W(1e3)})})]})},_={render:()=>{const s=(f,c=0)=>{const d=[20,40,80,77];return Array.from({length:f}).map((b,i)=>(i+=c,e("div",{style:{height:d[i%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:i},i)))},[m,o]=l.useState(!1),p=async()=>{o(!0),await new Promise(f=>setTimeout(f,1e3)),o(!1)},y=100,[S,R]=l.useState(()=>s(y)),v=l.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:T(u,{onRangeChange:async({end:f,count:c})=>{f+50>c&&v.current<c&&(v.current=c,await p(),R(d=>[...d,...s(y,d.length)]))},children:[S,e(re,{show:m})]})})}};var j,F,P;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(F=C.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var U,D,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(D=w.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var K,Y,G;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
            {createRows(1000)}
          </WVList>
        </div>
      </div>;
  }
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,X,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const _e=["Default","Horizontal","Complex","InfiniteScrolling"];export{x as Complex,C as Default,w as Horizontal,_ as InfiniteScrolling,_e as __namedExportsOrder,xe as default};
//# sourceMappingURL=WVList.stories-c0ab3c40.js.map
