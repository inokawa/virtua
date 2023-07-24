import{j as e,a as k}from"./jsx-runtime-f8a6c6ea.js";import{r as l}from"./index-5284b0bf.js";import{S as ee}from"./components-a67887bf.js";import{f as ne,u as te,a as re,b as V,c as B,r as z,e as se,v as ie,W as oe,d as ae,j as le,k as de,m as ce,i as ue}from"./Window-2217e727.js";import{L as me}from"./ListItem-25b7751f.js";import"./index-480187bb.js";const m=({children:t,overscan:s=4,initialItemSize:i,initialItemCount:p,horizontal:y,element:_=oe,itemElement:S="div",onScrollStop:v,onRangeChange:d,...o})=>{const c=l.useMemo(()=>ne(t),[t]),g=c.length,f=te(v),[Q,X]=l.useState(!1),[a,W,T,h]=re(()=>{const n=!!y,r=ae(g,i,p,!1,u=>{X(u),u||f[z]&&f[z]()});return[r,le(r,n),de(r,n),n]});a._updateCacheLength(g);const[R,I]=V(a,a._getRange),Z=V(a,a._getJumpCount),L=V(a,a._getCorrectedScrollSize,!0),E=l.useRef(null);B(()=>{const n=E[z],r=W._observeRoot(n),u=T._initRoot(n);return()=>{r(),u()}},[]),B(()=>{const n=a._flushJump();n&&T._fixScrollJump(n)},[Z]),l.useEffect(()=>{d&&d({start:R,end:I,count:g})},[R,I]);const q=ce(R-s,0),A=ue(I+s,g-1),$=l.useMemo(()=>{const n=[];for(let r=q;r<=A;r++){const u=c[r];se(u)&&n.push(e(me,{_resizer:W,_store:a,_index:r,_element:S,_children:u,_isHorizontal:h,_isRtl:!1},u.key||r))}return n},[c,q,A]);return e(_,{ref:E,width:h?L:void 0,height:h?void 0:L,scrolling:Q,attrs:l.useMemo(()=>({...o,style:{overflow:"visible",display:h?"inline-block":"block",width:h?"auto":"100%",height:h?"100%":"auto",padding:0,margin:0,...o.style}}),ie(o)),children:$})};try{m.displayName="WVList",m.__docgenInfo={description:"Virtualized list component controlled by the window scrolling. See {@link WVListProps}.",displayName:"WVList",props:{children:{defaultValue:null,description:"Elements rendered by this component.",name:"children",required:!0,type:{name:"ReactNode"}},overscan:{defaultValue:{value:"4"},description:`Number of items to render above/below the visible bounds of the list. You can increase to avoid showing blank items in fast scrolling.
@defaultValue 4`,name:"overscan",required:!1,type:{name:"number"}},initialItemSize:{defaultValue:null,description:`Item size hint for unmeasured items. It will help to reduce scroll jump when items are measured if used properly.

- If not set, initial item sizes will be automatically estimated from measured sizes. This is recommended for most cases.
- If set, you can opt out estimation and use the value as initial item size.`,name:"initialItemSize",required:!1,type:{name:"number"}},initialItemCount:{defaultValue:null,description:"If set, the specified amount of items will be mounted in the initial rendering regardless of the container size. This prop is mostly for SSR.",name:"initialItemCount",required:!1,type:{name:"number"}},horizontal:{defaultValue:null,description:"If true, rendered as a horizontally scrollable list. Otherwise rendered as a vertically scrollable list.",name:"horizontal",required:!1,type:{name:"boolean"}},element:{defaultValue:null,description:`Customized element type for scrollable element. This element will get {@link CustomWindowComponentProps} as props.
@defaultValue {@link Window }`,name:"element",required:!1,type:{name:"ForwardRefExoticComponent<CustomWindowComponentProps & RefAttributes<any>>"}},itemElement:{defaultValue:{value:"div"},description:`Customized element type for item element. This element will get {@link CustomItemComponentProps } as props.
@defaultValue "div"`,name:"itemElement",required:!1,type:{name:"CustomItemComponentOrElement"}},onScrollStop:{defaultValue:null,description:"Callback invoked when scrolling stops.",name:"onScrollStop",required:!1,type:{name:"() => void"}},onRangeChange:{defaultValue:null,description:"Callback invoked when visible items range changes.",name:"onRangeChange",required:!1,type:{name:"(payload: { start: number; end: number; count: number; }) => void"}}}}}catch{}const G=t=>{const s=[20,40,80,77];return Array.from({length:t}).map((i,p)=>e("div",{style:{height:s[p%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:p},p))},pe=t=>Array.from({length:t}).map((s,i)=>k("div",{style:{width:i%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",i]},i)),xe={component:m},b={render:()=>e("div",{style:{padding:200},children:e(m,{style:{border:"solid 1px gray"},children:G(1e3)})})},x={render:()=>e("div",{style:{padding:200},children:e(m,{horizontal:!0,style:{height:400,border:"solid 1px gray"},children:pe(1e3)})})},w={render:()=>k("div",{style:{display:"flex",flexDirection:"row"},children:[e("div",{style:{flex:1,display:"flex",paddingTop:600},children:e(m,{style:{margin:10},children:G(1e3)})}),e("div",{style:{flex:3,paddingBottom:600},children:e(m,{style:{margin:10},children:Array.from({length:1e3}).map((t,s)=>e("div",{style:{height:200,borderRadius:8,margin:16,background:"#fff"},children:s},s))})}),e("div",{style:{flex:2,padding:20,paddingTop:300},children:e("div",{style:{top:0,height:400,position:"sticky",background:"white"}})})]})},C={render:()=>{const t=(d,o=0)=>{const c=[20,40,80,77];return Array.from({length:d}).map((g,f)=>(f+=o,e("div",{style:{height:c[f%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:f},f)))},[s,i]=l.useState(!1),p=async()=>{i(!0),await new Promise(d=>setTimeout(d,1e3)),i(!1)},y=100,[_,S]=l.useState(()=>t(y)),v=l.useRef(-1);return e("div",{style:{padding:"200px 200px 0px 200px"},children:k(m,{onRangeChange:async({end:d,count:o})=>{d+50>o&&v.current<o&&(v.current=o,await p(),S(c=>[...c,...t(y,c.length)]))},children:[_,e(ee,{show:s})]})})}};var H,M,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,O,F;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(O=x.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var P,U,D;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(U=w.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var J,K,Y;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const we=["Default","Horizontal","Complex","InfiniteScrolling"];export{w as Complex,b as Default,x as Horizontal,C as InfiniteScrolling,we as __namedExportsOrder,xe as default};
//# sourceMappingURL=WVList.stories-85ae1bd2.js.map
