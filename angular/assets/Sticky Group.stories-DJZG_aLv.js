import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,kt as n,m as r,o as i,u as a}from"./core-CaGIugRR.js";import{n as o,t as s}from"./VList-eIb9MCCu.js";var c,l,u,d,f;function p(){return(p=e((()=>{a(),o(),c=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},l=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},u=[20,40,180,77],d=[0,100,200,300,400,500,600,700,800,900],f=(()=>{let e=[t({selector:`story-sticky-group`,imports:[s],template:`
    <virtua-vlist
      [data]="data"
      [getKey]="getKey"
      [itemProps]="itemProps"
      [keepMounted]="[activeIndex()]"
      (scroll)="onScroll($event)"
      style="height: 100vh;"
    >
      <ng-template let-item let-index="index">
        <div
          [style.height.px]="item"
          [style.background]="index % 100 === 0 ? 'yellow' : 'white'"
          style="border-bottom: solid 1px #ccc;"
        >
          {{ index }}
        </div>
      </ng-template>
    </virtua-vlist>
  `})],a,o=[],f;var p=class{static{f=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;c(null,a={value:f},e,{kind:`class`,name:f.name,metadata:t},null,o),p=f=a.value,t&&Object.defineProperty(f,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}list=r.required(s);data=Array.from({length:1e3}).map((e,t)=>u[t%4]);activeIndex=n(0);getKey=(e,t)=>t;itemProps=({index:e})=>{if(e%100==0)return{style:{"z-index":`1`,...this.activeIndex()===e?{position:`sticky`,top:`0`}:{}}}};onScroll(e){let t=this.list().findItemIndex(e);this.activeIndex.set([...d].reverse().find(e=>t>=e))}static propDecorators={list:[{type:i,args:[s,{isSignal:!0}]}]};static{l(f,o)}};return f})()})))()}var m,h,g;function _(){return(_=e((()=>{o(),p(),m={component:s},h={render:()=>({template:`<story-sticky-group></story-sticky-group>`,moduleMetadata:{imports:[f]}})},g=[`StickyGroup`]})))()}_();export{h as StickyGroup,g as __namedExportsOrder,m as default};