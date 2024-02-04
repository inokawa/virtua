import{e as oe,f as T,i as R,h as X,t as te,j as ie,u as Le,s as Te,k as Fe,l as He,c as V,o as We,n as je,p as de,q as Ke,m as Ye,d as W,v as qe}from"./web-j3vXNFK-.js";const k=Math.min,C=Math.max,_e=Math.abs,le=setTimeout,ce=(e,t,n)=>k(n,C(t,e)),ae=e=>e!=null,Ge=e=>{const t=[...e].sort((r,o)=>r-o),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Xe=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Ze=(e,t)=>{let n;const r=()=>{ae(n)&&clearTimeout(n)},o=()=>{r(),n=le(()=>{n=null,e()},t)};return o._cancel=r,o},ue=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},D=-1,Z=(e,t,n)=>{const r=n?"unshift":"push";for(let o=0;o<t;o++)e[r](D);return e},J=(e,t)=>{const n=e._sizes[t];return n===D?e._defaultItemSize:n},Qe=(e,t,n)=>{const r=e._sizes[t]===D;return e._sizes[t]=n,e._computedOffsetIndex=k(t,e._computedOffsetIndex),r},fe=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,r=e._offsets[n];for(;n<t;)r+=J(e,n),e._offsets[++n]=r;return e._computedOffsetIndex=t,r},et=e=>e._length?fe(e,e._length-1)+J(e,e._length-1):0,ge=(e,t,n)=>{let r=fe(e,n);for(;n>=0&&n<e._length;)if(r<=t){const o=J(e,n);if(r+o>t)break;r+=o,n++}else r-=J(e,--n);return ce(n,0,e._length-1)},me=(e,t,n,r)=>{const o=ge(e,t,k(n,e._length-1));return[o,ge(e,t+r,o)]},tt=e=>{const t=e._sizes.filter(r=>r!==D),n=t[0];e._defaultItemSize=t.every(r=>r===n)?n:Ge(t)},nt=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:Z([],e),_offsets:Z([],e)}),he=(e,t,n)=>{const r=t-e._length,o=r>0;let i;return o?(i=e._defaultItemSize*r,Z(e._sizes,r,n),Z(e._offsets,r)):(i=(n?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((d,u)=>d+(u===D?e._defaultItemSize:u),0),e._offsets.splice(r)),e._computedOffsetIndex=n?-1:k(t-1,e._computedOffsetIndex),e._length=t,[i,o]},rt=typeof window<"u",Ce=()=>document.documentElement,st=e=>e.ownerDocument,ot=e=>e.defaultView,Re=ue(()=>rt?getComputedStyle(Ce()).direction==="rtl":!1),we=ue(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),lt=ue(()=>"scrollBehavior"in Ce().style),it=1.5,M=0,Pe=1,ke=2,re=0,ct=1,Se=2,Ae=1,De=2,$e=3,Ne=4,Ve=5,Me=6,Je=7,H=1,Q=2,Ue=4,Be=8,at=e=>C(e._getTotalSize(),e._getViewportSize()),ut=e=>C(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),ft=(e,t,n)=>C(e-(n===Pe?1:C(1,t)),0),dt=(e,t,n,r)=>k(e+(n===ke?1:C(1,t)),r-1),se=(e,t,n)=>t.reduce((r,[o,i])=>{const d=i-J(e,o);return(!n||d>0)&&(r+=d),r},0),_t=(e,t=40,n=0,r,o,i=0,d=0)=>{let u=!!n,s=[],c=0,f=0,a=0,g=0,I=0,m=!1,x=0,v=M,b=re,L=u?[0,C(n-1,0)]:null,p=[0,0];const h=r||nt(e,t),A=new Set,U=()=>et(h),B=()=>U()+i+d,F=()=>f-i,$=()=>C(0,B()-c),j=z=>{we()&&v!==M?I+=z:(g+=z,a++)};return{_getStateVersion(){return s},_getCacheSnapshot(){return JSON.parse(JSON.stringify(h))},_getRange(){return L?[k(p[0],L[0]),C(p[1],L[1])]:x?p:p=me(h,F()+I+g,p[0],c)},_isUnmeasuredItem(z){return h._sizes[z]===D},_hasUnmeasuredItemsInFrozenRange(){return L?h._sizes.slice(C(0,L[0]-1),k(h._length-1,L[1]+1)+1).includes(D):!1},_getItemOffset(z){return fe(h,z)-I},_getItemSize(z){return J(h,z)},_getItemsLength(){return h._length},_getScrollOffset(){return f},_getScrollDirection(){return v},_getViewportSize(){return c},_getStartSpacerSize(){return i},_getEndSpacerSize(){return d},_getTotalSize:U,_getJumpCount(){return a},_flushJump(){const z=g,l=m;return g=0,m=!1,c>B()?[0,!1]:[x=z,l]},_subscribe(z,l){const _=[z,l];return A.add(_),()=>{A.delete(_)}},_update(z,l){let _,w,y=0;switch(z){case Ae:{const S=l.filter(([P,N])=>h._sizes[P]!==N);if(!S.length)break;let O=0;if(f!==0)if(f>$()-it)O=se(h,S,!0);else if(b===Se)O=se(h,S);else{const[P]=p;O=se(h,S.filter(([N])=>N<P))}O&&j(O);let E=!1;S.forEach(([P,N])=>{Qe(h,P,N)&&(E=!0)}),o&&E&&!f&&tt(h),y=Q,w=!0;break}case De:{c!==l&&(c=l,y=Q);break}case $e:{if(l[1]){const S=$()-f,[O,E]=he(h,l[0],!0);j(E?O:-k(O,S)),E&&(b=Se,m=!0),y=H}else he(h,l[0]);break}case Ne:{const S=ce(l,0,$()),O=x;if(x=0,S===f)break;const E=S-f,P=_e(E);!(O&&P<_e(O)+1)&&b===re&&(v=E<0?ke:Pe),u&&(L=null,u=!1),w=P>c,f=S,y=H+Ue;break}case Ve:{y=Be,v!==M&&(_=!0,y+=H),v=M,b=re,L=null;break}case Me:{b=ct;break}case Je:{L=me(h,l,p[0],c),y=H;break}}y&&(s=[],_&&I&&(g+=I,I=0,a++),A.forEach(([S,O])=>{y&S&&O(w)}))}}},gt=e=>{let t;return{_observe(n){(t||(t=new(ot(st(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},mt=(e,t)=>{let n;const r=t?"width":"height",o=new WeakMap,i=gt(d=>{const u=[];for(const{target:s,contentRect:c}of d)if(s.offsetParent)if(s===n)e._update(De,c[r]);else{const f=o.get(s);ae(f)&&u.push([f,c[r]])}u.length&&e._update(Ae,u)});return{_observeRoot(d){i._observe(n=d)},_observeItem:(d,u)=>(o.set(d,u),i._observe(d),()=>{o.delete(d),i._unobserve(d)}),_dispose:i._dispose}},K=(e,t)=>t&&Re()?-e:e,ht=(e,t,n,r,o)=>{const i=Date.now;let d=0,u=!1,s=!1,c=!1,f=!1;const a=Ze(()=>{if(u||s){u=!1,a();return}c=!1,e._update(Ve)},150),g=()=>{d=i(),c&&(f=!0),e._update(Ne,r()),a()},I=v=>{if(u||e._getScrollDirection()===M||v.ctrlKey)return;const b=i()-d;150>b&&50<b&&(n?v.deltaX:v.deltaY)&&(u=!0)},m=()=>{s=!0,c=f=!1},x=()=>{s=!1,we()&&(c=!0)};return t.addEventListener("scroll",g),t.addEventListener("wheel",I,{passive:!0}),t.addEventListener("touchstart",m,{passive:!0}),t.addEventListener("touchend",x,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",g),t.removeEventListener("wheel",I),t.removeEventListener("touchstart",m),t.removeEventListener("touchend",x),a._cancel()},_fixScrollJump:()=>{const[v,b]=e._flushJump();if(v)return o(v,f),f=!1,b}}},St=(e,t)=>{let n,r,o;const i=t?"scrollLeft":"scrollTop",d=t?"overflowX":"overflowY",u=async(s,c)=>{if(!n){Xe(()=>u(s,c));return}o&&o();const f=()=>{let a;return[new Promise((g,I)=>{a=g,le(o=I,150)}),e._subscribe(Q,()=>{a&&a()})]};if(c&&lt()){for(;e._update(Je,s()),!!e._hasUnmeasuredItemsInFrozenRange();){const[a,g]=f();try{await a}catch{return}finally{g()}}n.scrollTo({[t?"left":"top"]:K(s(),t),behavior:"smooth"})}else for(;;){const[a,g]=f();try{n[i]=K(s(),t),e._update(Me),await a}catch{return}finally{g()}}};return{_observe(s){n=s,r=ht(e,s,t,()=>K(s[i],t),(c,f)=>{if(f){const a=s.style,g=a[d];a[d]="hidden",le(()=>{a[d]=g})}s[i]+=K(c,t)})},_dispose(){r&&r._dispose()},_scrollTo(s){u(()=>s)},_scrollBy(s){s+=e._getScrollOffset(),u(()=>s)},_scrollToIndex(s,{align:c,smooth:f}={}){if(s=ce(s,0,e._getItemsLength()-1),c==="nearest"){const a=e._getItemOffset(s),g=e._getScrollOffset();if(a<g)c="start";else if(a+e._getItemSize(s)>g+e._getViewportSize())c="end";else return}u(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(s)+e._getItemSize(s)-e._getViewportSize():c==="center"?e._getItemOffset(s)+(e._getItemSize(s)-e._getViewportSize())/2:e._getItemOffset(s)),f)},_fixScrollJump:()=>{r&&r._fixScrollJump()&&o&&o()}}};var pt=te("<div>");const vt=e=>{let t;oe(()=>{t&&ie(e._resizer(t,e._index))});const n=T(()=>{const r=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":"left"]:"0px",[r?Re()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return r&&(o.display="flex"),o});return(()=>{var r=pt(),o=t;return typeof o=="function"?Le(o,r):t=r,R(r,()=>e._children),X(i=>Te(r,n(),i)),r})()},yt=e=>{let t=new Map;return ie(()=>{for(const n of t.values())n._dispose()}),T(()=>{const n=e._each,[r,o]=e._range,i=new Map,d=[];return Fe(()=>{for(let u=r;u<=o;u++){const s=n[u],c=t.get(u);d.push(c?c._element:He(f=>{const a=V(s),g=e._render(a[0](),u);return i.set(u,{_data:a,_element:g,_dispose:f}),g})),c&&(s!==c._data&&c._data[1](s),i.set(u,c))}for(const[u,s]of t.entries())i.has(u)||s._dispose();return t=i,d})})};var bt=te("<div><div>");const ne=e=>{let t;const{ref:n,data:r,children:o,overscan:i,itemSize:d,shift:u,horizontal:s=!1,onScroll:c,onScrollEnd:f,onRangeChange:a,style:g,...I}=e,m=_t(e.data.length,d??40,void 0,void 0,!d),x=mt(m,s),v=St(m,s),[b,L]=V(m._getStateVersion()),p=m._subscribe(H+Q,()=>{L(m._getStateVersion())}),h=m._subscribe(Ue,()=>{var l;(l=e.onScroll)==null||l.call(e,m._getScrollOffset())}),A=m._subscribe(Be,()=>{var l;(l=e.onScrollEnd)==null||l.call(e)}),U=(l,_)=>l[0]===_[0]&&l[1]===_[1],B=T(l=>{b();const _=m._getRange();return l&&U(l,_)?l:_}),F=T(()=>b()&&m._getScrollDirection()),$=T(()=>b()&&m._getTotalSize());T(()=>b()&&ut(m));const j=T(()=>b()&&m._getJumpCount()),z=T(l=>{const _=e.overscan??4,[w,y]=B(),S=[ft(w,_,F()),dt(y,_,F(),e.data.length)];return l&&U(l,S)?l:S});return We(()=>{e.ref&&e.ref({get scrollOffset(){return m._getScrollOffset()},get scrollSize(){return at(m)},get viewportSize(){return m._getViewportSize()},scrollToIndex:v._scrollToIndex,scrollTo:v._scrollTo,scrollBy:v._scrollBy}),x._observeRoot(t),v._observe(t),ie(()=>{e.ref&&e.ref(),p(),h(),A(),x._dispose(),v._dispose()})}),je(de(()=>e.data.length,(l,_)=>{ae(_)&&l!==_&&m._update($e,[l,e.shift])})),oe(de(j,()=>{v._fixScrollJump()})),oe(()=>{const l=B();e.onRangeChange&&e.onRangeChange(l[0],l[1])}),(()=>{var l=bt(),_=l.firstChild,w=t;return typeof w=="function"?Le(w,l):t=l,Ke(l,Ye(I,{get style(){return{display:s?"inline-block":"block",[s?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),Te(_,{"overflow-anchor":"none"}),_.style.setProperty("overflow-anchor","none"),_.style.setProperty("flex","none"),_.style.setProperty("position","relative"),_.style.setProperty("visibility","hidden"),R(_,W(yt,{get _each(){return e.data},get _range(){return z()},_render:(y,S)=>{const O=T(()=>(b(),m._getItemOffset(S))),E=T(()=>(b(),m._isUnmeasuredItem(S)));return W(vt,{_index:S,get _resizer(){return x._observeItem},get _offset(){return O()},get _hide(){return E()},get _children(){return e.children(y,S)},_isHorizontal:s})}})),X(y=>{var S=s?$()+"px":"100%",O=s?"100%":$()+"px",E=F()!==M?"none":"auto";return S!==y.e&&((y.e=S)!=null?_.style.setProperty("width",S):_.style.removeProperty("width")),O!==y.t&&((y.t=O)!=null?_.style.setProperty("height",O):_.style.removeProperty("height")),E!==y.a&&((y.a=E)!=null?_.style.setProperty("pointer-events",E):_.style.removeProperty("pointer-events")),y},{e:void 0,t:void 0,a:void 0}),l})()};var ee=te("<div>"),It=te("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const zt={component:ne},Y={render:()=>{const e=[20,40,80,77],t=Array.from({length:1e3}).map((n,r)=>e[r%4]);return W(ne,{data:t,style:{height:"100vh"},children:(n,r)=>(()=>{var o=ee();return n+"px"!=null?o.style.setProperty("height",n+"px"):o.style.removeProperty("height"),o.style.setProperty("border-bottom","solid 1px #ccc"),o.style.setProperty("background","#fff"),R(o,r),o})()})}},q={render:()=>{const e=[40,180,77],t=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=ee();return n.style.setProperty("padding","10px"),R(n,W(ne,{data:t,style:{width:"100%",height:"200px"},horizontal:!0,children:(r,o)=>(()=>{var i=ee();return r+"px"!=null?i.style.setProperty("width",r+"px"):i.style.removeProperty("width"),i.style.setProperty("border-right","solid 1px #ccc"),i.style.setProperty("background","#fff"),R(i,o),i})()})),n})()}},G={render:()=>{const e=[20,40,180,77],t=a=>({index:a,height:e[a%4]}),[n,r]=V(Array.from({length:1e3}).map((a,g)=>t(g))),[o,i]=V(0),[d,u]=V(!1),[s,c]=V(567);let f;return(()=>{var a=It(),g=a.firstChild;g.firstChild;var I=g.nextSibling;I.firstChild;var m=I.nextSibling,x=m.firstChild,v=x.nextSibling,b=m.nextSibling,L=b.firstChild;return a.style.setProperty("height","100%"),a.style.setProperty("display","flex"),a.style.setProperty("flex-direction","column"),R(g,o,null),R(I,()=>String(d()),null),x.$$input=p=>{c(Number(p.target.value))},v.$$click=()=>{f==null||f.scrollToIndex(s())},L.$$click=()=>{r(p=>[...p,...Array.from({length:100}).map((h,A)=>t(A+p.length))])},R(a,W(ne,{ref:p=>{f=p},get data(){return n()},style:{height:"100vh"},onScroll:p=>{i(p),u(!0)},onScrollEnd:()=>{u(!1)},children:p=>(()=>{var h=ee();return h.style.setProperty("border-bottom","solid 1px #ccc"),h.style.setProperty("background","#fff"),R(h,()=>p.index),X(()=>p.height+"px"!=null?h.style.setProperty("height",p.height+"px"):h.style.removeProperty("height")),h})()}),null),X(()=>x.value=s()),a})()}};qe(["input","click"]);var pe,ve,ye;Y.parameters={...Y.parameters,docs:{...(pe=Y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Ie,Oe;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var ze,xe,Ee;G.parameters={...G.parameters,docs:{...(ze=G.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ee=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};const xt=["Default","Horizontal","Controlls"];export{G as Controlls,Y as Default,q as Horizontal,xt as __namedExportsOrder,zt as default};
