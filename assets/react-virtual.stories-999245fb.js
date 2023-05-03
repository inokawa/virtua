import{j as l,a as y}from"./jsx-runtime-c3d7f245.js";import{I as G,S as J,V as Q,H as ge,a as Ce}from"./virtua-cbc9a237.js";import{r as u,R as L}from"./index-c6dae603.js";import"./index-778f7dbf.js";/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},b.apply(this,arguments)}function Be(i,e){if(i==null)return{};var t={},r=Object.keys(i),n,s;for(s=0;s<r.length;s++)n=r[s],!(e.indexOf(n)>=0)&&(t[n]=i[n]);return t}var Pe=["bottom","height","left","right","top","width"],Ye=function(e,t){return e===void 0&&(e={}),t===void 0&&(t={}),Pe.some(function(r){return e[r]!==t[r]})},g=new Map,De,Ge=function i(){var e=[];g.forEach(function(t,r){var n=r.getBoundingClientRect();Ye(n,t.rect)&&(t.rect=n,e.push(t))}),e.forEach(function(t){t.callbacks.forEach(function(r){return r(t.rect)})}),De=window.requestAnimationFrame(i)};function Je(i,e){return{observe:function(){var r=g.size===0;g.has(i)?g.get(i).callbacks.push(e):g.set(i,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),r&&Ge()},unobserve:function(){var r=g.get(i);if(r){var n=r.callbacks.indexOf(e);n>=0&&r.callbacks.splice(n,1),r.callbacks.length||g.delete(i),g.size||cancelAnimationFrame(De)}}}}var F=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Qe(i,e){var t=e.rect;return i.height!==t.height||i.width!==t.width?t:i}var Xe=function(e,t){t===void 0&&(t={width:0,height:0});var r=L.useState(e.current),n=r[0],s=r[1],v=L.useReducer(Qe,t),p=v[0],w=v[1],C=L.useRef(!1);return F(function(){e.current!==n&&s(e.current)}),F(function(){if(n&&!C.current){C.current=!0;var R=n.getBoundingClientRect();w({rect:R})}},[n]),L.useEffect(function(){if(n){var R=Je(n,function(W){w({rect:W})});return R.observe(),function(){R.unobserve()}}},[n]),p},Ze=["align"],et=function(){return 50},tt=function(e){return e},rt=function(e,t){var r=t?"offsetWidth":"offsetHeight";return e[r]},nt=function(e){for(var t=Math.max(e.start-e.overscan,0),r=Math.min(e.end+e.overscan,e.size-1),n=[],s=t;s<=r;s++)n.push(s);return n},it=function(e){var t,r=e.size,n=r===void 0?0:r,s=e.estimateSize,v=s===void 0?et:s,p=e.overscan,w=p===void 0?1:p,C=e.paddingStart,R=C===void 0?0:C,W=e.paddingEnd,Ie=W===void 0?0:W,T=e.parentRef,X=e.horizontal,D=X===void 0?!1:X,Ue=e.scrollToFn,Me=e.useObserver,Le=e.initialRect,Z=e.onScrollElement,ee=e.scrollOffsetFn,te=e.keyExtractor,re=te===void 0?tt:te,ne=e.measureSize,ie=ne===void 0?rt:ne,ae=e.rangeExtractor,le=ae===void 0?nt:ae,$e=D?"width":"height",I=D?"scrollLeft":"scrollTop",h=u.useRef({outerSize:0,scrollOffset:0,measurements:[],totalSize:0}),oe=u.useState(0),ke=oe[0],se=oe[1];h.current.scrollOffset=ke;var Ve=Me||Xe,Fe=Ve(T,Le),He=Fe[$e];h.current.outerSize=He;var E=u.useCallback(function(a){T.current&&(T.current[I]=a)},[T,I]),ce=Ue||E,U=u.useCallback(function(a){ce(a,E)},[E,ce]),ue=u.useState({}),fe=ue[0],H=ue[1],je=u.useCallback(function(){return H({})},[]),M=u.useRef([]),z=u.useMemo(function(){var a=M.current.length>0?Math.min.apply(Math,M.current):0;M.current=[];for(var f=h.current.measurements.slice(0,a),c=a;c<n;c++){var o=re(c),O=fe[o],m=f[c-1]?f[c-1].end:R,x=typeof O=="number"?O:v(c),S=m+x;f[c]={index:c,start:m,size:x,end:S,key:o}}return f},[v,fe,R,n,re]),de=(((t=z[n-1])==null?void 0:t.end)||R)+Ie;h.current.measurements=z,h.current.totalSize=de;var _=Z?Z.current:T.current,j=u.useRef(ee);j.current=ee,F(function(){if(!_){se(0);return}var a=function(c){var o=j.current?j.current(c):_[I];se(o)};return a(),_.addEventListener("scroll",a,{capture:!1,passive:!0}),function(){_.removeEventListener("scroll",a)}},[_,I]);var ve=lt(h.current),me=ve.start,pe=ve.end,K=u.useMemo(function(){return le({start:me,end:pe,overscan:w,size:z.length})},[me,pe,w,z.length,le]),he=u.useRef(ie);he.current=ie;var Ke=u.useMemo(function(){for(var a=[],f=function(m,x){var S=K[m],B=z[S],d=b({},B,{measureRef:function(Re){if(Re){var P=he.current(Re,D);if(P!==d.size){var Oe=h.current.scrollOffset;d.start<Oe&&E(Oe+(P-d.size)),M.current.push(S),H(function(Ae){var Y;return b({},Ae,(Y={},Y[d.key]=P,Y))})}}}});a.push(d)},c=0,o=K.length;c<o;c++)f(c);return a},[K,E,D,z]),xe=u.useRef(!1);F(function(){xe.current&&H({}),xe.current=!0},[v]);var q=u.useCallback(function(a,f){var c=f===void 0?{align:"start"}:f,o=c.align,O=h.current,m=O.scrollOffset,x=O.outerSize;o==="auto"&&(a<=m?o="start":a>=m+x?o="end":o="start"),o==="start"?U(a):o==="end"?U(a-x):o==="center"&&U(a-x/2)},[U]),A=u.useCallback(function(a,f){var c=f===void 0?{align:"auto"}:f,o=c.align,O=Be(c,Ze),m=h.current,x=m.measurements,S=m.scrollOffset,B=m.outerSize,d=x[Math.max(0,Math.min(a,n-1))];if(d){if(o==="auto")if(d.end>=S+B)o="end";else if(d.start<=S)o="start";else return;var ye=o==="center"?d.start+d.size/2:o==="end"?d.end:d.start;q(ye,b({align:o},O))}},[q,n]),qe=u.useCallback(function(a,f){A(a,f),requestAnimationFrame(function(){A(a,f)})},[A]);return{virtualItems:Ke,totalSize:de,scrollToOffset:q,scrollToIndex:qe,measure:je}},at=function(e,t,r,n){for(;e<=t;){var s=(e+t)/2|0,v=r(s);if(v<n)e=s+1;else if(v>n)t=s-1;else return s}return e>0?e-1:0};function lt(i){for(var e=i.measurements,t=i.outerSize,r=i.scrollOffset,n=e.length-1,s=function(C){return e[C].start},v=at(0,n,s,r),p=v;p<n&&e[p].end<r+t;)p++;return{start:v,end:p}}const N=({count:i,Component:e})=>{const t=u.useRef(null),r=it({size:i,parentRef:t});return l("div",{ref:t,style:{flex:1,overflow:"auto"},children:l("div",{style:{height:`${r.totalSize}px`,width:"100%",position:"relative"},children:r.virtualItems.map(n=>l("div",{ref:n.measureRef,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${n.start}px)`},children:l(e,{index:n.index})},n.key))})})};try{N.displayName="ReactVirtualList",N.__docgenInfo={description:"",displayName:"ReactVirtualList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}}}}}catch{}const ft={component:G},$={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[l("div",{style:{flex:1},children:"virtua"}),l("div",{style:{flex:1},children:"react-virtual"})]}),l("div",{style:{display:"flex",flexDirection:"row"},children:l(J,{count:1e4})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[l(Q,{count:1e4,Component:G}),l(N,{count:1e4,Component:G})]})]})},k={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[l("div",{style:{flex:1},children:"virtua"}),l("div",{style:{flex:1},children:"react-virtual"})]}),l("div",{style:{display:"flex",flexDirection:"row"},children:l(J,{count:1e4})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[l(Q,{count:1e4,Component:ge}),l(N,{count:1e4,Component:ge})]})]})},V={render:()=>y("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[y("div",{style:{display:"flex",flexDirection:"row"},children:[l("div",{style:{flex:1},children:"virtua"}),l("div",{style:{flex:1},children:"react-virtual"})]}),l("div",{style:{display:"flex",flexDirection:"row"},children:l(J,{count:1e6})}),y("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[l(Q,{count:1e6,Component:Ce}),l(N,{count:1e6,Component:Ce})]})]})};var Se,we,ze;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />
          <ReactVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(ze=(we=$.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Te,Ee,_e;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={HeavyItem} />
          <ReactVirtualList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(_e=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var be,Ne,We;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={SimpleItem} />
          <ReactVirtualList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(We=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};const dt=["DynamicHeight","HeavyComponent","OneMillion"];export{$ as DynamicHeight,k as HeavyComponent,V as OneMillion,dt as __namedExportsOrder,ft as default};
//# sourceMappingURL=react-virtual.stories-999245fb.js.map
