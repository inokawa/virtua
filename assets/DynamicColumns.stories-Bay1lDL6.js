import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./iframe-AbcOmN7X.js";import{V as m}from"./VList-BF1OJaFH.js";import"./preload-helper-BQ24v_F8.js";import"./Virtualizer-BUIbilF0.js";import"./useLatestRef-CoOY9AUG.js";import"./useChildren-BYCzshYC.js";import"./index-CWCURztF.js";const E={component:m},t={name:"DynamicColumns",render:()=>{const[s,c]=u.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsxs("label",{children:["columns",e.jsx("input",{type:"number",value:s,min:1,max:100,step:1,style:{marginLeft:4},onChange:n=>{c(Number(n.target.value))}})]})}),e.jsx(m,{style:{flex:1},children:Array.from({length:1e3}).map((n,r)=>r).reduce((n,r)=>(r%s===0&&n.push([]),n[n.length-1].push(r),n),[]).map((n,r)=>e.jsx("div",{style:{display:"flex",borderBottom:"solid 1px #ccc",height:100},children:n.map(o=>e.jsx("div",{style:{flex:1/s,background:"#fff",borderRight:"solid 1px #ccc"},children:o},o))},r))})]})}};var i,l,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "DynamicColumns",
  render: () => {
    const ITEM_LENGTH = 1000;
    const [columns, setColumns] = useState(3);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
        <div>
          <label>
            columns
            <input type="number" value={columns} min={1} max={100} step={1} style={{
            marginLeft: 4
          }} onChange={e => {
            setColumns(Number(e.target.value));
          }} />
          </label>
        </div>
        <VList style={{
        flex: 1
      }}>
          {Array.from({
          length: ITEM_LENGTH
        }).map((_, i) => i).reduce((acc, i) => {
          if (i % columns === 0) {
            acc.push([]);
          }
          const prev = acc[acc.length - 1];
          prev.push(i);
          return acc;
        }, [] as number[][]).map((arr, i) => {
          return <div key={i} style={{
            display: "flex",
            borderBottom: "solid 1px #ccc",
            height: 100
          }}>
                  {arr.map(d => <div key={d} style={{
              flex: 1 / columns,
              background: "#fff",
              borderRight: "solid 1px #ccc"
            }}>
                      {d}
                    </div>)}
                </div>;
        })}
        </VList>
      </div>;
  }
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,E as default};
