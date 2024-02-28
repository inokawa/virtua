import{a as r,j as a}from"./jsx-runtime-CWvgoIdH.js";import{r as m}from"./index-D3g0PtM7.js";import{u as R,r as ie,i as we,a as xe,A,b as M,g as x,U as q,c as W,S as j,d as J,e as _e,f as Ie}from"./useRerender-C1SY4zsE.js";import{r as U}from"./index-4KpVZEbj.js";const H=(t,e)=>`${t}-${e}`,Se=m.memo(({_children:t,_resizer:e,_rowIndex:c,_colIndex:u,_top:f,_left:h,_height:n,_width:i,_hide:y,_element:T})=>{const w=m.useRef(null);return R(()=>e._observeItem(w[ie],c,u),[u,c]),r(T,{ref:w,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:f,[we()?"right":"left"]:h,visibility:y?"hidden":"visible",minHeight:n,minWidth:i}),[f,h,i,n,y]),children:t})}),p=m.forwardRef(({children:t,row:e,col:c,cellHeight:u=40,cellWidth:f=100,overscan:h=2,initialRowCount:n,initialColCount:i,item:y="div",style:T,...w},k)=>{const[s,d,G,v]=xe(()=>{const o=J(e,u,n),l=J(c,f,i);return[o,l,_e(o,l),Ie(o,l)]});e!==s._getItemsLength()&&s._update(A,[e]),c!==d._getItemsLength()&&d._update(A,[c]);const N=M(s),E=M(d),[se,de]=s._getRange(),[ae,ce]=d._getRange(),L=s._getScrollDirection(),O=d._getScrollDirection(),ue=s._getJumpCount(),he=d._getJumpCount(),me=x(s),pe=x(d),z=m.useRef(null);R(()=>{const o=z[ie],l=s._subscribe(q,g=>{g?U.flushSync(N):N()}),b=d._subscribe(q,g=>{g?U.flushSync(E):E()});return G._observeRoot(o),v._observe(o),()=>{l(),b(),G._dispose(),v._dispose()}},[]),R(()=>{v._fixScrollJump()},[ue,he]),m.useImperativeHandle(k,()=>({get scrollTop(){return s._getScrollOffset()},get scrollLeft(){return d._getScrollOffset()},get scrollHeight(){return x(s)},get scrollWidth(){return x(d)},get viewportHeight(){return s._getViewportSize()},get viewportWidth(){return d._getViewportSize()},scrollToIndex:v._scrollToIndex,scrollTo:v._scrollTo,scrollBy:v._scrollBy}),[]);const fe=m.useMemo(()=>{const o=new Map;return(l,b)=>{let g=o.get(H(l,b));return g||o.set(H(l,b),g=t({rowIndex:l,colIndex:b})),g}},[t]),[ge,ve]=W(se,de,h,L,e),[be,ye]=W(ae,ce,h,O,c),D=[];for(let o=ge;o<=ve;o++)for(let l=be;l<=ye;l++)D.push(r(Se,{_resizer:G,_rowIndex:o,_colIndex:l,_top:s._getItemOffset(o),_left:d._getItemOffset(l),_height:s._getItemSize(o),_width:d._getItemSize(l),_hide:s._isUnmeasuredItem(o)||d._isUnmeasuredItem(l),_element:y,_children:fe(o,l)},H(o,l)));return r("div",{ref:z,...w,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...T},children:r("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:pe,height:me,pointerEvents:L!==j||O!==j?"none":"auto"},children:D})})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},item:{defaultValue:null,description:`Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"item",required:!1,type:{name:"keyof IntrinsicElements | CustomCellComponent"}}}}}catch{}const He={component:p},_={render:()=>r(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},I={render:()=>r(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},S={render:()=>r(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[a("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>r("div",{children:"Hello world!"}))]})})},V={render:()=>r(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[a("div",{children:[t," / ",e]}),r("div",{children:Array.from({length:e%4+1},()=>r("span",{children:"Hello world!"}))})]})})},C={render:()=>{const[e,c]=m.useState([567,567]),[u,f]=m.useState([1e3,1e3]),h=m.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",r("input",{type:"number",value:e[0],onChange:n=>{c(i=>[Number(n.target.value),i[1]])}})]}),a("label",{children:["row",r("input",{type:"number",value:e[1],onChange:n=>{c(i=>[i[0],Number(n.target.value)])}})]}),r("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollToIndex(e[0],e[1])},children:"scroll to index"}),r("button",{onClick:()=>{c([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),r("div",{children:a("div",{children:[a("label",{children:["x",r("input",{type:"number",value:u[0],onChange:n=>{f(i=>[Number(n.target.value),i[1]])}})]}),a("label",{children:["y",r("input",{type:"number",value:u[1],onChange:n=>{f(i=>[i[0],Number(n.target.value)])}})]}),r("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollTo(u[0],u[1])},children:"scroll to offset"}),r("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollBy(u[0],u[1])},children:"scroll by offset"})]})}),r(p,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:i})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",i]})})]})}};var B,P,F;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(P=_.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var K,$,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=($=I.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,oe,le;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Re=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{_ as Default,S as DynamicHeight,V as DynamicWidth,I as Fixed,C as ScrollTo,Re as __namedExportsOrder,He as default};
