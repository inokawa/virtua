import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as a}from"./index-DRjF_FHU.js";import{V as y}from"./VList-BW1AzCRz.js";import"./Virtualizer-Cv6LDH6q.js";import"./useRerender-CvO1OADT.js";import"./useChildren-BmmQUSqu.js";import"./index-uWwxbAOW.js";const A={component:y},M=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["January","February","March","April","May","June","July","August","September","October","November","December"],m=({children:e,isToday:t})=>n.jsx("div",{style:{background:t?"skyblue":void 0,width:"calc(100% / 7)",height:40},children:e}),D=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},w=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},j=e=>{const t=new Date(e);return t.setDate(1),t},b=e=>{const t=D(e);return t.setDate(0),t},F=a.memo(({date:e,now:[t,l,d]})=>{const[r,s,f,c,h]=a.useMemo(()=>{const o=b(e);return[e.getFullYear(),e.getMonth(),j(e).getDay(),o.getDate(),o.getDay()]},[e]),i=[];for(let o=f;o>0;o--)i.push(n.jsx(m,{},`prev_${o}`));for(let o=1;o<=c;o++)i.push(n.jsx(m,{isToday:d===o&&l===s&&t===r,children:o},o));for(let o=h;o<6;o++)i.push(n.jsx(m,{},`next_${o}`));return n.jsxs("div",{style:{borderBottom:"solid 1px #ddd"},children:[n.jsxs("div",{style:{position:"sticky",top:0,borderBottom:"solid 1px #ddd",background:"white"},children:[n.jsx("div",{children:r}),n.jsx("div",{children:v[s]})]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:i})]})}),u={name:"DatePicker",render:()=>{const[e,t]=a.useState(()=>{const r=new Date,s=[r];return Array.from({length:1e3}).forEach(()=>{s.unshift(w(s[0]))}),Array.from({length:1e3}).forEach(()=>{s.push(D(s[s.length-1]))}),[[r.getFullYear(),r.getMonth(),r.getDate()],s]})[0],l=a.useRef(null),d=()=>{var h;const[r,s,f]=e,c=t.findIndex(i=>i.getFullYear()===r&&i.getMonth()===s&&i.getDate()===f);c!==-1&&((h=l.current)==null||h.scrollToIndex(c))};return a.useLayoutEffect(()=>{d()},[]),n.jsxs("div",{children:[n.jsx("div",{style:{marginBottom:4},children:n.jsx("button",{style:{marginLeft:4},onClick:d,children:"today"})}),n.jsxs("div",{style:{width:"800px",height:"90vh",background:"#fff",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{display:"flex",flexDirection:"row",borderBottom:"solid 1px #ddd"},children:M.map(r=>n.jsx("div",{style:{flex:1},children:r}))}),n.jsx(y,{ref:l,style:{flex:1},children:t.map((r,s)=>n.jsx(F,{date:r,now:e},s))})]})]})}};var x,g,p;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(p=(g=u.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const S=["Default"];export{u as Default,S as __namedExportsOrder,A as default};
