import{m as be,k as ze,h as le,d as Le,D as he,l as ce,p as ve,c as Ee}from"./web-COM3HHJ7.js";const T=null,{min:w,max:v,abs:re}=Math,q=setTimeout,ue=(e,t,s)=>w(s,v(t,e)),Re=e=>[...e].sort((t,s)=>t-s),Te=e=>{const t=Re(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},we=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Ce=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},l=()=>{n(),s=q(()=>{s=T,e()},t)};return l._cancel=n,l},Z=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},C=-1,P=(e,t,s)=>{const n=s?"unshift":"push";for(let l=0;l<t;l++)e[n](C);return e},W=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},Ae=(e,t,s)=>{const n=e._sizes[t]===C;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),n},$=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=W(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},ye=e=>e._length?$(e,e._length-1)+W(e,e._length-1):0,oe=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=$(e,s);if(n<=t){if(n+W(e,s)>t)break;s++}else s--}return ue(s,0,e._length-1)},De=(e,t,s,n)=>{const l=oe(e,t,w(s,e._length-1));return[l,oe(e,t+n,l)]},Me=(e,t)=>{let s=0;const n=e._sizes.filter((c,u)=>{const o=c!==C;return o&&u<t&&s++,o}),l=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Te(n))-l)*v(t-s,0)},Ne=(e,t,s)=>({_defaultItemSize:t,_sizes:P([],e),_length:e,_computedOffsetIndex:-1,_offsets:P([],e)}),ke=e=>[[...e._sizes],e._defaultItemSize],ie=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,n>0?(P(e._offsets,n),P(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((l,c)=>l-(c===C?e._defaultItemSize:c),0))},Je=typeof window<"u",fe=()=>document.documentElement,Q=e=>e.ownerDocument,j=e=>e.defaultView,H=Z(()=>Je?getComputedStyle(fe()).direction==="rtl":!1),_e=Z(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ve=Z(()=>"scrollBehavior"in fe().style),y=0,ae=1,de=2,U=0,Ue=1,Y=2,G=1,me=2,ee=3,te=4,Pe=5,Se=6,ge=7,pe=8,A=1,X=2,We=4,xe=8,Fe=e=>v(e._getTotalSize(),e._getViewportSize()),Ke=(e,t,s,n,l)=>(n!==ae&&(e-=v(0,s)),n!==de&&(t+=v(0,s)),[v(e,0),w(t,l-1)]),Ye=(e,t=40,s=0,n,l=!1)=>{let c=!!s,u=[],o=0,r=0,i=0,a=0,f=0,_=0,d=0,b=y,I=U,S=c?[0,v(s-1,0)]:T,g=[0,0],E=0;const p=Ne(e,t),x=new Set,N=()=>i-r,se=m=>De(p,m,g[0],o),B=()=>ye(p),ne=m=>$(p,m)-_,k=m=>W(p,m),F=m=>{m&&(_e()&&b!==y?_+=m:(f+=m,a++))};return{_getStateVersion(){return u},_getCacheSnapshot(){return ke(p)},_getRange(){return d?g:(g=se(v(0,N()+_+f)),S?[w(g[0],S[0]),v(g[1],S[1])]:g)},_isUnmeasuredItem(m){return p._sizes[m]===C},_isInitialMeasurementDone(){return!!o},_hasUnmeasuredItemsInFrozenRange(){return S?p._sizes.slice(v(0,S[0]-1),w(p._length-1,S[1]+1)+1).includes(C):!1},_getItemOffset:ne,_getItemSize:k,_getItemsLength(){return p._length},_getScrollOffset(){return i},_getScrollDirection(){return b},_getViewportSize(){return o},_getStartSpacerSize(){return r},_getTotalSize:B,_getJumpCount(){return a},_flushJump(){return d=f,f=0,[d,I===Y||N()+o>=B()]},_subscribe(m,z){const D=[m,z];return x.add(D),()=>{x.delete(D)}},_update(m,z){let D,K,h=0;switch(m){case G:{const R=d;d=0;const L=z-i,O=re(L);!(R&&O<re(R)+1)&&I===U&&(b=L<0?de:ae),c&&(S=T,c=!1),i=z,h=We;const V=N();V>=-o&&V<=B()&&(h+=A,K=O>o);break}case me:{h=xe,b!==y&&(D=!0,h+=A),b=y,I=U,S=T;break}case ee:{const R=z.filter(([L,O])=>p._sizes[L]!==O);if(!R.length)break;F(R.reduce((L,[O,J])=>((I===Y||(S?O<S[0]:ne(O)+(b===y&&I===U?k(O):0)<N()))&&(L+=J-k(O)),L),0));for(const[L,O]of R){const J=k(L),V=Ae(p,L,O);l&&(E+=V?O:O-J)}l&&o&&E>o&&(F(Me(p,g[0])),l=!1),h=A+X,K=!0;break}case te:{o!==z&&(o=z,h=A+X);break}case Pe:{z[1]?(F(ie(p,z[0],!0)),I=Y,h=A):ie(p,z[0]);break}case Se:{r=z;break}case ge:{I=Ue;break}case pe:{S=se(z),h=A;break}}h&&(u=[],D&&_&&(f+=_,_=0,a++),x.forEach(([R,L])=>{h&R&&L(K)}))}}},Ie=e=>{let t;return{_observe(s){(t||(t=new(j(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},qe=(e,t)=>{let s;const n=t?"width":"height",l=new WeakMap,c=Ie(u=>{const o=[];for(const{target:r,contentRect:i}of u)if(r.offsetParent)if(r===s)e._update(te,i[n]);else{const a=l.get(r);a!=T&&o.push([a,i[n]])}o.length&&e._update(ee,o)});return{_observeRoot(u){c._observe(s=u)},_observeItem:(u,o)=>(l.set(u,o),c._observe(u),()=>{l.delete(u),c._unobserve(u)}),_dispose:c._dispose}},Ge=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",l=new WeakMap,c=Ie(o=>{const r=[];for(const{target:i,contentRect:a}of o){if(!i.offsetParent)continue;const f=l.get(i);f!=T&&r.push([f,a[s]])}r.length&&e._update(ee,r)});let u;return{_observeRoot(o){const r=j(Q(o)),i=()=>{e._update(te,r[n])};r.addEventListener("resize",i),i(),u=()=>{r.removeEventListener("resize",i)}},_observeItem:(o,r)=>(l.set(o,r),c._observe(o),()=>{l.delete(o),c._unobserve(o)}),_dispose(){u&&u(),c._dispose()}}},M=(e,t)=>t&&H()?-e:e,Oe=(e,t,s,n,l,c)=>{const u=Date.now;let o=0,r=!1,i=!1,a=!1,f=!1;const _=Ce(()=>{if(r||i){r=!1,_();return}a=!1,e._update(me)},150),d=()=>{o=u(),a&&(f=!0),c&&e._update(Se,c()),e._update(G,n()),_()},b=g=>{if(r||e._getScrollDirection()===y||g.ctrlKey)return;const E=u()-o;150>E&&50<E&&(s?g.deltaX:g.deltaY)&&(r=!0)},I=()=>{i=!0,a=f=!1},S=()=>{i=!1,_e()&&(a=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",b,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",b),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",S),_._cancel()},_fixScrollJump:()=>{const[g,E]=e._flushJump();g&&(l(M(g,s),E,f),f=!1,E&&e._getViewportSize()>e._getTotalSize()&&e._update(G,n()))}}},Xe=(e,t)=>{let s,n,l;const c=t?"scrollLeft":"scrollTop",u=t?"overflowX":"overflowY",o=async(r,i)=>{if(!s){we(()=>o(r,i));return}l&&l();const a=()=>{let f;return[new Promise((_,d)=>{f=_,l=d,e._isInitialMeasurementDone()&&q(d,150)}),e._subscribe(X,()=>{f&&f()})]};if(i&&Ve()){for(;e._update(pe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,_]=a();try{await f}catch{return}finally{_()}}s.scrollTo({[t?"left":"top"]:M(r(),t),behavior:"smooth"})}else for(;;){const[f,_]=a();try{s[c]=M(r(),t),e._update(ge),await f}catch{return}finally{_()}}};return{_observe(r){s=r,n=Oe(e,r,t,()=>M(r[c],t),(i,a,f)=>{if(f){const _=r.style,d=_[u];_[u]="hidden",q(()=>{_[u]=d})}a?(r[c]=e._getScrollOffset()+i,l&&l()):r[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){o(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),o(()=>r)},_scrollToIndex(r,{align:i,smooth:a,offset:f=0}={}){if(r=ue(r,0,e._getItemsLength()-1),i==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)i="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())i="end";else return}o(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),a)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ze=(e,t)=>{let s;return{_observe(n){const l=t?"scrollX":"scrollY",c=Q(n),u=j(c),o=c.body,r=(i,a,f,_=0)=>{const d=f?"offsetLeft":"offsetTop",b=_+(f&&H()?u.innerWidth-i[d]-i.offsetWidth:i[d]),I=i.offsetParent;return i===a||!I?b:r(I,a,f,b)};s=Oe(e,u,t,()=>M(u[l],t),(i,a)=>{a?u.scroll({[t?"left":"top"]:e._getScrollOffset()+i}):u.scrollBy(t?i:0,t?0:i)},()=>r(n,o,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},$e=e=>{let t;e=be({_as:"div"},e),ze(()=>{t&&ce(e._resizer(t,e._index))});const s=le(()=>{const n=e._isHorizontal,l={margin:0,padding:0,position:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:"0px",[n?H()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return n&&(l.display="flex"),l});return Le(he,{get component(){return e._as},ref(n){var l=t;typeof l=="function"?l(n):t=n},get style(){return s()},get children(){return e._children}})},Qe=e=>{let t=new Map;return ce(()=>{for(const s of t.values())s._dispose()}),le(()=>{const s=e._each,[n,l]=e._range,c=new Map,u=[];for(let o=n;o<=l;o++){const r=s[o],i=t.get(o);u.push(i?i._element:ve(a=>{const f=Ee(r),_=e._render(f[0],o);return c.set(o,{_data:f,_element:_,_dispose:a}),_})),i&&(r!==i._data&&i._data[1](r),c.set(o,i))}for(const[o,r]of t.entries())c.has(o)||r._dispose();return t=c,u})},je=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{Pe as A,$e as L,Qe as R,y as S,A as U,We as a,xe as b,Ye as c,qe as d,Fe as e,Xe as f,Ke as g,Se as h,je as i,Ge as j,Ze as k};
