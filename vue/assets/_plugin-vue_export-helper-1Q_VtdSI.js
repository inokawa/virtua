import{d as Oe,b as be,w as he,f as Ee,i as Le}from"./vue.esm-bundler-9aQdBDVL.js";const T=Math.min,z=Math.max,ne=Math.abs,K=setTimeout,j=(e,t,s)=>T(s,z(t,e)),F=e=>e!=null,ve=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ze=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},we=(e,t)=>{let s;const n=()=>{F(s)&&clearTimeout(s)},o=()=>{n(),s=K(()=>{s=null,e()},t)};return o._cancel=n,o},Y=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},C=-1,M=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](C);return e},x=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},Re=(e,t,s)=>{const n=e._sizes[t]===C;return e._sizes[t]=s,e._computedOffsetIndex=T(t,e._computedOffsetIndex),n},X=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=x(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Te=e=>e._length?X(e,e._length-1)+x(e,e._length-1):0,re=(e,t,s)=>{let n=X(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=x(e,s);if(n+o>t)break;n+=o,s++}else n-=x(e,--s);return j(s,0,e._length-1)},oe=(e,t,s,n)=>{const o=re(e,t,T(s,e._length-1));return[o,re(e,t+n,o)]},ye=e=>{const t=e._sizes.filter(n=>n!==C),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:ve(t)},Ce=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:M([],e),_offsets:M([],e)}),le=(e,t,s)=>{const n=t-e._length,o=n>0;let c;return o?(c=e._defaultItemSize*n,M(e._sizes,n,s),M(e._offsets,n)):(c=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((i,u)=>i+(u===C?e._defaultItemSize:u),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:T(t-1,e._computedOffsetIndex),e._length=t,[c,o]},Ne=typeof window<"u",ue=()=>document.documentElement,G=e=>e.ownerDocument,Z=e=>e.defaultView,Q=Y(()=>Ne?getComputedStyle(ue()).direction==="rtl":!1),ce=Y(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ae=Y(()=>"scrollBehavior"in ue().style),xe=1.5,D=0,fe=1,_e=2,U=0,Je=1,ie=2,$=1,H=2,De=3,de=4,ae=5,me=6,pe=7,k=1,q=2,ke=4,Me=8,Be=e=>z(e._getTotalSize(),e._getViewportSize()),Ue=(e,t,s)=>z(e-(s===fe?1:z(1,t)),0),We=(e,t,s,n)=>T(e+(s===_e?1:z(1,t)),n-1),W=(e,t,s)=>t.reduce((n,[o,c])=>{const i=c-x(e,o);return(!s||i>0)&&(n+=i),n},0),Ke=(e,t=40,s=0,n,o,c=0,i=0)=>{let u=!!s,r=[],l=0,f=0,_=0,d=0,m=0,E=!1,b=0,I=D,h=U,L=u?[0,z(s-1,0)]:null,y=[0,0];const a=n||Ce(e,t),P=new Set,ee=()=>Te(a),te=()=>ee()+c+i,Ie=()=>f-c,V=()=>z(0,te()-l),se=p=>{ce()&&I!==D?m+=p:(d+=p,_++)};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(a))},_getRange(){return L?[T(y[0],L[0]),z(y[1],L[1])]:b?y:y=oe(a,Ie()+m+d,y[0],l)},_isUnmeasuredItem(p){return a._sizes[p]===C},_hasUnmeasuredItemsInFrozenRange(){return L?a._sizes.slice(z(0,L[0]-1),T(a._length-1,L[1]+1)+1).includes(C):!1},_getItemOffset(p){return X(a,p)-m},_getItemSize(p){return x(a,p)},_getItemsLength(){return a._length},_getScrollOffset(){return f},_getScrollDirection(){return I},_getViewportSize(){return l},_getStartSpacerSize(){return c},_getTotalSize:ee,_getJumpCount(){return _},_flushJump(){const p=d,O=E;return d=0,E=!1,l>te()?[0,!1]:[b=p,O]},_subscribe(p,O){const J=[p,O];return P.add(J),()=>{P.delete(J)}},_update(p,O){let J,B,v=0;switch(p){case $:{const S=O.filter(([R,N])=>a._sizes[R]!==N);if(!S.length)break;let g=0;if(f!==0)if(f>V()-xe)g=W(a,S,!0);else if(h===ie)g=W(a,S);else{const[R]=y;g=W(a,S.filter(([N])=>N<R))}g&&se(g);let w=!1;S.forEach(([R,N])=>{Re(a,R,N)&&(w=!0)}),o&&w&&!f&&ye(a),v=q,B=!0;break}case H:{l!==O&&(l=O,v=q);break}case De:{if(O[1]){const S=V()-f,[g,w]=le(a,O[0],!0);se(w?g:-T(g,S)),w&&(h=ie,E=!0),v=k}else le(a,O[0]);break}case de:{const S=j(O,0,V()),g=b;if(b=0,S===f)break;const w=S-f,R=ne(w);!(g&&R<ne(g)+1)&&h===U&&(I=w<0?_e:fe),u&&(L=null,u=!1),B=R>l,f=S,v=k+ke;break}case ae:{v=Me,I!==D&&(J=!0,v+=k),I=D,h=U,L=null;break}case me:{h=Je;break}case pe:{L=oe(a,O,y[0],l),v=k;break}}v&&(r=[],J&&m&&(d+=m,m=0,_++),P.forEach(([S,g])=>{v&S&&g(B)}))}}},Se=e=>{let t;return{_observe(s){(t||(t=new(Z(G(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},qe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=Se(i=>{const u=[];for(const{target:r,contentRect:l}of i)if(r.offsetParent)if(r===s)e._update(H,l[n]);else{const f=o.get(r);F(f)&&u.push([f,l[n]])}u.length&&e._update($,u)});return{_observeRoot(i){c._observe(s=i)},_observeItem:(i,u)=>(o.set(i,u),c._observe(i),()=>{o.delete(i),c._unobserve(i)}),_dispose:c._dispose}},je=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=Se(u=>{const r=[];for(const{target:l,contentRect:f}of u){if(!l.offsetParent)continue;const _=o.get(l);F(_)&&r.push([_,f[s]])}r.length&&e._update($,r)});let i;return{_observeRoot(u){const r=Z(G(u)),l=()=>{e._update(H,r[n])};r.addEventListener("resize",l),l(),i=()=>{r.removeEventListener("resize",l)}},_observeItem:(u,r)=>(o.set(u,r),c._observe(u),()=>{o.delete(u),c._unobserve(u)}),_dispose(){i&&i(),c._dispose()}}},A=(e,t)=>t&&Q()?-e:e,ge=(e,t,s,n,o)=>{const c=Date.now;let i=0,u=!1,r=!1,l=!1,f=!1;const _=we(()=>{if(u||r){u=!1,_();return}l=!1,e._update(ae)},150),d=()=>{i=c(),l&&(f=!0),e._update(de,n()),_()},m=I=>{if(u||e._getScrollDirection()===D||I.ctrlKey)return;const h=c()-i;150>h&&50<h&&(s?I.deltaX:I.deltaY)&&(u=!0)},E=()=>{r=!0,l=f=!1},b=()=>{r=!1,ce()&&(l=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",E,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",E),t.removeEventListener("touchend",b),_._cancel()},_fixScrollJump:()=>{const[I,h]=e._flushJump();if(I)return o(I,f),f=!1,h}}},Fe=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",i=t?"overflowX":"overflowY",u=async(r,l)=>{if(!s){ze(()=>u(r,l));return}o&&o();const f=()=>{let _;return[new Promise((d,m)=>{_=d,K(o=m,150)}),e._subscribe(q,()=>{_&&_()})]};if(l&&Ae()){for(;e._update(pe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,d]=f();try{await _}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:A(r(),t),behavior:"smooth"})}else for(;;){const[_,d]=f();try{s[c]=A(r(),t),e._update(me),await _}catch{return}finally{d()}}};return{_observe(r){s=r,n=ge(e,r,t,()=>A(r[c],t),(l,f)=>{if(f){const _=r.style,d=_[i];_[i]="hidden",K(()=>{_[i]=d})}r[c]+=A(l,t)})},_dispose(){n&&n._dispose()},_scrollTo(r){u(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),u(()=>r)},_scrollToIndex(r,{align:l,smooth:f}={}){if(r=j(r,0,e._getItemsLength()-1),l==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)l="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())l="end";else return}u(()=>e._getStartSpacerSize()+(l==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():l==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),f)},_fixScrollJump:()=>{n&&n._fixScrollJump()&&o&&o()}}},Ye=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",c=G(n),i=Z(c),u=c.body,r=(l,f,_,d=0)=>{const m=_?"offsetLeft":"offsetTop",E=d+(_&&Q()?i.innerWidth-l[m]-l.offsetWidth:l[m]),b=l.offsetParent;return l===f||!b?E:r(b,f,_,E)};s=ge(e,i,t,()=>A(i[o],t)-r(n,u,t),l=>{i.scrollBy(t?A(l,t):0,t?0:l)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};function Pe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Le(e)}const Xe=Oe({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_element:{type:String,required:!0}},setup(e){const t=be();return he(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_element:c,_isHorizontal:i}=e,u={margin:0,padding:0,position:"absolute",[i?"height":"width"]:"100%",[i?"top":"left"]:"0px",[i?Q()?"right":"left":"top"]:n+"px",visibility:o?"hidden":"visible"};return i&&(u.display="flex"),Ee(c,{ref:t,style:u},Pe(s)?s:{default:()=>[s]})}}}),Ge=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{De as A,Xe as L,D as S,k as U,Ge as _,q as a,ke as b,Ke as c,Me as d,We as e,F as f,Be as g,qe as h,Fe as i,je as j,Ye as k,Ue as o};
