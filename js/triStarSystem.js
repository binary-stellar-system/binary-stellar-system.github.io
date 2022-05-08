(()=>{"use strict";function t(){let t=0;for(let i=0;i<arguments.length;i+=1)t+=+arguments[i];return t}function i(t,i){return+t-+i}function e(){let t=1;for(let i=0;i<arguments.length;i+=1){t=+t*+arguments[i]}return t}function s(t,i){return+t/+i}function n(t){return Math.pow(t,2)}function o(t,i,s){const n=u(s),o=e(t,Math.cos(n)),r=e(i,Math.sin(n));return{x:Math.round(o),y:Math.round(r)}}function r(t,i){const e=[];for(let s=0;s<=360;s++){const n=o(t,i,s);e.push(n)}return e}function a(t,i){const s=u(i),n=e(t,Math.cos(s)),o=e(t,Math.sin(s));return{x:Math.round(n),y:Math.round(o)}}function c(t){const i=[];for(let e=0;e<=360;e++){const s=a(t,e);i.push(s)}return i}function h(e,s,o,r){const a=n(i(e,o)),c=n(i(s,r));return Math.sqrt(t(a,c))}function d(t,i){return{x:Math.floor(s(t,2)),y:Math.floor(s(i,2))}}function l(t,i){const e=d(t,i),n=Math.ceil(s(e.x,2)),o=Math.ceil(s(e.y,2));return n<o?n:o}function u(t){return t*Math.PI/180}class g{constructor(e={}){this.color=e.color||"red",this.radius=e.radius||5,this.hiddenRadius=t(this.radius,1),this.direction=e.direction&&"clockwise"===e.direction?t:i,this.angle=e.startAngle||0,this.speed=e.speed||1}setupPoints(t=30,i){this.points=t!==i&&i?r(t,i):c(t)}increment(){this.angle=this.direction(this.angle,this.speed),this.angle<0?this.angle=360:this.angle>360&&(this.angle=0)}getCurrentPosition(t,i){return{x:this.direction(t.x,this.points[this.angle].x),y:this.direction(t.y,this.points[this.angle].y),radius:i?this.radius:this.hiddenRadius,color:i?this.color:"black"}}getHiddenPosition(t){return this.getCurrentPosition(t,!1)}getVisablePosition(t){return this.getCurrentPosition(t,!0)}}class x extends g{constructor(t={}){super(t),t.xRadius&&this.setupPoints(t.xRadius,t.yRadius),t.isFixedCenter&&t.centerPoints&&(this.centerPts=t.centerPoints)}getInitialPosition(t){const i=this.centerPts?this.centerPts:t;return this.getVisablePosition(i)}getNextPosition(t){const i=this.centerPts?this.centerPts:t;return this.hidden=this.getHiddenPosition(i),this.increment(),this.visable=this.getVisablePosition(i),{hidden:this.hidden,visable:this.visable}}getPoint(){return{hidden:{x:this.hidden.x,y:this.hidden.y},visable:{x:this.visable.x,y:this.visable.y}}}}class P extends g{constructor(t={}){super(t),t.xRadius&&this.setupPoints(t.xRadius,t.yRadius),t.parentStar&&(this.parentStar=t.parentStar)}getNextPosition(t){const i=this.parentStar?this.parentStar.getPoint():t,e=this.getHiddenPosition(i.hidden);this.increment();return{hidden:e,visable:this.getVisablePosition(i.visable)}}}class p extends P{}let y,b;onmessage=i=>{if(i&&i.data&&i.data.setWidthHeight){const e=i.data.setWidthHeight[0],o=i.data.setWidthHeight[1];y=d(e,o);const r=Math.ceil(s(l(e,o),e>600?1.5:1.25)),a=e>600?t(r,50):r,c=function(t,i,e){return[{color:"#000000",radius:1,direction:"counterClockwise",startAngle:180,xRadius:i,yRadius:e,isFixedCenter:!0,centerPoints:t},{color:"#FDB813",radius:24,direction:"counterClockwise",startAngle:0,xRadius:i,yRadius:e,isFixedCenter:!0,centerPoints:t}]}(y,r,a),u=new x(c[0]),g=new x(c[1]),f=[u.getInitialPosition(),g.getInitialPosition()],M=Math.floor(s(r,e>600?3:1.65)),w=new p({color:"#FDB813",radius:12,direction:"counterClockwise",startAngle:0,speed:5,parentStar:u,xRadius:M}),R=new p({color:"#FF1009",radius:10,direction:"counterClockwise",startAngle:180,speed:5,parentStar:u,xRadius:M}),v=t(r,75),C=t(v,55),k=new P({color:"#17e3ea",radius:e>600?6:0,direction:"counterClockwise",startAngle:270,speed:1,xRadius:v,yRadius:C}),V=[w.getVisablePosition(f[0]),R.getVisablePosition(f[0])];e>600&&V.push(k.getVisablePosition(f[0])),postMessage({stars:{white:f},planets:{shownPlanet:V}}),b=setInterval((()=>{const i=u.getNextPosition(),s=g.getNextPosition(),o=[i.hidden,s.hidden],r=w.getNextPosition(),a=R.getNextPosition(),c=[r.hidden,a.hidden];e>600&&c.push(k.getHiddenPosition(o[0])),k.increment();const d=[i.visable,s.visable],l=[r.visable,a.visable];if(e>600){l.push(k.getVisablePosition(d[0]));const i=h(l[1].x,l[1].y,l[2].x,l[2].y),e=Math.ceil(n(i)),s=n(t(7,6)),o=n(t(7,5,6,5));e===s&&console.log("Touching %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),e===o&&console.log("Close touching %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),e<s&&console.log("Intersecting %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y),e<o&&console.log("Close intersecting %s %s %s %s",l[1].x,l[1].y,l[2].x,l[2].y)}postMessage({stars:{black:o,white:d},planets:{blackPlanet:c,shownPlanet:l}})}),100)}else i&&i.data&&i.data.stop&&clearInterval(b)}})();
//# sourceMappingURL=triStarSystem.js.source.map