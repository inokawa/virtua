import{r as B}from"./index-yp3VsGQP.js";const y=Math.min,L=Math.max,re=Math.abs,ze=Array.isArray,j=setTimeout,$=(e,t,s)=>y(s,L(t,e)),K=e=>e!=null,Le=e=>{const t=[...e].sort((n,c)=>n-c),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ve=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Re=(e,t)=>{let s;const n=()=>{K(s)&&clearTimeout(s)},c=()=>{n(),s=j(()=>{s=null,e()},t)};return c._cancel=n,c},Q=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},J=-1,F=(e,t,s)=>{const n=s?"unshift":"push";for(let c=0;c<t;c++)e[n](J);return e},D=(e,t)=>{const s=e._sizes[t];return s===J?e._defaultItemSize:s},we=(e,t,s)=>{const n=e._sizes[t]===J;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},H=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=D(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Te=e=>e._length?H(e,e._length-1)+D(e,e._length-1):0,oe=(e,t,s)=>{let n=H(e,s);for(;s>=0&&s<e._length;)if(n<=t){const c=D(e,s);if(n+c>t)break;n+=c,s++}else n-=D(e,--s);return $(s,0,e._length-1)},ce=(e,t,s,n)=>{const c=oe(e,t,y(s,e._length-1));return[c,oe(e,t+n,c)]},ye=e=>{const t=e._sizes.filter(n=>n!==J),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:Le(t)},Ce=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:F([],e),_offsets:F([],e)}),ue=(e,t,s)=>{const n=t-e._length,c=n>0;let _;return c?(_=e._defaultItemSize*n,F(e._sizes,n,s),F(e._offsets,n)):(_=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((l,i)=>l+(i===J?e._defaultItemSize:i),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,[_,c]},fe=typeof window<"u",_e=()=>document.documentElement,ee=e=>e.ownerDocument,te=e=>e.defaultView,de=Q(()=>fe?getComputedStyle(_e()).direction==="rtl":!1),ae=Q(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ae=Q(()=>"scrollBehavior"in _e().style),Ne=1.5,P=0,me=1,pe=2,G=0,Je=1,ie=2,V=1,W=2,ke=3,Se=4,ge=5,Ie=6,Oe=7,U=1,Z=2,xe=4,De=8,Pe=e=>L(e._getTotalSize(),e._getViewportSize()),Ve=(e,t,s)=>L(e-(s===me?1:L(1,t)),0),We=(e,t,s,n)=>y(e+(s===pe?1:L(1,t)),n-1),X=(e,t,s)=>t.reduce((n,[c,_])=>{const l=_-D(e,c);return(!s||l>0)&&(n+=l),n},0),Ke=(e,t=40,s=0,n,c,_=0,l=0)=>{let i=!!s,r=[],o=0,f=0,u=0,d=0,m=0,g=!1,S=0,a=P,O=G,I=i?[0,L(s-1,0)]:null,v=[0,0];const p=n||Ce(e,t),C=new Set,A=()=>Te(p),N=()=>A()+_+l,Ee=()=>f-_,Y=()=>L(0,N()-o),ne=h=>{ae()&&a!==P?m+=h:(d+=h,u++)};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(p))},_getRange(){return I?[y(v[0],I[0]),L(v[1],I[1])]:S?v:v=ce(p,Ee()+m+d,v[0],o)},_isUnmeasuredItem(h){return p._sizes[h]===J},_hasUnmeasuredItemsInFrozenRange(){return I?p._sizes.slice(L(0,I[0]-1),y(p._length-1,I[1]+1)+1).includes(J):!1},_getItemOffset(h){return H(p,h)-m},_getItemSize(h){return D(p,h)},_getItemsLength(){return p._length},_getScrollOffset(){return f},_getScrollDirection(){return a},_getViewportSize(){return o},_getStartSpacerSize(){return _},_getTotalSize:A,_getJumpCount(){return u},_flushJump(){const h=d,z=g;return d=0,g=!1,o>N()?[0,!1]:[S=h,z]},_subscribe(h,z){const M=[h,z];return C.add(M),()=>{C.delete(M)}},_update(h,z){let M,q,R=0;switch(h){case V:{const b=z.filter(([T,k])=>p._sizes[T]!==k);if(!b.length)break;let E=0;if(f!==0)if(f>Y()-Ne)E=X(p,b,!0);else if(O===ie)E=X(p,b);else{const[T]=v;E=X(p,b.filter(([k])=>k<T))}E&&ne(E);let w=!1;b.forEach(([T,k])=>{we(p,T,k)&&(w=!0)}),c&&w&&!f&&ye(p),R=Z,q=!0;break}case W:{o!==z&&(o=z,R=Z);break}case ke:{if(z[1]){const b=Y()-f,[E,w]=ue(p,z[0],!0);ne(w?E:-y(E,b)),w&&(O=ie,g=!0),R=U}else ue(p,z[0]);break}case Se:{const b=$(z,0,Y()),E=S;if(S=0,b===f)break;const w=b-f,T=re(w);!(E&&T<re(E)+1)&&O===G&&(a=w<0?pe:me),i&&(I=null,i=!1),q=T>o,f=b,R=U+xe;break}case ge:{R=De,a!==P&&(M=!0,R+=U),a=P,O=G,I=null;break}case Ie:{O=Je;break}case Oe:{I=ce(p,z,v[0],o),R=U;break}}R&&(r=[],M&&m&&(d+=m,m=0,u++),C.forEach(([b,E])=>{R&b&&E(q)}))}}},Ue=fe?B.useLayoutEffect:B.useEffect,x=(e,t)=>t&&de()?-e:e,he=(e,t,s,n,c)=>{const _=Date.now;let l=0,i=!1,r=!1,o=!1,f=!1;const u=Re(()=>{if(i||r){i=!1,u();return}o=!1,e._update(ge)},150),d=()=>{l=_(),o&&(f=!0),e._update(Se,n()),u()},m=a=>{if(i||e._getScrollDirection()===P||a.ctrlKey)return;const O=_()-l;150>O&&50<O&&(s?a.deltaX:a.deltaY)&&(i=!0)},g=()=>{r=!0,o=f=!1},S=()=>{r=!1,ae()&&(o=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",S),u._cancel()},_fixScrollJump:()=>{const[a,O]=e._flushJump();if(a)return c(a,f),f=!1,O}}},Be=(e,t)=>{let s,n,c;const _=t?"scrollLeft":"scrollTop",l=t?"overflowX":"overflowY",i=async(r,o)=>{if(!s){ve(()=>i(r,o));return}c&&c();const f=()=>{let u;return[new Promise((d,m)=>{u=d,j(c=m,150)}),e._subscribe(Z,()=>{u&&u()})]};if(o&&Ae()){for(;e._update(Oe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,d]=f();try{await u}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:x(r(),t),behavior:"smooth"})}else for(;;){const[u,d]=f();try{s[_]=x(r(),t),e._update(Ie),await u}catch{return}finally{d()}}};return{_observe(r){s=r,n=he(e,r,t,()=>x(r[_],t),(o,f)=>{if(f){const u=r.style,d=u[l];u[l]="hidden",j(()=>{u[l]=d})}r[_]+=x(o,t)})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:o,smooth:f}={}){if(r=$(r,0,e._getItemsLength()-1),o==="nearest"){const u=e._getItemOffset(r),d=e._getScrollOffset();if(u<d)o="start";else if(u+e._getItemSize(r)>d+e._getViewportSize())o="end";else return}i(()=>e._getStartSpacerSize()+(o==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():o==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),f)},_fixScrollJump:()=>{n&&n._fixScrollJump()&&c&&c()}}},Fe=(e,t)=>{let s;return{_observe(n){const c=t?"scrollX":"scrollY",_=ee(n),l=te(_),i=_.body,r=(o,f,u,d=0)=>{const m=u?"offsetLeft":"offsetTop",g=d+(u&&de()?l.innerWidth-o[m]-o.offsetWidth:o[m]),S=o.offsetParent;return o===f||!S?g:r(S,f,u,g)};s=he(e,l,t,()=>x(l[c],t)-r(n,i,t),o=>{l.scrollBy(t?x(o,t):0,t?0:o)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},le="current",be=(e,t)=>{if(ze(e))for(const s of e)be(s,t);else!K(e)||typeof e=="boolean"||t.push(e)},Ye=e=>{const t=[];return be(e,t),t},qe=(e,t)=>{const s=e.key;return K(s)?s:"_"+t},Ge=e=>{const t=B.useRef();return t[le]||(t[le]=e())},se=e=>{let t;return{_observe(s){(t||(t=new(te(ee(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Xe=(e,t)=>{let s;const n=t?"width":"height",c=new WeakMap,_=se(l=>{const i=[];for(const{target:r,contentRect:o}of l)if(r.offsetParent)if(r===s)e._update(W,o[n]);else{const f=c.get(r);K(f)&&i.push([f,o[n]])}i.length&&e._update(V,i)});return{_observeRoot(l){_._observe(s=l)},_observeItem:(l,i)=>(c.set(l,i),_._observe(l),()=>{c.delete(l),_._unobserve(l)}),_dispose:_._dispose}},je=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",c=new WeakMap,_=se(i=>{const r=[];for(const{target:o,contentRect:f}of i){if(!o.offsetParent)continue;const u=c.get(o);K(u)&&r.push([u,f[s]])}r.length&&e._update(V,r)});let l;return{_observeRoot(i){const r=te(ee(i)),o=()=>{e._update(W,r[n])};r.addEventListener("resize",o),o(),l=()=>{r.removeEventListener("resize",o)}},_observeItem:(i,r)=>(c.set(i,r),_._observe(i),()=>{c.delete(i),_._unobserve(i)}),_dispose(){l&&l(),_._dispose()}}},Ze=(e,t)=>{let s;const n="height",c="width",_=new WeakMap,l=new Set,i=new Set,r=new Map,o=(u,d)=>`${u}-${d}`,f=se(u=>{const d=new Set,m=new Set;for(const{target:g,contentRect:S}of u)if(g.offsetParent)if(g===s)e._update(W,S[n]),t._update(W,S[c]);else{const a=_.get(g);if(a){const[O,I]=a,v=o(O,I),p=r.get(v),C=[S[n],S[c]];let A,N;p?(p[0]!==C[0]&&(A=!0),p[1]!==C[1]&&(N=!0)):A=N=!0,A&&d.add(O),N&&m.add(I),(A||N)&&r.set(v,C)}}if(d.size){const g=[];d.forEach(S=>{let a=0;i.forEach(O=>{const I=r.get(o(S,O));I&&(a=L(a,I[0]))}),a&&g.push([S,a])}),e._update(V,g)}if(m.size){const g=[];m.forEach(S=>{let a=0;l.forEach(O=>{const I=r.get(o(O,S));I&&(a=L(a,I[1]))}),a&&g.push([S,a])}),t._update(V,g)}});return{_observeRoot(u){f._observe(s=u)},_observeItem(u,d,m){return _.set(u,[d,m]),l.add(d),i.add(m),f._observe(u),()=>{_.delete(u),f._unobserve(u)}},_dispose:f._dispose}},$e=e=>B.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{ke as A,P as S,U,Ge as a,$e as b,Z as c,We as d,Ke as e,Ze as f,Pe as g,Be as h,de as i,xe as j,De as k,qe as l,ve as m,Xe as n,Ve as o,je as p,Fe as q,le as r,Ye as s,Ue as u};
