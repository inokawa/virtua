import{j as s,a as _}from"./jsx-runtime-c3d7f245.js";import{r as a}from"./index-c6dae603.js";import{u as c,a as z,r as ue,b as ye,c as K,d as U,m as Y,e as $,f as _e}from"./resizer-feb52721.js";import"./index-778f7dbf.js";const E=(n,e)=>`${n}-${e}`,we=a.memo(({_children:n,_resizer:e,_verticalStore:r,_horizontalStore:o,_rowIndex:u,_colIndex:l,_element:p})=>{const w=a.useRef(null),g=c(r._subscribe,()=>r._getItemOffset(u)),b=c(o._subscribe,()=>o._getItemOffset(l)),v=c(r._subscribe,()=>r._isUnmeasuredItem(u)),x=c(o._subscribe,()=>o._isUnmeasuredItem(l)),k=c(r._subscribe,()=>r._getItemSize(u)),I=c(o._subscribe,()=>o._getItemSize(l));return z(()=>e._observeItem(w[ue],u,l),[l,u]),s(p,{ref:w,style:a.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:g,[r._isRtl()?"right":"left"]:b,visibility:v||x?"hidden":"visible",minHeight:k,minWidth:I}),[g,b,I,k,v,x]),children:n})}),be=a.forwardRef(({children:n,scrollWidth:e,scrollHeight:r,scrolling:o,attrs:u},l)=>s("div",{ref:l,...u,children:s("div",{style:a.useMemo(()=>({position:"relative",visibility:"hidden",width:e,height:r,pointerEvents:o?"none":"auto"}),[e,r,o]),children:n})})),ve=({_children:n,_ref:e,_vStore:r,_hStore:o,_element:u,_scrolling:l,_attrs:p})=>{const w=c(r._subscribe,r._getScrollSize),g=c(o._subscribe,o._getScrollSize);return s(u,{ref:e,scrollWidth:g,scrollHeight:w,scrolling:l,attrs:a.useMemo(()=>({...p,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...p.style}}),[p]),children:n})},m=a.forwardRef(({children:n,row:e,col:r,cellHeight:o=40,cellWidth:u=100,overscan:l=2,initialRowCount:p,initialColCount:w,rtl:g,element:b=be,cellElement:v="div",...x},k)=>{const[I,q]=a.useState(!1),[he,me]=a.useState(!1),[f,y,M,D,J]=ye(()=>{const d=()=>{},t=K(e,o,!1,!!g,p,q,d),i=K(r,u,!0,!!g,w,me,d),h=_e(t,i);return[t,i,h,U(t,()=>h._isJustResized()),U(i,()=>h._isJustResized(!0))]});f._updateCacheLength(e),y._updateCacheLength(r);const[j,pe]=c(f._subscribe,f._getRange),[A,ge]=c(y._subscribe,y._getRange),W=c(f._subscribe,f._getJump),H=c(y._subscribe,y._getJump),T=a.useRef(null);z(()=>{const d=T[ue],t=M._observeRoot(d),i=D._initRoot(d),h=J._initRoot(d);return()=>{t(),i(),h()}},[]),z(()=>{W.length&&D._fixScrollJump(W,j)},[W]),z(()=>{H.length&&J._fixScrollJump(H,A)},[H]);const P=a.useMemo(()=>{const d=new Map;return(t,i)=>{let h=d.get(E(t,i));return h||d.set(E(t,i),h=n({rowIndex:t,colIndex:i})),h}},[n]),N=Y(j-l,0),O=$(pe+l,e-1),F=Y(A-l,0),L=$(ge+l,r-1),fe=a.useMemo(()=>{const d=[];for(let t=N;t<=O;t++)for(let i=F;i<=L;i++)d.push(s(we,{_resizer:M,_verticalStore:f,_horizontalStore:y,_rowIndex:t,_colIndex:i,_element:v,_children:P(t,i)},E(t,i)));return d},[P,N,O,F,L]);return s(ve,{_ref:T,_vStore:f,_hStore:y,_element:b,_scrolling:I||he,_children:fe,_attrs:x})});try{m.displayName="VGrid",m.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const Ce={component:m},V={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>_("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[n," / ",e]})})},S={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>_("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(n%2+1)*100},children:[n," / ",e]})})},C={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>_("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[_("div",{children:[n," / ",e]}),Array.from({length:n%8+1},()=>s("div",{children:"Hello world!"}))]})})},R={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>_("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(n%2+1)*100},children:[_("div",{children:[n," / ",e]}),s("div",{children:Array.from({length:e%4+1},()=>s("span",{children:"Hello world!"}))})]})})},G={render:()=>s(m,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:n,colIndex:e})=>_("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[n," / ",e]})})};var B,Q,X;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(X=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,le,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,ae,ce;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=G.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};const Re=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl"];export{V as Default,C as DynamicHeight,R as DynamicWidth,S as Fixed,G as Rtl,Re as __namedExportsOrder,Ce as default};
//# sourceMappingURL=VGrid.stories-310e6afe.js.map
