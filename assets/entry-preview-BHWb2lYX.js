import{R as o,r as a}from"./index-98wxwTcn.js";import{c as v}from"./client-CN0tmH1w.js";import"./index-SCI4cgSJ.js";var f=Object.defineProperty,w=(e,r)=>{for(var t in r)f(e,t,{get:r[t],enumerable:!0})},s=new Map,_=({callback:e,children:r})=>{let t=a.useRef();return a.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r},g=async(e,r,t)=>{let n=await R(r,t);return new Promise(i=>{n.render(o.createElement(_,{callback:()=>i(null)},e))})},d=(e,r)=>{let t=s.get(e);t&&(t.unmount(),s.delete(e))},R=async(e,r)=>{let t=s.get(e);return t||(t=v.createRoot(e,r),s.set(e,t)),t};const{global:y}=__STORYBOOK_MODULE_GLOBAL__;var M={};w(M,{mount:()=>b,parameters:()=>B,render:()=>D,renderToCanvas:()=>O});var D=(e,r)=>{let{id:t,component:n}=r;if(!n)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return o.createElement(n,{...e})},{FRAMEWORK_OPTIONS:c}=y,L=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:r}=this.props;e||r()}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:r}},h=c!=null&&c.strictMode?a.StrictMode:a.Fragment;async function O({storyContext:e,unboundStoryFn:r,showMain:t,showException:n,forceRemount:i},p){var u,l;let m=o.createElement(L,{showMain:t,showException:n},o.createElement(r,{...e})),E=h?o.createElement(h,null,m):m;return i&&d(p),await g(E,p,(l=(u=e==null?void 0:e.parameters)==null?void 0:u.react)==null?void 0:l.rootOptions),()=>d(p)}var b=e=>async r=>(r!=null&&(e.originalStoryFn=()=>r),await e.renderToCanvas(),e.canvas),B={renderer:"react"};export{b as mount,B as parameters,D as render,O as renderToCanvas};
