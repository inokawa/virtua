import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,kt as p,l as m,m as h,mt as g,q as _,r as v,s as y,v as b,w as ee,x,y as te}from"./core-CTVeZ5wR.js";import{o as S}from"./_browser-chunk-CXUFIA7o.js";import{n as ne}from"./_common_module-chunk-BF7b15S4.js";import{C,E as w,T,_ as re,a as ie,b as ae,c as oe,d as se,g as E,h as D,i as ce,o as le,s as ue,v as de,w as O,y as fe}from"./scroll-to-DMXMgtMB.js";import{n as pe,r as me}from"./utils-CisDBLSJ.js";var k;function A(){return(A=e((()=>{re(),C(),k=(e,t,n=0,r,i)=>{let a=O(t,1),o=i&&i[1]||r||40,s=-1,c=r?void 0:new Set,l=!r,u=i&&i[0],d=u?D(u.slice(0,T(e,u.length)),O(0,e-u.length)):D([],e),f=[],p=[],m=[],h=e=>{let t=d[e];return t===-1?o:t},g=t=>{if(t=T(t,e-1),s>=t)return;let r=[],i=[];for(let e=0;e<a;e++)r.push(0),i.push(-1);for(let e=s,t=a;e>=0&&t;e--){let n=p[e];i[n]===-1&&(i[n]=e,r[n]=f[e]+h(e),t--)}for(;s<t;){let e=++s,t=0,o=1/0,c=1/0;for(let e=0;e<a;e++){let a=r[e]+(i[e]>=0?n:0);(a<o||a===o&&i[e]<c)&&(t=e,o=a,c=i[e])}f[e]=o,p[e]=t,r[t]=o+h(e),i[t]=e,m[e]=O(e?m[e-1]:0,r[t])}},_=t=>t>=e?y():(g(t),f[t]),v=e=>(g(e),m[e]),y=()=>e?v(e-1):0,b=t=>{if(!e)return 0;let n=E(v,e,t);return v(n)<=t?n+1:n};return{$getRange:(t,n)=>{let r=E(_,e,n);return[T(b(t),r),r]},$getItemOffset:_,$getItemSize:h,$isSizeEqual:(e,t=-1)=>d[e]===t,$resize:(t,r,i,u)=>{let f=b(i);for(;f>0&&!r(f-1);)f--;for(;f<e&&r(f);)f++;let p=_(f);for(let[e,n]of t)d[e]=n,c&&c.add(e),s=T(e-1,s);let m=_(f)-p;if(c&&u){let e=[],t=0;if(c.forEach(r=>{let i=d[r];i>0&&(e.push(i),t+=i+n)}),t>u*a){w(e);let t=e.length,n=t/2|0,r=t%2==0?(e[n-1]+e[n])/2:e[n],a=b(i+m),u=_(a);o=r,s=-1,m+=_(a)-u,c=void 0,l=!1}}return m},$getTotalSize:y,$getLength:()=>e,$setLength:t=>{let n=t-e;return s=T(t-1,s),e=t,n>0?D(d,n):d.splice(n),0},$relayout:(e,t=0,i)=>{if(e=O(e,1),e===a&&t===n)return;let o=b(i),l=_(o);return a=e,n=t,s=-1,c=r?void 0:new Set,_(o)-l},$isEstimating:()=>l,$snapshot:()=>[d.slice(),o],$getLanes:()=>a,$getGap:()=>n,$getItemLane:e=>(g(e),p[e])}}})))()}var j,M,N,P,F;function I(){return(I=e((()=>{l(),S(),ae(),se(),A(),ce(),C(),me(),j=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},M=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},N=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,P=(()=>{let e=[n({selector:`div[virtuaMasonryItem]`,host:{"[style]":`style()`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;j(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}index=u.required();offset=u.required();crossOffset=u.required();crossSize=u.required();hide=u.required();resizer=u.required();style=d(()=>({contain:`layout style`,position:`absolute`,top:this.offset()+`px`,"inset-inline-start":this.crossOffset(),width:this.crossSize(),visibility:this.hide()?`hidden`:void 0}));constructor(){let e=p(ee).nativeElement,t;c({read:()=>{let n=this.index();t&&t(),t=b(this.resizer)(e,n)}}),p(g).onDestroy(()=>{t&&t()})}static ctorParameters=()=>[];static propDecorators={index:[{type:r,args:[{isSignal:!0,alias:`index`,required:!0,transform:void 0}]}],offset:[{type:r,args:[{isSignal:!0,alias:`offset`,required:!0,transform:void 0}]}],crossOffset:[{type:r,args:[{isSignal:!0,alias:`crossOffset`,required:!0,transform:void 0}]}],crossSize:[{type:r,args:[{isSignal:!0,alias:`crossSize`,required:!0,transform:void 0}]}],hide:[{type:r,args:[{isSignal:!0,alias:`hide`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{M(a,i)}};return a})(),F=(()=>{let e=[x({selector:`virtua-vmasonry`,changeDetection:s.OnPush,imports:[P,ne],template:`
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
  `})],n,l=[],S;var C=class{static{S=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;j(null,n={value:S},e,{kind:`class`,name:S.name,metadata:t},null,l),C=S=n.value,t&&Object.defineProperty(S,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=u.required();getKey=u(pe);lanes=u.required();gap=u();itemSize=u();bufferSize=u();keepMounted=u();cacheProp=u(void 0,{alias:`cache`});scrolled=h();scrollEnded=h();template=m.required(o);container=f.required(`container`);_store;_layout;driver;_element=p(ee).nativeElement;_appRef=p(te);_stateVersion=t(void 0);_indexes=d(()=>{this._stateVersion();let e=this.data().length,[t,n]=this._store.$getRange(this.bufferSize()),r=this.keepMounted(),i=[];if(r){let a=new Set(r);for(let e=t;e<=n;e++)a.add(e);for(let t of w([...a]))t<e&&i.push(t)}else for(let e=t;e<=n;e++)i.push(e);return i});items=d(()=>{this._stateVersion();let e=this._store,t=this._layout,n=this.data(),r=this.getKey(),i=t.$getGap(),a=t.$getLanes(),o=N(1/a,i/a-i),s=[];for(let c of this._indexes()){let l=n[c],u=t.$getItemLane(c);s.push({key:r(l,c),index:c,data:l,offset:e.$getItemOffset(c),crossOffset:N(u/a,u*i/a),crossSize:o,hide:e.$isUnmeasuredItem(c)})}return s});containerStyle=d(()=>(this._stateVersion(),{contain:`size style`,"overflow-anchor":`none`,flex:`none`,position:`relative`,width:`100%`,height:this._store.$getTotalSize()+`px`,"pointer-events":this._store.$isScrolling()?`none`:void 0}));constructor(){i(()=>{let e=this.data();this._store&&b(()=>{e.length!==this._store.$getItemsLength()&&this._store.$update(5,[e.length])})}),i(()=>{let e=this.lanes(),t=this.gap();this._store&&b(()=>{this._store.$update(9,this._layout.$relayout(e,t,this._store.$getVisibleOffset()))})}),_({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),p(g).onDestroy(()=>{this._store?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow-y:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this._layout=k(this.data().length,this.lanes(),this.gap(),this.itemSize(),this.cacheProp()),n=this._store=de(t);this.driver=oe(n,!1),n.$subscribe(1,e=>{this._stateVersion.set(n.$getStateVersion()),e&&this._appRef.tick()}),n.$subscribe(4,()=>{this.scrolled.emit(n.$getScrollOffset())}),n.$subscribe(8,()=>{this.scrollEnded.emit()}),this._stateVersion.set(n.$getStateVersion())}get cache(){return this._layout.$snapshot()}get scrollOffset(){return this._store.$getScrollOffset()}get scrollSize(){return fe(this._store)}get viewportSize(){return this._store.$getViewportSize()}getItemOffset(e){return this._store.$getItemOffset(e)}getItemSize(e){return this._store.$getItemSize(e)}scrollToIndex(e,t){ue(this.driver,this._store,e,t)}scrollTo(e){le(this.driver,e)}scrollBy(e){ie(this.driver,this._store,e)}static ctorParameters=()=>[];static propDecorators={data:[{type:r,args:[{isSignal:!0,alias:`data`,required:!0,transform:void 0}]}],getKey:[{type:r,args:[{isSignal:!0,alias:`getKey`,required:!1,transform:void 0}]}],lanes:[{type:r,args:[{isSignal:!0,alias:`lanes`,required:!0,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],itemSize:[{type:r,args:[{isSignal:!0,alias:`itemSize`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],keepMounted:[{type:r,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],cacheProp:[{type:r,args:[{isSignal:!0,alias:`cache`,required:!1,transform:void 0}]}],scrolled:[{type:a,args:[`scrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],template:[{type:v,args:[o,{isSignal:!0}]}],container:[{type:y,args:[`container`,{isSignal:!0}]}]};static{M(S,l)}};return S})()})))()}var L,R,z,B,V;function H(){return(H=e((()=>{l(),I(),L=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},R=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},z=[80,180,120,220,160,100,240],B=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],V=(()=>{let e=[x({selector:`story-vmasonry-default`,imports:[F],template:`
    <virtua-vmasonry [lanes]="3" [data]="data" style="height: 100vh;">
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;L(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),R(r,n)}data=Array.from({length:1e3},(e,t)=>t);itemStyle(e){let t=e*2654435761%7;return`height: ${z[t]}px; border: solid 1px #ccc; padding: 4px; background: ${B[e%B.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}};return r})()})))()}var he,U,W,ge,G,K,_e;function ve(){return(ve=e((()=>{l(),I(),he=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},U=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},W=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],ge=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],G=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],K=()=>G.find(([e])=>window.matchMedia(e).matches)?.[1]??2,_e=(()=>{let e=[x({selector:`story-vmasonry-responsive`,imports:[F],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;he(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=Array.from({length:1e3},(e,t)=>t);lanes=t(K());constructor(){let e=()=>{this.lanes.set(K())},t=G.map(([e])=>window.matchMedia(e));t.forEach(t=>t.addEventListener(`change`,e)),p(g).onDestroy(()=>{t.forEach(t=>t.removeEventListener(`change`,e))})}itemStyle(e){return`aspect-ratio: ${ge[e*2654435761%5]}; border: solid 1px #ccc; padding: 4px; background: ${W[e%W.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static ctorParameters=()=>[];static{U(i,r)}};return i})()})))()}var ye,be,q,xe,Se,J,Ce;function Y(){return(Y=e((()=>{l(),I(),ye=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},be=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},q=1e3,xe=[`start`,`center`,`end`,`nearest`],Se=[80,180,120,220,160,100,240],J=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],Ce=(()=>{let e=[x({selector:`story-vmasonry-scroll-to`,imports:[F],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;ye(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}collection=f.required(F);data=Array.from({length:q},(e,t)=>t);aligns=xe;scrollIndex=t(567);align=t(`start`);smooth=t(!1);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.scrollIndex.set(Math.round(q*Math.random()))}itemStyle(e){let t=e*2654435761%7;return`height: ${Se[t]}px; border: solid 1px #ccc; padding: 4px; background: ${J[e%J.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static propDecorators={collection:[{type:y,args:[F,{isSignal:!0}]}]};static{be(i,r)}};return i})()})))()}var we,X,Z,Q,Te;function $(){return($=e((()=>{I(),H(),ve(),Y(),we={component:F},X={render:()=>({template:`<story-vmasonry-default></story-vmasonry-default>`,moduleMetadata:{imports:[V]}})},Z={render:()=>({template:`<story-vmasonry-responsive></story-vmasonry-responsive>`,moduleMetadata:{imports:[_e]}})},Q={render:()=>({template:`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>`,moduleMetadata:{imports:[Ce]}})},Te=[`Default`,`Responsive`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Default,Z as Responsive,Q as ScrollTo,Te as __namedExportsOrder,we as default};