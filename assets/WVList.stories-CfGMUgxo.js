import{j as e,a as h}from"./jsx-runtime-KhpQ_ow-.js";import{r as o}from"./index-G6kSzgdV.js";import{S as ce,d as de}from"./common-7gvj7Fb1.js";import{u as ue,A as me,a as pe,b as j,r as z,U as he,c as fe,e as ge,v as ye,V as ve,d as be,f as Se,g as we,h as _e,S as xe,i as Ie,j as Ce}from"./useRerender-ICGsddh2.js";import{u as Re,a as ke,L as Le}from"./useChildren-_TfwJqUU.js";import{r as Ve}from"./index-xBZDQ2qw.js";const d=o.forwardRef(({children:r,count:s,overscan:n=4,initialItemSize:a,initialItemCount:i,horizontal:c,cache:f,components:{Root:u=ve,Item:b="div"}=be,onScrollStop:S,onRangeChange:g,...m},A)=>{const[y,w]=Re(r,s),H=ke(S),[l,N,O,v]=ue(()=>{const t=!!c,p=Se(w,a,i,f,!1,!a);return[p,we(p,t),_e(p,t),t]});w!==l._getItemsLength()&&l._update(me,[w]);const D=pe(),[L,V]=l._getRange(),T=l._getScrollDirection(),se=l._getJumpCount(),q=l._getTotalSize(),B=o.useRef(null),E=T!==xe;j(()=>{const t=B[z],p=l._subscribe(he+fe,le=>{le?Ve.flushSync(D):D()}),_=N._observeRoot(t),ae=O._observe(t);return()=>{p(),_(),ae()}},[]),j(()=>{const t=l._flushJump();t&&O._fixScrollJump(t)},[se]),o.useEffect(()=>{E||H[z]&&H[z]()},[E]),o.useEffect(()=>{g&&g(L,V)},[L,V]),o.useImperativeHandle(A,()=>({get cache(){return l._getCache()}}),[]);const oe=Ce(L,n,T),ie=Ie(V,n,T,w),U=[];for(let t=oe;t<=ie;t++){const p=y(t),_=p.key;U.push(e(Le,{_resizer:N,_index:t,_offset:l._getItemOffset(t),_hide:l._isUnmeasuredItem(t),_element:b,_children:p,_isHorizontal:v},ge(_)?_:"_"+t))}return e(u,{ref:B,width:v?q:void 0,height:v?void 0:q,scrolling:E,attrs:o.useMemo(()=>({...m,style:{display:v?"inline-block":"block",width:v?"auto":"100%",height:v?"100%":"auto",...m.style}}),ye(m)),children:U})});try{d.displayName="WVList",d.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:`Elements rendered by this component.

You can also pass a function and set {@link WVListProps.count} to create elements lazily.`,name:"children",required:!0,type:{name:"ReactNode | ((index: number) => ReactElement<any, string | JSXElementConstructor<any>>)"}},count:{defaultValue:null,description:"If you set a function to {@link WVListProps.children}, you have to set total number of items to this prop.",name:"count",required:!1,type:{name:"number"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. Lower value will give better performance but you can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const W=r=>{const s=[20,40,80,77];return Array.from({length:r}).map((n,a)=>e("div",{style:{height:s[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:a},a))},Te=r=>Array.from({length:r}).map((s,n)=>h("div",{style:{width:n%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",n]},n)),De={component:d},x={render:()=>e("div",{style:{padding:200},children:e(d,{style:{border:"solid 1px gray"},children:W(1e3)})})},I={render:()=>e("div",{style:{padding:200},children:e(d,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:Te(1e3)})})},C={render:()=>h("div",{style:{display:"flex",flexDirection:"column"},children:[e("div",{style:{background:"white",height:60,marginBottom:40},children:"header"}),h("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(d,{style:{margin:10},children:W(1e3)})}),e("div",{style:{flex:3},children:e(d,{style:{margin:10},children:Array.from({length:1e3}).map((r,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]}),e("div",{style:{background:"white",height:60,marginTop:40},children:"footer"})]})},R={render:()=>{const r=(S,g=0)=>{const m=[20,40,80,77];return Array.from({length:S}).map((A,y)=>(y+=g,e("div",{style:{height:m[y%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:y},y)))},[s,n]=o.useState(!1),a=async()=>{n(!0),await de(1e3),n(!1)},i=100,[c,f]=o.useState(()=>r(i)),u=o.useRef(-1),b=c.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:h(d,{onRangeChange:async(S,g)=>{g+50>b&&u.current<b&&(u.current=b,await a(),f(m=>[...m,...r(i,m.length)]))},children:[c,s&&e(ce,{})]})})}},Ee=({id:r})=>{const s="window-list-cache-"+r,n=o.useRef(null),[a,i]=o.useMemo(()=>{const c=sessionStorage.getItem(s);return c?JSON.parse(c):[]},[]);return o.useEffect(()=>{if(!n.current)return;const c=n.current;window.scrollTo(0,a??0);let f=0;const u=()=>{f=window.scrollY};return window.addEventListener("scroll",u),u(),()=>{window.removeEventListener("scroll",u),sessionStorage.setItem(s,JSON.stringify([f,c.cache]))}},[]),e(d,{ref:n,cache:i,children:W(1e3)})},k={render:()=>{const[r,s]=o.useState(!0),[n,a]=o.useState("1");return h("div",{style:{position:"relative"},children:[h("div",{style:{position:"fixed",top:0,left:0,zIndex:10},children:[e("button",{onClick:()=>{s(i=>!i)},children:r?"hide":"show"}),["1","2","3"].map(i=>h("label",{children:[e("input",{type:"radio",checked:n===i,onChange:()=>{a(i)}}),i]},i))]}),r&&e(Ee,{id:n},n)]})}};var M,J,F;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(J=x.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var P,Y,G;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,X,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        background: "white",
        height: 60,
        marginBottom: 40
      }}>
          header
        </div>
        <div style={{
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
          flex: 3
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
        </div>
        <div style={{
        background: "white",
        height: 60,
        marginTop: 40
      }}>
          footer
        </div>
      </div>;
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,$,ee;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=($=R.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,te,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    const [selectedId, setSelectedId] = useState("1");
    return <div style={{
      position: "relative"
    }}>
        <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10
      }}>
          <button onClick={() => {
          setShow(prev => !prev);
        }}>
            {show ? "hide" : "show"}
          </button>
          {["1", "2", "3"].map(id => <label key={id}>
              <input type="radio" checked={selectedId === id} onChange={() => {
            setSelectedId(id);
          }} />
              {id}
            </label>)}
        </div>
        {show && <RestorableList key={selectedId} id={selectedId} />}
      </div>;
  }
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const qe=["Default","Horizontal","Complex","InfiniteScrolling","ScrollRestoration"];export{C as Complex,x as Default,I as Horizontal,R as InfiniteScrolling,k as ScrollRestoration,qe as __namedExportsOrder,De as default};
//# sourceMappingURL=WVList.stories-CfGMUgxo.js.map
