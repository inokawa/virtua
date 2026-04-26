import{n as e}from"./chunk-BneVvdWh.js";import{S as t}from"./iframe-DzfIz40F.js";import{t as n}from"./jsx-runtime-Bn1Ys6_W.js";var r,i,a,o,s=e((()=>{t(),r=n(),i=(e,t)=>Array.from({length:e}).map((e,n)=>t(n)),a=e=>new Promise(t=>setTimeout(t,e)),o=({style:e,height:t=100})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`div`,{style:{...e,height:t,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`white`},children:(0,r.jsx)(`span`,{className:`loader`})}),(0,r.jsx)(`style`,{children:`
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
      }`})]}),o.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{style:{required:!1,tsType:{name:`CSSProperties`},description:``},height:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}}}}}));export{i,a as n,s as r,o as t};