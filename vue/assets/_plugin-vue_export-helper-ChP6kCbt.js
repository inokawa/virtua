import{d as Oe,b as be,s as Ie,e as ze,i as Le}from"./vue.esm-bundler-6P8ENG_2.js";const T=null,{min:y,max:h,abs:oe,floor:Ee}=Math,G=setTimeout,ue=(e,t,s)=>y(s,h(t,e)),he=e=>[...e].sort((t,s)=>t-s),ve=e=>{const t=he(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Re=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Te=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},o=()=>{n(),s=G(()=>{s=T,e()},t)};return o._cancel=n,o},$=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},C=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](C);return e},P=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},ye=(e,t,s)=>{const n=e._sizes[t]===C;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},x=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=P(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Ce=e=>e._length?x(e,e._length-1)+P(e,e._length-1):0,U=(e,t,s=0,n=e._length-1)=>{for(;s<=n;){const o=Ee((s+n)/2),l=x(e,o);if(l<=t){if(l+P(e,o)>t)return o;s=o+1}else n=o-1}return ue(s,0,e._length-1)},we=(e,t,s,n)=>{if(n=y(n,e._length-1),x(e,n)<=t){const o=U(e,t+s,n);return[U(e,t,n,o),o]}else{const o=U(e,t,void 0,n);return[o,U(e,t+s,o)]}},Ne=(e,t)=>{let s=0;const n=e._sizes.filter((l,c)=>{const i=l!==C;return i&&c<t&&s++,i}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=ve(n))-o)*h(t-s,0)},Ae=(e,t,s)=>({_defaultItemSize:t,_sizes:B([],e),_length:e,_computedOffsetIndex:-1,_offsets:B([],e)}),ke=e=>[e._sizes.slice(),e._defaultItemSize],ie=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,n>0?(B(e._offsets,n),B(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,l)=>o-(l===C?e._defaultItemSize:l),0))},De=typeof window<"u",le=()=>document.documentElement,Q=e=>e.ownerDocument,H=e=>e.defaultView,ee=$(()=>De?getComputedStyle(le()).direction==="rtl":!1),ce=$(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Me=$(()=>"scrollBehavior"in le().style),N=0,fe=1,_e=2,W=0,Ve=1,j=2,X=1,de=2,te=3,se=4,Je=5,ae=6,me=7,Se=8,w=1,Z=2,Ue=4,We=8,xe=e=>h(e._getTotalSize(),e._getViewportSize()),Fe=(e,t,s,n,o)=>(n!==fe&&(e-=h(0,s)),n!==_e&&(t+=h(0,s)),[h(e,0),y(t,o-1)]),Ke=(e,t=40,s=0,n,o=!1)=>{let l=!!s,c=[],i=0,r=0,u=0,_=0,f=0,d=0,a=0,I=N,O=W,S=l?[0,h(s-1,0)]:T,p=[0,0],v=0;const g=Ae(e,t),F=new Set,D=()=>u-r,ne=m=>we(g,m,i,p[0]),K=()=>Ce(g),re=m=>x(g,m)-d,M=m=>P(g,m),q=m=>{m&&(ce()&&I!==N?d+=m:(f+=m,_++))};return{_getStateVersion(){return c},_getCacheSnapshot(){return ke(g)},_getRange(){return a?p:(p=ne(h(0,D()+d+f)),S?[y(p[0],S[0]),h(p[1],S[1])]:p)},_isUnmeasuredItem(m){return g._sizes[m]===C},_isInitialMeasurementDone(){return!!i},_hasUnmeasuredItemsInFrozenRange(){return S?g._sizes.slice(h(0,S[0]-1),y(g._length-1,S[1]+1)+1).includes(C):!1},_getItemOffset:re,_getItemSize:M,_getItemsLength(){return g._length},_getScrollOffset(){return u},_getScrollDirection(){return I},_getViewportSize(){return i},_getStartSpacerSize(){return r},_getTotalSize:K,_getJumpCount(){return _},_flushJump(){return a=f,f=0,[a,O===j||D()+i>=K()]},_subscribe(m,z){const A=[m,z];return F.add(A),()=>{F.delete(A)}},_update(m,z){let A,Y,E=0;switch(m){case X:{const R=a;a=0;const L=z-u,b=oe(L);!(R&&b<oe(R)+1)&&O===W&&(I=L<0?_e:fe),l&&(S=T,l=!1),u=z,E=Ue;const J=D();J>=-i&&J<=K()&&(E+=w,Y=b>i);break}case de:{E=We,I!==N&&(A=!0,E+=w),I=N,O=W,S=T;break}case te:{const R=z.filter(([L,b])=>g._sizes[L]!==b);if(!R.length)break;q(R.reduce((L,[b,V])=>((O===j||(S?b<S[0]:re(b)+(I===N&&O===W?M(b):0)<D()))&&(L+=V-M(b)),L),0));for(const[L,b]of R){const V=M(L),J=ye(g,L,b);o&&(v+=J?b:b-V)}o&&i&&v>i&&(q(Ne(g,p[0])),o=!1),E=w+Z,Y=!0;break}case se:{i!==z&&(i=z,E=w+Z);break}case Je:{z[1]?(q(ie(g,z[0],!0)),O=j,E=w):ie(g,z[0]);break}case ae:{r=z;break}case me:{O=Ve;break}case Se:{S=ne(z),E=w;break}}E&&(c=[],A&&d&&(f+=d,d=0,_++),F.forEach(([R,L])=>{E&R&&L(Y)}))}}},pe=e=>{let t;return{_observe(s){(t||(t=new(H(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},qe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,l=pe(c=>{const i=[];for(const{target:r,contentRect:u}of c)if(r.offsetParent)if(r===s)e._update(se,u[n]);else{const _=o.get(r);_!=T&&i.push([_,u[n]])}i.length&&e._update(te,i)});return{_observeRoot(c){l._observe(s=c)},_observeItem:(c,i)=>(o.set(c,i),l._observe(c),()=>{o.delete(c),l._unobserve(c)}),_dispose:l._dispose}},Ye=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,l=pe(i=>{const r=[];for(const{target:u,contentRect:_}of i){if(!u.offsetParent)continue;const f=o.get(u);f!=T&&r.push([f,_[s]])}r.length&&e._update(te,r)});let c;return{_observeRoot(i){const r=H(Q(i)),u=()=>{e._update(se,r[n])};r.addEventListener("resize",u),u(),c=()=>{r.removeEventListener("resize",u)}},_observeItem:(i,r)=>(o.set(i,r),l._observe(i),()=>{o.delete(i),l._unobserve(i)}),_dispose(){c&&c(),l._dispose()}}},k=(e,t)=>t&&ee()?-e:e,ge=(e,t,s,n,o,l)=>{const c=Date.now;let i=0,r=!1,u=!1,_=!1,f=!1;const d=Te(()=>{if(r||u){r=!1,d();return}_=!1,e._update(de)},150),a=()=>{i=c(),_&&(f=!0),l&&e._update(ae,l()),e._update(X,n()),d()},I=p=>{if(r||e._getScrollDirection()===N||p.ctrlKey)return;const v=c()-i;150>v&&50<v&&(s?p.deltaX:p.deltaY)&&(r=!0)},O=()=>{u=!0,_=f=!1},S=()=>{u=!1,ce()&&(_=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",S),d._cancel()},_fixScrollJump:()=>{const[p,v]=e._flushJump();p&&(o(k(p,s),v,f),f=!1,v&&e._getViewportSize()>e._getTotalSize()&&e._update(X,n()))}}},je=(e,t)=>{let s,n,o;const l=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",i=async(r,u)=>{if(!s){Re(()=>i(r,u));return}o&&o();const _=()=>{let f;return[new Promise((d,a)=>{f=d,o=a,e._isInitialMeasurementDone()&&G(a,150)}),e._subscribe(Z,()=>{f&&f()})]};if(u&&Me()){for(;e._update(Se,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,d]=_();try{await f}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:k(r(),t),behavior:"smooth"})}else for(;;){const[f,d]=_();try{s[l]=k(r(),t),e._update(me),await f}catch{return}finally{d()}}};return{_observe(r){s=r,n=ge(e,r,t,()=>k(r[l],t),(u,_,f)=>{if(f){const d=r.style,a=d[c];d[c]="hidden",G(()=>{d[c]=a})}_?(r[l]=e._getScrollOffset()+u,o&&o()):r[l]+=u})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:u,smooth:_,offset:f=0}={}){if(r=ue(r,0,e._getItemsLength()-1),u==="nearest"){const d=e._getItemOffset(r),a=e._getScrollOffset();if(d<a)u="start";else if(d+e._getItemSize(r)>a+e._getViewportSize())u="end";else return}i(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(u==="end"?e._getItemSize(r)-e._getViewportSize():u==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),_)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Ge=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",l=Q(n),c=H(l),i=l.body,r=(u,_,f,d=0)=>{const a=f?"offsetLeft":"offsetTop",I=d+(f&&ee()?c.innerWidth-u[a]-u.offsetWidth:u[a]),O=u.offsetParent;return u===_||!O?I:r(O,_,f,I)};s=ge(e,c,t,()=>k(c[o],t),(u,_)=>{_?c.scroll({[t?"left":"top"]:e._getScrollOffset()+u}):c.scrollBy(t?u:0,t?0:u)},()=>r(n,i,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};function Be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Le(e)}const Xe=Oe({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean},_as:{type:String,required:!0}},setup(e){const t=be();return Ie(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_isHorizontal:l,_isSSR:c,_as:i}=e,r={position:o&&c?void 0:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:"0px",[l?ee()?"right":"left":"top"]:n+"px",visibility:!o||c?"visible":"hidden"};return l&&(r.display="flex"),ze(i,{ref:t,style:r},Be(s)?s:{default:()=>[s],_:2},8,["style"])}}}),Ze=(e,t)=>{const s=e.key;return s!=T?s:"_"+t},$e=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{Je as A,Xe as L,N as S,w as U,$e as _,Ue as a,We as b,Ke as c,Fe as d,Ze as e,qe as f,xe as g,je as h,ae as i,Ye as j,Ge as k,Re as m};
