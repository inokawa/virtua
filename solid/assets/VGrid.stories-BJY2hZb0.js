import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,D as n,O as r,S as i,a,d as o,f as s,g as c,h as l,j as u,k as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,u as y,v as b,w as x,x as S,y as C}from"./iframe-aBDkq7kk.js";import{S as w,_ as T,a as ee,b as te,c as E,d as D,f as ne,g as O,h as re,i as k,l as A,m as ie,n as ae,o as oe,p as se,s as j,u as M,v as N,x as P,y as F}from"./driver-DkKHdang.js";import{n as I,t as ce}from"./en-uMSCgswj.js";var L,R,le;function z(){return(z=e((()=>{D(),N(),L=e=>typeof e==`number`?e:e.length,R=(e,t)=>typeof e==`number`?t:e[t],le=(e,t,n=0)=>{let r=L(e),i=typeof t==`number`,a=t===`auto`,o=(i?t:40)+n,s=0,c=a,l=0,u=0,d=null,f=[],p=[0],m=[],h=e=>a||!!m[e],g=e=>{let t=f.length+1;for(let n=e;n<t;n++){let e=f[n-1];e===-1&&(e=o);for(let t=1;t<(n&-n);t<<=1)e+=p[n-t];p[n]=e}p.length=t},_=()=>{f.length||(A(f,r),g(1))},v=e=>{let t=f[e];return t===-1?o:t},y=e=>{if(!r)return 0;if(!f.length)return e*o;let t=0;for(;e>0;e-=e&-e)t+=p[e];return t},b=e=>f.length?M(y,r,e):o?O(T(e/o),0,r-1):0,x=()=>P(l,r),S=()=>F(r-u,x()),C=e=>(f.length?v(e):o)-n;return{$getRange:(e,t)=>{let i=y(x()),a=y(r)-y(S()),o=e+(i?i-n:0);return[b(o),b(F(o,t-(a?a-n:0)))]},$findIndex:b,$getItemOffset:y,$getItemSize:C,$setItemSizes:(e,t)=>{for(let[t,r]of e)if(h(t)){_();let e=r+n-v(t);s+=f[t]===-1?r:r-C(t),f[t]=r+n;for(let n=t+1;n<p.length;n+=n&-n)p[n]+=e}if(c&&t&&s>t){let e=w(f.filter(e=>e!==-1&&e)),t=e.length,n=t/2|0;o=t%2==0?(e[n-1]+e[n])/2:e[n],g(1),c=!1}},$isSizeEqual:(e,t=-1)=>{let r=f.length?f[e]:-1;return t===-1?h(e)&&r===-1:r===t+n},$getTotalSize:()=>r?y(r)-n:0,$getLength:()=>r,$setLength:e=>{let t=e-r;r=e,f.length&&(t>=0?A(f,t):f.splice(t),g(p.length))},$isEstimating:()=>c,$isMeasurable:h,$setPinned:(e=0,t=0)=>{l=e,u=t},$getPinnedStart:x,$getTrailStart:S,$getSizes:(e,t)=>typeof t==`number`?i?t:null:i||a||t===`auto`?null:e.map(e=>e==null?null:e[t]),$relayout:e=>{if(e==null)return!1;if(typeof e==`number`){let t=e+n;return t!==o&&(o=t,!0)}if(e===d&&r===m.length)return!1;d=e,m.length=r,_();let t=!1;for(let i=0;i<r;i++){let r=e[i],a=typeof r!=`number`;if(!a||!m[i]){m[i]=a;let e=a?-1:r+n;f[i]!==e&&(f[i]=e,t=!0)}}return t&&g(1),t}}}})))()}var B,V,H,ue,U,W,de,G;function K(){return(K=e((()=>{h(),x(),ie(),N(),k(),z(),E(),B=l(`<div>`),V=l(`<div role=row>`),H=l(`<div role=rowgroup>`),ue=l(`<div><div>`),U=e=>{let t,n=i(()=>e._state),r=i(()=>n().$measureRow),s=i(()=>n().$measureCol),c=i(()=>e._row),l=i(()=>e._col),d=i(()=>{let t=c(),r=l();return u(()=>e._children(t,r,{rowIndex:e._rowIndex,colIndex:n().$col}))});S(()=>[r(),s()],([n,r])=>e._resizer(t,n,r));let m=i(()=>j(n().$style));var h=B(),g=t;return typeof g==`function`||Array.isArray(g)?y(()=>g,h):t=h,v(h,d),a(()=>({e:n().$role,t:n().$col+1,a:n().$rowSpan,o:n().$colSpan,i:n().$sort,n:f(m())}),({e,t,a:n,o:r,i,n:a},s)=>{e!==s?.e&&o(h,`role`,e),t!==s?.t&&o(h,`aria-colindex`,t),n!==s?.a&&o(h,`aria-rowspan`,n),r!==s?.o&&o(h,`aria-colspan`,r),i!==s?.i&&o(h,`aria-sort`,i),p(h,a,s?.n)}),h},W=e=>{let t=i(()=>e._state),n=i(()=>t().$cells.map(e=>e.$col)),r=i(()=>j(t().$style));var s=V();return v(s,C(b,{get each(){return n()},children:(n,r)=>C(U,{get _state(){return t().$cells[r()]},get _children(){return e._children},get _row(){return e._row},get _col(){return R(e._cols,n)},get _rowIndex(){return t().$row},get _resizer(){return e._resizer}})})),a(()=>({e:t().$row+1,t:f(r())}),({e,t},n)=>{e!==n?.e&&o(s,`aria-rowindex`,e),p(s,t,n?.t)}),s},de=e=>{let t=i(()=>e._state.$rows.map(e=>e.$row)),n=i(()=>j(e._state.$style));var r=H();return v(r,C(b,{get each(){return t()},children:(t,n)=>C(W,{get _state(){return e._state.$rows[n()]},get _children(){return e._children},get _row(){return R(e._rows,t)},get _cols(){return e._cols},get _resizer(){return e._resizer}})})),a(()=>f(n()),(e,t)=>{p(r,e,t)}),r},G=e=>{let o,s=u(()=>e.ssrRowCount),c=u(()=>e.ssrColCount),l=u(()=>e.gap??0),m=n(e,`ref`,`children`,`rows`,`cols`,`rowHeight`,`colWidth`,`headerRows`,`sectionRows`,`footerRows`,`headerCols`,`footerCols`,`spans`,`keepMounted`,`bufferSize`,`ssrRowCount`,`ssrColCount`,`gap`,`ariaSort`,`onVerticalScroll`,`onHorizontalScroll`,`onScrollEnd`,`onResize`,`style`),h=u(()=>le(e.rows,e.rowHeight,l)),_=u(()=>le(e.cols,e.colWidth,l)),x=i(()=>h.$getSizes(e.rows,e.rowHeight)),w=i(()=>_.$getSizes(e.cols,e.colWidth)),T=i(()=>oe(e.spans)),E=ne(h,s),D=ne(_,c),O=ae(E,D,h,_),k=()=>E.$getStateVersion()+D.$getStateVersion(),[A,ie]=t(()=>{let t=e.headerRows,n=e.footerRows,r=e.headerCols,i=e.footerCols,a=L(e.rows),o=L(e.cols),s=x(),c=w();return u(()=>{h.$setPinned(t,n),_.$setPinned(r,i),E.$update(5,a),D.$update(5,o),re(E,h,s),re(D,_,c)}),k()},{ownedWrite:!0}),j=()=>ie(k()),M=!1,N=()=>{M&&!E.$isScrolling()&&!D.$isScrolling()&&(M=!1,e.onScrollEnd&&e.onScrollEnd())},P,F=()=>{P||(P=!0,te(()=>{P=!1,e.onResize&&e.onResize()}))},I=E.$subscribe(t=>{t&1&&j(),t&4&&(M=!0,e.onVerticalScroll&&e.onVerticalScroll(E.$getScrollOffset())),t&8&&N(),t&2&&F()}),ce=D.$subscribe(t=>{t&1&&j(),t&4&&(M=!0,e.onHorizontalScroll&&e.onHorizontalScroll(D.$getScrollOffset())),t&8&&N(),t&2&&F()}),z=i(()=>A()&&h.$getLength()),B=i(()=>A()&&_.$getLength()),V=i(()=>(A(),ee(h,_,E.$getRange(e.bufferSize),D.$getRange(e.bufferSize),T(),e.sectionRows,e.keepMounted,e.ariaSort))),H=i(()=>V().$groups.map(e=>`$rows`in e?e.$key:e.$row)),U=i(()=>A()&&(E.$isScrolling()||D.$isScrolling())),G=i(()=>{let{$rowTemplate:e,$colTemplate:t}=V(),n=E.$getItemOffset(0),r=D.$getItemOffset(0);return{contain:`size style`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:l+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:se(E)-n+`px`,"pointer-events":U()?`none`:void 0}}),K=u(()=>e.ref);K&&(K({get verticalScrollOffset(){return E.$getScrollOffset()},get horizontalScrollOffset(){return D.$getScrollOffset()},get scrollHeight(){return se(E)},get scrollWidth(){return se(D)},get viewportHeight(){return E.$getViewportSize()},get viewportWidth(){return D.$getViewportSize()},findRowIndex:h.$findIndex,findColIndex:_.$findIndex,getRowOffset:E.$getItemOffset,getColOffset:D.$getItemOffset,getRowSize:h.$getItemSize,getColSize:_.$getItemSize,scrollToIndex:t=>O.$scroll(t,e.sectionRows),scrollTo:({vertical:e,horizontal:t})=>O.$scroll({rowOffset:e,colOffset:t}),scrollBy:({vertical:e,horizontal:t})=>O.$scroll({rowOffset:e==null?e:e+E.$getScrollOffset(),colOffset:t==null?t:t+D.$getScrollOffset()})}),r(()=>K())),d(()=>(O.$observe(o),()=>{I(),ce(),O.$dispose()})),S(A,O.$effect);var q=ue(),J=q.firstChild;g(q,[{role:`table`,get"aria-rowcount"(){return z()},get"aria-colcount"(){return B()}},m,{get style(){return{overflow:`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}],!0);var Y=o;return typeof Y==`function`||Array.isArray(Y)?y(()=>Y,J):o=J,v(J,C(b,{get each(){return H()},children:(t,n)=>t<0?C(de,{get _state(){return V().$groups[n()]},get _children(){return e.children},get _rows(){return e.rows},get _cols(){return e.cols},get _resizer(){return O.$observeCell}}):C(W,{get _state(){return V().$groups[n()]},get _children(){return e.children},get _row(){return R(e.rows,t)},get _cols(){return e.cols},get _resizer(){return O.$observeCell}})})),a(()=>f(G()),(e,t)=>{p(J,e,t)}),q},G.__docgenInfo={displayName:`VGrid`,description:`Virtualized grid component for tabular data. See {@link VGridProps} and {@link VGridHandle}.`,props:{ref:{name:`ref`,required:!1,type:{name:`VGridHandle`,raw:`VGridHandle`},defaultValue:null,description:`Get reference to {@link VGridHandle}.`},children:{name:`children`,required:!0,type:{name:`(row: R, col: C, cell: Readonly<GridCell>) => Element`,raw:`(row: R, col: C, cell: Readonly<GridCell>) => Element`},defaultValue:null,description:`A function to create cell elements rendered by this component.`},rows:{name:`rows`,required:!0,type:{name:`GridAxis<R>`,raw:`GridAxis<R>`},defaultValue:null,description:`The rows of the grid. See {@link GridAxis} for the accepted values.`},cols:{name:`cols`,required:!0,type:{name:`GridAxis<C>`,raw:`GridAxis<C>`},defaultValue:null,description:`The columns of the grid. See {@link GridAxis} for the accepted values.`},rowHeight:{name:`rowHeight`,required:!0,type:{name:`string | number`,raw:`string | number`},defaultValue:null,description:`The heights of the rows. See {@link GridSize} for the accepted values.`},colWidth:{name:`colWidth`,required:!0,type:{name:`string | number`,raw:`string | number`},defaultValue:null,description:`The widths of the columns. See {@link GridSize} for the accepted values.`},headerRows:{name:`headerRows`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the leading rows pinned to the start, which are the column headers (\`role="columnheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},sectionRows:{name:`sectionRows`,required:!1,type:{name:`array`,raw:`readonly number[]`},defaultValue:null,description:`Indexes of the rows which start sections. A section lasts until the next section row or the footer rows, and its first row sticks below the header rows while the section is scrolled through.

**The section rows are rendered over the other cells while they stick, so give them an opaque background.**`},footerRows:{name:`footerRows`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the trailing rows pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},headerCols:{name:`headerCols`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the leading columns pinned to the start, the last of which is the row header (\`role="rowheader"\`).

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},footerCols:{name:`footerCols`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of the trailing columns pinned to the end.

**The pinned cells are rendered over the other cells, so give them an opaque background.**`},spans:{name:`spans`,required:!1,type:{name:`array`,raw:`readonly GridSpan[]`},defaultValue:null,description:`Cells merged over multiple rows and/or columns. See {@link GridSpan} for the accepted values.

The cell at the origin is stretched over the merged area, and the other cells in it are not rendered. Spans must not overlap each other or cross the boundaries of the pinned rows/columns or the sections. A spanning cell is not measured for \`"auto"\` sizes on the axes it spans, and doesn't enlarge those tracks.`},keepMounted:{name:`keepMounted`,required:!1,type:{name:`array`,raw:`readonly GridCell[]`},defaultValue:null,description:`List of cells that should be always mounted, even when off screen.`},bufferSize:{name:`bufferSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank cells in fast scrolling.`},ssrRowCount:{name:`ssrRowCount`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`A prop for SSR. If set, the specified amount of rows will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set \`ssrColCount\` too, as a cell is mounted only when both its row and its column are.**`},ssrColCount:{name:`ssrColCount`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`A prop for SSR. If set, the specified amount of columns will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**Set \`ssrRowCount\` too, as a cell is mounted only when both its row and its column are.**`},gap:{name:`gap`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The gap between the rows and the columns in pixels, which is not included in the sizes. Must not be changed after mount.`},ariaSort:{name:`ariaSort`,required:!1,type:{name:`{ colIndex: number; order: "ascending" | "descending" | "other"; rowIndex: number; }`,raw:`{ colIndex: number; order: "ascending" | "descending" | "other"; rowIndex: number; }`},defaultValue:null,description:"The header cell of the sorted column or row, and the sort order (`aria-sort`)."},onVerticalScroll:{name:`onVerticalScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever the vertical scroll offset changes.`},onHorizontalScroll:{name:`onHorizontalScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever the horizontal scroll offset changes.`},onScrollEnd:{name:`onScrollEnd`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when scrolling stops.`},onResize:{name:`onResize`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when the size of the viewport or the items changes.`},slot:{name:`slot`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},style:{name:`style`,required:!1,type:{name:`CSSProperties`,raw:`CSSProperties`},defaultValue:null},title:{name:`title`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},accesskey:{name:`accesskey`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},contenteditable:{name:`contenteditable`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty | "plaintext-only" | "inherit"`,raw:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty | "plaintext-only" | "inherit"`},defaultValue:null},dir:{name:`dir`,required:!1,type:{name:`RemoveAttribute | HTMLDir`,raw:`RemoveAttribute | HTMLDir`},defaultValue:null},draggable:{name:`draggable`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null},hidden:{name:`hidden`,required:!1,type:{name:`"hidden" | RemoveAttribute | EnumeratedAcceptsEmpty | "until-found"`,raw:`"hidden" | RemoveAttribute | EnumeratedAcceptsEmpty | "until-found"`},defaultValue:null},inert:{name:`inert`,required:!1,type:{name:`boolean | "" | undefined`,raw:`boolean | "" | undefined`},defaultValue:null},inputmode:{name:`inputmode`,required:!1,type:{name:`"search" | "text" | RemoveAttribute | "decimal" | "email" | "none" | "numeric" | "tel" | "url"`,raw:`"search" | "text" | RemoveAttribute | "decimal" | "email" | "none" | "numeric" | "tel" | "url"`},defaultValue:null},lang:{name:`lang`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},popover:{name:`popover`,required:!1,type:{name:`RemoveAttribute | EnumeratedAcceptsEmpty | "auto" | "manual" | "hint"`,raw:`RemoveAttribute | EnumeratedAcceptsEmpty | "auto" | "manual" | "hint"`},defaultValue:null},spellcheck:{name:`spellcheck`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty`,raw:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty`},defaultValue:null},translate:{name:`translate`,required:!1,type:{name:`RemoveAttribute | "yes" | "no"`,raw:`RemoveAttribute | "yes" | "no"`},defaultValue:null},class:{name:`class`,required:!1,type:{name:`string | number | boolean | Record<string, boolean | undefined> | ClassValue[] | null | undefined`,raw:`string | number | boolean | Record<string, boolean | undefined> | ClassValue[] | null | undefined`},defaultValue:null,description:`Class names to apply. Accepts a string, an object whose keys are class
names and values are booleans (\`{ active: isActive() }\` — truthy keys
are added), or an array merging strings/objects/nested arrays
(\`["card", props.class, { active: isActive() }]\`).

For conditional classes, prefer the array+object form. Don't build
class strings manually with concatenation, template literals, or
\`.filter(Boolean).join(" ")\` — that's the React/\`classnames\` reflex
and the array+object form replaces it. The array+object form composes
with reactive values directly; manually-built strings re-run the whole
concatenation on every change instead of toggling the affected classes.`},id:{name:`id`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},"aria-controls":{name:`aria-controls`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current
element.`},"aria-current":{name:`aria-current`,required:!1,type:{name:`"time" | RemoveAttribute | EnumeratedPseudoBoolean | "page" | "step" | "location" | "date"`,raw:`"time" | RemoveAttribute | EnumeratedPseudoBoolean | "page" | "step" | "location" | "date"`},defaultValue:null,description:`Indicates the element that represents the current item within a container or set of related
elements.`},"aria-describedby":{name:`aria-describedby`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) that describes the object.`},"aria-disabled":{name:`aria-disabled`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.`},"aria-expanded":{name:`aria-expanded`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.`},"aria-hidden":{name:`aria-hidden`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.`},"aria-label":{name:`aria-label`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Defines a string value that labels the current element.`},"aria-labelledby":{name:`aria-labelledby`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) that labels the current element.`},"aria-live":{name:`aria-live`,required:!1,type:{name:`RemoveAttribute | "off" | "assertive" | "polite"`,raw:`RemoveAttribute | "off" | "assertive" | "polite"`},defaultValue:null,description:`Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.`}}}})))()}var q,J,Y,fe,X,Z,Q,$,pe;function me(){return(me=e((()=>{h(),x(),ce(),K(),q=l(`<div style="padding:4px;border-right:solid 1px gray;border-bottom:solid 1px gray"> / <!>`),J=l(`<div style="padding:4px;border-right:solid 1px black;border-bottom:solid 1px black;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">`),Y=l(`<div style=height:100vh;display:flex;flex-direction:column><div><label>col<input type=number></label><label>row<input type=number></label><button>scroll to index</button><button>randomize</button></div><div><label>x<input type=number></label><label>y<input type=number></label><button>scroll to offset</button><button>scroll by offset`),fe={component:G},X={render:()=>C(G,{rows:1e3,rowHeight:40,cols:500,colWidth:100,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=q(),r=n.firstChild,i=r.nextSibling;return v(n,e,r),v(n,t,i),n})()})},Z={render:()=>{let e=1e3,t={header:1,footer:1},n={header:2,footer:1};return C(G,{rows:e,rowHeight:40,cols:500,colWidth:100,get headerRows(){return t.header},get footerRows(){return t.footer},get headerCols(){return n.header},get footerCols(){return n.footer},style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(r,i)=>{let a=r<t.header||r>=e-t.footer,o=i<n.header||i>=500-n.footer;var c=q(),l=c.firstChild,u=l.nextSibling;return s(c,`background`,a?`darkgray`:o?`lightgray`:void 0),s(c,`color`,a?`white`:void 0),v(c,r,l),v(c,i,u),c}})}},Q={render:()=>{let e=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],t=[null,...Array.from({length:1e3}).map((e,t)=>({id:t,username:I.person.fullName(),email:I.internet.email(),company:I.company.name(),domain:I.internet.domainName()}))];return C(G,{rows:t,rowHeight:30,cols:e,colWidth:`width`,headerRows:1,style:{height:`100vh`,"box-sizing":`border-box`,border:`solid 1px black`,background:`white`},children:(e,t)=>(()=>{var n=J();return s(n,`background`,e===null?`burlywood`:void 0),v(n,()=>e===null?t.key:e[t.key]),n})()})}},$={render:()=>{let e=1e3,[n,r]=t(567),[i,o]=t(567),[s,l]=t(1e3),[u,d]=t(1e3),f;var p=Y(),h=p.firstChild,g=h.firstChild,_=g.firstChild.nextSibling,y=g.nextSibling,b=y.firstChild.nextSibling,x=y.nextSibling,S=x.nextSibling,w=h.nextSibling.firstChild,T=w.firstChild.nextSibling,ee=w.nextSibling,te=ee.firstChild.nextSibling,E=ee.nextSibling,D=E.nextSibling;return _._$$input=e=>o(Number(e.currentTarget.value)),b._$$input=e=>r(Number(e.currentTarget.value)),x._$$click=()=>{f?.scrollToIndex({rowIndex:n(),colIndex:i()})},S._$$click=()=>{o(Math.floor(e*Math.random())),r(Math.floor(e*Math.random()))},T._$$input=e=>d(Number(e.currentTarget.value)),te._$$input=e=>l(Number(e.currentTarget.value)),E._$$click=()=>{f?.scrollTo({vertical:s(),horizontal:u()})},D._$$click=()=>{f?.scrollBy({vertical:s(),horizontal:u()})},v(p,C(G,{ref(e){var t=f;typeof t==`function`||Array.isArray(t)?m(t,e):f=e},rows:e,rowHeight:80,cols:e,colWidth:160,style:{flex:1,"box-sizing":`border-box`,border:`solid 1px gray`,background:`white`},children:(e,t)=>(()=>{var n=q(),r=n.firstChild,i=r.nextSibling;return v(n,e,r),v(n,t,i),n})()}),null),a(()=>({e:i(),t:n(),a:u(),o:s(),i:c()}),({e,t,a:n,o:r,i},a)=>{e===a?.e&&i||(_.value=e??``),t===a?.t&&i||(b.value=t??``),n===a?.a&&i||(T.value=n??``),r===a?.o&&i||(te.value=r??``)}),p}},_([`input`,`click`]),pe=[`Default`,`Pinned`,`Columns`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{code:`const Default = () => (
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
}`,...$.parameters?.docs?.source}}}})))()}me();export{Q as Columns,X as Default,Z as Pinned,$ as ScrollTo,pe as __namedExportsOrder,fe as default};