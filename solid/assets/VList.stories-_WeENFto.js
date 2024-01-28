import{e as se,f as T,i as R,h as X,t as ee,j as le,u as Ee,s as Le,k as Be,c as V,l as Fe,o as He,n as We,p as de,q as je,m as Ke,d as H,v as Ye}from"./web-j3vXNFK-.js";const A=Math.min,C=Math.max,fe=Math.abs,oe=setTimeout,ie=(e,t,n)=>A(n,C(t,e)),ce=e=>e!=null,Ge=e=>{const t=[...e].sort((r,o)=>r-o),n=e.length/2|0;return t.length%2===0?(t[n-1]+t[n])/2:t[n]},Xe=(e,t)=>{let n;const r=()=>{ce(n)&&clearTimeout(n)},o=()=>{r(),n=oe(()=>{n=null,e()},t)};return o._cancel=r,o},ae=e=>{let t,n;return(...r)=>(t||(t=!0,n=e(...r)),n)},k=-1,Z=(e,t,n)=>{const r=n?"unshift":"push";for(let o=0;o<t;o++)e[r](k);return e},J=(e,t)=>{const n=e._sizes[t];return n===k?e._defaultItemSize:n},Ze=(e,t,n)=>{const r=e._sizes[t]===k;return e._sizes[t]=n,e._computedOffsetIndex=A(t,e._computedOffsetIndex),r},ue=(e,t)=>{if(!e._length)return 0;if(e._computedOffsetIndex>=t)return e._offsets[t];e._computedOffsetIndex<0&&(e._offsets[0]=0,e._computedOffsetIndex=0);let n=e._computedOffsetIndex,r=e._offsets[n];for(;n<t;)r+=J(e,n),e._offsets[++n]=r;return e._computedOffsetIndex=t,r},qe=e=>e._length?ue(e,e._length-1)+J(e,e._length-1):0,_e=(e,t,n)=>{let r=ue(e,n);for(;n>=0&&n<e._length;)if(r<=t){const o=J(e,n);if(r+o>t)break;r+=o,n++}else r-=J(e,--n);return ie(n,0,e._length-1)},ge=(e,t,n,r)=>{const o=_e(e,t,A(n,e._length-1));return[o,_e(e,t+r,o)]},Qe=e=>{const t=e._sizes.filter(r=>r!==k),n=t[0];e._defaultItemSize=t.every(r=>r===n)?n:Ge(t)},et=(e,t)=>({_defaultItemSize:t,_length:e,_computedOffsetIndex:-1,_sizes:Z([],e),_offsets:Z([],e)}),me=(e,t,n)=>{const r=t-e._length,o=r>0;let _;return o?(_=e._defaultItemSize*r,Z(e._sizes,r,n),Z(e._offsets,r)):(_=(n?e._sizes.splice(0,-r):e._sizes.splice(r)).reduce((g,a)=>g+(a===k?e._defaultItemSize:a),0),e._offsets.splice(r)),e._computedOffsetIndex=n?-1:A(t-1,e._computedOffsetIndex),e._length=t,[_,o]},tt=typeof window<"u",Te=()=>document.documentElement,nt=e=>e.ownerDocument,rt=e=>e.defaultView,Ce=ae(()=>tt?getComputedStyle(Te()).direction==="rtl":!1),Re=ae(()=>/iP(hone|od|ad)/.test(navigator.userAgent)),st=ae(()=>"scrollBehavior"in Te().style),ot=1.5,M=0,we=1,Pe=2,ne=0,lt=1,he=2,Ae=1,ke=2,De=3,$e=4,Ne=5,Ve=6,Me=7,F=1,q=2,Je=4,Ue=8,it=e=>C(e._getTotalSize(),e._getViewportSize()),ct=e=>C(e._getTotalSize(),e._getViewportSize()-e._getStartSpacerSize()-e._getEndSpacerSize()),at=(e,t,n)=>C(e-(n===we?1:C(1,t)),0),ut=(e,t,n,r)=>A(e+(n===Pe?1:C(1,t)),r-1),re=(e,t,n)=>t.reduce((r,[o,_])=>{const g=_-J(e,o);return(!n||g>0)&&(r+=g),r},0),dt=(e,t=40,n=0,r,o,_=0,g=0)=>{let a=!!n,s=[],c=0,d=0,i=0,m=0,y=0,f=0,O=M,v=ne,S=a?[0,C(n-1,0)]:null,L=[0,0];const u=r||et(e,t),E=new Set,D=()=>qe(u),U=()=>D()+_+g,B=()=>d-_,$=()=>C(0,U()-c),W=z=>{Re()&&O!==M?y+=z:(m+=z,i++)};return{_getStateVersion(){return s},_getCacheSnapshot(){return JSON.parse(JSON.stringify(u))},_getRange(){return S?[A(L[0],S[0]),C(L[1],S[1])]:f?L:L=ge(u,B()+y+m,L[0],c)},_isUnmeasuredItem(z){return u._sizes[z]===k},_hasUnmeasuredItemsInFrozenRange(){return S?u._sizes.slice(C(0,S[0]-1),A(u._length-1,S[1]+1)+1).includes(k):!1},_getItemOffset(z){return ue(u,z)-y},_getItemSize(z){return J(u,z)},_getItemsLength(){return u._length},_getScrollOffset(){return d},_getScrollDirection(){return O},_getViewportSize(){return c},_getStartSpacerSize(){return _},_getEndSpacerSize(){return g},_getTotalSize:D,_getJumpCount(){return i},_flushJump(){return c>U()?m=0:(f=m,m=0,f)},_subscribe(z,l){const h=[z,l];return E.add(h),()=>{E.delete(h)}},_update(z,l){let h,w,b=0;switch(z){case Ae:{const p=l.filter(([P,N])=>u._sizes[P]!==N);if(!p.length)break;let I=0;if(d!==0)if(d>$()-ot)I=re(u,p,!0);else if(v===he)I=re(u,p);else{const[P]=L;I=re(u,p.filter(([N])=>N<P))}I&&W(I);let x=!1;p.forEach(([P,N])=>{Ze(u,P,N)&&(x=!0)}),o&&x&&!d&&Qe(u),b=q,w=!0;break}case ke:{c!==l&&(c=l,b=q);break}case De:{if(l[1]){const p=$()-d,[I,x]=me(u,l[0],!0);W(x?I:-A(I,p)),x&&(v=he),b=F}else me(u,l[0]);break}case $e:{const p=ie(l,0,$()),I=f;if(f=0,p===d)break;const x=p-d,P=fe(x);!(I&&P<fe(I)+1)&&v===ne&&(O=x<0?Pe:we),a&&(S=null,a=!1),w=P>c,d=p,b=F+Je;break}case Ne:{b=Ue,O!==M&&(h=!0,b+=F),O=M,v=ne,S=null;break}case Ve:{v=lt;break}case Me:{S=ge(u,l,L[0],c),b=F;break}}b&&(s=[],h&&y&&(m+=y,y=0,i++),E.forEach(([p,I])=>{b&p&&I(w)}))}}},ft=e=>{let t;return{_observe(n){(t||(t=new(rt(nt(n))).ResizeObserver(e))).observe(n)},_unobserve(n){t.unobserve(n)},_dispose(){t&&t.disconnect()}}},_t=(e,t)=>{let n;const r=t?"width":"height",o=new WeakMap,_=ft(g=>{const a=[];for(const{target:s,contentRect:c}of g)if(s.offsetParent)if(s===n)e._update(ke,c[r]);else{const d=o.get(s);ce(d)&&a.push([d,c[r]])}a.length&&e._update(Ae,a)});return{_observeRoot(g){_._observe(n=g)},_observeItem:(g,a)=>(o.set(g,a),_._observe(g),()=>{o.delete(g),_._unobserve(g)}),_dispose:_._dispose}},j=(e,t)=>t&&Ce()?-e:e,gt=(e,t,n,r,o)=>{const _=Date.now;let g=0,a=!1,s=!1,c=!1,d=!1;const i=Xe(()=>{if(a||s){a=!1,i();return}c=!1,e._update(Ne)},150),m=()=>{g=_(),c&&(d=!0),e._update($e,r()),i()},y=v=>{if(a||e._getScrollDirection()===M||v.ctrlKey)return;const S=_()-g;150>S&&50<S&&(n?v.deltaX:v.deltaY)&&(a=!0)},f=()=>{s=!0,c=d=!1},O=()=>{s=!1,Re()&&(c=!0)};return t.addEventListener("scroll",m),t.addEventListener("wheel",y,{passive:!0}),t.addEventListener("touchstart",f,{passive:!0}),t.addEventListener("touchend",O,{passive:!0}),{_dispose:()=>{t.removeEventListener("scroll",m),t.removeEventListener("wheel",y),t.removeEventListener("touchstart",f),t.removeEventListener("touchend",O),i._cancel()},_fixScrollJump:v=>{o(v,d),d=!1}}},mt=(e,t)=>{let n,r,o;const _=t?"scrollLeft":"scrollTop",g=t?"overflowX":"overflowY",a=async(s,c)=>{if(!n)return;o&&o();const d=()=>{let i;return[new Promise((m,y)=>{i=m,oe(o=y,150)}),e._subscribe(q,()=>{i&&i()})]};if(c&&st()){for(;e._update(Me,s()),!!e._hasUnmeasuredItemsInFrozenRange();){const[i,m]=d();try{await i}catch{return}finally{m()}}n.scrollTo({[t?"left":"top"]:j(s(),t),behavior:"smooth"})}else for(;;){const[i,m]=d();try{n[_]=j(s(),t),e._update(Ve),await i}catch{return}finally{m()}}};return{_observe(s){n=s,r=gt(e,s,t,()=>j(s[_],t),(c,d)=>{if(d){const i=s.style,m=i[g];i[g]="hidden",oe(()=>{i[g]=m})}s[_]+=j(c,t)})},_dispose(){r&&r._dispose()},_scrollTo(s){a(()=>s)},_scrollBy(s){s+=e._getScrollOffset(),a(()=>s)},_scrollToIndex(s,{align:c,smooth:d}={}){if(s=ie(s,0,e._getItemsLength()-1),c==="nearest"){const i=e._getItemOffset(s),m=e._getScrollOffset();if(i<m)c="start";else if(i+e._getItemSize(s)>m+e._getViewportSize())c="end";else return}a(()=>e._getStartSpacerSize()+(c==="end"?e._getItemOffset(s)+e._getItemSize(s)-e._getViewportSize():c==="center"?e._getItemOffset(s)+(e._getItemSize(s)-e._getViewportSize())/2:e._getItemOffset(s)),d)},_fixScrollJump:s=>{r&&r._fixScrollJump(s)}}};var ht=ee("<div>");const St=e=>{let t;se(()=>{t&&le(e._resizer(t,e._index))});const n=T(()=>{const r=e._isHorizontal,o={margin:0,padding:0,position:"absolute",[r?"height":"width"]:"100%",[r?"top":"left"]:"0px",[r?Ce()?"right":"left":"top"]:e._offset+"px",visibility:e._hide?"hidden":"visible"};return r&&(o.display="flex"),o});return(()=>{var r=ht(),o=t;return typeof o=="function"?Ee(o,r):t=r,R(r,()=>e._children),X(_=>Le(r,n(),_)),r})()},pt=e=>{let t=new Map;return le(()=>{for(const n of t.values())n._dispose()}),T(()=>{const n=e._each,[r,o]=e._range,_=new Map,g=[];return Be(()=>{for(let a=r;a<=o;a++){const s=n[a],c=t.get(a);g.push(c?c._element:Fe(d=>{const i=V(s),m=e._render(i[0](),a);return _.set(a,{_data:i,_element:m,_dispose:d}),m})),c&&(s!==c._data&&c._data[1](s),_.set(a,c))}for(const[a,s]of t.entries())_.has(a)||s._dispose();return t=_,g})})};var vt=ee("<div><div>");const te=e=>{let t;const{ref:n,data:r,children:o,overscan:_,itemSize:g,shift:a,horizontal:s=!1,onScroll:c,onScrollEnd:d,onRangeChange:i,style:m,...y}=e,f=dt(e.data.length,g??40,void 0,void 0,!g),O=_t(f,s),v=mt(f,s),[S,L]=V(f._getStateVersion()),u=f._subscribe(F+q,()=>{L(f._getStateVersion())}),E=f._subscribe(Je,()=>{var l;(l=e.onScroll)==null||l.call(e,f._getScrollOffset())}),D=f._subscribe(Ue,()=>{var l;(l=e.onScrollEnd)==null||l.call(e)}),U=T(l=>{S();const h=f._getRange();return l&&l[0]===h[0]&&l[1]===h[1]?l:h}),B=T(()=>S()&&f._getScrollDirection()),$=T(()=>S()&&f._getTotalSize());T(()=>S()&&ct(f));const W=T(()=>S()&&f._getJumpCount()),z=T(()=>{const l=e.overscan??4,[h,w]=U();return[at(h,l,B()),ut(w,l,B(),e.data.length)]});return He(()=>{e.ref&&e.ref({get scrollOffset(){return f._getScrollOffset()},get scrollSize(){return it(f)},get viewportSize(){return f._getViewportSize()},scrollToIndex:v._scrollToIndex,scrollTo:v._scrollTo,scrollBy:v._scrollBy}),O._observeRoot(t),v._observe(t),le(()=>{e.ref&&e.ref(),u(),E(),D(),O._dispose(),v._dispose()})}),We(de(()=>e.data.length,(l,h)=>{ce(h)&&l!==h&&f._update(De,[l,e.shift])})),se(de(W,()=>{const l=f._flushJump();l&&v._fixScrollJump(l)})),se(()=>{const l=U();e.onRangeChange&&e.onRangeChange(l[0],l[1])}),(()=>{var l=vt(),h=l.firstChild,w=t;return typeof w=="function"?Ee(w,l):t=l,je(l,Ke(y,{get style(){return{display:s?"inline-block":"block",[s?"overflow-x":"overflow-y"]:"auto",contain:"strict",width:"100%",height:"100%",...e.style}}}),!1,!0),Le(h,{"overflow-anchor":"none"}),h.style.setProperty("overflow-anchor","none"),h.style.setProperty("flex","none"),h.style.setProperty("position","relative"),h.style.setProperty("visibility","hidden"),R(h,H(pt,{get _each(){return e.data},get _range(){return z()},_render:(b,p)=>{const I=T(()=>(S(),f._getItemOffset(p))),x=T(()=>(S(),f._isUnmeasuredItem(p)));return H(St,{_index:p,get _resizer(){return O._observeItem},get _offset(){return I()},get _hide(){return x()},get _children(){return e.children(b,p)},_isHorizontal:s})}})),X(b=>{var p=s?$()+"px":"100%",I=s?"100%":$()+"px",x=B()!==M?"none":"auto";return p!==b.e&&((b.e=p)!=null?h.style.setProperty("width",p):h.style.removeProperty("width")),I!==b.t&&((b.t=I)!=null?h.style.setProperty("height",I):h.style.removeProperty("height")),x!==b.a&&((b.a=x)!=null?h.style.setProperty("pointer-events",x):h.style.removeProperty("pointer-events")),b},{e:void 0,t:void 0,a:void 0}),l})()};var Q=ee("<div>"),yt=ee("<div><div>offset: </div><div>scrolling: </div><div><input type=number><button>scrollToIndex</button></div><div><button>append");const It={component:te},K={render:()=>{const e=[20,40,80,77],t=Array.from({length:1e3}).map((n,r)=>e[r%4]);return H(te,{data:t,style:{height:"100vh"},children:n=>(()=>{var r=Q();return n+"px"!=null?r.style.setProperty("height",n+"px"):r.style.removeProperty("height"),r.style.setProperty("border-bottom","solid 1px #ccc"),r.style.setProperty("background","#fff"),R(r,n),r})()})}},Y={render:()=>{const e=[40,180,77],t=Array.from({length:1e3}).map((n,r)=>e[r%3]);return(()=>{var n=Q();return n.style.setProperty("padding","10px"),R(n,H(te,{data:t,style:{width:"100%",height:"200px"},horizontal:!0,children:r=>(()=>{var o=Q();return r+"px"!=null?o.style.setProperty("width",r+"px"):o.style.removeProperty("width"),o.style.setProperty("border-right","solid 1px #ccc"),o.style.setProperty("background","#fff"),R(o,r),o})()})),n})()}},G={render:()=>{const e=[20,40,180,77],t=i=>({index:i,height:e[i%4]}),[n,r]=V(Array.from({length:1e3}).map((i,m)=>t(m))),[o,_]=V(0),[g,a]=V(!1),[s,c]=V(567);let d;return(()=>{var i=yt(),m=i.firstChild;m.firstChild;var y=m.nextSibling;y.firstChild;var f=y.nextSibling,O=f.firstChild,v=O.nextSibling,S=f.nextSibling,L=S.firstChild;return i.style.setProperty("height","100%"),i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),R(m,o,null),R(y,()=>String(g()),null),O.$$input=u=>{c(Number(u.target.value))},v.$$click=()=>{d==null||d.scrollToIndex(s())},L.$$click=()=>{r(u=>[...u,...Array.from({length:100}).map((E,D)=>t(D+u.length))])},R(i,H(te,{ref:u=>{d=u},get data(){return n()},style:{height:"100vh"},onScroll:u=>{_(u),a(!0)},onScrollEnd:()=>{a(!1)},children:u=>(()=>{var E=Q();return E.style.setProperty("border-bottom","solid 1px #ccc"),E.style.setProperty("background","#fff"),R(E,()=>u.index),X(()=>u.height+"px"!=null?E.style.setProperty("height",u.height+"px"):E.style.removeProperty("height")),E})()}),null),X(()=>O.value=s()),i})()}};Ye(["input","click"]);var Se,pe,ve;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const sizes = [20, 40, 80, 77];
    const data = Array.from({
      length: 1000
    }).map((_, i) => sizes[i % 4]);
    return <VList data={data} style={{
      height: "100vh"
    }}>
        {d => <div style={{
        height: d + "px",
        "border-bottom": "solid 1px #ccc",
        background: "#fff"
      }}>
            {d}
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
          {d => <div style={{
          width: d + "px",
          "border-right": "solid 1px #ccc",
          background: "#fff"
        }}>
              {d}
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
