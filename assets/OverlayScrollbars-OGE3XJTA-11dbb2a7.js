import{r as oe,a as vr}from"./index-5284b0bf.js";function D(e,t){if(xt(e))for(let r=0;r<e.length&&t(e[r],r,e)!==!1;r++);else e&&D(Object.keys(e),r=>t(e[r],r,e));return e}function re(e,t){let r=_e(t);if(ye(t)||r){let l=r?"":{};if(e){let n=window.getComputedStyle(e,null);l=r?mr(e,n,t):t.reduce((o,i)=>(o[i]=mr(e,n,i),o),l)}return l}e&&D(pe(t),l=>kl(e,l,t[l]))}var he=(e,t)=>{let{o:r,u:l,_:n}=e,o=r,i,s=(a,c)=>{let d=o,p=a,f=c||(l?!l(d,p):d!==p);return(f||n)&&(o=p,i=d),[o,f,i]};return[t?a=>s(t(o,i),a):s,a=>[o,!!a,i]]},lt=()=>typeof window<"u",Fr=lt()&&Node.ELEMENT_NODE,{toString:ml,hasOwnProperty:Mt}=Object.prototype,Pe=e=>e===void 0,St=e=>e===null,yl=e=>Pe(e)||St(e)?`${e}`:ml.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),Te=e=>typeof e=="number",_e=e=>typeof e=="string",Qt=e=>typeof e=="boolean",me=e=>typeof e=="function",ye=e=>Array.isArray(e),tt=e=>typeof e=="object"&&!ye(e)&&!St(e),xt=e=>{let t=!!e&&e.length,r=Te(t)&&t>-1&&t%1==0;return ye(e)||!me(e)&&r?t>0&&tt(e)?t-1 in e:!0:!1},Xt=e=>{if(!e||!tt(e)||yl(e)!=="object")return!1;let t,r="constructor",l=e[r],n=l&&l.prototype,o=Mt.call(e,r),i=n&&Mt.call(n,"isPrototypeOf");if(l&&!o&&!i)return!1;for(t in e);return Pe(t)||Mt.call(e,t)},vt=e=>{let t=HTMLElement;return e?t?e instanceof t:e.nodeType===Fr:!1},Ot=e=>{let t=Element;return e?t?e instanceof t:e.nodeType===Fr:!1},er=(e,t,r)=>e.indexOf(t,r),W=(e,t,r)=>(!r&&!_e(t)&&xt(t)?Array.prototype.push.apply(e,t):e.push(t),e),Fe=e=>{let t=Array.from,r=[];return t&&e?t(e):(e instanceof Set?e.forEach(l=>{W(r,l)}):D(e,l=>{W(r,l)}),r)},tr=e=>!!e&&e.length===0,Oe=(e,t,r)=>{D(e,l=>l&&l.apply(void 0,t||[])),!r&&(e.length=0)},Ct=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),pe=e=>e?Object.keys(e):[],K=(e,t,r,l,n,o,i)=>{let s=[t,r,l,n,o,i];return(typeof e!="object"||St(e))&&!me(e)&&(e={}),D(s,a=>{D(pe(a),c=>{let d=a[c];if(e===d)return!0;let p=ye(d);if(d&&(Xt(d)||p)){let f=e[c],u=f;p&&!ye(f)?u=[]:!p&&!Xt(f)&&(u={}),e[c]=K(u,d)}else e[c]=d})}),e},rr=e=>{for(let t in e)return!1;return!0},jr=(e,t,r,l)=>{if(Pe(l))return r?r[e]:t;r&&(_e(l)||Te(l))&&(r[e]=l)},te=(e,t,r)=>{if(Pe(r))return e?e.getAttribute(t):null;e&&e.setAttribute(t,r)},se=(e,t)=>{e&&e.removeAttribute(t)},Ne=(e,t,r,l)=>{if(r){let n=te(e,t)||"",o=new Set(n.split(" "));o[l?"add":"delete"](r);let i=Fe(o).join(" ").trim();te(e,t,i)}},Sl=(e,t,r)=>{let l=te(e,t)||"";return new Set(l.split(" ")).has(r)},we=(e,t)=>jr("scrollLeft",0,e,t),Ae=(e,t)=>jr("scrollTop",0,e,t),Wt=lt()&&Element.prototype,qr=(e,t)=>{let r=[],l=t?Ot(t)?t:null:document;return l?W(r,l.querySelectorAll(e)):r},xl=(e,t)=>{let r=t?Ot(t)?t:null:document;return r?r.querySelector(e):null},ht=(e,t)=>Ot(e)?(Wt.matches||Wt.msMatchesSelector).call(e,t):!1,lr=e=>e?Fe(e.childNodes):[],He=e=>e?e.parentElement:null,Ke=(e,t)=>{if(Ot(e)){let r=Wt.closest;if(r)return r.call(e,t);do{if(ht(e,t))return e;e=He(e)}while(e)}return null},Ol=(e,t,r)=>{let l=e&&Ke(e,t),n=e&&xl(r,l),o=Ke(n,t)===l;return l&&n?l===e||n===e||o&&Ke(Ke(e,r),t)!==l:!1},nr=(e,t,r)=>{if(r&&e){let l=t,n;xt(r)?(n=document.createDocumentFragment(),D(r,o=>{o===l&&(l=o.previousSibling),n.appendChild(o)})):n=r,t&&(l?l!==t&&(l=l.nextSibling):l=e.firstChild),e.insertBefore(n,l||null)}},ve=(e,t)=>{nr(e,null,t)},Cl=(e,t)=>{nr(He(e),e,t)},hr=(e,t)=>{nr(He(e),e&&e.nextSibling,t)},xe=e=>{if(xt(e))D(Fe(e),t=>xe(t));else if(e){let t=He(e);t&&t.removeChild(e)}},Ve=e=>{let t=document.createElement("div");return e&&te(t,"class",e),t},Xr=e=>{let t=Ve();return t.innerHTML=e.trim(),D(lr(t),r=>xe(r))},Ut=e=>e.charAt(0).toUpperCase()+e.slice(1),El=()=>Ve().style,$l=["-webkit-","-moz-","-o-","-ms-"],Al=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Tt={},_t={},Ll=e=>{let t=_t[e];if(Ct(_t,e))return t;let r=Ut(e),l=El();return D($l,n=>{let o=n.replace(/-/g,"");return!(t=[e,n+e,o+r,Ut(o)+r].find(i=>l[i]!==void 0))}),_t[e]=t||""},nt=e=>{if(lt()){let t=Tt[e]||window[e];return Ct(Tt,e)||(D(Al,r=>(t=t||window[r+Ut(e)],!t)),Tt[e]=t),t}},Hl=nt("MutationObserver"),gr=nt("IntersectionObserver"),Ye=nt("ResizeObserver"),Wr=nt("cancelAnimationFrame"),Ur=nt("requestAnimationFrame"),gt=lt()&&window.setTimeout,Jt=lt()&&window.clearTimeout,Pl=/[^\x20\t\r\n\f]+/g,Jr=(e,t,r)=>{let l=e&&e.classList,n,o=0,i=!1;if(l&&t&&_e(t)){let s=t.match(Pl)||[];for(i=s.length>0;n=s[o++];)i=!!r(l,n)&&i}return i},ir=(e,t)=>{Jr(e,t,(r,l)=>r.remove(l))},Le=(e,t)=>(Jr(e,t,(r,l)=>r.add(l)),ir.bind(0,e,t)),Et=(e,t,r,l)=>{if(e&&t){let n=!0;return D(r,o=>{let i=l?l(e[o]):e[o],s=l?l(t[o]):t[o];i!==s&&(n=!1)}),n}return!1},Kr=(e,t)=>Et(e,t,["w","h"]),Yr=(e,t)=>Et(e,t,["x","y"]),Il=(e,t)=>Et(e,t,["t","r","b","l"]),wr=(e,t,r)=>Et(e,t,["width","height"],r&&(l=>Math.round(l))),be=()=>{},Je=e=>{let t,r=e?gt:Ur,l=e?Jt:Wr;return[n=>{l(t),t=r(n,me(e)?e():e)},()=>l(t)]},or=(e,t)=>{let r,l,n,o=be,{v:i,g:s,p:a}=t||{},c=function(u){o(),Jt(r),r=l=void 0,o=be,e.apply(this,u)},d=u=>a&&l?a(l,u):u,p=()=>{o!==be&&c(d(n)||n)},f=function(){let u=Fe(arguments),v=me(i)?i():i;if(Te(v)&&v>=0){let C=me(s)?s():s,H=Te(C)&&C>=0,$=v>0?gt:Ur,g=v>0?Jt:Wr,y=d(u)||u,L=c.bind(0,y);o();let P=$(L,v);o=()=>g(P),H&&!r&&(r=gt(p,C)),l=n=y}else c(u)};return f.m=p,f},zl={opacity:1,zindex:1},ot=(e,t)=>{let r=t?parseFloat(e):parseInt(e,10);return r===r?r:0},Rl=(e,t)=>!zl[e.toLowerCase()]&&Te(t)?`${t}px`:t,mr=(e,t,r)=>t!=null?t[r]||t.getPropertyValue(r):e.style[r],kl=(e,t,r)=>{try{let{style:l}=e;Pe(l[t])?l.setProperty(t,r):l[t]=Rl(t,r)}catch{}},rt=e=>re(e,"direction")==="rtl",yr=(e,t,r)=>{let l=t?`${t}-`:"",n=r?`-${r}`:"",o=`${l}top${n}`,i=`${l}right${n}`,s=`${l}bottom${n}`,a=`${l}left${n}`,c=re(e,[o,i,s,a]);return{t:ot(c[o],!0),r:ot(c[i],!0),b:ot(c[s],!0),l:ot(c[a],!0)}},{round:Sr}=Math,ar={w:0,h:0},je=e=>e?{w:e.offsetWidth,h:e.offsetHeight}:ar,bt=e=>e?{w:e.clientWidth,h:e.clientHeight}:ar,wt=e=>e?{w:e.scrollWidth,h:e.scrollHeight}:ar,mt=e=>{let t=parseFloat(re(e,"height"))||0,r=parseFloat(re(e,"width"))||0;return{w:r-Sr(r),h:t-Sr(t)}},ke=e=>e.getBoundingClientRect(),at,Ml=()=>{if(Pe(at)){at=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){at=!0}}))}catch{}}return at},Zr=e=>e.split(" "),Tl=(e,t,r,l)=>{D(Zr(t),n=>{e.removeEventListener(n,r,l)})},Q=(e,t,r,l)=>{var n;let o=Ml(),i=(n=o&&l&&l.S)!=null?n:o,s=l&&l.$||!1,a=l&&l.C||!1,c=[],d=o?{passive:i,capture:s}:s;return D(Zr(t),p=>{let f=a?u=>{e.removeEventListener(p,f,s),r&&r(u)}:r;W(c,Tl.bind(null,e,p,f,s)),e.addEventListener(p,f,d)}),Oe.bind(0,c)},Gr=e=>e.stopPropagation(),Qr=e=>e.preventDefault(),_l={x:0,y:0},Bt=e=>{let t=e?ke(e):0;return t?{x:t.left+window.pageYOffset,y:t.top+window.pageXOffset}:_l},xr=(e,t)=>{D(ye(t)?t:[t],e)},sr=e=>{let t=new Map,r=(o,i)=>{if(o){let s=t.get(o);xr(a=>{s&&s[a?"delete":"clear"](a)},i)}else t.forEach(s=>{s.clear()}),t.clear()},l=(o,i)=>{if(_e(o)){let c=t.get(o)||new Set;return t.set(o,c),xr(d=>{me(d)&&c.add(d)},i),r.bind(0,o,i)}Qt(i)&&i&&r();let s=pe(o),a=[];return D(s,c=>{let d=o[c];d&&W(a,l(c,d))}),Oe.bind(0,a)},n=(o,i)=>{let s=t.get(o);D(Fe(s),a=>{i&&!tr(i)?a.apply(0,i):a()})};return l(e||{}),[l,r,n]},Or=e=>JSON.stringify(e,(t,r)=>{if(me(r))throw new Error;return r}),Bl={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},el=(e,t)=>{let r={},l=pe(t).concat(pe(e));return D(l,n=>{let o=e[n],i=t[n];if(tt(o)&&tt(i))K(r[n]={},el(o,i)),rr(r[n])&&delete r[n];else if(Ct(t,n)&&i!==o){let s=!0;if(ye(o)||ye(i))try{Or(o)===Or(i)&&(s=!1)}catch{}s&&(r[n]=i)}}),r},tl="os-environment",rl=`${tl}-flexbox-glue`,Dl=`${rl}-max`,ll="os-scrollbar-hidden",Dt="data-overlayscrollbars-initialize",ge="data-overlayscrollbars",nl=`${ge}-overflow-x`,il=`${ge}-overflow-y`,Ze="overflowVisible",Nl="scrollbarHidden",Cr="scrollbarPressed",yt="updating",ze="data-overlayscrollbars-viewport",Nt="arrange",ol="scrollbarHidden",Ge=Ze,Kt="data-overlayscrollbars-padding",Vl=Ge,Er="data-overlayscrollbars-content",cr="os-size-observer",Fl=`${cr}-appear`,jl=`${cr}-listener`,ql="os-trinsic-observer",Xl="os-no-css-vars",Wl="os-theme-none",ce="os-scrollbar",Ul=`${ce}-rtl`,Jl=`${ce}-horizontal`,Kl=`${ce}-vertical`,al=`${ce}-track`,dr=`${ce}-handle`,Yl=`${ce}-visible`,Zl=`${ce}-cornerless`,$r=`${ce}-transitionless`,Ar=`${ce}-interaction`,Lr=`${ce}-unusable`,Hr=`${ce}-auto-hidden`,Pr=`${ce}-wheel`,Gl=`${al}-interactive`,Ql=`${dr}-interactive`,sl={},qe=()=>sl,en=e=>{let t=[];return D(ye(e)?e:[e],r=>{let l=pe(r);D(l,n=>{W(t,sl[n]=r[n])})}),t},tn="__osOptionsValidationPlugin",rn="__osSizeObserverPlugin",ur="__osScrollbarsHidingPlugin",ln="__osClickScrollPlugin",Vt,Ir=(e,t,r,l)=>{ve(e,t);let n=bt(t),o=je(t),i=mt(r);return l&&xe(t),{x:o.h-n.h+i.h,y:o.w-n.w+i.w}},nn=e=>{let t=!1,r=Le(e,ll);try{t=re(e,Ll("scrollbar-width"))==="none"||window.getComputedStyle(e,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return r(),t},on=(e,t)=>{let r="hidden";re(e,{overflowX:r,overflowY:r,direction:"rtl"}),we(e,0);let l=Bt(e),n=Bt(t);we(e,-999);let o=Bt(t);return{i:l.x===n.x,n:n.x!==o.x}},an=(e,t)=>{let r=Le(e,rl),l=ke(e),n=ke(t),o=wr(n,l,!0),i=Le(e,Dl),s=ke(e),a=ke(t),c=wr(a,s,!0);return r(),i(),o&&c},sn=()=>{let{body:e}=document,t=Xr(`<div class="${tl}"><div></div></div>`)[0],r=t.firstChild,[l,,n]=sr(),[o,i]=he({o:Ir(e,t,r),u:Yr},Ir.bind(0,e,t,r,!0)),[s]=i(),a=nn(t),c={x:s.x===0,y:s.y===0},d={elements:{host:null,padding:!a,viewport:$=>a&&$===$.ownerDocument.body&&$,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=K({},Bl),f=K.bind(0,{},p),u=K.bind(0,{},d),v={k:s,A:c,I:a,L:re(t,"zIndex")==="-1",B:on(t,r),V:an(t,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:u,q:$=>K(d,$)&&u(),F:f,G:$=>K(p,$)&&f(),X:K({},d),U:K({},p)},C=window.addEventListener,H=or($=>n($?"z":"r"),{v:33,g:99});if(se(t,"style"),xe(t),C("resize",H.bind(0,!1)),!a&&(!c.x||!c.y)){let $;C("resize",()=>{let g=qe()[ur];$=$||g&&g.R(),$&&$(v,o,H.bind(0,!0))})}return v},de=()=>(Vt||(Vt=sn()),Vt),pr=(e,t)=>me(t)?t.apply(0,e):t,cn=(e,t,r,l)=>{let n=Pe(l)?r:l;return pr(e,n)||t.apply(0,e)},cl=(e,t,r,l)=>{let n=Pe(l)?r:l,o=pr(e,n);return!!o&&(vt(o)?o:t.apply(0,e))},dn=(e,t,r)=>{let{nativeScrollbarsOverlaid:l,body:n}=r||{},{A:o,I:i}=de(),{nativeScrollbarsOverlaid:s,body:a}=t,c=l??s,d=Pe(n)?a:n,p=(o.x||o.y)&&c,f=e&&(St(d)?!i:d);return!!p||!!f},fr=new WeakMap,un=(e,t)=>{fr.set(e,t)},pn=e=>{fr.delete(e)},dl=e=>fr.get(e),zr=(e,t)=>e?t.split(".").reduce((r,l)=>r&&Ct(r,l)?r[l]:void 0,e):void 0,Yt=(e,t,r)=>l=>[zr(e,l),r||zr(t,l)!==void 0],ul=e=>{let t=e;return[()=>t,r=>{t=K({},t,r)}]},st="tabindex",ct=Ve.bind(0,""),Ft=e=>{ve(He(e),lr(e)),xe(e)},fn=e=>{let t=de(),{N:r,I:l}=t,n=qe()[ur],o=n&&n.T,{elements:i}=r(),{host:s,padding:a,viewport:c,content:d}=i,p=vt(e),f=p?{}:e,{elements:u}=f,{host:v,padding:C,viewport:H,content:$}=u||{},g=p?e:f.target,y=ht(g,"textarea"),L=g.ownerDocument,P=L.documentElement,_=g===L.body,R=L.defaultView,I=cn.bind(0,[g]),F=cl.bind(0,[g]),Z=pr.bind(0,[g]),j=I.bind(0,ct,c),z=F.bind(0,ct,d),m=j(H),b=m===g,x=b&&_,h=!b&&z($),w=!b&&vt(m)&&m===h,E=w&&!!Z(d),S=E?j():m,O=E?h:z(),A=x?P:w?S:m,N=y?I(ct,s,v):g,k=x?A:N,T=w?O:h,q=L.activeElement,X=!b&&R.top===R&&q===g,M={W:g,Z:k,J:A,K:!b&&F(ct,a,C),tt:T,nt:!b&&!l&&o&&o(t),ot:x?P:A,st:x?L:A,et:R,ct:L,rt:y,it:_,lt:p,ut:b,dt:w,ft:(ee,ue)=>Sl(A,b?ge:ze,b?ue:ee),_t:(ee,ue,ie)=>Ne(A,b?ge:ze,b?ue:ee,ie)},V=pe(M).reduce((ee,ue)=>{let ie=M[ue];return W(ee,ie&&!He(ie)?ie:!1)},[]),U=ee=>ee?er(V,ee)>-1:null,{W:J,Z:Y,K:le,J:B,tt:G,nt:ne}=M,ae=[()=>{se(Y,ge),se(Y,Dt),se(J,Dt),_&&(se(P,ge),se(P,Dt))}],Be=y&&U(Y),Ie=y?J:lr([G,B,le,Y,J].find(ee=>U(ee)===!1)),Xe=x?J:G||B;return[M,()=>{te(Y,ge,b?"viewport":"host"),te(le,Kt,""),te(G,Er,""),b||te(B,ze,"");let ee=_&&!b?Le(He(g),ll):be;if(Be&&(hr(J,Y),W(ae,()=>{hr(Y,J),xe(Y)})),ve(Xe,Ie),ve(Y,le),ve(le||Y,!b&&B),ve(B,G),W(ae,()=>{ee(),se(le,Kt),se(G,Er),se(B,nl),se(B,il),se(B,ze),U(G)&&Ft(G),U(B)&&Ft(B),U(le)&&Ft(le)}),l&&!b&&(Ne(B,ze,ol,!0),W(ae,se.bind(0,B,ze))),ne&&(Cl(B,ne),W(ae,xe.bind(0,ne))),X){let ue=te(B,st);te(B,st,"-1"),B.focus();let ie=()=>ue?te(B,st,ue):se(B,st),De=Q(L,"pointerdown keydown",()=>{ie(),De()});W(ae,[ie,De])}else q&&q.focus&&q.focus();Ie=0},Oe.bind(0,ae)]},bn=(e,t)=>{let{tt:r}=e,[l]=t;return n=>{let{V:o}=de(),{ht:i}=l(),{vt:s}=n,a=(r||!o)&&s;return a&&re(r,{height:i?"":"100%"}),{gt:a,wt:a}}},vn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,ut:s}=e,[a,c]=he({u:Il,o:yr()},yr.bind(0,n,"padding",""));return(d,p,f)=>{let[u,v]=c(f),{I:C,V:H}=de(),{bt:$}=r(),{gt:g,wt:y,yt:L}=d,[P,_]=p("paddingAbsolute");(g||v||!H&&y)&&([u,v]=a(f));let R=!s&&(_||L||v);if(R){let I=!P||!o&&!C,F=u.r+u.l,Z=u.t+u.b,j={marginRight:I&&!$?-F:0,marginBottom:I?-Z:0,marginLeft:I&&$?-F:0,top:I?-u.t:0,right:I?$?-u.r:"auto":0,left:I?$?"auto":-u.l:0,width:I?`calc(100% + ${F}px)`:""},z={paddingTop:I?u.t:0,paddingRight:I?u.r:0,paddingBottom:I?u.b:0,paddingLeft:I?u.l:0};re(o||i,j),re(i,z),l({K:u,St:!I,P:o?z:K({},j,z)})}return{xt:R}}},{max:Zt}=Math,Re=Zt.bind(0,0),pl="visible",Rr="hidden",hn=42,dt={u:Kr,o:{w:0,h:0}},gn={u:Yr,o:{x:Rr,y:Rr}},wn=(e,t)=>{let r=window.devicePixelRatio%1!==0?1:0,l={w:Re(e.w-t.w),h:Re(e.h-t.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},ut=e=>e.indexOf(pl)===0,mn=(e,t)=>{let[r,l]=t,{Z:n,K:o,J:i,nt:s,ut:a,_t:c,it:d,et:p}=e,{k:f,V:u,I:v,A:C}=de(),H=qe()[ur],$=!a&&!v&&(C.x||C.y),g=d&&a,[y,L]=he(dt,mt.bind(0,i)),[P,_]=he(dt,wt.bind(0,i)),[R,I]=he(dt),[F,Z]=he(dt),[j]=he(gn),z=(E,S)=>{if(re(i,{height:""}),S){let{St:O,K:A}=r(),{$t:N,D:k}=E,T=mt(n),q=bt(n),X=re(i,"boxSizing")==="content-box",M=O||X?A.b+A.t:0,V=!(C.x&&X);re(i,{height:q.h+T.h+(N.x&&V?k.x:0)-M})}},m=(E,S)=>{let O=!v&&!E?hn:0,A=(J,Y,le)=>{let B=re(i,J),G=(S?S[J]:B)==="scroll";return[B,G,G&&!v?Y?O:le:0,Y&&!!O]},[N,k,T,q]=A("overflowX",C.x,f.x),[X,M,V,U]=A("overflowY",C.y,f.y);return{Ct:{x:N,y:X},$t:{x:k,y:M},D:{x:T,y:V},M:{x:q,y:U}}},b=(E,S,O,A)=>{let N=(M,V)=>{let U=ut(M),J=V&&U&&M.replace(`${pl}-`,"")||"";return[V&&!U?M:"",ut(J)?"hidden":J]},[k,T]=N(O.x,S.x),[q,X]=N(O.y,S.y);return A.overflowX=T&&q?T:k,A.overflowY=X&&k?X:q,m(E,A)},x=(E,S,O,A)=>{let{D:N,M:k}=E,{x:T,y:q}=k,{x:X,y:M}=N,{P:V}=r(),U=S?"marginLeft":"marginRight",J=S?"paddingLeft":"paddingRight",Y=V[U],le=V.marginBottom,B=V[J],G=V.paddingBottom;A.width=`calc(100% + ${M+-1*Y}px)`,A[U]=-M+Y,A.marginBottom=-X+le,O&&(A[J]=B+(q?M:0),A.paddingBottom=G+(T?X:0))},[h,w]=H?H.H($,u,i,s,r,m,x):[()=>$,()=>[be]];return(E,S,O)=>{let{gt:A,Ot:N,wt:k,xt:T,vt:q,yt:X}=E,{ht:M,bt:V}=r(),[U,J]=S("showNativeOverlaidScrollbars"),[Y,le]=S("overflow"),B=U&&C.x&&C.y,G=!a&&!u&&(A||k||N||J||q),ne=ut(Y.x),ae=ut(Y.y),Be=ne||ae,Ie=L(O),Xe=_(O),ee=I(O),ue=Z(O),ie;if(J&&v&&c(ol,Nl,!B),G&&(ie=m(B),z(ie,M)),A||T||k||X||J){Be&&c(Ge,Ze,!1);let[Ce,Ee]=w(B,V,ie),[fe,et]=Ie=y(O),[$e,gl]=Xe=P(O),zt=bt(i),Rt=$e,kt=zt;Ce(),(gl||et||J)&&Ee&&!B&&h(Ee,$e,fe,V)&&(kt=bt(i),Rt=wt(i));let wl={w:Re(Zt($e.w,Rt.w)+fe.w),h:Re(Zt($e.h,Rt.h)+fe.h)},br={w:Re((g?p.innerWidth:kt.w+Re(zt.w-$e.w))+fe.w),h:Re((g?p.innerHeight+fe.h:kt.h+Re(zt.h-$e.h))+fe.h)};ue=F(br),ee=R(wn(wl,br),O)}let[De,Qe]=ue,[We,Ue]=ee,[$t,At]=Xe,[Lt,Ht]=Ie,Se={x:We.w>0,y:We.h>0},it=ne&&ae&&(Se.x||Se.y)||ne&&Se.x&&!Se.y||ae&&Se.y&&!Se.x;if(T||X||Ht||At||Qe||Ue||le||J||G){let Ce={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Ee=b(B,Se,Y,Ce),fe=h(Ee,$t,Lt,V);a||x(Ee,V,fe,Ce),G&&z(Ee,M),a?(te(n,nl,Ce.overflowX),te(n,il,Ce.overflowY)):re(i,Ce)}Ne(n,ge,Ze,it),Ne(o,Kt,Vl,it),a||Ne(i,ze,Ge,Be);let[Pt,It]=j(m(B).Ct);return l({Ct:Pt,zt:{x:De.w,y:De.h},Tt:{x:We.w,y:We.h},Et:Se}),{It,At:Qe,Lt:Ue}}},kr=(e,t,r)=>{let l={},n=t||{},o=pe(e).concat(pe(n));return D(o,i=>{let s=e[i],a=n[i];l[i]=!!(r||s||a)}),l},yn=(e,t)=>{let{W:r,J:l,_t:n,ut:o}=e,{I:i,A:s,V:a}=de(),c=!i&&(s.x||s.y),d=[bn(e,t),vn(e,t),mn(e,t)];return(p,f,u)=>{let v=kr(K({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},f),{},u),C=c||!a,H=C&&we(l),$=C&&Ae(l);n("",yt,!0);let g=v;return D(d,y=>{g=kr(g,y(g,p,!!u)||{},u)}),we(l,H),Ae(l,$),n("",yt),o||(we(r,0),Ae(r,0)),g}},Sn=(e,t,r)=>{let l,n=!1,o=()=>{n=!0},i=s=>{if(r){let a=r.reduce((c,d)=>{if(d){let[p,f]=d,u=f&&p&&(s?s(p):qr(p,e));u&&u.length&&f&&_e(f)&&W(c,[u,f.trim()],!0)}return c},[]);D(a,c=>D(c[0],d=>{let p=c[1],f=l.get(d)||[];if(e.contains(d)){let u=Q(d,p,v=>{n?(u(),l.delete(d)):t(v)});l.set(d,W(f,u))}else Oe(f),l.delete(d)}))}};return r&&(l=new WeakMap,i()),[o,i]},Mr=(e,t,r,l)=>{let n=!1,{Ht:o,Pt:i,Dt:s,Mt:a,Rt:c,kt:d}=l||{},p=or(()=>{n&&r(!0)},{v:33,g:99}),[f,u]=Sn(e,p,s),v=o||[],C=i||[],H=v.concat(C),$=(y,L)=>{let P=c||be,_=d||be,R=new Set,I=new Set,F=!1,Z=!1;if(D(y,j=>{let{attributeName:z,target:m,type:b,oldValue:x,addedNodes:h,removedNodes:w}=j,E=b==="attributes",S=b==="childList",O=e===m,A=E&&_e(z)?te(m,z):0,N=A!==0&&x!==A,k=er(C,z)>-1&&N;if(t&&(S||!O)){let T=!E,q=E&&N,X=q&&a&&ht(m,a),M=(X?!P(m,z,x,A):T||q)&&!_(j,!!X,e,l);D(h,V=>R.add(V)),D(w,V=>R.add(V)),Z=Z||M}!t&&O&&N&&!P(m,z,x,A)&&(I.add(z),F=F||k)}),R.size>0&&u(j=>Fe(R).reduce((z,m)=>(W(z,qr(j,m)),ht(m,j)?W(z,m):z),[])),t)return!L&&Z&&r(!1),[!1];if(I.size>0||F){let j=[Fe(I),F];return!L&&r.apply(0,j),j}},g=new Hl(y=>$(y));return g.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:H,subtree:t,childList:t,characterData:t}),n=!0,[()=>{n&&(f(),g.disconnect(),n=!1)},()=>{if(n){p.m();let y=g.takeRecords();return!tr(y)&&$(y,!0)}}]},pt=3333333,ft=e=>e&&(e.height||e.width),fl=(e,t,r)=>{let{Bt:l=!1,Vt:n=!1}=r||{},o=qe()[rn],{B:i}=de(),s=Xr(`<div class="${cr}"><div class="${jl}"></div></div>`)[0],a=s.firstChild,c=rt.bind(0,e),[d]=he({o:void 0,_:!0,u:(v,C)=>!(!v||!ft(v)&&ft(C))}),p=v=>{let C=ye(v)&&v.length>0&&tt(v[0]),H=!C&&Qt(v[0]),$=!1,g=!1,y=!0;if(C){let[L,,P]=d(v.pop().contentRect),_=ft(L),R=ft(P);$=!P||!_,g=!R&&_,y=!$}else H?[,y]=v:g=v===!0;if(l&&y){let L=H?v[0]:rt(s);we(s,L?i.n?-pt:i.i?0:pt:pt),Ae(s,pt)}$||t({gt:!H,Yt:H?v:void 0,Vt:!!g})},f=[],u=n?p:!1;return[()=>{Oe(f),xe(s)},()=>{if(Ye){let v=new Ye(p);v.observe(a),W(f,()=>{v.disconnect()})}else if(o){let[v,C]=o.O(a,p,n);u=v,W(f,C)}if(l){let[v]=he({o:void 0},c);W(f,Q(s,"scroll",C=>{let H=v(),[$,g,y]=H;g&&(ir(a,"ltr rtl"),$?Le(a,"rtl"):Le(a,"ltr"),p([!!$,g,y])),Gr(C)}))}u&&(Le(s,Fl),W(f,Q(s,"animationstart",u,{C:!!Ye}))),(Ye||o)&&ve(e,s)}]},xn=e=>e.h===0||e.isIntersecting||e.intersectionRatio>0,On=(e,t)=>{let r,l=Ve(ql),n=[],[o]=he({o:!1}),i=(a,c)=>{if(a){let d=o(xn(a)),[,p]=d;if(p)return!c&&t(d),[d]}},s=(a,c)=>{if(a&&a.length>0)return i(a.pop(),c)};return[()=>{Oe(n),xe(l)},()=>{if(gr)r=new gr(a=>s(a),{root:e}),r.observe(l),W(n,()=>{r.disconnect()});else{let a=()=>{let p=je(l);i(p)},[c,d]=fl(l,a);W(n,c),d(),a()}ve(e,l)},()=>{if(r)return s(r.takeRecords(),!0)}]},Tr=`[${ge}]`,Cn=`[${ze}]`,jt=["tabindex"],_r=["wrap","cols","rows"],qt=["id","class","style","open"],En=(e,t,r)=>{let l,n,o,{Z:i,J:s,tt:a,rt:c,ut:d,ft:p,_t:f}=e,{V:u}=de(),[v]=he({u:Kr,o:{w:0,h:0}},()=>{let b=p(Ge,Ze),x=p(Nt,""),h=x&&we(s),w=x&&Ae(s);f(Ge,Ze),f(Nt,""),f("",yt,!0);let E=wt(a),S=wt(s),O=mt(s);return f(Ge,Ze,b),f(Nt,"",x),f("",yt),we(s,h),Ae(s,w),{w:S.w+E.w+O.w,h:S.h+E.h+O.h}}),C=c?_r:qt.concat(_r),H=or(r,{v:()=>l,g:()=>n,p(b,x){let[h]=b,[w]=x;return[pe(h).concat(pe(w)).reduce((E,S)=>(E[S]=h[S]||w[S],E),{})]}}),$=b=>{D(b||jt,x=>{if(er(jt,x)>-1){let h=te(i,x);_e(h)?te(s,x,h):se(s,x)}})},g=(b,x)=>{let[h,w]=b,E={vt:w};return t({ht:h}),!x&&r(E),E},y=({gt:b,Yt:x,Vt:h})=>{let w=!b||h?r:H,E=!1;if(x){let[S,O]=x;E=O,t({bt:S})}w({gt:b,yt:E})},L=(b,x)=>{let[,h]=v(),w={wt:h};return h&&!x&&(b?r:H)(w),w},P=(b,x,h)=>{let w={Ot:x};return x?!h&&H(w):d||$(b),w},[_,R,I]=a||!u?On(i,g):[be,be,be],[F,Z]=d?[be,be]:fl(i,y,{Vt:!0,Bt:!0}),[j,z]=Mr(i,!1,P,{Pt:qt,Ht:qt.concat(jt)}),m=d&&Ye&&new Ye(y.bind(0,{gt:!0}));return m&&m.observe(i),$(),[()=>{_(),F(),o&&o[0](),m&&m.disconnect(),j()},()=>{Z(),R()},()=>{let b={},x=z(),h=I(),w=o&&o[1]();return x&&K(b,P.apply(0,W(x,!0))),h&&K(b,g.apply(0,W(h,!0))),w&&K(b,L.apply(0,W(w,!0))),b},b=>{let[x]=b("update.ignoreMutation"),[h,w]=b("update.attributes"),[E,S]=b("update.elementEvents"),[O,A]=b("update.debounce"),N=S||w,k=T=>me(x)&&x(T);if(N&&(o&&(o[1](),o[0]()),o=Mr(a||s,!0,L,{Ht:C.concat(h||[]),Dt:E,Mt:Tr,kt:(T,q)=>{let{target:X,attributeName:M}=T;return(!q&&M&&!d?Ol(X,Tr,Cn):!1)||!!Ke(X,`.${ce}`)||!!k(T)}})),A)if(H.m(),ye(O)){let T=O[0],q=O[1];l=Te(T)&&T,n=Te(q)&&q}else Te(O)?(l=O,n=!1):(l=!1,n=!1)}]},Br={x:0,y:0},$n=e=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:Br,Tt:Br,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:rt(e.Z)}),An=(e,t)=>{let r=Yt(t,{}),[l,n,o]=sr(),[i,s,a]=fn(e),c=ul($n(i)),[d,p]=c,f=yn(i,c),u=(y,L,P)=>{let _=pe(y).some(R=>y[R])||!rr(L)||P;return _&&o("u",[y,L,P]),_},[v,C,H,$]=En(i,p,y=>u(f(r,y),{},!1)),g=d.bind(0);return g.jt=y=>l("u",y),g.Nt=()=>{let{W:y,J:L}=i,P=we(y),_=Ae(y);C(),s(),we(L,P),Ae(L,_)},g.qt=i,[(y,L)=>{let P=Yt(t,y,L);return $(P),u(f(P,H(),L),y,!!L)},g,()=>{n(),v(),a()}]},{round:Dr}=Math,Ln=e=>{let{width:t,height:r}=ke(e),{w:l,h:n}=je(e);return{x:Dr(t)/l||1,y:Dr(r)/n||1}},Hn=(e,t,r)=>{let l=t.scrollbars,{button:n,isPrimary:o,pointerType:i}=e,{pointers:s}=l;return n===0&&o&&l[r?"dragScroll":"clickScroll"]&&(s||[]).includes(i)},Pn=(e,t)=>Q(e,"mousedown",Q.bind(0,t,"click",Gr,{C:!0,$:!0}),{$:!0}),Nr="pointerup pointerleave pointercancel lostpointercapture",In=(e,t,r,l,n,o,i)=>{let{B:s}=de(),{Ft:a,Gt:c,Xt:d}=l,p=`scroll${i?"Left":"Top"}`,f=`client${i?"X":"Y"}`,u=i?"width":"height",v=i?"left":"top",C=i?"w":"h",H=i?"x":"y",$=(g,y)=>L=>{let{Tt:P}=o(),_=je(c)[C]-je(a)[C],R=y*L/_*P[H],I=rt(d)&&i?s.n||s.i?1:-1:1;n[p]=g+R*I};return Q(c,"pointerdown",g=>{let y=Ke(g.target,`.${dr}`)===a,L=y?a:c;if(Ne(t,ge,Cr,!0),Hn(g,e,y)){let P=!y&&g.shiftKey,_=()=>ke(a),R=()=>ke(c),I=(S,O)=>(S||_())[v]-(O||R())[v],F=$(n[p]||0,1/Ln(n)[H]),Z=g[f],j=_(),z=R(),m=j[u],b=I(j,z)+m/2,x=Z-z[v],h=y?0:x-b,w=S=>{Oe(E),L.releasePointerCapture(S.pointerId)},E=[Ne.bind(0,t,ge,Cr),Q(r,Nr,w),Q(r,"selectstart",S=>Qr(S),{S:!1}),Q(c,Nr,w),Q(c,"pointermove",S=>{let O=S[f]-Z;(y||P)&&F(h+O)})];if(P)F(h);else if(!y){let S=qe()[ln];S&&W(E,S.O(F,I,h,m,x))}L.setPointerCapture(g.pointerId)}})},zn=(e,t)=>(r,l,n,o,i,s)=>{let{Xt:a}=r,[c,d]=Je(333),p=!!i.scrollBy,f=!0;return Oe.bind(0,[Q(a,"pointerenter",()=>{l(Ar,!0)}),Q(a,"pointerleave pointercancel",()=>{l(Ar)}),Q(a,"wheel",u=>{let{deltaX:v,deltaY:C,deltaMode:H}=u;p&&f&&H===0&&He(a)===o&&i.scrollBy({left:v,top:C,behavior:"smooth"}),f=!1,l(Pr,!0),c(()=>{f=!0,l(Pr)}),Qr(u)},{S:!1,$:!0}),Pn(a,n),In(e,o,n,r,i,t,s),d])},{min:Gt,max:Vr,abs:Rn,round:kn}=Math,bl=(e,t,r,l)=>{if(l){let s=r?"x":"y",{Tt:a,zt:c}=l,d=c[s],p=a[s];return Vr(0,Gt(1,d/(d+p)))}let n=r?"w":"h",o=je(e)[n],i=je(t)[n];return Vr(0,Gt(1,o/i))},Mn=(e,t,r,l,n,o)=>{let{B:i}=de(),s=o?"x":"y",a=o?"Left":"Top",{Tt:c}=l,d=kn(c[s]),p=Rn(r[`scroll${a}`]),f=o&&n,u=i.i?p:d-p,v=Gt(1,(f?u:p)/d),C=bl(e,t,o);return 1/C*(1-C)*v},Tn=(e,t,r)=>{let{N:l,L:n}=de(),{scrollbars:o}=l(),{slot:i}=o,{ct:s,W:a,Z:c,J:d,lt:p,ot:f,it:u,ut:v}=t,{scrollbars:C}=p?{}:e,{slot:H}=C||{},$=cl([a,c,d],()=>v&&u?a:c,i,H),g=(h,w,E)=>{let S=E?Le:ir;D(h,O=>{S(O.Xt,w)})},y=(h,w)=>{D(h,E=>{let[S,O]=w(E);re(S,O)})},L=(h,w,E)=>{y(h,S=>{let{Ft:O,Gt:A}=S;return[O,{[E?"width":"height"]:`${(100*bl(O,A,E,w)).toFixed(3)}%`}]})},P=(h,w,E)=>{let S=E?"X":"Y";y(h,O=>{let{Ft:A,Gt:N,Xt:k}=O,T=Mn(A,N,f,w,rt(k),E);return[A,{transform:T===T?`translate${S}(${(100*T).toFixed(3)}%)`:""}]})},_=[],R=[],I=[],F=(h,w,E)=>{let S=Qt(E),O=S?E:!0,A=S?!E:!0;O&&g(R,h,w),A&&g(I,h,w)},Z=h=>{L(R,h,!0),L(I,h)},j=h=>{P(R,h,!0),P(I,h)},z=h=>{let w=h?Jl:Kl,E=h?R:I,S=tr(E)?$r:"",O=Ve(`${ce} ${w} ${S}`),A=Ve(al),N=Ve(dr),k={Xt:O,Gt:A,Ft:N};return n||Le(O,Xl),ve(O,A),ve(A,N),W(E,k),W(_,[xe.bind(0,O),r(k,F,s,c,f,h)]),k},m=z.bind(0,!0),b=z.bind(0,!1),x=()=>{ve($,R[0].Xt),ve($,I[0].Xt),gt(()=>{F($r)},300)};return m(),b(),[{Ut:Z,Wt:j,Zt:F,Jt:{Kt:R,Qt:m,tn:y.bind(0,R)},nn:{Kt:I,Qt:b,tn:y.bind(0,I)}},x,Oe.bind(0,_)]},_n=(e,t,r,l)=>{let n,o,i,s,a,c=0,d=ul({}),[p]=d,[f,u]=Je(),[v,C]=Je(),[H,$]=Je(100),[g,y]=Je(100),[L,P]=Je(()=>c),[_,R,I]=Tn(e,r.qt,zn(t,r)),{Z:F,J:Z,ot:j,st:z,ut:m,it:b}=r.qt,{Jt:x,nn:h,Zt:w,Ut:E,Wt:S}=_,{tn:O}=x,{tn:A}=h,N=M=>{let{Xt:V}=M,U=m&&!b&&He(V)===Z&&V;return[U,{transform:U?`translate(${we(j)}px, ${Ae(j)}px)`:""}]},k=(M,V)=>{if(P(),M)w(Hr);else{let U=()=>w(Hr,!0);c>0&&!V?L(U):U()}},T=()=>{s=o,s&&k(!0)},q=[$,P,y,C,u,I,Q(F,"pointerover",T,{C:!0}),Q(F,"pointerenter",T),Q(F,"pointerleave",()=>{s=!1,o&&k(!1)}),Q(F,"pointermove",()=>{n&&f(()=>{$(),k(!0),g(()=>{n&&k(!1)})})}),Q(z,"scroll",M=>{v(()=>{S(r()),i&&k(!0),H(()=>{i&&!s&&k(!1)})}),l(M),m&&O(N),m&&A(N)})],X=p.bind(0);return X.qt=_,X.Nt=R,[(M,V,U)=>{let{At:J,Lt:Y,It:le,yt:B}=U,{A:G}=de(),ne=Yt(t,M,V),ae=r(),{Tt:Be,Ct:Ie,bt:Xe}=ae,[ee,ue]=ne("showNativeOverlaidScrollbars"),[ie,De]=ne("scrollbars.theme"),[Qe,We]=ne("scrollbars.visibility"),[Ue,$t]=ne("scrollbars.autoHide"),[At]=ne("scrollbars.autoHideDelay"),[Lt,Ht]=ne("scrollbars.dragScroll"),[Se,it]=ne("scrollbars.clickScroll"),Pt=J||Y||B,It=le||We,Ce=ee&&G.x&&G.y,Ee=(fe,et)=>{let $e=Qe==="visible"||Qe==="auto"&&fe==="scroll";return w(Yl,$e,et),$e};if(c=At,ue&&w(Wl,Ce),De&&(w(a),w(ie,!0),a=ie),$t&&(n=Ue==="move",o=Ue==="leave",i=Ue!=="never",k(!i,!0)),Ht&&w(Ql,Lt),it&&w(Gl,Se),It){let fe=Ee(Ie.x,!0),et=Ee(Ie.y,!1);w(Zl,!(fe&&et))}Pt&&(E(ae),S(ae),w(Lr,!Be.x,!0),w(Lr,!Be.y,!1),w(Ul,Xe&&!b))},X,Oe.bind(0,q)]},vl=(e,t,r)=>{me(e)&&e(t||void 0,r||void 0)},Me=(e,t,r)=>{let{F:l,N:n,Y:o,j:i}=de(),s=qe(),a=vt(e),c=a?e:e.target,d=dl(c);if(t&&!d){let p=!1,f=m=>{let b=qe()[tn],x=b&&b.O;return x?x(m,!0):m},u=K({},l(),f(t)),[v,C,H]=sr(r),[$,g,y]=An(e,u),[L,P,_]=_n(e,u,g,m=>H("scroll",[z,m])),R=(m,b)=>$(m,!!b),I=R.bind(0,{},!0),F=o(I),Z=i(I),j=m=>{pn(c),F(),Z(),_(),y(),p=!0,H("destroyed",[z,!!m]),C()},z={options(m,b){if(m){let x=b?l():{},h=el(u,K(x,f(m)));rr(h)||(K(u,h),R(h))}return K({},u)},on:v,off:(m,b)=>{m&&b&&C(m,b)},state(){let{zt:m,Tt:b,Ct:x,Et:h,K:w,St:E,bt:S}=g();return K({},{overflowEdge:m,overflowAmount:b,overflowStyle:x,hasOverflow:h,padding:w,paddingAbsolute:E,directionRTL:S,destroyed:p})},elements(){let{W:m,Z:b,K:x,J:h,tt:w,ot:E,st:S}=g.qt,{Jt:O,nn:A}=P.qt,N=T=>{let{Ft:q,Gt:X,Xt:M}=T;return{scrollbar:M,track:X,handle:q}},k=T=>{let{Kt:q,Qt:X}=T,M=N(q[0]);return K({},M,{clone:()=>{let V=N(X());return L({},!0,{}),V}})};return K({},{target:m,host:b,padding:x||h,viewport:h,content:w||h,scrollOffsetElement:E,scrollEventElement:S,scrollbarHorizontal:k(O),scrollbarVertical:k(A)})},update:m=>R({},m),destroy:j.bind(0)};return g.jt((m,b,x)=>{L(b,x,m)}),un(c,z),D(pe(s),m=>vl(s[m],0,z)),dn(g.qt.it,n().cancel,!a&&e.cancel)?(j(!0),z):(g.Nt(),P.Nt(),H("initialized",[z]),g.jt((m,b,x)=>{let{gt:h,yt:w,vt:E,At:S,Lt:O,It:A,wt:N,Ot:k}=m;H("updated",[z,{updateHints:{sizeChanged:h,directionChanged:w,heightIntrinsicChanged:E,overflowEdgeChanged:S,overflowAmountChanged:O,overflowStyleChanged:A,contentMutation:N,hostMutation:k},changedOptions:b,force:x}])}),z.update(!0),z)}return d};Me.plugin=e=>{D(en(e),t=>vl(t,Me))};Me.valid=e=>{let t=e&&e.elements,r=me(t)&&t();return Xt(r)&&!!dl(r.target)};Me.env=()=>{let{k:e,A:t,I:r,B:l,V:n,L:o,X:i,U:s,N:a,q:c,F:d,G:p}=de();return K({},{scrollbarsSize:e,scrollbarsOverlaid:t,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:n,cssCustomProperties:o,staticDefaultInitialization:i,staticDefaultOptions:s,getDefaultInitialization:a,setDefaultInitialization:c,getDefaultOptions:d,setDefaultOptions:p})};var Bn=()=>{if(typeof window>"u"){let c=()=>{};return[c,c]}let e,t,r=window,l=typeof r.requestIdleCallback=="function",n=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=l?r.requestIdleCallback:n,s=l?r.cancelIdleCallback:o,a=()=>{s(e),o(t)};return[(c,d)=>{a(),e=i(l?()=>{a(),t=n(c)}:c,typeof d=="object"?d:{timeout:2233})},a]},Dn=e=>{let{options:t,events:r,defer:l}=e||{},[n,o]=oe.useMemo(Bn,[]),i=oe.useRef(null),s=oe.useRef(l),a=oe.useRef(t),c=oe.useRef(r);return oe.useEffect(()=>{s.current=l},[l]),oe.useEffect(()=>{let{current:d}=i;a.current=t,Me.valid(d)&&d.options(t||{},!0)},[t]),oe.useEffect(()=>{let{current:d}=i;c.current=r,Me.valid(d)&&d.on(r||{},!0)},[r]),oe.useEffect(()=>()=>{var d;o(),(d=i.current)==null||d.destroy()},[]),oe.useMemo(()=>[d=>{let p=i.current;if(Me.valid(p))return;let f=s.current,u=a.current||{},v=c.current||{},C=()=>i.current=Me(d,u,v);f?n(C,f):C()},()=>i.current],[])},Nn=(e,t)=>{let{element:r="div",options:l,events:n,defer:o,children:i,...s}=e,a=r,c=oe.useRef(null),d=oe.useRef(null),[p,f]=Dn({options:l,events:n,defer:o});return oe.useEffect(()=>{let{current:u}=c,{current:v}=d;return u&&v&&p({target:u,elements:{viewport:v,content:v}}),()=>{var C;return(C=f())==null?void 0:C.destroy()}},[p,r]),oe.useImperativeHandle(t,()=>({osInstance:f,getElement:()=>c.current}),[]),vr.createElement(a,{"data-overlayscrollbars-initialize":"",ref:c,...s},vr.createElement("div",{ref:d},i))},hl=oe.forwardRef(Nn),Fn=hl,jn=hl;export{Fn as OverlayScrollbars,jn as default};
//# sourceMappingURL=OverlayScrollbars-OGE3XJTA-11dbb2a7.js.map
