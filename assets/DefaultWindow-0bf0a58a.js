import{r as O}from"./index-5284b0bf.js";import{r as ue}from"./index-480187bb.js";import{j as Q}from"./jsx-runtime-f8a6c6ea.js";const k=Math.min,v=Math.max,le=Math.abs,Z=Date.now,se=setTimeout,D=e=>e!=null,$=(e,t)=>Array.from({length:e},(s,r)=>t(r)),ce=e=>{const t=[...e].sort((r,o)=>r-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},fe=(e,t)=>{let s;const r=()=>{D(s)&&clearTimeout(s)},o=()=>{r(),s=se(()=>{s=null,e()},t)};return o._cancel=r,o},ae=(e,t)=>{let s=Z()-t;return(...r)=>{const o=Z();s+t<o&&(s=o,e(...r))}},P=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},y=-1,N=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},de=(e,t,s)=>{const r=e._sizes[t]===y;return e._sizes[t]=s,e._measuredOffsetIndex=k(t,e._measuredOffsetIndex),r},re=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+N(e,t):e._offsets[t];let r=e._measuredOffsetIndex,o=e._offsets[r];for(;r<=t&&(e._offsets[r]=o,!(r===t&&!s));)o+=N(e,r),r++;return e._measuredOffsetIndex=t,o},me=e=>re(e,e._length-1,!0),X=(e,t)=>re(e,t),ne=(e,t,s)=>{let r=0;if(s>=0)for(;t<e._length-1;){const o=N(e,t++);if((r+=o)>=s){r-o/2>=s&&t--;break}}else for(;t>0;){const o=N(e,--t);if((r-=o)<=s){r+o/2<s&&t++;break}}return k(v(t,0),e._length-1)},Y=(e,t,s,r)=>ne(e,s,t-r),_e=(e,t,s)=>{for(let r=t;r<=s;r++)if(e._sizes[r]===y)return!0;return!1},pe=e=>{const t=e._sizes.filter(r=>r!==y),s=t[0];e._defaultItemSize=t.every(r=>r===s)?s:ce(t)},B=(e,t,s)=>({_defaultItemSize:s?s._defaultItemSize:t,_length:e,_measuredOffsetIndex:s?k(s._measuredOffsetIndex,e-1):0,_sizes:$(e,r=>{const o=s&&s._sizes[r];return D(o)?o:y}),_offsets:$(e,r=>{if(r===0)return 0;const o=s&&s._offsets[r];return D(o)?o:y})}),K=e=>e.reduce((t,[s])=>t+s,0),H=(e,t)=>t.map(([s,r])=>[r-N(e,s),s]),T=0,ee=1,j=2,q=3,M=1,J=2,V=3,oe=4,F=5,be=(e,t,s=0,r,o,I)=>{const c=!t,_=t||40;let a=_*v(s-1,0),n=0,p=0,d,i=B(e,_),f=T,l=!1,g=[0,s],S;const b=new Set,z=()=>me(i),W=()=>{const u=l;return l=!1,u},C=u=>{const m=f;if(f=u,f===T)return!1;if(m===T&&(f===ee||f===j))return!0};return{_getRange(){const[u,m]=g,h=X(i,u),w=Y(i,n,u,h),E=ne(i,w,a);return u===w&&m===E?g:g=[w,E]},_isUnmeasuredItem(u){return i._sizes[u]===y},_hasUnmeasuredItemsInRange(u){return _e(i,v(0,u-2),k(i._length-1,u+2))},_getItemOffset(u){const m=X(i,u);return r?m+v(0,a-z()):m},_getItemSize(u){return N(i,u)},_getScrollOffset(){return n},_getViewportSize(){return a},_getScrollSize(){return z()},_getScrollableDomSize(){return v(z(),a)},_getJumpCount(){return p},_flushJump(){const u=d;return d=void 0,u},_getItemIndexForScrollTo(u){return Y(i,u,0,0)},_waitForScrollDestinationItemsMeasured(){return S&&S[1](),new Promise((u,m)=>{let h=!1;const w=()=>{h||(h=!0,u(),S=void 0)};S=[w,m],se(w,250)})},_subscribe(u){return b.add(u),()=>{b.delete(u)}},_update(u,m){let h,w,E=!1;switch(u){case M:{const R=m.filter(([L,x])=>i._sizes[L]!==x);if(!R.length)break;let A=0;if(f===j)A=K(H(i,R));else if(f===q){const L=H(i,R),[x]=g;n===0||(z()<=n+a?A=K(L):A=K(L.filter(([,ie])=>ie<x)))}A&&(d=A,p++);let G=!1;R.forEach(([L,x])=>{de(i,L,x)&&(G=!0)}),c&&G&&!n&&pe(i),l=h=E=!0;break}case J:{E=a!==m,a=m;break}case V:case oe:{if(n===m)break;if(u===V){const R=W();(f===T||!R)&&f!==q&&(w=C(n>m?j:ee)),h=le(n-m)>a}n=m,E=!0;break}case F:{w=C(m);break}}E&&(b.forEach(R=>{R(h)}),u===V&&I(n)),S&&u===M&&S[0](),D(w)&&o(w)},_getScrollDirection(){return f},_updateCacheLength(u){i._length!==u&&(i=B(u,_,i))}}},Se=typeof window<"u"?O.useLayoutEffect:O.useEffect,U="current",ve=e=>!D(e)||typeof e=="boolean",ge=e=>{const t=O.useRef(e);return Se(()=>{t[U]=e},[e]),t},Re=(e,t,s)=>{const[r,o]=O.useState(t),I=ge(t);if(O.useLayoutEffect(()=>{const c=()=>{o(()=>I[U]())};return e._subscribe(_=>{_?ue.flushSync(c):c()})},[]),s){const c=t();r!==c&&o(c)}return r},Ie=P(e=>{const t="scrollLeft",s=e[t];e[t]=1;const r=e[t]<1;return e[t]=s,r}),Oe=(e,t,s)=>{let r;const o=t?"scrollLeft":"scrollTop",I=()=>r?t?r.scrollWidth:r.scrollHeight:0,c=(n,p)=>Ie(r)||p?-n:e._getScrollSize()-e._getViewportSize()-n,_=(n,p)=>{r&&(t&&s&&(n=c(n,p)),p?r[o]+=n:(r[o]=n,e._update(F,q)))},a=async(n,p)=>{const d=()=>{let i=p();const f=I(),l=e._getViewportSize();return f-(i+l)<=0&&(i=f-l),i};for(;e._update(oe,d()),!!e._hasUnmeasuredItemsInRange(n);)try{await e._waitForScrollDestinationItemsMeasured()}catch{return}_(d())};return{_initRoot(n){r=n;const p=()=>{let l=n[o];t&&s&&(l=c(l)),e._update(V,l)},d=fe(()=>{p(),e._update(F,T)},150),i=()=>{p(),d()},f=ae(l=>{if(e._getScrollDirection()!==T&&!l.ctrlKey&&(t?l.deltaX:l.deltaY)){const g=e._getScrollOffset();g>0&&g<e._getScrollSize()-e._getViewportSize()&&d()}},50);return n.addEventListener("scroll",i),n.addEventListener("wheel",f,{passive:!0}),()=>{n.removeEventListener("scroll",i),n.removeEventListener("wheel",f),d._cancel()}},_getActualScrollSize:I,_scrollTo(n){n=v(n,0),a(e._getItemIndexForScrollTo(n),()=>n)},_scrollToIndex(n,p){n=v(k(n,p-1),0),a(n,()=>e._getItemOffset(n))},_fixScrollJump:n=>{_(n,!0)}}},Ee=e=>{const t=O.useRef();return t[U]||(t[U]=e())},ye=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,I=P(()=>new ResizeObserver(c=>{const _=[];for(const{target:a,contentRect:n}of c)if(a===s)e._update(J,n[r]);else{const p=o.get(a);D(p)&&_.push([p,n[r]])}_.length&&e._update(M,_)}));return{_observeRoot(c){s=c;const _=I();return _.observe(c),()=>{_.disconnect()}},_observeItem(c,_){const a=I();return o.set(c,_),a.observe(c),()=>{o.delete(c),a.unobserve(c)}}}},Ce=(e,t)=>{let s;const r="height",o="width",I=new WeakMap,c=new Set,_=new Set,a=new Map,n=(d,i)=>`${d}-${i}`,p=P(()=>new ResizeObserver(d=>{const i=new Set,f=new Set;for(const{target:l,contentRect:g}of d)if(l===s)e._update(J,g[r]),t._update(J,g[o]);else{const S=I.get(l);if(S){const[b,z]=S,W=n(b,z),C=a.get(W),u=[g[r],g[o]];let m,h;C?(C[0]!==u[0]&&(m=!0),C[1]!==u[1]&&(h=!0)):m=h=!0,m&&i.add(b),h&&f.add(z),(m||h)&&a.set(W,u)}}if(i.size){const l=[];i.forEach(g=>{let S=0;_.forEach(b=>{const z=a.get(n(g,b));z&&(S=v(S,z[0]))}),S&&l.push([g,S])}),e._update(M,l)}if(f.size){const l=[];f.forEach(g=>{let S=0;c.forEach(b=>{const z=a.get(n(b,g));z&&(S=v(S,z[1]))}),S&&l.push([g,S])}),t._update(M,l)}}));return{_observeRoot(d){s=d;const i=p();return i.observe(d),()=>{i.disconnect()}},_observeItem(d,i,f){const l=p();return I.set(d,[i,f]),c.add(i),_.add(f),l.observe(d),()=>{I.delete(d),l.unobserve(d)}}}},te=O.forwardRef(({children:e,attrs:t,width:s,height:r,scrolling:o},I)=>Q("div",{ref:I,...t,children:Q("div",{style:O.useMemo(()=>({position:"relative",visibility:"hidden",width:s??"100%",height:r??"100%",pointerEvents:o?"none":"auto"}),[s,r,o]),children:e})}));try{te.displayName="DefaultWindow",te.__docgenInfo={description:"",displayName:"DefaultWindow",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{te as D,Se as a,ge as b,Ee as c,be as d,D as e,ye as f,Oe as g,k as h,ve as i,Ce as j,v as m,U as r,Re as u};
//# sourceMappingURL=DefaultWindow-0bf0a58a.js.map
