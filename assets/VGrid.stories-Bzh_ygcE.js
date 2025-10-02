import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./iframe-BX9CWLzQ.js";import{u as Re,A as D,g as T,a as Z,b as N,r as I,U as q,c as Te,d as Ce,e as P,f as He,h as ke,i as $e}from"./useLatestRef-CKe3Ksoh.js";import{r as U}from"./index-Chr0fOXX.js";import"./preload-helper-BQ24v_F8.js";function je(...r){return c.useCallback(n=>{for(const d of r)d&&ze(d,n)},r)}function ze(r,n){typeof r=="function"?r(n):r&&(r.current=n)}const G=(r,n)=>`${r}-${n}`,Ve=c.memo(({_children:r,_resizer:n,_rowIndex:d,_colIndex:h,_top:b,_left:p,_height:t,_width:a,_hide:u,_element:m})=>{const f=c.useRef(null);return N(()=>n.$observeItem(f[I],d,h),[h,d]),e.jsx(m,{ref:f,style:c.useMemo(()=>({contain:"layout style",display:"grid",position:"absolute",top:b,[$e()?"right":"left"]:p,visibility:u?"hidden":"visible",minHeight:t,minWidth:a}),[b,p,a,t,u]),children:r})}),v=c.forwardRef(({children:r,row:n,col:d,cellHeight:h=40,cellWidth:b=100,overscan:p=2,initialRowCount:t,initialColCount:a,item:u="div",domRef:m,innerDomRef:f,onScroll:g,onScrollEnd:w,style:x,...ue},me)=>{const[l,i,S,y]=Re(()=>{const o=P(n,h,p,t),s=P(d,b,p,a);return[o,s,He(o,s),ke(o,s)]});n!==l.$getItemsLength()&&l.$update(D,[n]),d!==i.$getItemsLength()&&i.$update(D,[d]);const[he,M]=c.useReducer(l.$getStateVersion,void 0,l.$getStateVersion),[pe,_]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[fe,ge]=l.$getRange(),[be,we]=i.$getRange(),xe=l.$isScrolling(),ve=i.$isScrolling(),ye=T(l),Ie=T(i),L=c.useRef(null),O=Z(g),W=Z(w);N(()=>{const o=L[I],s=l.$subscribe(q,V=>{V?U.flushSync(M):M()}),E=i.$subscribe(q,V=>{V?U.flushSync(_):_()}),R=l.$subscribe(Te,()=>{O[I]&&O[I](l.$getScrollOffset())}),Ee=l.$subscribe(Ce,()=>{W[I]&&W[I]()});return S.$observeRoot(o),y.$observe(o),()=>{s(),E(),S.$dispose(),y.$dispose(),R(),Ee()}},[]),N(()=>{y.$fixScrollJump()},[he,pe]),c.useImperativeHandle(me,()=>({get scrollTop(){return l.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return T(l)},get scrollWidth(){return T(i)},get viewportHeight(){return l.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),l.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),l.$findEndIndex()],getItemOffset:(o,s)=>[i.$getItemOffset(o),l.$getItemOffset(s)],getItemSize:(o,s)=>[i.$getItemSize(o),l.$getItemSize(s)],resizeCols(o){S.$resizeCols(o)},resizeRows(o){S.$resizeRows(o)},scrollToIndex:y.$scrollToIndex,scrollTo:y.$scrollTo,scrollBy:y.$scrollBy}),[]);const Se=c.useMemo(()=>{const o=new Map;return(s,E)=>{let R=o.get(G(s,E));return R||o.set(G(s,E),R=r({rowIndex:s,colIndex:E})),R}},[r]),A=[];for(let o=fe;o<=ge;o++)for(let s=be;s<=we;s++)A.push(e.jsx(Ve,{_resizer:S,_rowIndex:o,_colIndex:s,_top:l.$getItemOffset(o),_left:i.$getItemOffset(s),_height:l.$getItemSize(o),_width:i.$getItemSize(s),_hide:l.$isUnmeasuredItem(o)||i.$isUnmeasuredItem(s),_element:u,_children:Se(o,s)},G(o,s)));return e.jsx("div",{ref:je(L,m),...ue,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...x},children:e.jsx("div",{ref:f,style:{contain:"strict",overflowAnchor:"none",overflow:"clip",flex:"none",position:"relative",width:Ie,height:ye,pointerEvents:xe||ve?"none":void 0},children:A})})});v.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"resizeCols",docblock:null,modifiers:[],params:[{name:"cols",optional:!1,type:null}],returns:null},{name:"resizeRows",docblock:null,modifiers:[],params:[{name:"rows",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(arg: {
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
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},domRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the rendered DOM element (the one that scrolls)."},innerDomRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the inner rendered DOM element (the one that contains all the cells)."},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(offset: number) => void",signature:{arguments:[{type:{name:"number"},name:"offset"}],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const Oe={component:v},C={render:()=>e.jsx(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[r," / ",n]})})},H={render:()=>e.jsx(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(r%2+1)*100},children:[r," / ",n]})})},k={render:()=>e.jsx(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),Array.from({length:r%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},$={render:()=>e.jsx(v,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(r%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},j={render:()=>{const[d,h]=c.useState(()=>new Map),[b,p]=c.useState(()=>new Map),t=c.useRef(null);function a(){var g,w;const u=()=>Math.random()<.8?40+Math.round(200*Math.random()):80,m=new Map,f=new Map;for(let x=1;x<100;x++)m.set(x,u()),f.set(x,u());(g=t.current)==null||g.resizeCols([...m.entries()]),(w=t.current)==null||w.resizeRows([...f.entries()]),h(m),p(f)}return e.jsx(v,{ref:t,style:{height:"100vh"},row:100,col:100,cellHeight:80,cellWidth:80,children:({rowIndex:u,colIndex:m})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:d.get(m)??80,height:b.get(u)??80},children:[e.jsxs("div",{children:[u," / ",m]}),m===0&&u===0?e.jsx("button",{onClick:a,children:"random"}):u===0?e.jsx("input",{type:"number",step:5,value:d.get(m)??80,style:{width:50},onChange:f=>{var w;const g=f.target.valueAsNumber;(w=t.current)==null||w.resizeCols([[m,g]]),h(x=>new Map(x).set(m,g))}}):m===0?e.jsx("input",{type:"number",step:5,value:b.get(u)??80,style:{width:50},onChange:f=>{var w;const g=f.target.valueAsNumber;(w=t.current)==null||w.resizeRows([[u,g]]),p(x=>new Map(x).set(u,g))}}):null]})})}},z={render:()=>{const[n,d]=c.useState([567,567]),[h,b]=c.useState([1e3,1e3]),p=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:t=>{d(a=>[Number(t.target.value),a[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:t=>{d(a=>[a[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=p.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{d([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:h[0],onChange:t=>{b(a=>[Number(t.target.value),a[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:h[1],onChange:t=>{b(a=>[a[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=p.current)==null||t.scrollTo(h[0],h[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var t;(t=p.current)==null||t.scrollBy(h[0],h[1])},children:"scroll by offset"})]})}),e.jsx(v,{ref:p,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:a})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",a]})})]})}};var B,F,X;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(X=(F=C.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var J,K,Y;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=H.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Q,ee,ne;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,oe;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(re=$.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ae,ce;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};const We=["Default","Fixed","DynamicHeight","DynamicWidth","Resizeable","ScrollTo"];export{C as Default,k as DynamicHeight,$ as DynamicWidth,H as Fixed,j as Resizeable,z as ScrollTo,We as __namedExportsOrder,Oe as default};
