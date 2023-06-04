import{r as N}from"./index-5284b0bf.js";import{s as Y}from"./index-847519d5.js";const C=Math.min,O=Math.max,K=Date.now,E=e=>e!=null,V=(e,t)=>Array.from({length:e},(s,r)=>t(r)),q=(e,t)=>{let s;const r=()=>{E(s)&&clearTimeout(s)},l=()=>{r(),s=setTimeout(()=>{s=null,e()},t)};return l._cancel=r,l},B=(e,t)=>{let s=K()-t;return(...r)=>{const l=K();s+t<l&&(s=l,e(...r))}},H=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},b=-1,v=(e,t)=>{const s=e._sizes[t];return s===b?e._defaultItemSize:s},j=(e,t,s)=>{e._sizes[t]=s,e._measuredOffsetIndex=C(t,e._measuredOffsetIndex)},G=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+v(e,t):e._offsets[t];let r=e._measuredOffsetIndex,l=e._offsets[r];for(;r<=t&&(e._offsets[r]=l,!(r===t&&!s));)l+=v(e,r),r++;return e._measuredOffsetIndex=t,l},ee=e=>G(e,e._length-1,!0),J=(e,t)=>G(e,t),Q=(e,t,s)=>{let r=0;if(s>=0)for(;t<e._length-1;){const l=v(e,t++);if((r+=l)>=s){r-l/2>=s&&t--;break}}else for(;t>0;){const l=v(e,--t);if((r-=l)<=s){r+l/2<s&&t++;break}}return C(O(t,0),e._length-1)},F=(e,t,s,r)=>Q(e,s,t-r),P=Q,te=(e,t,s)=>{for(let r=t;r<=s;r++)if(e._sizes[r]===b)return!0;return!1},Z=(e,t,s)=>({_defaultItemSize:t,_length:e,_measuredOffsetIndex:s?C(s._measuredOffsetIndex,e-1):0,_sizes:V(e,r=>{const l=s&&s._sizes[r];return E(l)?l:b}),_offsets:V(e,r=>{if(r===0)return 0;const l=s&&s._offsets[r];return E(l)?l:b})}),w=0,X=1,U=2,M=3,L=1,y=2,W=3,k=4,oe=(e,t,s,r,l=0,I,g)=>{let m=t*O(l-1,0),S=0,R=[],a=Z(e,t),n=w,_=[0,l],f;const c=new Set;return{_getRange(){const[o,i]=_,d=J(a,o),u=F(a,S,o,d),z=P(a,u,m);return o===u&&i===z?_:_=[u,z]},_isUnmeasuredItem(o){return a._sizes[o]===b},_hasUnmeasuredItemsInRange(o){return te(a,o,P(a,o,m))},_getItemOffset(o){return J(a,o)},_getItemSize(o){return v(a,o)},_getScrollOffset(){return S},_getViewportSize(){return m},_getScrollSize(){return ee(a)},_getJump(){return R},_isHorizontal(){return s},_isRtl(){return r},_getItemIndexForScrollTo(o){return F(a,o,0,0)},_waitForScrollDestinationItemsMeasured(){return f&&f[1](),new Promise((o,i)=>{f=[()=>{Promise.resolve().then(()=>{o(),f=void 0})},i]})},_subscribe(o){return c.add(o),()=>{c.delete(o)}},_update(o,i){(()=>{switch(o){case L:{const u=i.filter(([p,h])=>a._sizes[p]!==h);if(!u.length)return!1;const z=[];return u.forEach(([p,h])=>{z.push([h-v(a,p),p]),j(a,p,h)}),R=z,!0}case y:return m===i?!1:(m=i,!0);case W:case k:{const u=S;return(S=i)!==u}}})()&&(c.forEach(u=>{u()}),o===W?g(S):f&&o===L&&f[0]())},_getScrollDirection(){return n},_setScrollDirection(o){const i=n;n=o,n===w?I(!1):i===w&&(n===X||n===U)&&I(!0)},_updateCacheLength(o){a._length!==o&&(a=Z(o,t,a))}}},ie=typeof window<"u"?N.useLayoutEffect:N.useEffect,ce=(e,t)=>Y.useSyncExternalStore(e,t,t),se=H(e=>{const t="scrollLeft",s=e[t];e[t]=1;const r=e[t]<1;return e[t]=s,r}),le=(e,t)=>{let s;const r=e._isHorizontal(),l=e._isRtl(),I=r?"scrollLeft":"scrollTop",g=()=>s?r?s.scrollWidth:s.scrollHeight:0,m=(n,_)=>se(s)||_?-n:e._getScrollSize()-e._getViewportSize()-n,S=(n,_)=>{s&&(r&&l&&(n=m(n,_)),_?s[I]+=n:(s[I]=n,e._setScrollDirection(M)))},R=async(n,_)=>{const f=()=>{let c=_();const o=g(),i=e._getViewportSize();return o-(c+i)<=0&&(c=o-i),c};if(e._hasUnmeasuredItemsInRange(n)){do{e._update(k,f());try{await e._waitForScrollDestinationItemsMeasured()}catch{return}}while(e._hasUnmeasuredItemsInRange(n));S(f())}else{const c=f();S(c),e._update(k,c)}},a=n=>n.reduce((_,[f])=>_+f,0);return{_initRoot(n){s=n;const _=()=>{let i=n[I];r&&l&&(i=m(i));const d=e._getScrollOffset();if(d===i)return;const u=e._getScrollDirection(),z=t();(u===w||!z)&&u!==M&&e._setScrollDirection(d>i?U:X),e._update(W,i)},f=q(()=>{_(),e._setScrollDirection(w)},150),c=()=>{_(),f()},o=B(i=>{if(e._getScrollDirection()!==w&&!i.ctrlKey&&(r?i.deltaX:i.deltaY)){const d=e._getScrollOffset();d>0&&d<e._getScrollSize()-e._getViewportSize()&&f()}},50);return n.addEventListener("scroll",c),n.addEventListener("wheel",o,{passive:!0}),()=>{n.removeEventListener("scroll",c),n.removeEventListener("wheel",o),f._cancel()}},_getActualScrollSize:g,_scrollTo(n){n=O(n,0),R(e._getItemIndexForScrollTo(n),()=>n)},_scrollToIndex(n,_){n=O(C(n,_-1),0),R(n,()=>e._getItemOffset(n))},_fixScrollJump:(n,_)=>{const f=e._getScrollDirection();if(f===U){const c=a(n);c&&S(c,!0)}else if(f===M){const c=e._getScrollOffset();if(c!==0){const o=a(n);if(e._getScrollSize()-(c+e._getViewportSize()+o)<=0)o&&S(c+o);else{const i=n.reduce((d,[u,z])=>(z<_&&(d+=u),d),0);i&&S(i,!0)}}}}}},$="current",fe=e=>!E(e)||typeof e=="boolean",ue=e=>{const t=N.useRef();return t[$]||(t[$]=e())},ae=e=>{let t=!1,s;const r=e._isHorizontal()?"width":"height",l=new WeakMap,I=H(()=>new ResizeObserver(g=>{const m=[];for(const{target:S,contentRect:R}of g)if(S===s)e._update(y,R[r]);else{const a=l.get(S);E(a)&&m.push([a,R[r]])}m.length&&(e._update(L,m),t=!0)}));return{_observeRoot(g){s=g;const m=I();return m.observe(g),()=>{m.disconnect()}},_observeItem(g,m){const S=I();return l.set(g,m),S.observe(g),()=>{l.delete(g),S.unobserve(g)}},_isJustResized(){const g=t;return t=!1,g}}},_e=(e,t)=>{let s=!1,r=!1,l;const I="height",g="width",m=new WeakMap,S=new Set,R=new Set,a=new Map,n=(f,c)=>`${f}-${c}`,_=H(()=>new ResizeObserver(f=>{const c=new Set,o=new Set;for(const{target:i,contentRect:d}of f)if(i===l)e._update(y,d[I]),t._update(y,d[g]);else{const u=m.get(i);if(u){const[z,p]=u,h=n(z,p),x=a.get(h),A=[d[I],d[g]];let D,T;x?(x[0]!==A[0]&&(D=!0),x[1]!==A[1]&&(T=!0)):D=T=!0,D&&c.add(z),T&&o.add(p),(D||T)&&a.set(h,A)}}if(c.size){const i=[];c.forEach(d=>{let u=0;R.forEach(z=>{const p=a.get(n(d,z));p&&(u=O(u,p[0]))}),u&&i.push([d,u])}),e._update(L,i),s=!0}if(o.size){const i=[];o.forEach(d=>{let u=0;S.forEach(z=>{const p=a.get(n(z,d));p&&(u=O(u,p[1]))}),u&&i.push([d,u])}),t._update(L,i),r=!0}}));return{_observeRoot(f){l=f;const c=_();return c.observe(f),()=>{c.disconnect()}},_observeItem(f,c,o){const i=_();return m.set(f,[c,o]),S.add(c),R.add(o),i.observe(f),()=>{m.delete(f),i.unobserve(f)}},_isJustResized(f){const c=f?r:s;return f?r=!1:s=!1,c}}};export{ie as a,ue as b,oe as c,le as d,C as e,_e as f,E as g,ae as h,fe as i,O as m,$ as r,ce as u};
//# sourceMappingURL=resizer-6cd01ee9.js.map
