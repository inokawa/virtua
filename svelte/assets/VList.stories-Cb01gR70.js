import{r as qe,t as G,b as F,q as Vt,u as Ut,v as Xe,S as x,i as ee,s as te,w as je,x as C,y as A,a as J,z as Qe,A as $e,B as xe,d as B,f as Te,p as ze,C as we,D as T,c as Jt,l as Bt,E as Re,F as Gt,o as Ft,G as Kt,e as Pt,j as de,m as me,k as ge,g as Ht,H as X,I as W,J as $,K as ce,L as ke,M as se,N as et}from"./index-BrdG1Jee.js";function Ne(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Wt(e,t){G(e,1,1,()=>{t.delete(e.key)})}function Zt(e,t,n,s,o,r,l,f,c,d,m,_){let i=e.length,u=r.length,a=i;const E={};for(;a--;)E[e[a].key]=a;const z=[],h=new Map,p=new Map,b=[];for(a=u;a--;){const g=_(o,r,a),I=n(g);let O=l.get(I);O?b.push(()=>O.p(g,t)):(O=d(I,g),O.c()),h.set(I,z[a]=O),I in E&&p.set(I,Math.abs(a-E[I]))}const y=new Set,w=new Set;function v(g){F(g,1),g.m(f,m),l.set(g.key,g),m=g.first,u--}for(;i&&u;){const g=z[u-1],I=e[i-1],O=g.key,V=I.key;g===I?(m=g.first,i--,u--):h.has(V)?!l.has(O)||y.has(O)?v(g):w.has(V)?i--:p.get(O)>p.get(V)?(w.add(O),v(g)):(y.add(V),i--):(c(I,l),i--)}for(;i--;){const g=e[i];h.has(g.key)||c(g,l)}for(;u;)v(z[u-1]);return qe(b),z}const j=null,Z=Math.min,U=Math.max,De=Math.abs,be=setTimeout,tt=(e,t,n)=>Z(n,U(t,e)),Yt=e=>[...e].sort((t,n)=>t-n),qt=e=>{const t=Yt(e),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Xt=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},jt=(e,t)=>{let n;const s=()=>{n!=j&&clearTimeout(n)},o=()=>{s(),n=be(()=>{n=j,e()},t)};return o._cancel=s,o},ye=e=>{let t,n;return(...s)=>(t||(t=!0,n=e(...s)),n)},Y=-1,_e=(e,t,n)=>{const s=n?"unshift":"push";for(let o=0;o<t;o++)e[s](Y);return e},he=(e,t)=>{const n=e._sizes[t];return n===Y?e._defaultItemSize:n},Qt=(e,t,n)=>{const s=e._sizes[t]===Y;return e._sizes[t]=n,e._computedOffsetIndex=Z(t,e._computedOffsetIndex),s},Le=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,s=e._offsets[n];for(;n<t;)s+=he(e,n),e._offsets[++n]=s;return e._computedOffsetIndex=t,s},$t=e=>e._length?Le(e,e._length-1)+he(e,e._length-1):0,Me=(e,t,n)=>{for(;n>=0&&n<e._length;){const s=Le(e,n);if(s<=t){if(s+he(e,n)>t)break;n++}else n--}return tt(n,0,e._length-1)},xt=(e,t,n,s)=>{const o=Me(e,t,Z(n,e._length-1));return[o,Me(e,t+s,o)]},en=(e,t)=>{let n=0;const s=e._sizes.filter((r,l)=>{const f=r!==Y;return f&&l<t&&n++,f}),o=e._defaultItemSize;return e._computedOffsetIndex=-1,((e._defaultItemSize=qt(s))-o)*U(t-n,0)},tn=(e,t,n)=>({_defaultItemSize:t,_sizes:_e([],e),_length:e,_computedOffsetIndex:-1,_offsets:_e([],e)}),nn=e=>[[...e._sizes],e._defaultItemSize],Ae=(e,t,n)=>{const s=t-e._length;return e._computedOffsetIndex=n?-1:Z(t-1,e._computedOffsetIndex),e._length=t,s>0?(_e(e._offsets,s),_e(e._sizes,s,n),e._defaultItemSize*s):(e._offsets.splice(s),(n?e._sizes.splice(0,-s):e._sizes.splice(s)).reduce((o,r)=>o-(r===Y?e._defaultItemSize:r),0))},sn=typeof window<"u",nt=()=>document.documentElement,on=e=>e.ownerDocument,rn=e=>e.defaultView,st=ye(()=>sn?getComputedStyle(nt()).direction==="rtl":!1),ot=ye(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ln=ye(()=>"scrollBehavior"in nt().style),H=0,rt=1,lt=2,oe=0,cn=1,Se=2,Ie=1,it=2,ct=3,ut=4,ft=5,un=6,at=7,_t=8,P=1,ve=2,dt=4,mt=8,fn=e=>U(e._getTotalSize(),e._getViewportSize()),an=(e,t,n,s,o)=>(s!==rt&&(e-=U(0,n)),s!==lt&&(t+=U(0,n)),[U(e,0),Z(t,o-1)]),_n=(e,t=40,n=0,s,o=!1)=>{let r=!!n,l=[],f=0,c=0,d=0,m=0,_=0,i=0,u=0,a=H,E=oe,z=r?[0,U(n-1,0)]:j,h=[0,0],p=0;const b=tn(e,t),y=new Set,w=()=>d-c,v=L=>xt(b,L,h[0],f),g=()=>$t(b),I=L=>Le(b,L)-i,O=L=>he(b,L),V=L=>{L&&(ot()&&a!==H?i+=L:(_+=L,m++))};return{_getStateVersion(){return l},_getCacheSnapshot(){return nn(b)},_getRange(){return u?h:(h=v(U(0,w()+i+_)),z?[Z(h[0],z[0]),U(h[1],z[1])]:h)},_isUnmeasuredItem(L){return b._sizes[L]===Y},_isInitialMeasurementDone(){return!!f},_hasUnmeasuredItemsInFrozenRange(){return z?b._sizes.slice(U(0,z[0]-1),Z(b._length-1,z[1]+1)+1).includes(Y):!1},_getItemOffset:I,_getItemSize:O,_getItemsLength(){return b._length},_getScrollOffset(){return d},_getScrollDirection(){return a},_getViewportSize(){return f},_getStartSpacerSize(){return c},_getTotalSize:g,_getJumpCount(){return m},_flushJump(){return u=_,_=0,[u,E===Se||w()+f>=g()]},_subscribe(L,R){const K=[L,R];return y.add(K),()=>{y.delete(K)}},_update(L,R){let K,Q,D=0;switch(L){case Ie:{const M=u;u=0;const k=R-d,N=De(k);!(M&&N<De(M)+1)&&E===oe&&(a=k<0?lt:rt),r&&(z=j,r=!1),d=R,D=dt;const S=w();S>=-f&&S<=g()&&(D+=P,Q=N>f);break}case it:{D=mt,a!==H&&(K=!0,D+=P),a=H,E=oe,z=j;break}case ct:{const M=R.filter(([k,N])=>b._sizes[k]!==N);if(!M.length)break;V(M.reduce((k,[N,q])=>((E===Se||(z?N<z[0]:I(N)+(a===H&&E===oe?O(N):0)<w()))&&(k+=q-O(N)),k),0));for(const[k,N]of M){const q=O(k),S=Qt(b,k,N);o&&(p+=N,S||(p-=q))}o&&f&&p>f&&(V(en(b,h[0])),o=!1),D=P+ve,Q=!0;break}case ut:{f!==R&&(f=R,D=P+ve);break}case ft:{R[1]?(V(Ae(b,R[0],!0)),E=Se,D=P):Ae(b,R[0]);break}case un:{c=R;break}case at:{E=cn;break}case _t:{z=v(R),D=P;break}}D&&(l=[],K&&i&&(_+=i,i=0,m++),y.forEach(([M,k])=>{D&M&&k(Q)}))}}},dn=e=>{let t;return{_observe(n){(t||(t=new(rn(on(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},mn=(e,t)=>{let n;const s=t?"width":"height",o=new WeakMap,r=dn(l=>{const f=[];for(const{target:c,contentRect:d}of l)if(c.offsetParent)if(c===n)e._update(ut,d[s]);else{const m=o.get(c);m!=j&&f.push([m,d[s]])}f.length&&e._update(ct,f)});return{_observeRoot(l){r._observe(n=l)},_observeItem:(l,f)=>(o.set(l,f),r._observe(l),()=>{o.delete(l),r._unobserve(l)}),_dispose:r._dispose}},ue=(e,t)=>t&&st()?-e:e,gn=(e,t,n,s,o,r)=>{const l=Date.now;let f=0,c=!1,d=!1,m=!1,_=!1;const i=jt(()=>{if(c||d){c=!1,i();return}m=!1,e._update(it)},150),u=()=>{f=l(),m&&(_=!0),e._update(Ie,s()),i()},a=h=>{if(c||e._getScrollDirection()===H||h.ctrlKey)return;const p=l()-f;150>p&&50<p&&(n?h.deltaX:h.deltaY)&&(c=!0)},E=()=>{d=!0,m=_=!1},z=()=>{d=!1,ot()&&(m=!0)};return t.addEventListener("scroll",u),t.addEventListener("wheel",a,{passive:!0}),t.addEventListener("touchstart",E,{passive:!0}),t.addEventListener("touchend",z,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",u),t.removeEventListener("wheel",a),t.removeEventListener("touchstart",E),t.removeEventListener("touchend",z),i._cancel()},_fixScrollJump:()=>{const[h,p]=e._flushJump();h&&(o(ue(h,n),p,_),_=!1,p&&e._getViewportSize()>e._getTotalSize()&&e._update(Ie,s()))}}},hn=(e,t)=>{let n,s,o;const r=t?"scrollLeft":"scrollTop",l=t?"overflowX":"overflowY",f=async(c,d)=>{if(!n){Xt(()=>f(c,d));return}o&&o();const m=()=>{let _;return[new Promise((i,u)=>{_=i,o=u,e._isInitialMeasurementDone()&&be(u,150)}),e._subscribe(ve,()=>{_&&_()})]};if(d&&ln()){for(;e._update(_t,c()),!!e._hasUnmeasuredItemsInFrozenRange();){const[_,i]=m();try{await _}catch{return}finally{i()}}n.scrollTo({[t?"left":"top"]:ue(c(),t),behavior:"smooth"})}else for(;;){const[_,i]=m();try{n[r]=ue(c(),t),e._update(at),await _}catch{return}finally{i()}}};return{_observe(c){n=c,s=gn(e,c,t,()=>ue(c[r],t),(d,m,_)=>{if(_){const i=c.style,u=i[l];i[l]="hidden",be(()=>{i[l]=u})}m?(c[r]=e._getScrollOffset()+d,o&&o()):c[r]+=d})},_dispose(){s&&s._dispose()},_scrollTo(c){f(()=>c)},_scrollBy(c){c+=e._getScrollOffset(),f(()=>c)},_scrollToIndex(c,{align:d,smooth:m,offset:_=0}={}){if(c=tt(c,0,e._getItemsLength()-1),d==="nearest"){const i=e._getItemOffset(c),u=e._getScrollOffset();if(i<u)d="start";else if(i+e._getItemSize(c)>u+e._getViewportSize())d="end";else return}f(()=>_+e._getStartSpacerSize()+e._getItemOffset(c)+(d==="end"?e._getItemSize(c)-e._getViewportSize():d==="center"?(e._getItemSize(c)-e._getViewportSize())/2:0),m)},_fixScrollJump:()=>{s&&s._fixScrollJump()}}},gt=0,ht=1,pt=2,St=3,zt=4,bt=5,It=6,vt=7,Oe=8,Ee=9,Ot=10,Et=11,Tt=12,yt=13,Lt=14,Ct=15,wt=16,pn=(e,t,n,s,o,r)=>{const l=_n(e,t??40,void 0,void 0,!t),f=mn(l,n),c=hn(l,n),d=l._subscribe(P,()=>{s(l._getStateVersion())}),m=l._subscribe(dt,()=>{o(l._getScrollOffset())}),_=l._subscribe(mt,()=>{r()});return{[gt]:i=>{f._observeRoot(i),c._observe(i)},[ht]:()=>{d(),m(),_(),f._dispose(),c._dispose()},[pt]:l._getRange,[St]:l._getTotalSize,[zt]:l._getViewportSize,[bt]:l._getScrollOffset,[It]:l._getScrollDirection,[vt]:l._getJumpCount,[Oe]:l._getItemOffset,[Ee]:l._isUnmeasuredItem,[Ot]:f._observeItem,[Et]:c._fixScrollJump,[Tt]:(i,u)=>{l._update(ft,[i,u])},[yt]:()=>fn(l),[Lt]:c._scrollTo,[Ct]:c._scrollBy,[wt]:c._scrollToIndex}},fe=(e,t)=>{let n;(t?Vt:Ut)(()=>{n&&n(),n=e()}),Xe(()=>{n&&n()})},ae=e=>Object.keys(e).reduce((t,n)=>t+`${n}:${e[n]};`,""),Sn=(e,t)=>"_"+t;function zn(e){let t,n;const s=e[8].default,o=je(s,e,e[7],null);return{c(){t=C("div"),o&&o.c(),A(t,"style",e[1])},m(r,l){J(r,t,l),o&&o.m(t,null),e[9](t),n=!0},p(r,[l]){o&&o.p&&(!n||l&128)&&Qe(o,s,r,r[7],n?xe(s,r[7],l,null):$e(r[7]),null),(!n||l&2)&&A(t,"style",r[1])},i(r){n||(F(o,r),n=!0)},o(r){G(o,r),n=!1},d(r){r&&B(t),o&&o.d(r),e[9](null)}}}function bn(e,t,n){let{$$slots:s={},$$scope:o}=t,{index:r}=t,{offset:l}=t,{hide:f}=t,{horizontal:c}=t,{resizer:d}=t,m,_;fe(()=>{if(_!==r)return d(m,_=r)});let i;function u(a){Te[a?"unshift":"push"](()=>{m=a,n(0,m)})}return e.$$set=a=>{"index"in a&&n(2,r=a.index),"offset"in a&&n(3,l=a.offset),"hide"in a&&n(4,f=a.hide),"horizontal"in a&&n(5,c=a.horizontal),"resizer"in a&&n(6,d=a.resizer),"$$scope"in a&&n(7,o=a.$$scope)},e.$$.update=()=>{if(e.$$.dirty&56){const a={margin:"0px",padding:"0px",position:"absolute",[c?"height":"width"]:"100%",[c?"top":"left"]:"0px",[c?st()?"right":"left":"top"]:l+"px",visibility:f?"hidden":"visible"};c&&(a.display="flex"),n(1,i=ae(a))}},[m,i,r,l,f,c,d,o,s,u]}class Rt extends x{constructor(t){super(),ee(this,t,bn,zn,te,{index:2,offset:3,hide:4,horizontal:5,resizer:6})}}Rt.__docgen={keywords:[],data:[],name:"ListItem.svelte"};function Ve(e,t,n){const s=e.slice();return s[32]=t[n],s[34]=n,s}const In=e=>({item:e[0]&32}),Ue=e=>({item:e[32]});function vn(e){let t,n;const s=e[24].default,o=je(s,e,e[26],Ue);return{c(){o&&o.c(),t=X()},m(r,l){o&&o.m(r,l),J(r,t,l),n=!0},p(r,l){o&&o.p&&(!n||l[0]&67108896)&&Qe(o,s,r,r[26],n?xe(s,r[26],l,In):$e(r[26]),Ue)},i(r){n||(F(o,r),n=!0)},o(r){G(o,r),n=!1},d(r){r&&B(t),o&&o.d(r)}}}function Je(e,t){let n,s,o;return s=new Rt({props:{index:t[34]+t[3][0],offset:t[2]&&t[7][Oe](t[34]+t[3][0]),hide:t[2]&&t[7][Ee](t[34]+t[3][0]),horizontal:t[1],resizer:t[7][Ot],$$slots:{default:[vn]},$$scope:{ctx:t}}}),{key:e,first:null,c(){n=Pt(),de(s.$$.fragment),this.first=n},m(r,l){J(r,n,l),me(s,r,l),o=!0},p(r,l){t=r;const f={};l[0]&40&&(f.index=t[34]+t[3][0]),l[0]&44&&(f.offset=t[2]&&t[7][Oe](t[34]+t[3][0])),l[0]&44&&(f.hide=t[2]&&t[7][Ee](t[34]+t[3][0])),l[0]&2&&(f.horizontal=t[1]),l[0]&67108896&&(f.$$scope={dirty:l,ctx:t}),s.$set(f)},i(r){o||(F(s.$$.fragment,r),o=!0)},o(r){G(s.$$.fragment,r),o=!1},d(r){r&&B(n),ge(s,r)}}}function On(e){let t,n,s=[],o=new Map,r,l,f,c=Ne(e[5]);const d=i=>i[0](i[32],i[34]+i[3][0]);for(let i=0;i<c.length;i+=1){let u=Ve(e,c,i),a=d(u);o.set(a,s[i]=Je(a,u))}let m=[e[10],{style:l=`${e[8]} ${e[10].style||""}`}],_={};for(let i=0;i<m.length;i+=1)_=ze(_,m[i]);return{c(){t=C("div"),n=C("div");for(let i=0;i<s.length;i+=1)s[i].c();A(n,"style",r=`${e[9]} ${e[6]}`),we(t,_)},m(i,u){J(i,t,u),T(t,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(n,null);e[25](n),f=!0},p(i,u){u[0]&67109039&&(c=Ne(i[5]),Ht(),s=Zt(s,u,d,1,i,c,o,n,Wt,Je,null,Ve),Jt()),(!f||u[0]&64&&r!==(r=`${i[9]} ${i[6]}`))&&A(n,"style",r),we(t,_=Bt(m,[u[0]&1024&&i[10],(!f||u[0]&1024&&l!==(l=`${i[8]} ${i[10].style||""}`))&&{style:l}]))},i(i){if(!f){for(let u=0;u<c.length;u+=1)F(s[u]);f=!0}},o(i){for(let u=0;u<s.length;u+=1)G(s[u]);f=!1},d(i){i&&B(t);for(let u=0;u<s.length;u+=1)s[u].d();e[25](null)}}}function En(e,t,n){let s,o,r,l,f,c;const d=["data","getKey","overscan","itemSize","shift","horizontal","getScrollOffset","getScrollSize","getViewportSize","scrollToIndex","scrollTo","scrollBy"];let m=Re(t,d),{$$slots:_={},$$scope:i}=t,{data:u}=t,{getKey:a=Sn}=t,{overscan:E=4}=t,{itemSize:z=void 0}=t,{shift:h=!1}=t,{horizontal:p=!1}=t,b,y=[];const w=Gt(),v=pn(u.length,z,p,S=>{n(2,y=S)},S=>{w("scroll",S)},()=>{w("scrollEnd")});Ft(()=>{const S=b.parentElement;v[gt](S)}),Xe(()=>{v[ht]()});let g=u.length;fe(()=>{g!==u.length&&v[Tt](g=u.length,h)},!0);let I;fe(()=>{I!==l&&(I=l,v[Et]())});let O;fe(()=>{O&&O[0]===s[0]&&O[1]===s[1]||(O=s,w("rangeChange",[s[0],s[1]]))});const V=v[bt],L=v[yt],R=v[zt],K=v[wt],Q=v[Lt],D=v[Ct];let M;const k=ae({display:p?"inline-block":"block",[p?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%"}),N=ae({"overflow-anchor":"none",flex:"none",position:"relative",visibility:"hidden"});function q(S){Te[S?"unshift":"push"](()=>{b=S,n(4,b)})}return e.$$set=S=>{t=ze(ze({},t),Kt(S)),n(10,m=Re(t,d)),"data"in S&&n(11,u=S.data),"getKey"in S&&n(0,a=S.getKey),"overscan"in S&&n(12,E=S.overscan),"itemSize"in S&&n(13,z=S.itemSize),"shift"in S&&n(14,h=S.shift),"horizontal"in S&&n(1,p=S.horizontal),"$$scope"in S&&n(26,i=S.$$scope)},e.$$.update=()=>{if(e.$$.dirty[0]&4&&n(23,s=y&&v[pt]()),e.$$.dirty[0]&4&&n(21,o=y&&v[It]()),e.$$.dirty[0]&4&&n(22,r=y&&v[St]()),e.$$.dirty[0]&4&&(l=y&&v[vt]()),e.$$.dirty[0]&10491904&&n(3,f=an(s[0],s[1],E,o,u.length)),e.$$.dirty[0]&2056){const[S,Mt]=f,Ce=[];for(let pe=S,At=Mt;pe<=At;pe++)Ce.push(u[pe]);n(5,M=Ce)}e.$$.dirty[0]&6291458&&n(6,c=ae({width:p?r+"px":"100%",height:p?"100%":r+"px","pointer-events":o!==H?"none":"auto"}))},[a,p,y,f,b,M,c,v,k,N,m,u,E,z,h,V,L,R,K,Q,D,o,r,s,_,q,i]}class ne extends x{constructor(t){super(),ee(this,t,En,On,te,{data:11,getKey:0,overscan:12,itemSize:13,shift:14,horizontal:1,getScrollOffset:15,getScrollSize:16,getViewportSize:17,scrollToIndex:18,scrollTo:19,scrollBy:20},null,[-1,-1])}get getScrollOffset(){return this.$$.ctx[15]}get getScrollSize(){return this.$$.ctx[16]}get getViewportSize(){return this.$$.ctx[17]}get scrollToIndex(){return this.$$.ctx[18]}get scrollTo(){return this.$$.ctx[19]}get scrollBy(){return this.$$.ctx[20]}}ne.__docgen={keywords:[],data:[],name:"VList.svelte"};function Tn(e){let t,n=e[3].id+"",s,o;return{c(){t=C("div"),s=W(n),A(t,"style",o=`
      height: ${e[3].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&8&&n!==(n=r[3].id+"")&&$(s,n),l&8&&o!==(o=`
      height: ${r[3].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function yn(e){let t,n;return t=new ne({props:{data:e[0],style:"height: 100vh;",getKey:Ln,$$slots:{default:[Tn,({item:s})=>({3:s}),({item:s})=>s?8:0]},$$scope:{ctx:e}}}),{c(){de(t.$$.fragment)},m(s,o){me(t,s,o),n=!0},p(s,[o]){const r={};o&24&&(r.$$scope={dirty:o,ctx:s}),t.$set(r)},i(s){n||(F(t.$$.fragment,s),n=!0)},o(s){G(t.$$.fragment,s),n=!1},d(s){ge(t,s)}}}const Ln=e=>e.id;function Cn(e){const t=[20,40,180,77],n=o=>({id:o,size:t[o%4]+"px"});return[Array.from({length:1e3}).map((o,r)=>n(r))]}let kt=class extends x{constructor(t){super(),ee(this,t,Cn,yn,te,{})}};kt.__docgen={keywords:[],data:[],name:"Default.svelte"};function wn(e){let t,n=e[3].id+"",s,o;return{c(){t=C("div"),s=W(n),A(t,"style",o=`
      width: ${e[3].size};
      background: white;
      border-right: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&8&&n!==(n=r[3].id+"")&&$(s,n),l&8&&o!==(o=`
      width: ${r[3].size};
      background: white;
      border-right: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function Rn(e){let t,n,s;return n=new ne({props:{data:e[0],style:"width: 100%; height: 200px;",getKey:kn,horizontal:!0,$$slots:{default:[wn,({item:o})=>({3:o}),({item:o})=>o?8:0]},$$scope:{ctx:e}}}),{c(){t=C("div"),de(n.$$.fragment),ce(t,"padding","10px")},m(o,r){J(o,t,r),me(n,t,null),s=!0},p(o,[r]){const l={};r&24&&(l.$$scope={dirty:r,ctx:o}),n.$set(l)},i(o){s||(F(n.$$.fragment,o),s=!0)},o(o){G(n.$$.fragment,o),s=!1},d(o){o&&B(t),ge(n)}}}const kn=e=>e.id;function Nn(e){const t=[40,180,77],n=o=>({id:o,size:t[o%4]+"px"});return[Array.from({length:1e3}).map((o,r)=>n(r))]}let Nt=class extends x{constructor(t){super(),ee(this,t,Nn,Rn,te,{})}};Nt.__docgen={keywords:[],data:[],name:"Horizontal.svelte"};function Dn(e){let t,n=e[14].id+"",s,o;return{c(){t=C("div"),s=W(n),A(t,"style",o=`
      height: ${e[14].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)},m(r,l){J(r,t,l),T(t,s)},p(r,l){l&16384&&n!==(n=r[14].id+"")&&$(s,n),l&16384&&o!==(o=`
      height: ${r[14].size};
      background: white;
      border-bottom: solid 1px #ccc;
    `)&&A(t,"style",o)},d(r){r&&B(t)}}}function Mn(e){let t,n,s,o,r,l,f,c,d,m,_,i,u,a,E,z,h,p,b,y,w,v={data:e[1],getKey:An,$$slots:{default:[Dn,({item:g})=>({14:g}),({item:g})=>g?16384:0]},$$scope:{ctx:e}};return p=new ne({props:v}),e[10](p),p.$on("scroll",e[11]),p.$on("scrollEnd",e[12]),{c(){t=C("div"),n=C("div"),s=W("offset: "),o=W(e[2]),r=X(),l=C("div"),f=W("scrolling: "),c=W(e[3]),d=X(),m=C("div"),_=C("input"),i=X(),u=C("button"),u.textContent="scrollToIndex",a=X(),E=C("div"),z=C("button"),z.textContent="append",h=X(),de(p.$$.fragment),A(_,"type","number"),ce(t,"height","100%"),ce(t,"display","flex"),ce(t,"flex-direction","column")},m(g,I){J(g,t,I),T(t,n),T(n,s),T(n,o),T(t,r),T(t,l),T(l,f),T(l,c),T(t,d),T(t,m),T(m,_),ke(_,e[4]),T(m,i),T(m,u),T(t,a),T(t,E),T(E,z),T(t,h),me(p,t,null),b=!0,y||(w=[se(_,"input",e[6]),se(_,"input",e[7]),se(u,"click",e[8]),se(z,"click",e[9])],y=!0)},p(g,[I]){(!b||I&4)&&$(o,g[2]),(!b||I&8)&&$(c,g[3]),I&16&&et(_.value)!==g[4]&&ke(_,g[4]);const O={};I&2&&(O.data=g[1]),I&49152&&(O.$$scope={dirty:I,ctx:g}),p.$set(O)},i(g){b||(F(p.$$.fragment,g),b=!0)},o(g){G(p.$$.fragment,g),b=!1},d(g){g&&B(t),e[10](null),ge(p),y=!1,qe(w)}}}const An=e=>e.id;function Vn(e,t,n){const s=[20,40,180,77],o=h=>({id:h,size:s[h%4]+"px"});let r,l=Array.from({length:1e3}).map((h,p)=>o(p)),f=0,c=!1,d=567;function m(){d=et(this.value),n(4,d)}const _=h=>{n(4,d=Number(h.target.value))},i=()=>{r.scrollToIndex(d)},u=()=>{n(1,l=[...l,...Array.from({length:100}).map((h,p)=>o(p+l.length))])};function a(h){Te[h?"unshift":"push"](()=>{r=h,n(0,r)})}return[r,l,f,c,d,o,m,_,i,u,a,h=>{n(2,f=h.detail),n(3,c=!0)},()=>{n(3,c=!1)}]}let Dt=class extends x{constructor(t){super(),ee(this,t,Vn,Mn,te,{})}};Dt.__docgen={keywords:[],data:[],name:"Controls.svelte"};const Fn={component:ne},re={render:()=>({Component:kt})},le={render:()=>({Component:Nt})},ie={render:()=>({Component:Dt})};var Be,Ge,Fe;re.parameters={...re.parameters,docs:{...(Be=re.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
