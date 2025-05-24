import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{u as G,r as p,i as be,a as ye,A as D,g as I,b as A,U as M,c as Ie,d as Se,e as W,f as we,h as $e}from"./useLatestRef-BsCZ8dmY.js";import{r as U}from"./index-DU7l7UOc.js";const k=(s,n)=>`${s}-${n}`,je=c.memo(({_children:s,_resizer:n,_rowIndex:u,_colIndex:a,_top:m,_left:h,_height:r,_width:d,_hide:b,_element:V})=>{const y=c.useRef(null);return G(()=>n.$observeItem(y[p],u,a),[a,u]),e.jsx(V,{ref:y,style:c.useMemo(()=>({display:"grid",position:"absolute",top:m,[be()?"right":"left"]:h,visibility:b?"hidden":"visible",minHeight:r,minWidth:d}),[m,h,d,r,b]),children:s})}),f=c.forwardRef(({children:s,row:n,col:u,cellHeight:a=40,cellWidth:m=100,overscan:h=2,initialRowCount:r,initialColCount:d,item:b="div",onScroll:V,onScrollEnd:y,style:H,...oe},se)=>{const[o,i,E,g]=ye(()=>{const t=W(n,a,h,r),l=W(u,m,h,d);return[t,l,we(t,l),$e(t,l)]});n!==o.$getItemsLength()&&o.$update(D,[n]),u!==i.$getItemsLength()&&i.$update(D,[u]);const[ie,N]=c.useReducer(o.$getStateVersion,void 0,o.$getStateVersion),[de,O]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[ce,ae]=o.$getRange(),[ue,he]=i.$getRange(),me=o.$isScrolling(),fe=i.$isScrolling(),ge=I(o),pe=I(i),L=c.useRef(null),R=A(V),C=A(y);G(()=>{const t=L[p],l=o.$subscribe(M,T=>{T?U.flushSync(N):N()}),x=i.$subscribe(M,T=>{T?U.flushSync(O):O()}),v=o.$subscribe(Ie,()=>{R[p]&&R[p](o.$getScrollOffset())}),ve=o.$subscribe(Se,()=>{C[p]&&C[p]()});return E.$observeRoot(t),g.$observe(t),()=>{l(),x(),E.$dispose(),g.$dispose(),v(),ve()}},[]),G(()=>{g.$fixScrollJump()},[ie,de]),c.useImperativeHandle(se,()=>({get scrollTop(){return o.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return I(o)},get scrollWidth(){return I(i)},get viewportHeight(){return o.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),o.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),o.$findEndIndex()],getItemOffset:(t,l)=>[i.$getItemOffset(t),o.$getItemOffset(l)],getItemSize:(t,l)=>[i.$getItemSize(t),o.$getItemSize(l)],scrollToIndex:g.$scrollToIndex,scrollTo:g.$scrollTo,scrollBy:g.$scrollBy}),[]);const xe=c.useMemo(()=>{const t=new Map;return(l,x)=>{let v=t.get(k(l,x));return v||t.set(k(l,x),v=s({rowIndex:l,colIndex:x})),v}},[s]),z=[];for(let t=ce;t<=ae;t++)for(let l=ue;l<=he;l++)z.push(e.jsx(je,{_resizer:E,_rowIndex:t,_colIndex:l,_top:o.$getItemOffset(t),_left:i.$getItemOffset(l),_height:o.$getItemSize(t),_width:i.$getItemSize(l),_hide:o.$isUnmeasuredItem(t)||i.$isUnmeasuredItem(l),_element:b,_children:xe(t,l)},k(t,l)));return e.jsx("div",{ref:L,...oe,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...H},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:pe,height:ge,pointerEvents:me||fe?"none":void 0},children:z})})});f.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const ke={component:f},S={render:()=>e.jsx(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:s,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[s," / ",n]})})},w={render:()=>e.jsx(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:s,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(s%2+1)*100},children:[s," / ",n]})})},$={render:()=>e.jsx(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:s,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[s," / ",n]}),Array.from({length:s%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},j={render:()=>e.jsx(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:s,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(s%2+1)*100},children:[e.jsxs("div",{children:[s," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},_={render:()=>{const[n,u]=c.useState([567,567]),[a,m]=c.useState([1e3,1e3]),h=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:r=>{u(d=>[Number(r.target.value),d[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:r=>{u(d=>[d[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=h.current)==null||r.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:a[0],onChange:r=>{m(d=>[Number(r.target.value),d[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:a[1],onChange:r=>{m(d=>[d[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=h.current)==null||r.scrollTo(a[0],a[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var r;(r=h.current)==null||r.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),e.jsx(f,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:d})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",d]})})]})}};var q,B,P;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(B=S.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,K,X;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(X=(K=w.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,J,Q;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(J=$.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ne;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,le;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(te=_.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Ge=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{S as Default,$ as DynamicHeight,j as DynamicWidth,w as Fixed,_ as ScrollTo,Ge as __namedExportsOrder,ke as default};
