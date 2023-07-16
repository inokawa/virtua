import{a as S}from"./jsx-runtime-e162df28.js";import{r}from"./index-5284b0bf.js";import{i as J,u as E,a as A,b,c as q,r as d,e as Y,D as B,d as F,f as K,g as U,m as G,h as Q}from"./DefaultWindow-6f974fcd.js";import{L as X}from"./ListItem-44ccea4c.js";const Z=({_children:u,_ref:c,_store:m,_element:h,_scrolling:g,_attrs:l,_isHorizontal:i})=>{const f=b(m,m._getCorrectedScrollSize);return S(h,{ref:c,width:i?f:void 0,height:i?void 0:f,scrolling:g,attrs:r.useMemo(()=>({...l,style:{overflow:i?"auto hidden":"hidden auto",display:i?"inline-block":"block",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...l.style}}),[l]),children:u})},T=r.forwardRef(({children:u,overscan:c=4,initialItemSize:m,initialItemCount:h,horizontal:g,mode:l,element:i=B,itemElement:f="div",onScroll:L,onScrollStop:W,onRangeChange:w,...H},M)=>{const _=r.useMemo(()=>{const e=[];return r.Children.forEach(u,t=>{J(t)||e.push(t)}),e},[u]),s=_.length,C=E(L),z=E(W),[j,O]=r.useState(!1),[n,I,a,V,P]=A(()=>{const e=!!g,t=l==="rtl",o=F(s,m,h,l==="reverse",p=>{O(p),p||z[d]&&z[d]()},p=>{C[d]&&C[d](p)});return[o,K(o,e),U(o,e,t),e,t]});n._updateCacheLength(s);const[v,y]=b(n,n._getRange),N=b(n,n._getJumpCount),R=r.useRef(null);q(()=>{const e=R[d],t=I._observeRoot(e),o=a._initRoot(e);return()=>{t(),o()}},[]),q(()=>{const e=n._flushJump();e&&a._fixScrollJump(e)},[N]),r.useEffect(()=>{w&&w({start:v,end:y,count:s})},[v,y]),r.useImperativeHandle(M,()=>({get scrollOffset(){return n._getScrollOffset()},get scrollSize(){return a._getActualScrollSize()},get viewportSize(){return n._getViewportSize()},scrollToIndex(e){a._scrollToIndex(e,s)},scrollTo:a._scrollTo,scrollBy(e){a._scrollTo(n._getScrollOffset()+e)}}),[s]);const k=G(v-c,0),x=Q(y+c,s-1),D=r.useMemo(()=>{const e=[];for(let t=k;t<=x;t++){const o=_[t];Y(o)&&e.push(S(X,{_resizer:I,_store:n,_index:t,_element:f,_children:o,_isHorizontal:V,_isRtl:P},(o==null?void 0:o.key)||t))}return e},[_,k,x]);return S(Z,{_ref:R,_store:n,_element:i,_scrolling:j,_children:D,_attrs:H,_isHorizontal:V})});try{T.displayName="VList",T.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"Scroll modes that should be set in certain situations.\n\n- `reverse`: This mode will adjust some styles to be suitable for bottom-to-top scrolling.\n- `rtl`: You have to set this mode if you use this component under `direction: rtl` style.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"reverse"'},{value:'"rtl"'}]}},element:{defaultValue:{value:`forwardRef<any, CustomWindowComponentProps>(
  ({ children, attrs, width, height, scrolling }, ref): ReactElement => {
    return (
      <div ref={ref} {...attrs}>
        <div
          style={useMemo((): CSSProperties => {
            return {
              position: "relative",
              visibility: "hidden",
              width: width ?? "100%",
              height: height ?? "100%",
              pointerEvents: scrolling ? "none" : "auto",
            };
          }, [width, height, scrolling])}
        >
          {children}
        </div>
      </div>
    );
  }
)`},description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link DefaultWindow }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScroll:{defaultValue:null,description:`Callback invoked whenever scroll offset changes.
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}export{T as V};
//# sourceMappingURL=VList-173ff24c.js.map
