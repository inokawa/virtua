import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{f as n}from"./iframe-DicgbMms.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./VList-GKVdaBfg.js";import{i as o,r as s}from"./common-Bs-J3f2s.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{i(),c=e(n(),1),s(),l=r(),u={component:a},d=({content:e})=>(0,l.jsx)(`div`,{style:{borderTop:`solid 1px #ccc`,background:`#fff`,padding:32,paddingTop:48,paddingBottom:48,whiteSpace:`pre-wrap`},children:e}),f={render:()=>{let[e,t]=(0,c.useState)({}),n=(0,c.useRef)(0),r=()=>({id:n.current++}),i=e=>o(e,r),s=(0,c.useRef)(null),[u]=(0,c.useState)(()=>i(30)),f=(0,c.useMemo)(()=>u.map(n=>(0,l.jsx)(d,{content:(0,l.jsx)(p,{id:n.id,isCollapsed:e[n.id],resize:()=>{t(e=>({...e,[n.id]:!e[n.id]}))},scroll:()=>{s.current?.scrollToIndex(n.id,{smooth:!0})}})},n.id)),[u,e]);return(0,l.jsx)(a,{ref:s,style:{flex:1},children:f})}},p=({id:e,isCollapsed:t,resize:n,scroll:r})=>(0,l.jsxs)(`div`,{style:{transition:`height 250ms linear`,height:t?200:600,background:`#ccc`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`16px`},children:[(0,l.jsx)(`div`,{children:e}),(0,l.jsx)(`button`,{onClick:n,children:`Resize`}),(0,l.jsx)(`button`,{onClick:r,children:`Smooth Scroll`}),(0,l.jsx)(`button`,{onClick:()=>{n(),r()},children:`Resize + Smooth Scroll`})]}),m=({content:e})=>(0,l.jsx)(`div`,{style:{borderTop:`solid 1px red`,background:`#fff`,whiteSpace:`pre-wrap`,overflow:`hidden`},children:e}),h={render:()=>{let[e,t]=(0,c.useState)({}),n=(0,c.useRef)(0),r=()=>({id:n.current++}),i=e=>o(e,r),s=(0,c.useRef)(null),[u]=(0,c.useState)(()=>i(60)),d=(0,c.useMemo)(()=>u.filter(({id:t})=>!e[t]).map(e=>(0,l.jsx)(m,{content:(0,l.jsx)(g,{id:e.id,onHidden:()=>{t(t=>({...t,[e.id]:!0}))}})},e.id)),[u,e]);return(0,l.jsx)(a,{ref:s,style:{flex:1},children:d})}},g=({id:e,onHidden:t})=>{let[n,r]=(0,c.useState)(!1),i=(0,c.useRef)(!1),a=(0,c.useRef)(!1);return(0,c.useEffect)(()=>{i.current=n},[n]),(0,c.useEffect)(()=>()=>{a.current||i.current&&t()},[]),(0,l.jsx)(`div`,{style:{transition:`height 250ms linear`,height:n?0:300,background:`#ccc`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`16px`},onTransitionEnd:()=>{n&&(a.current=!0,t())},onClick:()=>{r(!0)},children:(0,l.jsx)(`div`,{children:e})})},_=[`CollapseAndScroll`,`CollapseAndRemove`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}v();export{h as CollapseAndRemove,f as CollapseAndScroll,_ as __namedExportsOrder,u as default};