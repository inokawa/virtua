import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,i as p,kt as m,l as h,m as g,mt as _,q as ee,r as te,s as v,v as y,w as b,x,y as ne}from"./core-CmmIue0h.js";import{o as S}from"./_browser-chunk-Bok7U6mG.js";import{n as C}from"./_common_module-chunk-ifu5EeYi.js";import{C as re,S as w,_ as T,d as ie,f as ae,g as oe,h as E,i as se,l as ce,m as le,n as ue,p as de,r as fe,t as pe,v as me,x as D}from"./scroll-to-DkATwj9J.js";import{n as O,t as he}from"./en-DltMjSLJ.js";var k,A,j,M,N,P;function F(){return(F=e((()=>{l(),S(),re(),ie(),me(),le(),se(),k=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},A=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},j=(()=>{let e=[n({selector:`div[virtuaGridCell]`,host:{"[style]":`state().$style`,"[attr.role]":`state().$role`,"[attr.aria-colindex]":`state().$col + 1`,"[attr.aria-rowspan]":`state().$rowSpan`,"[attr.aria-colspan]":`state().$colSpan`,"[attr.aria-sort]":`state().$sort`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;k(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}state=u.required();resizer=u.required();constructor(){let e=m(b).nativeElement,t=d(()=>this.state().$measureRow),n=d(()=>this.state().$measureCol),r;c({read:()=>{let i=t(),a=n();r&&r(),r=i==null&&a==null?void 0:y(this.resizer)(e,i,a)}}),m(_).onDestroy(()=>{r&&r()})}static ctorParameters=()=>[];static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{A(a,i)}};return a})(),M=(()=>{let e=[x({selector:`div[virtuaGridRow]`,changeDetection:s.OnPush,imports:[j,C],host:{role:`row`,"[attr.aria-rowindex]":`state().$row + 1`,"[style]":`state().$style`},template:`
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
  `})],t,n=[],i;var a=class{static{i=this}static{let r=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;k(null,t={value:i},e,{kind:`class`,name:i.name,metadata:r},null,n),a=i=t.value,r&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})}state=u.required();template=u.required();row=u.required();cols=u.required();resizer=u.required();colItem(e){return T(this.cols(),e)}static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],template:[{type:r,args:[{isSignal:!0,alias:`template`,required:!0,transform:void 0}]}],row:[{type:r,args:[{isSignal:!0,alias:`row`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{A(i,n)}};return i})(),N=(()=>{let e=[x({selector:`div[virtuaGridRowGroup]`,changeDetection:s.OnPush,imports:[M],host:{role:`rowgroup`,"[style]":`state().$style`},template:`
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
  `})],t,n=[],i;var a=class{static{i=this}static{let r=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;k(null,t={value:i},e,{kind:`class`,name:i.name,metadata:r},null,n),a=i=t.value,r&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:r})}state=u.required();template=u.required();rows=u.required();cols=u.required();resizer=u.required();rowItem(e){return T(this.rows(),e)}static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],template:[{type:r,args:[{isSignal:!0,alias:`template`,required:!0,transform:void 0}]}],rows:[{type:r,args:[{isSignal:!0,alias:`rows`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{A(i,n)}};return i})(),P=(()=>{let e=[x({selector:`virtua-vgrid`,changeDetection:s.OnPush,imports:[N,M],host:{role:`table`,"[attr.aria-rowcount]":`ariaRowCount ?? rowCount()`,"[attr.aria-colcount]":`ariaColCount ?? colCount()`},template:`
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
  `})],n,l=[],S;var C=class{static{S=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;k(null,n={value:S},e,{kind:`class`,name:S.name,metadata:t},null,l),C=S=n.value,t&&Object.defineProperty(S,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}rows=u.required();cols=u.required();rowHeight=u.required();colWidth=u.required();headerRows=u();sectionRows=u();footerRows=u();headerCols=u();footerCols=u();spans=u();keepMounted=u();bufferSize=u();gap=u(0);ariaSort=u();verticalScrolled=g();horizontalScrolled=g();scrollEnded=g();template=h.required(o);container=f.required(`container`);_rowStore;_colStore;_rowLayout;_colLayout;driver;_element=m(b).nativeElement;_appRef=m(ne);_stateVersion=t(void 0);ariaRowCount=m(new p(`aria-rowcount`),{optional:!0});ariaColCount=m(new p(`aria-colcount`),{optional:!0});rowCount=d(()=>this._stateVersion()&&this._rowStore.$getItemsLength());colCount=d(()=>this._stateVersion()&&this._colStore.$getItemsLength());_rowSizes=d(()=>this._rowLayout.$getSizes(this.rows(),this.rowHeight()));_colSizes=d(()=>this._colLayout.$getSizes(this.cols(),this.colWidth()));_spanIndex=d(()=>de(this.spans()));plan=d(()=>(this._stateVersion(),ae(this._rowLayout,this._colLayout,this._rowStore.$getRange(this.bufferSize()),this._colStore.$getRange(this.bufferSize()),this._spanIndex(),this.sectionRows(),this.keepMounted(),this.ariaSort())));rowItem(e){return T(this.rows(),e)}containerStyle=d(()=>{this._stateVersion();let{$rowTemplate:e,$colTemplate:t}=this.plan(),n=this._rowStore.$getItemOffset(0),r=this._colStore.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:this.gap()+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:w(this._rowStore)-n+`px`,"pointer-events":this._rowStore.$isScrolling()||this._colStore.$isScrolling()?`none`:void 0}});constructor(){i(()=>{let e=this.rows(),t=this.cols(),n=this.headerRows(),r=this.footerRows(),i=this.headerCols(),a=this.footerCols();if(!this._rowStore)return;let o=this._rowSizes(),s=this._colSizes();y(()=>{E(this._rowStore,this._rowLayout,e,o,n,r),E(this._colStore,this._colLayout,t,s,i,a)})}),ee({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),m(_).onDestroy(()=>{this._rowStore?.$dispose(),this._colStore?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this.gap(),n=this._rowLayout=oe(this.rows(),this.rowHeight(),t),r=this._colLayout=oe(this.cols(),this.colWidth(),t),i=this._rowStore=D(n),a=this._colStore=D(r);this.driver=ce(i,a);let o=e=>{this._stateVersion.set(i.$getStateVersion()+a.$getStateVersion()),e&&this._appRef.tick()};i.$subscribe(1,o),a.$subscribe(1,o);let s=!1;i.$subscribe(4,()=>{s=!0,this.verticalScrolled.emit(i.$getScrollOffset())}),a.$subscribe(4,()=>{s=!0,this.horizontalScrolled.emit(a.$getScrollOffset())});let c=()=>{s&&!i.$isScrolling()&&!a.$isScrolling()&&(s=!1,this.scrollEnded.emit())};i.$subscribe(8,c),a.$subscribe(8,c),o()}get verticalScrollOffset(){return this._rowStore.$getScrollOffset()}get horizontalScrollOffset(){return this._colStore.$getScrollOffset()}get scrollHeight(){return w(this._rowStore)}get scrollWidth(){return w(this._colStore)}get viewportHeight(){return this._rowStore.$getViewportSize()}get viewportWidth(){return this._colStore.$getViewportSize()}findRowIndex(e){return this._rowStore.$findItemIndex(e)}findColIndex(e){return this._colStore.$findItemIndex(e)}getRowOffset(e){return this._rowStore.$getItemOffset(e)}getColOffset(e){return this._colStore.$getItemOffset(e)}getRowSize(e){return this._rowStore.$getItemSize(e)}getColSize(e){return this._colStore.$getItemSize(e)}scrollToIndex(e){fe(this.driver,this._rowStore,this._colStore,this._rowLayout,this._colLayout,this.sectionRows(),e)}scrollTo({vertical:e,horizontal:t}){ue(this.driver,e,t)}scrollBy({vertical:e,horizontal:t}){pe(this.driver,this._rowStore,this._colStore,e,t)}static ctorParameters=()=>[];static propDecorators={rows:[{type:r,args:[{isSignal:!0,alias:`rows`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],rowHeight:[{type:r,args:[{isSignal:!0,alias:`rowHeight`,required:!0,transform:void 0}]}],colWidth:[{type:r,args:[{isSignal:!0,alias:`colWidth`,required:!0,transform:void 0}]}],headerRows:[{type:r,args:[{isSignal:!0,alias:`headerRows`,required:!1,transform:void 0}]}],sectionRows:[{type:r,args:[{isSignal:!0,alias:`sectionRows`,required:!1,transform:void 0}]}],footerRows:[{type:r,args:[{isSignal:!0,alias:`footerRows`,required:!1,transform:void 0}]}],headerCols:[{type:r,args:[{isSignal:!0,alias:`headerCols`,required:!1,transform:void 0}]}],footerCols:[{type:r,args:[{isSignal:!0,alias:`footerCols`,required:!1,transform:void 0}]}],spans:[{type:r,args:[{isSignal:!0,alias:`spans`,required:!1,transform:void 0}]}],keepMounted:[{type:r,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],ariaSort:[{type:r,args:[{isSignal:!0,alias:`ariaSort`,required:!1,transform:void 0}]}],verticalScrolled:[{type:a,args:[`verticalScrolled`]}],horizontalScrolled:[{type:a,args:[`horizontalScrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],template:[{type:te,args:[o,{isSignal:!0}]}],container:[{type:v,args:[`container`,{isSignal:!0}]}]};static{A(S,l)}};return S})()})))()}var I,L,R;function z(){return(z=e((()=>{l(),F(),I=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},L=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},R=(()=>{let e=[x({selector:`story-vgrid-default`,imports:[P],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),L(r,n)}};return r})()})))()}var B,ge,V,H,U,W,G;function K(){return(K=e((()=>{l(),F(),B=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},ge=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},V=1e3,H=500,U={header:1,footer:1},W={header:2,footer:1},G=(()=>{let e=[x({selector:`story-vgrid-pinned`,imports:[P],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;B(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),ge(r,n)}rows=V;cols=H;pinnedRows=U;pinnedCols=W;isPinnedRow(e){return e<U.header||e>=V-U.footer}isPinnedCol(e){return e<W.header||e>=H-W.footer}};return r})()})))()}var q,J,Y,X,_e;function ve(){return(ve=e((()=>{l(),he(),F(),q=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},J=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},Y=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],X=Array.from({length:1e3}).map((e,t)=>({id:t,username:O.person.fullName(),email:O.internet.email(),company:O.company.name(),domain:O.internet.domainName()})),_e=(()=>{let e=[x({selector:`story-vgrid-columns`,imports:[P],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;q(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),J(r,n)}columns=Y;rows=[null,...X]};return r})()})))()}var ye,be,Z,xe;function Q(){return(Q=e((()=>{l(),F(),ye=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},be=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},Z=1e3,xe=(()=>{let e=[x({selector:`story-vgrid-scroll-to`,imports:[P],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;ye(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}grid=f.required(P);length=Z;rowIndex=t(567);colIndex=t(567);vertical=t(1e3);horizontal=t(1e3);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.colIndex.set(Math.floor(Z*Math.random())),this.rowIndex.set(Math.floor(Z*Math.random()))}static propDecorators={grid:[{type:v,args:[P,{isSignal:!0}]}]};static{be(i,r)}};return i})()})))()}var Se,Ce,we,Te,Ee,De;function $(){return($=e((()=>{F(),z(),K(),ve(),Q(),Se={component:P},Ce={render:()=>({template:`<story-vgrid-default></story-vgrid-default>`,moduleMetadata:{imports:[R]}})},we={render:()=>({template:`<story-vgrid-pinned></story-vgrid-pinned>`,moduleMetadata:{imports:[G]}})},Te={render:()=>({template:`<story-vgrid-columns></story-vgrid-columns>`,moduleMetadata:{imports:[_e]}})},Ee={render:()=>({template:`<story-vgrid-scroll-to></story-vgrid-scroll-to>`,moduleMetadata:{imports:[xe]}})},De=[`Default`,`Pinned`,`Columns`,`ScrollTo`]})))()}$();export{Te as Columns,Ce as Default,we as Pinned,Ee as ScrollTo,De as __namedExportsOrder,Se as default};