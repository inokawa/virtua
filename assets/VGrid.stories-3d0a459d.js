import{j as t,a as g}from"./jsx-runtime-f8a6c6ea.js";import{r as u}from"./index-5284b0bf.js";import{u as p,a as N,r as ve,c as Ie,d as Y,f as $,m as Q,g as X,j as Se}from"./resizer-a7c3115e.js";import"./index-480187bb.js";const M=(n,e)=>`${n}-${e}`,Ce=u.memo(({_children:n,_resizer:e,_verticalStore:l,_horizontalStore:s,_rowIndex:d,_colIndex:a,_element:m,_isRtl:r})=>{const c=u.useRef(null),x=p(l,()=>l._getItemOffset(d),!0),I=p(s,()=>s._getItemOffset(a),!0),S=p(l,()=>l._isUnmeasuredItem(d),!0),C=p(s,()=>s._isUnmeasuredItem(a),!0),V=p(l,()=>l._getItemSize(d),!0),R=p(s,()=>s._getItemSize(a),!0);return N(()=>e._observeItem(c[ve],d,a),[a,d]),t(m,{ref:c,style:u.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:x,[r?"right":"left"]:I,visibility:S||C?"hidden":"visible",minHeight:V,minWidth:R}),[x,I,R,V,S,C]),children:n})}),Ve=u.forwardRef(({children:n,scrollWidth:e,scrollHeight:l,scrolling:s,attrs:d},a)=>t("div",{ref:a,...d,children:t("div",{style:u.useMemo(()=>({position:"relative",visibility:"hidden",width:e,height:l,pointerEvents:s?"none":"auto"}),[e,l,s]),children:n})})),Re=({_children:n,_ref:e,_vStore:l,_hStore:s,_element:d,_scrolling:a,_attrs:m})=>{const r=p(l,l._getScrollSize),c=p(s,s._getScrollSize);return t(d,{ref:e,scrollWidth:c,scrollHeight:r,scrolling:a,attrs:u.useMemo(()=>({...m,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...m.style}}),[m]),children:n})},_=u.forwardRef(({children:n,row:e,col:l,cellHeight:s=40,cellWidth:d=100,overscan:a=2,initialRowCount:m,initialColCount:r,rtl:c,element:x=Ve,cellElement:I="div",...S},C)=>{const[V,R]=u.useState(!1),[q,ye]=u.useState(!1),[f,v,D,b,w,_e]=Ie(()=>{const i=!!c,o=()=>{},h=Y(e,s,m,!1,R,o),y=Y(l,d,r,!1,ye,o),L=Se(h,y);return[h,y,L,$(h,!1,i,()=>L._isJustResized()),$(y,!0,i,()=>L._isJustResized(!0)),i]});f._updateCacheLength(e),v._updateCacheLength(l);const[A,be]=p(f,f._getRange),[J,we]=p(v,v._getRange),W=p(f,f._getJump),E=p(v,v._getJump),j=u.useRef(null);N(()=>{const i=j[ve],o=D._observeRoot(i),h=b._initRoot(i),y=w._initRoot(i);return()=>{o(),h(),y()}},[]),N(()=>{W.length&&b._fixScrollJump(W,A)},[W]),N(()=>{E.length&&w._fixScrollJump(E,J)},[E]),u.useImperativeHandle(C,()=>({get scrollOffset(){return[v._getScrollOffset(),f._getScrollOffset()]},get scrollSize(){return[w._getActualScrollSize(),b._getActualScrollSize()]},get viewportSize(){return[v._getViewportSize(),f._getViewportSize()]},scrollToIndex(i,o){w._scrollToIndex(i,l),b._scrollToIndex(o,e)},scrollTo(i,o){w._scrollTo(i),b._scrollTo(o)},scrollBy(i,o){w._scrollTo(v._getScrollOffset()+i),b._scrollTo(f._getScrollOffset()+o)}}),[e,l]);const P=u.useMemo(()=>{const i=new Map;return(o,h)=>{let y=i.get(M(o,h));return y||i.set(M(o,h),y=n({rowIndex:o,colIndex:h})),y}},[n]),B=Q(A-a,0),F=X(be+a,e-1),K=Q(J-a,0),U=X(we+a,l-1),xe=u.useMemo(()=>{const i=[];for(let o=B;o<=F;o++)for(let h=K;h<=U;h++)i.push(t(Ce,{_resizer:D,_verticalStore:f,_horizontalStore:v,_rowIndex:o,_colIndex:h,_element:I,_children:P(o,h),_isRtl:_e},M(o,h)));return i},[P,B,F,K,U]);return t(Re,{_ref:j,_vStore:f,_hStore:v,_element:x,_scrolling:V||q,_children:xe,_attrs:S})});try{_.displayName="VGrid",_.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:`forwardRef<any, CustomGridWindowComponentProps>(
  (
    { children, scrollWidth, scrollHeight, scrolling, attrs },
    ref
  ): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: scrollWidth,
              height: scrollHeight,
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [scrollWidth, scrollHeight, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
)`},description:`Customized element type for scrollable element. This element will get {@link CustomGridWindowComponentProps} as props.
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomGridWindowComponentProps & RefAttributes<any>>"}},cellElement:{defaultValue:null,description:`Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const ke={component:_},G={render:()=>t(_,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[n," / ",e]})})},O={render:()=>t(_,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(n%2+1)*100},children:[n," / ",e]})})},T={render:()=>t(_,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[g("div",{children:[n," / ",e]}),Array.from({length:n%8+1},()=>t("div",{children:"Hello world!"}))]})})},H={render:()=>t(_,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(n%2+1)*100},children:[g("div",{children:[n," / ",e]}),t("div",{children:Array.from({length:e%4+1},()=>t("span",{children:"Hello world!"}))})]})})},k={render:()=>t(_,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:n,colIndex:e})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[n," / ",e]})})},z={render:()=>{const[l,s]=u.useState([567,567]),[d,a]=u.useState([1e3,1e3]),m=u.useRef(null);return g("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[g("div",{children:[t("input",{type:"number",value:l[0],onChange:r=>{s(c=>[Number(r.target.value),c[1]])}}),t("input",{type:"number",value:l[1],onChange:r=>{s(c=>[c[0],Number(r.target.value)])}}),t("button",{onClick:()=>{var r;(r=m.current)==null||r.scrollToIndex(l[0],l[1])},children:"scroll to index"}),t("button",{onClick:()=>{s([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),t("div",{children:g("div",{children:[t("input",{type:"number",value:d[0],onChange:r=>{a(c=>[Number(r.target.value),c[1]])}}),t("input",{type:"number",value:d[1],onChange:r=>{a(c=>[c[0],Number(r.target.value)])}}),t("button",{onClick:()=>{var r;(r=m.current)==null||r.scrollTo(d[0],d[1])},children:"scroll to offset"}),t("button",{onClick:()=>{var r;(r=m.current)==null||r.scrollBy(d[0],d[1])},children:"scroll by offset"})]})}),t(_,{ref:m,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:c})=>g("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",c]})})]})}};var Z,ee,ne;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...(ne=(ee=G.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100,
        height: (rowIndex % 2 + 1) * 100
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...(le=(te=O.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,se;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            {Array.from({
          length: rowIndex % 8 + 1
        }, () => <div>Hello world!</div>)}
          </div>}
      </VGrid>;
  }
}`,...(se=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4,
        height: (rowIndex % 2 + 1) * 100
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>
            <div>
              {Array.from({
            length: colIndex % 4 + 1
          }, () => <span>Hello world!</span>)}
            </div>
          </div>}
      </VGrid>;
  }
}`,...(ce=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh",
      direction: "rtl"
    }} row={1000} col={500} rtl>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4,
        width: 100
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...(me=(he=k.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,ge,fe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const ROW_LENGTH = 1000;
    const COL_LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState<[number, number]>([567, 567]);
    const [scrollOffset, setScrollOffset] = useState<[number, number]>([1000, 1000]);
    const ref = useRef<VGridHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <input type="number" value={scrollIndex[0]} onChange={e => {
          setScrollIndex(prev => [Number(e.target.value), prev[1]]);
        }} />
          <input type="number" value={scrollIndex[1]} onChange={e => {
          setScrollIndex(prev => [prev[0], Number(e.target.value)]);
        }} />
          <button onClick={() => {
          ref.current?.scrollToIndex(scrollIndex[0], scrollIndex[1]);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex([Math.round(COL_LENGTH * Math.random()), Math.round(ROW_LENGTH * Math.random())]);
        }}>
            randomize
          </button>
        </div>
        <div>
          <div>
            <input type="number" value={scrollOffset[0]} onChange={e => {
            setScrollOffset(prev => [Number(e.target.value), prev[1]]);
          }} />
            <input type="number" value={scrollOffset[1]} onChange={e => {
            setScrollOffset(prev => [prev[0], Number(e.target.value)]);
          }} />
            <button onClick={() => {
            ref.current?.scrollTo(scrollOffset[0], scrollOffset[1]);
          }}>
              scroll to offset
            </button>
            <button onClick={() => {
            ref.current?.scrollBy(scrollOffset[0], scrollOffset[1]);
          }}>
              scroll by offset
            </button>
          </div>
        </div>
        <VGrid ref={ref} style={{
        height: "100vh"
      }} row={ROW_LENGTH} col={COL_LENGTH}>
          {({
          rowIndex,
          colIndex
        }) => <div style={{
          border: "solid 1px gray",
          background: "white",
          padding: 4,
          width: 160,
          height: 80
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...(fe=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const ze=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{G as Default,T as DynamicHeight,H as DynamicWidth,O as Fixed,k as Rtl,z as ScrollTo,ze as __namedExportsOrder,ke as default};
//# sourceMappingURL=VGrid.stories-3d0a459d.js.map
