import{j as d,a as G}from"./jsx-runtime-c3d7f245.js";import{r as m}from"./index-c6dae603.js";import{I as Ee,H as ke,S as Ae,a as Fe}from"./common-bae0917e.js";import{R as je}from"./react-cool-virtual-ef6aa415.js";import{R as qe}from"./react-virtual-75d82430.js";import{R as Je}from"./react-virtuoso-c34ef023.js";import{R as Ke}from"./react-virtualized-ef7bccdb.js";import{R as Pe}from"./react-window-2d01ca09.js";import{s as Xe}from"./index-778f7dbf.js";import"./index-eb008d06.js";import"./assertThisInitialized-60dddfb4.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";import"./clsx.m-1229b3e0.js";import"./objectWithoutProperties-8e2777d0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./AutoSizer-8f234528.js";import"./inheritsLoose-495bf4f7.js";const D=Math.min,$=Math.max,Be=Math.abs,de=Date.now,k=e=>e!=null,me=(e,t)=>Array.from({length:e},(r,o)=>t(o)),K=(e,t)=>{const r=e.t[t];return r===-1?e.o:r},We=(e,t,r)=>{if(!e.l)return 0;if(e.i>=t)return r?e.u[t]+K(e,t):e.u[t];let o=e.i,l=e.u[o];for(;o<=t&&(e.u[o]=l,o!==t||r);)l+=K(e,o),o++;return e.i=t,l},pe=(e,t)=>We(e,t),Ie=(e,t,r)=>{let o=0;if(r>=0)for(;t<e.l-1;){const l=K(e,t++);if((o+=l)>=r){o-l/2>=r&&t--;break}}else for(;t>0;){const l=K(e,--t);if((o-=l)<=r){o+l/2<r&&t++;break}}return D($(t,0),e.l-1)},fe=(e,t,r,o)=>Ie(e,r,t-o),he=Ie,ve=(e,t,r)=>({o:t,l:e,i:r?D(r.i,e-1):0,t:me(e,o=>{const l=r&&r.t[o];return k(l)?l:-1}),u:me(e,o=>{if(o===0)return 0;const l=r&&r.u[o];return k(l)?l:-1})}),J=typeof window<"u"?m.useLayoutEffect:m.useEffect,P=(e,t)=>Xe.useSyncExternalStore(e,t,t),L="current",ye=e=>{const t=m.useRef();return t[L]||(t[L]=e())},Re=e=>{const t=m.useRef(e);return J(()=>{t[L]=e},[e]),m.useCallback((...r)=>{t[L]&&t[L](...r)},[])},Ge=m.memo(({_:e,h:t,m:r,g:o,p:l})=>{const _=m.useRef(null),I=P(r.S,()=>r.I(o)),T=P(r.S,()=>r.v(o));return J(()=>t.T(_[L],o),[o]),d(l,{ref:_,style:m.useMemo(()=>{const E=r.O(),A=r.R()?"right":"left",F={margin:0,padding:0,position:"absolute",[E?"height":"width"]:"100%",[E?"top":A]:0,[E?A:"top"]:I};return E&&(F.display="flex"),T&&(F.visibility="hidden"),F},[I,T]),children:e})}),Ye=m.forwardRef(({children:e,style:t,scrollSize:r,scrolling:o,horizontal:l,rtl:_},I)=>d("div",{ref:I,style:t,children:d("div",{style:m.useMemo(()=>{const T=l?r:"100%",E=l?"100%":r;return{position:"absolute",top:0,[_?"right":"left"]:0,width:T,height:E,minWidth:T,minHeight:E,pointerEvents:o?"none":"auto"}},[r,o]),children:e})})),Qe=({_:e,M:t,m:r,p:o,k:l,j:_})=>{const I=P(r.S,r.A),T=r.O();return d(o,{ref:t,scrollSize:I,scrolling:l,horizontal:T,rtl:r.R(),style:m.useMemo(()=>({overflow:T?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,..._}),[_]),children:e})},Ze=m.forwardRef(({children:e,itemSize:t=40,overscan:r=4,horizontal:o,rtl:l,endThreshold:_=0,style:I,element:T=Ye,itemElement:E="div",onEndReached:A,onScroll:F,onScrollStop:Ne},be)=>{const ee=m.useMemo(()=>{const n=[];return m.Children.forEach(e,R=>{(C=>!k(C)||typeof C=="boolean")(R)||n.push(R)}),n},[e]),X=ee.length,O=ye(()=>((n,R,C,j)=>{let f,U=0,W=0,w=0,z=[],p=ve(n,R),H=[0,0];const x=new Set,b=()=>C?U:W;return{D(){const[a,v]=H,y=pe(p,a),i=fe(p,w,a,y),c=he(p,i,b());return a===i&&v===c?H:H=[i,c]},v:a=>p.t[a]===-1,F:a=>((v,y,i)=>{for(let c=y;c<=i;c++)if(v.t[c]===-1)return!0;return!1})(p,a,he(p,a,b())),I:a=>pe(p,a),H:()=>w,J:()=>b(),A:()=>(a=>We(a,a.l-1,!0))(p),P:()=>p.l,U:()=>z,O:()=>C,R:()=>j,W:a=>fe(p,a,0,0),C:()=>(f&&f[1](),new Promise((a,v)=>{f=[()=>{Promise.resolve().then(()=>{a(),f=void 0})},v]})),S:a=>(x.add(a),()=>{x.delete(a)}),L(a,v){(()=>{switch(a){case 0:return p.l!==v&&(p=ve(v,R,p),!0);case 1:{const y=v.filter(([c,s])=>p.t[c]!==s);if(!y.length)return!1;const i=[];return y.forEach(([c,s])=>{i.push([c,s-K(p,c)]),((u,g,S)=>{u.t[g]=S,u.i=D(g,u.i)})(p,c,s)}),z=i,!0}case 2:return(U!==v.V||W!==v.q)&&(U=v.V,W=v.q,!0);case 3:{const y=w;return(w=v)!==y}}})()&&(x.forEach(y=>{y()}),f&&a===1&&f[0]())}}})(X,t,!!o,!!l)),[ce,te]=P(O.S,O.D),re=P(O.S,O.U),le=m.useRef(null),B=m.useRef(-1),Me=Re(F),Ue=Re(Ne),[ne,ze]=m.useState(new Set),[He,Ve]=m.useState(!1),M=ye(()=>((n,R,C)=>{let j,f,U,W=-1,w=0,z=!1;const p=n.O(),H=n.R(),x=p?"scrollLeft":"scrollTop",b=new WeakMap,a=()=>U||(U=new ResizeObserver(i=>{const c=[];for(const s of i)if(s.target===f)n.L(2,{V:s.contentRect.width,q:s.contentRect.height});else{const u=b.get(s.target);k(u)&&c.push([u,s.contentRect[p?"width":"height"]])}c.length&&(n.L(1,c),z=!0)})),v=()=>f?n.O()?f.scrollWidth:f.scrollHeight:0,y=(i,c)=>{if(f){if(H){if(!k(j)){const s=f[x];f[x]=1,j=f[x]===0,f[x]=s}j&&(i*=-1)}c?f[x]+=i:(f[x]=i,w=3)}};return{B(i){f=i;const c=a(),s=()=>{let h=i[x];H&&(h=Be(h)),W!==h&&(w!==0&&z?z=!1:w!==3&&(w=W>h?2:1),n.L(3,W=h),R(h))},u=(()=>{let h;const V=()=>{k(h)&&clearTimeout(h)},q=()=>{V(),h=setTimeout(()=>{h=null,s(),w=0,C(!1)},150)};return q.G=V,q})(),g=()=>{const h=w===0;s(),h&&C(!0),u()},S=(()=>{let h=de()-50;return(...V)=>{const q=de();h+50<q&&(h=q,(oe=>{w!==0&&(oe.ctrlKey||(p?oe.deltaX:oe.deltaY)&&W>0&&W<n.A()-n.J()&&u())})(...V))}})();return c.observe(i),i.addEventListener("scroll",g),i.addEventListener("wheel",S,{passive:!0}),()=>{c.disconnect(),i.removeEventListener("scroll",g),i.removeEventListener("wheel",S),u.G()}},T(i,c){const s=a();return b.set(i,c),s.observe(i),()=>{b.delete(i),s.unobserve(i)}},K:v,N:async(i,c)=>{const s=()=>{let u=c();const g=v(),S=n.J();return g-(u+S)<=0&&(u=g-S),u};if(n.F(i)){do{n.L(3,s());try{await n.C()}catch{return}}while(n.F(i));y(s())}else{const u=s();y(u),n.L(3,u)}},X:(i,c)=>{if(w===2){const s=i.reduce((u,[,g])=>u+g,0);s&&y(s,!0)}else if(w===3){const s=n.H();if(s!==0){const u=i.reduce((g,[,S])=>g+S,0);if(n.A()-(s+n.J()+u)<=0)u&&y(s+u);else{const g=i.reduce((S,[h,V])=>(h<c&&(S+=V),S),0);g&&y(g,!0)}}}}}})(O,Me,n=>{Ve(n),n||(ze(new Set),Ue())})),N=D(X,O.P());J(()=>{O.L(0,X)},[X]),J(()=>M.B(le[L]),[]),J(()=>{re.length&&M.X(re,ce)},[re]),m.useEffect(()=>{A&&(B[L]>N&&(B[L]=-1),N-1-te<=_&&B[L]<N&&(B[L]=N,A()))},[te]),m.useImperativeHandle(be,()=>({get scrollOffset(){return O.H()},get scrollSize(){return M.K()},scrollToIndex(n){n=$(D(n,N-1),0),M.N(n,()=>O.I(n))},scrollToOffset(n){n=$(n,0),M.N(O.W(n),()=>n)}}),[N]);const ae=$(ce-r,0),ue=D(te+r,N-1),De=m.useMemo(()=>{const n=[];for(let R=ae;R<=ue;R++)ne.add(R);return ne.forEach(R=>{const C=ee[R];n.push(d(Ge,{h:M,m:O,g:R,p:E,_:C},(C==null?void 0:C.key)||R))}),n},[ee,ne,ae,ue]);return d(Qe,{M:le,m:O,p:T,k:He,j:I,_:De})}),$e={flex:1},ie=({count:e,Component:t})=>d(Ze,{style:$e,children:Array.from({length:e}).map((r,o)=>d(t,{index:o},o))});try{ie.displayName="VirtuaList",ie.__docgenInfo={description:"",displayName:"VirtuaList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}}}}}catch{}const gt={component:Ee},et=e=>{switch(e){case"react-virtualized":return Ke;case"react-window":return Pe;case"react-virtuoso":return Je;case"react-virtual":return qe;case"react-cool-virtual":return je}},se=({count:e,ItemComponent:t})=>{const[r,o]=m.useState("react-virtualized"),l=et(r);return G("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[G("div",{style:{display:"flex",flexDirection:"row"},children:[d("div",{style:{flex:1},children:"virtua"}),d("div",{style:{flex:1},children:G("select",{value:r,onChange:_=>o(_.target.value),children:[d("option",{value:"react-virtualized",children:"react-virtualized"}),d("option",{value:"react-window",children:"react-window"}),d("option",{value:"react-virtuoso",children:"react-virtuoso"}),d("option",{value:"react-virtual",children:"react-virtual"}),d("option",{value:"react-cool-virtual",children:"react-cool-virtual"})]})})]}),d("div",{style:{display:"flex",flexDirection:"row"},children:d(Fe,{count:e})}),G("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[d(ie,{count:e,Component:t}),d(l,{count:e,Component:t})]})]})},Y={render:()=>d(se,{count:1e4,ItemComponent:Ee})},Q={render:()=>d(se,{count:1e4,ItemComponent:ke})},Z={render:()=>d(se,{count:1e6,ItemComponent:Ae})};var ge,we,Oe;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={ItemWithRenderCount} />;
  }
}`,...(Oe=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var Ce,Se,_e;Q.parameters={...Q.parameters,docs:{...(Ce=Q.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <Frame count={ROW_COUNT} ItemComponent={HeavyItem} />;
  }
}`,...(_e=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var xe,Le,Te;Z.parameters={...Z.parameters,docs:{...(xe=Z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <Frame count={ROW_COUNT} ItemComponent={SimpleItem} />;
  }
}`,...(Te=(Le=Z.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};const wt=["DynamicHeight","HeavyComponent","OneMillion"];export{Y as DynamicHeight,Q as HeavyComponent,Z as OneMillion,wt as __namedExportsOrder,gt as default};
//# sourceMappingURL=comparison.stories-a109122c.js.map
