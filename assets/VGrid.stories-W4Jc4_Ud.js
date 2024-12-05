import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as h}from"./index-DRjF_FHU.js";import{u as H,r as ne,i as ge,a as me,A as L,b as O,g as y,U as R,c as z,d as pe,e as fe}from"./useRerender-C-5Q3GJM.js";import{r as M}from"./index-uWwxbAOW.js";const T=(t,n)=>`${t}-${n}`,ve=h.memo(({_children:t,_resizer:n,_rowIndex:a,_colIndex:c,_top:g,_left:u,_height:r,_width:s,_hide:x,_element:_})=>{const b=h.useRef(null);return H(()=>n.$observeItem(b[ne],a,c),[c,a]),e.jsx(_,{ref:b,style:h.useMemo(()=>({display:"grid",position:"absolute",top:g,[ge()?"right":"left"]:u,visibility:x?"hidden":"visible",minHeight:r,minWidth:s}),[g,u,s,r,x]),children:t})}),p=h.forwardRef(({children:t,row:n,col:a,cellHeight:c=40,cellWidth:g=100,overscan:u=2,initialRowCount:r,initialColCount:s,item:x="div",style:_,...b},k)=>{const[i,d,G,f]=me(()=>{const l=z(n,c,u,r),o=z(a,g,u,s);return[l,o,pe(l,o),fe(l,o)]});n!==i.$getItemsLength()&&i.$update(L,[n]),a!==d.$getItemsLength()&&d.$update(L,[a]);const V=O(i),N=O(d),[re,te]=i.$getRange(),[le,oe]=d.$getRange(),se=i.$isScrolling(),ie=d.$isScrolling(),de=i.$getJumpCount(),ce=d.$getJumpCount(),ae=y(i),ue=y(d),C=h.useRef(null);H(()=>{const l=C[ne],o=i.$subscribe(R,m=>{m?M.flushSync(V):V()}),v=d.$subscribe(R,m=>{m?M.flushSync(N):N()});return G.$observeRoot(l),f.$observe(l),()=>{o(),v(),G.$dispose(),f.$dispose()}},[]),H(()=>{f.$fixScrollJump()},[de,ce]),h.useImperativeHandle(k,()=>({get scrollTop(){return i.$getScrollOffset()},get scrollLeft(){return d.$getScrollOffset()},get scrollHeight(){return y(i)},get scrollWidth(){return y(d)},get viewportHeight(){return i.$getViewportSize()},get viewportWidth(){return d.$getViewportSize()},scrollToIndex:f.$scrollToIndex,scrollTo:f.$scrollTo,scrollBy:f.$scrollBy}),[]);const he=h.useMemo(()=>{const l=new Map;return(o,v)=>{let m=l.get(T(o,v));return m||l.set(T(o,v),m=t({rowIndex:o,colIndex:v})),m}},[t]),E=[];for(let l=re;l<=te;l++)for(let o=le;o<=oe;o++)E.push(e.jsx(ve,{_resizer:G,_rowIndex:l,_colIndex:o,_top:i.$getItemOffset(l),_left:d.$getItemOffset(o),_height:i.$getItemSize(l),_width:d.$getItemSize(o),_hide:i.$isUnmeasuredItem(l)||d.$isUnmeasuredItem(o),_element:x,_children:he(l,o)},T(l,o)));return e.jsx("div",{ref:C,...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",..._},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:ue,height:ae,pointerEvents:se||ie?"none":void 0},children:E})})});p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const Ie={component:p},w={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",n]})})},I={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(t%2+1)*100},children:[t," / ",n]})})},S={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},j={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},$={render:()=>{const[n,a]=h.useState([567,567]),[c,g]=h.useState([1e3,1e3]),u=h.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:r=>{a(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:r=>{a(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{a([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:c[0],onChange:r=>{g(s=>[Number(r.target.value),s[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:c[1],onChange:r=>{g(s=>[s[0],Number(r.target.value)])}})]}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollTo(c[0],c[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var r;(r=u.current)==null||r.scrollBy(c[0],c[1])},children:"scroll by offset"})]})}),e.jsx(p,{ref:u,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:r,colIndex:s})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[r," / ",s]})})]})}};var A,D,W;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(D=w.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var J,U,q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(q=(U=I.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var B,F,K;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(F=S.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var P,Q,X;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Se=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,S as DynamicHeight,j as DynamicWidth,I as Fixed,$ as ScrollTo,Se as __namedExportsOrder,Ie as default};
