import{j as l,a as u}from"./jsx-runtime-c3d7f245.js";import{r as g}from"./index-c6dae603.js";import{b as m,c as H,r as pe,a as Re,v as Te,V as Ge,d as Ee,o as x,g as A,p as ke,q as B,S as W,j as U,k as F,l as P,m as K,n as Y}from"./Viewport-83475ed4.js";import"./index-eb008d06.js";const L=(t,e)=>`${t}-${e}`,Ne=g.memo(({_children:t,_resizer:e,_vStore:h,_hStore:d,_rowIndex:f,_colIndex:a,_element:r,_isRtl:p})=>{const I=g.useRef(null),S=m(h,()=>h._getItemOffset(f),x,!0),C=m(d,()=>d._getItemOffset(a),x,!0),y=m(h,()=>h._isUnmeasuredItem(f),x,!0),V=m(d,()=>d._isUnmeasuredItem(a),x,!0),i=m(h,()=>h._getItemSize(f),x,!0),s=m(d,()=>d._getItemSize(a),x,!0);return H(()=>e._observeItem(I[pe],f,a),[a,f]),l(r,{ref:I,style:g.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:S,[p?"right":"left"]:C,visibility:y||V?"hidden":"visible",minHeight:i,minWidth:s}),[S,C,s,i,y,V]),children:t})}),v=g.forwardRef(({children:t,row:e,col:h,cellHeight:d=40,cellWidth:f=100,overscan:a=2,initialRowCount:r,initialColCount:p,rtl:I,components:{Root:S=Ge,Cell:C="div"}=Ee,...y},V)=>{const[i,s,z,b,w,ge]=Re(()=>{const n=!!I,o=A(e,d,r),c=A(h,f,p);return[o,c,ke(o,c),B(o,!1,n),B(c,!0,n),n]});i._updateCacheLength(e),s._updateCacheLength(h);const[fe,ve]=m(i,i._getRange,W),[ye,be]=m(s,s._getRange,W),we=m(i,i._getIsScrolling,U),xe=m(s,s._getIsScrolling,U),_e=m(i,i._getJumpCount,F),Ie=m(s,s._getJumpCount,F),Se=m(i,i._getCorrectedScrollSize,P,!0),Ce=m(s,s._getCorrectedScrollSize,P,!0),O=g.useRef(null);H(()=>{const n=O[pe],o=z._observeRoot(n),c=b._initRoot(n),_=w._initRoot(n);return()=>{o(),c(),_()}},[]),H(()=>{const n=i._flushJump();n&&b._fixScrollJump(n)},[_e]),H(()=>{const n=s._flushJump();n&&w._fixScrollJump(n)},[Ie]),g.useImperativeHandle(V,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[w._getActualScrollSize(),b._getActualScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(n,o){w._scrollToIndex(n),b._scrollToIndex(o)},scrollTo(n,o){w._scrollTo(n),b._scrollTo(o)},scrollBy(n,o){w._scrollBy(n),b._scrollBy(o)}}),[]);const M=g.useMemo(()=>{const n=new Map;return(o,c)=>{let _=n.get(L(o,c));return _||n.set(L(o,c),_=t({rowIndex:o,colIndex:c})),_}},[t]),q=K(fe-a,0),j=Y(ve+a,e-1),J=K(ye-a,0),D=Y(be+a,h-1),Ve=g.useMemo(()=>{const n=[];for(let o=q;o<=j;o++)for(let c=J;c<=D;c++)n.push(l(Ne,{_resizer:z,_vStore:i,_hStore:s,_rowIndex:o,_colIndex:c,_element:C,_children:M(o,c),_isRtl:ge},L(o,c)));return n},[M,q,j,J,D]);return l(S,{ref:O,width:Ce,height:Se,scrolling:we||xe,attrs:g.useMemo(()=>({...y,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...y.style}}),Te(y)),children:Ve})});try{v.displayName="VGrid",v.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const Me={component:v},R={render:()=>l(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},T={render:()=>l(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},G={render:()=>l(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>l("div",{children:"Hello world!"}))]})})},E={render:()=>l(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[u("div",{children:[t," / ",e]}),l("div",{children:Array.from({length:e%4+1},()=>l("span",{children:"Hello world!"}))})]})})},k={render:()=>l(v,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},N={render:()=>{const[e,h]=g.useState([567,567]),[d,f]=g.useState([1e3,1e3]),a=g.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",l("input",{type:"number",value:e[0],onChange:r=>{h(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["row",l("input",{type:"number",value:e[1],onChange:r=>{h(p=>[p[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),l("button",{onClick:()=>{h([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),l("div",{children:u("div",{children:[u("label",{children:["x",l("input",{type:"number",value:d[0],onChange:r=>{f(p=>[Number(r.target.value),p[1]])}})]}),u("label",{children:["y",l("input",{type:"number",value:d[1],onChange:r=>{f(p=>[p[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollTo(d[0],d[1])},children:"scroll to offset"}),l("button",{onClick:()=>{var r;(r=a.current)==null||r.scrollBy(d[0],d[1])},children:"scroll by offset"})]})}),l(v,{ref:a,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:p})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",p]})})]})}};var $,Z,Q;R.parameters={...R.parameters,docs:{...($=R.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,ee,ne;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;G.parameters={...G.parameters,docs:{...(re=G.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=G.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,se;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(he=N.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const qe=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{R as Default,G as DynamicHeight,E as DynamicWidth,T as Fixed,k as Rtl,N as ScrollTo,qe as __namedExportsOrder,Me as default};
//# sourceMappingURL=VGrid.stories-3cd641b6.js.map
