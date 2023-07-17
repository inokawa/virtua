import{a as S}from"./jsx-runtime-e162df28.js";import{r as l}from"./index-5284b0bf.js";import{m as J,u as q,a as A,b,c as T,r as u,e as Y,D as B,d as F,f as K,g as U,h as G,i as Q}from"./DefaultWindow-73ad17ac.js";import{L as X}from"./ListItem-6a1a5c4a.js";const Z=({_children:a,_ref:d,_store:c,_element:h,_scrolling:g,_attrs:r,_isHorizontal:i})=>{const m=b(c,c._getCorrectedScrollSize);return S(h,{ref:d,width:i?m:void 0,height:i?void 0:m,scrolling:g,attrs:l.useMemo(()=>({...r,style:{overflow:i?"auto hidden":"hidden auto",display:i?"inline-block":"block",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...r.style}}),[r]),children:a})},E=l.forwardRef(({children:a,overscan:d=4,initialItemSize:c,initialItemCount:h,horizontal:g,mode:r,element:i=B,itemElement:m="div",onScroll:L,onScrollStop:W,onRangeChange:w,...H},M)=>{const _=l.useMemo(()=>J(a),[a]),f=_.length,C=q(L),z=q(W),[j,O]=l.useState(!1),[t,V,s,I,P]=A(()=>{const e=!!g,o=r==="rtl",n=F(f,c,h,r==="reverse",p=>{O(p),p||z[u]&&z[u]()},p=>{C[u]&&C[u](p)});return[n,K(n,e),U(n,e,o),e,o]});t._updateCacheLength(f);const[v,y]=b(t,t._getRange),N=b(t,t._getJumpCount),R=l.useRef(null);T(()=>{const e=R[u],o=V._observeRoot(e),n=s._initRoot(e);return()=>{o(),n()}},[]),T(()=>{const e=t._flushJump();e&&s._fixScrollJump(e)},[N]),l.useEffect(()=>{w&&w({start:v,end:y,count:f})},[v,y]),l.useImperativeHandle(M,()=>({get scrollOffset(){return t._getScrollOffset()},get scrollSize(){return s._getActualScrollSize()},get viewportSize(){return t._getViewportSize()},scrollToIndex:s._scrollToIndex,scrollTo:s._scrollTo,scrollBy(e){s._scrollTo(t._getScrollOffset()+e)}}),[]);const k=G(v-d,0),x=Q(y+d,f-1),D=l.useMemo(()=>{const e=[];for(let o=k;o<=x;o++){const n=_[o];Y(n)&&e.push(S(X,{_resizer:V,_store:t,_index:o,_element:m,_children:n,_isHorizontal:I,_isRtl:P},(n==null?void 0:n.key)||o))}return e},[_,k,x]);return S(Z,{_ref:R,_store:t,_element:i,_scrolling:j,_children:D,_attrs:H,_isHorizontal:I})});try{E.displayName="VList",E.__docgenInfo={description:"Virtualized list component. See {@link VListProps} and {@link VListHandle}.",displayName:"VList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
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
@param offset Current scrollTop or scrollLeft.`,name:"onScroll",required:!1,type:{name:"(offset: number) => void"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}export{E as V};
//# sourceMappingURL=VList-1d034044.js.map
