import{j as e}from"./jsx-runtime-DCrfGL6_.js";import{r as h}from"./index-98wxwTcn.js";import{N as le,u as k,r as se,i as ye,a as _e,A as D,b as z,g as y,U as M,c as A,S as W,d as U,e as Ie,f as we}from"./useRerender-D8u2whrP.js";import{r as J}from"./index-SCI4cgSJ.js";const H=(t,n)=>`${t}-${n}`,Se=h.memo(({_children:t,_resizer:n,_rowIndex:c,_colIndex:a,_top:g,_left:u,_height:r,_width:s,_hide:x,_element:G})=>{const b=h.useRef(le);return k(()=>n._observeItem(b[se],c,a),[a,c]),e.jsx(G,{ref:b,style:h.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:g,[ye()?"right":"left"]:u,visibility:x?"hidden":"visible",minHeight:r,minWidth:s}),[g,u,s,r,x]),children:t})}),p=h.forwardRef(({children:t,row:n,col:c,cellHeight:a=40,cellWidth:g=100,overscan:u=2,initialRowCount:r,initialColCount:s,item:x="div",style:G,...b},V)=>{const[d,i,T,f]=_e(()=>{const o=U(n,a,r),l=U(c,g,s);return[o,l,Ie(o,l),we(o,l)]});n!==d._getItemsLength()&&d._update(D,[n]),c!==i._getItemsLength()&&i._update(D,[c]);const E=z(d),N=z(i),[de,ie]=d._getRange(),[ce,ae]=i._getRange(),L=d._getScrollDirection(),C=i._getScrollDirection(),ue=d._getJumpCount(),he=i._getJumpCount(),ge=y(d),me=y(i),R=h.useRef(le);k(()=>{const o=R[se],l=d._subscribe(M,m=>{m?J.flushSync(E):E()}),v=i._subscribe(M,m=>{m?J.flushSync(N):N()});return T._observeRoot(o),f._observe(o),()=>{l(),v(),T._dispose(),f._dispose()}},[]),k(()=>{f._fixScrollJump()},[ue,he]),h.useImperativeHandle(V,()=>({get scrollTop(){return d._getScrollOffset()},get scrollLeft(){return i._getScrollOffset()},get scrollHeight(){return y(d)},get scrollWidth(){return y(i)},get viewportHeight(){return d._getViewportSize()},get viewportWidth(){return i._getViewportSize()},scrollToIndex:f._scrollToIndex,scrollTo:f._scrollTo,scrollBy:f._scrollBy}),[]);const pe=h.useMemo(()=>{const o=new Map;return(l,v)=>{let m=o.get(H(l,v));return m||o.set(H(l,v),m=t({rowIndex:l,colIndex:v})),m}},[t]),[fe,ve]=A(de,ie,u,L,n),[xe,be]=A(ce,ae,u,C,c),O=[];for(let o=fe;o<=ve;o++)for(let l=xe;l<=be;l++)O.push(e.jsx(Se,{_resizer:T,_rowIndex:o,_colIndex:l,_top:d._getItemOffset(o),_left:i._getItemOffset(l),_height:d._getItemSize(o),_width:i._getItemSize(l),_hide:d._isUnmeasuredItem(o)||i._isUnmeasuredItem(l),_element:x,_children:pe(o,l)},H(o,l)));return e.jsx("div",{ref:R,...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...G},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:me,height:ge,pointerEvents:L!==W||C!==W?"none":"auto"},children:O})})});p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const ke={component:p},_={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",n]})})},I={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(t%2+1)*100},children:[t," / ",n]})})},w={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},S={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},j={render:()=>{const[n,c]=h.useState([567,567]),[a,g]=h.useState([1e3,1e3]),u=h.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:r=>{c(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:r=>{c(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{c([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:a[0],onChange:r=>{g(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:a[1],onChange:r=>{g(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollTo(a[0],a[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),e.jsx(p,{ref:u,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:s})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",s]})})]})}};var q,B,F;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(B=_.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var K,P,$;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(P=I.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=j.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Ve=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{_ as Default,w as DynamicHeight,S as DynamicWidth,I as Fixed,j as ScrollTo,Ve as __namedExportsOrder,ke as default};
