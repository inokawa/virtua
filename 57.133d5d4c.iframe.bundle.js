"use strict";(self.webpackChunkvirtua=self.webpackChunkvirtua||[]).push([[57],{"./src/react/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>List});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const min=Math.min,max=Math.max,abs=Math.abs,range=(length,cb)=>Array.from({length},((_,i)=>cb(i))),getItemSize=(cache,index)=>{const size=cache._sizes[index];return-1===size?cache._defaultItemSize:size},findIndex=(cache,i,distance)=>{let sum=0;if(distance>=0)for(;i<cache._length-1;){const h=getItemSize(cache,i);if(sum+=h,i++,sum>=distance){sum-h/2>=distance&&i--;break}}else for(;i>0;){i--;const h=getItemSize(cache,i);if(sum-=h,sum<=distance){sum+h/2<distance&&i++;break}}return min(max(i,0),cache._length-1)},findStartIndexWithOffset=(cache,offset,prevStartIndex,prevOffset)=>findIndex(cache,prevStartIndex,offset-prevOffset),findEndIndex=findIndex,computeStartOffset=(cache,index)=>{if(!cache._length)return 0;if(cache._measuredOffsetIndex>=index)return cache._offsets[index];let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=index&&(cache._offsets[i]=top,i!==index);i++)top+=getItemSize(cache,i);return cache._measuredOffsetIndex=index,top},resetCache=(length,itemSize,cache)=>{var _a;return{_defaultItemSize:itemSize,_length:length,_measuredOffsetIndex:null!=(_a=cache&&min(cache._measuredOffsetIndex,length-1))?_a:0,_sizes:range(length,(i=>{var _a2;return null!=(_a2=cache&&cache._sizes[i])?_a2:-1})),_offsets:range(length,(i=>{var _a2;return 0===i?0:null!=(_a2=cache&&cache._offsets[i])?_a2:-1}))}},mutate=(state,itemSize,[type,data])=>{switch(type){case 0:return state._cache._length!==data&&(state._cache=resetCache(data,itemSize,state._cache),!0);case 1:{const updated=data.filter((([index,size])=>state._cache._sizes[index]!==size));if(!updated.length)return!1;const jump=[];return updated.forEach((([index,size])=>{jump.push([index,size-getItemSize(state._cache,index)]),((cache,index,size)=>{cache._sizes[index]=size,cache._measuredOffsetIndex=min(index,cache._measuredOffsetIndex)})(state._cache,index,size)})),state._jump=jump,!0}case 2:return(state._viewportWidth!==data._width||state._viewportHeight!==data._height)&&(state._viewportWidth=data._width,state._viewportHeight=data._height,!0);case 3:{const prevStartIndex=state._startIndex,prevOffset=computeStartOffset(state._cache,prevStartIndex);return prevOffset!==data&&(state._startIndex=findStartIndexWithOffset(state._cache,data,prevStartIndex,prevOffset))!==prevStartIndex}}},createVirtualStore=(itemCount,itemSize,isHorizontal,isRtl)=>{const subscribers=new Set,state={_startIndex:0,_viewportWidth:0,_viewportHeight:0,_cache:resetCache(itemCount,itemSize),_jump:[]},getViewportSize=()=>isHorizontal?state._viewportWidth:state._viewportHeight;let scrollToQueue;return{_getStartIndex:()=>state._startIndex,_getEndIndex:()=>findEndIndex(state._cache,state._startIndex,getViewportSize()),_isUnmeasuredItem:index=>-1===state._cache._sizes[index],_hasUnmeasuredItemsInRange:startIndex=>((cache,startIndex,endIndex)=>{for(let i=startIndex;i<=endIndex;i++)if(-1===cache._sizes[i])return!0;return!1})(state._cache,startIndex,findEndIndex(state._cache,startIndex,getViewportSize())),_getItemOffset:index=>computeStartOffset(state._cache,index),_getViewportSize:()=>getViewportSize(),_getScrollSize:()=>(cache=>{if(!cache._length)return 0;const lastIndex=cache._length-1;if(cache._measuredOffsetIndex>=lastIndex)return cache._offsets[lastIndex]+getItemSize(cache,lastIndex);let top=cache._offsets[cache._measuredOffsetIndex];for(let i=cache._measuredOffsetIndex;i<=lastIndex;i++)cache._offsets[i]=top,top+=getItemSize(cache,i);return cache._measuredOffsetIndex=lastIndex,top})(state._cache),_getItemCount:()=>state._cache._length,_getJump:()=>state._jump,_isHorizontal:()=>isHorizontal,_isRtl:()=>isRtl,_getItemIndexForScrollTo:offset=>findStartIndexWithOffset(state._cache,offset,0,0),_waitForScrollDestinationItemsMeasured:()=>(scrollToQueue&&scrollToQueue[1](),new Promise(((resolve,reject)=>{scrollToQueue=[()=>{Promise.resolve().then((()=>{resolve(),scrollToQueue=void 0}))},reject]}))),_subscribe:cb=>(subscribers.add(cb),()=>{subscribers.delete(cb)}),_update(...action){mutate(state,itemSize,action)&&(subscribers.forEach((cb=>{cb()})),scrollToQueue&&1===action[0]&&scrollToQueue[0]())}}},useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var shim=__webpack_require__("./node_modules/use-sync-external-store/shim/index.js");const useSyncExternalStore=(subscibe,getSnapShot)=>(0,shim.useSyncExternalStore)(subscibe,getSnapShot,getSnapShot),createScroller=(store,notifyStop)=>{let isNegativeOffset,rootElement,_ro,prevOffset=-1,scrollDirection=0,resized=!1;const isHorizontal=store._isHorizontal(),isRtl=store._isRtl(),scrollToKey=isHorizontal?"scrollLeft":"scrollTop",mountedIndexes=new WeakMap,getResizeObserver=()=>_ro||(_ro=new ResizeObserver((entries=>{const resizes=[];for(const entry of entries)if(entry.target===rootElement)store._update(2,{_width:entry.contentRect.width,_height:entry.contentRect.height});else{const index=mountedIndexes.get(entry.target);null!=index&&resizes.push([index,entry.contentRect[isHorizontal?"width":"height"]])}resizes.length&&(store._update(1,resizes),resized=!0)}))),getActualScrollSize=()=>rootElement?store._isHorizontal()?rootElement.scrollWidth:rootElement.scrollHeight:0,updateScrollPosition=(offset,diff)=>{if(rootElement){if(isRtl){if(null==isNegativeOffset){const prev=rootElement[scrollToKey];rootElement[scrollToKey]=1,isNegativeOffset=0===rootElement[scrollToKey],rootElement[scrollToKey]=prev}isNegativeOffset&&(offset*=-1)}diff?rootElement[scrollToKey]+=offset:(rootElement[scrollToKey]=offset,scrollDirection=3)}};return{_initRoot(root){rootElement=root;const ro=getResizeObserver(),syncViewportToScrollPosition=()=>{let offset=root[scrollToKey];isRtl&&(offset=abs(offset)),prevOffset!==offset&&(0!==scrollDirection&&resized?resized=!1:3!==scrollDirection&&(scrollDirection=prevOffset>offset?2:1),store._update(3,prevOffset=offset))},onScrollStopped=((fn,ms)=>{let id;const cancel=()=>{null!=id&&clearTimeout(id)},debouncedFn=()=>{cancel(),id=setTimeout((()=>{id=null,fn()}),ms)};return debouncedFn._cancel=cancel,debouncedFn})((()=>{syncViewportToScrollPosition(),scrollDirection=0,notifyStop()}),300),onScroll=()=>{syncViewportToScrollPosition(),onScrollStopped()};return ro.observe(root),root.addEventListener("scroll",onScroll),()=>{ro.disconnect(),root.removeEventListener("scroll",onScroll),onScrollStopped._cancel()}},_initItem(el,i){const ro=getResizeObserver();return mountedIndexes.set(el,i),ro.observe(el),()=>{mountedIndexes.delete(el),ro.unobserve(el)}},_getScrollPosition:()=>rootElement?rootElement[scrollToKey]:0,_getScrollDirection:()=>scrollDirection,_getActualScrollSize:getActualScrollSize,_updateScrollPosition:updateScrollPosition,_scrollTo:async(index,getCurrentOffset)=>{const getOffset=()=>{let offset=getCurrentOffset();const scrollSize=getActualScrollSize(),viewportSize=store._getViewportSize();return scrollSize-(offset+viewportSize)<=0&&(offset=scrollSize-viewportSize),offset};if(store._hasUnmeasuredItemsInRange(index)){do{store._update(3,getOffset());try{await store._waitForScrollDestinationItemsMeasured()}catch(e){return}}while(store._hasUnmeasuredItemsInRange(index));updateScrollPosition(getOffset())}else{const offset=getOffset();updateScrollPosition(offset),store._update(3,offset)}}}},refKey="current",useStatic=init=>{const ref=(0,react.useRef)();return ref[refKey]||(ref[refKey]=init())},Item=(0,react.memo)((({_children:children,_scroller:scroller,_store:store,_index:index,_element:Element})=>{const ref=(0,react.useRef)(null),offset=useSyncExternalStore(store._subscribe,(()=>store._getItemOffset(index))),hide=useSyncExternalStore(store._subscribe,(()=>store._isUnmeasuredItem(index)));return useIsomorphicLayoutEffect((()=>scroller._initItem(ref[refKey],index)),[index]),(0,jsx_runtime.jsx)(Element,{ref,style:(0,react.useMemo)((()=>{const isHorizontal=store._isHorizontal(),leftOrRightKey=store._isRtl()?"right":"left",style={margin:0,padding:0,position:"absolute",[isHorizontal?"height":"width"]:"100%",[isHorizontal?"top":leftOrRightKey]:0,[isHorizontal?leftOrRightKey:"top"]:offset};return isHorizontal&&(style.display="flex"),hide&&(style.visibility="hidden"),style}),[offset,hide]),children})})),DefaultWindow=(0,react.forwardRef)((({children,style,scrollSize,horizontal,rtl},ref)=>(0,jsx_runtime.jsx)("div",{ref,style,children:(0,jsx_runtime.jsx)("div",{style:(0,react.useMemo)((()=>{const width=horizontal?scrollSize:"100%",height=horizontal?"100%":scrollSize;return{position:"absolute",top:0,[rtl?"right":"left"]:0,width,height,minWidth:width,minHeight:height}}),[scrollSize]),children})}))),Window=({_children:children,_ref:ref,_store:store,_element:Element,_style:style})=>{const scrollSize=useSyncExternalStore(store._subscribe,store._getScrollSize),viewportSize=useSyncExternalStore(store._subscribe,store._getViewportSize),clampedScrollSize=scrollSize>=viewportSize?scrollSize:viewportSize,horizontal=store._isHorizontal();return(0,jsx_runtime.jsx)(Element,{ref,scrollSize:clampedScrollSize,horizontal,rtl:store._isRtl(),style:(0,react.useMemo)((()=>({overflow:horizontal?"auto hidden":"hidden auto",position:"relative",contain:"strict",width:"100%",height:"100%",padding:0,margin:0,...style})),[style]),children})},List=(0,react.forwardRef)((({children,itemSize:itemSizeProp=40,overscan=6,horizontal:horizontalProp,rtl:rtlProp,endThreshold=0,style:styleProp,element=DefaultWindow,itemElement="div",onEndReached},ref)=>{const elements=(0,react.useMemo)((()=>{const arr=[];return react.Children.forEach(children,(e=>{(e=>null==e||"boolean"==typeof e)(e)||arr.push(e)})),arr}),[children]),elementsCount=elements.length,store=useStatic((()=>createVirtualStore(elementsCount,itemSizeProp,!!horizontalProp,!!rtlProp))),startIndex=useSyncExternalStore(store._subscribe,store._getStartIndex),endIndex=useSyncExternalStore(store._subscribe,store._getEndIndex),jump=useSyncExternalStore(store._subscribe,store._getJump),rootRef=(0,react.useRef)(null),onEndReachedCalledIndex=(0,react.useRef)(-1),[mountedIndexes,reset]=(0,react.useState)(new Set),scroller=useStatic((()=>createScroller(store,(()=>{reset(new Set)})))),count=min(elementsCount,store._getItemCount());useIsomorphicLayoutEffect((()=>{store._update(0,elementsCount)}),[elementsCount]),useIsomorphicLayoutEffect((()=>scroller._initRoot(rootRef[refKey])),[]),useIsomorphicLayoutEffect((()=>{if(!jump.length)return;const scrollDirection=scroller._getScrollDirection();if(2===scrollDirection){const diff=jump.reduce(((acc,[,j])=>acc+j),0);diff&&scroller._updateScrollPosition(diff,!0)}else if(3===scrollDirection){const isStartInView=0===startIndex,isEndInView=endIndex-(count-1)==0,diff=jump.reduce(((acc,[index,j])=>(index<startIndex?isStartInView||(acc+=j):!isStartInView&&isEndInView&&(acc+=j),acc)),0);diff&&scroller._updateScrollPosition(diff,!0)}}),[jump]),(0,react.useEffect)((()=>{if(!onEndReached)return;onEndReachedCalledIndex[refKey]>count&&(onEndReachedCalledIndex[refKey]=-1);count-1-endIndex<=endThreshold&&onEndReachedCalledIndex[refKey]<count&&(onEndReachedCalledIndex[refKey]=count,onEndReached())}),[endIndex]),(0,react.useImperativeHandle)(ref,(()=>({get scrollOffset(){return scroller._getScrollPosition()},get scrollSize(){return scroller._getActualScrollSize()},scrollToIndex(index){index=max(min(index,count-1),0),scroller._scrollTo(index,(()=>store._getItemOffset(index)))},scrollToOffset(offset){offset=max(offset,0),scroller._scrollTo(store._getItemIndexForScrollTo(offset),(()=>offset))}})),[count]);const startIndexWithMargin=max(startIndex-overscan,0),endIndexWithMargin=min(endIndex+overscan,count-1),items=(0,react.useMemo)((()=>{const res=[];for(let i=startIndexWithMargin;i<=endIndexWithMargin;i++)mountedIndexes.add(i);return mountedIndexes.forEach((i=>{const e=elements[i];res.push((0,jsx_runtime.jsx)(Item,{_scroller:scroller,_store:store,_index:i,_element:itemElement,_children:e},(null==e?void 0:e.key)||i))})),res}),[elements,mountedIndexes,startIndexWithMargin,endIndexWithMargin]);return(0,jsx_runtime.jsx)(Window,{_ref:rootRef,_store:store,_element:element,_style:styleProp,_children:items})}));try{List.displayName="List",List.__docgenInfo={description:"Virtualized list component. See {@link ListProps} and {@link ListHandle}.",displayName:"List",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},itemSize:{defaultValue:null,description:"Item size hint for unmeasured items. It's recommended to specify this prop if item sizes are fixed and known, or much larger than the defaultValue. It will help to reduce scroll jump when items are measured.\n@defaultValue 40",name:"itemSize",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"6"},description:"Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.\n@defaultValue 6",name:"overscan",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},rtl:{defaultValue:null,description:"You have to set true if you use this component under `direction: rtl` style.",name:"rtl",required:!1,type:{name:"boolean"}},endThreshold:{defaultValue:{value:"0"},description:"Number of items to be the margin from the end of the scroll. See also {@link onEndReached}.\n@defaultValue 0",name:"endThreshold",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"Inline style prop to override style of scrollable element.",name:"style",required:!1,type:{name:"CSSProperties"}},element:{defaultValue:{value:'forwardRef<any, CustomWindowComponentProps>(\n  ({ children, style, scrollSize, horizontal, rtl }, ref): ReactElement => {\n    return (\n      <div ref={ref} style={style}>\n        <div\n          style={useMemo<CSSProperties>(() => {\n            const width = horizontal ? scrollSize : "100%";\n            const height = horizontal ? "100%" : scrollSize;\n            return {\n              position: "absolute",\n              top: 0,\n              [rtl ? "right" : "left"]: 0,\n              width,\n              height,\n              minWidth: width,\n              minHeight: height,\n            };\n          }, [scrollSize])}\n        >\n          {children}\n        </div>\n      </div>\n    );\n  }\n)'},description:"Customized element type for scrollable element.\n@defaultValue {@link DefaultWindow }",name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:'Customized element type for item element.\n@defaultValue "div"',name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onEndReached:{defaultValue:null,description:"Callback invoked when scrolling reached to the end. The margin from the end is specified by {@link endThreshold}.",name:"onEndReached",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/react/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}}}]);