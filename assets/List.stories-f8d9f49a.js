import{j as e,a as o}from"./jsx-runtime-c3d7f245.js";import{r as h}from"./index-c6dae603.js";import{L as d}from"./List-b32e0fa8.js";const ee={component:d},J=i=>{const n=[20,40,80,77];return Array.from({length:i}).map((t,r)=>e("div",{style:{height:n[r%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:r},r))},p={render:()=>e(d,{style:{height:"100vh"},children:J(1e3)})},k=i=>Array.from({length:i}).map((n,t)=>o("div",{style:{width:t%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",t]},t)),g={render:()=>o("div",{children:[o("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(d,{style:{width:"100%",height:200},horizontal:!0,children:k(1e3)})]}),o("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(d,{style:{width:"100%",height:200},horizontal:!0,rtl:!0,children:k(1e3)})]})]})},f={render:()=>e(d,{style:{width:400,height:400,padding:"80px 20px",background:"lightgray"},children:Array.from({length:1e3}).map((i,n)=>e("div",{style:{height:100,borderRadius:8,margin:10,padding:10,background:"white"},children:n},n))})},m={render:()=>e(d,{style:{height:"100vh"},itemSize:570,children:Array.from({length:100}).map((i,n)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((t,r)=>{const l=r===0;return e("div",{style:{height:60,background:"#fff",...l&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:l?n:`${n} - ${r}`},r)})},n))})},y={render:()=>{const[n,t]=h.useState(567),[r,l]=h.useState(1e3),c=h.useRef(null);return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{children:[e("input",{type:"number",value:n,onChange:s=>{t(Number(s.target.value))}}),e("button",{onClick:()=>{var s;(s=c.current)==null||s.scrollToIndex(n)},children:"scroll to index"}),e("button",{onClick:()=>{t(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:o("div",{children:[e("input",{type:"number",value:r,onChange:s=>{l(Number(s.target.value))}}),e("button",{onClick:()=>{var s;(s=c.current)==null||s.scrollTo(r)},children:"scroll to offset"}),e("button",{onClick:()=>{var s;(s=c.current)==null||s.scrollBy(r)},children:"scroll by offset"})]})}),e(d,{ref:c,style:{flex:1},children:J(1e3)})]})}},v={render:()=>{const[i,n]=h.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(d,{style:{height:"100vh"},children:Array.from({length:1e3}).map((t,r)=>{const l=!!i[r];return o("div",{style:{borderBottom:"solid 1px #ccc",background:l?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{n(c=>({...c,[r]:!c[r]}))},children:l?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:l?200:40,transition:"0.5s ease"},children:r})]},r)})})}},b={render:()=>{const n=(u,a)=>Array.from({length:u}).map((V,L)=>(L+=a,L)),[t,r]=h.useState(!1),[l,c]=h.useState(()=>n(4,0));h.useEffect(()=>{const u=setInterval(()=>{c(a=>t?[...n(4,a[0]-4),...a]:[...a,...n(4,a[a.length-1]+1)])},500);return()=>{clearInterval(u)}});const s=[20,40,80,77];return o("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[o("div",{children:[o("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!t,onChange:()=>{r(!1)}}),"append"]}),o("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:t,onChange:()=>{r(!0)}}),"prepend"]})]}),e(d,{style:{flex:1},children:l.map((u,a)=>e("div",{style:{height:s[a%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:u},u))})]})}},K=h.forwardRef(({children:i,style:n,scrollSize:t},r)=>e("div",{ref:r,style:n,children:e("ul",{style:{position:"relative",height:t,margin:0},children:i})})),Q=h.forwardRef(({children:i,style:n},t)=>e("li",{ref:t,style:{...n,marginLeft:30},children:i})),x={render:()=>o("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(d,{style:{flex:1,background:"#fff"},element:K,itemElement:Q,overscan:20,children:Array.from({length:1e3}).map((i,n)=>n)})]})};var T,C,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
      height: "100vh"
    }}>{createRows(1000)}</List>;
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,A,H;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div>
        <div style={{
        padding: 10,
        direction: "ltr"
      }}>
          <div>ltr</div>
          <List style={{
          width: "100%",
          height: 200
        }} horizontal>
            {createColumns(1000)}
          </List>
        </div>
        <div style={{
        padding: 10,
        direction: "rtl"
      }}>
          <div>rtl</div>
          <List style={{
          width: "100%",
          height: 200
        }} horizontal rtl>
            {createColumns(1000)}
          </List>
        </div>
      </div>;
  }
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var _,R,E;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
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
      </List>;
  }
}`,...(E=(R=f.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var B,G,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
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
      </List>;
  }
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var N,z,D;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const LENGTH = 1000;
    const [scrollIndex, setScrollIndex] = useState(567);
    const [scrollOffset, setScrollOffset] = useState(1000);
    const ref = useRef<ListHandle>(null);
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
        <List ref={ref} style={{
        flex: 1
      }}>
          {createRows(LENGTH)}
        </List>
      </div>;
  }
}`,...(D=(z=y.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var O,j,M;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    return <List style={{
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
      </List>;
  }
}`,...(M=(j=v.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var P,U,$;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <List style={{
        flex: 1
      }}>
          {rows.map((d, i) => <div key={d} style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff"
        }}>
              {d}
            </div>)}
        </List>
      </div>;
  }
}`,...($=(U=b.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var W,q,F;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <List style={{
        flex: 1,
        background: "#fff"
      }} element={UlList} itemElement={Li} overscan={20}>
          {Array.from({
          length: 1000
        }).map((_, i) => i)}
        </List>
      </div>;
  }
}`,...(F=(q=x.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const ne=["Default","Horizontal","PaddingAndMargin","Sticky","ScrollTo","WithState","IncreasingItems","Ul"];export{p as Default,g as Horizontal,b as IncreasingItems,f as PaddingAndMargin,y as ScrollTo,m as Sticky,x as Ul,v as WithState,ne as __namedExportsOrder,ee as default};
//# sourceMappingURL=List.stories-f8d9f49a.js.map
