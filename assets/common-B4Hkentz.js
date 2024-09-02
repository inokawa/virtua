import{j as r}from"./jsx-runtime-DR9Q75dM.js";const a=(e,i)=>Array.from({length:e}).map((n,t)=>i(t)),p=e=>new Promise(i=>setTimeout(i,e)),o=({style:e,height:i=100})=>r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{...e,height:i,display:"flex",alignItems:"center",justifyContent:"center",background:"white"},children:r.jsx("span",{className:"loader"})}),r.jsx("style",{children:`
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
      }`})]});o.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}}}};export{o as S,p as d,a as r};
