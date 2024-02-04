import{a as o,j as h}from"./jsx-runtime-sgeEVxPu.js";import{r as m}from"./index-yp3VsGQP.js";import{u as G,r as ce,i as Se,a as Ve,A,b as q,g as w,U as J,c as j,o as B,d as U,S as W,v as Ce,e as P,f as Te,h as F}from"./useRerender-6MP8R9Xy.js";import{r as K}from"./index-8dy-jdxy.js";const Ge=m.forwardRef(({children:l,attrs:e,width:i,height:s,scrolling:p},d)=>o("div",{ref:d,...e,children:o("div",{style:m.useMemo(()=>({position:"relative",visibility:"hidden",width:i??"100%",height:s??"100%",pointerEvents:p?"none":"auto"}),[i,s,p]),children:l})})),k=(l,e)=>`${l}-${e}`,Re=m.memo(({_children:l,_resizer:e,_rowIndex:i,_colIndex:s,_top:p,_left:d,_height:t,_width:a,_hide:_,_element:R})=>{const v=m.useRef(null);return G(()=>e._observeItem(v[ce],i,s),[s,i]),o(R,{ref:v,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:p,[Se()?"right":"left"]:d,visibility:_?"hidden":"visible",minHeight:t,minWidth:a}),[p,d,a,t,_]),children:l})}),f=m.forwardRef(({children:l,row:e,col:i,cellHeight:s=40,cellWidth:p=100,overscan:d=2,initialRowCount:t,initialColCount:a,components:{Root:_=Ge,Cell:R="div"}={},...v},L)=>{const[c,u,E,b,y]=Ve(()=>{const n=P(e,s,t),r=P(i,p,a);return[n,r,Te(n,r),F(n,!1),F(r,!0)]});e!==c._getItemsLength()&&c._update(A,[e]),i!==u._getItemsLength()&&u._update(A,[i]);const O=q(c),z=q(u),[ue,he]=c._getRange(),[me,pe]=u._getRange(),H=c._getScrollDirection(),N=u._getScrollDirection(),fe=c._getJumpCount(),ge=u._getJumpCount(),ve=w(c),be=w(u),D=m.useRef(null);G(()=>{const n=D[ce],r=c._subscribe(J+j,g=>{g?K.flushSync(O):O()}),x=u._subscribe(J+j,g=>{g?K.flushSync(z):z()});return E._observeRoot(n),b._observe(n),y._observe(n),()=>{r(),x(),E._dispose(),b._dispose(),y._dispose()}},[]),G(()=>{b._fixScrollJump()},[fe]),G(()=>{y._fixScrollJump()},[ge]),m.useImperativeHandle(L,()=>({get scrollOffset(){return[u._getScrollOffset(),c._getScrollOffset()]},get scrollSize(){return[w(u),w(c)]},get viewportSize(){return[u._getViewportSize(),c._getViewportSize()]},scrollToIndex(n,r){y._scrollToIndex(n),b._scrollToIndex(r)},scrollTo(n,r){y._scrollTo(n),b._scrollTo(r)},scrollBy(n,r){y._scrollBy(n),b._scrollBy(r)}}),[]);const ye=m.useMemo(()=>{const n=new Map;return(r,x)=>{let g=n.get(k(r,x));return g||n.set(k(r,x),g=l({rowIndex:r,colIndex:x})),g}},[l]),xe=B(ue,d,H),_e=U(he,d,H,e),we=B(me,d,N),Ie=U(pe,d,N,i),M=[];for(let n=xe;n<=_e;n++)for(let r=we;r<=Ie;r++)M.push(o(Re,{_resizer:E,_rowIndex:n,_colIndex:r,_top:c._getItemOffset(n),_left:u._getItemOffset(r),_height:c._getItemSize(n),_width:u._getItemSize(r),_hide:c._isUnmeasuredItem(n)||u._isUnmeasuredItem(r),_element:R,_children:ye(n,r)},k(n,r)));return o(_,{ref:D,width:be,height:ve,scrolling:H!==W||N!==W,attrs:m.useMemo(()=>({...v,style:{overflow:"auto",overflowAnchor:"none",flex:"none",contain:"strict",width:"100%",height:"100%",...v.style}}),Ce(v)),children:M})});try{f.displayName="VGrid",f.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: keyof IntrinsicElements | ... 1 more ...; } | undefined"}}}}}catch{}const Le={component:f},I={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",e]})})},S={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100,height:(l%2+1)*100},children:[l," / ",e]})})},V={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(e%2+1)*100},children:[h("div",{children:[l," / ",e]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},C={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:e})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[h("div",{children:[l," / ",e]}),o("div",{children:Array.from({length:e%4+1},()=>o("span",{children:"Hello world!"}))})]})})},T={render:()=>{const[e,i]=m.useState([567,567]),[s,p]=m.useState([1e3,1e3]),d=m.useRef(null);return h("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[h("div",{children:[h("label",{children:["col",o("input",{type:"number",value:e[0],onChange:t=>{i(a=>[Number(t.target.value),a[1]])}})]}),h("label",{children:["row",o("input",{type:"number",value:e[1],onChange:t=>{i(a=>[a[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=d.current)==null||t.scrollToIndex(e[0],e[1])},children:"scroll to index"}),o("button",{onClick:()=>{i([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:h("div",{children:[h("label",{children:["x",o("input",{type:"number",value:s[0],onChange:t=>{p(a=>[Number(t.target.value),a[1]])}})]}),h("label",{children:["y",o("input",{type:"number",value:s[1],onChange:t=>{p(a=>[a[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=d.current)==null||t.scrollTo(s[0],s[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=d.current)==null||t.scrollBy(s[0],s[1])},children:"scroll by offset"})]})}),o(f,{ref:d,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:a})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",a]})})]})}};var $,Z,Q;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var X,Y,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ne,re,te;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=V.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,le,ie;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,de,ae;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ae=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};const Oe=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{I as Default,V as DynamicHeight,C as DynamicWidth,S as Fixed,T as ScrollTo,Oe as __namedExportsOrder,Le as default};
