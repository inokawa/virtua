import{j as J}from"./jsx-runtime-c3d7f245.js";import{r as p}from"./index-c6dae603.js";import{r as he}from"./index-eb008d06.js";const N=Math.min,O=Math.max,pe=Math.abs,Q=Date.now,me=Object.values,ve=Array.isArray,$=setTimeout,P=(e,n,t)=>N(t,O(n,e)),X=e=>e!=null,ge=(e,n)=>{let t;const r=()=>{X(t)&&clearTimeout(t)},s=()=>{r(),t=$(()=>{t=null,e()},n)};return s.t=r,s},Y=e=>{let n,t;return(...r)=>(n||(n=!0,t=e(...r)),t)},le=e=>getComputedStyle(e),ye=e=>e?parseFloat(e):0,H=-1,B=(e,n)=>{const t=e.o[n];return t===H?e.i:t},K=(e,n)=>{if(!e.l)return 0;if(e.u>=n)return e.h[n];let t=e.u,r=e.h[t];for(;t<n;)r+=B(e,t),e.h[++t]=r;return e.u=n,r},Z=(e,n,t)=>{let r=K(e,t);for(;t>=0&&t<e.l;)if(r<=n){const s=B(e,t);if(r+s>n)break;r+=s,t++}else r-=B(e,--t);return P(t,0,e.l-1)},ee=(e,n,t,r)=>{const s=Z(e,n,N(t,e.l-1));return[s,Z(e,n+r,s)]},ie=(e,n,t)=>{const r=t?"unshift":"push";for(let s=e.l;s<n;s++)e.o[r](H),e.h.push(s===0?0:H);e.l=n},te=(e,n,t)=>{const r=n-e.l,s=r<0;let u;return s?(u=(t?e.o.splice(0,-r):e.o.splice(r)).reduce((l,i)=>l+(i===H?e.i:i),0),e.h.splice(r)):(u=e.i*r,ie(e,e.l+r,t)),e.u=t?0:P(n-1,0,e.u),e.l=n,[u,s]},G=typeof window<"u",be=Y(e=>{const n="scrollLeft",t=e[n];e[n]=1;const r=e[n]<1;return e[n]=t,r}),ce=Y(()=>!!G&&le(document.body).direction==="rtl"),ue=Y(()=>!!G&&/iP(hone|od|ad)/.test(navigator.userAgent)),re=(e,n,t)=>n.reduce((r,[s,u])=>{const l=u-B(e,s);return(!t||l>0)&&(r+=l),r},0),we=(e,n=40,t=0,r=((l,i)=>{const o={i,l:0,u:0,o:[],h:[]};return ie(o,l),o})(e,n),s,u)=>{let l=n*O(t-1,0),i=0,o=0,d=0,m=0,R=0,y=!1,L=!1,x=!1,E=[0,t];const S=ue(),j=new Set,q=()=>(c=>c.l?K(c,c.l-1)+B(c,c.l-1):0)(r),h=()=>q()-l,D=c=>P(c,0,h()),W=c=>{S&&R!==0?m+=c:(d+=c,o++)},A=c=>{const f=R;return R=c,R!==f};return{_:()=>JSON.parse(JSON.stringify(r)),g:()=>E=ee(r,i+m,E[0],l),p:c=>r.o[c]===H,m(c){const[f,M]=ee(r,c,E[0],l);return((C,_,g)=>C.o.slice(O(0,_-1),N(C.l-1,g+1)+1).includes(H))(r,f,M)},v(c){const f=K(r,c)-m;return s?f+O(0,l-q()):f},S:c=>B(r,c),I:()=>r.l,R:()=>i,k:h,O:()=>R,C:()=>l,T:()=>O(q(),l),M:()=>o,H(){const c=d;return d=0,c},J(c,f){const M=[c,f];return j.add(M),()=>{j.delete(M)}},W(c,f){let M,C,_=0;switch(c){case 1:{const g=f.filter(([v,b])=>r.o[v]!==b);if(!g.length)break;if(!y){let v=0;if(i!==0)if(i>h()-1.5)v=re(r,g,!0);else{const[b]=E;v=re(r,g.filter(([T])=>T<b))}v&&W(v)}let I=!1;g.forEach(([v,b])=>{((T,k,a)=>{const w=T.o[k]===H;return T.o[k]=a,T.u=N(k,T.u),w})(r,v,b)&&(I=!0)}),u&&I&&!i&&(v=>{const b=v.o.filter(k=>k!==H),T=b[0];v.i=b.every(k=>k===T)?T:(k=>{const a=[...k].sort((z,U)=>z-U),w=k.length/2|0;return a.length%2==0?(a[w-1]+a[w])/2:a[w]})(b)})(r),_+=2,x=C=!0;break}case 2:l!==f&&(l=f,_=2);break;case 3:if(f[1]){const g=h()-i,[I,v]=te(r,f[0],!0),b=v?-N(I,g):I;W(b),S||(i=D(i+b)),_=1}else te(r,f[0]);break;case 4:case 5:if(i===f)break;if(c===4){const g=f-i,I=x;x=!1,R!==0&&I||L||A(g<0?2:1),C=pe(g)>l,_+=4}else y=!0;i=D(f),_+=1;break;case 6:A(0)&&(M=!0,_=1),L=y=!1;break;case 7:y=!1,L=!0}_&&(M&&m&&(x=!0,d+=m,m=0,o++),j.forEach(([g,I])=>{_&g&&I(C)}))}}},F=G?p.useLayoutEffect:p.useEffect,Re=(e,n,t)=>(()=>{let r=Q()-50;return(...s)=>{const u=Q();r+50<u&&(r=u,(l=>{if(e.O()!==0&&!l.ctrlKey&&(n?l.deltaX:l.deltaY)){const i=e.R();i>0&&i<e.k()&&t()}})(...s))}})(),Ee=(e,n,t,r)=>be(e)||r?-t:n.k()-t,ke=(e,n)=>{let t,r,s=!1;const u=n?"scrollLeft":"scrollTop",l=(o,d)=>n&&ce()?Ee(t,e,o,d):o,i=async o=>{if(!t)return;const d=()=>P(o(),0,e.k());for(;;){const m=d();if(e.W(5,m),!e.m(m))break;r&&r[1]();const R=e.J(2,()=>{r&&r[0]()});try{await new Promise((y,L)=>{let x=!1;const E=()=>{x||(x=!0,y(),r=void 0)};r=[E,L],$(E,250)})}catch{return}finally{R()}}t[u]=l(d()),e.W(7)};return{L(o){t=o;let d=!1,m=!1;const R=()=>{e.W(4,l(o[u]))},y=ge(()=>{d?y():(m=!1,R(),e.W(6))},150),L=()=>{m&&(s=!0),R(),y()},x=Re(e,n,y),E=()=>{d=!0,m=s=!1},S=()=>{d=!1,ue()&&(m=!0)};return o.addEventListener("scroll",L),o.addEventListener("wheel",x,{passive:!0}),o.addEventListener("touchstart",E,{passive:!0}),o.addEventListener("touchend",S,{passive:!0}),()=>{o.removeEventListener("scroll",L),o.removeEventListener("wheel",x),o.removeEventListener("touchstart",E),o.removeEventListener("touchend",S),y.t()}},$(o){i(()=>o)},B(o){o+=e.R(),i(()=>o)},j(o,d){o=P(o,0,e.I()-1),i(d==="end"?()=>e.v(o)+e.S(o)-e.C():()=>e.v(o))},D:o=>{if(t){if(s){const d=t.style.overflow;t.style.overflow="hidden",s=!1,$(()=>{t.style.overflow=d})}t[u]+=l(o,!0)}}}},V="current",Le={},ae=(e,n)=>{if(ve(e))for(const t of e)ae(t,n);else X(e)&&typeof e!="boolean"&&n.push(e)},xe=e=>{const n=[];return ae(e,n),n},_e=(e,n,t)=>O(e-(t===1?1:O(1,n)),0),Ie=(e,n,t,r)=>N(e+(t===2?1:O(1,n)),r-1),Me=e=>{const n=p.useRef();return n[V]||(n[V]=e())},ne=e=>{const n=p.useRef(e);return F(()=>{n[V]=e},[e]),n},Te={box:"border-box"},Se=(e,n)=>{let t;const r=n?"width":"height",s=new WeakMap,u=Y(()=>new ResizeObserver(l=>{const i=[];for(const{target:o,contentRect:d}of l)if(o.offsetParent)if(o===t)e.W(2,d[r]+d[n?"left":"top"]+ye(le(t)[n?"paddingRight":"paddingBottom"]));else{const m=s.get(o);X(m)&&i.push([m,d[r]])}i.length&&e.W(1,i)}));return{N(l){t=l;const i=u();return i.observe(l,Te),()=>{i.disconnect()}},P(l,i){const o=u();return s.set(l,i),o.observe(l),()=>{s.delete(l),o.unobserve(l)}}}},Ce=p.forwardRef(({children:e,attrs:n,width:t,height:r,scrolling:s},u)=>J("div",{ref:u,...n,children:J("div",{style:p.useMemo(()=>({position:"relative",visibility:"hidden",width:t??"100%",height:r??"100%",pointerEvents:s?"none":"auto"}),[t,r,s]),children:e})})),Ve=p.memo(({U:e,V:n,A:t,F:r,X:s,Y:u,q:l})=>{const i=p.useRef(null);return F(()=>n.P(i[V],t),[t]),J(u,{ref:i,style:p.useMemo(()=>{const o={margin:0,padding:0,position:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:0,[l?ce()?"right":"left":"top"]:r,visibility:s?"hidden":"visible"};return l&&(o.display="flex"),o},[r,s]),children:e})}),oe=()=>[],We=()=>p.useReducer(oe,void 0,oe)[1],Oe=p.forwardRef(({children:e,overscan:n=4,initialItemSize:t,initialItemCount:r,shift:s,horizontal:u,reverse:l,cache:i,components:{Root:o=Ce,Item:d="div"}=Le,onScroll:m,onScrollStop:R,onRangeChange:y,...L},x)=>{const E=p.useMemo(()=>xe(e),[e]),S=E.length,j=ne(m),q=ne(R),[h,D,W,A]=Me(()=>{const a=!!u,w=we(S,t,r,i,!!l,!t);return[w,Se(w,a),ke(w,a),a]});S!==h.I()&&h.W(3,[S,s]);const c=We(),[f,M]=h.g(),C=h.O(),_=h.M(),g=h.T(),I=p.useRef(null),v=C!==0;F(()=>{const a=I[V],w=D.N(a),z=W.L(a),U=h.J(3,fe=>{fe?he.flushSync(c):c()}),de=h.J(4,()=>{j[V]&&j[V](h.R())});return()=>{w(),z(),U(),de()}},[]),F(()=>{const a=h.H();a&&W.D(a)},[_]),p.useEffect(()=>{v||q[V]&&q[V]()},[v]),p.useEffect(()=>{y&&y(f,M)},[f,M]),p.useImperativeHandle(x,()=>({get cache(){return h._()},get scrollOffset(){return h.R()},get scrollSize(){return h.T()},get viewportSize(){return h.C()},scrollToIndex:W.j,scrollTo:W.$,scrollBy:W.B}),[]);const b=_e(f,n,C),T=Ie(M,n,C,S),k=[];for(let a=b;a<=T;a++){const w=E[a],z=w.key;k.push(J(Ve,{V:D,A:a,F:h.v(a),X:h.p(a),Y:d,U:w,q:A},X(z)?z:"_"+a))}return J(o,{ref:I,width:A?g:void 0,height:A?void 0:g,scrolling:v,attrs:p.useMemo(()=>({...L,style:{overflow:"auto",display:A?"inline-block":"block",contain:"strict",width:"100%",height:"100%",...L.style}}),me(L)),children:k})}),se=p.memo(({count:e,Component:n,handle:t})=>{const r=p.useRef(null);return p.useImperativeHandle(t,()=>({scrollToIndex:s=>{var u;(u=r.current)==null||u.scrollToIndex(s)}})),J(Oe,{ref:r,children:Array.from({length:e}).map((s,u)=>J(n,{index:u},u))})});try{se.displayName="VirtuaList",se.__docgenInfo={description:"",displayName:"VirtuaList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}},handle:{defaultValue:null,description:"",name:"handle",required:!1,type:{name:"Ref<ListHandle>"}}}}}catch{}export{se as V};
//# sourceMappingURL=virtua-fe9b2a91.js.map