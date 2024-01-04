import{a as o,j as a}from"./jsx-runtime-sgeEVxPu.js";import{r as m}from"./index-yp3VsGQP.js";import{u as T,r as ce,i as Ve,a as Te,A,b as q,U as j,c as J,d as U,e as B,S as W,v as Ge,V as Re,f as Ee,g as P,h as He,j as F}from"./useRerender-ArQx4tgq.js";import{r as K}from"./index-8dy-jdxy.js";const N=(l,n)=>`${l}-${n}`,Ne=m.memo(({_children:l,_resizer:n,_rowIndex:u,_colIndex:h,_top:f,_left:c,_height:t,_width:d,_hide:x,_element:G})=>{const g=m.useRef(null);return T(()=>n._observeItem(g[ce],u,h),[h,u]),o(G,{ref:g,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:f,[Ve()?"right":"left"]:c,visibility:x?"hidden":"visible",minHeight:t,minWidth:d}),[f,c,d,t,x]),children:l})}),p=m.forwardRef(({children:l,row:n,col:u,cellHeight:h=40,cellWidth:f=100,overscan:c=2,initialRowCount:t,initialColCount:d,components:{Root:x=Re,Cell:G="div"}=Ee,...g},k)=>{const[i,s,z,v,b]=Te(()=>{const e=P(n,h,t),r=P(u,f,d);return[e,r,He(e,r),F(e,!1),F(r,!0)]});n!==i._getItemsLength()&&i._update(A,[n]),u!==s._getItemsLength()&&s._update(A,[u]);const O=q(i),L=q(s),[ue,he]=i._getRange(),[me,pe]=s._getRange(),R=i._getScrollDirection(),E=s._getScrollDirection(),fe=i._getJumpCount(),ge=s._getJumpCount(),ve=i._getScrollSize(),be=s._getScrollSize(),D=m.useRef(null);T(()=>{const e=D[ce],r=i._subscribe(j+J,H=>{H?K.flushSync(O):O()}),y=s._subscribe(j+J,H=>{H?K.flushSync(L):L()}),_=z._observeRoot(e),Se=v._observe(e),Ce=b._observe(e);return()=>{r(),y(),_(),Se(),Ce()}},[]),T(()=>{const e=i._flushJump();e&&v._fixScrollJump(e)},[fe]),T(()=>{const e=s._flushJump();e&&b._fixScrollJump(e)},[ge]),m.useImperativeHandle(k,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[s._getScrollSize(),i._getScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(e,r){b._scrollToIndex(e),v._scrollToIndex(r)},scrollTo(e,r){b._scrollTo(e),v._scrollTo(r)},scrollBy(e,r){b._scrollBy(e),v._scrollBy(r)}}),[]);const ye=m.useMemo(()=>{const e=new Map;return(r,y)=>{let _=e.get(N(r,y));return _||e.set(N(r,y),_=l({rowIndex:r,colIndex:y})),_}},[l]),_e=U(ue,c,R),xe=B(he,c,R,n),we=U(me,c,E),Ie=B(pe,c,E,u),M=[];for(let e=_e;e<=xe;e++)for(let r=we;r<=Ie;r++)M.push(o(Ne,{_resizer:z,_rowIndex:e,_colIndex:r,_top:i._getItemOffset(e),_left:s._getItemOffset(r),_height:i._getItemSize(e),_width:s._getItemSize(r),_hide:i._isUnmeasuredItem(e)||s._isUnmeasuredItem(r),_element:G,_children:ye(e,r)},N(e,r)));return o(x,{ref:D,width:be,height:ve,scrolling:R!==W||E!==W,attrs:m.useMemo(()=>({...g,style:{overflow:"auto",overflowAnchor:"none",contain:"strict",width:"100%",height:"100%",...g.style}}),Ge(g)),children:M})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const De={component:p},w={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",n]})})},I={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(l%2+1)*100},children:[l," / ",n]})})},S={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[a("div",{children:[l," / ",n]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},C={render:()=>o(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[a("div",{children:[l," / ",n]}),o("div",{children:Array.from({length:n%4+1},()=>o("span",{children:"Hello world!"}))})]})})},V={render:()=>{const[n,u]=m.useState([567,567]),[h,f]=m.useState([1e3,1e3]),c=m.useRef(null);return a("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[a("div",{children:[a("label",{children:["col",o("input",{type:"number",value:n[0],onChange:t=>{u(d=>[Number(t.target.value),d[1]])}})]}),a("label",{children:["row",o("input",{type:"number",value:n[1],onChange:t=>{u(d=>[d[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),o("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:a("div",{children:[a("label",{children:["x",o("input",{type:"number",value:h[0],onChange:t=>{f(d=>[Number(t.target.value),d[1]])}})]}),a("label",{children:["y",o("input",{type:"number",value:h[1],onChange:t=>{f(d=>[d[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollTo(h[0],h[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),o(p,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:d})=>a("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",d]})})]})}};var $,Z,Q;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,Y,ee;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,re,te;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,le,ie;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,de,ae;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};const Me=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,S as DynamicHeight,C as DynamicWidth,I as Fixed,V as ScrollTo,Me as __namedExportsOrder,De as default};
