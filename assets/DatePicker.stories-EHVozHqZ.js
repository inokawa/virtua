import{j as f,a as s}from"./jsx-runtime-sgeEVxPu.js";import{r as a}from"./index-yp3VsGQP.js";import{V as x}from"./VList-QmqCdjP7.js";import"./useRerender-jO4mhqlN.js";import"./useChildren-AruExI1y.js";import"./index-8dy-jdxy.js";const S={component:x},v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],w=["January","February","March","April","May","June","July","August","September","October","November","December"],g=({children:e,isToday:t})=>s("div",{style:{background:t?"skyblue":void 0,width:"calc(100% / 7)",height:40},children:e}),M=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},b=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},F=e=>{const t=new Date(e);return t.setDate(1),t},T=e=>{const t=M(e);return t.setDate(0),t},k=a.memo(({date:e,now:[t,l,d]})=>{const[o,r,m,c,h]=a.useMemo(()=>{const n=T(e);return[e.getFullYear(),e.getMonth(),F(e).getDay(),n.getDate(),n.getDay()]},[e]),i=[];for(let n=m;n>0;n--)i.push(s(g,{},`prev_${n}`));for(let n=1;n<=c;n++)i.push(s(g,{isToday:d===n&&l===r&&t===o,children:n},n));for(let n=h;n<6;n++)i.push(s(g,{},`next_${n}`));return f("div",{style:{borderBottom:"solid 1px #ddd"},children:[f("div",{style:{position:"sticky",top:0,borderBottom:"solid 1px #ddd",background:"white"},children:[s("div",{children:o}),s("div",{children:w[r]})]}),s("div",{style:{display:"flex",flexWrap:"wrap"},children:i})]})}),u={name:"DatePicker",render:()=>{const[e,t]=a.useState(()=>{const o=new Date,r=[o];return Array.from({length:1e3}).forEach(()=>{r.unshift(b(r[0]))}),Array.from({length:1e3}).forEach(()=>{r.push(M(r[r.length-1]))}),[[o.getFullYear(),o.getMonth(),o.getDate()],r]})[0],l=a.useRef(null),d=()=>{var h;const[o,r,m]=e,c=t.findIndex(i=>i.getFullYear()===o&&i.getMonth()===r&&i.getDate()===m);c!==-1&&((h=l.current)==null||h.scrollToIndex(c))};return a.useLayoutEffect(()=>{d()},[]),f("div",{children:[s("div",{style:{marginBottom:4},children:s("button",{style:{marginLeft:4},onClick:d,children:"today"})}),f("div",{style:{width:"800px",height:"90vh",background:"#fff",display:"flex",flexDirection:"column"},children:[s("div",{style:{display:"flex",flexDirection:"row",borderBottom:"solid 1px #ddd"},children:v.map(o=>s("div",{style:{flex:1},children:o}))}),s(x,{ref:l,style:{flex:1},children:t.map((o,r)=>s(k,{date:o,now:e},r))})]})]})}};var y,p,D;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      return ([[now.getFullYear(), now.getMonth(), now.getDate()], months] as const);
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
}`,...(D=(p=u.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const B=["Default"];export{u as Default,B as __namedExportsOrder,S as default};
