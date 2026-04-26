import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-De5IyaZp.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;t((()=>{a(),o=e(n(),1),s=r(),c={component:i},l=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],u=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],d=({children:e,isToday:t})=>(0,s.jsx)(`div`,{style:{background:t?`skyblue`:void 0,width:`calc(100% / 7)`,height:40},children:e}),f=e=>{let t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+1),t},p=e=>{let t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()-1),t},m=e=>{let t=new Date(e);return t.setDate(1),t},h=e=>{let t=f(e);return t.setDate(0),t},g=(0,o.memo)(({date:e,now:[t,n,r]})=>{let[i,a,c,l,f]=(0,o.useMemo)(()=>{let t=h(e);return[e.getFullYear(),e.getMonth(),m(e).getDay(),t.getDate(),t.getDay()]},[e]),p=[];for(let e=c;e>0;e--)p.push((0,s.jsx)(d,{},`prev_${e}`));for(let e=1;e<=l;e++)p.push((0,s.jsx)(d,{isToday:r===e&&n===a&&t===i,children:e},e));for(let e=f;e<6;e++)p.push((0,s.jsx)(d,{},`next_${e}`));return(0,s.jsxs)(`div`,{style:{borderBottom:`solid 1px #ddd`},children:[(0,s.jsxs)(`div`,{style:{position:`sticky`,top:0,borderBottom:`solid 1px #ddd`,background:`white`},children:[(0,s.jsx)(`div`,{children:i}),(0,s.jsx)(`div`,{children:u[a]})]}),(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`},children:p})]})}),_={name:`DatePicker`,render:()=>{let[e,t]=(0,o.useState)(()=>{let e=new Date,t=[e];return Array.from({length:1e3}).forEach(()=>{t.unshift(p(t[0]))}),Array.from({length:1e3}).forEach(()=>{t.push(f(t[t.length-1]))}),[[e.getFullYear(),e.getMonth(),e.getDate()],t]})[0],n=(0,o.useRef)(null),r=()=>{let[r,i,a]=e,o=t.findIndex(e=>e.getFullYear()===r&&e.getMonth()===i&&e.getDate()===a);o!==-1&&n.current?.scrollToIndex(o)};return(0,o.useLayoutEffect)(()=>{r()},[]),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{style:{marginBottom:4},children:(0,s.jsx)(`button`,{style:{marginLeft:4},onClick:r,children:`today`})}),(0,s.jsxs)(`div`,{style:{width:`800px`,height:`90vh`,background:`#fff`,display:`flex`,flexDirection:`column`},children:[(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`row`,borderBottom:`solid 1px #ddd`},children:l.map(e=>(0,s.jsx)(`div`,{style:{flex:1},children:e}))}),(0,s.jsx)(i,{ref:n,style:{flex:1},children:t.map((t,n)=>(0,s.jsx)(g,{date:t,now:e},n))})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,c as default};