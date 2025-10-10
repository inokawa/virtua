import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-mm627cJi.js";import{V as x}from"./VList-DmVpNhXs.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer--3qWP2J6.js";import"./useLatestRef-9XiwP2Lv.js";import"./useChildren-CHKCahBR.js";import"./index-BRmsEQp-.js";import"./index-B6BJlhfe.js";const _={component:x},g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=["January","February","March","April","May","June","July","August","September","October","November","December"],m=({children:e,isToday:t})=>n.jsx("div",{style:{background:t?"skyblue":void 0,width:"calc(100% / 7)",height:40},children:e}),p=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},D=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},M=e=>{const t=new Date(e);return t.setDate(1),t},v=e=>{const t=p(e);return t.setDate(0),t},w=a.memo(({date:e,now:[t,l,d]})=>{const[r,s,f,c,i]=a.useMemo(()=>{const o=v(e);return[e.getFullYear(),e.getMonth(),M(e).getDay(),o.getDate(),o.getDay()]},[e]),h=[];for(let o=f;o>0;o--)h.push(n.jsx(m,{},`prev_${o}`));for(let o=1;o<=c;o++)h.push(n.jsx(m,{isToday:d===o&&l===s&&t===r,children:o},o));for(let o=i;o<6;o++)h.push(n.jsx(m,{},`next_${o}`));return n.jsxs("div",{style:{borderBottom:"solid 1px #ddd"},children:[n.jsxs("div",{style:{position:"sticky",top:0,borderBottom:"solid 1px #ddd",background:"white"},children:[n.jsx("div",{children:r}),n.jsx("div",{children:y[s]})]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:h})]})}),u={name:"DatePicker",render:()=>{const[e,t]=a.useState(()=>{const r=new Date,s=[r];return Array.from({length:1e3}).forEach(()=>{s.unshift(D(s[0]))}),Array.from({length:1e3}).forEach(()=>{s.push(p(s[s.length-1]))}),[[r.getFullYear(),r.getMonth(),r.getDate()],s]})[0],l=a.useRef(null),d=()=>{const[r,s,f]=e,c=t.findIndex(i=>i.getFullYear()===r&&i.getMonth()===s&&i.getDate()===f);c!==-1&&l.current?.scrollToIndex(c)};return a.useLayoutEffect(()=>{d()},[]),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:4},children:n.jsx("button",{style:{marginLeft:4},onClick:d,children:"today"})}),n.jsxs("div",{style:{width:"800px",height:"90vh",background:"#fff",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{display:"flex",flexDirection:"row",borderBottom:"solid 1px #ddd"},children:g.map(r=>n.jsx("div",{style:{flex:1},children:r}))}),n.jsx(x,{ref:l,style:{flex:1},children:t.map((r,s)=>n.jsx(w,{date:r,now:e},s))})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    return <div>
        <div style={{
        marginBottom: 4
      }}>
          <button style={{
          marginLeft: 4
        }} onClick={scrollToThisMonth}>
            today
          </button>
        </div>
        <div style={{
        width: "800px",
        height: "90vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column"
      }}>
          <div style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "solid 1px #ddd"
        }}>
            {DAY_OF_WEEKS.map(d => <div style={{
            flex: 1
          }}>{d}</div>)}
          </div>
          <VList ref={ref} style={{
          flex: 1
        }}>
            {items.map((d, i) => <Month key={i} date={d} now={now} />)}
          </VList>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const A=["Default"];export{u as Default,A as __namedExportsOrder,_ as default};
