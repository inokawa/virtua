import{r as U}from"./index-yp3VsGQP.js";const A=Math.min,z=Math.max,re=Math.abs,Ee=Array.isArray,G=setTimeout,$=(e,t,s)=>A(s,z(t,e)),P=e=>e!=null,Le=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ve=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Re=(e,t)=>{let s;const n=()=>{P(s)&&clearTimeout(s)},o=()=>{n(),s=G(()=>{s=null,e()},t)};return o._cancel=n,o},j=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},x=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](x);return e},k=(e,t)=>{const s=e._sizes[t];return s===x?e._defaultItemSize:s},we=(e,t,s)=>{const n=e._sizes[t]===x;return e._sizes[t]=s,e._computedOffsetIndex=A(t,e._computedOffsetIndex),n},Q=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=k(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Te=e=>e._length?Q(e,e._length-1)+k(e,e._length-1):0,oe=(e,t,s)=>{let n=Q(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=k(e,s);if(n+o>t)break;n+=o,s++}else n-=k(e,--s);return $(s,0,e._length-1)},ce=(e,t,s,n)=>{const o=oe(e,t,A(s,e._length-1));return[o,oe(e,t+n,o)]},Ce=(e,t)=>{let s=0;const n=e._sizes.filter((i,_)=>{const l=i!==x;return l&&_<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Le(n))-o)*z(t-s,0)},ye=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:B([],e),_offsets:B([],e)}),le=(e,t,s)=>{const n=t-e._length,o=n>0;let i;return o?(i=e._defaultItemSize*n,B(e._sizes,n,s),B(e._offsets,n)):(i=-(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((_,l)=>_+(l===x?e._defaultItemSize:l),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:A(t-1,e._computedOffsetIndex),e._length=t,i},ie=typeof window<"u",_e=()=>document.documentElement,H=e=>e.ownerDocument,ee=e=>e.defaultView,ae=j(()=>ie?getComputedStyle(_e()).direction==="rtl":!1),de=j(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ae=j(()=>"scrollBehavior"in _e().style),xe=1.5,D=0,me=1,Se=2,q=0,Je=1,ue=2,V=1,W=2,ke=3,pe=4,ge=5,Oe=6,Ie=7,K=1,Z=2,Me=4,De=8,We=e=>z(e._getTotalSize(),e._getViewportSize()),Pe=(e,t,s)=>z(e-(s===me?1:z(1,t)),0),Ke=(e,t,s,n)=>A(e+(s===Se?1:z(1,t)),n-1),X=(e,t,s)=>t.reduce((n,[o,i])=>{const _=i-k(e,o);return(!s||_>0)&&(n+=_),n},0),Ue=(e,t=40,s=0,n,o=!1,i=0,_=0)=>{let l=!!s,r=[],c=0,f=0,u=0,a=0,m=0,g=!1,p=0,d=D,I=q,O=l?[0,z(s-1,0)]:null,E=[0,0],J=0;const S=n||ye(e,t),T=new Set,y=()=>Te(S),se=()=>y()+i+_,ze=()=>f-i,ne=()=>z(0,se()-c),F=b=>{b&&(de()&&d!==D?m+=b:(a+=b,u++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(S))},_getRange(){return O?[A(E[0],O[0]),z(E[1],O[1])]:p?E:E=ce(S,ze()+m+a,E[0],c)},_isUnmeasuredItem(b){return S._sizes[b]===x},_hasUnmeasuredItemsInFrozenRange(){return O?S._sizes.slice(z(0,O[0]-1),A(S._length-1,O[1]+1)+1).includes(x):!1},_getItemOffset(b){return Q(S,b)-m},_getItemSize(b){return k(S,b)},_getItemsLength(){return S._length},_getScrollOffset(){return f},_getScrollDirection(){return d},_getViewportSize(){return c},_getStartSpacerSize(){return i},_getTotalSize:y,_getJumpCount(){return u},_flushJump(){const b=a,h=g;return a=0,g=!1,c>se()?[0,!1]:[p=b,h]},_subscribe(b,h){const M=[b,h];return T.add(M),()=>{T.delete(M)}},_update(b,h){let M,Y,v=0;switch(b){case V:{const L=h.filter(([C,w])=>S._sizes[C]!==w);if(!L.length)break;let R;if(I===ue)f>ne()-xe?R=X(S,L,!0):R=X(S,L);else{const[C]=E;R=X(S,L.filter(([w])=>w<C))}F(R);for(const[C,w]of L)we(S,C,w)&&o&&(J+=w);o&&c&&J>c&&(F(Ce(S,E[0])),o=!1),v=Z,Y=!0;break}case W:{c!==h&&(c=h,v=Z);break}case ke:{h[1]?(F(le(S,h[0],!0)),I=ue,g=!0,v=K):le(S,h[0]);break}case pe:{const L=$(h,0,ne()),R=p;if(p=0,L===f)break;const C=L-f,w=re(C);!(R&&w<re(R)+1)&&I===q&&(d=C<0?Se:me),l&&(O=null,l=!1),Y=w>c,f=L,v=K+Me;break}case ge:{v=De,d!==D&&(M=!0,v+=K),d=D,I=q,O=null;break}case Oe:{I=Je;break}case Ie:{O=ce(S,h,E[0],c),v=K;break}}v&&(r=[],M&&m&&(a+=m,m=0,u++),T.forEach(([L,R])=>{v&L&&R(Y)}))}}},Be=ie?U.useLayoutEffect:U.useEffect,N=(e,t)=>t&&ae()?-e:e,be=(e,t,s,n,o)=>{const i=Date.now;let _=0,l=!1,r=!1,c=!1,f=!1;const u=Re(()=>{if(l||r){l=!1,u();return}c=!1,e._update(ge)},150),a=()=>{_=i(),c&&(f=!0),e._update(pe,n()),u()},m=d=>{if(l||e._getScrollDirection()===D||d.ctrlKey)return;const I=i()-_;150>I&&50<I&&(s?d.deltaX:d.deltaY)&&(l=!0)},g=()=>{r=!0,c=f=!1},p=()=>{r=!1,de()&&(c=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",p,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",p),u._cancel()},_fixScrollJump:()=>{const[d,I]=e._flushJump();d&&(o(N(d,s),I,f),f=!1)}}},Fe=(e,t)=>{let s,n,o;const i=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",l=async(r,c)=>{if(!s){ve(()=>l(r,c));return}o&&o();const f=()=>{let u;return[new Promise((a,m)=>{u=a,G(o=m,150)}),e._subscribe(Z,()=>{u&&u()})]};if(c&&Ae()){for(;e._update(Ie,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,a]=f();try{await u}catch{return}finally{a()}}s.scrollTo({[t?"left":"top"]:N(r(),t),behavior:"smooth"})}else for(;;){const[u,a]=f();try{s[i]=N(r(),t),e._update(Oe),await u}catch{return}finally{a()}}};return{_observe(r){s=r,n=be(e,r,t,()=>N(r[i],t),(c,f,u)=>{if(u){const a=r.style,m=a[_];a[_]="hidden",G(()=>{a[_]=m})}f?(r[i]=e._getScrollOffset()+c,o&&o()):r[i]+=c})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:c,smooth:f}={}){if(r=$(r,0,e._getItemsLength()-1),c==="nearest"){const u=e._getItemOffset(r),a=e._getScrollOffset();if(u<a)c="start";else if(u+e._getItemSize(r)>a+e._getViewportSize())c="end";else return}l(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():c==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),f)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ye=(e,t)=>{let s;return{_observe(n){let o=0;const i=t?"scrollX":"scrollY",_=H(n),l=ee(_),r=_.body,c=(f,u,a,m=0)=>{const g=a?"offsetLeft":"offsetTop",p=m+(a&&ae()?l.innerWidth-f[g]-f.offsetWidth:f[g]),d=f.offsetParent;return f===u||!d?p:c(d,u,a,p)};s=be(e,l,t,()=>N(l[i],t)-(o=c(n,r,t)),(f,u)=>{u?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+f}):l.scrollBy(t?f:0,t?0:f)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},fe="current",he=(e,t)=>{if(Ee(e))for(const s of e)he(s,t);else!P(e)||typeof e=="boolean"||t.push(e)},qe=e=>{const t=[];return he(e,t),t},Xe=(e,t)=>{const s=e.key;return P(s)?s:"_"+t},Ge=e=>{const t=U.useRef();return t[fe]||(t[fe]=e())},te=e=>{let t;return{_observe(s){(t||(t=new(ee(H(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ze=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,i=te(_=>{const l=[];for(const{target:r,contentRect:c}of _)if(r.offsetParent)if(r===s)e._update(W,c[n]);else{const f=o.get(r);P(f)&&l.push([f,c[n]])}l.length&&e._update(V,l)});return{_observeRoot(_){i._observe(s=_)},_observeItem:(_,l)=>(o.set(_,l),i._observe(_),()=>{o.delete(_),i._unobserve(_)}),_dispose:i._dispose}},$e=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,i=te(l=>{const r=[];for(const{target:c,contentRect:f}of l){if(!c.offsetParent)continue;const u=o.get(c);P(u)&&r.push([u,f[s]])}r.length&&e._update(V,r)});let _;return{_observeRoot(l){const r=ee(H(l)),c=()=>{e._update(W,r[n])};r.addEventListener("resize",c),c(),_=()=>{r.removeEventListener("resize",c)}},_observeItem:(l,r)=>(o.set(l,r),i._observe(l),()=>{o.delete(l),i._unobserve(l)}),_dispose(){_&&_(),i._dispose()}}},je=(e,t)=>{let s;const n="height",o="width",i=new WeakMap,_=new Set,l=new Set,r=new Map,c=(u,a)=>`${u}-${a}`,f=te(u=>{const a=new Set,m=new Set;for(const{target:g,contentRect:p}of u)if(g.offsetParent)if(g===s)e._update(W,p[n]),t._update(W,p[o]);else{const d=i.get(g);if(d){const[I,O]=d,E=c(I,O),J=r.get(E),S=[p[n],p[o]];let T,y;J?(J[0]!==S[0]&&(T=!0),J[1]!==S[1]&&(y=!0)):T=y=!0,T&&a.add(I),y&&m.add(O),(T||y)&&r.set(E,S)}}if(a.size){const g=[];a.forEach(p=>{let d=0;l.forEach(I=>{const O=r.get(c(p,I));O&&(d=z(d,O[0]))}),d&&g.push([p,d])}),e._update(V,g)}if(m.size){const g=[];m.forEach(p=>{let d=0;_.forEach(I=>{const O=r.get(c(I,p));O&&(d=z(d,O[1]))}),d&&g.push([p,d])}),t._update(V,g)}});return{_observeRoot(u){f._observe(s=u)},_observeItem(u,a,m){return i.set(u,[a,m]),_.add(a),l.add(m),f._observe(u),()=>{i.delete(u),f._unobserve(u)}},_dispose:f._dispose}},Qe=e=>U.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{ke as A,D as S,K as U,Ge as a,Qe as b,Z as c,Ke as d,Ue as e,je as f,We as g,Fe as h,ae as i,Me as j,De as k,Xe as l,ve as m,Ze as n,Pe as o,$e as p,Ye as q,fe as r,qe as s,Be as u};
