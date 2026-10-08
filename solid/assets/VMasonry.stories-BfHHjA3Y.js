import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,D as n,E as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,h as f,i as p,l as m,m as h,p as g,r as _,u as v,v as y,w as b,x,y as S}from"./iframe-B8Dnq2wK.js";import{E as C,O as w,S as ee,T,_ as E,a as te,b as ne,c as re,d as D,g as O,i as ie,k as ae,o as oe,s as se,v as k,x as A,y as ce}from"./scroll-to-CveNTS9e.js";import{n as le,t as j}from"./utils-43NjkRvE.js";var M;function N(){return(N=e((()=>{k(),T(),M=(e,t,n=0,r,i)=>{let a=C(t,1),o=i&&i[1]||r||40,s=-1,c=r?void 0:new Set,l=!r,u=i&&i[0],d=u?O(u.slice(0,w(e,u.length)),C(0,e-u.length)):O([],e),f=[],p=[],m=[],h=e=>{let t=d[e];return t===-1?o:t},g=t=>{if(t=w(t,e-1),s>=t)return;let r=[],i=[];for(let e=0;e<a;e++)r.push(0),i.push(-1);for(let e=s,t=a;e>=0&&t;e--){let n=p[e];i[n]===-1&&(i[n]=e,r[n]=f[e]+h(e),t--)}for(;s<t;){let e=++s,t=0,o=1/0,c=1/0;for(let e=0;e<a;e++){let a=r[e]+(i[e]>=0?n:0);(a<o||a===o&&i[e]<c)&&(t=e,o=a,c=i[e])}f[e]=o,p[e]=t,r[t]=o+h(e),i[t]=e,m[e]=C(e?m[e-1]:0,r[t])}},_=t=>t>=e?y():(g(t),f[t]),v=e=>(g(e),m[e]),y=()=>e?v(e-1):0,b=t=>{if(!e)return 0;let n=E(v,e,t);return v(n)<=t?n+1:n};return{$getRange:(t,n)=>{let r=E(_,e,n);return[w(b(t),r),r]},$findIndex:b,$getItemOffset:_,$getItemSize:h,$isSizeEqual:(e,t=-1)=>d[e]===t,$setItemSizes:(e,t)=>{for(let[t,n]of e)d[t]=n,c&&c.add(t),s=w(t-1,s);if(c&&t){let e=[],r=0;if(c.forEach(t=>{let i=d[t];i>0&&(e.push(i),r+=i+n)}),r>t*a){ae(e);let t=e.length,n=t/2|0;o=t%2==0?(e[n-1]+e[n])/2:e[n],s=-1,c=void 0,l=!1}}},$getTotalSize:y,$getLength:()=>e,$setLength:t=>{let n=t-e;s=w(t-1,s),e=t,n>0?O(d,n):d.splice(n)},$relayout:(e,t=0)=>(e=C(e,1),e===a&&t===n?!1:(a=e,n=t,s=-1,c=r?void 0:new Set,!0)),$isEstimating:()=>l,$snapshot:()=>[d.slice(),o],$getLanes:()=>a,$getGap:()=>n,$getItemLane:e=>(g(e),p[e])}}})))()}var P,F,I,L,R;function z(){return(z=e((()=>{p(),x(),A(),D(),N(),ie(),T(),j(),P=u(`<div>`),F=u(`<div><div style="contain:size style;overflow-anchor:none;flex:none;position:relative;width:100%">`),I=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,L=e=>{let t;o(()=>{t&&b(e._resizer(t,e._index))});let n=y(()=>({contain:`layout style`,position:`absolute`,top:e._offset+`px`,"inset-inline-start":e._crossOffset,width:e._crossSize,visibility:e._hide?`hidden`:void 0}));return(()=>{var r=P(),i=t;return typeof i==`function`?d(i,r):t=r,s(r,()=>e._children),S(e=>v(r,n(),e)),r})()},R=e=>{let u,{itemSize:p,cache:_}=e,[,v]=r(e,[`ref`,`data`,`children`,`lanes`,`gap`,`itemSize`,`bufferSize`,`keepMounted`,`cache`,`onScroll`,`onScrollEnd`,`onResize`,`style`]),x=M(e.data.length,e.lanes,e.gap,p,_),C=ce(x),w=re(C,x,!1),[T,E]=c(C.$getStateVersion());C.$subscribe(1,()=>{E(C.$getStateVersion())}),C.$subscribe(4,()=>{e.onScroll?.(C.$getScrollOffset())}),C.$subscribe(8,()=>{e.onScrollEnd?.()}),C.$subscribe(2,()=>{e.onResize?.()}),f(()=>{ee(C,x,e.lanes,e.gap)});let D=y(t=>{T();let n=C.$getRange(e.bufferSize);return t&&le(t,n)?t:n}),O=y(()=>T()&&C.$isScrolling()),ie=y(()=>T()&&C.$getTotalSize()),k=y(()=>T()&&x.$getLanes()),A=y(()=>T()&&x.$getGap()),j=y(()=>I(1/k(),A()/k()-A())),N=e.ref;N&&(N({get cache(){return x.$snapshot()},get scrollOffset(){return C.$getScrollOffset()},get scrollSize(){return ne(C)},get viewportSize(){return C.$getViewportSize()},getItemOffset:C.$getItemOffset,getItemSize:x.$getItemSize,scrollToIndex:(e,t)=>se(w,C,x,e,t),scrollTo:e=>oe(w,e),scrollBy:e=>te(w,C,e)}),b(()=>N())),a(()=>{w.$observe(u),b(()=>{C.$dispose(),w.$dispose()})}),o(t(T,()=>{w.$effect()}));let P=y(()=>{let t=e.data.length;n(()=>{C.$update(5,t)});let r=[],i=[];if(e.keepMounted){let n=new Set(e.keepMounted);for(let[e,t]=D();e<=t;e++)n.add(e);ae([...n]).forEach(n=>{n<t&&(r.push(e.data[n]),i.push(n))})}else for(let[t,n]=D();t<=n;t++)r.push(e.data[t]),i.push(t);return{_items:r,_indexes:i}}),R=(t,r)=>{let i=y(()=>(T(),C.$getItemOffset(r()))),a=y(()=>(T(),x.$getItemLane(r()))),o=y(()=>(T(),x.$isSizeEqual(r()))),s=y(()=>n(()=>e.children(t,r)));return h(L,{get _index(){return r()},get _resizer(){return w.$observeItem},get _offset(){return i()},get _crossOffset(){return I(a()/k(),a()*A()/k())},get _crossSize(){return j()},get _hide(){return o()},get _children(){return s()}})};return(()=>{var t=F(),n=t.firstChild;m(t,i(v,{get style(){return{display:`block`,"overflow-y":`auto`,contain:`strict`,width:`100%`,height:`100%`,...e.style}}}),!1,!0);var r=u;return typeof r==`function`?d(r,n):u=n,s(n,h(g,{get each(){return P()._items},children:(e,t)=>{let n=y(()=>P()._indexes[t()]);return R(e,n)}})),S(e=>{var t=ie()+`px`,r=O()?`none`:void 0;return t!==e.e&&l(n,`height`,e.e=t),r!==e.t&&l(n,`pointer-events`,e.t=r),e},{e:void 0,t:void 0}),t})()},R.__docgenInfo={displayName:`VMasonry`,description:`Virtualized masonry component. See {@link VMasonryProps} and {@link VMasonryHandle}.`,props:{ref:{name:`ref`,required:!1,type:{name:`VMasonryHandle | ((handle?: VMasonryHandle | undefined) => void) | undefined`,raw:`VMasonryHandle | ((handle?: VMasonryHandle | undefined) => void) | undefined`},defaultValue:null,description:`Get reference to {@link VMasonryHandle}.`},data:{name:`data`,required:!0,type:{name:`array`,raw:`readonly T[]`},defaultValue:null,description:`The data items rendered by this component.`},children:{name:`children`,required:!0,type:{name:`(data: T, index: Accessor<number>) => Element`,raw:`(data: T, index: Accessor<number>) => Element`},defaultValue:null,description:`The elements renderer function.`},lanes:{name:`lanes`,required:!0,type:{name:`number`,raw:`number`},defaultValue:null,description:`The number of lanes (columns) which items are laid out into. Each item is placed into the shortest lane in order. It must be an integer and the minimum value is 1.`},gap:{name:`gap`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`The gap between the items and the lanes in pixels, which is not included in the sizes.`},itemSize:{name:`itemSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Item size hint for unmeasured items in pixels. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`},bufferSize:{name:`bufferSize`,required:!1,type:{name:`number`,raw:`number`},defaultValue:null,description:`Extra item space in pixels to render before/after the viewport. The minimum value is 0. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.`},keepMounted:{name:`keepMounted`,required:!1,type:{name:`array`,raw:`readonly number[]`},defaultValue:null,description:`List of indexes that should be always mounted, even when off screen.`},cache:{name:`cache`,required:!1,type:{name:`{ 0: number[]; 1: number | undefined; __@iterator@674: () => ArrayIterator<number | number[] | undefined>; __@unscopables@676: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`,raw:`{ 0: number[]; 1: number | undefined; __@iterator@674: () => ArrayIterator<number | number[] | undefined>; __@unscopables@676: { [x: number]: boolean | undefined; length?: boolean | undefined; toString?: boolean | undefined; toLocaleString?: boolean | undefined; pop?: boolean | undefined; push?: boolean | undefined; ... 35 more ...; readonly [Symbol.unscopables]?: boolean | undefined; }; at: (index: number) => number | number[] | undefined; concat: { (...items: ConcatArray<number | number[] | undefined>[]): (number | number[] | undefined)[]; (...items: (number | number[] | ConcatArray<number | number[] | undefined> | undefined)[]): (number | ... 1 more ... | undefined)[]; }; copyWithin: (target: number, start: number, end?: number | undefined) => CacheSnapshot; entries: () => ArrayIterator<[number, number | number[] | undefined]>; every: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): this is S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unkno...; fill: (value: number | number[] | undefined, start?: number | undefined, end?: number | undefined) => CacheSnapshot; filter: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S[]; (predicate: (value: number | number[] | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) => unknown, this...; find: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, obj: (number | ... 1 more ... | undefined)[]) => u...; findIndex: (predicate: (value: number | number[] | undefined, index: number, obj: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; findLast: { <S extends number | number[] | undefined>(predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => value is S, thisArg?: any): S | undefined; (predicate: (value: number | ... 1 more ... | undefined, index: number, array: (number | ... 1 more ... | undefined)[]) ...; findLastIndex: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => number; flat: <A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]; flatMap: <U, This = undefined>(callback: (this: This, value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U | readonly U[], thisArg?: This | undefined) => U[]; forEach: (callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => void, thisArg?: any) => void; includes: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => boolean; indexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; join: (separator?: string | undefined) => string; keys: () => ArrayIterator<number>; lastIndexOf: (searchElement: number | number[] | undefined, fromIndex?: number | undefined) => number; length: 1 | 2; map: <U>(callbackfn: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => U, thisArg?: any) => U[]; pop: () => number | number[] | undefined; push: (...items: (number | number[] | undefined)[]) => number; reduce: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reduceRight: { (callbackfn: (previousValue: number | number[] | undefined, currentValue: number | number[] | undefined, currentIndex: number, array: (number | number[] | undefined)[]) => number | number[] | undefined): number | ... 1 more ... | undefined; (callbackfn: (previousValue: number | ... 1 more ... | undefined, currentV...; reverse: () => (number | number[] | undefined)[]; shift: () => number | number[] | undefined; slice: (start?: number | undefined, end?: number | undefined) => (number | number[] | undefined)[]; some: (predicate: (value: number | number[] | undefined, index: number, array: (number | number[] | undefined)[]) => unknown, thisArg?: any) => boolean; sort: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => CacheSnapshot; splice: { (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; }; toLocaleString: { (): string; (locales: string | string[], options?: (NumberFormatOptions & DateTimeFormatOptions) | undefined): string; }; toReversed: () => (number | number[] | undefined)[]; toSorted: (compareFn?: ((a: number | number[] | undefined, b: number | number[] | undefined) => number) | undefined) => (number | number[] | undefined)[]; toSpliced: { (start: number, deleteCount: number, ...items: (number | number[] | undefined)[]): (number | number[] | undefined)[]; (start: number, deleteCount?: number | undefined): (number | number[] | undefined)[]; }; toString: () => string; unshift: (...items: (number | number[] | undefined)[]) => number; values: () => ArrayIterator<number | number[] | undefined>; with: (index: number, value: number | number[] | undefined) => (number | number[] | undefined)[]; }`},defaultValue:null,description:`You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link VMasonryHandle.cache}.

**The length of items should be the same as when you take the snapshot, otherwise restoration may not work as expected.**`},onScroll:{name:`onScroll`,required:!1,type:{name:`(offset: number) => void`,raw:`(offset: number) => void`},defaultValue:null,description:`Callback invoked whenever scroll offset changes.`},onScrollEnd:{name:`onScrollEnd`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when scrolling stops.`},onResize:{name:`onResize`,required:!1,type:{name:`() => void`,raw:`() => void`},defaultValue:null,description:`Callback invoked when the size of the viewport or the items changes.`},accesskey:{name:`accesskey`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},contenteditable:{name:`contenteditable`,required:!1,type:{name:`boolean | "true" | "false" | "plaintext-only" | "inherit" | undefined`,raw:`boolean | "true" | "false" | "plaintext-only" | "inherit" | undefined`},defaultValue:null},dir:{name:`dir`,required:!1,type:{name:`enum`,raw:`"ltr" | "rtl" | "auto"`,value:[{value:`"ltr"`},{value:`"rtl"`},{value:`"auto"`}]},defaultValue:null},draggable:{name:`draggable`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null},hidden:{name:`hidden`,required:!1,type:{name:`boolean | "hidden" | "until-found" | undefined`,raw:`boolean | "hidden" | "until-found" | undefined`},defaultValue:null},inert:{name:`inert`,required:!1,type:{name:`boolean`,raw:`boolean | undefined`},defaultValue:null},inputmode:{name:`inputmode`,required:!1,type:{name:`enum`,raw:`"decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url"`,value:[{value:`"decimal"`},{value:`"email"`},{value:`"none"`},{value:`"numeric"`},{value:`"search"`},{value:`"tel"`},{value:`"text"`},{value:`"url"`}]},defaultValue:null},lang:{name:`lang`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},popover:{name:`popover`,required:!1,type:{name:`boolean | "auto" | "manual" | undefined`,raw:`boolean | "auto" | "manual" | undefined`},defaultValue:null},spellcheck:{name:`spellcheck`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null},title:{name:`title`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},translate:{name:`translate`,required:!1,type:{name:`enum`,raw:`"yes" | "no"`,value:[{value:`"yes"`},{value:`"no"`}]},defaultValue:null},class:{name:`class`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},id:{name:`id`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},slot:{name:`slot`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null},tabIndex:{name:`tabIndex`,required:!1,type:{name:`string | number | undefined`,raw:`string | number | undefined`},defaultValue:null},"aria-controls":{name:`aria-controls`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current
element.`},"aria-current":{name:`aria-current`,required:!1,type:{name:`boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined`,raw:`boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined`},defaultValue:null,description:`Indicates the element that represents the current item within a container or set of related
elements.`},"aria-describedby":{name:`aria-describedby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that describes the object.`},"aria-disabled":{name:`aria-disabled`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise
operable.`},"aria-expanded":{name:`aria-expanded`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates whether the element, or another grouping element it controls, is currently expanded
or collapsed.`},"aria-hidden":{name:`aria-hidden`,required:!1,type:{name:`boolean | "true" | "false" | undefined`,raw:`boolean | "true" | "false" | undefined`},defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.`},"aria-label":{name:`aria-label`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Defines a string value that labels the current element.`},"aria-labelledby":{name:`aria-labelledby`,required:!1,type:{name:`string`,raw:`string`},defaultValue:null,description:`Identifies the element (or elements) that labels the current element.`},"aria-live":{name:`aria-live`,required:!1,type:{name:`enum`,raw:`"off" | "assertive" | "polite"`,value:[{value:`"off"`},{value:`"assertive"`},{value:`"polite"`}]},defaultValue:null,description:`Indicates that an element will be updated, and describes the types of updates the user
agents, assistive technologies, and user can expect from the live region.`},role:{name:`role`,required:!1,type:{name:`enum`,raw:`"none" | "search" | "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "meter" | "navigation" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem"`,value:[{value:`"none"`},{value:`"search"`},{value:`"alert"`},{value:`"alertdialog"`},{value:`"application"`},{value:`"article"`},{value:`"banner"`},{value:`"button"`},{value:`"cell"`},{value:`"checkbox"`},{value:`"columnheader"`},{value:`"combobox"`},{value:`"complementary"`},{value:`"contentinfo"`},{value:`"definition"`},{value:`"dialog"`},{value:`"directory"`},{value:`"document"`},{value:`"feed"`},{value:`"figure"`},{value:`"form"`},{value:`"grid"`},{value:`"gridcell"`},{value:`"group"`},{value:`"heading"`},{value:`"img"`},{value:`"link"`},{value:`"list"`},{value:`"listbox"`},{value:`"listitem"`},{value:`"log"`},{value:`"main"`},{value:`"marquee"`},{value:`"math"`},{value:`"menu"`},{value:`"menubar"`},{value:`"menuitem"`},{value:`"menuitemcheckbox"`},{value:`"menuitemradio"`},{value:`"meter"`},{value:`"navigation"`},{value:`"note"`},{value:`"option"`},{value:`"presentation"`},{value:`"progressbar"`},{value:`"radio"`},{value:`"radiogroup"`},{value:`"region"`},{value:`"row"`},{value:`"rowgroup"`},{value:`"rowheader"`},{value:`"scrollbar"`},{value:`"searchbox"`},{value:`"separator"`},{value:`"slider"`},{value:`"spinbutton"`},{value:`"status"`},{value:`"switch"`},{value:`"tab"`},{value:`"table"`},{value:`"tablist"`},{value:`"tabpanel"`},{value:`"term"`},{value:`"textbox"`},{value:`"timer"`},{value:`"toolbar"`},{value:`"tooltip"`},{value:`"tree"`},{value:`"treegrid"`},{value:`"treeitem"`}]},defaultValue:null},style:{name:`style`,required:!1,type:{name:`CSSProperties`,raw:`CSSProperties`},defaultValue:null}}}})))()}var B,V,H,U,W,G,K,q,J,Y,ue,X,Z,Q,$,de;function fe(){return(fe=e((()=>{p(),x(),z(),B=u(`<div>`),V=u(`<div style=height:100vh;display:flex;flex-direction:column><div><input type=number><button>scroll to index</button><button>randomize</button><label style=margin-left:4px><input type=checkbox>smooth`),H=u(`<label style=margin-left:4px><input type=radio>`),U={component:R},W=[80,180,120,220,160,100,240],G=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],K=Array.from({length:1e3}).map((e,t)=>t),q=e=>{let t=e*2654435761%7;return{height:W[t]+`px`,border:`solid 1px #ccc`,padding:`4px`,background:G[e%G.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}},J={render:()=>h(R,{style:{height:`100vh`},lanes:3,data:K,children:e=>(()=>{var t=B();return s(t,e),S(n=>v(t,q(e),n)),t})()})},Y=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],ue=e=>({"aspect-ratio":Y[e*2654435761%5],border:`solid 1px #ccc`,padding:`4px`,background:G[e%G.length],color:`white`,"text-shadow":`0 0 2px rgba(0, 0, 0, 0.6)`}),X=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],Z=()=>X.find(([e])=>window.matchMedia(e).matches)?.[1]??2,Q={render:()=>{let[e,t]=c(Z()),n=()=>{t(Z())},r=X.map(([e])=>window.matchMedia(e));return r.forEach(e=>e.addEventListener(`change`,n)),b(()=>{r.forEach(e=>e.removeEventListener(`change`,n))}),h(R,{style:{height:`100vh`},get lanes(){return e()},gap:8,data:K,children:e=>(()=>{var t=B();return s(t,e),S(n=>v(t,ue(e),n)),t})()})}},$={render:()=>{let e=[`start`,`center`,`end`,`nearest`],[t,n]=c(567),[r,i]=c(`start`),[a,o]=c(!1),l;return(()=>{var c=V(),u=c.firstChild,d=u.firstChild,f=d.nextSibling,p=f.nextSibling,m=p.nextSibling,_=m.firstChild;return d.$$input=e=>n(Number(e.currentTarget.value)),f.$$click=()=>{l?.scrollToIndex(t(),{align:r(),smooth:a()})},p.$$click=()=>{n(Math.round(1e3*Math.random()))},s(u,h(g,{each:e,children:e=>(()=>{var t=H(),n=t.firstChild;return n.addEventListener(`change`,()=>{i(e)}),s(t,e,null),S(()=>n.checked=r()===e),t})()}),m),_.addEventListener(`change`,()=>{o(e=>!e)}),s(c,h(R,{ref(e){var t=l;typeof t==`function`?t(e):l=e},style:{flex:1},lanes:4,data:K,children:e=>(()=>{var t=B();return s(t,e),S(n=>v(t,q(e),n)),t})()}),null),S(()=>d.value=t()),S(()=>_.checked=a()),c})()}},_([`input`,`click`]),de=[`Default`,`Responsive`,`ScrollTo`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{code:`const Default = () => {
  return (
    <VMasonry style={{ height: "100vh" }} lanes={3} data={data1000}>
      {(i) => <div style={itemStyle(i)}>{i}</div>}
    </VMasonry>
  );
};
`,...J.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{code:`const Responsive = () => {
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
`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{code:`const ScrollTo = () => {
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
`,...$.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <VMasonry style={{
      height: "100vh"
    }} lanes={3} data={data1000}>
        {i => <div style={itemStyle(i)}>{i}</div>}
      </VMasonry>;
  }
}`,...J.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}fe();export{J as Default,Q as Responsive,$ as ScrollTo,de as __namedExportsOrder,U as default};