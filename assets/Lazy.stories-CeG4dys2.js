import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dw7v-Uf5.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{i,t as a}from"./src-p2r-qAdR.js";import{n as o,r as s}from"./common-PhgBxrtJ.js";function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}var l,u,d,f,p,m=t((()=>{l=e(n()),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},d=function(e){var t=e.animate,n=t===void 0?!0:t,r=e.backgroundColor,i=r===void 0?`#f5f6f7`:r,a=e.backgroundOpacity,o=a===void 0?1:a,s=e.baseUrl,d=s===void 0?``:s,f=e.children,p=e.foregroundColor,m=p===void 0?`#eee`:p,h=e.foregroundOpacity,g=h===void 0?1:h,_=e.gradientRatio,v=_===void 0?2:_,y=e.uniqueKey,b=e.rtl,x=b===void 0?!1:b,S=e.speed,C=S===void 0?1.2:S,w=e.style,T=w===void 0?{}:w,E=e.title,D=E===void 0?`Loading...`:E,O=e.beforeMask,k=O===void 0?null:O,A=c(e,[`animate`,`backgroundColor`,`backgroundOpacity`,`baseUrl`,`children`,`foregroundColor`,`foregroundOpacity`,`gradientRatio`,`uniqueKey`,`rtl`,`speed`,`style`,`title`,`beforeMask`]),j=(0,l.useId)();y&&(j=y);var M=`${j}-diff`,N=`${j}-animated-diff`,P=`${j}-aria`,F=x?{transform:`scaleX(-1)`}:null,I=`${C}s`,L=`${v*-1} 0`,R=`${v} 0`;return(0,l.createElement)(`svg`,u({"aria-labelledby":P,role:`img`,style:u(u({},T),F)},A),D?(0,l.createElement)(`title`,{id:P},D):null,k&&(0,l.isValidElement)(k)?k:null,(0,l.createElement)(`rect`,{role:`presentation`,x:`0`,y:`0`,width:`100%`,height:`100%`,clipPath:`url(${d}#${M})`,style:{fill:`url(${d}#${N})`}}),(0,l.createElement)(`defs`,null,(0,l.createElement)(`clipPath`,{id:M},f),(0,l.createElement)(`linearGradient`,{id:N,gradientTransform:`translate(${L})`},(0,l.createElement)(`stop`,{offset:`0%`,stopColor:i,stopOpacity:o}),(0,l.createElement)(`stop`,{offset:`50%`,stopColor:m,stopOpacity:g}),(0,l.createElement)(`stop`,{offset:`100%`,stopColor:i,stopOpacity:o}),n&&(0,l.createElement)(`animateTransform`,{attributeName:`gradientTransform`,type:`translate`,values:`${L}; 0 0; ${R}`,dur:I,repeatCount:`indefinite`}))))},f=function(e){return e.children?(0,l.createElement)(d,u({},e)):(0,l.createElement)(p,u({},e))},p=function(e){return(0,l.createElement)(f,u({viewBox:`0 0 476 124`},e),(0,l.createElement)(`rect`,{x:`48`,y:`8`,width:`88`,height:`6`,rx:`3`}),(0,l.createElement)(`rect`,{x:`48`,y:`26`,width:`52`,height:`6`,rx:`3`}),(0,l.createElement)(`rect`,{x:`0`,y:`56`,width:`410`,height:`6`,rx:`3`}),(0,l.createElement)(`rect`,{x:`0`,y:`72`,width:`380`,height:`6`,rx:`3`}),(0,l.createElement)(`rect`,{x:`0`,y:`88`,width:`178`,height:`6`,rx:`3`}),(0,l.createElement)(`circle`,{cx:`20`,cy:`20`,r:`20`}))}})),h,g,_,v,y,b,x,S;t((()=>{h=e(n(),1),a(),m(),s(),g=r(),_={component:i},v=()=>(0,g.jsx)(p,{style:{height:`90%`}}),y=()=>(0,g.jsx)(`div`,{style:{width:`100%`,height:`100%`},children:`loaded`}),b=({children:e})=>(0,g.jsx)(`div`,{style:{padding:10,height:300,borderBottom:`solid 1px #ccc`,background:`#fff`},children:e}),x={name:`Lazy`,render:()=>{let e=(0,h.useState)(()=>Array.from({length:1e3},()=>(0,h.lazy)(()=>new Promise(async e=>{await o(1e3),e({default:y})}))))[0];return(0,g.jsx)(i,{style:{height:`100vh`},children:e.map((e,t)=>(0,g.jsx)(b,{children:(0,g.jsx)(h.Suspense,{fallback:(0,g.jsx)(v,{}),children:(0,g.jsx)(e,{})})},t))})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`]}))();export{x as Default,S as __namedExportsOrder,_ as default};