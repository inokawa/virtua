import{d as Ie,b as be,w as he,f as Le,i as ve}from"./vue.esm-bundler-9aQdBDVL.js";const y=Math.min,L=Math.max,ne=Math.abs,W=setTimeout,q=(e,t,s)=>y(s,L(t,e)),F=e=>e!=null,ze=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Ee=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Re=(e,t)=>{let s;const n=()=>{F(s)&&clearTimeout(s)},o=()=>{n(),s=W(()=>{s=null,e()},t)};return o._cancel=n,o},Y=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},C=-1,M=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](C);return e},x=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},Te=(e,t,s)=>{const n=e._sizes[t]===C;return e._sizes[t]=s,e._computedOffsetIndex=y(t,e._computedOffsetIndex),n},j=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=x(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},we=e=>e._length?j(e,e._length-1)+x(e,e._length-1):0,re=(e,t,s)=>{let n=j(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=x(e,s);if(n+o>t)break;n+=o,s++}else n-=x(e,--s);return q(s,0,e._length-1)},oe=(e,t,s,n)=>{const o=re(e,t,y(s,e._length-1));return[o,re(e,t+n,o)]},ye=(e,t)=>{let s=0;const n=e._sizes.filter((f,u)=>{const l=f!==C;return l&&u<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=ze(n))-o)*L(t-s,0)},Ce=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:M([],e),_offsets:M([],e)}),le=(e,t,s)=>{const n=t-e._length,o=n>0;let f;return o?(f=e._defaultItemSize*n,M(e._sizes,n,s),M(e._offsets,n)):(f=-(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((u,l)=>u+(l===C?e._defaultItemSize:l),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:y(t-1,e._computedOffsetIndex),e._length=t,f},xe=typeof window<"u",ue=()=>document.documentElement,X=e=>e.ownerDocument,Z=e=>e.defaultView,G=Y(()=>xe?getComputedStyle(ue()).direction==="rtl":!1),ce=Y(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Ne=Y(()=>"scrollBehavior"in ue().style),Ae=1.5,A=0,fe=1,_e=2,P=0,Je=1,ie=2,Q=1,$=2,De=3,de=4,ae=5,me=6,Se=7,D=1,K=2,Me=4,ke=8,Ue=e=>L(e._getTotalSize(),e._getViewportSize()),We=(e,t,s)=>L(e-(s===fe?1:L(1,t)),0),Ke=(e,t,s,n)=>y(e+(s===_e?1:L(1,t)),n-1),U=(e,t,s)=>t.reduce((n,[o,f])=>{const u=f-x(e,o);return(!s||u>0)&&(n+=u),n},0),qe=(e,t=40,s=0,n,o=!1,f=0,u=0)=>{let l=!!s,r=[],i=0,c=0,_=0,d=0,m=0,v=!1,I=0,S=A,b=P,z=l?[0,L(s-1,0)]:null,T=[0,0],H=0;const a=n||Ce(e,t),k=new Set,ee=()=>we(a),te=()=>ee()+f+u,Oe=()=>c-f,se=()=>L(0,te()-i),V=p=>{ce()&&S!==A?m+=p:(d+=p,_++)};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(a))},_getRange(){return z?[y(T[0],z[0]),L(T[1],z[1])]:I?T:T=oe(a,Oe()+m+d,T[0],i)},_isUnmeasuredItem(p){return a._sizes[p]===C},_hasUnmeasuredItemsInFrozenRange(){return z?a._sizes.slice(L(0,z[0]-1),y(a._length-1,z[1]+1)+1).includes(C):!1},_getItemOffset(p){return j(a,p)-m},_getItemSize(p){return x(a,p)},_getItemsLength(){return a._length},_getScrollOffset(){return c},_getScrollDirection(){return S},_getViewportSize(){return i},_getStartSpacerSize(){return f},_getTotalSize:ee,_getJumpCount(){return _},_flushJump(){const p=d,g=v;return d=0,v=!1,i>te()?[0,!1]:[I=p,g]},_subscribe(p,g){const N=[p,g];return k.add(N),()=>{k.delete(N)}},_update(p,g){let N,B,E=0;switch(p){case Q:{const O=g.filter(([w,R])=>a._sizes[w]!==R);if(!O.length)break;let h;if(b===ie)c>se()-Ae?h=U(a,O,!0):h=U(a,O);else{const[w]=T;h=U(a,O.filter(([R])=>R<w))}h&&V(h);for(const[w,R]of O)Te(a,w,R)&&o&&(H+=R);o&&i&&H>i&&(V(ye(a,T[0])),o=!1),E=K,B=!0;break}case $:{i!==g&&(i=g,E=K);break}case De:{g[1]?(V(le(a,g[0],!0)),b=ie,v=!0,E=D):le(a,g[0]);break}case de:{const O=q(g,0,se()),h=I;if(I=0,O===c)break;const w=O-c,R=ne(w);!(h&&R<ne(h)+1)&&b===P&&(S=w<0?_e:fe),l&&(z=null,l=!1),B=R>i,c=O,E=D+Me;break}case ae:{E=ke,S!==A&&(N=!0,E+=D),S=A,b=P,z=null;break}case me:{b=Je;break}case Se:{z=oe(a,g,T[0],i),E=D;break}}E&&(r=[],N&&m&&(d+=m,m=0,_++),k.forEach(([O,h])=>{E&O&&h(B)}))}}},pe=e=>{let t;return{_observe(s){(t||(t=new(Z(X(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Fe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,f=pe(u=>{const l=[];for(const{target:r,contentRect:i}of u)if(r.offsetParent)if(r===s)e._update($,i[n]);else{const c=o.get(r);F(c)&&l.push([c,i[n]])}l.length&&e._update(Q,l)});return{_observeRoot(u){f._observe(s=u)},_observeItem:(u,l)=>(o.set(u,l),f._observe(u),()=>{o.delete(u),f._unobserve(u)}),_dispose:f._dispose}},Ye=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,f=pe(l=>{const r=[];for(const{target:i,contentRect:c}of l){if(!i.offsetParent)continue;const _=o.get(i);F(_)&&r.push([_,c[s]])}r.length&&e._update(Q,r)});let u;return{_observeRoot(l){const r=Z(X(l)),i=()=>{e._update($,r[n])};r.addEventListener("resize",i),i(),u=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),f._observe(l),()=>{o.delete(l),f._unobserve(l)}),_dispose(){u&&u(),f._dispose()}}},J=(e,t)=>t&&G()?-e:e,ge=(e,t,s,n,o)=>{const f=Date.now;let u=0,l=!1,r=!1,i=!1,c=!1;const _=Re(()=>{if(l||r){l=!1,_();return}i=!1,e._update(ae)},150),d=()=>{u=f(),i&&(c=!0),e._update(de,n()),_()},m=S=>{if(l||e._getScrollDirection()===A||S.ctrlKey)return;const b=f()-u;150>b&&50<b&&(s?S.deltaX:S.deltaY)&&(l=!0)},v=()=>{r=!0,i=c=!1},I=()=>{r=!1,ce()&&(i=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",m,{passive:!0}),t.addEventListener("touchstart",v,{passive:!0}),t.addEventListener("touchend",I,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",m),t.removeEventListener("touchstart",v),t.removeEventListener("touchend",I),_._cancel()},_fixScrollJump:()=>{const[S,b]=e._flushJump();S&&(o(J(S,s),b,c),c=!1)}}},je=(e,t)=>{let s,n,o;const f=t?"scrollLeft":"scrollTop",u=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){Ee(()=>l(r,i));return}o&&o();const c=()=>{let _;return[new Promise((d,m)=>{_=d,W(o=m,150)}),e._subscribe(K,()=>{_&&_()})]};if(i&&Ne()){for(;e._update(Se,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,d]=c();try{await _}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:J(r(),t),behavior:"smooth"})}else for(;;){const[_,d]=c();try{s[f]=J(r(),t),e._update(me),await _}catch{return}finally{d()}}};return{_observe(r){s=r,n=ge(e,r,t,()=>J(r[f],t),(i,c,_)=>{if(_){const d=r.style,m=d[u];d[u]="hidden",W(()=>{d[u]=m})}c?(r[f]=e._getScrollOffset()+i,o&&o()):r[f]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:c}={}){if(r=q(r,0,e._getItemsLength()-1),i==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)i="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())i="end";else return}l(()=>e._getStartSpacerSize()+(i==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():i==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),c)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Xe=(e,t)=>{let s;return{_observe(n){let o=0;const f=t?"scrollX":"scrollY",u=X(n),l=Z(u),r=u.body,i=(c,_,d,m=0)=>{const v=d?"offsetLeft":"offsetTop",I=m+(d&&G()?l.innerWidth-c[v]-c.offsetWidth:c[v]),S=c.offsetParent;return c===_||!S?I:i(S,_,d,I)};s=ge(e,l,t,()=>J(l[f],t)-(o=i(n,r,t)),(c,_)=>{_?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+c}):l.scrollBy(t?c:0,t?0:c)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}};function Ve(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ve(e)}const Ze=Ie({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean},_element:{type:String,required:!0}},setup(e){const t=be();return he(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_element:f,_isHorizontal:u}=e,l={margin:0,padding:0,position:"absolute",[u?"height":"width"]:"100%",[u?"top":"left"]:"0px",[u?G()?"right":"left":"top"]:n+"px",visibility:o?"hidden":"visible"};return u&&(l.display="flex"),Le(f,{ref:t,style:l},Ve(s)?s:{default:()=>[s]})}}}),Ge=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{De as A,Ze as L,A as S,D as U,Ge as _,K as a,Me as b,qe as c,ke as d,Ke as e,F as f,Ue as g,Fe as h,je as i,Ye as j,Xe as k,We as o};
