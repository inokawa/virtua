import{j as o,a as u}from"./jsx-runtime-c3d7f245.js";import{r as f}from"./index-c6dae603.js";import{b as m,c as z,r as pe,a as Te,v as Ee,W as Ge,n as _,d as D,o as Re,p as A,S as P,i as U,j as B,k as F,m as K,l as Y}from"./Window-53c6905e.js";import"./index-eb008d06.js";const O=(t,e)=>`${t}-${e}`,ke=f.memo(({_children:t,_resizer:e,_vStore:h,_hStore:d,_rowIndex:g,_colIndex:a,_element:r,_isRtl:p})=>{const I=f.useRef(null),S=m(h,()=>h._getItemOffset(g),_,!0),C=m(d,()=>d._getItemOffset(a),_,!0),b=m(h,()=>h._isUnmeasuredItem(g),_,!0),V=m(d,()=>d._isUnmeasuredItem(a),_,!0),i=m(h,()=>h._getItemSize(g),_,!0),s=m(d,()=>d._getItemSize(a),_,!0);return z(()=>e._observeItem(I[pe],g,a),[a,g]),o(r,{ref:I,style:f.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:S,[p?"right":"left"]:C,visibility:b||V?"hidden":"visible",minHeight:i,minWidth:s}),[S,C,s,i,b,V]),children:t})}),v=f.forwardRef(({children:t,row:e,col:h,cellHeight:d=40,cellWidth:g=100,overscan:a=2,initialRowCount:r,initialColCount:p,rtl:I,element:S=Ge,cellElement:C="div",...b},V)=>{const[i,s,H,y,w,fe]=Te(()=>{const n=!!I,l=D(e,d,r,!1),c=D(h,g,p,!1);return[l,c,Re(l,c),A(l,!1,n),A(c,!0,n),n]});i._updateCacheLength(e),s._updateCacheLength(h);const[ge,ve]=m(i,i._getRange,P),[be,ye]=m(s,s._getRange,P),we=m(i,i._getIsScrolling,U),_e=m(s,s._getIsScrolling,U),xe=m(i,i._getJumpCount,B),Ie=m(s,s._getJumpCount,B),Se=m(i,i._getCorrectedScrollSize,F,!0),Ce=m(s,s._getCorrectedScrollSize,F,!0),L=f.useRef(null);z(()=>{const n=L[pe],l=H._observeRoot(n),c=y._initRoot(n),x=w._initRoot(n);return()=>{l(),c(),x()}},[]),z(()=>{const n=i._flushJump();n&&y._fixScrollJump(n)},[xe]),z(()=>{const n=s._flushJump();n&&w._fixScrollJump(n)},[Ie]),f.useImperativeHandle(V,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[w._getActualScrollSize(),y._getActualScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(n,l){w._scrollToIndex(n),y._scrollToIndex(l)},scrollTo(n,l){w._scrollTo(n),y._scrollTo(l)},scrollBy(n,l){w._scrollTo(s._getScrollOffset()+n),y._scrollTo(i._getScrollOffset()+l)}}),[]);const M=f.useMemo(()=>{const n=new Map;return(l,c)=>{let x=n.get(O(l,c));return x||n.set(O(l,c),x=t({rowIndex:l,colIndex:c})),x}},[t]),q=K(ge-a,0),W=Y(ve+a,e-1),j=K(be-a,0),J=Y(ye+a,h-1),Ve=f.useMemo(()=>{const n=[];for(let l=q;l<=W;l++)for(let c=j;c<=J;c++)n.push(o(ke,{_resizer:H,_vStore:i,_hStore:s,_rowIndex:l,_colIndex:c,_element:C,_children:M(l,c),_isRtl:fe},O(l,c)));return n},[M,q,W,j,J]);return o(S,{ref:L,width:Ce,height:Se,scrolling:we||_e,attrs:f.useMemo(()=>({...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...b.style}}),Ee(b)),children:Ve})});try{v.displayName="VGrid",v.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},cellElement:{defaultValue:null,description:`Customized element type for cell element. This element will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"cellElement",required:!1,type:{name:"CustomCellComponentOrElement"}}}}}catch{}const Le={component:v},T={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},E={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},G={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>o("div",{children:"Hello world!"}))]})})},R={render:()=>o(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[u("div",{children:[t," / ",e]}),o("div",{children:Array.from({length:e%4+1},()=>o("span",{children:"Hello world!"}))})]})})},k={render:()=>o(v,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},N={render:()=>{const[e,h]=f.useState([567,567]),[d,g]=f.useState([1e3,1e3]),a=f.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",o("input",{type:"number",value:e[0],onChange:r=>{h(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["row",o("input",{type:"number",value:e[1],onChange:r=>{h(p=>[p[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),o("button",{onClick:()=>{h([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:u("div",{children:[u("label",{children:["x",o("input",{type:"number",value:d[0],onChange:r=>{g(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["y",o("input",{type:"number",value:d[1],onChange:r=>{g(p=>[p[0],Number(r.target.value)])}})]}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollTo(d[0],d[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollBy(d[0],d[1])},children:"scroll by offset"})]})}),o(v,{ref:a,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:p})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",p]})})]})}};var $,Z,Q;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,ee,ne;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;G.parameters={...G.parameters,docs:{...(re=G.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(te=G.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,se;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=N.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const Me=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{T as Default,G as DynamicHeight,R as DynamicWidth,E as Fixed,k as Rtl,N as ScrollTo,Me as __namedExportsOrder,Le as default};
//# sourceMappingURL=VGrid.stories-7fea61bf.js.map
