import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./iframe-Cx992_xA.js";import{u as j,r as g,i as we,a as Ie,A as z,g as w,b as M,U as A,c as Se,d as Re,e as q,f as Te,h as Ce}from"./useLatestRef-BDctBP2R.js";import{r as P}from"./index-DEQVTzOp.js";import"./preload-helper-BQ24v_F8.js";function $e(...r){return c.useCallback(n=>{for(const a of r)a&&Ee(a,n)},r)}function Ee(r,n){typeof r=="function"?r(n):r&&(r.current=n)}const V=(r,n)=>`${r}-${n}`,ke=c.memo(({_children:r,_resizer:n,_rowIndex:a,_colIndex:u,_top:f,_left:m,_height:t,_width:d,_hide:v,_element:$})=>{const y=c.useRef(null);return j(()=>n.$observeItem(y[g],a,u),[u,a]),e.jsx($,{ref:y,style:c.useMemo(()=>({display:"grid",position:"absolute",top:f,[we()?"right":"left"]:m,visibility:v?"hidden":"visible",minHeight:t,minWidth:d}),[f,m,d,t,v]),children:r})}),p=c.forwardRef(({children:r,row:n,col:a,cellHeight:u=40,cellWidth:f=100,overscan:m=2,initialRowCount:t,initialColCount:d,item:v="div",domRef:$,innerDomRef:y,onScroll:_,onScrollEnd:le,style:se,...ie},de)=>{const[s,i,E,h]=Ie(()=>{const o=q(n,u,m,t),l=q(a,f,m,d);return[o,l,Te(o,l),Ce(o,l)]});n!==s.$getItemsLength()&&s.$update(z,[n]),a!==i.$getItemsLength()&&i.$update(z,[a]);const[ae,H]=c.useReducer(s.$getStateVersion,void 0,s.$getStateVersion),[ce,G]=c.useReducer(i.$getStateVersion,void 0,i.$getStateVersion),[ue,me]=s.$getRange(),[fe,pe]=i.$getRange(),he=s.$isScrolling(),ge=i.$isScrolling(),be=w(s),xe=w(i),L=c.useRef(null),N=M(_),O=M(le);j(()=>{const o=L[g],l=s.$subscribe(A,k=>{k?P.flushSync(H):H()}),b=i.$subscribe(A,k=>{k?P.flushSync(G):G()}),x=s.$subscribe(Se,()=>{N[g]&&N[g](s.$getScrollOffset())}),ye=s.$subscribe(Re,()=>{O[g]&&O[g]()});return E.$observeRoot(o),h.$observe(o),()=>{l(),b(),E.$dispose(),h.$dispose(),x(),ye()}},[]),j(()=>{h.$fixScrollJump()},[ae,ce]),c.useImperativeHandle(de,()=>({get scrollTop(){return s.$getScrollOffset()},get scrollLeft(){return i.$getScrollOffset()},get scrollHeight(){return w(s)},get scrollWidth(){return w(i)},get viewportHeight(){return s.$getViewportSize()},get viewportWidth(){return i.$getViewportSize()},findStartIndex:()=>[i.$findStartIndex(),s.$findStartIndex()],findEndIndex:()=>[i.$findEndIndex(),s.$findEndIndex()],getItemOffset:(o,l)=>[i.$getItemOffset(o),s.$getItemOffset(l)],getItemSize:(o,l)=>[i.$getItemSize(o),s.$getItemSize(l)],scrollToIndex:h.$scrollToIndex,scrollTo:h.$scrollTo,scrollBy:h.$scrollBy}),[]);const ve=c.useMemo(()=>{const o=new Map;return(l,b)=>{let x=o.get(V(l,b));return x||o.set(V(l,b),x=r({rowIndex:l,colIndex:b})),x}},[r]),D=[];for(let o=ue;o<=me;o++)for(let l=fe;l<=pe;l++)D.push(e.jsx(ke,{_resizer:E,_rowIndex:o,_colIndex:l,_top:s.$getItemOffset(o),_left:i.$getItemOffset(l),_height:s.$getItemSize(o),_width:i.$getItemSize(l),_hide:s.$isUnmeasuredItem(o)||i.$isUnmeasuredItem(l),_element:v,_children:ve(o,l)},V(o,l)));return e.jsx("div",{ref:$e(L,$),...ie,style:{overflow:"auto",contain:"strict",width:"100%",height:"100%",...se},children:e.jsx("div",{ref:y,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",overflow:"hidden",width:xe,height:be,pointerEvents:he||ge?"none":void 0},children:D})})});p.__docgenInfo={description:"Virtualized grid component. See {@link VGridProps} and {@link VGridHandle}.",methods:[{name:"scrollTop",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollLeft",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"scrollWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportHeight",docblock:null,modifiers:["get"],params:[],returns:null},{name:"viewportWidth",docblock:null,modifiers:["get"],params:[],returns:null},{name:"findStartIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"findEndIndex",docblock:null,modifiers:[],params:[],returns:null},{name:"getItemOffset",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null},{name:"getItemSize",docblock:null,modifiers:[],params:[{name:"indexX",optional:!1,type:null},{name:"indexY",optional:!1,type:null}],returns:null}],displayName:"VGrid",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(arg: {
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
@defaultValue "div"`,defaultValue:{value:'"div"',computed:!1}},domRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the rendered DOM element (the one that scrolls)."},innerDomRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Reference to the inner rendered DOM element (the one that contains all the cells)."},onScroll:{required:!1,tsType:{name:"signature",type:"function",raw:"(offset: number) => void",signature:{arguments:[{type:{name:"number"},name:"offset"}],return:{name:"void"}}},description:"Callback invoked whenever scroll offset changes."},onScrollEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when scrolling stops."}}};const Le={component:p},I={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4},children:[r," / ",n]})})},S={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100,height:(r%2+1)*100},children:[r," / ",n]})})},R={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:(n%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),Array.from({length:r%8+1},()=>e.jsx("div",{children:"Hello world!"}))]})})},T={render:()=>e.jsx(p,{style:{height:"100vh"},row:1e3,col:500,children:({rowIndex:r,colIndex:n})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,height:(r%2+1)*100},children:[e.jsxs("div",{children:[r," / ",n]}),e.jsx("div",{children:Array.from({length:n%4+1},()=>e.jsx("span",{children:"Hello world!"}))})]})})},C={render:()=>{const[n,a]=c.useState([567,567]),[u,f]=c.useState([1e3,1e3]),m=c.useRef(null);return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsxs("label",{children:["col",e.jsx("input",{type:"number",value:n[0],onChange:t=>{a(d=>[Number(t.target.value),d[1]])}})]}),e.jsxs("label",{children:["row",e.jsx("input",{type:"number",value:n[1],onChange:t=>{a(d=>[d[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=m.current)==null||t.scrollToIndex(n[0],n[1])},children:"scroll to index"}),e.jsx("button",{onClick:()=>{a([Math.round(1e3*Math.random()),Math.round(1e3*Math.random())])},children:"randomize"})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("label",{children:["x",e.jsx("input",{type:"number",value:u[0],onChange:t=>{f(d=>[Number(t.target.value),d[1]])}})]}),e.jsxs("label",{children:["y",e.jsx("input",{type:"number",value:u[1],onChange:t=>{f(d=>[d[0],Number(t.target.value)])}})]}),e.jsx("button",{onClick:()=>{var t;(t=m.current)==null||t.scrollTo(u[0],u[1])},children:"scroll to offset"}),e.jsx("button",{onClick:()=>{var t;(t=m.current)==null||t.scrollBy(u[0],u[1])},children:"scroll by offset"})]})}),e.jsx(p,{ref:m,style:{height:"100vh"},row:1e3,col:1e3,children:({rowIndex:t,colIndex:d})=>e.jsxs("div",{style:{border:"solid 1px gray",background:"white",padding:4,width:160,height:80},children:[t," / ",d]})})]})}};var W,U,B;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(U=I.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var F,X,J;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(X=S.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Y,Q;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var Z,ee,ne;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(te=C.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Ne=["Default","Fixed","DynamicHeight","DynamicWidth","ScrollTo"];export{I as Default,R as DynamicHeight,T as DynamicWidth,S as Fixed,C as ScrollTo,Ne as __namedExportsOrder,Le as default};
