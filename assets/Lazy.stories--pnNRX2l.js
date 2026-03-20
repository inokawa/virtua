import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-BloxyZkO.js";import{d as B}from"./common-C_ovhmAN.js";import{V as _}from"./VList-2ZiNepJB.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-B_OdCoAn.js";import"./useLatestRef-lpPjsBgP.js";import"./useChildren-BnrGJIBy.js";import"./index-BaByRIGI.js";import"./index-HPlueMeP.js";var l=function(){return l=Object.assign||function(n){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},l.apply(this,arguments)};function D(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]]);return o}var H=function(e){var n=e.animate,o=n===void 0?!0:n,r=e.backgroundColor,a=r===void 0?"#f5f6f7":r,c=e.backgroundOpacity,u=c===void 0?1:c,f=e.baseUrl,p=f===void 0?"":f,V=e.children,y=e.foregroundColor,z=y===void 0?"#eee":y,h=e.foregroundOpacity,R=h===void 0?1:h,g=e.gradientRatio,v=g===void 0?2:g,b=e.uniqueKey,x=e.rtl,T=x===void 0?!1:x,E=e.speed,q=E===void 0?1.2:E,O=e.style,A=O===void 0?{}:O,C=e.title,j=C===void 0?"Loading...":C,k=e.beforeMask,m=k===void 0?null:k,G=D(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),s=t.useId();b&&(s=b);var w="".concat(s,"-diff"),S="".concat(s,"-animated-diff"),L="".concat(s,"-aria"),K=T?{transform:"scaleX(-1)"}:null,M="".concat(q,"s"),P="".concat(v*-1," 0"),U="".concat(v," 0");return t.createElement("svg",l({"aria-labelledby":L,role:"img",style:l(l({},A),K)},G),j?t.createElement("title",{id:L},j):null,m&&t.isValidElement(m)?m:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(p,"#").concat(w,")"),style:{fill:"url(".concat(p,"#").concat(S,")")}}),t.createElement("defs",null,t.createElement("clipPath",{id:w},V),t.createElement("linearGradient",{id:S,gradientTransform:"translate(".concat(P,")")},t.createElement("stop",{offset:"0%",stopColor:a,stopOpacity:u}),t.createElement("stop",{offset:"50%",stopColor:z,stopOpacity:R}),t.createElement("stop",{offset:"100%",stopColor:a,stopOpacity:u}),o&&t.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(P,"; 0 0; ").concat(U),dur:M,repeatCount:"indefinite"}))))},F=function(e){return e.children?t.createElement(H,l({},e)):t.createElement(I,l({},e))},I=function(e){return t.createElement(F,l({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const ae={component:_},N=()=>i.jsx(I,{style:{height:"90%"}}),X=()=>i.jsx("div",{style:{width:"100%",height:"100%"},children:"loaded"}),J=({children:e})=>i.jsx("div",{style:{padding:10,height:300,borderBottom:"solid 1px #ccc",background:"#fff"},children:e}),d={name:"Lazy",render:()=>{const e=t.useState(()=>Array.from({length:1e3},()=>t.lazy(()=>new Promise(async n=>{await B(1e3),n({default:X})}))))[0];return i.jsx(_,{style:{height:"100vh"},children:e.map((n,o)=>i.jsx(J,{children:i.jsx(t.Suspense,{fallback:i.jsx(N,{}),children:i.jsx(n,{})})},o))})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Lazy",
  render: () => {
    const heavyComps = useState(() => Array.from({
      length: 1000
    }, () => lazy(() => new Promise<{
      default: ComponentType;
    }>(async resolve => {
      await delay(1000);
      resolve({
        default: Loaded
      });
    }))))[0];
    return <VList style={{
      height: "100vh"
    }}>
        {heavyComps.map((HeavyComp, i) => <Item key={i}>
            <Suspense fallback={<Skeleton />}>
              <HeavyComp />
            </Suspense>
          </Item>)}
      </VList>;
  }
}`,...d.parameters?.docs?.source}}};const ie=["Default"];export{d as Default,ie as __namedExportsOrder,ae as default};
