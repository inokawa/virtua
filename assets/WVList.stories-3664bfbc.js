import{j as e,a as z}from"./jsx-runtime-c3d7f245.js";import{r as o}from"./index-c6dae603.js";import{S as ne}from"./components-0dcd7504.js";import{f as te,u as re,a as se,b as C,c as B,r as k,e as oe,v as ie,V as ae,d as le,g as ce,h as de,i as ue,S as me,j as pe,k as fe,l as he,m as ge,n as ye}from"./Viewport-fa9ec2c0.js";import{L as ve}from"./ListItem-066449ae.js";import"./index-eb008d06.js";const c=o.forwardRef(({children:r,overscan:i=4,initialItemSize:a,initialItemCount:d,horizontal:y,cache:v,components:{Root:R=ae,Item:_="div"}=le,onScrollStop:h,onRangeChange:u,...m},p)=>{const b=o.useMemo(()=>te(r),[r]),l=b.length,E=re(h),[n,W,H,f]=se(()=>{const t=!!y,s=ce(l,a,d,v,!1,!a);return[s,de(s,t),ue(s,t),t]});n._updateCacheLength(l);const[V,L]=C(n,n._getRange,me),T=C(n,n._getIsScrolling,pe),$=C(n,n._getJumpCount,fe),N=C(n,n._getCorrectedScrollSize,he,!0),A=o.useRef(null);B(()=>{const t=A[k],s=W._observeRoot(t),g=H._initRoot(t);return()=>{s(),g()}},[]),B(()=>{const t=n._flushJump();t&&H._fixScrollJump(t)},[$]),o.useEffect(()=>{T||E[k]&&E[k]()},[T]),o.useEffect(()=>{u&&u(V,L)},[V,L]),o.useImperativeHandle(p,()=>({get cache(){return n._getCache()}}),[]);const O=ge(V-i,0),q=ye(L+i,l-1),ee=o.useMemo(()=>{const t=[];for(let s=O;s<=q;s++){const g=b[s];oe(g)&&t.push(e(ve,{_resizer:W,_store:n,_index:s,_element:_,_children:g,_isHorizontal:f,_isRtl:!1},g.key||s))}return t},[b,O,q]);return e(R,{ref:A,width:f?N:void 0,height:f?void 0:N,scrolling:T,attrs:o.useMemo(()=>({...m,style:{overflow:"visible",display:f?"inline-block":"block",width:f?"auto":"100%",height:f?"100%":"auto",padding:0,margin:0,...m.style}}),ie(m)),children:ee})});try{c.displayName="WVList",c.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps} and {@link WVListHandle}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},cache:{defaultValue:null,description:"You can restore cache by passing a {@link CacheSnapshot} on mount. This is useful when you want to restore scroll position after navigation. The snapshot can be obtained from {@link WVListHandle.cache}.",name:"cache",required:!1,type:{name:"CacheSnapshot"}},components:{defaultValue:null,description:"Customized components for advanced usage.",name:"components",required:!1,type:{name:"{ Root?: ForwardRefExoticComponent<CustomViewportComponentProps & RefAttributes<any>>; Item?: CustomItemComponentOrElement; }"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(startIndex: number, endIndex: number) => void"}}}}}catch{}const X=r=>{const i=[20,40,80,77];return Array.from({length:r}).map((a,d)=>e("div",{style:{height:i[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:d},d))},_e=r=>Array.from({length:r}).map((i,a)=>z("div",{style:{width:a%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",a]},a)),Re={component:c},x={render:()=>e("div",{style:{padding:200},children:e(c,{style:{border:"solid 1px gray"},children:X(1e3)})})},S={render:()=>e("div",{style:{padding:200},children:e(c,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:_e(1e3)})})},w={render:()=>z("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(c,{style:{margin:10},children:X(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(c,{style:{margin:10},children:Array.from({length:1e3}).map((r,i)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:i},i))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},I={render:()=>{const r=(u,m=0)=>{const p=[20,40,80,77];return Array.from({length:u}).map((b,l)=>(l+=m,e("div",{style:{height:p[l%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:l},l)))},[i,a]=o.useState(!1),d=async()=>{a(!0),await new Promise(u=>setTimeout(u,1e3)),a(!1)},y=100,[v,R]=o.useState(()=>r(y)),_=o.useRef(-1),h=v.length;return e("div",{style:{padding:"200px 200px 0px 200px"},children:z(c,{onRangeChange:async(u,m)=>{m+50>h&&_.current<h&&(_.current=h,await d(),R(p=>[...p,...r(y,p.length)]))},children:[v,i&&e(ne,{})]})})}};var M,j,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(j=x.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var F,D,J;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(J=(D=S.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var P,G,Y;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var K,Z,Q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};const Ve=["Default","Horizontal","Complex","InfiniteScrolling"];export{w as Complex,x as Default,S as Horizontal,I as InfiniteScrolling,Ve as __namedExportsOrder,Re as default};
//# sourceMappingURL=WVList.stories-3664bfbc.js.map
