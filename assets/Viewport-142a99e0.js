import{r as y}from"./index-c6dae603.js";import{j as Z}from"./jsx-runtime-c3d7f245.js";const V=Math.min,L=Math.max,me=Math.abs,Q=Date.now,Ce=Object.values,re=setTimeout,k=(e,t,s)=>V(s,L(t,e)),K=e=>e!=null,pe=e=>{const t=[...e].sort((r,n)=>r-n),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},oe=(e,t)=>{let s;const r=()=>{K(s)&&clearTimeout(s)},n=()=>{r(),s=re(()=>{s=null,e()},t)};return n._cancel=r,n},ge=(e,t)=>{let s=Q()-t;return(...r)=>{const n=Q();s+t<n&&(s=n,e(...r))}},J=e=>{let t,s;return(...r)=>(t||(t=!0,s=e(...r)),s)},ie=e=>getComputedStyle(e),B=e=>e?parseFloat(e):0,E=-1,N=(e,t)=>{const s=e._sizes[t];return s===E?e._defaultItemSize:s},we=(e,t,s)=>{const r=e._sizes[t]===E;return e._sizes[t]=s,e._measuredOffsetIndex=V(t,e._measuredOffsetIndex),r},F=(e,t)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return e._offsets[t];let s=e._measuredOffsetIndex,r=e._offsets[s];for(;s<t;)r+=N(e,s),e._offsets[++s]=r;return e._measuredOffsetIndex=t,r},Se=e=>e._length?F(e,e._length-1)+N(e,e._length-1):0,j=(e,t,s)=>{let r=0;if(s>=0)for(;t<e._length-1;){const n=N(e,t++);if((r+=n)>=s){r-n/2>=s&&t--;break}}else for(;t>0;){const n=N(e,--t);if((r-=n)<=s){r+n/2<s&&t++;break}}return k(t,0,e._length-1)},Y=(e,t,s)=>j(e,s,t-F(e,s)),Ie=(e,t,s)=>e._sizes.slice(t,s+1).includes(E),be=e=>{const t=e._sizes.filter(r=>r!==E),s=t[0];e._defaultItemSize=t.every(r=>r===s)?s:pe(t)},le=(e,t,s)=>{const r=s?"unshift":"push";for(let n=e._length;n<t;n++)e._sizes[r](E),e._offsets.push(n===0?0:E);e._length=t},Oe=(e,t)=>{const s={_defaultItemSize:t,_length:0,_measuredOffsetIndex:0,_sizes:[],_offsets:[]};return le(s,e),s},$=(e,t,s)=>{const r=t-e._length,n=r<0;let f;return n?(f=(s?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((l,i)=>l+(i===E?e._defaultItemSize:i),0),e._offsets.splice(r)):(f=e._defaultItemSize*r,le(e,e._length+r,s)),e._measuredOffsetIndex=s?0:k(t-1,0,e._measuredOffsetIndex),e._length=t,[f,n]},q=(e,t,s)=>t.reduce((r,[n,f])=>{const l=f-N(e,n);return(!s||l>0)&&(r+=l),r},0),ve=1.5,x=0,he=1,H=2,U=1,W=2,ze=3,D=4,ue=5,X=6,fe=7,ee=1,G=2,te=4,se=8,Re=16,xe=(e,t,s=40,r=0,n=Oe(t,s),f,l)=>{let i=s*L(r-1,0),o=0,a=0,m=0,u=x,c=!1,S=!1,g=!1,p=[0,r];const w=new Set,z=()=>Se(n),b=()=>z()-i,A=_=>k(_,0,b()),T=_=>{const d=u;return u=_,u!==d&&(u===x||d===x)};return{_getCache(){return JSON.parse(JSON.stringify(n))},_getRange(){const[_,d]=p,I=Y(n,o,V(_,n._length-1)),O=j(n,I,i);return _===I&&d===O?p:p=[I,O]},_isUnmeasuredItem(_){return n._sizes[_]===E},_hasUnmeasuredItemsInTargetViewport(_){const d=Y(n,_,p[0]);return Ie(n,L(0,d-1),V(n._length-1,j(n,d,i)+1))},_getItemOffset(_){const d=F(n,_);return f?d+L(0,i-z()):d},_getItemSize(_){return N(n,_)},_getItemsLength(){return n._length},_getScrollOffset(){return o},_getScrollOffsetMax:b,_getIsScrolling(){return u!==x},_getViewportSize(){return i},_getCorrectedScrollSize(){return L(z(),i)},_getJumpCount(){return a},_flushJump(){const _=m;return m=0,_},_subscribe(_,d){const I=[_,d];return w.add(I),()=>{w.delete(I)}},_update(_,d){let I,O=0;switch(_){case U:{const v=d.filter(([R,M])=>n._sizes[R]!==M);if(!v.length)break;let h=0;if(c||S){const[R]=p;o===0||(o>b()-ve?h=q(n,v,!0):h=q(n,v.filter(([M])=>M<R)))}else u===H&&(h=q(n,v));h&&(m=h,a++,O+=te);let C=!1;v.forEach(([R,M])=>{we(n,R,M)&&(C=!0)}),l&&C&&!o&&be(n),O+=G,g=I=!0;break}case W:{i!==d&&(i=d,O=G);break}case ze:{if(d[1]){const v=b()-o,[h,C]=$(n,d[0],!0),R=C?-V(h,v):h;m+=R,o=A(o+R),a++,O=ee+te,c=!0}else $(n,d[0]);break}case D:case ue:{if(o===d)break;if(_===D){const v=d-o,h=g;g=!1,(u===x||!h)&&!S&&T(v<0?H:he)&&(O+=se),I=me(v)>i,O+=Re,h||(c=!1)}o=A(d),O+=ee;break}case X:{T(x)&&(O=se),c=S=!1;break}case fe:{S=!0;break}}if(O){const v=()=>{w.forEach(([h,C])=>{O&h&&C()})};I?e(v):v()}}}},ce=typeof window<"u"?y.useLayoutEffect:y.useEffect,P="current",Ne={},de=(e,t)=>{if(Array.isArray(e))for(const s of e)de(s,t);else!K(e)||typeof e=="boolean"||t.push(e)},Ae=e=>{const t=[];return de(e,t),t},Ee=e=>{const t=y.useRef(e);return ce(()=>{t[P]=e},[e]),t},Me=(e,t,s,r)=>{const[n,f]=y.useState(t),l=Ee(t);if(ce(()=>e._subscribe(s,()=>{f(()=>l[P]())}),[]),r){const i=t();n!==i&&f(i)}return n},Le=J(e=>{const t="scrollLeft",s=e[t];e[t]=1;const r=e[t]<1;return e[t]=s,r}),ae=(e,t,s)=>ge(r=>{if(e._getIsScrolling()&&!r.ctrlKey&&(t?r.deltaX:r.deltaY)){const n=e._getScrollOffset();n>0&&n<e._getScrollOffsetMax()&&s()}},50),Ve=(e,t,s)=>{let r,n;const f=t?"scrollLeft":"scrollTop",l=(o,a)=>t&&s?Le(r)||a?-o:e._getScrollOffsetMax()-o:o,i=async o=>{if(!r)return;const a=()=>k(o(),0,e._getScrollOffsetMax());for(;;){const m=a();if(e._update(ue,m),!e._hasUnmeasuredItemsInTargetViewport(m))break;n&&n[1]();const u=e._subscribe(G,()=>{n&&n[0]()});try{await new Promise((c,S)=>{let g=!1;const p=()=>{g||(g=!0,c(),n=void 0)};n=[p,S],re(p,250)})}catch{return}finally{u()}}r[f]=l(a()),e._update(fe)};return{_initRoot(o){r=o;const a=()=>{e._update(D,l(o[f]))},m=oe(()=>{a(),e._update(X)},150),u=()=>{a(),m()},c=ae(e,t,m);return o.addEventListener("scroll",u),o.addEventListener("wheel",c,{passive:!0}),()=>{o.removeEventListener("scroll",u),o.removeEventListener("wheel",c),m._cancel()}},_scrollTo(o){i(()=>o)},_scrollBy(o){o+=e._getScrollOffset(),i(()=>o)},_scrollToIndex(o,a){o=k(o,0,e._getItemsLength()-1),i(a==="end"?()=>e._getItemOffset(o)+e._getItemSize(o)-e._getViewportSize():()=>e._getItemOffset(o))},_fixScrollJump:o=>{r&&(r[f]+=l(o,!0))}}},ke=(e,t)=>{const s=t?"scrollX":"scrollY",r=t?"offsetLeft":"offsetTop";return{_initRoot(n){let f=!1;const l=(c,S)=>{const g=S+c[r],p=c.offsetParent;return c===document.body||!p?g:l(p,g)},i=()=>{f&&e._update(D,window[s]-l(n,0))},o=oe(()=>{i(),e._update(X)},150),a=()=>{i(),o()},m=ae(e,t,o),u=new IntersectionObserver(([c])=>{f=c.isIntersecting});return u.observe(n),window.addEventListener("scroll",a),window.addEventListener("wheel",m,{passive:!0}),()=>{u.disconnect(),window.removeEventListener("scroll",a),window.removeEventListener("wheel",m),o._cancel()}},_fixScrollJump:n=>{window.scrollBy(t?n:0,t?0:n)}}},Ue=e=>{const t=y.useRef();return t[P]||(t[P]=e())},_e={box:"border-box"},We=(e,t)=>{let s;const r=t?"width":"height",n=new WeakMap,f=J(()=>new ResizeObserver(l=>{const i=[];for(const o of l){const{target:a,contentRect:m}=o;if(a===s)e._update(W,m[r]+m[t?"left":"top"]+B(ie(s)[t?"paddingRight":"paddingBottom"]));else{const u=n.get(a);K(u)&&i.push([u,m[r]])}}i.length&&e._update(U,i)}));return{_observeRoot(l){s=l;const i=f();return i.observe(l,_e),()=>{i.disconnect()}},_observeItem(l,i){const o=f();return n.set(l,i),o.observe(l),()=>{n.delete(l),o.unobserve(l)}}}},De=(e,t)=>{const s=t?"width":"height",r=t?"innerWidth":"innerHeight",n=new WeakMap,f=J(()=>new ResizeObserver(l=>{const i=[];for(const{target:o,contentRect:a}of l){const m=n.get(o);K(m)&&i.push([m,a[s]])}i.length&&e._update(U,i)}));return{_observeRoot(){const l=()=>{e._update(W,window[r])};return window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l),f().disconnect()}},_observeItem(l,i){const o=f();return n.set(l,i),o.observe(l),()=>{n.delete(l),o.unobserve(l)}}}},Pe=(e,t)=>{let s;const r="height",n="width",f=new WeakMap,l=new Set,i=new Set,o=new Map,a=(u,c)=>`${u}-${c}`,m=J(()=>new ResizeObserver(u=>{const c=new Set,S=new Set;for(const{target:g,contentRect:p}of u)if(g===s){const w=ie(s);e._update(W,p[r]+p.top+B(w.paddingBottom)),t._update(W,p[n]+p.left+B(w.paddingRight))}else{const w=f.get(g);if(w){const[z,b]=w,A=a(z,b),T=o.get(A),_=[p[r],p[n]];let d,I;T?(T[0]!==_[0]&&(d=!0),T[1]!==_[1]&&(I=!0)):d=I=!0,d&&c.add(z),I&&S.add(b),(d||I)&&o.set(A,_)}}if(c.size){const g=[];c.forEach(p=>{let w=0;i.forEach(z=>{const b=o.get(a(p,z));b&&(w=L(w,b[0]))}),w&&g.push([p,w])}),e._update(U,g)}if(S.size){const g=[];S.forEach(p=>{let w=0;l.forEach(z=>{const b=o.get(a(z,p));b&&(w=L(w,b[1]))}),w&&g.push([p,w])}),t._update(U,g)}}));return{_observeRoot(u){s=u;const c=m();return c.observe(u,_e),()=>{c.disconnect()}},_observeItem(u,c,S){const g=m();return f.set(u,[c,S]),l.add(c),i.add(S),g.observe(u),()=>{f.delete(u),g.unobserve(u)}}}},ne=y.forwardRef(({children:e,attrs:t,width:s,height:r,scrolling:n},f)=>Z("div",{ref:f,...t,children:Z("div",{style:y.useMemo(()=>({position:"relative",visibility:"hidden",width:s??"100%",height:r??"100%",pointerEvents:n?"none":"auto"}),[s,r,n]),children:e})}));try{ne.displayName="Viewport",ne.__docgenInfo={description:"",displayName:"Viewport",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"ViewportComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{ze as A,ee as U,ne as V,Ue as a,Me as b,ce as c,Ne as d,K as e,Ae as f,xe as g,De as h,ke as i,G as j,se as k,te as l,L as m,V as n,Pe as o,Ve as p,Re as q,P as r,We as s,Ee as u,Ce as v};
//# sourceMappingURL=Viewport-142a99e0.js.map
