import{j as d,a as y}from"./jsx-runtime-f8a6c6ea.js";import{r as a}from"./index-5284b0bf.js";import{u as c,a as z,r as me,c as ve,d as Y,f as $,m as B,g as Q,j as _e}from"./resizer-a7c3115e.js";import"./index-480187bb.js";const M=(n,e)=>`${n}-${e}`,be=a.memo(({_children:n,_resizer:e,_verticalStore:r,_horizontalStore:i,_rowIndex:u,_colIndex:o,_element:p,_isRtl:v})=>{const w=a.useRef(null),_=c(r,()=>r._getItemOffset(u),!0),b=c(i,()=>i._getItemOffset(o),!0),x=c(r,()=>r._isUnmeasuredItem(u),!0),W=c(i,()=>i._isUnmeasuredItem(o),!0),I=c(r,()=>r._getItemSize(u),!0),V=c(i,()=>i._getItemSize(o),!0);return z(()=>e._observeItem(w[me],u,o),[o,u]),d(p,{ref:w,style:a.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:_,[v?"right":"left"]:b,visibility:x||W?"hidden":"visible",minHeight:I,minWidth:V}),[_,b,V,I,x,W]),children:n})}),xe=a.forwardRef(({children:n,scrollWidth:e,scrollHeight:r,scrolling:i,attrs:u},o)=>d("div",{ref:o,...u,children:d("div",{style:a.useMemo(()=>({position:"relative",visibility:"hidden",width:e,height:r,pointerEvents:i?"none":"auto"}),[e,r,i]),children:n})})),Ie=({_children:n,_ref:e,_vStore:r,_hStore:i,_element:u,_scrolling:o,_attrs:p})=>{const v=c(r,r._getScrollSize),w=c(i,i._getScrollSize);return d(u,{ref:e,scrollWidth:w,scrollHeight:v,scrolling:o,attrs:a.useMemo(()=>({...p,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...p.style}}),[p]),children:n})},m=a.forwardRef(({children:n,row:e,col:r,cellHeight:i=40,cellWidth:u=100,overscan:o=2,initialRowCount:p,initialColCount:v,rtl:w,element:_=xe,cellElement:b="div",...x},W)=>{const[I,V]=a.useState(!1),[D,pe]=a.useState(!1),[g,f,J,j,A,ge]=ve(()=>{const s=!!w,l=()=>{},t=Y(e,i,p,!1,V,l),h=Y(r,u,v,!1,pe,l),E=_e(t,h);return[t,h,E,$(t,!1,s,()=>E._isJustResized()),$(h,!0,s,()=>E._isJustResized(!0)),s]});g._updateCacheLength(e),f._updateCacheLength(r);const[P,fe]=c(g,g._getRange),[T,ye]=c(f,f._getRange),H=c(g,g._getJump),q=c(f,f._getJump),N=a.useRef(null);z(()=>{const s=N[me],l=J._observeRoot(s),t=j._initRoot(s),h=A._initRoot(s);return()=>{l(),t(),h()}},[]),z(()=>{H.length&&j._fixScrollJump(H,P)},[H]),z(()=>{q.length&&A._fixScrollJump(q,T)},[q]);const O=a.useMemo(()=>{const s=new Map;return(l,t)=>{let h=s.get(M(l,t));return h||s.set(M(l,t),h=n({rowIndex:l,colIndex:t})),h}},[n]),F=B(P-o,0),L=Q(fe+o,e-1),K=B(T-o,0),U=Q(ye+o,r-1),we=a.useMemo(()=>{const s=[];for(let l=F;l<=L;l++)for(let t=K;t<=U;t++)s.push(d(be,{_resizer:J,_verticalStore:g,_horizontalStore:f,_rowIndex:l,_colIndex:t,_element:b,_children:O(l,t),_isRtl:ge},M(l,t)));return s},[O,F,L,K,U]);return d(Ie,{_ref:N,_vStore:g,_hStore:f,_element:_,_scrolling:I||D,_children:we,_attrs:x})});try{m.displayName="VGrid",m.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const Ge={component:m},R={render:()=>d(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[n," / ",e]})})},S={render:()=>d(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(n%2+1)*100},children:[n," / ",e]})})},C={render:()=>d(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[y("div",{children:[n," / ",e]}),Array.from({length:n%8+1},()=>d("div",{children:"Hello world!"}))]})})},G={render:()=>d(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(n%2+1)*100},children:[y("div",{children:[n," / ",e]}),d("div",{children:Array.from({length:e%4+1},()=>d("span",{children:"Hello world!"}))})]})})},k={render:()=>d(m,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[n," / ",e]})})};var X,Z,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,oe,le;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,se,ae;G.parameters={...G.parameters,docs:{...(de=G.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ae=(se=G.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,ue,he;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const ke=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl"];export{R as Default,C as DynamicHeight,G as DynamicWidth,S as Fixed,k as Rtl,ke as __namedExportsOrder,Ge as default};
//# sourceMappingURL=VGrid.stories-1156dc18.js.map
