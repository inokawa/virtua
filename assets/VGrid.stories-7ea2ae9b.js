import{j as t,a as u}from"./jsx-runtime-f8a6c6ea.js";import{r as h}from"./index-5284b0bf.js";import{u as p,a as O,r as ve,c as Ie,D as Se,d as Y,f as $,m as Q,g as X,j as Ve}from"./DefaultWindow-cd1b73f1.js";import"./index-480187bb.js";const L=(r,e)=>`${r}-${e}`,Ce=h.memo(({_children:r,_resizer:e,_verticalStore:o,_horizontalStore:s,_rowIndex:m,_colIndex:d,_element:n,_isRtl:a})=>{const b=h.useRef(null),x=p(o,()=>o._getItemOffset(m),!0),I=p(s,()=>s._getItemOffset(d),!0),S=p(o,()=>o._isUnmeasuredItem(m),!0),V=p(s,()=>s._isUnmeasuredItem(d),!0),C=p(o,()=>o._getItemSize(m),!0),R=p(s,()=>s._getItemSize(d),!0);return O(()=>e._observeItem(b[ve],m,d),[d,m]),t(n,{ref:b,style:h.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:x,[a?"right":"left"]:I,visibility:S||V?"hidden":"visible",minHeight:C,minWidth:R}),[x,I,R,C,S,V]),children:r})}),Re=({_children:r,_ref:e,_vStore:o,_hStore:s,_element:m,_scrolling:d,_attrs:n})=>{const a=p(o,o._getScrollSize),b=p(s,s._getScrollSize);return t(m,{ref:e,width:b,height:a,scrolling:d,attrs:h.useMemo(()=>({...n,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...n.style}}),[n]),children:r})},y=h.forwardRef(({children:r,row:e,col:o,cellHeight:s=40,cellWidth:m=100,overscan:d=2,initialRowCount:n,initialColCount:a,rtl:b,element:x=Se,cellElement:I="div",...S},V)=>{const[C,R]=h.useState(!1),[q,ye]=h.useState(!1),[g,f,D,w,_,be]=Ie(()=>{const i=!!b,l=()=>{},c=Y(e,s,n,!1,R,l),v=Y(o,m,a,!1,ye,l),W=Ve(c,v);return[c,v,W,$(c,!1,i,()=>W._isJustResized()),$(v,!0,i,()=>W._isJustResized(!0)),i]});g._updateCacheLength(e),f._updateCacheLength(o);const[A,we]=p(g,g._getRange),[J,_e]=p(f,f._getRange),E=p(g,g._getJump),M=p(f,f._getJump),j=h.useRef(null);O(()=>{const i=j[ve],l=D._observeRoot(i),c=w._initRoot(i),v=_._initRoot(i);return()=>{l(),c(),v()}},[]),O(()=>{E.length&&w._fixScrollJump(E,A)},[E]),O(()=>{M.length&&_._fixScrollJump(M,J)},[M]),h.useImperativeHandle(V,()=>({get scrollOffset(){return[f._getScrollOffset(),g._getScrollOffset()]},get scrollSize(){return[_._getActualScrollSize(),w._getActualScrollSize()]},get viewportSize(){return[f._getViewportSize(),g._getViewportSize()]},scrollToIndex(i,l){_._scrollToIndex(i,o),w._scrollToIndex(l,e)},scrollTo(i,l){_._scrollTo(i),w._scrollTo(l)},scrollBy(i,l){_._scrollTo(f._getScrollOffset()+i),w._scrollTo(g._getScrollOffset()+l)}}),[e,o]);const P=h.useMemo(()=>{const i=new Map;return(l,c)=>{let v=i.get(L(l,c));return v||i.set(L(l,c),v=r({rowIndex:l,colIndex:c})),v}},[r]),B=Q(A-d,0),F=X(we+d,e-1),K=Q(J-d,0),U=X(_e+d,o-1),xe=h.useMemo(()=>{const i=[];for(let l=B;l<=F;l++)for(let c=K;c<=U;c++)i.push(t(Ce,{_resizer:D,_verticalStore:g,_horizontalStore:f,_rowIndex:l,_colIndex:c,_element:I,_children:P(l,c),_isRtl:be},L(l,c)));return i},[P,B,F,K,U]);return t(Re,{_ref:j,_vStore:g,_hStore:f,_element:x,_scrolling:C||q,_children:xe,_attrs:S})});try{y.displayName="VGrid",y.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
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
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},cellElement:{defaultValue:null,description:`Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const He={component:y},G={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[r," / ",e]})})},T={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(r%2+1)*100},children:[r," / ",e]})})},k={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[r," / ",e]}),Array.from({length:r%8+1},()=>t("div",{children:"Hello world!"}))]})})},z={render:()=>t(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(r%2+1)*100},children:[u("div",{children:[r," / ",e]}),t("div",{children:Array.from({length:e%4+1},()=>t("span",{children:"Hello world!"}))})]})})},H={render:()=>t(y,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:r,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[r," / ",e]})})},N={render:()=>{const[e,o]=h.useState([567,567]),[s,m]=h.useState([1e3,1e3]),d=h.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",t("input",{type:"number",value:e[0],onChange:n=>{o(a=>[Number(n.target.value),a[1]])}})]}),u("label",{children:["row",t("input",{type:"number",value:e[1],onChange:n=>{o(a=>[a[0],Number(n.target.value)])}})]}),t("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollToIndex(e[0],e[1])},children:"scroll to index"}),t("button",{onClick:()=>{o([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),t("div",{children:u("div",{children:[u("label",{children:["x",t("input",{type:"number",value:s[0],onChange:n=>{m(a=>[Number(n.target.value),a[1]])}})]}),u("label",{children:["y",t("input",{type:"number",value:s[1],onChange:n=>{m(a=>[a[0],Number(n.target.value)])}})]}),t("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollTo(s[0],s[1])},children:"scroll to offset"}),t("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollBy(s[0],s[1])},children:"scroll by offset"})]})}),t(y,{ref:d,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:a})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",a]})})]})}};var Z,ee,ne;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=H.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,ge,fe;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const Ne=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{G as Default,k as DynamicHeight,z as DynamicWidth,T as Fixed,H as Rtl,N as ScrollTo,Ne as __namedExportsOrder,He as default};
//# sourceMappingURL=VGrid.stories-7ea2ae9b.js.map
