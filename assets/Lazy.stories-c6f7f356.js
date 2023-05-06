import{j as i}from"./jsx-runtime-c3d7f245.js";import{r as t}from"./index-c6dae603.js";import{V as I}from"./VList-63487889.js";import"./index-778f7dbf.js";/*! *****************************************************************************
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
***************************************************************************** */var l=function(){return l=Object.assign||function(a){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s])}return a},l.apply(this,arguments)};function W(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var Y=function(){return Math.random().toString(36).substring(6)},Z=function(e){var a=e.animate,n=a===void 0?!0:a,r=e.animateBegin,o=e.backgroundColor,s=o===void 0?"#f5f6f7":o,y=e.backgroundOpacity,g=y===void 0?1:y,h=e.baseUrl,v=h===void 0?"":h,M=e.children,b=e.foregroundColor,R=b===void 0?"#eee":b,E=e.foregroundOpacity,A=E===void 0?1:E,O=e.gradientRatio,d=O===void 0?2:O,k=e.gradientDirection,G=k===void 0?"left-right":k,K=e.uniqueKey,x=e.interval,N=x===void 0?.25:x,C=e.rtl,U=C===void 0?!1:C,w=e.speed,H=w===void 0?1.2:w,S=e.style,F=S===void 0?{}:S,L=e.title,P=L===void 0?"Loading...":L,j=e.beforeMask,m=j===void 0?null:j,X=W(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),u=K||Y(),T=u+"-diff",V=u+"-animated-diff",_=u+"-aria",J=U?{transform:"scaleX(-1)"}:null,f="0; "+N+"; 1",p=H+"s",Q=G==="top-bottom"?"rotate(90)":void 0;return t.createElement("svg",l({"aria-labelledby":_,role:"img",style:l(l({},F),J)},X),P?t.createElement("title",{id:_},P):null,m&&t.isValidElement(m)?m:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+v+"#"+T+")",style:{fill:"url("+v+"#"+V+")"}}),t.createElement("defs",null,t.createElement("clipPath",{id:T},M),t.createElement("linearGradient",{id:V,gradientTransform:Q},t.createElement("stop",{offset:"0%",stopColor:s,stopOpacity:g},n&&t.createElement("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:f,dur:p,repeatCount:"indefinite",begin:r})),t.createElement("stop",{offset:"50%",stopColor:R,stopOpacity:A},n&&t.createElement("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:f,dur:p,repeatCount:"indefinite",begin:r})),t.createElement("stop",{offset:"100%",stopColor:s,stopOpacity:g},n&&t.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:f,dur:p,repeatCount:"indefinite",begin:r})))))},$=function(e){return e.children?t.createElement(Z,l({},e)):t.createElement(q,l({},e))},q=function(e){return t.createElement($,l({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const le={component:I},ee=()=>i(q,{}),te=()=>i("div",{style:{width:"100%",height:"100%"},children:"loaded"}),re=({children:e})=>i("div",{style:{padding:10,height:300,borderBottom:"solid 1px #ccc",background:"#fff"},children:e}),c={name:"Lazy",render:()=>{const e=t.useState(()=>Array.from({length:1e3},()=>t.lazy(()=>new Promise(async a=>{await new Promise(n=>setTimeout(n,1e3)),a({default:te})}))))[0];return i(I,{style:{height:"100vh"},children:e.map((a,n)=>i(re,{children:i(t.Suspense,{fallback:i(ee,{}),children:i(a,{})})},n))})}};var z,B,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Lazy",
  render: () => {
    const heavyComps = useState(() => Array.from({
      length: 1000
    }, () => lazy(() => new Promise<{
      default: ComponentType;
    }>(async resolve => {
      await new Promise(res => setTimeout(res, 1000));
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
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const se=["Default"];export{c as Default,se as __namedExportsOrder,le as default};
//# sourceMappingURL=Lazy.stories-c6f7f356.js.map
