import{a as y,j as a}from"./jsx-runtime-6c4ce591.js";import{r as u,R as k}from"./index-fcd6345f.js";import{S as Y,I as ge,H as Re,a as Se}from"./components-4e89d67d.js";import{L as G}from"./List-03a0fb46.js";/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t])}return i},_.apply(this,arguments)}function qe(i,e){if(i==null)return{};var r={},t=Object.keys(i),n,o;for(o=0;o<t.length;o++)n=t[o],!(e.indexOf(n)>=0)&&(r[n]=i[n]);return r}var Ye=["bottom","height","left","right","top","width"],Ge=function(e,r){return e===void 0&&(e={}),r===void 0&&(r={}),Ye.some(function(t){return e[t]!==r[t]})},R=new Map,De,Je=function i(){var e=[];R.forEach(function(r,t){var n=t.getBoundingClientRect();Ge(n,r.rect)&&(r.rect=n,e.push(r))}),e.forEach(function(r){r.callbacks.forEach(function(t){return t(r.rect)})}),De=window.requestAnimationFrame(i)};function Qe(i,e){return{observe:function(){var t=R.size===0;R.has(i)?R.get(i).callbacks.push(e):R.set(i,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),t&&Je()},unobserve:function(){var t=R.get(i);if(t){var n=t.callbacks.indexOf(e);n>=0&&t.callbacks.splice(n,1),t.callbacks.length||R.delete(i),R.size||cancelAnimationFrame(De)}}}}var F=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Xe(i,e){var r=e.rect;return i.height!==r.height||i.width!==r.width?r:i}var Ze=function(e,r){r===void 0&&(r={width:0,height:0});var t=k.useState(e.current),n=t[0],o=t[1],v=k.useReducer(Xe,r),h=v[0],w=v[1],S=k.useRef(!1);return F(function(){e.current!==n&&o(e.current)}),F(function(){if(n&&!S.current){S.current=!0;var O=n.getBoundingClientRect();w({rect:O})}},[n]),k.useEffect(function(){if(n){var O=Qe(n,function(N){w({rect:N})});return O.observe(),function(){O.unobserve()}}},[n]),h},er=["align"],rr=function(){return 50},tr=function(e){return e},nr=function(e,r){var t=r?"offsetWidth":"offsetHeight";return e[t]},ir=function(e){for(var r=Math.max(e.start-e.overscan,0),t=Math.min(e.end+e.overscan,e.size-1),n=[],o=r;o<=t;o++)n.push(o);return n},Ie=function(e){var r,t=e.size,n=t===void 0?0:t,o=e.estimateSize,v=o===void 0?rr:o,h=e.overscan,w=h===void 0?1:h,S=e.paddingStart,O=S===void 0?0:S,N=e.paddingEnd,Ue=N===void 0?0:N,T=e.parentRef,Q=e.horizontal,b=Q===void 0?!1:Q,ke=e.scrollToFn,Le=e.useObserver,Me=e.initialRect,X=e.onScrollElement,Z=e.scrollOffsetFn,ee=e.keyExtractor,re=ee===void 0?tr:ee,te=e.measureSize,ne=te===void 0?nr:te,ie=e.rangeExtractor,ae=ie===void 0?ir:ie,$e=b?"width":"height",D=b?"scrollLeft":"scrollTop",p=u.useRef({outerSize:0,scrollOffset:0,measurements:[],totalSize:0}),le=u.useState(0),Fe=le[0],se=le[1];p.current.scrollOffset=Fe;var Ae=Le||Ze,He=Ae(T,Me),je=He[$e];p.current.outerSize=je;var E=u.useCallback(function(l){T.current&&(T.current[D]=l)},[T,D]),oe=ke||E,I=u.useCallback(function(l){oe(l,E)},[E,oe]),ce=u.useState({}),ue=ce[0],A=ce[1],Ve=u.useCallback(function(){return A({})},[]),U=u.useRef([]),z=u.useMemo(function(){var l=U.current.length>0?Math.min.apply(Math,U.current):0;U.current=[];for(var f=p.current.measurements.slice(0,l),c=l;c<n;c++){var s=re(c),g=ue[s],m=f[c-1]?f[c-1].end:O,x=typeof g=="number"?g:v(c),C=m+x;f[c]={index:c,start:m,size:x,end:C,key:s}}return f},[v,ue,O,n,re]),fe=(((r=z[n-1])==null?void 0:r.end)||O)+Ue;p.current.measurements=z,p.current.totalSize=fe;var W=X?X.current:T.current,H=u.useRef(Z);H.current=Z,F(function(){if(!W){se(0);return}var l=function(c){var s=H.current?H.current(c):W[D];se(s)};return l(),W.addEventListener("scroll",l,{capture:!1,passive:!0}),function(){W.removeEventListener("scroll",l)}},[W,D]);var de=lr(p.current),ve=de.start,me=de.end,j=u.useMemo(function(){return ae({start:ve,end:me,overscan:w,size:z.length})},[ve,me,w,z.length,ae]),he=u.useRef(ne);he.current=ne;var Ke=u.useMemo(function(){for(var l=[],f=function(m,x){var C=j[m],B=z[C],d=_({},B,{measureRef:function(ye){if(ye){var P=he.current(ye,b);if(P!==d.size){var Oe=p.current.scrollOffset;d.start<Oe&&E(Oe+(P-d.size)),U.current.push(C),A(function(Pe){var q;return _({},Pe,(q={},q[d.key]=P,q))})}}}});l.push(d)},c=0,s=j.length;c<s;c++)f(c);return l},[j,E,b,z]),pe=u.useRef(!1);F(function(){pe.current&&A({}),pe.current=!0},[v]);var V=u.useCallback(function(l,f){var c=f===void 0?{align:"start"}:f,s=c.align,g=p.current,m=g.scrollOffset,x=g.outerSize;s==="auto"&&(l<=m?s="start":l>=m+x?s="end":s="start"),s==="start"?I(l):s==="end"?I(l-x):s==="center"&&I(l-x/2)},[I]),K=u.useCallback(function(l,f){var c=f===void 0?{align:"auto"}:f,s=c.align,g=qe(c,er),m=p.current,x=m.measurements,C=m.scrollOffset,B=m.outerSize,d=x[Math.max(0,Math.min(l,n-1))];if(d){if(s==="auto")if(d.end>=C+B)s="end";else if(d.start<=C)s="start";else return;var xe=s==="center"?d.start+d.size/2:s==="end"?d.end:d.start;V(xe,_({align:s},g))}},[V,n]),Be=u.useCallback(function(l,f){K(l,f),requestAnimationFrame(function(){K(l,f)})},[K]);return{virtualItems:Ke,totalSize:fe,scrollToOffset:V,scrollToIndex:Be,measure:Ve}},ar=function(e,r,t,n){for(;e<=r;){var o=(e+r)/2|0,v=t(o);if(v<n)e=o+1;else if(v>n)r=o-1;else return o}return e>0?e-1:0};function lr(i){for(var e=i.measurements,r=i.outerSize,t=i.scrollOffset,n=e.length-1,o=function(S){return e[S].start},v=ar(0,n,o,t),h=v;h<n&&e[h].end<t+r;)h++;return{start:v,end:h}}const fr={component:Ie},J=({count:i,Component:e})=>{const r=u.useRef(null),t=Ie({size:i,parentRef:r});return a("div",{ref:r,style:{flex:1,overflow:"auto"},children:a("div",{style:{height:`${t.totalSize}px`,width:"100%",position:"relative"},children:t.virtualItems.map(n=>a("div",{ref:n.measureRef,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${n.start}px)`},children:a(e,{index:n.index})},n.key))})})},L={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[a("div",{style:{flex:1},children:"virtua"}),a("div",{style:{flex:1},children:"react-virtual"})]}),a("div",{style:{display:"flex",flexDirection:"row"},children:a(Y,{count:1e4})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[a(G,{style:{flex:1},children:Array.from({length:1e4}).map((e,r)=>a(ge,{index:r},r))}),a(J,{count:1e4,Component:ge})]})]})},M={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[a("div",{style:{flex:1},children:"virtua"}),a("div",{style:{flex:1},children:"react-virtual"})]}),a("div",{style:{display:"flex",flexDirection:"row"},children:a(Y,{count:1e4})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[a(G,{style:{flex:1},children:Array.from({length:1e4}).map((e,r)=>a(Re,{index:r},r))}),a(J,{count:1e4,Component:Re})]})]})},$={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[a("div",{style:{flex:1},children:"virtua"}),a("div",{style:{flex:1},children:"react-virtual"})]}),a("div",{style:{display:"flex",flexDirection:"row"},children:a(Y,{count:1e6})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[a(G,{style:{flex:1},children:Array.from({length:1e6}).map((e,r)=>a(Se,{index:r},r))}),a(J,{count:1e6,Component:Se})]})]})};var Ce,we,ze;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtual</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8,
        overflow: "hidden"
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <ItemWithRenderCount key={i} index={i} />)}
          </List>
          <RVList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(ze=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Te,Ee,We;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 10000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtual</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8,
        overflow: "hidden"
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <HeavyItem key={i} index={i} />)}
          </List>
          <RVList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(We=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var _e,Ne,be;$.parameters={...$.parameters,docs:{...(_e=$.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 1000000;
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <div style={{
          flex: 1
        }}>virtua</div>
          <div style={{
          flex: 1
        }}>react-virtual</div>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row"
      }}>
          <ScrollInput count={ROW_COUNT} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        gap: 8,
        overflow: "hidden"
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <SimpleItem key={i} index={i} />)}
          </List>
          <RVList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(be=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};const dr=["DynamicHeight","HeavyComponent","OneMillion"];export{L as DynamicHeight,M as HeavyComponent,$ as OneMillion,dr as __namedExportsOrder,fr as default};
//# sourceMappingURL=react-virtual.stories-74ad654e.js.map
