import{a as r,j as e,F as R}from"./jsx-runtime-c3d7f245.js";import{r as n}from"./index-c6dae603.js";import{y as d}from"./index-a7768622.js";import{V as S}from"./VList-89d76251.js";import"./index-778f7dbf.js";const j={component:S},v=i=>r(R,{children:[e("div",{style:{height:100,display:i.hidden?"none":"flex",alignItems:"center",justifyContent:"center",background:"white"},children:e("span",{className:"loader"})}),e("style",{children:`
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
      }`})]}),T={borderBottom:"solid 1px #ccc",background:"white",display:"flex",flexDirection:"row",padding:10},k={width:200,minWidth:200},N=({name:i,text:a})=>r("div",{style:T,children:[e("div",{style:k,children:i}),e("div",{children:a})]}),s={render:()=>{const i=n.useRef(0),a=()=>({id:String(i.current++),name:`${d.name.firstName()} ${d.name.lastName()}`,text:d.lorem.paragraphs(4)}),w=50,l=()=>Array.from({length:w},()=>a()),[m,I]=n.useState(l),[b,h]=n.useState(!1),[p,C]=n.useState([-1,-1]),f=n.useRef(-1);return r("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[r("div",{style:{background:"white",borderBottom:"solid 1px #ccc"},children:["items: ",m.length," index: (",p[0],", ",p[1],")"]}),r(S,{style:{flex:1},itemSize:200,onRangeChange:async({start:t,end:g,count:o})=>{n.startTransition(()=>{C([t,g])}),g+30>o&&f.current<o&&(f.current=o,h(!0),await new Promise(c=>setTimeout(c,1500)),I(c=>[...c,...l()]),h(!1))},children:[m.map(t=>e(N,{id:t.id,name:t.name,text:t.text},t.id)),e(v,{hidden:!b})]})]})}};var u,x,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          {items.map(d => <Row key={d.id} id={d.id} name={d.name} text={d.text} />)}
          {/* Now hide spinner without unmounting because onRangeChange is called twice due to item length change */}
          <Spinner hidden={!fetching} />
        </VList>
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const D=["InfiniteScrolling"];export{s as InfiniteScrolling,D as __namedExportsOrder,j as default};
//# sourceMappingURL=InfiniteScrolling.stories-165b56f4.js.map
