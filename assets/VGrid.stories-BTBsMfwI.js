import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-DpsGDW77.js";import{t as r}from"./react-dom-DzBWvKan.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{C as a,E as o,S as s,T as c,c as l,d as u,f as d,i as f,l as p,m,n as h,p as g,r as _,s as v,t as y,u as b,w as x,x as S,y as C}from"./useLatestRef-Dsl3NdoI.js";var w,T,E,D,O,k;function A(){return(A=t((()=>{w=e(n(),1),o(),a(),S(),m(),p(),v(),_(),y(),T=r(),E=i(),D=(e,t)=>`${e}-${t}`,O=(0,w.memo)(({_children:e,_resizer:t,_rowIndex:n,_colIndex:r,_top:i,_left:a,_height:o,_width:s,_hide:c,_element:u})=>{let d=(0,w.useRef)(null);return b(()=>t(d[l],n,r),[r,n]),(0,E.jsx)(u,{ref:d,style:(0,w.useMemo)(()=>({contain:`layout style`,display:`grid`,position:`absolute`,top:i,insetInlineStart:a,visibility:c?`hidden`:void 0,minHeight:o,minWidth:s}),[i,a,s,o,c]),children:e})}),k=(0,w.forwardRef)(({children:e,row:t,col:n,cellHeight:r=40,cellWidth:i=100,bufferSize:a,ssrRowCount:o,ssrColCount:p,item:m=`div`,domRef:_,onScroll:v,onScrollEnd:y,style:S,...k},A)=>{let[j,M,N]=f(()=>{let e=x(s(t,r),o),a=x(s(n,i),p);return[e,a,C(e,a)]});t!==j.$getItemsLength()&&j.$update(5,[t]),n!==M.$getItemsLength()&&M.$update(5,[n]);let[P,F]=(0,w.useReducer)(j.$getStateVersion,void 0,j.$getStateVersion),[I,L]=(0,w.useReducer)(M.$getStateVersion,void 0,M.$getStateVersion),R=j.$isScrolling(),z=M.$isScrolling(),B=c(j),V=c(M),H=(0,w.useRef)(null),U=h(v),W=h(y);b(()=>{j.$subscribe(1,e=>{e?(0,T.flushSync)(F):F()}),M.$subscribe(1,e=>{e?(0,T.flushSync)(L):L()}),j.$subscribe(4,()=>{U.current&&U.current(j.$getScrollOffset())}),j.$subscribe(8,()=>{W.current&&W.current()});let e=H[l];return N.$observe(e),()=>{j.$dispose(),M.$dispose(),N.$dispose()}},[]),b(()=>{N.$effect()},[P,I]),(0,w.useImperativeHandle)(A,()=>({get scrollTop(){return j.$getScrollOffset()},get scrollLeft(){return M.$getScrollOffset()},get scrollHeight(){return c(j)},get scrollWidth(){return c(M)},get viewportHeight(){return j.$getViewportSize()},get viewportWidth(){return M.$getViewportSize()},findRowIndex:j.$findItemIndex,findColIndex:M.$findItemIndex,getRowOffset:j.$getItemOffset,getColOffset:M.$getItemOffset,getRowSize:j.$getItemSize,getColSize:M.$getItemSize,resizeCols(e){N.$resizeCols(e)},resizeRows(e){N.$resizeRows(e)},scrollToIndex:(e,t)=>g(N,j,M,e,t),scrollTo:(e,t)=>d(N,e,t),scrollBy:(e,t)=>u(N,j,M,e,t)}),[]);let G=(0,w.useMemo)(()=>{let t=new Map;return(n,r)=>{let i=t.get(D(n,r));return i||t.set(D(n,r),i=e({rowIndex:n,colIndex:r})),i}},[e]),[K,q]=j.$getRange(a),[J,Y]=M.$getRange(a),X=[];for(let e=K;e<=q;e++)for(let t=J;t<=Y;t++)X.push((0,E.jsx)(O,{_resizer:N.$observeItem,_rowIndex:e,_colIndex:t,_top:j.$getItemOffset(e),_left:M.$getItemOffset(t),_height:j.$getItemSize(e),_width:M.$getItemSize(t),_hide:j.$isUnmeasuredItem(e)||M.$isUnmeasuredItem(t),_element:m,_children:G(e,t)},D(e,t)));return(0,E.jsx)(`div`,{ref:_,...k,style:{overflow:`auto`,contain:`strict`,width:`100%`,height:`100%`,...S},children:(0,E.jsx)(`div`,{ref:H,style:{contain:`size style`,overflowAnchor:`none`,flex:`none`,position:`relative`,width:V,height:B,pointerEvents:R||z?`none`:void 0},children:X})})}),k.__docgenInfo={description:`Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.`,methods:[{name:`scrollTop`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollLeft`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollHeight`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`scrollWidth`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`viewportHeight`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`viewportWidth`,docblock:null,modifiers:[`get`],params:[],returns:null},{name:`resizeCols`,docblock:null,modifiers:[],params:[{name:`cols`,optional:!1,type:null}],returns:null},{name:`resizeRows`,docblock:null,modifiers:[],params:[{name:`rows`,optional:!1,type:null}],returns:null},{name:`scrollToIndex`,docblock:null,modifiers:[],params:[{name:`row`,optional:!1,type:null},{name:`col`,optional:!1,type:null}],returns:null},{name:`scrollTo`,docblock:null,modifiers:[],params:[{name:`row`,optional:!1,type:null},{name:`col`,optional:!1,type:null}],returns:null},{name:`scrollBy`,docblock:null,modifiers:[],params:[{name:`row`,optional:!1,type:null},{name:`col`,optional:!1,type:null}],returns:null}],displayName:`VGrid`,props:{children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(arg: {
  /**
   * row index of cell
   */
  rowIndex: number;
  /**
   * column index of cell
   */
  colIndex: number;
}) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  /**
   * row index of cell
   */
  rowIndex: number;
  /**
   * column index of cell
   */
  colIndex: number;
}`,signature:{properties:[{key:`rowIndex`,value:{name:`number`,required:!0},description:`row index of cell`},{key:`colIndex`,value:{name:`number`,required:!0},description:`column index of cell`}]}},name:`arg`}],return:{name:`ReactNode`}}},description:`A function to create elements rendered by this component.`},row:{required:!0,tsType:{name:`number`},description:`Total row length of grid.`},col:{required:!0,tsType:{name:`number`},description:`Total column length of grid.`},cellHeight:{required:!1,tsType:{name:`number`},description:`Cell height hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 40`,defaultValue:{value:`40`,computed:!1}},cellWidth:{required:!1,tsType:{name:`number`},description:`Cell width hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.
@defaultValue 100`,defaultValue:{value:`100`,computed:!1}},bufferSize:{required:!1,tsType:{name:`number`},description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 200`},ssrRowCount:{required:!1,tsType:{name:`number`},description:`A prop for SSR. If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size until hydrated.`},ssrColCount:{required:!1,tsType:{name:`number`},description:`A prop for SSR. If set, the specified amount of cols will be mounted in the initial rendering regardless of the container size until hydrated.`},item:{required:!1,tsType:{name:`union`,raw:`keyof JSX.IntrinsicElements | CustomCellComponent`,elements:[{name:`JSX.IntrinsicElements`},{name:`ReactForwardRefExoticComponent`,raw:`React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>
>`,elements:[{name:`intersection`,raw:`React.PropsWithoutRef<CustomCellComponentProps> & React.RefAttributes<any>`,elements:[{name:`ReactPropsWithoutRef`,raw:`React.PropsWithoutRef<CustomCellComponentProps>`,elements:[{name:`CustomCellComponentProps`}]},{name:`ReactRefAttributes`,raw:`React.RefAttributes<any>`,elements:[{name:`any`}]}]}]}]},description:`Component or element type for cell element. This component will get {@link CustomCellComponentProps} as props.
@defaultValue "div"`,defaultValue:{value:`"div"`,computed:!1}},domRef:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:`Reference to the rendered DOM element (the one that scrolls).`},onScroll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(offset: number) => void`,signature:{arguments:[{type:{name:`number`},name:`offset`}],return:{name:`void`}}},description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback invoked when scrolling stops.`}}}})))()}var j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{j=e(n(),1),A(),M=i(),N={component:k},P={render:()=>(0,M.jsx)(k,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})},F={render:()=>(0,M.jsx)(k,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,width:(t%2+1)*100,height:(e%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})},I={render:()=>(0,M.jsx)(k,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,width:(t%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[(0,M.jsxs)(`div`,{children:[e,` / `,t]}),Array.from({length:e%8+1},()=>(0,M.jsx)(`div`,{children:`Hello world!`}))]})})},L={render:()=>(0,M.jsx)(k,{style:{height:`100vh`},row:1e3,col:500,children:({rowIndex:e,colIndex:t})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,height:(e%2+1)*100,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[(0,M.jsxs)(`div`,{children:[e,` / `,t]}),(0,M.jsx)(`div`,{children:Array.from({length:t%4+1},()=>(0,M.jsx)(`span`,{children:`Hello world!`}))})]})})},R={render:()=>{let[e,t]=(0,j.useState)(()=>new Map),[n,r]=(0,j.useState)(()=>new Map),i=(0,j.useRef)(null);function a(){let e=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,n=new Map,a=new Map;for(let t=1;t<100;t++)n.set(t,e()),a.set(t,e());i.current?.resizeCols([...n.entries()]),i.current?.resizeRows([...a.entries()]),t(n),r(a)}return(0,M.jsx)(k,{ref:i,style:{height:`100vh`},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:o,colIndex:s})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,width:e.get(s)??80,height:n.get(o)??80,borderLeft:s===0?void 0:`solid 1px gray`,borderTop:o===0?void 0:`solid 1px gray`},children:[(0,M.jsxs)(`div`,{children:[o,` / `,s]}),s===0&&o===0?(0,M.jsx)(`button`,{onClick:a,children:`random`}):o===0?(0,M.jsx)(`input`,{type:`number`,step:5,value:e.get(s)??80,style:{width:50},onChange:e=>{let n=e.target.valueAsNumber;i.current?.resizeCols([[s,n]]),t(e=>new Map(e).set(s,n))}}):s===0?(0,M.jsx)(`input`,{type:`number`,step:5,value:n.get(o)??80,style:{width:50},onChange:e=>{let t=e.target.valueAsNumber;i.current?.resizeRows([[o,t]]),r(e=>new Map(e).set(o,t))}}):null]})})}},z={render:()=>{let e=1e3,[t,n]=(0,j.useState)([567,567]),[r,i]=(0,j.useState)([1e3,1e3]),a=(0,j.useRef)(null);return(0,M.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`label`,{children:[`col`,(0,M.jsx)(`input`,{type:`number`,value:t[0],onChange:e=>{n(t=>[Number(e.target.value),t[1]])}})]}),(0,M.jsxs)(`label`,{children:[`row`,(0,M.jsx)(`input`,{type:`number`,value:t[1],onChange:e=>{n(t=>[t[0],Number(e.target.value)])}})]}),(0,M.jsx)(`button`,{onClick:()=>{a.current?.scrollToIndex(t[0],t[1])},children:`scroll to index`}),(0,M.jsx)(`button`,{onClick:()=>{n([Math.round(e*Math.random()),Math.round(e*Math.random())])},children:`randomize`})]}),(0,M.jsx)(`div`,{children:(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`label`,{children:[`x`,(0,M.jsx)(`input`,{type:`number`,value:r[0],onChange:e=>{i(t=>[Number(e.target.value),t[1]])}})]}),(0,M.jsxs)(`label`,{children:[`y`,(0,M.jsx)(`input`,{type:`number`,value:r[1],onChange:e=>{i(t=>[t[0],Number(e.target.value)])}})]}),(0,M.jsx)(`button`,{onClick:()=>{a.current?.scrollTo(r[0],r[1])},children:`scroll to offset`}),(0,M.jsx)(`button`,{onClick:()=>{a.current?.scrollBy(r[0],r[1])},children:`scroll by offset`})]})}),(0,M.jsx)(k,{ref:a,style:{height:`100vh`},row:e,col:e,children:({rowIndex:e,colIndex:t})=>(0,M.jsxs)(`div`,{style:{background:`white`,padding:4,width:160,height:80,borderLeft:t===0?void 0:`solid 1px gray`,borderTop:e===0?void 0:`solid 1px gray`},children:[e,` / `,t]})})]})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Fixed`,`DynamicHeight`,`DynamicWidth`,`Resizeable`,`ScrollTo`]})))()}V();export{P as Default,I as DynamicHeight,L as DynamicWidth,F as Fixed,R as Resizeable,z as ScrollTo,B as __namedExportsOrder,N as default};