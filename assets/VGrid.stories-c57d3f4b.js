import{j as l,a as h}from"./jsx-runtime-c3d7f245.js";import{r as g}from"./index-c6dae603.js";import{b as m,c as N,r as ge,a as Re,A as J,v as Te,V as ke,d as Ee,j as v,g as U,o as He,p as P,U as B,k as W,l as F,m as K,n as Y}from"./Viewport-cbaf441a.js";import{r as $}from"./index-eb008d06.js";const O=(t,e)=>`${t}-${e}`,Ne=g.memo(({_children:t,_resizer:e,_vStore:d,_hStore:a,_rowIndex:f,_colIndex:c,_element:r,_isRtl:p})=>{const I=g.useRef(null),S=m(d,()=>d._getItemOffset(f),v,!0),C=m(a,()=>a._getItemOffset(c),v,!0),b=m(d,()=>d._isUnmeasuredItem(f),v,!0),V=m(a,()=>a._isUnmeasuredItem(c),v,!0),i=m(d,()=>d._getItemSize(f),v,!0),s=m(a,()=>a._getItemSize(c),v,!0);return N(()=>e._observeItem(I[ge],f,c),[c,f]),l(r,{ref:I,style:g.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:S,[p?"right":"left"]:C,visibility:b||V?"hidden":"visible",minHeight:i,minWidth:s}),[S,C,s,i,b,V]),children:t})}),y=g.forwardRef(({children:t,row:e,col:d,cellHeight:a=40,cellWidth:f=100,overscan:c=2,initialRowCount:r,initialColCount:p,rtl:I,components:{Root:S=ke,Cell:C="div"}=Ee,...b},V)=>{const[i,s,z,w,x,fe]=Re(()=>{const n=!!I,o=U($.flushSync,e,a,r),u=U($.flushSync,d,f,p);return[o,u,He(o,u),P(o,!1,n),P(u,!0,n),n]});e!==i._getItemsLength()&&i._update(J,[e]),d!==s._getItemsLength()&&s._update(J,[d]);const[ve,ye]=m(i,i._getRange,B+v),[be,we]=m(s,s._getRange,B+v),xe=m(i,i._getIsScrolling,W),_e=m(s,s._getIsScrolling,W),Ie=m(i,i._getJumpCount,F),Se=m(s,s._getJumpCount,F),Ce=m(i,i._getCorrectedScrollSize,v,!0),Ve=m(s,s._getCorrectedScrollSize,v,!0),L=g.useRef(null);N(()=>{const n=L[ge],o=z._observeRoot(n),u=w._initRoot(n),_=x._initRoot(n);return()=>{o(),u(),_()}},[]),N(()=>{const n=i._flushJump();n&&w._fixScrollJump(n)},[Ie]),N(()=>{const n=s._flushJump();n&&x._fixScrollJump(n)},[Se]),g.useImperativeHandle(V,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[s._getCorrectedScrollSize(),i._getCorrectedScrollSize()]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(n,o){x._scrollToIndex(n),w._scrollToIndex(o)},scrollTo(n,o){x._scrollTo(n),w._scrollTo(o)},scrollBy(n,o){x._scrollBy(n),w._scrollBy(o)}}),[]);const M=g.useMemo(()=>{const n=new Map;return(o,u)=>{let _=n.get(O(o,u));return _||n.set(O(o,u),_=t({rowIndex:o,colIndex:u})),_}},[t]),D=K(ve-c,0),A=Y(ye+c,e-1),q=K(be-c,0),j=Y(we+c,d-1),Ge=g.useMemo(()=>{const n=[];for(let o=D;o<=A;o++)for(let u=q;u<=j;u++)n.push(l(Ne,{_resizer:z,_vStore:i,_hStore:s,_rowIndex:o,_colIndex:u,_element:C,_children:M(o,u),_isRtl:fe},O(o,u)));return n},[M,D,A,q,j]);return l(S,{ref:L,width:Ve,height:Ce,scrolling:xe||_e,attrs:g.useMemo(()=>({...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...b.style}}),Te(b)),children:Ge})});try{y.displayName="VGrid",y.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: CustomCellComponentOrElement; }"}}}}}catch{}const De={component:y},G={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",e]})})},R={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(t%2+1)*100},children:[t," / ",e]})})},T={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[h("div",{children:[t," / ",e]}),Array.from({length:t%8+1},()=>l("div",{children:"Hello world!"}))]})})},k={render:()=>l(y,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[h("div",{children:[t," / ",e]}),l("div",{children:Array.from({length:e%4+1},()=>l("span",{children:"Hello world!"}))})]})})},E={render:()=>l(y,{style:{height:"100vh",direction:"rtl"},row:1e3,col:500,rtl:!0,children:({rowIndex:t,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:100},children:[t," / ",e]})})},H={render:()=>{const[e,d]=g.useState([567,567]),[a,f]=g.useState([1e3,1e3]),c=g.useRef(null);return h("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[h("div",{children:[h("label",{children:["col",l("input",{type:"number",value:e[0],onChange:r=>{d(p=>[Number(r.target.value),p[1]])}})]}),h("label",{children:["row",l("input",{type:"number",value:e[1],onChange:r=>{d(p=>[p[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollToIndex(e[0],e[1])},children:"scroll to index"}),l("button",{onClick:()=>{d([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),l("div",{children:h("div",{children:[h("label",{children:["x",l("input",{type:"number",value:a[0],onChange:r=>{f(p=>[Number(r.target.value),p[1]])}})]}),h("label",{children:["y",l("input",{type:"number",value:a[1],onChange:r=>{f(p=>[p[0],Number(r.target.value)])}})]}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollTo(a[0],a[1])},children:"scroll to offset"}),l("button",{onClick:()=>{var r;(r=c.current)==null||r.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),l(y,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:p})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",p]})})]})}};var Z,Q,X;G.parameters={...G.parameters,docs:{...(Z=G.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(X=(Q=G.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ne,re;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,oe,le;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,se,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=k.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ae,ce,ue;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ue=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var he,me,pe;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(pe=(me=H.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ae=["Default","Fixed","DynamicHeight","DynamicWidth","Rtl","ScrollTo"];export{G as Default,T as DynamicHeight,k as DynamicWidth,R as Fixed,E as Rtl,H as ScrollTo,Ae as __namedExportsOrder,De as default};
//# sourceMappingURL=VGrid.stories-c57d3f4b.js.map
