import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Da9Y0ZE5.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i,t as a}from"./src-CBByf-Sv.js";var o,s,c,l,u;t((()=>{o=e(n(),1),a(),s=r(),c={component:i},l={name:`DynamicColumns`,render:()=>{let[e,t]=(0,o.useState)(3);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100vh`},children:[(0,s.jsx)(`div`,{children:(0,s.jsxs)(`label`,{children:[`columns`,(0,s.jsx)(`input`,{type:`number`,value:e,min:1,max:100,step:1,style:{marginLeft:4},onChange:e=>{t(Number(e.target.value))}})]})}),(0,s.jsx)(i,{style:{flex:1},children:Array.from({length:1e3}).map((e,t)=>t).reduce((t,n)=>(n%e===0&&t.push([]),t[t.length-1].push(n),t),[]).map((t,n)=>(0,s.jsx)(`div`,{style:{display:`flex`,borderBottom:`solid 1px #ccc`,height:100},children:t.map(t=>(0,s.jsx)(`div`,{style:{flex:1/e,background:`#fff`,borderRight:`solid 1px #ccc`},children:t},t))},n))})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};