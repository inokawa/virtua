import{K as De,b as de,L as yt,M as ke,r as ve,a as te,p as Ve,N as re,O as le,P as Te,Q as ge,R as wt,S as Mt,T as Oe,U as Se,W as Dt,X as kt,Y as Vt,Z as me,_ as Ee,$ as xe,a0 as xt,a1 as Ut,E as Ue,G as Gt,a2 as Jt,a3 as Ie,a4 as pe,a5 as Pt,a6 as Ft,a7 as be,J as Bt,a8 as Ht,a9 as Kt,aa as Zt,c as Ge,d as J,ab as ue,ac as Je,f as Q,g as j,n as Pe,A as Fe,k as E,h as $,j as Be,ad as D,D as Le,v as ie,o as Wt,ae as ze,s as Re}from"./props-DabDn2RK.js";let Yt=!1,Z=null;function Ce(e){Z=e}function wn(e,t){return t}function Xt(e,t,n,s){for(var i=[],f=t.length,o=0;o<f;o++)Dt(t[o].e,i,!0);var a=f>0&&i.length===0&&n!==null;if(a){var r=n.parentNode;kt(r),r.append(n),s.clear(),U(e,t[0].prev,t[f-1].next)}Vt(i,()=>{for(var c=0;c<f;c++){var _=t[c];a||(s.delete(_.k),U(e,_.prev,_.next)),me(_.e,!a)}})}function qt(e,t,n,s,i,f=null){var o=e,a={flags:t,items:new Map,first:null},r=(t&xe)!==0;if(r){var c=e;o=c.appendChild(De())}var _=null,l=!1;de(()=>{var u=n(),d=yt(u)?u:u==null?[]:ke(u),S=d.length;l&&S===0||(l=S===0,Qt(d,a,o,i,t,s),f!==null&&(S===0?_?ve(_):_=te(()=>f(o)):_!==null&&Ve(_,()=>{_=null})),n())})}function Qt(e,t,n,s,i,f){var w,M,L,N;var o=(i&xt)!==0,a=(i&(ge|Se))!==0,r=e.length,c=t.items,_=t.first,l=_,u,d=null,S,T=[],I=[],g,m,v,h;if(o)for(h=0;h<r;h+=1)g=e[h],m=f(g,h),v=c.get(m),v!==void 0&&((w=v.a)==null||w.measure(),(S??(S=new Set)).add(v));for(h=0;h<r;h+=1){if(g=e[h],m=f(g,h),v=c.get(m),v===void 0){var z=l?l.e.nodes_start:n;d=$t(z,t,d,d===null?t.first:d.next,g,m,h,s,i),c.set(m,d),T=[],I=[],l=d.next;continue}if(a&&jt(v,g,h,i),v.e.f&re&&(ve(v.e),o&&((M=v.a)==null||M.unfix(),(S??(S=new Set)).delete(v))),v!==l){if(u!==void 0&&u.has(v)){if(T.length<I.length){var A=I[0],C;d=A.prev;var G=T[0],k=T[T.length-1];for(C=0;C<T.length;C+=1)Ne(T[C],A,n);for(C=0;C<I.length;C+=1)u.delete(I[C]);U(t,G.prev,k.next),U(t,d,G),U(t,k,A),l=A,d=k,h-=1,T=[],I=[]}else u.delete(v),Ne(v,l,n),U(t,v.prev,v.next),U(t,v,d===null?t.first:d.next),U(t,d,v),d=v;continue}for(T=[],I=[];l!==null&&l.k!==m;)l.e.f&re||(u??(u=new Set)).add(l),I.push(l),l=l.next;if(l===null)continue;v=l}T.push(v),d=v,l=v.next}if(l!==null||u!==void 0){for(var y=u===void 0?[]:ke(u);l!==null;)l.e.f&re||y.push(l),l=l.next;var p=y.length;if(p>0){var O=i&xe&&r===0?n:null;if(o){for(h=0;h<p;h+=1)(L=y[h].a)==null||L.measure();for(h=0;h<p;h+=1)(N=y[h].a)==null||N.fix()}Xt(t,y,O,c)}}o&&Ee(()=>{var b;if(S!==void 0)for(v of S)(b=v.a)==null||b.apply()}),le.first=t.first&&t.first.e,le.last=d&&d.e}function jt(e,t,n,s){s&ge&&Te(e.v,t),s&Se?Te(e.i,n):e.i=n}function $t(e,t,n,s,i,f,o,a,r){var c=Z;try{var _=(r&ge)!==0,l=(r&wt)===0,u=_?l?Mt(i):Oe(i):i,d=r&Se?Oe(o):o,S={i:d,v:u,k:f,a:null,e:null,prev:n,next:s};return Z=S,S.e=te(()=>a(e,u,d),Yt),S.e.prev=n&&n.e,S.e.next=s&&s.e,n===null?t.first=S:(n.next=S,n.e.next=S.e),s!==null&&(s.prev=S,s.e.prev=S.e),S}finally{Z=c}}function Ne(e,t,n){for(var s=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,f=e.e.nodes_start;f!==s;){var o=Ut(f);i.before(f),f=o}}function U(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function en(e,t,...n){var s=e,i=Gt,f;de(()=>{i!==(i=t())&&(f&&(me(f),f=null),f=te(()=>i(s,...n)))},Ue)}function He(e,t,n,s,i,f){var o,a,r=null,c=e,_,l=Z;de(()=>{const u=t()||null;var d=u==="svg"?Ie:null;if(u!==o){var S=Z;Ce(l),_&&(u===null?Ve(_,()=>{_=null,a=null}):u===a?ve(_):me(_)),u&&u!==a&&(_=te(()=>{if(r=d?document.createElementNS(d,u):document.createElement(u),Jt(r,r),s){var T=r.appendChild(De());s(r,T)}le.nodes_end=r,c.before(r)})),o=u,o&&(a=o),Ce(S)}},Ue)}function tn(e,t){if(t){const n=document.body;e.autofocus=!0,Ee(()=>{document.activeElement===n&&e.focus()})}}let Ae=!1;function Mn(){Ae||(Ae=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function nn(e,t,n,s){var i=e.__attributes??(e.__attributes={});i[t]!==(i[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Kt]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ze(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ke(e,t,n,s,i=!1,f=!1,o=!1){var a=t||{},r=e.tagName==="OPTION";for(var c in t)c in n||(n[c]=null);var _=Ze(e),l=e.__attributes??(e.__attributes={}),u=[];for(const g in n){let m=n[g];if(r&&g==="value"&&m==null){e.value=e.__value="",a[g]=m;continue}var d=a[g];if(m!==d){a[g]=m;var S=g[0]+g[1];if(S!=="$$"){if(S==="on"){const v={},h="$$"+g;let z=g.slice(2);var T=Zt(z);if(Ft(z)&&(z=z.slice(0,-7),v.capture=!0),!T&&d){if(m!=null)continue;e.removeEventListener(z,a[h],v),a[h]=null}if(m!=null)if(T)e[`__${z}`]=m,Bt([z]);else{let A=function(C){a[g].call(this,C)};t?a[h]=be(z,e,A,v):u.push([g,m,()=>a[h]=be(z,e,A,v)])}}else if(g==="style"&&m!=null)e.style.cssText=m+"";else if(g==="autofocus")tn(e,!!m);else if(g==="__value"||g==="value"&&m!=null)e.value=e[g]=e.__value=m;else{var I=g;i||(I=Ht(I)),m==null&&!f?(l[g]=null,e.removeAttribute(g)):_.includes(I)&&(f||typeof m!="string")?e[I]=m:typeof m!="function"&&nn(e,I,m)}g==="style"&&"__styles"in e&&(e.__styles={})}}}return t||Ee(()=>{if(e.isConnected)for(const[g,m,v]of u)a[g]===m&&v()}),a}var ye=new Map;function Ze(e){var t=ye.get(e.nodeName);if(t)return t;ye.set(e.nodeName,t=[]);for(var n,s=pe(e),i=Element.prototype;i!==s;){n=Pt(s);for(var f in n)n[f].set&&t.push(f);s=pe(s)}return t}const We=e=>Object.keys(e).reduce((t,n)=>{const s=e[n];return s==null?t:t+`${n}:${s};`},""),sn=(e,t)=>"_"+t,W=null,{min:B,max:V,abs:we,floor:rn}=Math,ae=setTimeout,Ye=(e,t,n)=>B(n,V(t,e)),on=e=>[...e].sort((t,n)=>t-n),ln=e=>{const t=on(e),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},un=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},an=(e,t)=>{let n;const s=()=>{n!=W&&clearTimeout(n)},i=()=>{s(),n=ae(()=>{n=W,e()},t)};return i._cancel=s,i},he=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},H=-1,ee=(e,t,n)=>{const s=n?"unshift":"push";for(let i=0;i<t;i++)e[s](H);return e},ne=(e,t)=>{const n=e._sizes[t];return n===H?e._defaultItemSize:n},fn=(e,t,n)=>{const s=e._sizes[t]===H;return e._sizes[t]=n,e._computedOffsetIndex=B(t,e._computedOffsetIndex),s},se=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=ne(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},cn=e=>e._length?se(e,e._length-1)+ne(e,e._length-1):0,Y=(e,t,n=0,s=e._length-1)=>{for(;n<=s;){const i=rn((n+s)/2),f=se(e,i);if(f<=t){if(f+ne(e,i)>t)return i;n=i+1}else s=i-1}return Ye(n,0,e._length-1)},_n=(e,t,n,s)=>{if(s=B(s,e._length-1),se(e,s)<=t){const i=Y(e,t+n,s);return[Y(e,t,s,i),i]}else{const i=Y(e,t,void 0,s);return[i,Y(e,t+n,i)]}},dn=(e,t)=>{let n=0;const s=e._sizes.filter((f,o)=>{const a=f!==H;return a&&o<t&&n++,a}),i=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=ln(s))-i)*V(t-n,0)},vn=(e,t,n)=>({_defaultItemSize:t,_sizes:ee([],e),_length:e,_computedOffsetIndex:-1,_offsets:ee([],e)}),gn=e=>[e._sizes.slice(),e._defaultItemSize],Me=(e,t,n)=>{const s=t-e._length;return e._computedOffsetIndex=n?-1:B(t-1,e._computedOffsetIndex),e._length=t,s>0?(ee(e._offsets,s),ee(e._sizes,s,n),e._defaultItemSize*s):(e._offsets.splice(s),(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((i,f)=>i-(f===H?e._defaultItemSize:f),0))},Sn=typeof window<"u",Xe=()=>document.documentElement,mn=e=>e.ownerDocument,En=e=>e.defaultView,qe=he(()=>Sn?getComputedStyle(Xe()).direction==="rtl":!1),Qe=he(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),In=he(()=>"scrollBehavior"in Xe().style),F=0,je=1,$e=2,X=0,hn=1,oe=2,fe=1,et=2,tt=3,nt=4,st=5,rt=6,it=7,ot=8,P=1,ce=2,lt=4,ut=8,Tn=e=>V(e._getTotalSize(),e._getViewportSize()),On=e=>!!e._getViewportSize(),pn=(e,t,n,s,i)=>(s!==je&&(e-=V(0,n)),s!==$e&&(t+=V(0,n)),[V(e,0),B(t,i-1)]),bn=(e,t=40,n=0,s,i=!1)=>{let f=!!n,o=[],a=0,r=0,c=0,_=0,l=0,u=0,d=0,S=F,T=X,I=f?[0,V(n-1,0)]:W,g=[0,0],m=0;const v=vn(e,t),h=new Set,z=()=>c-r,A=p=>_n(v,p,a,g[0]),C=()=>cn(v),G=p=>se(v,p)-u,k=p=>ne(v,p),y=p=>{p&&(Qe()&&S!==F?u+=p:(l+=p,_++))};return{_getStateVersion(){return o},_getCacheSnapshot(){return gn(v)},_getRange(){return d?g:(g=A(V(0,z()+u+l)),I?[B(g[0],I[0]),V(g[1],I[1])]:g)},_isUnmeasuredItem(p){return v._sizes[p]===H},_hasUnmeasuredItemsInFrozenRange(){return I?v._sizes.slice(V(0,I[0]-1),B(v._length-1,I[1]+1)+1).includes(H):!1},_getItemOffset:G,_getItemSize:k,_getItemsLength(){return v._length},_getScrollOffset(){return c},_getScrollDirection(){return S},_getViewportSize(){return a},_getStartSpacerSize(){return r},_getTotalSize:C,_getJumpCount(){return _},_flushJump(){return d=l,l=0,[d,T===oe||z()+a>=C()]},_subscribe(p,O){const w=[p,O];return h.add(w),()=>{h.delete(w)}},_update(p,O){let w,M,L=0;switch(p){case fe:{const N=d;d=0;const b=O-c,R=we(b);!(N&&R<we(N)+1)&&T===X&&(S=b<0?$e:je),f&&(I=W,f=!1),c=O,L=lt;const x=z();x>=-a&&x<=C()&&(L+=P,M=R>a);break}case et:{L=ut,S!==F&&(w=!0,L+=P),S=F,T=X,I=W;break}case tt:{const N=O.filter(([b,R])=>v._sizes[b]!==R);if(!N.length)break;y(N.reduce((b,[R,K])=>((T===oe||(I?R<I[0]:G(R)+(S===F&&T===X?k(R):0)<z()))&&(b+=K-k(R)),b),0));for(const[b,R]of N){const K=k(b),x=fn(v,b,R);i&&(m+=x?R:R-K)}i&&a&&m>a&&(y(dn(v,g[0])),i=!1),L=P+ce,M=!0;break}case nt:{a!==O&&(a=O,L=P+ce);break}case st:{O[1]?(y(Me(v,O[0],!0)),T=oe,L=P):Me(v,O[0]);break}case rt:{r=O;break}case it:{T=hn;break}case ot:{I=A(O),L=P;break}}L&&(o=[],w&&u&&(l+=u,u=0,_++),h.forEach(([N,b])=>{L&N&&b(M)}))}}},Ln=e=>{let t;return{_observe(n){(t||(t=new(En(mn(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},zn=(e,t)=>{let n;const s=t?"width":"height",i=new WeakMap,f=Ln(o=>{const a=[];for(const{target:r,contentRect:c}of o)if(r.offsetParent)if(r===n)e._update(nt,c[s]);else{const _=i.get(r);_!=W&&a.push([_,c[s]])}a.length&&e._update(tt,a)});return{_observeRoot(o){f._observe(n=o)},_observeItem:(o,a)=>(i.set(o,a),f._observe(o),()=>{i.delete(o),f._unobserve(o)}),_dispose:f._dispose}},q=(e,t)=>t&&qe()?-e:e,Rn=(e,t,n,s,i,f)=>{const o=Date.now;let a=0,r=!1,c=!1,_=!1,l=!1;const u=an(()=>{if(r||c){r=!1,u();return}_=!1,e._update(et)},150),d=()=>{a=o(),_&&(l=!0),e._update(fe,s()),u()},S=g=>{if(r||e._getScrollDirection()===F||g.ctrlKey)return;const m=o()-a;150>m&&50<m&&(n?g.deltaX:g.deltaY)&&(r=!0)},T=()=>{c=!0,_=l=!1},I=()=>{c=!1,Qe()&&(_=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",S,{passive:!0}),t.addEventListener("touchstart",T,{passive:!0}),t.addEventListener("touchend",I,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",S),t.removeEventListener("touchstart",T),t.removeEventListener("touchend",I),u._cancel()},_fixScrollJump:()=>{const[g,m]=e._flushJump();g&&(i(q(g,n),m,l),l=!1,m&&e._getViewportSize()>e._getTotalSize()&&e._update(fe,s()))}}},Cn=(e,t)=>{let n,s,i;const f=t?"scrollLeft":"scrollTop",o=t?"overflowX":"overflowY",a=async(r,c)=>{if(!n){un(()=>a(r,c));return}i&&i();const _=()=>{let l;return[new Promise((u,d)=>{l=u,i=d,On(e)&&ae(d,150)}),e._subscribe(ce,()=>{l&&l()})]};if(c&&In()){for(;e._update(ot,r()),!!e._hasUnmeasuredItemsInFrozenRange();){const[l,u]=_();try{await l}catch{return}finally{u()}}n.scrollTo({[t?"left":"top"]:q(r(),t),behavior:"smooth"})}else for(;;){const[l,u]=_();try{n[f]=q(r(),t),e._update(it),await l}catch{return}finally{u()}}};return{_observe(r){n=r,s=Rn(e,r,t,()=>q(r[f],t),(c,_,l)=>{if(l){const u=r.style,d=u[o];u[o]="hidden",ae(()=>{u[o]=d})}_?(r[f]=e._getScrollOffset()+c,i&&i()):r[f]+=c})},_dispose(){s&&s._dispose()},_scrollTo(r){a(()=>r)},_scrollBy(r){r+=e._getScrollOffset(),a(()=>r)},_scrollToIndex(r,{align:c,smooth:_,offset:l=0}={}){if(r=Ye(r,0,e._getItemsLength()-1),c==="nearest"){const u=e._getItemOffset(r),d=e._getScrollOffset();if(u<d)c="start";else if(u+e._getItemSize(r)>d+e._getViewportSize())c="end";else return}a(()=>l+e._getStartSpacerSize()+e._getItemOffset(r)+(c==="end"?e._getItemSize(r)-e._getViewportSize():c==="center"?(e._getItemSize(r)-e._getViewportSize())/2:0),_)},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},_e=0,at=1,ft=2,ct=3,_t=4,dt=5,vt=6,gt=7,St=8,mt=9,Et=10,It=11,ht=12,Tt=13,Ot=14,pt=15,bt=16,Lt=17,zt=18,Rt=19,Nn=(e,t,n,s,i,f)=>{const o=bn(e,t??40,void 0,void 0,!t),a=zn(o,n),r=Cn(o,n),c=o._subscribe(P,()=>{s(o._getStateVersion())}),_=o._subscribe(lt,()=>{i(o._getScrollOffset())}),l=o._subscribe(ut,()=>{f()});return{[_e]:u=>{a._observeRoot(u),r._observe(u)},[at]:()=>{c(),_(),l(),a._dispose(),r._dispose()},[ft]:o._getRange,[ct]:o._getTotalSize,[_t]:o._getViewportSize,[dt]:o._getScrollOffset,[vt]:o._getScrollDirection,[gt]:o._getJumpCount,[St]:o._getItemOffset,[mt]:o._isUnmeasuredItem,[Et]:o._getItemsLength,[It]:o._getStartSpacerSize,[ht]:a._observeItem,[Tt]:r._fixScrollJump,[Ot]:(u,d)=>{o._update(st,[u,d])},[pt]:u=>{o._update(rt,u)},[bt]:()=>Tn(o),[Lt]:r._scrollTo,[zt]:r._scrollBy,[Rt]:r._scrollToIndex}};function Ct(e,t){Ge(t,!0);let n=J(t,"as",3,"div"),s,i,f;ue(()=>{f!==t.index&&(i&&i(),i=t.resizer(s,f=t.index))}),Je(()=>{i&&i()});let o=D(()=>{const c={position:"absolute",[t.horizontal?"height":"width"]:"100%",[t.horizontal?"top":"left"]:"0px",[t.horizontal?qe()?"right":"left":"top"]:t.offset+"px",visibility:t.hide?"hidden":"visible"};return t.horizontal&&(c.display="flex"),We(c)});var a=Q(),r=j(a);He(r,n,!1,(c,_)=>{Pe(c,S=>s=S,()=>s);let l;Fe(()=>l=Ke(c,l,{style:E(o)},void 0,c.namespaceURI===Ie,c.nodeName.includes("-")));var u=Q(),d=j(u);en(d,()=>t.children,()=>t.item,()=>t.index),$(_,u)}),$(e,a),Be()}Ct.__docgen={keywords:[],data:[],name:"ListItem.svelte"};function An(e,t){Ge(t,!0);let n=J(t,"getKey",3,sn),s=J(t,"as",3,"div"),i=J(t,"overscan",3,4),f=J(t,"shift",3,!1),o=J(t,"horizontal",3,!1),a=J(t,"startMargin",3,0);const r=Nn(t.data.length,t.itemSize,o(),O=>{Re(_,ie(O))},O=>{t.onscroll&&t.onscroll(O)},()=>{t.onscrollend&&t.onscrollend()});let c=Le(void 0),_=Le(ie([])),l=D(()=>E(_)&&r[ft]()),u=D(()=>E(_)&&r[vt]()),d=D(()=>E(_)&&r[ct]()),S=D(()=>E(_)&&r[gt]()),T=D(()=>pn(E(l)[0],E(l)[1],i(),E(u),t.data.length));Wt(()=>{t.scrollRef?r[_e](t.scrollRef):r[_e](E(c).parentElement)}),Je(()=>{r[at]()}),ze(()=>{t.data.length!==r[Et]()&&r[Ot](t.data.length,f())}),ze(()=>{a()!==r[It]()&&r[pt](a())});let I;ue(()=>{I!==E(S)&&(I=E(S),r[Tt]())});let g;ue(()=>{g&&g[0]===E(l)[0]&&g[1]===E(l)[1]||(g=E(l),t.onrangechange&&t.onrangechange(E(l)[0],E(l)[1]))});const m=r[dt],v=r[bt],h=r[_t],z=r[Rt],A=r[Lt],C=r[zt];let G=D(()=>{const[O,w]=E(T),M=[];for(let L=O,N=w;L<=N;(L+=1)-1)M.push(t.data[L]);return M}),k=D(()=>We({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden",width:o()?E(d)+"px":"100%",height:o()?"100%":E(d)+"px","pointer-events":E(u)!==F?"none":void 0}));var y=Q(),p=j(y);return He(p,s,!1,(O,w)=>{Pe(O,b=>Re(c,ie(b)),()=>E(c));let M;Fe(()=>M=Ke(O,M,{style:E(k)},void 0,O.namespaceURI===Ie,O.nodeName.includes("-")));var L=Q(),N=j(L);qt(N,19,()=>E(G),(b,R)=>n()(b,R+E(T)[0]),(b,R,K)=>{const x=D(()=>E(K)+E(T)[0]);var Nt=D(()=>E(_)&&r[St](E(x))),At=D(()=>E(_)&&r[mt](E(x)));Ct(b,{get children(){return t.children},get item(){return E(R)},get index(){return E(x)},get as(){return t.item},get offset(){return E(Nt)},get hide(){return E(At)},get horizontal(){return o()},get resizer(){return r[ht]}})}),$(w,L)}),$(e,y),Be({getScrollOffset:m,getScrollSize:v,getViewportSize:h,scrollToIndex:z,scrollTo:A,scrollBy:C})}An.__docgen={keywords:[],data:[],name:"Virtualizer.svelte"};export{An as V,Mn as a,Ke as b,nn as c,qt as e,wn as i,We as s};
