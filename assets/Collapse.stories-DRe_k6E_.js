import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DzfIz40F.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-De5IyaZp.js";import{i as o,r as s}from"./common-CHUdhQbk.js";var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{a(),c=e(n(),1),s(),l=r(),u={component:i},d=({content:e})=>(0,l.jsx)(`div`,{style:{borderTop:`solid 1px #ccc`,background:`#fff`,padding:32,paddingTop:48,paddingBottom:48,whiteSpace:`pre-wrap`},children:e}),f={render:()=>{let[e,t]=(0,c.useState)({}),n=(0,c.useRef)(0),r=()=>({id:n.current++}),a=e=>o(e,r),s=(0,c.useRef)(null),[u]=(0,c.useState)(()=>a(30));return(0,l.jsx)(i,{ref:s,style:{flex:1},children:(0,c.useMemo)(()=>u.map(n=>(0,l.jsx)(d,{content:(0,l.jsx)(p,{id:n.id,isCollapsed:e[n.id],resize:()=>{t(e=>({...e,[n.id]:!e[n.id]}))},scroll:()=>{s.current?.scrollToIndex(n.id,{smooth:!0})}})},n.id)),[u,e])})}},p=({id:e,isCollapsed:t,resize:n,scroll:r})=>(0,l.jsxs)(`div`,{style:{transition:`height 250ms linear`,height:t?200:600,background:`#ccc`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,l.jsx)(`div`,{children:e}),(0,l.jsx)(`button`,{onClick:n,children:`Resize`}),(0,l.jsx)(`button`,{onClick:r,children:`Smooth Scroll`}),(0,l.jsx)(`button`,{onClick:()=>{n(),r()},children:`Resize + Smooth Scroll`})]}),m=({content:e})=>(0,l.jsx)(`div`,{style:{borderTop:`solid 1px red`,background:`#fff`,whiteSpace:`pre-wrap`,overflow:`hidden`},children:e}),h={render:()=>{let[e,t]=(0,c.useState)({}),n=(0,c.useRef)(0),r=()=>({id:n.current++}),a=e=>o(e,r),s=(0,c.useRef)(null),[u]=(0,c.useState)(()=>a(60));return(0,l.jsx)(i,{ref:s,style:{flex:1},children:(0,c.useMemo)(()=>u.filter(({id:t})=>!e[t]).map(e=>(0,l.jsx)(m,{content:(0,l.jsx)(g,{id:e.id,onHidden:()=>{t(t=>({...t,[e.id]:!0}))}})},e.id)),[u,e])})}},g=({id:e,onHidden:t})=>{let[n,r]=(0,c.useState)(!1),i=(0,c.useRef)(!1),a=(0,c.useRef)(!1);return(0,c.useEffect)(()=>{i.current=n},[n]),(0,c.useEffect)(()=>()=>{a.current||i.current&&t()},[]),(0,l.jsx)(`div`,{style:{transition:`height 250ms linear`,height:n?0:300,background:`#ccc`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`16px`},onTransitionEnd:()=>{n&&(a.current=!0,t())},onClick:()=>{r(!0)},children:(0,l.jsx)(`div`,{children:e})})},_=({index:e})=>{let t=()=>Math.floor(Math.random()*100)+50,n=()=>Math.floor(Math.random()*300)+100,[r]=(0,c.useState)(()=>t()),[i,a]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=n(),r=setTimeout(()=>{a(t())},e);return()=>clearTimeout(r)},[]),(0,l.jsxs)(`div`,{style:{border:`5px solid black`,margin:`5px 0`},children:[(0,l.jsxs)(`div`,{style:{height:r,background:`#e0e0e0`},children:[`Immediate Content `,e,` (Height: `,r,`px)`]}),i===null?(0,l.jsx)(`div`,{style:{padding:`10px`,background:`#ffe0e0`},children:`Loading...`}):(0,l.jsxs)(`div`,{style:{height:i,background:`#f0f0f0`},children:[`Delayed Content `,e,` (Height: `,i,`px)`]})]})},v={render:()=>(0,l.jsx)(`div`,{style:{height:`400px`,border:`1px solid black`},children:(0,l.jsx)(i,{style:{height:`100%`,width:`100%`},children:Array.from({length:100}).map((e,t)=>(0,l.jsx)(_,{index:t},t))})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    type Data = {
      id: number;
    };
    const [itemCollapseState, setItemCollapseState] = useState<Record<string, boolean>>({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(30));
    const elements = useMemo(() => items.map(d => <Item key={d.id} content={<Collapser id={d.id} isCollapsed={itemCollapseState[d.id]} resize={() => {
      setItemCollapseState(state => ({
        ...state,
        [d.id]: !state[d.id]
      }));
    }} scroll={() => {
      ref.current?.scrollToIndex(d.id, {
        smooth: true
      });
    }} />} />), [items, itemCollapseState]);
    return <VList ref={ref} style={{
      flex: 1
    }}>
        {elements}
      </VList>;
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    type Data = {
      id: number;
    };
    const [itemsHidden, setItemsHidden] = useState<Record<string, true>>({});
    const id = useRef(0);
    const createItem = (): Data => {
      return {
        id: id.current++
      };
    };
    const createItems = (num: number) => range(num, createItem);
    const ref = useRef<VListHandle>(null);
    const [items] = useState(() => createItems(60));
    const elements = useMemo(() => items.filter(({
      id
    }) => !itemsHidden[id]).map(d => <Item2 key={d.id} content={<Collapser2 id={d.id} onHidden={() => {
      setItemsHidden(state => ({
        ...state,
        [d.id]: true
      }));
    }} />} />), [items, itemsHidden]);
    return <VList ref={ref} style={{
      flex: 1
    }}>
        {elements}
      </VList>;
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: "400px",
      border: "1px solid black"
    }}>
        <VList style={{
        height: "100%",
        width: "100%"
      }}>
          {Array.from({
          length: 100
        }).map((_, index) => <TwoStageRenderItem key={index} index={index} />)}
        </VList>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`CollapseAndScroll`,`CollapseAndRemove`,`TwoStageRender`]}))();export{h as CollapseAndRemove,f as CollapseAndScroll,v as TwoStageRender,y as __namedExportsOrder,u as default};