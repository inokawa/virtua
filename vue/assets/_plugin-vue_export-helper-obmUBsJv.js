import{d as Ie,b as Oe,w as be,f as Ee,i as he}from"./vue.esm-bundler-9aQdBDVL.js";const w=Math.min,L=Math.max,se=Math.abs,B=setTimeout,F=(e,t,s)=>w(s,L(t,e)),j=e=>e!=null,Le=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},ze=(e,t)=>{let s;const n=()=>{j(s)&&clearTimeout(s)},o=()=>{n(),s=B(()=>{s=null,e()},t)};return o._cancel=n,o},q=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,M=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},A=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},ve=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),n},Y=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=A(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Te=e=>e._length?Y(e,e._length-1)+A(e,e._length-1):0,ne=(e,t,s)=>{let n=Y(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=A(e,s);if(n+o>t)break;n+=o,s++}else n-=A(e,--s);return F(s,0,e._length-1)},re=(e,t,s,n)=>{const o=ne(e,t,w(s,e._length-1));return[o,ne(e,t+n,o)]},we=e=>{const t=e._sizes.filter(n=>n!==y),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:Le(t)},Re=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:M([],e),_offsets:M([],e)}),oe=(e,t,s)=>{const n=t-e._length,o=n>0;let c;return o?(c=e._defaultItemSize*n,M(e._sizes,n,s),M(e._offsets,n)):(c=(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((l,u)=>l+(u===y?e._defaultItemSize:u),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,[c,o]},ye=typeof window<"u",le=()=>document.documentElement,X=e=>e.ownerDocument,G=e=>e.defaultView,Z=q(()=>ye?getComputedStyle(le()).direction==="rtl":!1),ue=q(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ce=q(()=>"scrollBehavior"in le().style),Ne=1.5,D=0,ce=1,fe=2,U=0,Ae=1,ie=2,Q=1,$=2,xe=3,_e=4,de=5,ae=6,me=7,J=1,K=2,De=4,Je=8,ke=e=>L(e._getTotalSize(),e._getViewportSize()),Pe=e=>L(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),Ue=(e,t,s)=>L(e-(s===ce?1:L(1,t)),0),We=(e,t,s,n)=>w(e+(s===fe?1:L(1,t)),n-1),W=(e,t,s)=>t.reduce((n,[o,c])=>{const l=c-A(e,o);return(!s||l>0)&&(n+=l),n},0),Be=(e,t=40,s=0,n,o,c=0,l=0)=>{let u=!!s,r=[],i=0,f=0,_=0,d=0,m=0,O=0,b=D,E=U,g=u?[0,L(s-1,0)]:null,R=[0,0];const a=n||Re(e,t),V=new Set,H=()=>Te(a),ee=()=>H()+c+l,ge=()=>f-c,k=()=>L(0,ee()-i),te=I=>{ue()&&b!==D?m+=I:(d+=I,_++)};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(a))},_getRange(){return g?[w(R[0],g[0]),L(R[1],g[1])]:O?R:R=re(a,ge()+m+d,R[0],i)},_isUnmeasuredItem(I){return a._sizes[I]===y},_hasUnmeasuredItemsInFrozenRange(){return g?a._sizes.slice(L(0,g[0]-1),w(a._length-1,g[1]+1)+1).includes(y):!1},_getItemOffset(I){return Y(a,I)-m},_getItemSize(I){return A(a,I)},_getItemsLength(){return a._length},_getScrollOffset(){return f},_getScrollDirection(){return b},_getViewportSize(){return i},_getStartSpacerSize(){return c},_getEndSpacerSize(){return l},_getTotalSize:H,_getJumpCount(){return _},_flushJump(){return i>ee()?d=0:(O=d,d=0,O)},_subscribe(I,h){const x=[I,h];return V.add(x),()=>{V.delete(x)}},_update(I,h){let x,P,z=0;switch(I){case Q:{const S=h.filter(([T,C])=>a._sizes[T]!==C);if(!S.length)break;let p=0;if(f!==0)if(f>k()-Ne)p=W(a,S,!0);else if(E===ie)p=W(a,S);else{const[T]=R;p=W(a,S.filter(([C])=>C<T))}p&&te(p);let v=!1;S.forEach(([T,C])=>{ve(a,T,C)&&(v=!0)}),o&&v&&!f&&we(a),z=K,P=!0;break}case $:{i!==h&&(i=h,z=K);break}case xe:{if(h[1]){const S=k()-f,[p,v]=oe(a,h[0],!0);te(v?p:-w(p,S)),v&&(E=ie),z=J}else oe(a,h[0]);break}case _e:{const S=F(h,0,k()),p=O;if(O=0,S===f)break;const v=S-f,T=se(v);!(p&&T<se(p)+1)&&E===U&&(b=v<0?fe:ce),u&&(g=null,u=!1),P=T>i,f=S,z=J+De;break}case de:{z=Je,b!==D&&(x=!0,z+=J),b=D,E=U,g=null;break}case ae:{E=Ae;break}case me:{g=re(a,h,R[0],i),z=J;break}}z&&(r=[],x&&m&&(d+=m,m=0,_++),V.forEach(([S,p])=>{z&S&&p(P)}))}}},Se=e=>{let t;return{_observe(s){(t||(t=new(G(X(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ke=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,c=Se(l=>{const u=[];for(const{target:r,contentRect:i}of l)if(r.offsetParent)if(r===s)e._update($,i[n]);else{const f=o.get(r);j(f)&&u.push([f,i[n]])}u.length&&e._update(Q,u)});return{_observeRoot(l){c._observe(s=l)},_observeItem:(l,u)=>(o.set(l,u),c._observe(l),()=>{o.delete(l),c._unobserve(l)}),_dispose:c._dispose}},Fe=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,c=Se(u=>{const r=[];for(const{target:i,contentRect:f}of u){if(!i.offsetParent)continue;const _=o.get(i);j(_)&&r.push([_,f[s]])}r.length&&e._update(Q,r)});let l;return{_observeRoot(u){const r=G(X(u)),i=()=>{e._update($,r[n])};r.addEventListener("resize",i),i(),l=()=>{r.removeEventListener("resize",i)}},_observeItem:(u,r)=>(o.set(u,r),c._observe(u),()=>{o.delete(u),c._unobserve(u)}),_dispose(){l&&l(),c._dispose()}}},N=(e,t)=>t&&Z()?-e:e,pe=(e,t,s,n,o)=>{const c=Date.now;let l=0,u=!1,r=!1,i=!1,f=!1;const _=ze(()=>{if(u||r){u=!1,_();return}i=!1,e._update(de)},150),d=()=>{l=c(),i&&(f=!0),e._update(_e,n()),_()},m=E=>{if(u||e._getScrollDirection()===D||E.ctrlKey)return;const g=c()-l;150>g&&50<g&&(s?E.deltaX:E.deltaY)&&(u=!0)},O=()=>{r=!0,i=f=!1},b=()=>{r=!1,ue()&&(i=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",b),_._cancel()},_fixScrollJump:E=>{o(E,f),f=!1}}},je=(e,t)=>{let s,n,o;const c=t?"scrollLeft":"scrollTop",l=t?"overflowX":"overflowY",u=async(r,i)=>{if(!s)return;o&&o();const f=()=>{let _;return[new Promise((d,m)=>{_=d,B(o=m,150)}),e._subscribe(K,()=>{_&&_()})]};if(i&&Ce()){for(;e._update(me,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,d]=f();try{await _}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:N(r(),t),behavior:"smooth"})}else for(;;){const[_,d]=f();try{s[c]=N(r(),t),e._update(ae),await _}catch{return}finally{d()}}};return{_observe(r){s=r,n=pe(e,r,t,()=>N(r[c],t),(i,f)=>{if(f){const _=r.style,d=_[l];_[l]="hidden",B(()=>{_[l]=d})}r[c]+=N(i,t)})},_dispose(){n&&n._dispose()},_scrollTo(r){u(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),u(()=>r)},_scrollToIndex(r,{align:i,smooth:f}={}){if(r=F(r,0,e._getItemsLength()-1),i==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)i="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())i="end";else return}u(()=>e._getStartSpacerSize()+(i==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():i==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),f)},_fixScrollJump:r=>{n&&n._fixScrollJump(r)}}},qe=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",c=X(n),l=G(c),u=c.body,r=(i,f,_,d=0)=>{const m=_?"offsetLeft":"offsetTop",O=d+(_&&Z()?l.innerWidth-i[m]-i.offsetWidth:i[m]),b=i.offsetParent;return i===f||!b?O:r(b,f,_,O)};s=pe(e,l,t,()=>N(l[o],t)-r(n,u,t),i=>{l.scrollBy(t?N(i,t):0,t?0:i)})},_dispose(){s&&s._dispose()},_fixScrollJump:n=>{s&&s._fixScrollJump(n)}}};function Me(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!he(e)}const Ye=Ie({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_element:{type:String,required:!0}},setup(e){const t=Oe();return be(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_element:c,_isHorizontal:l}=e,u={margin:0,padding:0,position:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:"0px",[l?Z()?"right":"left":"top"]:n+"px",visibility:o?"hidden":"visible"};return l&&(u.display="flex"),Ee(c,{ref:t,style:u},Me(s)?s:{default:()=>[s]})}}}),Xe=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{xe as A,Ye as L,D as S,J as U,Xe as _,K as a,De as b,Be as c,Je as d,Pe as e,We as f,ke as g,j as h,Ke as i,je as j,Fe as k,qe as l,Ue as o};