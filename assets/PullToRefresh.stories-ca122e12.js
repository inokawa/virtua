import{j as y,a as yt}from"./jsx-runtime-c3d7f245.js";import{g as Be,r as x}from"./index-c6dae603.js";import{y as Ze}from"./index-1f693f06.js";import{V as le}from"./VList-7170cff1.js";import"./resizer-5270f707.js";import"./index-7f713258.js";var ce={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(f){(function(a,c,d,h){var q=["","webkit","Moz","MS","ms","o"],z=c.createElement("div"),Y="function",I=Math.round,_=Math.abs,F=Date.now;function L(t,e,n){return setTimeout(It(t,n),e)}function P(t,e,n){return Array.isArray(t)?(l(t,n[e],n),!0):!1}function l(t,e,n){var r;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==h)for(r=0;r<t.length;)e.call(n,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,t)}function H(t,e,n){var r="DEPRECATED METHOD: "+e+`
`+n+` AT 
`;return function(){var i=new Error("get-stack-trace"),s=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=a.console&&(a.console.warn||a.console.log);return o&&o.call(a.console,r,s),t.apply(this,arguments)}}var m;typeof Object.assign!="function"?m=function(e){if(e===h||e===null)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(i!==h&&i!==null)for(var s in i)i.hasOwnProperty(s)&&(n[s]=i[s])}return n}:m=Object.assign;var Z=H(function(e,n,r){for(var i=Object.keys(n),s=0;s<i.length;)(!r||r&&e[i[s]]===h)&&(e[i[s]]=n[i[s]]),s++;return e},"extend","Use `assign`."),rt=H(function(e,n){return Z(e,n,!0)},"merge","Use `assign`.");function N(t,e,n){var r=e.prototype,i;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&m(i,n)}function It(t,e){return function(){return t.apply(e,arguments)}}function _t(t,e){return typeof t==Y?t.apply(e&&e[0]||h,e):t}function Ut(t,e){return t===h?e:t}function it(t,e,n){l(at(e),function(r){t.addEventListener(r,n,!1)})}function st(t,e,n){l(at(e),function(r){t.removeEventListener(r,n,!1)})}function Lt(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function X(t,e){return t.indexOf(e)>-1}function at(t){return t.trim().split(/\s+/g)}function G(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var r=0;r<t.length;){if(n&&t[r][n]==e||!n&&t[r]===e)return r;r++}return-1}function ot(t){return Array.prototype.slice.call(t,0)}function wt(t,e,n){for(var r=[],i=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];G(i,o)<0&&r.push(t[s]),i[s]=o,s++}return n&&(e?r=r.sort(function(v,g){return v[e]>g[e]}):r=r.sort()),r}function lt(t,e){for(var n,r,i=e[0].toUpperCase()+e.slice(1),s=0;s<q.length;){if(n=q[s],r=n?n+i:e,r in t)return r;s++}return h}var fe=1;function pe(){return fe++}function Yt(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var de=/mobile|tablet|ip(ad|hone|od)|android/i,Ft="ontouchstart"in a,ve=lt(a,"PointerEvent")!==h,me=Ft&&de.test(navigator.userAgent),j="touch",Te="pen",Pt="mouse",ge="kinect",Ee=25,T=1,V=2,u=4,E=8,ct=1,J=2,Q=4,K=8,$=16,S=J|Q,k=K|$,Ht=S|k,Xt=["x","y"],ht=["clientX","clientY"];function C(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(r){_t(t.options.enable,[t])&&n.handler(r)},this.init()}C.prototype={handler:function(){},init:function(){this.evEl&&it(this.element,this.evEl,this.domHandler),this.evTarget&&it(this.target,this.evTarget,this.domHandler),this.evWin&&it(Yt(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&st(this.element,this.evEl,this.domHandler),this.evTarget&&st(this.target,this.evTarget,this.domHandler),this.evWin&&st(Yt(this.element),this.evWin,this.domHandler)}};function ye(t){var e,n=t.options.inputClass;return n?e=n:ve?e=Ct:me?e=pt:Ft?e=Ot:e=ft,new e(t,Ie)}function Ie(t,e,n){var r=n.pointers.length,i=n.changedPointers.length,s=e&T&&r-i===0,o=e&(u|E)&&r-i===0;n.isFirst=!!s,n.isFinal=!!o,s&&(t.session={}),n.eventType=e,_e(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function _e(t,e){var n=t.session,r=e.pointers,i=r.length;n.firstInput||(n.firstInput=Vt(e)),i>1&&!n.firstMultiple?n.firstMultiple=Vt(e):i===1&&(n.firstMultiple=!1);var s=n.firstInput,o=n.firstMultiple,p=o?o.center:s.center,v=e.center=kt(r);e.timeStamp=F(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=Nt(p,v),e.distance=ut(p,v),Pe(n,e),e.offsetDirection=qt(e.deltaX,e.deltaY);var g=Wt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=g.x,e.overallVelocityY=g.y,e.overallVelocity=_(g.x)>_(g.y)?g.x:g.y,e.scale=o?Oe(o.pointers,r):1,e.rotation=o?Ce(o.pointers,r):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,Ne(n,e);var b=t.element;Lt(e.srcEvent.target,b)&&(b=e.srcEvent.target),e.target=b}function Pe(t,e){var n=e.center,r=t.offsetDelta||{},i=t.prevDelta||{},s=t.prevInput||{};(e.eventType===T||s.eventType===u)&&(i=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},r=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=i.x+(n.x-r.x),e.deltaY=i.y+(n.y-r.y)}function Ne(t,e){var n=t.lastInterval||e,r=e.timeStamp-n.timeStamp,i,s,o,p;if(e.eventType!=E&&(r>Ee||n.velocity===h)){var v=e.deltaX-n.deltaX,g=e.deltaY-n.deltaY,b=Wt(r,v,g);s=b.x,o=b.y,i=_(b.x)>_(b.y)?b.x:b.y,p=qt(v,g),t.lastInterval=e}else i=n.velocity,s=n.velocityX,o=n.velocityY,p=n.direction;e.velocity=i,e.velocityX=s,e.velocityY=o,e.direction=p}function Vt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:I(t.pointers[n].clientX),clientY:I(t.pointers[n].clientY)},n++;return{timeStamp:F(),pointers:e,center:kt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function kt(t){var e=t.length;if(e===1)return{x:I(t[0].clientX),y:I(t[0].clientY)};for(var n=0,r=0,i=0;i<e;)n+=t[i].clientX,r+=t[i].clientY,i++;return{x:I(n/e),y:I(r/e)}}function Wt(t,e,n){return{x:e/t||0,y:n/t||0}}function qt(t,e){return t===e?ct:_(t)>=_(e)?t<0?J:Q:e<0?K:$}function ut(t,e,n){n||(n=Xt);var r=e[n[0]]-t[n[0]],i=e[n[1]]-t[n[1]];return Math.sqrt(r*r+i*i)}function Nt(t,e,n){n||(n=Xt);var r=e[n[0]]-t[n[0]],i=e[n[1]]-t[n[1]];return Math.atan2(i,r)*180/Math.PI}function Ce(t,e){return Nt(e[1],e[0],ht)+Nt(t[1],t[0],ht)}function Oe(t,e){return ut(e[0],e[1],ht)/ut(t[0],t[1],ht)}var Ae={mousedown:T,mousemove:V,mouseup:u},Se="mousedown",Re="mousemove mouseup";function ft(){this.evEl=Se,this.evWin=Re,this.pressed=!1,C.apply(this,arguments)}N(ft,C,{handler:function(e){var n=Ae[e.type];n&T&&e.button===0&&(this.pressed=!0),n&V&&e.which!==1&&(n=u),this.pressed&&(n&u&&(this.pressed=!1),this.callback(this.manager,n,{pointers:[e],changedPointers:[e],pointerType:Pt,srcEvent:e}))}});var be={pointerdown:T,pointermove:V,pointerup:u,pointercancel:E,pointerout:E},xe={2:j,3:Te,4:Pt,5:ge},zt="pointerdown",Gt="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(zt="MSPointerDown",Gt="MSPointerMove MSPointerUp MSPointerCancel");function Ct(){this.evEl=zt,this.evWin=Gt,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}N(Ct,C,{handler:function(e){var n=this.store,r=!1,i=e.type.toLowerCase().replace("ms",""),s=be[i],o=xe[e.pointerType]||e.pointerType,p=o==j,v=G(n,e.pointerId,"pointerId");s&T&&(e.button===0||p)?v<0&&(n.push(e),v=n.length-1):s&(u|E)&&(r=!0),!(v<0)&&(n[v]=e,this.callback(this.manager,s,{pointers:n,changedPointers:[e],pointerType:o,srcEvent:e}),r&&n.splice(v,1))}});var De={touchstart:T,touchmove:V,touchend:u,touchcancel:E},Me="touchstart",Ue="touchstart touchmove touchend touchcancel";function Bt(){this.evTarget=Me,this.evWin=Ue,this.started=!1,C.apply(this,arguments)}N(Bt,C,{handler:function(e){var n=De[e.type];if(n===T&&(this.started=!0),!!this.started){var r=Le.call(this,e,n);n&(u|E)&&r[0].length-r[1].length===0&&(this.started=!1),this.callback(this.manager,n,{pointers:r[0],changedPointers:r[1],pointerType:j,srcEvent:e})}}});function Le(t,e){var n=ot(t.touches),r=ot(t.changedTouches);return e&(u|E)&&(n=wt(n.concat(r),"identifier",!0)),[n,r]}var we={touchstart:T,touchmove:V,touchend:u,touchcancel:E},Ye="touchstart touchmove touchend touchcancel";function pt(){this.evTarget=Ye,this.targetIds={},C.apply(this,arguments)}N(pt,C,{handler:function(e){var n=we[e.type],r=Fe.call(this,e,n);r&&this.callback(this.manager,n,{pointers:r[0],changedPointers:r[1],pointerType:j,srcEvent:e})}});function Fe(t,e){var n=ot(t.touches),r=this.targetIds;if(e&(T|V)&&n.length===1)return r[n[0].identifier]=!0,[n,n];var i,s,o=ot(t.changedTouches),p=[],v=this.target;if(s=n.filter(function(g){return Lt(g.target,v)}),e===T)for(i=0;i<s.length;)r[s[i].identifier]=!0,i++;for(i=0;i<o.length;)r[o[i].identifier]&&p.push(o[i]),e&(u|E)&&delete r[o[i].identifier],i++;if(p.length)return[wt(s.concat(p),"identifier",!0),p]}var He=2500,Zt=25;function Ot(){C.apply(this,arguments);var t=It(this.handler,this);this.touch=new pt(this.manager,t),this.mouse=new ft(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}N(Ot,C,{handler:function(e,n,r){var i=r.pointerType==j,s=r.pointerType==Pt;if(!(s&&r.sourceCapabilities&&r.sourceCapabilities.firesTouchEvents)){if(i)Xe.call(this,n,r);else if(s&&Ve.call(this,r))return;this.callback(e,n,r)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Xe(t,e){t&T?(this.primaryTouch=e.changedPointers[0].identifier,jt.call(this,e)):t&(u|E)&&jt.call(this,e)}function jt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var r=this.lastTouches,i=function(){var s=r.indexOf(n);s>-1&&r.splice(s,1)};setTimeout(i,He)}}function Ve(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,r=0;r<this.lastTouches.length;r++){var i=this.lastTouches[r],s=Math.abs(e-i.x),o=Math.abs(n-i.y);if(s<=Zt&&o<=Zt)return!0}return!1}var Jt=lt(z.style,"touchAction"),Qt=Jt!==h,Kt="compute",$t="auto",At="manipulation",W="none",tt="pan-x",et="pan-y",dt=We();function St(t,e){this.manager=t,this.set(e)}St.prototype={set:function(t){t==Kt&&(t=this.compute()),Qt&&this.manager.element.style&&dt[t]&&(this.manager.element.style[Jt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return l(this.manager.recognizers,function(e){_t(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),ke(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented){e.preventDefault();return}var r=this.actions,i=X(r,W)&&!dt[W],s=X(r,et)&&!dt[et],o=X(r,tt)&&!dt[tt];if(i){var p=t.pointers.length===1,v=t.distance<2,g=t.deltaTime<250;if(p&&v&&g)return}if(!(o&&s)&&(i||s&&n&S||o&&n&k))return this.preventSrc(e)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function ke(t){if(X(t,W))return W;var e=X(t,tt),n=X(t,et);return e&&n?W:e||n?e?tt:et:X(t,At)?At:$t}function We(){if(!Qt)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=e?a.CSS.supports("touch-action",n):!0}),t}var vt=1,O=2,B=4,w=8,D=w,nt=16,R=32;function M(t){this.options=m({},this.defaults,t||{}),this.id=pe(),this.manager=null,this.options.enable=Ut(this.options.enable,!0),this.state=vt,this.simultaneous={},this.requireFail=[]}M.prototype={defaults:{},set:function(t){return m(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(P(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=mt(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return P(t,"dropRecognizeWith",this)?this:(t=mt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(P(t,"requireFailure",this))return this;var e=this.requireFail;return t=mt(t,this),G(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(P(t,"dropRequireFailure",this))return this;t=mt(t,this);var e=G(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function r(i){e.manager.emit(i,t)}n<w&&r(e.options.event+te(n)),r(e.options.event),t.additionalEvent&&r(t.additionalEvent),n>=w&&r(e.options.event+te(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=R},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(R|vt)))return!1;t++}return!0},recognize:function(t){var e=m({},t);if(!_t(this.options.enable,[this,e])){this.reset(),this.state=R;return}this.state&(D|nt|R)&&(this.state=vt),this.state=this.process(e),this.state&(O|B|w|nt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}};function te(t){return t&nt?"cancel":t&w?"end":t&B?"move":t&O?"start":""}function ee(t){return t==$?"down":t==K?"up":t==J?"left":t==Q?"right":""}function mt(t,e){var n=e.manager;return n?n.get(t):t}function A(){M.apply(this,arguments)}N(A,M,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return e===0||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,r=e&(O|B),i=this.attrTest(t);return r&&(n&E||!i)?e|nt:r||i?n&u?e|w:e&O?e|B:O:R}});function Tt(){A.apply(this,arguments),this.pX=null,this.pY=null}N(Tt,A,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ht},getTouchAction:function(){var t=this.options.direction,e=[];return t&S&&e.push(et),t&k&&e.push(tt),e},directionTest:function(t){var e=this.options,n=!0,r=t.distance,i=t.direction,s=t.deltaX,o=t.deltaY;return i&e.direction||(e.direction&S?(i=s===0?ct:s<0?J:Q,n=s!=this.pX,r=Math.abs(t.deltaX)):(i=o===0?ct:o<0?K:$,n=o!=this.pY,r=Math.abs(t.deltaY))),t.direction=i,n&&r>e.threshold&&i&e.direction},attrTest:function(t){return A.prototype.attrTest.call(this,t)&&(this.state&O||!(this.state&O)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=ee(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}});function Rt(){A.apply(this,arguments)}N(Rt,A,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[W]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&O)},emit:function(t){if(t.scale!==1){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}});function bt(){M.apply(this,arguments),this._timer=null,this._input=null}N(bt,M,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[$t]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,i=t.deltaTime>e.time;if(this._input=t,!r||!n||t.eventType&(u|E)&&!i)this.reset();else if(t.eventType&T)this.reset(),this._timer=L(function(){this.state=D,this.tryEmit()},e.time,this);else if(t.eventType&u)return D;return R},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===D&&(t&&t.eventType&u?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=F(),this.manager.emit(this.options.event,this._input)))}});function xt(){A.apply(this,arguments)}N(xt,A,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[W]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&O)}});function Dt(){A.apply(this,arguments)}N(Dt,A,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:S|k,pointers:1},getTouchAction:function(){return Tt.prototype.getTouchAction.call(this)},attrTest:function(t){var e=this.options.direction,n;return e&(S|k)?n=t.overallVelocity:e&S?n=t.overallVelocityX:e&k&&(n=t.overallVelocityY),this._super.attrTest.call(this,t)&&e&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&_(n)>this.options.velocity&&t.eventType&u},emit:function(t){var e=ee(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}});function gt(){M.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}N(gt,M,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[At]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,r=t.distance<e.threshold,i=t.deltaTime<e.time;if(this.reset(),t.eventType&T&&this.count===0)return this.failTimeout();if(r&&i&&n){if(t.eventType!=u)return this.failTimeout();var s=this.pTime?t.timeStamp-this.pTime<e.interval:!0,o=!this.pCenter||ut(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!o||!s?this.count=1:this.count+=1,this._input=t;var p=this.count%e.taps;if(p===0)return this.hasRequireFailures()?(this._timer=L(function(){this.state=D,this.tryEmit()},e.interval,this),O):D}return R},failTimeout:function(){return this._timer=L(function(){this.state=R},this.options.interval,this),R},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==D&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function U(t,e){return e=e||{},e.recognizers=Ut(e.recognizers,U.defaults.preset),new Mt(t,e)}U.VERSION="2.0.7",U.defaults={domEvents:!1,touchAction:Kt,enable:!0,inputTarget:null,inputClass:null,preset:[[xt,{enable:!1}],[Rt,{enable:!1},["rotate"]],[Dt,{direction:S}],[Tt,{direction:S},["swipe"]],[gt],[gt,{event:"doubletap",taps:2},["tap"]],[bt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var qe=1,ne=2;function Mt(t,e){this.options=m({},U.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=ye(this),this.touchAction=new St(this,this.options.touchAction),re(this,!0),l(this.options.recognizers,function(n){var r=this.add(new n[0](n[1]));n[2]&&r.recognizeWith(n[2]),n[3]&&r.requireFailure(n[3])},this)}Mt.prototype={set:function(t){return m(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?ne:qe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,r=this.recognizers,i=e.curRecognizer;(!i||i&&i.state&D)&&(i=e.curRecognizer=null);for(var s=0;s<r.length;)n=r[s],e.stopped!==ne&&(!i||n==i||n.canRecognizeWith(i))?n.recognize(t):n.reset(),!i&&n.state&(O|B|w)&&(i=e.curRecognizer=n),s++}},get:function(t){if(t instanceof M)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(P(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(P(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,n=G(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==h&&e!==h){var n=this.handlers;return l(at(t),function(r){n[r]=n[r]||[],n[r].push(e)}),this}},off:function(t,e){if(t!==h){var n=this.handlers;return l(at(t),function(r){e?n[r]&&n[r].splice(G(n[r],e),1):delete n[r]}),this}},emit:function(t,e){this.options.domEvents&&ze(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(!(!n||!n.length)){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<n.length;)n[r](e),r++}},destroy:function(){this.element&&re(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function re(t,e){var n=t.element;if(n.style){var r;l(t.options.cssProps,function(i,s){r=lt(n.style,s),e?(t.oldCssProps[r]=n.style[r],n.style[r]=i):n.style[r]=t.oldCssProps[r]||""}),e||(t.oldCssProps={})}}function ze(t,e){var n=c.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}m(U,{INPUT_START:T,INPUT_MOVE:V,INPUT_END:u,INPUT_CANCEL:E,STATE_POSSIBLE:vt,STATE_BEGAN:O,STATE_CHANGED:B,STATE_ENDED:w,STATE_RECOGNIZED:D,STATE_CANCELLED:nt,STATE_FAILED:R,DIRECTION_NONE:ct,DIRECTION_LEFT:J,DIRECTION_RIGHT:Q,DIRECTION_UP:K,DIRECTION_DOWN:$,DIRECTION_HORIZONTAL:S,DIRECTION_VERTICAL:k,DIRECTION_ALL:Ht,Manager:Mt,Input:C,TouchAction:St,TouchInput:pt,MouseInput:ft,PointerEventInput:Ct,TouchMouseInput:Ot,SingleTouchInput:Bt,Recognizer:M,AttrRecognizer:A,Tap:gt,Pan:Tt,Swipe:Dt,Pinch:Rt,Rotate:xt,Press:bt,on:it,off:st,each:l,merge:rt,extend:Z,assign:m,inherit:N,bindFn:It,prefixed:lt});var Ge=typeof a<"u"?a:typeof self<"u"?self:{};Ge.Hammer=U,typeof h=="function"&&h.amd?h(function(){return U}):f.exports?f.exports=U:a[d]=U})(window,document,"Hammer")})(ce);var je=ce.exports;const ie=Be(je);function Je(){const f={contentEl:"content",ptrEl:"ptr",bodyEl:document.body,distanceToRefresh:70,loadingFunction:!1,resistance:2.5};let a={};const c={enabled:!1,distance:0,startingPositionY:0};let d=f.bodyEl.classList;const h=l=>{var Z,rt;var H;if(a={contentEl:(Z=l.contentEl)!=null?Z:document.getElementById(f.contentEl),ptrEl:l.ptrEl||document.getElementById(f.ptrEl),bodyEl:l.bodyEl||f.bodyEl,distanceToRefresh:l.distanceToRefresh||f.distanceToRefresh,loadingFunction:l.loadingFunction||f.loadingFunction,resistance:l.resistance||f.resistance,hammerOptions:(rt=l.hammerOptions)!=null?rt:{}},!a.contentEl||!a.ptrEl)return!1;d=(H=a.bodyEl)==null?void 0:H.classList;const m=new ie(a.contentEl,a.hammerOptions);m.get("pan").set({direction:ie.DIRECTION_VERTICAL}),m.on("panstart",q),m.on("pandown",z),m.on("panup",Y),m.on("panend",F)},q=()=>{c.startingPositionY=a.bodyEl.scrollTop,c.startingPositionY===0&&(c.enabled=!0)},z=l=>{c.enabled&&(l.preventDefault(),c.distance=l.distance/a.resistance,I(),_())},Y=l=>{!c.enabled||c.distance===0||(l.preventDefault(),c.distance<l.distance/a.resistance?c.distance=0:c.distance=l.distance/a.resistance,I(),_())},I=()=>{a.contentEl&&(a.contentEl.style.transform=`translate3d( 0, ${c.distance}px, 0 )`),a.ptrEl.style.transform=`translate3d( 0, ${c.distance-a.ptrEl.offsetHeight}px, 0 )`},_=()=>{c.distance>a.distanceToRefresh?d.add("ptr-refresh"):d.remove("ptr-refresh")},F=l=>{c.enabled&&(l.preventDefault(),a.contentEl&&(a.contentEl.style.transform=""),a.ptrEl.style.transform="",a.bodyEl.classList.contains("ptr-refresh")?L():P(),c.distance=0,c.enabled=!1)},L=()=>{if(d.add("ptr-loading"),!a.loadingFunction)return P();const l=a.loadingFunction();setTimeout(()=>{l.then(P)},1e3)},P=()=>{d.remove("ptr-loading"),d.remove("ptr-refresh"),d.add("ptr-reset");const l=()=>{d.remove("ptr-reset"),a.bodyEl.removeEventListener("transitionend",l,!1)};a.bodyEl.addEventListener("transitionend",l,!1)};return{init:h}}function Qe(f){const{onRefresh:a,disabled:c,distanceToRefresh:d,resistance:h,hammerOptions:q,children:z,icon:Y,loading:I,..._}=f;async function F(){await a()}const L=x.useRef(null),P=x.useRef(null),l=x.useRef(null),H=x.useRef(null);return x.useEffect(()=>{if(!c){if(L.current)return;Je().init({contentEl:P.current,ptrEl:l.current,bodyEl:document.body,distanceToRefresh:d,loadingFunction:F,resistance:h,hammerOptions:q}),L.current=!0}},[c]),c?y("div",{..._,children:z}):yt("div",{ref:H,..._,children:[yt("div",{className:"ptr-element",ref:l,children:[Y!=null?Y:y("span",{className:"genericon genericon-next"}),I!=null?I:yt("div",{className:"loading",children:[y("span",{className:"loading-ptr-1"}),y("span",{className:"loading-ptr-2"}),y("span",{className:"loading-ptr-3"})]})]}),y("div",{className:"refresh-view",ref:P,children:z})]})}var Ke=Qe,$e=Ke;const cn={component:le},tn=f=>new Promise(a=>setTimeout(a,f)),he=x.createContext(async()=>{}),ue={width:400,height:600},en=x.forwardRef(({children:f,attrs:a,scrollSize:c},d)=>{const h=x.useContext(he);return y($e,{onRefresh:h,style:{...ue,position:"relative",overflow:"hidden"},children:y("div",{ref:d,...a,children:y("div",{style:{height:c},children:f})})})}),Et={name:"PullToRefresh",render:()=>{const f=()=>Array.from({length:1e3},()=>({id:Ze.datatype.number()})),[a,c]=x.useState(f);return yt("div",{children:[y("div",{children:"pull down this list!"}),y(he.Provider,{value:x.useCallback(async()=>{await tn(500),c(f())},[]),children:y(le,{style:ue,element:en,children:a.map(d=>y("div",{style:{height:80,borderBottom:"solid 1px #ccc",background:"#fff"},children:d.id},d.id))})}),y("style",{children:`
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
`})]})}};var se,ae,oe;Et.parameters={...Et.parameters,docs:{...(se=Et.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "PullToRefresh",
  render: () => {
    const refreshItems = () => Array.from({
      length: 1000
    }, () => ({
      id: faker.datatype.number()
    }));
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
}`,...(oe=(ae=Et.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const hn=["Default"];export{Et as Default,hn as __namedExportsOrder,cn as default};
//# sourceMappingURL=PullToRefresh.stories-ca122e12.js.map
