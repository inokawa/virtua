import{r as qe,t as G,b as F,q as Ut,u as Xe,S as x,i as ee,s as te,v as je,w,x as A,a as J,y as Qe,z as $e,A as xe,d as B,B as et,f as Te,p as ze,C as we,D as T,c as Jt,l as Bt,E as Re,F as Gt,o as Ft,G as Kt,e as Pt,j as _e,m as de,k as me,g as Ht,H as X,I as W,J as $,K as ce,L as ke,M as se,N as tt}from"./index-O2ddAVZd.js";function Ne(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Wt(e,t){G(e,1,1,()=>{t.delete(e.key)})}function Zt(e,t,n,s,o,r,l,f,c,_,d,a){let i=e.length,u=r.length,p=i;const g={};for(;p--;)g[e[p].key]=p;const b=[],h=new Map,S=new Map,I=[];for(p=u;p--;){const m=a(o,r,p),v=n(m);let E=l.get(v);E?I.push(()=>E.p(m,t)):(E=_(v,m),E.c()),h.set(v,b[p]=E),v in g&&S.set(v,Math.abs(p-g[v]))}const y=new Set,R=new Set;function O(m){F(m,1),m.m(f,d),l.set(m.key,m),d=m.first,u--}for(;i&&u;){const m=b[u-1],v=e[i-1],E=m.key,V=v.key;m===v?(d=m.first,i--,u--):h.has(V)?!l.has(E)||y.has(E)?O(m):R.has(V)?i--:S.get(E)>S.get(V)?(R.add(E),O(m)):(y.add(V),i--):(c(v,l),i--)}for(;i--;){const m=e[i];h.has(m.key)||c(m,l)}for(;u;)O(b[u-1]);return qe(I),b}const j=null,Z=Math.min,U=Math.max,De=Math.abs,be=setTimeout,nt=(e,t,n)=>Z(n,U(t,e)),Yt=e=>[...e].sort((t,n)=>t-n),qt=e=>{const t=Yt(e),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Xt=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},jt=(e,t)=>{let n;const s=()=>{n!=j&&clearTimeout(n)},o=()=>{s(),n=be(()=>{n=j,e()},t)};return o._cancel=s,o},ye=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},Y=-1,ae=(e,t,n)=>{const s=n?"unshift":"push";for(let o=0;o<t;o++)e[s](Y);return e},ge=(e,t)=>{const n=e._sizes[t];return n===Y?e._defaultItemSize:n},Qt=(e,t,n)=>{const s=e._sizes[t]===Y;return e._sizes[t]=n,e._computedOffsetIndex=Z(t,e._computedOffsetIndex),s},Le=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=ge(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},$t=e=>e._length?Le(e,e._length-1)+ge(e,e._length-1):0,Me=(e,t,n)=>{for(;n>=0&&n<e._length;){const s=Le(e,n);if(s<=t){if(s+ge(e,n)>t)break;n++}else n--}return nt(n,0,e._length-1)},xt=(e,t,n,s)=>{const o=Me(e,t,Z(n,e._length-1));return[o,Me(e,t+s,o)]},en=(e,t)=>{let n=0;const s=e._sizes.filter((r,l)=>{const f=r!==Y;return f&&l<t&&n++,f}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=qt(s))-o)*U(t-n,0)},tn=(e,t,n)=>({_defaultItemSize:t,_sizes:ae([],e),_length:e,_computedOffsetIndex:-1,_offsets:ae([],e)}),nn=e=>[[...e._sizes],e._defaultItemSize],Ae=(e,t,n)=>{const s=t-e._length;return e._computedOffsetIndex=n?-1:Z(t-1,e._computedOffsetIndex),e._length=t,s>0?(ae(e._offsets,s),ae(e._sizes,s,n),e._defaultItemSize*s):(e._offsets.splice(s),(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((o,r)=>o-(r===Y?e._defaultItemSize:r),0))},sn=typeof window<"u",st=()=>document.documentElement,on=e=>e.ownerDocument,rn=e=>e.defaultView,ot=ye(()=>sn?getComputedStyle(st()).direction==="rtl":!1),rt=ye(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ln=ye(()=>"scrollBehavior"in st().style),H=0,lt=1,it=2,oe=0,cn=1,pe=2,Ie=1,ct=2,ut=3,ft=4,at=5,un=6,_t=7,dt=8,P=1,ve=2,mt=4,gt=8,fn=e=>U(e._getTotalSize(),e._getViewportSize()),an=(e,t,n,s,o)=>(s!==lt&&(e-=U(0,n)),s!==it&&(t+=U(0,n)),[U(e,0),Z(t,o-1)]),_n=(e,t=40,n=0,s,o=!1)=>{let r=!!n,l=[],f=0,c=0,_=0,d=0,a=0,i=0,u=0,p=H,g=oe,b=r?[0,U(n-1,0)]:j,h=[0,0],S=0;const I=tn(e,t),y=new Set,R=()=>_-c,O=L=>xt(I,L,h[0],f),m=()=>$t(I),v=L=>Le(I,L)-i,E=L=>ge(I,L),V=L=>{L&&(rt()&&p!==H?i+=L:(a+=L,d++))};return{_getStateVersion(){return l},_getCacheSnapshot(){return nn(I)},_getRange(){return u?h:(h=O(U(0,R()+i+a)),b?[Z(h[0],b[0]),U(h[1],b[1])]:h)},_isUnmeasuredItem(L){return I._sizes[L]===Y},_isInitialMeasurementDone(){return!!f},_hasUnmeasuredItemsInFrozenRange(){return b?I._sizes.slice(U(0,b[0]-1),Z(I._length-1,b[1]+1)+1).includes(Y):!1},_getItemOffset:v,_getItemSize:E,_getItemsLength(){return I._length},_getScrollOffset(){return _},_getScrollDirection(){return p},_getViewportSize(){return f},_getStartSpacerSize(){return c},_getTotalSize:m,_getJumpCount(){return d},_flushJump(){return u=a,a=0,[u,g===pe||R()+f>=m()]},_subscribe(L,k){const K=[L,k];return y.add(K),()=>{y.delete(K)}},_update(L,k){let K,Q,D=0;switch(L){case Ie:{const M=u;u=0;const N=k-_,C=De(N);!(M&&C<De(M)+1)&&g===oe&&(p=N<0?it:lt),r&&(b=j,r=!1),_=k,D=mt;const z=R();z>=-f&&z<=m()&&(D+=P,Q=C>f);break}case ct:{D=gt,p!==H&&(K=!0,D+=P),p=H,g=oe,b=j;break}case ut:{const M=k.filter(([N,C])=>I._sizes[N]!==C);if(!M.length)break;V(M.reduce((N,[C,q])=>((g===pe||(b?C<b[0]:v(C)+(p===H&&g===oe?E(C):0)<R()))&&(N+=q-E(C)),N),0));for(const[N,C]of M){const q=E(N),z=Qt(I,N,C);o&&(S+=z?C:C-q)}o&&f&&S>f&&(V(en(I,h[0])),o=!1),D=P+ve,Q=!0;break}case ft:{f!==k&&(f=k,D=P+ve);break}case at:{k[1]?(V(Ae(I,k[0],!0)),g=pe,D=P):Ae(I,k[0]);break}case un:{c=k;break}case _t:{g=cn;break}case dt:{b=O(k),D=P;break}}D&&(l=[],K&&i&&(a+=i,i=0,d++),y.forEach(([M,N])=>{D&M&&N(Q)}))}}},dn=e=>{let t;return{_observe(n){(t||(t=new(rn(on(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},mn=(e,t)=>{let n;const s=t?"width":"height",o=new WeakMap,r=dn(l=>{const f=[];for(const{target:c,contentRect:_}of l)if(c.offsetParent)if(c===n)e._update(ft,_[s]);else{const d=o.get(c);d!=j&&f.push([d,_[s]])}f.length&&e._update(ut,f)});return{_observeRoot(l){r._observe(n=l)},_observeItem:(l,f)=>(o.set(l,f),r._observe(l),()=>{o.delete(l),r._unobserve(l)}),_dispose:r._dispose}},ue=(e,t)=>t&&ot()?-e:e,gn=(e,t,n,s,o,r)=>{const l=Date.now;let f=0,c=!1,_=!1,d=!1,a=!1;const i=jt(()=>{if(c||_){c=!1,i();return}d=!1,e._update(ct)},150),u=()=>{f=l(),d&&(a=!0),e._update(Ie,s()),i()},p=h=>{if(c||e._getScrollDirection()===H||h.ctrlKey)return;const S=l()-f;150>S&&50<S&&(n?h.deltaX:h.deltaY)&&(c=!0)},g=()=>{_=!0,d=a=!1},b=()=>{_=!1,rt()&&(d=!0)};return t.addEventListener("scroll",u),t.addEventListener("wheel",p,{passive:!0}),t.addEventListener("touchstart",g,{passive:!0}),t.addEventListener("touchend",b,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",u),t.removeEventListener("wheel",p),t.removeEventListener("touchstart",g),t.removeEventListener("touchend",b),i._cancel()},_fixScrollJump:()=>{const[h,S]=e._flushJump();h&&(o(ue(h,n),S,a),a=!1,S&&e._getViewportSize()>e._getTotalSize()&&e._update(Ie,s()))}}},hn=(e,t)=>{let n,s,o;const r=t?"scrollLeft":"scrollTop",l=t?"overflowX":"overflowY",f=async(c,_)=>{if(!n){Xt(()=>f(c,_));return}o&&o();const d=()=>{let a;return[new Promise((i,u)=>{a=i,o=u,e._isInitialMeasurementDone()&&be(u,150)}),e._subscribe(ve,()=>{a&&a()})]};if(_&&ln()){for(;e._update(dt,c()),!!e._hasUnmeasuredItemsInFrozenRange();){const[a,i]=d();try{await a}catch{return}finally{i()}}n.scrollTo({[t?"left":"top"]:ue(c(),t),behavior:"smooth"})}else for(;;){const[a,i]=d();try{n[r]=ue(c(),t),e._update(_t),await a}catch{return}finally{i()}}};return{_observe(c){n=c,s=gn(e,c,t,()=>ue(c[r],t),(_,d,a)=>{if(a){const i=c.style,u=i[l];i[l]="hidden",be(()=>{i[l]=u})}d?(c[r]=e._getScrollOffset()+_,o&&o()):c[r]+=_})},_dispose(){s&&s._dispose()},_scrollTo(c){f(()=>c)},_scrollBy(c){c+=e._getScrollOffset(),f(()=>c)},_scrollToIndex(c,{align:_,smooth:d,offset:a=0}={}){if(c=nt(c,0,e._getItemsLength()-1),_==="nearest"){const i=e._getItemOffset(c),u=e._getScrollOffset();if(i<u)_="start";else if(i+e._getItemSize(c)>u+e._getViewportSize())_="end";else return}f(()=>a+e._getStartSpacerSize()+e._getItemOffset(c)+(_==="end"?e._getItemSize(c)-e._getViewportSize():_==="center"?(e._getItemSize(c)-e._getViewportSize())/2:0),d)},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},ht=0,pt=1,St=2,zt=3,bt=4,It=5,vt=6,Ot=7,Oe=8,Ee=9,Et=10,Tt=11,yt=12,Lt=13,Ct=14,wt=15,Rt=16,pn=(e,t,n,s,o,r)=>{const l=_n(e,t??40,void 0,void 0,!t),f=mn(l,n),c=hn(l,n),_=l._subscribe(P,()=>{s(l._getStateVersion())}),d=l._subscribe(mt,()=>{o(l._getScrollOffset())}),a=l._subscribe(gt,()=>{r()});return{[ht]:i=>{f._observeRoot(i),c._observe(i)},[pt]:()=>{_(),d(),a(),f._dispose(),c._dispose()},[St]:l._getRange,[zt]:l._getTotalSize,[bt]:l._getViewportSize,[It]:l._getScrollOffset,[vt]:l._getScrollDirection,[Ot]:l._getJumpCount,[Oe]:l._getItemOffset,[Ee]:l._isUnmeasuredItem,[Et]:f._observeItem,[Tt]:c._fixScrollJump,[yt]:(i,u)=>{l._update(at,[i,u])},[Lt]:()=>fn(l),[Ct]:c._scrollTo,[wt]:c._scrollBy,[Rt]:c._scrollToIndex}},Se=(e,t)=>{(t?Ut:Xe)(()=>{e()})},fe=e=>Object.keys(e).reduce((t,n)=>t+`${n}:${e[n]};`,""),Sn=(e,t)=>"_"+t;function zn(e){let t,n;const s=e[8].default,o=je(s,e,e[7],null);return{c(){t=w("div"),o&&o.c(),A(t,"style",e[1])},m(r,l){J(r,t,l),o&&o.m(t,null),e[9](t),n=!0},p(r,[l]){o&&o.p&&(!n||l&128)&&Qe(o,s,r,r[7],n?xe(s,r[7],l,null):$e(r[7]),null),(!n||l&2)&&A(t,"style",r[1])},i(r){n||(F(o,r),n=!0)},o(r){G(o,r),n=!1},d(r){r&&B(t),o&&o.d(r),e[9](null)}}}function bn(e,t,n){let{$$slots:s={},$$scope:o}=t,{index:r}=t,{offset:l}=t,{hide:f}=t,{horizontal:c}=t,{resizer:_}=t,d,a,i;Xe(()=>{i!==r&&(a&&a(),a=_(d,i=r))}),et(()=>{a&&a()});let u;function p(g){Te[g?"unshift":"push"](()=>{d=g,n(0,d)})}return e.$$set=g=>{"index"in g&&n(2,r=g.index),"offset"in g&&n(3,l=g.offset),"hide"in g&&n(4,f=g.hide),"horizontal"in g&&n(5,c=g.horizontal),"resizer"in g&&n(6,_=g.resizer),"$$scope"in g&&n(7,o=g.$$scope)},e.$$.update=()=>{if(e.$$.dirty&56){const g={margin:"0px",padding:"0px",position:"absolute",[c?"height":"width"]:"100%",[c?"top":"left"]:"0px",[c?ot()?"right":"left":"top"]:l+"px",visibility:f?"hidden":"visible"};c&&(g.display="flex"),n(1,u=fe(g))}},[d,u,r,l,f,c,_,o,s,p]}class kt extends x{constructor(t){super(),ee(this,t,bn,zn,te,{index:2,offset:3,hide:4,horizontal:5,resizer:6})}}kt.__docgen={keywords:[],data:[],name:"ListItem.svelte"};function Ve(e,t,n){const s=e.slice();return s[32]=t[n],s[34]=n,s}const In=e=>({item:e[0]&32}),Ue=e=>({item:e[32]});function vn(e){let t,n;const s=e[24].default,o=je(s,e,e[26],Ue);return{c(){o&&o.c(),t=X()},m(r,l){o&&o.m(r,l),J(r,t,l),n=!0},p(r,l){o&&o.p&&(!n||l[0]&67108896)&&Qe(o,s,r,r[26],n?xe(s,r[26],l,In):$e(r[26]),Ue)},i(r){n||(F(o,r),n=!0)},o(r){G(o,r),n=!1},d(r){r&&B(t),o&&o.d(r)}}}function Je(e,t){let n,s,o;return s=new kt({props:{index:t[34]+t[3][0],offset:t[2]&&t[7][Oe](t[34]+t[3][0]),hide:t[2]&&t[7][Ee](t[34]+t[3][0]),horizontal:t[1],resizer:t[7][Et],$$slots:{default:[vn]},$$scope:{ctx:t}}}),{key:e,first:null,c(){n=Pt(),_e(s.$$.fragment),this.first=n},m(r,l){J(r,n,l),de(s,r,l),o=!0},p(r,l){t=r;const f={};l[0]&40&&(f.index=t[34]+t[3][0]),l[0]&44&&(f.offset=t[2]&&t[7][Oe](t[34]+t[3][0])),l[0]&44&&(f.hide=t[2]&&t[7][Ee](t[34]+t[3][0])),l[0]&2&&(f.horizontal=t[1]),l[0]&67108896&&(f.$$scope={dirty:l,ctx:t}),s.$set(f)},i(r){o||(F(s.$$.fragment,r),o=!0)},o(r){G(s.$$.fragment,r),o=!1},d(r){r&&B(n),me(s,r)}}}function On(e){let t,n,s=[],o=new Map,r,l,f,c=Ne(e[5]);const _=i=>i[0](i[32],i[34]+i[3][0]);for(let i=0;i<c.length;i+=1){let u=Ve(e,c,i),p=_(u);o.set(p,s[i]=Je(p,u))}let d=[e[10],{style:l=`${e[8]} ${e[10].style||""}`}],a={};for(let i=0;i<d.length;i+=1)a=ze(a,d[i]);return{c(){t=w("div"),n=w("div");for(let i=0;i<s.length;i+=1)s[i].c();A(n,"style",r=`${e[9]} ${e[6]}`),we(t,a)},m(i,u){J(i,t,u),T(t,n);for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(n,null);e[25](n),f=!0},p(i,u){u[0]&67109039&&(c=Ne(i[5]),Ht(),s=Zt(s,u,_,1,i,c,o,n,Wt,Je,null,Ve),Jt()),(!f||u[0]&64&&r!==(r=`${i[9]} ${i[6]}`))&&A(n,"style",r),we(t,a=Bt(d,[u[0]&1024&&i[10],(!f||u[0]&1024&&l!==(l=`${i[8]} ${i[10].style||""}`))&&{style:l}]))},i(i){if(!f){for(let u=0;u<c.length;u+=1)F(s[u]);f=!0}},o(i){for(let u=0;u<s.length;u+=1)G(s[u]);f=!1},d(i){i&&B(t);for(let u=0;u<s.length;u+=1)s[u].d();e[25](null)}}}function En(e,t,n){let s,o,r,l,f,c;const _=["data","getKey","overscan","itemSize","shift","horizontal","getScrollOffset","getScrollSize","getViewportSize","scrollToIndex","scrollTo","scrollBy"];let d=Re(t,_),{$$slots:a={},$$scope:i}=t,{data:u}=t,{getKey:p=Sn}=t,{overscan:g=4}=t,{itemSize:b=void 0}=t,{shift:h=!1}=t,{horizontal:S=!1}=t,I,y=[];const R=Gt(),O=pn(u.length,b,S,z=>{n(2,y=z)},z=>{R("scroll",z)},()=>{R("scrollEnd")});Ft(()=>{const z=I.parentElement;O[ht](z)}),et(()=>{O[pt]()});let m=u.length;Se(()=>{m!==u.length&&O[yt](m=u.length,h)},!0);let v;Se(()=>{v!==l&&(v=l,O[Tt]())});let E;Se(()=>{E&&E[0]===s[0]&&E[1]===s[1]||(E=s,R("rangeChange",[s[0],s[1]]))});const V=O[It],L=O[Lt],k=O[bt],K=O[Rt],Q=O[Ct],D=O[wt];let M;const N=fe({display:S?"inline-block":"block",[S?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%"}),C=fe({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden"});function q(z){Te[z?"unshift":"push"](()=>{I=z,n(4,I)})}return e.$$set=z=>{t=ze(ze({},t),Kt(z)),n(10,d=Re(t,_)),"data"in z&&n(11,u=z.data),"getKey"in z&&n(0,p=z.getKey),"overscan"in z&&n(12,g=z.overscan),"itemSize"in z&&n(13,b=z.itemSize),"shift"in z&&n(14,h=z.shift),"horizontal"in z&&n(1,S=z.horizontal),"$$scope"in z&&n(26,i=z.$$scope)},e.$$.update=()=>{if(e.$$.dirty[0]&4&&n(23,s=y&&O[St]()),e.$$.dirty[0]&4&&n(21,o=y&&O[vt]()),e.$$.dirty[0]&4&&n(22,r=y&&O[zt]()),e.$$.dirty[0]&4&&(l=y&&O[Ot]()),e.$$.dirty[0]&10491904&&n(3,f=an(s[0],s[1],g,o,u.length)),e.$$.dirty[0]&2056){const[z,At]=f,Ce=[];for(let he=z,Vt=At;he<=Vt;he++)Ce.push(u[he]);n(5,M=Ce)}e.$$.dirty[0]&6291458&&n(6,c=fe({width:S?r+"px":"100%",height:S?"100%":r+"px","pointer-events":o!==H?"none":"auto"}))},[p,S,y,f,I,M,c,O,N,C,d,u,g,b,h,V,L,k,K,Q,D,o,r,s,a,q,i]}class ne extends x{constructor(t){super(),ee(this,t,En,On,te,{data:11,getKey:0,overscan:12,itemSize:13,shift:14,horizontal:1,getScrollOffset:15,getScrollSize:16,getViewportSize:17,scrollToIndex:18,scrollTo:19,scrollBy:20},null,[-1,-1])}get getScrollOffset(){return this.$$.ctx[15]}get getScrollSize(){return this.$$.ctx[16]}get getViewportSize(){return this.$$.ctx[17]}get scrollToIndex(){return this.$$.ctx[18]}get scrollTo(){return this.$$.ctx[19]}get scrollBy(){return this.$$.ctx[20]}}ne.__docgen={keywords:[],data:[],name:"VList.svelte"};function Tn(e){let t,n=e[3].id+"",s,o;return{c(){t=w("div"),s=W(n),A(t,"style",o=`
      height: ${e[3].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&8&&n!==(n=r[3].id+"")&&$(s,n),l&8&&o!==(o=`
      height: ${r[3].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function yn(e){let t,n;return t=new ne({props:{data:e[0],style:"height: 100vh;",getKey:Ln,$$slots:{default:[Tn,({item:s})=>({3:s}),({item:s})=>s?8:0]},$$scope:{ctx:e}}}),{c(){_e(t.$$.fragment)},m(s,o){de(t,s,o),n=!0},p(s,[o]){const r={};o&24&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){G(t.$$.fragment,s),n=!1},d(s){me(t,s)}}}const Ln=e=>e.id;function Cn(e){const t=[20,40,180,77],n=o=>({id:o,size:t[o%4]+"px"});return[Array.from({length:1e3}).map((o,r)=>n(r))]}let Nt=class extends x{constructor(t){super(),ee(this,t,Cn,yn,te,{})}};Nt.__docgen={keywords:[],data:[],name:"Default.svelte"};function wn(e){let t,n=e[3].id+"",s,o;return{c(){t=w("div"),s=W(n),A(t,"style",o=`
      width: ${e[3].size};
      background: white;
      border-right: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&8&&n!==(n=r[3].id+"")&&$(s,n),l&8&&o!==(o=`
      width: ${r[3].size};
      background: white;
      border-right: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function Rn(e){let t,n,s;return n=new ne({props:{data:e[0],style:"width: 100%; height: 200px;",getKey:kn,horizontal:!0,$$slots:{default:[wn,({item:o})=>({3:o}),({item:o})=>o?8:0]},$$scope:{ctx:e}}}),{c(){t=w("div"),_e(n.$$.fragment),ce(t,"padding","10px")},m(o,r){J(o,t,r),de(n,t,null),s=!0},p(o,[r]){const l={};r&24&&(l.$$scope={dirty:r,ctx:o}),n.$set(l)},i(o){s||(F(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&B(t),me(n)}}}const kn=e=>e.id;function Nn(e){const t=[40,180,77],n=o=>({id:o,size:t[o%4]+"px"});return[Array.from({length:1e3}).map((o,r)=>n(r))]}let Dt=class extends x{constructor(t){super(),ee(this,t,Nn,Rn,te,{})}};Dt.__docgen={keywords:[],data:[],name:"Horizontal.svelte"};function Dn(e){let t,n=e[14].id+"",s,o;return{c(){t=w("div"),s=W(n),A(t,"style",o=`
      height: ${e[14].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&16384&&n!==(n=r[14].id+"")&&$(s,n),l&16384&&o!==(o=`
      height: ${r[14].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function Mn(e){let t,n,s,o,r,l,f,c,_,d,a,i,u,p,g,b,h,S,I,y,R,O={data:e[1],getKey:An,$$slots:{default:[Dn,({item:m})=>({14:m}),({item:m})=>m?16384:0]},$$scope:{ctx:e}};return S=new ne({props:O}),e[10](S),S.$on("scroll",e[11]),S.$on("scrollEnd",e[12]),{c(){t=w("div"),n=w("div"),s=W("offset: "),o=W(e[2]),r=X(),l=w("div"),f=W("scrolling: "),c=W(e[3]),_=X(),d=w("div"),a=w("input"),i=X(),u=w("button"),u.textContent="scrollToIndex",p=X(),g=w("div"),b=w("button"),b.textContent="append",h=X(),_e(S.$$.fragment),A(a,"type","number"),ce(t,"height","100%"),ce(t,"display","flex"),ce(t,"flex-direction","column")},m(m,v){J(m,t,v),T(t,n),T(n,s),T(n,o),T(t,r),T(t,l),T(l,f),T(l,c),T(t,_),T(t,d),T(d,a),ke(a,e[4]),T(d,i),T(d,u),T(t,p),T(t,g),T(g,b),T(t,h),de(S,t,null),I=!0,y||(R=[se(a,"input",e[6]),se(a,"input",e[7]),se(u,"click",e[8]),se(b,"click",e[9])],y=!0)},p(m,[v]){(!I||v&4)&&$(o,m[2]),(!I||v&8)&&$(c,m[3]),v&16&&tt(a.value)!==m[4]&&ke(a,m[4]);const E={};v&2&&(E.data=m[1]),v&49152&&(E.$$scope={dirty:v,ctx:m}),S.$set(E)},i(m){I||(F(S.$$.fragment,m),I=!0)},o(m){G(S.$$.fragment,m),I=!1},d(m){m&&B(t),e[10](null),me(S),y=!1,qe(R)}}}const An=e=>e.id;function Vn(e,t,n){const s=[20,40,180,77],o=h=>({id:h,size:s[h%4]+"px"});let r,l=Array.from({length:1e3}).map((h,S)=>o(S)),f=0,c=!1,_=567;function d(){_=tt(this.value),n(4,_)}const a=h=>{n(4,_=Number(h.target.value))},i=()=>{r.scrollToIndex(_)},u=()=>{n(1,l=[...l,...Array.from({length:100}).map((h,S)=>o(S+l.length))])};function p(h){Te[h?"unshift":"push"](()=>{r=h,n(0,r)})}return[r,l,f,c,_,o,d,a,i,u,p,h=>{n(2,f=h.detail),n(3,c=!0)},()=>{n(3,c=!1)}]}let Mt=class extends x{constructor(t){super(),ee(this,t,Vn,Mn,te,{})}};Mt.__docgen={keywords:[],data:[],name:"Controls.svelte"};const Fn={component:ne},re={render:()=>({Component:Nt})},le={render:()=>({Component:Dt})},ie={render:()=>({Component:Mt})};var Be,Ge,Fe;re.parameters={...re.parameters,docs:{...(Be=re.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => ({
    Component: DefaultComponent
  })
}`,...(Fe=(Ge=re.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source}}};var Ke,Pe,He;le.parameters={...le.parameters,docs:{...(Ke=le.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => ({
    Component: HorizontalComponent
  })
}`,...(He=(Pe=le.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var We,Ze,Ye;ie.parameters={...ie.parameters,docs:{...(We=ie.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => ({
    Component: ControlsComponent
  })
}`,...(Ye=(Ze=ie.parameters)==null?void 0:Ze.docs)==null?void 0:Ye.source}}};const Kn=["Default","Horizontal","Controls"];export{ie as Controls,re as Default,le as Horizontal,Kn as __namedExportsOrder,Fn as default};
