(()=>{"use strict";function t(){let t=0;for(let e=0;e<arguments.length;e+=1)t+=+arguments[e];return t}function e(t,e){return+t-+e}function i(){let t=1;for(let e=0;e<arguments.length;e+=1){t=+t*+arguments[e]}return t}function s(t,e){return+t/+e}function n(t){return Math.pow(t,2)}function o(t,e,s){const n=u(s),o=i(t,Math.cos(n)),r=i(e,Math.sin(n));return{x:Math.round(o),y:Math.round(r)}}function r(t,e){const i=[];for(let s=0;s<=360;s++){const n=o(t,e,s);i.push(n)}return i}function a(t,e){const s=u(e),n=i(t,Math.cos(s)),o=i(t,Math.sin(s));return{x:Math.round(n),y:Math.round(o)}}function h(t){const e=[];for(let i=0;i<=360;i++){const s=a(t,i);e.push(s)}return e}function c(i,s,o,r){const a=n(e(i,o)),h=n(e(s,r));return Math.sqrt(t(a,h))}function d(t,e){return{x:Math.floor(s(t,2)),y:Math.floor(s(e,2))}}function l(t,e){const i=d(t,e),n=Math.ceil(s(i.x,2)),o=Math.ceil(s(i.y,2));return n<o?n:o}function u(t){return t*Math.PI/180}class g{constructor(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.color=i.color||"red",this.radius=i.radius||5,this.hiddenRadius=t(this.radius,1),this.direction=i.direction&&"clockwise"===i.direction?t:e,this.angle=i.startAngle||0,this.speed=i.speed||1}setupPoints(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,e=arguments.length>1?arguments[1]:void 0;this.points=t!==e&&e?r(t,e):h(t)}increment(){this.angle=this.direction(this.angle,this.speed),this.angle<0?this.angle=360:this.angle>360&&(this.angle=0)}getCurrentPosition(t,e){return{x:this.direction(t.x,this.points[this.angle].x),y:this.direction(t.y,this.points[this.angle].y),radius:e?this.radius:this.hiddenRadius,color:e?this.color:"black"}}getHiddenPosition(t){return this.getCurrentPosition(t,!1)}getVisablePosition(t){return this.getCurrentPosition(t,!0)}}class x extends g{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),t.xRadius&&this.setupPoints(t.xRadius,t.yRadius),t.isFixedCenter&&t.centerPoints&&(this.centerPts=t.centerPoints)}getInitialPosition(t){const e=this.centerPts?this.centerPts:t;return this.getVisablePosition(e)}getNextPosition(t){const e=this.centerPts?this.centerPts:t;return this.hidden=this.getHiddenPosition(e),this.increment(),this.visable=this.getVisablePosition(e),{hidden:this.hidden,visable:this.visable}}getPoint(){return{hidden:{x:this.hidden.x,y:this.hidden.y},visable:{x:this.visable.x,y:this.visable.y}}}}class P extends g{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),t.xRadius&&this.setupPoints(t.xRadius,t.yRadius),t.parentStar&&(this.parentStar=t.parentStar)}getNextPosition(t){const e=this.parentStar?this.parentStar.getPoint():t,i=this.getHiddenPosition(e.hidden);this.increment();return{hidden:i,visable:this.getVisablePosition(e.visable)}}}class p extends P{}let y,b;onmessage=e=>{if(e&&e.data&&e.data.setWidthHeight){const i=e.data.setWidthHeight[0],o=e.data.setWidthHeight[1];y=d(i,o);const r=Math.ceil(s(l(i,o),i>600?1.5:1.25)),a=i>600?t(r,50):r,h=function(t,e,i){return[{color:"#000000",radius:1,direction:"counterClockwise",startAngle:180,xRadius:e,yRadius:i,isFixedCenter:!0,centerPoints:t},{color:"#FDB813",radius:24,direction:"counterClockwise",startAngle:0,xRadius:e,yRadius:i,isFixedCenter:!0,centerPoints:t}]}(y,r,a),u=new x(h[0]),g=new x(h[1]),f=[u.getInitialPosition(),g.getInitialPosition()],M=Math.floor(s(r,i>600?3:1.65)),v=new p({color:"#FDB813",radius:12,direction:"counterClockwise",startAngle:0,speed:5,parentStar:u,xRadius:M}),w=new p({color:"#FF1009",radius:10,direction:"counterClockwise",startAngle:180,speed:5,parentStar:u,xRadius:M}),R=t(r,75),C=t(R,55),k=new P({color:"#17e3ea",radius:i>600?6:0,direction:"counterClockwise",startAngle:270,speed:1,xRadius:R,yRadius:C}),V=[v.getVisablePosition(f[0]),w.getVisablePosition(f[0])];i>600&&V.push(k.getVisablePosition(f[0])),postMessage({stars:{white:f},planets:{shownPlanet:V}}),b=setInterval((()=>{const e=u.getNextPosition(),s=g.getNextPosition(),o=[e.hidden,s.hidden],r=v.getNextPosition(),a=w.getNextPosition(),h=[r.hidden,a.hidden];i>600&&h.push(k.getHiddenPosition(o[0])),k.increment();const d=[e.visable,s.visable],l=[r.visable,a.visable];if(i>600){l.push(k.getVisablePosition(d[0]));const e=c(l[1].x,l[1].y,l[2].x,l[2].y),i=Math.ceil(n(e)),s=n(t(7,6)),o=n(t(7,5,6,5));i===s&&console.log("Touching %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),i===o&&console.log("Close touching %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),i<s&&console.log("Intersecting %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),i<o&&console.log("Close intersecting %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y)}postMessage({stars:{black:o,white:d},planets:{blackPlanet:h,shownPlanet:l}})}),100)}else e&&e.data&&e.data.stop&&clearInterval(b)}})();