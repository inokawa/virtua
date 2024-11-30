import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{u as k,r as ne,i as ge,a as me,A as O,b as R,g as y,U as z,c as M,d as pe,e as fe}from"./useRerender-Ba-kRDiv.js";import{r as A}from"./index-uWwxbAOW.js";const H=(t,n)=>`${t}-${n}`,ve=h.memo(({_children:t,_resizer:n,_rowIndex:a,_colIndex:c,_top:g,_left:u,_height:r,_width:s,_hide:x,_element:G})=>{const b=h.useRef(null);return k(()=>n._observeItem(b[ne],a,c),[c,a]),e.jsx(G,{ref:b,style:h.useMemo(()=>({display:"grid",position:"absolute",top:g,[ge()?"right":"left"]:u,visibility:x?"hidden":"visible",minHeight:r,minWidth:s}),[g,u,s,r,x]),children:t})}),p=h.forwardRef(({children:t,row:n,col:a,cellHeight:c=40,cellWidth:g=100,overscan:u=2,initialRowCount:r,initialColCount:s,item:x="div",style:G,...b},V)=>{const[i,d,T,f]=me(()=>{const l=M(n,c,u,r),o=M(a,g,u,s);return[l,o,pe(l,o),fe(l,o)]});n!==i._getItemsLength()&&i._update(O,[n]),a!==d._getItemsLength()&&d._update(O,[a]);const N=R(i),C=R(d),[re,te]=i._getRange(),[le,oe]=d._getRange(),se=i._isScrolling(),ie=d._isScrolling(),de=i._getJumpCount(),ce=d._getJumpCount(),ae=y(i),ue=y(d),E=h.useRef(null);k(()=>{const l=E[ne],o=i._subscribe(z,m=>{m?A.flushSync(N):N()}),v=d._subscribe(z,m=>{m?A.flushSync(C):C()});return T._observeRoot(l),f._observe(l),()=>{o(),v(),T._dispose(),f._dispose()}},[]),k(()=>{f._fixScrollJump()},[de,ce]),h.useImperativeHandle(V,()=>({get scrollTop(){return i._getScrollOffset()},get scrollLeft(){return d._getScrollOffset()},get scrollHeight(){return y(i)},get scrollWidth(){return y(d)},get viewportHeight(){return i._getViewportSize()},get viewportWidth(){return d._getViewportSize()},scrollToIndex:f._scrollToIndex,scrollTo:f._scrollTo,scrollBy:f._scrollBy}),[]);const he=h.useMemo(()=>{const l=new Map;return(o,v)=>{let m=l.get(H(o,v));return m||l.set(H(o,v),m=t({rowIndex:o,colIndex:v})),m}},[t]),L=[];for(let l=re;l<=te;l++)for(let o=le;o<=oe;o++)L.push(e.jsx(ve,{_resizer:T,_rowIndex:l,_colIndex:o,_top:i._getItemOffset(l),_left:d._getItemOffset(o),_height:i._getItemSize(l),_width:d._getItemSize(o),_hide:i._isUnmeasuredItem(l)||d._isUnmeasuredItem(o),_element:x,_children:he(l,o)},H(l,o)));return e.jsx("div",{ref:E,...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...G},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:ue,height:ae,pointerEvents:se||ie?"none":void 0},children:L})})});p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const we={component:p},_={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",n]})})},w={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(t%2+1)*100},children:[t," / ",n]})})},I={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},S={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},j={render:()=>{const[n,a]=h.useState([567,567]),[c,g]=h.useState([1e3,1e3]),u=h.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:r=>{a(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:r=>{a(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{a([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:c[0],onChange:r=>{g(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:c[1],onChange:r=>{g(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollTo(c[0],c[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollBy(c[0],c[1])},children:"scroll by offset"})]})}),e.jsx(p,{ref:u,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:s})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",s]})})]})}};var D,W,J;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(J=(W=_.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var U,q,B;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(q=w.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,K,P;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(K=I.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var $,Q,X;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ie=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{_ as Default,I as DynamicHeight,S as DynamicWidth,w as Fixed,j as ScrollTo,Ie as __namedExportsOrder,we as default};
