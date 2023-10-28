import{j as n,a as z}from"./jsx-runtime-c3d7f245.js";import{r as i}from"./index-c6dae603.js";import{S as re,d as se}from"./common-4271bb5e.js";import{f as oe,u as ie,A as ae,a as le,b as q,r as k,U as ce,c as de,e as ue,v as me,V as pe,d as fe,g as he,h as ge,i as ye,S as _e,j as ve,k as be}from"./useRerender-cc948b6e.js";import{u as xe,L as Se}from"./ListItem-c68ff6bb.js";import{r as Ce}from"./index-eb008d06.js";const c=i.forwardRef(({children:t,overscan:s=4,initialItemSize:o,initialItemCount:d,horizontal:g,cache:y,components:{Root:I=pe,Item:_="div"}=fe,onScrollStop:f,onRangeChange:h,...u},m)=>{const R=i.useMemo(()=>oe(t),[t]),a=R.length,E=xe(f),[r,W,A,p]=ie(()=>{const e=!!g,l=he(a,o,d,y,!1,!o);return[l,ge(l,e),ye(l,e),e]});a!==r._getItemsLength()&&r._update(ae,[a]);const H=le(),[w,V]=r._getRange(),T=r._getScrollDirection(),$=r._getJumpCount(),N=r._getCorrectedScrollSize(),O=i.useRef(null),L=T!==_e;q(()=>{const e=O[k],l=W._observeRoot(e),v=A._initRoot(e);return r._subscribe(ce+de,te=>{te?Ce.flushSync(H):H()}),()=>{l(),v()}},[]),q(()=>{const e=r._flushJump();e&&A._fixScrollJump(e)},[$]),i.useEffect(()=>{L||E[k]&&E[k]()},[L]),i.useEffect(()=>{h&&h(w,V)},[w,V]),i.useImperativeHandle(m,()=>({get cache(){return r._getCache()}}),[]);const ee=be(w,s,T),ne=ve(V,s,T,a),D=[];for(let e=ee;e<=ne;e++){const l=R[e],v=l.key;D.push(n(Se,{_resizer:W,_index:e,_offset:r._getItemOffset(e),_hide:r._isUnmeasuredItem(e),_element:_,_children:l,_isHorizontal:p},ue(v)?v:"_"+e))}return n(I,{ref:O,width:p?N:void 0,height:p?void 0:N,scrolling:L,attrs:i.useMemo(()=>({...u,style:{display:p?"inline-block":"block",width:p?"auto":"100%",height:p?"100%":"auto",...u.style}}),me(u)),children:D})});try{c.displayName="WVList",c.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const X=t=>{const s=[20,40,80,77];return Array.from({length:t}).map((o,d)=>n("div",{style:{height:s[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},Ie=t=>Array.from({length:t}).map((s,o)=>z("div",{style:{width:o%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",o]},o)),ze={component:c},b={render:()=>n("div",{style:{padding:200},children:n(c,{style:{border:"solid 1px gray"},children:X(1e3)})})},x={render:()=>n("div",{style:{padding:200},children:n(c,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Ie(1e3)})})},S={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[n("div",{style:{flex:1,display:"flex",paddingTop:600},children:n(c,{style:{margin:10},children:X(1e3)})}),n("div",{style:{flex:3,paddingBottom:600},children:n(c,{style:{margin:10},children:Array.from({length:1e3}).map((t,s)=>n("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),n("div",{style:{flex:2,padding:20,paddingTop:300},children:n("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},C={render:()=>{const t=(h,u=0)=>{const m=[20,40,80,77];return Array.from({length:h}).map((R,a)=>(a+=u,n("div",{style:{height:m[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a)))},[s,o]=i.useState(!1),d=async()=>{o(!0),await se(1e3),o(!1)},g=100,[y,I]=i.useState(()=>t(g)),_=i.useRef(-1),f=y.length;return n("div",{style:{padding:"200px 200px 0px 200px"},children:z(c,{onRangeChange:async(h,u)=>{u+50>f&&_.current<f&&(_.current=f,await d(),I(m=>[...m,...t(g,m.length)]))},children:[y,s&&n(re,{})]})})}};var B,U,j;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList style={{
        border: "solid 1px gray"
      }}>
          {createRows(1000)}
        </WVList>
      </div>;
  }
}`,...(j=(U=b.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var M,F,J;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      padding: 200
    }}>
        <WVList horizontal style={{
        height: 400,
        border: "solid 1px gray"
      }}>
          {createColumns(1000)}
        </WVList>
      </div>;
  }
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var P,G,Y;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
        <div style={{
        flex: 1,
        display: "flex",
        paddingTop: 600
      }}>
          <WVList style={{
          margin: 10
        }}>
            {createRows(1000)}
          </WVList>
        </div>
        <div style={{
        flex: 3,
        paddingBottom: 600
      }}>
          <WVList style={{
          margin: 10
        }}>
            {Array.from({
            length: 1000
          }).map((_, i) => {
            return <div key={i} style={{
              height: 200,
              borderRadius: 8,
              margin: 16,
              background: "#fff"
            }}>
                  {i}
                </div>;
          })}
          </WVList>
        </div>
        <div style={{
        flex: 2,
        padding: 20,
        paddingTop: 300
      }}>
          <div style={{
          top: 0,
          height: 400,
          position: "sticky",
          background: "white"
        }}></div>
        </div>
      </div>;
  }
}`,...(Y=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var K,Z,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const createRows = (num: number, offset: number = 0) => {
      const heights = [20, 40, 80, 77];
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return <div key={i} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
            {i}
          </div>;
      });
    };
    const [fetching, setFetching] = useState(false);
    const fetchItems = async () => {
      setFetching(true);
      await delay(1000);
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    const count = items.length;
    return <div style={{
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async (_, end) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {fetching && <Spinner />}
        </WVList>
      </div>;
  }
}`,...(Q=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};const Ee=["Default","Horizontal","Complex","InfiniteScrolling"];export{S as Complex,b as Default,x as Horizontal,C as InfiniteScrolling,Ee as __namedExportsOrder,ze as default};
//# sourceMappingURL=WVList.stories-202ea979.js.map
