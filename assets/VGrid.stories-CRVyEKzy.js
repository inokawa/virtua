import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{u as H,r as f,i as be,a as ye,A,g as S,b as z,U as M,c as Se,d as we,e as W,f as Ie,h as $e}from"./useLatestRef-BsCZ8dmY.js";import{r as U}from"./index-uWwxbAOW.js";const G=(t,r)=>`${t}-${r}`,je=c.memo(({_children:t,_resizer:r,_rowIndex:u,_colIndex:a,_top:g,_left:h,_height:n,_width:i,_hide:b,_element:V})=>{const y=c.useRef(null);return H(()=>r.$observeItem(y[f],u,a),[a,u]),e.jsx(V,{ref:y,style:c.useMemo(()=>({display:"grid",position:"absolute",top:g,[be()?"right":"left"]:h,visibility:b?"hidden":"visible",minHeight:n,minWidth:i}),[g,h,i,n,b]),children:t})}),m=c.forwardRef(({children:t,row:r,col:u,cellHeight:a=40,cellWidth:g=100,overscan:h=2,initialRowCount:n,initialColCount:i,item:b="div",onScroll:V,onScrollEnd:y,style:k,...le},se)=>{const[s,d,T,p]=ye(()=>{const o=W(r,a,h,n),l=W(u,g,h,i);return[o,l,Ie(o,l),$e(o,l)]});r!==s.$getItemsLength()&&s.$update(A,[r]),u!==d.$getItemsLength()&&d.$update(A,[u]);const[ie,N]=c.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[de,L]=c.useReducer(d.$getStateVersion,void 0,d.$getStateVersion),[ce,ae]=s.$getRange(),[ue,he]=d.$getRange(),ge=s.$isScrolling(),me=d.$isScrolling(),pe=S(s),fe=S(d),R=c.useRef(null),O=z(V),C=z(y);H(()=>{const o=R[f],l=s.$subscribe(M,E=>{E?U.flushSync(N):N()}),v=d.$subscribe(M,E=>{E?U.flushSync(L):L()}),x=s.$subscribe(Se,()=>{O[f]&&O[f](s.$getScrollOffset())}),xe=s.$subscribe(we,()=>{C[f]&&C[f]()});return T.$observeRoot(o),p.$observe(o),()=>{l(),v(),T.$dispose(),p.$dispose(),x(),xe()}},[]),H(()=>{p.$fixScrollJump()},[ie,de]),c.useImperativeHandle(se,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return d.$getScrollOffset()},get scrollHeight(){return S(s)},get scrollWidth(){return S(d)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return d.$getViewportSize()},scrollToIndex:p.$scrollToIndex,scrollTo:p.$scrollTo,scrollBy:p.$scrollBy}),[]);const ve=c.useMemo(()=>{const o=new Map;return(l,v)=>{let x=o.get(G(l,v));return x||o.set(G(l,v),x=t({rowIndex:l,colIndex:v})),x}},[t]),D=[];for(let o=ce;o<=ae;o++)for(let l=ue;l<=he;l++)D.push(e.jsx(je,{_resizer:T,_rowIndex:o,_colIndex:l,_top:s.$getItemOffset(o),_left:d.$getItemOffset(l),_height:s.$getItemSize(o),_width:d.$getItemSize(l),_hide:s.$isUnmeasuredItem(o)||d.$isUnmeasuredItem(l),_element:b,_children:ve(o,l)},G(o,l)));return e.jsx("div",{ref:R,...le,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...k},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:fe,height:pe,pointerEvents:ge||me?"none":void 0},children:D})})});m.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const Ge={component:m},w={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",r]})})},I={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100,height:(t%2+1)*100},children:[t," / ",r]})})},$={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100},children:[e.jsxs("div",{children:[t," / ",r]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},j={render:()=>e.jsx(m,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",r]}),e.jsx("div",{children:Array.from({length:r%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},_={render:()=>{const[r,u]=c.useState([567,567]),[a,g]=c.useState([1e3,1e3]),h=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:r[0],onChange:n=>{u(i=>[Number(n.target.value),i[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:r[1],onChange:n=>{u(i=>[i[0],Number(n.target.value)])}})]}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollToIndex(r[0],r[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:a[0],onChange:n=>{g(i=>[Number(n.target.value),i[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:a[1],onChange:n=>{g(i=>[i[0],Number(n.target.value)])}})]}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollTo(a[0],a[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),e.jsx(m,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:i})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",i]})})]})}};var q,B,P;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(B=w.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,K,J;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(K=I.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Y;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=$.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,oe;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=_.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const He=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,$ as DynamicHeight,j as DynamicWidth,I as Fixed,_ as ScrollTo,He as __namedExportsOrder,Ge as default};
