import{r as k}from"./index-yp3VsGQP.js";import{a as se}from"./jsx-runtime-sgeEVxPu.js";const A=Math.min,I=Math.max,re=Math.abs,oe=Date.now,De=Object.values,Ee=Array.isArray,G=setTimeout,P=(e,t,n)=>A(n,I(t,e)),F=e=>e!=null,Re=e=>{const t=[...e].sort((s,i)=>s-i),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},de=(e,t)=>{let n;const s=()=>{F(n)&&clearTimeout(n)},i=()=>{s(),n=G(()=>{n=null,e()},t)};return i._cancel=s,i},ye=(e,t)=>{let n=oe()-t;return(...s)=>{const i=oe();n+t<i&&(n=i,e(...s))}},x=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},Pe=(e,t,n)=>I(e-(n===Se?1:I(1,t)),0),Ke=(e,t,n,s)=>A(e+(n===we?1:I(1,t)),s-1),Q=e=>getComputedStyle(e),Y=e=>e?parseFloat(e):0,L=-1,V=(e,t)=>{const n=e._sizes[t];return n===L?e._defaultItemSize:n},Le=(e,t,n)=>{const s=e._sizes[t]===L;return e._sizes[t]=n,e._computedOffsetIndex=A(t,e._computedOffsetIndex),s},H=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=V(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},Te=e=>e._length?H(e,e._length-1)+V(e,e._length-1):0,ie=(e,t,n)=>{let s=H(e,n);for(;n>=0&&n<e._length;)if(s<=t){const i=V(e,n);if(s+i>t)break;s+=i,n++}else s-=V(e,--n);return P(n,0,e._length-1)},le=(e,t,n,s)=>{const i=ie(e,t,A(n,e._length-1));return[i,ie(e,t+s,i)]},Ce=e=>{const t=e._sizes.filter(s=>s!==L),n=t[0];e._defaultItemSize=t.every(s=>s===n)?n:Re(t)},_e=(e,t,n)=>{const s=n?"unshift":"push";for(let i=e._length;i<t;i++)e._sizes[s](L),e._offsets.push(i===0?0:L);e._length=t},Ae=(e,t)=>{const n={_defaultItemSize:t,_length:0,_computedOffsetIndex:0,_sizes:[],_offsets:[]};return _e(n,e),n},ue=(e,t,n)=>{const s=t-e._length,i=s<0;let m;return i?(m=(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((o,u)=>o+(u===L?e._defaultItemSize:u),0),e._offsets.splice(s)):(m=e._defaultItemSize*s,_e(e,e._length+s,n)),e._computedOffsetIndex=n?0:P(t-1,0,e._computedOffsetIndex),e._length=t,[m,i]},me=typeof window<"u",pe=()=>document.documentElement,xe=x(e=>{const t="scrollLeft",n=e[t];e[t]=1;const s=e[t]<1;return e[t]=n,s}),Z=x(()=>me?Q(pe()).direction==="rtl":!1),ge=x(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Me=x(()=>"scrollBehavior"in pe().style),X=(e,t,n)=>t.reduce((s,[i,m])=>{const o=m-V(e,i);return(!n||o>0)&&(s+=o),s},0),Ne=1.5,q=0,Se=1,we=2,K=1,U=2,ke=3,ee=4,te=5,he=6,ve=7,B=1,$=2,Ve=4,Ue=(e,t=40,n=0,s=Ae(e,t),i,m)=>{let o=t*I(n-1,0),u=0,_=0,r=0,c=0,l=0,f=0,d=0,a=q,p=!1,g=!1,v=null,w=[0,n];const M=new Set,z=()=>Te(s),T=()=>o-u-_,E=()=>z()-T(),C=b=>{ge()&&a!==q?f+=b:(l+=b,c++)},ne=b=>{const S=a;return a=b,a!==S};return{_getCache(){return JSON.parse(JSON.stringify(s))},_getRange(){return v?[A(w[0],v[0]),I(w[1],v[1])]:d?w:w=le(s,r+f+l,w[0],o)},_isUnmeasuredItem(b){return s._sizes[b]===L},_hasUnmeasuredItemsInSmoothScrollRange(){return v?s._sizes.slice(I(0,v[0]-1),A(s._length-1,v[1]+1)+1).includes(L):!1},_getItemOffset(b){const S=H(s,b)-f;return i?S+I(0,o-z()):S},_getItemSize(b){return V(s,b)},_getItemsLength(){return s._length},_getScrollOffset(){return r},_getMaxScrollOffset:E,_getScrollDirection(){return a},_getViewportSize(){return o},_getStartSpacerSize(){return u},_getScrollSize(){return I(z(),T())},_getTotalSize:z,_getJumpCount(){return c},_flushJump(){return T()>z()?l=0:(d=l,l=0,d)},_subscribe(b,S){const W=[b,S];return M.add(W),()=>{M.delete(W)}},_update(b,S){let W,j,y=0;switch(b){case K:{const h=S.filter(([N,D])=>s._sizes[N]!==D),R=p;if(p=!1,!h.length)break;let O=0;if(r!==0)if(r>E()-Ne)O=X(s,h,!0);else if(R)O=X(s,h);else{const[N]=w;O=X(s,h.filter(([D])=>D<N))}O&&C(O);let J=!1;h.forEach(([N,D])=>{Le(s,N,D)&&(J=!0)}),m&&J&&!r&&Ce(s),y=$,j=!0;break}case U:{const h=S[0]+S[1]+S[2];o!==h&&(o=h,u=S[1],_=S[2],y=$);break}case ke:{if(S[1]){const h=E()-r,[R,O]=ue(s,S[0],!0);C(O?-A(R,h):R),p=!O,y=B}else ue(s,S[0]);break}case ee:{const h=P(S,0,E()),R=d;if(d=0,h===r)break;const O=h-r,J=re(O);!(R&&J<re(R)+1)&&!g&&ne(O<0?we:Se),j=J>o,r=h,y=B+Ve;break}case te:{ne(q)&&(W=!0,y=B),g=!1,v=null;break}case he:{g=!0;break}case ve:{v=le(s,S,w[0],o),y=B;break}}y&&(W&&f&&(l+=f,f=0,c++),M.forEach(([h,R])=>{y&h&&R(j)}))}}},Be=me?k.useLayoutEffect:k.useEffect,be=(e,t,n)=>ye(s=>{if(e._getScrollDirection()!==q&&!s.ctrlKey&&(t?s.deltaX:s.deltaY)){const i=e._getScrollOffset();i>0&&i<e._getMaxScrollOffset()&&n()}},50),Oe=(e,t,n,s)=>xe(e)||s?-n:t._getMaxScrollOffset()-n,qe=(e,t)=>{let n,s,i=!1;const m=t?"scrollLeft":"scrollTop",o=t?"overflowX":"overflowY",u=(r,c)=>t&&Z()?Oe(n,e,r,c):r,_=async(r,c)=>{if(!n)return;s&&s();const l=()=>P(r(),0,e._getMaxScrollOffset()),f=()=>{let d;return[new Promise((a,p)=>{d=a,G(s=p,150)}),e._subscribe($,()=>{d&&d()})]};if(c&&Me()){for(;e._update(ve,l()),!!e._hasUnmeasuredItemsInSmoothScrollRange();){const[d,a]=f();try{await d}catch{return}finally{a()}}n.scrollTo({[t?"left":"top"]:u(l()),behavior:"smooth"})}else for(;;){const[d,a]=f();try{n[m]=u(l()),e._update(he),await d}catch{return}finally{a()}}};return{_observe(r){n=r;let c=!1,l=!1;const f=de(()=>{if(c){f();return}l=!1,e._update(te)},150),d=()=>{l&&(i=!0),e._update(ee,u(r[m])),f()},a=be(e,t,f),p=()=>{c=!0,l=i=!1},g=()=>{c=!1,ge()&&(l=!0)};return r.addEventListener("scroll",d),r.addEventListener("wheel",a,{passive:!0}),r.addEventListener("touchstart",p,{passive:!0}),r.addEventListener("touchend",g,{passive:!0}),()=>{r.removeEventListener("scroll",d),r.removeEventListener("wheel",a),r.removeEventListener("touchstart",p),r.removeEventListener("touchend",g),f._cancel()}},_scrollTo(r){_(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),_(()=>r)},_scrollToIndex(r,{align:c,smooth:l}={}){if(r=P(r,0,e._getItemsLength()-1),c==="nearest"){const f=e._getItemOffset(r),d=e._getScrollOffset();if(f<d)c="start";else if(f+e._getItemSize(r)>d+e._getViewportSize())c="end";else return}_(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():c==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),l)},_fixScrollJump:r=>{if(n){if(i){i=!1;const c=n.style,l=c[o];c[o]="hidden",G(()=>{c[o]=l})}n[m]+=u(r,!0)}}}},Fe=(e,t)=>{let n;const s=t?"scrollX":"scrollY",i=t?"offsetLeft":"offsetTop",m=(o,u)=>t&&Z()?Oe(n,e,o,u):o;return{_observe(o){n=o;const u=(l,f)=>{const d=f+(t&&Z()?window.innerWidth-l[i]-l.offsetWidth:l[i]),a=l.offsetParent;return l===document.body||!a?d:u(a,d)},_=de(()=>{e._update(te)},150),r=()=>{e._update(ee,m(window[s])-u(o,0)),_()},c=be(e,t,_);return window.addEventListener("scroll",r),window.addEventListener("wheel",c,{passive:!0}),()=>{window.removeEventListener("scroll",r),window.removeEventListener("wheel",c),_._cancel()}},_fixScrollJump:o=>{window.scrollBy(t?m(o,!0):0,t?0:o)}}},ce="current",je={},Ie=(e,t)=>{if(Ee(e))for(const n of e)Ie(n,t);else!F(e)||typeof e=="boolean"||t.push(e)},Xe=e=>{const t=[];return Ie(e,t),t},Ge=e=>{const t=k.useRef();return t[ce]||(t[ce]=e())},ze={box:"border-box"},Ye=(e,t)=>{let n;const s=t?"width":"height",i=new WeakMap,m=x(()=>new ResizeObserver(o=>{const u=[];for(const{target:_,contentRect:r}of o)if(_.offsetParent)if(_===n)e._update(U,[r[s],r[t?"left":"top"],Y(Q(n)[t?"paddingRight":"paddingBottom"])]);else{const c=i.get(_);F(c)&&u.push([c,r[s]])}u.length&&e._update(K,u)}));return{_observeRoot(o){n=o;const u=m();return u.observe(o,ze),()=>{u.disconnect()}},_observeItem(o,u){const _=m();return i.set(o,u),_.observe(o),()=>{i.delete(o),_.unobserve(o)}}}},Ze=(e,t)=>{const n=t?"width":"height",s=t?"innerWidth":"innerHeight",i=new WeakMap,m=x(()=>new ResizeObserver(o=>{const u=[];for(const{target:_,contentRect:r}of o){if(!_.offsetParent)continue;const c=i.get(_);F(c)&&u.push([c,r[n]])}u.length&&e._update(K,u)}));return{_observeRoot(){const o=()=>{e._update(U,[window[s],0,0])};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o),m().disconnect()}},_observeItem(o,u){const _=m();return i.set(o,u),_.observe(o),()=>{i.delete(o),_.unobserve(o)}}}},$e=(e,t)=>{let n;const s="height",i="width",m=new WeakMap,o=new Set,u=new Set,_=new Map,r=(l,f)=>`${l}-${f}`,c=x(()=>new ResizeObserver(l=>{const f=new Set,d=new Set;for(const{target:a,contentRect:p}of l)if(a.offsetParent)if(a===n){const g=Q(n);e._update(U,[p[s],p.top,Y(g.paddingBottom)]),t._update(U,[p[i],p.left,Y(g.paddingRight)])}else{const g=m.get(a);if(g){const[v,w]=g,M=r(v,w),z=_.get(M),T=[p[s],p[i]];let E,C;z?(z[0]!==T[0]&&(E=!0),z[1]!==T[1]&&(C=!0)):E=C=!0,E&&f.add(v),C&&d.add(w),(E||C)&&_.set(M,T)}}if(f.size){const a=[];f.forEach(p=>{let g=0;u.forEach(v=>{const w=_.get(r(p,v));w&&(g=I(g,w[0]))}),g&&a.push([p,g])}),e._update(K,a)}if(d.size){const a=[];d.forEach(p=>{let g=0;o.forEach(v=>{const w=_.get(r(v,p));w&&(g=I(g,w[1]))}),g&&a.push([p,g])}),t._update(K,a)}}));return{_observeRoot(l){n=l;const f=c();return f.observe(l,ze),()=>{f.disconnect()}},_observeItem(l,f,d){const a=c();return m.set(l,[f,d]),o.add(f),u.add(d),a.observe(l),()=>{m.delete(l),a.unobserve(l)}}}},fe=k.forwardRef(({children:e,attrs:t,width:n,height:s,scrolling:i},m)=>se("div",{ref:m,...t,children:se("div",{style:k.useMemo(()=>({position:"relative",visibility:"hidden",width:n??"100%",height:s??"100%",pointerEvents:i?"none":"auto"}),[n,s,i]),children:e})}));try{fe.displayName="Viewport",fe.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}const ae=()=>[],Qe=()=>k.useReducer(ae,void 0,ae)[1];export{ke as A,q as S,B as U,fe as V,Ge as a,Qe as b,$ as c,Pe as d,Ke as e,je as f,Ue as g,$e as h,Z as i,qe as j,Ve as k,F as l,Ye as m,Ze as n,Fe as o,Xe as p,ce as r,Be as u,De as v};
