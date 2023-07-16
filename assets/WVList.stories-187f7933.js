import{a as n,j as z}from"./jsx-runtime-e162df28.js";import{r as i}from"./index-5284b0bf.js";import{S as te}from"./components-10a25408.js";import{i as re,u as B,a as se,b as V,c as N,r as _,e as oe,D as ie,d as le,k as ae,l as de,m as ce,h as ue}from"./DefaultWindow-6f974fcd.js";import{L as me}from"./ListItem-44ccea4c.js";import"./index-480187bb.js";const pe=({_children:r,_ref:l,_store:s,_element:a,_scrolling:y,_attrs:f,_isHorizontal:d})=>{const h=V(s,s._getCorrectedScrollSize);return n(a,{ref:l,width:d?h:void 0,height:d?void 0:h,scrolling:y,attrs:i.useMemo(()=>({...f,style:{overflow:"visible",display:d?"inline-block":"block",width:d?"auto":"100%",height:d?"100%":"auto",padding:0,margin:0,...f.style}}),[f]),children:r})},p=({children:r,overscan:l=4,initialItemSize:s,initialItemCount:a,horizontal:y,element:f=ie,itemElement:d="div",onScroll:h,onScrollStop:g,onRangeChange:u,...v})=>{const w=i.useMemo(()=>{const e=[];return i.Children.forEach(r,t=>{re(t)||e.push(t)}),e},[r]),c=w.length,T=B(h),k=B(g),[Z,$]=i.useState(!1),[m,L,E,H]=se(()=>{const e=!!y,t=le(c,s,a,!1,o=>{$(o),o||k[_]&&k[_]()},o=>{T[_]&&T[_](o)});return[t,ae(t,e),de(t,e),e]});m._updateCacheLength(c);const[R,I]=V(m,m._getRange),ee=V(m,m._getJumpCount),q=i.useRef(null);N(()=>{const e=q[_],t=L._observeRoot(e),o=E._initRoot(e);return()=>{t(),o()}},[]),N(()=>{const e=m._flushJump();e&&E._fixScrollJump(e)},[ee]),i.useEffect(()=>{u&&u({start:R,end:I,count:c})},[R,I]);const M=ce(R-l,0),A=ue(I+l,c-1),ne=i.useMemo(()=>{const e=[];for(let t=M;t<=A;t++){const o=w[t];oe(o)&&e.push(n(me,{_resizer:L,_store:m,_index:t,_element:d,_children:o,_isHorizontal:H,_isRtl:!1},(o==null?void 0:o.key)||t))}return e},[w,M,A]);return n(pe,{_ref:q,_store:m,_element:f,_scrolling:Z,_children:ne,_attrs:v,_isHorizontal:H})};try{p.displayName="WVList",p.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
  ({ children, attrs, width, height, scrolling }, ref): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: width ?? "100%",
              height: height ?? "100%",
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [width, height, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
)`},description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const W=r=>{const l=[20,40,80,77];return Array.from({length:r}).map((s,a)=>n("div",{style:{height:l[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},fe=r=>Array.from({length:r}).map((l,s)=>z("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),xe={component:p},x={render:()=>n("div",{style:{padding:"200px 200px 800px 200px"},children:n(p,{style:{border:"solid 1px gray"},children:W(1e3)})})},b={render:()=>n("div",{style:{padding:200},children:n(p,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:fe(1e3)})})},C={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[n("div",{style:{flex:1,display:"flex",paddingTop:600},children:n(p,{style:{margin:10},children:W(1e3)})}),n("div",{style:{flex:3,paddingBottom:600},children:n(p,{style:{margin:10},children:W(1e3)})})]})},S={render:()=>{const r=(g,u=0)=>{const v=[20,40,80,77];return Array.from({length:g}).map((w,c)=>(c+=u,n("div",{style:{height:v[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c)))},[l,s]=i.useState(!1),a=async()=>{s(!0),await new Promise(g=>setTimeout(g,1e3)),s(!1)},y=100,[f,d]=i.useState(()=>r(y)),h=i.useRef(-1);return n("div",{style:{padding:"200px 200px 0px 200px"},children:z(p,{onRangeChange:async({end:g,count:u})=>{g+50>u&&h.current<u&&(h.current=u,await a(),d(v=>[...v,...r(y,v.length)]))},children:[f,n(te,{show:l})]})})}};var O,P,j;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: "200px 200px 800px 200px"
    }}>
        <WVList style={{
        border: "solid 1px gray"
      }}>
          {createRows(1000)}
        </WVList>
      </div>;
  }
}`,...(j=(P=x.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var D,F,U;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(F=b.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var J,K,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,Q,X;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const be=["Vertical","Horizontal","Complex","InfiniteScrolling"];export{C as Complex,b as Horizontal,S as InfiniteScrolling,x as Vertical,be as __namedExportsOrder,xe as default};
//# sourceMappingURL=WVList.stories-187f7933.js.map
