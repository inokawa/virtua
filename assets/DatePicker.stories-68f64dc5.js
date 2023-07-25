import{a as m,j as o}from"./jsx-runtime-f8a6c6ea.js";import{r as l}from"./index-5284b0bf.js";import{V as x}from"./VList-4d4e68a3.js";import"./Window-2217e727.js";import"./index-480187bb.js";import"./ListItem-25b7751f.js";const S={component:x},v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],w=["January","February","March","April","May","June","July","August","September","October","November","December"],g=({children:e,isToday:t})=>o("div",{style:{background:t?"skyblue":void 0,width:"calc(100% / 7)",height:40},children:e}),M=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},b=e=>{const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},F=e=>{const t=new Date(e);return t.setDate(1),t},T=e=>{const t=M(e);return t.setDate(0),t},_=l.memo(({date:e,now:[t,u,h]})=>{const[r,i,s,c,d]=l.useMemo(()=>{const n=T(e);return[e.getFullYear(),e.getMonth(),F(e).getDay(),n.getDate(),n.getDay()]},[e]),a=[];for(let n=s;n>0;n--)a.push(o(g,{},`prev_${n}`));for(let n=1;n<=c;n++)a.push(o(g,{isToday:h===n&&u===i&&t===r,children:n},n));for(let n=d;n<6;n++)a.push(o(g,{},`next_${n}`));return m("div",{style:{borderBottom:"solid 1px #ddd"},children:[m("div",{style:{position:"sticky",top:0,borderBottom:"solid 1px #ddd",background:"white"},children:[o("div",{children:r}),o("div",{children:w[i]})]}),o("div",{style:{display:"flex",flexWrap:"wrap"},children:a})]})}),f={name:"DatePicker",render:()=>{const[e,t]=l.useState(()=>{const r=new Date,i=[r];return Array.from({length:1e3}).reduce((s,c,d)=>(s.unshift(b(s[0])),s),i),Array.from({length:1e3}).reduce((s,c)=>(s.push(M(s[s.length-1])),s),i),[[r.getFullYear(),r.getMonth(),r.getDate()],i]})[0],u=l.useRef(null),h=()=>{var d;const[r,i,s]=e,c=t.findIndex(a=>a.getFullYear()===r&&a.getMonth()===i&&a.getDate()===s);c!==-1&&((d=u.current)==null||d.scrollToIndex(c))};return l.useLayoutEffect(()=>{h()},[]),m("div",{children:[o("div",{style:{marginBottom:4},children:o("button",{style:{marginLeft:4},onClick:h,children:"today"})}),m("div",{style:{width:"800px",height:"90vh",background:"#fff",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",flexDirection:"row",borderBottom:"solid 1px #ddd"},children:v.map(r=>o("div",{style:{flex:1},children:r}))}),o(x,{ref:u,style:{flex:1},children:t.map((r,i)=>o(_,{date:r,now:e},i))})]})]})}};var y,D,p;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "DatePicker",
  render: () => {
    const [now, items] = useState(() => {
      const now = new Date();
      const months = [now];
      Array.from({
        length: 1000
      }).reduce<Date[]>((acc, _, i) => {
        acc.unshift(getFirstDateOfPrevMonth(acc[0]));
        return acc;
      }, months);
      Array.from({
        length: 1000
      }).reduce<Date[]>((acc, _) => {
        acc.push(getFirstDateOfNextMonth(acc[acc.length - 1]));
        return acc;
      }, months);
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
}`,...(p=(D=f.parameters)==null?void 0:D.docs)==null?void 0:p.source}}};const B=["Default"];export{f as Default,B as __namedExportsOrder,S as default};
//# sourceMappingURL=DatePicker.stories-68f64dc5.js.map
