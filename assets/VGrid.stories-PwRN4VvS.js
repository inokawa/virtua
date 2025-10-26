import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-Cc_-dzvX.js";import{u as se,A as W,g as S,a as A,b as V,r as v,U as D,c as le,d as ie,e as Z,f as ae,h as de,i as ce}from"./useLatestRef-CQENRF1m.js";import{r as q}from"./index-DBaPupaA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKcxRtkc.js";function ue(...t){return c.useCallback(n=>{for(const a of t)a&&me(a,n)},t)}function me(t,n){typeof t=="function"?t(n):t&&(t.current=n)}const j=(t,n)=>`${t}-${n}`,he=c.memo(({_children:t,_resizer:n,_rowIndex:a,_colIndex:h,_top:w,_left:p,_height:l,_width:d,_hide:u,_element:m})=>{const g=c.useRef(null);return V(()=>n.$observeItem(g[v],a,h),[h,a]),e.jsx(m,{ref:g,style:c.useMemo(()=>({contain:"layout style",display:"grid",position:"absolute",top:w,[ce()?"right":"left"]:p,visibility:u?"hidden":"visible",minHeight:l,minWidth:d}),[w,p,d,l,u]),children:t})}),b=c.forwardRef(({children:t,row:n,col:a,cellHeight:h=40,cellWidth:w=100,bufferSize:p,initialRowCount:l,initialColCount:d,item:u="div",domRef:m,innerDomRef:g,onScroll:f,onScrollEnd:y,style:P,...U},B)=>{const[s,i,I,x]=se(()=>{const r=Z(n,h,l),o=Z(a,w,d);return[r,o,ae(r,o),de(r,o)]});n!==s.$getItemsLength()&&s.$update(W,[n]),a!==i.$getItemsLength()&&i.$update(W,[a]);const[F,G]=c.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[X,N]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),J=s.$isScrolling(),K=i.$isScrolling(),Y=S(s),Q=S(i),M=c.useRef(null),_=A(f),L=A(y);V(()=>{const r=M[v];return s.$subscribe(D,o=>{o?q.flushSync(G):G()}),i.$subscribe(D,o=>{o?q.flushSync(N):N()}),s.$subscribe(le,()=>{_[v]&&_[v](s.$getScrollOffset())}),s.$subscribe(ie,()=>{L[v]&&L[v]()}),I.$observeRoot(r),x.$observe(r),()=>{s.$dispose(),i.$dispose(),I.$dispose(),x.$dispose()}},[]),V(()=>{x.$fixScrollJump()},[F,X]),c.useImperativeHandle(B,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return S(s)},get scrollWidth(){return S(i)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),s.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),s.$findEndIndex()],getItemOffset:(r,o)=>[i.$getItemOffset(r),s.$getItemOffset(o)],getItemSize:(r,o)=>[i.$getItemSize(r),s.$getItemSize(o)],resizeCols(r){I.$resizeCols(r)},resizeRows(r){I.$resizeRows(r)},scrollToIndex:x.$scrollToIndex,scrollTo:x.$scrollTo,scrollBy:x.$scrollBy}),[]);const ee=c.useMemo(()=>{const r=new Map;return(o,$)=>{let z=r.get(j(o,$));return z||r.set(j(o,$),z=t({rowIndex:o,colIndex:$})),z}},[t]),[ne,te]=s.$getRange(p),[re,oe]=i.$getRange(p),O=[];for(let r=ne;r<=te;r++)for(let o=re;o<=oe;o++)O.push(e.jsx(he,{_resizer:I,_rowIndex:r,_colIndex:o,_top:s.$getItemOffset(r),_left:i.$getItemOffset(o),_height:s.$getItemSize(r),_width:i.$getItemSize(o),_hide:s.$isUnmeasuredItem(r)||i.$isUnmeasuredItem(o),_element:u,_children:ee(r,o)},j(r,o)));return e.jsx("div",{ref:ue(M,m),...U,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...P},children:e.jsx("div",{ref:g,style:{contain:"size paint style",overflowAnchor:"none",overflow:"clip",flex:"none",position:"relative",width:Q,height:Y,pointerEvents:J||K?"none":void 0},children:O})})});b.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"resizeCols",docblock:null,modifiers:[],params:[{name:"cols",optional:!1,type:null}],returns:null},{name:"resizeRows",docblock:null,modifiers:[],params:[{name:"rows",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(arg: {
  /**
   * row index of cell
   */
  rowIndex: number;
  /**
   * column index of cell
   */
  colIndex: number;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  /**
   * row index of cell
   */
  rowIndex: number;
  /**
   * column index of cell
   */
  colIndex: number;
}`,signature:{properties:[{key:"rowIndex",value:{name:"number",required:!0},description:"row index of cell"},{key:"colIndex",value:{name:"number",required:!0},description:"column index of cell"}]}},name:"arg"}],return:{name:"ReactNode"}}},description:"A function to create elements rendered by this component."},row:{required:!0,tsType:{name:"number"},description:"Total row length of grid."},col:{required:!0,tsType:{name:"number"},description:"Total column length of grid."},cellHeight:{required:!1,tsType:{name:"number"},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,defaultValue:{value:"40",computed:!1}},cellWidth:{required:!1,tsType:{name:"number"},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,defaultValue:{value:"100",computed:!1}},bufferSize:{required:!1,tsType:{name:"number"},description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`},initialRowCount:{required:!1,tsType:{name:"number"},description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR."},initialColCount:{required:!1,tsType:{name:"number"},description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR."},item:{required:!1,tsType:{name:"union",raw:"keyof JSX.IntrinsicElements | CustomCellComponent",elements:[{name:"JSX.IntrinsicElements"},{name:"ReactForwardRefExoticComponent",raw:`React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>
>`,elements:[{name:"intersection",raw:"React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>",elements:[{name:"ReactPropsWithoutRef",raw:"React.PropsWithoutRef<CustomCellComponentProps>",elements:[{name:"CustomCellComponentProps"}]},{name:"ReactRefAttributes",raw:"React.RefAttributes<any>",elements:[{name:"any"}]}]}]}]},description:`Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},domRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the rendered DOM element (the one that scrolls)."},innerDomRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the inner rendered DOM element (the one that contains all the cells)."},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(offset: number) => void",signature:{arguments:[{type:{name:"number"},name:"offset"}],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const ve={component:b},E={render:()=>e.jsx(b,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",n]})})},R={render:()=>e.jsx(b,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(t%2+1)*100},children:[t," / ",n]})})},T={render:()=>e.jsx(b,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},C={render:()=>e.jsx(b,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},H={render:()=>{const[a,h]=c.useState(()=>new Map),[w,p]=c.useState(()=>new Map),l=c.useRef(null);function d(){const u=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,m=new Map,g=new Map;for(let f=1;f<100;f++)m.set(f,u()),g.set(f,u());l.current?.resizeCols([...m.entries()]),l.current?.resizeRows([...g.entries()]),h(m),p(g)}return e.jsx(b,{ref:l,style:{height:"100vh"},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:u,colIndex:m})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:a.get(m)??80,height:w.get(u)??80},children:[e.jsxs("div",{children:[u," / ",m]}),m===0&&u===0?e.jsx("button",{onClick:d,children:"random"}):u===0?e.jsx("input",{type:"number",step:5,value:a.get(m)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;l.current?.resizeCols([[m,f]]),h(y=>new Map(y).set(m,f))}}):m===0?e.jsx("input",{type:"number",step:5,value:w.get(u)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;l.current?.resizeRows([[u,f]]),p(y=>new Map(y).set(u,f))}}):null]})})}},k={render:()=>{const[n,a]=c.useState([567,567]),[h,w]=c.useState([1e3,1e3]),p=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:l=>{a(d=>[Number(l.target.value),d[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:l=>{a(d=>[d[0],Number(l.target.value)])}})]}),e.jsx("button",{onClick:()=>{p.current?.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{a([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:h[0],onChange:l=>{w(d=>[Number(l.target.value),d[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:h[1],onChange:l=>{w(d=>[d[0],Number(l.target.value)])}})]}),e.jsx("button",{onClick:()=>{p.current?.scrollTo(h[0],h[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{p.current?.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),e.jsx(b,{ref:p,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:l,colIndex:d})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[l," / ",d]})})]})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const SIZE = 80;
    const LENGTH = 100;
    const [widths, setWidths] = useState(() => new Map<number, number>());
    const [heights, setHeights] = useState(() => new Map<number, number>());
    const grid = useRef<VGridHandle>(null);
    function randomize() {
      const getSize = () => Math.random() < 0.8 ? 40 + Math.round(200 * Math.random()) : SIZE;
      const newWidths = new Map<number, number>();
      const newHeights = new Map<number, number>();
      // skip index 0 to keep inputs stable
      for (let i = 1; i < LENGTH; i++) {
        newWidths.set(i, getSize());
        newHeights.set(i, getSize());
      }
      grid.current?.resizeCols([...newWidths.entries()]);
      grid.current?.resizeRows([...newHeights.entries()]);
      setWidths(newWidths);
      setHeights(newHeights);
    }
    return <VGrid ref={grid} style={{
      height: "100vh"
    }} row={LENGTH} col={LENGTH} cellHeight={SIZE} cellWidth={SIZE}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        border: "solid 1px gray",
        background: "white",
        padding: 4,
        width: widths.get(colIndex) ?? SIZE,
        height: heights.get(rowIndex) ?? SIZE
      }}>
            <div>
              {rowIndex} / {colIndex}
            </div>

            {colIndex === 0 && rowIndex === 0 ?
        // randomize all cols & rows
        <button onClick={randomize}>random</button> : rowIndex === 0 ?
        // resize column
        <input type="number" step={5} value={widths.get(colIndex) ?? SIZE} style={{
          width: 50
        }} onChange={e => {
          const w = e.target.valueAsNumber;
          grid.current?.resizeCols([[colIndex, w]]);
          setWidths(map => new Map(map).set(colIndex, w));
        }} /> : colIndex === 0 ?
        // resize row
        <input type="number" step={5} value={heights.get(rowIndex) ?? SIZE} style={{
          width: 50
        }} onChange={e => {
          const h = e.target.valueAsNumber;
          grid.current?.resizeRows([[rowIndex, h]]);
          setHeights(map => new Map(map).set(rowIndex, h));
        }} /> : null}
          </div>}
      </VGrid>;
  }
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const ye=["Default","Fixed","DynamicHeight","DynamicWidth","Resizeable","ScrollTo"];export{E as Default,T as DynamicHeight,C as DynamicWidth,R as Fixed,H as Resizeable,k as ScrollTo,ye as __namedExportsOrder,ve as default};
