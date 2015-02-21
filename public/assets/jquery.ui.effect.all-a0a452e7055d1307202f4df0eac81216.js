/*!
 * jQuery UI Effects 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(t,e){var i="ui-effects-";t.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){function i(t,e,i){var n=h[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function n(e){var i=c(),n=i._rgba=[];return e=e.toLowerCase(),p(l,function(t,s){var r,o=s.re.exec(e),a=o&&s.parse(o),l=s.space||"rgba";return a?(r=i[l](a),i[u[l].cache]=r[u[l].cache],n=i._rgba=r._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&t.extend(n,r.transparent),i):r[e]}function s(t,e,i){return i=(i+1)%1,1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}var r,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],c=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=c.support={},f=t("<p>")[0],p=t.each;f.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=f.style.backgroundColor.indexOf("rgba")>-1,p(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),c.fn=t.extend(c.prototype,{parse:function(s,o,a,l){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(o),o=e);var h=this,d=t.type(s),f=this._rgba=[];return o!==e&&(s=[s,o,a,l],d="array"),"string"===d?this.parse(n(s)||r._default):"array"===d?(p(u.rgba.props,function(t,e){f[e.idx]=i(s[e.idx],e)}),this):"object"===d?(s instanceof c?p(u,function(t,e){s[e.cache]&&(h[e.cache]=s[e.cache].slice())}):p(u,function(e,n){var r=n.cache;p(n.props,function(t,e){if(!h[r]&&n.to){if("alpha"===t||null==s[t])return;h[r]=n.to(h._rgba)}h[r][e.idx]=i(s[t],e,!0)}),h[r]&&t.inArray(null,h[r].slice(0,3))<0&&(h[r][3]=1,n.from&&(h._rgba=n.from(h[r])))}),this):void 0},is:function(t){var e=c(t),i=!0,n=this;return p(u,function(t,s){var r,o=e[s.cache];return o&&(r=n[s.cache]||s.to&&s.to(n._rgba)||[],p(s.props,function(t,e){return null!=o[e.idx]?i=o[e.idx]===r[e.idx]:void 0})),i}),i},_space:function(){var t=[],e=this;return p(u,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=c(t),s=n._space(),r=u[s],o=0===this.alpha()?c("transparent"):this,a=o[r.cache]||r.to(o._rgba),l=a.slice();return n=n[r.cache],p(r.props,function(t,s){var r=s.idx,o=a[r],c=n[r],u=h[s.type]||{};null!==c&&(null===o?l[r]=c:(u.mod&&(c-o>u.mod/2?o+=u.mod:o-c>u.mod/2&&(o-=u.mod)),l[r]=i((c-o)*e+o,s)))}),this[s](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),s=c(e)._rgba;return c(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,r=t[2]/255,o=t[3],a=Math.max(n,s,r),l=Math.min(n,s,r),c=a-l,u=a+l,h=.5*u;return e=l===a?0:n===a?60*(s-r)/c+360:s===a?60*(r-n)/c+120:60*(n-s)/c+240,i=0===c?0:.5>=h?c/u:c/(2-u),[Math.round(e)%360,i,h,null==o?1:o]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],r=t[3],o=.5>=n?n*(1+i):n+i-n*i,a=2*n-o;return[Math.round(255*s(a,o,e+1/3)),Math.round(255*s(a,o,e)),Math.round(255*s(a,o,e-1/3)),r]},p(u,function(n,s){var r=s.props,o=s.cache,l=s.to,u=s.from;c.fn[n]=function(n){if(l&&!this[o]&&(this[o]=l(this._rgba)),n===e)return this[o].slice();var s,a=t.type(n),h="array"===a||"object"===a?n:arguments,d=this[o].slice();return p(r,function(t,e){var n=h["object"===a?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),u?(s=c(u(d)),s[o]=d,s):c(d)},p(r,function(e,i){c.fn[e]||(c.fn[e]=function(s){var r,o=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,c=this[l](),u=c[i.idx];return"undefined"===o?u:("function"===o&&(s=s.call(this,u),o=t.type(s)),null==s&&i.empty?this:("string"===o&&(r=a.exec(s),r&&(s=u+parseFloat(r[2])*("+"===r[1]?1:-1))),c[i.idx]=s,this[l](c)))})})}),c.hook=function(e){var i=e.split(" ");p(i,function(e,i){t.cssHooks[i]={set:function(e,s){var r,o,a="";if("transparent"!==s&&("string"!==t.type(s)||(r=n(s)))){if(s=c(r||s),!d.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===a||"transparent"===a)&&o&&o.style;)try{a=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(a&&"transparent"!==a?a:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=c(e.elem,i),e.end=c(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},c.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return p(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},r=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,r={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],"string"==typeof s[i]&&(r[t.camelCase(i)]=s[i]);else for(i in s)"string"==typeof s[i]&&(r[i]=s[i]);return r}function n(e,i){var n,s,o={};for(n in i)s=i[n],e[n]!==s&&(r[n]||(t.fx.step[n]||!isNaN(parseFloat(s)))&&(o[n]=s));return o}var s=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,r,o,a){var l=t.speed(r,o,a);return this.queue(function(){var r,o=t(this),a=o.attr("class")||"",c=l.children?o.find("*").addBack():o;c=c.map(function(){var e=t(this);return{el:e,start:i(this)}}),r=function(){t.each(s,function(t,i){e[i]&&o[i+"Class"](e[i])})},r(),c=c.map(function(){return this.end=i(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",a),c=c.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,c.get()).done(function(){r(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,r){return n?t.effects.animateClass.call(this,{add:i},n,s,r):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(n,s,r,o,a){return"boolean"==typeof s||s===e?r?t.effects.animateClass.call(this,s?{add:n}:{remove:n},r,o,a):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},s,r,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,r){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,r)}})}(),function(){function n(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function s(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var n=0;n<e.length;n++)null!==e[n]&&t.data(i+e[n],t[0].style[e[n]])},restore:function(t,n){var s,r;for(r=0;r<n.length;r++)null!==n[r]&&(s=t.data(i+n[r]),s===e&&(s=""),t.css(n[r],s))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(o){r=document.body}return e.wrap(n),(e[0]===r||t.contains(e[0],r))&&t(r).focus(),n=e.parent(),"static"===e.css("position")?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var r=e.cssUnit(i);r[0]>0&&(s[i]=r[0]*n+r[1])}),s}}),t.fn.extend({effect:function(){function e(e){function n(){t.isFunction(r)&&r.call(s[0]),t.isFunction(e)&&e()}var s=t(this),r=i.complete,a=i.mode;(s.is(":hidden")?"hide"===a:"show"===a)?(s[a](),n()):o.call(s[0],i,n)}var i=n.apply(this,arguments),s=i.mode,r=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?s?this[s](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):r===!1?this.each(e):this.queue(r||"fx",e)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),/*!
 * jQuery UI Effects Blind 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(n,s){var r,o,a,l=t(this),c=["position","top","bottom","left","right","height","width"],u=t.effects.setMode(l,n.mode||"hide"),h=n.direction||"up",d=e.test(h),f=d?"height":"width",p=d?"top":"left",m=i.test(h),g={},v="show"===u;l.parent().is(".ui-effects-wrapper")?t.effects.save(l.parent(),c):t.effects.save(l,c),l.show(),r=t.effects.createWrapper(l).css({overflow:"hidden"}),o=r[f](),a=parseFloat(r.css(p))||0,g[f]=v?o:0,m||(l.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[p]=v?a:o+a),v&&(r.css(f,0),m||r.css(p,a+o)),r.animate(g,{duration:n.duration,easing:n.easing,queue:!1,complete:function(){"hide"===u&&l.hide(),t.effects.restore(l,c),t.effects.removeWrapper(l),s()}})}}(jQuery),/*!
 * jQuery UI Effects Bounce 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.bounce=function(e,i){var n,s,r,o=t(this),a=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),c="hide"===l,u="show"===l,h=e.direction||"up",d=e.distance,f=e.times||5,p=2*f+(u||c?1:0),m=e.duration/p,g=e.easing,v="up"===h||"down"===h?"top":"left",y="up"===h||"left"===h,b=o.queue(),w=b.length;for((u||c)&&a.push("opacity"),t.effects.save(o,a),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(r={opacity:1},r[v]=0,o.css("opacity",0).css(v,y?2*-d:2*d).animate(r,m,g)),c&&(d/=Math.pow(2,f-1)),r={},r[v]=0,n=0;f>n;n++)s={},s[v]=(y?"-=":"+=")+d,o.animate(s,m,g).animate(r,m,g),d=c?2*d:d/2;c&&(s={opacity:0},s[v]=(y?"-=":"+=")+d,o.animate(s,m,g)),o.queue(function(){c&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,p+1))),o.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Clip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.clip=function(e,i){var n,s,r,o=t(this),a=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),c="show"===l,u=e.direction||"vertical",h="vertical"===u,d=h?"height":"width",f=h?"top":"left",p={};t.effects.save(o,a),o.show(),n=t.effects.createWrapper(o).css({overflow:"hidden"}),s="IMG"===o[0].tagName?n:o,r=s[d](),c&&(s.css(d,0),s.css(f,r/2)),p[d]=c?r:0,p[f]=c?0:r/2,s.animate(p,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){c||o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Drop 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.drop=function(e,i){var n,s=t(this),r=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(s,e.mode||"hide"),a="show"===o,l=e.direction||"left",c="up"===l||"down"===l?"top":"left",u="up"===l||"left"===l?"pos":"neg",h={opacity:a?1:0};t.effects.save(s,r),s.show(),t.effects.createWrapper(s),n=e.distance||s["top"===c?"outerHeight":"outerWidth"](!0)/2,a&&s.css("opacity",0).css(c,"pos"===u?-n:n),h[c]=(a?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+n,s.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,r),t.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Explode 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.explode=function(e,i){function n(){b.push(this),b.length===h*d&&s()}function s(){f.css({visibility:"visible"}),t(b).remove(),m||f.hide(),i()}var r,o,a,l,c,u,h=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=h,f=t(this),p=t.effects.setMode(f,e.mode||"hide"),m="show"===p,g=f.show().css("visibility","hidden").offset(),v=Math.ceil(f.outerWidth()/d),y=Math.ceil(f.outerHeight()/h),b=[];for(r=0;h>r;r++)for(l=g.top+r*y,u=r-(h-1)/2,o=0;d>o;o++)a=g.left+o*v,c=o-(d-1)/2,f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-r*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:a+(m?c*v:0),top:l+(m?u*y:0),opacity:m?0:1}).animate({left:a+(m?0:c*v),top:l+(m?0:u*y),opacity:m?1:0},e.duration||500,e.easing,n)}}(jQuery),/*!
 * jQuery UI Effects Fade 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fade=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"toggle");n.animate({opacity:s},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),/*!
 * jQuery UI Effects Fold 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fold=function(e,i){var n,s,r=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(r,e.mode||"hide"),l="show"===a,c="hide"===a,u=e.size||15,h=/([0-9]+)%/.exec(u),d=!!e.horizFirst,f=l!==d,p=f?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(r,o),r.show(),n=t.effects.createWrapper(r).css({overflow:"hidden"}),s=f?[n.width(),n.height()]:[n.height(),n.width()],h&&(u=parseInt(h[1],10)/100*s[c?0:1]),l&&n.css(d?{height:0,width:u}:{height:u,width:0}),g[p[0]]=l?s[0]:u,v[p[1]]=l?s[1]:0,n.animate(g,m,e.easing).animate(v,m,e.easing,function(){c&&r.hide(),t.effects.restore(r,o),t.effects.removeWrapper(r),i()})}}(jQuery),/*!
 * jQuery UI Effects Highlight 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.highlight=function(e,i){var n=t(this),s=["backgroundImage","backgroundColor","opacity"],r=t.effects.setMode(n,e.mode||"show"),o={backgroundColor:n.css("backgroundColor")};"hide"===r&&(o.opacity=0),t.effects.save(n,s),n.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===r&&n.hide(),t.effects.restore(n,s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Pulsate 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.pulsate=function(e,i){var n,s=t(this),r=t.effects.setMode(s,e.mode||"show"),o="show"===r,a="hide"===r,l=o||"hide"===r,c=2*(e.times||5)+(l?1:0),u=e.duration/c,h=0,d=s.queue(),f=d.length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),h=1),n=1;c>n;n++)s.animate({opacity:h},u,e.easing),h=1-h;s.animate({opacity:h},u,e.easing),s.queue(function(){a&&s.hide(),i()}),f>1&&d.splice.apply(d,[1,0].concat(d.splice(f,c+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Scale 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.puff=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"hide"),r="hide"===s,o=parseInt(e.percent,10)||150,a=o/100,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:r?o:100,from:r?l:{height:l.height*a,width:l.width*a,outerHeight:l.outerHeight*a,outerWidth:l.outerWidth*a}}),n.effect(e)},t.effects.effect.scale=function(e,i){var n=t(this),s=t.extend(!0,{},e),r=t.effects.setMode(n,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===r?0:100),a=e.direction||"both",l=e.origin,c={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},u={y:"horizontal"!==a?o/100:1,x:"vertical"!==a?o/100:1};s.effect="size",s.queue=!1,s.complete=i,"effect"!==r&&(s.origin=l||["middle","center"],s.restore=!0),s.from=e.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:c),s.to={height:c.height*u.y,width:c.width*u.x,outerHeight:c.outerHeight*u.y,outerWidth:c.outerWidth*u.x},s.fade&&("show"===r&&(s.from.opacity=0,s.to.opacity=1),"hide"===r&&(s.from.opacity=1,s.to.opacity=0)),n.effect(s)},t.effects.effect.size=function(e,i){var n,s,r,o=t(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],c=["width","height","overflow"],u=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],f=t.effects.setMode(o,e.mode||"effect"),p=e.restore||"effect"!==f,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),y=p?a:l,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===f&&o.show(),n={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===f?(o.from=e.to||b,o.to=e.from||n):(o.from=e.from||("show"===f?b:n),o.to=e.to||("hide"===f?b:n)),r={from:{y:o.from.height/n.height,x:o.from.width/n.width},to:{y:o.to.height/n.height,x:o.to.width/n.width}},("box"===m||"both"===m)&&(r.from.y!==r.to.y&&(y=y.concat(h),o.from=t.effects.setTransition(o,h,r.from.y,o.from),o.to=t.effects.setTransition(o,h,r.to.y,o.to)),r.from.x!==r.to.x&&(y=y.concat(d),o.from=t.effects.setTransition(o,d,r.from.x,o.from),o.to=t.effects.setTransition(o,d,r.to.x,o.to))),("content"===m||"both"===m)&&r.from.y!==r.to.y&&(y=y.concat(u).concat(c),o.from=t.effects.setTransition(o,u,r.from.y,o.from),o.to=t.effects.setTransition(o,u,r.to.y,o.to)),t.effects.save(o,y),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(s=t.effects.getBaseline(g,n),o.from.top=(n.outerHeight-o.outerHeight())*s.y,o.from.left=(n.outerWidth-o.outerWidth())*s.x,o.to.top=(n.outerHeight-o.to.outerHeight)*s.y,o.to.left=(n.outerWidth-o.to.outerWidth)*s.x),o.css(o.from),("content"===m||"both"===m)&&(h=h.concat(["marginTop","marginBottom"]).concat(u),d=d.concat(["marginLeft","marginRight"]),c=a.concat(h).concat(d),o.find("*[width]").each(function(){var i=t(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};p&&t.effects.save(i,c),i.from={height:n.height*r.from.y,width:n.width*r.from.x,outerHeight:n.outerHeight*r.from.y,outerWidth:n.outerWidth*r.from.x},i.to={height:n.height*r.to.y,width:n.width*r.to.x,outerHeight:n.height*r.to.y,outerWidth:n.width*r.to.x},r.from.y!==r.to.y&&(i.from=t.effects.setTransition(i,h,r.from.y,i.from),i.to=t.effects.setTransition(i,h,r.to.y,i.to)),r.from.x!==r.to.x&&(i.from=t.effects.setTransition(i,d,r.from.x,i.from),i.to=t.effects.setTransition(i,d,r.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){p&&t.effects.restore(i,c)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===f&&o.hide(),t.effects.restore(o,y),p||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var n=parseInt(i,10),s=t?o.to.left:o.to.top;return"auto"===i?s+"px":n+s+"px"})})),t.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Shake 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.shake=function(e,i){var n,s=t(this),r=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(s,e.mode||"effect"),a=e.direction||"left",l=e.distance||20,c=e.times||3,u=2*c+1,h=Math.round(e.duration/u),d="up"===a||"down"===a?"top":"left",f="up"===a||"left"===a,p={},m={},g={},v=s.queue(),y=v.length;for(t.effects.save(s,r),s.show(),t.effects.createWrapper(s),p[d]=(f?"-=":"+=")+l,m[d]=(f?"+=":"-=")+2*l,g[d]=(f?"-=":"+=")+2*l,s.animate(p,h,e.easing),n=1;c>n;n++)s.animate(m,h,e.easing).animate(g,h,e.easing);s.animate(m,h,e.easing).animate(p,h/2,e.easing).queue(function(){"hide"===o&&s.hide(),t.effects.restore(s,r),t.effects.removeWrapper(s),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Slide 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.slide=function(e,i){var n,s=t(this),r=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(s,e.mode||"show"),a="show"===o,l=e.direction||"left",c="up"===l||"down"===l?"top":"left",u="up"===l||"left"===l,h={};t.effects.save(s,r),s.show(),n=e.distance||s["top"===c?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(s).css({overflow:"hidden"}),a&&s.css(c,u?isNaN(n)?"-"+n:-n:n),h[c]=(a?u?"+=":"-=":u?"-=":"+=")+n,s.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,r),t.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Transfer 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.transfer=function(e,i){var n=t(this),s=t(e.to),r="fixed"===s.css("position"),o=t("body"),a=r?o.scrollTop():0,l=r?o.scrollLeft():0,c=s.offset(),u={top:c.top-a,left:c.left-l,height:s.innerHeight(),width:s.innerWidth()},h=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:h.top-a,left:h.left-l,height:n.innerHeight(),width:n.innerWidth(),position:r?"fixed":"absolute"}).animate(u,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery);