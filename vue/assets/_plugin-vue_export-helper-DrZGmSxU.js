import{d as Le,b as ve,w as ze,f as Ee}from"./vue.esm-bundler-CtIVE62n.js";const C=Math.min,h=Math.max,le=Math.abs,Y=setTimeout,Z=(e,t,s)=>C(s,h(t,e)),V=e=>e!=null,Re=e=>{const t=[...e].sort((n,o)=>n-o),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},Te=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},we=(e,t)=>{let s;const n=()=>{V(s)&&clearTimeout(s)},o=()=>{n(),s=Y(()=>{s=null,e()},t)};return o._cancel=n,o},G=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},N=-1,B=(e,t,s)=>{const n=s?"unshift":"push";for(let o=0;o<t;o++)e[n](N);return e},y=(e,t)=>{const s=e._sizes[t];return s===N?e._defaultItemSize:s},ye=(e,t,s)=>{const n=e._sizes[t]===N;return e._sizes[t]=s,e._computedOffsetIndex=C(t,e._computedOffsetIndex),n},j=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,n=e._offsets[s];for(;s<t;)n+=y(e,s),e._offsets[++s]=n;return e._computedOffsetIndex=t,n},Ce=e=>e._length?j(e,e._length-1)+y(e,e._length-1):0,ie=(e,t,s)=>{let n=j(e,s);for(;s>=0&&s<e._length;)if(n<=t){const o=y(e,s);if(n+o>t)break;n+=o,s++}else n-=y(e,--s);return Z(s,0,e._length-1)},ue=(e,t,s,n)=>{const o=ie(e,t,C(s,e._length-1));return[o,ie(e,t+n,o)]},Ne=(e,t)=>{let s=0;const n=e._sizes.filter((f,c)=>{const l=f!==N;return l&&c<t&&s++,l}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=Re(n))-o)*h(t-s,0)},Ae=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:B([],e),_offsets:B([],e)}),fe=(e,t,s)=>{const n=t-e._length,o=n>0;let f;return o?(f=e._defaultItemSize*n,B(e._sizes,n,s),B(e._offsets,n)):(f=-(s?e._sizes.splice(0,-n):e._sizes.splice(n)).reduce((c,l)=>c+(l===N?e._defaultItemSize:l),0),e._offsets.splice(n)),e._computedOffsetIndex=s?-1:C(t-1,e._computedOffsetIndex),e._length=t,f},ke=typeof window<"u",_e=()=>document.documentElement,Q=e=>e.ownerDocument,$=e=>e.defaultView,H=G(()=>ke?getComputedStyle(_e()).direction==="rtl":!1),de=G(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Je=G(()=>"scrollBehavior"in _e().style),Me=1.5,J=0,ae=1,me=2,q=0,xe=1,ce=2,ee=1,te=2,De=3,Se=4,pe=5,ge=6,Oe=7,D=1,X=2,Be=4,Ve=8,Ue=e=>h(e._getTotalSize(),e._getViewportSize()),We=(e,t,s,n,o)=>(n!==ae&&(e-=h(0,s)),n!==me&&(t+=h(0,s)),[h(e,0),C(t,o-1)]),Ke=(e,t=40,s=0,n,o=!1,f=0,c=0)=>{let l=!!s,r=[],i=0,u=0,_=0,d=0,a=0,L=!1,O=0,S=J,I=q,v=l?[0,h(s-1,0)]:null,T=[0,0],P=0;const m=n||Ae(e,t),U=new Set,se=()=>Ce(m),ne=()=>se()+f+c,he=()=>u-f,re=()=>h(0,ne()-i),oe=p=>j(m,p)-a,W=p=>{p&&(de()&&S!==J?a+=p:(d+=p,_++))};return{_getStateVersion(){return r},_getCacheSnapshot(){return JSON.parse(JSON.stringify(m))},_getRange(){return v?[C(T[0],v[0]),h(T[1],v[1])]:O?T:T=ue(m,he()+a+d,T[0],i)},_isUnmeasuredItem(p){return m._sizes[p]===N},_hasUnmeasuredItemsInFrozenRange(){return v?m._sizes.slice(h(0,v[0]-1),C(m._length-1,v[1]+1)+1).includes(N):!1},_getItemOffset:oe,_getItemSize(p){return y(m,p)},_getItemsLength(){return m._length},_getScrollOffset(){return u},_getScrollDirection(){return S},_getViewportSize(){return i},_getStartSpacerSize(){return f},_getTotalSize:se,_getJumpCount(){return _},_flushJump(){const p=d,g=L;return d=0,L=!1,i>ne()?[0,!1]:[O=p,g]},_subscribe(p,g){const A=[p,g];return U.add(A),()=>{U.delete(A)}},_update(p,g){let A,K,z=0;switch(p){case ee:{const E=g.filter(([b,R])=>m._sizes[b]!==R);if(!E.length)break;let w=!1,k=!1;I===ce?u>re()-Me&&(k=!0):w=!0,W(E.reduce((b,[R,F])=>{if(!w||oe(R)<u){const x=F-y(m,R);(!k||x>0)&&(b+=x)}return b},0));for(const[b,R]of E){const F=y(m,b),x=ye(m,b,R);o&&(P+=R,x||(P-=F))}o&&i&&P>i&&(W(Ne(m,T[0])),o=!1),z=X,K=!0;break}case te:{i!==g&&(i=g,z=X);break}case De:{g[1]?(W(fe(m,g[0],!0)),I=ce,L=!0,z=D):fe(m,g[0]);break}case Se:{const E=Z(g,0,re()),w=O;if(O=0,E===u)break;const k=E-u,b=le(k);!(w&&b<le(w)+1)&&I===q&&(S=k<0?me:ae),l&&(v=null,l=!1),K=b>i,u=E,z=D+Be;break}case pe:{z=Ve,S!==J&&(A=!0,z+=D),S=J,I=q,v=null;break}case ge:{I=xe;break}case Oe:{v=ue(m,g,T[0],i),z=D;break}}z&&(r=[],A&&a&&(d+=a,a=0,_++),U.forEach(([E,w])=>{z&E&&w(K)}))}}},Ie=e=>{let t;return{_observe(s){(t||(t=new($(Q(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Fe=(e,t)=>{let s;const n=t?"width":"height",o=new WeakMap,f=Ie(c=>{const l=[];for(const{target:r,contentRect:i}of c)if(r.offsetParent)if(r===s)e._update(te,i[n]);else{const u=o.get(r);V(u)&&l.push([u,i[n]])}l.length&&e._update(ee,l)});return{_observeRoot(c){f._observe(s=c)},_observeItem:(c,l)=>(o.set(c,l),f._observe(c),()=>{o.delete(c),f._unobserve(c)}),_dispose:f._dispose}},qe=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",o=new WeakMap,f=Ie(l=>{const r=[];for(const{target:i,contentRect:u}of l){if(!i.offsetParent)continue;const _=o.get(i);V(_)&&r.push([_,u[s]])}r.length&&e._update(ee,r)});let c;return{_observeRoot(l){const r=$(Q(l)),i=()=>{e._update(te,r[n])};r.addEventListener("resize",i),i(),c=()=>{r.removeEventListener("resize",i)}},_observeItem:(l,r)=>(o.set(l,r),f._observe(l),()=>{o.delete(l),f._unobserve(l)}),_dispose(){c&&c(),f._dispose()}}},M=(e,t)=>t&&H()?-e:e,be=(e,t,s,n,o)=>{const f=Date.now;let c=0,l=!1,r=!1,i=!1,u=!1;const _=we(()=>{if(l||r){l=!1,_();return}i=!1,e._update(pe)},150),d=()=>{c=f(),i&&(u=!0),e._update(Se,n()),_()},a=S=>{if(l||e._getScrollDirection()===J||S.ctrlKey)return;const I=f()-c;150>I&&50<I&&(s?S.deltaX:S.deltaY)&&(l=!0)},L=()=>{r=!0,i=u=!1},O=()=>{r=!1,de()&&(i=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",a,{passive:!0}),t.addEventListener("touchstart",L,{passive:!0}),t.addEventListener("touchend",O,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",a),t.removeEventListener("touchstart",L),t.removeEventListener("touchend",O),_._cancel()},_fixScrollJump:()=>{const[S,I]=e._flushJump();S&&(o(M(S,s),I,u),u=!1)}}},Ye=(e,t)=>{let s,n,o;const f=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",l=async(r,i)=>{if(!s){Te(()=>l(r,i));return}o&&o();const u=()=>{let _;return[new Promise((d,a)=>{_=d,Y(o=a,150)}),e._subscribe(X,()=>{_&&_()})]};if(i&&Je()){for(;e._update(Oe,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,d]=u();try{await _}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:M(r(),t),behavior:"smooth"})}else for(;;){const[_,d]=u();try{s[f]=M(r(),t),e._update(ge),await _}catch{return}finally{d()}}};return{_observe(r){s=r,n=be(e,r,t,()=>M(r[f],t),(i,u,_)=>{if(_){const d=r.style,a=d[c];d[c]="hidden",Y(()=>{d[c]=a})}u?(r[f]=e._getScrollOffset()+i,o&&o()):r[f]+=i})},_dispose(){n&&n._dispose()},_scrollTo(r){l(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),l(()=>r)},_scrollToIndex(r,{align:i,smooth:u}={}){if(r=Z(r,0,e._getItemsLength()-1),i==="nearest"){const _=e._getItemOffset(r),d=e._getScrollOffset();if(_<d)i="start";else if(_+e._getItemSize(r)>d+e._getViewportSize())i="end";else return}l(()=>e._getStartSpacerSize()+(i==="end"?e._getItemOffset(r)+e._getItemSize(r)-e._getViewportSize():i==="center"?e._getItemOffset(r)+(e._getItemSize(r)-e._getViewportSize())/2:e._getItemOffset(r)),u)},_fixScrollJump:()=>{n&&n._fixScrollJump()}}},Xe=(e,t)=>{let s;return{_observe(n){let o=0;const f=t?"scrollX":"scrollY",c=Q(n),l=$(c),r=c.body,i=(u,_,d,a=0)=>{const L=d?"offsetLeft":"offsetTop",O=a+(d&&H()?l.innerWidth-u[L]-u.offsetWidth:u[L]),S=u.offsetParent;return u===_||!S?O:i(S,_,d,O)};s=be(e,l,t,()=>M(l[f],t)-(o=i(n,r,t)),(u,_)=>{_?l.scroll({[t?"left":"top"]:e._getScrollOffset()+o+u}):l.scrollBy(t?u:0,t?0:u)})},_dispose(){s&&s._dispose()},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},Ze=Le({props:{_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_offset:{type:Number,required:!0},_hide:{type:Boolean},_isHorizontal:{type:Boolean}},setup(e){const t=ve();return ze(()=>t.value&&e._index,(s,n,o)=>{o(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:s,_offset:n,_hide:o,_isHorizontal:f}=e,c={margin:0,padding:0,position:"absolute",[f?"height":"width"]:"100%",[f?"top":"left"]:"0px",[f?H()?"right":"left":"top"]:n+"px",visibility:o?"hidden":"visible"};return f&&(c.display="flex"),Ee("div",{ref:t,style:c},[s],4)}}}),Ge=(e,t)=>{const s=e.key;return V(s)?s:"_"+t},je=(e,t)=>{const s=e.__vccOpts||e;for(const[n,o]of t)s[n]=o;return s};export{De as A,Ze as L,J as S,D as U,je as _,X as a,Be as b,Ke as c,Ve as d,We as e,Ge as f,Ue as g,Fe as h,Ye as i,qe as j,Xe as k};
