import{j as o,a}from"./jsx-runtime-c3d7f245.js";import{r as m}from"./index-c6dae603.js";import{b as T,r as se,l as Ve,u as Te,A as M,a as Re,U as A,c as q,v as Ge,V as Ee,d as He,g as j,m as Ne,n as J,S as U,j as B,k as W}from"./useRerender-d204f9c8.js";import{r as ke}from"./index-eb008d06.js";const H=(l,n)=>`${l}-${n}`,ze=m.memo(({_children:l,_resizer:n,_rowIndex:u,_colIndex:h,_top:f,_left:c,_height:t,_width:i,_hide:x,_element:R})=>{const g=m.useRef(null);return T(()=>n._observeItem(g[se],u,h),[h,u]),o(R,{ref:g,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:f,[Ve()?"right":"left"]:c,visibility:x?"hidden":"visible",minHeight:t,minWidth:i}),[f,c,i,t,x]),children:l})}),p=m.forwardRef(({children:l,row:n,col:u,cellHeight:h=40,cellWidth:f=100,overscan:c=2,initialRowCount:t,initialColCount:i,components:{Root:x=Ee,Cell:R="div"}=He,...g},N)=>{const[s,d,k,b,v]=Te(()=>{const e=j(n,h,t),r=j(u,f,i);return[e,r,Ne(e,r),J(e,!1),J(r,!0)]});n!==s._getItemsLength()&&s._update(M,[n]),u!==d._getItemsLength()&&d._update(M,[u]);const z=Re(),[de,ae]=s._getRange(),[ce,ue]=d._getRange(),G=s._getScrollDirection(),E=d._getScrollDirection(),he=s._getJumpCount(),me=d._getJumpCount(),pe=s._getCorrectedScrollSize(),fe=d._getCorrectedScrollSize(),O=m.useRef(null),ge=G!==U,be=E!==U;T(()=>{const e=O[se],r=k._observeRoot(e),y=b._initRoot(e),_=v._initRoot(e),D=Ce=>{Ce?ke.flushSync(z):z()},Se=s._subscribe(A+q,D),Ie=d._subscribe(A+q,D);return()=>{r(),y(),_(),Se(),Ie()}},[]),T(()=>{const e=s._flushJump();e&&b._fixScrollJump(e)},[he]),T(()=>{const e=d._flushJump();e&&v._fixScrollJump(e)},[me]),m.useImperativeHandle(N,()=>({get scrollOffset(){return[d._getScrollOffset(),s._getScrollOffset()]},get scrollSize(){return[d._getCorrectedScrollSize(),s._getCorrectedScrollSize()]},get viewportSize(){return[d._getViewportSize(),s._getViewportSize()]},scrollToIndex(e,r){v._scrollToIndex(e),b._scrollToIndex(r)},scrollTo(e,r){v._scrollTo(e),b._scrollTo(r)},scrollBy(e,r){v._scrollBy(e),b._scrollBy(r)}}),[]);const ve=m.useMemo(()=>{const e=new Map;return(r,y)=>{let _=e.get(H(r,y));return _||e.set(H(r,y),_=l({rowIndex:r,colIndex:y})),_}},[l]),ye=W(de,c,G),_e=B(ae,c,G,n),xe=W(ce,c,E),we=B(ue,c,E,u),L=[];for(let e=ye;e<=_e;e++)for(let r=xe;r<=we;r++)L.push(o(ze,{_resizer:k,_rowIndex:e,_colIndex:r,_top:s._getItemOffset(e),_left:d._getItemOffset(r),_height:s._getItemSize(e),_width:d._getItemSize(r),_hide:s._isUnmeasuredItem(e)||d._isUnmeasuredItem(r),_element:R,_children:ve(e,r)},H(e,r)));return o(x,{ref:O,width:fe,height:pe,scrolling:ge||be,attrs:m.useMemo(()=>({...g,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...g.style}}),Ge(g)),children:L})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const Ae={component:p},w={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",n]})})},S={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(l%2+1)*100},children:[l," / ",n]})})},I={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[a("div",{children:[l," / ",n]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},C={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[a("div",{children:[l," / ",n]}),o("div",{children:Array.from({length:n%4+1},()=>o("span",{children:"Hello world!"}))})]})})},V={render:()=>{const[n,u]=m.useState([567,567]),[h,f]=m.useState([1e3,1e3]),c=m.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",o("input",{type:"number",value:n[0],onChange:t=>{u(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["row",o("input",{type:"number",value:n[1],onChange:t=>{u(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),o("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:a("div",{children:[a("label",{children:["x",o("input",{type:"number",value:h[0],onChange:t=>{f(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["y",o("input",{type:"number",value:h[1],onChange:t=>{f(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollTo(h[0],h[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),o(p,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:i})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",i]})})]})}};var P,F,K;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(F=w.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var $,Y,Z;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,X,ee;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=I.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ne,re,te;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=C.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,le,ie;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const qe=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,I as DynamicHeight,C as DynamicWidth,S as Fixed,V as ScrollTo,qe as __namedExportsOrder,Ae as default};
//# sourceMappingURL=VGrid.stories-b0b28799.js.map
