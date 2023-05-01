import{a as T,j as s}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{S as Re,I as Be,H as Pe,a as Ge}from"./components-5c370efa.js";import{L as ye}from"./List-beca73a7.js";var k;(function(r){r.auto="auto",r.start="start",r.center="center",r.end="end"})(k||(k={}));var Je=function(r,a,o,x){for(;r<=a;){var c=(r+a)/2|0,d=x(c);if(o<d)a=c-1;else if(o>d)r=c+1;else return c}return r>0?r-1:0},_=function(r){return typeof r=="number"&&!Number.isNaN(r)},oe=function(){return"performance"in window?performance.now():Date.now()},pr=function(r,a,o){if(r.length!==a.length)return!0;for(var x=function(R){if(Object.keys(r[R]).some(function(M){var V=M;return!o[V]&&r[R][V]!==a[R][V]}))return{v:!0}},c=0;c<r.length;c+=1){var d=x(c);if(typeof d=="object")return d.v}return!1},D=function(r){var a=i.useRef(r);return a.current=r,a},Rr=function(r,a){var o=i.useRef(),x=D(r),c=i.useCallback(function(){o.current&&(cancelAnimationFrame(o.current),o.current=void 0)},[]),d=i.useCallback(function(R){oe()-R>=a?x.current():o.current=requestAnimationFrame(function(){return d(R)})},[x,a]),C=i.useCallback(function(){c(),d(oe())},[c,d]);return[C,c]},pe=typeof window<"u"?i.useLayoutEffect:i.useEffect,yr=function(r,a,o){var x=D(a);pe(function(){if(!(r!=null&&r.current))return function(){return null};var c=new ResizeObserver(function(d){var C=d[0].contentRect,R=C.width,M=C.height;x.current({width:R,height:M})});return c.observe(r.current),function(){return c.disconnect()}},[x,r].concat(o))},gr=function(a,o){o===void 0&&(o=0);for(var x=_(o)?[0,o-1]:o,c=x[0],d=x[1],C=[],R=c;R<=d;R+=1)C.push({index:R,start:0,width:0,size:_(a)?a:a(R,0),measureRef:function(){return null}});return{items:C}},ar=function(r){var a=r.itemCount,o=r.ssrItemCount,x=r.itemSize,c=x===void 0?50:x,d=r.horizontal,C=r.resetScroll,R=r.overscanCount,M=R===void 0?1:R,V=r.useIsScrolling,or=r.stickyIndices,Se=r.scrollDuration,lr=Se===void 0?function(n){return Math.min(Math.max(n*.075,100),500)}:Se,Ce=r.scrollEasingFunction,ur=Ce===void 0?function(n){return-(Math.cos(Math.PI*n)-1)/2}:Ce,Oe=r.loadMoreCount,j=Oe===void 0?15:Oe,sr=r.isItemLoaded,cr=r.loadMore,fr=r.onScroll,dr=r.onResize,we=i.useState(function(){return gr(c,o)}),L=we[0],Ie=we[1],le=i.useRef(!1),ue=i.useRef(!0),se=i.useRef(!1),b=i.useRef(!1),J=i.useRef(new Map),I=i.useRef(0),De=i.useRef(-1),_e=i.useRef(-1),q=i.useRef(null),Q=i.useRef(null),$=i.useRef({width:0,height:0}),S=i.useRef([]),X=i.useRef(!0),K=i.useRef(),ce=D(or),ze=D(lr),Te=D(ur),B=D(sr),P=D(cr),Me=D(c),Ne=D(V),fe=D(fr),de=D(dr),N=d?"width":"height",We=d?"marginLeft":"marginTop",Y=d?"scrollLeft":"scrollTop",Ue=i.useCallback(function(n){var e=Me.current;return _(e)?e:e(n,$.current.width)},[Me]),Z=i.useCallback(function(n,e){var l,t,u=(l=(t=S.current[n-1])==null?void 0:t.end)!=null?l:0;return{idx:n,start:u,end:u+e,size:e}},[]),ee=i.useCallback(function(n){n===void 0&&(n=!0),S.current.length=a;for(var e=0;e<a;e+=1)S.current[e]=Z(e,n&&S.current[e]?S.current[e].size:Ue(e))},[Ue,Z,a]),ke=i.useCallback(function(n){var e=S.current,l=e.length-1,t=0;if(b.current)for(;t<l&&e[t].start+e[t].size<n;)t+=1;else t=Je(0,l,n,function(m){return e[m].start});for(var u=t,p=e[u].start;u<l&&p<n+$.current[N];)p+=e[u].size,u+=1;u=u===l?u:u-1;var v=Math.max(t-M,0),f=Math.min(u+M,l),y=e[v].start,h=Math[f<l?"max":"min"](e[f].end+e[f].size,e[l].end);return{oStart:v,oStop:f,vStart:t,vStop:u,innerMargin:y,innerSize:h-y}},[M,N]),W=i.useCallback(function(n,e){e===void 0&&(e=!0),q.current&&(X.current=!1,ue.current=e,q.current[Y]=n)},[Y]),ve=i.useCallback(function(n,e){var l=_(n)?{offset:n}:n,t=l.offset,u=l.smooth;if(_(t)){if(!u){W(t),e&&e();return}var p=I.current,v=oe(),f=function y(){var h=ze.current;h=_(h)?h:h(Math.abs(t-p));var m=Math.min((oe()-v)/h,1),w=Te.current(m);W(w*(t-p)+p),m<1?K.current=requestAnimationFrame(y):e&&e()};K.current=requestAnimationFrame(f)}},[ze,Te,W]),E=i.useCallback(function(n,e,l){var t=_(n)?{index:n}:n,u=t.index,p=t.align,v=p===void 0?k.auto:p,f=t.smooth;if(_(u)){se.current=!0,b.current&&ee();var y=S.current,h=y[Math.max(0,Math.min(u,y.length-1))];if(h){var m=h.start,w=h.end,F=h.size,z=y[y.length-1].end,g=$.current[N],O=I.current;if(z<=g){e&&e();return}if(l||v===k.start||v===k.auto&&O+g>w&&O>m)O=z-m<=g?z-g:m;else if(v===k.end||v===k.auto&&O+g<w&&O<m)O=m+F<=g?0:m-g+F;else if(v===k.center&&m+F/2>g/2){var G=m-g/2+F/2;O=z-G<=g?z-g:G}if(b.current&&Math.abs(O-I.current)<=1){e&&e();return}ve({offset:O,smooth:f},function(){b.current?l?requestAnimationFrame(function(){return E(n,e,l)}):setTimeout(function(){return E(n,e)}):e&&e()})}}},[ee,ve,N]),vr=i.useCallback(function(n,e){return E(n,e)},[E]),mr=i.useCallback(function(n,e){return E(n,e,!0)},[E]),Le=Rr(function(){return A(I.current)},150),be=Le[0],$e=Le[1],A=i.useCallback(function(n,e,l){if(P.current&&!le.current&&!(B.current&&B.current(0))&&P.current({startIndex:0,stopIndex:j-1,loadIndex:0,scrollOffset:n,userScroll:!1}),!a){Ie({items:[]});return}for(var t=ke(n),u=t.oStart,p=t.oStop,v=t.vStart,f=t.vStop,y=t.innerMargin,h=t.innerSize,m=[],w=Array.isArray(ce.current)?ce.current:[],F=function(U){var Ae=S.current,Fe=Ae[U],he=Fe.start,xe=Fe.size;m.push({index:U,start:he-y,size:xe,width:$.current.width,isScrolling:l||void 0,isSticky:w.includes(U)||void 0,measureRef:function(He){He&&new ResizeObserver(function(hr,Ve){var je,qe,Ke,re=hr[0].target,ne=re.getBoundingClientRect()[N];if(!ne){Ve.disconnect(),J.current.delete(re);return}var xr=(je=(qe=Ae[U-1])==null?void 0:qe.end)!=null?je:0;(ne!==xe||he!==xr)&&(U<De.current&&he<n&&W(n+ne-xe,!1),S.current[U]=Z(U,ne),se.current||A(I.current,e,l),b.current=!0),De.current=U,(Ke=J.current.get(re))==null||Ke.disconnect(),J.current.set(re,Ve)}).observe(He)}})},z=u;z<=p;z+=1)F(z);if(w.length){var g=w[Je(0,w.length-1,v,function(H){return w[H]})];if(u>g){var O=S.current[g].size;m.unshift({index:g,start:0,size:O,width:$.current.width,isScrolling:l||void 0,isSticky:!0,measureRef:function(){return null}}),y-=O,h+=O}}if(Ie(function(H){return pr(H.items,m,{measureRef:!0})?{items:m,innerMargin:y,innerSize:h}:H}),!!e){var G=n>I.current;fe.current&&fe.current({overscanStartIndex:u,overscanStopIndex:p,visibleStartIndex:v,visibleStopIndex:f,scrollOffset:n,scrollForward:G,userScroll:X.current});var me=Math.max(Math.floor((f+1)/j)-(G?0:1),0),Ee=me*j;P.current&&f!==_e.current&&!(B.current&&B.current(me))&&P.current({startIndex:Ee,stopIndex:Ee+j-1,loadIndex:me,scrollOffset:n,userScroll:X.current}),l&&be(),_e.current=f}},[ce,ke,Z,a,j,P,fe,be,W,N,B]);return yr(q,function(n){var e,l=$.current,t=l.width,u=l.height,p=t===n.width,v=p&&u===n.height,f=S.current.length,y=(e=S.current[f-1])==null?void 0:e.end;if($.current=n,ee(b.current),A(I.current),C&&a!==f&&setTimeout(function(){return W(0,!1)}),!le.current){le.current=!0;return}if(!b.current&&!p){var h,m=(h=S.current[S.current.length-1])==null?void 0:h.end,w=m/y||1;W(I.current*w,!1)}!v&&de.current&&de.current(n)},[a,C,A,ee,de,W]),pe(function(){Q.current&&(_(L.innerMargin)&&(Q.current.style[We]=L.innerMargin+"px"),_(L.innerSize)&&(Q.current.style[N]=L.innerSize+"px"))},[We,N,L.innerMargin,L.innerSize]),pe(function(){var n=q.current;if(!n)return function(){return null};var e=function(u){var p=u.target,v=p[Y];if(v!==I.current){var f=Ne.current;f=typeof f=="function"?f(Math.abs(v-I.current)):f,A(v,ue.current,f),X.current=!0,ue.current=!0,se.current=!1,I.current=v}};n.addEventListener("scroll",e,{passive:!0});var l=J.current;return function(){$e(),K.current&&(cancelAnimationFrame(K.current),K.current=void 0),n.removeEventListener("scroll",e),l.forEach(function(t){return t.disconnect()}),l.clear()}},[$e,A,Y,Ne]),{outerRef:q,innerRef:Q,items:L.items,scrollTo:ve,scrollToItem:vr,startItem:mr}};const Dr={component:ar},ge=({count:r,Component:a})=>{const{outerRef:o,innerRef:x,items:c}=ar({itemCount:r});return s("div",{ref:o,style:{flex:1,overflow:"auto"},children:s("div",{ref:x,children:c.map(({index:d,measureRef:C})=>s(a,{index:d,ref:C},d))})})},te={render:()=>T("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[T("div",{style:{display:"flex",flexDirection:"row"},children:[s("div",{style:{flex:1},children:"virtua"}),s("div",{style:{flex:1},children:"react-cool-virtual"})]}),s("div",{style:{display:"flex",flexDirection:"row"},children:s(Re,{count:1e4})}),T("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[s(ye,{style:{flex:1},children:Array.from({length:1e4}).map((a,o)=>s(Be,{index:o},o))}),s(ge,{count:1e4,Component:Be})]})]})},ie={render:()=>T("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[T("div",{style:{display:"flex",flexDirection:"row"},children:[s("div",{style:{flex:1},children:"virtua"}),s("div",{style:{flex:1},children:"react-cool-virtual"})]}),s("div",{style:{display:"flex",flexDirection:"row"},children:s(Re,{count:1e4})}),T("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[s(ye,{style:{flex:1},children:Array.from({length:1e4}).map((a,o)=>s(Pe,{index:o},o))}),s(ge,{count:1e4,Component:Pe})]})]})},ae={render:()=>T("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[T("div",{style:{display:"flex",flexDirection:"row"},children:[s("div",{style:{flex:1},children:"virtua"}),s("div",{style:{flex:1},children:"react-cool-virtual"})]}),s("div",{style:{display:"flex",flexDirection:"row"},children:s(Re,{count:1e6})}),T("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8,overflow:"hidden"},children:[s(ye,{style:{flex:1},children:Array.from({length:1e6}).map((a,o)=>s(Ge,{index:o},o))}),s(ge,{count:1e6,Component:Ge})]})]})};var Qe,Xe,Ye;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,er,rr;ie.parameters={...ie.parameters,docs:{...(Ze=ie.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(rr=(er=ie.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var nr,tr,ir;ae.parameters={...ae.parameters,docs:{...(nr=ae.parameters)==null?void 0:nr.docs,source:{originalSource:`{
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
}`,...(ir=(tr=ae.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};const _r=["DynamicHeight","HeavyComponent","OneMillion"];export{te as DynamicHeight,ie as HeavyComponent,ae as OneMillion,_r as __namedExportsOrder,Dr as default};
//# sourceMappingURL=react-cool-virtual.stories-70d81b8c.js.map
