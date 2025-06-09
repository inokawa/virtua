import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as a}from"./index-DRjF_FHU.js";import{u as G,r as p,i as Ie,a as Se,A as D,g as I,b as A,U as M,c as we,d as $e,e as W,f as je,h as _e}from"./useLatestRef-xAIQLCCh.js";import{r as U}from"./index-DU7l7UOc.js";function Ve(...r){return a.useCallback(n=>{for(const c of r)c&&Ee(c,n)},r)}function Ee(r,n){typeof r=="function"?r(n):r&&(r.current=n)}const k=(r,n)=>`${r}-${n}`,Te=a.memo(({_children:r,_resizer:n,_rowIndex:c,_colIndex:u,_top:f,_left:h,_height:t,_width:d,_hide:b,_element:V})=>{const y=a.useRef(null);return G(()=>n.$observeItem(y[p],c,u),[u,c]),e.jsx(V,{ref:y,style:a.useMemo(()=>({display:"grid",position:"absolute",top:f,[Ie()?"right":"left"]:h,visibility:b?"hidden":"visible",minHeight:t,minWidth:d}),[f,h,d,t,b]),children:r})}),m=a.forwardRef(({children:r,row:n,col:c,cellHeight:u=40,cellWidth:f=100,overscan:h=2,initialRowCount:t,initialColCount:d,item:b="div",domRef:V,innerDomRef:y,onScroll:H,onScrollEnd:oe,style:se,...ie},de)=>{const[s,i,E,g]=Se(()=>{const l=W(n,u,h,t),o=W(c,f,h,d);return[l,o,je(l,o),_e(l,o)]});n!==s.$getItemsLength()&&s.$update(D,[n]),c!==i.$getItemsLength()&&i.$update(D,[c]);const[ce,N]=a.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[ae,O]=a.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[ue,he]=s.$getRange(),[fe,me]=i.$getRange(),ge=s.$isScrolling(),pe=i.$isScrolling(),xe=I(s),ve=I(i),R=a.useRef(null),L=A(H),C=A(oe);G(()=>{const l=R[p],o=s.$subscribe(M,T=>{T?U.flushSync(N):N()}),x=i.$subscribe(M,T=>{T?U.flushSync(O):O()}),v=s.$subscribe(we,()=>{L[p]&&L[p](s.$getScrollOffset())}),ye=s.$subscribe($e,()=>{C[p]&&C[p]()});return E.$observeRoot(l),g.$observe(l),()=>{o(),x(),E.$dispose(),g.$dispose(),v(),ye()}},[]),G(()=>{g.$fixScrollJump()},[ce,ae]),a.useImperativeHandle(de,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return I(s)},get scrollWidth(){return I(i)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),s.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),s.$findEndIndex()],getItemOffset:(l,o)=>[i.$getItemOffset(l),s.$getItemOffset(o)],getItemSize:(l,o)=>[i.$getItemSize(l),s.$getItemSize(o)],scrollToIndex:g.$scrollToIndex,scrollTo:g.$scrollTo,scrollBy:g.$scrollBy}),[]);const be=a.useMemo(()=>{const l=new Map;return(o,x)=>{let v=l.get(k(o,x));return v||l.set(k(o,x),v=r({rowIndex:o,colIndex:x})),v}},[r]),z=[];for(let l=ue;l<=he;l++)for(let o=fe;o<=me;o++)z.push(e.jsx(Te,{_resizer:E,_rowIndex:l,_colIndex:o,_top:s.$getItemOffset(l),_left:i.$getItemOffset(o),_height:s.$getItemSize(l),_width:i.$getItemSize(o),_hide:s.$isUnmeasuredItem(l)||i.$isUnmeasuredItem(o),_element:b,_children:be(l,o)},k(l,o)));return e.jsx("div",{ref:Ve(R,V),...ie,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...se},children:e.jsx("div",{ref:y,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:ve,height:xe,pointerEvents:ge||pe?"none":void 0},children:z})})});m.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const Oe={component:m},S={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[r," / ",n]})})},w={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(r%2+1)*100},children:[r," / ",n]})})},$={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),Array.from({length:r%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},j={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(r%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},_={render:()=>{const[n,c]=a.useState([567,567]),[u,f]=a.useState([1e3,1e3]),h=a.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:t=>{c(d=>[Number(t.target.value),d[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:t=>{c(d=>[d[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{c([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:u[0],onChange:t=>{f(d=>[Number(t.target.value),d[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:u[1],onChange:t=>{f(d=>[d[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollTo(u[0],u[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var t;(t=h.current)==null||t.scrollBy(u[0],u[1])},children:"scroll by offset"})]})}),e.jsx(m,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:d})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",d]})})]})}};var q,B,P;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(le=(te=_.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Re=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{S as Default,$ as DynamicHeight,j as DynamicWidth,w as Fixed,_ as ScrollTo,Re as __namedExportsOrder,Oe as default};
