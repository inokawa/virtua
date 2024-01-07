import{j as o,F as p,a}from"./jsx-runtime-sgeEVxPu.js";const d=(e,r)=>Array.from({length:e}).map((s,n)=>r(n)),i=e=>new Promise(r=>setTimeout(r,e)),t=({style:e,height:r=100})=>o(p,{children:[a("div",{style:{...e,height:r,display:"flex",alignItems:"center",justifyContent:"center",background:"white"},children:a("span",{className:"loader"})}),a("style",{children:`
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
      }`})]});try{i.displayName="delay",i.__docgenInfo={description:"",displayName:"delay",props:{}}}catch{}try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},height:{defaultValue:{value:"100"},description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}export{t as S,i as d,d as r};
