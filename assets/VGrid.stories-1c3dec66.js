import{j as s,a as y}from"./jsx-runtime-f8a6c6ea.js";import{r as a}from"./index-5284b0bf.js";import{u as c,a as z,r as me,b as we,c as Y,d as $,m as B,e as Q,f as be}from"./resizer-ba43f0ed.js";import"./index-847519d5.js";const M=(n,e)=>`${n}-${e}`,ve=a.memo(({_children:n,_resizer:e,_verticalStore:r,_horizontalStore:i,_rowIndex:u,_colIndex:o,_element:p,_isRtl:w})=>{const _=a.useRef(null),b=c(r._subscribe,()=>r._getItemOffset(u)),v=c(i._subscribe,()=>i._getItemOffset(o)),x=c(r._subscribe,()=>r._isUnmeasuredItem(u)),W=c(i._subscribe,()=>i._isUnmeasuredItem(o)),I=c(r._subscribe,()=>r._getItemSize(u)),V=c(i._subscribe,()=>i._getItemSize(o));return z(()=>e._observeItem(_[me],u,o),[o,u]),s(p,{ref:_,style:a.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:b,[w?"right":"left"]:v,visibility:x||W?"hidden":"visible",minHeight:I,minWidth:V}),[b,v,V,I,x,W]),children:n})}),xe=a.forwardRef(({children:n,scrollWidth:e,scrollHeight:r,scrolling:i,attrs:u},o)=>s("div",{ref:o,...u,children:s("div",{style:a.useMemo(()=>({position:"relative",visibility:"hidden",width:e,height:r,pointerEvents:i?"none":"auto"}),[e,r,i]),children:n})})),Ie=({_children:n,_ref:e,_vStore:r,_hStore:i,_element:u,_scrolling:o,_attrs:p})=>{const w=c(r._subscribe,r._getScrollSize),_=c(i._subscribe,i._getScrollSize);return s(u,{ref:e,scrollWidth:_,scrollHeight:w,scrolling:o,attrs:a.useMemo(()=>({...p,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...p.style}}),[p]),children:n})},m=a.forwardRef(({children:n,row:e,col:r,cellHeight:i=40,cellWidth:u=100,overscan:o=2,initialRowCount:p,initialColCount:w,rtl:_,element:b=xe,cellElement:v="div",...x},W)=>{const[I,V]=a.useState(!1),[D,pe]=a.useState(!1),[g,f,J,j,A,ge]=we(()=>{const d=!!_,l=()=>{},t=Y(e,i,p,V,l),h=Y(r,u,w,pe,l),q=be(t,h);return[t,h,q,$(t,!1,d,()=>q._isJustResized()),$(h,!0,d,()=>q._isJustResized(!0)),d]});g._updateCacheLength(e),f._updateCacheLength(r);const[P,fe]=c(g._subscribe,g._getRange),[T,ye]=c(f._subscribe,f._getRange),H=c(g._subscribe,g._getJump),E=c(f._subscribe,f._getJump),N=a.useRef(null);z(()=>{const d=N[me],l=J._observeRoot(d),t=j._initRoot(d),h=A._initRoot(d);return()=>{l(),t(),h()}},[]),z(()=>{H.length&&j._fixScrollJump(H,P)},[H]),z(()=>{E.length&&A._fixScrollJump(E,T)},[E]);const O=a.useMemo(()=>{const d=new Map;return(l,t)=>{let h=d.get(M(l,t));return h||d.set(M(l,t),h=n({rowIndex:l,colIndex:t})),h}},[n]),F=B(P-o,0),L=Q(fe+o,e-1),K=B(T-o,0),U=Q(ye+o,r-1),_e=a.useMemo(()=>{const d=[];for(let l=F;l<=L;l++)for(let t=K;t<=U;t++)d.push(s(ve,{_resizer:J,_verticalStore:g,_horizontalStore:f,_rowIndex:l,_colIndex:t,_element:v,_children:O(l,t),_isRtl:ge},M(l,t)));return d},[O,F,L,K,U]);return s(Ie,{_ref:N,_vStore:g,_hStore:f,_element:b,_scrolling:I||D,_children:_e,_attrs:x})});try{m.displayName="VGrid",m.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
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
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const Ge={component:m},R={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[n," / ",e]})})},S={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(n%2+1)*100},children:[n," / ",e]})})},C={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[y("div",{children:[n," / ",e]}),Array.from({length:n%8+1},()=>s("div",{children:"Hello world!"}))]})})},G={render:()=>s(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(n%2+1)*100},children:[y("div",{children:[n," / ",e]}),s("div",{children:Array.from({length:e%4+1},()=>s("span",{children:"Hello world!"}))})]})})},k={render:()=>s(m,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:n,colIndex:e})=>y("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[n," / ",e]})})};var X,Z,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(le=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,de,ae;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(de=G.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var ce,ue,he;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
//# sourceMappingURL=VGrid.stories-1c3dec66.js.map
