import{r as F}from"./index-yp3VsGQP.js";const T=Math.min,b=Math.max,te=Math.abs,Je=Object.values,ze=Array.isArray,q=setTimeout,Y=(e,t,s)=>T(s,b(t,e)),U=e=>e!=null,Ee=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},he=(e,t)=>{let s;const n=()=>{U(s)&&clearTimeout(s)},o=()=>{n(),s=q(()=>{s=null,e()},t)};return o._cancel=n,o},x=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},be=e=>getComputedStyle(e),A=-1,G=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](A);return e},J=(e,t)=>{const s=e._sizes[t];return s===A?e._defaultItemSize:s},we=(e,t,s)=>{const n=e._sizes[t]===A;return e._sizes[t]=s,e._computedOffsetIndex=T(t,e._computedOffsetIndex),n},Q=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=J(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Le=e=>e._length?Q(e,e._length-1)+J(e,e._length-1):0,se=(e,t,s)=>{let n=Q(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=J(e,s);if(n+o>t)break;n+=o,s++}else n-=J(e,--s);return Y(s,0,e._length-1)},ne=(e,t,s,n)=>{const o=se(e,t,T(s,e._length-1));return[o,se(e,t+n,o)]},Re=e=>{const t=e._sizes.filter(n=>n!==A),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:Ee(t)},ve=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:G([],e),_offsets:G([],e)}),re=(e,t,s)=>{const n=t-e._length,o=n>0;let i;return o?(i=e._defaultItemSize*n,G(e._sizes,n,s),G(e._offsets,n)):(i=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((c,f)=>c+(f===A?e._defaultItemSize:f),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:T(t-1,e._computedOffsetIndex),e._length=t,[i,o]},ie=typeof window<"u",fe=()=>document.documentElement,Te=x(e=>{const t="scrollLeft",s=e[t];e[t]=1;const n=e[t]<1;return e[t]=s,n}),H=x(()=>ie?be(fe()).direction==="rtl":!1),ue=x(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ye=x(()=>"scrollBehavior"in fe().style),Ce=1.5,P=0,le=1,_e=2,j=0,Ae=1,oe=2,V=1,K=2,xe=3,ae=4,de=5,me=6,Se=7,B=1,$=2,Ne=4,Me=8,De=e=>b(e._getTotalSize(),e._getViewportSize()),Pe=e=>b(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),Ve=(e,t,s)=>b(e-(s===le?1:b(1,t)),0),Ke=(e,t,s,n)=>T(e+(s===_e?1:b(1,t)),n-1),Z=(e,t,s)=>t.reduce((n,[o,i])=>{const c=i-J(e,o);return(!s||c>0)&&(n+=c),n},0),Ue=(e,t=40,s=0,n,o,i=0,c=0)=>{let f=!!s,_=[],r=0,u=0,a=0,d=0,l=0,m=0,S=P,g=j,O=f?[0,b(s-1,0)]:null,I=[0,0];const p=n||ve(e,t),y=new Set,N=()=>Le(p),C=()=>N()+i+c,M=()=>u-i,W=()=>b(0,C()-r),ee=h=>{ue()&&S!==P?l+=h:(d+=h,a++)};return{_getStateVersion(){return _},_getCache(){return JSON.parse(JSON.stringify(p))},_getRange(){return O?[T(I[0],O[0]),b(I[1],O[1])]:m?I:I=ne(p,M()+l+d,I[0],r)},_isUnmeasuredItem(h){return p._sizes[h]===A},_hasUnmeasuredItemsInFrozenRange(){return O?p._sizes.slice(b(0,O[0]-1),T(p._length-1,O[1]+1)+1).includes(A):!1},_getItemOffset(h){return Q(p,h)-l},_getItemSize(h){return J(p,h)},_getItemsLength(){return p._length},_getScrollOffset(){return u},_getMaxScrollOffset:W,_getScrollDirection(){return S},_getViewportSize(){return r},_getStartSpacerSize(){return i},_getEndSpacerSize(){return c},_getTotalSize:N,_getJumpCount(){return a},_flushJump(){return r>C()?d=0:(m=d,d=0,m)},_subscribe(h,w){const D=[h,w];return y.add(D),()=>{y.delete(D)}},_update(h,w){let D,X,L=0;switch(h){case V:{const z=w.filter(([v,k])=>p._sizes[v]!==k);if(!z.length)break;let E=0;if(u!==0)if(u>W()-Ce)E=Z(p,z,!0);else if(g===oe)E=Z(p,z);else{const[v]=I;E=Z(p,z.filter(([k])=>k<v))}E&&ee(E);let R=!1;z.forEach(([v,k])=>{we(p,v,k)&&(R=!0)}),o&&R&&!u&&Re(p),L=$,X=!0;break}case K:{r!==w&&(r=w,L=$);break}case xe:{if(w[1]){const z=W()-u,[E,R]=re(p,w[0],!0);ee(R?E:-T(E,z)),R&&(g=oe),L=B}else re(p,w[0]);break}case ae:{const z=Y(w,0,W()),E=m;if(m=0,z===u)break;const R=z-u,v=te(R);!(E&&v<te(E)+1)&&g===j&&(S=R<0?_e:le),f&&(O=null,f=!1),X=v>r,u=z,L=B+Ne;break}case de:{L=Me,S!==P&&(D=!0,L+=B),S=P,g=j,O=null;break}case me:{g=Ae;break}case Se:{O=ne(p,w,I[0],r),L=B;break}}L&&(_=[],D&&l&&(d+=l,l=0,a++),y.forEach(([z,E])=>{L&z&&E(X)}))}}},We=ie?F.useLayoutEffect:F.useEffect,ge=(e,t,s,n)=>Te(e)||n?-s:t._getMaxScrollOffset()-s,pe=(e,t,s,n,o)=>{let i=!1,c=!1,f=!1;const _=he(()=>{if(i){_();return}c=!1,e._update(de)},150),r=()=>{c&&(f=!0),e._update(ae,n()),_()},u=(()=>{const l=Date.now,m=50;let S=l()-m;return g=>{const O=l();if(S+m<O){if(S=O,e._getScrollDirection()===P||g.ctrlKey)return;if(s?g.deltaX:g.deltaY){const I=e._getScrollOffset();I>0&&I<e._getMaxScrollOffset()&&_()}}}})(),a=()=>{i=!0,c=f=!1},d=()=>{i=!1,ue()&&(c=!0)};return t.addEventListener("scroll",r),t.addEventListener("wheel",u,{passive:!0}),t.addEventListener("touchstart",a,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",r),t.removeEventListener("wheel",u),t.removeEventListener("touchstart",a),t.removeEventListener("touchend",d),_._cancel()},_fixScrollJump:l=>{o(l,f),f=!1}}},Be=(e,t)=>{let s,n,o;const i=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",f=(r,u)=>t&&H()?ge(s,e,r,u):r,_=async(r,u)=>{if(!s)return;o&&o();const a=()=>Y(r(),0,e._getMaxScrollOffset()),d=()=>{let l;return[new Promise((m,S)=>{l=m,q(o=S,150)}),e._subscribe($,()=>{l&&l()})]};if(u&&ye()){for(;e._update(Se,a()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,m]=d();try{await l}catch{return}finally{m()}}s.scrollTo({[t?"left":"top"]:f(a()),behavior:"smooth"})}else for(;;){const[l,m]=d();try{s[i]=f(a()),e._update(me),await l}catch{return}finally{m()}}};return{_observe(r){s=r,n=pe(e,r,t,()=>f(r[i]),(u,a)=>{if(a){const d=r.style,l=d[c];d[c]="hidden",q(()=>{d[c]=l})}r[i]+=f(u,!0)})},_dispose(){n&&n._dispose()},_scrollTo(r){_(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),_(()=>r)},_scrollToIndex(r,{align:u,smooth:a}={}){if(r=Y(r,0,e._getItemsLength()-1),u==="nearest"){const d=e._getItemOffset(r),l=e._getScrollOffset();if(d<l)u="start";else if(d+e._getItemSize(r)>l+e._getViewportSize())u="end";else return}_(()=>e._getStartSpacerSize()+(u==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():u==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),a)},_fixScrollJump:r=>{n&&n._fixScrollJump(r)}}},Oe=(e,t,s,n=0)=>{const o=s?"offsetLeft":"offsetTop",i=n+(s&&H()?window.innerWidth-e[o]-e.offsetWidth:e[o]),c=e.offsetParent;return e===t||!c?i:Oe(c,t,s,i)},Fe=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",i=(c,f)=>t&&H()?ge(n,e,c,f):c;s=pe(e,window,t,()=>i(window[o])-Oe(n,document.body,t),c=>{window.scrollBy(t?i(c,!0):0,t?0:c)})},_dispose(){s&&s._dispose()},_fixScrollJump:n=>{s&&s._fixScrollJump(n)}}},ce="current",Ie=(e,t)=>{if(ze(e))for(const s of e)Ie(s,t);else!U(e)||typeof e=="boolean"||t.push(e)},Ye=e=>{const t=[];return Ie(e,t),t},Ge=(e,t)=>{const s=e.key;return U(s)?s:"_"+t},Xe=e=>{const t=F.useRef();return t[ce]||(t[ce]=e())},je=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,i=x(()=>new ResizeObserver(c=>{const f=[];for(const{target:_,contentRect:r}of c)if(_.offsetParent)if(_===s)e._update(K,r[n]);else{const u=o.get(_);U(u)&&f.push([u,r[n]])}f.length&&e._update(V,f)}));return{_observeRoot(c){i().observe(s=c)},_observeItem:(c,f)=>{const _=i();return o.set(c,f),_.observe(c),()=>{o.delete(c),_.unobserve(c)}},_dispose(){i().disconnect()}}},Ze=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,i=x(()=>new ResizeObserver(f=>{const _=[];for(const{target:r,contentRect:u}of f){if(!r.offsetParent)continue;const a=o.get(r);U(a)&&_.push([a,u[s]])}_.length&&e._update(V,_)})),c=()=>{e._update(K,window[n])};return{_observeRoot(){window.addEventListener("resize",c),c()},_observeItem:(f,_)=>{const r=i();return o.set(f,_),r.observe(f),()=>{o.delete(f),r.unobserve(f)}},_dispose(){window.removeEventListener("resize",c),i().disconnect()}}},qe=(e,t)=>{let s;const n="height",o="width",i=new WeakMap,c=new Set,f=new Set,_=new Map,r=(a,d)=>`${a}-${d}`,u=x(()=>new ResizeObserver(a=>{const d=new Set,l=new Set;for(const{target:m,contentRect:S}of a)if(m.offsetParent)if(m===s)e._update(K,S[n]),t._update(K,S[o]);else{const g=i.get(m);if(g){const[O,I]=g,p=r(O,I),y=_.get(p),N=[S[n],S[o]];let C,M;y?(y[0]!==N[0]&&(C=!0),y[1]!==N[1]&&(M=!0)):C=M=!0,C&&d.add(O),M&&l.add(I),(C||M)&&_.set(p,N)}}if(d.size){const m=[];d.forEach(S=>{let g=0;f.forEach(O=>{const I=_.get(r(S,O));I&&(g=b(g,I[0]))}),g&&m.push([S,g])}),e._update(V,m)}if(l.size){const m=[];l.forEach(S=>{let g=0;c.forEach(O=>{const I=_.get(r(O,S));I&&(g=b(g,I[1]))}),g&&m.push([S,g])}),t._update(V,m)}}));return{_observeRoot(a){u().observe(s=a)},_observeItem(a,d,l){const m=u();return i.set(a,[d,l]),c.add(d),f.add(l),m.observe(a),()=>{i.delete(a),m.unobserve(a)}},_dispose(){u().disconnect()}}},$e=e=>F.useReducer(e._getStateVersion,void 0,e._getStateVersion)[1];export{xe as A,P as S,B as U,Xe as a,$e as b,$ as c,Ke as d,Ue as e,qe as f,De as g,Be as h,H as i,Pe as j,Ne as k,Me as l,Ge as m,je as n,Ve as o,b as p,Ze as q,ce as r,Fe as s,Ye as t,We as u,Je as v};
