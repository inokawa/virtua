import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,c as n,d as r,h as i,kt as a,mt as o,s,v as c,x as l}from"./core-CTVeZ5wR.js";import{n as u,t as d}from"./Virtualizer-BE102LEU.js";import{n as f,t as p}from"./VList-3kZmnCR0.js";import{n as m,t as h}from"./en-DltMjSLJ.js";var g;function _(){return(_=e((()=>{g=`
      .spinner {
        flex: none;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loader {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid #ccc;
        border-top-color: transparent;
        animation: rotate 1s linear infinite;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    `})))()}var v,y,b,x,S;function C(){return(C=e((()=>{_(),r(),h(),u(),v=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},y=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},b=0,x=({value:e=m.lorem.paragraphs(1),me:t}={})=>({id:b++,value:e,me:t}),S=(()=>{let e=[l({selector:`story-chat`,imports:[d],template:`
    <div
      style="width: 100vw; height: 100vh; display: flex; flex-direction: column;"
    >
      <div
        style="
          overflow-y: auto;
          flex: 1;
          /* opt out browser's scroll anchoring on header/footer because it will conflict to scroll anchoring of virtualizer */
          overflow-anchor: none;
          /* flex style for spacer */
          display: flex;
          flex-direction: column;
        "
      >
        <div
          style="
            /* spacer to align virtualizer to the bottom when all items are visible in the viewport */
            flex-grow: 1;
          "
        ></div>
        <div
          class="spinner"
          [style.visibility]="fetching() ? 'visible' : 'hidden'"
        >
          <span class="loader"></span>
        </div>
        <div
          virtuaVirtualizer
          [data]="items()"
          [shift]="isPrepend()"
          [startMargin]="spinnerHeight"
          [getKey]="getKey"
          (scrolled)="onScroll($event)"
        >
          <ng-template let-item>
            @if (item.me === true) {
              <div
                style="border: solid 1px #ccc; background: lightyellow; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-left: 160px;"
              >
                {{ item.value }}
              </div>
            } @else {
              <div
                style="border: solid 1px #ccc; background: #fff; padding: 10px; border-radius: 8px; white-space: pre-wrap; margin: 10px; margin-right: 160px;"
              >
                {{ item.value }}
              </div>
            }
          </ng-template>
        </div>
      </div>
      <form
        style="display: flex; flex-direction: column; margin: 10px;"
        (submit)="onSubmit($event)"
      >
        <textarea
          style="flex: 1;"
          rows="6"
          [value]="value()"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
        ></textarea>
        <div
          style="display: flex; flex-direction: row; gap: 8px; justify-content: flex-end;"
        >
          <button type="submit" [disabled]="!value().length">submit</button>
        </div>
      </form>
    </div>
  `,styles:[g]})],r,u=[],f;var p=class{static{f=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;v(null,r={value:f},e,{kind:`class`,name:f.name,metadata:t},null,u),p=f=r.value,t&&Object.defineProperty(f,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}ref=i(d);items=t(Array.from({length:100},()=>x()));value=t(`Hello world!`);isPrepend=t(!1);shouldStickToBottom=t(!0);fetching=t(!1);spinnerHeight=48;getKey=e=>e.id;constructor(){n(()=>{this.items(),c(()=>this.isPrepend.set(!1))}),n(()=>{let e=this.items().length-1,t=this.shouldStickToBottom();c(()=>{t&&this.ref()?.scrollToIndex(e,{align:`end`})})});let e=null,t=()=>{e=setTimeout(()=>{this.items.set([...this.items(),x()]),t()},5e3)};t(),a(o).onDestroy(()=>{e&&clearTimeout(e)})}async onScroll(e){let t=this.ref();t&&(this.shouldStickToBottom.set(e-this.spinnerHeight-t.scrollSize+t.viewportSize>=-1.5),e<this.spinnerHeight+100&&!this.fetching()&&(this.fetching.set(!0),await new Promise(e=>setTimeout(e,1e3)),this.isPrepend.set(!0),this.items.set([...Array.from({length:100},()=>x()),...this.items()]),this.fetching.set(!1)))}onInput(e){this.value.set(e.currentTarget.value)}onSubmit(e){e.preventDefault(),e.stopPropagation(),this.submit()}onKeyDown(e){e.code===`Enter`&&(e.ctrlKey||e.metaKey)&&(this.submit(),e.preventDefault())}submit(){this.value().length&&(this.shouldStickToBottom.set(!0),this.items.set([...this.items(),x({value:this.value(),me:!0})]),this.value.set(``))}static ctorParameters=()=>[];static propDecorators={ref:[{type:s,args:[d,{isSignal:!0}]}]};static{y(f,u)}};return f})()})))()}var w,T,E;function D(){return(D=e((()=>{f(),C(),w={component:p},T={render:()=>({template:`<story-chat></story-chat>`,moduleMetadata:{imports:[S]}})},E=[`Chat`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-chat></story-chat>\`,
    moduleMetadata: {
      imports: [ChatDemo]
    }
  })
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Chat,E as __namedExportsOrder,w as default};