import{j as e,a as z}from"./jsx-runtime-c3d7f245.js";import{r as s}from"./index-c6dae603.js";import{S as te}from"./components-951de649.js";import{f as re,u as se,a as ie,b as V,c as M,r as k,e as oe,v as ae,W as le,d as de,g as ce,h as ue,m as me,i as pe}from"./Window-ab4bf190.js";import{L as fe}from"./ListItem-ddd213ad.js";import"./index-eb008d06.js";const m=s.forwardRef(({children:t,overscan:i=4,initialItemSize:a,initialItemCount:p,horizontal:g,cache:_,element:S=le,itemElement:y="div",onScrollStop:f,onRangeChange:l,...d},W)=>{const c=s.useMemo(()=>re(t),[t]),v=c.length,T=se(f),[Z,$]=s.useState(!1),[o,L,E,h]=ie(()=>{const n=!!g,r=de(v,a,p,!1,u=>{$(u),u||T[k]&&T[k]()},_);return[r,ce(r,n),ue(r,n),n]});o._updateCacheLength(v);const[R,I]=V(o,o._getRange),ee=V(o,o._getJumpCount),H=V(o,o._getCorrectedScrollSize,!0),q=s.useRef(null);M(()=>{const n=q[k],r=L._observeRoot(n),u=E._initRoot(n);return()=>{r(),u()}},[]),M(()=>{const n=o._flushJump();n&&E._fixScrollJump(n)},[ee]),s.useEffect(()=>{l&&l({start:R,end:I,count:v})},[R,I]),s.useImperativeHandle(W,()=>({get cache(){return o._getCache()}}),[]);const A=me(R-i,0),B=pe(I+i,v-1),ne=s.useMemo(()=>{const n=[];for(let r=A;r<=B;r++){const u=c[r];oe(u)&&n.push(e(fe,{_resizer:L,_store:o,_index:r,_element:y,_children:u,_isHorizontal:h,_isRtl:!1},u.key||r))}return n},[c,A,B]);return e(S,{ref:q,width:h?H:void 0,height:h?void 0:H,scrolling:Z,attrs:s.useMemo(()=>({...d,style:{overflow:"visible",display:h?"inline-block":"block",width:h?"auto":"100%",height:h?"100%":"auto",padding:0,margin:0,...d.style}}),ae(d)),children:ne})});try{m.displayName="WVList",m.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const X=t=>{const i=[20,40,80,77];return Array.from({length:t}).map((a,p)=>e("div",{style:{height:i[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p))},he=t=>Array.from({length:t}).map((i,a)=>z("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),xe={component:m},b={render:()=>e("div",{style:{padding:200},children:e(m,{style:{border:"solid 1px gray"},children:X(1e3)})})},w={render:()=>e("div",{style:{padding:200},children:e(m,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:he(1e3)})})},C={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(m,{style:{margin:10},children:X(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(m,{style:{margin:10},children:Array.from({length:1e3}).map((t,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},x={render:()=>{const t=(f,l=0)=>{const d=[20,40,80,77];return Array.from({length:f}).map((W,c)=>(c+=l,e("div",{style:{height:d[c%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:c},c)))},[i,a]=s.useState(!1),p=async()=>{a(!0),await new Promise(f=>setTimeout(f,1e3)),a(!1)},g=100,[_,S]=s.useState(()=>t(g)),y=s.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:z(m,{onRangeChange:async({end:f,count:l})=>{f+50>l&&y.current<l&&(y.current=l,await p(),S(d=>[...d,...t(g,d.length)]))},children:[_,e(te,{show:i})]})})}};var N,O,j;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var F,P,U;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(U=(P=w.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var D,J,Y;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(Y=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var K,G,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      await new Promise(r => setTimeout(r, 1000));
      setFetching(false);
    };
    const ITEM_BATCH_COUNT = 100;
    const [items, setItems] = useState(() => createRows(ITEM_BATCH_COUNT));
    const fetchedCountRef = useRef(-1);
    return <div style={{
      padding: "200px 200px 0px 200px"
    }}>
        <WVList onRangeChange={async ({
        end,
        count
      }) => {
        if (end + 50 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          await fetchItems();
          setItems(prev => [...prev, ...createRows(ITEM_BATCH_COUNT, prev.length)]);
        }
      }}>
          {items}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner show={fetching} />
        </WVList>
      </div>;
  }
}`,...(Q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const _e=["Default","Horizontal","Complex","InfiniteScrolling"];export{C as Complex,b as Default,w as Horizontal,x as InfiniteScrolling,_e as __namedExportsOrder,xe as default};
//# sourceMappingURL=WVList.stories-bde80fdf.js.map
