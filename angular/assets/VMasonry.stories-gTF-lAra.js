import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{At as t,D as n,Et as r,M as i,V as a,b as o,c as s,d as c,f as l,g as u,h as d,kt as f,l as p,m,mt as h,q as g,r as ee,s as _,v,w as te,x as y,y as ne}from"./core-CRrU-cqh.js";import{n as b,o as re}from"./common-CCRsjOAU.js";import{_ as x,d as ie,f as ae,i as S,m as oe,p as se,t as ce,x as le}from"./driver-BQiDxJHl.js";import{i as ue,n as de,r as fe,t as pe}from"./MasonryItem-D6Vaq3M0.js";import{n as me,r as he}from"./utils-9iCvyeNq.js";var C,w,T,E;function D(){return(D=e((()=>{c(),b(),se(),S(),ue(),x(),he(),de(),C=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},w=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},T=(e,t)=>t?`calc(${e*100}% + ${t}px)`:e*100+`%`,E=(()=>{let e=[y({selector:`virtua-vmasonry`,changeDetection:o.OnPush,imports:[pe,re],template:`
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
  `})],c,b=[],x;var S=class{static{x=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;C(null,c={value:x},e,{kind:`class`,name:x.name,metadata:t},null,b),S=x=c.value,t&&Object.defineProperty(x,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=l.required();getKey=l(me);lanes=l.required();gap=l();itemSize=l();bufferSize=l();keepMounted=l();cacheProp=l(void 0,{alias:`cache`});ssrCount=l();scrolled=m();scrollEnded=m();resized=m();template=p.required(a);container=d.required(`container`);_store;_layout;driver;_element=f(te).nativeElement;_appRef=f(ne);_stateVersion=t(void 0);_indexes=u(()=>{this._stateVersion();let e=this.data().length,[t,n]=this._store.$getRange(this.bufferSize()),r=this.keepMounted(),i=[];if(r){let a=new Set(r);for(let e=t;e<=n;e++)a.add(e);for(let t of le([...a]))t<e&&i.push(t)}else for(let e=t;e<=n;e++)i.push(e);return i});items=u(()=>{this._stateVersion();let e=this._store,t=this._layout,n=this.data(),r=this.getKey(),i=t.$getGap(),a=t.$getLanes(),o=T(1/a,i/a-i),s=[];for(let c of this._indexes()){let l=n[c],u=t.$getItemLane(c);s.push({key:r(l,c),index:c,data:l,offset:e.$getItemOffset(c),crossOffset:T(u/a,u*i/a),crossSize:o,hide:t.$isSizeEqual(c)})}return s});containerStyle=u(()=>(this._stateVersion(),{contain:`size style`,"overflow-anchor":`none`,flex:`none`,position:`relative`,width:`100%`,height:this._store.$getTotalSize()+`px`,"pointer-events":this._store.$isScrolling()?`none`:void 0}));constructor(){r(()=>{let e=this.data();this._store&&v(()=>{this._store.$update(5,e.length)})}),r(()=>{let e=this.lanes(),t=this.gap();this._store&&v(()=>{oe(this._store,this._layout,e,t)})}),g({read:()=>{this.driver.$observe(this.container().nativeElement)}}),s({read:()=>{this._stateVersion(),this.driver.$effect()}}),f(h).onDestroy(()=>{this._store?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow-y:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this._layout=fe(this.data().length,this.lanes(),this.gap(),this.itemSize(),this.cacheProp()),n=this._store=ie(t,this.ssrCount());this.driver=ce(n,t,!1),n.$subscribe(1,e=>{this._stateVersion.set(n.$getStateVersion()),e&&this._appRef.tick()}),n.$subscribe(4,()=>{this.scrolled.emit(n.$getScrollOffset())}),n.$subscribe(8,()=>{this.scrollEnded.emit()}),n.$subscribe(2,()=>{this.resized.emit()}),this._stateVersion.set(n.$getStateVersion())}get cache(){return this._layout.$snapshot()}get scrollOffset(){return this._store.$getScrollOffset()}get scrollSize(){return ae(this._store)}get viewportSize(){return this._store.$getViewportSize()}getItemOffset(e){return this._store.$getItemOffset(e)}getItemSize(e){return this._layout.$getItemSize(e)}scrollToIndex(e,t){this.driver.$scroll(e,t)}scrollTo(e){this.driver.$scroll(void 0,{offset:e})}scrollBy(e){this.driver.$scroll(void 0,{offset:e+this._store.$getScrollOffset()})}static ctorParameters=()=>[];static propDecorators={data:[{type:n,args:[{isSignal:!0,alias:`data`,required:!0,transform:void 0}]}],getKey:[{type:n,args:[{isSignal:!0,alias:`getKey`,required:!1,transform:void 0}]}],lanes:[{type:n,args:[{isSignal:!0,alias:`lanes`,required:!0,transform:void 0}]}],gap:[{type:n,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],itemSize:[{type:n,args:[{isSignal:!0,alias:`itemSize`,required:!1,transform:void 0}]}],bufferSize:[{type:n,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],keepMounted:[{type:n,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],cacheProp:[{type:n,args:[{isSignal:!0,alias:`cache`,required:!1,transform:void 0}]}],ssrCount:[{type:n,args:[{isSignal:!0,alias:`ssrCount`,required:!1,transform:void 0}]}],scrolled:[{type:i,args:[`scrolled`]}],scrollEnded:[{type:i,args:[`scrollEnded`]}],resized:[{type:i,args:[`resized`]}],template:[{type:ee,args:[a,{isSignal:!0}]}],container:[{type:_,args:[`container`,{isSignal:!0}]}]};static{w(x,b)}};return x})()})))()}var O,k,A,j,M;function ge(){return(ge=e((()=>{c(),D(),O=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},k=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},A=[80,180,120,220,160,100,240],j=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],M=(()=>{let e=[y({selector:`story-vmasonry-default`,imports:[E],template:`
    <virtua-vmasonry [lanes]="3" [data]="data" style="height: 100vh;">
      <ng-template let-item>
        <div [style]="itemStyle(item)">{{ item }}</div>
      </ng-template>
    </virtua-vmasonry>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;O(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),k(r,n)}data=Array.from({length:1e3},(e,t)=>t);itemStyle(e){let t=e*2654435761%7;return`height: ${A[t]}px; border: solid 1px #ccc; padding: 4px; background: ${j[e%j.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}};return r})()})))()}var N,P,F,I,L,R,z;function B(){return(B=e((()=>{c(),D(),N=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},P=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},F=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],I=[`1 / 1`,`3 / 4`,`4 / 3`,`2 / 3`,`3 / 2`],L=[[`(min-width: 1536px)`,6],[`(min-width: 1280px)`,5],[`(min-width: 1024px)`,4],[`(min-width: 768px)`,3]],R=()=>L.find(([e])=>window.matchMedia(e).matches)?.[1]??2,z=(()=>{let e=[y({selector:`story-vmasonry-responsive`,imports:[E],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;N(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}data=Array.from({length:1e3},(e,t)=>t);lanes=t(R());constructor(){let e=()=>{this.lanes.set(R())},t=L.map(([e])=>window.matchMedia(e));t.forEach(t=>t.addEventListener(`change`,e)),f(h).onDestroy(()=>{t.forEach(t=>t.removeEventListener(`change`,e))})}itemStyle(e){return`aspect-ratio: ${I[e*2654435761%5]}; border: solid 1px #ccc; padding: 4px; background: ${F[e%F.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static ctorParameters=()=>[];static{P(i,r)}};return i})()})))()}var V,H,U,W,G,K,q;function J(){return(J=e((()=>{c(),D(),V=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},H=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},U=1e3,W=[`start`,`center`,`end`,`nearest`],G=[80,180,120,220,160,100,240],K=[`#145ec1`,`#b52f48`,`#067d51`,`#733ea4`,`#a96506`,`#057176`,`#413c9b`],q=(()=>{let e=[y({selector:`story-vmasonry-scroll-to`,imports:[E],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;V(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}collection=d.required(E);data=Array.from({length:U},(e,t)=>t);aligns=W;scrollIndex=t(567);align=t(`start`);smooth=t(!1);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.scrollIndex.set(Math.round(U*Math.random()))}itemStyle(e){let t=e*2654435761%7;return`height: ${G[t]}px; border: solid 1px #ccc; padding: 4px; background: ${K[e%K.length]}; color: white; text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);`}static propDecorators={collection:[{type:_,args:[E,{isSignal:!0}]}]};static{H(i,r)}};return i})()})))()}var Y,X,Z,Q,_e;function $(){return($=e((()=>{D(),ge(),B(),J(),Y={component:E},X={render:()=>({template:`<story-vmasonry-default></story-vmasonry-default>`,moduleMetadata:{imports:[M]}})},Z={render:()=>({template:`<story-vmasonry-responsive></story-vmasonry-responsive>`,moduleMetadata:{imports:[z]}})},Q={render:()=>({template:`<story-vmasonry-scroll-to></story-vmasonry-scroll-to>`,moduleMetadata:{imports:[q]}})},_e=[`Default`,`Responsive`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{X as Default,Z as Responsive,Q as ScrollTo,_e as __namedExportsOrder,Y as default};