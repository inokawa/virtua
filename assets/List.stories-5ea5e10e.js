import{j as e,a as s}from"./jsx-runtime-6c4ce591.js";import{r as a}from"./index-fcd6345f.js";import{L as u}from"./List-caf073c5.js";const V={component:u},$=o=>{const t=[20,40,80,77];return Array.from({length:o}).map((r,n)=>e("div",{style:{height:t[n%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:n},n))},p={render:()=>e(u,{style:{height:"100vh"},children:$(1e3)})},L=o=>Array.from({length:o}).map((t,r)=>s("div",{style:{width:r%3===0?100:60,borderRight:"solid 1px #ccc",background:"#fff"},children:["Column ",r]},r)),f={render:()=>s("div",{children:[s("div",{style:{padding:10,direction:"ltr"},children:[e("div",{children:"ltr"}),e(u,{style:{width:"100%",height:200},horizontal:!0,children:L(1e3)})]}),s("div",{style:{padding:10,direction:"rtl"},children:[e("div",{children:"rtl"}),e(u,{style:{width:"100%",height:200},horizontal:!0,rtl:!0,children:L(1e3)})]})]})},m={render:()=>e(u,{style:{height:"100vh"},itemSize:570,children:Array.from({length:100}).map((o,t)=>e("div",{style:{borderBottom:"solid 1px #ccc"},children:Array.from({length:10}).map((r,n)=>{const l=n===0;return e("div",{style:{height:60,background:"#fff",...l&&{top:0,height:30,position:"sticky",borderBottom:"solid 1px #ccc"}},children:l?t:`${t} - ${n}`},n)})},t))})},g={render:()=>{const[t,r]=a.useState(567),[n,l]=a.useState(1e3),c=a.useRef(null);return s("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[s("div",{children:[e("input",{type:"number",value:t,onChange:i=>{r(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=c.current)==null||i.scrollToIndex(t)},children:"scroll to index"}),e("button",{onClick:()=>{r(Math.round(1e3*Math.random()))},children:"randomize"})]}),e("div",{children:s("div",{children:[e("input",{type:"number",value:n,onChange:i=>{l(Number(i.target.value))}}),e("button",{onClick:()=>{var i;(i=c.current)==null||i.scrollTo(n)},children:"scroll to offset"}),e("button",{onClick:()=>{var i;(i=c.current)==null||i.scrollBy(n)},children:"scroll by offset"})]})}),e(u,{ref:c,style:{flex:1},children:$(1e3)})]})}},v={render:()=>{const[o,t]=a.useState({0:!0,3:!0,6:!0,9:!0,12:!0});return e(u,{style:{height:"100vh"},children:Array.from({length:1e3}).map((r,n)=>{const l=!!o[n];return s("div",{style:{borderBottom:"solid 1px #ccc",background:l?"lightpink":"#fff",display:"flex",flexDirection:"row",transition:"0.5s ease"},children:[e("div",{children:e("button",{style:{height:"100%"},onClick:()=>{t(c=>({...c,[n]:!c[n]}))},children:l?"close":"open"})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:l?200:40,transition:"0.5s ease"},children:n})]},n)})})}},y={render:()=>{const t=(h,d)=>Array.from({length:h}).map((F,x)=>(x+=d,x)),[r,n]=a.useState(!1),[l,c]=a.useState(()=>t(4,0));a.useEffect(()=>{const h=setInterval(()=>{c(d=>r?[...t(4,d[0]-4),...d]:[...d,...t(4,d[d.length-1]+1)])},500);return()=>{clearInterval(h)}});const i=[20,40,80,77];return s("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[s("div",{children:[s("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:!r,onChange:()=>{n(!1)}}),"append"]}),s("label",{style:{marginRight:4},children:[e("input",{type:"radio",style:{marginLeft:4},checked:r,onChange:()=>{n(!0)}}),"prepend"]})]}),e(u,{style:{flex:1},children:l.map((h,d)=>e("div",{style:{height:i[d%4],borderBottom:"solid 1px #ccc",background:"#fff"},children:h},h))})]})}},W=a.forwardRef(({children:o,style:t,scrollSize:r},n)=>e("div",{ref:n,style:t,children:e("ul",{style:{position:"relative",height:r,margin:0},children:o})})),q=a.forwardRef(({children:o,style:t},r)=>e("li",{ref:r,style:{...t,marginLeft:30},children:o})),b={render:()=>s("div",{style:{width:400,height:400,border:"solid 1px darkgray",borderRadius:8,background:"lightgray",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e("div",{style:{padding:4},children:"header"}),e(u,{style:{flex:1,background:"#fff"},element:W,itemElement:q,overscan:20,children:Array.from({length:1e3}).map((o,t)=>t)})]})};var k,T,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <List style={{
      height: "100vh"
    }}>{createRows(1000)}</List>;
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,H,w;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(H=f.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var A,_,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var R,B,G;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var I,N,z;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(N=v.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,O,j;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var M,P,U;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const X=["Default","Horizontal","Sticky","ScrollTo","WithState","IncreasingItems","Ul"];export{p as Default,f as Horizontal,y as IncreasingItems,g as ScrollTo,m as Sticky,b as Ul,v as WithState,X as __namedExportsOrder,V as default};
//# sourceMappingURL=List.stories-5ea5e10e.js.map
