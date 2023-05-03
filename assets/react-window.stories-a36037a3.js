import{j as h,a as R}from"./jsx-runtime-c3d7f245.js";import{I as k,S as $,V as q,H as G,a as Z}from"./virtua-ba970ddf.js";import{r as M}from"./index-c6dae603.js";import{A as xe}from"./AutoSizer-8f234528.js";import{a as J,_ as Oe}from"./assertThisInitialized-60dddfb4.js";import{_ as _e}from"./inheritsLoose-495bf4f7.js";import"./List-530e9e42.js";import"./possibleConstructorReturn-400c5699.js";import"./getPrototypeOf-e4242ba0.js";var Q=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ce(r,t){return!!(r===t||Q(r)&&Q(t))}function we(r,t){if(r.length!==t.length)return!1;for(var n=0;n<r.length;n++)if(!Ce(r[n],t[n]))return!1;return!0}function F(r,t){t===void 0&&(t=we);var n,i=[],a,c=!1;function s(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return c&&n===this&&t(d,i)||(a=r.apply(this,d),c=!0,n=this,i=d),a}return s}var Te=typeof performance=="object"&&typeof performance.now=="function",X=Te?function(){return performance.now()}:function(){return Date.now()};function Y(r){cancelAnimationFrame(r.id)}function Re(r,t){var n=X();function i(){X()-n>=t?r.call(null):a.id=requestAnimationFrame(i)}var a={id:requestAnimationFrame(i)};return a}var H=-1;function ee(r){if(r===void 0&&(r=!1),H===-1||r){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(t),H=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return H}var W=null;function te(r){if(r===void 0&&(r=!1),W===null||r){var t=document.createElement("div"),n=t.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var i=document.createElement("div"),a=i.style;return a.width="100px",a.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?W="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?W="negative":W="positive-ascending"),document.body.removeChild(t),W}return W}var Me=150,We=function(t,n){return t};function ze(r){var t,n=r.getItemOffset,i=r.getEstimatedTotalSize,a=r.getItemSize,c=r.getOffsetForIndexAndAlignment,s=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,v=r.initInstanceProps,S=r.shouldResetStyleCacheOnItemSizeChange,O=r.validateProps;return t=function(C){_e(_,C);function _(I){var e;return e=C.call(this,I)||this,e._instanceProps=v(e.props,J(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:J(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=F(function(o,l,u,m){return e.props.onItemsRendered({overscanStartIndex:o,overscanStopIndex:l,visibleStartIndex:u,visibleStopIndex:m})}),e._callOnScroll=void 0,e._callOnScroll=F(function(o,l,u){return e.props.onScroll({scrollDirection:o,scrollOffset:l,scrollUpdateWasRequested:u})}),e._getItemStyle=void 0,e._getItemStyle=function(o){var l=e.props,u=l.direction,m=l.itemSize,g=l.layout,f=e._getItemStyleCache(S&&m,S&&g,S&&u),p;if(f.hasOwnProperty(o))p=f[o];else{var y=n(e.props,o,e._instanceProps),w=a(e.props,o,e._instanceProps),T=u==="horizontal"||g==="horizontal",U=u==="rtl",b=T?y:0;f[o]=p={position:"absolute",left:U?void 0:b,right:U?b:void 0,top:T?0:y,height:T?"100%":w,width:T?w:"100%"}}return p},e._getItemStyleCache=void 0,e._getItemStyleCache=F(function(o,l,u){return{}}),e._onScrollHorizontal=function(o){var l=o.currentTarget,u=l.clientWidth,m=l.scrollLeft,g=l.scrollWidth;e.setState(function(f){if(f.scrollOffset===m)return null;var p=e.props.direction,y=m;if(p==="rtl")switch(te()){case"negative":y=-m;break;case"positive-descending":y=g-u-m;break}return y=Math.max(0,Math.min(y,g-u)),{isScrolling:!0,scrollDirection:f.scrollOffset<m?"forward":"backward",scrollOffset:y,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(o){var l=o.currentTarget,u=l.clientHeight,m=l.scrollHeight,g=l.scrollTop;e.setState(function(f){if(f.scrollOffset===g)return null;var p=Math.max(0,Math.min(g,m-u));return{isScrolling:!0,scrollDirection:f.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(o){var l=e.props.outerRef;e._outerRef=o,typeof l=="function"?l(o):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=o)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&Y(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=Re(e._resetIsScrolling,Me)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}_.getDerivedStateFromProps=function(e,o){return Ne(e,o),O(e),null};var x=_.prototype;return x.scrollTo=function(e){e=Math.max(0,e),this.setState(function(o){return o.scrollOffset===e?null:{scrollDirection:o.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},x.scrollToItem=function(e,o){o===void 0&&(o="auto");var l=this.props,u=l.itemCount,m=l.layout,g=this.state.scrollOffset;e=Math.max(0,Math.min(e,u-1));var f=0;if(this._outerRef){var p=this._outerRef;m==="vertical"?f=p.scrollWidth>p.clientWidth?ee():0:f=p.scrollHeight>p.clientHeight?ee():0}this.scrollTo(c(this.props,e,o,g,this._instanceProps,f))},x.componentDidMount=function(){var e=this.props,o=e.direction,l=e.initialScrollOffset,u=e.layout;if(typeof l=="number"&&this._outerRef!=null){var m=this._outerRef;o==="horizontal"||u==="horizontal"?m.scrollLeft=l:m.scrollTop=l}this._callPropsCallbacks()},x.componentDidUpdate=function(){var e=this.props,o=e.direction,l=e.layout,u=this.state,m=u.scrollOffset,g=u.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var f=this._outerRef;if(o==="horizontal"||l==="horizontal")if(o==="rtl")switch(te()){case"negative":f.scrollLeft=-m;break;case"positive-ascending":f.scrollLeft=m;break;default:var p=f.clientWidth,y=f.scrollWidth;f.scrollLeft=y-p-m;break}else f.scrollLeft=m;else f.scrollTop=m}this._callPropsCallbacks()},x.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Y(this._resetIsScrollingTimeoutId)},x.render=function(){var e=this.props,o=e.children,l=e.className,u=e.direction,m=e.height,g=e.innerRef,f=e.innerElementType,p=e.innerTagName,y=e.itemCount,w=e.itemData,T=e.itemKey,U=T===void 0?We:T,b=e.layout,me=e.outerElementType,he=e.outerTagName,ve=e.style,pe=e.useIsScrolling,ge=e.width,V=this.state.isScrolling,P=u==="horizontal"||b==="horizontal",ye=P?this._onScrollHorizontal:this._onScrollVertical,j=this._getRangeToRender(),Ie=j[0],Se=j[1],B=[];if(y>0)for(var N=Ie;N<=Se;N++)B.push(M.createElement(o,{data:w,key:U(N,w),index:N,isScrolling:pe?V:void 0,style:this._getItemStyle(N)}));var K=i(this.props,this._instanceProps);return M.createElement(me||he||"div",{className:l,onScroll:ye,ref:this._outerRefSetter,style:Oe({position:"relative",height:m,width:ge,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:u},ve)},M.createElement(f||p||"div",{children:B,ref:g,style:{height:P?"100%":K,pointerEvents:V?"none":void 0,width:P?K:"100%"}}))},x._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var o=this._getRangeToRender(),l=o[0],u=o[1],m=o[2],g=o[3];this._callOnItemsRendered(l,u,m,g)}}if(typeof this.props.onScroll=="function"){var f=this.state,p=f.scrollDirection,y=f.scrollOffset,w=f.scrollUpdateWasRequested;this._callOnScroll(p,y,w)}},x._getRangeToRender=function(){var e=this.props,o=e.itemCount,l=e.overscanCount,u=this.state,m=u.isScrolling,g=u.scrollDirection,f=u.scrollOffset;if(o===0)return[0,0,0,0];var p=s(this.props,f,this._instanceProps),y=d(this.props,p,f,this._instanceProps),w=!m||g==="backward"?Math.max(1,l):1,T=!m||g==="forward"?Math.max(1,l):1;return[Math.max(0,p-w),Math.max(0,Math.min(o-1,y+T)),p,y]},_}(M.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Ne=function(t,n){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,n.instance},De=50,z=function(t,n,i){var a=t,c=a.itemSize,s=i.itemMetadataMap,d=i.lastMeasuredIndex;if(n>d){var v=0;if(d>=0){var S=s[d];v=S.offset+S.size}for(var O=d+1;O<=n;O++){var C=c(O);s[O]={offset:v,size:C},v+=C}i.lastMeasuredIndex=n}return s[n]},Ue=function(t,n,i){var a=n.itemMetadataMap,c=n.lastMeasuredIndex,s=c>0?a[c].offset:0;return s>=i?ue(t,n,c,0,i):be(t,n,Math.max(0,c),i)},ue=function(t,n,i,a,c){for(;a<=i;){var s=a+Math.floor((i-a)/2),d=z(t,s,n).offset;if(d===c)return s;d<c?a=s+1:d>c&&(i=s-1)}return a>0?a-1:0},be=function(t,n,i,a){for(var c=t.itemCount,s=1;i<c&&z(t,i,n).offset<a;)i+=s,s*=2;return ue(t,n,Math.min(i,c-1),Math.floor(i/2),a)},ne=function(t,n){var i=t.itemCount,a=n.itemMetadataMap,c=n.estimatedItemSize,s=n.lastMeasuredIndex,d=0;if(s>=i&&(s=i-1),s>=0){var v=a[s];d=v.offset+v.size}var S=i-s-1,O=S*c;return d+O},Le=ze({getItemOffset:function(t,n,i){return z(t,n,i).offset},getItemSize:function(t,n,i){return i.itemMetadataMap[n].size},getEstimatedTotalSize:ne,getOffsetForIndexAndAlignment:function(t,n,i,a,c,s){var d=t.direction,v=t.height,S=t.layout,O=t.width,C=d==="horizontal"||S==="horizontal",_=C?O:v,x=z(t,n,c),I=ne(t,c),e=Math.max(0,Math.min(I-_,x.offset)),o=Math.max(0,x.offset-_+x.size+s);switch(i==="smart"&&(a>=o-_&&a<=e+_?i="auto":i="center"),i){case"start":return e;case"end":return o;case"center":return Math.round(o+(e-o)/2);case"auto":default:return a>=o&&a<=e?a:a<o?o:e}},getStartIndexForOffset:function(t,n,i){return Ue(t,i,n)},getStopIndexForStartIndex:function(t,n,i,a){for(var c=t.direction,s=t.height,d=t.itemCount,v=t.layout,S=t.width,O=c==="horizontal"||v==="horizontal",C=O?S:s,_=z(t,n,a),x=i+C,I=_.offset+_.size,e=n;e<d-1&&I<x;)e++,I+=z(t,e,a).size;return e},initInstanceProps:function(t,n){var i=t,a=i.estimatedItemSize,c={itemMetadataMap:{},estimatedItemSize:a||De,lastMeasuredIndex:-1};return n.resetAfterIndex=function(s,d){d===void 0&&(d=!0),c.lastMeasuredIndex=Math.min(c.lastMeasuredIndex,s-1),n._getItemStyleCache(-1),d&&n.forceUpdate()},c},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});const Ee=({index:r,setHeight:t,Component:n})=>{const i=M.useRef(null);return M.useEffect(()=>{i.current&&t(r,i.current.getBoundingClientRect().height)},[]),h(n,{ref:i,index:r})},D=({count:r,Component:t})=>{const n=M.useMemo(()=>Array.from({length:r}).map(()=>50),[]),i=M.useRef(null),a=s=>n[s],c=(s,d)=>{var v;n[s]=d,(v=i.current)==null||v.resetAfterIndex(s)};return h("div",{style:{flex:1},children:h(xe,{children:({width:s,height:d})=>h(Le,{ref:i,width:s,height:d,itemCount:r,itemSize:a,children:({index:v,style:S})=>h("div",{style:S,children:h(Ee,{index:v,setHeight:c,Component:t})},v)})})})};try{D.displayName="ReactWindowList",D.__docgenInfo={description:"",displayName:"ReactWindowList",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},Component:{defaultValue:null,description:"",name:"Component",required:!0,type:{name:"ForwardRefExoticComponent<{ index: number; } & RefAttributes<HTMLDivElement>>"}}}}}catch{}const Be={component:k},L={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h($,{count:1e4})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(q,{count:1e4,Component:k}),h(D,{count:1e4,Component:k})]})]})},E={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h($,{count:1e4})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(q,{count:1e4,Component:G}),h(D,{count:1e4,Component:G})]})]})},A={render:()=>R("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[R("div",{style:{display:"flex",flexDirection:"row"},children:[h("div",{style:{flex:1},children:"virtua"}),h("div",{style:{flex:1},children:"react-window"})]}),h("div",{style:{display:"flex",flexDirection:"row"},children:h($,{count:1e6})}),R("div",{style:{display:"flex",flexDirection:"row",flex:1,gap:8},children:[h(q,{count:1e6,Component:Z}),h(D,{count:1e6,Component:Z})]})]})};var re,ie,oe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={ItemWithRenderCount} />
          <ReactWindowList count={ROW_COUNT} Component={ItemWithRenderCount} />
        </div>
      </div>;
  }
}`,...(oe=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ae,le,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={HeavyItem} />
          <ReactWindowList count={ROW_COUNT} Component={HeavyItem} />
        </div>
      </div>;
  }
}`,...(se=(le=E.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,de,fe;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
          <VirtuaList count={ROW_COUNT} Component={SimpleItem} />
          <ReactWindowList count={ROW_COUNT} Component={SimpleItem} />
        </div>
      </div>;
  }
}`,...(fe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};const Ke=["DynamicHeight","HeavyComponent","OneMillion"];export{L as DynamicHeight,E as HeavyComponent,A as OneMillion,Ke as __namedExportsOrder,Be as default};
//# sourceMappingURL=react-window.stories-a36037a3.js.map
