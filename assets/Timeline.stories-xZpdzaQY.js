import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-Dciai4-q.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VGrid-Ty4xJ8I7.js";import{n as o,t as s}from"./en-DltMjSLJ.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=864e5,f=new Date,f.setHours(0,0,0,0),p=new Date(f.getFullYear()-1,0,1),m=Math.round((new Date(f.getFullYear()+2,0,1).getTime()-p.getTime())/d),h=1+Math.round((f.getTime()-p.getTime())/d),g=[`#4285f4`,`#0b8043`,`#f4511e`,`#8e24aa`,`#f6bf26`],_=Array.from({length:300},()=>({name:o.person.fullName()})),v={header:`months`},y={header:`days`},b=[v,y,..._],x=2,S={name:!0,width:200},C=48,w=[S,...Array.from({length:m},(e,t)=>({date:new Date(p.getTime()+t*d),width:C}))],T=new Map,E=[],_.forEach((e,t)=>{let n=t+x;for(let e=o.number.int({min:0,max:20});e<m;e+=o.number.int({min:2,max:25})){let t=Math.min(o.number.int({min:1,max:12}),m-e);T.set(n*(m+1)+e+1,{title:o.hacker.ingverb()+` `+o.hacker.noun(),color:g[o.number.int({min:0,max:g.length-1})]}),E.push({rowIndex:n,colIndex:e+1,colSpan:t}),e+=t}}),D=[];for(let e=0;e<m;){let t=new Date(p.getTime()+e*d),n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();D.push({rowIndex:0,colIndex:e+1,colSpan:n}),e+=n}O=[{rowIndex:0,colIndex:0,rowSpan:x},...D,...E],k=e=>e.getDay()===0||e.getDay()===6,A=e=>e.getTime()===f.getTime(),j=`#e2e3e3`,M={boxSizing:`border-box`,borderRight:`solid 1px `+j,borderBottom:`solid 1px `+j,whiteSpace:`nowrap`},N={...M,background:`#f8f9fa`,color:`#5f6368`,fontSize:13,userSelect:`none`},P={...M,display:`flex`,alignItems:`center`,padding:`0 12px`,background:`#fff`,overflow:`hidden`,textOverflow:`ellipsis`},F={display:`grid`,gridTemplateColumns:`minmax(0,1fr)`},I={position:`sticky`,insetInlineStart:S.width,justifySelf:`start`,alignSelf:`center`,maxWidth:`100%`,boxSizing:`border-box`,padding:`0 8px`,overflow:`clip`,textOverflow:`ellipsis`},L=`repeating-linear-gradient(to right, transparent, transparent 47px, ${j} 47px, ${j} ${C}px)`,R=`linear-gradient(#e8f0fe, #e8f0fe) ${S.width+(h-1)*C}px 0 / ${C}px 100% no-repeat, linear-gradient(to right, #f8f9fa 0 96px, transparent 96px) ${S.width-(p.getDay()+1)%7*C}px 0 / 336px 100% repeat-x, #fff`,z={padding:`4px 12px`,border:`solid 1px #dadce0`,borderRadius:4,background:`#fff`,font:`inherit`,cursor:`pointer`},B={render:()=>{let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{e.current?.scrollToIndex({colIndex:h})},[]),(0,l.jsxs)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`,fontFamily:`system-ui, sans-serif`},children:[(0,l.jsx)(`div`,{style:{padding:8,borderBottom:`solid 1px #dadce0`},children:(0,l.jsx)(`button`,{style:z,onClick:()=>{e.current.scrollToIndex({colIndex:h})},children:`Today`})}),(0,l.jsx)(a,{ref:e,"aria-label":`Schedule`,style:{flex:1,background:R,backgroundAttachment:`local`},rows:b,rowHeight:40,cols:w,colWidth:`width`,headerRows:x,headerCols:1,spans:O,children:(e,t,{rowIndex:n,colIndex:r})=>{if(e===v)return`date`in t?(0,l.jsx)(`div`,{style:{...N,...F},children:(0,l.jsx)(`div`,{style:{...I,fontWeight:500},children:t.date.toLocaleString(`en`,{month:`long`,year:`numeric`})})}):(0,l.jsx)(`div`,{style:N});if(!(`date`in t))return(0,l.jsx)(`div`,{style:P,children:`header`in e?``:e.name});let i=A(t.date);if(e===y)return(0,l.jsxs)(`div`,{style:{...N,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,lineHeight:1.2,color:i?`#1a73e8`:k(t.date)?`#9aa0a6`:void 0,fontWeight:i?700:void 0},children:[(0,l.jsx)(`span`,{children:t.date.getDate()}),(0,l.jsx)(`span`,{style:{fontSize:10},children:t.date.toLocaleString(`en`,{weekday:`narrow`})})]});let a=T.get(n*(m+1)+r);return(0,l.jsx)(`div`,{style:{...M,display:`grid`,background:a?L:void 0},children:a&&(0,l.jsx)(`div`,{style:{...F,margin:`6px 2px`,borderRadius:4,background:a.color,color:`#fff`,fontSize:13},children:(0,l.jsx)(`div`,{style:I,children:a.title})})})}})]})}},V=[`Timeline`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
          if (row === MONTHS_ROW) {
            if (!("date" in col)) {
              return <div style={headerStyle} />;
            }
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
          if (!("date" in col)) {
            return <div style={nameStyle}>{"header" in row ? "" : row.name}</div>;
          }
          const today = isToday(col.date);
          if (row === DAYS_ROW) {
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
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as Timeline,V as __namedExportsOrder,u as default};