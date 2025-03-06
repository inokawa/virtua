import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{u as T,r as ee,i as he,a as ge,A as L,g as y,U as O,c as C,b as me,d as pe}from"./useStatic-BVFjzciB.js";import{r as z}from"./index-uWwxbAOW.js";const G=(t,r)=>`${t}-${r}`,fe=c.memo(({_children:t,_resizer:r,_rowIndex:u,_colIndex:a,_top:g,_left:h,_height:n,_width:s,_hide:x,_element:V})=>{const b=c.useRef(null);return T(()=>r.$observeItem(b[ee],u,a),[a,u]),e.jsx(V,{ref:b,style:c.useMemo(()=>({display:"grid",position:"absolute",top:g,[he()?"right":"left"]:h,visibility:x?"hidden":"visible",minHeight:n,minWidth:s}),[g,h,s,n,x]),children:t})}),p=c.forwardRef(({children:t,row:r,col:u,cellHeight:a=40,cellWidth:g=100,overscan:h=2,initialRowCount:n,initialColCount:s,item:x="div",style:V,...b},H)=>{const[i,d,_,f]=ge(()=>{const o=C(r,a,h,n),l=C(u,g,h,s);return[o,l,me(o,l),pe(o,l)]});r!==i.$getItemsLength()&&i.$update(L,[r]),u!==d.$getItemsLength()&&d.$update(L,[u]);const[re,k]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[ne,N]=c.useReducer(d.$getStateVersion,void 0,d.$getStateVersion),[te,oe]=i.$getRange(),[le,se]=d.$getRange(),ie=i.$isScrolling(),de=d.$isScrolling(),ce=y(i),ae=y(d),E=c.useRef(null);T(()=>{const o=E[ee],l=i.$subscribe(O,m=>{m?z.flushSync(k):k()}),v=d.$subscribe(O,m=>{m?z.flushSync(N):N()});return _.$observeRoot(o),f.$observe(o),()=>{l(),v(),_.$dispose(),f.$dispose()}},[]),T(()=>{f.$fixScrollJump()},[re,ne]),c.useImperativeHandle(H,()=>({get scrollTop(){return i.$getScrollOffset()},get scrollLeft(){return d.$getScrollOffset()},get scrollHeight(){return y(i)},get scrollWidth(){return y(d)},get viewportHeight(){return i.$getViewportSize()},get viewportWidth(){return d.$getViewportSize()},scrollToIndex:f.$scrollToIndex,scrollTo:f.$scrollTo,scrollBy:f.$scrollBy}),[]);const ue=c.useMemo(()=>{const o=new Map;return(l,v)=>{let m=o.get(G(l,v));return m||o.set(G(l,v),m=t({rowIndex:l,colIndex:v})),m}},[t]),R=[];for(let o=te;o<=oe;o++)for(let l=le;l<=se;l++)R.push(e.jsx(fe,{_resizer:_,_rowIndex:o,_colIndex:l,_top:i.$getItemOffset(o),_left:d.$getItemOffset(l),_height:i.$getItemSize(o),_width:d.$getItemSize(l),_hide:i.$isUnmeasuredItem(o)||d.$isUnmeasuredItem(l),_element:x,_children:ue(o,l)},G(o,l)));return e.jsx("div",{ref:E,...b,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...V},children:e.jsx("div",{style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:ae,height:ce,pointerEvents:ie||de?"none":void 0},children:R})})});p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null}],displayName:"VGrid",props:{cellHeight:{defaultValue:{value:"40",computed:!1},required:!1},cellWidth:{defaultValue:{value:"100",computed:!1},required:!1},overscan:{defaultValue:{value:"2",computed:!1},required:!1},item:{defaultValue:{value:'"div"',computed:!1},required:!1}}};const we={component:p},w={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",r]})})},I={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100,height:(t%2+1)*100},children:[t," / ",r]})})},S={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(r%2+1)*100},children:[e.jsxs("div",{children:[t," / ",r]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},j={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:r})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",r]}),e.jsx("div",{children:Array.from({length:r%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},$={render:()=>{const[r,u]=c.useState([567,567]),[a,g]=c.useState([1e3,1e3]),h=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:r[0],onChange:n=>{u(s=>[Number(n.target.value),s[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:r[1],onChange:n=>{u(s=>[s[0],Number(n.target.value)])}})]}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollToIndex(r[0],r[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{u([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:a[0],onChange:n=>{g(s=>[Number(n.target.value),s[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:a[1],onChange:n=>{g(s=>[s[0],Number(n.target.value)])}})]}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollTo(a[0],a[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var n;(n=h.current)==null||n.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),e.jsx(p,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:n,colIndex:s})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[n," / ",s]})})]})}};var M,A,D;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(A=w.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,U,q;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(F=S.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var P,J,Q;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ie=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{w as Default,S as DynamicHeight,j as DynamicWidth,I as Fixed,$ as ScrollTo,Ie as __namedExportsOrder,we as default};
