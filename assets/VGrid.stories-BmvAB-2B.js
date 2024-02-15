import{a as o,j as a}from"./jsx-runtime-CWvgoIdH.js";import{r as m}from"./index-D3g0PtM7.js";import{u as G,r as ae,i as Ie,a as Se,A as M,b as q,g as w,U as J,c as j,d as B,S as U,e as W,f as Ce,h as P}from"./useRerender-C9Mqaxnh.js";import{r as F}from"./index-4KpVZEbj.js";const k=(l,n)=>`${l}-${n}`,Te=m.memo(({_children:l,_resizer:n,_rowIndex:c,_colIndex:u,_top:f,_left:h,_height:t,_width:i,_hide:_,_element:E})=>{const x=m.useRef(null);return G(()=>n._observeItem(x[ae],c,u),[u,c]),o(E,{ref:x,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:f,[Ie()?"right":"left"]:h,visibility:_?"hidden":"visible",minHeight:t,minWidth:i}),[f,h,i,t,_]),children:l})}),p=m.forwardRef(({children:l,row:n,col:c,cellHeight:u=40,cellWidth:f=100,overscan:h=2,initialRowCount:t,initialColCount:i,item:_="div",style:E,...x},H)=>{const[s,d,R,v,b]=Se(()=>{const e=W(n,u,t),r=W(c,f,i);return[e,r,Ce(e,r),P(e,!1),P(r,!0)]});n!==s._getItemsLength()&&s._update(M,[n]),c!==d._getItemsLength()&&d._update(M,[c]);const N=q(s),O=q(d),[ce,ue]=s._getRange(),[he,me]=d._getRange(),L=s._getScrollDirection(),z=d._getScrollDirection(),pe=s._getJumpCount(),fe=d._getJumpCount(),ge=w(s),ve=w(d),D=m.useRef(null);G(()=>{const e=D[ae],r=s._subscribe(J+j,g=>{g?F.flushSync(N):N()}),y=d._subscribe(J+j,g=>{g?F.flushSync(O):O()});return R._observeRoot(e),v._observe(e),b._observe(e),()=>{r(),y(),R._dispose(),v._dispose(),b._dispose()}},[]),G(()=>{v._fixScrollJump()},[pe]),G(()=>{b._fixScrollJump()},[fe]),m.useImperativeHandle(H,()=>({get scrollOffset(){return[d._getScrollOffset(),s._getScrollOffset()]},get scrollSize(){return[w(d),w(s)]},get viewportSize(){return[d._getViewportSize(),s._getViewportSize()]},scrollToIndex(e,r){b._scrollToIndex(e),v._scrollToIndex(r)},scrollTo(e,r){b._scrollTo(e),v._scrollTo(r)},scrollBy(e,r){b._scrollBy(e),v._scrollBy(r)}}),[]);const be=m.useMemo(()=>{const e=new Map;return(r,y)=>{let g=e.get(k(r,y));return g||e.set(k(r,y),g=l({rowIndex:r,colIndex:y})),g}},[l]),[ye,_e]=B(ce,ue,h,L,n),[xe,we]=B(he,me,h,z,c),A=[];for(let e=ye;e<=_e;e++)for(let r=xe;r<=we;r++)A.push(o(Te,{_resizer:R,_rowIndex:e,_colIndex:r,_top:s._getItemOffset(e),_left:d._getItemOffset(r),_height:s._getItemSize(e),_width:d._getItemSize(r),_hide:s._isUnmeasuredItem(e)||d._isUnmeasuredItem(r),_element:_,_children:be(e,r)},k(e,r)));return o("div",{ref:D,...x,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...E},children:o("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:ve,height:ge,pointerEvents:L!==U||z!==U?"none":"auto"},children:A})})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},item:{defaultValue:null,description:`Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,name:"item",required:!1,type:{name:"keyof IntrinsicElements | CustomCellComponent"}}}}}catch{}const ke={component:p},I={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",n]})})},S={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(l%2+1)*100},children:[l," / ",n]})})},C={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[a("div",{children:[l," / ",n]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},T={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[a("div",{children:[l," / ",n]}),o("div",{children:Array.from({length:n%4+1},()=>o("span",{children:"Hello world!"}))})]})})},V={render:()=>{const[n,c]=m.useState([567,567]),[u,f]=m.useState([1e3,1e3]),h=m.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",o("input",{type:"number",value:n[0],onChange:t=>{c(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["row",o("input",{type:"number",value:n[1],onChange:t=>{c(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),o("button",{onClick:()=>{c([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:a("div",{children:[a("label",{children:["x",o("input",{type:"number",value:u[0],onChange:t=>{f(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["y",o("input",{type:"number",value:u[1],onChange:t=>{f(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollTo(u[0],u[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollBy(u[0],u[1])},children:"scroll by offset"})]})}),o(p,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:i})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",i]})})]})}};var K,$,Z;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=($=I.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ne,re;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,oe,le;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,se,de;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=V.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};const He=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{I as Default,C as DynamicHeight,T as DynamicWidth,S as Fixed,V as ScrollTo,He as __namedExportsOrder,ke as default};
