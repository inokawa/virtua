import{a as t,j as n}from"./jsx-runtime-sgeEVxPu.js";import{r as d}from"./index-yp3VsGQP.js";import{f as a}from"./index-KLTnsmU9.js";const o=d.forwardRef(({index:e},r)=>t("div",{ref:r,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff"},children:e})),c=[20,40,80,77,32,200],s=d.forwardRef(({index:e},r)=>t("div",{ref:r,style:{height:c[e%c.length],borderBottom:"solid 1px #ccc",background:"#fff"},children:e})),l=d.forwardRef(({index:e},r)=>(a.seed(e),n("div",{ref:r,style:{borderBottom:"solid 1px #ccc",background:"#fff",padding:10},children:[t("div",{children:e}),t("div",{style:{width:"100%"},children:t("img",{src:a.image.url(),style:{width:"100%"}})})]}))),m=d.forwardRef(({index:e},r)=>t("div",{ref:r,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff"},children:e})),p=d.forwardRef(({index:e},r)=>{const i=d.useRef(1);return d.useEffect(()=>{i.current+=1}),n("div",{ref:r,style:{height:50,borderBottom:"solid 1px #ccc",background:"#fff",display:"flex",justifyContent:"stretch",padding:"4px 20px"},children:[t("div",{style:{flex:1},children:e}),n("div",{children:["rendered: ",i.current]})]})});try{o.displayName="SimpleItem",o.__docgenInfo={description:"",displayName:"SimpleItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{s.displayName="DynamicItem",s.__docgenInfo={description:"",displayName:"DynamicItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{l.displayName="DynamicImageItem",l.__docgenInfo={description:"",displayName:"DynamicImageItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{m.displayName="HeavyItem",m.__docgenInfo={description:"",displayName:"HeavyItem",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}try{p.displayName="ItemWithRenderCount",p.__docgenInfo={description:"",displayName:"ItemWithRenderCount",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}export{s as D,m as H,p as I,o as S,l as a};
