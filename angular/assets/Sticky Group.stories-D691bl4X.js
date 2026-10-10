import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,d as n,h as r,s as i,x as a}from"./core-CTVeZ5wR.js";import{n as o,t as s}from"./VList-CiCcOgcy.js";import{n as c,t as l}from"./en-DltMjSLJ.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),l(),o(),u=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},d=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},f=[],c.helpers.multiple(()=>`${c.person.firstName()} ${c.person.lastName()}`,{count:1e3}).sort((e,t)=>e.localeCompare(t)).forEach(e=>{let t=e[0].toUpperCase(),n=f.findLast(e=>e.type===`header`);(!n||n.letter!==t)&&f.push({type:`header`,letter:t}),f.push({type:`contact`,name:e})}),p=32,m=f.flatMap((e,t)=>e.type===`header`?[t]:[]),h=(()=>{let e=[a({selector:`story-sticky-group`,imports:[s],template:`
    <virtua-vlist
      [data]="data"
      [getKey]="getKey"
      [itemProps]="itemProps"
      [keepMounted]="[activeIndex()]"
      (scrolled)="onScroll($event)"
      style="height: 100vh; font-family: system-ui, sans-serif; font-size: 14px;"
    >
      <ng-template let-item>
        @if (item.type === "header") {
          <div
            [style.height.px]="stickyItemHeight"
            style="display: flex; align-items: center; padding: 0 16px; background: #f3f4f6; border-bottom: solid 1px #e5e7eb; color: #6b7280; font-size: 13px; font-weight: 600;"
          >
            {{ item.letter }}
          </div>
        } @else {
          <div
            style="height: 48px; display: flex; align-items: center; padding: 0 16px; border-bottom: solid 1px #f0f0f0; background: #fff;"
          >
            {{ item.name }}
          </div>
        }
      </ng-template>
    </virtua-vlist>
  `})],n,o=[],c;var l=class{static{c=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;u(null,n={value:c},e,{kind:`class`,name:c.name,metadata:t},null,o),l=c=n.value,t&&Object.defineProperty(c,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}list=r.required(s);data=f;stickyItemHeight=p;activeIndex=t(0);getKey=(e,t)=>t;itemProps=({index:e})=>{if(f[e].type===`header`)return{style:{"z-index":`1`,...this.activeIndex()===e?{position:`sticky`,top:`0`}:{}}}};onScroll(e){let t=this.list().findItemIndex(e);this.activeIndex.set([...m].reverse().find(e=>t>=e))}static propDecorators={list:[{type:i,args:[s,{isSignal:!0}]}]};static{d(c,o)}};return c})()})))()}var _,v,y;function b(){return(b=e((()=>{o(),g(),_={component:s},v={render:()=>({template:`<story-sticky-group></story-sticky-group>`,moduleMetadata:{imports:[h]}})},y=[`StickyGroup`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-sticky-group></story-sticky-group>\`,
    moduleMetadata: {
      imports: [StickyGroupDemo]
    }
  })
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as StickyGroup,y as __namedExportsOrder,_ as default};