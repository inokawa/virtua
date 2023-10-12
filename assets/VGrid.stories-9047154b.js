import{j as l,a as u}from"./jsx-runtime-c3d7f245.js";import{r as p}from"./index-c6dae603.js";import{b as m,c as H,r as ve,o as Re,a as Ee,A as U,v as ke,V as He,d as Ne,j as v,g as P,p as Oe,q as B,U as W,k as F,l as K,S as $,m as Y,n as Z}from"./Viewport-4a611d8b.js";import{r as Q}from"./index-eb008d06.js";const L=(t,e)=>`${t}-${e}`,ze=p.memo(({_children:t,_resizer:e,_vStore:d,_hStore:a,_rowIndex:f,_colIndex:c,_element:r})=>{const h=p.useRef(null),I=m(d,()=>d._getItemOffset(f),v,!0),S=m(a,()=>a._getItemOffset(c),v,!0),b=m(d,()=>d._isUnmeasuredItem(f),v,!0),C=m(a,()=>a._isUnmeasuredItem(c),v,!0),i=m(d,()=>d._getItemSize(f),v,!0),s=m(a,()=>a._getItemSize(c),v,!0);return H(()=>e._observeItem(h[ve],f,c),[c,f]),l(r,{ref:h,style:p.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:I,[Re()?"right":"left"]:S,visibility:b||C?"hidden":"visible",minHeight:i,minWidth:s}),[I,S,s,i,b,C]),children:t})}),y=p.forwardRef(({children:t,row:e,col:d,cellHeight:a=40,cellWidth:f=100,overscan:c=2,initialRowCount:r,initialColCount:h,components:{Root:I=He,Cell:S="div"}=Ne,...b},C)=>{const[i,s,N,x,w]=Ee(()=>{const n=P(Q.flushSync,e,a,r),o=P(Q.flushSync,d,f,h);return[n,o,Oe(n,o),B(n,!1),B(o,!0)]});e!==i._getItemsLength()&&i._update(U,[e]),d!==s._getItemsLength()&&s._update(U,[d]);const[ye,be]=m(i,i._getRange,W+v),[xe,we]=m(s,s._getRange,W+v),O=m(i,i._getScrollDirection,F),z=m(s,s._getScrollDirection,F),_e=m(i,i._getJumpCount,K),Ie=m(s,s._getJumpCount,K),Se=m(i,i._getCorrectedScrollSize,v,!0),Ce=m(s,s._getCorrectedScrollSize,v,!0),D=p.useRef(null),Ve=O!==$,Te=z!==$;H(()=>{const n=D[ve],o=N._observeRoot(n),g=x._initRoot(n),_=w._initRoot(n);return()=>{o(),g(),_()}},[]),H(()=>{const n=i._flushJump();n&&x._fixScrollJump(n)},[_e]),H(()=>{const n=s._flushJump();n&&w._fixScrollJump(n)},[Ie]),p.useImperativeHandle(C,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[s._getCorrectedScrollSize(),i._getCorrectedScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(n,o){w._scrollToIndex(n),x._scrollToIndex(o)},scrollTo(n,o){w._scrollTo(n),x._scrollTo(o)},scrollBy(n,o){w._scrollBy(n),x._scrollBy(o)}}),[]);const M=p.useMemo(()=>{const n=new Map;return(o,g)=>{let _=n.get(L(o,g));return _||n.set(L(o,g),_=t({rowIndex:o,colIndex:g})),_}},[t]),A=Y(ye,c,O),q=Z(be,c,O,e),j=Y(xe,c,z),J=Z(we,c,z,d),Ge=p.useMemo(()=>{const n=[];for(let o=A;o<=q;o++)for(let g=j;g<=J;g++)n.push(l(ze,{_resizer:N,_vStore:i,_hStore:s,_rowIndex:o,_colIndex:g,_element:S,_children:M(o,g)},L(o,g)));return n},[M,A,q,j,J]);return l(I,{ref:D,width:Ce,height:Se,scrolling:Ve||Te,attrs:p.useMemo(()=>({...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...b.style}}),ke(b)),children:Ge})});try{y.displayName="VGrid",y.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const qe={component:y},V={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},T={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},G={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[u("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>l("div",{children:"Hello world!"}))]})})},R={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[u("div",{children:[t," / ",e]}),l("div",{children:Array.from({length:e%4+1},()=>l("span",{children:"Hello world!"}))})]})})},E={render:()=>l(y,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},k={render:()=>{const[e,d]=p.useState([567,567]),[a,f]=p.useState([1e3,1e3]),c=p.useRef(null);return u("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[u("div",{children:[u("label",{children:["col",l("input",{type:"number",value:e[0],onChange:r=>{d(h=>[Number(r.target.value),h[1]])}})]}),u("label",{children:["row",l("input",{type:"number",value:e[1],onChange:r=>{d(h=>[h[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),l("button",{onClick:()=>{d([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),l("div",{children:u("div",{children:[u("label",{children:["x",l("input",{type:"number",value:a[0],onChange:r=>{f(h=>[Number(r.target.value),h[1]])}})]}),u("label",{children:["y",l("input",{type:"number",value:a[1],onChange:r=>{f(h=>[h[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollTo(a[0],a[1])},children:"scroll to offset"}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),l(y,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:h})=>u("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",h]})})]})}};var X,ee,ne;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=T.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,se;G.parameters={...G.parameters,docs:{...(le=G.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ie=G.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ae,ce;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ue,he,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(he=E.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var pe,ge,fe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const je=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{V as Default,G as DynamicHeight,R as DynamicWidth,T as Fixed,E as Rtl,k as ScrollTo,je as __namedExportsOrder,qe as default};
//# sourceMappingURL=VGrid.stories-9047154b.js.map
