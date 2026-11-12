import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{C as t,D as n,E as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,h as f,i as p,l as m,m as h,p as g,r as _,u as v,v as y,w as b,x,y as S}from"./iframe-DgZ0Nvp2.js";import{S as ee,f as C,h as te,i as w,m as T,p as ne,t as re,v as E}from"./driver-GFn3Hsbo.js";import{i as D,n as O,r as k,t as A}from"./MasonryItem-CwxPGJf5.js";import{n as j,t as M}from"./utils-9lpQGm8d.js";var N,P,F;function I(){return(I=e((()=>{p(),x(),T(),w(),D(),E(),M(),O(),N=u(`<div><div style="contain:size style;flex:none;position:relative;width:100%">`),P=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,F=e=>{let u,{itemSize:p,cache:_,ssrCount:v}=e,[,x]=r(e,[`ref`,`data`,`children`,`lanes`,`gap`,`itemSize`,`bufferSize`,`keepMounted`,`cache`,`ssrCount`,`onScroll`,`onScrollEnd`,`onResize`,`style`]),w=k(e.data.length,e.lanes,e.gap,p,_),T=C(w,v),E=re(T,w,!1),[D,O]=c(T.$getStateVersion()),M=T.$subscribe(t=>{t&1&&O(T.$getStateVersion()),t&4&&e.onScroll?.(T.$getScrollOffset()),t&8&&e.onScrollEnd?.(),t&2&&e.onResize?.()});f(()=>{te(T,w,e.lanes,e.gap)});let F=y(t=>{D();let n=T.$getRange(e.bufferSize);return t&&j(t,n)?t:n}),I=y(()=>D()&&T.$isScrolling()),L=y(()=>D()&&T.$getTotalSize()),R=y(()=>D()&&w.$getLanes()),z=y(()=>D()&&w.$getGap()),B=y(()=>P(1/R(),z()/R()-z())),V=e.ref;V&&(V({get cache(){return w.$snapshot()},get scrollOffset(){return T.$getScrollOffset()},get scrollSize(){return ne(T)},get viewportSize(){return T.$getViewportSize()},getItemOffset:T.$getItemOffset,getItemSize:w.$getItemSize,scrollToIndex:E.$scroll,scrollTo:e=>E.$scroll(void 0,{offset:e}),scrollBy:e=>E.$scroll(void 0,{offset:e+T.$getScrollOffset()})}),b(()=>V())),a(()=>{E.$observe(u),b(()=>{M(),E.$dispose()})}),o(t(D,()=>{E.$effect()}));let H=y(()=>{let t=e.data.length;n(()=>{T.$update(5,t)});let r=[],i=[];if(e.keepMounted){let n=new Set(e.keepMounted);for(let[e,t]=F();e<=t;e++)n.add(e);for(let a of ee([...n]))a<t&&(r.push(e.data[a]),i.push(a))}else for(let[t,n]=F();t<=n;t++)r.push(e.data[t]),i.push(t);return{_items:r,_indexes:i}});return(()=>{var t=N(),r=t.firstChild;m(t,i(x,{get style(){return{display:`block`,"overflow-y":`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}),!1,!0);var a=u;return typeof a==`function`?d(a,r):u=r,s(r,h(g,{get each(){return H()._items},children:(t,r)=>{let i=y(()=>H()._indexes[r()]),a=y(()=>(D(),T.$getItemOffset(i()))),o=y(()=>(D(),w.$getItemLane(i()))),s=y(()=>(D(),w.$isSizeEqual(i()))),c=y(()=>n(()=>e.children(t,i)));return h(A,{get _index(){return i()},get _resizer(){return E.$observeItem},get _offset(){return a()},get _crossOffset(){return P(o()/R(),o()*z()/R())},get _crossSize(){return B()},get _hide(){return s()},get _children(){return c()}})}})),S(e=>{var t=L()+`px`,n=I()?`none`:void 0;return t!==e.e&&l(r,`height`,e.e=t),n!==e.t&&l(r,`pointer-events`,e.t=n),e},{e:void 0,t:void 0}),t})()},F.__docgenInfo={displayName:`VMasonry`,description:`Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.`,props:{ref:{name:`ref`,required:!1,type:{name:`VMasonryHandle | ((handle?: VMasonryHandle | undefined) => void) | undefined`,raw:`VMasonryHandle | ((handle?: VMasonryHandle | undefined) => void) | undefined`},defaultValue:null,description:`Get reference to {@link VMasonryHandle}.`},data:{name:`data`,required:!0,type:{name:`array`,raw:`readonly T[]`},defaultValue:null,description:`The data items rendered by this component.`},children:{name:`children`,required:!0,type:{name:`(data: T, index: Accessor<number>) => Element`,raw:`(data: T, index: Accessor<number>) => Element`},defaultValue:null,description:`The elements renderer function.`},lanes:{name:`lanes`,required:!0,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.`},gap:{name:`gap`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The gap between the items and the lanes in pixels, which is not included in the sizes.`},itemSize:{name:`itemSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},bufferSize:{name:`bufferSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Extra space in pixels to render before/after the viewport. The default value is recommended for most cases. A smaller value gives better performance, and a larger value avoids showing blank items in fast scrolling.`},keepMounted:{name:`keepMounted`,required:!1,type:{name:`array`,raw:`readonly number[]`},defaultValue:null,description:`List of indexes that should be always mounted, even when off screen.`},cache:{name:`cache`,required:!1,type:{name:`{ 0: number[]; 1: number | undefined; __@iterator@157: () => ArrayIterator<number | number[] | undefined>; __@unscopables@159: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`,raw:`{ 0: number[]; 1: number | undefined; __@iterator@157: () => ArrayIterator<number | number[] | undefined>; __@unscopables@159: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`},defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},ssrCount:{name:`ssrCount`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`A prop for SSR. If set, the specified amount of items will be mounted in the initial rendering regardless of the container size until hydrated. The minimum value is 0.

**The items are hidden until they are measured in the browser, so also pass their sizes with \`cache\` to show them on the server.**`},onScroll:{name:`onScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{name:`onScrollEnd`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when scrolling stops.`},onResize:{name:`onResize`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when the size of the viewport or the items changes.`},slot:{name:`slot`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},title:{name:`title`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},accesskey:{name:`accesskey`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},contenteditable:{name:`contenteditable`,required:!1,type:{name:`boolean | "true" | "false" | "plaintext-only" | "inherit" | undefined`,raw:`boolean | "true" | "false" | "plaintext-only" | "inherit" | undefined`},defaultValue:null},dir:{name:`dir`,required:!1,type:{name:`enum`,raw:`"auto" | "ltr" | "rtl"`,value:[{value:`"auto"`},{value:`"ltr"`},{value:`"rtl"`}]},defaultValue:null},draggable:{name:`draggable`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null},hidden:{name:`hidden`,required:!1,type:{name:`boolean | "hidden" | "until-found" | undefined`,raw:`boolean | "hidden" | "until-found" | undefined`},defaultValue:null},inert:{name:`inert`,required:!1,type:{name:`boolean`,raw:`boolean | undefined`},defaultValue:null},inputmode:{name:`inputmode`,required:!1,type:{name:`enum`,raw:`"search" | "text" | "decimal" | "email" | "none" | "numeric" | "tel" | "url"`,value:[{value:`"search"`},{value:`"text"`},{value:`"decimal"`},{value:`"email"`},{value:`"none"`},{value:`"numeric"`},{value:`"tel"`},{value:`"url"`}]},defaultValue:null},lang:{name:`lang`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},popover:{name:`popover`,required:!1,type:{name:`boolean | "auto" | "manual" | undefined`,raw:`boolean | "auto" | "manual" | undefined`},defaultValue:null},spellcheck:{name:`spellcheck`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null},translate:{name:`translate`,required:!1,type:{name:`enum`,raw:`"yes" | "no"`,value:[{value:`"yes"`},{value:`"no"`}]},defaultValue:null},class:{name:`class`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},id:{name:`id`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},tabIndex:{name:`tabIndex`,required:!1,type:{name:`string | number | undefined`,raw:`string | number | undefined`},defaultValue:null},"aria-controls":{name:`aria-controls`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current
element.`},"aria-current":{name:`aria-current`,required:!1,type:{name:`boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined`,raw:`boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined`},defaultValue:null,description:`Indicates the element that represents the current item within a container or set of related
elements.`},"aria-describedby":{name:`aria-describedby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that describes the object.`},"aria-disabled":{name:`aria-disabled`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.`},"aria-expanded":{name:`aria-expanded`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.`},"aria-hidden":{name:`aria-hidden`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.`},"aria-label":{name:`aria-label`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Defines a string value that labels the current element.`},"aria-labelledby":{name:`aria-labelledby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that labels the current element.`},"aria-live":{name:`aria-live`,required:!1,type:{name:`enum`,raw:`"off" | "assertive" | "polite"`,value:[{value:`"off"`},{value:`"assertive"`},{value:`"polite"`}]},defaultValue:null,description:`Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.`},role:{name:`role`,required:!1,type:{name:`enum`,raw:`"article" | "button" | "dialog" | "figure" | "form" | "img" | "link" | "main" | "menu" | "meter" | "option" | "search" | "table" | "menuitem" | "switch" | "math" | "none" | "alert" | "alertdialog" | "application" | "banner" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "directory" | "document" | "feed" | "grid" | "gridcell" | "group" | "heading" | "list" | "listbox" | "listitem" | "log" | "marquee" | "menubar" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "note" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "tab" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"`,value:[{value:`"article"`},{value:`"button"`},{value:`"dialog"`},{value:`"figure"`},{value:`"form"`},{value:`"img"`},{value:`"link"`},{value:`"main"`},{value:`"menu"`},{value:`"meter"`},{value:`"option"`},{value:`"search"`},{value:`"table"`},{value:`"menuitem"`},{value:`"switch"`},{value:`"math"`},{value:`"none"`},{value:`"alert"`},{value:`"alertdialog"`},{value:`"application"`},{value:`"banner"`},{value:`"cell"`},{value:`"checkbox"`},{value:`"columnheader"`},{value:`"combobox"`},{value:`"complementary"`},{value:`"contentinfo"`},{value:`"definition"`},{value:`"directory"`},{value:`"document"`},{value:`"feed"`},{value:`"grid"`},{value:`"gridcell"`},{value:`"group"`},{value:`"heading"`},{value:`"list"`},{value:`"listbox"`},{value:`"listitem"`},{value:`"log"`},{value:`"marquee"`},{value:`"menubar"`},{value:`"menuitemcheckbox"`},{value:`"menuitemradio"`},{value:`"navigation"`},{value:`"note"`},{value:`"presentation"`},{value:`"progressbar"`},{value:`"radio"`},{value:`"radiogroup"`},{value:`"region"`},{value:`"row"`},{value:`"rowgroup"`},{value:`"rowheader"`},{value:`"scrollbar"`},{value:`"searchbox"`},{value:`"separator"`},{value:`"slider"`},{value:`"spinbutton"`},{value:`"status"`},{value:`"tab"`},{value:`"tablist"`},{value:`"tabpanel"`},{value:`"term"`},{value:`"textbox"`},{value:`"timer"`},{value:`"toolbar"`},{value:`"tooltip"`},{value:`"tree"`},{value:`"treegrid"`},{value:`"treeitem"`}]},defaultValue:null},style:{name:`style`,required:!1,type:{name:`CSSProperties`,raw:`CSSProperties`},defaultValue:null}}}})))()}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{p(),x(),I(),L=u(`<div>`),R=u(`<div style=height:100vh;display:flex;flex-direction:column><div><input type=number><button>scroll to index</button><button>randomize</button><label style=margin-left:4px><input type=checkbox>smooth`),z=u(`<label style=margin-left:4px><input type=radio>`),B={component:F},V=[80,180,120,220,160,100,240],H=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],U=Array.from({length:1e3}).map((e,t)=>t),W=e=>{let t=e*2654435761%7;return{height:V[t]+`px`,border:`solid 1px #ccc`,padding:`4px`,background:H[e%H.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}},G={render:()=>h(F,{style:{height:`100vh`},lanes:3,data:U,children:e=>(()=>{var t=L();return s(t,e),S(n=>v(t,W(e),n)),t})()})},K=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],q=e=>({"aspect-ratio":K[e*2654435761%5],border:`solid 1px #ccc`,padding:`4px`,background:H[e%H.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}),J=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],Y=()=>J.find(([e])=>window.matchMedia(e).matches)?.[1]??2,X={render:()=>{let[e,t]=c(Y()),n=()=>{t(Y())},r=J.map(([e])=>window.matchMedia(e));return r.forEach(e=>e.addEventListener(`change`,n)),b(()=>{r.forEach(e=>e.removeEventListener(`change`,n))}),h(F,{style:{height:`100vh`},get lanes(){return e()},gap:8,data:U,children:e=>(()=>{var t=L();return s(t,e),S(n=>v(t,q(e),n)),t})()})}},Z={render:()=>{let e=[`start`,`center`,`end`,`nearest`],[t,n]=c(567),[r,i]=c(`start`),[a,o]=c(!1),l;return(()=>{var c=R(),u=c.firstChild,d=u.firstChild,f=d.nextSibling,p=f.nextSibling,m=p.nextSibling,_=m.firstChild;return d.$$input=e=>n(Number(e.currentTarget.value)),f.$$click=()=>{l?.scrollToIndex(t(),{align:r(),smooth:a()})},p.$$click=()=>{n(Math.round(1e3*Math.random()))},s(u,h(g,{each:e,children:e=>(()=>{var t=z(),n=t.firstChild;return n.addEventListener(`change`,()=>{i(e)}),s(t,e,null),S(()=>n.checked=r()===e),t})()}),m),_.addEventListener(`change`,()=>{o(e=>!e)}),s(c,h(F,{ref(e){var t=l;typeof t==`function`?t(e):l=e},style:{flex:1},lanes:4,data:U,children:e=>(()=>{var t=L();return s(t,e),S(n=>v(t,W(e),n)),t})()}),null),S(()=>d.value=t()),S(()=>_.checked=a()),c})()}},_([`input`,`click`]),Q=[`Default`,`Responsive`,`ScrollTo`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{code:`const Default = () => {
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
  const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  onCleanup(() => {
    lists.forEach((list) => list.removeEventListener("change", onChange));
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
    const lists = BREAKPOINTS.map(([query]) => window.matchMedia(query));
    lists.forEach(list => list.addEventListener("change", onChange));
    onCleanup(() => {
      lists.forEach(list => list.removeEventListener("change", onChange));
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