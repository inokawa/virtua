import{j as l,a as i}from"./jsx-runtime-c3d7f245.js";import{r as m}from"./index-c6dae603.js";import{b as R,r as ue,l as Ee,u as ke,A,a as He,U as q,c as j,v as Ne,V as ze,d as Oe,g as J,m as Le,n as U,S as B,j as W,k as P}from"./useRerender-ac310dfc.js";import{r as De}from"./index-eb008d06.js";const H=(o,n)=>`${o}-${n}`,Me=m.memo(({_children:o,_resizer:n,_rowIndex:u,_colIndex:h,_top:g,_left:c,_height:t,_width:s,_hide:_,_element:G})=>{const f=m.useRef(null);return R(()=>n._observeItem(f[ue],u,h),[h,u]),l(G,{ref:f,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:g,[Ee()?"right":"left"]:c,visibility:_?"hidden":"visible",minHeight:t,minWidth:s}),[g,c,s,t,_]),children:o})}),p=m.forwardRef(({children:o,row:n,col:u,cellHeight:h=40,cellWidth:g=100,overscan:c=2,initialRowCount:t,initialColCount:s,components:{Root:_=ze,Cell:G="div"}=Oe,...f},N)=>{const[d,a,z,v,b]=ke(()=>{const e=J(n,h,t),r=J(u,g,s);return[e,r,Le(e,r),U(e,!1),U(r,!0)]});n!==d._getItemsLength()&&d._update(A,[n]),u!==a._getItemsLength()&&a._update(A,[u]);const O=He(),[he,me]=d._getRange(),[pe,ge]=a._getRange(),E=d._getScrollDirection(),k=a._getScrollDirection(),fe=d._getJumpCount(),ve=a._getJumpCount(),be=d._getCorrectedScrollSize(),ye=a._getCorrectedScrollSize(),L=m.useRef(null),xe=E!==B,_e=k!==B;R(()=>{const e=L[ue],r=z._observeRoot(e),y=v._initRoot(e),x=b._initRoot(e),M=Ge=>{Ge?De.flushSync(O):O()},Te=d._subscribe(q+j,M),Re=a._subscribe(q+j,M);return()=>{r(),y(),x(),Te(),Re()}},[]),R(()=>{const e=d._flushJump();e&&v._fixScrollJump(e)},[fe]),R(()=>{const e=a._flushJump();e&&b._fixScrollJump(e)},[ve]),m.useImperativeHandle(N,()=>({get scrollOffset(){return[a._getScrollOffset(),d._getScrollOffset()]},get scrollSize(){return[a._getCorrectedScrollSize(),d._getCorrectedScrollSize()]},get viewportSize(){return[a._getViewportSize(),d._getViewportSize()]},scrollToIndex(e,r){b._scrollToIndex(e),v._scrollToIndex(r)},scrollTo(e,r){b._scrollTo(e),v._scrollTo(r)},scrollBy(e,r){b._scrollBy(e),v._scrollBy(r)}}),[]);const we=m.useMemo(()=>{const e=new Map;return(r,y)=>{let x=e.get(H(r,y));return x||e.set(H(r,y),x=o({rowIndex:r,colIndex:y})),x}},[o]),Ie=P(he,c,E),Se=W(me,c,E,n),Ce=P(pe,c,k),Ve=W(ge,c,k,u),D=[];for(let e=Ie;e<=Se;e++)for(let r=Ce;r<=Ve;r++)D.push(l(Me,{_resizer:z,_rowIndex:e,_colIndex:r,_top:d._getItemOffset(e),_left:a._getItemOffset(r),_height:d._getItemSize(e),_width:a._getItemSize(r),_hide:d._isUnmeasuredItem(e)||a._isUnmeasuredItem(r),_element:G,_children:we(e,r)},H(e,r)));return l(_,{ref:L,width:ye,height:be,scrolling:xe||_e,attrs:m.useMemo(()=>({...f,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...f.style}}),Ne(f)),children:D})});try{p.displayName="VGrid",p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const Ue={component:p},w={render:()=>l(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:o,colIndex:n})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[o," / ",n]})})},I={render:()=>l(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:o,colIndex:n})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(o%2+1)*100},children:[o," / ",n]})})},S={render:()=>l(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:o,colIndex:n})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[i("div",{children:[o," / ",n]}),Array.from({length:o%8+1},()=>l("div",{children:"Hello world!"}))]})})},C={render:()=>l(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:o,colIndex:n})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(o%2+1)*100},children:[i("div",{children:[o," / ",n]}),l("div",{children:Array.from({length:n%4+1},()=>l("span",{children:"Hello world!"}))})]})})},V={render:()=>l(p,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:o,colIndex:n})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[o," / ",n]})})},T={render:()=>{const[n,u]=m.useState([567,567]),[h,g]=m.useState([1e3,1e3]),c=m.useRef(null);return i("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[i("div",{children:[i("label",{children:["col",l("input",{type:"number",value:n[0],onChange:t=>{u(s=>[Number(t.target.value),s[1]])}})]}),i("label",{children:["row",l("input",{type:"number",value:n[1],onChange:t=>{u(s=>[s[0],Number(t.target.value)])}})]}),l("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),l("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),l("div",{children:i("div",{children:[i("label",{children:["x",l("input",{type:"number",value:h[0],onChange:t=>{g(s=>[Number(t.target.value),s[1]])}})]}),i("label",{children:["y",l("input",{type:"number",value:h[1],onChange:t=>{g(s=>[s[0],Number(t.target.value)])}})]}),l("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollTo(h[0],h[1])},children:"scroll to offset"}),l("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),l(p,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:s})=>i("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",s]})})]})}};var F,K,$;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(K=w.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var Y,Z,Q;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,ee,ne;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=C.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,se;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};const Be=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{w as Default,S as DynamicHeight,C as DynamicWidth,I as Fixed,V as Rtl,T as ScrollTo,Be as __namedExportsOrder,Ue as default};
//# sourceMappingURL=VGrid.stories-26b4e893.js.map
