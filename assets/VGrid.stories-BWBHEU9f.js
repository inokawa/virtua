import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DFisBF5J.js";import{u as se,A as W,g as S,a as A,b as j,r as v,U as D,c as ie,d as le,e as Z,f as de,h as ae,i as ce}from"./useLatestRef-BSSELmjz.js";import{r as q}from"./index-yAri32k_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTPBONsA.js";function ue(...r){return m.useCallback(n=>{for(const a of r)a&&me(a,n)},r)}function me(r,n){typeof r=="function"?r(n):r&&(r.current=n)}const L=(r,n)=>`${r}-${n}`,pe=m.memo(({_children:r,_resizer:n,_rowIndex:a,_colIndex:p,_top:b,_left:h,_height:i,_width:d,_hide:c,_element:u})=>{const g=m.useRef(null);return j(()=>n.$observeItem(g[v],a,p),[p,a]),e.jsx(u,{ref:g,style:m.useMemo(()=>({contain:"layout style",display:"grid",position:"absolute",top:b,[ce()?"right":"left"]:h,visibility:c?"hidden":"visible",minHeight:i,minWidth:d}),[b,h,d,i,c]),children:r})}),x=m.forwardRef(({children:r,row:n,col:a,cellHeight:p=40,cellWidth:b=100,bufferSize:h,initialRowCount:i,initialColCount:d,item:c="div",domRef:u,innerDomRef:g,onScroll:f,onScrollEnd:y,style:P,...U},B)=>{const[s,l,I,w]=se(()=>{const t=Z(n,p,i),o=Z(a,b,d);return[t,o,de(t,o),ae(t,o)]});n!==s.$getItemsLength()&&s.$update(W,[n]),a!==l.$getItemsLength()&&l.$update(W,[a]);const[F,V]=m.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[X,G]=m.useReducer(l.$getStateVersion,void 0,l.$getStateVersion),J=s.$isScrolling(),K=l.$isScrolling(),Y=S(s),Q=S(l),N=m.useRef(null),M=A(f),_=A(y);j(()=>{const t=N[v];return s.$subscribe(D,o=>{o?q.flushSync(V):V()}),l.$subscribe(D,o=>{o?q.flushSync(G):G()}),s.$subscribe(ie,()=>{M[v]&&M[v](s.$getScrollOffset())}),s.$subscribe(le,()=>{_[v]&&_[v]()}),I.$observeRoot(t),w.$observe(t),()=>{s.$dispose(),l.$dispose(),I.$dispose(),w.$dispose()}},[]),j(()=>{w.$fixScrollJump()},[F,X]),m.useImperativeHandle(B,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return l.$getScrollOffset()},get scrollHeight(){return S(s)},get scrollWidth(){return S(l)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return l.$getViewportSize()},findStartIndex:()=>[l.$findStartIndex(),s.$findStartIndex()],findEndIndex:()=>[l.$findEndIndex(),s.$findEndIndex()],getItemOffset:(t,o)=>[l.$getItemOffset(t),s.$getItemOffset(o)],getItemSize:(t,o)=>[l.$getItemSize(t),s.$getItemSize(o)],resizeCols(t){I.$resizeCols(t)},resizeRows(t){I.$resizeRows(t)},scrollToIndex:w.$scrollToIndex,scrollTo:w.$scrollTo,scrollBy:w.$scrollBy}),[]);const ee=m.useMemo(()=>{const t=new Map;return(o,$)=>{let z=t.get(L(o,$));return z||t.set(L(o,$),z=r({rowIndex:o,colIndex:$})),z}},[r]),[ne,re]=s.$getRange(h),[te,oe]=l.$getRange(h),O=[];for(let t=ne;t<=re;t++)for(let o=te;o<=oe;o++)O.push(e.jsx(pe,{_resizer:I,_rowIndex:t,_colIndex:o,_top:s.$getItemOffset(t),_left:l.$getItemOffset(o),_height:s.$getItemSize(t),_width:l.$getItemSize(o),_hide:s.$isUnmeasuredItem(t)||l.$isUnmeasuredItem(o),_element:c,_children:ee(t,o)},L(t,o)));return e.jsx("div",{ref:ue(N,u),...U,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...P},children:e.jsx("div",{ref:g,style:{contain:"size paint style",overflowAnchor:"none",flex:"none",position:"relative",width:Q,height:Y,pointerEvents:J||K?"none":void 0},children:O})})});x.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"resizeCols",docblock:null,modifiers:[],params:[{name:"cols",optional:!1,type:null}],returns:null},{name:"resizeRows",docblock:null,modifiers:[],params:[{name:"rows",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(arg: {
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
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},domRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the rendered DOM element (the one that scrolls)."},innerDomRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the inner rendered DOM element (the one that contains all the cells)."},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(offset: number) => void",signature:{arguments:[{type:{name:"number"},name:"offset"}],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const ve={component:x},T={render:()=>e.jsx(x,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{background:"white",padding:4,borderLeft:n!==0?"solid 1px gray":void 0,borderTop:r!==0?"solid 1px gray":void 0},children:[r," / ",n]})})},E={render:()=>e.jsx(x,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{background:"white",padding:4,width:(n%2+1)*100,height:(r%2+1)*100,borderLeft:n!==0?"solid 1px gray":void 0,borderTop:r!==0?"solid 1px gray":void 0},children:[r," / ",n]})})},R={render:()=>e.jsx(x,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{background:"white",padding:4,width:(n%2+1)*100,borderLeft:n!==0?"solid 1px gray":void 0,borderTop:r!==0?"solid 1px gray":void 0},children:[e.jsxs("div",{children:[r," / ",n]}),Array.from({length:r%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},C={render:()=>e.jsx(x,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{background:"white",padding:4,height:(r%2+1)*100,borderLeft:n!==0?"solid 1px gray":void 0,borderTop:r!==0?"solid 1px gray":void 0},children:[e.jsxs("div",{children:[r," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},H={render:()=>{const[a,p]=m.useState(()=>new Map),[b,h]=m.useState(()=>new Map),i=m.useRef(null);function d(){const c=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,u=new Map,g=new Map;for(let f=1;f<100;f++)u.set(f,c()),g.set(f,c());i.current?.resizeCols([...u.entries()]),i.current?.resizeRows([...g.entries()]),p(u),h(g)}return e.jsx(x,{ref:i,style:{height:"100vh"},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:c,colIndex:u})=>e.jsxs("div",{style:{background:"white",padding:4,width:a.get(u)??80,height:b.get(c)??80,borderLeft:u!==0?"solid 1px gray":void 0,borderTop:c!==0?"solid 1px gray":void 0},children:[e.jsxs("div",{children:[c," / ",u]}),u===0&&c===0?e.jsx("button",{onClick:d,children:"random"}):c===0?e.jsx("input",{type:"number",step:5,value:a.get(u)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;i.current?.resizeCols([[u,f]]),p(y=>new Map(y).set(u,f))}}):u===0?e.jsx("input",{type:"number",step:5,value:b.get(c)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;i.current?.resizeRows([[c,f]]),h(y=>new Map(y).set(c,f))}}):null]})})}},k={render:()=>{const[n,a]=m.useState([567,567]),[p,b]=m.useState([1e3,1e3]),h=m.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:i=>{a(d=>[Number(i.target.value),d[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:i=>{a(d=>[d[0],Number(i.target.value)])}})]}),e.jsx("button",{onClick:()=>{h.current?.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{a([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:p[0],onChange:i=>{b(d=>[Number(i.target.value),d[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:p[1],onChange:i=>{b(d=>[d[0],Number(i.target.value)])}})]}),e.jsx("button",{onClick:()=>{h.current?.scrollTo(p[0],p[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{h.current?.scrollBy(p[0],p[1])},children:"scroll by offset"})]})}),e.jsx(x,{ref:h,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:i,colIndex:d})=>e.jsxs("div",{style:{background:"white",padding:4,width:160,height:80,borderLeft:d!==0?"solid 1px gray":void 0,borderTop:i!==0?"solid 1px gray":void 0},children:[i," / ",d]})})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100,
        height: (rowIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
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
        background: "white",
        padding: 4,
        width: (colIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VGrid style={{
      height: "100vh"
    }} row={1000} col={500}>
        {({
        rowIndex,
        colIndex
      }) => <div style={{
        background: "white",
        padding: 4,
        height: (rowIndex % 2 + 1) * 100,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
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
        background: "white",
        padding: 4,
        width: widths.get(colIndex) ?? SIZE,
        height: heights.get(rowIndex) ?? SIZE,
        borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
        borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
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
          background: "white",
          padding: 4,
          width: 160,
          height: 80,
          borderLeft: colIndex !== 0 ? "solid 1px gray" : undefined,
          borderTop: rowIndex !== 0 ? "solid 1px gray" : undefined
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};const ye=["Default","Fixed","DynamicHeight","DynamicWidth","Resizeable","ScrollTo"];export{T as Default,R as DynamicHeight,C as DynamicWidth,E as Fixed,H as Resizeable,k as ScrollTo,ye as __namedExportsOrder,ve as default};
