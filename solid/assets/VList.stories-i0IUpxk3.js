import{e as se,f as R,i as P,h as G,t as ee,j as le,u as Ee,s as Le,k as Be,l as Fe,c as V,o as He,n as We,p as fe,q as je,m as Ke,d as H,v as Ye}from"./web-j3vXNFK-.js";const k=Math.min,w=Math.max,de=Math.abs,oe=setTimeout,ie=(e,t,n)=>k(n,w(t,e)),ce=e=>e!=null,qe=e=>{const t=[...e].sort((r,o)=>r-o),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Ge=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Xe=(e,t)=>{let n;const r=()=>{ce(n)&&clearTimeout(n)},o=()=>{r(),n=oe(()=>{n=null,e()},t)};return o._cancel=r,o},ae=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},D=-1,X=(e,t,n)=>{const r=n?"unshift":"push";for(let o=0;o<t;o++)e[r](D);return e},J=(e,t)=>{const n=e._sizes[t];return n===D?e._defaultItemSize:n},Ze=(e,t,n)=>{const r=e._sizes[t]===D;return e._sizes[t]=n,e._computedOffsetIndex=k(t,e._computedOffsetIndex),r},ue=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,r=e._offsets[n];for(;n<t;)r+=J(e,n),e._offsets[++n]=r;return e._computedOffsetIndex=t,r},Qe=e=>e._length?ue(e,e._length-1)+J(e,e._length-1):0,_e=(e,t,n)=>{let r=ue(e,n);for(;n>=0&&n<e._length;)if(r<=t){const o=J(e,n);if(r+o>t)break;r+=o,n++}else r-=J(e,--n);return ie(n,0,e._length-1)},ge=(e,t,n,r)=>{const o=_e(e,t,k(n,e._length-1));return[o,_e(e,t+r,o)]},et=e=>{const t=e._sizes.filter(r=>r!==D),n=t[0];e._defaultItemSize=t.every(r=>r===n)?n:qe(t)},tt=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:X([],e),_offsets:X([],e)}),me=(e,t,n)=>{const r=t-e._length,o=r>0;let l;return o?(l=e._defaultItemSize*r,X(e._sizes,r,n),X(e._offsets,r)):(l=(n?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((g,u)=>g+(u===D?e._defaultItemSize:u),0),e._offsets.splice(r)),e._computedOffsetIndex=n?-1:k(t-1,e._computedOffsetIndex),e._length=t,[l,o]},nt=typeof window<"u",Te=()=>document.documentElement,rt=e=>e.ownerDocument,st=e=>e.defaultView,Ce=ae(()=>nt?getComputedStyle(Te()).direction==="rtl":!1),Re=ae(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),ot=ae(()=>"scrollBehavior"in Te().style),lt=1.5,M=0,we=1,Pe=2,ne=0,it=1,he=2,ke=1,Ae=2,De=3,$e=4,Ne=5,Ve=6,Me=7,F=1,Z=2,Je=4,Ue=8,ct=e=>w(e._getTotalSize(),e._getViewportSize()),at=e=>w(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),ut=(e,t,n)=>w(e-(n===we?1:w(1,t)),0),ft=(e,t,n,r)=>k(e+(n===Pe?1:w(1,t)),r-1),re=(e,t,n)=>t.reduce((r,[o,l])=>{const g=l-J(e,o);return(!n||g>0)&&(r+=g),r},0),dt=(e,t=40,n=0,r,o,l=0,g=0)=>{let u=!!n,s=[],i=0,d=0,c=0,m=0,b=0,_=0,I=M,y=ne,v=u?[0,w(n-1,0)]:null,C=[0,0];const f=r||tt(e,t),L=new Set,$=()=>Qe(f),U=()=>$()+l+g,W=()=>d-l,A=()=>w(0,U()-i),B=O=>{Re()&&I!==M?b+=O:(m+=O,c++)};return{_getStateVersion(){return s},_getCacheSnapshot(){return JSON.parse(JSON.stringify(f))},_getRange(){return v?[k(C[0],v[0]),w(C[1],v[1])]:_?C:C=ge(f,W()+b+m,C[0],i)},_isUnmeasuredItem(O){return f._sizes[O]===D},_hasUnmeasuredItemsInFrozenRange(){return v?f._sizes.slice(w(0,v[0]-1),k(f._length-1,v[1]+1)+1).includes(D):!1},_getItemOffset(O){return ue(f,O)-b},_getItemSize(O){return J(f,O)},_getItemsLength(){return f._length},_getScrollOffset(){return d},_getScrollDirection(){return I},_getViewportSize(){return i},_getStartSpacerSize(){return l},_getEndSpacerSize(){return g},_getTotalSize:$,_getJumpCount(){return c},_flushJump(){return i>U()?m=0:(_=m,m=0,_)},_subscribe(O,T){const a=[O,T];return L.add(a),()=>{L.delete(a)}},_update(O,T){let a,h,z=0;switch(O){case ke:{const S=T.filter(([E,N])=>f._sizes[E]!==N);if(!S.length)break;let p=0;if(d!==0)if(d>A()-lt)p=re(f,S,!0);else if(y===he)p=re(f,S);else{const[E]=C;p=re(f,S.filter(([N])=>N<E))}p&&B(p);let x=!1;S.forEach(([E,N])=>{Ze(f,E,N)&&(x=!0)}),o&&x&&!d&&et(f),z=Z,h=!0;break}case Ae:{i!==T&&(i=T,z=Z);break}case De:{if(T[1]){const S=A()-d,[p,x]=me(f,T[0],!0);B(x?p:-k(p,S)),x&&(y=he),z=F}else me(f,T[0]);break}case $e:{const S=ie(T,0,A()),p=_;if(_=0,S===d)break;const x=S-d,E=de(x);!(p&&E<de(p)+1)&&y===ne&&(I=x<0?Pe:we),u&&(v=null,u=!1),h=E>i,d=S,z=F+Je;break}case Ne:{z=Ue,I!==M&&(a=!0,z+=F),I=M,y=ne,v=null;break}case Ve:{y=it;break}case Me:{v=ge(f,T,C[0],i),z=F;break}}z&&(s=[],a&&b&&(m+=b,b=0,c++),L.forEach(([S,p])=>{z&S&&p(h)}))}}},_t=e=>{let t;return{_observe(n){(t||(t=new(st(rt(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},gt=(e,t)=>{let n;const r=t?"width":"height",o=new WeakMap,l=_t(g=>{const u=[];for(const{target:s,contentRect:i}of g)if(s.offsetParent)if(s===n)e._update(Ae,i[r]);else{const d=o.get(s);ce(d)&&u.push([d,i[r]])}u.length&&e._update(ke,u)});return{_observeRoot(g){l._observe(n=g)},_observeItem:(g,u)=>(o.set(g,u),l._observe(g),()=>{o.delete(g),l._unobserve(g)}),_dispose:l._dispose}},j=(e,t)=>t&&Ce()?-e:e,mt=(e,t,n,r,o)=>{const l=Date.now;let g=0,u=!1,s=!1,i=!1,d=!1;const c=Xe(()=>{if(u||s){u=!1,c();return}i=!1,e._update(Ne)},150),m=()=>{g=l(),i&&(d=!0),e._update($e,r()),c()},b=y=>{if(u||e._getScrollDirection()===M||y.ctrlKey)return;const v=l()-g;150>v&&50<v&&(n?y.deltaX:y.deltaY)&&(u=!0)},_=()=>{s=!0,i=d=!1},I=()=>{s=!1,Re()&&(i=!0)};return t.addEventListener("scroll",m),t.addEventListener("wheel",b,{passive:!0}),t.addEventListener("touchstart",_,{passive:!0}),t.addEventListener("touchend",I,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",m),t.removeEventListener("wheel",b),t.removeEventListener("touchstart",_),t.removeEventListener("touchend",I),c._cancel()},_fixScrollJump:y=>{o(y,d),d=!1}}},ht=(e,t)=>{let n,r,o;const l=t?"scrollLeft":"scrollTop",g=t?"overflowX":"overflowY",u=async(s,i)=>{if(!n){Ge(()=>u(s,i));return}o&&o();const d=()=>{let c;return[new Promise((m,b)=>{c=m,oe(o=b,150)}),e._subscribe(Z,()=>{c&&c()})]};if(i&&ot()){for(;e._update(Me,s()),!!e._hasUnmeasuredItemsInFrozenRange();){const[c,m]=d();try{await c}catch{return}finally{m()}}n.scrollTo({[t?"left":"top"]:j(s(),t),behavior:"smooth"})}else for(;;){const[c,m]=d();try{n[l]=j(s(),t),e._update(Ve),await c}catch{return}finally{m()}}};return{_observe(s){n=s,r=mt(e,s,t,()=>j(s[l],t),(i,d)=>{if(d){const c=s.style,m=c[g];c[g]="hidden",oe(()=>{c[g]=m})}s[l]+=j(i,t)})},_dispose(){r&&r._dispose()},_scrollTo(s){u(()=>s)},_scrollBy(s){s+=e._getScrollOffset(),u(()=>s)},_scrollToIndex(s,{align:i,smooth:d}={}){if(s=ie(s,0,e._getItemsLength()-1),i==="nearest"){const c=e._getItemOffset(s),m=e._getScrollOffset();if(c<m)i="start";else if(c+e._getItemSize(s)>m+e._getViewportSize())i="end";else return}u(()=>e._getStartSpacerSize()+(i==="end"?e._getItemOffset(s)+e._getItemSize(s)-e._getViewportSize():i==="center"?e._getItemOffset(s)+(e._getItemSize(s)-e._getViewportSize())/2:e._getItemOffset(s)),d)},_fixScrollJump:s=>{r&&r._fixScrollJump(s)}}};var St=ee("<div>");const pt=e=>{let t;se(()=>{t&&le(e._resizer(t,e._index))});const n=R(()=>{const r=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":"left"]:"0px",[r?Ce()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return r&&(o.display="flex"),o});return(()=>{var r=St(),o=t;return typeof o=="function"?Ee(o,r):t=r,P(r,()=>e._children),G(l=>Le(r,n(),l)),r})()},vt=e=>{let t=new Map;return le(()=>{for(const n of t.values())n._dispose()}),R(()=>{const n=e._each,[r,o]=e._range,l=new Map,g=[];return Be(()=>{for(let u=r;u<=o;u++){const s=n[u],i=t.get(u);g.push(i?i._element:Fe(d=>{const c=V(s),m=e._render(c[0](),u);return l.set(u,{_data:c,_element:m,_dispose:d}),m})),i&&(s!==i._data&&i._data[1](s),l.set(u,i))}for(const[u,s]of t.entries())l.has(u)||s._dispose();return t=l,g})})};var yt=ee("<div><div>");const te=e=>{let t;const{ref:n,data:r,children:o,overscan:l,itemSize:g,shift:u,horizontal:s=!1,onScroll:i,onScrollEnd:d,onRangeChange:c,style:m,...b}=e,_=dt(e.data.length,g??40,void 0,void 0,!g),I=gt(_,s),y=ht(_,s),[v,C]=V(_._getStateVersion()),f=_._subscribe(F+Z,()=>{C(_._getStateVersion())}),L=_._subscribe(Je,()=>{var a;(a=e.onScroll)==null||a.call(e,_._getScrollOffset())}),$=_._subscribe(Ue,()=>{var a;(a=e.onScrollEnd)==null||a.call(e)}),U=(a,h)=>a[0]===h[0]&&a[1]===h[1],W=R(a=>{v();const h=_._getRange();return a&&U(a,h)?a:h}),A=R(()=>v()&&_._getScrollDirection()),B=R(()=>v()&&_._getTotalSize());R(()=>v()&&at(_));const O=R(()=>v()&&_._getJumpCount()),T=R(a=>{const h=e.overscan??4,[z,S]=W(),p=[ut(z,h,A()),ft(S,h,A(),e.data.length)];return a&&U(a,p)?a:p});return He(()=>{e.ref&&e.ref({get scrollOffset(){return _._getScrollOffset()},get scrollSize(){return ct(_)},get viewportSize(){return _._getViewportSize()},scrollToIndex:y._scrollToIndex,scrollTo:y._scrollTo,scrollBy:y._scrollBy}),I._observeRoot(t),y._observe(t),le(()=>{e.ref&&e.ref(),f(),L(),$(),I._dispose(),y._dispose()})}),We(fe(()=>e.data.length,(a,h)=>{ce(h)&&a!==h&&_._update(De,[a,e.shift])})),se(fe(O,()=>{const a=_._flushJump();a&&y._fixScrollJump(a)})),se(()=>{const a=W();e.onRangeChange&&e.onRangeChange(a[0],a[1])}),(()=>{var a=yt(),h=a.firstChild,z=t;return typeof z=="function"?Ee(z,a):t=a,je(a,Ke(b,{get style(){return{display:s?"inline-block":"block",[s?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),Le(h,{"overflow-anchor":"none"}),h.style.setProperty("overflow-anchor","none"),h.style.setProperty("flex","none"),h.style.setProperty("position","relative"),h.style.setProperty("visibility","hidden"),P(h,H(vt,{get _each(){return e.data},get _range(){return T()},_render:(S,p)=>{const x=R(()=>(v(),_._getItemOffset(p))),E=R(()=>(v(),_._isUnmeasuredItem(p)));return H(pt,{_index:p,get _resizer(){return I._observeItem},get _offset(){return x()},get _hide(){return E()},get _children(){return e.children(S,p)},_isHorizontal:s})}})),G(S=>{var p=s?B()+"px":"100%",x=s?"100%":B()+"px",E=A()!==M?"none":"auto";return p!==S.e&&((S.e=p)!=null?h.style.setProperty("width",p):h.style.removeProperty("width")),x!==S.t&&((S.t=x)!=null?h.style.setProperty("height",x):h.style.removeProperty("height")),E!==S.a&&((S.a=E)!=null?h.style.setProperty("pointer-events",E):h.style.removeProperty("pointer-events")),S},{e:void 0,t:void 0,a:void 0}),a})()};var Q=ee("<div>"),bt=ee("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const Ot={component:te},K={render:()=>{const e=[20,40,80,77],t=Array.from({length:1e3}).map((n,r)=>e[r%4]);return H(te,{data:t,style:{height:"100vh"},children:(n,r)=>(()=>{var o=Q();return n+"px"!=null?o.style.setProperty("height",n+"px"):o.style.removeProperty("height"),o.style.setProperty("border-bottom","solid 1px #ccc"),o.style.setProperty("background","#fff"),P(o,r),o})()})}},Y={render:()=>{const e=[40,180,77],t=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=Q();return n.style.setProperty("padding","10px"),P(n,H(te,{data:t,style:{width:"100%",height:"200px"},horizontal:!0,children:(r,o)=>(()=>{var l=Q();return r+"px"!=null?l.style.setProperty("width",r+"px"):l.style.removeProperty("width"),l.style.setProperty("border-right","solid 1px #ccc"),l.style.setProperty("background","#fff"),P(l,o),l})()})),n})()}},q={render:()=>{const e=[20,40,180,77],t=c=>({index:c,height:e[c%4]}),[n,r]=V(Array.from({length:1e3}).map((c,m)=>t(m))),[o,l]=V(0),[g,u]=V(!1),[s,i]=V(567);let d;return(()=>{var c=bt(),m=c.firstChild;m.firstChild;var b=m.nextSibling;b.firstChild;var _=b.nextSibling,I=_.firstChild,y=I.nextSibling,v=_.nextSibling,C=v.firstChild;return c.style.setProperty("height","100%"),c.style.setProperty("display","flex"),c.style.setProperty("flex-direction","column"),P(m,o,null),P(b,()=>String(g()),null),I.$$input=f=>{i(Number(f.target.value))},y.$$click=()=>{d==null||d.scrollToIndex(s())},C.$$click=()=>{r(f=>[...f,...Array.from({length:100}).map((L,$)=>t($+f.length))])},P(c,H(te,{ref:f=>{d=f},get data(){return n()},style:{height:"100vh"},onScroll:f=>{l(f),u(!0)},onScrollEnd:()=>{u(!1)},children:f=>(()=>{var L=Q();return L.style.setProperty("border-bottom","solid 1px #ccc"),L.style.setProperty("background","#fff"),P(L,()=>f.index),G(()=>f.height+"px"!=null?L.style.setProperty("height",f.height+"px"):L.style.removeProperty("height")),L})()}),null),G(()=>I.value=s()),c})()}};Ye(["input","click"]);var Se,pe,ve;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]);
    return <VList data={data} style={{
      height: "100vh"
    }}>
        {(d, i) => <div style={{
        height: d + "px",
        "border-bottom": "solid 1px #ccc",
        background: "#fff"
      }}>
            {i}
          </div>}
      </VList>;
  }
}`,...(ve=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ye,be,Ie;Y.parameters={...Y.parameters,docs:{...(ye=Y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const sizes = [40, 180, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 3]);
    return <div style={{
      padding: "10px"
    }}>
        <VList data={data} style={{
        width: "100%",
        height: "200px"
      }} horizontal>
          {(d, i) => <div style={{
          width: d + "px",
          "border-right": "solid 1px #ccc",
          background: "#fff"
        }}>
              {i}
            </div>}
        </VList>
      </div>;
  }
}`,...(Ie=(be=Y.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Oe,ze,xe;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const heights = [20, 40, 180, 77];
    const createItem = (i: number) => ({
      index: i,
      height: heights[i % 4]
    });
    const [data, setData] = createSignal(Array.from({
      length: 1000
    }).map((_, i) => createItem(i)));
    const [scrollOffset, setScrollOffset] = createSignal(0);
    const [scrolling, setScrolling] = createSignal(false);
    const [scrollTarget, setScrollTarget] = createSignal(567);
    let handle: VListHandle | undefined;
    return <div style={{
      height: "100%",
      display: "flex",
      "flex-direction": "column"
    }}>
        <div>offset: {scrollOffset()}</div>
        <div>scrolling: {String(scrolling())}</div>
        <div>
          <input type="number" value={scrollTarget()} onInput={e => {
          setScrollTarget(Number((e.target as HTMLInputElement).value));
        }} />
          <button onClick={() => {
          handle?.scrollToIndex(scrollTarget());
        }}>
            scrollToIndex
          </button>
        </div>
        <div>
          <button onClick={() => {
          setData(prev => [...prev, ...Array.from({
            length: 100
          }).map((_, i) => createItem(i + prev.length))]);
        }}>
            append
          </button>
        </div>
        <VList ref={h => {
        handle = h;
      }} data={data()} style={{
        height: "100vh"
      }} onScroll={offset => {
        setScrollOffset(offset);
        setScrolling(true);
      }} onScrollEnd={() => {
        setScrolling(false);
      }}>
          {d => <div style={{
          height: d.height + "px",
          "border-bottom": "solid 1px #ccc",
          background: "#fff"
        }}>
              {d.index}
            </div>}
        </VList>
      </div>;
  }
}`,...(xe=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:xe.source}}};const zt=["Default","Horizontal","Controlls"];export{q as Controlls,K as Default,Y as Horizontal,zt as __namedExportsOrder,Ot as default};
