import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,q as r,s as i,x as a}from"./core-CTVeZ5wR.js";import{n as o,t as s}from"./Virtualizer-CV9OTump.js";var c,l,u,d;function f(){return(f=e((()=>{t(),o(),c=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},l=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},u=[20,40,80,77],d=(()=>{let e=[a({selector:`story-header-and-footer`,imports:[s],template:`
    <div
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
        overflow-anchor: none;
      "
    >
      <div
        [style.height.px]="headerHeight"
        style="background-color: burlywood;"
      >
        header
      </div>
      <div
        virtuaVirtualizer
        [data]="data"
        [getKey]="getKey"
        [startMargin]="headerHeight"
      >
        <ng-template let-item let-index="index">
          <div
            [style.height.px]="item"
            style="background: white; border-bottom: solid 1px #ccc;"
          >
            {{ index }}
          </div>
        </ng-template>
      </div>
      <div style="background-color: steelblue; height: 600px;">footer</div>
    </div>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;c(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),l(r,n)}data=Array.from({length:1e3}).map((e,t)=>u[t%4]);getKey=(e,t)=>t;headerHeight=400};return r})()})))()}var p,m,h,g;function _(){return(_=e((()=>{t(),o(),p=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},m=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},h=[20,40,80,77],g=(()=>{let e=[a({selector:`story-nested`,imports:[s],template:`
    <div
      #scrollable
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer */
        overflow-anchor: none;
      "
    >
      <div
        [style.padding.px]="outerPadding"
        style="background-color: burlywood;"
      >
        <div
          [style.padding.px]="innerPadding"
          style="background-color: steelblue;"
        >
          <div
            virtuaVirtualizer
            [data]="data"
            [getKey]="getKey"
            [scrollRef]="scrollable"
            [startMargin]="outerPadding + innerPadding"
          >
            <ng-template let-item let-index="index">
              <div
                [style.height.px]="item"
                style="background: white; border-bottom: solid 1px #ccc;"
              >
                {{ index }}
              </div>
            </ng-template>
          </div>
        </div>
      </div>
    </div>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;p(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),m(r,n)}data=Array.from({length:1e3}).map((e,t)=>h[t%4]);getKey=(e,t)=>t;outerPadding=40;innerPadding=60};return r})()})))()}var v,y,b,x;function S(){return(S=e((()=>{t(),o(),v=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},y=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},b=[20,40,80,77],x=(()=>{let e=[a({selector:`story-reverse`,imports:[s],template:`
    <!--
      overflow-anchor: opt out browser's scroll anchoring on header/footer because it will conflict with scroll anchoring of virtualizer
      display: flex style for spacer
    -->
    <div
      style="
        height: 100vh;
        overflow-y: auto;
        overflow-anchor: none;
        display: flex;
        flex-direction: column;
      "
    >
      <!-- spacer to align virtualizer to the bottom when all items are visible in the viewport -->
      <div style="flex-grow: 1;"></div>
      <div virtuaVirtualizer [data]="data" [getKey]="getKey">
        <ng-template let-item let-index="index">
          <div
            [style.height.px]="item"
            style="background: white; border-bottom: solid 1px #ccc;"
          >
            {{ index }}
          </div>
        </ng-template>
      </div>
    </div>
  `})],t,o=[],c;var l=class{static{c=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;v(null,t={value:c},e,{kind:`class`,name:c.name,metadata:n},null,o),l=c=t.value,n&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}ref=n.required(s);data=Array.from({length:1e3}).map((e,t)=>b[t%4]);getKey=(e,t)=>t;constructor(){r(()=>{this.ref().scrollToIndex(999)})}static ctorParameters=()=>[];static propDecorators={ref:[{type:i,args:[s,{isSignal:!0}]}]};static{y(c,o)}};return c})()})))()}var C,w,T,E,D;function O(){return(O=e((()=>{o(),f(),_(),S(),C={component:s},w={render:()=>({template:`<story-header-and-footer></story-header-and-footer>`,moduleMetadata:{imports:[d]}})},T={render:()=>({template:`<story-nested></story-nested>`,moduleMetadata:{imports:[g]}})},E={render:()=>({template:`<story-reverse></story-reverse>`,moduleMetadata:{imports:[x]}})},D=[`HeaderAndFooter`,`Nested`,`Reverse`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-header-and-footer></story-header-and-footer>\`,
    moduleMetadata: {
      imports: [HeaderAndFooterDemo]
    }
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-nested></story-nested>\`,
    moduleMetadata: {
      imports: [NestedDemo]
    }
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-reverse></story-reverse>\`,
    moduleMetadata: {
      imports: [ReverseDemo]
    }
  })
}`,...E.parameters?.docs?.source}}}})))()}O();export{w as HeaderAndFooter,T as Nested,E as Reverse,D as __namedExportsOrder,C as default};