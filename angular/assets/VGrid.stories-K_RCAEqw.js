import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,i as p,kt as m,l as h,m as g,mt as _,q as v,r as y,s as b,v as x,w as S,x as C,y as w}from"./core-CTVeZ5wR.js";import{o as T}from"./_browser-chunk-CXUFIA7o.js";import{n as E}from"./_common_module-chunk-BF7b15S4.js";import{C as ee,D,E as te,O as ne,S as re,T as O,_ as ie,b as ae,d as oe,f as se,g as ce,h as le,i as ue,l as de,m as fe,n as pe,p as me,r as he,t as ge,v as _e,w as ve,x as k,y as A}from"./scroll-to-1CNT6Wgj.js";import{n as j,t as ye}from"./en-DltMjSLJ.js";var M,N,P;function F(){return(F=e((()=>{ie(),ve(),M=e=>typeof e==`number`?e:e.length,N=(e,t)=>typeof e==`number`?t:e[t],P=(e,t,n=0)=>{let r=M(e),i=typeof t==`number`,a=t===`auto`,o=(i?t:40)+n,s=-1,c=0,l=a,u=0,d=0,f=null,p=[],m=[],h=[],g=e=>a||!!h[e],_=()=>{p.length||le(p,r)},v=e=>{let t=p[e];return t===-1?o:t},y=e=>{if(!r)return 0;if(!p.length)return e*o;if(s>=e)return m[e];s<0&&(m[0]=0,s=0);let t=s,n=m[t];for(;t<e;)n+=v(t),m[++t]=n;return s=e,n},b=(e,t)=>{p[e]=t,s=D(e,s)},x=e=>p.length?ce(y,r,e):o?re(ee(e/o),0,r-1):0,S=()=>D(u,r),C=()=>O(r-d,S()),w=e=>(p.length?v(e):o)-n;return{$getRange:(e,t)=>{let i=y(S()),a=y(r)-y(C()),o=e+(i?i-n:0);return[x(o),x(O(o,t-(a?a-n:0)))]},$findIndex:x,$getItemOffset:y,$getItemSize:w,$setItemSizes:(e,t)=>{for(let[t,r]of e)g(t)&&(_(),c+=p[t]===-1?r:r-w(t),b(t,r+n));if(l&&t&&c>t){let e=[];p.forEach(t=>{t!==-1&&t&&e.push(t)}),s=-1,ne(e);let t=e.length,n=t/2|0;o=t%2==0?(e[n-1]+e[n])/2:e[n],l=!1}},$isSizeEqual:(e,t=-1)=>{let r=p.length?p[e]:-1;return t===-1?g(e)&&r===-1:r===t+n},$getTotalSize:()=>r?y(r)-n:0,$getLength:()=>r,$setLength:e=>{let t=e-r;s=D(e-1,s),r=e,p.length&&(t>0?le(p,t):p.splice(t))},$isEstimating:()=>l,$isMeasurable:g,$setPinned:(e=0,t=0)=>{u=e,d=t},$getPinnedStart:S,$getTrailStart:C,$getSizes:(e,t)=>typeof t==`number`?i?t:null:i||a||t===`auto`?null:e.map(e=>e==null?null:e[t]),$relayout:e=>{if(e==null)return!1;if(typeof e==`number`){let t=e+n;return t!==o&&(o=t,!0)}if(e===f&&r===h.length)return!1;f=e,h.length=r,_();let t=!1;for(let i=0;i<r;i++){let r=e[i],a=typeof r!=`number`;if(!a||!h[i]){h[i]=a;let e=a?-1:r+n;p[i]!==e&&(b(i,e),t=!0)}}return t}}}})))()}var I,L,R,z,B,V;function H(){return(H=e((()=>{l(),T(),ae(),ve(),oe(),F(),fe(),ue(),I=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},L=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},R=(()=>{let e=[n({selector:`div[virtuaGridCell]`,host:{"[style]":`state().$style`,"[attr.role]":`state().$role`,"[attr.aria-colindex]":`state().$col + 1`,"[attr.aria-rowspan]":`state().$rowSpan`,"[attr.aria-colspan]":`state().$colSpan`,"[attr.aria-sort]":`state().$sort`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}state=u.required();resizer=u.required();constructor(){let e=m(S).nativeElement,t=d(()=>this.state().$measureRow),n=d(()=>this.state().$measureCol),r;c({read:()=>{let i=t(),a=n();r&&r(),r=i==null&&a==null?void 0:x(this.resizer)(e,i,a)}}),m(_).onDestroy(()=>{r&&r()})}static ctorParameters=()=>[];static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{L(a,i)}};return a})(),z=(()=>{let e=[C({selector:`div[virtuaGridRow]`,changeDetection:s.OnPush,imports:[R,E],host:{role:`row`,"[attr.aria-rowindex]":`state().$row + 1`,"[style]":`state().$style`},template:`
    @for (cell of state().$cells; track cell.$col) {
      <div virtuaGridCell [state]="cell" [resizer]="resizer()">
        <ng-container
          [ngTemplateOutlet]="template()"
          [ngTemplateOutletContext]="{
            $implicit: row(),
            row: row(),
            col: colItem(cell.$col),
            cell: { rowIndex: state().$row, colIndex: cell.$col },
          }"
        />
      </div>
    }
  `})],t,n=[],i;var a=class{static{i=this}static{let r=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:i},e,{kind:`class`,name:i.name,metadata:r},null,n),a=i=t.value,r&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})}state=u.required();template=u.required();row=u.required();cols=u.required();resizer=u.required();colItem(e){return N(this.cols(),e)}static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],template:[{type:r,args:[{isSignal:!0,alias:`template`,required:!0,transform:void 0}]}],row:[{type:r,args:[{isSignal:!0,alias:`row`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{L(i,n)}};return i})(),B=(()=>{let e=[C({selector:`div[virtuaGridRowGroup]`,changeDetection:s.OnPush,imports:[z],host:{role:`rowgroup`,"[style]":`state().$style`},template:`
    @for (row of state().$rows; track row.$row) {
      <div
        virtuaGridRow
        [state]="row"
        [template]="template()"
        [row]="rowItem(row.$row)"
        [cols]="cols()"
        [resizer]="resizer()"
      ></div>
    }
  `})],t,n=[],i;var a=class{static{i=this}static{let r=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:i},e,{kind:`class`,name:i.name,metadata:r},null,n),a=i=t.value,r&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})}state=u.required();template=u.required();rows=u.required();cols=u.required();resizer=u.required();rowItem(e){return N(this.rows(),e)}static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],template:[{type:r,args:[{isSignal:!0,alias:`template`,required:!0,transform:void 0}]}],rows:[{type:r,args:[{isSignal:!0,alias:`rows`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{L(i,n)}};return i})(),V=(()=>{let e=[C({selector:`virtua-vgrid`,changeDetection:s.OnPush,imports:[B,z],host:{role:`table`,"[attr.aria-rowcount]":`ariaRowCount ?? rowCount()`,"[attr.aria-colcount]":`ariaColCount ?? colCount()`},template:`
    <div #container [style]="containerStyle()">
      @for (
        state of plan().$groups;
        track "$rows" in state ? state.$key : state.$row
      ) {
        @if ("$rows" in state) {
          <div
            virtuaGridRowGroup
            [state]="state"
            [template]="template()"
            [rows]="rows()"
            [cols]="cols()"
            [resizer]="driver.$observeItem"
          ></div>
        } @else {
          <div
            virtuaGridRow
            [state]="state"
            [template]="template()"
            [row]="rowItem(state.$row)"
            [cols]="cols()"
            [resizer]="driver.$observeItem"
          ></div>
        }
      }
    </div>
  `})],n,l=[],T;var E=class{static{T=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,n={value:T},e,{kind:`class`,name:T.name,metadata:t},null,l),E=T=n.value,t&&Object.defineProperty(T,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}rows=u.required();cols=u.required();rowHeight=u.required();colWidth=u.required();headerRows=u();sectionRows=u();footerRows=u();headerCols=u();footerCols=u();spans=u();keepMounted=u();bufferSize=u();gap=u(0);ariaSort=u();verticalScrolled=g();horizontalScrolled=g();scrollEnded=g();resized=g();template=h.required(o);container=f.required(`container`);_rowStore;_colStore;_rowLayout;_colLayout;driver;_element=m(S).nativeElement;_appRef=m(w);_stateVersion=t(void 0);ariaRowCount=m(new p(`aria-rowcount`),{optional:!0});ariaColCount=m(new p(`aria-colcount`),{optional:!0});rowCount=d(()=>this._stateVersion()&&this._rowLayout.$getLength());colCount=d(()=>this._stateVersion()&&this._colLayout.$getLength());_rowSizes=d(()=>this._rowLayout.$getSizes(this.rows(),this.rowHeight()));_colSizes=d(()=>this._colLayout.$getSizes(this.cols(),this.colWidth()));_spanIndex=d(()=>me(this.spans()));plan=d(()=>(this._stateVersion(),se(this._rowLayout,this._colLayout,this._rowStore.$getRange(this.bufferSize()),this._colStore.$getRange(this.bufferSize()),this._spanIndex(),this.sectionRows(),this.keepMounted(),this.ariaSort())));rowItem(e){return N(this.rows(),e)}containerStyle=d(()=>{this._stateVersion();let{$rowTemplate:e,$colTemplate:t}=this.plan(),n=this._rowStore.$getItemOffset(0),r=this._colStore.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:this.gap()+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:A(this._rowStore)-n+`px`,"pointer-events":this._rowStore.$isScrolling()||this._colStore.$isScrolling()?`none`:void 0}});constructor(){i(()=>{let e=this.rows(),t=this.cols(),n=this.headerRows(),r=this.footerRows(),i=this.headerCols(),a=this.footerCols();if(!this._rowStore)return;let o=this._rowSizes(),s=this._colSizes();x(()=>{this._rowLayout.$setPinned(n,r),this._colLayout.$setPinned(i,a);let c=M(e),l=M(t);this._rowStore.$update(5,c),this._colStore.$update(5,l),k(this._rowStore,this._rowLayout,o),k(this._colStore,this._colLayout,s)})}),v({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),m(_).onDestroy(()=>{this._rowStore?.$dispose(),this._colStore?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this.gap(),n=this._rowLayout=P(this.rows(),this.rowHeight(),t),r=this._colLayout=P(this.cols(),this.colWidth(),t),i=this._rowStore=_e(n),a=this._colStore=_e(r);this.driver=de(i,a,n,r);let o=e=>{this._stateVersion.set(i.$getStateVersion()+a.$getStateVersion()),e&&this._appRef.tick()};i.$subscribe(1,o),a.$subscribe(1,o);let s=!1;i.$subscribe(4,()=>{s=!0,this.verticalScrolled.emit(i.$getScrollOffset())}),a.$subscribe(4,()=>{s=!0,this.horizontalScrolled.emit(a.$getScrollOffset())});let c=()=>{s&&!i.$isScrolling()&&!a.$isScrolling()&&(s=!1,this.scrollEnded.emit())};i.$subscribe(8,c),a.$subscribe(8,c);let l,u=()=>{l||(l=!0,te(()=>{l=!1,this.resized.emit()}))};i.$subscribe(2,u),a.$subscribe(2,u),o()}get verticalScrollOffset(){return this._rowStore.$getScrollOffset()}get horizontalScrollOffset(){return this._colStore.$getScrollOffset()}get scrollHeight(){return A(this._rowStore)}get scrollWidth(){return A(this._colStore)}get viewportHeight(){return this._rowStore.$getViewportSize()}get viewportWidth(){return this._colStore.$getViewportSize()}findRowIndex(e){return this._rowLayout.$findIndex(e)}findColIndex(e){return this._colLayout.$findIndex(e)}getRowOffset(e){return this._rowStore.$getItemOffset(e)}getColOffset(e){return this._colStore.$getItemOffset(e)}getRowSize(e){return this._rowLayout.$getItemSize(e)}getColSize(e){return this._colLayout.$getItemSize(e)}scrollToIndex(e){he(this.driver,this._rowStore,this._colStore,this._rowLayout,this._colLayout,this.sectionRows(),e)}scrollTo({vertical:e,horizontal:t}){pe(this.driver,e,t)}scrollBy({vertical:e,horizontal:t}){ge(this.driver,this._rowStore,this._colStore,e,t)}static ctorParameters=()=>[];static propDecorators={rows:[{type:r,args:[{isSignal:!0,alias:`rows`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],rowHeight:[{type:r,args:[{isSignal:!0,alias:`rowHeight`,required:!0,transform:void 0}]}],colWidth:[{type:r,args:[{isSignal:!0,alias:`colWidth`,required:!0,transform:void 0}]}],headerRows:[{type:r,args:[{isSignal:!0,alias:`headerRows`,required:!1,transform:void 0}]}],sectionRows:[{type:r,args:[{isSignal:!0,alias:`sectionRows`,required:!1,transform:void 0}]}],footerRows:[{type:r,args:[{isSignal:!0,alias:`footerRows`,required:!1,transform:void 0}]}],headerCols:[{type:r,args:[{isSignal:!0,alias:`headerCols`,required:!1,transform:void 0}]}],footerCols:[{type:r,args:[{isSignal:!0,alias:`footerCols`,required:!1,transform:void 0}]}],spans:[{type:r,args:[{isSignal:!0,alias:`spans`,required:!1,transform:void 0}]}],keepMounted:[{type:r,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],ariaSort:[{type:r,args:[{isSignal:!0,alias:`ariaSort`,required:!1,transform:void 0}]}],verticalScrolled:[{type:a,args:[`verticalScrolled`]}],horizontalScrolled:[{type:a,args:[`horizontalScrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],resized:[{type:a,args:[`resized`]}],template:[{type:y,args:[o,{isSignal:!0}]}],container:[{type:b,args:[`container`,{isSignal:!0}]}]};static{L(T,l)}};return T})()})))()}var U,be,xe;function Se(){return(Se=e((()=>{l(),H(),U=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},be=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},xe=(()=>{let e=[C({selector:`story-vgrid-default`,imports:[V],template:`
    <virtua-vgrid
      [rows]="1000"
      [rowHeight]="40"
      [cols]="500"
      [colWidth]="100"
      style="height: 100vh; box-sizing: border-box; border: solid 1px gray; background: white;"
    >
      <ng-template let-rowIndex="row" let-colIndex="col">
        <div
          style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
        >
          {{ rowIndex }} / {{ colIndex }}
        </div>
      </ng-template>
    </virtua-vgrid>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;U(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),be(r,n)}};return r})()})))()}var Ce,we,W,G,K,q,Te;function Ee(){return(Ee=e((()=>{l(),H(),Ce=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},we=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},W=1e3,G=500,K={header:1,footer:1},q={header:2,footer:1},Te=(()=>{let e=[C({selector:`story-vgrid-pinned`,imports:[V],template:`
    <virtua-vgrid
      [rows]="rows"
      [rowHeight]="40"
      [cols]="cols"
      [colWidth]="100"
      [headerRows]="pinnedRows.header"
      [footerRows]="pinnedRows.footer"
      [headerCols]="pinnedCols.header"
      [footerCols]="pinnedCols.footer"
      style="height: 100vh; box-sizing: border-box; border: solid 1px gray; background: white;"
    >
      <ng-template let-rowIndex="row" let-colIndex="col">
        <div
          style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
          [style.background]="
            isPinnedRow(rowIndex)
              ? 'darkgray'
              : isPinnedCol(colIndex)
                ? 'lightgray'
                : null
          "
          [style.color]="isPinnedRow(rowIndex) ? 'white' : null"
        >
          {{ rowIndex }} / {{ colIndex }}
        </div>
      </ng-template>
    </virtua-vgrid>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;Ce(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),we(r,n)}rows=W;cols=G;pinnedRows=K;pinnedCols=q;isPinnedRow(e){return e<K.header||e>=W-K.footer}isPinnedCol(e){return e<q.header||e>=G-q.footer}};return r})()})))()}var De,Oe,ke,Ae,je;function Me(){return(Me=e((()=>{l(),ye(),H(),De=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},Oe=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},ke=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],Ae=Array.from({length:1e3}).map((e,t)=>({id:t,username:j.person.fullName(),email:j.internet.email(),company:j.company.name(),domain:j.internet.domainName()})),je=(()=>{let e=[C({selector:`story-vgrid-columns`,imports:[V],template:`
    <virtua-vgrid
      [rows]="rows"
      [rowHeight]="30"
      [cols]="columns"
      colWidth="width"
      [headerRows]="1"
      style="height: 100vh; box-sizing: border-box; border: solid 1px black; background: white;"
    >
      <ng-template let-row="row" let-col="col">
        <div
          style="padding: 4px; border-right: solid 1px black; border-bottom: solid 1px black; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
          [style.background]="row === null ? 'burlywood' : null"
        >
          {{ row === null ? col.key : row[col.key] }}
        </div>
      </ng-template>
    </virtua-vgrid>
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;De(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Oe(r,n)}columns=ke;rows=[null,...Ae]};return r})()})))()}var J,Ne,Y,Pe;function Fe(){return(Fe=e((()=>{l(),H(),J=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},Ne=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},Y=1e3,Pe=(()=>{let e=[C({selector:`story-vgrid-scroll-to`,imports:[V],template:`
    <div style="height: 100vh; display: flex; flex-direction: column;">
      <div>
        <label>
          col
          <input
            type="number"
            [value]="colIndex()"
            (input)="colIndex.set(toNumber($event))"
          />
        </label>
        <label>
          row
          <input
            type="number"
            [value]="rowIndex()"
            (input)="rowIndex.set(toNumber($event))"
          />
        </label>
        <button
          (click)="
            grid().scrollToIndex({
              rowIndex: rowIndex(),
              colIndex: colIndex(),
            })
          "
        >
          scroll to index
        </button>
        <button (click)="randomize()">randomize</button>
      </div>
      <div>
        <label>
          x
          <input
            type="number"
            [value]="horizontal()"
            (input)="horizontal.set(toNumber($event))"
          />
        </label>
        <label>
          y
          <input
            type="number"
            [value]="vertical()"
            (input)="vertical.set(toNumber($event))"
          />
        </label>
        <button
          (click)="
            grid().scrollTo({ vertical: vertical(), horizontal: horizontal() })
          "
        >
          scroll to offset
        </button>
        <button
          (click)="
            grid().scrollBy({ vertical: vertical(), horizontal: horizontal() })
          "
        >
          scroll by offset
        </button>
      </div>
      <virtua-vgrid
        [rows]="length"
        [rowHeight]="80"
        [cols]="length"
        [colWidth]="160"
        style="flex: 1; box-sizing: border-box; border: solid 1px gray; background: white;"
      >
        <ng-template let-rowIndex="row" let-colIndex="col">
          <div
            style="padding: 4px; border-right: solid 1px gray; border-bottom: solid 1px gray;"
          >
            {{ rowIndex }} / {{ colIndex }}
          </div>
        </ng-template>
      </virtua-vgrid>
    </div>
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;J(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}grid=f.required(V);length=Y;rowIndex=t(567);colIndex=t(567);vertical=t(1e3);horizontal=t(1e3);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.colIndex.set(Math.floor(Y*Math.random())),this.rowIndex.set(Math.floor(Y*Math.random()))}static propDecorators={grid:[{type:b,args:[V,{isSignal:!0}]}]};static{Ne(i,r)}};return i})()})))()}var Ie,X,Z,Q,$,Le;function Re(){return(Re=e((()=>{H(),Se(),Ee(),Me(),Fe(),Ie={component:V},X={render:()=>({template:`<story-vgrid-default></story-vgrid-default>`,moduleMetadata:{imports:[xe]}})},Z={render:()=>({template:`<story-vgrid-pinned></story-vgrid-pinned>`,moduleMetadata:{imports:[Te]}})},Q={render:()=>({template:`<story-vgrid-columns></story-vgrid-columns>`,moduleMetadata:{imports:[je]}})},$={render:()=>({template:`<story-vgrid-scroll-to></story-vgrid-scroll-to>`,moduleMetadata:{imports:[Pe]}})},Le=[`Default`,`Pinned`,`Columns`,`ScrollTo`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-default></story-vgrid-default>\`,
    moduleMetadata: {
      imports: [VGridDefaultDemo]
    }
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-pinned></story-vgrid-pinned>\`,
    moduleMetadata: {
      imports: [VGridPinnedDemo]
    }
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-columns></story-vgrid-columns>\`,
    moduleMetadata: {
      imports: [VGridColumnsDemo]
    }
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-scroll-to></story-vgrid-scroll-to>\`,
    moduleMetadata: {
      imports: [VGridScrollToDemo]
    }
  })
}`,...$.parameters?.docs?.source}}}})))()}Re();export{Q as Columns,X as Default,Z as Pinned,$ as ScrollTo,Le as __namedExportsOrder,Ie as default};