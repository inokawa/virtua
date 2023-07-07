import{j as i,a as e,F as S}from"./jsx-runtime-e162df28.js";import{r as n}from"./index-5284b0bf.js";import{f as d}from"./index-4a193f06.js";import{V as w}from"./VList-94f9f3ab.js";import"./DefaultWindow-016162f3.js";import"./index-480187bb.js";const D={component:w},v=r=>i(S,{children:[e("div",{style:{height:100,display:r.hidden?"none":"flex",alignItems:"center",justifyContent:"center",background:"white"},children:e("span",{className:"loader"})}),e("style",{children:`
      .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: relative;
        animation: rotate 1s linear infinite
      }
      .loader::before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #ccc;
        animation: prixClipFix 2s linear infinite ;
      }
  
      @keyframes rotate {
        100%   {transform: rotate(360deg)}
      }
  
      @keyframes prixClipFix {
          0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
      }`})]}),T={borderBottom:"solid 1px #ccc",background:"white",display:"flex",flexDirection:"row",padding:10},k={width:200,minWidth:200},N=({name:r,text:a})=>i("div",{style:T,children:[e("div",{style:k,children:r}),e("div",{children:a})]}),s={render:()=>{const r=n.useRef(0),a=()=>({id:String(r.current++),name:`${d.name.firstName()} ${d.name.lastName()}`,text:d.lorem.paragraphs(4)}),I=50,l=()=>Array.from({length:I},()=>a()),[m,b]=n.useState(l),[C,p]=n.useState(!1),[h,R]=n.useState([-1,-1]),f=n.useRef(-1);return i("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[i("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:["items: ",m.length," index: (",h[0],", ",h[1],")"]}),i(w,{style:{flex:1},onRangeChange:async({start:t,end:g,count:o})=>{n.startTransition(()=>{R([t,g])}),g+30>o&&f.current<o&&(f.current=o,p(!0),await new Promise(c=>setTimeout(c,1500)),b(c=>[...c,...l()]),p(!1))},children:[m.map(t=>e(N,{id:t.id,name:t.name,text:t.text},t.id)),e(v,{hidden:!C})]})]})}};var u,x,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const id = useRef(0);
    const createItem = (): Data => ({
      id: String(id.current++),
      name: \`\${faker.name.firstName()} \${faker.name.lastName()}\`,
      text: faker.lorem.paragraphs(4)
    });
    const ITEM_BATCH_COUNT = 50;
    const createItems = () => Array.from({
      length: ITEM_BATCH_COUNT
    }, () => createItem());
    const [items, setItems] = useState(createItems);
    const [fetching, setFetching] = useState(false);
    const [range, setRange] = useState([-1, -1]);
    const fetchedCountRef = useRef(-1);
    return <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        background: "white",
        borderBottom: "solid 1px #ccc"
      }}>
          items: {items.length} index: ({range[0]}, {range[1]})
        </div>
        <VList style={{
        flex: 1
      }} onRangeChange={async ({
        start,
        end,
        count
      }) => {
        startTransition(() => {
          setRange([start, end]);
        });
        if (end + 30 > count && fetchedCountRef.current < count) {
          fetchedCountRef.current = count;
          setFetching(true);
          await new Promise(r => setTimeout(r, 1500));
          setItems(prev => [...prev, ...createItems()]);
          setFetching(false);
        }
      }}>
          {items.map(d => <Row key={d.id} id={d.id} name={d.name} text={d.text} />)}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner hidden={!fetching} />
        </VList>
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const O=["InfiniteScrolling"];export{s as InfiniteScrolling,O as __namedExportsOrder,D as default};
//# sourceMappingURL=InfiniteScrolling.stories-7ceb6cb3.js.map