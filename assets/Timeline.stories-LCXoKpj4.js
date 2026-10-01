import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-Dc1RAU-J.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-BhHs2H1h.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=864e5,f=new Date,f.setHours(0,0,0,0),p=new Date(f.getFullYear()-1,0,1),m=Math.round((new Date(f.getFullYear()+2,0,1).getTime()-p.getTime())/d),h=1+Math.round((f.getTime()-p.getTime())/d),g=[`#4285f4`,`#0b8043`,`#f4511e`,`#8e24aa`,`#f6bf26`],_=Array.from({length:300}).map(()=>({name:o.person.fullName()})),v=[{header:`months`},{header:`days`},..._],y=2,b={name:!0,width:200},x=48,S=[b,...Array.from({length:m}).map((e,t)=>({date:new Date(p.getTime()+t*d),width:x}))],C=new Map,w=[],_.forEach((e,t)=>{let n=t+y;for(let e=o.number.int({min:0,max:20});e<m;e+=o.number.int({min:2,max:25})){let t=Math.min(o.number.int({min:1,max:12}),m-e);C.set(n*(m+1)+e+1,{title:o.hacker.ingverb()+` `+o.hacker.noun(),color:g[o.number.int({min:0,max:g.length-1})]}),w.push({rowIndex:n,colIndex:e+1,colSpan:t}),e+=t}}),T=[];for(let e=0;e<m;){let t=new Date(p.getTime()+e*d),n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();T.push({rowIndex:0,colIndex:e+1,colSpan:n}),e+=n}E=[{rowIndex:0,colIndex:0,rowSpan:y},...T,...w],D=e=>e.getDay()===0||e.getDay()===6,O=e=>e.getTime()===f.getTime(),k=`#e2e3e3`,A={boxSizing:`border-box`,borderRight:`solid 1px `+k,borderBottom:`solid 1px `+k,whiteSpace:`nowrap`},j={...A,background:`#f8f9fa`,color:`#5f6368`,fontSize:13,userSelect:`none`},M={...A,display:`flex`,alignItems:`center`,padding:`0 12px`,background:`#fff`,overflow:`hidden`,textOverflow:`ellipsis`},N={display:`grid`,gridTemplateColumns:`minmax(0,1fr)`},P={position:`sticky`,insetInlineStart:b.width,justifySelf:`start`,alignSelf:`center`,maxWidth:`100%`,boxSizing:`border-box`,padding:`0 8px`,overflow:`clip`,textOverflow:`ellipsis`},F=`repeating-linear-gradient(to right, transparent, transparent 47px, ${k} 47px, ${k} ${x}px)`,I=`linear-gradient(#e8f0fe, #e8f0fe) ${b.width+(h-1)*x}px 0 / ${x}px 100% no-repeat, linear-gradient(to right, #f8f9fa 0 96px, transparent 96px) ${b.width-(p.getDay()+1)%7*x}px 0 / 336px 100% repeat-x, #fff`,L={padding:`4px 12px`,border:`solid 1px #dadce0`,borderRadius:4,background:`#fff`,font:`inherit`,cursor:`pointer`},R={render:()=>{let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{e.current?.scrollToIndex({colIndex:h})},[]),(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`,fontFamily:`system-ui, sans-serif`},children:[(0,l.jsx)(`div`,{style:{padding:8,borderBottom:`solid 1px #dadce0`},children:(0,l.jsx)(`button`,{style:L,onClick:()=>{e.current.scrollToIndex({colIndex:h})},children:`Today`})}),(0,l.jsx)(a,{ref:e,"aria-label":`Schedule`,style:{flex:1,background:I,backgroundAttachment:`local`},rows:v,rowHeight:40,cols:S,colWidth:`width`,headerRows:y,headerCols:1,spans:E,children:(e,t,{rowIndex:n,colIndex:r})=>{if(`header`in e){if(`name`in t)return(0,l.jsx)(`div`,{style:j});if(e.header===`months`)return(0,l.jsx)(`div`,{style:{...j,...N},children:(0,l.jsx)(`div`,{style:{...P,fontWeight:500},children:t.date.toLocaleString(`en`,{month:`long`,year:`numeric`})})});let n=O(t.date);return(0,l.jsxs)(`div`,{style:{...j,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,lineHeight:1.2,color:n?`#1a73e8`:D(t.date)?`#9aa0a6`:void 0,fontWeight:n?700:void 0},children:[(0,l.jsx)(`span`,{children:t.date.getDate()}),(0,l.jsx)(`span`,{style:{fontSize:10},children:t.date.toLocaleString(`en`,{weekday:`narrow`})})]})}if(`name`in t)return(0,l.jsx)(`div`,{style:M,children:e.name});let i=C.get(n*(m+1)+r);return(0,l.jsx)(`div`,{style:{...A,display:`grid`,background:i?F:void 0},children:i&&(0,l.jsx)(`div`,{style:{...N,margin:`6px 2px`,borderRadius:4,background:i.color,color:`#fff`,fontSize:13},children:(0,l.jsx)(`div`,{style:P,children:i.title})})})}})]})}},z=[`Timeline`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<VGridHandle>(null);
    useEffect(() => {
      ref.current?.scrollToIndex({
        colIndex: TODAY_COL
      });
    }, []);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "system-ui, sans-serif"
    }}>
        <div style={{
        padding: 8,
        borderBottom: "solid 1px #dadce0"
      }}>
          <button style={buttonStyle} onClick={() => {
          ref.current!.scrollToIndex({
            colIndex: TODAY_COL
          });
        }}>
            Today
          </button>
        </div>
        <VGrid ref={ref} aria-label="Schedule" style={{
        flex: 1,
        background: gridBackground,
        backgroundAttachment: "local"
      }} rows={ROWS} rowHeight={40} cols={COLS} colWidth="width" headerRows={HEADER_ROWS} headerCols={1} spans={SPANS}>
          {(row, col, {
          rowIndex,
          colIndex
        }) => {
          if ("header" in row) {
            if ("name" in col) {
              // the corner spans the header rows
              return <div style={headerStyle} />;
            }
            if (row.header === "months") {
              return <div style={{
                ...headerStyle,
                ...labelTrackStyle
              }}>
                    <div style={{
                  ...stickyLabelStyle,
                  fontWeight: 500
                }}>
                      {col.date.toLocaleString("en", {
                    month: "long",
                    year: "numeric"
                  })}
                    </div>
                  </div>;
            }
            const today = isToday(col.date);
            return <div style={{
              ...headerStyle,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1.2,
              color: today ? "#1a73e8" : isWeekend(col.date) ? "#9aa0a6" : undefined,
              fontWeight: today ? 700 : undefined
            }}>
                  <span>{col.date.getDate()}</span>
                  <span style={{
                fontSize: 10
              }}>
                    {col.date.toLocaleString("en", {
                  weekday: "narrow"
                })}
                  </span>
                </div>;
          }
          if ("name" in col) {
            return <div style={nameStyle}>{row.name}</div>;
          }
          const event = events.get(rowIndex * (DAYS + 1) + colIndex);
          return <div style={{
            ...cellStyle,
            display: "grid",
            background: event ? dayLines : undefined
          }}>
                {event && <div style={{
              ...labelTrackStyle,
              margin: "6px 2px",
              borderRadius: 4,
              background: event.color,
              color: "#fff",
              fontSize: 13
            }}>
                    <div style={stickyLabelStyle}>{event.title}</div>
                  </div>}
              </div>;
        }}
        </VGrid>
      </div>;
  }
}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Timeline,z as __namedExportsOrder,u as default};