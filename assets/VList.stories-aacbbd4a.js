import{j as e,a as o}from"./jsx-runtime-f8a6c6ea.js";import{r as l}from"./index-5284b0bf.js";import{V as d}from"./VList-a61fc3d9.js";import"./DefaultWindow-98929275.js";import"./index-480187bb.js";const oe={component:d},k=t=>{const n=[20,40,80,77];return Array.from({length:t}).map((s,r)=>e("div",{style:{height:n[r%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))},p={render:()=>e(d,{style:{height:"100vh"},children:k(1e3)})},C=t=>Array.from({length:t}).map((n,s)=>o("div",{style:{width:s%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",s]},s)),f={render:()=>o("div",{children:[o("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(d,{style:{width:"100%",height:200},horizontal:!0,children:C(1e3)})]}),o("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(d,{style:{width:"100%",height:200},horizontal:!0,mode:"rtl",children:C(1e3)})]})]})},m={render:()=>e(d,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((t,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},g={render:()=>{const t=l.useRef(null);return l.useEffect(()=>{var n;(n=t.current)==null||n.scrollToIndex(999)},[]),e(d,{ref:t,style:{height:"100vh"},mode:"reverse",children:k(1e3)})}},y={render:()=>e(d,{style:{height:"100vh"},itemSize:570,children:Array.from({length:100}).map((t,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((s,r)=>{const c=r===0;return e("div",{style:{height:60,background:"#fff",...c&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:c?n:`${n} - ${r}`},r)})},n))})},v={render:()=>{const[n,s]=l.useState(567),[r,c]=l.useState(1e3),a=l.useRef(null);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{children:[e("input",{type:"number",value:n,onChange:i=>{s(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=a.current)==null||i.scrollToIndex(n)},children:"scroll to index"}),e("button",{onClick:()=>{s(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:o("div",{children:[e("input",{type:"number",value:r,onChange:i=>{c(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=a.current)==null||i.scrollTo(r)},children:"scroll to offset"}),e("button",{onClick:()=>{var i;(i=a.current)==null||i.scrollBy(r)},children:"scroll by offset"})]})}),e(d,{ref:a,style:{flex:1},children:k(1e3)})]})}},b={render:()=>{const[t,n]=l.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(d,{style:{height:"100vh"},children:Array.from({length:1e3}).map((s,r)=>{const c=!!t[r];return o("div",{style:{borderBottom:"solid 1px #ccc",background:c?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(a=>({...a,[r]:!a[r]}))},children:c?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:c?200:40,transition:"0.5s ease"},children:r})]},r)})})}},x={render:()=>{const n=(h,u)=>Array.from({length:h}).map((ee,T)=>(T+=u,T)),[s,r]=l.useState(!1),[c,a]=l.useState(()=>n(4,0));l.useEffect(()=>{const h=setInterval(()=>{a(u=>s?[...n(4,u[0]-4),...u]:[...u,...n(4,u[u.length-1]+1)])},500);return()=>{clearInterval(h)}});const i=[20,40,80,77];return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{children:[o("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!s,onChange:()=>{r(!1)}}),"append"]}),o("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:s,onChange:()=>{r(!0)}}),"prepend"]})]}),e(d,{style:{flex:1},children:c.map((h,u)=>e("div",{style:{height:i[u%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:h},h))})]})}},Y=l.forwardRef(({children:t,attrs:n,height:s},r)=>e("div",{ref:r,...n,children:e("ul",{style:{position:"relative",height:s,margin:0},children:t})})),Z=l.forwardRef(({children:t,style:n},s)=>e("li",{ref:s,style:{...n,marginLeft:30},children:t})),L={render:()=>o("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(d,{style:{flex:1,background:"#fff"},element:Y,itemElement:Z,overscan:20,children:Array.from({length:1e3}).map((t,n)=>n)})]})};var S,w,H;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }}>{createRows(1000)}</VList>;
  }
}`,...(H=(w=p.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var A,R,_;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <div style={{
        padding: 10,
        direction: "ltr"
      }}>
          <div>ltr</div>
          <VList style={{
          width: "100%",
          height: 200
        }} horizontal>
            {createColumns(1000)}
          </VList>
        </div>
        <div style={{
        padding: 10,
        direction: "rtl"
      }}>
          <div>rtl</div>
          <VList style={{
          width: "100%",
          height: 200
        }} horizontal mode="rtl">
            {createColumns(1000)}
          </VList>
        </div>
      </div>;
  }
}`,...(_=(R=f.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var V,E,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      width: 400,
      height: 400,
      padding: "80px 20px",
      background: "lightgray"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        return <div key={i} style={{
          height: 100,
          borderRadius: 8,
          margin: 10,
          padding: 10,
          background: "white"
        }}>
              {i}
            </div>;
      })}
      </VList>;
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var B,G,N;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VListHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex(999);
    }, []);
    return <VList ref={ref} style={{
      height: "100vh"
    }} mode="reverse">
        {createRows(1000)}
      </VList>;
  }
}`,...(N=(G=g.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var z,D,O;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <VList style={{
      height: "100vh"
    }} itemSize={570}>
        {Array.from({
        length: 100
      }).map((_, i) => {
        return <div key={i} style={{
          borderBottom: "solid 1px #ccc"
        }}>
              {Array.from({
            length: 10
          }).map((_, j) => {
            const isGroupTop = j === 0;
            return <div key={j} style={{
              height: 60,
              background: "#fff",
              ...(isGroupTop && {
                top: 0,
                height: 30,
                position: "sticky",
                borderBottom: "solid 1px #ccc"
              })
            }}>
                    {isGroupTop ? i : \`\${i} - \${j}\`}
                  </div>;
          })}
            </div>;
      })}
      </VList>;
  }
}`,...(O=(D=y.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var j,M,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollOffset, setScrollOffset] = useState(1000);
    const ref = useRef<VListHandle>(null);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <input type="number" value={scrollIndex} onChange={e => {
          setScrollIndex(Number(e.target.value));
        }} />
          <button onClick={() => {
          ref.current?.scrollToIndex(scrollIndex);
        }}>
            scroll to index
          </button>
          <button onClick={() => {
          setScrollIndex(Math.round(LENGTH * Math.random()));
        }}>
            randomize
          </button>
        </div>
        <div>
          <div>
            <input type="number" value={scrollOffset} onChange={e => {
            setScrollOffset(Number(e.target.value));
          }} />
            <button onClick={() => {
            ref.current?.scrollTo(scrollOffset);
          }}>
              scroll to offset
            </button>
            <button onClick={() => {
            ref.current?.scrollBy(scrollOffset);
          }}>
              scroll by offset
            </button>
          </div>
        </div>
        <VList ref={ref} style={{
        flex: 1
      }}>
          {createRows(LENGTH)}
        </VList>
      </div>;
  }
}`,...(P=(M=v.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,$,W;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [actives, setActives] = useState<{
      [key: number]: boolean;
    }>({
      0: true,
      3: true,
      6: true,
      9: true,
      12: true
    });
    return <VList style={{
      height: "100vh"
    }}>
        {Array.from({
        length: 1000
      }).map((_, i) => {
        const active = !!actives[i];
        return <div key={i} style={{
          borderBottom: "solid 1px #ccc",
          background: active ? "lightpink" : "#fff",
          display: "flex",
          flexDirection: "row",
          transition: "0.5s ease"
        }}>
              <div>
                <button style={{
              height: "100%"
            }} onClick={() => {
              setActives(prev => ({
                ...prev,
                [i]: !prev[i]
              }));
            }}>
                  {active ? "close" : "open"}
                </button>
              </div>
              <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            height: active ? 200 : 40,
            transition: "0.5s ease"
          }}>
                {i}
              </div>
            </div>;
      })}
      </VList>;
  }
}`,...(W=($=b.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var q,F,J;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const BATCH_LENGTH = 4;
    const createRows = (num: number, offset: number) => {
      return Array.from({
        length: num
      }).map((_, i) => {
        i += offset;
        return i;
      });
    };
    const [prepend, setPrepend] = useState(false);
    const [rows, setRows] = useState(() => createRows(BATCH_LENGTH, 0));
    useEffect(() => {
      const timer = setInterval(() => {
        setRows(prev => prepend ? [...createRows(BATCH_LENGTH, prev[0] - BATCH_LENGTH), ...prev] : [...prev, ...createRows(BATCH_LENGTH, prev[prev.length - 1]! + 1)]);
      }, 500);
      return () => {
        clearInterval(timer);
      };
    });
    const heights = [20, 40, 80, 77];
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={!prepend} onChange={() => {
            setPrepend(false);
          }} />
            append
          </label>
          <label style={{
          marginRight: 4
        }}>
            <input type="radio" style={{
            marginLeft: 4
          }} checked={prepend} onChange={() => {
            setPrepend(true);
          }} />
            prepend
          </label>
        </div>
        <VList style={{
        flex: 1
      }}>
          {rows.map((d, i) => <div key={d} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d}
            </div>)}
        </VList>
      </div>;
  }
}`,...(J=(F=x.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,X;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: 400,
      height: 400,
      border: "solid 1px darkgray",
      borderRadius: 8,
      background: "lightgray",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
        <div style={{
        padding: 4
      }}>header</div>
        <VList style={{
        flex: 1,
        background: "#fff"
      }} element={UlList} itemElement={Li} overscan={20}>
          {Array.from({
          length: 1000
        }).map((_, i) => i)}
        </VList>
      </div>;
  }
}`,...(X=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const le=["Default","Horizontal","PaddingAndMargin","Reverse","Sticky","ScrollTo","WithState","IncreasingItems","Ul"];export{p as Default,f as Horizontal,x as IncreasingItems,m as PaddingAndMargin,g as Reverse,v as ScrollTo,y as Sticky,L as Ul,b as WithState,le as __namedExportsOrder,oe as default};
//# sourceMappingURL=VList.stories-aacbbd4a.js.map
