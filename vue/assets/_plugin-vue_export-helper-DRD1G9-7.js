import{d as Oe,b as Ie,s as be,e as ze,i as he}from"./vue.esm-bundler-6P8ENG_2.js";const T=null,{min:w,max:v,abs:re}=Math,Y=setTimeout,ue=(e,t,s)=>w(s,v(t,e)),Le=e=>[...e].sort((t,s)=>t-s),ve=e=>{const t=Le(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Ee=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Re=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},o=()=>{n(),s=Y(()=>{s=T,e()},t)};return o._cancel=n,o},X=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,U=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},W=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},Te=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),n},Z=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=W(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},we=e=>e._length?Z(e,e._length-1)+W(e,e._length-1):0,oe=(e,t,s)=>{for(;s>=0&&s<e._length;){const n=Z(e,s);if(n<=t){if(n+W(e,s)>t)break;s++}else s--}return ue(s,0,e._length-1)},ye=(e,t,s,n)=>{const o=oe(e,t,w(s,e._length-1));return[o,oe(e,t+n,o)]},Ce=(e,t)=>{let s=0;const n=e._sizes.filter((l,c)=>{const i=l!==y;return i&&c<t&&s++,i}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=ve(n))-o)*v(t-s,0)},Ne=(e,t,s)=>({_defaultItemSize:t,_sizes:U([],e),_length:e,_computedOffsetIndex:-1,_offsets:U([],e)}),Ae=e=>[[...e._sizes],e._defaultItemSize],ie=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,n>0?(U(e._offsets,n),U(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,l)=>o-(l===y?e._defaultItemSize:l),0))},ke=typeof window<"u",le=()=>document.documentElement,$=e=>e.ownerDocument,Q=e=>e.defaultView,H=X(()=>ke?getComputedStyle(le()).direction==="rtl":!1),ce=X(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),De=X(()=>"scrollBehavior"in le().style),N=0,fe=1,_e=2,x=0,Me=1,q=2,j=1,de=2,ee=3,te=4,Ve=5,ae=6,me=7,Se=8,C=1,G=2,Je=4,xe=8,Be=e=>v(e._getTotalSize(),e._getViewportSize()),Pe=(e,t,s,n,o)=>(n!==fe&&(e-=v(0,s)),n!==_e&&(t+=v(0,s)),[v(e,0),w(t,o-1)]),Fe=(e,t=40,s=0,n,o=!1)=>{let l=!!s,c=[],i=0,r=0,u=0,_=0,f=0,d=0,a=0,b=N,O=x,S=l?[0,v(s-1,0)]:T,p=[0,0],E=0;const g=Ne(e,t),B=new Set,D=()=>u-r,se=m=>ye(g,m,p[0],i),P=()=>we(g),ne=m=>Z(g,m)-d,M=m=>W(g,m),F=m=>{m&&(ce()&&b!==N?d+=m:(f+=m,_++))};return{_getStateVersion(){return c},_getCacheSnapshot(){return Ae(g)},_getRange(){return a?p:(p=se(v(0,D()+d+f)),S?[w(p[0],S[0]),v(p[1],S[1])]:p)},_isUnmeasuredItem(m){return g._sizes[m]===y},_isInitialMeasurementDone(){return!!i},_hasUnmeasuredItemsInFrozenRange(){return S?g._sizes.slice(v(0,S[0]-1),w(g._length-1,S[1]+1)+1).includes(y):!1},_getItemOffset:ne,_getItemSize:M,_getItemsLength(){return g._length},_getScrollOffset(){return u},_getScrollDirection(){return b},_getViewportSize(){return i},_getStartSpacerSize(){return r},_getTotalSize:P,_getJumpCount(){return _},_flushJump(){return a=f,f=0,[a,O===q||D()+i>=P()]},_subscribe(m,z){const A=[m,z];return B.add(A),()=>{B.delete(A)}},_update(m,z){let A,K,L=0;switch(m){case j:{const R=a;a=0;const h=z-u,I=re(h);!(R&&I<re(R)+1)&&O===x&&(b=h<0?_e:fe),l&&(S=T,l=!1),u=z,L=Je;const J=D();J>=-i&&J<=P()&&(L+=C,K=I>i);break}case de:{L=xe,b!==N&&(A=!0,L+=C),b=N,O=x,S=T;break}case ee:{const R=z.filter(([h,I])=>g._sizes[h]!==I);if(!R.length)break;F(R.reduce((h,[I,V])=>((O===q||(S?I<S[0]:ne(I)+(b===N&&O===x?M(I):0)<D()))&&(h+=V-M(I)),h),0));for(const[h,I]of R){const V=M(h),J=Te(g,h,I);o&&(E+=J?I:I-V)}o&&i&&E>i&&(F(Ce(g,p[0])),o=!1),L=C+G,K=!0;break}case te:{i!==z&&(i=z,L=C+G);break}case Ve:{z[1]?(F(ie(g,z[0],!0)),O=q,L=C):ie(g,z[0]);break}case ae:{r=z;break}case me:{O=Me;break}case Se:{S=se(z),L=C;break}}L&&(c=[],A&&d&&(f+=d,d=0,_++),B.forEach(([R,h])=>{L&R&&h(K)}))}}},pe=e=>{let t;return{_observe(s){(t||(t=new(Q($(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ke=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,l=pe(c=>{const i=[];for(const{target:r,contentRect:u}of c)if(r.offsetParent)if(r===s)e._update(te,u[n]);else{const _=o.get(r);_!=T&&i.push([_,u[n]])}i.length&&e._update(ee,i)});return{_observeRoot(c){l._observe(s=c)},_observeItem:(c,i)=>(o.set(c,i),l._observe(c),()=>{o.delete(c),l._unobserve(c)}),_dispose:l._dispose}},qe=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,l=pe(i=>{const r=[];for(const{target:u,contentRect:_}of i){if(!u.offsetParent)continue;const f=o.get(u);f!=T&&r.push([f,_[s]])}r.length&&e._update(ee,r)});let c;return{_observeRoot(i){const r=Q($(i)),u=()=>{e._update(te,r[n])};r.addEventListener("resize",u),u(),c=()=>{r.removeEventListener("resize",u)}},_observeItem:(i,r)=>(o.set(i,r),l._observe(i),()=>{o.delete(i),l._unobserve(i)}),_dispose(){c&&c(),l._dispose()}}},k=(e,t)=>t&&H()?-e:e,ge=(e,t,s,n,o,l)=>{const c=Date.now;let i=0,r=!1,u=!1,_=!1,f=!1;const d=Re(()=>{if(r||u){r=!1,d();return}_=!1,e._update(de)},150),a=()=>{i=c(),_&&(f=!0),l&&e._update(ae,l()),e._update(j,n()),d()},b=p=>{if(r||e._getScrollDirection()===N||p.ctrlKey)return;const E=c()-i;150>E&&50<E&&(s?p.deltaX:p.deltaY)&&(r=!0)},O=()=>{u=!0,_=f=!1},S=()=>{u=!1,ce()&&(_=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",b,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",b),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",S),d._cancel()},_fixScrollJump:()=>{const[p,E]=e._flushJump();p&&(o(k(p,s),E,f),f=!1,E&&e._getViewportSize()>e._getTotalSize()&&e._update(j,n()))}}},Ye=(e,t)=>{let s,n,o;const l=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",i=async(r,u)=>{if(!s){Ee(()=>i(r,u));return}o&&o();const _=()=>{let f;return[new Promise((d,a)=>{f=d,o=a,e._isInitialMeasurementDone()&&Y(a,150)}),e._subscribe(G,()=>{f&&f()})]};if(u&&De()){for(;e._update(Se,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,d]=_();try{await f}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:k(r(),t),behavior:"smooth"})}else for(;;){const[f,d]=_();try{s[l]=k(r(),t),e._update(me),await f}catch{return}finally{d()}}};return{_observe(r){s=r,n=ge(e,r,t,()=>k(r[l],t),(u,_,f)=>{if(f){const d=r.style,a=d[c];d[c]="hidden",Y(()=>{d[c]=a})}_?(r[l]=e._getScrollOffset()+u,o&&o()):r[l]+=u})},_dispose(){n&&n._dispose()},_scrollTo(r){i(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),i(()=>r)},_scrollToIndex(r,{align:u,smooth:_,offset:f=0}={}){if(r=ue(r,0,e._getItemsLength()-1),u==="nearest"){const d=e._getItemOffset(r),a=e._getScrollOffset();if(d<a)u="start";else if(d+e._getItemSize(r)>a+e._getViewportSize())u="end";else return}i(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(u==="end"?e._getItemSize(r)-e._getViewportSize():u==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),_)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},je=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",l=$(n),c=Q(l),i=l.body,r=(u,_,f,d=0)=>{const a=f?"offsetLeft":"offsetTop",b=d+(f&&H()?c.innerWidth-u[a]-u.offsetWidth:u[a]),O=u.offsetParent;return u===_||!O?b:r(O,_,f,b)};s=ge(e,c,t,()=>k(c[o],t),(u,_)=>{_?c.scroll({[t?"left":"top"]:e._getScrollOffset()+u}):c.scrollBy(t?u:0,t?0:u)},()=>r(n,i,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};function Ue(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!he(e)}const Ge=Oe({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean},_as:{type:String,required:!0}},setup(e){const t=Ie();return be(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_isHorizontal:l,_isSSR:c,_as:i}=e,r={margin:0,padding:0,position:o&&c?void 0:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:"0px",[l?H()?"right":"left":"top"]:n+"px",visibility:!o||c?"visible":"hidden"};return l&&(r.display="flex"),ze(i,{ref:t,style:r},Ue(s)?s:{default:()=>[s],_:2},8,["style"])}}}),Xe=(e,t)=>{const s=e.key;return s!=T?s:"_"+t},Ze=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{Ve as A,Ge as L,N as S,C as U,Ze as _,Je as a,xe as b,Fe as c,Pe as d,Xe as e,Ke as f,Be as g,Ye as h,ae as i,qe as j,je as k,Ee as m};
