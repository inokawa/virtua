import{e as se,f as R,i as P,h as X,t as ee,j as le,u as Ee,s as Le,k as Be,l as Fe,c as V,o as He,n as We,p as fe,q as je,m as Ke,d as H,v as Ye}from"./web-j3vXNFK-.js";const A=Math.min,w=Math.max,de=Math.abs,oe=setTimeout,ie=(e,t,n)=>A(n,w(t,e)),ce=e=>e!=null,Ge=e=>{const t=[...e].sort((r,o)=>r-o),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Xe=(e,t)=>{let n;const r=()=>{ce(n)&&clearTimeout(n)},o=()=>{r(),n=oe(()=>{n=null,e()},t)};return o._cancel=r,o},ae=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},D=-1,Z=(e,t,n)=>{const r=n?"unshift":"push";for(let o=0;o<t;o++)e[r](D);return e},J=(e,t)=>{const n=e._sizes[t];return n===D?e._defaultItemSize:n},Ze=(e,t,n)=>{const r=e._sizes[t]===D;return e._sizes[t]=n,e._computedOffsetIndex=A(t,e._computedOffsetIndex),r},ue=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,r=e._offsets[n];for(;n<t;)r+=J(e,n),e._offsets[++n]=r;return e._computedOffsetIndex=t,r},qe=e=>e._length?ue(e,e._length-1)+J(e,e._length-1):0,_e=(e,t,n)=>{let r=ue(e,n);for(;n>=0&&n<e._length;)if(r<=t){const o=J(e,n);if(r+o>t)break;r+=o,n++}else r-=J(e,--n);return ie(n,0,e._length-1)},ge=(e,t,n,r)=>{const o=_e(e,t,A(n,e._length-1));return[o,_e(e,t+r,o)]},Qe=e=>{const t=e._sizes.filter(r=>r!==D),n=t[0];e._defaultItemSize=t.every(r=>r===n)?n:Ge(t)},et=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:Z([],e),_offsets:Z([],e)}),me=(e,t,n)=>{const r=t-e._length,o=r>0;let l;return o?(l=e._defaultItemSize*r,Z(e._sizes,r,n),Z(e._offsets,r)):(l=(n?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((g,u)=>g+(u===D?e._defaultItemSize:u),0),e._offsets.splice(r)),e._computedOffsetIndex=n?-1:A(t-1,e._computedOffsetIndex),e._length=t,[l,o]},tt=typeof window<"u",Te=()=>document.documentElement,nt=e=>e.ownerDocument,rt=e=>e.defaultView,Ce=ae(()=>tt?getComputedStyle(Te()).direction==="rtl":!1),Re=ae(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),st=ae(()=>"scrollBehavior"in Te().style),ot=1.5,M=0,we=1,Pe=2,ne=0,lt=1,he=2,Ae=1,ke=2,De=3,$e=4,Ne=5,Ve=6,Me=7,F=1,q=2,Je=4,Ue=8,it=e=>w(e._getTotalSize(),e._getViewportSize()),ct=e=>w(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),at=(e,t,n)=>w(e-(n===we?1:w(1,t)),0),ut=(e,t,n,r)=>A(e+(n===Pe?1:w(1,t)),r-1),re=(e,t,n)=>t.reduce((r,[o,l])=>{const g=l-J(e,o);return(!n||g>0)&&(r+=g),r},0),ft=(e,t=40,n=0,r,o,l=0,g=0)=>{let u=!!n,s=[],a=0,d=0,i=0,m=0,b=0,_=0,I=M,y=ne,v=u?[0,w(n-1,0)]:null,C=[0,0];const f=r||et(e,t),L=new Set,$=()=>qe(f),U=()=>$()+l+g,W=()=>d-l,k=()=>w(0,U()-a),B=O=>{Re()&&I!==M?b+=O:(m+=O,i++)};return{_getStateVersion(){return s},_getCacheSnapshot(){return JSON.parse(JSON.stringify(f))},_getRange(){return v?[A(C[0],v[0]),w(C[1],v[1])]:_?C:C=ge(f,W()+b+m,C[0],a)},_isUnmeasuredItem(O){return f._sizes[O]===D},_hasUnmeasuredItemsInFrozenRange(){return v?f._sizes.slice(w(0,v[0]-1),A(f._length-1,v[1]+1)+1).includes(D):!1},_getItemOffset(O){return ue(f,O)-b},_getItemSize(O){return J(f,O)},_getItemsLength(){return f._length},_getScrollOffset(){return d},_getScrollDirection(){return I},_getViewportSize(){return a},_getStartSpacerSize(){return l},_getEndSpacerSize(){return g},_getTotalSize:$,_getJumpCount(){return i},_flushJump(){return a>U()?m=0:(_=m,m=0,_)},_subscribe(O,T){const c=[O,T];return L.add(c),()=>{L.delete(c)}},_update(O,T){let c,h,z=0;switch(O){case Ae:{const S=T.filter(([E,N])=>f._sizes[E]!==N);if(!S.length)break;let p=0;if(d!==0)if(d>k()-ot)p=re(f,S,!0);else if(y===he)p=re(f,S);else{const[E]=C;p=re(f,S.filter(([N])=>N<E))}p&&B(p);let x=!1;S.forEach(([E,N])=>{Ze(f,E,N)&&(x=!0)}),o&&x&&!d&&Qe(f),z=q,h=!0;break}case ke:{a!==T&&(a=T,z=q);break}case De:{if(T[1]){const S=k()-d,[p,x]=me(f,T[0],!0);B(x?p:-A(p,S)),x&&(y=he),z=F}else me(f,T[0]);break}case $e:{const S=ie(T,0,k()),p=_;if(_=0,S===d)break;const x=S-d,E=de(x);!(p&&E<de(p)+1)&&y===ne&&(I=x<0?Pe:we),u&&(v=null,u=!1),h=E>a,d=S,z=F+Je;break}case Ne:{z=Ue,I!==M&&(c=!0,z+=F),I=M,y=ne,v=null;break}case Ve:{y=lt;break}case Me:{v=ge(f,T,C[0],a),z=F;break}}z&&(s=[],c&&b&&(m+=b,b=0,i++),L.forEach(([S,p])=>{z&S&&p(h)}))}}},dt=e=>{let t;return{_observe(n){(t||(t=new(rt(nt(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},_t=(e,t)=>{let n;const r=t?"width":"height",o=new WeakMap,l=dt(g=>{const u=[];for(const{target:s,contentRect:a}of g)if(s.offsetParent)if(s===n)e._update(ke,a[r]);else{const d=o.get(s);ce(d)&&u.push([d,a[r]])}u.length&&e._update(Ae,u)});return{_observeRoot(g){l._observe(n=g)},_observeItem:(g,u)=>(o.set(g,u),l._observe(g),()=>{o.delete(g),l._unobserve(g)}),_dispose:l._dispose}},j=(e,t)=>t&&Ce()?-e:e,gt=(e,t,n,r,o)=>{const l=Date.now;let g=0,u=!1,s=!1,a=!1,d=!1;const i=Xe(()=>{if(u||s){u=!1,i();return}a=!1,e._update(Ne)},150),m=()=>{g=l(),a&&(d=!0),e._update($e,r()),i()},b=y=>{if(u||e._getScrollDirection()===M||y.ctrlKey)return;const v=l()-g;150>v&&50<v&&(n?y.deltaX:y.deltaY)&&(u=!0)},_=()=>{s=!0,a=d=!1},I=()=>{s=!1,Re()&&(a=!0)};return t.addEventListener("scroll",m),t.addEventListener("wheel",b,{passive:!0}),t.addEventListener("touchstart",_,{passive:!0}),t.addEventListener("touchend",I,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",m),t.removeEventListener("wheel",b),t.removeEventListener("touchstart",_),t.removeEventListener("touchend",I),i._cancel()},_fixScrollJump:y=>{o(y,d),d=!1}}},mt=(e,t)=>{let n,r,o;const l=t?"scrollLeft":"scrollTop",g=t?"overflowX":"overflowY",u=async(s,a)=>{if(!n)return;o&&o();const d=()=>{let i;return[new Promise((m,b)=>{i=m,oe(o=b,150)}),e._subscribe(q,()=>{i&&i()})]};if(a&&st()){for(;e._update(Me,s()),!!e._hasUnmeasuredItemsInFrozenRange();){const[i,m]=d();try{await i}catch{return}finally{m()}}n.scrollTo({[t?"left":"top"]:j(s(),t),behavior:"smooth"})}else for(;;){const[i,m]=d();try{n[l]=j(s(),t),e._update(Ve),await i}catch{return}finally{m()}}};return{_observe(s){n=s,r=gt(e,s,t,()=>j(s[l],t),(a,d)=>{if(d){const i=s.style,m=i[g];i[g]="hidden",oe(()=>{i[g]=m})}s[l]+=j(a,t)})},_dispose(){r&&r._dispose()},_scrollTo(s){u(()=>s)},_scrollBy(s){s+=e._getScrollOffset(),u(()=>s)},_scrollToIndex(s,{align:a,smooth:d}={}){if(s=ie(s,0,e._getItemsLength()-1),a==="nearest"){const i=e._getItemOffset(s),m=e._getScrollOffset();if(i<m)a="start";else if(i+e._getItemSize(s)>m+e._getViewportSize())a="end";else return}u(()=>e._getStartSpacerSize()+(a==="end"?e._getItemOffset(s)+e._getItemSize(s)-e._getViewportSize():a==="center"?e._getItemOffset(s)+(e._getItemSize(s)-e._getViewportSize())/2:e._getItemOffset(s)),d)},_fixScrollJump:s=>{r&&r._fixScrollJump(s)}}};var ht=ee("<div>");const St=e=>{let t;se(()=>{t&&le(e._resizer(t,e._index))});const n=R(()=>{const r=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":"left"]:"0px",[r?Ce()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return r&&(o.display="flex"),o});return(()=>{var r=ht(),o=t;return typeof o=="function"?Ee(o,r):t=r,P(r,()=>e._children),X(l=>Le(r,n(),l)),r})()},pt=e=>{let t=new Map;return le(()=>{for(const n of t.values())n._dispose()}),R(()=>{const n=e._each,[r,o]=e._range,l=new Map,g=[];return Be(()=>{for(let u=r;u<=o;u++){const s=n[u],a=t.get(u);g.push(a?a._element:Fe(d=>{const i=V(s),m=e._render(i[0](),u);return l.set(u,{_data:i,_element:m,_dispose:d}),m})),a&&(s!==a._data&&a._data[1](s),l.set(u,a))}for(const[u,s]of t.entries())l.has(u)||s._dispose();return t=l,g})})};var vt=ee("<div><div>");const te=e=>{let t;const{ref:n,data:r,children:o,overscan:l,itemSize:g,shift:u,horizontal:s=!1,onScroll:a,onScrollEnd:d,onRangeChange:i,style:m,...b}=e,_=ft(e.data.length,g??40,void 0,void 0,!g),I=_t(_,s),y=mt(_,s),[v,C]=V(_._getStateVersion()),f=_._subscribe(F+q,()=>{C(_._getStateVersion())}),L=_._subscribe(Je,()=>{var c;(c=e.onScroll)==null||c.call(e,_._getScrollOffset())}),$=_._subscribe(Ue,()=>{var c;(c=e.onScrollEnd)==null||c.call(e)}),U=(c,h)=>c[0]===h[0]&&c[1]===h[1],W=R(c=>{v();const h=_._getRange();return c&&U(c,h)?c:h}),k=R(()=>v()&&_._getScrollDirection()),B=R(()=>v()&&_._getTotalSize());R(()=>v()&&ct(_));const O=R(()=>v()&&_._getJumpCount()),T=R(c=>{const h=e.overscan??4,[z,S]=W(),p=[at(z,h,k()),ut(S,h,k(),e.data.length)];return c&&U(c,p)?c:p});return He(()=>{e.ref&&e.ref({get scrollOffset(){return _._getScrollOffset()},get scrollSize(){return it(_)},get viewportSize(){return _._getViewportSize()},scrollToIndex:y._scrollToIndex,scrollTo:y._scrollTo,scrollBy:y._scrollBy}),I._observeRoot(t),y._observe(t),le(()=>{e.ref&&e.ref(),f(),L(),$(),I._dispose(),y._dispose()})}),We(fe(()=>e.data.length,(c,h)=>{ce(h)&&c!==h&&_._update(De,[c,e.shift])})),se(fe(O,()=>{const c=_._flushJump();c&&y._fixScrollJump(c)})),se(()=>{const c=W();e.onRangeChange&&e.onRangeChange(c[0],c[1])}),(()=>{var c=vt(),h=c.firstChild,z=t;return typeof z=="function"?Ee(z,c):t=c,je(c,Ke(b,{get style(){return{display:s?"inline-block":"block",[s?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),Le(h,{"overflow-anchor":"none"}),h.style.setProperty("overflow-anchor","none"),h.style.setProperty("flex","none"),h.style.setProperty("position","relative"),h.style.setProperty("visibility","hidden"),P(h,H(pt,{get _each(){return e.data},get _range(){return T()},_render:(S,p)=>{const x=R(()=>(v(),_._getItemOffset(p))),E=R(()=>(v(),_._isUnmeasuredItem(p)));return H(St,{_index:p,get _resizer(){return I._observeItem},get _offset(){return x()},get _hide(){return E()},get _children(){return e.children(S,p)},_isHorizontal:s})}})),X(S=>{var p=s?B()+"px":"100%",x=s?"100%":B()+"px",E=k()!==M?"none":"auto";return p!==S.e&&((S.e=p)!=null?h.style.setProperty("width",p):h.style.removeProperty("width")),x!==S.t&&((S.t=x)!=null?h.style.setProperty("height",x):h.style.removeProperty("height")),E!==S.a&&((S.a=E)!=null?h.style.setProperty("pointer-events",E):h.style.removeProperty("pointer-events")),S},{e:void 0,t:void 0,a:void 0}),c})()};var Q=ee("<div>"),yt=ee("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const It={component:te},K={render:()=>{const e=[20,40,80,77],t=Array.from({length:1e3}).map((n,r)=>e[r%4]);return H(te,{data:t,style:{height:"100vh"},children:(n,r)=>(()=>{var o=Q();return n+"px"!=null?o.style.setProperty("height",n+"px"):o.style.removeProperty("height"),o.style.setProperty("border-bottom","solid 1px #ccc"),o.style.setProperty("background","#fff"),P(o,r),o})()})}},Y={render:()=>{const e=[40,180,77],t=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=Q();return n.style.setProperty("padding","10px"),P(n,H(te,{data:t,style:{width:"100%",height:"200px"},horizontal:!0,children:(r,o)=>(()=>{var l=Q();return r+"px"!=null?l.style.setProperty("width",r+"px"):l.style.removeProperty("width"),l.style.setProperty("border-right","solid 1px #ccc"),l.style.setProperty("background","#fff"),P(l,o),l})()})),n})()}},G={render:()=>{const e=[20,40,180,77],t=i=>({index:i,height:e[i%4]}),[n,r]=V(Array.from({length:1e3}).map((i,m)=>t(m))),[o,l]=V(0),[g,u]=V(!1),[s,a]=V(567);let d;return(()=>{var i=yt(),m=i.firstChild;m.firstChild;var b=m.nextSibling;b.firstChild;var _=b.nextSibling,I=_.firstChild,y=I.nextSibling,v=_.nextSibling,C=v.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),P(m,o,null),P(b,()=>String(g()),null),I.$$input=f=>{a(Number(f.target.value))},y.$$click=()=>{d==null||d.scrollToIndex(s())},C.$$click=()=>{r(f=>[...f,...Array.from({length:100}).map((L,$)=>t($+f.length))])},P(i,H(te,{ref:f=>{d=f},get data(){return n()},style:{height:"100vh"},onScroll:f=>{l(f),u(!0)},onScrollEnd:()=>{u(!1)},children:f=>(()=>{var L=Q();return L.style.setProperty("border-bottom","solid 1px #ccc"),L.style.setProperty("background","#fff"),P(L,()=>f.index),X(()=>f.height+"px"!=null?L.style.setProperty("height",f.height+"px"):L.style.removeProperty("height")),L})()}),null),X(()=>I.value=s()),i})()}};Ye(["input","click"]);var Se,pe,ve;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ie=(be=Y.parameters)==null?void 0:be.docs)==null?void 0:Ie.source}}};var Oe,ze,xe;G.parameters={...G.parameters,docs:{...(Oe=G.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(xe=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:xe.source}}};const Ot=["Default","Horizontal","Controlls"];export{G as Controlls,K as Default,Y as Horizontal,Ot as __namedExportsOrder,It as default};
