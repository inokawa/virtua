import{i as Ee,e as ae,j as Re,k as Te,t as we,l as de,u as Ce,p as ye,q as ke,v as Me,c as Ae}from"./web-DwhiH2Oy.js";const C=Math.min,v=Math.max,ue=Math.abs,$=setTimeout,X=(e,t,s)=>C(s,v(t,e)),Z=e=>e!=null,De=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Je=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Ne=(e,t)=>{let s;const n=()=>{Z(s)&&clearTimeout(s)},o=()=>{n(),s=$(()=>{s=null,e()},t)};return o._cancel=n,o},G=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,U=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},P=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},Ve=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=C(t,e._computedOffsetIndex),n},j=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=P(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},xe=e=>e._length?j(e,e._length-1)+P(e,e._length-1):0,ce=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=j(e,s);if(n<=t){if(n+P(e,s)>t)break;s++}else s--}return X(s,0,e._length-1)},Ue=(e,t,s,n)=>{const o=ce(e,t,C(s,e._length-1));return[o,ce(e,t+n,o)]},Pe=(e,t)=>{let s=0;const n=e._sizes.filter((c,_)=>{const l=c!==y;return l&&_<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=De(n))-o)*v(t-s,0)},We=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s?s[0]:U([],e),_length:e,_computedOffsetIndex:-1,_offsets:U([],e)}),Be=e=>[[...e._sizes],e._defaultItemSize],fe=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:C(t-1,e._computedOffsetIndex),e._length=t,n>0?(U(e._offsets,n),U(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,c)=>o-(c===y?e._defaultItemSize:c),0))},Ke=typeof window<"u",me=()=>document.documentElement,Q=e=>e.ownerDocument,H=e=>e.defaultView,ee=G(()=>Ke?getComputedStyle(me()).direction==="rtl":!1),Se=G(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Fe=G(()=>"scrollBehavior"in me().style),Ye=1.5,M=0,pe=1,ge=2,x=0,$e=1,_e=2,te=1,se=2,qe=3,Oe=4,Ie=5,be=6,Le=7,k=1,q=2,Xe=4,Ze=8,Qe=e=>v(e._getTotalSize(),e._getViewportSize()),He=(e,t,s,n,o)=>(n!==pe&&(e-=v(0,s)),n!==ge&&(t+=v(0,s)),[v(e,0),C(t,o-1)]),et=(e,t=40,s=0,n,o=!1,c=0,_=0)=>{let l=!!s,r=[],i=0,u=0,f=0,a=0,d=0,z=!1,b=0,S=M,O=x,I=l?[0,v(s-1,0)]:null,T=[0,0],W=0;const p=We(e,t,n),B=new Set,ne=m=>Ue(p,m,T[0],i),re=()=>xe(p),oe=()=>re()+c+_,ze=()=>u-c,le=()=>v(0,oe()-i),ie=m=>j(p,m)-d,N=m=>P(p,m),K=m=>{m&&(Se()&&S!==M?d+=m:(a+=m,f++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return Be(p)},_getRange(){return b?T:(T=ne(ze()+d+a),I?[C(T[0],I[0]),v(T[1],I[1])]:T)},_isUnmeasuredItem(m){return p._sizes[m]===y},_hasUnmeasuredItemsInFrozenRange(){return I?p._sizes.slice(v(0,I[0]-1),C(p._length-1,I[1]+1)+1).includes(y):!1},_getItemOffset:ie,_getItemSize:N,_getItemsLength(){return p._length},_getScrollOffset(){return u},_getScrollDirection(){return S},_getViewportSize(){return i},_getStartSpacerSize(){return c},_getTotalSize:re,_getJumpCount(){return f},_flushJump(){const m=a,g=z;return a=0,z=!1,i>oe()?[0,!1]:[b=m,g]},_subscribe(m,g){const A=[m,g];return B.add(A),()=>{B.delete(A)}},_update(m,g){let A,F,E=0;switch(m){case te:{const R=g.filter(([L,h])=>p._sizes[L]!==h);if(!R.length)break;let w=!1,D=!1;O===_e?u>le()-Ye&&(D=!0):w=!0,K(R.reduce((L,[h,Y])=>{if(!w||(I?h<I[0]:ie(h)+(S===M&&O===x?N(h):0)<u)){const V=Y-N(h);(!D||V>0)&&(L+=V)}return L},0));for(const[L,h]of R){const Y=N(L),V=Ve(p,L,h);o&&(W+=h,V||(W-=Y))}o&&i&&W>i&&(K(Pe(p,T[0])),o=!1),E=k+q,F=!0;break}case se:{i!==g&&(i=g,E=k+q);break}case qe:{g[1]?(K(fe(p,g[0],!0)),O=_e,z=!0,E=k):fe(p,g[0]);break}case Oe:{const R=X(g,0,le()),w=b;if(b=0,R===u)break;const D=R-u,L=ue(D);!(w&&L<ue(w)+1)&&O===x&&(S=D<0?ge:pe),l&&(I=null,l=!1),F=L>i,u=R,E=k+Xe;break}case Ie:{E=Ze,S!==M&&(A=!0,E+=k),S=M,O=x,I=null;break}case be:{O=$e;break}case Le:{I=ne(g),E=k;break}}E&&(r=[],A&&d&&(a+=d,d=0,f++),B.forEach(([R,w])=>{E&R&&w(F)}))}}},he=e=>{let t;return{_observe(s){(t||(t=new(H(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},tt=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=he(_=>{const l=[];for(const{target:r,contentRect:i}of _)if(r.offsetParent)if(r===s)e._update(se,i[n]);else{const u=o.get(r);Z(u)&&l.push([u,i[n]])}l.length&&e._update(te,l)});return{_observeRoot(_){c._observe(s=_)},_observeItem:(_,l)=>(o.set(_,l),c._observe(_),()=>{o.delete(_),c._unobserve(_)}),_dispose:c._dispose}},st=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=he(l=>{const r=[];for(const{target:i,contentRect:u}of l){if(!i.offsetParent)continue;const f=o.get(i);Z(f)&&r.push([f,u[s]])}r.length&&e._update(te,r)});let _;return{_observeRoot(l){const r=H(Q(l)),i=()=>{e._update(se,r[n])};r.addEventListener("resize",i),i(),_=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),c._observe(l),()=>{o.delete(l),c._unobserve(l)}),_dispose(){_&&_(),c._dispose()}}},J=(e,t)=>t&&ee()?-e:e,ve=(e,t,s,n,o)=>{const c=Date.now;let _=0,l=!1,r=!1,i=!1,u=!1;const f=Ne(()=>{if(l||r){l=!1,f();return}i=!1,e._update(Ie)},150),a=()=>{_=c(),i&&(u=!0),e._update(Oe,n()),f()},d=S=>{if(l||e._getScrollDirection()===M||S.ctrlKey)return;const O=c()-_;150>O&&50<O&&(s?S.deltaX:S.deltaY)&&(l=!0)},z=()=>{r=!0,i=u=!1},b=()=>{r=!1,Se()&&(i=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",d,{passive:!0}),t.addEventListener("touchstart",z,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",d),t.removeEventListener("touchstart",z),t.removeEventListener("touchend",b),f._cancel()},_fixScrollJump:()=>{const[S,O]=e._flushJump();S&&(o(J(S,s),O,u),u=!1)}}},nt=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){Je(()=>l(r,i));return}o&&o();const u=()=>{let f;return[new Promise((a,d)=>{f=a,$(o=d,150)}),e._subscribe(q,()=>{f&&f()})]};if(i&&Fe()){for(;e._update(Le,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,a]=u();try{await f}catch{return}finally{a()}}s.scrollTo({[t?"left":"top"]:J(r(),t),behavior:"smooth"})}else for(;;){const[f,a]=u();try{s[c]=J(r(),t),e._update(be),await f}catch{return}finally{a()}}};return{_observe(r){s=r,n=ve(e,r,t,()=>J(r[c],t),(i,u,f)=>{if(f){const a=r.style,d=a[_];a[_]="hidden",$(()=>{a[_]=d})}u?(r[c]=e._getScrollOffset()+i,o&&o()):r[c]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:u,offset:f=0}={}){if(r=X(r,0,e._getItemsLength()-1),i==="nearest"){const a=e._getItemOffset(r),d=e._getScrollOffset();if(a<d)i="start";else if(a+e._getItemSize(r)>d+e._getViewportSize())i="end";else return}l(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),u)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},rt=(e,t)=>{let s;return{_observe(n){let o=0;const c=t?"scrollX":"scrollY",_=Q(n),l=H(_),r=_.body,i=(u,f,a,d=0)=>{const z=a?"offsetLeft":"offsetTop",b=d+(a&&ee()?l.innerWidth-u[z]-u.offsetWidth:u[z]),S=u.offsetParent;return u===f||!S?b:i(S,f,a,b)};s=ve(e,l,t,()=>J(l[c],t)-(o=i(n,r,t)),(u,f)=>{f?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+u}):l.scrollBy(t?u:0,t?0:u)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};var Ge=we("<div>");const ot=e=>{let t;Ee(()=>{t&&de(e._resizer(t,e._index))});const s=ae(()=>{const n=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[n?"height":"width"]:"100%",[n?"top":"left"]:"0px",[n?ee()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return n&&(o.display="flex"),o});return(()=>{var n=Ge(),o=t;return typeof o=="function"?Ce(o,n):t=n,Re(n,()=>e._children),Te(c=>ye(n,s(),c)),n})()},lt=e=>{let t=new Map;return de(()=>{for(const s of t.values())s._dispose()}),ae(()=>{const s=e._each,[n,o]=e._range,c=new Map,_=[];return ke(()=>{for(let l=n;l<=o;l++){const r=s[l],i=t.get(l);_.push(i?i._element:Me(u=>{const f=Ae(r),a=e._render(f[0](),l);return c.set(l,{_data:f,_element:a,_dispose:u}),a})),i&&(r!==i._data&&i._data[1](r),c.set(l,i))}for(const[l,r]of t.entries())c.has(l)||r._dispose();return t=c,_})})},it=(e,t)=>e[0]===t[0]&&e[1]===t[1];export{qe as A,ot as L,lt as R,M as S,k as U,Xe as a,Ze as b,et as c,tt as d,Z as e,Qe as f,He as g,nt as h,it as i,st as j,rt as k};