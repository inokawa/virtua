import{r as F}from"./index-98wxwTcn.js";const A=Math.min,v=Math.max,oe=Math.abs,Ee=Array.isArray,$=setTimeout,fe=(e,t,s)=>A(s,v(t,e)),W=e=>e!=null,ve=e=>[...e].sort((t,s)=>t-s),Re=e=>{const t=ve(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Le=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Te=(e,t)=>{let s;const r=()=>{W(s)&&clearTimeout(s)},o=()=>{r(),s=$(()=>{s=null,e()},t)};return o._cancel=r,o},H=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},k=-1,Y=(e,t,s)=>{const r=s?"unshift":"push";for(let o=0;o<t;o++)e[r](k);return e},G=(e,t)=>{const s=e._sizes[t];return s===k?e._defaultItemSize:s},we=(e,t,s)=>{const r=e._sizes[t]===k;return e._sizes[t]=s,e._computedOffsetIndex=A(t,e._computedOffsetIndex),r},ee=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,r=e._offsets[s];for(;s<t;)r+=G(e,s),e._offsets[++s]=r;return e._computedOffsetIndex=t,r},Ce=e=>e._length?ee(e,e._length-1)+G(e,e._length-1):0,ce=(e,t,s)=>{for(;s>=0&&s<e._length;){const r=ee(e,s);if(r<=t){if(r+G(e,s)>t)break;s++}else s--}return fe(s,0,e._length-1)},ye=(e,t,s,r)=>{const o=ce(e,t,A(s,e._length-1));return[o,ce(e,t+r,o)]},Ae=(e,t)=>{let s=0;const r=e._sizes.filter((i,u)=>{const _=i!==k;return _&&u<t&&s++,_}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Re(r))-o)*v(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s?s[0]:Y([],e),_length:e,_computedOffsetIndex:-1,_offsets:Y([],e)}),Me=e=>[[...e._sizes],e._defaultItemSize],le=(e,t,s)=>{const r=t-e._length;return e._computedOffsetIndex=s?-1:A(t-1,e._computedOffsetIndex),e._length=t,r>0?(Y(e._offsets,r),Y(e._sizes,r,s),e._defaultItemSize*r):(e._offsets.splice(r),(s?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((o,i)=>o-(i===k?e._defaultItemSize:i),0))},_e=typeof window<"u",de=()=>document.documentElement,te=e=>e.ownerDocument,se=e=>e.defaultView,ae=H(()=>_e?getComputedStyle(de()).direction==="rtl":!1),me=H(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ne=H(()=>"scrollBehavior"in de().style),N=0,Se=1,pe=2,B=0,xe=1,Z=2,j=1,ge=2,D=3,V=4,Je=5,Ie=6,be=7,Oe=8,M=1,Q=2,De=4,Ve=8,Ke=e=>v(e._getTotalSize(),e._getViewportSize()),Pe=(e,t,s,r,o)=>(r!==Se&&(e-=v(0,s)),r!==pe&&(t+=v(0,s)),[v(e,0),A(t,o-1)]),Ue=(e,t=40,s=0,r,o=!1,i=0)=>{let u=!!s,_=[],n=0,c=0,d=0,l=0,f=0,a=0,p=N,S=B,m=u?[0,v(s-1,0)]:null,g=[0,0],I=0;const b=ke(e,t,r),T=new Set,w=()=>c-i,C=O=>ye(b,O,g[0],n),y=()=>Ce(b),re=O=>ee(b,O)-f,K=O=>G(b,O),q=O=>{O&&(me()&&p!==N?f+=O:(l+=O,d++))};return{_getStateVersion(){return _},_getCacheSnapshot(){return Me(b)},_getRange(){return a?g:(g=C(v(0,w()+f+l)),m?[A(g[0],m[0]),v(g[1],m[1])]:g)},_isUnmeasuredItem(O){return b._sizes[O]===k},_hasUnmeasuredItemsInFrozenRange(){return m?b._sizes.slice(v(0,m[0]-1),A(b._length-1,m[1]+1)+1).includes(k):!1},_getItemOffset:re,_getItemSize:K,_getItemsLength(){return b._length},_getScrollOffset(){return c},_getScrollDirection(){return p},_getViewportSize(){return n},_getStartSpacerSize(){return i},_getTotalSize:y,_getJumpCount(){return d},_flushJump(){return a=l,l=0,[a,S===Z]},_subscribe(O,z){const x=[O,z];return T.add(x),()=>{T.delete(x)}},_update(O,z){let x,X,R=0;switch(O){case j:{const L=a;a=0;const h=z-c,E=oe(h);!(L&&E<oe(L)+1)&&S===B&&(p=h<0?pe:Se),u&&(m=null,u=!1),c=z,R=De;const U=w();U>=-n&&U<=y()&&(R+=M,X=E>n);break}case ge:{R=Ve,p!==N&&(x=!0,R+=M),p=N,S=B,m=null;break}case D:{const L=z.filter(([h,E])=>b._sizes[h]!==E);if(!L.length)break;q(L.reduce((h,[E,P])=>((S===Z||(m?E<m[0]:re(E)+(p===N&&S===B?K(E):0)<w()))&&(h+=P-K(E)),h),0));for(const[h,E]of L){const P=K(h),U=we(b,h,E);o&&(I+=E,U||(I-=P))}o&&n&&I>n&&(q(Ae(b,g[0])),o=!1),R=M+Q,X=!0;break}case V:{n!==z&&(n=z,R=M+Q);break}case Je:{z[1]?(q(le(b,z[0],!0)),S=Z,R=M):le(b,z[0]);break}case Ie:{i=z;break}case be:{S=xe;break}case Oe:{m=C(z),R=M;break}}R&&(_=[],x&&f&&(l+=f,f=0,d++),T.forEach(([L,h])=>{R&L&&h(X)}))}}},Be=_e?F.useLayoutEffect:F.useEffect,J=(e,t)=>t&&ae()?-e:e,ze=(e,t,s,r,o,i)=>{const u=Date.now;let _=0,n=!1,c=!1,d=!1,l=!1;const f=Te(()=>{if(n||c){n=!1,f();return}d=!1,e._update(ge)},150),a=()=>{_=u(),d&&(l=!0),i&&e._update(Ie,i()),e._update(j,r()),f()},p=g=>{if(n||e._getScrollDirection()===N||g.ctrlKey)return;const I=u()-_;150>I&&50<I&&(s?g.deltaX:g.deltaY)&&(n=!0)},S=()=>{c=!0,d=l=!1},m=()=>{c=!1,me()&&(d=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",S,{passive:!0}),t.addEventListener("touchend",m,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",S),t.removeEventListener("touchend",m),f._cancel()},_fixScrollJump:()=>{const[g,I]=e._flushJump();g&&(o(J(g,s),I,l),l=!1,I&&e._getViewportSize()>e._getTotalSize()&&e._update(j,r()))}}},ie=(e,t)=>{let s,r,o;const i=t?"scrollLeft":"scrollTop",u=t?"overflowX":"overflowY",_=async(n,c)=>{if(!s){Le(()=>_(n,c));return}o&&o();const d=()=>{let l;return[new Promise((f,a)=>{l=f,$(o=a,150)}),e._subscribe(Q,()=>{l&&l()})]};if(c&&Ne()){for(;e._update(Oe,n()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,f]=d();try{await l}catch{return}finally{f()}}s.scrollTo({[t?"left":"top"]:J(n(),t),behavior:"smooth"})}else for(;;){const[l,f]=d();try{s[i]=J(n(),t),e._update(be),await l}catch{return}finally{f()}}};return{_observe(n){s=n,r=ze(e,n,t,()=>J(n[i],t),(c,d,l)=>{if(l){const f=n.style,a=f[u];f[u]="hidden",$(()=>{f[u]=a})}d?(n[i]=e._getScrollOffset()+c,o&&o()):n[i]+=c})},_dispose(){r&&r._dispose()},_scrollTo(n){_(()=>n)},_scrollBy(n){n+=e._getScrollOffset(),_(()=>n)},_scrollToIndex(n,{align:c,smooth:d,offset:l=0}={}){if(n=fe(n,0,e._getItemsLength()-1),c==="nearest"){const f=e._getItemOffset(n),a=e._getScrollOffset();if(f<a)c="start";else if(f+e._getItemSize(n)>a+e._getViewportSize())c="end";else return}_(()=>l+e._getStartSpacerSize()+e._getItemOffset(n)+(c==="end"?e._getItemSize(n)-e._getViewportSize():c==="center"?(e._getItemSize(n)-e._getViewportSize())/2:0),d)},_fixScrollJump:()=>{r&&r._fixScrollJump()}}},Fe=(e,t)=>{let s;return{_observe(r){const o=t?"scrollX":"scrollY",i=te(r),u=se(i),_=i.body,n=(c,d,l,f=0)=>{const a=l?"offsetLeft":"offsetTop",p=f+(l&&ae()?u.innerWidth-c[a]-c.offsetWidth:c[a]),S=c.offsetParent;return c===d||!S?p:n(S,d,l,p)};s=ze(e,u,t,()=>J(u[o],t),(c,d)=>{d?u.scroll({[t?"left":"top"]:e._getScrollOffset()+c}):u.scrollBy(t?c:0,t?0:c)},()=>n(r,_,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},Ye=(e,t)=>{const s=ie(e,!1),r=ie(t,!0);return{_observe(o){s._observe(o),r._observe(o)},_dispose(){s._dispose(),r._dispose()},_scrollTo(o,i){s._scrollTo(i),r._scrollTo(o)},_scrollBy(o,i){s._scrollBy(i),r._scrollBy(o)},_scrollToIndex(o,i){s._scrollToIndex(i),r._scrollToIndex(o)},_fixScrollJump(){s._fixScrollJump(),r._fixScrollJump()}}},ue="current",he=(e,t)=>{if(Ee(e))for(const s of e)he(s,t);else!W(e)||typeof e=="boolean"||t.push(e)},Ge=e=>{const t=[];return he(e,t),t},qe=(e,t)=>{const s=e.key;return W(s)?s:"_"+t},Xe=e=>{const t=F.useRef();return t[ue]||(t[ue]=e())},ne=e=>{let t;return{_observe(s){(t||(t=new(se(te(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ze=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,i=ne(u=>{const _=[];for(const{target:n,contentRect:c}of u)if(n.offsetParent)if(n===s)e._update(V,c[r]);else{const d=o.get(n);W(d)&&_.push([d,c[r]])}_.length&&e._update(D,_)});return{_observeRoot(u){i._observe(s=u)},_observeItem:(u,_)=>(o.set(u,_),i._observe(u),()=>{o.delete(u),i._unobserve(u)}),_dispose:i._dispose}},$e=(e,t)=>{const s=t?"width":"height",r=t?"innerWidth":"innerHeight",o=new WeakMap,i=ne(_=>{const n=[];for(const{target:c,contentRect:d}of _){if(!c.offsetParent)continue;const l=o.get(c);W(l)&&n.push([l,d[s]])}n.length&&e._update(D,n)});let u;return{_observeRoot(_){const n=se(te(_)),c=()=>{e._update(V,n[r])};n.addEventListener("resize",c),c(),u=()=>{n.removeEventListener("resize",c)}},_observeItem:(_,n)=>(o.set(_,n),i._observe(_),()=>{o.delete(_),i._unobserve(_)}),_dispose(){u&&u(),i._dispose()}}},je=(e,t)=>{let s;const r="height",o="width",i=new WeakMap,u=new Set,_=new Set,n=new Map,c=(l,f)=>`${l}-${f}`,d=ne(l=>{const f=new Set,a=new Set;for(const{target:p,contentRect:S}of l)if(p.offsetParent)if(p===s)e._update(V,S[r]),t._update(V,S[o]);else{const m=i.get(p);if(m){const[g,I]=m,b=c(g,I),T=n.get(b),w=[S[r],S[o]];let C,y;T?(T[0]!==w[0]&&(C=!0),T[1]!==w[1]&&(y=!0)):C=y=!0,C&&f.add(g),y&&a.add(I),(C||y)&&n.set(b,w)}}if(f.size){const p=[];f.forEach(S=>{let m=0;_.forEach(g=>{const I=n.get(c(S,g));I&&(m=v(m,I[0]))}),m&&p.push([S,m])}),e._update(D,p)}if(a.size){const p=[];a.forEach(S=>{let m=0;u.forEach(g=>{const I=n.get(c(g,S));I&&(m=v(m,I[1]))}),m&&p.push([S,m])}),t._update(D,p)}});return{_observeRoot(l){d._observe(s=l)},_observeItem(l,f,a){return i.set(l,[f,a]),u.add(f),_.add(a),d._observe(l),()=>{i.delete(l),d._unobserve(l)}},_dispose:d._dispose}},Qe=e=>F.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Je as A,N as S,M as U,Xe as a,Qe as b,Pe as c,Ue as d,je as e,Ye as f,Ke as g,De as h,ae as i,Ve as j,Ze as k,ie as l,Le as m,qe as n,$e as o,Fe as p,Ge as q,ue as r,ve as s,Be as u};