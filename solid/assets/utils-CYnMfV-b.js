import{m as Ee,k as we,h as _e,d as ve,D as Re,l as Se,p as Te,c as Ce}from"./web-DSIcfvkV.js";const R=null,{min:T,max:L,abs:fe,floor:ye}=Math,ee=(e,t,n)=>T(n,L(t,e)),Ae=e=>[...e].sort((t,n)=>t-n),pe=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},te=e=>{let t,n;return()=>(t||(t=!0,n=e()),n)},y=-1,B=(e,t,n)=>{const r=n?"unshift":"push";for(let i=0;i<t;i++)e[r](y);return e},Y=(e,t)=>{const n=e._sizes[t];return n===y?e._defaultItemSize:n},Ne=(e,t,n)=>{const r=e._sizes[t]===y;return e._sizes[t]=n,e._computedOffsetIndex=T(t,e._computedOffsetIndex),r},q=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,r=e._offsets[n];for(;n<t;)r+=Y(e,n),e._offsets[++n]=r;return e._computedOffsetIndex=t,r},De=e=>e._length?q(e,e._length-1)+Y(e,e._length-1):0,v=(e,t,n=0,r=e._length-1)=>{for(;n<=r;){const i=ye((n+r)/2),a=q(e,i);if(a<=t){if(a+Y(e,i)>t)return i;n=i+1}else r=i-1}return ee(n,0,e._length-1)},Me=(e,t,n,r)=>{if(r=T(r,e._length-1),q(e,r)<=t){const i=v(e,t+n,r);return[v(e,t,r,i),i]}else{const i=v(e,t,void 0,r);return[i,v(e,t+n,i)]}},Ve=(e,t)=>{let n=0;const r=[];e._sizes.forEach((c,f)=>{c!==y&&(r.push(c),f<t&&n++)}),e._computedOffsetIndex=-1;const i=Ae(r),a=i.length,m=a/2|0,o=a%2===0?(i[m-1]+i[m])/2:i[m],s=e._defaultItemSize;return((e._defaultItemSize=o)-s)*L(t-n,0)},ke=(e,t,n)=>({_defaultItemSize:t,_sizes:B([],e),_length:e,_computedOffsetIndex:-1,_offsets:B([],e)}),Je=e=>[e._sizes.slice(),e._defaultItemSize],ae=(e,t,n)=>{const r=t-e._length;return e._computedOffsetIndex=n?-1:T(t-1,e._computedOffsetIndex),e._length=t,r>0?(B(e._offsets,r),B(e._sizes,r,n),e._defaultItemSize*r):(e._offsets.splice(r),(n?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((i,a)=>i-(a===y?e._defaultItemSize:a),0))},Ue=typeof window<"u",ge=()=>document.documentElement,M=e=>e.ownerDocument,V=e=>e.defaultView,se=te(()=>Ue?getComputedStyle(ge()).direction==="rtl":!1),$e=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ie=te(()=>"scrollBehavior"in ge().style),A=0,de=1,me=2,F=0,We=1,j=2,H=1,be=2,ne=3,re=4,Pe=5,Oe=6,oe=7,ie=8,N=1,K=2,Fe=4,Be=8,Ye=e=>L(e.$getTotalSize(),e.$getViewportSize()),he=e=>!!e.$getViewportSize(),qe=(e,t=40,n=4,r=0,i,a=!1)=>{let m=!!r,o=[],s=0,c=0,f=0,l=0,u=0,d=0,$=0,I=A,b=F,S=m?[0,L(r-1,0)]:R,E=[0,0],ce=0;const p=ke(e,t),G=new Set,k=()=>f-c,J=()=>k()+d+u,le=_=>Me(p,_,s,E[0]),X=()=>De(p),ue=_=>q(p,_)-d,U=_=>Y(p,_),Z=_=>{_&&($e()&&I!==A?d+=_:(u+=_,l++))};return{$getStateVersion:()=>o,$getCacheSnapshot:()=>Je(p),$getRange:()=>{if($)return E;let[_,g]=le(L(0,J()));return S&&(_=T(_,S[0]),g=L(g,S[1])),I!==de&&(_-=L(0,n)),I!==me&&(g+=L(0,n)),E=[L(_,0),T(g,p._length-1)]},$findStartIndex:()=>v(p,J()),$findEndIndex:()=>v(p,J()+s),$isUnmeasuredItem:_=>p._sizes[_]===y,_hasUnmeasuredItemsInFrozenRange:()=>S?p._sizes.slice(L(0,S[0]-1),T(p._length-1,S[1]+1)+1).includes(y):!1,$getItemOffset:ue,$getItemSize:U,$getItemsLength:()=>p._length,$getScrollOffset:()=>f,$isScrolling:()=>I!==A,$getViewportSize:()=>s,$getStartSpacerSize:()=>c,$getTotalSize:X,$getJumpCount:()=>l,_flushJump:()=>($=u,u=0,[$,b===j||k()+s>=X()]),$subscribe:(_,g)=>{const D=[_,g];return G.add(D),()=>{G.delete(D)}},$update:(_,g)=>{let D,Q,z=0;switch(_){case H:{const w=$;$=0;const h=g-f,O=fe(h);!(w&&O<fe(w)+1)&&b===F&&(I=h<0?me:de),m&&(S=R,m=!1),f=g,z=Fe;const P=k();P>=-s&&P<=X()&&(z+=N,Q=O>s);break}case be:{z=Be,I!==A&&(D=!0,z+=N),I=A,b=F,S=R;break}case ne:{const w=g.filter(([h,O])=>p._sizes[h]!==O);if(!w.length)break;Z(w.reduce((h,[O,W])=>((b===j||(S?O<S[0]:ue(O)+(I===A&&b===F?U(O):0)<k()))&&(h+=W-U(O)),h),0));for(const[h,O]of w){const W=U(h),P=Ne(p,h,O);a&&(ce+=P?O:O-W)}a&&s&&ce>s&&(Z(Ve(p,v(p,J()))),a=!1),z=N+K,Q=!0;break}case re:{s!==g&&(s=g,z=N+K);break}case Pe:{g[1]?(Z(ae(p,g[0],!0)),b=j,z=N):ae(p,g[0]);break}case Oe:{c=g;break}case oe:{b=We;break}case ie:{S=le(g),z=N;break}}z&&(o=[],D&&d&&(u+=d,d=0,l++),G.forEach(([w,h])=>{z&w&&h(Q)}))}}},x=setTimeout,Ke=(e,t)=>{let n;const r=()=>{n!=R&&clearTimeout(n)},i=()=>{r(),n=x(()=>{n=R,e()},t)};return i._cancel=r,i},C=(e,t)=>t&&se()?-e:e,ze=(e,t,n,r,i,a)=>{const m=Date.now;let o=0,s=!1,c=!1,f=!1,l=!1;const u=Ke(()=>{if(s||c){s=!1,u();return}f=!1,e.$update(be)},150),d=()=>{o=m(),f&&(l=!0),a&&e.$update(Oe,a()),e.$update(H,r()),u()},$=S=>{if(s||!e.$isScrolling()||S.ctrlKey)return;const E=m()-o;150>E&&50<E&&(n?S.deltaX:S.deltaY)&&(s=!0)},I=()=>{c=!0,f=l=!1},b=()=>{c=!1,$e()&&(f=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",$,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",$),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",b),u._cancel()},_fixScrollJump:()=>{const[S,E]=e._flushJump();S&&(i(C(S,n),E,l),l=!1,E&&e.$getViewportSize()>e.$getTotalSize()&&e.$update(H,r()))}}},Ge=(e,t)=>{let n,r,i;const a=t?"scrollLeft":"scrollTop",m=t?"overflowX":"overflowY",o=async(s,c)=>{if(!n){pe(()=>o(s,c));return}i&&i();const f=()=>{let l;return[new Promise((u,d)=>{l=u,i=d,he(e)&&x(d,150)}),e.$subscribe(K,()=>{l&&l()})]};if(c&&Ie()){for(;e.$update(ie,s()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,u]=f();try{await l}catch{return}finally{u()}}n.scrollTo({[t?"left":"top"]:C(s(),t),behavior:"smooth"})}else for(;;){const[l,u]=f();try{n[a]=C(s(),t),e.$update(oe),await l}catch{return}finally{u()}}};return{$observe(s){n=s,r=ze(e,s,t,()=>C(s[a],t),(c,f,l)=>{if(l){const u=s.style,d=u[m];u[m]="hidden",x(()=>{u[m]=d})}f?(s[a]=e.$getScrollOffset()+c,i&&i()):s[a]+=c})},$dispose(){r&&r._dispose()},$scrollTo(s){o(()=>s)},$scrollBy(s){s+=e.$getScrollOffset(),o(()=>s)},$scrollToIndex(s,{align:c,smooth:f,offset:l=0}={}){if(s=ee(s,0,e.$getItemsLength()-1),c==="nearest"){const u=e.$getItemOffset(s),d=e.$getScrollOffset();if(u<d)c="start";else if(u+e.$getItemSize(s)>d+e.$getViewportSize())c="end";else return}o(()=>l+e.$getStartSpacerSize()+e.$getItemOffset(s)+(c==="end"?e.$getItemSize(s)-e.$getViewportSize():c==="center"?(e.$getItemSize(s)-e.$getViewportSize())/2:0),f)},$fixScrollJump:()=>{r&&r._fixScrollJump()}}},Xe=(e,t)=>{let n,r,i;const a=(o,s,c,f,l=0)=>{const u=f?"offsetLeft":"offsetTop",d=l+(f&&se()?c.innerWidth-o[u]-o.offsetWidth:o[u]),$=o.offsetParent;return o===s||!$?d:a($,s,c,f,d)},m=async(o,s)=>{if(!n){pe(()=>m(o,s));return}i&&i();const c=()=>{let l;return[new Promise((u,d)=>{l=u,i=d,he(e)&&x(d,150)}),e.$subscribe(K,()=>{l&&l()})]},f=V(M(n));if(s&&Ie()){for(;e.$update(ie,o()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,u]=c();try{await l}catch{return}finally{u()}}f.scroll({[t?"left":"top"]:C(o(),t),behavior:"smooth"})}else for(;;){const[l,u]=c();try{f.scroll({[t?"left":"top"]:C(o(),t)}),e.$update(oe),await l}catch{return}finally{u()}}};return{$observe(o){n=o;const s=t?"scrollX":"scrollY",c=M(o),f=V(c),l=c.body;r=ze(e,f,t,()=>C(f[s],t),(u,d)=>{d?f.scroll({[t?"left":"top"]:e.$getScrollOffset()+u}):f.scrollBy(t?u:0,t?0:u)},()=>a(o,l,f,t))},$dispose(){r&&r._dispose(),n=void 0},$fixScrollJump:()=>{r&&r._fixScrollJump()},$scrollToIndex(o,{align:s,smooth:c,offset:f=0}={}){if(!n)return;if(o=ee(o,0,e.$getItemsLength()-1),s==="nearest"){const d=e.$getItemOffset(o),$=e.$getScrollOffset();if(d<$)s="start";else if(d+e.$getItemSize(o)>$+e.$getViewportSize())s="end";else return}const l=M(n),u=V(l);m(()=>{const d=a(n,l.body,u,t),$=u.innerHeight-l.documentElement.clientHeight,I=u.innerHeight-l.documentElement.clientWidth,b=s==="end"||s==="center"?t?I:$:0;return f+d+e.$getItemOffset(o)+(s==="end"?e.$getItemSize(o)-(e.$getViewportSize()-b):s==="center"?(e.$getItemSize(o)-(e.$getViewportSize()-b))/2:0)},c)}}},Le=e=>{let t;return{_observe(n){(t||(t=new(V(M(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},Ze=(e,t)=>{let n;const r=t?"width":"height",i=new WeakMap,a=Le(m=>{const o=[];for(const{target:s,contentRect:c}of m)if(s.offsetParent)if(s===n)e.$update(re,c[r]);else{const f=i.get(s);f!=R&&o.push([f,c[r]])}o.length&&e.$update(ne,o)});return{$observeRoot(m){a._observe(n=m)},$observeItem:(m,o)=>(i.set(m,o),a._observe(m),()=>{i.delete(m),a._unobserve(m)}),$dispose:a._dispose}},Qe=(e,t)=>{const n=t?"width":"height",r=t?"innerWidth":"innerHeight",i=new WeakMap,a=Le(o=>{const s=[];for(const{target:c,contentRect:f}of o){if(!c.offsetParent)continue;const l=i.get(c);l!=R&&s.push([l,f[n]])}s.length&&e.$update(ne,s)});let m;return{$observeRoot(o){const s=V(M(o)),c=()=>{e.$update(re,s[r])};s.addEventListener("resize",c),c(),m=()=>{s.removeEventListener("resize",c)}},$observeItem:(o,s)=>(i.set(o,s),a._observe(o),()=>{i.delete(o),a._unobserve(o)}),$dispose(){m&&m(),a._dispose()}}},je=e=>{let t;e=Ee({_as:"div"},e),we(()=>{t&&Se(e._resizer(t,e._index))});const n=_e(()=>{const r=e._isHorizontal,i={position:"absolute",[r?"height":"width"]:"100%",[r?"top":"left"]:"0px",[r?se()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return r&&(i.display="flex"),i});return ve(Re,{get component(){return e._as},ref(r){var i=t;typeof i=="function"?i(r):t=r},get style(){return n()},get children(){return e._children}})},He=e=>{let t=new Map;return Se(()=>{for(const n of t.values())n._dispose()}),_e(()=>{const n=e._each,[r,i]=e._range,a=new Map,m=[];for(let o=r;o<=i;o++){const s=n[o],c=t.get(o);m.push(c?c._element:Te(f=>{const l=Ce(s),u=e._render(l[0],o);return a.set(o,{_data:l,_element:u,_dispose:f}),u})),c&&(s!==c._data&&c._data[1](s),a.set(o,c))}for(const[o,s]of t.entries())a.has(o)||s._dispose();return t=a,m})},et=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{Pe as A,je as L,He as R,N as U,Fe as a,Be as b,qe as c,Ze as d,Ge as e,Oe as f,Ye as g,Qe as h,et as i,Xe as j};