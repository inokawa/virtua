import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-DnlaNrOL.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-D4TIVbzz.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=36,f=Array.from({length:1e4}).map((e,t)=>({id:t,name:o.person.fullName(),email:o.internet.email(),city:o.location.city(),age:o.number.int({min:18,max:80}),salary:o.number.int({min:3e4,max:2e5}),sales:Array.from({length:d}).map(()=>o.number.int({min:0,max:5e4}))})),p=e=>`$`+e.toLocaleString(),m=[{name:``,width:40,select:!0},{name:`ID`,width:60,get:e=>e.id},{name:`Name`,width:180,get:e=>e.name},{name:`Email`,width:240,get:e=>e.email},{name:`City`,width:160,get:e=>e.city},{name:`Age`,width:70,get:e=>e.age,align:`right`},{name:`Salary`,width:110,get:e=>e.salary,format:p,align:`right`},...Array.from({length:d}).map((e,t)=>({name:new Date(2024,t).toLocaleString(`en`,{month:`short`,year:`2-digit`}),width:90,get:e=>e.sales[t],format:p,align:`right`})),{name:`Actions`,width:90,actions:!0}],h=m.map(e=>`get`in e&&e.align===`right`?`~`+(e.format??String)(Math.round(f.reduce((t,n)=>t+e.get(n),0)/f.length)):``),g=3,_={display:`flex`,alignItems:`center`,boxSizing:`border-box`,padding:`0 12px`,background:`#fff`,borderRight:`solid 1px #e2e3e3`,borderBottom:`solid 1px #e2e3e3`,overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`},v={..._,background:`#f8f9fa`,color:`#5f6368`,fontWeight:500,userSelect:`none`},y={padding:`4px 12px`,border:`solid 1px #dadce0`,borderRadius:4,background:`#fff`,font:`inherit`,cursor:`pointer`},b={render:()=>{let[e,t]=(0,c.useState)(new Set),n=(0,c.useId)();return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`,font:`13px/1 system-ui, sans-serif`,color:`#202124`},children:[(0,l.jsx)(`h2`,{id:n,style:{margin:8,fontSize:16},children:`People`}),(0,l.jsx)(a,{"aria-labelledby":n,style:{flex:1,boxSizing:`border-box`,border:`solid 1px #e2e3e3`},rows:f.length+2,rowHeight:36,cols:m,colWidth:`width`,headerRows:1,footerRows:1,headerCols:g,children:(n,r,{colIndex:i})=>{if(n===0||n>f.length)return n===0?`actions`in r?(0,l.jsx)(`div`,{style:v,children:r.name}):`select`in r?(0,l.jsx)(`div`,{style:{...v,justifyContent:`center`,padding:0,boxShadow:i===2?`inset -1px 0 #dadce0`:void 0},children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all`,checked:e.size===f.length,onChange:e=>{t(e.target.checked?new Set(f.map(e=>e.id)):new Set)}})}):(0,l.jsx)(`div`,{style:{...v,justifyContent:r.align===`right`?`flex-end`:void 0,fontVariantNumeric:r.align===`right`?`tabular-nums`:void 0,boxShadow:i===2?`inset -1px 0 #dadce0`:void 0},children:r.name}):(0,l.jsx)(`div`,{style:{...v,justifyContent:r.align===`right`?`flex-end`:void 0,fontVariantNumeric:r.align===`right`?`tabular-nums`:void 0,boxShadow:i===2?`inset -1px 0 #dadce0, inset 0 1px #dadce0`:`inset 0 1px #dadce0`},children:r.name===`Name`?e.size.toLocaleString()+` selected`:h[i]});let a=f[n-1],o=e.has(a.id);if(`actions`in r)return(0,l.jsx)(`div`,{style:{..._,...o&&{background:`#e8f0fe`},justifyContent:`center`},children:(0,l.jsx)(`button`,{type:`button`,"aria-label":`Edit `+a.name,style:y,onClick:()=>alert(`Edit `+a.name),children:`Edit`})});if(`select`in r)return(0,l.jsx)(`div`,{style:{..._,...o&&{background:`#e8f0fe`},justifyContent:`center`,padding:0,boxShadow:i===2?`inset -1px 0 #dadce0`:void 0},children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select `+a.name,checked:o,onChange:()=>{t(e=>{let t=new Set(e);return t.delete(a.id)||t.add(a.id),t})}})});let s=r.get(a);return(0,l.jsx)(`div`,{style:{..._,...o&&{background:`#e8f0fe`},justifyContent:r.align===`right`?`flex-end`:void 0,fontVariantNumeric:r.align===`right`?`tabular-nums`:void 0,boxShadow:i===2?`inset -1px 0 #dadce0`:void 0},children:r.format?r.format(s):s})}})]})}},x=[`DataTable`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ReadonlySet<number>>(new Set());
    const titleId = useId();
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      font: "13px/1 system-ui, sans-serif",
      color: "#202124"
    }}>
        <h2 id={titleId} style={{
        margin: 8,
        fontSize: 16
      }}>
          People
        </h2>
        <VGrid aria-labelledby={titleId} style={{
        flex: 1,
        boxSizing: "border-box",
        border: "solid 1px #e2e3e3"
      }}
      // the header row, the people and the summary row
      rows={people.length + 2} rowHeight={36} cols={COLUMNS} colWidth="width" headerRows={1} footerRows={1} headerCols={PINNED_COLS}>
          {(rowIndex, column, {
          colIndex
        }) => {
          if (rowIndex === 0 || rowIndex > people.length) {
            if (rowIndex === 0) {
              if ("actions" in column) {
                return <div style={edgeStyle}>{column.name}</div>;
              }
              if ("select" in column) {
                return <div style={{
                  ...edgeStyle,
                  justifyContent: "center",
                  padding: 0,
                  boxShadow: colIndex === PINNED_COLS - 1 ? "inset -1px 0 #dadce0" : undefined
                }}>
                      <input type="checkbox" aria-label="Select all" checked={selected.size === people.length} onChange={e => {
                    setSelected(e.target.checked ? new Set(people.map(p => p.id)) : new Set());
                  }} />
                    </div>;
              }
              return <div style={{
                ...edgeStyle,
                justifyContent: column.align === "right" ? "flex-end" : undefined,
                fontVariantNumeric: column.align === "right" ? "tabular-nums" : undefined,
                boxShadow: colIndex === PINNED_COLS - 1 ? "inset -1px 0 #dadce0" : undefined
              }}>
                    {column.name}
                  </div>;
            }
            return <div style={{
              ...edgeStyle,
              justifyContent: column.align === "right" ? "flex-end" : undefined,
              fontVariantNumeric: column.align === "right" ? "tabular-nums" : undefined,
              boxShadow: colIndex === PINNED_COLS - 1 ? "inset -1px 0 #dadce0, inset 0 1px #dadce0" : "inset 0 1px #dadce0"
            }}>
                  {column.name === "Name" ? selected.size.toLocaleString() + " selected" : AVERAGES[colIndex]}
                </div>;
          }
          const row = people[rowIndex - 1]!;
          const isSelected = selected.has(row.id);
          if ("actions" in column) {
            return <div style={{
              ...cellStyle,
              ...(isSelected && {
                background: "#e8f0fe"
              }),
              justifyContent: "center"
            }}>
                  <button type="button" aria-label={"Edit " + row.name} style={buttonStyle} onClick={() => alert("Edit " + row.name)}>
                    Edit
                  </button>
                </div>;
          }
          if ("select" in column) {
            return <div style={{
              ...cellStyle,
              ...(isSelected && {
                background: "#e8f0fe"
              }),
              justifyContent: "center",
              padding: 0,
              boxShadow: colIndex === PINNED_COLS - 1 ? "inset -1px 0 #dadce0" : undefined
            }}>
                  <input type="checkbox" aria-label={"Select " + row.name} checked={isSelected} onChange={() => {
                setSelected(prev => {
                  const next = new Set(prev);
                  if (!next.delete(row.id)) {
                    next.add(row.id);
                  }
                  return next;
                });
              }} />
                </div>;
          }
          const value = column.get(row);
          return <div style={{
            ...cellStyle,
            ...(isSelected && {
              background: "#e8f0fe"
            }),
            justifyContent: column.align === "right" ? "flex-end" : undefined,
            fontVariantNumeric: column.align === "right" ? "tabular-nums" : undefined,
            boxShadow: colIndex === PINNED_COLS - 1 ? "inset -1px 0 #dadce0" : undefined
          }}>
                {column.format ? column.format(value) : value}
              </div>;
        }}
        </VGrid>
      </div>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as DataTable,x as __namedExportsOrder,u as default};