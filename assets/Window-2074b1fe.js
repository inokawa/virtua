import{r as O}from"./index-5284b0bf.js";import{r as _e}from"./index-480187bb.js";import{j as Q}from"./jsx-runtime-f8a6c6ea.js";const C=Math.min,b=Math.max,me=Math.abs,Y=Date.now,ye=Object.values,ne=setTimeout,T=e=>e!=null,pe=e=>{const t=[...e].sort((n,r)=>n-r),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},re=(e,t)=>{let s;const n=()=>{T(s)&&clearTimeout(s)},r=()=>{n(),s=ne(()=>{s=null,e()},t)};return r._cancel=n,r},ge=(e,t)=>{let s=Y()-t;return(...n)=>{const r=Y();s+t<r&&(s=r,e(...n))}},j=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},x=-1,k=(e,t)=>{const s=e._sizes[t];return s===x?e._defaultItemSize:s},he=(e,t,s)=>{const n=e._sizes[t]===x;return e._sizes[t]=s,e._measuredOffsetIndex=C(t,e._measuredOffsetIndex),n},oe=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+k(e,t):e._offsets[t];let n=e._measuredOffsetIndex,r=e._offsets[n];for(;n<=t&&(e._offsets[n]=r,!(n===t&&!s));)r+=k(e,n),n++;return e._measuredOffsetIndex=t,r},we=e=>oe(e,e._length-1,!0),$=(e,t)=>oe(e,t),ie=(e,t,s)=>{let n=0;if(s>=0)for(;t<e._length-1;){const r=k(e,t++);if((n+=r)>=s){n-r/2>=s&&t--;break}}else for(;t>0;){const r=k(e,--t);if((n-=r)<=s){n+r/2<s&&t++;break}}return C(b(t,0),e._length-1)},G=(e,t,s,n)=>ie(e,s,t-n),Se=(e,t,s)=>{for(let n=t;n<=s;n++)if(e._sizes[n]===x)return!0;return!1},Ie=e=>{const t=e._sizes.filter(n=>n!==x),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:pe(t)},H=(e,t,s)=>{const n=[],r=[];for(let a=0;a<e;a++){const i=s&&s._sizes[a];if(n.push(T(i)?i:x),a===0)r.push(0);else{const l=s&&s._offsets[a];r.push(T(l)?l:x)}}return{_defaultItemSize:s?s._defaultItemSize:t,_length:e,_measuredOffsetIndex:s?C(s._measuredOffsetIndex,e-1):0,_sizes:n,_offsets:r}},q=e=>e.reduce((t,[s])=>t+s,0),ee=(e,t)=>t.map(([s,n])=>[n-k(e,s),s]),be=1.5,A=0,te=1,F=2,X=3,K=1,P=2,J=3,ce=4,Z=5,ue=6,le=1,M=2,fe=4,Ce=(e,t,s=0,n,r,a,i)=>{const l=!t,d=t||40;let o=d*b(s-1,0),f=0,p=0,m=0,c=a??H(e,d),_=A,h=!1,w=[0,s];const I=new Set,S=()=>we(c),N=()=>S()-o,D=()=>{const u=h;return h=!1,u},L=u=>{const g=_;if(_=u,_===A)return!1;if(g===A&&(_===te||_===F))return!0};return{_getCache(){return JSON.parse(JSON.stringify(c))},_getRange(){const[u,g]=w,R=$(c,u),v=G(c,f,u,R),z=ie(c,v,o);return u===v&&g===z?w:w=[v,z]},_isUnmeasuredItem(u){return c._sizes[u]===x},_hasUnmeasuredItemsInRange(u){return Se(c,b(0,u-2),C(c._length-1,u+2))},_getItemOffset(u){const g=$(c,u);return n?g+b(0,o-S()):g},_getItemSize(u){return k(c,u)},_getItemLength(){return c._length},_getScrollOffset(){return f},_getScrollOffsetMax:N,_getViewportSize(){return o},_getScrollSize:S,_getCorrectedScrollSize(){return b(S(),o)},_getJumpCount(){return p},_flushJump(){const u=m;return m=0,u},_getItemIndexForScrollTo(u){return G(c,u,0,0)},_subscribe(u,g){const R=[u,g];return I.add(R),()=>{I.delete(R)}},_update(u,g){let R,v,z=0;switch(u){case K:{const E=g.filter(([W,U])=>c._sizes[W]!==U);if(!E.length)break;let y=0;if(_===F)y=q(ee(c,E));else if(_===X){const W=ee(c,E),[U]=w;f===0||(f>N()-be?y=q(W):y=q(W.filter(([,de])=>de<U)))}y&&(m=y,p++,z+=fe);let B=!1;E.forEach(([W,U])=>{he(c,W,U)&&(B=!0)}),l&&B&&!f&&Ie(c),z+=M,h=R=!0;break}case P:{o!==g&&(o=g,z=M);break}case J:case ce:{if(f===g)break;if(u===J){const E=D();(_===A||!E)&&_!==X&&(v=L(f>g?F:te)),R=me(f-g)>o}f=b(0,C(N(),g)),z=le;break}case Z:{v=L(A);break}case ue:{v=L(X);break}}z&&(I.forEach(([E,y])=>{z&E&&y(R)}),u===J&&i&&i(f)),T(v)&&r(v)},_getScrollDirection(){return _},_updateCacheLength(u){c._length!==u&&(c=H(u,d,c))}}},ve=typeof window<"u"?O.useLayoutEffect:O.useEffect,V="current",Te=e=>{const t=[];return O.Children.forEach(e,s=>{!T(s)||typeof s=="boolean"||t.push(s)}),t},ze=e=>{const t=O.useRef(e);return ve(()=>{t[V]=e},[e]),t},xe=(e,t,s)=>{const[n,r]=O.useState(t),a=ze(t);if(O.useLayoutEffect(()=>{let i;t===e._getRange?i=le+M:t===e._getCorrectedScrollSize?i=M:t===e._getJumpCount?i=fe:i=M;const l=()=>{r(()=>a[V]())};return e._subscribe(i,d=>{d?_e.flushSync(l):l()})},[]),s){const i=t();n!==i&&r(i)}return n},Oe=j(e=>{const t="scrollLeft",s=e[t];e[t]=1;const n=e[t]<1;return e[t]=s,n}),ae=(e,t,s)=>ge(n=>{if(e._getScrollDirection()!==A&&!n.ctrlKey&&(t?n.deltaX:n.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&s()}},50),Ne=(e,t,s)=>{let n,r;const a=t?"scrollLeft":"scrollTop",i=()=>n?t?n.scrollWidth:n.scrollHeight:0,l=(o,f)=>t&&s?Oe(n)||f?-o:e._getScrollOffsetMax()-o:o,d=async(o,f)=>{if(!n)return;const p=()=>C(f(),i()-e._getViewportSize());for(;e._update(ce,p()),!!e._hasUnmeasuredItemsInRange(o);){r&&r[1]();const m=e._subscribe(M,()=>{r&&r[0]()});try{await new Promise((c,_)=>{let h=!1;const w=()=>{h||(h=!0,c(),r=void 0)};r=[w,_],ne(w,250)})}catch{return}finally{m()}}n[a]=l(p()),e._update(ue)};return{_initRoot(o){n=o;const f=()=>{e._update(J,l(o[a]))},p=re(()=>{f(),e._update(Z)},150),m=()=>{f(),p()},c=ae(e,t,p);return o.addEventListener("scroll",m),o.addEventListener("wheel",c,{passive:!0}),()=>{o.removeEventListener("scroll",m),o.removeEventListener("wheel",c),p._cancel()}},_getActualScrollSize:i,_scrollTo(o){o=b(o,0),d(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o){o=b(C(o,e._getItemLength()-1),0),d(o,()=>e._getItemOffset(o))},_fixScrollJump:o=>{n&&(n[a]+=l(o,!0))}}},We=(e,t)=>{const s=t?"scrollX":"scrollY",n=t?"offsetLeft":"offsetTop";return{_initRoot(r){let a=!1;const i=(m,c)=>{const _=c+m[n],h=m.offsetParent;return m===document.body||!h?_:i(h,_)},l=()=>{a&&e._update(J,window[s]-i(r,0))},d=re(()=>{l(),e._update(Z)},150),o=()=>{l(),d()},f=ae(e,t,d),p=new IntersectionObserver(([m])=>{a=m.isIntersecting});return p.observe(r),window.addEventListener("scroll",o),window.addEventListener("wheel",f,{passive:!0}),()=>{p.disconnect(),window.removeEventListener("scroll",o),window.removeEventListener("wheel",f),d._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},Ae=e=>{const t=O.useRef();return t[V]||(t[V]=e())},Me=(e,t)=>{let s;const n=t?"width":"height",r=new WeakMap,a=j(()=>new ResizeObserver(i=>{const l=[];for(const{target:d,contentRect:o}of i)if(d===s)e._update(P,o[n]);else{const f=r.get(d);T(f)&&l.push([f,o[n]])}l.length&&e._update(K,l)}));return{_observeRoot(i){s=i;const l=a();return l.observe(i),()=>{l.disconnect()}},_observeItem(i,l){const d=a();return r.set(i,l),d.observe(i),()=>{r.delete(i),d.unobserve(i)}}}},ke=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",r=new WeakMap,a=j(()=>new ResizeObserver(i=>{const l=[];for(const{target:d,contentRect:o}of i){const f=r.get(d);T(f)&&l.push([f,o[s]])}l.length&&e._update(K,l)}));return{_observeRoot(){const i=()=>{e._update(P,window[n])};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i),a().disconnect()}},_observeItem(i,l){const d=a();return r.set(i,l),d.observe(i),()=>{r.delete(i),d.unobserve(i)}}}},De=(e,t)=>{let s;const n="height",r="width",a=new WeakMap,i=new Set,l=new Set,d=new Map,o=(p,m)=>`${p}-${m}`,f=j(()=>new ResizeObserver(p=>{const m=new Set,c=new Set;for(const{target:_,contentRect:h}of p)if(_===s)e._update(P,h[n]),t._update(P,h[r]);else{const w=a.get(_);if(w){const[I,S]=w,N=o(I,S),D=d.get(N),L=[h[n],h[r]];let u,g;D?(D[0]!==L[0]&&(u=!0),D[1]!==L[1]&&(g=!0)):u=g=!0,u&&m.add(I),g&&c.add(S),(u||g)&&d.set(N,L)}}if(m.size){const _=[];m.forEach(h=>{let w=0;l.forEach(I=>{const S=d.get(o(h,I));S&&(w=b(w,S[0]))}),w&&_.push([h,w])}),e._update(K,_)}if(c.size){const _=[];c.forEach(h=>{let w=0;i.forEach(I=>{const S=d.get(o(I,h));S&&(w=b(w,S[1]))}),w&&_.push([h,w])}),t._update(K,_)}}));return{_observeRoot(p){s=p;const m=f();return m.observe(p),()=>{m.disconnect()}},_observeItem(p,m,c){const _=f();return a.set(p,[m,c]),i.add(m),l.add(c),_.observe(p),()=>{a.delete(p),_.unobserve(p)}}}},se=O.forwardRef(({children:e,attrs:t,width:s,height:n,scrolling:r},a)=>Q("div",{ref:a,...t,children:Q("div",{style:O.useMemo(()=>({position:"relative",visibility:"hidden",width:s??"100%",height:n??"100%",pointerEvents:r?"none":"auto"}),[s,n,r]),children:e})}));try{se.displayName="Window",se.__docgenInfo={description:"",displayName:"Window",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{se as W,Ae as a,xe as b,ve as c,Ce as d,T as e,Te as f,Me as g,Ne as h,C as i,ke as j,We as k,De as l,b as m,V as r,ze as u,ye as v};
//# sourceMappingURL=Window-2074b1fe.js.map
