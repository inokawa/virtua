import{j as l,a as u}from"./jsx-runtime-f8a6c6ea.js";import{r as h}from"./index-5284b0bf.js";import{u as p,a as O,r as pe,c as xe,D as Ie,d as F,j as Se,g as K,m as U,h as Y}from"./DefaultWindow-4ccdc226.js";import"./index-480187bb.js";const E=(t,e)=>`${t}-${e}`,Ce=h.memo(({_children:t,_resizer:e,_verticalStore:i,_horizontalStore:s,_rowIndex:m,_colIndex:d,_element:n,_isRtl:a})=>{const b=h.useRef(null),x=p(i,()=>i._getItemOffset(m),!0),I=p(s,()=>s._getItemOffset(d),!0),S=p(i,()=>i._isUnmeasuredItem(m),!0),C=p(s,()=>s._isUnmeasuredItem(d),!0),V=p(i,()=>i._getItemSize(m),!0),R=p(s,()=>s._getItemSize(d),!0);return O(()=>e._observeItem(b[pe],m,d),[d,m]),l(n,{ref:b,style:h.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:x,[a?"right":"left"]:I,visibility:S||C?"hidden":"visible",minHeight:V,minWidth:R}),[x,I,R,V,S,C]),children:t})}),Ve=({_children:t,_ref:e,_vStore:i,_hStore:s,_element:m,_scrolling:d,_attrs:n})=>{const a=p(i,i._getScrollSize),b=p(s,s._getScrollSize);return l(m,{ref:e,width:b,height:a,scrolling:d,attrs:h.useMemo(()=>({...n,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...n.style}}),[n]),children:t})},y=h.forwardRef(({children:t,row:e,col:i,cellHeight:s=40,cellWidth:m=100,overscan:d=2,initialRowCount:n,initialColCount:a,rtl:b,element:x=Ie,cellElement:I="div",...S},C)=>{const[V,R]=h.useState(!1),[M,ge]=h.useState(!1),[g,f,W,w,_,fe]=xe(()=>{const r=!!b,o=()=>{},c=F(e,s,n,!1,R,o),v=F(i,m,a,!1,ge,o);return[c,v,Se(c,v),K(c,!1,r),K(v,!0,r),r]});g._updateCacheLength(e),f._updateCacheLength(i);const[L,ve]=p(g,g._getRange),[q,ye]=p(f,f._getRange),be=p(g,g._getJumpCount),we=p(f,f._getJumpCount),D=h.useRef(null);O(()=>{const r=D[pe],o=W._observeRoot(r),c=w._initRoot(r),v=_._initRoot(r);return()=>{o(),c(),v()}},[]),O(()=>{const r=g._flushJump();r&&w._fixScrollJump(r,L)},[be]),O(()=>{const r=f._flushJump();r&&_._fixScrollJump(r,q)},[we]),h.useImperativeHandle(C,()=>({get scrollOffset(){return[f._getScrollOffset(),g._getScrollOffset()]},get scrollSize(){return[_._getActualScrollSize(),w._getActualScrollSize()]},get viewportSize(){return[f._getViewportSize(),g._getViewportSize()]},scrollToIndex(r,o){_._scrollToIndex(r,i),w._scrollToIndex(o,e)},scrollTo(r,o){_._scrollTo(r),w._scrollTo(o)},scrollBy(r,o){_._scrollTo(f._getScrollOffset()+r),w._scrollTo(g._getScrollOffset()+o)}}),[e,i]);const j=h.useMemo(()=>{const r=new Map;return(o,c)=>{let v=r.get(E(o,c));return v||r.set(E(o,c),v=t({rowIndex:o,colIndex:c})),v}},[t]),A=U(L-d,0),J=Y(ve+d,e-1),P=U(q-d,0),B=Y(ye+d,i-1),_e=h.useMemo(()=>{const r=[];for(let o=A;o<=J;o++)for(let c=P;c<=B;c++)r.push(l(Ce,{_resizer:W,_verticalStore:g,_horizontalStore:f,_rowIndex:o,_colIndex:c,_element:I,_children:j(o,c),_isRtl:fe},E(o,c)));return r},[j,A,J,P,B]);return l(Ve,{_ref:D,_vStore:g,_hStore:f,_element:x,_scrolling:V||M,_children:_e,_attrs:S})});try{y.displayName="VGrid",y.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const He={component:y},G={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},T={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},k={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>l("div",{children:"Hello world!"}))]})})},H={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[u("div",{children:[t," / ",e]}),l("div",{children:Array.from({length:e%4+1},()=>l("span",{children:"Hello world!"}))})]})})},z={render:()=>l(y,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},N={render:()=>{const[e,i]=h.useState([567,567]),[s,m]=h.useState([1e3,1e3]),d=h.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",l("input",{type:"number",value:e[0],onChange:n=>{i(a=>[Number(n.target.value),a[1]])}})]}),u("label",{children:["row",l("input",{type:"number",value:e[1],onChange:n=>{i(a=>[a[0],Number(n.target.value)])}})]}),l("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollToIndex(e[0],e[1])},children:"scroll to index"}),l("button",{onClick:()=>{i([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),l("div",{children:u("div",{children:[u("label",{children:["x",l("input",{type:"number",value:s[0],onChange:n=>{m(a=>[Number(n.target.value),a[1]])}})]}),u("label",{children:["y",l("input",{type:"number",value:s[1],onChange:n=>{m(a=>[a[0],Number(n.target.value)])}})]}),l("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollTo(s[0],s[1])},children:"scroll to offset"}),l("button",{onClick:()=>{var n;(n=d.current)==null||n.scrollBy(s[0],s[1])},children:"scroll by offset"})]})}),l(y,{ref:d,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:a})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",a]})})]})}};var $,Q,X;G.parameters={...G.parameters,docs:{...($=G.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=G.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(te=k.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,se;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=N.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const ze=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{G as Default,k as DynamicHeight,H as DynamicWidth,T as Fixed,z as Rtl,N as ScrollTo,ze as __namedExportsOrder,He as default};
//# sourceMappingURL=VGrid.stories-e3bfe0d2.js.map
