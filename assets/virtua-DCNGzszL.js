import{j as q}from"./index-CKMfL3Jx.js";import{r as k,a as me}from"./entry-preview-D8_MYwTg.js";const P=Math.min,D=Math.max,ne=Math.abs,pe=Array.isArray,Q=setTimeout,ie=(e,t,n)=>P(n,D(t,e)),Z=e=>e!=null,le=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},te=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},V=-1,U=(e,t,n)=>{const r=n?"unshift":"push";for(let s=0;s<t;s++)e[r](V);return e},F=(e,t)=>{const n=e.t[t];return n===V?e.o:n},ve=(e,t,n)=>{const r=e.t[t]===V;return e.t[t]=n,e.i=P(t,e.i),r},ee=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let n=e.i,r=e.u[n];for(;n<t;)r+=F(e,n),e.u[++n]=r;return e.i=t,r},re=(e,t,n)=>{for(;n>=0&&n<e.l;){const r=ee(e,n);if(r<=t){if(r+F(e,n)>t)break;n++}else n--}return ie(n,0,e.l-1)},oe=(e,t,n)=>{const r=t-e.l;return e.i=n?-1:P(t-1,e.i),e.l=t,r>0?(U(e.u,r),U(e.t,r,n),e.o*r):(e.u.splice(r),(n?e.t.splice(0,-r):e.t.splice(r)).reduce((s,u)=>s-(u===V?e.o:u),0))},ce=typeof window<"u",ue=()=>document.documentElement,ye=e=>e.ownerDocument,ge=e=>e.defaultView,ae=te(()=>!!ce&&getComputedStyle(ue()).direction==="rtl"),fe=te(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),xe=te(()=>"scrollBehavior"in ue().style),we=e=>D(e.h(),e._()),be=(e,t,n,r,s)=>(r!==1&&(e-=D(0,n)),r!==2&&(t+=D(0,n)),[D(e,0),P(t,s-1)]),ke=(e,t=40,n=0,r,s=!1,u=0)=>{let i=!!n,h=[],o=0,l=0,d=0,f=0,a=0,g=0,I=0,S=0,R=i?[0,D(n-1,0)]:null,m=[0,0],w=0;const p=((c,v,T)=>({o:T?T[1]:v,t:T?T[0]:U([],c),l:c,i:-1,u:U([],c)}))(e,t,r),X=new Set,W=()=>l-u,K=c=>((v,T,$,j)=>{const C=re(v,T,P($,v.l-1));return[C,re(v,T+j,C)]})(p,c,m[0],o),x=()=>(c=>c.l?ee(c,c.l-1)+F(c,c.l-1):0)(p),Y=c=>ee(p,c)-a,z=c=>F(p,c),B=c=>{c&&(fe()&&I!==0?a+=c:(f+=c,d++))};return{p:()=>h,v:()=>(c=>[[...c.t],c.o])(p),m:()=>g?m:(m=K(D(0,W()+a+f)),R?[P(m[0],R[0]),D(m[1],R[1])]:m),S:c=>p.t[c]===V,I:()=>!!R&&p.t.slice(D(0,R[0]-1),P(p.l-1,R[1]+1)+1).includes(V),k:Y,R:z,C:()=>p.l,M:()=>l,T:()=>I,_:()=>o,H:()=>u,h:x,W:()=>d,J:()=>(g=f,f=0,[g,S===2]),B(c,v){const T=[c,v];return X.add(T),()=>{X.delete(T)}},O(c,v){let T,$,j=0;switch(c){case 1:{const C=g;g=0;const y=v-l,E=ne(y);C&&E<ne(C)+1||S!==0||(I=y<0?2:1),i&&(R=null,i=!1),l=v,j=4;const O=W();O>=-o&&O<=x()&&(j+=1,$=E>o);break}case 2:j=8,I!==0&&(T=!0,j+=1),I=0,S=0,R=null;break;case 3:{const C=v.filter(([y,E])=>p.t[y]!==E);if(!C.length)break;B(C.reduce((y,[E,O])=>((S===2||(R?E<R[0]:Y(E)+(I===0&&S===0?z(E):0)<W()))&&(y+=O-z(E)),y),0));for(const[y,E]of C){const O=z(y),H=ve(p,y,E);s&&(w+=E,H||(w-=O))}s&&o&&w>o&&(B(((y,E)=>{let O=0;const H=y.t.filter((M,L)=>{const A=M!==V;return A&&L<E&&O++,A}),b=y.o;return y.i=-1,((y.o=(M=>{const L=[...M].sort((J,he)=>J-he),A=M.length/2|0;return L.length%2==0?(L[A-1]+L[A])/2:L[A]})(H))-b)*D(E-O,0)})(p,m[0])),s=!1),j=3,$=!0;break}case 4:o!==v&&(o=v,j=3);break;case 5:v[1]?(B(oe(p,v[0],!0)),S=2,j=1):oe(p,v[0]);break;case 6:u=v;break;case 7:S=1;break;case 8:R=K(v),j=1}j&&(h=[],T&&a&&(f+=a,a=0,d++),X.forEach(([C,y])=>{j&C&&y($)}))}}},G=ce?k.useLayoutEffect:k.useEffect,N=(e,t)=>t&&ae()?-e:e,Re=(e,t,n,r,s,u)=>{const i=Date.now;let h=0,o=!1,l=!1,d=!1,f=!1;const a=(()=>{let m;const w=()=>{Z(m)&&clearTimeout(m)},p=()=>{w(),m=Q(()=>{m=null,(()=>{if(o||l)return o=!1,void a();d=!1,e.O(2)})()},150)};return p.L=w,p})(),g=()=>{h=i(),d&&(f=!0),e.O(1,r()),a()},I=m=>{if(o||e.T()===0||m.ctrlKey)return;const w=i()-h;150>w&&50<w&&(n?m.deltaX:m.deltaY)&&(o=!0)},S=()=>{l=!0,d=f=!1},R=()=>{l=!1,fe()&&(d=!0)};return t.addEventListener("scroll",g),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",S,{passive:!0}),t.addEventListener("touchend",R,{passive:!0}),{$:()=>{t.removeEventListener("scroll",g),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",S),t.removeEventListener("touchend",R),a.L()},A:()=>{const[m,w]=e.J();m&&(s(N(m,n),w,f),f=!1,w&&e._()>e.h()&&e.O(1,r()))}}},Ee=(e,t)=>{let n,r,s;const u=t?"scrollLeft":"scrollTop",i=t?"overflowX":"overflowY",h=async(o,l)=>{if(!n)return void le(()=>h(o,l));s&&s();const d=()=>{let f;return[new Promise((a,g)=>{f=a,Q(s=g,150)}),e.B(2,()=>{f&&f()})]};if(l&&xe()){for(;e.O(8,o()),e.I();){const[f,a]=d();try{await f}catch{return}finally{a()}}n.scrollTo({[t?"left":"top"]:N(o(),t),behavior:"smooth"})}else for(;;){const[f,a]=d();try{n[u]=N(o(),t),e.O(7),await f}catch{return}finally{a()}}};return{D(o){n=o,r=Re(e,o,t,()=>N(o[u],t),(l,d,f)=>{if(f){const a=o.style,g=a[i];a[i]="hidden",Q(()=>{a[i]=g})}d?(o[u]=e.M()+l,s&&s()):o[u]+=l})},$(){r&&r.$()},P(o){h(()=>o)},V(o){o+=e.M(),h(()=>o)},X(o,{align:l,smooth:d,offset:f=0}={}){if(o=ie(o,0,e.C()-1),l==="nearest"){const a=e.k(o),g=e.M();if(a<g)l="start";else{if(!(a+e.R(o)>g+e._()))return;l="end"}}h(()=>f+e.H()+e.k(o)+(l==="end"?e.R(o)-e._():l==="center"?(e.R(o)-e._())/2:0),d)},A:()=>{r&&r.A()}}},_="current",de=(e,t)=>{if(pe(e))for(const n of e)de(n,t);else Z(e)&&typeof e!="boolean"&&t.push(e)},Me=(e,t)=>{const n=e.key;return Z(n)?n:"_"+t},Te=e=>{const t=k.useRef();return t[_]||(t[_]=e())},se=e=>{const t=k.useRef(e);return G(()=>{t[_]=e},[e]),t},Se=e=>{let t;return{D(n){(t||(t=new(ge(ye(n))).ResizeObserver(e))).observe(n)},Y(n){t.unobserve(n)},$(){t&&t.disconnect()}}},Le=(e,t)=>{let n;const r=t?"width":"height",s=new WeakMap,u=Se(i=>{const h=[];for(const{target:o,contentRect:l}of i)if(o.offsetParent)if(o===n)e.O(4,l[r]);else{const d=s.get(o);Z(d)&&h.push([d,l[r]])}h.length&&e.O(3,h)});return{j(i){u.D(n=i)},q:(i,h)=>(s.set(i,h),u.D(i),()=>{s.delete(i),u.Y(i)}),$:u.$}},je=k.memo(({U:e,F:t,G:n,K:r,N:s,Z:u,ee:i,te:h})=>{const o=k.useRef(null);G(()=>t(o[_],n),[n]);const l=k.useMemo(()=>{const d={margin:0,padding:0,position:s&&h?void 0:"absolute",[i?"height":"width"]:"100%",[i?"top":"left"]:0,[i?ae()?"right":"left":"top"]:r,visibility:!s||h?"visible":"hidden"};return i&&(d.display="flex"),d},[r,s,h]);return q.jsx(u,typeof u=="string"?{ref:o,style:l,children:e}:{ref:o,style:l,index:n,children:e})}),Ce=e=>k.useReducer(e.p,void 0,e.p)[1],Ie=(e,t)=>k.useMemo(()=>{if(typeof e=="function")return[e,t||0];const n=(r=>{const s=[];return de(r,s),s})(e);return[r=>n[r],n.length]},[e,t]),Oe=k.forwardRef(({children:e,count:t,overscan:n=4,keepMounted:r,itemSize:s,shift:u,horizontal:i,cache:h,startMargin:o,ssrCount:l,as:d="div",item:f="div",scrollRef:a,onScroll:g,onScrollEnd:I,onRangeChange:S},R)=>{const[m,w]=Ie(e,t),p=k.useRef(null),X=k.useRef(!!l),W=se(g),K=se(I),[x,Y,z,B]=Te(()=>{const b=!!i,M=ke(w,s,l,h,!s,o);return[M,Le(M,b),Ee(M,b),b]});w!==x.C()&&x.O(5,[w,u]);const c=Ce(x),[v,T]=x.m(),$=x.T(),j=x.W(),C=x.h(),y=[],[E,O]=be(v,T,n,$,w),H=b=>{const M=m(b);return q.jsx(je,{F:Y.q,G:b,K:x.k(b),N:x.S(b),Z:f,U:M,ee:B,te:X[_]},Me(M,b))};G(()=>{X[_]=!1;const b=x.B(1,J=>{J?me.flushSync(c):c()}),M=x.B(4,()=>{W[_]&&W[_](x.M())}),L=x.B(8,()=>{K[_]&&K[_]()}),A=J=>{Y.j(J),z.D(J)};return a?le(()=>A(a[_])):A(p[_].parentElement),()=>{b(),M(),L(),Y.$(),z.$()}},[]),G(()=>{z.A()},[j]),k.useEffect(()=>{S&&S(v,T)},[v,T]),k.useImperativeHandle(R,()=>({get cache(){return x.v()},get scrollOffset(){return x.M()},get scrollSize(){return we(x)},get viewportSize(){return x._()},getItemOffset:x.k,scrollToIndex:z.X,scrollTo:z.P,scrollBy:z.V}),[]);for(let b=E,M=O;b<=M;b++)y.push(H(b));if(r){const b=[],M=[];r.slice().sort((L,A)=>L-A).forEach(L=>{L<E&&b.push(H(L)),L>O&&M.push(H(L))}),y.unshift(...b),y.push(...M)}return q.jsx(d,{ref:p,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:B?C:"100%",height:B?"100%":C,pointerEvents:$!==0?"none":"auto"},children:y})}),_e=k.forwardRef(({children:e,count:t,overscan:n,keepMounted:r,itemSize:s,shift:u,horizontal:i,reverse:h,cache:o,ssrCount:l,item:d,onScroll:f,onScrollEnd:a,onRangeChange:g,style:I,...S},R)=>{const m=k.useRef(null),w=h&&!i;let p=q.jsx(Oe,{ref:R,scrollRef:w?m:void 0,count:t,overscan:n,keepMounted:r,itemSize:s,shift:u,horizontal:i,cache:o,ssrCount:l,item:d,onScroll:f,onScrollEnd:a,onRangeChange:g,children:e});return w&&(p=q.jsx("div",{style:{visibility:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"100%"},children:p})),q.jsx("div",{ref:m,...S,style:{display:i?"inline-block":"block",[i?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...I},children:p})}),ze=k.memo(({count:e,Component:t,handle:n})=>{const r=k.useRef(null);return k.useImperativeHandle(n,()=>({scrollToIndex:s=>{var u;(u=r.current)==null||u.scrollToIndex(s)}})),q.jsx(_e,{ref:r,children:Array.from({length:e}).map((s,u)=>q.jsx(t,{index:u},u))})});ze.__docgenInfo={description:"",methods:[{name:"scrollToIndex",docblock:null,modifiers:[],params:[{name:"i",optional:!1,type:null}],returns:null}],displayName:"VirtuaList",props:{count:{required:!0,tsType:{name:"number"},description:""},Component:{required:!0,tsType:{name:"SimpleItem"},description:""},handle:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:"{ scrollToIndex: (index: number) => void }",signature:{properties:[{key:"scrollToIndex",value:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}},required:!0}}]}}],raw:"Ref<ListHandle>"},description:""}}};export{ze as V};
