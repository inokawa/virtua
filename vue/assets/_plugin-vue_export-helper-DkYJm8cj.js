import{d as Le,b as Ee,m as ue,v as ve,e as he,x as we,i as Re}from"./vue.esm-bundler-CLFsV--v.js";const T=null,{min:w,max:L,abs:fe,floor:ye}=Math,ee=(e,t,s)=>w(s,L(t,e)),Te=e=>[...e].sort((t,s)=>t-s),me=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},te=e=>{let t,s;return()=>(t||(t=!0,s=e()),s)},V=-1,k=(e,t,s)=>{const r=s?"unshift":"push";for(let o=0;o<t;o++)e[r](V);return e},K=(e,t)=>{const s=e._sizes[t];return s===V?e._defaultItemSize:s},Ce=(e,t,s)=>{const r=e._sizes[t]===V;return e._sizes[t]=s,e._computedOffsetIndex=w(t,e._computedOffsetIndex),r},Y=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let s=e._computedOffsetIndex,r=e._offsets[s];for(;s<t;)r+=K(e,s),e._offsets[++s]=r;return e._computedOffsetIndex=t,r},Ve=e=>e._length?Y(e,e._length-1)+K(e,e._length-1):0,y=(e,t,s=0,r=e._length-1)=>{for(;s<=r;){const o=ye((s+r)/2),f=Y(e,o);if(f<=t){if(f+K(e,o)>t)return o;s=o+1}else r=o-1}return ee(s,0,e._length-1)},Ne=(e,t,s,r)=>{if(r=w(r,e._length-1),Y(e,r)<=t){const o=y(e,t+s,r);return[y(e,t,r,o),o]}else{const o=y(e,t,void 0,r);return[o,y(e,t+s,o)]}},Ae=(e,t)=>{let s=0;const r=[];e._sizes.forEach((l,u)=>{l!==V&&(r.push(l),u<t&&s++)}),e._computedOffsetIndex=-1;const o=Te(r),f=o.length,_=f/2|0,i=f%2===0?(o[_-1]+o[_])/2:o[_],n=e._defaultItemSize;return((e._defaultItemSize=i)-n)*L(t-s,0)},ke=(e,t,s)=>({_defaultItemSize:s?s[1]:t,_sizes:s&&s[0]?k(s[0].slice(0,w(e,s[0].length)),L(0,e-s[0].length)):k([],e),_length:e,_computedOffsetIndex:-1,_offsets:k([],e)}),Me=e=>[e._sizes.slice(),e._defaultItemSize],de=(e,t,s)=>{const r=t-e._length;return e._computedOffsetIndex=s?-1:w(t-1,e._computedOffsetIndex),e._length=t,r>0?(k(e._offsets,r),k(e._sizes,r,s),e._defaultItemSize*r):(e._offsets.splice(r),(s?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((o,f)=>o-(f===V?e._defaultItemSize:f),0))},De=typeof window<"u",Se=()=>document.documentElement,M=e=>e.ownerDocument,D=e=>e.defaultView,se=te(()=>De?getComputedStyle(Se()).direction==="rtl":!1),pe=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ge=te(()=>"scrollBehavior"in Se().style),Pe=2147483647,N=0,_e=1,ae=2,B=0,Ue=1,Q=2,H=1,$e=2,ne=3,re=4,Je=5,Ie=6,oe=7,ie=8,R=1,F=2,We=4,xe=8,Ke=e=>L(e.$getTotalSize(),e.$getViewportSize()),be=e=>!!e.$getViewportSize(),Ye=(e,t=40,s=4,r=0,o,f=!1)=>{let _=!!r,i=1,n=0,l=0,u=0,c=0,d=0,a=0,g=N,I=B,$=_?[0,L(r-1,0)]:T,E=[0,0],v=0;const p=ke(e,t,o),j=new Set,P=()=>u-l,U=()=>P()+d+c,le=m=>Ne(p,m,n,E[0]),X=()=>Ve(p),ce=m=>Y(p,m)-d,J=m=>K(p,m),G=m=>{m&&(pe()&&g!==N?d+=m:c+=m)};return{$getStateVersion:()=>i,$getCacheSnapshot:()=>Me(p),$getRange:()=>{let m,S;return a?[m,S]=E:([m,S]=E=le(L(0,U())),$&&(m=w(m,$[0]),S=L(S,$[1]))),g!==_e&&(m-=L(0,s)),g!==ae&&(S+=L(0,s)),[L(m,0),w(S,p._length-1)]},$findStartIndex:()=>y(p,U()),$findEndIndex:()=>y(p,U()+n),$isUnmeasuredItem:m=>p._sizes[m]===V,_hasUnmeasuredItemsInFrozenRange:()=>$?p._sizes.slice(L(0,$[0]-1),w(p._length-1,$[1]+1)+1).includes(V):!1,$getItemOffset:ce,$getItemSize:J,$getItemsLength:()=>p._length,$getScrollOffset:()=>u,$isScrolling:()=>g!==N,$getViewportSize:()=>n,$getStartSpacerSize:()=>l,$getTotalSize:X,_flushJump:()=>(a=c,c=0,[a,I===Q||P()+n>=X()]),$subscribe:(m,S)=>{const A=[m,S];return j.add(A),()=>{j.delete(A)}},$update:(m,S)=>{let A,Z,z=0;switch(m){case H:{const h=a;a=0;const O=S-u,b=fe(O);!(h&&b<fe(h)+1)&&I===B&&(g=O<0?ae:_e),_&&($=T,_=!1),u=S,z=We;const x=P();x>=-n&&x<=X()&&(z+=R,Z=b>n);break}case $e:{z=xe,g!==N&&(A=!0,z+=R),g=N,I=B,$=T;break}case ne:{const h=S.filter(([O,b])=>p._sizes[O]!==b);if(!h.length)break;G(h.reduce((O,[b,W])=>((I===Q||($?!_&&b<$[0]:ce(b)+(g===N&&I===B?J(b):0)<P()))&&(O+=W-J(b)),O),0));for(const[O,b]of h){const W=J(O),x=Ce(p,O,b);f&&(v+=x?b:b-W)}f&&n&&v>n&&(G(Ae(p,y(p,U()))),f=!1),z=R+F,Z=!0;break}case re:{n!==S&&(n=S,z=R+F);break}case Je:{S[1]?(G(de(p,S[0],!0)),I=Q,z=R):(de(p,S[0]),z=R);break}case Ie:{l=S;break}case oe:{I=Ue;break}case ie:{$=le(S),z=R;break}}z&&(i=i%Pe+1,A&&d&&(c+=d,d=0),j.forEach(([h,O])=>{z&h&&O(Z)}))}}},q=setTimeout,Be=(e,t)=>{let s;const r=()=>{s!=T&&clearTimeout(s)},o=()=>{r(),s=q(()=>{s=T,e()},t)};return o._cancel=r,o},C=(e,t)=>t&&se()?-e:e,Oe=(e,t,s,r,o,f)=>{const _=Date.now;let i=0,n=!1,l=!1,u=!1,c=!1;const d=Be(()=>{if(n||l){n=!1,d();return}u=!1,e.$update($e)},150),a=()=>{i=_(),u&&(c=!0),f&&e.$update(Ie,f()),e.$update(H,r()),d()},g=E=>{if(n||!e.$isScrolling()||E.ctrlKey)return;const v=_()-i;150>v&&50<v&&(s?E.deltaX:E.deltaY)&&(n=!0)},I=()=>{l=!0,u=c=!1},$=()=>{l=!1,pe()&&(u=!0)};return t.addEventListener("scroll",a),t.addEventListener("wheel",g,{passive:!0}),t.addEventListener("touchstart",I,{passive:!0}),t.addEventListener("touchend",$,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",a),t.removeEventListener("wheel",g),t.removeEventListener("touchstart",I),t.removeEventListener("touchend",$),d._cancel()},_fixScrollJump:()=>{const[E,v]=e._flushJump();E&&(o(C(E,s),v,c),c=!1,v&&e.$getViewportSize()>e.$getTotalSize()&&e.$update(H,r()))}}},je=(e,t)=>{let s,r,o;const f=t?"scrollLeft":"scrollTop",_=t?"overflowX":"overflowY",i=async(n,l)=>{if(!s){me(()=>i(n,l));return}o&&o();const u=()=>{let c;return[new Promise((d,a)=>{c=d,o=a,be(e)&&q(a,150)}),e.$subscribe(F,()=>{c&&c()})]};if(l&&ge()){for(;e.$update(ie,n()),!!e._hasUnmeasuredItemsInFrozenRange();){const[c,d]=u();try{await c}catch{return}finally{d()}}s.scrollTo({[t?"left":"top"]:C(n(),t),behavior:"smooth"})}else for(;;){const[c,d]=u();try{s[f]=C(n(),t),e.$update(oe),await c}catch{return}finally{d()}}};return{$observe(n){s=n,r=Oe(e,n,t,()=>C(n[f],t),(l,u,c)=>{if(c){const d=n.style,a=d[_];d[_]="hidden",q(()=>{d[_]=a})}u?(n[f]=e.$getScrollOffset()+l,o&&o()):n[f]+=l})},$dispose(){r&&r._dispose()},$scrollTo(n){i(()=>n)},$scrollBy(n){n+=e.$getScrollOffset(),i(()=>n)},$scrollToIndex(n,{align:l,smooth:u,offset:c=0}={}){if(n=ee(n,0,e.$getItemsLength()-1),l==="nearest"){const d=e.$getItemOffset(n),a=e.$getScrollOffset();if(d<a)l="start";else if(d+e.$getItemSize(n)>a+e.$getViewportSize())l="end";else return}i(()=>c+e.$getStartSpacerSize()+e.$getItemOffset(n)+(l==="end"?e.$getItemSize(n)-e.$getViewportSize():l==="center"?(e.$getItemSize(n)-e.$getViewportSize())/2:0),u)},$fixScrollJump:()=>{r&&r._fixScrollJump()}}},Xe=(e,t)=>{let s,r,o;const f=(i,n,l,u,c=0)=>{const d=u?"offsetLeft":"offsetTop",a=c+(u&&se()?l.innerWidth-i[d]-i.offsetWidth:i[d]),g=i.offsetParent;return i===n||!g?a:f(g,n,l,u,a)},_=async(i,n)=>{if(!s){me(()=>_(i,n));return}o&&o();const l=()=>{let c;return[new Promise((d,a)=>{c=d,o=a,be(e)&&q(a,150)}),e.$subscribe(F,()=>{c&&c()})]},u=D(M(s));if(n&&ge()){for(;e.$update(ie,i()),!!e._hasUnmeasuredItemsInFrozenRange();){const[c,d]=l();try{await c}catch{return}finally{d()}}u.scroll({[t?"left":"top"]:C(i(),t),behavior:"smooth"})}else for(;;){const[c,d]=l();try{u.scroll({[t?"left":"top"]:C(i(),t)}),e.$update(oe),await c}catch{return}finally{d()}}};return{$observe(i){s=i;const n=t?"scrollX":"scrollY",l=M(i),u=D(l),c=l.body;r=Oe(e,u,t,()=>C(u[n],t),(d,a)=>{a?u.scroll({[t?"left":"top"]:e.$getScrollOffset()+d}):u.scrollBy(t?d:0,t?0:d)},()=>f(i,c,u,t))},$dispose(){r&&r._dispose(),s=void 0},$fixScrollJump:()=>{r&&r._fixScrollJump()},$scrollToIndex(i,{align:n,smooth:l,offset:u=0}={}){if(!s)return;if(i=ee(i,0,e.$getItemsLength()-1),n==="nearest"){const I=e.$getItemOffset(i),$=e.$getScrollOffset();if(I<$)n="start";else if(I+e.$getItemSize(i)>$+e.$getViewportSize())n="end";else return}const c=M(s),d=D(c),a=c.documentElement,g=()=>e.$getViewportSize()-(t?a.clientWidth:a.clientHeight);_(()=>u+f(s,c.body,d,t)+e.$getItemOffset(i)+(n==="end"?e.$getItemSize(i)-(e.$getViewportSize()-g()):n==="center"?(e.$getItemSize(i)-(e.$getViewportSize()-g()))/2:0),l)}}},ze=e=>{let t;return{_observe(s){(t||(t=new(D(M(s))).ResizeObserver(e))).observe(s)},_unobserve(s){t.unobserve(s)},_dispose(){t&&t.disconnect()}}},Ge=(e,t)=>{let s;const r=t?"width":"height",o=new WeakMap,f=ze(_=>{const i=[];for(const{target:n,contentRect:l}of _)if(n.offsetParent)if(n===s)e.$update(re,l[r]);else{const u=o.get(n);u!=T&&i.push([u,l[r]])}i.length&&e.$update(ne,i)});return{$observeRoot(_){f._observe(s=_)},$observeItem:(_,i)=>(o.set(_,i),f._observe(_),()=>{o.delete(_),f._unobserve(_)}),$dispose:f._dispose}},Ze=(e,t)=>{const s=t?"width":"height",r=t?"innerWidth":"innerHeight",o=new WeakMap,f=ze(i=>{const n=[];for(const{target:l,contentRect:u}of i){if(!l.offsetParent)continue;const c=o.get(l);c!=T&&n.push([c,u[s]])}n.length&&e.$update(ne,n)});let _;return{$observeRoot(i){const n=D(M(i)),l=()=>{e.$update(re,n[r])};n.addEventListener("resize",l),l(),_=()=>{n.removeEventListener("resize",l)}},$observeItem:(i,n)=>(o.set(i,n),f._observe(i),()=>{o.delete(i),f._unobserve(i)}),$dispose(){_&&_(),f._dispose()}}};function Fe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Re(e)}const Qe=Le({props:{_stateVersion:{type:Object,required:!0},_store:{type:Object,required:!0},_children:{type:Object,required:!0},_resizer:{type:Function,required:!0},_index:{type:Number,required:!0},_isHorizontal:{type:Boolean},_isSSR:{type:Boolean},_as:{type:String,required:!0},_itemProps:Object},setup(e){const t=Ee(),s=ue(()=>e._stateVersion.value&&e._store.$getItemOffset(e._index)),r=ue(()=>e._stateVersion.value&&e._store.$isUnmeasuredItem(e._index));return ve(()=>t.value&&e._index,(o,f,_)=>{_(e._resizer(t.value,e._index))},{flush:"post"}),()=>{const{_children:o,_isHorizontal:f,_isSSR:_,_as:i}=e,n=r.value,{style:l,...u}=e._itemProps??{},c={position:n&&_?void 0:"absolute",[f?"height":"width"]:"100%",[f?"top":"left"]:"0px",[f?se()?"right":"left":"top"]:s.value+"px",visibility:!n||_?"visible":"hidden",...l};return f&&(c.display="flex"),he(i,we({ref:t,style:c},u),Fe(o)?o:{default:()=>[o],_:2},16,["style"])}}}),He=(e,t)=>{const s=e.key;return s??"_"+t},et=(e,t)=>e[0]===t[0]&&e[1]===t[1],tt=(e,t)=>{const s=e.__vccOpts||e;for(const[r,o]of t)s[r]=o;return s};export{Je as A,Qe as L,R as U,tt as _,We as a,xe as b,Ye as c,Ge as d,je as e,He as f,Ke as g,Ie as h,et as i,Ze as j,Xe as k,me as m,Te as s};
