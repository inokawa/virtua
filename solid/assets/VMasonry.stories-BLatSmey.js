import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,D as n,O as r,S as i,a,f as o,g as s,h as c,j as l,k as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,u as v,v as y,w as b,x,y as S}from"./iframe-BeAdlezq.js";import{S as C,f as ee,h as te,i as w,m as T,p as ne,t as re,v as E}from"./driver-DkKHdang.js";import{i as D,n as O,r as k,t as A}from"./MasonryItem-BOEwcPJY.js";import{n as j,t as M}from"./utils-9lpQGm8d.js";var N,P,F;function I(){return(I=e((()=>{m(),b(),T(),w(),D(),E(),M(),O(),N=c(`<div><div style="contain:size style;flex:none;position:relative;width:100%">`),P=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,F=e=>{let s,c=l(()=>e.ssrCount),d=n(e,`ref`,`data`,`children`,`lanes`,`gap`,`itemSize`,`bufferSize`,`keepMounted`,`cache`,`ssrCount`,`onScroll`,`onScrollEnd`,`onResize`,`style`),f=l(()=>k(e.data.length,e.lanes,e.gap,e.itemSize,e.cache)),p=ee(f,c),m=re(p,f,!1),[g,b]=t(()=>{let t=e.lanes,n=e.gap,r=e.data.length;return l(()=>{te(p,f,t,n),p.$update(5,r)}),p.$getStateVersion()},{ownedWrite:!0}),w=p.$subscribe(t=>{t&1&&b(p.$getStateVersion()),t&4&&e.onScroll?.(p.$getScrollOffset()),t&8&&e.onScrollEnd?.(),t&2&&e.onResize?.()}),T=i(()=>(g(),p.$getRange(e.bufferSize)),{equals:j}),E=i(()=>g()&&p.$isScrolling()),D=i(()=>g()&&p.$getTotalSize()),O=i(()=>g()&&f.$getLanes()),M=i(()=>g()&&f.$getGap()),F=i(()=>P(1/O(),M()/O()-M())),I=l(()=>e.ref);I&&(I({get cache(){return f.$snapshot()},get scrollOffset(){return p.$getScrollOffset()},get scrollSize(){return ne(p)},get viewportSize(){return p.$getViewportSize()},getItemOffset:p.$getItemOffset,getItemSize:f.$getItemSize,scrollToIndex:m.$scroll,scrollTo:e=>m.$scroll(void 0,{offset:e}),scrollBy:e=>m.$scroll(void 0,{offset:e+p.$getScrollOffset()})}),r(()=>I())),u(()=>(m.$observe(s),()=>{w(),m.$dispose()})),x(g,m.$effect);let L=i(()=>{let t=e.data.length,n=[],r=[];if(e.keepMounted){let i=new Set(e.keepMounted);for(let[e,t]=T();e<=t;e++)i.add(e);for(let a of C([...i]))a>=0&&a<t&&(n.push(e.data[a]),r.push(a))}else for(let[t,i]=T();t<=i;t++)n.push(e.data[t]),r.push(t);return{_items:n,_indexes:r}});var R=N(),z=R.firstChild;h(R,[d,{get style(){return{display:`block`,"overflow-y":`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}],!0);var B=s;return typeof B==`function`||Array.isArray(B)?v(()=>B,z):s=z,_(z,S(y,{get each(){return L()._items},children:(t,n)=>{let r=i(()=>L()._indexes[n()]),a=i(()=>(g(),p.$getItemOffset(r()))),o=i(()=>(g(),f.$getItemLane(r()))),s=i(()=>(g(),f.$isSizeEqual(r()))),c=l(()=>e.children(t,r));return S(A,{get _index(){return r()},get _resizer(){return m.$observeItem},get _offset(){return a()},get _crossOffset(){return P(o()/O(),o()*M()/O())},get _crossSize(){return F()},get _hide(){return s()},_children:c})}})),a(()=>({e:D()+`px`,t:E()?`none`:void 0}),({e,t},n)=>{e!==n?.e&&o(z,`height`,e),t!==n?.t&&o(z,`pointer-events`,t)}),R},F.__docgenInfo={displayName:`VMasonry`,description:`Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.`,props:{ref:{name:`ref`,required:!1,type:{name:`VMasonryHandle`,raw:`VMasonryHandle`},defaultValue:null,description:`Get reference to {@link VMasonryHandle}.`},data:{name:`data`,required:!0,type:{name:`array`,raw:`readonly T[]`},defaultValue:null,description:`The data items rendered by this component.`},children:{name:`children`,required:!0,type:{name:`(data: T, index: Accessor<number>) => Element`,raw:`(data: T, index: Accessor<number>) => Element`},defaultValue:null,description:`The elements renderer function.`},lanes:{name:`lanes`,required:!0,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.`},gap:{name:`gap`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The gap between the items and the lanes in pixels, which is not included in the sizes.`},itemSize:{name:`itemSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},bufferSize:{name:`bufferSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.`},keepMounted:{name:`keepMounted`,required:!1,type:{name:`array`,raw:`readonly number[]`},defaultValue:null,description:`List of indexes that should be always mounted, even when off screen.`},cache:{name:`cache`,required:!1,type:{name:`{ 0: number[]; 1: number | undefined; __@iterator@443: () => ArrayIterator<number | number[] | undefined>; __@unscopables@451: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`,raw:`{ 0: number[]; 1: number | undefined; __@iterator@443: () => ArrayIterator<number | number[] | undefined>; __@unscopables@451: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`},defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},ssrCount:{name:`ssrCount`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with \`cache\` to show them on the server.**`},onScroll:{name:`onScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{name:`onScrollEnd`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when scrolling stops.`},onResize:{name:`onResize`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when the size of the viewport or the items changes.`},accesskey:{name:`accesskey`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},contenteditable:{name:`contenteditable`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty | "plaintext-only" | "inherit"`,raw:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty | "plaintext-only" | "inherit"`},defaultValue:null},dir:{name:`dir`,required:!1,type:{name:`RemoveAttribute | HTMLDir`,raw:`RemoveAttribute | HTMLDir`},defaultValue:null},draggable:{name:`draggable`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null},hidden:{name:`hidden`,required:!1,type:{name:`"hidden" | RemoveAttribute | EnumeratedAcceptsEmpty | "until-found"`,raw:`"hidden" | RemoveAttribute | EnumeratedAcceptsEmpty | "until-found"`},defaultValue:null},inert:{name:`inert`,required:!1,type:{name:`boolean | "" | undefined`,raw:`boolean | "" | undefined`},defaultValue:null},inputmode:{name:`inputmode`,required:!1,type:{name:`"search" | RemoveAttribute | "decimal" | "email" | "none" | "numeric" | "tel" | "text" | "url"`,raw:`"search" | RemoveAttribute | "decimal" | "email" | "none" | "numeric" | "tel" | "text" | "url"`},defaultValue:null},lang:{name:`lang`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},popover:{name:`popover`,required:!1,type:{name:`"auto" | RemoveAttribute | EnumeratedAcceptsEmpty | "manual" | "hint"`,raw:`"auto" | RemoveAttribute | EnumeratedAcceptsEmpty | "manual" | "hint"`},defaultValue:null},spellcheck:{name:`spellcheck`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty`,raw:`RemoveAttribute | EnumeratedPseudoBoolean | EnumeratedAcceptsEmpty`},defaultValue:null},title:{name:`title`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},translate:{name:`translate`,required:!1,type:{name:`RemoveAttribute | "yes" | "no"`,raw:`RemoveAttribute | "yes" | "no"`},defaultValue:null},class:{name:`class`,required:!1,type:{name:`string | number | boolean | Record<string, boolean | undefined> | ClassValue[] | null | undefined`,raw:`string | number | boolean | Record<string, boolean | undefined> | ClassValue[] | null | undefined`},defaultValue:null,description:`Class names to apply. Accepts a string, an object whose keys are class
names and values are booleans (\`{ active: isActive() }\` — truthy keys
are added), or an array merging strings/objects/nested arrays
(\`["card", props.class, { active: isActive() }]\`).

For conditional classes, prefer the array+object form. Don't build
class strings manually with concatenation, template literals, or
\`.filter(Boolean).join(" ")\` — that's the React/\`classnames\` reflex
and the array+object form replaces it. The array+object form composes
with reactive values directly; manually-built strings re-run the whole
concatenation on every change instead of toggling the affected classes.`},id:{name:`id`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},slot:{name:`slot`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null},"aria-controls":{name:`aria-controls`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current
element.`},"aria-current":{name:`aria-current`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean | "page" | "step" | "location" | "date" | "time"`,raw:`RemoveAttribute | EnumeratedPseudoBoolean | "page" | "step" | "location" | "date" | "time"`},defaultValue:null,description:`Indicates the element that represents the current item within a container or set of related
elements.`},"aria-describedby":{name:`aria-describedby`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) that describes the object.`},"aria-disabled":{name:`aria-disabled`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.`},"aria-expanded":{name:`aria-expanded`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.`},"aria-hidden":{name:`aria-hidden`,required:!1,type:{name:`RemoveAttribute | EnumeratedPseudoBoolean`,raw:`RemoveAttribute | EnumeratedPseudoBoolean`},defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.`},"aria-label":{name:`aria-label`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Defines a string value that labels the current element.`},"aria-labelledby":{name:`aria-labelledby`,required:!1,type:{name:`string | RemoveAttribute`,raw:`string | RemoveAttribute`},defaultValue:null,description:`Identifies the element (or elements) that labels the current element.`},"aria-live":{name:`aria-live`,required:!1,type:{name:`RemoveAttribute | "off" | "assertive" | "polite"`,raw:`RemoveAttribute | "off" | "assertive" | "polite"`},defaultValue:null,description:`Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.`},role:{name:`role`,required:!1,type:{name:`"search" | "link" | RemoveAttribute | "none" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | ... 57 more ... | "treeitem"`,raw:`"search" | "link" | RemoveAttribute | "none" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | ... 57 more ... | "treeitem"`},defaultValue:null},style:{name:`style`,required:!1,type:{name:`CSSProperties`,raw:`CSSProperties`},defaultValue:null}}}})))()}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{m(),b(),I(),L=c(`<div>`),R=c(`<div style=height:100vh;display:flex;flex-direction:column><div><input type=number><button>scroll to index</button><button>randomize</button><label style=margin-left:4px><input type=checkbox>smooth`),z=c(`<label style=margin-left:4px><input type=radio>`),B={component:F},V=[80,180,120,220,160,100,240],H=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],U=Array.from({length:1e3}).map((e,t)=>t),W=e=>{let t=e*2654435761%7;return{height:V[t]+`px`,border:`solid 1px #ccc`,padding:`4px`,background:H[e%H.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}},G={render:()=>S(F,{style:{height:`100vh`},lanes:3,data:U,children:e=>(()=>{var t=L();return _(t,e),a(()=>d(W(e)),(e,n)=>{f(t,e,n)}),t})()})},K=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],q=e=>({"aspect-ratio":K[e*2654435761%5],border:`solid 1px #ccc`,padding:`4px`,background:H[e%H.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}),J=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],Y=()=>J.find(([e])=>window.matchMedia(e).matches)?.[1]??2,X={render:()=>{let[e,n]=t(Y()),r=()=>{n(Y())};return u(()=>{let e=J.map(([e])=>window.matchMedia(e));return e.forEach(e=>e.addEventListener(`change`,r)),()=>{e.forEach(e=>e.removeEventListener(`change`,r))}}),S(F,{style:{height:`100vh`},get lanes(){return e()},gap:8,data:U,children:e=>(()=>{var t=L();return _(t,e),a(()=>d(q(e)),(e,n)=>{f(t,e,n)}),t})()})}},Z={render:()=>{let e=[`start`,`center`,`end`,`nearest`],[n,r]=t(567),[i,o]=t(`start`),[c,l]=t(!1),u;var m=R(),h=m.firstChild,g=h.firstChild,v=g.nextSibling,b=v.nextSibling,x=b.nextSibling,C=x.firstChild;return g._$$input=e=>r(Number(e.currentTarget.value)),v._$$click=()=>{u?.scrollToIndex(n(),{align:i(),smooth:c()})},b._$$click=()=>{r(Math.round(1e3*Math.random()))},_(h,S(y,{each:e,children:e=>(()=>{var t=z(),n=t.firstChild;return n.addEventListener(`change`,()=>{o(e)}),_(t,e,null),a(()=>i()===e,e=>{n.checked=e}),t})()}),x),C.addEventListener(`change`,()=>{l(e=>!e)}),_(m,S(F,{ref(e){var t=u;typeof t==`function`||Array.isArray(t)?p(t,e):u=e},style:{flex:1},lanes:4,data:U,children:e=>(()=>{var t=L();return _(t,e),a(()=>d(W(e)),(e,n)=>{f(t,e,n)}),t})()}),null),a(()=>({e:n(),t:c(),a:s()}),({e,t,a:n},r)=>{e===r?.e&&n||(g.value=e??``),t===r?.t&&n||(C.checked=t)}),m}},g([`input`,`click`]),Q=[`Default`,`Responsive`,`ScrollTo`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{code:`const Default = () => {
  return (
    <VMasonry style={{ height: "100vh" }} lanes={3} data={data1000}>
      {(i) => <div style={itemStyle(i)}>{i}</div>}
    </VMasonry>
  );
};
`,...G.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{code:`const Responsive = () => {
  const [lanes, setLanes] = createSignal(getLanesByMediaQuery());
  const onChange = () => {
    setLanes(getLanesByMediaQuery());
  };
  onSettled(() => {
    const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
    lists.forEach((list) => list.addEventListener("change", onChange));
    return () => {
      lists.forEach((list) => list.removeEventListener("change", onChange));
    };
  });
  return (
    <VMasonry
      style={{ height: "100vh" }}
      lanes={lanes()}
      gap={8}
      data={data1000}
    >
      {(i) => <div style={aspectRatioItemStyle(i)}>{i}</div>}
    </VMasonry>
  );
};
`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{code:`const ScrollTo = () => {
  const LENGTH = 1000;
  const aligns = ["start", "center", "end", "nearest"] as const;
  const [scrollIndex, setScrollIndex] = createSignal(567);
  const [scrollIndexAlign, setScrollToIndexAlign] =
    createSignal<(typeof aligns)[number]>("start");
  const [smooth, setSmooth] = createSignal(false);
  let handle: VMasonryHandle | undefined;
  return (
    <div
      style={{ height: "100vh", display: "flex", "flex-direction": "column" }}
    >
      <div>
        <input
          type="number"
          value={scrollIndex()}
          onInput={(e) => setScrollIndex(Number(e.currentTarget.value))}
        />
        <button
          onClick={() => {
            handle?.scrollToIndex(scrollIndex(), {
              align: scrollIndexAlign(),
              smooth: smooth(),
            });
          }}
        >
          scroll to index
        </button>
        <button
          onClick={() => {
            setScrollIndex(Math.round(LENGTH * Math.random()));
          }}
        >
          randomize
        </button>
        <For each={aligns}>
          {(align) => (
            <label style={{ "margin-left": "4px" }}>
              <input
                type="radio"
                checked={scrollIndexAlign() === align}
                onChange={() => {
                  setScrollToIndexAlign(align);
                }}
              />
              {align}
            </label>
          )}
        </For>
        <label style={{ "margin-left": "4px" }}>
          <input
            type="checkbox"
            checked={smooth()}
            onChange={() => {
              setSmooth((prev) => !prev);
            }}
          />
          smooth
        </label>
      </div>
      <VMasonry ref={handle} style={{ flex: 1 }} lanes={4} data={data1000}>
        {(i) => <div style={itemStyle(i)}>{i}</div>}
      </VMasonry>
    </div>
  );
};
`,...Z.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VMasonry style={{
      height: "100vh"
    }} lanes={3} data={data1000}>
        {i => <div style={itemStyle(i)}>{i}</div>}
      </VMasonry>;
  }
}`,...G.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [lanes, setLanes] = createSignal(getLanesByMediaQuery());
    const onChange = () => {
      setLanes(getLanesByMediaQuery());
    };
    onSettled(() => {
      const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
      lists.forEach(list => list.addEventListener("change", onChange));
      return () => {
        lists.forEach(list => list.removeEventListener("change", onChange));
      };
    });
    return <VMasonry style={{
      height: "100vh"
    }} lanes={lanes()} gap={8} data={data1000}>
        {i => <div style={aspectRatioItemStyle(i)}>{i}</div>}
      </VMasonry>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const aligns = ["start", "center", "end", "nearest"] as const;
    const [scrollIndex, setScrollIndex] = createSignal(567);
    const [scrollIndexAlign, setScrollToIndexAlign] = createSignal<(typeof aligns)[number]>("start");
    const [smooth, setSmooth] = createSignal(false);
    let handle: VMasonryHandle | undefined;
    return <div style={{
      height: "100vh",
      display: "flex",
      "flex-direction": "column"
    }}>
        <div>
          <input type="number" value={scrollIndex()} onInput={e => setScrollIndex(Number(e.currentTarget.value))} />
          <button onClick={() => {
          handle?.scrollToIndex(scrollIndex(), {
            align: scrollIndexAlign(),
            smooth: smooth()
          });
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex(Math.round(LENGTH * Math.random()));
        }}>
            randomize
          </button>
          <For each={aligns}>
            {align => <label style={{
            "margin-left": "4px"
          }}>
                <input type="radio" checked={scrollIndexAlign() === align} onChange={() => {
              setScrollToIndexAlign(align);
            }} />
                {align}
              </label>}
          </For>
          <label style={{
          "margin-left": "4px"
        }}>
            <input type="checkbox" checked={smooth()} onChange={() => {
            setSmooth(prev => !prev);
          }} />
            smooth
          </label>
        </div>
        <VMasonry ref={handle} style={{
        flex: 1
      }} lanes={4} data={data1000}>
          {i => <div style={itemStyle(i)}>{i}</div>}
        </VMasonry>
      </div>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{G as Default,X as Responsive,Z as ScrollTo,Q as __namedExportsOrder,B as default};