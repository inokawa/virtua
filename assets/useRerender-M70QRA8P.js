import{r as G}from"./index-DRjF_FHU.js";const T=null,{min:y,max:E,abs:ie,floor:Le}=Math,Re=Array.isArray,j=setTimeout,fe=(e,t,s)=>y(s,E(t,e)),ve=e=>[...e].sort((t,s)=>t-s),Te=e=>{const t=ve(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},we=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},he=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},o=()=>{n(),s=j(()=>{s=T,e()},t)};return o._cancel=n,o},te=e=>{let t,s;return()=>(t||(t=!0,s=e()),s)},k=-1,V=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](k);return e},q=(e,t)=>{const s=e._sizes[t];return s===k?e._defaultItemSize:s},Ce=(e,t,s)=>{const n=e._sizes[t]===k;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},X=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=q(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},ye=e=>e._length?X(e,e._length-1)+q(e,e._length-1):0,F=(e,t,s=0,n=e._length-1)=>{for(;s<=n;){const o=Le((s+n)/2),c=X(e,o);if(c<=t){if(c+q(e,o)>t)return o;s=o+1}else n=o-1}return fe(s,0,e._length-1)},Ae=(e,t,s,n)=>{if(n=y(n,e._length-1),X(e,n)<=t){const o=F(e,t+s,n);return[F(e,t,n,o),o]}else{const o=F(e,t,void 0,n);return[o,F(e,t+s,o)]}},Ne=(e,t)=>{let s=0;const n=e._sizes.filter((c,_)=>{const l=c!==k;return l&&_<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Te(n))-o)*E(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?V(s[0].slice(0,y(e,s[0].length)),E(0,e-s[0].length)):V([],e),_length:e,_computedOffsetIndex:-1,_offsets:V([],e)}),Me=e=>[e._sizes.slice(),e._defaultItemSize],ce=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,n>0?(V(e._offsets,n),V(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,c)=>o-(c===k?e._defaultItemSize:c),0))},_e=typeof window<"u",de=()=>document.documentElement,se=e=>e.ownerDocument,ne=e=>e.defaultView,ae=te(()=>_e?getComputedStyle(de()).direction==="rtl":!1),me=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),De=te(()=>"scrollBehavior"in de().style),D=0,Se=1,pe=2,Y=0,Je=1,Q=2,H=1,ge=2,U=3,K=4,Ve=5,ze=6,Ie=7,be=8,M=1,ee=2,We=4,Ue=8,xe=e=>E(e._getTotalSize(),e._getViewportSize()),Ke=e=>!!e._getViewportSize(),Be=(e,t,s,n,o)=>(n!==Se&&(e-=E(0,s)),n!==pe&&(t+=E(0,s)),[E(e,0),y(t,o-1)]),Fe=(e,t=40,s=0,n,o=!1)=>{let c=!!s,_=[],l=0,r=0,i=0,d=0,u=0,f=0,a=0,p=D,S=Y,m=c?[0,E(s-1,0)]:T,g=[0,0],z=0;const I=ke(e,t,n),A=new Set,w=()=>i-r,N=b=>Ae(I,b,l,g[0]),h=()=>ye(I),re=b=>X(I,b)-f,P=b=>q(I,b),Z=b=>{b&&(me()&&p!==D?f+=b:(u+=b,d++))};return{_getStateVersion:()=>_,_getCacheSnapshot:()=>Me(I),_getRange:()=>a?g:(g=N(E(0,w()+f+u)),m?[y(g[0],m[0]),E(g[1],m[1])]:g),_isUnmeasuredItem:b=>I._sizes[b]===k,_hasUnmeasuredItemsInFrozenRange:()=>m?I._sizes.slice(E(0,m[0]-1),y(I._length-1,m[1]+1)+1).includes(k):!1,_getItemOffset:re,_getItemSize:P,_getItemsLength:()=>I._length,_getScrollOffset:()=>i,_getScrollDirection:()=>p,_getViewportSize:()=>l,_getStartSpacerSize:()=>r,_getTotalSize:h,_getJumpCount:()=>d,_flushJump:()=>(a=u,u=0,[a,S===Q||w()+l>=h()]),_subscribe:(b,L)=>{const J=[b,L];return A.add(J),()=>{A.delete(J)}},_update:(b,L)=>{let J,$,v=0;switch(b){case H:{const C=a;a=0;const R=L-i,O=ie(R);!(C&&O<ie(C)+1)&&S===Y&&(p=R<0?pe:Se),c&&(m=T,c=!1),i=L,v=We;const B=w();B>=-l&&B<=h()&&(v+=M,$=O>l);break}case ge:{v=Ue,p!==D&&(J=!0,v+=M),p=D,S=Y,m=T;break}case U:{const C=L.filter(([R,O])=>I._sizes[R]!==O);if(!C.length)break;Z(C.reduce((R,[O,x])=>((S===Q||(m?O<m[0]:re(O)+(p===D&&S===Y?P(O):0)<w()))&&(R+=x-P(O)),R),0));for(const[R,O]of C){const x=P(R),B=Ce(I,R,O);o&&(z+=B?O:O-x)}o&&l&&z>l&&(Z(Ne(I,g[0])),o=!1),v=M+ee,$=!0;break}case K:{l!==L&&(l=L,v=M+ee);break}case Ve:{L[1]?(Z(ce(I,L[0],!0)),S=Q,v=M):ce(I,L[0]);break}case ze:{r=L;break}case Ie:{S=Je;break}case be:{m=N(L),v=M;break}}v&&(_=[],J&&f&&(u+=f,f=0,d++),A.forEach(([C,R])=>{v&C&&R($)}))}}},Ye=_e?G.useLayoutEffect:G.useEffect,W=(e,t)=>t&&ae()?-e:e,Oe=(e,t,s,n,o,c)=>{const _=Date.now;let l=0,r=!1,i=!1,d=!1,u=!1;const f=he(()=>{if(r||i){r=!1,f();return}d=!1,e._update(ge)},150),a=()=>{l=_(),d&&(u=!0),c&&e._update(ze,c()),e._update(H,n()),f()},p=g=>{if(r||e._getScrollDirection()===D||g.ctrlKey)return;const z=_()-l;150>z&&50<z&&(s?g.deltaX:g.deltaY)&&(r=!0)},S=()=>{i=!0,d=u=!1},m=()=>{i=!1,me()&&(d=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",S,{passive:!0}),t.addEventListener("touchend",m,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",S),t.removeEventListener("touchend",m),f._cancel()},_fixScrollJump:()=>{const[g,z]=e._flushJump();g&&(o(W(g,s),z,u),u=!1,z&&e._getViewportSize()>e._getTotalSize()&&e._update(H,n()))}}},le=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){we(()=>l(r,i));return}o&&o();const d=()=>{let u;return[new Promise((f,a)=>{u=f,o=a,Ke(e)&&j(a,150)}),e._subscribe(ee,()=>{u&&u()})]};if(i&&De()){for(;e._update(be,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,f]=d();try{await u}catch{return}finally{f()}}s.scrollTo({[t?"left":"top"]:W(r(),t),behavior:"smooth"})}else for(;;){const[u,f]=d();try{s[c]=W(r(),t),e._update(Ie),await u}catch{return}finally{f()}}};return{_observe(r){s=r,n=Oe(e,r,t,()=>W(r[c],t),(i,d,u)=>{if(u){const f=r.style,a=f[_];f[_]="hidden",j(()=>{f[_]=a})}d?(r[c]=e._getScrollOffset()+i,o&&o()):r[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:d,offset:u=0}={}){if(r=fe(r,0,e._getItemsLength()-1),i==="nearest"){const f=e._getItemOffset(r),a=e._getScrollOffset();if(f<a)i="start";else if(f+e._getItemSize(r)>a+e._getViewportSize())i="end";else return}l(()=>u+e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),d)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ge=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",c=se(n),_=ne(c),l=c.body,r=(i,d,u,f=0)=>{const a=u?"offsetLeft":"offsetTop",p=f+(u&&ae()?_.innerWidth-i[a]-i.offsetWidth:i[a]),S=i.offsetParent;return i===d||!S?p:r(S,d,u,p)};s=Oe(e,_,t,()=>W(_[o],t),(i,d)=>{d?_.scroll({[t?"left":"top"]:e._getScrollOffset()+i}):_.scrollBy(t?i:0,t?0:i)},()=>r(n,l,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},qe=(e,t)=>{const s=le(e,!1),n=le(t,!0);return{_observe(o){s._observe(o),n._observe(o)},_dispose(){s._dispose(),n._dispose()},_scrollTo(o,c){s._scrollTo(c),n._scrollTo(o)},_scrollBy(o,c){s._scrollBy(c),n._scrollBy(o)},_scrollToIndex(o,c){s._scrollToIndex(c),n._scrollToIndex(o)},_fixScrollJump(){s._fixScrollJump(),n._fixScrollJump()}}},ue="current",Ee=(e,t)=>{if(Re(e))for(const s of e)Ee(s,t);else e==T||typeof e=="boolean"||t.push(e)},Xe=e=>{const t=[];return Ee(e,t),t},Ze=(e,t)=>{const s=e.key;return s!=T?s:"_"+t},$e=e=>{const t=G.useRef();return t[ue]||(t[ue]=e())},oe=e=>{let t;return{_observe(s){(t||(t=new(ne(se(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Qe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=oe(_=>{const l=[];for(const{target:r,contentRect:i}of _)if(r.offsetParent)if(r===s)e._update(K,i[n]);else{const d=o.get(r);d!=T&&l.push([d,i[n]])}l.length&&e._update(U,l)});return{_observeRoot(_){c._observe(s=_)},_observeItem:(_,l)=>(o.set(_,l),c._observe(_),()=>{o.delete(_),c._unobserve(_)}),_dispose:c._dispose}},je=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=oe(l=>{const r=[];for(const{target:i,contentRect:d}of l){if(!i.offsetParent)continue;const u=o.get(i);u!=T&&r.push([u,d[s]])}r.length&&e._update(U,r)});let _;return{_observeRoot(l){const r=ne(se(l)),i=()=>{e._update(K,r[n])};r.addEventListener("resize",i),i(),_=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),c._observe(l),()=>{o.delete(l),c._unobserve(l)}),_dispose(){_&&_(),c._dispose()}}},He=(e,t)=>{let s;const n="height",o="width",c=new WeakMap,_=new Set,l=new Set,r=new Map,i=(u,f)=>`${u}-${f}`,d=oe(u=>{const f=new Set,a=new Set;for(const{target:p,contentRect:S}of u)if(p.offsetParent)if(p===s)e._update(K,S[n]),t._update(K,S[o]);else{const m=c.get(p);if(m){const[g,z]=m,I=i(g,z),A=r.get(I),w=[S[n],S[o]];let N,h;A?(A[0]!==w[0]&&(N=!0),A[1]!==w[1]&&(h=!0)):N=h=!0,N&&f.add(g),h&&a.add(z),(N||h)&&r.set(I,w)}}if(f.size){const p=[];f.forEach(S=>{let m=0;l.forEach(g=>{const z=r.get(i(S,g));z&&(m=E(m,z[0]))}),m&&p.push([S,m])}),e._update(U,p)}if(a.size){const p=[];a.forEach(S=>{let m=0;_.forEach(g=>{const z=r.get(i(g,S));z&&(m=E(m,z[1]))}),m&&p.push([S,m])}),t._update(U,p)}});return{_observeRoot(u){d._observe(s=u)},_observeItem(u,f,a){return c.set(u,[f,a]),_.add(f),l.add(a),d._observe(u),()=>{c.delete(u),d._unobserve(u)}},_dispose:d._dispose}},et=e=>G.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Ve as A,T as N,D as S,M as U,$e as a,et as b,Be as c,Fe as d,He as e,qe as f,xe as g,ze as h,ae as i,We as j,Ue as k,Qe as l,we as m,le as n,Ze as o,je as p,Ge as q,ue as r,ve as s,Xe as t,Ye as u};
