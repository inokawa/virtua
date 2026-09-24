import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,E as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,h as f,i as p,l as m,m as h,p as g,r as _,s as v,u as y,v as b,w as x,x as S,y as C}from"./iframe-xijWIvb4.js";import{C as w,D as T,E,S as ee,T as D,_ as te,b as O,d as k,f as ne,g as A,h as j,i as M,l as re,m as N,n as ie,p as ae,r as oe,t as se,v as P,w as F,x as I,y as ce}from"./scroll-to-McKwOnQ2.js";import{n as L,t as le}from"./en-DltMjSLJ.js";var R,z,B;function V(){return(V=e((()=>{P(),F(),R=e=>typeof e==`number`?e:e.length,z=(e,t)=>typeof e==`number`?t:e[t],B=(e,t,n=0)=>{let r=R(e),i=typeof t==`number`,a=t===`auto`,o=(i?t:40)+n,s=-1,c=0,l=a,u=0,d=0,f=null,p=[],m=[],h=[],g=e=>a||!!h[e],_=()=>{p.length||A(p,r)},v=e=>{let t=p[e];return t===-1?o:t},y=e=>{if(!r)return 0;if(!p.length)return e*o;if(s>=e)return m[e];s<0&&(m[0]=0,s=0);let t=s,n=m[t];for(;t<e;)n+=v(t),m[++t]=n;return s=e,n},b=(e,t)=>{p[e]=t,s=E(e,s)},x=e=>p.length?te(y,r,e):o?ee(w(e/o),0,r-1):0,S=()=>E(u,r),C=()=>D(r-d,S()),O=e=>(p.length?v(e):o)-n;return{$getRange:(e,t)=>{let i=y(S()),a=y(r)-y(C()),o=e+(i?i-n:0);return[x(o),x(D(o,t-(a?a-n:0)))]},$findIndex:x,$getItemOffset:y,$getItemSize:O,$resize:(e,t,r,i)=>{let a=e.reduce((e,[n,r])=>g(n)&&t(n)?e+(r-O(n)):e,0);for(let[t,r]of e)g(t)&&(_(),c+=p[t]===-1?r:r-O(t),b(t,r+n));if(l&&i&&c>i){let e=0,t=x(r+a),n=[];p.forEach((r,i)=>{r!==-1&&(r&&n.push(r),i<t&&e++)}),s=-1,T(n);let i=n.length,c=i/2|0,u=i%2==0?(n[c-1]+n[c])/2:n[c],d=o;a+=((o=u)-d)*D(t-e,0),l=!1}return a},$isSizeEqual:(e,t=-1)=>{let r=p.length?p[e]:-1;return t===-1?g(e)&&r===-1:r===t+n},$getTotalSize:()=>r?y(r)-n:0,$getLength:()=>r,$setLength:e=>{let t=e-r;return s=E(e-1,s),r=e,p.length&&(t>0?A(p,t):p.splice(t)),0},$isEstimating:()=>l,$isMeasurable:g,$setPinned:(e=0,t=0)=>{u=e,d=t},$getPinnedStart:S,$getTrailStart:C,$getSizes:(e,t)=>typeof t==`number`?i?t:null:i||a||t===`auto`?null:e.map(e=>e==null?null:e[t]),$relayout:(e,t)=>{if(e==null)return;if(typeof e==`number`){let r=e+n;if(r===o)return;let i=x(t)*(r-o);return o=r,i}if(e===f&&r===h.length)return;f=e,h.length=r,_();let i=x(t),a=y(i),s;for(let t=0;t<r;t++){let r=e[t],i=typeof r!=`number`;if(!i||!h[t]){h[t]=i;let e=i?-1:r+n;p[t]!==e&&(b(t,e),s=!0)}}if(s)return y(i)-a}}}})))()}var H,U,W,ue,G,K,de,q;function fe(){return(fe=e((()=>{p(),S(),I(),k(),V(),M(),j(),H=u(`<div>`),U=u(`<div role=row>`),W=u(`<div role=rowgroup>`),ue=u(`<div role=table><div>`),G=e=>{let r,[i,a]=c(void 0);f(()=>a(e._state));let l=b(()=>i().$measureRow),u=b(()=>i().$measureCol),p=b(()=>e._row),m=b(()=>e._col),h=b(()=>{let t=p(),r=m();return n(()=>e._children(t,r,{rowIndex:e._rowIndex,colIndex:i().$col}))});o(t([l,u],([t,n])=>{!r||t==null&&n==null||x(e._resizer(r,t,n))}));let g=b(()=>N(i().$style));return(()=>{var e=H(),t=r;return typeof t==`function`?d(t,e):r=e,s(e,h),C(t=>{var n=i().$role,r=i().$col+1,a=i().$rowSpan,o=i().$colSpan,s=i().$sort,c=g();return n!==t.e&&v(e,`role`,t.e=n),r!==t.t&&v(e,`aria-colindex`,t.t=r),a!==t.a&&v(e,`aria-rowspan`,t.a=a),o!==t.o&&v(e,`aria-colspan`,t.o=o),s!==t.i&&v(e,`aria-sort`,t.i=s),t.n=y(e,c,t.n),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),e})()},K=e=>{let t=b(()=>e._state),n=b(()=>t().$cells.map(e=>e.$col)),r=b(()=>N(t().$style));return(()=>{var i=U();return s(i,h(g,{get each(){return n()},children:(n,r)=>h(G,{get _state(){return t().$cells[r()]},get _children(){return e._children},get _row(){return e._row},get _col(){return z(e._cols,n)},get _rowIndex(){return t().$row},get _resizer(){return e._resizer}})})),C(e=>{var n=t().$row+1,a=r();return n!==e.e&&v(i,`aria-rowindex`,e.e=n),e.t=y(i,a,e.t),e},{e:void 0,t:void 0}),i})()},de=e=>{let t=b(()=>e._state.$rows.map(e=>e.$row)),n=b(()=>N(e._state.$style));return(()=>{var r=W();return s(r,h(g,{get each(){return t()},children:(t,n)=>h(K,{get _state(){return e._state.$rows[n()]},get _children(){return e._children},get _row(){return z(e._rows,t)},get _cols(){return e._cols},get _resizer(){return e._resizer}})})),C(e=>y(r,n(),e)),r})()},q=e=>{let n,l=i({gap:0},e),{rows:u,cols:p,rowHeight:_,colWidth:v,gap:S}=l,[,w]=r(e,[`ref`,`children`,`rows`,`cols`,`rowHeight`,`colWidth`,`headerRows`,`sectionRows`,`footerRows`,`headerCols`,`footerCols`,`spans`,`keepMounted`,`bufferSize`,`gap`,`ariaSort`,`onVerticalScroll`,`onHorizontalScroll`,`onScrollEnd`,`style`]),T=B(u,_,S),E=B(p,v,S),ee=b(()=>T.$getSizes(e.rows,e.rowHeight)),D=b(()=>E.$getSizes(e.cols,e.colWidth)),te=b(()=>ae(e.spans)),k=ce(T),A=ce(E),j=re(k,A),M=()=>k.$getStateVersion()+A.$getStateVersion(),[N,P]=c(M()),F=()=>P(M());k.$subscribe(1,F),A.$subscribe(1,F);let I=!1;k.$subscribe(4,()=>{I=!0,e.onVerticalScroll&&e.onVerticalScroll(k.$getScrollOffset())}),A.$subscribe(4,()=>{I=!0,e.onHorizontalScroll&&e.onHorizontalScroll(A.$getScrollOffset())});let L=()=>{I&&!k.$isScrolling()&&!A.$isScrolling()&&(I=!1,e.onScrollEnd&&e.onScrollEnd())};k.$subscribe(8,L),A.$subscribe(8,L),f(()=>{T.$setPinned(e.headerRows,e.footerRows),E.$setPinned(e.headerCols,e.footerCols);let t=R(e.rows),n=R(e.cols);t!==k.$getItemsLength()&&k.$update(5,[t]),n!==A.$getItemsLength()&&A.$update(5,[n]),k.$update(9,ee()),A.$update(9,D())});let le=b(()=>N()&&k.$getItemsLength()),V=b(()=>N()&&A.$getItemsLength()),H=b(()=>(N(),ne(T,E,k.$getRange(e.bufferSize),A.$getRange(e.bufferSize),te(),e.sectionRows,e.keepMounted,e.ariaSort))),U=b(()=>H().$groups.map(e=>`$rows`in e?e.$key:e.$row)),W=b(()=>N()&&(k.$isScrolling()||A.$isScrolling())),G=b(()=>{let{$rowTemplate:e,$colTemplate:t}=H(),n=k.$getItemOffset(0),r=A.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:l.gap+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:O(k)-n+`px`,"pointer-events":W()?`none`:void 0}}),q=e.ref;return q&&(q({get verticalScrollOffset(){return k.$getScrollOffset()},get horizontalScrollOffset(){return A.$getScrollOffset()},get scrollHeight(){return O(k)},get scrollWidth(){return O(A)},get viewportHeight(){return k.$getViewportSize()},get viewportWidth(){return A.$getViewportSize()},findRowIndex:k.$findItemIndex,findColIndex:A.$findItemIndex,getRowOffset:k.$getItemOffset,getColOffset:A.$getItemOffset,getRowSize:k.$getItemSize,getColSize:A.$getItemSize,scrollToIndex:t=>oe(j,k,A,T,E,e.sectionRows,t),scrollTo:({vertical:e,horizontal:t})=>ie(j,e,t),scrollBy:({vertical:e,horizontal:t})=>se(j,k,A,e,t)}),x(()=>q())),a(()=>{j.$observe(n),x(()=>{k.$dispose(),A.$dispose(),j.$dispose()})}),o(t(N,()=>{j.$effect()})),(()=>{var t=ue(),r=t.firstChild;m(t,i({get"aria-rowcount"(){return le()},get"aria-colcount"(){return V()}},w,{get style(){return{overflow:`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}),!1,!0);var a=n;return typeof a==`function`?d(a,r):n=r,s(r,h(g,{get each(){return U()},children:(t,n)=>t<0?h(de,{get _state(){return H().$groups[n()]},get _children(){return e.children},get _rows(){return e.rows},get _cols(){return e.cols},get _resizer(){return j.$observeItem}}):h(K,{get _state(){return H().$groups[n()]},get _children(){return e.children},get _row(){return z(e.rows,t)},get _cols(){return e.cols},get _resizer(){return j.$observeItem}})})),C(e=>y(r,G(),e)),t})()},q.__docgenInfo={displayName:`VGrid`,description:`Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.`,props:{ref:{name:`ref`,required:!1,type:{name:`VGridHandle | ((handle?: VGridHandle | undefined) => void) | undefined`,raw:`VGridHandle | ((handle?: VGridHandle | undefined) => void) | undefined`},defaultValue:null,description:`Get reference to {@link VGridHandle}.`},children:{name:`children`,required:!0,type:{name:`(row: R, col: C, cell: Readonly<GridCell>) => Element`,raw:`(row: R, col: C, cell: Readonly<GridCell>) => Element`},defaultValue:null,description:`A function to create cell elements rendered by this component.`},rows:{name:`rows`,required:!0,type:{name:`GridAxis<R>`,raw:`GridAxis<R>`},defaultValue:null,description:`The rows of the grid. See {@link GridAxis} for the accepted values.`},cols:{name:`cols`,required:!0,type:{name:`GridAxis<C>`,raw:`GridAxis<C>`},defaultValue:null,description:`The columns of the grid. See {@link GridAxis} for the accepted values.`},rowHeight:{name:`rowHeight`,required:!0,type:{name:`string | number`,raw:`string | number`},defaultValue:null,description:`The heights of the rows. See {@link GridSize} for the accepted values.`},colWidth:{name:`colWidth`,required:!0,type:{name:`string | number`,raw:`string | number`},defaultValue:null,description:`The widths of the columns. See {@link GridSize} for the accepted values.`},headerRows:{name:`headerRows`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the leading rows pinned to the start, which are the column headers (\`role="columnheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},sectionRows:{name:`sectionRows`,required:!1,type:{name:`array`,raw:`readonly number[]`},defaultValue:null,description:`Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**`},footerRows:{name:`footerRows`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},headerCols:{name:`headerCols`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the leading columns pinned to the start, the last of which is the row header (\`role="rowheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},footerCols:{name:`footerCols`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},spans:{name:`spans`,required:!1,type:{name:`array`,raw:`readonly GridSpan[]`},defaultValue:null,description:`Cells merged over multiple rows and/or columns. See {@link GridSpan} for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for \`"auto"\` sizes on the axes it spans, and doesn't enlarge those tracks.`},keepMounted:{name:`keepMounted`,required:!1,type:{name:`array`,raw:`readonly GridCell[]`},defaultValue:null,description:`List of cells that should be always mounted, even when off screen.`},bufferSize:{name:`bufferSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Extra space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank cells in fast scrolling.`},gap:{name:`gap`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.`},ariaSort:{name:`ariaSort`,required:!1,type:{name:`{ colIndex: number; order: "ascending" | "descending" | "other"; rowIndex: number; }`,raw:`{ colIndex: number; order: "ascending" | "descending" | "other"; rowIndex: number; }`},defaultValue:null,description:"The header cell of the sorted column or row, and the sort order (`aria-sort`)."},onVerticalScroll:{name:`onVerticalScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever the vertical scroll offset changes.`},onHorizontalScroll:{name:`onHorizontalScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever the horizontal scroll offset changes.`},onScrollEnd:{name:`onScrollEnd`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when scrolling stops.`},class:{name:`class`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},id:{name:`id`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},tabIndex:{name:`tabIndex`,required:!1,type:{name:`string | number | undefined`,raw:`string | number | undefined`},defaultValue:null},"aria-controls":{name:`aria-controls`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current
element.`},"aria-current":{name:`aria-current`,required:!1,type:{name:`boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined`,raw:`boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined`},defaultValue:null,description:`Indicates the element that represents the current item within a container or set of related
elements.`},"aria-describedby":{name:`aria-describedby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that describes the object.`},"aria-disabled":{name:`aria-disabled`,required:!1,type:{name:`boolean | "false" | "true" | undefined`,raw:`boolean | "false" | "true" | undefined`},defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.`},"aria-expanded":{name:`aria-expanded`,required:!1,type:{name:`boolean | "false" | "true" | undefined`,raw:`boolean | "false" | "true" | undefined`},defaultValue:null,description:`Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.`},"aria-hidden":{name:`aria-hidden`,required:!1,type:{name:`boolean | "false" | "true" | undefined`,raw:`boolean | "false" | "true" | undefined`},defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.`},"aria-label":{name:`aria-label`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Defines a string value that labels the current element.`},"aria-labelledby":{name:`aria-labelledby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that labels the current element.`},"aria-live":{name:`aria-live`,required:!1,type:{name:`enum`,raw:`"off" | "assertive" | "polite"`,value:[{value:`"off"`},{value:`"assertive"`},{value:`"polite"`}]},defaultValue:null,description:`Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.`},style:{name:`style`,required:!1,type:{name:`CSSProperties`,raw:`CSSProperties`},defaultValue:null}}}})))()}var J,pe,Y,me,X,Z,Q,$,he;function ge(){return(ge=e((()=>{p(),S(),le(),fe(),J=u(`<div style="padding:4px;border-right:solid 1px gray;border-bottom:solid 1px gray"> / `),pe=u(`<div style="padding:4px;border-right:solid 1px black;border-bottom:solid 1px black;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">`),Y=u(`<div style=height:100vh;display:flex;flex-direction:column><div><label>col<input type=number></label><label>row<input type=number></label><button>scroll to index</button><button>randomize</button></div><div><label>x<input type=number></label><label>y<input type=number></label><button>scroll to offset</button><button>scroll by offset`),me={component:q},X={render:()=>h(q,{rows:1e3,rowHeight:40,cols:500,colWidth:100,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=J(),r=n.firstChild;return s(n,e,r),s(n,t,null),n})()})},Z={render:()=>{let e=1e3,t={header:1,footer:1},n={header:2,footer:1};return h(q,{rows:e,rowHeight:40,cols:500,colWidth:100,get headerRows(){return t.header},get footerRows(){return t.footer},get headerCols(){return n.header},get footerCols(){return n.footer},style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(r,i)=>{let a=r<t.header||r>=e-t.footer,o=i<n.header||i>=500-n.footer;return(()=>{var e=J(),t=e.firstChild;return l(e,`background`,a?`darkgray`:o?`lightgray`:void 0),l(e,`color`,a?`white`:void 0),s(e,r,t),s(e,i,null),e})()}})}},Q={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=[null,...Array.from({length:1e3}).map((e,t)=>({id:t,username:L.person.fullName(),email:L.internet.email(),company:L.company.name(),domain:L.internet.domainName()}))];return h(q,{rows:t,rowHeight:30,cols:e,colWidth:`width`,headerRows:1,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px black`,background:`white`},children:(e,t)=>(()=>{var n=pe();return l(n,`background`,e===null?`burlywood`:void 0),s(n,()=>e===null?t.key:e[t.key]),n})()})}},$={render:()=>{let e=1e3,[t,n]=c(567),[r,i]=c(567),[a,o]=c(1e3),[l,u]=c(1e3),d;return(()=>{var c=Y(),f=c.firstChild,p=f.firstChild,m=p.firstChild.nextSibling,g=p.nextSibling,_=g.firstChild.nextSibling,v=g.nextSibling,y=v.nextSibling,b=f.nextSibling.firstChild,x=b.firstChild.nextSibling,S=b.nextSibling,w=S.firstChild.nextSibling,T=S.nextSibling,E=T.nextSibling;return m.$$input=e=>i(Number(e.currentTarget.value)),_.$$input=e=>n(Number(e.currentTarget.value)),v.$$click=()=>{d?.scrollToIndex({rowIndex:t(),colIndex:r()})},y.$$click=()=>{i(Math.floor(e*Math.random())),n(Math.floor(e*Math.random()))},x.$$input=e=>u(Number(e.currentTarget.value)),w.$$input=e=>o(Number(e.currentTarget.value)),T.$$click=()=>{d?.scrollTo({vertical:a(),horizontal:l()})},E.$$click=()=>{d?.scrollBy({vertical:a(),horizontal:l()})},s(c,h(q,{ref(e){var t=d;typeof t==`function`?t(e):d=e},rows:e,rowHeight:80,cols:e,colWidth:160,style:{flex:1,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=J(),r=n.firstChild;return s(n,e,r),s(n,t,null),n})()}),null),C(()=>m.value=r()),C(()=>_.value=t()),C(()=>x.value=l()),C(()=>w.value=a()),c})()}},_([`input`,`click`]),he=[`Default`,`Pinned`,`Columns`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{code:`const Default = () => (
  <VGrid
    rows={1000}
    rowHeight={40}
    cols={500}
    colWidth={100}
    style={{
      height: "100vh",
      "box-sizing": "border-box",
      border: "solid 1px gray",
      background: "white",
    }}
  >
    {(rowIndex, colIndex) => (
      <div
        style={{
          padding: "4px",
          "border-right": "solid 1px gray",
          "border-bottom": "solid 1px gray",
        }}
      >
        {rowIndex} / {colIndex}
      </div>
    )}
  </VGrid>
);
`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{code:`const Pinned = () => {
  const ROWS = 1000;
  const COLS = 500;
  const PINNED_ROWS = { header: 1, footer: 1 };
  const PINNED_COLS = { header: 2, footer: 1 };
  return (
    <VGrid
      rows={ROWS}
      rowHeight={40}
      cols={COLS}
      colWidth={100}
      headerRows={PINNED_ROWS.header}
      footerRows={PINNED_ROWS.footer}
      headerCols={PINNED_COLS.header}
      footerCols={PINNED_COLS.footer}
      style={{
        height: "100vh",
        "box-sizing": "border-box",
        border: "solid 1px gray",
        background: "white",
      }}
    >
      {(rowIndex, colIndex) => {
        const isPinnedRow =
          rowIndex < PINNED_ROWS.header ||
          rowIndex >= ROWS - PINNED_ROWS.footer;
        const isPinnedCol =
          colIndex < PINNED_COLS.header ||
          colIndex >= COLS - PINNED_COLS.footer;
        return (
          <div
            style={{
              padding: "4px",
              "border-right": "solid 1px gray",
              "border-bottom": "solid 1px gray",
              background: isPinnedRow
                ? "darkgray"
                : isPinnedCol
                  ? "lightgray"
                  : undefined,
              color: isPinnedRow ? "white" : undefined,
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        );
      }}
    </VGrid>
  );
};
`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{code:`const Columns = () => {
  // fixed widths and content-fit (auto) widths can be mixed
  const columns = [
    { key: "id", width: 60 },
    { key: "username", width: 200 },
    { key: "email", width: "auto" },
    { key: "company", width: "auto" },
    { key: "domain", width: 200 },
  ] as const;
  const data = Array.from({ length: 1000 }).map((_, i) => ({
    id: i,
    username: faker.person.fullName(),
    email: faker.internet.email(),
    company: faker.company.name(),
    domain: faker.internet.domainName(),
  }));
  // the header row has no data
  const rows = [null, ...data];
  return (
    <VGrid
      rows={rows}
      rowHeight={30}
      cols={columns}
      colWidth="width"
      headerRows={1}
      style={{
        height: "100vh",
        "box-sizing": "border-box",
        border: "solid 1px black",
        background: "white",
      }}
    >
      {(row, column) => (
        <div
          style={{
            padding: "4px",
            "border-right": "solid 1px black",
            "border-bottom": "solid 1px black",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            background: row === null ? "burlywood" : undefined,
          }}
        >
          {row === null ? column.key : row[column.key]}
        </div>
      )}
    </VGrid>
  );
};
`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{code:`const ScrollTo = () => {
  const LENGTH = 1000;
  const [rowIndex, setRowIndex] = createSignal(567);
  const [colIndex, setColIndex] = createSignal(567);
  const [vertical, setVertical] = createSignal(1000);
  const [horizontal, setHorizontal] = createSignal(1000);
  let handle: VGridHandle | undefined;
  return (
    <div
      style={{ height: "100vh", display: "flex", "flex-direction": "column" }}
    >
      <div>
        <label>
          col
          <input
            type="number"
            value={colIndex()}
            onInput={(e) => setColIndex(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          row
          <input
            type="number"
            value={rowIndex()}
            onInput={(e) => setRowIndex(Number(e.currentTarget.value))}
          />
        </label>
        <button
          onClick={() => {
            handle?.scrollToIndex({
              rowIndex: rowIndex(),
              colIndex: colIndex(),
            });
          }}
        >
          scroll to index
        </button>
        <button
          onClick={() => {
            setColIndex(Math.floor(LENGTH * Math.random()));
            setRowIndex(Math.floor(LENGTH * Math.random()));
          }}
        >
          randomize
        </button>
      </div>
      <div>
        <label>
          x
          <input
            type="number"
            value={horizontal()}
            onInput={(e) => setHorizontal(Number(e.currentTarget.value))}
          />
        </label>
        <label>
          y
          <input
            type="number"
            value={vertical()}
            onInput={(e) => setVertical(Number(e.currentTarget.value))}
          />
        </label>
        <button
          onClick={() => {
            handle?.scrollTo({
              vertical: vertical(),
              horizontal: horizontal(),
            });
          }}
        >
          scroll to offset
        </button>
        <button
          onClick={() => {
            handle?.scrollBy({
              vertical: vertical(),
              horizontal: horizontal(),
            });
          }}
        >
          scroll by offset
        </button>
      </div>
      <VGrid
        ref={handle}
        rows={LENGTH}
        rowHeight={80}
        cols={LENGTH}
        colWidth={160}
        style={{
          flex: 1,
          "box-sizing": "border-box",
          border: "solid 1px gray",
          background: "white",
        }}
      >
        {(rowIndex, colIndex) => (
          <div
            style={{
              padding: "4px",
              "border-right": "solid 1px gray",
              "border-bottom": "solid 1px gray",
            }}
          >
            {rowIndex} / {colIndex}
          </div>
        )}
      </VGrid>
    </div>
  );
};
`,...$.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}ge();export{Q as Columns,X as Default,Z as Pinned,$ as ScrollTo,he as __namedExportsOrder,me as default};