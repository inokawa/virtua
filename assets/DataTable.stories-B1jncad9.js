import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-CF0obMtn.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-CWjnmLDW.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=36,f=Array.from({length:1e4},(e,t)=>({id:t,name:o.person.fullName(),email:o.internet.email(),city:o.location.city(),age:o.number.int({min:18,max:80}),salary:o.number.int({min:3e4,max:2e5}),sales:Array.from({length:d},()=>o.number.int({min:0,max:5e4}))})),p=e=>`$`+e.toLocaleString(),m=[{name:``,width:40},{name:`ID`,width:60,get:e=>e.id},{name:`Name`,width:180,get:e=>e.name},{name:`Email`,width:240,get:e=>e.email},{name:`City`,width:160,get:e=>e.city},{name:`Age`,width:70,get:e=>e.age,align:`right`},{name:`Salary`,width:110,get:e=>e.salary,format:p,align:`right`},...Array.from({length:d},(e,t)=>({name:new Date(2024,t).toLocaleString(`en`,{month:`short`,year:`2-digit`}),width:90,get:e=>e.sales[t],format:p,align:`right`})),{name:`Actions`,width:90,actions:!0}],h=m.map(({get:e,format:t=String,align:n})=>e&&n===`right`?`~`+t(Math.round(f.reduce((t,n)=>t+e(n),0)/f.length)):``),g={edge:`header`},_={edge:`summary`},v=[g,...f,_],y=3,b={display:`flex`,alignItems:`center`,boxSizing:`border-box`,padding:`0 12px`,background:`#fff`,borderRight:`solid 1px #e2e3e3`,borderBottom:`solid 1px #e2e3e3`,overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`},x={...b,background:`#f8f9fa`,color:`#5f6368`,fontWeight:500,userSelect:`none`},S={padding:`4px 12px`,border:`solid 1px #dadce0`,borderRadius:4,background:`#fff`,font:`inherit`,cursor:`pointer`},C={render:()=>{let[e,t]=(0,c.useState)(new Set),n=(0,c.useId)();return(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`,font:`13px/1 system-ui, sans-serif`,color:`#202124`},children:[(0,l.jsx)(`h2`,{id:n,style:{margin:8,fontSize:16},children:`People`}),(0,l.jsx)(a,{"aria-labelledby":n,style:{flex:1,boxSizing:`border-box`,border:`solid 1px #e2e3e3`},rows:v,rowHeight:36,cols:m,colWidth:`width`,headerRows:1,footerRows:1,headerCols:y,children:(n,r,{colIndex:i})=>{let a=`edge`in n,o=[];i===2&&o.push(`inset -1px 0 #dadce0`),a&&n.edge===`summary`&&o.push(`inset 0 1px #dadce0`);let s={...a?x:b,justifyContent:r.align===`right`?`flex-end`:void 0,fontVariantNumeric:r.align===`right`?`tabular-nums`:void 0,boxShadow:o.join(`, `)||void 0};if(a&&n.edge===`header`)return r.actions||r.get?(0,l.jsx)(`div`,{style:s,children:r.name}):(0,l.jsx)(`div`,{style:{...s,justifyContent:`center`,padding:0},children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select all`,checked:e.size===f.length,onChange:e=>{t(e.target.checked?new Set(f.map(e=>e.id)):new Set)}})});if(a)return(0,l.jsx)(`div`,{style:s,children:r.name===`Name`?e.size.toLocaleString()+` selected`:h[i]});let c=e.has(n.id);if(c&&(s.background=`#e8f0fe`),r.actions)return(0,l.jsx)(`div`,{style:{...s,justifyContent:`center`},children:(0,l.jsx)(`button`,{type:`button`,"aria-label":`Edit `+n.name,style:S,onClick:()=>alert(`Edit `+n.name),children:`Edit`})});if(!r.get)return(0,l.jsx)(`div`,{style:{...s,justifyContent:`center`,padding:0},children:(0,l.jsx)(`input`,{type:`checkbox`,"aria-label":`Select `+n.name,checked:c,onChange:()=>{t(e=>{let t=new Set(e);return t.delete(n.id)||t.add(n.id),t})}})});let u=r.get(n);return(0,l.jsx)(`div`,{style:s,children:r.format?r.format(u):u})}})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      }} rows={ROWS} rowHeight={36} cols={COLUMNS} colWidth="width" headerRows={1} footerRows={1} headerCols={PINNED_COLS}>
          {(row, column, {
          colIndex
        }) => {
          const isEdge = "edge" in row;
          const shadows: string[] = [];
          if (colIndex === PINNED_COLS - 1) {
            shadows.push("inset -1px 0 #dadce0");
          }
          if (isEdge && row.edge === "summary") {
            shadows.push("inset 0 1px #dadce0");
          }
          const style: CSSProperties = {
            ...(isEdge ? edgeStyle : cellStyle),
            justifyContent: column.align === "right" ? "flex-end" : undefined,
            fontVariantNumeric: column.align === "right" ? "tabular-nums" : undefined,
            boxShadow: shadows.join(", ") || undefined
          };
          if (isEdge && row.edge === "header") {
            if (column.actions) {
              return <div style={style}>{column.name}</div>;
            }
            if (!column.get) {
              return <div style={{
                ...style,
                justifyContent: "center",
                padding: 0
              }}>
                    <input type="checkbox" aria-label="Select all" checked={selected.size === people.length} onChange={e => {
                  setSelected(e.target.checked ? new Set(people.map(p => p.id)) : new Set());
                }} />
                  </div>;
            }
            return <div style={style}>{column.name}</div>;
          }
          if (isEdge) {
            return <div style={style}>
                  {column.name === "Name" ? selected.size.toLocaleString() + " selected" : AVERAGES[colIndex]}
                </div>;
          }
          const isSelected = selected.has(row.id);
          if (isSelected) {
            style.background = "#e8f0fe";
          }
          if (column.actions) {
            return <div style={{
              ...style,
              justifyContent: "center"
            }}>
                  <button type="button" aria-label={"Edit " + row.name} style={buttonStyle} onClick={() => alert("Edit " + row.name)}>
                    Edit
                  </button>
                </div>;
          }
          if (!column.get) {
            return <div style={{
              ...style,
              justifyContent: "center",
              padding: 0
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
          return <div style={style}>
                {column.format ? column.format(value) : value}
              </div>;
        }}
        </VGrid>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`DataTable`]})))()}T();export{C as DataTable,w as __namedExportsOrder,u as default};