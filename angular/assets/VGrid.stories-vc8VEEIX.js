import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{At as t,C as n,D as r,Et as i,M as a,V as o,b as s,c,d as l,f as u,g as d,h as f,i as p,kt as m,l as h,m as g,mt as _,q as v,r as y,s as b,v as x,w as S,x as C,y as w}from"./core-CTVeZ5wR.js";import{o as T}from"./_browser-chunk-CXUFIA7o.js";import{n as E}from"./_common_module-chunk-BF7b15S4.js";import{C as ee,E as te,S as ne,T as D,_ as re,b as ie,d as ae,f as oe,g as se,h as O,i as ce,l as le,m as ue,n as de,p as fe,r as pe,t as me,v as he,w as k,x as ge,y as A}from"./scroll-to-ClS4L915.js";import{n as j,t as _e}from"./en-DltMjSLJ.js";var M,N,P;function F(){return(F=e((()=>{re(),ee(),M=e=>typeof e==`number`?e:e.length,N=(e,t)=>typeof e==`number`?t:e[t],P=(e,t,n=0)=>{let r=M(e),i=typeof t==`number`,a=t===`auto`,o=(i?t:40)+n,s=-1,c=0,l=a,u=0,d=0,f=null,p=[],m=[],h=[],g=e=>a||!!h[e],_=()=>{p.length||O(p,r)},v=e=>{let t=p[e];return t===-1?o:t},y=e=>{if(!r)return 0;if(!p.length)return e*o;if(s>=e)return m[e];s<0&&(m[0]=0,s=0);let t=s,n=m[t];for(;t<e;)n+=v(t),m[++t]=n;return s=e,n},b=(e,t)=>{p[e]=t,s=D(e,s)},x=e=>p.length?se(y,r,e):o?ge(ne(e/o),0,r-1):0,S=()=>D(u,r),C=()=>k(r-d,S()),w=e=>(p.length?v(e):o)-n;return{$getRange:(e,t)=>{let i=y(S()),a=y(r)-y(C()),o=e+(i?i-n:0);return[x(o),x(k(o,t-(a?a-n:0)))]},$findIndex:x,$getItemOffset:y,$getItemSize:w,$resize:(e,t,r,i)=>{let a=e.reduce((e,[n,r])=>g(n)&&t(n)?e+(r-w(n)):e,0);for(let[t,r]of e)g(t)&&(_(),c+=p[t]===-1?r:r-w(t),b(t,r+n));if(l&&i&&c>i){let e=0,t=x(r+a),n=[];p.forEach((r,i)=>{r!==-1&&(r&&n.push(r),i<t&&e++)}),s=-1,te(n);let i=n.length,c=i/2|0,u=i%2==0?(n[c-1]+n[c])/2:n[c],d=o;a+=((o=u)-d)*k(t-e,0),l=!1}return a},$isSizeEqual:(e,t=-1)=>{let r=p.length?p[e]:-1;return t===-1?g(e)&&r===-1:r===t+n},$getTotalSize:()=>r?y(r)-n:0,$getLength:()=>r,$setLength:e=>{let t=e-r;return s=D(e-1,s),r=e,p.length&&(t>0?O(p,t):p.splice(t)),0},$isEstimating:()=>l,$isMeasurable:g,$setPinned:(e=0,t=0)=>{u=e,d=t},$getPinnedStart:S,$getTrailStart:C,$getSizes:(e,t)=>typeof t==`number`?i?t:null:i||a||t===`auto`?null:e.map(e=>e==null?null:e[t]),$relayout:(e,t)=>{if(e==null)return;if(typeof e==`number`){let r=e+n;if(r===o)return;let i=x(t)*(r-o);return o=r,i}if(e===f&&r===h.length)return;f=e,h.length=r,_();let i=x(t),a=y(i),s;for(let t=0;t<r;t++){let r=e[t],i=typeof r!=`number`;if(!i||!h[t]){h[t]=i;let e=i?-1:r+n;p[t]!==e&&(b(t,e),s=!0)}}if(s)return y(i)-a}}}})))()}var I,L,R,z,B,V;function H(){return(H=e((()=>{l(),T(),ie(),ae(),F(),ue(),ce(),I=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},L=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},R=(()=>{let e=[n({selector:`div[virtuaGridCell]`,host:{"[style]":`state().$style`,"[attr.role]":`state().$role`,"[attr.aria-colindex]":`state().$col + 1`,"[attr.aria-rowspan]":`state().$rowSpan`,"[attr.aria-colspan]":`state().$colSpan`,"[attr.aria-sort]":`state().$sort`}})],t,i=[],a;var o=class{static{a=this}static{let n=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,t={value:a},e,{kind:`class`,name:a.name,metadata:n},null,i),o=a=t.value,n&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}state=u.required();resizer=u.required();constructor(){let e=m(S).nativeElement,t=d(()=>this.state().$measureRow),n=d(()=>this.state().$measureCol),r;c({read:()=>{let i=t(),a=n();r&&r(),r=i==null&&a==null?void 0:x(this.resizer)(e,i,a)}}),m(_).onDestroy(()=>{r&&r()})}static ctorParameters=()=>[];static propDecorators={state:[{type:r,args:[{isSignal:!0,alias:`state`,required:!0,transform:void 0}]}],resizer:[{type:r,args:[{isSignal:!0,alias:`resizer`,required:!0,transform:void 0}]}]};static{L(a,i)}};return a})(),z=(()=>{let e=[C({selector:`div[virtuaGridRow]`,changeDetection:s.OnPush,imports:[R,E],host:{role:`row`,"[attr.aria-rowindex]":`state().$row + 1`,"[style]":`state().$style`},template:`
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
  `})],n,l=[],T;var E=class{static{T=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;I(null,n={value:T},e,{kind:`class`,name:T.name,metadata:t},null,l),E=T=n.value,t&&Object.defineProperty(T,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}rows=u.required();cols=u.required();rowHeight=u.required();colWidth=u.required();headerRows=u();sectionRows=u();footerRows=u();headerCols=u();footerCols=u();spans=u();keepMounted=u();bufferSize=u();gap=u(0);ariaSort=u();verticalScrolled=g();horizontalScrolled=g();scrollEnded=g();template=h.required(o);container=f.required(`container`);_rowStore;_colStore;_rowLayout;_colLayout;driver;_element=m(S).nativeElement;_appRef=m(w);_stateVersion=t(void 0);ariaRowCount=m(new p(`aria-rowcount`),{optional:!0});ariaColCount=m(new p(`aria-colcount`),{optional:!0});rowCount=d(()=>this._stateVersion()&&this._rowStore.$getItemsLength());colCount=d(()=>this._stateVersion()&&this._colStore.$getItemsLength());_rowSizes=d(()=>this._rowLayout.$getSizes(this.rows(),this.rowHeight()));_colSizes=d(()=>this._colLayout.$getSizes(this.cols(),this.colWidth()));_spanIndex=d(()=>fe(this.spans()));plan=d(()=>(this._stateVersion(),oe(this._rowLayout,this._colLayout,this._rowStore.$getRange(this.bufferSize()),this._colStore.$getRange(this.bufferSize()),this._spanIndex(),this.sectionRows(),this.keepMounted(),this.ariaSort())));rowItem(e){return N(this.rows(),e)}containerStyle=d(()=>{this._stateVersion();let{$rowTemplate:e,$colTemplate:t}=this.plan(),n=this._rowStore.$getItemOffset(0),r=this._colStore.$getItemOffset(0);return{contain:`size style`,"overflow-anchor":`none`,flex:`none`,display:`grid`,"grid-template-rows":e,"grid-template-columns":t,gap:this.gap()+`px`,"margin-top":n+`px`,"margin-inline-start":r+`px`,height:A(this._rowStore)-n+`px`,"pointer-events":this._rowStore.$isScrolling()||this._colStore.$isScrolling()?`none`:void 0}});constructor(){i(()=>{let e=this.rows(),t=this.cols(),n=this.headerRows(),r=this.footerRows(),i=this.headerCols(),a=this.footerCols();if(!this._rowStore)return;let o=this._rowSizes(),s=this._colSizes();x(()=>{this._rowLayout.$setPinned(n,r),this._colLayout.$setPinned(i,a);let c=M(e),l=M(t);c!==this._rowStore.$getItemsLength()&&this._rowStore.$update(5,[c]),l!==this._colStore.$getItemsLength()&&this._colStore.$update(5,[l]),this._rowStore.$update(9,o),this._colStore.$update(9,s)})}),v({read:()=>{this.driver.$observe(this.container().nativeElement)}}),c({read:()=>{this._stateVersion(),this.driver.$effect()}}),m(_).onDestroy(()=>{this._rowStore?.$dispose(),this._colStore?.$dispose(),this.driver?.$dispose()})}ngOnInit(){let e=this._element;e.setAttribute(`style`,`display:block;overflow:auto;contain:strict;width:100%;height:100%;`+(e.getAttribute(`style`)||``));let t=this.gap(),n=this._rowLayout=P(this.rows(),this.rowHeight(),t),r=this._colLayout=P(this.cols(),this.colWidth(),t),i=this._rowStore=he(n),a=this._colStore=he(r);this.driver=le(i,a);let o=e=>{this._stateVersion.set(i.$getStateVersion()+a.$getStateVersion()),e&&this._appRef.tick()};i.$subscribe(1,o),a.$subscribe(1,o);let s=!1;i.$subscribe(4,()=>{s=!0,this.verticalScrolled.emit(i.$getScrollOffset())}),a.$subscribe(4,()=>{s=!0,this.horizontalScrolled.emit(a.$getScrollOffset())});let c=()=>{s&&!i.$isScrolling()&&!a.$isScrolling()&&(s=!1,this.scrollEnded.emit())};i.$subscribe(8,c),a.$subscribe(8,c),o()}get verticalScrollOffset(){return this._rowStore.$getScrollOffset()}get horizontalScrollOffset(){return this._colStore.$getScrollOffset()}get scrollHeight(){return A(this._rowStore)}get scrollWidth(){return A(this._colStore)}get viewportHeight(){return this._rowStore.$getViewportSize()}get viewportWidth(){return this._colStore.$getViewportSize()}findRowIndex(e){return this._rowStore.$findItemIndex(e)}findColIndex(e){return this._colStore.$findItemIndex(e)}getRowOffset(e){return this._rowStore.$getItemOffset(e)}getColOffset(e){return this._colStore.$getItemOffset(e)}getRowSize(e){return this._rowStore.$getItemSize(e)}getColSize(e){return this._colStore.$getItemSize(e)}scrollToIndex(e){pe(this.driver,this._rowStore,this._colStore,this._rowLayout,this._colLayout,this.sectionRows(),e)}scrollTo({vertical:e,horizontal:t}){de(this.driver,e,t)}scrollBy({vertical:e,horizontal:t}){me(this.driver,this._rowStore,this._colStore,e,t)}static ctorParameters=()=>[];static propDecorators={rows:[{type:r,args:[{isSignal:!0,alias:`rows`,required:!0,transform:void 0}]}],cols:[{type:r,args:[{isSignal:!0,alias:`cols`,required:!0,transform:void 0}]}],rowHeight:[{type:r,args:[{isSignal:!0,alias:`rowHeight`,required:!0,transform:void 0}]}],colWidth:[{type:r,args:[{isSignal:!0,alias:`colWidth`,required:!0,transform:void 0}]}],headerRows:[{type:r,args:[{isSignal:!0,alias:`headerRows`,required:!1,transform:void 0}]}],sectionRows:[{type:r,args:[{isSignal:!0,alias:`sectionRows`,required:!1,transform:void 0}]}],footerRows:[{type:r,args:[{isSignal:!0,alias:`footerRows`,required:!1,transform:void 0}]}],headerCols:[{type:r,args:[{isSignal:!0,alias:`headerCols`,required:!1,transform:void 0}]}],footerCols:[{type:r,args:[{isSignal:!0,alias:`footerCols`,required:!1,transform:void 0}]}],spans:[{type:r,args:[{isSignal:!0,alias:`spans`,required:!1,transform:void 0}]}],keepMounted:[{type:r,args:[{isSignal:!0,alias:`keepMounted`,required:!1,transform:void 0}]}],bufferSize:[{type:r,args:[{isSignal:!0,alias:`bufferSize`,required:!1,transform:void 0}]}],gap:[{type:r,args:[{isSignal:!0,alias:`gap`,required:!1,transform:void 0}]}],ariaSort:[{type:r,args:[{isSignal:!0,alias:`ariaSort`,required:!1,transform:void 0}]}],verticalScrolled:[{type:a,args:[`verticalScrolled`]}],horizontalScrolled:[{type:a,args:[`horizontalScrolled`]}],scrollEnded:[{type:a,args:[`scrollEnded`]}],template:[{type:y,args:[o,{isSignal:!0}]}],container:[{type:b,args:[`container`,{isSignal:!0}]}]};static{L(T,l)}};return T})()})))()}var ve,ye,be;function xe(){return(xe=e((()=>{l(),H(),ve=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},ye=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},be=(()=>{let e=[C({selector:`story-vgrid-default`,imports:[V],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;ve(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),ye(r,n)}};return r})()})))()}var Se,Ce,U,W,G,K,we;function Te(){return(Te=e((()=>{l(),H(),Se=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},Ce=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},U=1e3,W=500,G={header:1,footer:1},K={header:2,footer:1},we=(()=>{let e=[C({selector:`story-vgrid-pinned`,imports:[V],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;Se(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),Ce(r,n)}rows=U;cols=W;pinnedRows=G;pinnedCols=K;isPinnedRow(e){return e<G.header||e>=U-G.footer}isPinnedCol(e){return e<K.header||e>=W-K.footer}};return r})()})))()}var Ee,De,Oe,ke,Ae;function je(){return(je=e((()=>{l(),_e(),H(),Ee=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},De=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},Oe=[{key:`id`,width:60},{key:`username`,width:200},{key:`email`,width:`auto`},{key:`company`,width:`auto`},{key:`domain`,width:200}],ke=Array.from({length:1e3}).map((e,t)=>({id:t,username:j.person.fullName(),email:j.internet.email(),company:j.company.name(),domain:j.internet.domainName()})),Ae=(()=>{let e=[C({selector:`story-vgrid-columns`,imports:[V],template:`
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
  `})],t,n=[],r;var i=class{static{r=this}static{let a=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;Ee(null,t={value:r},e,{kind:`class`,name:r.name,metadata:a},null,n),i=r=t.value,a&&Object.defineProperty(r,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),De(r,n)}columns=Oe;rows=[null,...ke]};return r})()})))()}var Me,q,J,Ne;function Pe(){return(Pe=e((()=>{l(),H(),Me=function(e,t,n,r,i,a){function o(e){if(e!==void 0&&typeof e!=`function`)throw TypeError(`Function expected`);return e}for(var s=r.kind,c=s===`getter`?`get`:s===`setter`?`set`:`value`,l=!t&&e?r.static?e:e.prototype:null,u=t||(l?Object.getOwnPropertyDescriptor(l,r.name):{}),d,f=!1,p=n.length-1;p>=0;p--){var m={};for(var h in r)m[h]=h===`access`?{}:r[h];for(var h in r.access)m.access[h]=r.access[h];m.addInitializer=function(e){if(f)throw TypeError(`Cannot add initializers after decoration has completed`);a.push(o(e||null))};var g=(0,n[p])(s===`accessor`?{get:u.get,set:u.set}:u[c],m);if(s===`accessor`){if(g===void 0)continue;if(typeof g!=`object`||!g)throw TypeError(`Object expected`);(d=o(g.get))&&(u.get=d),(d=o(g.set))&&(u.set=d),(d=o(g.init))&&i.unshift(d)}else(d=o(g))&&(s===`field`?i.unshift(d):u[c]=d)}l&&Object.defineProperty(l,r.name,u),f=!0},q=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},J=1e3,Ne=(()=>{let e=[C({selector:`story-vgrid-scroll-to`,imports:[V],template:`
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
  `})],n,r=[],i;var a=class{static{i=this}static{let t=typeof Symbol==`function`&&Symbol.metadata?Object.create(null):void 0;Me(null,n={value:i},e,{kind:`class`,name:i.name,metadata:t},null,r),a=i=n.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t})}grid=f.required(V);length=J;rowIndex=t(567);colIndex=t(567);vertical=t(1e3);horizontal=t(1e3);toNumber(e){return Number(e.currentTarget.value)}randomize(){this.colIndex.set(Math.floor(J*Math.random())),this.rowIndex.set(Math.floor(J*Math.random()))}static propDecorators={grid:[{type:b,args:[V,{isSignal:!0}]}]};static{q(i,r)}};return i})()})))()}var Fe,Y,X,Z,Q,Ie;function $(){return($=e((()=>{H(),xe(),Te(),je(),Pe(),Fe={component:V},Y={render:()=>({template:`<story-vgrid-default></story-vgrid-default>`,moduleMetadata:{imports:[be]}})},X={render:()=>({template:`<story-vgrid-pinned></story-vgrid-pinned>`,moduleMetadata:{imports:[we]}})},Z={render:()=>({template:`<story-vgrid-columns></story-vgrid-columns>`,moduleMetadata:{imports:[Ae]}})},Q={render:()=>({template:`<story-vgrid-scroll-to></story-vgrid-scroll-to>`,moduleMetadata:{imports:[Ne]}})},Ie=[`Default`,`Pinned`,`Columns`,`ScrollTo`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-default></story-vgrid-default>\`,
    moduleMetadata: {
      imports: [VGridDefaultDemo]
    }
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-pinned></story-vgrid-pinned>\`,
    moduleMetadata: {
      imports: [VGridPinnedDemo]
    }
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-columns></story-vgrid-columns>\`,
    moduleMetadata: {
      imports: [VGridColumnsDemo]
    }
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`<story-vgrid-scroll-to></story-vgrid-scroll-to>\`,
    moduleMetadata: {
      imports: [VGridScrollToDemo]
    }
  })
}`,...Q.parameters?.docs?.source}}}})))()}$();export{Z as Columns,Y as Default,X as Pinned,Q as ScrollTo,Ie as __namedExportsOrder,Fe as default};