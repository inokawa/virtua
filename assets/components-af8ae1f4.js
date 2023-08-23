import{a as t,F as n,j as e}from"./jsx-runtime-c3d7f245.js";const r=({style:i})=>t(n,{children:[e("div",{style:{...i,height:100,display:"flex",alignItems:"center",justifyContent:"center",background:"white"},children:e("span",{className:"loader"})}),e("style",{children:`
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
      }`})]});try{r.displayName="Spinner",r.__docgenInfo={description:"",displayName:"Spinner",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{r as S};
//# sourceMappingURL=components-af8ae1f4.js.map
