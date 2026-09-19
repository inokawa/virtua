import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,D as r,E as i,F as a,I as o,M as s,N as c,O as l,P as u,S as d,_ as f,b as p,f as m,g as h,j as g,k as _,m as v,p as y,v as b,w as x,x as S,y as C}from"./iframe-BZS07BiJ.js";import{C as w,S as T,_ as E,d as D,f as ee,g as O,h as k,i as A,l as te,m as j,n as ne,p as M,r as re,t as ie,v as N,x as P}from"./scroll-to-DDZJIdRA.js";import{n as F,t as I}from"./en-DltMjSLJ.js";var L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{y(),t(),w(),D(),N(),A(),j(),L=p(`<div>`),R=p(`<div role=row>`),z=p(`<div role=rowgroup>`),B=p(`<div role=table><div>`),V=e=>{let t,[n,a]=_(void 0);x(()=>a(e._state));let u=r(()=>n().$measureRow),d=r(()=>n().$measureCol),f=r(()=>e._row),p=r(()=>e._col),m=r(()=>{let t=f(),r=p();return o(()=>e._children(t,r,{rowIndex:e._rowIndex,colIndex:n().$col}))});i(s([u,d],([n,r])=>{!t||n==null&&r==null||c(e._resizer(t,n,r))}));let g=r(()=>M(n().$style));return(()=>{var e=L(),r=t;return typeof r==`function`?S(r,e):t=e,v(e,m),l(t=>{var r=n().$role,i=n().$col+1,a=n().$rowSpan,o=n().$colSpan,s=n().$sort,c=g();return r!==t.e&&h(e,`role`,t.e=r),i!==t.t&&h(e,`aria-colindex`,t.t=i),a!==t.a&&h(e,`aria-rowspan`,t.a=a),o!==t.o&&h(e,`aria-colspan`,t.o=o),s!==t.i&&h(e,`aria-sort`,t.i=s),t.n=C(e,c,t.n),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),e})()},H=e=>{let t=r(()=>e._state),i=r(()=>t().$cells.map(e=>e.$col)),a=r(()=>M(t().$style));return(()=>{var r=R();return v(r,n(d,{get each(){return i()},children:(r,i)=>n(V,{get _state(){return t().$cells[i()]},get _children(){return e._children},get _row(){return e._row},get _col(){return E(e._cols,r)},get _rowIndex(){return t().$row},get _resizer(){return e._resizer}})})),l(e=>{var n=t().$row+1,i=a();return n!==e.e&&h(r,`aria-rowindex`,e.e=n),e.t=C(r,i,e.t),e},{e:void 0,t:void 0}),r})()},U=e=>{let t=r(()=>e._state.$rows.map(e=>e.$row)),i=r(()=>M(e._state.$style));return(()=>{var r=z();return v(r,n(d,{get each(){return t()},children:(t,r)=>n(H,{get _state(){return e._state.$rows[r()]},get _children(){return e._children},get _row(){return E(e._rows,t)},get _cols(){return e._cols},get _resizer(){return e._resizer}})})),l(e=>C(r,i(),e)),r})()},W=e=>{let t,o=g({gap:0},e),{rows:f,cols:p,rowHeight:m,colWidth:h,gap:y}=o,[,w]=a(e,[`ref`,`children`,`rows`,`cols`,`rowHeight`,`colWidth`,`headerRows`,`sectionRows`,`footerRows`,`headerCols`,`footerCols`,`spans`,`keepMounted`,`bufferSize`,`gap`,`ariaSort`,`onVerticalScroll`,`onHorizontalScroll`,`onScrollEnd`,`style`]),D=O(f,m,y),A=O(p,h,y),j=P(D),M=P(A),N=te(j,M),F=()=>j.$getStateVersion()+M.$getStateVersion(),[I,L]=_(F()),R=()=>L(F());j.$subscribe(1,R),M.$subscribe(1,R);let z=!1;j.$subscribe(4,()=>{z=!0,e.onVerticalScroll&&e.onVerticalScroll(j.$getScrollOffset())}),M.$subscribe(4,()=>{z=!0,e.onHorizontalScroll&&e.onHorizontalScroll(M.$getScrollOffset())});let V=()=>{z&&!j.$isScrolling()&&!M.$isScrolling()&&(z=!1,e.onScrollEnd&&e.onScrollEnd())};j.$subscribe(8,V),M.$subscribe(8,V),x(()=>{k(j,D,e.rows,e.rowHeight,!0)}),x(()=>{k(M,A,e.cols,e.colWidth,!0)});let W=r(()=>I()&&j.$getItemsLength()),G=r(()=>I()&&M.$getItemsLength()),K=r(()=>(I(),ee(D,A,j.$getRange(e.bufferSize),M.$getRange(e.bufferSize),e.headerRows,e.sectionRows,e.footerRows,e.headerCols,e.footerCols,e.spans,e.keepMounted,e.ariaSort))),q=r(()=>K().$groups.map(e=>`$rows`in e?e.$key:e.$row)),J=r(()=>I()&&(j.$isScrolling()||M.$isScrolling())),Y=r(()=>{let{$rowTemplate:e,$colTemplate:t}=K(),n=j.$getItemOffset(0),r=M.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:o.gap+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:T(j)-n+`px`,"pointer-events":J()?`none`:void 0}}),X=e.ref;return X&&(X({get verticalScrollOffset(){return j.$getScrollOffset()},get horizontalScrollOffset(){return M.$getScrollOffset()},get scrollHeight(){return T(j)},get scrollWidth(){return T(M)},get viewportHeight(){return j.$getViewportSize()},get viewportWidth(){return M.$getViewportSize()},findRowIndex:j.$findItemIndex,findColIndex:M.$findItemIndex,getRowOffset:j.$getItemOffset,getColOffset:M.$getItemOffset,getRowSize:j.$getItemSize,getColSize:M.$getItemSize,scrollToIndex:t=>re(N,j,M,e.headerRows,e.sectionRows,e.footerRows,e.headerCols,e.footerCols,t),scrollTo:e=>ne(N,e),scrollBy:e=>ie(N,j,M,e)}),c(()=>X())),u(()=>{N.$observe(t),c(()=>{j.$dispose(),M.$dispose(),N.$dispose()})}),i(s(I,()=>{N.$effect()})),(()=>{var r=B(),i=r.firstChild;b(r,g({get"aria-rowcount"(){return W()},get"aria-colcount"(){return G()}},w,{get style(){return{overflow:`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}),!1,!0);var a=t;return typeof a==`function`?S(a,i):t=i,v(i,n(d,{get each(){return q()},children:(t,r)=>t<0?n(U,{get _state(){return K().$groups[r()]},get _children(){return e.children},get _rows(){return e.rows},get _cols(){return e.cols},get _resizer(){return N.$observeItem}}):n(H,{get _state(){return K().$groups[r()]},get _children(){return e.children},get _row(){return E(e.rows,t)},get _cols(){return e.cols},get _resizer(){return N.$observeItem}})})),l(e=>C(i,Y(),e)),r})()};try{W.displayName=`VGrid`,W.__docgenInfo={description:`Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.`,displayName:`VGrid`,filePath:`/home/runner/work/virtua/virtua/src/solid/VGrid.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Get reference to {@link VGridHandle}.`,name:`ref`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`VGridHandle | ((handle?: VGridHandle | undefined) => void) | undefined`}},children:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`A function to create cell elements rendered by this component.`,name:`children`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{param:`row the item of {@link VGridProps.rows } at the row of the cell, or the row index if {@link VGridProps.rows } is a number
col the item of {@link VGridProps.cols } at the column of the cell, or the column index if {@link VGridProps.cols } is a number
cell the row index and the column index of the cell`},type:{name:`(row: R, col: C, cell: Readonly<VGridCell>) => Element`}},rows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The rows of the grid. See {@link VGridAxis} for the accepted values.`,name:`rows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`VGridAxis<R>`}},cols:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The columns of the grid. See {@link VGridAxis} for the accepted values.`,name:`cols`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`VGridAxis<C>`}},rowHeight:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The heights of the rows. See {@link VGridSize} for the accepted values.`,name:`rowHeight`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`string | number`}},colWidth:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The widths of the columns. See {@link VGridSize} for the accepted values.`,name:`colWidth`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!0,tags:{},type:{name:`string | number`}},headerRows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of the leading rows pinned to the start, which are the column headers (\`role="columnheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`headerRows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},sectionRows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**`,name:`sectionRows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly number[] | undefined`}},footerRows:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`footerRows`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},headerCols:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of the leading columns pinned to the start, the last of which is the row header (\`role="rowheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`headerCols`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},footerCols:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`,name:`footerCols`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},spans:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Cells merged over multiple rows and/or columns. See {@link VGridSpan} for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for \`"auto"\` sizes on the axes it spans, and doesn't enlarge those tracks.`,name:`spans`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly VGridSpan[] | undefined`}},keepMounted:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`List of cells that should be always mounted, even when off screen.`,name:`keepMounted`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`readonly VGridCell[] | undefined`}},bufferSize:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.`,name:`bufferSize`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`200`},type:{name:`number | undefined`}},gap:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.`,name:`gap`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{defaultValue:`0`},type:{name:`number | undefined`}},ariaSort:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:"The header cell of the sorted column or row, and the sort order (`aria-sort`).",name:`ariaSort`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`(VGridCell & { order: "ascending" | "descending" | "other"; }) | undefined`}},onVerticalScroll:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked whenever the vertical scroll offset changes.`,name:`onVerticalScroll`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{param:`offset Current scrollTop.`},type:{name:`((offset: number) => void) | undefined`}},onHorizontalScroll:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked whenever the horizontal scroll offset changes.`,name:`onHorizontalScroll`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{param:`offset Current scrollLeft. Always positive even in RTL.`},type:{name:`((offset: number) => void) | undefined`}},onScrollEnd:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`}],description:`Callback invoked when scrolling stops.`,name:`onScrollEnd`,parent:{fileName:`virtua/src/solid/VGrid.tsx`,name:`VGridProps`},required:!1,tags:{},type:{name:`(() => void) | undefined`}},style:{defaultValue:null,declarations:[{fileName:`virtua/src/solid/types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`CSSProperties | undefined`}}},tags:{}}}catch{}})))()}var K,q,J,Y,X,Z,Q,$,ae;function oe(){return(oe=e((()=>{y(),t(),I(),G(),K=p(`<div style="padding:4px;border-right:solid 1px gray;border-bottom:solid 1px gray"> / `),q=p(`<div style="padding:4px;border-right:solid 1px black;border-bottom:solid 1px black;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">`),J=p(`<div style=height:100vh;display:flex;flex-direction:column><div><label>col<input type=number></label><label>row<input type=number></label><button>scroll to index</button><button>randomize</button></div><div><label>x<input type=number></label><label>y<input type=number></label><button>scroll to offset</button><button>scroll by offset`),Y={component:W},X={render:()=>n(W,{rows:1e3,rowHeight:40,cols:500,colWidth:100,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=K(),r=n.firstChild;return v(n,e,r),v(n,t,null),n})()})},Z={render:()=>{let e=1e3,t={header:1,footer:1},r={header:2,footer:1};return n(W,{rows:e,rowHeight:40,cols:500,colWidth:100,get headerRows(){return t.header},get footerRows(){return t.footer},get headerCols(){return r.header},get footerCols(){return r.footer},style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(n,i)=>{let a=n<t.header||n>=e-t.footer,o=i<r.header||i>=500-r.footer;return(()=>{var e=K(),t=e.firstChild;return f(e,`background`,a?`darkgray`:o?`lightgray`:void 0),f(e,`color`,a?`white`:void 0),v(e,n,t),v(e,i,null),e})()}})}},Q={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=[null,...Array.from({length:1e3}).map((e,t)=>({id:t,username:F.person.fullName(),email:F.internet.email(),company:F.company.name(),domain:F.internet.domainName()}))];return n(W,{rows:t,rowHeight:30,cols:e,colWidth:`width`,headerRows:1,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px black`,background:`white`},children:(e,t)=>(()=>{var n=q();return f(n,`background`,e===null?`burlywood`:void 0),v(n,()=>e===null?t.key:e[t.key]),n})()})}},$={render:()=>{let e=1e3,[t,r]=_(567),[i,a]=_(567),[o,s]=_(1e3),[c,u]=_(1e3),d;return(()=>{var f=J(),p=f.firstChild,m=p.firstChild,h=m.firstChild.nextSibling,g=m.nextSibling,_=g.firstChild.nextSibling,y=g.nextSibling,b=y.nextSibling,x=p.nextSibling.firstChild,S=x.firstChild.nextSibling,C=x.nextSibling,w=C.firstChild.nextSibling,T=C.nextSibling,E=T.nextSibling;return h.$$input=e=>a(Number(e.currentTarget.value)),_.$$input=e=>r(Number(e.currentTarget.value)),y.$$click=()=>{d?.scrollToIndex({rowIndex:t(),colIndex:i()})},b.$$click=()=>{a(Math.floor(e*Math.random())),r(Math.floor(e*Math.random()))},S.$$input=e=>u(Number(e.currentTarget.value)),w.$$input=e=>s(Number(e.currentTarget.value)),T.$$click=()=>{d?.scrollTo({vertical:o(),horizontal:c()})},E.$$click=()=>{d?.scrollBy({vertical:o(),horizontal:c()})},v(f,n(W,{ref(e){var t=d;typeof t==`function`?t(e):d=e},rows:e,rowHeight:80,cols:e,colWidth:160,style:{flex:1,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=K(),r=n.firstChild;return v(n,e,r),v(n,t,null),n})()}),null),l(()=>h.value=i()),l(()=>_.value=t()),l(()=>S.value=c()),l(()=>w.value=o()),f})()}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <VGrid rows={1000} rowHeight={40} cols={500} colWidth={100} style={{
    height: "100vh",
    "box-sizing": "border-box",
    border: "solid 1px gray",
    background: "white"
  }}>
      {(rowIndex, colIndex) => <div style={{
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
      header: 1,
      footer: 1
    };
    const PINNED_COLS = {
      header: 2,
      footer: 1
    };
    return <VGrid rows={ROWS} rowHeight={40} cols={COLS} colWidth={100} headerRows={PINNED_ROWS.header} footerRows={PINNED_ROWS.footer} headerCols={PINNED_COLS.header} footerCols={PINNED_COLS.footer} style={{
      height: "100vh",
      "box-sizing": "border-box",
      border: "solid 1px gray",
      background: "white"
    }}>
        {(rowIndex, colIndex) => {
        const isPinnedRow = rowIndex < PINNED_ROWS.header || rowIndex >= ROWS - PINNED_ROWS.footer;
        const isPinnedCol = colIndex < PINNED_COLS.header || colIndex >= COLS - PINNED_COLS.footer;
        return <div style={{
          padding: "4px",
          "border-right": "solid 1px gray",
          "border-bottom": "solid 1px gray",
          background: isPinnedRow ? "darkgray" : isPinnedCol ? "lightgray" : undefined,
          color: isPinnedRow ? "white" : undefined
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
    return <VGrid rows={rows} rowHeight={30} cols={columns} colWidth="width" headerRows={1} style={{
      height: "100vh",
      "box-sizing": "border-box",
      border: "solid 1px black",
      background: "white"
    }}>
        {(row, column) => <div style={{
        padding: "4px",
        "border-right": "solid 1px black",
        "border-bottom": "solid 1px black",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        background: row === null ? "burlywood" : undefined
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
        border: "solid 1px gray",
        background: "white"
      }}>
          {(rowIndex, colIndex) => <div style={{
          padding: "4px",
          "border-right": "solid 1px gray",
          "border-bottom": "solid 1px gray"
        }}>
              {rowIndex} / {colIndex}
            </div>}
        </VGrid>
      </div>;
  }
}`,...$.parameters?.docs?.source}}},m([`input`,`click`]),ae=[`Default`,`Pinned`,`Columns`,`ScrollTo`]})))()}oe();export{Q as Columns,X as Default,Z as Pinned,$ as ScrollTo,ae as __namedExportsOrder,Y as default};