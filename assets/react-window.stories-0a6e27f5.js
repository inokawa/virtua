import{a as R,j as h}from"./jsx-runtime-6c4ce591.js";import{r as M}from"./index-fcd6345f.js";import{A as Oe}from"./AutoSizer-90720e8c.js";import{a as V,_ as _e}from"./assertThisInitialized-60dddfb4.js";import{_ as Ce}from"./inheritsLoose-495bf4f7.js";import{S as F,I as G,H as Z,a as J}from"./components-4e89d67d.js";import{L as H}from"./List-8262a6be.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";var Q=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Te(r,t){return!!(r===t||Q(r)&&Q(t))}function we(r,t){if(r.length!==t.length)return!1;for(var n=0;n<r.length;n++)if(!Te(r[n],t[n]))return!1;return!0}function k(r,t){t===void 0&&(t=we);var n,i=[],o,c=!1;function s(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return c&&n===this&&t(d,i)||(o=r.apply(this,d),c=!0,n=this,i=d),o}return s}var Re=typeof performance=="object"&&typeof performance.now=="function",X=Re?function(){return performance.now()}:function(){return Date.now()};function Y(r){cancelAnimationFrame(r.id)}function Me(r,t){var n=X();function i(){X()-n>=t?r.call(null):o.id=requestAnimationFrame(i)}var o={id:requestAnimationFrame(i)};return o}var P=-1;function ee(r){if(r===void 0&&(r=!1),P===-1||r){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),P=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return P}var z=null;function te(r){if(r===void 0&&(r=!1),z===null||r){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var i=document.createElement("div"),o=i.style;return o.width="100px",o.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?z="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?z="negative":z="positive-ascending"),document.body.removeChild(t),z}return z}var ze=150,We=function(t,n){return t};function Ne(r){var t,n=r.getItemOffset,i=r.getEstimatedTotalSize,o=r.getItemSize,c=r.getOffsetForIndexAndAlignment,s=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,v=r.initInstanceProps,I=r.shouldResetStyleCacheOnItemSizeChange,O=r.validateProps;return t=function(C){Ce(_,C);function _(x){var e;return e=C.call(this,x)||this,e._instanceProps=v(e.props,V(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:V(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=k(function(l,a,u,m){return e.props.onItemsRendered({overscanStartIndex:l,overscanStopIndex:a,visibleStartIndex:u,visibleStopIndex:m})}),e._callOnScroll=void 0,e._callOnScroll=k(function(l,a,u){return e.props.onScroll({scrollDirection:l,scrollOffset:a,scrollUpdateWasRequested:u})}),e._getItemStyle=void 0,e._getItemStyle=function(l){var a=e.props,u=a.direction,m=a.itemSize,y=a.layout,f=e._getItemStyleCache(I&&m,I&&y,I&&u),p;if(f.hasOwnProperty(l))p=f[l];else{var g=n(e.props,l,e._instanceProps),T=o(e.props,l,e._instanceProps),w=u==="horizontal"||y==="horizontal",D=u==="rtl",U=w?g:0;f[l]=p={position:"absolute",left:D?void 0:U,right:D?U:void 0,top:w?0:g,height:w?"100%":T,width:w?T:"100%"}}return p},e._getItemStyleCache=void 0,e._getItemStyleCache=k(function(l,a,u){return{}}),e._onScrollHorizontal=function(l){var a=l.currentTarget,u=a.clientWidth,m=a.scrollLeft,y=a.scrollWidth;e.setState(function(f){if(f.scrollOffset===m)return null;var p=e.props.direction,g=m;if(p==="rtl")switch(te()){case"negative":g=-m;break;case"positive-descending":g=y-u-m;break}return g=Math.max(0,Math.min(g,y-u)),{isScrolling:!0,scrollDirection:f.scrollOffset<m?"forward":"backward",scrollOffset:g,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(l){var a=l.currentTarget,u=a.clientHeight,m=a.scrollHeight,y=a.scrollTop;e.setState(function(f){if(f.scrollOffset===y)return null;var p=Math.max(0,Math.min(y,m-u));return{isScrolling:!0,scrollDirection:f.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(l){var a=e.props.outerRef;e._outerRef=l,typeof a=="function"?a(l):a!=null&&typeof a=="object"&&a.hasOwnProperty("current")&&(a.current=l)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&Y(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=Me(e._resetIsScrolling,ze)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}_.getDerivedStateFromProps=function(e,l){return De(e,l),O(e),null};var S=_.prototype;return S.scrollTo=function(e){e=Math.max(0,e),this.setState(function(l){return l.scrollOffset===e?null:{scrollDirection:l.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},S.scrollToItem=function(e,l){l===void 0&&(l="auto");var a=this.props,u=a.itemCount,m=a.layout,y=this.state.scrollOffset;e=Math.max(0,Math.min(e,u-1));var f=0;if(this._outerRef){var p=this._outerRef;m==="vertical"?f=p.scrollWidth>p.clientWidth?ee():0:f=p.scrollHeight>p.clientHeight?ee():0}this.scrollTo(c(this.props,e,l,y,this._instanceProps,f))},S.componentDidMount=function(){var e=this.props,l=e.direction,a=e.initialScrollOffset,u=e.layout;if(typeof a=="number"&&this._outerRef!=null){var m=this._outerRef;l==="horizontal"||u==="horizontal"?m.scrollLeft=a:m.scrollTop=a}this._callPropsCallbacks()},S.componentDidUpdate=function(){var e=this.props,l=e.direction,a=e.layout,u=this.state,m=u.scrollOffset,y=u.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var f=this._outerRef;if(l==="horizontal"||a==="horizontal")if(l==="rtl")switch(te()){case"negative":f.scrollLeft=-m;break;case"positive-ascending":f.scrollLeft=m;break;default:var p=f.clientWidth,g=f.scrollWidth;f.scrollLeft=g-p-m;break}else f.scrollLeft=m;else f.scrollTop=m}this._callPropsCallbacks()},S.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Y(this._resetIsScrollingTimeoutId)},S.render=function(){var e=this.props,l=e.children,a=e.className,u=e.direction,m=e.height,y=e.innerRef,f=e.innerElementType,p=e.innerTagName,g=e.itemCount,T=e.itemData,w=e.itemKey,D=w===void 0?We:w,U=e.layout,he=e.outerElementType,ve=e.outerTagName,pe=e.style,ye=e.useIsScrolling,ge=e.width,q=this.state.isScrolling,A=u==="horizontal"||U==="horizontal",xe=A?this._onScrollHorizontal:this._onScrollVertical,j=this._getRangeToRender(),Ie=j[0],Se=j[1],B=[];if(g>0)for(var N=Ie;N<=Se;N++)B.push(M.createElement(l,{data:T,key:D(N,T),index:N,isScrolling:ye?q:void 0,style:this._getItemStyle(N)}));var K=i(this.props,this._instanceProps);return M.createElement(he||ve||"div",{className:a,onScroll:xe,ref:this._outerRefSetter,style:_e({position:"relative",height:m,width:ge,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:u},pe)},M.createElement(f||p||"div",{children:B,ref:y,style:{height:A?"100%":K,pointerEvents:q?"none":void 0,width:A?K:"100%"}}))},S._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var l=this._getRangeToRender(),a=l[0],u=l[1],m=l[2],y=l[3];this._callOnItemsRendered(a,u,m,y)}}if(typeof this.props.onScroll=="function"){var f=this.state,p=f.scrollDirection,g=f.scrollOffset,T=f.scrollUpdateWasRequested;this._callOnScroll(p,g,T)}},S._getRangeToRender=function(){var e=this.props,l=e.itemCount,a=e.overscanCount,u=this.state,m=u.isScrolling,y=u.scrollDirection,f=u.scrollOffset;if(l===0)return[0,0,0,0];var p=s(this.props,f,this._instanceProps),g=d(this.props,p,f,this._instanceProps),T=!m||y==="backward"?Math.max(1,a):1,w=!m||y==="forward"?Math.max(1,a):1;return[Math.max(0,p-T),Math.max(0,Math.min(l-1,g+w)),p,g]},_}(M.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var De=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},Ue=50,W=function(t,n,i){var o=t,c=o.itemSize,s=i.itemMetadataMap,d=i.lastMeasuredIndex;if(n>d){var v=0;if(d>=0){var I=s[d];v=I.offset+I.size}for(var O=d+1;O<=n;O++){var C=c(O);s[O]={offset:v,size:C},v+=C}i.lastMeasuredIndex=n}return s[n]},be=function(t,n,i){var o=n.itemMetadataMap,c=n.lastMeasuredIndex,s=c>0?o[c].offset:0;return s>=i?ue(t,n,c,0,i):Le(t,n,Math.max(0,c),i)},ue=function(t,n,i,o,c){for(;o<=i;){var s=o+Math.floor((i-o)/2),d=W(t,s,n).offset;if(d===c)return s;d<c?o=s+1:d>c&&(i=s-1)}return o>0?o-1:0},Le=function(t,n,i,o){for(var c=t.itemCount,s=1;i<c&&W(t,i,n).offset<o;)i+=s,s*=2;return ue(t,n,Math.min(i,c-1),Math.floor(i/2),o)},ne=function(t,n){var i=t.itemCount,o=n.itemMetadataMap,c=n.estimatedItemSize,s=n.lastMeasuredIndex,d=0;if(s>=i&&(s=i-1),s>=0){var v=o[s];d=v.offset+v.size}var I=i-s-1,O=I*c;return d+O},me=Ne({getItemOffset:function(t,n,i){return W(t,n,i).offset},getItemSize:function(t,n,i){return i.itemMetadataMap[n].size},getEstimatedTotalSize:ne,getOffsetForIndexAndAlignment:function(t,n,i,o,c,s){var d=t.direction,v=t.height,I=t.layout,O=t.width,C=d==="horizontal"||I==="horizontal",_=C?O:v,S=W(t,n,c),x=ne(t,c),e=Math.max(0,Math.min(x-_,S.offset)),l=Math.max(0,S.offset-_+S.size+s);switch(i==="smart"&&(o>=l-_&&o<=e+_?i="auto":i="center"),i){case"start":return e;case"end":return l;case"center":return Math.round(l+(e-l)/2);case"auto":default:return o>=l&&o<=e?o:o<l?l:e}},getStartIndexForOffset:function(t,n,i){return be(t,i,n)},getStopIndexForStartIndex:function(t,n,i,o){for(var c=t.direction,s=t.height,d=t.itemCount,v=t.layout,I=t.width,O=c==="horizontal"||v==="horizontal",C=O?I:s,_=W(t,n,o),S=i+C,x=_.offset+_.size,e=n;e<d-1&&x<S;)e++,x+=W(t,e,o).size;return e},initInstanceProps:function(t,n){var i=t,o=i.estimatedItemSize,c={itemMetadataMap:{},estimatedItemSize:o||Ue,lastMeasuredIndex:-1};return n.resetAfterIndex=function(s,d){d===void 0&&(d=!0),c.lastMeasuredIndex=Math.min(c.lastMeasuredIndex,s-1),n._getItemStyleCache(-1),d&&n.forceUpdate()},c},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});const Ee=({index:r,setHeight:t,Component:n})=>{const i=M.useRef(null);return M.useEffect(()=>{i.current&&t(r,i.current.getBoundingClientRect().height)},[]),h(n,{ref:i,index:r})},$=({count:r,Component:t})=>{const n=M.useMemo(()=>Array.from({length:r}).map(()=>50),[]),i=M.useRef(null),o=s=>n[s],c=(s,d)=>{var v;n[s]=d,(v=i.current)==null||v.resetAfterIndex(s)};return h(Oe,{children:({width:s,height:d})=>h(me,{ref:i,width:s,height:d,itemCount:r,itemSize:o,children:({index:v,style:I})=>h("div",{style:I,children:h(Ee,{index:v,setHeight:c,Component:t})},v)})})},Ke={component:me},b={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h(F,{count:1e4})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(H,{style:{flex:1},children:Array.from({length:1e4}).map((t,n)=>h(G,{index:n},n))}),h("div",{style:{flex:1},children:h($,{count:1e4,Component:G})})]})]})},L={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h(F,{count:1e4})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(H,{style:{flex:1},children:Array.from({length:1e4}).map((t,n)=>h(Z,{index:n},n))}),h("div",{style:{flex:1},children:h($,{count:1e4,Component:Z})})]})]})},E={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h(F,{count:1e6})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(H,{style:{flex:1},children:Array.from({length:1e6}).map((t,n)=>h(J,{index:n},n))}),h("div",{style:{flex:1},children:h($,{count:1e6,Component:J})})]})]})};var re,ie,le;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
        gap: 8
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <ItemWithRenderCount key={i} index={i} />)}
          </List>
          <div style={{
          flex: 1
        }}>
            <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />
          </div>
        </div>
      </div>;
  }
}`,...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ae,se;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
        gap: 8
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <HeavyItem key={i} index={i} />)}
          </List>
          <div style={{
          flex: 1
        }}>
            <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />
          </div>
        </div>
      </div>;
  }
}`,...(se=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,de,fe;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        }}>react-window</div>
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
        gap: 8
      }}>
          <List style={{
          flex: 1
        }}>
            {Array.from({
            length: ROW_COUNT
          }).map((_, i) => <SimpleItem key={i} index={i} />)}
          </List>
          <div style={{
          flex: 1
        }}>
            <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />
          </div>
        </div>
      </div>;
  }
}`,...(fe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};const Ve=["DynamicHeight","HeavyComponent","OneMillion"];export{b as DynamicHeight,L as HeavyComponent,E as OneMillion,Ve as __namedExportsOrder,Ke as default};
//# sourceMappingURL=react-window.stories-0a6e27f5.js.map
