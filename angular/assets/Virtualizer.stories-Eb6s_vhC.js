import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,u as n}from"./core-CaGIugRR.js";import{n as r,t as i}from"./Virtualizer-CNOh4rFD.js";var a,o,s,c;function l(){return(l=e((()=>{n(),r(),a=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},o=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},s=[20,40,180,77],c=(()=>{let e=[t({selector:`story-header-and-footer`,imports:[i],template:`
    <div
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
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
  `})],n,r=[],c;var l=class{static{c=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;a(null,n={value:c},e,{kind:`class`,name:c.name,metadata:t},null,r),l=c=n.value,t&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),o(c,r)}data=Array.from({length:1e3}).map((e,t)=>s[t%4]);getKey=(e,t)=>t;headerHeight=400};return c})()})))()}var u,d,f,p;function m(){return(m=e((()=>{n(),r(),u=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},d=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},f=[20,40,180,77],p=(()=>{let e=[t({selector:`story-nested`,imports:[i],template:`
    <div
      #scrollable
      style="
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
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
  `})],n,r=[],a;var o=class{static{a=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;u(null,n={value:a},e,{kind:`class`,name:a.name,metadata:t},null,r),o=a=n.value,t&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),d(a,r)}data=Array.from({length:1e3}).map((e,t)=>f[t%4]);getKey=(e,t)=>t;outerPadding=40;innerPadding=60};return a})()})))()}var h,g,_,v;function y(){return(y=e((()=>{r(),l(),m(),h={component:i},g={render:()=>({template:`<story-header-and-footer></story-header-and-footer>`,moduleMetadata:{imports:[c]}})},_={render:()=>({template:`<story-nested></story-nested>`,moduleMetadata:{imports:[p]}})},v=[`HeaderAndFooter`,`Nested`]})))()}y();export{g as HeaderAndFooter,_ as Nested,v as __namedExportsOrder,h as default};