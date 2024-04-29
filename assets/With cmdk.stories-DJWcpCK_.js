import{j as R}from"./jsx-runtime-DCrfGL6_.js";import{r}from"./index-98wxwTcn.js";import{_ as A}from"./extends-B6xKY8K9.js";import{$ as ze,a as ue,b as De,h as qe,c as ee,d as Ge,e as He,f as Ue,g as w,i as We,j as te,k as Be,R as Ye,l as Je}from"./index-B_0LEiSE.js";import{f as Xe}from"./index-xJp9Kd2E.js";import{V as Se}from"./Virtualizer-DhI2ZnoE.js";import"./index-SCI4cgSJ.js";import"./useRerender-DRs1Esn8.js";import"./useChildren-BZcvfk6l.js";var xe=1,Ze=.9,Qe=.8,et=.17,re=.1,ne=.999,tt=.9999,rt=.99,nt=/[\\\/_+.#"@\[\(\{&]/,ot=/[\\\/_+.#"@\[\(\{&]/g,lt=/[\s-]/,Ie=/[\s-]/g;function le(e,o,t,u,a,l,c){if(l===o.length)return a===e.length?xe:rt;var i=`${a},${l}`;if(c[i]!==void 0)return c[i];for(var v=u.charAt(l),p=t.indexOf(v,a),f=0,b,y,E,k;p>=0;)b=le(e,o,t,u,p+1,l+1,c),b>f&&(p===a?b*=xe:nt.test(e.charAt(p-1))?(b*=Qe,E=e.slice(a,p-1).match(ot),E&&a>0&&(b*=Math.pow(ne,E.length))):lt.test(e.charAt(p-1))?(b*=Ze,k=e.slice(a,p-1).match(Ie),k&&a>0&&(b*=Math.pow(ne,k.length))):(b*=et,a>0&&(b*=Math.pow(ne,p-a))),e.charAt(p)!==o.charAt(l)&&(b*=tt)),(b<re&&t.charAt(p-1)===u.charAt(l+1)||u.charAt(l+1)===u.charAt(l)&&t.charAt(p-1)!==u.charAt(l))&&(y=le(e,o,t,u,p+1,l+2,c),y*re>b&&(b=y*re)),b>f&&(f=b),p=t.indexOf(v,p+1);return c[i]=f,f}function Ee(e){return e.toLowerCase().replace(Ie," ")}function at(e,o,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,le(e,o,Ee(e),Ee(o),0,0,{})}const _e="Dialog",[Ae,Ht]=ze(_e),[ct,P]=Ae(_e),ut=e=>{const{__scopeDialog:o,children:t,open:u,defaultOpen:a,onOpenChange:l,modal:c=!0}=e,i=r.useRef(null),v=r.useRef(null),[p=!1,f]=We({prop:u,defaultProp:a,onChange:l});return r.createElement(ct,{scope:o,triggerRef:i,contentRef:v,contentId:te(),titleId:te(),descriptionId:te(),open:p,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(b=>!b),[f]),modal:c},t)},Me="DialogPortal",[it,Oe]=Ae(Me,{forceMount:void 0}),st=e=>{const{__scopeDialog:o,forceMount:t,children:u,container:a}=e,l=P(Me,o);return r.createElement(it,{scope:o,forceMount:t},r.Children.map(u,c=>r.createElement(ue,{present:t||l.open},r.createElement(Be,{asChild:!0,container:a},c))))},ae="DialogOverlay",dt=r.forwardRef((e,o)=>{const t=Oe(ae,e.__scopeDialog),{forceMount:u=t.forceMount,...a}=e,l=P(ae,e.__scopeDialog);return l.modal?r.createElement(ue,{present:u||l.open},r.createElement(ft,A({},a,{ref:o}))):null}),ft=r.forwardRef((e,o)=>{const{__scopeDialog:t,...u}=e,a=P(ae,t);return r.createElement(Ye,{as:Je,allowPinchZoom:!0,shards:[a.contentRef]},r.createElement(w.div,A({"data-state":Fe(a.open)},u,{ref:o,style:{pointerEvents:"auto",...u.style}})))}),T="DialogContent",pt=r.forwardRef((e,o)=>{const t=Oe(T,e.__scopeDialog),{forceMount:u=t.forceMount,...a}=e,l=P(T,e.__scopeDialog);return r.createElement(ue,{present:u||l.open},l.modal?r.createElement(mt,A({},a,{ref:o})):r.createElement(vt,A({},a,{ref:o})))}),mt=r.forwardRef((e,o)=>{const t=P(T,e.__scopeDialog),u=r.useRef(null),a=De(o,t.contentRef,u);return r.useEffect(()=>{const l=u.current;if(l)return qe(l)},[]),r.createElement(Pe,A({},e,{ref:a,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ee(e.onCloseAutoFocus,l=>{var c;l.preventDefault(),(c=t.triggerRef.current)===null||c===void 0||c.focus()}),onPointerDownOutside:ee(e.onPointerDownOutside,l=>{const c=l.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&l.preventDefault()}),onFocusOutside:ee(e.onFocusOutside,l=>l.preventDefault())}))}),vt=r.forwardRef((e,o)=>{const t=P(T,e.__scopeDialog),u=r.useRef(!1),a=r.useRef(!1);return r.createElement(Pe,A({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{var c;if((c=e.onCloseAutoFocus)===null||c===void 0||c.call(e,l),!l.defaultPrevented){var i;u.current||(i=t.triggerRef.current)===null||i===void 0||i.focus(),l.preventDefault()}u.current=!1,a.current=!1},onInteractOutside:l=>{var c,i;(c=e.onInteractOutside)===null||c===void 0||c.call(e,l),l.defaultPrevented||(u.current=!0,l.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const v=l.target;((i=t.triggerRef.current)===null||i===void 0?void 0:i.contains(v))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&a.current&&l.preventDefault()}}))}),Pe=r.forwardRef((e,o)=>{const{__scopeDialog:t,trapFocus:u,onOpenAutoFocus:a,onCloseAutoFocus:l,...c}=e,i=P(T,t),v=r.useRef(null),p=De(o,v);return Ge(),r.createElement(r.Fragment,null,r.createElement(He,{asChild:!0,loop:!0,trapped:u,onMountAutoFocus:a,onUnmountAutoFocus:l},r.createElement(Ue,A({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":Fe(i.open)},c,{ref:p,onDismiss:()=>i.onOpenChange(!1)}))),!1)});function Fe(e){return e?"open":"closed"}const bt=ut,gt=st,$t=dt,ht=pt;var N='[cmdk-group=""]',oe='[cmdk-group-items=""]',xt='[cmdk-group-heading=""]',ie='[cmdk-item=""]',Ce=`${ie}:not([aria-disabled="true"])`,ce="cmdk-item-select",_="data-value",Et=(e,o,t)=>at(e,o,t),je=r.createContext(void 0),z=()=>r.useContext(je),Le=r.createContext(void 0),se=()=>r.useContext(Le),Ne=r.createContext(void 0),Ve=r.forwardRef((e,o)=>{let t=F(()=>{var n,d;return{search:"",value:(d=(n=e.value)!=null?n:e.defaultValue)!=null?d:"",filtered:{count:0,items:new Map,groups:new Set}}}),u=F(()=>new Set),a=F(()=>new Map),l=F(()=>new Map),c=F(()=>new Set),i=Te(e),{label:v,children:p,value:f,onValueChange:b,filter:y,shouldFilter:E,loop:k,disablePointerSelection:q=!1,vimBindings:D=!0,...G}=e,de=r.useId(),fe=r.useId(),pe=r.useId(),S=r.useRef(null),$=Mt();M(()=>{if(f!==void 0){let n=f.trim();t.current.value=n,x.emit()}},[f]),M(()=>{$(6,ve)},[]);let x=r.useMemo(()=>({subscribe:n=>(c.current.add(n),()=>c.current.delete(n)),snapshot:()=>t.current,setState:(n,d,m)=>{var s,g,h;if(!Object.is(t.current[n],d)){if(t.current[n]=d,n==="search")X(),Y(),$(1,J);else if(n==="value"&&(m||$(5,ve),((s=i.current)==null?void 0:s.value)!==void 0)){let C=d??"";(h=(g=i.current).onValueChange)==null||h.call(g,C);return}x.emit()}},emit:()=>{c.current.forEach(n=>n())}}),[]),B=r.useMemo(()=>({value:(n,d,m)=>{var s;d!==((s=l.current.get(n))==null?void 0:s.value)&&(l.current.set(n,{value:d,keywords:m}),t.current.filtered.items.set(n,me(d,m)),$(2,()=>{Y(),x.emit()}))},item:(n,d)=>(u.current.add(n),d&&(a.current.has(d)?a.current.get(d).add(n):a.current.set(d,new Set([n]))),$(3,()=>{X(),Y(),t.current.value||J(),x.emit()}),()=>{l.current.delete(n),u.current.delete(n),t.current.filtered.items.delete(n);let m=j();$(4,()=>{X(),(m==null?void 0:m.getAttribute("id"))===n&&J(),x.emit()})}),group:n=>(a.current.has(n)||a.current.set(n,new Set),()=>{l.current.delete(n),a.current.delete(n)}),filter:()=>i.current.shouldFilter,label:v||e["aria-label"],disablePointerSelection:q,listId:de,inputId:pe,labelId:fe,listInnerRef:S}),[]);function me(n,d){var m,s;let g=(s=(m=i.current)==null?void 0:m.filter)!=null?s:Et;return n?g(n,t.current.search,d):0}function Y(){if(!t.current.search||i.current.shouldFilter===!1)return;let n=t.current.filtered.items,d=[];t.current.filtered.groups.forEach(s=>{let g=a.current.get(s),h=0;g.forEach(C=>{let I=n.get(C);h=Math.max(I,h)}),d.push([s,h])});let m=S.current;L().sort((s,g)=>{var h,C;let I=s.getAttribute("id"),H=g.getAttribute("id");return((h=n.get(H))!=null?h:0)-((C=n.get(I))!=null?C:0)}).forEach(s=>{let g=s.closest(oe);g?g.appendChild(s.parentElement===g?s:s.closest(`${oe} > *`)):m.appendChild(s.parentElement===m?s:s.closest(`${oe} > *`))}),d.sort((s,g)=>g[1]-s[1]).forEach(s=>{let g=S.current.querySelector(`${N}[${_}="${encodeURIComponent(s[0])}"]`);g==null||g.parentElement.appendChild(g)})}function J(){let n=L().find(m=>m.getAttribute("aria-disabled")!=="true"),d=n==null?void 0:n.getAttribute(_);x.setState("value",d||void 0)}function X(){var n,d,m,s;if(!t.current.search||i.current.shouldFilter===!1){t.current.filtered.count=u.current.size;return}t.current.filtered.groups=new Set;let g=0;for(let h of u.current){let C=(d=(n=l.current.get(h))==null?void 0:n.value)!=null?d:"",I=(s=(m=l.current.get(h))==null?void 0:m.keywords)!=null?s:[],H=me(C,I);t.current.filtered.items.set(h,H),H>0&&g++}for(let[h,C]of a.current)for(let I of C)if(t.current.filtered.items.get(I)>0){t.current.filtered.groups.add(h);break}t.current.filtered.count=g}function ve(){var n,d,m;let s=j();s&&(((n=s.parentElement)==null?void 0:n.firstChild)===s&&((m=(d=s.closest(N))==null?void 0:d.querySelector(xt))==null||m.scrollIntoView({block:"nearest"})),s.scrollIntoView({block:"nearest"}))}function j(){var n;return(n=S.current)==null?void 0:n.querySelector(`${ie}[aria-selected="true"]`)}function L(){var n;return Array.from((n=S.current)==null?void 0:n.querySelectorAll(Ce))}function Z(n){let d=L()[n];d&&x.setState("value",d.getAttribute(_))}function Q(n){var d;let m=j(),s=L(),g=s.findIndex(C=>C===m),h=s[g+n];(d=i.current)!=null&&d.loop&&(h=g+n<0?s[s.length-1]:g+n===s.length?s[0]:s[g+n]),h&&x.setState("value",h.getAttribute(_))}function be(n){let d=j(),m=d==null?void 0:d.closest(N),s;for(;m&&!s;)m=n>0?_t(m,N):At(m,N),s=m==null?void 0:m.querySelector(Ce);s?x.setState("value",s.getAttribute(_)):Q(n)}let ge=()=>Z(L().length-1),$e=n=>{n.preventDefault(),n.metaKey?ge():n.altKey?be(1):Q(1)},he=n=>{n.preventDefault(),n.metaKey?Z(0):n.altKey?be(-1):Q(-1)};return r.createElement(w.div,{ref:o,tabIndex:-1,...G,"cmdk-root":"",onKeyDown:n=>{var d;if((d=G.onKeyDown)==null||d.call(G,n),!n.defaultPrevented)switch(n.key){case"n":case"j":{D&&n.ctrlKey&&$e(n);break}case"ArrowDown":{$e(n);break}case"p":case"k":{D&&n.ctrlKey&&he(n);break}case"ArrowUp":{he(n);break}case"Home":{n.preventDefault(),Z(0);break}case"End":{n.preventDefault(),ge();break}case"Enter":if(!n.nativeEvent.isComposing&&n.keyCode!==229){n.preventDefault();let m=j();if(m){let s=new Event(ce);m.dispatchEvent(s)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:B.inputId,id:B.labelId,style:Pt},v),W(e,n=>r.createElement(Le.Provider,{value:x},r.createElement(je.Provider,{value:B},n))))}),Ct=r.forwardRef((e,o)=>{var t,u;let a=r.useId(),l=r.useRef(null),c=r.useContext(Ne),i=z(),v=Te(e),p=(u=(t=v.current)==null?void 0:t.forceMount)!=null?u:c==null?void 0:c.forceMount;M(()=>{if(!p)return i.item(a,c==null?void 0:c.id)},[p]);let f=Ke(a,l,[e.value,e.children,l],e.keywords),b=se(),y=O($=>$.value&&$.value===f.current),E=O($=>p||i.filter()===!1?!0:$.search?$.filtered.items.get(a)>0:!0);r.useEffect(()=>{let $=l.current;if(!(!$||e.disabled))return $.addEventListener(ce,k),()=>$.removeEventListener(ce,k)},[E,e.onSelect,e.disabled]);function k(){var $,x;q(),(x=($=v.current).onSelect)==null||x.call($,f.current)}function q(){b.setState("value",f.current,!0)}if(!E)return null;let{disabled:D,value:G,onSelect:de,forceMount:fe,keywords:pe,...S}=e;return r.createElement(w.div,{ref:K([l,o]),...S,id:a,"cmdk-item":"",role:"option","aria-disabled":!!D,"aria-selected":!!y,"data-disabled":!!D,"data-selected":!!y,onPointerMove:D||i.disablePointerSelection?void 0:q,onClick:D?void 0:k},e.children)}),yt=r.forwardRef((e,o)=>{let{heading:t,children:u,forceMount:a,...l}=e,c=r.useId(),i=r.useRef(null),v=r.useRef(null),p=r.useId(),f=z(),b=O(E=>a||f.filter()===!1?!0:E.search?E.filtered.groups.has(c):!0);M(()=>f.group(c),[]),Ke(c,i,[e.value,e.heading,v]);let y=r.useMemo(()=>({id:c,forceMount:a}),[a]);return r.createElement(w.div,{ref:K([i,o]),...l,"cmdk-group":"",role:"presentation",hidden:b?void 0:!0},t&&r.createElement("div",{ref:v,"cmdk-group-heading":"","aria-hidden":!0,id:p},t),W(e,E=>r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?p:void 0},r.createElement(Ne.Provider,{value:y},E))))}),Rt=r.forwardRef((e,o)=>{let{alwaysRender:t,...u}=e,a=r.useRef(null),l=O(c=>!c.search);return!t&&!l?null:r.createElement(w.div,{ref:K([a,o]),...u,"cmdk-separator":"",role:"separator"})}),wt=r.forwardRef((e,o)=>{let{onValueChange:t,...u}=e,a=e.value!=null,l=se(),c=O(f=>f.search),i=O(f=>f.value),v=z(),p=r.useMemo(()=>{var f;let b=(f=v.listInnerRef.current)==null?void 0:f.querySelector(`${ie}[${_}="${encodeURIComponent(i)}"]`);return b==null?void 0:b.getAttribute("id")},[]);return r.useEffect(()=>{e.value!=null&&l.setState("search",e.value)},[e.value]),r.createElement(w.input,{ref:o,...u,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":v.listId,"aria-labelledby":v.labelId,"aria-activedescendant":p,id:v.inputId,type:"text",value:a?e.value:c,onChange:f=>{a||l.setState("search",f.target.value),t==null||t(f.target.value)}})}),kt=r.forwardRef((e,o)=>{let{children:t,label:u="Suggestions",...a}=e,l=r.useRef(null),c=r.useRef(null),i=z();return r.useEffect(()=>{if(c.current&&l.current){let v=c.current,p=l.current,f,b=new ResizeObserver(()=>{f=requestAnimationFrame(()=>{let y=v.offsetHeight;p.style.setProperty("--cmdk-list-height",y.toFixed(1)+"px")})});return b.observe(v),()=>{cancelAnimationFrame(f),b.unobserve(v)}}},[]),r.createElement(w.div,{ref:K([l,o]),...a,"cmdk-list":"",role:"listbox","aria-label":u,id:i.listId},W(e,v=>r.createElement("div",{ref:K([c,i.listInnerRef]),"cmdk-list-sizer":""},v)))}),Dt=r.forwardRef((e,o)=>{let{open:t,onOpenChange:u,overlayClassName:a,contentClassName:l,container:c,...i}=e;return r.createElement(bt,{open:t,onOpenChange:u},r.createElement(gt,{container:c},r.createElement($t,{"cmdk-overlay":"",className:a}),r.createElement(ht,{"aria-label":e.label,"cmdk-dialog":"",className:l},r.createElement(Ve,{ref:o,...i}))))}),St=r.forwardRef((e,o)=>O(t=>t.filtered.count===0)?r.createElement(w.div,{ref:o,...e,"cmdk-empty":"",role:"presentation"}):null),It=r.forwardRef((e,o)=>{let{progress:t,children:u,label:a="Loading...",...l}=e;return r.createElement(w.div,{ref:o,...l,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":a},W(e,c=>r.createElement("div",{"aria-hidden":!0},c)))}),V=Object.assign(Ve,{List:kt,Item:Ct,Input:wt,Group:yt,Separator:Rt,Dialog:Dt,Empty:St,Loading:It});function _t(e,o){let t=e.nextElementSibling;for(;t;){if(t.matches(o))return t;t=t.nextElementSibling}}function At(e,o){let t=e.previousElementSibling;for(;t;){if(t.matches(o))return t;t=t.previousElementSibling}}function Te(e){let o=r.useRef(e);return M(()=>{o.current=e}),o}var M=typeof window>"u"?r.useEffect:r.useLayoutEffect;function F(e){let o=r.useRef();return o.current===void 0&&(o.current=e()),o}function K(e){return o=>{e.forEach(t=>{typeof t=="function"?t(o):t!=null&&(t.current=o)})}}function O(e){let o=se(),t=()=>e(o.snapshot());return r.useSyncExternalStore(o.subscribe,t,t)}function Ke(e,o,t,u=[]){let a=r.useRef(),l=z();return M(()=>{var c;let i=(()=>{var p;for(let f of t){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(p=f.current.textContent)==null?void 0:p.trim():a.current}})(),v=u.map(p=>p.trim());l.value(e,i,v),(c=o.current)==null||c.setAttribute(_,i),a.current=i}),a}var Mt=()=>{let[e,o]=r.useState(),t=F(()=>new Map);return M(()=>{t.current.forEach(u=>u()),t.current=new Map},[e]),(u,a)=>{t.current.set(u,a),o({})}};function Ot(e){let o=e.type;return typeof o=="function"?o(e.props):"render"in o?o.render(e.props):e}function W({asChild:e,children:o},t){return e&&r.isValidElement(o)?r.cloneElement(Ot(o),{ref:o.ref},t(o.props.children)):t(o)}var Pt={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const ye=Array.from({length:1e3}).map((e,o)=>({id:String(o),label:Xe.person.fullName()})),Ft=r.forwardRef(({children:e,style:o},t)=>(e=e,r.cloneElement(e,{ref:t,style:{...e.props.style,...o}}))),Ut={component:Se},U={name:"With cmdk",render:()=>{const e=r.useRef(null),[o,t]=r.useState(""),[u,a]=r.useState(""),l=r.useMemo(()=>{if(!u)return ye;const c=u.toLowerCase();return ye.filter(i=>i.label.toLowerCase().includes(c))},[u]);return R.jsxs(R.Fragment,{children:[R.jsxs(V,{label:"Command Menu",value:o,shouldFilter:!1,children:[R.jsx(V.Input,{value:u,onValueChange:a}),R.jsx(V.Empty,{children:"No results found."}),R.jsx(V.List,{ref:e,children:R.jsx(Se,{scrollRef:e,item:Ft,children:l.map(c=>R.jsx(V.Item,{onSelect:t,children:c.label},c.id))})})]}),R.jsx("style",{children:`
[cmdk-root] {
  width: 400px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
}
[cmdk-list] {
  overflow-y: auto;
  height: 400px;
}
[cmdk-item] {
  height: 40px;
  cursor: pointer;
}
[cmdk-item][data-selected] {
  background: skyblue;
}
`})]})}};var Re,we,ke;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "With cmdk",
  render: () => {
    const ref = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState("");
    const filtered = useMemo(() => {
      if (!value) return TAGS;
      const normalizedValue = value.toLowerCase();
      return TAGS.filter(t => t.label.toLowerCase().includes(normalizedValue));
    }, [value]);
    return <>
        <Command label="Command Menu" value={selected} shouldFilter={false}>
          <Command.Input value={value} onValueChange={setValue} />
          <Command.Empty>No results found.</Command.Empty>
          <Command.List ref={ref}>
            <Virtualizer scrollRef={ref} item={Item}>
              {filtered.map(t => <Command.Item key={t.id} onSelect={setSelected}>
                  {t.label}
                </Command.Item>)}
            </Virtualizer>
          </Command.List>
        </Command>
        <style>{\`
[cmdk-root] {
  width: 400px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
}
[cmdk-list] {
  overflow-y: auto;
  height: 400px;
}
[cmdk-item] {
  height: 40px;
  cursor: pointer;
}
[cmdk-item][data-selected] {
  background: skyblue;
}
\`}</style>
      </>;
  }
}`,...(ke=(we=U.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};const Wt=["Default"];export{U as Default,Wt as __namedExportsOrder,Ut as default};
