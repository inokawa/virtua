import{m as be,k as he,h as le,d as ze,D as Le,l as ce,p as ve,c as Ee}from"./web-BB0IMLXK.js";const T=Math.min,v=Math.max,re=Math.abs,K=setTimeout,ue=(e,t,s)=>T(s,v(t,e)),G=e=>e!=null,Re=e=>[...e].sort((t,s)=>t-s),Te=e=>{const t=Re(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},we=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Ce=(e,t)=>{let s;const n=()=>{G(s)&&clearTimeout(s)},l=()=>{n(),s=K(()=>{s=null,e()},t)};return l._cancel=n,l},X=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},w=-1,V=(e,t,s)=>{const n=s?"unshift":"push";for(let l=0;l<t;l++)e[n](w);return e},P=(e,t)=>{const s=e._sizes[t];return s===w?e._defaultItemSize:s},Ae=(e,t,s)=>{const n=e._sizes[t]===w;return e._sizes[t]=s,e._computedOffsetIndex=T(t,e._computedOffsetIndex),n},Z=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=P(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},ye=e=>e._length?Z(e,e._length-1)+P(e,e._length-1):0,oe=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=Z(e,s);if(n<=t){if(n+P(e,s)>t)break;s++}else s--}return ue(s,0,e._length-1)},Me=(e,t,s,n)=>{const l=oe(e,t,T(s,e._length-1));return[l,oe(e,t+n,l)]},ke=(e,t)=>{let s=0;const n=e._sizes.filter((c,u)=>{const i=c!==w;return i&&u<t&&s++,i}),l=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Te(n))-l)*v(t-s,0)},De=(e,t,s)=>({_defaultItemSize:t,_sizes:V([],e),_length:e,_computedOffsetIndex:-1,_offsets:V([],e)}),Ne=e=>[[...e._sizes],e._defaultItemSize],ie=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:T(t-1,e._computedOffsetIndex),e._length=t,n>0?(V(e._offsets,n),V(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((l,c)=>l-(c===w?e._defaultItemSize:c),0))},Je=typeof window<"u",fe=()=>document.documentElement,$=e=>e.ownerDocument,j=e=>e.defaultView,Q=X(()=>Je?getComputedStyle(fe()).direction==="rtl":!1),_e=X(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ve=X(()=>"scrollBehavior"in fe().style),A=0,ae=1,de=2,J=0,Pe=1,F=2,Y=1,me=2,H=3,ee=4,Ue=5,Se=6,ge=7,pe=8,C=1,q=2,We=4,xe=8,Fe=e=>v(e._getTotalSize(),e._getViewportSize()),Ke=(e,t,s,n,l)=>(n!==ae&&(e-=v(0,s)),n!==de&&(t+=v(0,s)),[v(e,0),T(t,l-1)]),Ye=(e,t=40,s=0,n,l=!1)=>{let c=!!s,u=[],i=0,r=0,o=0,a=0,f=0,_=0,d=0,O=A,I=J,S=c?[0,v(s-1,0)]:null,g=[0,0],E=0;const p=De(e,t),U=new Set,W=()=>o-r,te=m=>Me(p,m,g[0],i),se=()=>ye(p),ne=m=>Z(p,m)-_,k=m=>P(p,m),x=m=>{m&&(_e()&&O!==A?_+=m:(f+=m,a++))};return{_getStateVersion(){return u},_getCacheSnapshot(){return Ne(p)},_getRange(){return d?g:(g=te(v(0,W()+_+f)),S?[T(g[0],S[0]),v(g[1],S[1])]:g)},_isUnmeasuredItem(m){return p._sizes[m]===w},_hasUnmeasuredItemsInFrozenRange(){return S?p._sizes.slice(v(0,S[0]-1),T(p._length-1,S[1]+1)+1).includes(w):!1},_getItemOffset:ne,_getItemSize:k,_getItemsLength(){return p._length},_getScrollOffset(){return o},_getScrollDirection(){return O},_getViewportSize(){return i},_getStartSpacerSize(){return r},_getTotalSize:se,_getJumpCount(){return a},_flushJump(){return d=f,f=0,[d,I===F]},_subscribe(m,b){const y=[m,b];return U.add(y),()=>{U.delete(y)}},_update(m,b){let y,B,L=0;switch(m){case Y:{const R=d;d=0;const h=b-o,z=re(h);!(R&&z<re(R)+1)&&I===J&&(O=h<0?de:ae),c&&(S=null,c=!1),o=b,L=We;const N=W();N>=-i&&N<=se()&&(L+=C,B=z>i);break}case me:{L=xe,O!==A&&(y=!0,L+=C),O=A,I=J,S=null;break}case H:{const R=b.filter(([h,z])=>p._sizes[h]!==z);if(!R.length)break;x(R.reduce((h,[z,D])=>((I===F||(S?z<S[0]:ne(z)+(O===A&&I===J?k(z):0)<W()))&&(h+=D-k(z)),h),0));for(const[h,z]of R){const D=k(h),N=Ae(p,h,z);l&&(E+=z,N||(E-=D))}l&&i&&E>i&&(x(ke(p,g[0])),l=!1),L=C+q,B=!0;break}case ee:{i!==b&&(i=b,L=C+q);break}case Ue:{b[1]?(x(ie(p,b[0],!0)),I=F,L=C):ie(p,b[0]);break}case Se:{r=b;break}case ge:{I=Pe;break}case pe:{S=te(b),L=C;break}}L&&(u=[],y&&_&&(f+=_,_=0,a++),U.forEach(([R,h])=>{L&R&&h(B)}))}}},Ie=e=>{let t;return{_observe(s){(t||(t=new(j($(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},qe=(e,t)=>{let s;const n=t?"width":"height",l=new WeakMap,c=Ie(u=>{const i=[];for(const{target:r,contentRect:o}of u)if(r.offsetParent)if(r===s)e._update(ee,o[n]);else{const a=l.get(r);G(a)&&i.push([a,o[n]])}i.length&&e._update(H,i)});return{_observeRoot(u){c._observe(s=u)},_observeItem:(u,i)=>(l.set(u,i),c._observe(u),()=>{l.delete(u),c._unobserve(u)}),_dispose:c._dispose}},Ge=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",l=new WeakMap,c=Ie(i=>{const r=[];for(const{target:o,contentRect:a}of i){if(!o.offsetParent)continue;const f=l.get(o);G(f)&&r.push([f,a[s]])}r.length&&e._update(H,r)});let u;return{_observeRoot(i){const r=j($(i)),o=()=>{e._update(ee,r[n])};r.addEventListener("resize",o),o(),u=()=>{r.removeEventListener("resize",o)}},_observeItem:(i,r)=>(l.set(i,r),c._observe(i),()=>{l.delete(i),c._unobserve(i)}),_dispose(){u&&u(),c._dispose()}}},M=(e,t)=>t&&Q()?-e:e,Oe=(e,t,s,n,l,c)=>{const u=Date.now;let i=0,r=!1,o=!1,a=!1,f=!1;const _=Ce(()=>{if(r||o){r=!1,_();return}a=!1,e._update(me)},150),d=()=>{i=u(),a&&(f=!0),c&&e._update(Se,c()),e._update(Y,n()),_()},O=g=>{if(r||e._getScrollDirection()===A||g.ctrlKey)return;const E=u()-i;150>E&&50<E&&(s?g.deltaX:g.deltaY)&&(r=!0)},I=()=>{o=!0,a=f=!1},S=()=>{o=!1,_e()&&(a=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",O,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",O),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",S),_._cancel()},_fixScrollJump:()=>{const[g,E]=e._flushJump();g&&(l(M(g,s),E,f),f=!1,E&&e._getViewportSize()>e._getTotalSize()&&e._update(Y,n()))}}},Xe=(e,t)=>{let s,n,l;const c=t?"scrollLeft":"scrollTop",u=t?"overflowX":"overflowY",i=async(r,o)=>{if(!s){we(()=>i(r,o));return}l&&l();const a=()=>{let f;return[new Promise((_,d)=>{f=_,K(l=d,150)}),e._subscribe(q,()=>{f&&f()})]};if(o&&Ve()){for(;e._update(pe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,_]=a();try{await f}catch{return}finally{_()}}s.scrollTo({[t?"left":"top"]:M(r(),t),behavior:"smooth"})}else for(;;){const[f,_]=a();try{s[c]=M(r(),t),e._update(ge),await f}catch{return}finally{_()}}};return{_observe(r){s=r,n=Oe(e,r,t,()=>M(r[c],t),(o,a,f)=>{if(f){const _=r.style,d=_[u];_[u]="hidden",K(()=>{_[u]=d})}a?(r[c]=e._getScrollOffset()+o,l&&l()):r[c]+=o})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:o,smooth:a,offset:f=0}={}){if(r=ue(r,0,e._getItemsLength()-1),o==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)o="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())o="end";else return}i(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(o==="end"?e._getItemSize(r)-e._getViewportSize():o==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),a)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ze=(e,t)=>{let s;return{_observe(n){const l=t?"scrollX":"scrollY",c=$(n),u=j(c),i=c.body,r=(o,a,f,_=0)=>{const d=f?"offsetLeft":"offsetTop",O=_+(f&&Q()?u.innerWidth-o[d]-o.offsetWidth:o[d]),I=o.offsetParent;return o===a||!I?O:r(I,a,f,O)};s=Oe(e,u,t,()=>M(u[l],t),(o,a)=>{a?u.scroll({[t?"left":"top"]:e._getScrollOffset()+o}):u.scrollBy(t?o:0,t?0:o)},()=>r(n,i,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},$e=e=>{let t;e=be({_as:"div"},e),he(()=>{t&&ce(e._resizer(t,e._index))});const s=le(()=>{const n=e._isHorizontal,l={margin:0,padding:0,position:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:"0px",[n?Q()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return n&&(l.display="flex"),l});return ze(Le,{get component(){return e._as},ref(n){var l=t;typeof l=="function"?l(n):t=n},get style(){return s()},get children(){return e._children}})},je=e=>{let t=new Map;return ce(()=>{for(const s of t.values())s._dispose()}),le(()=>{const s=e._each,[n,l]=e._range,c=new Map,u=[];for(let i=n;i<=l;i++){const r=s[i],o=t.get(i);u.push(o?o._element:ve(a=>{const f=Ee(r),_=e._render(f[0],i);return c.set(i,{_data:f,_element:_,_dispose:a}),_})),o&&(r!==o._data&&o._data[1](r),c.set(i,o))}for(const[i,r]of t.entries())c.has(i)||r._dispose();return t=c,u})},Qe=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{Ue as A,$e as L,je as R,A as S,C as U,We as a,xe as b,Ye as c,qe as d,Fe as e,Xe as f,Ke as g,G as h,Qe as i,Ge as j,Ze as k};
