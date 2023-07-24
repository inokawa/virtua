import{j as e,a as T}from"./jsx-runtime-f8a6c6ea.js";import{r as a}from"./index-5284b0bf.js";import{S as ee}from"./components-a67887bf.js";import{f as ne,u as te,a as re,b as V,c as M,r as z,e as se,v as oe,W as ie,d as ae,j as le,k as de,m as ce,i as ue}from"./Window-2217e727.js";import{L as me}from"./ListItem-25b7751f.js";import"./index-480187bb.js";const u=({children:r,overscan:m=4,initialItemSize:s,initialItemCount:p,horizontal:y,element:_=ie,itemElement:S="div",onScrollStop:v,onRangeChange:l,...o})=>{const d=a.useMemo(()=>ne(r),[r]),g=d.length,f=te(v),[Q,X]=a.useState(!1),[i,L,k,h]=re(()=>{const n=!!y,t=ae(g,s,p,!1,c=>{X(c),c||f[z]&&f[z]()});return[t,le(t,n),de(t,n),n]});i._updateCacheLength(g);const[R,I]=V(i,i._getRange),Z=V(i,i._getJumpCount),E=V(i,i._getCorrectedScrollSize,!0),q=a.useRef(null);M(()=>{const n=q[z],t=L._observeRoot(n),c=k._initRoot(n);return()=>{t(),c()}},[]),M(()=>{const n=i._flushJump();n&&k._fixScrollJump(n)},[Z]),a.useEffect(()=>{l&&l({start:R,end:I,count:g})},[R,I]);const B=ce(R-m,0),H=ue(I+m,g-1),$=a.useMemo(()=>{const n=[];for(let t=B;t<=H;t++){const c=d[t];se(c)&&n.push(e(me,{_resizer:L,_store:i,_index:t,_element:S,_children:c,_isHorizontal:h,_isRtl:!1},c.key||t))}return n},[d,B,H]);return e(_,{ref:q,width:h?E:void 0,height:h?void 0:E,scrolling:Q,attrs:a.useMemo(()=>({...o,style:{overflow:"visible",display:h?"inline-block":"block",width:h?"auto":"100%",height:h?"100%":"auto",padding:0,margin:0,...o.style}}),oe(o)),children:$})};try{u.displayName="WVList",u.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const W=r=>{const m=[20,40,80,77];return Array.from({length:r}).map((s,p)=>e("div",{style:{height:m[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p))},pe=r=>Array.from({length:r}).map((m,s)=>T("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),xe={component:u},b={render:()=>e("div",{style:{padding:200},children:e(u,{style:{border:"solid 1px gray"},children:W(1e3)})})},x={render:()=>e("div",{style:{padding:200},children:e(u,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:pe(1e3)})})},C={render:()=>T("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(u,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(u,{style:{margin:10},children:W(1e3)})})]})},w={render:()=>{const r=(l,o=0)=>{const d=[20,40,80,77];return Array.from({length:l}).map((g,f)=>(f+=o,e("div",{style:{height:d[f%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:f},f)))},[m,s]=a.useState(!1),p=async()=>{s(!0),await new Promise(l=>setTimeout(l,1e3)),s(!1)},y=100,[_,S]=a.useState(()=>r(y)),v=a.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:T(u,{onRangeChange:async({end:l,count:o})=>{l+50>o&&v.current<o&&(v.current=o,await p(),S(d=>[...d,...r(y,d.length)]))},children:[_,e(ee,{show:m})]})})}};var N,j,A;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(j=b.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var O,F,P;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(F=x.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var U,D,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(D=C.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var K,Y,G;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const Ce=["Default","Horizontal","Complex","InfiniteScrolling"];export{C as Complex,b as Default,x as Horizontal,w as InfiniteScrolling,Ce as __namedExportsOrder,xe as default};
//# sourceMappingURL=WVList.stories-06a02a42.js.map
