import{a as o,j as h}from"./jsx-runtime-sgeEVxPu.js";import{r as m}from"./index-yp3VsGQP.js";import{u as G,r as ce,i as Se,a as Ve,A,b as q,g as w,U as J,c as j,o as B,d as U,S as W,v as Ce,e as P,f as Te,h as F}from"./useRerender-Ag38ecjg.js";import{r as K}from"./index-8dy-jdxy.js";const Ge=m.forwardRef(({children:l,attrs:n,width:d,height:a,scrolling:p},c)=>o("div",{ref:c,...n,children:o("div",{style:m.useMemo(()=>({position:"relative",visibility:"hidden",width:d??"100%",height:a??"100%",pointerEvents:p?"none":"auto"}),[d,a,p]),children:l})})),k=(l,n)=>`${l}-${n}`,Re=m.memo(({_children:l,_resizer:n,_rowIndex:d,_colIndex:a,_top:p,_left:c,_height:t,_width:u,_hide:_,_element:R})=>{const v=m.useRef(null);return G(()=>n._observeItem(v[ce],d,a),[a,d]),o(R,{ref:v,style:m.useMemo(()=>({display:"grid",margin:0,padding:0,position:"absolute",top:p,[Se()?"right":"left"]:c,visibility:_?"hidden":"visible",minHeight:t,minWidth:u}),[p,c,u,t,_]),children:l})}),f=m.forwardRef(({children:l,row:n,col:d,cellHeight:a=40,cellWidth:p=100,overscan:c=2,initialRowCount:t,initialColCount:u,components:{Root:_=Ge,Cell:R="div"}={},...v},L)=>{const[i,s,E,b,y]=Ve(()=>{const e=P(n,a,t),r=P(d,p,u);return[e,r,Te(e,r),F(e,!1),F(r,!0)]});n!==i._getItemsLength()&&i._update(A,[n]),d!==s._getItemsLength()&&s._update(A,[d]);const O=q(i),z=q(s),[ue,he]=i._getRange(),[me,pe]=s._getRange(),H=i._getScrollDirection(),N=s._getScrollDirection(),fe=i._getJumpCount(),ge=s._getJumpCount(),ve=w(i),be=w(s),D=m.useRef(null);G(()=>{const e=D[ce],r=i._subscribe(J+j,g=>{g?K.flushSync(O):O()}),x=s._subscribe(J+j,g=>{g?K.flushSync(z):z()});return E._observeRoot(e),b._observe(e),y._observe(e),()=>{r(),x(),E._dispose(),b._dispose(),y._dispose()}},[]),G(()=>{const e=i._flushJump();e&&b._fixScrollJump(e)},[fe]),G(()=>{const e=s._flushJump();e&&y._fixScrollJump(e)},[ge]),m.useImperativeHandle(L,()=>({get scrollOffset(){return[s._getScrollOffset(),i._getScrollOffset()]},get scrollSize(){return[w(s),w(i)]},get viewportSize(){return[s._getViewportSize(),i._getViewportSize()]},scrollToIndex(e,r){y._scrollToIndex(e),b._scrollToIndex(r)},scrollTo(e,r){y._scrollTo(e),b._scrollTo(r)},scrollBy(e,r){y._scrollBy(e),b._scrollBy(r)}}),[]);const ye=m.useMemo(()=>{const e=new Map;return(r,x)=>{let g=e.get(k(r,x));return g||e.set(k(r,x),g=l({rowIndex:r,colIndex:x})),g}},[l]),xe=B(ue,c,H),_e=U(he,c,H,n),we=B(me,c,N),Ie=U(pe,c,N,d),M=[];for(let e=xe;e<=_e;e++)for(let r=we;r<=Ie;r++)M.push(o(Re,{_resizer:E,_rowIndex:e,_colIndex:r,_top:i._getItemOffset(e),_left:s._getItemOffset(r),_height:i._getItemSize(e),_width:s._getItemSize(r),_hide:i._isUnmeasuredItem(e)||s._isUnmeasuredItem(r),_element:R,_children:ye(e,r)},k(e,r)));return o(_,{ref:D,width:be,height:ve,scrolling:H!==W||N!==W,attrs:m.useMemo(()=>({...v,style:{overflow:"auto",overflowAnchor:"none",flex:"none",contain:"strict",width:"100%",height:"100%",...v.style}}),Ce(v)),children:M})});try{f.displayName="VGrid",f.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",displayName:"VGrid",props:{children:{defaultValue:null,description:"A function to create elements rendered by this component.",name:"children",required:!0,type:{name:"(arg: { rowIndex: number; colIndex: number; }) => ReactNode"}},row:{defaultValue:null,description:"Total row length of grid.",name:"row",required:!0,type:{name:"number"}},col:{defaultValue:null,description:"Total column length of grid.",name:"col",required:!0,type:{name:"number"}},cellHeight:{defaultValue:{value:"40"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,name:"cellHeight",required:!1,type:{name:"number"}},cellWidth:{defaultValue:{value:"100"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,name:"cellWidth",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"2"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,name:"overscan",required:!1,type:{name:"number"}},initialRowCount:{defaultValue:null,description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialRowCount",required:!1,type:{name:"number"}},initialColCount:{defaultValue:null,description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialColCount",required:!1,type:{name:"number"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Cell?: keyof IntrinsicElements | ... 1 more ...; } | undefined"}}}}}catch{}const Le={component:f},I={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[l," / ",n]})})},S={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(l%2+1)*100},children:[l," / ",n]})})},V={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[h("div",{children:[l," / ",n]}),Array.from({length:l%8+1},()=>o("div",{children:"Hello world!"}))]})})},C={render:()=>o(f,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:l,colIndex:n})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(l%2+1)*100},children:[h("div",{children:[l," / ",n]}),o("div",{children:Array.from({length:n%4+1},()=>o("span",{children:"Hello world!"}))})]})})},T={render:()=>{const[n,d]=m.useState([567,567]),[a,p]=m.useState([1e3,1e3]),c=m.useRef(null);return h("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[h("div",{children:[h("label",{children:["col",o("input",{type:"number",value:n[0],onChange:t=>{d(u=>[Number(t.target.value),u[1]])}})]}),h("label",{children:["row",o("input",{type:"number",value:n[1],onChange:t=>{d(u=>[u[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),o("button",{onClick:()=>{d([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),o("div",{children:h("div",{children:[h("label",{children:["x",o("input",{type:"number",value:a[0],onChange:t=>{p(u=>[Number(t.target.value),u[1]])}})]}),h("label",{children:["y",o("input",{type:"number",value:a[1],onChange:t=>{p(u=>[u[0],Number(t.target.value)])}})]}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollTo(a[0],a[1])},children:"scroll to offset"}),o("button",{onClick:()=>{var t;(t=c.current)==null||t.scrollBy(a[0],a[1])},children:"scroll by offset"})]})}),o(f,{ref:c,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:u})=>h("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",u]})})]})}};var $,Z,Q;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
