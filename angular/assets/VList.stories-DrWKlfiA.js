import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,kt as n,m as r,o as i,u as a}from"./core-CaGIugRR.js";import{n as o,t as s}from"./VList-URkV5auj.js";var c,l,u,d;function f(){return(f=e((()=>{a(),o(),c=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},l=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},u=[20,40,180,77],d=(()=>{let e=[t({selector:`story-default`,imports:[s],template:`
    <virtua-vlist [data]="data" [getKey]="getKey" style="height: 100vh;">
      <ng-template let-item let-index="index">
        <div
          [style.height.px]="item"
          style="background: white; border-bottom: solid 1px #ccc;"
        >
          {{ index }}
        </div>
      </ng-template>
    </virtua-vlist>
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;c(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),l(i,r)}data=Array.from({length:1e3}).map((e,t)=>u[t%4]);getKey=(e,t)=>t};return i})()})))()}var p,m,h,g,_;function v(){return(v=e((()=>{a(),o(),p=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},m=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},h=[40,180,77],g=e=>({id:e,size:h[e%4]+`px`}),_=(()=>{let e=[t({selector:`story-horizontal`,imports:[s],template:`
    <div style="padding: 10px;">
      <virtua-vlist
        [data]="data"
        [getKey]="getKey"
        [horizontal]="true"
        style="width: 100%; height: 200px;"
      >
        <ng-template let-item>
          <div
            [style.width]="item.size"
            style="background: white; border-right: solid 1px #ccc;"
          >
            {{ item.id }}
          </div>
        </ng-template>
      </virtua-vlist>
    </div>
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;p(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),m(i,r)}data=Array.from({length:1e3}).map((e,t)=>g(t));getKey=e=>e.id};return i})()})))()}var y,b,x,S,C;function w(){return(w=e((()=>{a(),o(),y=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},b=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},x=[20,40,180,77],S=e=>({id:e,size:x[e%4]+`px`}),C=(()=>{let e=[t({selector:`story-controls`,imports:[s],template:`
    <div style="height: 100%; display: flex; flex-direction: column;">
      <div>offset: {{ scrollOffset() }}</div>
      <div>scrolling: {{ scrolling() }}</div>
      <div>
        <input
          type="number"
          [value]="scrollTarget()"
          (input)="onScrollTargetInput($event)"
        />
        <button (click)="list().scrollToIndex(scrollTarget())">
          scrollToIndex
        </button>
      </div>
      <div>
        <button (click)="append()">append</button>
        <label>
          <input
            type="checkbox"
            [checked]="prepend()"
            (change)="prepend.set(!prepend())"
          />
          prepend
        </label>
        <button (click)="pop()">pop</button>
      </div>
      <virtua-vlist
        [data]="data()"
        [shift]="prepend()"
        [getKey]="getKey"
        (scroll)="onScroll($event)"
        (scrollEnd)="scrolling.set(false)"
      >
        <ng-template let-item>
          <div
            [style.height]="item.size"
            style="background: white; border-bottom: solid 1px #ccc;"
          >
            {{ item.id }}
          </div>
        </ng-template>
      </virtua-vlist>
    </div>
  `})],a,o=[],c;var l=class{static{c=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;y(null,a={value:c},e,{kind:`class`,name:c.name,metadata:t},null,o),l=c=a.value,t&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}list=r.required(s);data=n(Array.from({length:1e3}).map((e,t)=>S(t)));scrollOffset=n(0);scrolling=n(!1);scrollTarget=n(567);prepend=n(!1);getKey=e=>e.id;onScrollTargetInput(e){this.scrollTarget.set(Number(e.currentTarget.value))}onScroll(e){this.scrollOffset.set(e),this.scrolling.set(!0)}append(){let e=this.data(),t=Array.from({length:100}).map((t,n)=>S(n+e.length));this.data.set(this.prepend()?[...t,...e]:[...e,...t])}pop(){this.data.set(this.data().slice(0,-1))}static propDecorators={list:[{type:i,args:[s,{isSignal:!0}]}]};static{b(c,o)}};return c})()})))()}var T,E,D,O,k;function A(){return(A=e((()=>{o(),f(),v(),w(),T={component:s},E={render:()=>({template:`<story-default></story-default>`,moduleMetadata:{imports:[d]}})},D={render:()=>({template:`<story-horizontal></story-horizontal>`,moduleMetadata:{imports:[_]}})},O={render:()=>({template:`<story-controls></story-controls>`,moduleMetadata:{imports:[C]}})},k=[`Default`,`Horizontal`,`Controls`]})))()}A();export{O as Controls,E as Default,D as Horizontal,k as __namedExportsOrder,T as default};