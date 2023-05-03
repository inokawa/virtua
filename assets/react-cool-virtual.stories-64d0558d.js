import{j as f,a as z}from"./jsx-runtime-c3d7f245.js";import{I as xe,S as Ce,V as Se,H as Pe,a as Ge}from"./virtua-cbc9a237.js";import{r as i}from"./index-c6dae603.js";import"./index-778f7dbf.js";var U;(function(r){r.auto="auto",r.start="start",r.center="center",r.end="end"})(U||(U={}));var Je=function(r,a,s,p){for(;r<=a;){var l=(r+a)/2|0,d=p(l);if(s<d)a=l-1;else if(s>d)r=l+1;else return l}return r>0?r-1:0},_=function(r){return typeof r=="number"&&!Number.isNaN(r)},ue=function(){return"performance"in window?performance.now():Date.now()},pr=function(r,a,s){if(r.length!==a.length)return!0;for(var p=function(x){if(Object.keys(r[x]).some(function(M){var A=M;return!s[A]&&r[x][A]!==a[x][A]}))return{v:!0}},l=0;l<r.length;l+=1){var d=p(l);if(typeof d=="object")return d.v}return!1},D=function(r){var a=i.useRef(r);return a.current=r,a},Rr=function(r,a){var s=i.useRef(),p=D(r),l=i.useCallback(function(){s.current&&(cancelAnimationFrame(s.current),s.current=void 0)},[]),d=i.useCallback(function(x){ue()-x>=a?p.current():s.current=requestAnimationFrame(function(){return d(x)})},[p,a]),g=i.useCallback(function(){l(),d(ue())},[l,d]);return[g,l]},ye=typeof window<"u"?i.useLayoutEffect:i.useEffect,xr=function(r,a,s){var p=D(a);ye(function(){if(!(r!=null&&r.current))return function(){return null};var l=new ResizeObserver(function(d){var g=d[0].contentRect,x=g.width,M=g.height;p.current({width:x,height:M})});return l.observe(r.current),function(){return l.disconnect()}},[p,r].concat(s))},yr=function(a,s){s===void 0&&(s=0);for(var p=_(s)?[0,s-1]:s,l=p[0],d=p[1],g=[],x=l;x<=d;x+=1)g.push({index:x,start:0,width:0,size:_(a)?a:a(x,0),measureRef:function(){return null}});return{items:g}},Cr=function(r){var a=r.itemCount,s=r.ssrItemCount,p=r.itemSize,l=p===void 0?50:p,d=r.horizontal,g=r.resetScroll,x=r.overscanCount,M=x===void 0?1:x,A=r.useIsScrolling,ar=r.stickyIndices,ge=r.scrollDuration,or=ge===void 0?function(n){return Math.min(Math.max(n*.075,100),500)}:ge,Oe=r.scrollEasingFunction,ur=Oe===void 0?function(n){return-(Math.cos(Math.PI*n)-1)/2}:Oe,we=r.loadMoreCount,q=we===void 0?15:we,lr=r.isItemLoaded,cr=r.loadMore,sr=r.onScroll,fr=r.onResize,Ie=i.useState(function(){return yr(l,s)}),L=Ie[0],De=Ie[1],le=i.useRef(!1),ce=i.useRef(!0),se=i.useRef(!1),k=i.useRef(!1),Q=i.useRef(new Map),I=i.useRef(0),_e=i.useRef(-1),Te=i.useRef(-1),j=i.useRef(null),X=i.useRef(null),V=i.useRef({width:0,height:0}),S=i.useRef([]),Y=i.useRef(!0),K=i.useRef(),fe=D(ar),ze=D(or),Me=D(ur),B=D(lr),P=D(cr),Ne=D(l),We=D(A),de=D(sr),ve=D(fr),N=d?"width":"height",be=d?"marginLeft":"marginTop",Z=d?"scrollLeft":"scrollTop",Ue=i.useCallback(function(n){var e=Ne.current;return _(e)?e:e(n,V.current.width)},[Ne]),ee=i.useCallback(function(n,e){var o,t,u=(o=(t=S.current[n-1])==null?void 0:t.end)!=null?o:0;return{idx:n,start:u,end:u+e,size:e}},[]),re=i.useCallback(function(n){n===void 0&&(n=!0),S.current.length=a;for(var e=0;e<a;e+=1)S.current[e]=ee(e,n&&S.current[e]?S.current[e].size:Ue(e))},[Ue,ee,a]),Le=i.useCallback(function(n){var e=S.current,o=e.length-1,t=0;if(k.current)for(;t<o&&e[t].start+e[t].size<n;)t+=1;else t=Je(0,o,n,function(m){return e[m].start});for(var u=t,R=e[u].start;u<o&&R<n+V.current[N];)R+=e[u].size,u+=1;u=u===o?u:u-1;var v=Math.max(t-M,0),c=Math.min(u+M,o),y=e[v].start,h=Math[c<o?"max":"min"](e[c].end+e[c].size,e[o].end);return{oStart:v,oStop:c,vStart:t,vStop:u,innerMargin:y,innerSize:h-y}},[M,N]),W=i.useCallback(function(n,e){e===void 0&&(e=!0),j.current&&(Y.current=!1,ce.current=e,j.current[Z]=n)},[Z]),me=i.useCallback(function(n,e){var o=_(n)?{offset:n}:n,t=o.offset,u=o.smooth;if(_(t)){if(!u){W(t),e&&e();return}var R=I.current,v=ue(),c=function y(){var h=ze.current;h=_(h)?h:h(Math.abs(t-R));var m=Math.min((ue()-v)/h,1),w=Me.current(m);W(w*(t-R)+R),m<1?K.current=requestAnimationFrame(y):e&&e()};K.current=requestAnimationFrame(c)}},[ze,Me,W]),E=i.useCallback(function(n,e,o){var t=_(n)?{index:n}:n,u=t.index,R=t.align,v=R===void 0?U.auto:R,c=t.smooth;if(_(u)){se.current=!0,k.current&&re();var y=S.current,h=y[Math.max(0,Math.min(u,y.length-1))];if(h){var m=h.start,w=h.end,F=h.size,T=y[y.length-1].end,C=V.current[N],O=I.current;if(T<=C){e&&e();return}if(o||v===U.start||v===U.auto&&O+C>w&&O>m)O=T-m<=C?T-C:m;else if(v===U.end||v===U.auto&&O+C<w&&O<m)O=m+F<=C?0:m-C+F;else if(v===U.center&&m+F/2>C/2){var G=m-C/2+F/2;O=T-G<=C?T-C:G}if(k.current&&Math.abs(O-I.current)<=1){e&&e();return}me({offset:O,smooth:c},function(){k.current?o?requestAnimationFrame(function(){return E(n,e,o)}):setTimeout(function(){return E(n,e)}):e&&e()})}}},[re,me,N]),dr=i.useCallback(function(n,e){return E(n,e)},[E]),vr=i.useCallback(function(n,e){return E(n,e,!0)},[E]),ke=Rr(function(){return $(I.current)},150),Ve=ke[0],Ee=ke[1],$=i.useCallback(function(n,e,o){if(P.current&&!le.current&&!(B.current&&B.current(0))&&P.current({startIndex:0,stopIndex:q-1,loadIndex:0,scrollOffset:n,userScroll:!1}),!a){De({items:[]});return}for(var t=Le(n),u=t.oStart,R=t.oStop,v=t.vStart,c=t.vStop,y=t.innerMargin,h=t.innerSize,m=[],w=Array.isArray(fe.current)?fe.current:[],F=function(b){var Fe=S.current,He=Fe[b],pe=He.start,Re=He.size;m.push({index:b,start:pe-y,size:Re,width:V.current.width,isScrolling:o||void 0,isSticky:w.includes(b)||void 0,measureRef:function(Ae){Ae&&new ResizeObserver(function(mr,qe){var je,Ke,Be,ne=mr[0].target,te=ne.getBoundingClientRect()[N];if(!te){qe.disconnect(),Q.current.delete(ne);return}var hr=(je=(Ke=Fe[b-1])==null?void 0:Ke.end)!=null?je:0;(te!==Re||pe!==hr)&&(b<_e.current&&pe<n&&W(n+te-Re,!1),S.current[b]=ee(b,te),se.current||$(I.current,e,o),k.current=!0),_e.current=b,(Be=Q.current.get(ne))==null||Be.disconnect(),Q.current.set(ne,qe)}).observe(Ae)}})},T=u;T<=R;T+=1)F(T);if(w.length){var C=w[Je(0,w.length-1,v,function(H){return w[H]})];if(u>C){var O=S.current[C].size;m.unshift({index:C,start:0,size:O,width:V.current.width,isScrolling:o||void 0,isSticky:!0,measureRef:function(){return null}}),y-=O,h+=O}}if(De(function(H){return pr(H.items,m,{measureRef:!0})?{items:m,innerMargin:y,innerSize:h}:H}),!!e){var G=n>I.current;de.current&&de.current({overscanStartIndex:u,overscanStopIndex:R,visibleStartIndex:v,visibleStopIndex:c,scrollOffset:n,scrollForward:G,userScroll:Y.current});var he=Math.max(Math.floor((c+1)/q)-(G?0:1),0),$e=he*q;P.current&&c!==Te.current&&!(B.current&&B.current(he))&&P.current({startIndex:$e,stopIndex:$e+q-1,loadIndex:he,scrollOffset:n,userScroll:Y.current}),o&&Ve(),Te.current=c}},[fe,Le,ee,a,q,P,de,Ve,W,N,B]);return xr(j,function(n){var e,o=V.current,t=o.width,u=o.height,R=t===n.width,v=R&&u===n.height,c=S.current.length,y=(e=S.current[c-1])==null?void 0:e.end;if(V.current=n,re(k.current),$(I.current),g&&a!==c&&setTimeout(function(){return W(0,!1)}),!le.current){le.current=!0;return}if(!k.current&&!R){var h,m=(h=S.current[S.current.length-1])==null?void 0:h.end,w=m/y||1;W(I.current*w,!1)}!v&&ve.current&&ve.current(n)},[a,g,$,re,ve,W]),ye(function(){X.current&&(_(L.innerMargin)&&(X.current.style[be]=L.innerMargin+"px"),_(L.innerSize)&&(X.current.style[N]=L.innerSize+"px"))},[be,N,L.innerMargin,L.innerSize]),ye(function(){var n=j.current;if(!n)return function(){return null};var e=function(u){var R=u.target,v=R[Z];if(v!==I.current){var c=We.current;c=typeof c=="function"?c(Math.abs(v-I.current)):c,$(v,ce.current,c),Y.current=!0,ce.current=!0,se.current=!1,I.current=v}};n.addEventListener("scroll",e,{passive:!0});var o=Q.current;return function(){Ee(),K.current&&(cancelAnimationFrame(K.current),K.current=void 0),n.removeEventListener("scroll",e),o.forEach(function(t){return t.disconnect()}),o.clear()}},[Ee,$,Z,We]),{outerRef:j,innerRef:X,items:L.items,scrollTo:me,scrollToItem:dr,startItem:vr}};const J=({count:r,Component:a})=>{const{outerRef:s,innerRef:p,items:l}=Cr({itemCount:r});return f("div",{ref:s,style:{flex:1,overflow:"auto"},children:f("div",{ref:p,children:l.map(({index:d,measureRef:g})=>f(a,{index:d,ref:g},d))})})};try{J.displayName="ReactCoolVirtualList",J.__docgenInfo={description:"",displayName:"ReactCoolVirtualList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}}}}}catch{}const Dr={component:xe},ie={render:()=>z("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[z("div",{style:{display:"flex",flexDirection:"row"},children:[f("div",{style:{flex:1},children:"virtua"}),f("div",{style:{flex:1},children:"react-cool-virtual"})]}),f("div",{style:{display:"flex",flexDirection:"row"},children:f(Ce,{count:1e4})}),z("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[f(Se,{count:1e4,Component:xe}),f(J,{count:1e4,Component:xe})]})]})},ae={render:()=>z("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[z("div",{style:{display:"flex",flexDirection:"row"},children:[f("div",{style:{flex:1},children:"virtua"}),f("div",{style:{flex:1},children:"react-cool-virtual"})]}),f("div",{style:{display:"flex",flexDirection:"row"},children:f(Ce,{count:1e4})}),z("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[f(Se,{count:1e4,Component:Pe}),f(J,{count:1e4,Component:Pe})]})]})},oe={render:()=>z("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[z("div",{style:{display:"flex",flexDirection:"row"},children:[f("div",{style:{flex:1},children:"virtua"}),f("div",{style:{flex:1},children:"react-cool-virtual"})]}),f("div",{style:{display:"flex",flexDirection:"row"},children:f(Ce,{count:1e6})}),z("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[f(Se,{count:1e6,Component:Ge}),f(J,{count:1e6,Component:Ge})]})]})};var Qe,Xe,Ye;ie.parameters={...ie.parameters,docs:{...(Qe=ie.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
        }}>react-cool-virtual</div>
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
          <ReactCoolVirtualList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(Ye=(Xe=ie.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,er,rr;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
        }}>react-cool-virtual</div>
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
          <ReactCoolVirtualList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(rr=(er=ae.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,tr,ir;oe.parameters={...oe.parameters,docs:{...(nr=oe.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
        }}>react-cool-virtual</div>
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
          <ReactCoolVirtualList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(ir=(tr=oe.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};const _r=["DynamicHeight","HeavyComponent","OneMillion"];export{ie as DynamicHeight,ae as HeavyComponent,oe as OneMillion,_r as __namedExportsOrder,Dr as default};
//# sourceMappingURL=react-cool-virtual.stories-64d0558d.js.map
