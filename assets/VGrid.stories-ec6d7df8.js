import{j as t,a as h}from"./jsx-runtime-f8a6c6ea.js";import{r as a}from"./index-5284b0bf.js";import{u as p,a as E,r as ve,c as Ie,d as Y,f as $,m as Q,g as X,j as Se}from"./resizer-a7c3115e.js";import"./index-480187bb.js";const L=(r,e)=>`${r}-${e}`,Ve=a.memo(({_children:r,_resizer:e,_verticalStore:l,_horizontalStore:o,_rowIndex:m,_colIndex:s,_element:n,_isRtl:c})=>{const b=a.useRef(null),x=p(l,()=>l._getItemOffset(m),!0),I=p(o,()=>o._getItemOffset(s),!0),S=p(l,()=>l._isUnmeasuredItem(m),!0),V=p(o,()=>o._isUnmeasuredItem(s),!0),C=p(l,()=>l._getItemSize(m),!0),R=p(o,()=>o._getItemSize(s),!0);return E(()=>e._observeItem(b[ve],m,s),[s,m]),t(n,{ref:b,style:a.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:x,[c?"right":"left"]:I,visibility:S||V?"hidden":"visible",minHeight:C,minWidth:R}),[x,I,R,C,S,V]),children:r})}),Ce=a.forwardRef(({children:r,scrollWidth:e,scrollHeight:l,scrolling:o,attrs:m},s)=>t("div",{ref:s,...m,children:t("div",{style:a.useMemo(()=>({position:"relative",visibility:"hidden",width:e,height:l,pointerEvents:o?"none":"auto"}),[e,l,o]),children:r})})),Re=({_children:r,_ref:e,_vStore:l,_hStore:o,_element:m,_scrolling:s,_attrs:n})=>{const c=p(l,l._getScrollSize),b=p(o,o._getScrollSize);return t(m,{ref:e,scrollWidth:b,scrollHeight:c,scrolling:s,attrs:a.useMemo(()=>({...n,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...n.style}}),[n]),children:r})},y=a.forwardRef(({children:r,row:e,col:l,cellHeight:o=40,cellWidth:m=100,overscan:s=2,initialRowCount:n,initialColCount:c,rtl:b,element:x=Ce,cellElement:I="div",...S},V)=>{const[C,R]=a.useState(!1),[q,ye]=a.useState(!1),[g,f,D,w,_,be]=Ie(()=>{const d=!!b,i=()=>{},u=Y(e,o,n,!1,R,i),v=Y(l,m,c,!1,ye,i),W=Se(u,v);return[u,v,W,$(u,!1,d,()=>W._isJustResized()),$(v,!0,d,()=>W._isJustResized(!0)),d]});g._updateCacheLength(e),f._updateCacheLength(l);const[A,we]=p(g,g._getRange),[J,_e]=p(f,f._getRange),O=p(g,g._getJump),M=p(f,f._getJump),j=a.useRef(null);E(()=>{const d=j[ve],i=D._observeRoot(d),u=w._initRoot(d),v=_._initRoot(d);return()=>{i(),u(),v()}},[]),E(()=>{O.length&&w._fixScrollJump(O,A)},[O]),E(()=>{M.length&&_._fixScrollJump(M,J)},[M]),a.useImperativeHandle(V,()=>({get scrollOffset(){return[f._getScrollOffset(),g._getScrollOffset()]},get scrollSize(){return[_._getActualScrollSize(),w._getActualScrollSize()]},get viewportSize(){return[f._getViewportSize(),g._getViewportSize()]},scrollToIndex(d,i){_._scrollToIndex(d,l),w._scrollToIndex(i,e)},scrollTo(d,i){_._scrollTo(d),w._scrollTo(i)},scrollBy(d,i){_._scrollTo(f._getScrollOffset()+d),w._scrollTo(g._getScrollOffset()+i)}}),[e,l]);const P=a.useMemo(()=>{const d=new Map;return(i,u)=>{let v=d.get(L(i,u));return v||d.set(L(i,u),v=r({rowIndex:i,colIndex:u})),v}},[r]),B=Q(A-s,0),F=X(we+s,e-1),K=Q(J-s,0),U=X(_e+s,l-1),xe=a.useMemo(()=>{const d=[];for(let i=B;i<=F;i++)for(let u=K;u<=U;u++)d.push(t(Ve,{_resizer:D,_verticalStore:g,_horizontalStore:f,_rowIndex:i,_colIndex:u,_element:I,_children:P(i,u),_isRtl:be},L(i,u)));return d},[P,B,F,K,U]);return t(Re,{_ref:j,_vStore:g,_hStore:f,_element:x,_scrolling:C||q,_children:xe,_attrs:S})});try{y.displayName="VGrid",y.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const ze={component:y},G={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[r," / ",e]})})},T={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(r%2+1)*100},children:[r," / ",e]})})},k={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[h("div",{children:[r," / ",e]}),Array.from({length:r%8+1},()=>t("div",{children:"Hello world!"}))]})})},H={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(r%2+1)*100},children:[h("div",{children:[r," / ",e]}),t("div",{children:Array.from({length:e%4+1},()=>t("span",{children:"Hello world!"}))})]})})},z={render:()=>t(y,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:r,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[r," / ",e]})})},N={render:()=>{const[e,l]=a.useState([567,567]),[o,m]=a.useState([1e3,1e3]),s=a.useRef(null);return h("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[h("div",{children:[h("label",{children:["col",t("input",{type:"number",value:e[0],onChange:n=>{l(c=>[Number(n.target.value),c[1]])}})]}),h("label",{children:["row",t("input",{type:"number",value:e[1],onChange:n=>{l(c=>[c[0],Number(n.target.value)])}})]}),t("button",{onClick:()=>{var n;(n=s.current)==null||n.scrollToIndex(e[0],e[1])},children:"scroll to index"}),t("button",{onClick:()=>{l([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),t("div",{children:h("div",{children:[h("label",{children:["x",t("input",{type:"number",value:o[0],onChange:n=>{m(c=>[Number(n.target.value),c[1]])}})]}),h("label",{children:["y",t("input",{type:"number",value:o[1],onChange:n=>{m(c=>[c[0],Number(n.target.value)])}})]}),t("button",{onClick:()=>{var n;(n=s.current)==null||n.scrollTo(o[0],o[1])},children:"scroll to offset"}),t("button",{onClick:()=>{var n;(n=s.current)==null||n.scrollBy(o[0],o[1])},children:"scroll by offset"})]})}),t(y,{ref:s,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:c})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",c]})})]})}};var Z,ee,ne;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=G.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(te=T.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,se;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=z.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,ge,fe;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState<[number, number]>([567, 567]);
    const [scrollOffset, setScrollOffset] = useState<[number, number]>([1000, 1000]);
    const ref = useRef<VGridHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label>
            col
            <input type="number" value={scrollIndex[0]} onChange={e => {
            setScrollIndex(prev => [Number(e.target.value), prev[1]]);
          }} />
          </label>
          <label>
            row
            <input type="number" value={scrollIndex[1]} onChange={e => {
            setScrollIndex(prev => [prev[0], Number(e.target.value)]);
          }} />
          </label>
          <button onClick={() => {
          ref.current?.scrollToIndex(scrollIndex[0], scrollIndex[1]);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex([Math.round(LENGTH * Math.random()), Math.round(LENGTH * Math.random())]);
        }}>
            randomize
          </button>
        </div>
        <div>
          <div>
            <label>
              x
              <input type="number" value={scrollOffset[0]} onChange={e => {
              setScrollOffset(prev => [Number(e.target.value), prev[1]]);
            }} />
            </label>
            <label>
              y
              <input type="number" value={scrollOffset[1]} onChange={e => {
              setScrollOffset(prev => [prev[0], Number(e.target.value)]);
            }} />
            </label>
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
      }} row={LENGTH} col={LENGTH}>
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
}`,...(fe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const Ne=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{G as Default,k as DynamicHeight,H as DynamicWidth,T as Fixed,z as Rtl,N as ScrollTo,Ne as __namedExportsOrder,ze as default};
//# sourceMappingURL=VGrid.stories-ec6d7df8.js.map
