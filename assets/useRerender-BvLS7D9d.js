import{r as G}from"./index-DRjF_FHU.js";const A=null,{min:T,max:E,abs:de,floor:Re}=Math,re=(e,t,s)=>T(s,E(t,e)),Te=e=>[...e].sort((t,s)=>t-s),pe=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},oe=e=>{let t,s;return()=>(t||(t=!0,s=e()),s)},k=-1,W=(e,t,s)=>{const r=s?"unshift":"push";for(let o=0;o<t;o++)e[r](k);return e},Q=(e,t)=>{const s=e._sizes[t];return s===k?e._defaultItemSize:s},ye=(e,t,s)=>{const r=e._sizes[t]===k;return e._sizes[t]=s,e._computedOffsetIndex=T(t,e._computedOffsetIndex),r},j=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,r=e._offsets[s];for(;s<t;)r+=Q(e,s),e._offsets[++s]=r;return e._computedOffsetIndex=t,r},Ce=e=>e._length?j(e,e._length-1)+Q(e,e._length-1):0,C=(e,t,s=0,r=e._length-1)=>{for(;s<=r;){const o=Re((s+r)/2),f=j(e,o);if(f<=t){if(f+Q(e,o)>t)return o;s=o+1}else r=o-1}return re(s,0,e._length-1)},Ae=(e,t,s,r)=>{if(r=T(r,e._length-1),j(e,r)<=t){const o=C(e,t+s,r);return[C(e,t,r,o),o]}else{const o=C(e,t,void 0,r);return[o,C(e,t+s,o)]}},Ve=(e,t)=>{let s=0;const r=[];e._sizes.forEach((u,d)=>{u!==k&&(r.push(u),d<t&&s++)}),e._computedOffsetIndex=-1;const o=Te(r),f=o.length,m=f/2|0,c=f%2===0?(o[m-1]+o[m])/2:o[m],n=e._defaultItemSize;return((e._defaultItemSize=c)-n)*E(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?W(s[0].slice(0,T(e,s[0].length)),E(0,e-s[0].length)):W([],e),_length:e,_computedOffsetIndex:-1,_offsets:W([],e)}),Ne=e=>[e._sizes.slice(),e._defaultItemSize],ae=(e,t,s)=>{const r=t-e._length;return e._computedOffsetIndex=s?-1:T(t-1,e._computedOffsetIndex),e._length=t,r>0?(W(e._offsets,r),W(e._sizes,r,s),e._defaultItemSize*r):(e._offsets.splice(r),(s?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((o,f)=>o-(f===k?e._defaultItemSize:f),0))},ge=typeof window<"u",Ie=()=>document.documentElement,U=e=>e.ownerDocument,P=e=>e.defaultView,be=oe(()=>ge?getComputedStyle(Ie()).direction==="rtl":!1),ze=oe(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Oe=oe(()=>"scrollBehavior"in Ie().style),N=0,me=1,_e=2,q=0,Me=1,se=2,ne=1,Ee=2,x=3,K=4,Je=5,he=6,ce=7,ie=8,M=1,X=2,De=4,We=8,xe=e=>E(e.$getTotalSize(),e.$getViewportSize()),we=e=>!!e.$getViewportSize(),Ke=(e,t=40,s=4,r=0,o,f=!1)=>{let m=!!r,c=[],n=0,u=0,d=0,i=0,l=0,a=0,_=0,p=N,S=q,$=m?[0,E(r-1,0)]:A,b=[0,0],J=0;const g=ke(e,t,o),y=new Set,L=()=>d-u,v=()=>L()+a+l,ue=I=>Ae(g,I,n,b[0]),H=()=>Ce(g),fe=I=>j(g,I)-a,B=I=>Q(g,I),ee=I=>{I&&(ze()&&p!==N?a+=I:(l+=I,i++))};return{$getStateVersion:()=>c,$getCacheSnapshot:()=>Ne(g),$getRange:()=>{if(_)return b;let[I,z]=ue(E(0,v()));return $&&(I=T(I,$[0]),z=E(z,$[1])),p!==me&&(I-=E(0,s)),p!==_e&&(z+=E(0,s)),b=[E(I,0),T(z,g._length-1)]},$findStartIndex:()=>C(g,v()),$findEndIndex:()=>C(g,v()+n),$isUnmeasuredItem:I=>g._sizes[I]===k,_hasUnmeasuredItemsInFrozenRange:()=>$?g._sizes.slice(E(0,$[0]-1),T(g._length-1,$[1]+1)+1).includes(k):!1,$getItemOffset:fe,$getItemSize:B,$getItemsLength:()=>g._length,$getScrollOffset:()=>d,$isScrolling:()=>p!==N,$getViewportSize:()=>n,$getStartSpacerSize:()=>u,$getTotalSize:H,$getJumpCount:()=>i,_flushJump:()=>(_=l,l=0,[_,S===se||L()+n>=H()]),$subscribe:(I,z)=>{const D=[I,z];return y.add(D),()=>{y.delete(D)}},$update:(I,z)=>{let D,te,w=0;switch(I){case ne:{const R=_;_=0;const h=z-d,O=de(h);!(R&&O<de(R)+1)&&S===q&&(p=h<0?_e:me),m&&($=A,m=!1),d=z,w=De;const Y=L();Y>=-n&&Y<=H()&&(w+=M,te=O>n);break}case Ee:{w=We,p!==N&&(D=!0,w+=M),p=N,S=q,$=A;break}case x:{const R=z.filter(([h,O])=>g._sizes[h]!==O);if(!R.length)break;ee(R.reduce((h,[O,F])=>((S===se||($?O<$[0]:fe(O)+(p===N&&S===q?B(O):0)<L()))&&(h+=F-B(O)),h),0));for(const[h,O]of R){const F=B(h),Y=ye(g,h,O);f&&(J+=Y?O:O-F)}f&&n&&J>n&&(ee(Ve(g,C(g,v()))),f=!1),w=M+X,te=!0;break}case K:{n!==z&&(n=z,w=M+X);break}case Je:{z[1]?(ee(ae(g,z[0],!0)),S=se,w=M):ae(g,z[0]);break}case he:{u=z;break}case ce:{S=Me;break}case ie:{$=ue(z),w=M;break}}w&&(c=[],D&&a&&(l+=a,a=0,i++),y.forEach(([R,h])=>{w&R&&h(te)}))}}},Z=setTimeout,Ue=(e,t)=>{let s;const r=()=>{s!=A&&clearTimeout(s)},o=()=>{r(),s=Z(()=>{s=A,e()},t)};return o._cancel=r,o},V=(e,t)=>t&&be()?-e:e,Le=(e,t,s,r,o,f)=>{const m=Date.now;let c=0,n=!1,u=!1,d=!1,i=!1;const l=Ue(()=>{if(n||u){n=!1,l();return}d=!1,e.$update(Ee)},150),a=()=>{c=m(),d&&(i=!0),f&&e.$update(he,f()),e.$update(ne,r()),l()},_=$=>{if(n||!e.$isScrolling()||$.ctrlKey)return;const b=m()-c;150>b&&50<b&&(s?$.deltaX:$.deltaY)&&(n=!0)},p=()=>{u=!0,d=i=!1},S=()=>{u=!1,ze()&&(d=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",_,{passive:!0}),t.addEventListener("touchstart",p,{passive:!0}),t.addEventListener("touchend",S,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",_),t.removeEventListener("touchstart",p),t.removeEventListener("touchend",S),l._cancel()},_fixScrollJump:()=>{const[$,b]=e._flushJump();$&&(o(V($,s),b,i),i=!1,b&&e.$getViewportSize()>e.$getTotalSize()&&e.$update(ne,r()))}}},Se=(e,t)=>{let s,r,o;const f=t?"scrollLeft":"scrollTop",m=t?"overflowX":"overflowY",c=async(n,u)=>{if(!s){pe(()=>c(n,u));return}o&&o();const d=()=>{let i;return[new Promise((l,a)=>{i=l,o=a,we(e)&&Z(a,150)}),e.$subscribe(X,()=>{i&&i()})]};if(u&&Oe()){for(;e.$update(ie,n()),!!e._hasUnmeasuredItemsInFrozenRange();){const[i,l]=d();try{await i}catch{return}finally{l()}}s.scrollTo({[t?"left":"top"]:V(n(),t),behavior:"smooth"})}else for(;;){const[i,l]=d();try{s[f]=V(n(),t),e.$update(ce),await i}catch{return}finally{l()}}};return{$observe(n){s=n,r=Le(e,n,t,()=>V(n[f],t),(u,d,i)=>{if(i){const l=n.style,a=l[m];l[m]="hidden",Z(()=>{l[m]=a})}d?(n[f]=e.$getScrollOffset()+u,o&&o()):n[f]+=u})},$dispose(){r&&r._dispose()},$scrollTo(n){c(()=>n)},$scrollBy(n){n+=e.$getScrollOffset(),c(()=>n)},$scrollToIndex(n,{align:u,smooth:d,offset:i=0}={}){if(n=re(n,0,e.$getItemsLength()-1),u==="nearest"){const l=e.$getItemOffset(n),a=e.$getScrollOffset();if(l<a)u="start";else if(l+e.$getItemSize(n)>a+e.$getViewportSize())u="end";else return}c(()=>i+e.$getStartSpacerSize()+e.$getItemOffset(n)+(u==="end"?e.$getItemSize(n)-e.$getViewportSize():u==="center"?(e.$getItemSize(n)-e.$getViewportSize())/2:0),d)},$fixScrollJump:()=>{r&&r._fixScrollJump()}}},Be=(e,t)=>{let s,r,o;const f=(c,n,u,d,i=0)=>{const l=d?"offsetLeft":"offsetTop",a=i+(d&&be()?u.innerWidth-c[l]-c.offsetWidth:c[l]),_=c.offsetParent;return c===n||!_?a:f(_,n,u,d,a)},m=async(c,n)=>{if(!s){pe(()=>m(c,n));return}o&&o();const u=()=>{let i;return[new Promise((l,a)=>{i=l,o=a,we(e)&&Z(a,150)}),e.$subscribe(X,()=>{i&&i()})]},d=P(U(s));if(n&&Oe()){for(;e.$update(ie,c()),!!e._hasUnmeasuredItemsInFrozenRange();){const[i,l]=u();try{await i}catch{return}finally{l()}}d.scroll({[t?"left":"top"]:V(c(),t),behavior:"smooth"})}else for(;;){const[i,l]=u();try{d.scroll({[t?"left":"top"]:V(c(),t)}),e.$update(ce),await i}catch{return}finally{l()}}};return{$observe(c){s=c;const n=t?"scrollX":"scrollY",u=U(c),d=P(u),i=u.body;r=Le(e,d,t,()=>V(d[n],t),(l,a)=>{a?d.scroll({[t?"left":"top"]:e.$getScrollOffset()+l}):d.scrollBy(t?l:0,t?0:l)},()=>f(c,i,d,t))},$dispose(){r&&r._dispose(),s=void 0},$fixScrollJump:()=>{r&&r._fixScrollJump()},$scrollToIndex(c,{align:n,smooth:u,offset:d=0}={}){if(!s)return;if(c=re(c,0,e.$getItemsLength()-1),n==="nearest"){const a=e.$getItemOffset(c),_=e.$getScrollOffset();if(a<_)n="start";else if(a+e.$getItemSize(c)>_+e.$getViewportSize())n="end";else return}const i=U(s),l=P(i);m(()=>{const a=f(s,i.body,l,t),_=l.innerHeight-i.documentElement.clientHeight,p=l.innerHeight-i.documentElement.clientWidth,S=n==="end"||n==="center"?t?p:_:0;return d+a+e.$getItemOffset(c)+(n==="end"?e.$getItemSize(c)-(e.$getViewportSize()-S):n==="center"?(e.$getItemSize(c)-(e.$getViewportSize()-S))/2:0)},u)}}},Fe=(e,t)=>{const s=Se(e,!1),r=Se(t,!0);return{$observe(o){s.$observe(o),r.$observe(o)},$dispose(){s.$dispose(),r.$dispose()},$scrollTo(o,f){s.$scrollTo(f),r.$scrollTo(o)},$scrollBy(o,f){s.$scrollBy(f),r.$scrollBy(o)},$scrollToIndex(o,f){s.$scrollToIndex(f),r.$scrollToIndex(o)},$fixScrollJump(){s.$fixScrollJump(),r.$fixScrollJump()}}},le=e=>{let t;return{_observe(s){(t||(t=new(P(U(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ye=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,f=le(m=>{const c=[];for(const{target:n,contentRect:u}of m)if(n.offsetParent)if(n===s)e.$update(K,u[r]);else{const d=o.get(n);d!=A&&c.push([d,u[r]])}c.length&&e.$update(x,c)});return{$observeRoot(m){f._observe(s=m)},$observeItem:(m,c)=>(o.set(m,c),f._observe(m),()=>{o.delete(m),f._unobserve(m)}),$dispose:f._dispose}},qe=(e,t)=>{const s=t?"width":"height",r=t?"innerWidth":"innerHeight",o=new WeakMap,f=le(c=>{const n=[];for(const{target:u,contentRect:d}of c){if(!u.offsetParent)continue;const i=o.get(u);i!=A&&n.push([i,d[s]])}n.length&&e.$update(x,n)});let m;return{$observeRoot(c){const n=P(U(c)),u=()=>{e.$update(K,n[r])};n.addEventListener("resize",u),u(),m=()=>{n.removeEventListener("resize",u)}},$observeItem:(c,n)=>(o.set(c,n),f._observe(c),()=>{o.delete(c),f._unobserve(c)}),$dispose(){m&&m(),f._dispose()}}},Ge=(e,t)=>{let s;const r="height",o="width",f=new WeakMap,m=new Set,c=new Set,n=new Map,u=(i,l)=>`${i}-${l}`,d=le(i=>{const l=new Set,a=new Set;for(const{target:_,contentRect:p}of i)if(_.offsetParent)if(_===s)e.$update(K,p[r]),t.$update(K,p[o]);else{const S=f.get(_);if(S){const[$,b]=S,J=u($,b),g=n.get(J),y=[p[r],p[o]];let L,v;g?(g[0]!==y[0]&&(L=!0),g[1]!==y[1]&&(v=!0)):L=v=!0,L&&l.add($),v&&a.add(b),(L||v)&&n.set(J,y)}}if(l.size){const _=[];l.forEach(p=>{let S=0;c.forEach($=>{const b=n.get(u(p,$));b&&(S=E(S,b[0]))}),S&&_.push([p,S])}),e.$update(x,_)}if(a.size){const _=[];a.forEach(p=>{let S=0;m.forEach($=>{const b=n.get(u($,p));b&&(S=E(S,b[1]))}),S&&_.push([p,S])}),t.$update(x,_)}});return{$observeRoot(i){d._observe(s=i)},$observeItem(i,l,a){return f.set(i,[l,a]),m.add(l),c.add(a),d._observe(i),()=>{f.delete(i),d._unobserve(i)}},$dispose:d._dispose}},Xe=ge?G.useLayoutEffect:G.useEffect,$e="current",ve=(e,t)=>{if(Array.isArray(e))for(const s of e)ve(s,t);else e==null||typeof e=="boolean"||t.push(e)},Ze=e=>{const t=[];return ve(e,t),t},Qe=(e,t)=>{const s=e.key;return s??"_"+t},je=e=>{const t=G.useRef();return t[$e]||(t[$e]=e())},He=e=>G.useReducer(e.$getStateVersion,void 0,e.$getStateVersion)[1];export{Je as A,M as U,je as a,He as b,Ke as c,Ge as d,Fe as e,he as f,xe as g,De as h,be as i,We as j,Ye as k,Se as l,pe as m,Qe as n,qe as o,Be as p,Ze as q,$e as r,Te as s,Xe as u};