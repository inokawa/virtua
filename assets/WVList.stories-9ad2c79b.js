import{a as e,j as z}from"./jsx-runtime-e162df28.js";import{r as c}from"./index-5284b0bf.js";import{S as te}from"./components-10a25408.js";import{f as re,u as B,a as se,b as V,c as N,r as _,e as oe,D as ie,d as le,k as ae,l as de,m as ce,i as ue}from"./DefaultWindow-43a756a8.js";import{L as me}from"./ListItem-5bc2c3a5.js";import"./index-480187bb.js";const pe=({_children:n,_ref:i,_store:t,_element:l,_scrolling:y,_attrs:f,_isHorizontal:a})=>{const h=V(t,t._getCorrectedScrollSize);return e(l,{ref:i,width:a?h:void 0,height:a?void 0:h,scrolling:y,attrs:c.useMemo(()=>({...f,style:{overflow:"visible",display:a?"inline-block":"block",width:a?"auto":"100%",height:a?"100%":"auto",padding:0,margin:0,...f.style}}),[f]),children:n})},p=({children:n,overscan:i=4,initialItemSize:t,initialItemCount:l,horizontal:y,element:f=ie,itemElement:a="div",onScroll:h,onScrollStop:g,onRangeChange:u,...v})=>{const w=c.useMemo(()=>re(n),[n]),d=w.length,T=B(h),k=B(g),[Z,$]=c.useState(!1),[m,L,E,H]=se(()=>{const r=!!y,o=le(d,t,l,!1,s=>{$(s),s||k[_]&&k[_]()},s=>{T[_]&&T[_](s)});return[o,ae(o,r),de(o,r),r]});m._updateCacheLength(d);const[R,I]=V(m,m._getRange),ee=V(m,m._getJumpCount),q=c.useRef(null);N(()=>{const r=q[_],o=L._observeRoot(r),s=E._initRoot(r);return()=>{o(),s()}},[]),N(()=>{const r=m._flushJump();r&&E._fixScrollJump(r)},[ee]),c.useEffect(()=>{u&&u({start:R,end:I,count:d})},[R,I]);const M=ce(R-i,0),A=ue(I+i,d-1),ne=c.useMemo(()=>{const r=[];for(let o=M;o<=A;o++){const s=w[o];oe(s)&&r.push(e(me,{_resizer:L,_store:m,_index:o,_element:a,_children:s,_isHorizontal:H,_isRtl:!1},(s==null?void 0:s.key)||o))}return r},[w,M,A]);return e(pe,{_ref:q,_store:m,_element:f,_scrolling:Z,_children:ne,_attrs:v,_isHorizontal:H})};try{p.displayName="WVList",p.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
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
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const W=n=>{const i=[20,40,80,77];return Array.from({length:n}).map((t,l)=>e("div",{style:{height:i[l%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l},l))},fe=n=>Array.from({length:n}).map((i,t)=>z("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),be={component:p},b={render:()=>e("div",{style:{padding:200},children:e(p,{style:{border:"solid 1px gray"},children:W(1e3)})})},C={render:()=>e("div",{style:{padding:200},children:e(p,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:fe(1e3)})})},x={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(p,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(p,{style:{margin:10},children:W(1e3)})})]})},S={render:()=>{const n=(g,u=0)=>{const v=[20,40,80,77];return Array.from({length:g}).map((w,d)=>(d+=u,e("div",{style:{height:v[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d)))},[i,t]=c.useState(!1),l=async()=>{t(!0),await new Promise(g=>setTimeout(g,1e3)),t(!1)},y=100,[f,a]=c.useState(()=>n(y)),h=c.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:z(p,{onRangeChange:async({end:g,count:u})=>{g+50>u&&h.current<u&&(h.current=u,await l(),a(v=>[...v,...n(y,v.length)]))},children:[f,e(te,{show:i})]})})}};var D,O,P;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,F,U;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(F=C.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var J,K,Y;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var G,Q,X;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ce=["Default","Horizontal","Complex","InfiniteScrolling"];export{x as Complex,b as Default,C as Horizontal,S as InfiniteScrolling,Ce as __namedExportsOrder,be as default};
//# sourceMappingURL=WVList.stories-9ad2c79b.js.map
