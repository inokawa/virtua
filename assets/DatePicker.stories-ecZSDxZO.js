import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-D5Z2cFvv.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-6BGIicTt.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{i(),o=e(n(),1),s=r(),c={component:a},l=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],d=`#e2e3e3`,f={display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,justifyItems:`center`},p={padding:`4px 12px`,border:`solid 1px #dadce0`,borderRadius:4,background:`#fff`,font:`inherit`,cursor:`pointer`},m=({children:e,isToday:t,isWeekend:n,column:r})=>(0,s.jsx)(`div`,{style:{gridColumnStart:r,display:`flex`,alignItems:`center`,justifyContent:`center`,width:32,height:32,margin:`4px 0`,borderRadius:`50%`,background:t?`#1a73e8`:void 0,color:t?`#fff`:n?`#9aa0a6`:void 0,fontWeight:t?700:void 0},children:e}),h=e=>{let t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},g=e=>{let t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},_=e=>{let t=new Date(e);return t.setDate(1),t},v=e=>{let t=h(e);return t.setDate(0),t},y=(0,o.memo)(({date:e,now:[t,n,r]})=>{let[i,a,c,l]=(0,o.useMemo)(()=>[e.getFullYear(),e.getMonth(),_(e).getDay(),v(e).getDate()],[e]),p=[];for(let e=1;e<=l;e++){let o=(c+e-1)%7;p.push((0,s.jsx)(m,{isToday:r===e&&n===a&&t===i,isWeekend:o===0||o===6,column:e===1?c+1:void 0,children:e},e))}return(0,s.jsxs)(`div`,{style:{borderBottom:`solid 1px `+d},children:[(0,s.jsxs)(`div`,{style:{position:`sticky`,top:0,padding:`8px 16px`,background:`#fff`,fontWeight:500},children:[u[a],` `,i]}),(0,s.jsx)(`div`,{style:{...f,padding:`0 8px 8px`},children:p})]})}),b={name:`DatePicker`,render:()=>{let[e,t]=(0,o.useState)(()=>{let e=new Date,t=[e];return Array.from({length:1e3}).forEach(()=>{t.unshift(g(t[0]))}),Array.from({length:1e3}).forEach(()=>{t.push(h(t[t.length-1]))}),[[e.getFullYear(),e.getMonth(),e.getDate()],t]})[0],n=(0,o.useRef)(null),r=()=>{let[r,i,a]=e,o=t.findIndex(e=>e.getFullYear()===r&&e.getMonth()===i&&e.getDate()===a);o!==-1&&n.current?.scrollToIndex(o)};return(0,o.useLayoutEffect)(()=>{r()},[]),(0,s.jsxs)(`div`,{style:{width:360,height:`90vh`,maxHeight:560,display:`flex`,flexDirection:`column`,border:`solid 1px #dadce0`,borderRadius:8,overflow:`hidden`,background:`#fff`,fontFamily:`system-ui, sans-serif`,fontSize:14,color:`#3c4043`},children:[(0,s.jsx)(`div`,{style:{padding:8,borderBottom:`solid 1px #dadce0`},children:(0,s.jsx)(`button`,{style:p,onClick:r,children:`Today`})}),(0,s.jsx)(`div`,{style:{...f,padding:`6px 8px`,borderBottom:`solid 1px `+d,background:`#f8f9fa`,color:`#5f6368`,fontSize:12},children:l.map(e=>(0,s.jsx)(`div`,{children:e},e))}),(0,s.jsx)(a,{ref:n,style:{flex:1},children:t.map((t,n)=>(0,s.jsx)(y,{date:t,now:e},n))})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "DatePicker",
  render: () => {
    const [now, items] = useState(() => {
      const now = new Date();
      const months = [now];
      Array.from({
        length: 1000
      }).forEach(() => {
        months.unshift(getFirstDateOfPrevMonth(months[0]));
      });
      Array.from({
        length: 1000
      }).forEach(() => {
        months.push(getFirstDateOfNextMonth(months[months.length - 1]));
      });
      return [[now.getFullYear(), now.getMonth(), now.getDate()], months] as const;
    })[0];
    const ref = useRef<VListHandle>(null);
    const scrollToThisMonth = () => {
      const [curYear, curMonth, curDate] = now;
      const index = items.findIndex(d => d.getFullYear() === curYear && d.getMonth() === curMonth && d.getDate() === curDate);
      if (index === -1) return;
      ref.current?.scrollToIndex(index);
    };
    useLayoutEffect(() => {
      scrollToThisMonth();
    }, []);
    return <div style={{
      width: 360,
      height: "90vh",
      maxHeight: 560,
      display: "flex",
      flexDirection: "column",
      border: "solid 1px #dadce0",
      borderRadius: 8,
      overflow: "hidden",
      background: "#fff",
      fontFamily: "system-ui, sans-serif",
      fontSize: 14,
      color: "#3c4043"
    }}>
        <div style={{
        padding: 8,
        borderBottom: "solid 1px #dadce0"
      }}>
          <button style={buttonStyle} onClick={scrollToThisMonth}>
            Today
          </button>
        </div>
        <div style={{
        ...weekStyle,
        padding: "6px 8px",
        borderBottom: "solid 1px " + LINE,
        background: "#f8f9fa",
        color: "#5f6368",
        fontSize: 12
      }}>
          {DAY_OF_WEEKS.map(d => <div key={d}>{d}</div>)}
        </div>
        <VList ref={ref} style={{
        flex: 1
      }}>
          {items.map((d, i) => <Month key={i} date={d} now={now} />)}
        </VList>
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]})))()}S();export{b as Default,x as __namedExportsOrder,c as default};