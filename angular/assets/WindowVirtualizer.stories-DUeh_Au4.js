import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./core-STM-W0E7.js";import{n as r,t as i}from"./angular-CmuMRju4.js";var a,o,s,c,l=e((()=>{n(),i(),a=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else (d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},o=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},s=[20,40,180,77],c=(()=>{let e=[t({selector:`story-window-virtualizer`,imports:[r],template:`
    <div style="padding: 200px 100px;">
      <div style="border: solid 1px gray;">
        <virtua-window-virtualizer [data]="data" [getKey]="getKey">
          <ng-template let-item let-index="index">
            <div
              [style.height.px]="item"
              style="background: white; border-bottom: solid 1px #ccc;"
            >
              {{ index }}
            </div>
          </ng-template>
        </virtua-window-virtualizer>
      </div>
    </div>
  `})],n,i=[],c;var l=class{static{c=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;a(null,n={value:c},e,{kind:`class`,name:c.name,metadata:t},null,i),l=c=n.value,t&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),o(c,i)}data=Array.from({length:1e3}).map((e,t)=>s[t%4]);getKey=(e,t)=>t};return c})()})),u,d,f;e((()=>{i(),l(),u={component:r},d={render:()=>({template:`<story-window-virtualizer></story-window-virtualizer>`,moduleMetadata:{imports:[c]}})},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};