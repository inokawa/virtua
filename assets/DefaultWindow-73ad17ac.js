import{r as R}from"./index-5284b0bf.js";import{r as le}from"./index-480187bb.js";import{a as X}from"./jsx-runtime-e162df28.js";const V=Math.min,b=Math.max,fe=Math.abs,Y=Date.now,ne=setTimeout,L=e=>e!=null,Z=(e,t)=>Array.from({length:e},(n,s)=>t(s)),ae=e=>{const t=[...e].sort((s,r)=>s-r),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},se=(e,t)=>{let n;const s=()=>{L(n)&&clearTimeout(n)},r=()=>{s(),n=ne(()=>{n=null,e()},t)};return r._cancel=s,r},de=(e,t)=>{let n=Y()-t;return(...s)=>{const r=Y();n+t<r&&(n=r,e(...s))}},q=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},y=-1,x=(e,t)=>{const n=e._sizes[t];return n===y?e._defaultItemSize:n},_e=(e,t,n)=>{const s=e._sizes[t]===y;return e._sizes[t]=n,e._measuredOffsetIndex=V(t,e._measuredOffsetIndex),s},re=(e,t,n)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return n?e._offsets[t]+x(e,t):e._offsets[t];let s=e._measuredOffsetIndex,r=e._offsets[s];for(;s<=t&&(e._offsets[s]=r,!(s===t&&!n));)r+=x(e,s),s++;return e._measuredOffsetIndex=t,r},me=e=>re(e,e._length-1,!0),$=(e,t)=>re(e,t),oe=(e,t,n)=>{let s=0;if(n>=0)for(;t<e._length-1;){const r=x(e,t++);if((s+=r)>=n){s-r/2>=n&&t--;break}}else for(;t>0;){const r=x(e,--t);if((s-=r)<=n){s+r/2<n&&t++;break}}return V(b(t,0),e._length-1)},B=(e,t,n,s)=>oe(e,n,t-s),pe=(e,t,n)=>{for(let s=t;s<=n;s++)if(e._sizes[s]===y)return!0;return!1},we=e=>{const t=e._sizes.filter(s=>s!==y),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:ae(t)},G=(e,t,n)=>({_defaultItemSize:n?n._defaultItemSize:t,_length:e,_measuredOffsetIndex:n?V(n._measuredOffsetIndex,e-1):0,_sizes:Z(e,s=>{const r=n&&n._sizes[s];return L(r)?r:y}),_offsets:Z(e,s=>{if(s===0)return 0;const r=n&&n._offsets[s];return L(r)?r:y})}),F=e=>e.reduce((t,[n])=>t+n,0),H=(e,t)=>t.map(([n,s])=>[s-x(e,n),n]),W=0,ee=1,P=2,j=3,D=1,M=2,A=3,ie=4,J=5,be=(e,t,n=0,s,r,p)=>{const c=!t,l=t||40;let o=l*b(n-1,0),f=0,m=0,a,i=G(e,l),d=W,g=!1,h=[0,n],w;const v=new Set,S=()=>me(i),K=()=>{const u=g;return g=!1,u},C=u=>{const _=d;if(d=u,d===W)return!1;if(_===W&&(d===ee||d===P))return!0};return{_getRange(){const[u,_]=h,I=$(i,u),z=B(i,f,u,I),E=oe(i,z,o);return u===z&&_===E?h:h=[z,E]},_isUnmeasuredItem(u){return i._sizes[u]===y},_hasUnmeasuredItemsInRange(u){return pe(i,b(0,u-2),V(i._length-1,u+2))},_getItemOffset(u){const _=$(i,u);return s?_+b(0,o-S()):_},_getItemSize(u){return x(i,u)},_getItemLength(){return i._length},_getScrollOffset(){return f},_getViewportSize(){return o},_getScrollSize(){return S()},_getCorrectedScrollSize(){return b(S(),o)},_getJumpCount(){return m},_flushJump(){const u=a;return a=void 0,u},_getItemIndexForScrollTo(u){return B(i,u,0,0)},_waitForScrollDestinationItemsMeasured(){return w&&w[1](),new Promise((u,_)=>{let I=!1;const z=()=>{I||(I=!0,u(),w=void 0)};w=[z,_],ne(z,250)})},_subscribe(u){return v.add(u),()=>{v.delete(u)}},_update(u,_){let I,z,E=!1;switch(u){case D:{const O=_.filter(([T,k])=>i._sizes[T]!==k);if(!O.length)break;let N=0;if(d===P)N=F(H(i,O));else if(d===j){const T=H(i,O),[k]=h;f===0||(S()<=f+o?N=F(T):N=F(T.filter(([,ue])=>ue<k)))}N&&(a=N,m++);let Q=!1;O.forEach(([T,k])=>{_e(i,T,k)&&(Q=!0)}),c&&Q&&!f&&we(i),g=I=E=!0;break}case M:{E=o!==_,o=_;break}case A:case ie:{if(f===_)break;if(u===A){const O=K();(d===W||!O)&&d!==j&&(z=C(f>_?P:ee)),I=fe(f-_)>o}f=_,E=!0;break}case J:{z=C(_?j:W);break}}E&&(v.forEach(O=>{O(I)}),u===A&&p(f)),w&&u===D&&w[0](),L(z)&&r(z)},_getScrollDirection(){return d},_updateCacheLength(u){i._length!==u&&(i=G(u,l,i))}}},ge=typeof window<"u"?R.useLayoutEffect:R.useEffect,U="current",Re=e=>{const t=[];return R.Children.forEach(e,n=>{!L(n)||typeof n=="boolean"||t.push(n)}),t},he=e=>{const t=R.useRef(e);return ge(()=>{t[U]=e},[e]),t},Oe=(e,t,n)=>{const[s,r]=R.useState(t),p=he(t);if(R.useLayoutEffect(()=>{const c=()=>{r(()=>p[U]())};return e._subscribe(l=>{l?le.flushSync(c):c()})},[]),n){const c=t();s!==c&&r(c)}return s},Se=q(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),ce=(e,t,n)=>de(s=>{if(e._getScrollDirection()!==W&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollSize()-e._getViewportSize()&&n()}},50),Ee=(e,t,n)=>{let s;const r=t?"scrollLeft":"scrollTop",p=()=>s?t?s.scrollWidth:s.scrollHeight:0,c=(o,f)=>t&&n?Se(s)||f?-o:e._getScrollSize()-e._getViewportSize()-o:o,l=async(o,f)=>{if(!s)return;const m=()=>{let a=f();const i=p(),d=e._getViewportSize();return i-(a+d)<=0&&(a=i-d),a};for(;e._update(ie,m()),!!e._hasUnmeasuredItemsInRange(o);)try{await e._waitForScrollDestinationItemsMeasured()}catch{return}s[r]=c(m()),e._update(J,!0)};return{_initRoot(o){s=o;const f=()=>{e._update(A,c(o[r]))},m=se(()=>{f(),e._update(J,!1)},150),a=()=>{f(),m()},i=ce(e,t,m);return o.addEventListener("scroll",a),o.addEventListener("wheel",i,{passive:!0}),()=>{o.removeEventListener("scroll",a),o.removeEventListener("wheel",i),m._cancel()}},_getActualScrollSize:p,_scrollTo(o){o=b(o,0),l(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o){o=b(V(o,e._getItemLength()-1),0),l(o,()=>e._getItemOffset(o))},_fixScrollJump:o=>{s&&(s[r]+=c(o,!0))}}},Le=(e,t)=>{const n=t?"scrollX":"scrollY",s=t?"offsetLeft":"offsetTop";return{_initRoot(r){let p=!1;const c=(i,d)=>{const g=d+i[s],h=i.offsetParent;return i===document.body||!h?g:c(h,g)},l=()=>{p&&e._update(A,window[n]-c(r,0))},o=se(()=>{l(),e._update(J,!1)},150),f=()=>{l(),o()},m=ce(e,t,o),a=new IntersectionObserver(([i])=>{p=i.isIntersecting});return a.observe(r),window.addEventListener("scroll",f),window.addEventListener("wheel",m,{passive:!0}),()=>{a.disconnect(),window.removeEventListener("scroll",f),window.removeEventListener("wheel",m),o._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},ye=e=>{const t=R.useRef();return t[U]||(t[U]=e())},Ce=(e,t)=>{let n;const s=t?"width":"height",r=new WeakMap,p=q(()=>new ResizeObserver(c=>{const l=[];for(const{target:o,contentRect:f}of c)if(o===n)e._update(M,f[s]);else{const m=r.get(o);L(m)&&l.push([m,f[s]])}l.length&&e._update(D,l)}));return{_observeRoot(c){n=c;const l=p();return l.observe(c),()=>{l.disconnect()}},_observeItem(c,l){const o=p();return r.set(c,l),o.observe(c),()=>{r.delete(c),o.unobserve(c)}}}},Te=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",r=new WeakMap,p=q(()=>new ResizeObserver(c=>{const l=[];for(const{target:o,contentRect:f}of c){const m=r.get(o);L(m)&&l.push([m,f[n]])}l.length&&e._update(D,l)}));return{_observeRoot(){const c=()=>{e._update(M,window[s])};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c)}},_observeItem(c,l){const o=p();return r.set(c,l),o.observe(c),()=>{r.delete(c),o.unobserve(c)}}}},We=(e,t)=>{let n;const s="height",r="width",p=new WeakMap,c=new Set,l=new Set,o=new Map,f=(a,i)=>`${a}-${i}`,m=q(()=>new ResizeObserver(a=>{const i=new Set,d=new Set;for(const{target:g,contentRect:h}of a)if(g===n)e._update(M,h[s]),t._update(M,h[r]);else{const w=p.get(g);if(w){const[v,S]=w,K=f(v,S),C=o.get(K),u=[h[s],h[r]];let _,I;C?(C[0]!==u[0]&&(_=!0),C[1]!==u[1]&&(I=!0)):_=I=!0,_&&i.add(v),I&&d.add(S),(_||I)&&o.set(K,u)}}if(i.size){const g=[];i.forEach(h=>{let w=0;l.forEach(v=>{const S=o.get(f(h,v));S&&(w=b(w,S[0]))}),w&&g.push([h,w])}),e._update(D,g)}if(d.size){const g=[];d.forEach(h=>{let w=0;c.forEach(v=>{const S=o.get(f(v,h));S&&(w=b(w,S[1]))}),w&&g.push([h,w])}),t._update(D,g)}}));return{_observeRoot(a){n=a;const i=m();return i.observe(a),()=>{i.disconnect()}},_observeItem(a,i,d){const g=m();return p.set(a,[i,d]),c.add(i),l.add(d),g.observe(a),()=>{p.delete(a),g.unobserve(a)}}}},te=R.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:r},p)=>X("div",{ref:p,...t,children:X("div",{style:R.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:r?"none":"auto"}),[n,s,r]),children:e})}));try{te.displayName="DefaultWindow",te.__docgenInfo={description:"",displayName:"DefaultWindow",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{te as D,ye as a,Oe as b,ge as c,be as d,L as e,Ce as f,Ee as g,b as h,V as i,We as j,Te as k,Le as l,Re as m,U as r,he as u};
//# sourceMappingURL=DefaultWindow-73ad17ac.js.map
