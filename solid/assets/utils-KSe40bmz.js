import{i as Ee,e as _e,j as ze,k as Re,t as Te,l as ae,u as we,p as Ce,q as ye,v as Me,c as ke}from"./web-DwhiH2Oy.js";const y=Math.min,v=Math.max,ie=Math.abs,Y=setTimeout,X=(e,t,s)=>y(s,v(t,e)),$=e=>e!=null,Ae=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Je=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},De=(e,t)=>{let s;const n=()=>{$(s)&&clearTimeout(s)},o=()=>{n(),s=Y(()=>{s=null,e()},t)};return o._cancel=n,o},Z=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},M=-1,U=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](M);return e},C=(e,t)=>{const s=e._sizes[t];return s===M?e._defaultItemSize:s},Ne=(e,t,s)=>{const n=e._sizes[t]===M;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},G=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=C(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},xe=e=>e._length?G(e,e._length-1)+C(e,e._length-1):0,ue=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=G(e,s);if(n<=t){if(n+C(e,s)>t)break;s++}else s--}return X(s,0,e._length-1)},Pe=(e,t,s,n)=>{const o=ue(e,t,y(s,e._length-1));return[o,ue(e,t+n,o)]},Ue=(e,t)=>{let s=0;const n=e._sizes.filter((c,_)=>{const l=c!==M;return l&&_<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Ae(n))-o)*v(t-s,0)},Ve=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:U([],e),_offsets:U([],e)}),ce=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,n>0?(U(e._offsets,n),U(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,c)=>o-(c===M?e._defaultItemSize:c),0))},We=typeof window<"u",de=()=>document.documentElement,j=e=>e.ownerDocument,Q=e=>e.defaultView,H=Z(()=>We?getComputedStyle(de()).direction==="rtl":!1),me=Z(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Be=Z(()=>"scrollBehavior"in de().style),Ke=1.5,k=0,Se=1,pe=2,x=0,Fe=1,fe=2,ee=1,te=2,Ye=3,ge=4,Oe=5,Ie=6,be=7,P=1,q=2,qe=4,Xe=8,Ge=e=>v(e._getTotalSize(),e._getViewportSize()),je=(e,t,s,n,o)=>(n!==Se&&(e-=v(0,s)),n!==pe&&(t+=v(0,s)),[v(e,0),y(t,o-1)]),Qe=(e,t=40,s=0,n,o=!1,c=0,_=0)=>{let l=!!s,r=[],i=0,u=0,f=0,a=0,d=0,E=!1,b=0,p=k,O=x,I=l?[0,v(s-1,0)]:null,T=[0,0],V=0;const m=n||Ve(e,t),W=new Set,se=S=>Pe(m,S,T[0],i),ne=()=>xe(m),re=()=>ne()+c+_,ve=()=>u-c,oe=()=>v(0,re()-i),le=S=>G(m,S)-d,B=S=>{S&&(me()&&p!==k?d+=S:(a+=S,f++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(m))},_getRange(){return b?T:(T=se(ve()+d+a),I?[y(T[0],I[0]),v(T[1],I[1])]:T)},_isUnmeasuredItem(S){return m._sizes[S]===M},_hasUnmeasuredItemsInFrozenRange(){return I?m._sizes.slice(v(0,I[0]-1),y(m._length-1,I[1]+1)+1).includes(M):!1},_getItemOffset:le,_getItemSize(S){return C(m,S)},_getItemsLength(){return m._length},_getScrollOffset(){return u},_getScrollDirection(){return p},_getViewportSize(){return i},_getStartSpacerSize(){return c},_getTotalSize:ne,_getJumpCount(){return f},_flushJump(){const S=a,g=E;return a=0,E=!1,i>re()?[0,!1]:[b=S,g]},_subscribe(S,g){const A=[S,g];return W.add(A),()=>{W.delete(A)}},_update(S,g){let A,K,z=0;switch(S){case ee:{const R=g.filter(([h,L])=>m._sizes[h]!==L);if(!R.length)break;let w=!1,J=!1;O===fe?u>oe()-Ke&&(J=!0):w=!0,B(R.reduce((h,[L,F])=>{if(!w||(I?L<I[0]:le(L)+(p===k&&O===x?C(m,L):0)<u)){const N=F-C(m,L);(!J||N>0)&&(h+=N)}return h},0));for(const[h,L]of R){const F=C(m,h),N=Ne(m,h,L);o&&(V+=L,N||(V-=F))}o&&i&&V>i&&(B(Ue(m,T[0])),o=!1),z=q,K=!0;break}case te:{i!==g&&(i=g,z=q);break}case Ye:{g[1]?(B(ce(m,g[0],!0)),O=fe,E=!0,z=P):ce(m,g[0]);break}case ge:{const R=X(g,0,oe()),w=b;if(b=0,R===u)break;const J=R-u,h=ie(J);!(w&&h<ie(w)+1)&&O===x&&(p=J<0?pe:Se),l&&(I=null,l=!1),K=h>i,u=R,z=P+qe;break}case Oe:{z=Xe,p!==k&&(A=!0,z+=P),p=k,O=x,I=null;break}case Ie:{O=Fe;break}case be:{I=se(g),z=P;break}}z&&(r=[],A&&d&&(a+=d,d=0,f++),W.forEach(([R,w])=>{z&R&&w(K)}))}}},he=e=>{let t;return{_observe(s){(t||(t=new(Q(j(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},He=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=he(_=>{const l=[];for(const{target:r,contentRect:i}of _)if(r.offsetParent)if(r===s)e._update(te,i[n]);else{const u=o.get(r);$(u)&&l.push([u,i[n]])}l.length&&e._update(ee,l)});return{_observeRoot(_){c._observe(s=_)},_observeItem:(_,l)=>(o.set(_,l),c._observe(_),()=>{o.delete(_),c._unobserve(_)}),_dispose:c._dispose}},et=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=he(l=>{const r=[];for(const{target:i,contentRect:u}of l){if(!i.offsetParent)continue;const f=o.get(i);$(f)&&r.push([f,u[s]])}r.length&&e._update(ee,r)});let _;return{_observeRoot(l){const r=Q(j(l)),i=()=>{e._update(te,r[n])};r.addEventListener("resize",i),i(),_=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),c._observe(l),()=>{o.delete(l),c._unobserve(l)}),_dispose(){_&&_(),c._dispose()}}},D=(e,t)=>t&&H()?-e:e,Le=(e,t,s,n,o)=>{const c=Date.now;let _=0,l=!1,r=!1,i=!1,u=!1;const f=De(()=>{if(l||r){l=!1,f();return}i=!1,e._update(Oe)},150),a=()=>{_=c(),i&&(u=!0),e._update(ge,n()),f()},d=p=>{if(l||e._getScrollDirection()===k||p.ctrlKey)return;const O=c()-_;150>O&&50<O&&(s?p.deltaX:p.deltaY)&&(l=!0)},E=()=>{r=!0,i=u=!1},b=()=>{r=!1,me()&&(i=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",d,{passive:!0}),t.addEventListener("touchstart",E,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",d),t.removeEventListener("touchstart",E),t.removeEventListener("touchend",b),f._cancel()},_fixScrollJump:()=>{const[p,O]=e._flushJump();p&&(o(D(p,s),O,u),u=!1)}}},tt=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){Je(()=>l(r,i));return}o&&o();const u=()=>{let f;return[new Promise((a,d)=>{f=a,Y(o=d,150)}),e._subscribe(q,()=>{f&&f()})]};if(i&&Be()){for(;e._update(be,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,a]=u();try{await f}catch{return}finally{a()}}s.scrollTo({[t?"left":"top"]:D(r(),t),behavior:"smooth"})}else for(;;){const[f,a]=u();try{s[c]=D(r(),t),e._update(Ie),await f}catch{return}finally{a()}}};return{_observe(r){s=r,n=Le(e,r,t,()=>D(r[c],t),(i,u,f)=>{if(f){const a=r.style,d=a[_];a[_]="hidden",Y(()=>{a[_]=d})}u?(r[c]=e._getScrollOffset()+i,o&&o()):r[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:u}={}){if(r=X(r,0,e._getItemsLength()-1),i==="nearest"){const f=e._getItemOffset(r),a=e._getScrollOffset();if(f<a)i="start";else if(f+e._getItemSize(r)>a+e._getViewportSize())i="end";else return}l(()=>e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),u)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},st=(e,t)=>{let s;return{_observe(n){let o=0;const c=t?"scrollX":"scrollY",_=j(n),l=Q(_),r=_.body,i=(u,f,a,d=0)=>{const E=a?"offsetLeft":"offsetTop",b=d+(a&&H()?l.innerWidth-u[E]-u.offsetWidth:u[E]),p=u.offsetParent;return u===f||!p?b:i(p,f,a,b)};s=Le(e,l,t,()=>D(l[c],t)-(o=i(n,r,t)),(u,f)=>{f?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+u}):l.scrollBy(t?u:0,t?0:u)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};var $e=Te("<div>");const nt=e=>{let t;Ee(()=>{t&&ae(e._resizer(t,e._index))});const s=_e(()=>{const n=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:"0px",[n?H()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return n&&(o.display="flex"),o});return(()=>{var n=$e(),o=t;return typeof o=="function"?we(o,n):t=n,ze(n,()=>e._children),Re(c=>Ce(n,s(),c)),n})()},rt=e=>{let t=new Map;return ae(()=>{for(const s of t.values())s._dispose()}),_e(()=>{const s=e._each,[n,o]=e._range,c=new Map,_=[];return ye(()=>{for(let l=n;l<=o;l++){const r=s[l],i=t.get(l);_.push(i?i._element:Me(u=>{const f=ke(r),a=e._render(f[0](),l);return c.set(l,{_data:f,_element:a,_dispose:u}),a})),i&&(r!==i._data&&i._data[1](r),c.set(l,i))}for(const[l,r]of t.entries())c.has(l)||r._dispose();return t=c,_})})},ot=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{Ye as A,nt as L,rt as R,k as S,P as U,q as a,qe as b,Qe as c,Xe as d,$ as e,He as f,je as g,Ge as h,ot as i,tt as j,et as k,st as l};
