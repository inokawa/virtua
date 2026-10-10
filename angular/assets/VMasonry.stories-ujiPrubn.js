import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,kt as p,l as m,m as h,mt as g,q as _,r as v,s as y,v as b,w as x,x as S,y as ee}from"./core-CTVeZ5wR.js";import{o as C}from"./_browser-chunk-CXUFIA7o.js";import{n as te}from"./_common_module-chunk-BF7b15S4.js";import{D as w,O as T,T as E,_ as ne,a as re,b as ie,c as ae,d as oe,g as se,h as ce,i as le,o as ue,s as de,v as fe,w as D,x as pe,y as me}from"./scroll-to-CmKQg4QN.js";import{n as he,r as ge}from"./utils-CisDBLSJ.js";var O;function k(){return(k=e((()=>{ne(),D(),O=(e,t,n=0,r,i)=>{let a=E(t,1),o=i&&i[1]||r||40,s=-1,c=r?void 0:new Set,l=!r,u=i?i[0].slice(0,e):[];ce(u,e-u.length);let d=[],f=[],p=[],m=e=>{let t=u[e];return t===-1?o:t},h=t=>{if(t=w(t,e-1),s>=t)return;let r=[],i=[];for(let e=0;e<a;e++)r.push(0),i.push(-1);for(let e=s,t=a;e>=0&&t;e--){let n=f[e];i[n]===-1&&(i[n]=e,r[n]=d[e]+m(e),t--)}for(;s<t;){let e=++s,t=0,o=1/0,c=1/0;for(let e=0;e<a;e++){let a=r[e]+(i[e]>=0?n:0);(a<o||a===o&&i[e]<c)&&(t=e,o=a,c=i[e])}d[e]=o,f[e]=t,r[t]=o+m(e),i[t]=e,p[e]=E(e?p[e-1]:0,r[t])}},g=t=>t>=e?v():(h(t),d[t]),_=e=>(h(e),p[e]),v=()=>e?_(e-1):0,y=t=>{if(!e)return 0;let n=se(_,e,t);return _(n)<=t?n+1:n};return{$getRange:(t,n)=>{let r=se(g,e,n);return[w(y(t),r),r]},$findIndex:y,$getItemOffset:g,$getItemSize:m,$isSizeEqual:(e,t=-1)=>u[e]===t,$setItemSizes:(e,t)=>{for(let[t,n]of e)u[t]=n,c&&c.add(t),s=w(t-1,s);if(c&&t){let e=[],r=0;if(c.forEach(t=>{let i=u[t];i>0&&(e.push(i),r+=i+n)}),r>t*a){T(e);let t=e.length,n=t/2|0;o=t%2==0?(e[n-1]+e[n])/2:e[n],s=-1,c=void 0,l=!1}}},$getTotalSize:v,$getLength:()=>e,$setLength:t=>{let n=t-e;s=w(t-1,s),e=t,n>0?ce(u,n):u.splice(n)},$relayout:(e,t=0)=>(e=E(e,1),e===a&&t===n?!1:(a=e,n=t,s=-1,c=r?void 0:new Set,!0)),$isEstimating:()=>l,$snapshot:()=>[u.slice(),o],$getLanes:()=>a,$getGap:()=>n,$getItemLane:e=>(h(e),f[e])}}})))()}var A,j,M,N,P;function F(){return(F=e((()=>{l(),C(),ie(),oe(),k(),le(),D(),ge(),A=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},j=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},M=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,N=(()=>{let e=[n({selector:`div[virtuaMasonryItem]`,host:{"[style]":`style()`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;A(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}index=u.required();offset=u.required();crossOffset=u.required();crossSize=u.required();hide=u.required();resizer=u.required();style=d(()=>({contain:`layout style`,position:`absolute`,top:this.offset()+`px`,"inset-inline-start":this.crossOffset(),width:this.crossSize(),visibility:this.hide()?`hidden`:void 0}));constructor(){let e=p(x).nativeElement,t;c({read:()=>{let n=this.index();t&&t(),t=b(this.resizer)(e,n)}}),p(g).onDestroy(()=>{t&&t()})}static ctorParameters=()=>[];static propDecorators={index:[{type:r,args:[{isSignal:!0,alias:`index`,required:!0,transform:void 0}]}],offset:[{type:r,args:[{isSignal:!0,alias:`offset`,required:!0,transform:void 0}]}],crossOffset:[{type:r,args:[{isSignal:!0,alias:`crossOffset`,required:!0,transform:void 0}]}],crossSize:[{type:r,args:[{isSignal:!0,alias:`crossSize`,required:!0,transform:void 0}]}],hide:[{type:r,args:[{isSignal:!0,alias:`hide`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{j(a,i)}};return a})(),P=(()=>{let e=[S({selector:`virtua-vmasonry`,changeDetection:s.OnPush,imports:[N,te],template:`
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
  `})],n,l=[],C;var w=class{static{C=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;A(null,n={value:C},e,{kind:`class`,name:C.name,metadata:t},null,l),w=C=n.value,t&&Object.defineProperty(C,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=u.required();getKey=u(he);lanes=u.required();gap=u();itemSize=u();bufferSize=u();keepMounted=u();cacheProp=u(void 0,{alias:`cache`});scrolled=h();scrollEnded=h();resized=h();template=m.required(o);container=f.required(`container`);_store;_layout;driver;_element=p(x).nativeElement;_appRef=p(ee);_stateVersion=t(void 0);_indexes=d(()=>{this._stateVersion();let e=this.data().length,[t,n]=this._store.$getRange(this.bufferSize()),r=this.keepMounted(),i=[];if(r){let a=new Set(r);for(let e=t;e<=n;e++)a.add(e);for(let t of T([...a]))t<e&&i.push(t)}else for(let e=t;e<=n;e++)i.push(e);return i});items=d(()=>{this._stateVersion();let e=this._store,t=this._layout,n=this.data(),r=this.getKey(),i=t.$getGap(),a=t.$getLanes(),o=M(1/a,i/a-i),s=[];for(let c of this._indexes()){let l=n[c],u=t.$getItemLane(c);s.push({key:r(l,c),index:c,data:l,offset:e.$getItemOffset(c),crossOffset:M(u/a,u*i/a),crossSize:o,hide:t.$isSizeEqual(c)})}return s});containerStyle=d(()=>(this._stateVersion(),{contain:`size style`,"overflow-anchor":`none`,flex:`none`,position:`relative`,width:`100%`,height:this._store.$getTotalSize()+`px`,"pointer-events":this._store.$isScrolling()?`none`:void 0}));constructor(){i(()=>{let e=this.data();this._store&&b(()=>{this._store.$update(5,e.length)})}),i(()=>{let e=this.lanes(),t=this.gap();this._store&&b(()=>{pe(this._store,this._layout,e,t)})}),_({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),p(g).onDestroy(()=>{this._store?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow-y:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this._layout=O(this.data().length,this.lanes(),this.gap(),this.itemSize(),this.cacheProp()),n=this._store=fe(t);this.driver=ae(n,t,!1),n.$subscribe(1,e=>{this._stateVersion.set(n.$getStateVersion()),e&&this._appRef.tick()}),n.$subscribe(4,()=>{this.scrolled.emit(n.$getScrollOffset())}),n.$subscribe(8,()=>{this.scrollEnded.emit()}),n.$subscribe(2,()=>{this.resized.emit()}),this._stateVersion.set(n.$getStateVersion())}get cache(){return this._layout.$snapshot()}get scrollOffset(){return this._store.$getScrollOffset()}get scrollSize(){return me(this._store)}get viewportSize(){return this._store.$getViewportSize()}getItemOffset(e){return this._store.$getItemOffset(e)}getItemSize(e){return this._layout.$getItemSize(e)}scrollToIndex(e,t){de(this.driver,this._store,this._layout,e,t)}scrollTo(e){ue(this.driver,e)}scrollBy(e){re(this.driver,this._store,e)}static ctorParameters=()=>[];static propDecorators={data:[{type:r,args:[{isSignal:!0,alias:`data`,required:!0,transform:void 0}]}],getKey:[{type:r,args:[{isSignal:!0,alias:`getKey`,required:!1,transform:void 0}]}],lanes:[{type:r,args:[{isSignal:!0,alias:`lanes`,required:!0,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],itemSize:[{type:r,args:[{isSignal:!0,alias:`itemSize`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],keepMounted:[{type:r,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],cacheProp:[{type:r,args:[{isSignal:!0,alias:`cache`,required:!1,transform:void 0}]}],scrolled:[{type:a,args:[`scrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],resized:[{type:a,args:[`resized`]}],template:[{type:v,args:[o,{isSignal:!0}]}],container:[{type:y,args:[`container`,{isSignal:!0}]}]};static{j(C,l)}};return C})()})))()}var I,L,R,z,B;function V(){return(V=e((()=>{l(),F(),I=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},L=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},R=[80,180,120,220,160,100,240],z=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],B=(()=>{let e=[S({selector:`story-vmasonry-default`,imports:[P],template:`
    <virtua-vmasonry [lanes]="3" [data]="data" style="height: 100vh;">
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),L(r,n)}data=Array.from({length:1e3},(e,t)=>t);itemStyle(e){let t=e*2654435761%7;return`height: ${R[t]}px; border: solid 1px #ccc; padding: 4px; background: ${z[e%z.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}};return r})()})))()}var H,_e,U,W,G,K,ve;function ye(){return(ye=e((()=>{l(),F(),H=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},_e=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},U=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],W=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],G=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],K=()=>G.find(([e])=>window.matchMedia(e).matches)?.[1]??2,ve=(()=>{let e=[S({selector:`story-vmasonry-responsive`,imports:[P],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;H(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=Array.from({length:1e3},(e,t)=>t);lanes=t(K());constructor(){let e=()=>{this.lanes.set(K())},t=G.map(([e])=>window.matchMedia(e));t.forEach(t=>t.addEventListener(`change`,e)),p(g).onDestroy(()=>{t.forEach(t=>t.removeEventListener(`change`,e))})}itemStyle(e){return`aspect-ratio: ${W[e*2654435761%5]}; border: solid 1px #ccc; padding: 4px; background: ${U[e%U.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static ctorParameters=()=>[];static{_e(i,r)}};return i})()})))()}var be,xe,q,Se,Ce,J,we;function Y(){return(Y=e((()=>{l(),F(),be=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},xe=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},q=1e3,Se=[`start`,`center`,`end`,`nearest`],Ce=[80,180,120,220,160,100,240],J=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],we=(()=>{let e=[S({selector:`story-vmasonry-scroll-to`,imports:[P],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;be(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}collection=f.required(P);data=Array.from({length:q},(e,t)=>t);aligns=Se;scrollIndex=t(567);align=t(`start`);smooth=t(!1);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.scrollIndex.set(Math.round(q*Math.random()))}itemStyle(e){let t=e*2654435761%7;return`height: ${Ce[t]}px; border: solid 1px #ccc; padding: 4px; background: ${J[e%J.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static propDecorators={collection:[{type:y,args:[P,{isSignal:!0}]}]};static{xe(i,r)}};return i})()})))()}var Te,X,Z,Q,Ee;function $(){return($=e((()=>{F(),V(),ye(),Y(),Te={component:P},X={render:()=>({template:`<story-vmasonry-default></story-vmasonry-default>`,moduleMetadata:{imports:[B]}})},Z={render:()=>({template:`<story-vmasonry-responsive></story-vmasonry-responsive>`,moduleMetadata:{imports:[ve]}})},Q={render:()=>({template:`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>`,moduleMetadata:{imports:[we]}})},Ee=[`Default`,`Responsive`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-default></story-vmasonry-default>\`,
    moduleMetadata: {
      imports: [VMasonryDefaultDemo]
    }
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-responsive></story-vmasonry-responsive>\`,
    moduleMetadata: {
      imports: [VMasonryResponsiveDemo]
    }
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>\`,
    moduleMetadata: {
      imports: [VMasonryScrollToDemo]
    }
  })
}`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Default,Z as Responsive,Q as ScrollTo,Ee as __namedExportsOrder,Te as default};