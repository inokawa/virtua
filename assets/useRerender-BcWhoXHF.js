import{r as G}from"./index-DRjF_FHU.js";const T=null,{min:y,max:E,abs:ie,floor:Le}=Math,Re=Array.isArray,j=setTimeout,fe=(e,t,s)=>y(s,E(t,e)),ve=e=>[...e].sort((t,s)=>t-s),Te=e=>{const t=ve(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},he=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},we=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},r=()=>{n(),s=j(()=>{s=T,e()},t)};return r._cancel=n,r},te=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},k=-1,V=(e,t,s)=>{const n=s?"unshift":"push";for(let r=0;r<t;r++)e[n](k);return e},q=(e,t)=>{const s=e._sizes[t];return s===k?e._defaultItemSize:s},Ce=(e,t,s)=>{const n=e._sizes[t]===k;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},X=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=q(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},ye=e=>e._length?X(e,e._length-1)+q(e,e._length-1):0,F=(e,t,s=0,n=e._length-1)=>{for(;s<=n;){const r=Le((s+n)/2),c=X(e,r);if(c<=t){if(c+q(e,r)>t)return r;s=r+1}else n=r-1}return fe(s,0,e._length-1)},Ae=(e,t,s,n)=>{if(n=y(n,e._length-1),X(e,n)<=t){const r=F(e,t+s,n);return[F(e,t,n,r),r]}else{const r=F(e,t,void 0,n);return[r,F(e,t+s,r)]}},Ne=(e,t)=>{let s=0;const n=e._sizes.filter((c,_)=>{const u=c!==k;return u&&_<t&&s++,u}),r=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Te(n))-r)*E(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?V(s[0].slice(0,y(e,s[0].length)),E(0,e-s[0].length)):V([],e),_length:e,_computedOffsetIndex:-1,_offsets:V([],e)}),Me=e=>[e._sizes.slice(),e._defaultItemSize],ce=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,n>0?(V(e._offsets,n),V(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((r,c)=>r-(c===k?e._defaultItemSize:c),0))},_e=typeof window<"u",de=()=>document.documentElement,se=e=>e.ownerDocument,ne=e=>e.defaultView,ae=te(()=>_e?getComputedStyle(de()).direction==="rtl":!1),me=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),De=te(()=>"scrollBehavior"in de().style),D=0,Se=1,pe=2,Y=0,Je=1,Q=2,H=1,ge=2,U=3,K=4,Ve=5,ze=6,Ie=7,be=8,M=1,ee=2,We=4,Ue=8,Pe=e=>E(e._getTotalSize(),e._getViewportSize()),xe=(e,t,s,n,r)=>(n!==Se&&(e-=E(0,s)),n!==pe&&(t+=E(0,s)),[E(e,0),y(t,r-1)]),Be=(e,t=40,s=0,n,r=!1)=>{let c=!!s,_=[],u=0,o=0,i=0,d=0,l=0,f=0,a=0,p=D,S=Y,m=c?[0,E(s-1,0)]:T,g=[0,0],z=0;const I=ke(e,t,n),A=new Set,h=()=>i-o,N=b=>Ae(I,b,u,g[0]),w=()=>ye(I),oe=b=>X(I,b)-f,P=b=>q(I,b),Z=b=>{b&&(me()&&p!==D?f+=b:(l+=b,d++))};return{_getStateVersion(){return _},_getCacheSnapshot(){return Me(I)},_getRange(){return a?g:(g=N(E(0,h()+f+l)),m?[y(g[0],m[0]),E(g[1],m[1])]:g)},_isUnmeasuredItem(b){return I._sizes[b]===k},_isInitialMeasurementDone(){return!!u},_hasUnmeasuredItemsInFrozenRange(){return m?I._sizes.slice(E(0,m[0]-1),y(I._length-1,m[1]+1)+1).includes(k):!1},_getItemOffset:oe,_getItemSize:P,_getItemsLength(){return I._length},_getScrollOffset(){return i},_getScrollDirection(){return p},_getViewportSize(){return u},_getStartSpacerSize(){return o},_getTotalSize:w,_getJumpCount(){return d},_flushJump(){return a=l,l=0,[a,S===Q||h()+u>=w()]},_subscribe(b,L){const J=[b,L];return A.add(J),()=>{A.delete(J)}},_update(b,L){let J,$,v=0;switch(b){case H:{const C=a;a=0;const R=L-i,O=ie(R);!(C&&O<ie(C)+1)&&S===Y&&(p=R<0?pe:Se),c&&(m=T,c=!1),i=L,v=We;const B=h();B>=-u&&B<=w()&&(v+=M,$=O>u);break}case ge:{v=Ue,p!==D&&(J=!0,v+=M),p=D,S=Y,m=T;break}case U:{const C=L.filter(([R,O])=>I._sizes[R]!==O);if(!C.length)break;Z(C.reduce((R,[O,x])=>((S===Q||(m?O<m[0]:oe(O)+(p===D&&S===Y?P(O):0)<h()))&&(R+=x-P(O)),R),0));for(const[R,O]of C){const x=P(R),B=Ce(I,R,O);r&&(z+=B?O:O-x)}r&&u&&z>u&&(Z(Ne(I,g[0])),r=!1),v=M+ee,$=!0;break}case K:{u!==L&&(u=L,v=M+ee);break}case Ve:{L[1]?(Z(ce(I,L[0],!0)),S=Q,v=M):ce(I,L[0]);break}case ze:{o=L;break}case Ie:{S=Je;break}case be:{m=N(L),v=M;break}}v&&(_=[],J&&f&&(l+=f,f=0,d++),A.forEach(([C,R])=>{v&C&&R($)}))}}},Fe=_e?G.useLayoutEffect:G.useEffect,W=(e,t)=>t&&ae()?-e:e,Oe=(e,t,s,n,r,c)=>{const _=Date.now;let u=0,o=!1,i=!1,d=!1,l=!1;const f=we(()=>{if(o||i){o=!1,f();return}d=!1,e._update(ge)},150),a=()=>{u=_(),d&&(l=!0),c&&e._update(ze,c()),e._update(H,n()),f()},p=g=>{if(o||e._getScrollDirection()===D||g.ctrlKey)return;const z=_()-u;150>z&&50<z&&(s?g.deltaX:g.deltaY)&&(o=!0)},S=()=>{i=!0,d=l=!1},m=()=>{i=!1,me()&&(d=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",S,{passive:!0}),t.addEventListener("touchend",m,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",S),t.removeEventListener("touchend",m),f._cancel()},_fixScrollJump:()=>{const[g,z]=e._flushJump();g&&(r(W(g,s),z,l),l=!1,z&&e._getViewportSize()>e._getTotalSize()&&e._update(H,n()))}}},ue=(e,t)=>{let s,n,r;const c=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",u=async(o,i)=>{if(!s){he(()=>u(o,i));return}r&&r();const d=()=>{let l;return[new Promise((f,a)=>{l=f,r=a,e._isInitialMeasurementDone()&&j(a,150)}),e._subscribe(ee,()=>{l&&l()})]};if(i&&De()){for(;e._update(be,o()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,f]=d();try{await l}catch{return}finally{f()}}s.scrollTo({[t?"left":"top"]:W(o(),t),behavior:"smooth"})}else for(;;){const[l,f]=d();try{s[c]=W(o(),t),e._update(Ie),await l}catch{return}finally{f()}}};return{_observe(o){s=o,n=Oe(e,o,t,()=>W(o[c],t),(i,d,l)=>{if(l){const f=o.style,a=f[_];f[_]="hidden",j(()=>{f[_]=a})}d?(o[c]=e._getScrollOffset()+i,r&&r()):o[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(o){u(()=>o)},_scrollBy(o){o+=e._getScrollOffset(),u(()=>o)},_scrollToIndex(o,{align:i,smooth:d,offset:l=0}={}){if(o=fe(o,0,e._getItemsLength()-1),i==="nearest"){const f=e._getItemOffset(o),a=e._getScrollOffset();if(f<a)i="start";else if(f+e._getItemSize(o)>a+e._getViewportSize())i="end";else return}u(()=>l+e._getStartSpacerSize()+e._getItemOffset(o)+(i==="end"?e._getItemSize(o)-e._getViewportSize():i==="center"?(e._getItemSize(o)-e._getViewportSize())/2:0),d)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ye=(e,t)=>{let s;return{_observe(n){const r=t?"scrollX":"scrollY",c=se(n),_=ne(c),u=c.body,o=(i,d,l,f=0)=>{const a=l?"offsetLeft":"offsetTop",p=f+(l&&ae()?_.innerWidth-i[a]-i.offsetWidth:i[a]),S=i.offsetParent;return i===d||!S?p:o(S,d,l,p)};s=Oe(e,_,t,()=>W(_[r],t),(i,d)=>{d?_.scroll({[t?"left":"top"]:e._getScrollOffset()+i}):_.scrollBy(t?i:0,t?0:i)},()=>o(n,u,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},Ge=(e,t)=>{const s=ue(e,!1),n=ue(t,!0);return{_observe(r){s._observe(r),n._observe(r)},_dispose(){s._dispose(),n._dispose()},_scrollTo(r,c){s._scrollTo(c),n._scrollTo(r)},_scrollBy(r,c){s._scrollBy(c),n._scrollBy(r)},_scrollToIndex(r,c){s._scrollToIndex(c),n._scrollToIndex(r)},_fixScrollJump(){s._fixScrollJump(),n._fixScrollJump()}}},le="current",Ee=(e,t)=>{if(Re(e))for(const s of e)Ee(s,t);else e==T||typeof e=="boolean"||t.push(e)},qe=e=>{const t=[];return Ee(e,t),t},Xe=(e,t)=>{const s=e.key;return s!=T?s:"_"+t},Ze=e=>{const t=G.useRef();return t[le]||(t[le]=e())},re=e=>{let t;return{_observe(s){(t||(t=new(ne(se(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},$e=(e,t)=>{let s;const n=t?"width":"height",r=new WeakMap,c=re(_=>{const u=[];for(const{target:o,contentRect:i}of _)if(o.offsetParent)if(o===s)e._update(K,i[n]);else{const d=r.get(o);d!=T&&u.push([d,i[n]])}u.length&&e._update(U,u)});return{_observeRoot(_){c._observe(s=_)},_observeItem:(_,u)=>(r.set(_,u),c._observe(_),()=>{r.delete(_),c._unobserve(_)}),_dispose:c._dispose}},Qe=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",r=new WeakMap,c=re(u=>{const o=[];for(const{target:i,contentRect:d}of u){if(!i.offsetParent)continue;const l=r.get(i);l!=T&&o.push([l,d[s]])}o.length&&e._update(U,o)});let _;return{_observeRoot(u){const o=ne(se(u)),i=()=>{e._update(K,o[n])};o.addEventListener("resize",i),i(),_=()=>{o.removeEventListener("resize",i)}},_observeItem:(u,o)=>(r.set(u,o),c._observe(u),()=>{r.delete(u),c._unobserve(u)}),_dispose(){_&&_(),c._dispose()}}},je=(e,t)=>{let s;const n="height",r="width",c=new WeakMap,_=new Set,u=new Set,o=new Map,i=(l,f)=>`${l}-${f}`,d=re(l=>{const f=new Set,a=new Set;for(const{target:p,contentRect:S}of l)if(p.offsetParent)if(p===s)e._update(K,S[n]),t._update(K,S[r]);else{const m=c.get(p);if(m){const[g,z]=m,I=i(g,z),A=o.get(I),h=[S[n],S[r]];let N,w;A?(A[0]!==h[0]&&(N=!0),A[1]!==h[1]&&(w=!0)):N=w=!0,N&&f.add(g),w&&a.add(z),(N||w)&&o.set(I,h)}}if(f.size){const p=[];f.forEach(S=>{let m=0;u.forEach(g=>{const z=o.get(i(S,g));z&&(m=E(m,z[0]))}),m&&p.push([S,m])}),e._update(U,p)}if(a.size){const p=[];a.forEach(S=>{let m=0;_.forEach(g=>{const z=o.get(i(g,S));z&&(m=E(m,z[1]))}),m&&p.push([S,m])}),t._update(U,p)}});return{_observeRoot(l){d._observe(s=l)},_observeItem(l,f,a){return c.set(l,[f,a]),_.add(f),u.add(a),d._observe(l),()=>{c.delete(l),d._unobserve(l)}},_dispose:d._dispose}},He=e=>G.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Ve as A,T as N,D as S,M as U,Ze as a,He as b,xe as c,Be as d,je as e,Ge as f,Pe as g,ze as h,ae as i,We as j,Ue as k,$e as l,he as m,ue as n,Xe as o,Qe as p,Ye as q,le as r,ve as s,qe as t,Fe as u};
