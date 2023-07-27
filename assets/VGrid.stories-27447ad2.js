import{j as o,a}from"./jsx-runtime-f8a6c6ea.js";import{r as u}from"./index-5284b0bf.js";import{b as f,c as O,r as he,a as Se,v as Ce,W as Ve,d as P,l as Ge,h as B,m as F,i as K}from"./Window-53de3cd8.js";import"./index-480187bb.js";const E=(t,e)=>`${t}-${e}`,Te=u.memo(({_children:t,_resizer:e,_vStore:c,_hStore:i,_rowIndex:g,_colIndex:s,_element:r,_isRtl:h})=>{const _=u.useRef(null),I=f(c,()=>c._getItemOffset(g),!0),S=f(i,()=>i._getItemOffset(s),!0),b=f(c,()=>c._isUnmeasuredItem(g),!0),C=f(i,()=>i._isUnmeasuredItem(s),!0),V=f(c,()=>c._getItemSize(g),!0),G=f(i,()=>i._getItemSize(s),!0);return O(()=>e._observeItem(_[he],g,s),[s,g]),o(r,{ref:_,style:u.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:I,[h?"right":"left"]:S,visibility:b||C?"hidden":"visible",minHeight:V,minWidth:G}),[I,S,G,V,b,C]),children:t})}),v=u.forwardRef(({children:t,row:e,col:c,cellHeight:i=40,cellWidth:g=100,overscan:s=2,initialRowCount:r,initialColCount:h,rtl:_,element:I=Ve,cellElement:S="div",...b},C)=>{const[V,G]=u.useState(!1),[M,me]=u.useState(!1),[m,p,W,y,w,pe]=Se(()=>{const n=!!_,l=P(e,i,r,!1,G),d=P(c,g,h,!1,me);return[l,d,Ge(l,d),B(l,!1,n),B(d,!0,n),n]});m._updateCacheLength(e),p._updateCacheLength(c);const[fe,ge]=f(m,m._getRange),[ve,be]=f(p,p._getRange),ye=f(m,m._getJumpCount),we=f(p,p._getJumpCount),xe=f(m,m._getCorrectedScrollSize,!0),_e=f(p,p._getCorrectedScrollSize,!0),L=u.useRef(null);O(()=>{const n=L[he],l=W._observeRoot(n),d=y._initRoot(n),x=w._initRoot(n);return()=>{l(),d(),x()}},[]),O(()=>{const n=m._flushJump();n&&y._fixScrollJump(n)},[ye]),O(()=>{const n=p._flushJump();n&&w._fixScrollJump(n)},[we]),u.useImperativeHandle(C,()=>({get scrollOffset(){return[p._getScrollOffset(),m._getScrollOffset()]},get scrollSize(){return[w._getActualScrollSize(),y._getActualScrollSize()]},get viewportSize(){return[p._getViewportSize(),m._getViewportSize()]},scrollToIndex(n,l){w._scrollToIndex(n),y._scrollToIndex(l)},scrollTo(n,l){w._scrollTo(n),y._scrollTo(l)},scrollBy(n,l){w._scrollTo(p._getScrollOffset()+n),y._scrollTo(m._getScrollOffset()+l)}}),[]);const q=u.useMemo(()=>{const n=new Map;return(l,d)=>{let x=n.get(E(l,d));return x||n.set(E(l,d),x=t({rowIndex:l,colIndex:d})),x}},[t]),j=F(fe-s,0),D=K(ge+s,e-1),J=F(ve-s,0),A=K(be+s,c-1),Ie=u.useMemo(()=>{const n=[];for(let l=j;l<=D;l++)for(let d=J;d<=A;d++)n.push(o(Te,{_resizer:W,_vStore:m,_hStore:p,_rowIndex:l,_colIndex:d,_element:S,_children:q(l,d),_isRtl:pe},E(l,d)));return n},[q,j,D,J,A]);return o(I,{ref:L,width:_e,height:xe,scrolling:V||M,attrs:u.useMemo(()=>({...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...b.style}}),Ce(b)),children:Ie})});try{v.displayName="VGrid",v.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},cellElement:{defaultValue:null,description:`Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const Ne={component:v},T={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},R={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},k={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[a("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>o("div",{children:"Hello world!"}))]})})},z={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[a("div",{children:[t," / ",e]}),o("div",{children:Array.from({length:e%4+1},()=>o("span",{children:"Hello world!"}))})]})})},H={render:()=>o(v,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},N={render:()=>{const[e,c]=u.useState([567,567]),[i,g]=u.useState([1e3,1e3]),s=u.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",o("input",{type:"number",value:e[0],onChange:r=>{c(h=>[Number(r.target.value),h[1]])}})]}),a("label",{children:["row",o("input",{type:"number",value:e[1],onChange:r=>{c(h=>[h[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=s.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),o("button",{onClick:()=>{c([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:a("div",{children:[a("label",{children:["x",o("input",{type:"number",value:i[0],onChange:r=>{g(h=>[Number(r.target.value),h[1]])}})]}),a("label",{children:["y",o("input",{type:"number",value:i[1],onChange:r=>{g(h=>[h[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=s.current)==null||r.scrollTo(i[0],i[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var r;(r=s.current)==null||r.scrollBy(i[0],i[1])},children:"scroll by offset"})]})}),o(v,{ref:s,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:h})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",h]})})]})}};var U,Y,$;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,X,Z;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,le,oe;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(le=z.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,se,de;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=H.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ae,ce,ue;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Oe=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{T as Default,k as DynamicHeight,z as DynamicWidth,R as Fixed,H as Rtl,N as ScrollTo,Oe as __namedExportsOrder,Ne as default};
//# sourceMappingURL=VGrid.stories-27447ad2.js.map
