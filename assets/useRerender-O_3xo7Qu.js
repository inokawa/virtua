import{r as U}from"./index-yp3VsGQP.js";const y=Math.min,L=Math.max,re=Math.abs,ze=Array.isArray,j=setTimeout,$=(e,t,s)=>y(s,L(t,e)),W=e=>e!=null,Le=e=>{const t=[...e].sort((n,c)=>n-c),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ve=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Re=(e,t)=>{let s;const n=()=>{W(s)&&clearTimeout(s)},c=()=>{n(),s=j(()=>{s=null,e()},t)};return c._cancel=n,c},Q=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},x=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let c=0;c<t;c++)e[n](x);return e},k=(e,t)=>{const s=e._sizes[t];return s===x?e._defaultItemSize:s},we=(e,t,s)=>{const n=e._sizes[t]===x;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},H=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=k(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Te=e=>e._length?H(e,e._length-1)+k(e,e._length-1):0,oe=(e,t,s)=>{let n=H(e,s);for(;s>=0&&s<e._length;)if(n<=t){const c=k(e,s);if(n+c>t)break;n+=c,s++}else n-=k(e,--s);return $(s,0,e._length-1)},ce=(e,t,s,n)=>{const c=oe(e,t,y(s,e._length-1));return[c,oe(e,t+n,c)]},Ce=(e,t)=>{let s=0;const n=e._sizes.filter((f,l)=>{const i=f!==x;return i&&l<t&&s++,i}),c=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Le(n))-c)*L(t-s,0)},ye=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:B([],e),_offsets:B([],e)}),ue=(e,t,s)=>{const n=t-e._length,c=n>0;let f;return c?(f=e._defaultItemSize*n,B(e._sizes,n,s),B(e._offsets,n)):(f=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((l,i)=>l+(i===x?e._defaultItemSize:i),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,[f,c]},fe=typeof window<"u",_e=()=>document.documentElement,ee=e=>e.ownerDocument,te=e=>e.defaultView,de=Q(()=>fe?getComputedStyle(_e()).direction==="rtl":!1),ae=Q(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ae=Q(()=>"scrollBehavior"in _e().style),xe=1.5,M=0,me=1,pe=2,G=0,Je=1,ie=2,P=1,V=2,Ne=3,Se=4,ge=5,Ie=6,Oe=7,K=1,Z=2,ke=4,De=8,Ve=e=>L(e._getTotalSize(),e._getViewportSize()),We=(e,t,s)=>L(e-(s===me?1:L(1,t)),0),Ke=(e,t,s,n)=>y(e+(s===pe?1:L(1,t)),n-1),X=(e,t,s)=>t.reduce((n,[c,f])=>{const l=f-k(e,c);return(!s||l>0)&&(n+=l),n},0),Ue=(e,t=40,s=0,n,c=!1,f=0,l=0)=>{let i=!!s,r=[],o=0,_=0,u=0,d=0,m=0,g=!1,S=0,a=M,O=G,I=i?[0,L(s-1,0)]:null,v=[0,0],J=0;const p=n||ye(e,t),C=new Set,A=()=>Te(p),ne=()=>A()+f+l,he=()=>_-f,F=()=>L(0,ne()-o),Y=b=>{ae()&&a!==M?m+=b:(d+=b,u++)};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(p))},_getRange(){return I?[y(v[0],I[0]),L(v[1],I[1])]:S?v:v=ce(p,he()+m+d,v[0],o)},_isUnmeasuredItem(b){return p._sizes[b]===x},_hasUnmeasuredItemsInFrozenRange(){return I?p._sizes.slice(L(0,I[0]-1),y(p._length-1,I[1]+1)+1).includes(x):!1},_getItemOffset(b){return H(p,b)-m},_getItemSize(b){return k(p,b)},_getItemsLength(){return p._length},_getScrollOffset(){return _},_getScrollDirection(){return a},_getViewportSize(){return o},_getStartSpacerSize(){return f},_getTotalSize:A,_getJumpCount(){return u},_flushJump(){const b=d,z=g;return d=0,g=!1,o>ne()?[0,!1]:[S=b,z]},_subscribe(b,z){const D=[b,z];return C.add(D),()=>{C.delete(D)}},_update(b,z){let D,q,w=0;switch(b){case P:{const E=z.filter(([R,T])=>p._sizes[R]!==T);if(!E.length)break;let h=0;if(_!==0)if(_>F()-xe)h=X(p,E,!0);else if(O===ie)h=X(p,E);else{const[R]=v;h=X(p,E.filter(([T])=>T<R))}h&&Y(h);for(const[R,T]of E)we(p,R,T)&&c&&(J+=T);c&&o&&J>o&&(Y(Ce(p,v[0])),c=!1),w=Z,q=!0;break}case V:{o!==z&&(o=z,w=Z);break}case Ne:{if(z[1]){const E=F()-_,[h,R]=ue(p,z[0],!0);Y(R?h:-y(h,E)),R&&(O=ie,g=!0),w=K}else ue(p,z[0]);break}case Se:{const E=$(z,0,F()),h=S;if(S=0,E===_)break;const R=E-_,T=re(R);!(h&&T<re(h)+1)&&O===G&&(a=R<0?pe:me),i&&(I=null,i=!1),q=T>o,_=E,w=K+ke;break}case ge:{w=De,a!==M&&(D=!0,w+=K),a=M,O=G,I=null;break}case Ie:{O=Je;break}case Oe:{I=ce(p,z,v[0],o),w=K;break}}w&&(r=[],D&&m&&(d+=m,m=0,u++),C.forEach(([E,h])=>{w&E&&h(q)}))}}},Be=fe?U.useLayoutEffect:U.useEffect,N=(e,t)=>t&&de()?-e:e,be=(e,t,s,n,c)=>{const f=Date.now;let l=0,i=!1,r=!1,o=!1,_=!1;const u=Re(()=>{if(i||r){i=!1,u();return}o=!1,e._update(ge)},150),d=()=>{l=f(),o&&(_=!0),e._update(Se,n()),u()},m=a=>{if(i||e._getScrollDirection()===M||a.ctrlKey)return;const O=f()-l;150>O&&50<O&&(s?a.deltaX:a.deltaY)&&(i=!0)},g=()=>{r=!0,o=_=!1},S=()=>{r=!1,ae()&&(o=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",S),u._cancel()},_fixScrollJump:()=>{const[a,O]=e._flushJump();if(a)return c(a,_),_=!1,O}}},Fe=(e,t)=>{let s,n,c;const f=t?"scrollLeft":"scrollTop",l=t?"overflowX":"overflowY",i=async(r,o)=>{if(!s){ve(()=>i(r,o));return}c&&c();const _=()=>{let u;return[new Promise((d,m)=>{u=d,j(c=m,150)}),e._subscribe(Z,()=>{u&&u()})]};if(o&&Ae()){for(;e._update(Oe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,d]=_();try{await u}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:N(r(),t),behavior:"smooth"})}else for(;;){const[u,d]=_();try{s[f]=N(r(),t),e._update(Ie),await u}catch{return}finally{d()}}};return{_observe(r){s=r,n=be(e,r,t,()=>N(r[f],t),(o,_)=>{if(_){const u=r.style,d=u[l];u[l]="hidden",j(()=>{u[l]=d})}r[f]+=N(o,t)})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:o,smooth:_}={}){if(r=$(r,0,e._getItemsLength()-1),o==="nearest"){const u=e._getItemOffset(r),d=e._getScrollOffset();if(u<d)o="start";else if(u+e._getItemSize(r)>d+e._getViewportSize())o="end";else return}i(()=>e._getStartSpacerSize()+(o==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():o==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),_)},_fixScrollJump:()=>{n&&n._fixScrollJump()&&c&&c()}}},Ye=(e,t)=>{let s;return{_observe(n){const c=t?"scrollX":"scrollY",f=ee(n),l=te(f),i=f.body,r=(o,_,u,d=0)=>{const m=u?"offsetLeft":"offsetTop",g=d+(u&&de()?l.innerWidth-o[m]-o.offsetWidth:o[m]),S=o.offsetParent;return o===_||!S?g:r(S,_,u,g)};s=be(e,l,t,()=>N(l[c],t)-r(n,i,t),o=>{l.scrollBy(t?N(o,t):0,t?0:o)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},le="current",Ee=(e,t)=>{if(ze(e))for(const s of e)Ee(s,t);else!W(e)||typeof e=="boolean"||t.push(e)},qe=e=>{const t=[];return Ee(e,t),t},Ge=(e,t)=>{const s=e.key;return W(s)?s:"_"+t},Xe=e=>{const t=U.useRef();return t[le]||(t[le]=e())},se=e=>{let t;return{_observe(s){(t||(t=new(te(ee(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},je=(e,t)=>{let s;const n=t?"width":"height",c=new WeakMap,f=se(l=>{const i=[];for(const{target:r,contentRect:o}of l)if(r.offsetParent)if(r===s)e._update(V,o[n]);else{const _=c.get(r);W(_)&&i.push([_,o[n]])}i.length&&e._update(P,i)});return{_observeRoot(l){f._observe(s=l)},_observeItem:(l,i)=>(c.set(l,i),f._observe(l),()=>{c.delete(l),f._unobserve(l)}),_dispose:f._dispose}},Ze=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",c=new WeakMap,f=se(i=>{const r=[];for(const{target:o,contentRect:_}of i){if(!o.offsetParent)continue;const u=c.get(o);W(u)&&r.push([u,_[s]])}r.length&&e._update(P,r)});let l;return{_observeRoot(i){const r=te(ee(i)),o=()=>{e._update(V,r[n])};r.addEventListener("resize",o),o(),l=()=>{r.removeEventListener("resize",o)}},_observeItem:(i,r)=>(c.set(i,r),f._observe(i),()=>{c.delete(i),f._unobserve(i)}),_dispose(){l&&l(),f._dispose()}}},$e=(e,t)=>{let s;const n="height",c="width",f=new WeakMap,l=new Set,i=new Set,r=new Map,o=(u,d)=>`${u}-${d}`,_=se(u=>{const d=new Set,m=new Set;for(const{target:g,contentRect:S}of u)if(g.offsetParent)if(g===s)e._update(V,S[n]),t._update(V,S[c]);else{const a=f.get(g);if(a){const[O,I]=a,v=o(O,I),J=r.get(v),p=[S[n],S[c]];let C,A;J?(J[0]!==p[0]&&(C=!0),J[1]!==p[1]&&(A=!0)):C=A=!0,C&&d.add(O),A&&m.add(I),(C||A)&&r.set(v,p)}}if(d.size){const g=[];d.forEach(S=>{let a=0;i.forEach(O=>{const I=r.get(o(S,O));I&&(a=L(a,I[0]))}),a&&g.push([S,a])}),e._update(P,g)}if(m.size){const g=[];m.forEach(S=>{let a=0;l.forEach(O=>{const I=r.get(o(O,S));I&&(a=L(a,I[1]))}),a&&g.push([S,a])}),t._update(P,g)}});return{_observeRoot(u){_._observe(s=u)},_observeItem(u,d,m){return f.set(u,[d,m]),l.add(d),i.add(m),_._observe(u),()=>{f.delete(u),_._unobserve(u)}},_dispose:_._dispose}},Qe=e=>U.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{Ne as A,M as S,K as U,Xe as a,Qe as b,Z as c,Ke as d,Ue as e,$e as f,Ve as g,Fe as h,de as i,ke as j,De as k,Ge as l,ve as m,je as n,We as o,Ze as p,Ye as q,le as r,qe as s,Be as u};
