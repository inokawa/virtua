import{d as Oe,b as be,s as Ie,e as ze,i as Le}from"./vue.esm-bundler-6P8ENG_2.js";const T=null,{min:w,max:h,abs:oe,floor:Ee}=Math,G=setTimeout,ue=(e,t,s)=>w(s,h(t,e)),he=e=>[...e].sort((t,s)=>t-s),ve=e=>{const t=he(e),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Re=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Te=(e,t)=>{let s;const n=()=>{s!=T&&clearTimeout(s)},o=()=>{n(),s=G(()=>{s=T,e()},t)};return o._cancel=n,o},$=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},y=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](y);return e},P=(e,t)=>{const s=e._sizes[t];return s===y?e._defaultItemSize:s},we=(e,t,s)=>{const n=e._sizes[t]===y;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),n},x=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=P(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},ye=e=>e._length?x(e,e._length-1)+P(e,e._length-1):0,U=(e,t,s=0,n=e._length-1)=>{for(;s<=n;){const o=Ee((s+n)/2),l=x(e,o);if(l<=t){if(l+P(e,o)>t)return o;s=o+1}else n=o-1}return ue(s,0,e._length-1)},Ce=(e,t,s,n)=>{if(n=w(n,e._length-1),x(e,n)<=t){const o=U(e,t+s,n);return[U(e,t,n,o),o]}else{const o=U(e,t,void 0,n);return[o,U(e,t+s,o)]}},Ne=(e,t)=>{let s=0;const n=e._sizes.filter((l,c)=>{const u=l!==y;return u&&c<t&&s++,u}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=ve(n))-o)*h(t-s,0)},Ae=(e,t,s)=>({_defaultItemSize:t,_sizes:B([],e),_length:e,_computedOffsetIndex:-1,_offsets:B([],e)}),ke=e=>[e._sizes.slice(),e._defaultItemSize],ie=(e,t,s)=>{const n=t-e._length;return e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,n>0?(B(e._offsets,n),B(e._sizes,n,s),e._defaultItemSize*n):(e._offsets.splice(n),(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((o,l)=>o-(l===y?e._defaultItemSize:l),0))},De=typeof window<"u",le=()=>document.documentElement,Q=e=>e.ownerDocument,H=e=>e.defaultView,ee=$(()=>De?getComputedStyle(le()).direction==="rtl":!1),ce=$(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ve=$(()=>"scrollBehavior"in le().style),N=0,fe=1,_e=2,W=0,Me=1,j=2,X=1,de=2,te=3,se=4,Je=5,ae=6,me=7,Se=8,C=1,Z=2,Ue=4,We=8,Fe=e=>h(e._getTotalSize(),e._getViewportSize()),Be=e=>!!e._getViewportSize(),Ke=(e,t,s,n,o)=>(n!==fe&&(e-=h(0,s)),n!==_e&&(t+=h(0,s)),[h(e,0),w(t,o-1)]),qe=(e,t=40,s=0,n,o=!1)=>{let l=!!s,c=[],u=0,r=0,i=0,_=0,f=0,d=0,a=0,I=N,O=W,S=l?[0,h(s-1,0)]:T,p=[0,0],v=0;const g=Ae(e,t),F=new Set,D=()=>i-r,ne=m=>Ce(g,m,u,p[0]),K=()=>ye(g),re=m=>x(g,m)-d,V=m=>P(g,m),q=m=>{m&&(ce()&&I!==N?d+=m:(f+=m,_++))};return{_getStateVersion(){return c},_getCacheSnapshot(){return ke(g)},_getRange(){return a?p:(p=ne(h(0,D()+d+f)),S?[w(p[0],S[0]),h(p[1],S[1])]:p)},_isUnmeasuredItem(m){return g._sizes[m]===y},_hasUnmeasuredItemsInFrozenRange(){return S?g._sizes.slice(h(0,S[0]-1),w(g._length-1,S[1]+1)+1).includes(y):!1},_getItemOffset:re,_getItemSize:V,_getItemsLength(){return g._length},_getScrollOffset(){return i},_getScrollDirection(){return I},_getViewportSize(){return u},_getStartSpacerSize(){return r},_getTotalSize:K,_getJumpCount(){return _},_flushJump(){return a=f,f=0,[a,O===j||D()+u>=K()]},_subscribe(m,z){const A=[m,z];return F.add(A),()=>{F.delete(A)}},_update(m,z){let A,Y,E=0;switch(m){case X:{const R=a;a=0;const L=z-i,b=oe(L);!(R&&b<oe(R)+1)&&O===W&&(I=L<0?_e:fe),l&&(S=T,l=!1),i=z,E=Ue;const J=D();J>=-u&&J<=K()&&(E+=C,Y=b>u);break}case de:{E=We,I!==N&&(A=!0,E+=C),I=N,O=W,S=T;break}case te:{const R=z.filter(([L,b])=>g._sizes[L]!==b);if(!R.length)break;q(R.reduce((L,[b,M])=>((O===j||(S?b<S[0]:re(b)+(I===N&&O===W?V(b):0)<D()))&&(L+=M-V(b)),L),0));for(const[L,b]of R){const M=V(L),J=we(g,L,b);o&&(v+=J?b:b-M)}o&&u&&v>u&&(q(Ne(g,p[0])),o=!1),E=C+Z,Y=!0;break}case se:{u!==z&&(u=z,E=C+Z);break}case Je:{z[1]?(q(ie(g,z[0],!0)),O=j,E=C):ie(g,z[0]);break}case ae:{r=z;break}case me:{O=Me;break}case Se:{S=ne(z),E=C;break}}E&&(c=[],A&&d&&(f+=d,d=0,_++),F.forEach(([R,L])=>{E&R&&L(Y)}))}}},pe=e=>{let t;return{_observe(s){(t||(t=new(H(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ye=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,l=pe(c=>{const u=[];for(const{target:r,contentRect:i}of c)if(r.offsetParent)if(r===s)e._update(se,i[n]);else{const _=o.get(r);_!=T&&u.push([_,i[n]])}u.length&&e._update(te,u)});return{_observeRoot(c){l._observe(s=c)},_observeItem:(c,u)=>(o.set(c,u),l._observe(c),()=>{o.delete(c),l._unobserve(c)}),_dispose:l._dispose}},je=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,l=pe(u=>{const r=[];for(const{target:i,contentRect:_}of u){if(!i.offsetParent)continue;const f=o.get(i);f!=T&&r.push([f,_[s]])}r.length&&e._update(te,r)});let c;return{_observeRoot(u){const r=H(Q(u)),i=()=>{e._update(se,r[n])};r.addEventListener("resize",i),i(),c=()=>{r.removeEventListener("resize",i)}},_observeItem:(u,r)=>(o.set(u,r),l._observe(u),()=>{o.delete(u),l._unobserve(u)}),_dispose(){c&&c(),l._dispose()}}},k=(e,t)=>t&&ee()?-e:e,ge=(e,t,s,n,o,l)=>{const c=Date.now;let u=0,r=!1,i=!1,_=!1,f=!1;const d=Te(()=>{if(r||i){r=!1,d();return}_=!1,e._update(de)},150),a=()=>{u=c(),_&&(f=!0),l&&e._update(ae,l()),e._update(X,n()),d()},I=p=>{if(r||e._getScrollDirection()===N||p.ctrlKey)return;const v=c()-u;150>v&&50<v&&(s?p.deltaX:p.deltaY)&&(r=!0)},O=()=>{i=!0,_=f=!1},S=()=>{i=!1,ce()&&(_=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",S),d._cancel()},_fixScrollJump:()=>{const[p,v]=e._flushJump();p&&(o(k(p,s),v,f),f=!1,v&&e._getViewportSize()>e._getTotalSize()&&e._update(X,n()))}}},Ge=(e,t)=>{let s,n,o;const l=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",u=async(r,i)=>{if(!s){Re(()=>u(r,i));return}o&&o();const _=()=>{let f;return[new Promise((d,a)=>{f=d,o=a,Be(e)&&G(a,150)}),e._subscribe(Z,()=>{f&&f()})]};if(i&&Ve()){for(;e._update(Se,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[f,d]=_();try{await f}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:k(r(),t),behavior:"smooth"})}else for(;;){const[f,d]=_();try{s[l]=k(r(),t),e._update(me),await f}catch{return}finally{d()}}};return{_observe(r){s=r,n=ge(e,r,t,()=>k(r[l],t),(i,_,f)=>{if(f){const d=r.style,a=d[c];d[c]="hidden",G(()=>{d[c]=a})}_?(r[l]=e._getScrollOffset()+i,o&&o()):r[l]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){u(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),u(()=>r)},_scrollToIndex(r,{align:i,smooth:_,offset:f=0}={}){if(r=ue(r,0,e._getItemsLength()-1),i==="nearest"){const d=e._getItemOffset(r),a=e._getScrollOffset();if(d<a)i="start";else if(d+e._getItemSize(r)>a+e._getViewportSize())i="end";else return}u(()=>f+e._getStartSpacerSize()+e._getItemOffset(r)+(i==="end"?e._getItemSize(r)-e._getViewportSize():i==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),_)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Xe=(e,t)=>{let s;return{_observe(n){const o=t?"scrollX":"scrollY",l=Q(n),c=H(l),u=l.body,r=(i,_,f,d=0)=>{const a=f?"offsetLeft":"offsetTop",I=d+(f&&ee()?c.innerWidth-i[a]-i.offsetWidth:i[a]),O=i.offsetParent;return i===_||!O?I:r(O,_,f,I)};s=ge(e,c,t,()=>k(c[o],t),(i,_)=>{_?c.scroll({[t?"left":"top"]:e._getScrollOffset()+i}):c.scrollBy(t?i:0,t?0:i)},()=>r(n,u,t))},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};function Pe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Le(e)}const Ze=Oe({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean},_as:{type:String,required:!0}},setup(e){const t=be();return Ie(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_isHorizontal:l,_isSSR:c,_as:u}=e,r={position:o&&c?void 0:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:"0px",[l?ee()?"right":"left":"top"]:n+"px",visibility:!o||c?"visible":"hidden"};return l&&(r.display="flex"),ze(u,{ref:t,style:r},Pe(s)?s:{default:()=>[s],_:2},8,["style"])}}}),$e=(e,t)=>{const s=e.key;return s!=T?s:"_"+t},Qe=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{Je as A,Ze as L,N as S,C as U,Qe as _,Ue as a,We as b,qe as c,Ke as d,$e as e,Ye as f,Fe as g,Ge as h,ae as i,je as j,Xe as k,Re as m};
