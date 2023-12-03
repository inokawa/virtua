import{a as o,j as a}from"./jsx-runtime-sgeEVxPu.js";import{r as m}from"./index-yp3VsGQP.js";import{u as T,r as ie,i as Ve,a as Te,A as D,b as Ge,U as M,c as A,v as Re,V as Ee,e as He,d as q,f as Ne,g as j,S as J,h as U,j as B}from"./useRerender-JzbLqQ1U.js";import{r as ke}from"./index-8dy-jdxy.js";const H=(l,r)=>`${l}-${r}`,ze=m.memo(({_children:l,_resizer:r,_rowIndex:u,_colIndex:h,_top:f,_left:c,_height:t,_width:i,_hide:x,_element:G})=>{const g=m.useRef(null);return T(()=>r._observeItem(g[ie],u,h),[h,u]),o(G,{ref:g,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:f,[Ve()?"right":"left"]:c,visibility:x?"hidden":"visible",minHeight:t,minWidth:i}),[f,c,i,t,x]),children:l})}),p=m.forwardRef(({children:l,row:r,col:u,cellHeight:h=40,cellWidth:f=100,overscan:c=2,initialRowCount:t,initialColCount:i,components:{Root:x=Ee,Cell:G="div"}=He,...g},N)=>{const[s,d,k,v,b]=Te(()=>{const e=q(r,h,t),n=q(u,f,i);return[e,n,Ne(e,n),j(e,!1),j(n,!0)]});r!==s._getItemsLength()&&s._update(D,[r]),u!==d._getItemsLength()&&d._update(D,[u]);const z=Ge(),[se,de]=s._getRange(),[ae,ce]=d._getRange(),R=s._getScrollDirection(),E=d._getScrollDirection(),ue=s._getJumpCount(),he=d._getJumpCount(),me=s._getScrollSize(),pe=d._getScrollSize(),O=m.useRef(null),fe=R!==J,ge=E!==J;T(()=>{const e=O[ie],n=Ce=>{Ce?ke.flushSync(z):z()},y=s._subscribe(M+A,n),_=d._subscribe(M+A,n),we=k._observeRoot(e),Se=v._observe(e),Ie=b._observe(e);return()=>{y(),_(),we(),Se(),Ie()}},[]),T(()=>{const e=s._flushJump();e&&v._fixScrollJump(e)},[ue]),T(()=>{const e=d._flushJump();e&&b._fixScrollJump(e)},[he]),m.useImperativeHandle(N,()=>({get scrollOffset(){return[d._getScrollOffset(),s._getScrollOffset()]},get scrollSize(){return[d._getScrollSize(),s._getScrollSize()]},get viewportSize(){return[d._getViewportSize(),s._getViewportSize()]},scrollToIndex(e,n){b._scrollToIndex(e),v._scrollToIndex(n)},scrollTo(e,n){b._scrollTo(e),v._scrollTo(n)},scrollBy(e,n){b._scrollBy(e),v._scrollBy(n)}}),[]);const ve=m.useMemo(()=>{const e=new Map;return(n,y)=>{let _=e.get(H(n,y));return _||e.set(H(n,y),_=l({rowIndex:n,colIndex:y})),_}},[l]),be=B(se,c,R),ye=U(de,c,R,r),_e=B(ae,c,E),xe=U(ce,c,E,u),L=[];for(let e=be;e<=ye;e++)for(let n=_e;n<=xe;n++)L.push(o(ze,{_resizer:k,_rowIndex:e,_colIndex:n,_top:s._getItemOffset(e),_left:d._getItemOffset(n),_height:s._getItemSize(e),_width:d._getItemSize(n),_hide:s._isUnmeasuredItem(e)||d._isUnmeasuredItem(n),_element:G,_children:ve(e,n)},H(e,n)));return o(x,{ref:O,width:pe,height:me,scrolling:fe||ge,attrs:m.useMemo(()=>({...g,style:{overflow:"auto",overflowAnchor:"none",contain:"strict",width:"100%",height:"100%",...g.style}}),Re(g)),children:L})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const Ae={component:p},w={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:r})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",r]})})},S={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:r})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100,height:(l%2+1)*100},children:[l," / ",r]})})},I={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:r})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100},children:[a("div",{children:[l," / ",r]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},C={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:r})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[a("div",{children:[l," / ",r]}),o("div",{children:Array.from({length:r%4+1},()=>o("span",{children:"Hello world!"}))})]})})},V={render:()=>{const[r,u]=m.useState([567,567]),[h,f]=m.useState([1e3,1e3]),c=m.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",o("input",{type:"number",value:r[0],onChange:t=>{u(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["row",o("input",{type:"number",value:r[1],onChange:t=>{u(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollToIndex(r[0],r[1])},children:"scroll to index"}),o("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:a("div",{children:[a("label",{children:["x",o("input",{type:"number",value:h[0],onChange:t=>{f(i=>[Number(t.target.value),i[1]])}})]}),a("label",{children:["y",o("input",{type:"number",value:h[1],onChange:t=>{f(i=>[i[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollTo(h[0],h[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),o(p,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:i})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",i]})})]})}};var W,P,F;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(P=w.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var K,$,Z;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=($=S.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var Q,X,Y;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ne,re;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,oe,le;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const qe=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,I as DynamicHeight,C as DynamicWidth,S as Fixed,V as ScrollTo,qe as __namedExportsOrder,Ae as default};