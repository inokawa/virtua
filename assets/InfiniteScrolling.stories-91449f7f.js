import{a as r,j as e,F as R}from"./jsx-runtime-6c4ce591.js";import{r as t}from"./index-fcd6345f.js";import{y as d}from"./index-a7768622.js";import{L as S}from"./List-caf073c5.js";const E={component:S},v=n=>r(R,{children:[e("div",{style:{height:100,display:n.hidden?"none":"flex",alignItems:"center",justifyContent:"center",background:"white"},children:e("span",{className:"loader"})}),e("style",{children:`
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
      }`})]}),T={borderBottom:"solid 1px #ccc",background:"white",display:"flex",flexDirection:"row",padding:10},k={width:200,minWidth:200},N=({name:n,text:a})=>r("div",{style:T,children:[e("div",{style:k,children:n}),e("div",{children:a})]}),s={render:()=>{const n=t.useRef(0),a=()=>({id:String(n.current++),name:`${d.name.firstName()} ${d.name.lastName()}`,text:d.lorem.paragraphs(4)}),w=50,l=()=>Array.from({length:w},()=>a()),[m,I]=t.useState(l),[b,h]=t.useState(!1),[p,C]=t.useState([-1,-1]),f=t.useRef(-1);return r("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[r("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:["items: ",m.length," index: (",p[0],", ",p[1],")"]}),r(S,{style:{flex:1},itemSize:200,onRangeChange:async({start:i,end:g,count:o})=>{t.startTransition(()=>{C([i,g])}),g+30>o&&f.current<o&&(f.current=o,h(!0),await new Promise(c=>setTimeout(c,1500)),I(c=>[...c,...l()]),h(!1))},children:[m.map(i=>e(N,{id:i.id,name:i.name,text:i.text})),e(v,{hidden:!b})]})]})}};var u,x,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <List style={{
        flex: 1
      }} itemSize={200} onRangeChange={async ({
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
          {items.map(d => <Row id={d.id} name={d.name} text={d.text} />)}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner hidden={!fetching} />
        </List>
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const j=["InfiniteScrolling"];export{s as InfiniteScrolling,j as __namedExportsOrder,E as default};
//# sourceMappingURL=InfiniteScrolling.stories-91449f7f.js.map
