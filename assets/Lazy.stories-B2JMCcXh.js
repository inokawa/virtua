import{j as i}from"./jsx-runtime-DCrfGL6_.js";import{r as t}from"./index-98wxwTcn.js";import{d as F}from"./common--WXKQNr2.js";import{V as z}from"./VList-GJzrjJpS.js";import"./Virtualizer-wuIbhGfx.js";import"./useRerender-D8u2whrP.js";import"./useChildren-Cc48_Zqu.js";import"./index-SCI4cgSJ.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var l=function(){return l=Object.assign||function(n){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},l.apply(this,arguments)};function N(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]]);return o}var X=function(){return Math.random().toString(36).substring(6)},J=function(e){var n=e.animate,o=n===void 0?!0:n,r=e.backgroundColor,a=r===void 0?"#f5f6f7":r,c=e.backgroundOpacity,u=c===void 0?1:c,f=e.baseUrl,p=f===void 0?"":f,R=e.children,y=e.foregroundColor,M=y===void 0?"#eee":y,h=e.foregroundOpacity,T=h===void 0?1:h,g=e.gradientRatio,v=g===void 0?2:g,q=e.uniqueKey,b=e.rtl,A=b===void 0?!1:b,x=e.speed,G=x===void 0?1.2:x,E=e.style,K=E===void 0?{}:E,O=e.title,C=O===void 0?"Loading...":O,j=e.beforeMask,d=j===void 0?null:j,U=N(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),m=q||X(),k="".concat(m,"-diff"),w="".concat(m,"-animated-diff"),S="".concat(m,"-aria"),B=A?{transform:"scaleX(-1)"}:null,D="".concat(G,"s"),L="".concat(v*-1," 0"),H="".concat(v," 0");return t.createElement("svg",l({"aria-labelledby":S,role:"img",style:l(l({},K),B)},U),C?t.createElement("title",{id:S},C):null,d&&t.isValidElement(d)?d:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(p,"#").concat(k,")"),style:{fill:"url(".concat(p,"#").concat(w,")")}}),t.createElement("defs",null,t.createElement("clipPath",{id:k},R),t.createElement("linearGradient",{id:w,gradientTransform:"translate(".concat(L,")")},t.createElement("stop",{offset:"0%",stopColor:a,stopOpacity:u}),t.createElement("stop",{offset:"50%",stopColor:M,stopOpacity:T}),t.createElement("stop",{offset:"100%",stopColor:a,stopOpacity:u}),o&&t.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(L,"; 0 0; ").concat(H),dur:D,repeatCount:"indefinite"}))))},Q=function(e){return e.children?t.createElement(J,l({},e)):t.createElement(I,l({},e))},I=function(e){return t.createElement(Q,l({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const le={component:z},W=()=>i.jsx(I,{style:{height:"90%"}}),Y=()=>i.jsx("div",{style:{width:"100%",height:"100%"},children:"loaded"}),Z=({children:e})=>i.jsx("div",{style:{padding:10,height:300,borderBottom:"solid 1px #ccc",background:"#fff"},children:e}),s={name:"Lazy",render:()=>{const e=t.useState(()=>Array.from({length:1e3},()=>t.lazy(()=>new Promise(async n=>{await F(1e3),n({default:Y})}))))[0];return i.jsx(z,{style:{height:"100vh"},children:e.map((n,o)=>i.jsx(Z,{children:i.jsx(t.Suspense,{fallback:i.jsx(W,{}),children:i.jsx(n,{})})},o))})}};var P,_,V;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(_=s.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const ce=["Default"];export{s as Default,ce as __namedExportsOrder,le as default};
