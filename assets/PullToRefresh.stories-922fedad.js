import{j as y,a as gt}from"./jsx-runtime-c3d7f245.js";import{g as Be,r as x}from"./index-c6dae603.js";import{y as Ze}from"./index-a7768622.js";import{V as oe}from"./VList-63487889.js";import"./index-778f7dbf.js";var le={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(f){(function(a,c,v,h){var D=["","webkit","Moz","MS","ms","o"],q=c.createElement("div"),B="function",O=Math.round,_=Math.abs,Y=Date.now;function w(t,e,n){return setTimeout(Et(t,n),e)}function I(t,e,n){return Array.isArray(t)?(l(t,n[e],n),!0):!1}function l(t,e,n){var r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==h)for(r=0;r<t.length;)e.call(n,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)}function F(t,e,n){var r="DEPRECATED METHOD: "+e+`
`+n+` AT 
`;return function(){var i=new Error("get-stack-trace"),s=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=a.console&&(a.console.warn||a.console.log);return o&&o.call(a.console,r,s),t.apply(this,arguments)}}var m;typeof Object.assign!="function"?m=function(e){if(e===h||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(i!==h&&i!==null)for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])}return n}:m=Object.assign;var Dt=F(function(e,n,r){for(var i=Object.keys(n),s=0;s<i.length;)(!r||r&&e[i[s]]===h)&&(e[i[s]]=n[i[s]]),s++;return e},"extend","Use `assign`."),ue=F(function(e,n){return Dt(e,n,!0)},"merge","Use `assign`.");function P(t,e,n){var r=e.prototype,i;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&m(i,n)}function Et(t,e){return function(){return t.apply(e,arguments)}}function yt(t,e){return typeof t==B?t.apply(e&&e[0]||h,e):t}function Mt(t,e){return t===h?e:t}function nt(t,e,n){l(it(e),function(r){t.addEventListener(r,n,!1)})}function rt(t,e,n){l(it(e),function(r){t.removeEventListener(r,n,!1)})}function Ut(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function X(t,e){return t.indexOf(e)>-1}function it(t){return t.trim().split(/\s+/g)}function G(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var r=0;r<t.length;){if(n&&t[r][n]==e||!n&&t[r]===e)return r;r++}return-1}function st(t){return Array.prototype.slice.call(t,0)}function Lt(t,e,n){for(var r=[],i=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];G(i,o)<0&&r.push(t[s]),i[s]=o,s++}return n&&(e?r=r.sort(function(d,g){return d[e]>g[e]}):r=r.sort()),r}function at(t,e){for(var n,r,i=e[0].toUpperCase()+e.slice(1),s=0;s<D.length;){if(n=D[s],r=n?n+i:e,r in t)return r;s++}return h}var fe=1;function pe(){return fe++}function wt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var de=/mobile|tablet|ip(ad|hone|od)|android/i,Ht="ontouchstart"in a,ve=at(a,"PointerEvent")!==h,me=Ht&&de.test(navigator.userAgent),Z="touch",Te="pen",_t="mouse",ge="kinect",Ee=25,T=1,V=2,u=4,E=8,ot=1,j=2,J=4,Q=8,K=16,S=j|J,k=Q|K,Yt=S|k,Ft=["x","y"],lt=["clientX","clientY"];function N(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){yt(t.options.enable,[t])&&n.handler(r)},this.init()}N.prototype={handler:function(){},init:function(){this.evEl&&nt(this.element,this.evEl,this.domHandler),this.evTarget&&nt(this.target,this.evTarget,this.domHandler),this.evWin&&nt(wt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&rt(this.element,this.evEl,this.domHandler),this.evTarget&&rt(this.target,this.evTarget,this.domHandler),this.evWin&&rt(wt(this.element),this.evWin,this.domHandler)}};function ye(t){var e,n=t.options.inputClass;return n?e=n:ve?e=Pt:me?e=ut:Ht?e=Nt:e=ht,new e(t,_e)}function _e(t,e,n){var r=n.pointers.length,i=n.changedPointers.length,s=e&T&&r-i===0,o=e&(u|E)&&r-i===0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,Ie(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function Ie(t,e){var n=t.session,r=e.pointers,i=r.length;n.firstInput||(n.firstInput=Xt(e)),i>1&&!n.firstMultiple?n.firstMultiple=Xt(e):i===1&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,p=o?o.center:s.center,d=e.center=Vt(r);e.timeStamp=Y(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=It(p,d),e.distance=ct(p,d),Pe(n,e),e.offsetDirection=Wt(e.deltaX,e.deltaY);var g=kt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=g.x,e.overallVelocityY=g.y,e.overallVelocity=_(g.x)>_(g.y)?g.x:g.y,e.scale=o?Oe(o.pointers,r):1,e.rotation=o?Ce(o.pointers,r):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,Ne(n,e);var b=t.element;Ut(e.srcEvent.target,b)&&(b=e.srcEvent.target),e.target=b}function Pe(t,e){var n=e.center,r=t.offsetDelta||{},i=t.prevDelta||{},s=t.prevInput||{};(e.eventType===T||s.eventType===u)&&(i=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=i.x+(n.x-r.x),e.deltaY=i.y+(n.y-r.y)}function Ne(t,e){var n=t.lastInterval||e,r=e.timeStamp-n.timeStamp,i,s,o,p;if(e.eventType!=E&&(r>Ee||n.velocity===h)){var d=e.deltaX-n.deltaX,g=e.deltaY-n.deltaY,b=kt(r,d,g);s=b.x,o=b.y,i=_(b.x)>_(b.y)?b.x:b.y,p=Wt(d,g),t.lastInterval=e}else i=n.velocity,s=n.velocityX,o=n.velocityY,p=n.direction;e.velocity=i,e.velocityX=s,e.velocityY=o,e.direction=p}function Xt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:O(t.pointers[n].clientX),clientY:O(t.pointers[n].clientY)},n++;return{timeStamp:Y(),pointers:e,center:Vt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Vt(t){var e=t.length;if(e===1)return{x:O(t[0].clientX),y:O(t[0].clientY)};for(var n=0,r=0,i=0;i<e;)n+=t[i].clientX,r+=t[i].clientY,i++;return{x:O(n/e),y:O(r/e)}}function kt(t,e,n){return{x:e/t||0,y:n/t||0}}function Wt(t,e){return t===e?ot:_(t)>=_(e)?t<0?j:J:e<0?Q:K}function ct(t,e,n){n||(n=Ft);var r=e[n[0]]-t[n[0]],i=e[n[1]]-t[n[1]];return Math.sqrt(r*r+i*i)}function It(t,e,n){n||(n=Ft);var r=e[n[0]]-t[n[0]],i=e[n[1]]-t[n[1]];return Math.atan2(i,r)*180/Math.PI}function Ce(t,e){return It(e[1],e[0],lt)+It(t[1],t[0],lt)}function Oe(t,e){return ct(e[0],e[1],lt)/ct(t[0],t[1],lt)}var Ae={mousedown:T,mousemove:V,mouseup:u},Se="mousedown",Re="mousemove mouseup";function ht(){this.evEl=Se,this.evWin=Re,this.pressed=!1,N.apply(this,arguments)}P(ht,N,{handler:function(e){var n=Ae[e.type];n&T&&e.button===0&&(this.pressed=!0),n&V&&e.which!==1&&(n=u),this.pressed&&(n&u&&(this.pressed=!1),this.callback(this.manager,n,{pointers:[e],changedPointers:[e],pointerType:_t,srcEvent:e}))}});var be={pointerdown:T,pointermove:V,pointerup:u,pointercancel:E,pointerout:E},xe={2:Z,3:Te,4:_t,5:ge},qt="pointerdown",Gt="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(qt="MSPointerDown",Gt="MSPointerMove MSPointerUp MSPointerCancel");function Pt(){this.evEl=qt,this.evWin=Gt,N.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}P(Pt,N,{handler:function(e){var n=this.store,r=!1,i=e.type.toLowerCase().replace("ms",""),s=be[i],o=xe[e.pointerType]||e.pointerType,p=o==Z,d=G(n,e.pointerId,"pointerId");s&T&&(e.button===0||p)?d<0&&(n.push(e),d=n.length-1):s&(u|E)&&(r=!0),!(d<0)&&(n[d]=e,this.callback(this.manager,s,{pointers:n,changedPointers:[e],pointerType:o,srcEvent:e}),r&&n.splice(d,1))}});var De={touchstart:T,touchmove:V,touchend:u,touchcancel:E},Me="touchstart",Ue="touchstart touchmove touchend touchcancel";function zt(){this.evTarget=Me,this.evWin=Ue,this.started=!1,N.apply(this,arguments)}P(zt,N,{handler:function(e){var n=De[e.type];if(n===T&&(this.started=!0),!!this.started){var r=Le.call(this,e,n);n&(u|E)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,n,{pointers:r[0],changedPointers:r[1],pointerType:Z,srcEvent:e})}}});function Le(t,e){var n=st(t.touches),r=st(t.changedTouches);return e&(u|E)&&(n=Lt(n.concat(r),"identifier",!0)),[n,r]}var we={touchstart:T,touchmove:V,touchend:u,touchcancel:E},He="touchstart touchmove touchend touchcancel";function ut(){this.evTarget=He,this.targetIds={},N.apply(this,arguments)}P(ut,N,{handler:function(e){var n=we[e.type],r=Ye.call(this,e,n);r&&this.callback(this.manager,n,{pointers:r[0],changedPointers:r[1],pointerType:Z,srcEvent:e})}});function Ye(t,e){var n=st(t.touches),r=this.targetIds;if(e&(T|V)&&n.length===1)return r[n[0].identifier]=!0,[n,n];var i,s,o=st(t.changedTouches),p=[],d=this.target;if(s=n.filter(function(g){return Ut(g.target,d)}),e===T)for(i=0;i<s.length;)r[s[i].identifier]=!0,i++;for(i=0;i<o.length;)r[o[i].identifier]&&p.push(o[i]),e&(u|E)&&delete r[o[i].identifier],i++;if(p.length)return[Lt(s.concat(p),"identifier",!0),p]}var Fe=2500,Bt=25;function Nt(){N.apply(this,arguments);var t=Et(this.handler,this);this.touch=new ut(this.manager,t),this.mouse=new ht(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}P(Nt,N,{handler:function(e,n,r){var i=r.pointerType==Z,s=r.pointerType==_t;if(!(s&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(i)Xe.call(this,n,r);else if(s&&Ve.call(this,r))return;this.callback(e,n,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Xe(t,e){t&T?(this.primaryTouch=e.changedPointers[0].identifier,Zt.call(this,e)):t&(u|E)&&Zt.call(this,e)}function Zt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var r=this.lastTouches,i=function(){var s=r.indexOf(n);s>-1&&r.splice(s,1)};setTimeout(i,Fe)}}function Ve(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var i=this.lastTouches[r],s=Math.abs(e-i.x),o=Math.abs(n-i.y);if(s<=Bt&&o<=Bt)return!0}return!1}var jt=at(q.style,"touchAction"),Jt=jt!==h,Qt="compute",Kt="auto",Ct="manipulation",W="none",$="pan-x",tt="pan-y",ft=We();function Ot(t,e){this.manager=t,this.set(e)}Ot.prototype={set:function(t){t==Qt&&(t=this.compute()),Jt&&this.manager.element.style&&ft[t]&&(this.manager.element.style[jt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return l(this.manager.recognizers,function(e){yt(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),ke(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,i=X(r,W)&&!ft[W],s=X(r,tt)&&!ft[tt],o=X(r,$)&&!ft[$];if(i){var p=t.pointers.length===1,d=t.distance<2,g=t.deltaTime<250;if(p&&d&&g)return}if(!(o&&s)&&(i||s&&n&S||o&&n&k))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function ke(t){if(X(t,W))return W;var e=X(t,$),n=X(t,tt);return e&&n?W:e||n?e?$:tt:X(t,Ct)?Ct:Kt}function We(){if(!Jt)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=e?a.CSS.supports("touch-action",n):!0}),t}var pt=1,C=2,z=4,H=8,M=H,et=16,R=32;function U(t){this.options=m({},this.defaults,t||{}),this.id=pe(),this.manager=null,this.options.enable=Mt(this.options.enable,!0),this.state=pt,this.simultaneous={},this.requireFail=[]}U.prototype={defaults:{},set:function(t){return m(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(I(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=dt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return I(t,"dropRecognizeWith",this)?this:(t=dt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(I(t,"requireFailure",this))return this;var e=this.requireFail;return t=dt(t,this),G(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(I(t,"dropRequireFailure",this))return this;t=dt(t,this);var e=G(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function r(i){e.manager.emit(i,t)}n<H&&r(e.options.event+$t(n)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),n>=H&&r(e.options.event+$t(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=R},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(R|pt)))return!1;t++}return!0},recognize:function(t){var e=m({},t);if(!yt(this.options.enable,[this,e])){this.reset(),this.state=R;return}this.state&(M|et|R)&&(this.state=pt),this.state=this.process(e),this.state&(C|z|H|et)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function $t(t){return t&et?"cancel":t&H?"end":t&z?"move":t&C?"start":""}function te(t){return t==K?"down":t==Q?"up":t==j?"left":t==J?"right":""}function dt(t,e){var n=e.manager;return n?n.get(t):t}function A(){U.apply(this,arguments)}P(A,U,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,r=e&(C|z),i=this.attrTest(t);return r&&(n&E||!i)?e|et:r||i?n&u?e|H:e&C?e|z:C:R}});function vt(){A.apply(this,arguments),this.pX=null,this.pY=null}P(vt,A,{defaults:{event:"pan",threshold:10,pointers:1,direction:Yt},getTouchAction:function(){var t=this.options.direction,e=[];return t&S&&e.push(tt),t&k&&e.push($),e},directionTest:function(t){var e=this.options,n=!0,r=t.distance,i=t.direction,s=t.deltaX,o=t.deltaY;return i&e.direction||(e.direction&S?(i=s===0?ot:s<0?j:J,n=s!=this.pX,r=Math.abs(t.deltaX)):(i=o===0?ot:o<0?Q:K,n=o!=this.pY,r=Math.abs(t.deltaY))),t.direction=i,n&&r>e.threshold&&i&e.direction},attrTest:function(t){return A.prototype.attrTest.call(this,t)&&(this.state&C||!(this.state&C)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=te(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function At(){A.apply(this,arguments)}P(At,A,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[W]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&C)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function St(){U.apply(this,arguments),this._timer=null,this._input=null}P(St,U,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,i=t.deltaTime>e.time;if(this._input=t,!r||!n||t.eventType&(u|E)&&!i)this.reset();else if(t.eventType&T)this.reset(),this._timer=w(function(){this.state=M,this.tryEmit()},e.time,this);else if(t.eventType&u)return M;return R},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===M&&(t&&t.eventType&u?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Y(),this.manager.emit(this.options.event,this._input)))}});function Rt(){A.apply(this,arguments)}P(Rt,A,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[W]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&C)}});function bt(){A.apply(this,arguments)}P(bt,A,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:S|k,pointers:1},getTouchAction:function(){return vt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,n;return e&(S|k)?n=t.overallVelocity:e&S?n=t.overallVelocityX:e&k&&(n=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&_(n)>this.options.velocity&&t.eventType&u},emit:function(t){var e=te(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function mt(){U.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}P(mt,U,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ct]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,i=t.deltaTime<e.time;if(this.reset(),t.eventType&T&&this.count===0)return this.failTimeout();if(r&&i&&n){if(t.eventType!=u)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,o=!this.pCenter||ct(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!o||!s?this.count=1:this.count+=1,this._input=t;var p=this.count%e.taps;if(p===0)return this.hasRequireFailures()?(this._timer=w(function(){this.state=M,this.tryEmit()},e.interval,this),C):M}return R},failTimeout:function(){return this._timer=w(function(){this.state=R},this.options.interval,this),R},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==M&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function L(t,e){return e=e||{},e.recognizers=Mt(e.recognizers,L.defaults.preset),new xt(t,e)}L.VERSION="2.0.7",L.defaults={domEvents:!1,touchAction:Qt,enable:!0,inputTarget:null,inputClass:null,preset:[[Rt,{enable:!1}],[At,{enable:!1},["rotate"]],[bt,{direction:S}],[vt,{direction:S},["swipe"]],[mt],[mt,{event:"doubletap",taps:2},["tap"]],[St]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var qe=1,ee=2;function xt(t,e){this.options=m({},L.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=ye(this),this.touchAction=new Ot(this,this.options.touchAction),ne(this,!0),l(this.options.recognizers,function(n){var r=this.add(new n[0](n[1]));n[2]&&r.recognizeWith(n[2]),n[3]&&r.requireFailure(n[3])},this)}xt.prototype={set:function(t){return m(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ee:qe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,r=this.recognizers,i=e.curRecognizer;(!i||i&&i.state&M)&&(i=e.curRecognizer=null);for(var s=0;s<r.length;)n=r[s],e.stopped!==ee&&(!i||n==i||n.canRecognizeWith(i))?n.recognize(t):n.reset(),!i&&n.state&(C|z|H)&&(i=e.curRecognizer=n),s++}},get:function(t){if(t instanceof U)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(I(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(I(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,n=G(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==h&&e!==h){var n=this.handlers;return l(it(t),function(r){n[r]=n[r]||[],n[r].push(e)}),this}},off:function(t,e){if(t!==h){var n=this.handlers;return l(it(t),function(r){e?n[r]&&n[r].splice(G(n[r],e),1):delete n[r]}),this}},emit:function(t,e){this.options.domEvents&&Ge(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(!(!n||!n.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<n.length;)n[r](e),r++}},destroy:function(){this.element&&ne(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function ne(t,e){var n=t.element;if(n.style){var r;l(t.options.cssProps,function(i,s){r=at(n.style,s),e?(t.oldCssProps[r]=n.style[r],n.style[r]=i):n.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function Ge(t,e){var n=c.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}m(L,{INPUT_START:T,INPUT_MOVE:V,INPUT_END:u,INPUT_CANCEL:E,STATE_POSSIBLE:pt,STATE_BEGAN:C,STATE_CHANGED:z,STATE_ENDED:H,STATE_RECOGNIZED:M,STATE_CANCELLED:et,STATE_FAILED:R,DIRECTION_NONE:ot,DIRECTION_LEFT:j,DIRECTION_RIGHT:J,DIRECTION_UP:Q,DIRECTION_DOWN:K,DIRECTION_HORIZONTAL:S,DIRECTION_VERTICAL:k,DIRECTION_ALL:Yt,Manager:xt,Input:N,TouchAction:Ot,TouchInput:ut,MouseInput:ht,PointerEventInput:Pt,TouchMouseInput:Nt,SingleTouchInput:zt,Recognizer:U,AttrRecognizer:A,Tap:mt,Pan:vt,Swipe:bt,Pinch:At,Rotate:Rt,Press:St,on:nt,off:rt,each:l,merge:ue,extend:Dt,assign:m,inherit:P,bindFn:Et,prefixed:at});var ze=typeof a<"u"?a:typeof self<"u"?self:{};ze.Hammer=L,typeof h=="function"&&h.amd?h(function(){return L}):f.exports?f.exports=L:a[v]=L})(window,document,"Hammer")})(le);var je=le.exports;const re=Be(je);function Je(){const f={contentEl:"content",ptrEl:"ptr",bodyEl:document.body,distanceToRefresh:70,loadingFunction:!1,resistance:2.5};let a={};const c={enabled:!1,distance:0,startingPositionY:0};let v=f.bodyEl.classList;const h=l=>{var F;if(a={contentEl:l.contentEl??document.getElementById(f.contentEl),ptrEl:l.ptrEl||document.getElementById(f.ptrEl),bodyEl:l.bodyEl||f.bodyEl,distanceToRefresh:l.distanceToRefresh||f.distanceToRefresh,loadingFunction:l.loadingFunction||f.loadingFunction,resistance:l.resistance||f.resistance,hammerOptions:l.hammerOptions??{}},!a.contentEl||!a.ptrEl)return!1;v=(F=a.bodyEl)==null?void 0:F.classList;const m=new re(a.contentEl,a.hammerOptions);m.get("pan").set({direction:re.DIRECTION_VERTICAL}),m.on("panstart",D),m.on("pandown",q),m.on("panup",B),m.on("panend",Y)},D=()=>{c.startingPositionY=a.bodyEl.scrollTop,c.startingPositionY===0&&(c.enabled=!0)},q=l=>{c.enabled&&(l.preventDefault(),c.distance=l.distance/a.resistance,O(),_())},B=l=>{!c.enabled||c.distance===0||(l.preventDefault(),c.distance<l.distance/a.resistance?c.distance=0:c.distance=l.distance/a.resistance,O(),_())},O=()=>{a.contentEl&&(a.contentEl.style.transform=`translate3d( 0, ${c.distance}px, 0 )`),a.ptrEl.style.transform=`translate3d( 0, ${c.distance-a.ptrEl.offsetHeight}px, 0 )`},_=()=>{c.distance>a.distanceToRefresh?v.add("ptr-refresh"):v.remove("ptr-refresh")},Y=l=>{c.enabled&&(l.preventDefault(),a.contentEl&&(a.contentEl.style.transform=""),a.ptrEl.style.transform="",a.bodyEl.classList.contains("ptr-refresh")?w():I(),c.distance=0,c.enabled=!1)},w=()=>{if(v.add("ptr-loading"),!a.loadingFunction)return I();const l=a.loadingFunction();setTimeout(()=>{l.then(I)},1e3)},I=()=>{v.remove("ptr-loading"),v.remove("ptr-refresh"),v.add("ptr-reset");const l=()=>{v.remove("ptr-reset"),a.bodyEl.removeEventListener("transitionend",l,!1)};a.bodyEl.addEventListener("transitionend",l,!1)};return{init:h}}function Qe(f){const{onRefresh:a,disabled:c,distanceToRefresh:v,resistance:h,hammerOptions:D,children:q,icon:B,loading:O,..._}=f;async function Y(){await a()}const w=x.useRef(null),I=x.useRef(null),l=x.useRef(null),F=x.useRef(null);return x.useEffect(()=>{if(!c){if(w.current)return;Je().init({contentEl:I.current,ptrEl:l.current,bodyEl:document.body,distanceToRefresh:v,loadingFunction:Y,resistance:h,hammerOptions:D}),w.current=!0}},[c]),c?y("div",{..._,children:q}):gt("div",{ref:F,..._,children:[gt("div",{className:"ptr-element",ref:l,children:[B??y("span",{className:"genericon genericon-next"}),O??gt("div",{className:"loading",children:[y("span",{className:"loading-ptr-1"}),y("span",{className:"loading-ptr-2"}),y("span",{className:"loading-ptr-3"})]})]}),y("div",{className:"refresh-view",ref:I,children:q})]})}var Ke=Qe,$e=Ke;const ln={component:oe},tn=f=>new Promise(a=>setTimeout(a,f)),ce=x.createContext(async()=>{}),he={width:400,height:600},en=x.forwardRef(({children:f,attrs:a,scrollSize:c},v)=>{const h=x.useContext(ce);return y($e,{onRefresh:h,style:{...he,position:"relative",overflow:"hidden"},children:y("div",{ref:v,...a,children:y("div",{style:{height:c},children:f})})})}),Tt={name:"PullToRefresh",render:()=>{const f=()=>({id:Ze.datatype.number()}),c=()=>Array.from({length:1e3},f),[v,h]=x.useState(c);return gt("div",{children:[y("div",{children:"pull down this list!"}),y(ce.Provider,{value:x.useCallback(async()=>{await tn(500),h(c())},[]),children:y(oe,{style:he,element:en,children:v.map(D=>y("div",{style:{height:80,borderBottom:"solid 1px #ccc",background:"#fff"},children:D.id},D.id))})}),y("style",{children:`
.ptr-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #aaa;
  z-index: 10;
  text-align: center;
  height: 50px;
  transition: all;
}

.ptr-element .genericon {
  opacity: 0.6;
  font-size: 34px;
  width: auto;
  height: auto;
  transition: all 0.25s ease;
  transform: rotate(90deg);
  margin-top: 5px;
}
.ptr-refresh .ptr-element .genericon {
  transform: rotate(270deg);
}
.ptr-loading .ptr-element .genericon,
.ptr-reset .ptr-element .genericon {
  display: none;
}

.loading {
  display: inline-block;
  text-align: center;
  opacity: 0.4;
  display: none;
}
.ptr-loading .loading {
  display: block;
}

.loading span {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  transform: scale(0.3);
  border-radius: 50%;
  animation: ptr-loading 0.4s infinite alternate;
}

.loading-ptr-1 {
  animation-delay: 0 !important;
}

.loading-ptr-2 {
  animation-delay: 0.2s !important;
}

.loading-ptr-3 {
  animation-delay: 0.4s !important;
}

@keyframes ptr-loading {
  0% {
    transform: translateY(0) scale(0.3);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    background-color: #333;
    opacity: 1;
  }
}

.ptr-loading .refresh-view,
.ptr-reset .refresh-view,
.ptr-loading .ptr-element,
.ptr-reset .ptr-element {
  transition: all 0.25s ease;
}

.ptr-reset .refresh-view {
  transform: translate3d(0, 0, 0);
}

.ptr-loading .refresh-view {
  transform: translate3d(0, 30px, 0);
}
`})]})}};var ie,se,ae;Tt.parameters={...Tt.parameters,docs:{...(ie=Tt.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "PullToRefresh",
  render: () => {
    const createItem = () => ({
      id: faker.datatype.number()
    });
    const ITEM_BATCH_LENGTH = 1000;
    const refreshItems = () => Array.from({
      length: ITEM_BATCH_LENGTH
    }, createItem);
    const [items, setItems] = useState(refreshItems);
    return <div>
        <div>pull down this list!</div>
        <RefreshContext.Provider value={useCallback(async () => {
        await delay(500);
        setItems(refreshItems());
      }, [])}>
          <VList style={listStyle} element={Window}>
            {items.map(d => {
            return <div key={d.id} style={{
              height: 80,
              borderBottom: "solid 1px #ccc",
              background: "#fff"
            }}>
                  {d.id}
                </div>;
          })}
          </VList>
        </RefreshContext.Provider>
        <style>{\`
.ptr-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #aaa;
  z-index: 10;
  text-align: center;
  height: 50px;
  transition: all;
}

.ptr-element .genericon {
  opacity: 0.6;
  font-size: 34px;
  width: auto;
  height: auto;
  transition: all 0.25s ease;
  transform: rotate(90deg);
  margin-top: 5px;
}
.ptr-refresh .ptr-element .genericon {
  transform: rotate(270deg);
}
.ptr-loading .ptr-element .genericon,
.ptr-reset .ptr-element .genericon {
  display: none;
}

.loading {
  display: inline-block;
  text-align: center;
  opacity: 0.4;
  display: none;
}
.ptr-loading .loading {
  display: block;
}

.loading span {
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  transform: scale(0.3);
  border-radius: 50%;
  animation: ptr-loading 0.4s infinite alternate;
}

.loading-ptr-1 {
  animation-delay: 0 !important;
}

.loading-ptr-2 {
  animation-delay: 0.2s !important;
}

.loading-ptr-3 {
  animation-delay: 0.4s !important;
}

@keyframes ptr-loading {
  0% {
    transform: translateY(0) scale(0.3);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    background-color: #333;
    opacity: 1;
  }
}

.ptr-loading .refresh-view,
.ptr-reset .refresh-view,
.ptr-loading .ptr-element,
.ptr-reset .ptr-element {
  transition: all 0.25s ease;
}

.ptr-reset .refresh-view {
  transform: translate3d(0, 0, 0);
}

.ptr-loading .refresh-view {
  transform: translate3d(0, 30px, 0);
}
\`}</style>
      </div>;
  }
}`,...(ae=(se=Tt.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const cn=["Default"];export{Tt as Default,cn as __namedExportsOrder,ln as default};
//# sourceMappingURL=PullToRefresh.stories-922fedad.js.map
