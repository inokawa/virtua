import{j as q}from"./jsx-runtime-DR9Q75dM.js";import{r as T}from"./index-DRjF_FHU.js";import{r as pe}from"./index-uWwxbAOW.js";const H=null,{min:V,max:_,abs:ne,floor:ve}=Math,ye=Array.isArray,te=setTimeout,ie=(e,t,r)=>V(r,_(t,e)),le=e=>[...e].sort((t,r)=>t-r),ce=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},re=e=>{let t,r;return()=>(t||(t=!0,r=e()),r)},B=-1,K=(e,t,r)=>{const o=r?"unshift":"push";for(let s=0;s<t;s++)e[o](B);return e},Q=(e,t)=>{const r=e.t[t];return r===B?e.o:r},ge=(e,t,r)=>{const o=e.t[t]===B;return e.t[t]=r,e.i=V(t,e.i),o},U=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let r=e.i,o=e.u[r];for(;r<t;)o+=Q(e,r),e.u[++r]=o;return e.i=t,o},O=(e,t,r=0,o=e.l-1)=>{for(;r<=o;){const s=ve((r+o)/2),l=U(e,s);if(l<=t){if(l+Q(e,s)>t)return s;r=s+1}else o=s-1}return ie(r,0,e.l-1)},oe=(e,t,r)=>{const o=t-e.l;return e.i=r?-1:V(t-1,e.i),e.l=t,o>0?(K(e.u,o),K(e.t,o,r),e.o*o):(e.u.splice(o),(r?e.t.splice(0,-o):e.t.splice(o)).reduce((s,l)=>s-(l===B?e.o:l),0))},ue=typeof window<"u",ae=()=>document.documentElement,xe=e=>e.ownerDocument,we=e=>e.defaultView,fe=re(()=>!!ue&&getComputedStyle(ae()).direction==="rtl"),de=re(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),be=re(()=>"scrollBehavior"in ae().style),Ee=e=>_(e.h(),e._()),ke=(e,t=40,r=4,o=0,s,l=!1)=>{let a=!!o,y=[],n=0,f=0,v=0,g=0,p=0,x=0,I=0,R=0,L=0,d=a?[0,_(o-1,0)]:H,S=[0,0],z=0;const E=((i,m,b)=>({o:b?b[1]:m,t:b&&b[0]?K(b[0].slice(0,V(i,b[0].length)),_(0,i-b[0].length)):K([],i),l:i,i:-1,u:K([],i)}))(e,t,s),J=new Set,h=()=>v-f,C=()=>h()+x+p,$=i=>((m,b,P,k)=>{if(k=V(k,m.l-1),U(m,k)<=b){const c=O(m,b+P,k);return[O(m,b,k,c),c]}{const c=O(m,b,void 0,k);return[c,O(m,b+P,c)]}})(E,i,n,S[0]),X=()=>(i=>i.l?U(i,i.l-1)+Q(i,i.l-1):0)(E),G=i=>U(E,i)-x,D=i=>Q(E,i),W=i=>{i&&(de()&&R!==0?x+=i:(p+=i,g++))};return{p:()=>y,v:()=>(i=>[i.t.slice(),i.o])(E),m:()=>{if(I)return S;let[i,m]=$(_(0,C()));return d&&(i=V(i,d[0]),m=_(m,d[1])),R!==1&&(i-=_(0,r)),R!==2&&(m+=_(0,r)),S=[_(i,0),V(m,E.l-1)]},S:()=>O(E,C()),I:()=>O(E,C()+n),k:i=>E.t[i]===B,R:()=>!!d&&E.t.slice(_(0,d[0]-1),V(E.l-1,d[1]+1)+1).includes(B),T:G,M:D,C:()=>E.l,H:()=>v,W:()=>R!==0,_:()=>n,J:()=>f,h:X,B:()=>g,O:()=>(I=p,p=0,[I,L===2||h()+n>=X()]),L:(i,m)=>{const b=[i,m];return J.add(b),()=>{J.delete(b)}},$:(i,m)=>{let b,P,k=0;switch(i){case 1:{const c=I;I=0;const u=m-v,w=ne(u);c&&w<ne(c)+1||L!==0||(R=u<0?2:1),a&&(d=H,a=!1),v=m,k=4;const M=h();M>=-n&&M<=X()&&(k+=1,P=w>n);break}case 2:k=8,R!==0&&(b=!0,k+=1),R=0,L=0,d=H;break;case 3:{const c=m.filter(([u,w])=>E.t[u]!==w);if(!c.length)break;W(c.reduce((u,[w,M])=>((L===2||(d?w<d[0]:G(w)+(R===0&&L===0?D(w):0)<h()))&&(u+=M-D(w)),u),0));for(const[u,w]of c){const M=D(u),A=ge(E,u,w);l&&(z+=A?w:w-M)}l&&n&&z>n&&(W(((u,w)=>{let M=0;const A=u.t.filter((N,Y)=>{const F=N!==B;return F&&Y<w&&M++,F}),me=u.o;return u.i=-1,((u.o=(N=>{const Y=le(N),F=N.length/2|0;return Y.length%2==0?(Y[F-1]+Y[F])/2:Y[F]})(A))-me)*_(w-M,0)})(E,O(E,C()))),l=!1),k=3,P=!0;break}case 4:n!==m&&(n=m,k=3);break;case 5:m[1]?(W(oe(E,m[0],!0)),L=2,k=1):oe(E,m[0]);break;case 6:f=m;break;case 7:L=1;break;case 8:d=$(m),k=1}k&&(y=[],b&&x&&(p+=x,x=0,g++),J.forEach(([c,u])=>{k&c&&u(P)}))}}},ee=ue?T.useLayoutEffect:T.useEffect,Z=(e,t)=>t&&fe()?-e:e,Se=(e,t,r,o,s,l)=>{const a=Date.now;let y=0,n=!1,f=!1,v=!1,g=!1;const p=(()=>{let d;const S=()=>{d!=H&&clearTimeout(d)},z=()=>{S(),d=te(()=>{d=H,(()=>{if(n||f)return n=!1,void p();v=!1,e.$(2)})()},150)};return z.A=S,z})(),x=()=>{y=a(),v&&(g=!0),e.$(1,o()),p()},I=d=>{if(n||!e.W()||d.ctrlKey)return;const S=a()-y;150>S&&50<S&&(r?d.deltaX:d.deltaY)&&(n=!0)},R=()=>{f=!0,v=g=!1},L=()=>{f=!1,de()&&(v=!0)};return t.addEventListener("scroll",x),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",R,{passive:!0}),t.addEventListener("touchend",L,{passive:!0}),{P:()=>{t.removeEventListener("scroll",x),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",R),t.removeEventListener("touchend",L),p.A()},V:()=>{const[d,S]=e.O();d&&(s(Z(d,r),S,g),g=!1,S&&e._()>e.h()&&e.$(1,o()))}}},Te=(e,t)=>{let r,o,s;const l=t?"scrollLeft":"scrollTop",a=t?"overflowX":"overflowY",y=async(n,f)=>{if(!r)return void ce(()=>y(n,f));s&&s();const v=()=>{let g;return[new Promise((p,x)=>{g=p,s=x,(I=>!!I._())(e)&&te(x,150)}),e.L(2,()=>{g&&g()})]};if(f&&be()){for(;e.$(8,n()),e.R();){const[g,p]=v();try{await g}catch{return}finally{p()}}r.scrollTo({[t?"left":"top"]:Z(n(),t),behavior:"smooth"})}else for(;;){const[g,p]=v();try{r[l]=Z(n(),t),e.$(7),await g}catch{return}finally{p()}}};return{X(n){r=n,o=Se(e,n,t,()=>Z(n[l],t),(f,v,g)=>{if(g){const p=n.style,x=p[a];p[a]="hidden",te(()=>{p[a]=x})}v?(n[l]=e.H()+f,s&&s()):n[l]+=f})},P(){o&&o.P()},Y(n){y(()=>n)},j(n){n+=e.H(),y(()=>n)},q(n,{align:f,smooth:v,offset:g=0}={}){if(n=ie(n,0,e.C()-1),f==="nearest"){const p=e.T(n),x=e.H();if(p<x)f="start";else{if(!(p+e.M(n)>x+e._()))return;f="end"}}y(()=>g+e.J()+e.T(n)+(f==="end"?e.M(n)-e._():f==="center"?(e.M(n)-e._())/2:0),v)},V:()=>{o&&o.V()}}},j="current",he=(e,t)=>{if(ye(e))for(const r of e)he(r,t);else e==H||typeof e=="boolean"||t.push(e)},Re=(e,t)=>{const r=e.key;return r!=H?r:"_"+t},Le=e=>{const t=T.useRef();return t[j]||(t[j]=e())},se=e=>{const t=T.useRef(e);return ee(()=>{t[j]=e},[e]),t},Ie=e=>{let t;return{X(r){(t||(t=new(we(xe(r))).ResizeObserver(e))).observe(r)},D(r){t.unobserve(r)},P(){t&&t.disconnect()}}},Me=(e,t)=>{let r;const o=t?"width":"height",s=new WeakMap,l=Ie(a=>{const y=[];for(const{target:n,contentRect:f}of a)if(n.offsetParent)if(n===r)e.$(4,f[o]);else{const v=s.get(n);v!=H&&y.push([v,f[o]])}y.length&&e.$(3,y)});return{U(a){l.X(r=a)},F:(a,y)=>(s.set(a,y),l.X(a),()=>{s.delete(a),l.D(a)}),P:l.P}},je=T.memo(({G:e,K:t,N:r,Z:o,ee:s,te:l,ne:a,oe:y})=>{const n=T.useRef(H);ee(()=>t(n[j],r),[r]);const f=T.useMemo(()=>{const v={position:s&&y?void 0:"absolute",[a?"height":"width"]:"100%",[a?"top":"left"]:0,[a?fe()?"right":"left":"top"]:o,visibility:!s||y?"visible":"hidden"};return a&&(v.display="flex"),v},[o,s,y,a]);return q.jsx(l,typeof l=="string"?{ref:n,style:f,children:e}:{ref:n,style:f,index:r,children:e})}),Pe=e=>T.useReducer(e.p,void 0,e.p)[1],_e=(e,t)=>T.useMemo(()=>{if(typeof e=="function")return[e,t||0];const r=(o=>{const s=[];return he(o,s),s})(e);return[o=>r[o],r.length]},[e,t]),He=T.forwardRef(({children:e,count:t,overscan:r,itemSize:o,shift:s,horizontal:l,keepMounted:a,cache:y,startMargin:n=0,ssrCount:f,as:v="div",item:g="div",scrollRef:p,onScroll:x,onScrollEnd:I},R)=>{const[L,d]=_e(e,t),S=T.useRef(H),z=T.useRef(!!f),E=se(x),J=se(I),[h,C,$,X]=Le(()=>{const c=!!l,u=ke(d,o,r,f,y,!o);return[u,Me(u,c),Te(u,c),c]});d!==h.C()&&h.$(5,[d,s]),n!==h.J()&&h.$(6,n);const G=Pe(h),[D,W]=h.m(),i=h.W(),m=h.B(),b=h.h(),P=[],k=c=>{const u=L(c);return q.jsx(je,{K:C.F,N:c,Z:h.T(c),ee:h.k(c),te:g,G:u,ne:X,oe:z[j]},Re(u,c))};ee(()=>{z[j]=!1;const c=h.L(1,A=>{A?pe.flushSync(G):G()}),u=h.L(4,()=>{E[j]&&E[j](h.H())}),w=h.L(8,()=>{J[j]&&J[j]()}),M=A=>{C.U(A),$.X(A)};return p?ce(()=>M(p[j])):M(S[j].parentElement),()=>{c(),u(),w(),C.P(),$.P()}},[]),ee(()=>{$.V()},[m]),T.useImperativeHandle(R,()=>({get cache(){return h.v()},get scrollOffset(){return h.H()},get scrollSize(){return Ee(h)},get viewportSize(){return h._()},findStartIndex:h.S,findEndIndex:h.I,getItemOffset:h.T,getItemSize:h.M,scrollToIndex:$.q,scrollTo:$.Y,scrollBy:$.j}),[]);for(let c=D,u=W;c<=u;c++)P.push(k(c));if(a){const c=[],u=[];le(a).forEach(w=>{w<D&&c.push(k(w)),w>W&&u.push(k(w))}),P.unshift(...c),P.push(...u)}return q.jsx(v,{ref:S,style:{overflowAnchor:"none",flex:"none",position:"relative",visibility:"hidden",width:X?b:"100%",height:X?"100%":b,pointerEvents:i?"none":void 0},children:P})}),$e=T.forwardRef(({children:e,count:t,overscan:r,itemSize:o,shift:s,horizontal:l,keepMounted:a,reverse:y,cache:n,ssrCount:f,item:v,onScroll:g,onScrollEnd:p,style:x,...I},R)=>{const L=T.useRef(H),d=y&&!l;let S=q.jsx(He,{ref:R,scrollRef:d?L:void 0,count:t,overscan:r,itemSize:o,shift:s,horizontal:l,keepMounted:a,cache:n,ssrCount:f,item:v,onScroll:g,onScrollEnd:p,children:e});return d&&(S=q.jsx("div",{style:{visibility:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end",minHeight:"100%"},children:S})),q.jsx("div",{ref:L,...I,style:{display:l?"inline-block":"block",[l?"overflowX":"overflowY"]:"auto",contain:"strict",width:"100%",height:"100%",...x},children:S})}),ze=T.memo(({count:e,Component:t,handle:r})=>{const o=T.useRef(null);return T.useImperativeHandle(r,()=>({scrollToIndex:s=>{var l;(l=o.current)==null||l.scrollToIndex(s)}})),q.jsx($e,{ref:o,children:Array.from({length:e}).map((s,l)=>q.jsx(t,{index:l},l))})});ze.__docgenInfo={description:"",methods:[{name:"scrollToIndex",docblock:null,modifiers:[],params:[{name:"i",optional:!1,type:null}],returns:null}],displayName:"VirtuaList",props:{count:{required:!0,tsType:{name:"number"},description:""},Component:{required:!0,tsType:{name:"SimpleItem"},description:""},handle:{required:!1,tsType:{name:"Ref",elements:[{name:"signature",type:"object",raw:"{ scrollToIndex: (index: number) => void }",signature:{properties:[{key:"scrollToIndex",value:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}},required:!0}}]}}],raw:"Ref<ListHandle>"},description:""}}};export{ze as V};
