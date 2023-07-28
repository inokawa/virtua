import{j as o,a as u}from"./jsx-runtime-c3d7f245.js";import{r as g}from"./index-c6dae603.js";import{b as m,c as H,r as ae,a as _e,v as Ie,W as Se,d as D,j as Ce,k as J,m as A,i as P}from"./Window-6d7940bf.js";import"./index-eb008d06.js";const O=(t,e)=>`${t}-${e}`,Ve=g.memo(({_children:t,_resizer:e,_vStore:h,_hStore:d,_rowIndex:f,_colIndex:a,_element:r,_isRtl:p})=>{const _=g.useRef(null),I=m(h,()=>h._getItemOffset(f),!0),S=m(d,()=>d._getItemOffset(a),!0),b=m(h,()=>h._isUnmeasuredItem(f),!0),C=m(d,()=>d._isUnmeasuredItem(a),!0),i=m(h,()=>h._getItemSize(f),!0),s=m(d,()=>d._getItemSize(a),!0);return H(()=>e._observeItem(_[ae],f,a),[a,f]),o(r,{ref:_,style:g.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:I,[p?"right":"left"]:S,visibility:b||C?"hidden":"visible",minHeight:i,minWidth:s}),[I,S,s,i,b,C]),children:t})}),v=g.forwardRef(({children:t,row:e,col:h,cellHeight:d=40,cellWidth:f=100,overscan:a=2,initialRowCount:r,initialColCount:p,rtl:_,element:I=Se,cellElement:S="div",...b},C)=>{const[i,s,N,y,w,ce]=_e(()=>{const n=!!_,l=D(e,d,r,!1),c=D(h,f,p,!1);return[l,c,Ce(l,c),J(l,!1,n),J(c,!0,n),n]});i._updateCacheLength(e),s._updateCacheLength(h);const[ue,he]=m(i,i._getRange),[me,pe]=m(s,s._getRange),ge=m(i,i._getIsScrolling),fe=m(s,s._getIsScrolling),ve=m(i,i._getJumpCount),be=m(s,s._getJumpCount),ye=m(i,i._getCorrectedScrollSize,!0),we=m(s,s._getCorrectedScrollSize,!0),E=g.useRef(null);H(()=>{const n=E[ae],l=N._observeRoot(n),c=y._initRoot(n),x=w._initRoot(n);return()=>{l(),c(),x()}},[]),H(()=>{const n=i._flushJump();n&&y._fixScrollJump(n)},[ve]),H(()=>{const n=s._flushJump();n&&w._fixScrollJump(n)},[be]),g.useImperativeHandle(C,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[w._getActualScrollSize(),y._getActualScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(n,l){w._scrollToIndex(n),y._scrollToIndex(l)},scrollTo(n,l){w._scrollTo(n),y._scrollTo(l)},scrollBy(n,l){w._scrollTo(s._getScrollOffset()+n),y._scrollTo(i._getScrollOffset()+l)}}),[]);const M=g.useMemo(()=>{const n=new Map;return(l,c)=>{let x=n.get(O(l,c));return x||n.set(O(l,c),x=t({rowIndex:l,colIndex:c})),x}},[t]),W=A(ue-a,0),L=P(he+a,e-1),q=A(me-a,0),j=P(pe+a,h-1),xe=g.useMemo(()=>{const n=[];for(let l=W;l<=L;l++)for(let c=q;c<=j;c++)n.push(o(Ve,{_resizer:N,_vStore:i,_hStore:s,_rowIndex:l,_colIndex:c,_element:S,_children:M(l,c),_isRtl:ce},O(l,c)));return n},[M,W,L,q,j]);return o(I,{ref:E,width:we,height:ye,scrolling:ge||fe,attrs:g.useMemo(()=>({...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...b.style}}),Ie(b)),children:xe})});try{v.displayName="VGrid",v.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},cellElement:{defaultValue:null,description:`Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const ze={component:v},V={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},G={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},T={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>o("div",{children:"Hello world!"}))]})})},k={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[u("div",{children:[t," / ",e]}),o("div",{children:Array.from({length:e%4+1},()=>o("span",{children:"Hello world!"}))})]})})},R={render:()=>o(v,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},z={render:()=>{const[e,h]=g.useState([567,567]),[d,f]=g.useState([1e3,1e3]),a=g.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",o("input",{type:"number",value:e[0],onChange:r=>{h(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["row",o("input",{type:"number",value:e[1],onChange:r=>{h(p=>[p[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),o("button",{onClick:()=>{h([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:u("div",{children:[u("label",{children:["x",o("input",{type:"number",value:d[0],onChange:r=>{f(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["y",o("input",{type:"number",value:d[1],onChange:r=>{f(p=>[p[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollTo(d[0],d[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollBy(d[0],d[1])},children:"scroll by offset"})]})}),o(v,{ref:a,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:p})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",p]})})]})}};var B,F,K;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(F=V.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,Y,$;G.parameters={...G.parameters,docs:{...(U=G.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Y=G.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,le,oe;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(le=R.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,se,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=z.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const He=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{V as Default,T as DynamicHeight,k as DynamicWidth,G as Fixed,R as Rtl,z as ScrollTo,He as __namedExportsOrder,ze as default};
//# sourceMappingURL=VGrid.stories-8313e3bd.js.map
