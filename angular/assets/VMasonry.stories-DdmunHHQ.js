import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,kt as p,l as m,m as h,mt as g,q as _,r as v,s as y,v as b,w as x,x as S,y as ee}from"./core-CTVeZ5wR.js";import{o as C}from"./_browser-chunk-CXUFIA7o.js";import{n as te}from"./_common_module-chunk-BF7b15S4.js";import{C as w,E as ne,T,_ as re,a as ie,b as ae,c as oe,d as se,g as E,h as D,i as ce,o as le,s as ue,v as de,w as O,y as fe}from"./scroll-to-Bft8J4zH.js";import{n as pe,r as me}from"./utils-CisDBLSJ.js";var k;function A(){return(A=e((()=>{re(),w(),k=(e,t,n=0,r,i)=>{let a=O(t,1),o=a,s=n,c=i&&i[1]||r||40,l=-1,u=r?void 0:new Set,d=!r,f=i&&i[0],p=f?D(f.slice(0,T(e,f.length)),O(0,e-f.length)):D([],e),m=[],h=[],g=[],_=e=>{let t=p[e];return t===-1?c:t},v=t=>{if(t=T(t,e-1),l>=t)return;let r=[],i=[];for(let e=0;e<a;e++)r.push(0),i.push(-1);for(let e=l,t=a;e>=0&&t;e--){let n=h[e];i[n]===-1&&(i[n]=e,r[n]=m[e]+_(e),t--)}for(;l<t;){let e=++l,t=0,o=1/0,s=1/0;for(let e=0;e<a;e++){let a=r[e]+(i[e]>=0?n:0);(a<o||a===o&&i[e]<s)&&(t=e,o=a,s=i[e])}m[e]=o,h[e]=t,r[t]=o+_(e),i[t]=e,g[e]=O(e?g[e-1]:0,r[t])}},y=t=>t>=e?x():(v(t),m[t]),b=e=>(v(e),g[e]),x=()=>e?b(e-1):0,S=t=>{if(!e)return 0;let n=E(b,e,t);return b(n)<=t?n+1:n};return{$getRange:(t,n)=>{let r=E(y,e,n);return[T(S(t),r),r]},$findIndex:t=>E(y,e,t),$getItemOffset:y,$getItemSize:_,$isSizeEqual:(e,t=-1)=>p[e]===t,$resize:(t,r,i,o)=>{let s=S(i);for(;s>0&&!r(s-1);)s--;for(;s<e&&r(s);)s++;let f=y(s);for(let[e,n]of t)p[e]=n,u&&u.add(e),l=T(e-1,l);let m=y(s)-f;if(u&&o){let e=[],t=0;if(u.forEach(r=>{let i=p[r];i>0&&(e.push(i),t+=i+n)}),t>o*a){ne(e);let t=e.length,n=t/2|0,r=t%2==0?(e[n-1]+e[n])/2:e[n],a=S(i+m),o=y(a);c=r,l=-1,m+=y(a)-o,u=void 0,d=!1}}return m},$getTotalSize:x,$getLength:()=>e,$setLength:t=>{let n=t-e;return l=T(t-1,l),e=t,n>0?D(p,n):p.splice(n),0},$relayout:(e,t)=>{if(o===a&&s===n)return;let i=S(t),c=y(i);return a=o,n=s,l=-1,u=r?void 0:new Set,y(i)-c},$setOptions:(e,t=0)=>{o=O(e,1),s=t},$isEstimating:()=>d,$snapshot:()=>[p.slice(),c],$getLanes:()=>a,$getGap:()=>n,$getItemLane:e=>(v(e),h[e])}}})))()}var j,M,N,P,F;function I(){return(I=e((()=>{l(),C(),ae(),se(),A(),ce(),me(),j=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},M=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},N=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,P=(()=>{let e=[n({selector:`div[virtuaMasonryItem]`,host:{"[style]":`style()`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;j(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}index=u.required();offset=u.required();crossOffset=u.required();crossSize=u.required();hide=u.required();resizer=u.required();style=d(()=>({contain:`layout style`,position:`absolute`,top:this.offset()+`px`,"inset-inline-start":this.crossOffset(),width:this.crossSize(),visibility:this.hide()?`hidden`:void 0}));constructor(){let e=p(x).nativeElement,t;c({read:()=>{let n=this.index();t&&t(),t=b(this.resizer)(e,n)}}),p(g).onDestroy(()=>{t&&t()})}static ctorParameters=()=>[];static propDecorators={index:[{type:r,args:[{isSignal:!0,alias:`index`,required:!0,transform:void 0}]}],offset:[{type:r,args:[{isSignal:!0,alias:`offset`,required:!0,transform:void 0}]}],crossOffset:[{type:r,args:[{isSignal:!0,alias:`crossOffset`,required:!0,transform:void 0}]}],crossSize:[{type:r,args:[{isSignal:!0,alias:`crossSize`,required:!0,transform:void 0}]}],hide:[{type:r,args:[{isSignal:!0,alias:`hide`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{M(a,i)}};return a})(),F=(()=>{let e=[S({selector:`virtua-vmasonry`,changeDetection:s.OnPush,imports:[P,te],template:`
    <div #container [style]="containerStyle()">
      @for (item of items(); track item.key) {
        <div
          virtuaMasonryItem
          [index]="item.index"
          [offset]="item.offset"
          [crossOffset]="item.crossOffset"
          [crossSize]="item.crossSize"
          [hide]="item.hide"
          [resizer]="driver.$observeItem"
        >
          <ng-container
            [ngTemplateOutlet]="template()"
            [ngTemplateOutletContext]="{
              $implicit: item.data,
              index: item.index,
            }"
          />
        </div>
      }
    </div>
  `})],n,l=[],C;var w=class{static{C=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;j(null,n={value:C},e,{kind:`class`,name:C.name,metadata:t},null,l),w=C=n.value,t&&Object.defineProperty(C,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=u.required();getKey=u(pe);lanes=u.required();gap=u();itemSize=u();bufferSize=u();cacheProp=u(void 0,{alias:`cache`});scrolled=h();scrollEnded=h();template=m.required(o);container=f.required(`container`);_store;_layout;driver;_element=p(x).nativeElement;_appRef=p(ee);_stateVersion=t(void 0);items=d(()=>{this._stateVersion();let e=this._store,t=this._layout,n=this.data(),r=this.getKey(),i=t.$getGap(),a=t.$getLanes(),o=N(1/a,i/a-i),[s,c]=e.$getRange(this.bufferSize()),l=[];for(let u=s;u<=c;u++){let s=n[u],c=t.$getItemLane(u);l.push({key:r(s,u),index:u,data:s,offset:e.$getItemOffset(u),crossOffset:N(c/a,c*i/a),crossSize:o,hide:e.$isUnmeasuredItem(u)})}return l});containerStyle=d(()=>(this._stateVersion(),{contain:`size style`,"overflow-anchor":`none`,flex:`none`,position:`relative`,width:`100%`,height:this._store.$getTotalSize()+`px`,"pointer-events":this._store.$isScrolling()?`none`:void 0}));constructor(){i(()=>{let e=this.data();this._store&&b(()=>{e.length!==this._store.$getItemsLength()&&this._store.$update(5,[e.length])})}),i(()=>{let e=this.lanes(),t=this.gap();this._store&&b(()=>{this._layout.$setOptions(e,t),this._store.$update(9,void 0)})}),_({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),p(g).onDestroy(()=>{this._store?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow-y:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this._layout=k(this.data().length,this.lanes(),this.gap(),this.itemSize(),this.cacheProp()),n=this._store=de(t);this.driver=oe(n,!1),n.$subscribe(1,e=>{this._stateVersion.set(n.$getStateVersion()),e&&this._appRef.tick()}),n.$subscribe(4,()=>{this.scrolled.emit(n.$getScrollOffset())}),n.$subscribe(8,()=>{this.scrollEnded.emit()}),this._stateVersion.set(n.$getStateVersion())}get cache(){return this._layout.$snapshot()}get scrollOffset(){return this._store.$getScrollOffset()}get scrollSize(){return fe(this._store)}get viewportSize(){return this._store.$getViewportSize()}getItemOffset(e){return this._store.$getItemOffset(e)}getItemSize(e){return this._store.$getItemSize(e)}scrollToIndex(e,t){ue(this.driver,this._store,e,t)}scrollTo(e){le(this.driver,e)}scrollBy(e){ie(this.driver,this._store,e)}static ctorParameters=()=>[];static propDecorators={data:[{type:r,args:[{isSignal:!0,alias:`data`,required:!0,transform:void 0}]}],getKey:[{type:r,args:[{isSignal:!0,alias:`getKey`,required:!1,transform:void 0}]}],lanes:[{type:r,args:[{isSignal:!0,alias:`lanes`,required:!0,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],itemSize:[{type:r,args:[{isSignal:!0,alias:`itemSize`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],cacheProp:[{type:r,args:[{isSignal:!0,alias:`cache`,required:!1,transform:void 0}]}],scrolled:[{type:a,args:[`scrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],template:[{type:v,args:[o,{isSignal:!0}]}],container:[{type:y,args:[`container`,{isSignal:!0}]}]};static{M(C,l)}};return C})()})))()}var L,R,z,B,V;function H(){return(H=e((()=>{l(),I(),L=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},R=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},z=[80,180,120,220,160,100,240],B=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],V=(()=>{let e=[S({selector:`story-vmasonry-default`,imports:[F],template:`
    <virtua-vmasonry [lanes]="3" [data]="data" style="height: 100vh;">
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;L(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),R(r,n)}data=Array.from({length:1e3},(e,t)=>t);itemStyle(e){let t=e*2654435761%7;return`height: ${z[t]}px; border: solid 1px #ccc; padding: 4px; background: ${B[e%B.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}};return r})()})))()}var U,W,G,K,q,J,he;function ge(){return(ge=e((()=>{l(),I(),U=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},W=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},G=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],K=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],q=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],J=()=>q.find(([e])=>window.matchMedia(e).matches)?.[1]??2,he=(()=>{let e=[S({selector:`story-vmasonry-media-queries`,imports:[F],template:`
    <virtua-vmasonry
      [lanes]="lanes()"
      [gap]="8"
      [data]="data"
      style="height: 100vh;"
    >
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;U(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=Array.from({length:1e3},(e,t)=>t);lanes=t(J());constructor(){let e=()=>{this.lanes.set(J())},t=q.map(([e])=>window.matchMedia(e));t.forEach(t=>t.addEventListener(`change`,e)),p(g).onDestroy(()=>{t.forEach(t=>t.removeEventListener(`change`,e))})}itemStyle(e){return`aspect-ratio: ${K[e*2654435761%5]}; border: solid 1px #ccc; padding: 4px; background: ${G[e%G.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static ctorParameters=()=>[];static{W(i,r)}};return i})()})))()}var _e,ve,Y,ye,be,X,xe;function Se(){return(Se=e((()=>{l(),I(),_e=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},ve=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},Y=1e3,ye=[`start`,`center`,`end`,`nearest`],be=[80,180,120,220,160,100,240],X=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],xe=(()=>{let e=[S({selector:`story-vmasonry-scroll-to`,imports:[F],template:`
    <div style="height: 100vh; display: flex; flex-direction: column;">
      <div>
        <input
          type="number"
          [value]="scrollIndex()"
          (input)="scrollIndex.set(toNumber($event))"
        />
        <button
          (click)="
            collection().scrollToIndex(scrollIndex(), {
              align: align(),
              smooth: smooth(),
            })
          "
        >
          scroll to index
        </button>
        <button (click)="randomize()">randomize</button>
        @for (a of aligns; track a) {
          <label style="margin-left: 4px;">
            <input
              type="radio"
              [checked]="align() === a"
              (change)="align.set(a)"
            />
            {{ a }}
          </label>
        }
        <label style="margin-left: 4px;">
          <input
            type="checkbox"
            [checked]="smooth()"
            (change)="smooth.set(!smooth())"
          />
          smooth
        </label>
      </div>
      <virtua-vmasonry [lanes]="4" [data]="data" style="flex: 1;">
        <ng-template let-item>
          <div [style]="itemStyle(item)">{{ item }}</div>
        </ng-template>
      </virtua-vmasonry>
    </div>
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;_e(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}collection=f.required(F);data=Array.from({length:Y},(e,t)=>t);aligns=ye;scrollIndex=t(567);align=t(`start`);smooth=t(!1);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.scrollIndex.set(Math.round(Y*Math.random()))}itemStyle(e){let t=e*2654435761%7;return`height: ${be[t]}px; border: solid 1px #ccc; padding: 4px; background: ${X[e%X.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static propDecorators={collection:[{type:y,args:[F,{isSignal:!0}]}]};static{ve(i,r)}};return i})()})))()}var Ce,Z,Q,$,we;function Te(){return(Te=e((()=>{I(),H(),ge(),Se(),Ce={component:F},Z={render:()=>({template:`<story-vmasonry-default></story-vmasonry-default>`,moduleMetadata:{imports:[V]}})},Q={render:()=>({template:`<story-vmasonry-media-queries></story-vmasonry-media-queries>`,moduleMetadata:{imports:[he]}})},$={render:()=>({template:`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>`,moduleMetadata:{imports:[xe]}})},we=[`Default`,`MediaQueries`,`ScrollTo`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-default></story-vmasonry-default>\`,
    moduleMetadata: {
      imports: [VMasonryDefaultDemo]
    }
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-media-queries></story-vmasonry-media-queries>\`,
    moduleMetadata: {
      imports: [VMasonryMediaQueriesDemo]
    }
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>\`,
    moduleMetadata: {
      imports: [VMasonryScrollToDemo]
    }
  })
}`,...$.parameters?.docs?.source}}}})))()}Te();export{Z as Default,Q as MediaQueries,$ as ScrollTo,we as __namedExportsOrder,Ce as default};