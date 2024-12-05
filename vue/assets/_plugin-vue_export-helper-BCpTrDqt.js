import{d as Ee,b as ve,m as fe,v as he,e as we,i as Re}from"./vue.esm-bundler-lSza16jR.js";const y=null,{min:w,max:L,abs:de,floor:ye}=Math,ee=(e,t,s)=>w(s,L(t,e)),Te=e=>[...e].sort((t,s)=>t-s),Se=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},te=e=>{let t,s;return()=>(t||(t=!0,s=e()),s)},C=-1,k=(e,t,s)=>{const r=s?"unshift":"push";for(let o=0;o<t;o++)e[r](C);return e},K=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},Ce=(e,t,s)=>{const r=e._sizes[t]===C;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),r},Y=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,r=e._offsets[s];for(;s<t;)r+=K(e,s),e._offsets[++s]=r;return e._computedOffsetIndex=t,r},Ae=e=>e._length?Y(e,e._length-1)+K(e,e._length-1):0,R=(e,t,s=0,r=e._length-1)=>{for(;s<=r;){const o=ye((s+r)/2),l=Y(e,o);if(l<=t){if(l+K(e,o)>t)return o;s=o+1}else r=o-1}return ee(s,0,e._length-1)},Ne=(e,t,s,r)=>{if(r=w(r,e._length-1),Y(e,r)<=t){const o=R(e,t+s,r);return[R(e,t,r,o),o]}else{const o=R(e,t,void 0,r);return[o,R(e,t+s,o)]}},Ve=(e,t)=>{let s=0;const r=[];e._sizes.forEach((c,d)=>{c!==C&&(r.push(c),d<t&&s++)}),e._computedOffsetIndex=-1;const o=Te(r),l=o.length,_=l/2|0,i=l%2===0?(o[_-1]+o[_])/2:o[_],n=e._defaultItemSize;return((e._defaultItemSize=i)-n)*L(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?k(s[0].slice(0,w(e,s[0].length)),L(0,e-s[0].length)):k([],e),_length:e,_computedOffsetIndex:-1,_offsets:k([],e)}),De=e=>[e._sizes.slice(),e._defaultItemSize],_e=(e,t,s)=>{const r=t-e._length;return e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,r>0?(k(e._offsets,r),k(e._sizes,r,s),e._defaultItemSize*r):(e._offsets.splice(r),(s?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((o,l)=>o-(l===C?e._defaultItemSize:l),0))},Me=typeof window<"u",pe=()=>document.documentElement,D=e=>e.ownerDocument,M=e=>e.defaultView,se=te(()=>Me?getComputedStyle(pe()).direction==="rtl":!1),ge=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),$e=te(()=>"scrollBehavior"in pe().style),A=0,me=1,ae=2,B=0,Je=1,Q=2,H=1,Ie=2,ne=3,re=4,Ue=5,be=6,oe=7,ie=8,N=1,F=2,We=4,Pe=8,qe=e=>L(e.$getTotalSize(),e.$getViewportSize()),Oe=e=>!!e.$getViewportSize(),Ke=(e,t=40,s=4,r=0,o,l=!1)=>{let _=!!r,i=[],n=0,c=0,d=0,u=0,f=0,m=0,$=0,I=A,O=B,a=_?[0,L(r-1,0)]:y,v=[0,0],ce=0;const p=ke(e,t,o),j=new Set,J=()=>d-c,U=()=>J()+m+f,le=S=>Ne(p,S,n,v[0]),G=()=>Ae(p),ue=S=>Y(p,S)-m,W=S=>K(p,S),X=S=>{S&&(ge()&&I!==A?m+=S:(f+=S,u++))};return{$getStateVersion:()=>i,$getCacheSnapshot:()=>De(p),$getRange:()=>{if($)return v;let[S,g]=le(L(0,U()));return a&&(S=w(S,a[0]),g=L(g,a[1])),I!==me&&(S-=L(0,s)),I!==ae&&(g+=L(0,s)),v=[L(S,0),w(g,p._length-1)]},$findStartIndex:()=>R(p,U()),$findEndIndex:()=>R(p,U()+n),$isUnmeasuredItem:S=>p._sizes[S]===C,_hasUnmeasuredItemsInFrozenRange:()=>a?p._sizes.slice(L(0,a[0]-1),w(p._length-1,a[1]+1)+1).includes(C):!1,$getItemOffset:ue,$getItemSize:W,$getItemsLength:()=>p._length,$getScrollOffset:()=>d,$isScrolling:()=>I!==A,$getViewportSize:()=>n,$getStartSpacerSize:()=>c,$getTotalSize:G,$getJumpCount:()=>u,_flushJump:()=>($=f,f=0,[$,O===Q||J()+n>=G()]),$subscribe:(S,g)=>{const V=[S,g];return j.add(V),()=>{j.delete(V)}},$update:(S,g)=>{let V,Z,E=0;switch(S){case H:{const h=$;$=0;const z=g-d,b=de(z);!(h&&b<de(h)+1)&&O===B&&(I=z<0?ae:me),_&&(a=y,_=!1),d=g,E=We;const x=J();x>=-n&&x<=G()&&(E+=N,Z=b>n);break}case Ie:{E=Pe,I!==A&&(V=!0,E+=N),I=A,O=B,a=y;break}case ne:{const h=g.filter(([z,b])=>p._sizes[z]!==b);if(!h.length)break;X(h.reduce((z,[b,P])=>((O===Q||(a?b<a[0]:ue(b)+(I===A&&O===B?W(b):0)<J()))&&(z+=P-W(b)),z),0));for(const[z,b]of h){const P=W(z),x=Ce(p,z,b);l&&(ce+=x?b:b-P)}l&&n&&ce>n&&(X(Ve(p,R(p,U()))),l=!1),E=N+F,Z=!0;break}case re:{n!==g&&(n=g,E=N+F);break}case Ue:{g[1]?(X(_e(p,g[0],!0)),O=Q,E=N):_e(p,g[0]);break}case be:{c=g;break}case oe:{O=Je;break}case ie:{a=le(g),E=N;break}}E&&(i=[],V&&m&&(f+=m,m=0,u++),j.forEach(([h,z])=>{E&h&&z(Z)}))}}},q=setTimeout,xe=(e,t)=>{let s;const r=()=>{s!=y&&clearTimeout(s)},o=()=>{r(),s=q(()=>{s=y,e()},t)};return o._cancel=r,o},T=(e,t)=>t&&se()?-e:e,ze=(e,t,s,r,o,l)=>{const _=Date.now;let i=0,n=!1,c=!1,d=!1,u=!1;const f=xe(()=>{if(n||c){n=!1,f();return}d=!1,e.$update(Ie)},150),m=()=>{i=_(),d&&(u=!0),l&&e.$update(be,l()),e.$update(H,r()),f()},$=a=>{if(n||!e.$isScrolling()||a.ctrlKey)return;const v=_()-i;150>v&&50<v&&(s?a.deltaX:a.deltaY)&&(n=!0)},I=()=>{c=!0,d=u=!1},O=()=>{c=!1,ge()&&(d=!0)};return t.addEventListener("scroll",m),t.addEventListener("wheel",$,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",O,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",m),t.removeEventListener("wheel",$),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",O),f._cancel()},_fixScrollJump:()=>{const[a,v]=e._flushJump();a&&(o(T(a,s),v,u),u=!1,v&&e.$getViewportSize()>e.$getTotalSize()&&e.$update(H,r()))}}},Ye=(e,t)=>{let s,r,o;const l=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",i=async(n,c)=>{if(!s){Se(()=>i(n,c));return}o&&o();const d=()=>{let u;return[new Promise((f,m)=>{u=f,o=m,Oe(e)&&q(m,150)}),e.$subscribe(F,()=>{u&&u()})]};if(c&&$e()){for(;e.$update(ie,n()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,f]=d();try{await u}catch{return}finally{f()}}s.scrollTo({[t?"left":"top"]:T(n(),t),behavior:"smooth"})}else for(;;){const[u,f]=d();try{s[l]=T(n(),t),e.$update(oe),await u}catch{return}finally{f()}}};return{$observe(n){s=n,r=ze(e,n,t,()=>T(n[l],t),(c,d,u)=>{if(u){const f=n.style,m=f[_];f[_]="hidden",q(()=>{f[_]=m})}d?(n[l]=e.$getScrollOffset()+c,o&&o()):n[l]+=c})},$dispose(){r&&r._dispose()},$scrollTo(n){i(()=>n)},$scrollBy(n){n+=e.$getScrollOffset(),i(()=>n)},$scrollToIndex(n,{align:c,smooth:d,offset:u=0}={}){if(n=ee(n,0,e.$getItemsLength()-1),c==="nearest"){const f=e.$getItemOffset(n),m=e.$getScrollOffset();if(f<m)c="start";else if(f+e.$getItemSize(n)>m+e.$getViewportSize())c="end";else return}i(()=>u+e.$getStartSpacerSize()+e.$getItemOffset(n)+(c==="end"?e.$getItemSize(n)-e.$getViewportSize():c==="center"?(e.$getItemSize(n)-e.$getViewportSize())/2:0),d)},$fixScrollJump:()=>{r&&r._fixScrollJump()}}},je=(e,t)=>{let s,r,o;const l=(i,n,c,d,u=0)=>{const f=d?"offsetLeft":"offsetTop",m=u+(d&&se()?c.innerWidth-i[f]-i.offsetWidth:i[f]),$=i.offsetParent;return i===n||!$?m:l($,n,c,d,m)},_=async(i,n)=>{if(!s){Se(()=>_(i,n));return}o&&o();const c=()=>{let u;return[new Promise((f,m)=>{u=f,o=m,Oe(e)&&q(m,150)}),e.$subscribe(F,()=>{u&&u()})]},d=M(D(s));if(n&&$e()){for(;e.$update(ie,i()),!!e._hasUnmeasuredItemsInFrozenRange();){const[u,f]=c();try{await u}catch{return}finally{f()}}d.scroll({[t?"left":"top"]:T(i(),t),behavior:"smooth"})}else for(;;){const[u,f]=c();try{d.scroll({[t?"left":"top"]:T(i(),t)}),e.$update(oe),await u}catch{return}finally{f()}}};return{$observe(i){s=i;const n=t?"scrollX":"scrollY",c=D(i),d=M(c),u=c.body;r=ze(e,d,t,()=>T(d[n],t),(f,m)=>{m?d.scroll({[t?"left":"top"]:e.$getScrollOffset()+f}):d.scrollBy(t?f:0,t?0:f)},()=>l(i,u,d,t))},$dispose(){r&&r._dispose(),s=void 0},$fixScrollJump:()=>{r&&r._fixScrollJump()},$scrollToIndex(i,{align:n,smooth:c,offset:d=0}={}){if(!s)return;if(i=ee(i,0,e.$getItemsLength()-1),n==="nearest"){const $=e.$getItemOffset(i),I=e.$getScrollOffset();if($<I)n="start";else if($+e.$getItemSize(i)>I+e.$getViewportSize())n="end";else return}const u=D(s),f=M(u),m=u.documentElement;_(()=>{const $=l(s,u.body,f,t),I=f.innerHeight-m.clientHeight,O=f.innerHeight-m.clientWidth,a=n==="end"||n==="center"?t?O:I:0;return d+$+e.$getItemOffset(i)+(n==="end"?e.$getItemSize(i)-(e.$getViewportSize()-a):n==="center"?(e.$getItemSize(i)-(e.$getViewportSize()-a))/2:0)},c)}}},Le=e=>{let t;return{_observe(s){(t||(t=new(M(D(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ge=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,l=Le(_=>{const i=[];for(const{target:n,contentRect:c}of _)if(n.offsetParent)if(n===s)e.$update(re,c[r]);else{const d=o.get(n);d!=y&&i.push([d,c[r]])}i.length&&e.$update(ne,i)});return{$observeRoot(_){l._observe(s=_)},$observeItem:(_,i)=>(o.set(_,i),l._observe(_),()=>{o.delete(_),l._unobserve(_)}),$dispose:l._dispose}},Xe=(e,t)=>{const s=t?"width":"height",r=t?"innerWidth":"innerHeight",o=new WeakMap,l=Le(i=>{const n=[];for(const{target:c,contentRect:d}of i){if(!c.offsetParent)continue;const u=o.get(c);u!=y&&n.push([u,d[s]])}n.length&&e.$update(ne,n)});let _;return{$observeRoot(i){const n=M(D(i)),c=()=>{e.$update(re,n[r])};n.addEventListener("resize",c),c(),_=()=>{n.removeEventListener("resize",c)}},$observeItem:(i,n)=>(o.set(i,n),l._observe(i),()=>{o.delete(i),l._unobserve(i)}),$dispose(){_&&_(),l._dispose()}}};function Be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Re(e)}const Ze=Ee({props:{_rerender:{type:Object,required:!0},_store:{type:Object,required:!0},_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean},_as:{type:String,required:!0}},setup(e){const t=ve(),s=fe(()=>e._rerender.value&&e._store.$getItemOffset(e._index)),r=fe(()=>e._rerender.value&&e._store.$isUnmeasuredItem(e._index));return he(()=>t.value&&e._index,(o,l,_)=>{_(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:o,_isHorizontal:l,_isSSR:_,_as:i}=e,n=r.value,c={position:n&&_?void 0:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:"0px",[l?se()?"right":"left":"top"]:s.value+"px",visibility:!n||_?"visible":"hidden"};return l&&(c.display="flex"),we(i,{ref:t,style:c},Be(o)?o:{default:()=>[o],_:2},8,["style"])}}}),Qe=(e,t)=>{const s=e.key;return s??"_"+t},He=(e,t)=>e[0]===t[0]&&e[1]===t[1],et=(e,t)=>{const s=e.__vccOpts||e;for(const[r,o]of t)s[r]=o;return s};export{Ue as A,Ze as L,N as U,et as _,We as a,Pe as b,Ke as c,Qe as d,Ge as e,Ye as f,qe as g,be as h,He as i,Xe as j,je as k,Se as m};
