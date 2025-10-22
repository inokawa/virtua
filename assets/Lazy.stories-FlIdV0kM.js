import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-D0b3K_4L.js";import{d as B}from"./common-BqtzafjA.js";import{V as P}from"./VList-CPgv5fx2.js";import"./preload-helper-PPVm8Dsz.js";import"./Virtualizer-thszMMZi.js";import"./useLatestRef-CdV_OxxM.js";import"./useChildren-BUGFX0-4.js";import"./index-DnoLG0YB.js";import"./index-C7QfMV6A.js";/*! *****************************************************************************
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
***************************************************************************** */var l=function(){return l=Object.assign||function(n){for(var o,r=1,a=arguments.length;r<a;r++){o=arguments[r];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},l.apply(this,arguments)};function D(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]]);return o}var H=(function(){return Math.random().toString(36).substring(6)}),F=function(e){var n=e.animate,o=n===void 0?!0:n,r=e.backgroundColor,a=r===void 0?"#f5f6f7":r,c=e.backgroundOpacity,u=c===void 0?1:c,f=e.baseUrl,p=f===void 0?"":f,V=e.children,y=e.foregroundColor,z=y===void 0?"#eee":y,h=e.foregroundOpacity,I=h===void 0?1:h,g=e.gradientRatio,v=g===void 0?2:g,R=e.uniqueKey,b=e.rtl,M=b===void 0?!1:b,x=e.speed,T=x===void 0?1.2:x,E=e.style,q=E===void 0?{}:E,O=e.title,C=O===void 0?"Loading...":O,j=e.beforeMask,d=j===void 0?null:j,A=D(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),m=R||H(),k="".concat(m,"-diff"),w="".concat(m,"-animated-diff"),S="".concat(m,"-aria"),G=M?{transform:"scaleX(-1)"}:null,K="".concat(T,"s"),L="".concat(v*-1," 0"),U="".concat(v," 0");return t.createElement("svg",l({"aria-labelledby":S,role:"img",style:l(l({},q),G)},A),C?t.createElement("title",{id:S},C):null,d&&t.isValidElement(d)?d:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(p,"#").concat(k,")"),style:{fill:"url(".concat(p,"#").concat(w,")")}}),t.createElement("defs",null,t.createElement("clipPath",{id:k},V),t.createElement("linearGradient",{id:w,gradientTransform:"translate(".concat(L,")")},t.createElement("stop",{offset:"0%",stopColor:a,stopOpacity:u}),t.createElement("stop",{offset:"50%",stopColor:z,stopOpacity:I}),t.createElement("stop",{offset:"100%",stopColor:a,stopOpacity:u}),o&&t.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(L,"; 0 0; ").concat(U),dur:K,repeatCount:"indefinite"}))))},N=function(e){return e.children?t.createElement(F,l({},e)):t.createElement(_,l({},e))},_=function(e){return t.createElement(N,l({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const ie={component:P},X=()=>i.jsx(_,{style:{height:"90%"}}),J=()=>i.jsx("div",{style:{width:"100%",height:"100%"},children:"loaded"}),Q=({children:e})=>i.jsx("div",{style:{padding:10,height:300,borderBottom:"solid 1px #ccc",background:"#fff"},children:e}),s={name:"Lazy",render:()=>{const e=t.useState(()=>Array.from({length:1e3},()=>t.lazy(()=>new Promise(async n=>{await B(1e3),n({default:J})}))))[0];return i.jsx(P,{style:{height:"100vh"},children:e.map((n,o)=>i.jsx(Q,{children:i.jsx(t.Suspense,{fallback:i.jsx(X,{}),children:i.jsx(n,{})})},o))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const le=["Default"];export{s as Default,le as __namedExportsOrder,ie as default};
