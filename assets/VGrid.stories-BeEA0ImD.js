import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-DVh4gD-p.js";import{u as ie,A,g as R,a as D,b as G,r as v,U as Z,c as de,d as ae,e as q,f as ce,h as ue,i as me}from"./useLatestRef-x_lcA4kx.js";import{r as P}from"./index-C5SQHsAb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIVQQ2S9.js";function he(...t){return c.useCallback(n=>{for(const d of t)d&&pe(d,n)},t)}function pe(t,n){typeof t=="function"?t(n):t&&(t.current=n)}const V=(t,n)=>`${t}-${n}`,fe=c.memo(({_children:t,_resizer:n,_rowIndex:d,_colIndex:h,_top:b,_left:p,_height:l,_width:a,_hide:u,_element:m})=>{const g=c.useRef(null);return G(()=>n.$observeItem(g[v],d,h),[h,d]),e.jsx(m,{ref:g,style:c.useMemo(()=>({contain:"layout style",display:"grid",position:"absolute",top:b,[me()?"right":"left"]:p,visibility:u?"hidden":"visible",minHeight:l,minWidth:a}),[b,p,a,l,u]),children:t})}),w=c.forwardRef(({children:t,row:n,col:d,cellHeight:h=40,cellWidth:b=100,overscan:p=2,initialRowCount:l,initialColCount:a,item:u="div",domRef:m,innerDomRef:g,onScroll:f,onScrollEnd:y,style:U,...B},F)=>{const[s,i,I,x]=ie(()=>{const r=q(n,h,p,l),o=q(d,b,p,a);return[r,o,ce(r,o),ue(r,o)]});n!==s.$getItemsLength()&&s.$update(A,[n]),d!==i.$getItemsLength()&&i.$update(A,[d]);const[X,N]=c.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[J,M]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[K,Y]=s.$getRange(),[Q,ee]=i.$getRange(),ne=s.$isScrolling(),te=i.$isScrolling(),re=R(s),oe=R(i),_=c.useRef(null),L=D(f),O=D(y);G(()=>{const r=_[v],o=s.$subscribe(Z,j=>{j?P.flushSync(N):N()}),S=i.$subscribe(Z,j=>{j?P.flushSync(M):M()}),E=s.$subscribe(de,()=>{L[v]&&L[v](s.$getScrollOffset())}),le=s.$subscribe(ae,()=>{O[v]&&O[v]()});return I.$observeRoot(r),x.$observe(r),()=>{o(),S(),I.$dispose(),x.$dispose(),E(),le()}},[]),G(()=>{x.$fixScrollJump()},[X,J]),c.useImperativeHandle(F,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return R(s)},get scrollWidth(){return R(i)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),s.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),s.$findEndIndex()],getItemOffset:(r,o)=>[i.$getItemOffset(r),s.$getItemOffset(o)],getItemSize:(r,o)=>[i.$getItemSize(r),s.$getItemSize(o)],resizeCols(r){I.$resizeCols(r)},resizeRows(r){I.$resizeRows(r)},scrollToIndex:x.$scrollToIndex,scrollTo:x.$scrollTo,scrollBy:x.$scrollBy}),[]);const se=c.useMemo(()=>{const r=new Map;return(o,S)=>{let E=r.get(V(o,S));return E||r.set(V(o,S),E=t({rowIndex:o,colIndex:S})),E}},[t]),W=[];for(let r=K;r<=Y;r++)for(let o=Q;o<=ee;o++)W.push(e.jsx(fe,{_resizer:I,_rowIndex:r,_colIndex:o,_top:s.$getItemOffset(r),_left:i.$getItemOffset(o),_height:s.$getItemSize(r),_width:i.$getItemSize(o),_hide:s.$isUnmeasuredItem(r)||i.$isUnmeasuredItem(o),_element:u,_children:se(r,o)},V(r,o)));return e.jsx("div",{ref:he(_,m),...B,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...U},children:e.jsx("div",{ref:g,style:{contain:"size paint style",overflowAnchor:"none",overflow:"clip",flex:"none",position:"relative",width:oe,height:re,pointerEvents:ne||te?"none":void 0},children:W})})});w.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"resizeCols",docblock:null,modifiers:[],params:[{name:"cols",optional:!1,type:null}],returns:null},{name:"resizeRows",docblock:null,modifiers:[],params:[{name:"rows",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(arg: {
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
@defaultValue 100`,defaultValue:{value:"100",computed:!1}},overscan:{required:!1,tsType:{name:"number"},description:`Number of items to render above/below the visible bounds of the grid. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 2`,defaultValue:{value:"2",computed:!1}},initialRowCount:{required:!1,tsType:{name:"number"},description:"If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR."},initialColCount:{required:!1,tsType:{name:"number"},description:"If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR."},item:{required:!1,tsType:{name:"union",raw:"keyof JSX.IntrinsicElements | CustomCellComponent",elements:[{name:"JSX.IntrinsicElements"},{name:"ReactForwardRefExoticComponent",raw:`React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>
>`,elements:[{name:"intersection",raw:"React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>",elements:[{name:"ReactPropsWithoutRef",raw:"React.PropsWithoutRef<CustomCellComponentProps>",elements:[{name:"CustomCellComponentProps"}]},{name:"ReactRefAttributes",raw:"React.RefAttributes<any>",elements:[{name:"any"}]}]}]}]},description:`Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},domRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the rendered DOM element (the one that scrolls)."},innerDomRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the inner rendered DOM element (the one that contains all the cells)."},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(offset: number) => void",signature:{arguments:[{type:{name:"number"},name:"offset"}],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const Ie={component:w},T={render:()=>e.jsx(w,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[t," / ",n]})})},C={render:()=>e.jsx(w,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(t%2+1)*100},children:[t," / ",n]})})},H={render:()=>e.jsx(w,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),Array.from({length:t%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},k={render:()=>e.jsx(w,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:t,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(t%2+1)*100},children:[e.jsxs("div",{children:[t," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},$={render:()=>{const[d,h]=c.useState(()=>new Map),[b,p]=c.useState(()=>new Map),l=c.useRef(null);function a(){const u=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,m=new Map,g=new Map;for(let f=1;f<100;f++)m.set(f,u()),g.set(f,u());l.current?.resizeCols([...m.entries()]),l.current?.resizeRows([...g.entries()]),h(m),p(g)}return e.jsx(w,{ref:l,style:{height:"100vh"},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:u,colIndex:m})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:d.get(m)??80,height:b.get(u)??80},children:[e.jsxs("div",{children:[u," / ",m]}),m===0&&u===0?e.jsx("button",{onClick:a,children:"random"}):u===0?e.jsx("input",{type:"number",step:5,value:d.get(m)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;l.current?.resizeCols([[m,f]]),h(y=>new Map(y).set(m,f))}}):m===0?e.jsx("input",{type:"number",step:5,value:b.get(u)??80,style:{width:50},onChange:g=>{const f=g.target.valueAsNumber;l.current?.resizeRows([[u,f]]),p(y=>new Map(y).set(u,f))}}):null]})})}},z={render:()=>{const[n,d]=c.useState([567,567]),[h,b]=c.useState([1e3,1e3]),p=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:l=>{d(a=>[Number(l.target.value),a[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:l=>{d(a=>[a[0],Number(l.target.value)])}})]}),e.jsx("button",{onClick:()=>{p.current?.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{d([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:h[0],onChange:l=>{b(a=>[Number(l.target.value),a[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:h[1],onChange:l=>{b(a=>[a[0],Number(l.target.value)])}})]}),e.jsx("button",{onClick:()=>{p.current?.scrollTo(h[0],h[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{p.current?.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),e.jsx(w,{ref:p,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:l,colIndex:a})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[l," / ",a]})})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        width: (colIndex % 2 + 1) * 100,
        height: (rowIndex % 2 + 1) * 100
      }}>
            {rowIndex} / {colIndex}
          </div>}
      </VGrid>;
  }
}`,...C.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const Se=["Default","Fixed","DynamicHeight","DynamicWidth","Resizeable","ScrollTo"];export{T as Default,H as DynamicHeight,k as DynamicWidth,C as Fixed,$ as Resizeable,z as ScrollTo,Se as __namedExportsOrder,Ie as default};
