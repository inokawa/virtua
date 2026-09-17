import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,_ as f,b as p,f as m,g as h,j as g,k as _,m as v,p as y,v as b,w as x,x as S,y as C}from"./iframe-DiJOFbbN.js";import{C as w,S as T,_ as E,d as D,f as ee,g as te,h as O,i as k,l as ne,m as A,n as re,p as j,r as ie,t as ae,v as M,x as N}from"./scroll-to-J7dmtCaq.js";import{n as P,t as F}from"./en-DltMjSLJ.js";var I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{y(),t(),w(),D(),M(),k(),A(),I=p(`<div>`),L=p(`<div role=row>`),R=p(`<div role=rowgroup>`),z=p(`<div role=table><div>`),B=e=>{let t,[n,a]=_(void 0);x(()=>a(e._state));let u=r(()=>n().$measureRow),d=r(()=>n().$measureCol),f=r(()=>e._row),p=r(()=>e._col),m=r(()=>{let t=f(),r=p();return o(()=>e._children(t,r,{rowIndex:e._rowIndex,colIndex:n().$col}))});i(s([u,d],([n,r])=>{!t||n==null&&r==null||c(e._resizer(t,n,r))}));let g=r(()=>j(n().$style));return(()=>{var e=I(),r=t;return typeof r==`function`?S(r,e):t=e,v(e,m),l(t=>{var r=n().$role,i=n().$col+1,a=n().$rowSpan,o=n().$colSpan,s=n().$sort,c=g();return r!==t.e&&h(e,`role`,t.e=r),i!==t.t&&h(e,`aria-colindex`,t.t=i),a!==t.a&&h(e,`aria-rowspan`,t.a=a),o!==t.o&&h(e,`aria-colspan`,t.o=o),s!==t.i&&h(e,`aria-sort`,t.i=s),t.n=C(e,c,t.n),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),e})()},V=e=>{let t=r(()=>e._state),i=r(()=>t().$cells.map(e=>e.$col)),a=r(()=>j(t().$style));return(()=>{var r=L();return v(r,n(d,{get each(){return i()},children:(r,i)=>n(B,{get _state(){return t().$cells[i()]},get _children(){return e._children},get _row(){return e._row},get _col(){return E(e._cols,r)},get _rowIndex(){return t().$row},get _resizer(){return e._resizer}})})),l(e=>{var n=t().$row+1,i=a();return n!==e.e&&h(r,`aria-rowindex`,e.e=n),e.t=C(r,i,e.t),e},{e:void 0,t:void 0}),r})()},H=e=>{let t=r(()=>e._state.$rows.map(e=>e.$row)),i=r(()=>j(e._state.$style));return(()=>{var r=R();return v(r,n(d,{get each(){return t()},children:(t,r)=>n(V,{get _state(){return e._state.$rows[r()]},get _children(){return e._children},get _row(){return E(e._rows,t)},get _cols(){return e._cols},get _resizer(){return e._resizer}})})),l(e=>C(r,i(),e)),r})()},U=e=>{let t,o=g({gap:0},e),{rows:f,cols:p,rowHeight:m,colWidth:h,gap:y}=o,[,w]=a(e,[`ref`,`children`,`rows`,`cols`,`rowHeight`,`colWidth`,`pinnedRows`,`pinnedCols`,`spans`,`keepMounted`,`bufferSize`,`gap`,`ariaColumnHeader`,`ariaRowHeader`,`ariaSort`,`onVerticalScroll`,`onHorizontalScroll`,`onScrollEnd`,`style`]),D=te(f,m,y),k=te(p,h,y),A=N(D),j=N(k),M=ne(A,j),P=()=>A.$getStateVersion()+j.$getStateVersion(),[F,I]=_(P()),L=()=>I(P());A.$subscribe(1,L),j.$subscribe(1,L);let R=!1;A.$subscribe(4,()=>{R=!0,e.onVerticalScroll&&e.onVerticalScroll(A.$getScrollOffset())}),j.$subscribe(4,()=>{R=!0,e.onHorizontalScroll&&e.onHorizontalScroll(j.$getScrollOffset())});let B=()=>{R&&!A.$isScrolling()&&!j.$isScrolling()&&(R=!1,e.onScrollEnd&&e.onScrollEnd())};A.$subscribe(8,B),j.$subscribe(8,B),x(()=>{O(A,D,e.rows,e.rowHeight,!0)}),x(()=>{O(j,k,e.cols,e.colWidth,!0)});let U=r(()=>F()&&A.$getItemsLength()),W=r(()=>F()&&j.$getItemsLength()),G=r(()=>(F(),ee(D,k,A.$getRange(e.bufferSize),j.$getRange(e.bufferSize),e.pinnedRows,e.pinnedCols,e.spans,e.keepMounted,e.ariaColumnHeader,e.ariaRowHeader,e.ariaSort))),K=r(()=>G().$groups.map(e=>`$rows`in e?e.$key:e.$row)),q=r(()=>F()&&(A.$isScrolling()||j.$isScrolling())),J=r(()=>{let{$rowTemplate:e,$colTemplate:t}=G(),n=A.$getItemOffset(0),r=j.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:o.gap+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:T(A)-n+`px`,"pointer-events":q()?`none`:void 0}}),Y=e.ref;return Y&&(Y({get verticalScrollOffset(){return A.$getScrollOffset()},get horizontalScrollOffset(){return j.$getScrollOffset()},get scrollHeight(){return T(A)},get scrollWidth(){return T(j)},get viewportHeight(){return A.$getViewportSize()},get viewportWidth(){return j.$getViewportSize()},findRowIndex:A.$findItemIndex,findColIndex:j.$findItemIndex,getRowOffset:A.$getItemOffset,getColOffset:j.$getItemOffset,getRowSize:A.$getItemSize,getColSize:j.$getItemSize,scrollToIndex:t=>ie(M,A,j,e.pinnedRows,e.pinnedCols,t),scrollTo:e=>re(M,e),scrollBy:e=>ae(M,A,j,e)}),c(()=>Y())),u(()=>{M.$observe(t),c(()=>{A.$dispose(),j.$dispose(),M.$dispose()})}),i(s(F,()=>{M.$effect()})),(()=>{var r=z(),i=r.firstChild;b(r,g({get"aria-rowcount"(){return U()},get"aria-colcount"(){return W()}},w,{get style(){return{overflow:`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}),!1,!0);var a=t;return typeof a==`function`?S(a,i):t=i,v(i,n(d,{get each(){return K()},children:(t,r)=>t<0?n(H,{get _state(){return G().$groups[r()]},get _children(){return e.children},get _rows(){return e.rows},get _cols(){return e.cols},get _resizer(){return M.$observeItem}}):n(V,{get _state(){return G().$groups[r()]},get _children(){return e.children},get _row(){return E(e.rows,t)},get _cols(){return e.cols},get _resizer(){return M.$observeItem}})})),l(e=>C(i,J(),e)),r})()};try{U.displayName=`VGrid`,U.__docgenInfo={description:`Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.`,displayName:`VGrid`,filePath:`/home/runner/work/virtua/virtua/src/solid/VGrid.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Get reference to {@link VGridHandle}.`,name:`ref`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`VGridHandle | ((handle?: VGridHandle | undefined) => void) | undefined`}},children:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`A function to create cell elements rendered by this component.`,name:`children`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{param:`row the item of {@link VGridProps.rows } at the row of the cell, or the row index if {@link VGridProps.rows } is a number
col the item of {@link VGridProps.cols } at the column of the cell, or the column index if {@link VGridProps.cols } is a number
cell the row index and the column index of the cell`},type:{name:`(row: R, col: C, cell: Readonly<VGridCell>) => Element`}},rows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The rows of the grid. See {@link VGridAxis} for the accepted values.`,name:`rows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`VGridAxis<R>`}},cols:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The columns of the grid. See {@link VGridAxis} for the accepted values.`,name:`cols`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`VGridAxis<C>`}},rowHeight:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The heights of the rows. See {@link VGridSize} for the accepted values.`,name:`rowHeight`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`string | number`}},colWidth:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The widths of the columns. See {@link VGridSize} for the accepted values.`,name:`colWidth`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`string | number`}},pinnedRows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of rows pinned to the edges of the viewport. See {@link VGridPinned} for the accepted values.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`pinnedRows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`VGridPinned | undefined`}},pinnedCols:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of columns pinned to the edges of the viewport. See {@link VGridPinned} for the accepted values.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`pinnedCols`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`VGridPinned | undefined`}},spans:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Cells merged over multiple rows and/or columns. See {@link VGridSpan} for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundary of the pinned rows/columns. A spanning cell is not measured for \`"auto"\` sizes on the axes it spans, and doesn't enlarge those tracks.`,name:`spans`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly VGridSpan[] | undefined`}},keepMounted:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`List of cells that should be always mounted, even when off screen.`,name:`keepMounted`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly VGridCell[] | undefined`}},bufferSize:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.`,name:`bufferSize`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`200`},type:{name:`number | undefined`}},gap:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.`,name:`gap`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},ariaColumnHeader:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:'Indexes of the rows whose cells are column headers (`role="columnheader"`).',name:`ariaColumnHeader`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`the rows pinned to the start by {@link VGridProps.pinnedRows }`},type:{name:`readonly number[] | undefined`}},ariaRowHeader:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:'Indexes of the columns whose cells are row headers (`role="rowheader"`).',name:`ariaRowHeader`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly number[] | undefined`}},ariaSort:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:"The header cell of the sorted column or row, and the sort order (`aria-sort`).",name:`ariaSort`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`(VGridCell & { order: "ascending" | "descending" | "other"; }) | undefined`}},onVerticalScroll:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked whenever the vertical scroll offset changes.`,name:`onVerticalScroll`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{param:`offset Current scrollTop.`},type:{name:`((offset: number) => void) | undefined`}},onHorizontalScroll:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked whenever the horizontal scroll offset changes.`,name:`onHorizontalScroll`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{param:`offset Current scrollLeft. Always positive even in RTL.`},type:{name:`((offset: number) => void) | undefined`}},onScrollEnd:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked when scrolling stops.`,name:`onScrollEnd`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},style:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var G,K,q,J,Y,X,Z,Q,$,oe;function se(){return(se=e((()=>{y(),t(),F(),W(),G=p(`<div style="background:white;padding:4px;border-right:solid 1px gray;border-bottom:solid 1px gray"> / `),K=p(`<div style="padding:4px;border-right:solid 1px gray;border-bottom:solid 1px gray"> / `),q=p(`<div style="padding:4px;border-right:solid 1px black;border-bottom:solid 1px black;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">`),J=p(`<div style=height:100vh;display:flex;flex-direction:column><div><label>col<input type=number></label><label>row<input type=number></label><button>scroll to index</button><button>randomize</button></div><div><label>x<input type=number></label><label>y<input type=number></label><button>scroll to offset</button><button>scroll by offset`),Y={component:U},X={render:()=>n(U,{rows:1e3,rowHeight:40,cols:500,colWidth:100,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`},children:(e,t)=>(()=>{var n=G(),r=n.firstChild;return v(n,e,r),v(n,t,null),n})()})},Z={render:()=>{let e=1e3,t={start:1,end:1},r={start:2,end:1};return n(U,{rows:e,rowHeight:40,cols:500,colWidth:100,pinnedRows:t,pinnedCols:r,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`},children:(n,i)=>{let a=n<t.start||n>=e-t.end,o=i<r.start||i>=500-r.end;return(()=>{var e=K(),t=e.firstChild;return f(e,`background`,a?`darkgray`:o?`lightgray`:`white`),f(e,`color`,a?`white`:void 0),v(e,n,t),v(e,i,null),e})()}})}},Q={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=[null,...Array.from({length:1e3}).map((e,t)=>({id:t,username:P.person.fullName(),email:P.internet.email(),company:P.company.name(),domain:P.internet.domainName()}))];return n(U,{rows:t,rowHeight:30,cols:e,colWidth:`width`,pinnedRows:1,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px black`},children:(e,t)=>(()=>{var n=q();return f(n,`background`,e===null?`burlywood`:`white`),v(n,()=>e===null?t.key:e[t.key]),n})()})}},$={render:()=>{let e=1e3,[t,r]=_(567),[i,a]=_(567),[o,s]=_(1e3),[c,u]=_(1e3),d;return(()=>{var f=J(),p=f.firstChild,m=p.firstChild,h=m.firstChild.nextSibling,g=m.nextSibling,_=g.firstChild.nextSibling,y=g.nextSibling,b=y.nextSibling,x=p.nextSibling.firstChild,S=x.firstChild.nextSibling,C=x.nextSibling,w=C.firstChild.nextSibling,T=C.nextSibling,E=T.nextSibling;return h.$$input=e=>a(Number(e.currentTarget.value)),_.$$input=e=>r(Number(e.currentTarget.value)),y.$$click=()=>{d?.scrollToIndex({rowIndex:t(),colIndex:i()})},b.$$click=()=>{a(Math.floor(e*Math.random())),r(Math.floor(e*Math.random()))},S.$$input=e=>u(Number(e.currentTarget.value)),w.$$input=e=>s(Number(e.currentTarget.value)),T.$$click=()=>{d?.scrollTo({vertical:o(),horizontal:c()})},E.$$click=()=>{d?.scrollBy({vertical:o(),horizontal:c()})},v(f,n(U,{ref(e){var t=d;typeof t==`function`?t(e):d=e},rows:e,rowHeight:80,cols:e,colWidth:160,style:{flex:1,"box-sizing":`border-box`,border:`solid 1px gray`},children:(e,t)=>(()=>{var n=G(),r=n.firstChild;return v(n,e,r),v(n,t,null),n})()}),null),l(()=>h.value=i()),l(()=>_.value=t()),l(()=>S.value=c()),l(()=>w.value=o()),f})()}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <VGrid rows={1000} rowHeight={40} cols={500} colWidth={100} style={{
    height: "100vh",
    "box-sizing": "border-box",
    border: "solid 1px gray"
  }}>
      {(rowIndex, colIndex) => <div style={{
      background: "white",
      padding: "4px",
      "border-right": "solid 1px gray",
      "border-bottom": "solid 1px gray"
    }}>
          {rowIndex} / {colIndex}
        </div>}
    </VGrid>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ROWS = 1000;
    const COLS = 500;
    const PINNED_ROWS = {
      start: 1,
      end: 1
    };
    const PINNED_COLS = {
      start: 2,
      end: 1
    };
    return <VGrid rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} pinnedRows={PINNED_ROWS} pinnedCols={PINNED_COLS} style={{
      height: "100vh",
      "box-sizing": "border-box",
      border: "solid 1px gray"
    }}>
        {(rowIndex, colIndex) => {
        const isPinnedRow = rowIndex < PINNED_ROWS.start || rowIndex >= ROWS - PINNED_ROWS.end;
        const isPinnedCol = colIndex < PINNED_COLS.start || colIndex >= COLS - PINNED_COLS.end;
        return <div style={{
          background: isPinnedRow ? "darkgray" : isPinnedCol ? "lightgray" : "white",
          color: isPinnedRow ? "white" : undefined,
          padding: "4px",
          "border-right": "solid 1px gray",
          "border-bottom": "solid 1px gray"
        }}>
              {rowIndex} / {colIndex}
            </div>;
      }}
      </VGrid>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    // fixed widths and content-fit (auto) widths can be mixed
    const columns = [{
      key: "id",
      width: 60
    }, {
      key: "username",
      width: 200
    }, {
      key: "email",
      width: "auto"
    }, {
      key: "company",
      width: "auto"
    }, {
      key: "domain",
      width: 200
    }] as const;
    const data = Array.from({
      length: 1000
    }).map((_, i) => ({
      id: i,
      username: faker.person.fullName(),
      email: faker.internet.email(),
      company: faker.company.name(),
      domain: faker.internet.domainName()
    }));
    // the header row has no data
    const rows = [null, ...data];
    return <VGrid rows={rows} rowHeight={30} cols={columns} colWidth="width" pinnedRows={1} style={{
      height: "100vh",
      "box-sizing": "border-box",
      border: "solid 1px black"
    }}>
        {(row, column) => <div style={{
        background: row === null ? "burlywood" : "white",
        padding: "4px",
        "border-right": "solid 1px black",
        "border-bottom": "solid 1px black",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap"
      }}>
            {row === null ? column.key : row[column.key]}
          </div>}
      </VGrid>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [rowIndex, setRowIndex] = createSignal(567);
    const [colIndex, setColIndex] = createSignal(567);
    const [vertical, setVertical] = createSignal(1000);
    const [horizontal, setHorizontal] = createSignal(1000);
    let handle: VGridHandle | undefined;
    return <div style={{
      height: "100vh",
      display: "flex",
      "flex-direction": "column"
    }}>
        <div>
          <label>
            col
            <input type="number" value={colIndex()} onInput={e => setColIndex(Number(e.currentTarget.value))} />
          </label>
          <label>
            row
            <input type="number" value={rowIndex()} onInput={e => setRowIndex(Number(e.currentTarget.value))} />
          </label>
          <button onClick={() => {
          handle?.scrollToIndex({
            rowIndex: rowIndex(),
            colIndex: colIndex()
          });
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setColIndex(Math.floor(LENGTH * Math.random()));
          setRowIndex(Math.floor(LENGTH * Math.random()));
        }}>
            randomize
          </button>
        </div>
        <div>
          <label>
            x
            <input type="number" value={horizontal()} onInput={e => setHorizontal(Number(e.currentTarget.value))} />
          </label>
          <label>
            y
            <input type="number" value={vertical()} onInput={e => setVertical(Number(e.currentTarget.value))} />
          </label>
          <button onClick={() => {
          handle?.scrollTo({
            vertical: vertical(),
            horizontal: horizontal()
          });
        }}>
            scroll to offset
          </button>
          <button onClick={() => {
          handle?.scrollBy({
            vertical: vertical(),
            horizontal: horizontal()
          });
        }}>
            scroll by offset
          </button>
        </div>
        <VGrid ref={handle} rows={LENGTH} rowHeight={80} cols={LENGTH} colWidth={160} style={{
        flex: 1,
        "box-sizing": "border-box",
        border: "solid 1px gray"
      }}>
          {(rowIndex, colIndex) => <div style={{
          background: "white",
          padding: "4px",
          "border-right": "solid 1px gray",
          "border-bottom": "solid 1px gray"
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...$.parameters?.docs?.source}}},m([`input`,`click`]),oe=[`Default`,`Pinned`,`Columns`,`ScrollTo`]})))()}se();export{Q as Columns,X as Default,Z as Pinned,$ as ScrollTo,oe as __namedExportsOrder,Y as default};