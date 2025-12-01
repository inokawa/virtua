import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-NYKfIC3L.js";import{V as i}from"./VList-DrqwjOnB.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-CQlcNcio.js";import"./useLatestRef-6HgitLmS.js";import"./useChildren-AcqrbvmD.js";import"./index-C7k27cmR.js";import"./index-DTD_UfaK.js";const g={component:i},t={name:"DynamicColumns",render:()=>{const[s,l]=m.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx("div",{children:e.jsxs("label",{children:["columns",e.jsx("input",{type:"number",value:s,min:1,max:100,step:1,style:{marginLeft:4},onChange:n=>{l(Number(n.target.value))}})]})}),e.jsx(i,{style:{flex:1},children:Array.from({length:1e3}).map((n,r)=>r).reduce((n,r)=>(r%s===0&&n.push([]),n[n.length-1].push(r),n),[]).map((n,r)=>e.jsx("div",{style:{display:"flex",borderBottom:"solid 1px #ccc",height:100},children:n.map(o=>e.jsx("div",{style:{flex:1/s,background:"#fff",borderRight:"solid 1px #ccc"},children:o},o))},r))})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,g as default};
