import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-BUEX3lcu.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-Bmz9FyJS.js";import{n as o,t as s}from"./en-DltMjSLJ.js";import{i as c,r as l}from"./common-BneDIEZr.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{i(),u=e(n(),1),s(),l(),d=r(),f={component:a},p=o.helpers.uniqueArray(o.book.title,12).map(e=>({title:e,genre:o.book.genre(),year:o.number.int({min:1980,max:2025})})),m=160,h=8,g=({index:e})=>{let{title:t,genre:n,year:r}=p[e],i=e*360/p.length;return(0,d.jsxs)(`div`,{style:{width:m,aspectRatio:`2 / 3`,borderRadius:6,padding:12,boxSizing:`border-box`,display:`flex`,flexDirection:`column`,justifyContent:`flex-end`,color:`white`,background:`linear-gradient(160deg, hsl(${i} 70% 55%), hsl(${i+40} 60% 18%))`},children:[(0,d.jsx)(`div`,{style:{fontSize:16,fontWeight:`bold`,lineHeight:1.2},children:t}),(0,d.jsxs)(`div`,{style:{fontSize:12,opacity:.8,marginTop:4},children:[n,` · `,r]})]})},_={name:`Infinite Carousel`,render:()=>{let e=(0,u.useRef)(0),t=(t,n)=>c(n,n=>({id:e.current++,position:t+n})),n=(0,u.useRef)(null),[r,i]=(0,u.useState)(()=>t(-100,200)),o=(0,u.useRef)(-1),s=(0,u.useRef)(!1);return(0,u.useLayoutEffect)(()=>{n.current?.scrollToIndex(100)},[]),(0,d.jsx)(`div`,{style:{height:`100vh`,display:`flex`,flexDirection:`column`,justifyContent:`center`,background:`#2c2f36`,fontFamily:`sans-serif`},children:(0,d.jsx)(a,{ref:n,horizontal:!0,style:{height:240,scrollbarWidth:`none`},shift:s.current,onScroll:e=>{if(s.current=e-o.current<0,o.current=e,!n.current)return;let r=s.current;e<100?(i(e=>[...t(e[0].position-50,50),...e]),setTimeout(()=>{s.current=!r,i(e=>[...e.slice(0,150)])},50)):n.current.scrollSize-n.current.viewportSize-e<100&&(i(e=>[...e,...t(e[e.length-1].position+1,50)]),setTimeout(()=>{s.current=!r,i(e=>[...e.slice(50)])},50))},children:r.map(e=>(0,d.jsx)(`div`,{style:{paddingRight:h},children:(0,d.jsx)(g,{index:(e.position%p.length+p.length)%p.length})},e.id))})})}},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Infinite Carousel",
  render: () => {
    const TOTAL_LENGTH = 200;
    const OFFSET_TO_BOUND = 100;
    const id = useRef(0);
    // position is the continuous place in the row, and the poster cycles through TITLES by it
    const createItems = (start: number, num: number) => range(num, i => ({
      id: id.current++,
      position: start + i
    }));
    const ref = useRef<VListHandle>(null);
    const [items, setItems] = useState(() => createItems(-TOTAL_LENGTH / 2, TOTAL_LENGTH));
    const prevScrollOffset = useRef(-1);
    const shouldPrepend = useRef(false);
    useLayoutEffect(() => {
      ref.current?.scrollToIndex(TOTAL_LENGTH / 2);
    }, []);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#2c2f36",
      fontFamily: "sans-serif"
    }}>
        <VList ref={ref} horizontal style={{
        height: POSTER_WIDTH * 3 / 2,
        scrollbarWidth: "none"
      }} shift={shouldPrepend.current} onScroll={offset => {
        shouldPrepend.current = offset - prevScrollOffset.current < 0;
        prevScrollOffset.current = offset;
        if (!ref.current) return;
        const currentShouldPrepend = shouldPrepend.current;
        if (offset < OFFSET_TO_BOUND) {
          setItems(prev => [...createItems(prev[0]!.position - TOTAL_LENGTH / 4, TOTAL_LENGTH / 4), ...prev]);
          setTimeout(() => {
            shouldPrepend.current = !currentShouldPrepend;
            setItems(prev => [...prev.slice(0, TOTAL_LENGTH * 3 / 4)]);
          }, 50);
        } else if (ref.current.scrollSize - ref.current.viewportSize - offset < OFFSET_TO_BOUND) {
          setItems(prev => [...prev, ...createItems(prev[prev.length - 1]!.position + 1, TOTAL_LENGTH / 4)]);
          setTimeout(() => {
            shouldPrepend.current = !currentShouldPrepend;
            setItems(prev => [...prev.slice(TOTAL_LENGTH / 4)]);
          }, 50);
        }
      }}>
          {items.map(d => <div key={d.id} style={{
          paddingRight: GAP
        }}>
              <Poster index={(d.position % TITLES.length + TITLES.length) % TITLES.length} />
            </div>)}
        </VList>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Default,v as __namedExportsOrder,f as default};