import{a as I}from"./jsx-runtime-CWvgoIdH.js";import{r as b}from"./index-D3g0PtM7.js";import{r as we}from"./index-4KpVZEbj.js";const O=Math.min,D=Math.max,oe=Math.abs,Re=Array.isArray,ee=setTimeout,ne=(e,t,n)=>O(n,D(t,e)),Q=e=>e!=null,ae=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},re=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},q=-1,K=(e,t,n)=>{const r=n?"unshift":"push";for(let s=0;s<t;s++)e[r](q);return e},H=(e,t)=>{const n=e.t[t];return n===q?e.o:n},be=(e,t,n)=>{const r=e.t[t]===q;return e.t[t]=n,e.i=O(t,e.i),r},te=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let n=e.i,r=e.u[n];for(;n<t;)r+=H(e,n),e.u[++n]=r;return e.i=t,r},se=(e,t,n)=>{let r=te(e,n);for(;n>=0&&n<e.l;)if(r<=t){const s=H(e,n);if(r+s>t)break;r+=s,n++}else r-=H(e,--n);return ne(n,0,e.l-1)},ie=(e,t,n,r)=>{const s=se(e,t,O(n,e.l-1));return[s,se(e,t+r,s)]},le=(e,t,n)=>{const r=t-e.l;let s;return r>0?(s=e.o*r,K(e.t,r,n),K(e.u,r)):(s=-(n?e.t.splice(0,-r):e.t.splice(r)).reduce((l,c)=>l+(c===q?e.o:c),0),e.u.splice(r)),e.i=n?-1:O(t-1,e.i),e.l=t,s},fe=typeof window<"u",de=()=>document.documentElement,Ee=e=>e.ownerDocument,ke=e=>e.defaultView,he=re(()=>!!fe&&getComputedStyle(de()).direction==="rtl"),me=re(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),Le=re(()=>"scrollBehavior"in de().style),xe=e=>D(e.h(),e._()),Me=(e,t,n)=>(n!==1&&(e-=D(0,t)),D(e,0)),Se=(e,t,n,r)=>(n!==2&&(e+=D(0,t)),O(e,r-1)),Ce=(e,t=40,n=0,r,s=!1,l=0,c=0)=>{let f=!!n,o=[],i=0,u=0,h=0,d=0,R=0,T=!1,M=0,m=0,E=0,p=f?[0,D(n-1,0)]:null,B=[0,0],W=0;const y=r||((a,k)=>({o:k,l:a,i:-1,t:K([],a),u:K([],a)}))(e,t),J=new Set,g=()=>(a=>a.l?te(a,a.l-1)+H(a,a.l-1):0)(y),N=()=>g()+l+c,z=()=>D(0,N()-i),P=a=>te(y,a)-R,Y=a=>{a&&(me()&&m!==0?R+=a:(d+=a,h++))};return{p:()=>o,v:()=>JSON.parse(JSON.stringify(y)),m:()=>p?[O(B[0],p[0]),D(B[1],p[1])]:M?B:B=ie(y,u-l+R+d,B[0],i),S:a=>y.t[a]===q,I:()=>!!p&&y.t.slice(D(0,p[0]-1),O(y.l-1,p[1]+1)+1).includes(q),R:P,k:a=>H(y,a),C:()=>y.l,M:()=>u,T:()=>m,_:()=>i,H:()=>l,h:g,J:()=>h,O(){const a=d,k=T;return d=0,T=!1,i>N()?[0,!1]:[M=a,k]},W(a,k){const V=[a,k];return J.add(V),()=>{J.delete(V)}},B(a,k){let V,U,S=0;switch(a){case 1:{const C=k.filter(([w,x])=>y.t[w]!==x);if(!C.length)break;let v=!1,L=!1;E===2?u>z()-1.5&&(L=!0):v=!0,Y(C.reduce((w,[x,A])=>{if(!v||P(x)<u){const X=A-H(y,x);(!L||X>0)&&(w+=X)}return w},0));for(const[w,x]of C){const A=H(y,w),X=be(y,w,x);s&&(W+=x,X||(W-=A))}s&&i&&W>i&&(Y(((w,x)=>{let A=0;const X=w.t.filter(($,j)=>{const F=$!==q;return F&&j<x&&A++,F}),ve=w.o;return w.i=-1,((w.o=($=>{const j=[...$].sort((ye,ge)=>ye-ge),F=$.length/2|0;return j.length%2==0?(j[F-1]+j[F])/2:j[F]})(X))-ve)*D(x-A,0)})(y,B[0])),s=!1),S=2,U=!0;break}case 2:i!==k&&(i=k,S=2);break;case 3:k[1]?(Y(le(y,k[0],!0)),E=2,T=!0,S=1):le(y,k[0]);break;case 4:{const C=ne(k,0,z()),v=M;if(M=0,C===u)break;const L=C-u,w=oe(L);v&&w<oe(v)+1||E!==0||(m=L<0?2:1),f&&(p=null,f=!1),U=w>i,u=C,S=5;break}case 5:S=8,m!==0&&(V=!0,S+=1),m=0,E=0,p=null;break;case 6:E=1;break;case 7:p=ie(y,k,B[0],i),S=1}S&&(o=[],V&&R&&(d+=R,R=0,h++),J.forEach(([C,v])=>{S&C&&v(U)}))}}},Z=fe?b.useLayoutEffect:b.useEffect,G=(e,t)=>t&&he()?-e:e,_e=(e,t,n,r,s)=>{const l=Date.now;let c=0,f=!1,o=!1,i=!1,u=!1;const h=(()=>{let m;const E=()=>{Q(m)&&clearTimeout(m)},p=()=>{E(),m=ee(()=>{m=null,(()=>{if(f||o)return f=!1,void h();i=!1,e.B(5)})()},150)};return p.$=E,p})(),d=()=>{c=l(),i&&(u=!0),e.B(4,r()),h()},R=m=>{if(f||e.T()===0||m.ctrlKey)return;const E=l()-c;150>E&&50<E&&(n?m.deltaX:m.deltaY)&&(f=!0)},T=()=>{o=!0,i=u=!1},M=()=>{o=!1,me()&&(i=!0)};return t.addEventListener("scroll",d),t.addEventListener("wheel",R,{passive:!0}),t.addEventListener("touchstart",T,{passive:!0}),t.addEventListener("touchend",M,{passive:!0}),{A:()=>{t.removeEventListener("scroll",d),t.removeEventListener("wheel",R),t.removeEventListener("touchstart",T),t.removeEventListener("touchend",M),h.$()},D:()=>{const[m,E]=e.O();m&&(s(G(m,n),E,u),u=!1)}}},Ae=(e,t)=>{let n,r,s;const l=t?"scrollLeft":"scrollTop",c=t?"overflowX":"overflowY",f=async(o,i)=>{if(!n)return void ae(()=>f(o,i));s&&s();const u=()=>{let h;return[new Promise((d,R)=>{h=d,ee(s=R,150)}),e.W(2,()=>{h&&h()})]};if(i&&Le()){for(;e.B(7,o()),e.I();){const[h,d]=u();try{await h}catch{return}finally{d()}}n.scrollTo({[t?"left":"top"]:G(o(),t),behavior:"smooth"})}else for(;;){const[h,d]=u();try{n[l]=G(o(),t),e.B(6),await h}catch{return}finally{d()}}};return{L(o){n=o,r=_e(e,o,t,()=>G(o[l],t),(i,u,h)=>{if(h){const d=o.style,R=d[c];d[c]="hidden",ee(()=>{d[c]=R})}u?(o[l]=e.M()+i,s&&s()):o[l]+=i})},A(){r&&r.A()},P(o){f(()=>o)},V(o){o+=e.M(),f(()=>o)},X(o,{align:i,smooth:u}={}){if(o=ne(o,0,e.C()-1),i==="nearest"){const h=e.R(o),d=e.M();if(h<d)i="start";else{if(!(h+e.k(o)>d+e._()))return;i="end"}}f(()=>e.H()+(i==="end"?e.R(o)+e.k(o)-e._():i==="center"?e.R(o)+(e.k(o)-e._())/2:e.R(o)),u)},D:()=>{r&&r.D()}}},_="current",pe=(e,t)=>{if(Re(e))for(const n of e)pe(n,t);else Q(e)&&typeof e!="boolean"&&t.push(e)},Te=(e,t)=>{const n=e.key;return Q(n)?n:"_"+t},Be=e=>{const t=b.useRef();return t[_]||(t[_]=e())},ce=e=>{const t=b.useRef(e);return Z(()=>{t[_]=e},[e]),t},De=e=>{let t;return{L(n){(t||(t=new(ke(Ee(n))).ResizeObserver(e))).observe(n)},Y(n){t.unobserve(n)},A(){t&&t.disconnect()}}},ze=(e,t)=>{let n;const r=t?"width":"height",s=new WeakMap,l=De(c=>{const f=[];for(const{target:o,contentRect:i}of c)if(o.offsetParent)if(o===n)e.B(2,i[r]);else{const u=s.get(o);Q(u)&&f.push([u,i[r]])}f.length&&e.B(1,f)});return{j(c){l.L(n=c)},q:(c,f)=>(s.set(c,f),l.L(c),()=>{s.delete(c),l.Y(c)}),A:l.A}},Ve=b.memo(({N:e,U:t,F:n,G:r,K:s,Z:l,ee:c,te:f})=>{const o=b.useRef(null);Z(()=>t(o[_],n),[n]);const i=b.useMemo(()=>{const u={margin:0,padding:0,position:s&&f?void 0:"absolute",[c?"height":"width"]:"100%",[c?"top":"left"]:0,[c?he()?"right":"left":"top"]:r,visibility:!s||f?"visible":"hidden"};return c&&(u.display="flex"),u},[r,s,f]);return I(l,typeof l=="string"?{ref:o,style:i,children:e}:{ref:o,style:i,index:n,children:e})}),Ie=e=>b.useReducer(e.p,void 0,e.p)[1],He=(e,t)=>b.useMemo(()=>{if(typeof e=="function")return[e,t||0];const n=(r=>{const s=[];return pe(r,s),s})(e);return[r=>n[r],n.length]},[e,t]),qe=b.forwardRef(({children:e,count:t,overscan:n=4,itemSize:r,shift:s,horizontal:l,cache:c,startMargin:f,endMargin:o,ssrCount:i,as:u="div",item:h="div",scrollRef:d,onScroll:R,onScrollEnd:T,onRangeChange:M},m)=>{const[E,p]=He(e,t),B=b.useRef(null),W=b.useRef(!!i),y=ce(R),J=ce(T),[g,N,z,P]=Be(()=>{const v=!!l,L=Ce(p,r,i,c,!r,f,o);return[L,ze(L,v),Ae(L,v),v]});p!==g.C()&&g.B(3,[p,s]);const Y=Ie(g),[a,k]=g.m(),V=g.T(),U=g.J(),S=g.h(),C=[];Z(()=>{W[_]=!1;const v=g.W(3,A=>{A?we.flushSync(Y):Y()}),L=g.W(4,()=>{y[_]&&y[_](g.M())}),w=g.W(8,()=>{J[_]&&J[_]()}),x=A=>{N.j(A),z.L(A)};return d?ae(()=>x(d[_])):x(B[_].parentElement),()=>{v(),L(),w(),N.A(),z.A()}},[]),Z(()=>{z.D()},[U]),b.useEffect(()=>{M&&M(a,k)},[a,k]),b.useImperativeHandle(m,()=>({get cache(){return g.v()},get scrollOffset(){return g.M()},get scrollSize(){return xe(g)},get viewportSize(){return g._()},scrollToIndex:z.X,scrollTo:z.P,scrollBy:z.V}),[]);for(let v=Me(a,n,V),L=Se(k,n,V,p);v<=L;v++){const w=E(v);C.push(I(Ve,{U:N.q,F:v,G:g.R(v),K:g.S(v),Z:h,N:w,ee:P,te:W[_]},Te(w,v)))}return I(u,{ref:B,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:P?S:"100%",height:P?"100%":S,pointerEvents:V!==0?"none":"auto"},children:C})}),Oe=b.forwardRef(({children:e,count:t,overscan:n,itemSize:r,shift:s,horizontal:l,reverse:c,cache:f,ssrCount:o,item:i,onScroll:u,onScrollEnd:h,onRangeChange:d,style:R,...T},M)=>{const m=b.useRef(null),E=c&&!l;let p=I(qe,{ref:M,scrollRef:E?m:void 0,count:t,overscan:n,itemSize:r,shift:s,horizontal:l,cache:f,ssrCount:o,item:i,onScroll:u,onScrollEnd:h,onRangeChange:d,children:e});return E&&(p=I("div",{style:{visibility:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"100%"},children:p})),I("div",{ref:m,...T,style:{display:l?"inline-block":"block",[l?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...R},children:p})}),ue=b.memo(({count:e,Component:t,handle:n})=>{const r=b.useRef(null);return b.useImperativeHandle(n,()=>({scrollToIndex:s=>{var l;(l=r.current)==null||l.scrollToIndex(s)}})),I(Oe,{ref:r,children:Array.from({length:e}).map((s,l)=>I(t,{index:l},l))})});try{ue.displayName="VirtuaList",ue.__docgenInfo={description:"",displayName:"VirtuaList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}},handle:{defaultValue:null,description:"",name:"handle",required:!1,type:{name:"Ref<ListHandle>"}}}}}catch{}export{ue as V};