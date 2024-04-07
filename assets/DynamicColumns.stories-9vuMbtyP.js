import{j as e}from"./index-DvWd75dA.js";import{r as u}from"./entry-preview-8m_gBI-P.js";import{V as c}from"./VList-CalZKaqG.js";import"./Virtualizer-DX5edObc.js";import"./useRerender-CUup1IBo.js";import"./useChildren-BbHk2Kcs.js";const g={component:c},t={name:"DynamicColumns",render:()=>{const[s,m]=u.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsxs("label",{children:["columns",e.jsx("input",{type:"number",value:s,min:1,max:100,step:1,style:{marginLeft:4},onChange:n=>{m(Number(n.target.value))}})]})}),e.jsx(c,{style:{flex:1},children:Array.from({length:1e3}).map((n,r)=>r).reduce((n,r)=>(r%s===0&&n.push([]),n[n.length-1].push(r),n),[]).map((n,r)=>e.jsx("div",{style:{display:"flex",borderBottom:"solid 1px #ccc",height:100},children:n.map(l=>e.jsx("div",{style:{flex:1/s,background:"#fff",borderRight:"solid 1px #ccc"},children:l},l))},r))})]})}};var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        }, ([] as number[][])).map((arr, i) => {
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,g as default};
