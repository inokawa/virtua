import{a as n,F as p,j as i}from"./jsx-runtime-KhpQ_ow-.js";const d=(e,r)=>Array.from({length:e}).map((s,o)=>r(o)),a=e=>new Promise(r=>setTimeout(r,e)),t=({style:e})=>n(p,{children:[i("div",{style:{...e,height:100,display:"flex",alignItems:"center",justifyContent:"center",background:"white"},children:i("span",{className:"loader"})}),i("style",{children:`
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
      }`})]});try{a.displayName="delay",a.__docgenInfo={description:"",displayName:"delay",props:{}}}catch{}try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{t as S,a as d,d as r};
//# sourceMappingURL=common-7gvj7Fb1.js.map
