import{r as G}from"./index-DRjF_FHU.js";const w=null,{min:y,max:L,abs:le,floor:Te}=Math,ve=Array.isArray,H=setTimeout,me=(e,t,s)=>y(s,L(t,e)),he=e=>[...e].sort((t,s)=>t-s),we=e=>{const t=he(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Ce=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},ye=(e,t)=>{let s;const o=()=>{s!=w&&clearTimeout(s)},r=()=>{o(),s=H(()=>{s=w,e()},t)};return r._cancel=o,r},se=e=>{let t,s;return()=>(t||(t=!0,s=e()),s)},k=-1,D=(e,t,s)=>{const o=s?"unshift":"push";for(let r=0;r<t;r++)e[o](k);return e},q=(e,t)=>{const s=e._sizes[t];return s===k?e._defaultItemSize:s},Ae=(e,t,s)=>{const o=e._sizes[t]===k;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),o},X=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,o=e._offsets[s];for(;s<t;)o+=q(e,s),e._offsets[++s]=o;return e._computedOffsetIndex=t,o},Ne=e=>e._length?X(e,e._length-1)+q(e,e._length-1):0,N=(e,t,s=0,o=e._length-1)=>{for(;s<=o;){const r=Te((s+o)/2),c=X(e,r);if(c<=t){if(c+q(e,r)>t)return r;s=r+1}else o=r-1}return me(s,0,e._length-1)},ke=(e,t,s,o)=>{if(o=y(o,e._length-1),X(e,o)<=t){const r=N(e,t+s,o);return[N(e,t,o,r),r]}else{const r=N(e,t,void 0,o);return[r,N(e,t+s,r)]}},Me=(e,t)=>{let s=0;const o=e._sizes.filter((c,u)=>{const f=c!==k;return f&&u<t&&s++,f}),r=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=we(o))-r)*L(t-s,0)},Ve=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?D(s[0].slice(0,y(e,s[0].length)),L(0,e-s[0].length)):D([],e),_length:e,_computedOffsetIndex:-1,_offsets:D([],e)}),Je=e=>[e._sizes.slice(),e._defaultItemSize],ue=(e,t,s)=>{const o=t-e._length;return e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,o>0?(D(e._offsets,o),D(e._sizes,o,s),e._defaultItemSize*o):(e._offsets.splice(o),(s?e._sizes.splice(0,-o):e._sizes.splice(o)).reduce((r,c)=>r-(c===k?e._defaultItemSize:c),0))},Se=typeof window<"u",pe=()=>document.documentElement,ne=e=>e.ownerDocument,oe=e=>e.defaultView,ge=se(()=>Se?getComputedStyle(pe()).direction==="rtl":!1),Ie=se(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),xe=se(()=>"scrollBehavior"in pe().style),M=0,fe=1,_e=2,Y=0,De=1,j=2,ee=1,ze=2,U=3,K=4,We=5,be=6,Oe=7,Ee=8,V=1,te=2,Ue=4,Ke=8,Fe=e=>L(e._getTotalSize(),e._getViewportSize()),Pe=e=>!!e._getViewportSize(),Ye=(e,t=40,s=4,o=0,r,c=!1)=>{let u=!!o,f=[],n=0,i=0,d=0,l=0,_=0,a=0,I=0,m=M,p=Y,S=u?[0,L(o-1,0)]:w,b=[0,0],J=0;const g=Ve(e,t,r),A=new Set,v=()=>d-i,h=()=>v()+a+_,ie=z=>ke(g,z,n,b[0]),Z=()=>Ne(g),ce=z=>X(g,z)-a,P=z=>q(g,z),$=z=>{z&&(Ie()&&m!==M?a+=z:(_+=z,l++))};return{_getStateVersion:()=>f,_getCacheSnapshot:()=>Je(g),_getRange:()=>{if(I)return b;let[z,O]=ie(L(0,h()));return S&&(z=y(z,S[0]),O=L(O,S[1])),m!==fe&&(z-=L(0,s)),m!==_e&&(O+=L(0,s)),b=[L(z,0),y(O,g._length-1)]},_getStartIndex:()=>N(g,h()),_getEndIndex:()=>N(g,h()+n),_isUnmeasuredItem:z=>g._sizes[z]===k,_hasUnmeasuredItemsInFrozenRange:()=>S?g._sizes.slice(L(0,S[0]-1),y(g._length-1,S[1]+1)+1).includes(k):!1,_getItemOffset:ce,_getItemSize:P,_getItemsLength:()=>g._length,_getScrollOffset:()=>d,_isScrolling:()=>m!==M,_getViewportSize:()=>n,_getStartSpacerSize:()=>i,_getTotalSize:Z,_getJumpCount:()=>l,_flushJump:()=>(I=_,_=0,[I,p===j||v()+n>=Z()]),_subscribe:(z,O)=>{const x=[z,O];return A.add(x),()=>{A.delete(x)}},_update:(z,O)=>{let x,Q,T=0;switch(z){case ee:{const C=I;I=0;const R=O-d,E=le(R);!(C&&E<le(C)+1)&&p===Y&&(m=R<0?_e:fe),u&&(S=w,u=!1),d=O,T=Ue;const F=v();F>=-n&&F<=Z()&&(T+=V,Q=E>n);break}case ze:{T=Ke,m!==M&&(x=!0,T+=V),m=M,p=Y,S=w;break}case U:{const C=O.filter(([R,E])=>g._sizes[R]!==E);if(!C.length)break;$(C.reduce((R,[E,B])=>((p===j||(S?E<S[0]:ce(E)+(m===M&&p===Y?P(E):0)<v()))&&(R+=B-P(E)),R),0));for(const[R,E]of C){const B=P(R),F=Ae(g,R,E);c&&(J+=F?E:E-B)}c&&n&&J>n&&($(Me(g,N(g,h()))),c=!1),T=V+te,Q=!0;break}case K:{n!==O&&(n=O,T=V+te);break}case We:{O[1]?($(ue(g,O[0],!0)),p=j,T=V):ue(g,O[0]);break}case be:{i=O;break}case Oe:{p=De;break}case Ee:{S=ie(O),T=V;break}}T&&(f=[],x&&a&&(_+=a,a=0,l++),A.forEach(([C,R])=>{T&C&&R(Q)}))}}},Ge=Se?G.useLayoutEffect:G.useEffect,W=(e,t)=>t&&ge()?-e:e,Le=(e,t,s,o,r,c)=>{const u=Date.now;let f=0,n=!1,i=!1,d=!1,l=!1;const _=ye(()=>{if(n||i){n=!1,_();return}d=!1,e._update(ze)},150),a=()=>{f=u(),d&&(l=!0),c&&e._update(be,c()),e._update(ee,o()),_()},I=S=>{if(n||!e._isScrolling()||S.ctrlKey)return;const b=u()-f;150>b&&50<b&&(s?S.deltaX:S.deltaY)&&(n=!0)},m=()=>{i=!0,d=l=!1},p=()=>{i=!1,Ie()&&(d=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchend",p,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",m),t.removeEventListener("touchend",p),_._cancel()},_fixScrollJump:()=>{const[S,b]=e._flushJump();S&&(r(W(S,s),b,l),l=!1,b&&e._getViewportSize()>e._getTotalSize()&&e._update(ee,o()))}}},de=(e,t)=>{let s,o,r;const c=t?"scrollLeft":"scrollTop",u=t?"overflowX":"overflowY",f=async(n,i)=>{if(!s){Ce(()=>f(n,i));return}r&&r();const d=()=>{let l;return[new Promise((_,a)=>{l=_,r=a,Pe(e)&&H(a,150)}),e._subscribe(te,()=>{l&&l()})]};if(i&&xe()){for(;e._update(Ee,n()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,_]=d();try{await l}catch{return}finally{_()}}s.scrollTo({[t?"left":"top"]:W(n(),t),behavior:"smooth"})}else for(;;){const[l,_]=d();try{s[c]=W(n(),t),e._update(Oe),await l}catch{return}finally{_()}}};return{_observe(n){s=n,o=Le(e,n,t,()=>W(n[c],t),(i,d,l)=>{if(l){const _=n.style,a=_[u];_[u]="hidden",H(()=>{_[u]=a})}d?(n[c]=e._getScrollOffset()+i,r&&r()):n[c]+=i})},_dispose(){o&&o._dispose()},_scrollTo(n){f(()=>n)},_scrollBy(n){n+=e._getScrollOffset(),f(()=>n)},_scrollToIndex(n,{align:i,smooth:d,offset:l=0}={}){if(n=me(n,0,e._getItemsLength()-1),i==="nearest"){const _=e._getItemOffset(n),a=e._getScrollOffset();if(_<a)i="start";else if(_+e._getItemSize(n)>a+e._getViewportSize())i="end";else return}f(()=>l+e._getStartSpacerSize()+e._getItemOffset(n)+(i==="end"?e._getItemSize(n)-e._getViewportSize():i==="center"?(e._getItemSize(n)-e._getViewportSize())/2:0),d)},_fixScrollJump:()=>{o&&o._fixScrollJump()}}},qe=(e,t)=>{let s;return{_observe(o){const r=t?"scrollX":"scrollY",c=ne(o),u=oe(c),f=c.body,n=(i,d,l,_=0)=>{const a=l?"offsetLeft":"offsetTop",I=_+(l&&ge()?u.innerWidth-i[a]-i.offsetWidth:i[a]),m=i.offsetParent;return i===d||!m?I:n(m,d,l,I)};s=Le(e,u,t,()=>W(u[r],t),(i,d)=>{d?u.scroll({[t?"left":"top"]:e._getScrollOffset()+i}):u.scrollBy(t?i:0,t?0:i)},()=>n(o,f,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},Xe=(e,t)=>{const s=de(e,!1),o=de(t,!0);return{_observe(r){s._observe(r),o._observe(r)},_dispose(){s._dispose(),o._dispose()},_scrollTo(r,c){s._scrollTo(c),o._scrollTo(r)},_scrollBy(r,c){s._scrollBy(c),o._scrollBy(r)},_scrollToIndex(r,c){s._scrollToIndex(c),o._scrollToIndex(r)},_fixScrollJump(){s._fixScrollJump(),o._fixScrollJump()}}},ae="current",Re=(e,t)=>{if(ve(e))for(const s of e)Re(s,t);else e==w||typeof e=="boolean"||t.push(e)},Ze=e=>{const t=[];return Re(e,t),t},$e=(e,t)=>{const s=e.key;return s!=w?s:"_"+t},Qe=e=>{const t=G.useRef();return t[ae]||(t[ae]=e())},re=e=>{let t;return{_observe(s){(t||(t=new(oe(ne(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},je=(e,t)=>{let s;const o=t?"width":"height",r=new WeakMap,c=re(u=>{const f=[];for(const{target:n,contentRect:i}of u)if(n.offsetParent)if(n===s)e._update(K,i[o]);else{const d=r.get(n);d!=w&&f.push([d,i[o]])}f.length&&e._update(U,f)});return{_observeRoot(u){c._observe(s=u)},_observeItem:(u,f)=>(r.set(u,f),c._observe(u),()=>{r.delete(u),c._unobserve(u)}),_dispose:c._dispose}},He=(e,t)=>{const s=t?"width":"height",o=t?"innerWidth":"innerHeight",r=new WeakMap,c=re(f=>{const n=[];for(const{target:i,contentRect:d}of f){if(!i.offsetParent)continue;const l=r.get(i);l!=w&&n.push([l,d[s]])}n.length&&e._update(U,n)});let u;return{_observeRoot(f){const n=oe(ne(f)),i=()=>{e._update(K,n[o])};n.addEventListener("resize",i),i(),u=()=>{n.removeEventListener("resize",i)}},_observeItem:(f,n)=>(r.set(f,n),c._observe(f),()=>{r.delete(f),c._unobserve(f)}),_dispose(){u&&u(),c._dispose()}}},et=(e,t)=>{let s;const o="height",r="width",c=new WeakMap,u=new Set,f=new Set,n=new Map,i=(l,_)=>`${l}-${_}`,d=re(l=>{const _=new Set,a=new Set;for(const{target:I,contentRect:m}of l)if(I.offsetParent)if(I===s)e._update(K,m[o]),t._update(K,m[r]);else{const p=c.get(I);if(p){const[S,b]=p,J=i(S,b),g=n.get(J),A=[m[o],m[r]];let v,h;g?(g[0]!==A[0]&&(v=!0),g[1]!==A[1]&&(h=!0)):v=h=!0,v&&_.add(S),h&&a.add(b),(v||h)&&n.set(J,A)}}if(_.size){const I=[];_.forEach(m=>{let p=0;f.forEach(S=>{const b=n.get(i(m,S));b&&(p=L(p,b[0]))}),p&&I.push([m,p])}),e._update(U,I)}if(a.size){const I=[];a.forEach(m=>{let p=0;u.forEach(S=>{const b=n.get(i(S,m));b&&(p=L(p,b[1]))}),p&&I.push([m,p])}),t._update(U,I)}});return{_observeRoot(l){d._observe(s=l)},_observeItem(l,_,a){return c.set(l,[_,a]),u.add(_),f.add(a),d._observe(l),()=>{c.delete(l),d._unobserve(l)}},_dispose:d._dispose}},tt=e=>G.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{We as A,w as N,V as U,Qe as a,tt as b,Ye as c,et as d,Xe as e,be as f,Fe as g,Ue as h,ge as i,Ke as j,je as k,de as l,Ce as m,$e as n,He as o,qe as p,Ze as q,ae as r,he as s,Ge as u};
