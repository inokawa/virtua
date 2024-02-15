import{j as o,a as r}from"./jsx-runtime-CWvgoIdH.js";import{r as d}from"./index-D3g0PtM7.js";import{V as m}from"./VList-B6mYKQNL.js";import"./Virtualizer-Bf7jCmvk.js";import"./useRerender-BgmOizsn.js";import"./useChildren-KTFcnUJ7.js";import"./index-4KpVZEbj.js";const E={component:m},t={name:"DynamicColumns",render:()=>{const[s,u]=d.useState(3);return o("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[r("div",{children:o("label",{children:["columns",r("input",{type:"number",value:s,min:1,max:100,step:1,style:{marginLeft:4},onChange:n=>{u(Number(n.target.value))}})]})}),r(m,{style:{flex:1},children:Array.from({length:1e3}).map((n,e)=>e).reduce((n,e)=>(e%s===0&&n.push([]),n[n.length-1].push(e),n),[]).map((n,e)=>r("div",{style:{display:"flex",borderBottom:"solid 1px #ccc",height:100},children:n.map(l=>r("div",{style:{flex:1/s,background:"#fff",borderRight:"solid 1px #ccc"},children:l},l))},e))})]})}};var i,a,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,E as default};
