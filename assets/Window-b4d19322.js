import{r as z}from"./index-5284b0bf.js";import{r as fe}from"./index-480187bb.js";import{j as Q}from"./jsx-runtime-f8a6c6ea.js";const L=Math.min,b=Math.max,ae=Math.abs,Y=Date.now,Re=Object.values,ne=setTimeout,y=e=>e!=null,Z=(e,t)=>Array.from({length:e},(s,n)=>t(n)),de=e=>{const t=[...e].sort((n,r)=>n-r),s=e.length/2|0;return t.length%2===0?(t[s-1]+t[s])/2:t[s]},re=(e,t)=>{let s;const n=()=>{y(s)&&clearTimeout(s)},r=()=>{n(),s=ne(()=>{s=null,e()},t)};return r._cancel=n,r},_e=(e,t)=>{let s=Y()-t;return(...n)=>{const r=Y();s+t<r&&(s=r,e(...n))}},j=e=>{let t,s;return(...n)=>(t||(t=!0,s=e(...n)),s)},C=-1,N=(e,t)=>{const s=e._sizes[t];return s===C?e._defaultItemSize:s},me=(e,t,s)=>{const n=e._sizes[t]===C;return e._sizes[t]=s,e._measuredOffsetIndex=L(t,e._measuredOffsetIndex),n},oe=(e,t,s)=>{if(!e._length)return 0;if(e._measuredOffsetIndex>=t)return s?e._offsets[t]+N(e,t):e._offsets[t];let n=e._measuredOffsetIndex,r=e._offsets[n];for(;n<=t&&(e._offsets[n]=r,!(n===t&&!s));)r+=N(e,n),n++;return e._measuredOffsetIndex=t,r},pe=e=>oe(e,e._length-1,!0),$=(e,t)=>oe(e,t),ie=(e,t,s)=>{let n=0;if(s>=0)for(;t<e._length-1;){const r=N(e,t++);if((n+=r)>=s){n-r/2>=s&&t--;break}}else for(;t>0;){const r=N(e,--t);if((n-=r)<=s){n+r/2<s&&t++;break}}return L(b(t,0),e._length-1)},G=(e,t,s,n)=>ie(e,s,t-n),ge=(e,t,s)=>{for(let n=t;n<=s;n++)if(e._sizes[n]===C)return!0;return!1},he=e=>{const t=e._sizes.filter(n=>n!==C),s=t[0];e._defaultItemSize=t.every(n=>n===s)?s:de(t)},H=(e,t,s)=>({_defaultItemSize:s?s._defaultItemSize:t,_length:e,_measuredOffsetIndex:s?L(s._measuredOffsetIndex,e-1):0,_sizes:Z(e,n=>{const r=s&&s._sizes[n];return y(r)?r:C}),_offsets:Z(e,n=>{if(n===0)return 0;const r=s&&s._offsets[n];return y(r)?r:C})}),q=e=>e.reduce((t,[s])=>t+s,0),ee=(e,t)=>t.map(([s,n])=>[n-N(e,s),s]),we=1.5,M=0,te=1,F=2,X=3,k=1,U=2,J=3,ce=4,V=5,Ee=(e,t,s=0,n,r,_)=>{const c=!t,l=t||40;let o=l*b(s-1,0),f=0,m=0,a,i=H(e,l),p=M,h=!1,w=[0,s],g;const v=new Set,S=()=>pe(i),T=()=>S()-o,A=()=>{const u=h;return h=!1,u},x=u=>{const d=p;if(p=u,p===M)return!1;if(d===M&&(p===te||p===F))return!0};return{_getRange(){const[u,d]=w,O=$(i,u),I=G(i,f,u,O),E=ie(i,I,o);return u===I&&d===E?w:w=[I,E]},_isUnmeasuredItem(u){return i._sizes[u]===C},_hasUnmeasuredItemsInRange(u){return ge(i,b(0,u-2),L(i._length-1,u+2))},_getItemOffset(u){const d=$(i,u);return n?d+b(0,o-S()):d},_getItemSize(u){return N(i,u)},_getItemLength(){return i._length},_getScrollOffset(){return f},_getScrollOffsetMax:T,_getViewportSize(){return o},_getScrollSize:S,_getCorrectedScrollSize(){return b(S(),o)},_getJumpCount(){return m},_flushJump(){const u=a;return a=void 0,u},_getItemIndexForScrollTo(u){return G(i,u,0,0)},_waitForScrollDestinationItemsMeasured(){return g&&g[1](),new Promise((u,d)=>{let O=!1;const I=()=>{O||(O=!0,u(),g=void 0)};g=[I,d],ne(I,250)})},_subscribe(u){return v.add(u),()=>{v.delete(u)}},_update(u,d){let O,I,E=!1;switch(u){case k:{const R=d.filter(([W,K])=>i._sizes[W]!==K);if(!R.length)break;let D=0;if(p===F)D=q(ee(i,R));else if(p===X){const W=ee(i,R),[K]=w;f===0||(f>T()-we?D=q(W):D=q(W.filter(([,le])=>le<K)))}D&&(a=D,m++);let B=!1;R.forEach(([W,K])=>{me(i,W,K)&&(B=!0)}),c&&B&&!f&&he(i),h=O=E=!0;break}case U:{E=o!==d,o=d;break}case J:case ce:{if(f===d)break;if(u===J){const R=A();(p===M||!R)&&p!==X&&(I=x(f>d?F:te)),O=ae(f-d)>o}f=b(0,L(T(),d)),E=!0;break}case V:{I=x(d?X:M);break}}E&&(v.forEach(R=>{R(O)}),u===J&&_(f)),g&&u===k&&g[0](),y(I)&&r(I)},_getScrollDirection(){return p},_updateCacheLength(u){i._length!==u&&(i=H(u,l,i))}}},Se=typeof window<"u"?z.useLayoutEffect:z.useEffect,P="current",Le=e=>{const t=[];return z.Children.forEach(e,s=>{!y(s)||typeof s=="boolean"||t.push(s)}),t},Ie=e=>{const t=z.useRef(e);return Se(()=>{t[P]=e},[e]),t},ye=(e,t,s)=>{const[n,r]=z.useState(t),_=Ie(t);if(z.useLayoutEffect(()=>{const c=()=>{r(()=>_[P]())};return e._subscribe(l=>{l?fe.flushSync(c):c()})},[]),s){const c=t();n!==c&&r(c)}return n},ve=j(e=>{const t="scrollLeft",s=e[t];e[t]=1;const n=e[t]<1;return e[t]=s,n}),ue=(e,t,s)=>_e(n=>{if(e._getScrollDirection()!==M&&!n.ctrlKey&&(t?n.deltaX:n.deltaY)){const r=e._getScrollOffset();r>0&&r<e._getScrollOffsetMax()&&s()}},50),Ce=(e,t,s)=>{let n;const r=t?"scrollLeft":"scrollTop",_=()=>n?t?n.scrollWidth:n.scrollHeight:0,c=(o,f)=>t&&s?ve(n)||f?-o:e._getScrollOffsetMax()-o:o,l=async(o,f)=>{if(!n)return;const m=()=>L(f(),_()-e._getViewportSize());for(;e._update(ce,m()),!!e._hasUnmeasuredItemsInRange(o);)try{await e._waitForScrollDestinationItemsMeasured()}catch{return}n[r]=c(m()),e._update(V,!0)};return{_initRoot(o){n=o;const f=()=>{e._update(J,c(o[r]))},m=re(()=>{f(),e._update(V,!1)},150),a=()=>{f(),m()},i=ue(e,t,m);return o.addEventListener("scroll",a),o.addEventListener("wheel",i,{passive:!0}),()=>{o.removeEventListener("scroll",a),o.removeEventListener("wheel",i),m._cancel()}},_getActualScrollSize:_,_scrollTo(o){o=b(o,0),l(e._getItemIndexForScrollTo(o),()=>o)},_scrollToIndex(o){o=b(L(o,e._getItemLength()-1),0),l(o,()=>e._getItemOffset(o))},_fixScrollJump:o=>{n&&(n[r]+=c(o,!0))}}},Te=(e,t)=>{const s=t?"scrollX":"scrollY",n=t?"offsetLeft":"offsetTop";return{_initRoot(r){let _=!1;const c=(i,p)=>{const h=p+i[n],w=i.offsetParent;return i===document.body||!w?h:c(w,h)},l=()=>{_&&e._update(J,window[s]-c(r,0))},o=re(()=>{l(),e._update(V,!1)},150),f=()=>{l(),o()},m=ue(e,t,o),a=new IntersectionObserver(([i])=>{_=i.isIntersecting});return a.observe(r),window.addEventListener("scroll",f),window.addEventListener("wheel",m,{passive:!0}),()=>{a.disconnect(),window.removeEventListener("scroll",f),window.removeEventListener("wheel",m),o._cancel()}},_fixScrollJump:r=>{window.scrollBy(t?r:0,t?0:r)}}},xe=e=>{const t=z.useRef();return t[P]||(t[P]=e())},We=(e,t)=>{let s;const n=t?"width":"height",r=new WeakMap,_=j(()=>new ResizeObserver(c=>{const l=[];for(const{target:o,contentRect:f}of c)if(o===s)e._update(U,f[n]);else{const m=r.get(o);y(m)&&l.push([m,f[n]])}l.length&&e._update(k,l)}));return{_observeRoot(c){s=c;const l=_();return l.observe(c),()=>{l.disconnect()}},_observeItem(c,l){const o=_();return r.set(c,l),o.observe(c),()=>{r.delete(c),o.unobserve(c)}}}},Me=(e,t)=>{const s=t?"width":"height",n=t?"innerWidth":"innerHeight",r=new WeakMap,_=j(()=>new ResizeObserver(c=>{const l=[];for(const{target:o,contentRect:f}of c){const m=r.get(o);y(m)&&l.push([m,f[s]])}l.length&&e._update(k,l)}));return{_observeRoot(){const c=()=>{e._update(U,window[n])};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c),_().disconnect()}},_observeItem(c,l){const o=_();return r.set(c,l),o.observe(c),()=>{r.delete(c),o.unobserve(c)}}}},Ne=(e,t)=>{let s;const n="height",r="width",_=new WeakMap,c=new Set,l=new Set,o=new Map,f=(a,i)=>`${a}-${i}`,m=j(()=>new ResizeObserver(a=>{const i=new Set,p=new Set;for(const{target:h,contentRect:w}of a)if(h===s)e._update(U,w[n]),t._update(U,w[r]);else{const g=_.get(h);if(g){const[v,S]=g,T=f(v,S),A=o.get(T),x=[w[n],w[r]];let u,d;A?(A[0]!==x[0]&&(u=!0),A[1]!==x[1]&&(d=!0)):u=d=!0,u&&i.add(v),d&&p.add(S),(u||d)&&o.set(T,x)}}if(i.size){const h=[];i.forEach(w=>{let g=0;l.forEach(v=>{const S=o.get(f(w,v));S&&(g=b(g,S[0]))}),g&&h.push([w,g])}),e._update(k,h)}if(p.size){const h=[];p.forEach(w=>{let g=0;c.forEach(v=>{const S=o.get(f(v,w));S&&(g=b(g,S[1]))}),g&&h.push([w,g])}),t._update(k,h)}}));return{_observeRoot(a){s=a;const i=m();return i.observe(a),()=>{i.disconnect()}},_observeItem(a,i,p){const h=m();return _.set(a,[i,p]),c.add(i),l.add(p),h.observe(a),()=>{_.delete(a),h.unobserve(a)}}}},se=z.forwardRef(({children:e,attrs:t,width:s,height:n,scrolling:r},_)=>Q("div",{ref:_,...t,children:Q("div",{style:z.useMemo(()=>({position:"relative",visibility:"hidden",width:s??"100%",height:n??"100%",pointerEvents:r?"none":"auto"}),[s,n,r]),children:e})}));try{se.displayName="Window",se.__docgenInfo={description:"",displayName:"Window",props:{children:{defaultValue:null,description:"Renderable item elements.",name:"children",required:!0,type:{name:"ReactNode"}},attrs:{defaultValue:null,description:"Attributes that should be passed to the scrollable element.",name:"attrs",required:!0,type:{name:"WindowComponentAttributes"}},height:{defaultValue:null,description:"Total height of items. It's undefined if component is not vertically scrollable.",name:"height",required:!0,type:{name:"number | undefined"}},width:{defaultValue:null,description:"Total width of items. It's undefined if component is not horizontally scrollable.",name:"width",required:!0,type:{name:"number | undefined"}},scrolling:{defaultValue:null,description:"Currently component is scrolling or not.",name:"scrolling",required:!0,type:{name:"boolean"}}}}}catch{}export{se as W,xe as a,ye as b,Se as c,Ee as d,y as e,Le as f,We as g,Ce as h,L as i,Me as j,Te as k,Ne as l,b as m,P as r,Ie as u,Re as v};
//# sourceMappingURL=Window-b4d19322.js.map