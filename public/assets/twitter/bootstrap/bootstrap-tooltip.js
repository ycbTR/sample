/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,n,i){var r,o,s,a,l;for(this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.enabled=!0,s=this.options.trigger.split(" "),l=s.length;l--;)a=s[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(r="hover"==a?"mouseenter":"focus",o="hover"==a?"mouseleave":"blur",this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var n,i=t.fn[this.type].defaults,r={};return this._options&&t.each(this._options,function(t,e){i[t]!=e&&(r[t]=e)},this),n=t(e.currentTarget)[this.type](r).data(this.type),n.options.delay&&n.options.delay.show?(clearTimeout(this.timeout),n.hoverState="in",void(this.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show))):n.show()},leave:function(e){var n=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),n.options.delay&&n.options.delay.hide?(n.hoverState="out",void(this.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide))):n.hide()},show:function(){var e,n,i,r,o,s,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),n=this.getPosition(),i=e[0].offsetWidth,r=e[0].offsetHeight,o){case"bottom":s={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":s={top:n.top-r,left:n.left+n.width/2-i/2};break;case"left":s={top:n.top+n.height/2-r/2,left:n.left-i};break;case"right":s={top:n.top+n.height/2-r/2,left:n.left+n.width}}this.applyPlacement(s,o),this.$element.trigger("shown")}},applyPlacement:function(t,e){var n,i,r,o,s=this.tip(),a=s[0].offsetWidth,l=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),n=s[0].offsetWidth,i=s[0].offsetHeight,"top"==e&&i!=l&&(t.top=t.top+l-i,o=!0),"bottom"==e||"top"==e?(r=0,t.left<0&&(r=-2*t.left,t.left=0,s.offset(t),n=s[0].offsetWidth,i=s[0].offsetHeight),this.replaceArrow(r-a+n,n,"left")):this.replaceArrow(i-l,i,"top"),o&&s.offset(t)},replaceArrow:function(t,e,n){this.arrow().css(n,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){n.off(t.support.transition.end).detach()},500);n.one(t.support.transition.end,function(){clearTimeout(e),n.detach()})}var n=this.tip(),i=t.Event("hide");return this.$element.trigger(i),i.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():n.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var n=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=t.fn.tooltip;t.fn.tooltip=function(n){return this.each(function(){var i=t(this),r=i.data("tooltip"),o="object"==typeof n&&n;r||i.data("tooltip",r=new e(this,o)),"string"==typeof n&&r[n]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(window.jQuery);