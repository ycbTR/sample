/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,autoReload:!1,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};e.fn.bxSlider=function(o){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(o)}),this;var r={},s=this;t.el=this;var a=e(window).width(),l=e(window).height(),c=function(){function t(e,t,n){var i=(e-n*(t-1))/t;return Math.floor(i)}function i(e){for(var t in e)r.settings[t]=e[t]}function l(){r.settings.slides&&(r.settings.maxSlides=r.settings.slides,r.settings.minSlides=r.settings.slides,r.settings.slideWidth=t(a,r.settings.slides,r.settings.slideMargin))}function c(e){e=e.replace(/([a-zA-Z0-9]+?):/g,'"$1":'),e=e.replace(/'/g,'"');var t=jQuery.parseJSON(e);return t}r.settings=e.extend({},n,o),l();var d=e(window).width();a=d;var p=e(s).attr("data-options");if(p){var f=p.charAt(p.length-1),h=p.charAt(0);"{"!=h&&"}"!=f&&(p="{"+p+"}");var g=c(p);for(var m in g)r.settings[m]=g[m];l()}var v=e(s).attr("data-breaks");if(v&&(r.settings.breaks=c(v)),r.settings.breaks){r.settings.breaks.sort(function(e,t){return e.screen-t.screen});for(var y=0;y<r.settings.breaks.length;++y){var b,x=r.settings.breaks[y],w={},T=x.screen;y<r.settings.breaks.length-1?(w=r.settings.breaks[y+1],b=w.screen,d>=T&&b>d&&i(x)):d>=T&&i(x)}l()}r.settings.slideWidth=parseInt(r.settings.slideWidth),r.children=s.children(r.settings.slideSelector),r.children.length<r.settings.minSlides&&(r.settings.minSlides=r.children.length),r.children.length<r.settings.maxSlides&&(r.settings.maxSlides=r.children.length),r.settings.randomStart&&(r.settings.startSlide=Math.floor(Math.random()*r.children.length)),r.active={index:r.settings.startSlide},r.carousel=r.settings.minSlides>1||r.settings.maxSlides>1,r.carousel&&(r.settings.preloadImages="all"),r.minThreshold=r.settings.minSlides*r.settings.slideWidth+(r.settings.minSlides-1)*r.settings.slideMargin,r.maxThreshold=r.settings.maxSlides*r.settings.slideWidth+(r.settings.maxSlides-1)*r.settings.slideMargin,r.working=!1,r.controls={},r.interval=null,r.animProp="vertical"==r.settings.mode?"top":"left",r.usingCSS=r.settings.useCSS&&"fade"!=r.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(void 0!==e.style[t[n]])return r.cssPrefix=t[n].replace("Perspective","").toLowerCase(),r.animProp="-"+r.cssPrefix+"-transform",!0;return!1}(),"vertical"==r.settings.mode&&(r.settings.maxSlides=r.settings.minSlides),s.data("origStyle",s.attr("style")),s.children(r.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),u()},u=function(){s.wrap('<div class="'+r.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),r.viewport=s.parent(),r.loader=e('<div class="bx-loading" />'),r.viewport.prepend(r.loader),s.css({width:"horizontal"==r.settings.mode?100*r.children.length+215+"%":"auto",position:"relative"}),r.usingCSS&&r.settings.easing?s.css("-"+r.cssPrefix+"-transition-timing-function",r.settings.easing):r.settings.easing||(r.settings.easing="swing");m();r.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),r.viewport.parent().css({maxWidth:h()}),r.settings.pager||r.viewport.parent().css({margin:"0 auto 0px"}),r.children.css({"float":"horizontal"==r.settings.mode?"left":"none",listStyle:"none",position:"relative"}),r.children.css("width",g()),"horizontal"==r.settings.mode&&r.settings.slideMargin>0&&r.children.css("marginRight",r.settings.slideMargin),"vertical"==r.settings.mode&&r.settings.slideMargin>0&&r.children.css("marginBottom",r.settings.slideMargin),"fade"==r.settings.mode&&(r.children.css({position:"absolute",zIndex:0,display:"none"}),r.children.eq(r.settings.startSlide).css({zIndex:r.settings.slideZIndex,display:"block"})),r.controls.el=e('<div class="bx-controls" />'),r.settings.captions&&S(),r.active.last=r.settings.startSlide==v()-1,r.settings.video&&s.fitVids();var t=r.children.eq(r.settings.startSlide);"all"==r.settings.preloadImages&&(t=r.children),r.settings.ticker?r.settings.pager=!1:(r.settings.pager&&T(),r.settings.controls&&C(),r.settings.auto&&r.settings.autoControls&&k(),(r.settings.controls||r.settings.autoControls||r.settings.pager)&&r.viewport.after(r.controls.el)),d(t,p)},d=function(t,n){var i=t.find("img, iframe").length;if(0==i)return void n();var o=0;t.find("img, iframe").each(function(){e(this).one("load",function(){++o==i&&n()}).each(function(){this.complete&&e(this).load()})})},p=function(){if(r.settings.parentSelector&&r.settings.removeParentClass&&e(r.settings.parentSelector).removeClass(r.settings.removeParentClass),r.settings.infiniteLoop&&"fade"!=r.settings.mode&&!r.settings.ticker){var t="vertical"==r.settings.mode?r.settings.minSlides:r.settings.maxSlides,n=r.children.slice(0,t).clone().addClass("bx-clone"),i=r.children.slice(-t).clone().addClass("bx-clone");s.append(n).prepend(i)}r.loader.remove(),b(),"vertical"==r.settings.mode&&(r.settings.adaptiveHeight=!0),r.viewport.height(f()),s.redrawSlider(),r.settings.onSliderLoad(r.active.index),r.initialized=!0,r.settings.responsive&&e(window).bind("resize",B),r.settings.auto&&r.settings.autoStart&&(v()>1||r.settings.autoSlideForOnePage)&&H(),r.settings.ticker&&F(),r.settings.pager&&A(r.settings.startSlide),r.settings.controls&&P(),r.settings.touchEnabled&&!r.settings.ticker&&q()},f=function(){var t=0,n=e();if("vertical"==r.settings.mode||r.settings.adaptiveHeight)if(r.carousel){var o=1==r.settings.moveSlides?r.active.index:r.active.index*y();for(n=r.children.eq(o),i=1;i<=r.settings.maxSlides-1;i++)n=n.add(o+i>=r.children.length?r.children.eq(i-1):r.children.eq(o+i))}else n=r.children.eq(r.active.index);else n=r.children;return"vertical"==r.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),r.settings.slideMargin>0&&(t+=r.settings.slideMargin*(r.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),"border-box"==r.viewport.css("box-sizing")?t+=parseFloat(r.viewport.css("padding-top"))+parseFloat(r.viewport.css("padding-bottom"))+parseFloat(r.viewport.css("border-top-width"))+parseFloat(r.viewport.css("border-bottom-width")):"padding-box"==r.viewport.css("box-sizing")&&(t+=parseFloat(r.viewport.css("padding-top"))+parseFloat(r.viewport.css("padding-bottom"))),t},h=function(){var e="100%";return r.settings.slideWidth>0&&(e="horizontal"==r.settings.mode?r.settings.maxSlides*r.settings.slideWidth+(r.settings.maxSlides-1)*r.settings.slideMargin:r.settings.slideWidth),e},g=function(){var e=r.settings.slideWidth,t=r.viewport.width();return 0==r.settings.slideWidth||r.settings.slideWidth>t&&!r.carousel||"vertical"==r.settings.mode?e=t:r.settings.maxSlides>1&&"horizontal"==r.settings.mode&&(t>r.maxThreshold||t<r.minThreshold&&(e=(t-r.settings.slideMargin*(r.settings.minSlides-1))/r.settings.minSlides)),e},m=function(){var e=1;if("horizontal"==r.settings.mode&&r.settings.slideWidth>0)if(r.viewport.width()<r.minThreshold)e=r.settings.minSlides;else if(r.viewport.width()>r.maxThreshold)e=r.settings.maxSlides;else{var t=r.children.first().width()+r.settings.slideMargin;e=Math.floor((r.viewport.width()+r.settings.slideMargin)/t)}else"vertical"==r.settings.mode&&(e=r.settings.minSlides);return e},v=function(){var e=0;if(r.settings.moveSlides>0)if(r.settings.infiniteLoop)e=Math.ceil(r.children.length/y());else for(var t=0,n=0;t<r.children.length;)++e,t=n+m(),n+=r.settings.moveSlides<=m()?r.settings.moveSlides:m();else e=Math.ceil(r.children.length/m());return e},y=function(){return r.settings.moveSlides>0&&r.settings.moveSlides<=m()?r.settings.moveSlides:m()},b=function(){if(r.children.length>r.settings.maxSlides&&r.active.last&&!r.settings.infiniteLoop){if("horizontal"==r.settings.mode){var e=r.children.last(),t=e.position();x(-(t.left-(r.viewport.width()-e.outerWidth())),"reset",0)}else if("vertical"==r.settings.mode){var n=r.children.length-r.settings.minSlides,t=r.children.eq(n).position();x(-t.top,"reset",0)}}else{var t=r.children.eq(r.active.index*y()).position();r.active.index==v()-1&&(r.active.last=!0),void 0!=t&&("horizontal"==r.settings.mode?x(-t.left,"reset",0):"vertical"==r.settings.mode&&x(-t.top,"reset",0))}},x=function(e,t,n,i){if(r.usingCSS){var o="vertical"==r.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";s.css("-"+r.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"==t?(s.css(r.animProp,o),s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==t?s.css(r.animProp,o):"ticker"==t&&(s.css("-"+r.cssPrefix+"-transition-timing-function","linear"),s.css(r.animProp,o),s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),x(i.resetValue,"reset",0),M()}))}else{var a={};a[r.animProp]=e,"slide"==t?s.animate(a,n,r.settings.easing,function(){D()}):"reset"==t?s.css(r.animProp,e):"ticker"==t&&s.animate(a,speed,"linear",function(){x(i.resetValue,"reset",0),M()})}},w=function(){for(var t="",n=v(),i=0;n>i;i++){var o="";r.settings.buildPager&&e.isFunction(r.settings.buildPager)?(o=r.settings.buildPager(i),r.pagerEl.addClass("bx-custom-pager")):(o=i+1,r.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+o+"</a></div>"}r.pagerEl.html(t)},T=function(){r.settings.pagerCustom?r.pagerEl=e(r.settings.pagerCustom):(r.pagerEl=e('<div class="bx-pager" />'),r.settings.pagerSelector?e(r.settings.pagerSelector).html(r.pagerEl):r.controls.el.addClass("bx-has-pager").append(r.pagerEl),w()),r.pagerEl.on("click","a",j)},C=function(){r.controls.next=e('<a class="bx-next" href="">'+r.settings.nextText+"</a>"),r.controls.prev=e('<a class="bx-prev" href="">'+r.settings.prevText+"</a>"),r.controls.next.bind("click",E),r.controls.prev.bind("click",$),r.settings.nextSelector&&e(r.settings.nextSelector).append(r.controls.next),r.settings.prevSelector&&e(r.settings.prevSelector).append(r.controls.prev),r.settings.nextSelector||r.settings.prevSelector||(r.controls.directionEl=e('<div class="bx-controls-direction" />'),r.controls.directionEl.append(r.controls.prev).append(r.controls.next),r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))},k=function(){r.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+r.settings.startText+"</a></div>"),r.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+r.settings.stopText+"</a></div>"),r.controls.autoEl=e('<div class="bx-controls-auto" />'),r.controls.autoEl.on("click",".bx-start",_),r.controls.autoEl.on("click",".bx-stop",N),r.settings.autoControlsCombine?r.controls.autoEl.append(r.controls.start):r.controls.autoEl.append(r.controls.start).append(r.controls.stop),r.settings.autoControlsSelector?e(r.settings.autoControlsSelector).html(r.controls.autoEl):r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl),L(r.settings.autoStart?"stop":"start")},S=function(){r.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&(""+t).length&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},E=function(e){r.settings.auto&&s.stopAuto(),s.goToNextSlide(),e.preventDefault()},$=function(e){r.settings.auto&&s.stopAuto(),s.goToPrevSlide(),e.preventDefault()},_=function(e){s.startAuto(),e.preventDefault()},N=function(e){s.stopAuto(),e.preventDefault()},j=function(t){r.settings.auto&&s.stopAuto();var n=e(t.currentTarget);if(void 0!==n.attr("data-slide-index")){var i=parseInt(n.attr("data-slide-index"));i!=r.active.index&&s.goToSlide(i),t.preventDefault()}},A=function(t){var n=r.children.length;return"short"==r.settings.pagerType?(r.settings.maxSlides>1&&(n=Math.ceil(r.children.length/r.settings.maxSlides)),void r.pagerEl.html(t+1+r.settings.pagerShortSeparator+n)):(r.pagerEl.find("a").removeClass("active"),void r.pagerEl.each(function(n,i){e(i).find("a").eq(t).addClass("active")}))},D=function(){if(r.settings.infiniteLoop){var e="";0==r.active.index?e=r.children.eq(0).position():r.active.index==v()-1&&r.carousel?e=r.children.eq((v()-1)*y()).position():r.active.index==r.children.length-1&&(e=r.children.eq(r.children.length-1).position()),e&&("horizontal"==r.settings.mode?x(-e.left,"reset",0):"vertical"==r.settings.mode&&x(-e.top,"reset",0))}r.working=!1,r.settings.onSlideAfter(r.children.eq(r.active.index),r.oldIndex,r.active.index)},L=function(e){r.settings.autoControlsCombine?r.controls.autoEl.html(r.controls[e]):(r.controls.autoEl.find("a").removeClass("active"),r.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},P=function(){1==v()?(r.controls.prev.addClass("disabled"),r.controls.next.addClass("disabled")):!r.settings.infiniteLoop&&r.settings.hideControlOnEnd&&(0==r.active.index?(r.controls.prev.addClass("disabled"),r.controls.next.removeClass("disabled")):r.active.index==v()-1?(r.controls.next.addClass("disabled"),r.controls.prev.removeClass("disabled")):(r.controls.prev.removeClass("disabled"),r.controls.next.removeClass("disabled")))},H=function(){if(r.settings.autoDelay>0){setTimeout(s.startAuto,r.settings.autoDelay)}else s.startAuto();r.settings.autoHover&&s.hover(function(){r.interval&&(s.stopAuto(!0),r.autoPaused=!0)},function(){r.autoPaused&&(s.startAuto(!0),r.autoPaused=null)})},F=function(){var t=0;if("next"==r.settings.autoDirection)s.append(r.children.clone().addClass("bx-clone"));else{s.prepend(r.children.clone().addClass("bx-clone"));var n=r.children.first().position();t="horizontal"==r.settings.mode?-n.left:-n.top}x(t,"reset",0),r.settings.pager=!1,r.settings.controls=!1,r.settings.autoControls=!1,r.settings.tickerHover&&!r.usingCSS&&r.viewport.hover(function(){s.stop()},function(){var t=0;r.children.each(function(){t+="horizontal"==r.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var n=r.settings.speed/t,i="horizontal"==r.settings.mode?"left":"top",o=n*(t-Math.abs(parseInt(s.css(i))));M(o)}),M()},M=function(e){speed=e?e:r.settings.speed;var t={left:0,top:0},n={left:0,top:0};"next"==r.settings.autoDirection?t=s.find(".bx-clone").first().position():n=r.children.first().position();var i="horizontal"==r.settings.mode?-t.left:-t.top,o="horizontal"==r.settings.mode?-n.left:-n.top,a={resetValue:o};x(i,"ticker",speed,a)},q=function(){r.touch={start:{x:0,y:0},end:{x:0,y:0}},r.viewport.bind("touchstart",O)},O=function(e){if(r.working)e.preventDefault();else{r.touch.originalPos=s.position();var t=e.originalEvent;r.touch.start.x=t.changedTouches[0].pageX,r.touch.start.y=t.changedTouches[0].pageY,r.viewport.bind("touchmove",I),r.viewport.bind("touchend",W)}},I=function(e){var t=e.originalEvent,n=Math.abs(t.changedTouches[0].pageX-r.touch.start.x),i=Math.abs(t.changedTouches[0].pageY-r.touch.start.y);if(3*n>i&&r.settings.preventDefaultSwipeX?e.preventDefault():3*i>n&&r.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=r.settings.mode&&r.settings.oneToOneTouch){var o=0;if("horizontal"==r.settings.mode){var s=t.changedTouches[0].pageX-r.touch.start.x;o=r.touch.originalPos.left+s}else{var s=t.changedTouches[0].pageY-r.touch.start.y;o=r.touch.originalPos.top+s}x(o,"reset",0)}},W=function(e){r.viewport.unbind("touchmove",I);var t=e.originalEvent,n=0;if(r.touch.end.x=t.changedTouches[0].pageX,r.touch.end.y=t.changedTouches[0].pageY,"fade"==r.settings.mode){var i=Math.abs(r.touch.start.x-r.touch.end.x);i>=r.settings.swipeThreshold&&(r.touch.start.x>r.touch.end.x?s.goToNextSlide():s.goToPrevSlide(),s.stopAuto())}else{var i=0;"horizontal"==r.settings.mode?(i=r.touch.end.x-r.touch.start.x,n=r.touch.originalPos.left):(i=r.touch.end.y-r.touch.start.y,n=r.touch.originalPos.top),!r.settings.infiniteLoop&&(0==r.active.index&&i>0||r.active.last&&0>i)?x(n,"reset",200):Math.abs(i)>=r.settings.swipeThreshold?(0>i?s.goToNextSlide():s.goToPrevSlide(),s.stopAuto()):x(n,"reset",200)}r.viewport.unbind("touchend",W)},B=function(){if(r.initialized){var t=e(window).width(),n=e(window).height();(a!=t||l!=n)&&(a=t,l=n,s.redrawSlider(),r.settings.onSliderResize.call(s,r.active.index))}};return s.goToSlide=function(t,n){if(!r.working&&r.active.index!=t)if(r.working=!0,r.oldIndex=r.active.index,r.active.index=0>t?v()-1:t>=v()?0:t,r.settings.onSlideBefore(r.children.eq(r.active.index),r.oldIndex,r.active.index),"next"==n?r.settings.onSlideNext(r.children.eq(r.active.index),r.oldIndex,r.active.index):"prev"==n&&r.settings.onSlidePrev(r.children.eq(r.active.index),r.oldIndex,r.active.index),r.active.last=r.active.index>=v()-1,r.settings.pager&&A(r.active.index),r.settings.controls&&P(),"fade"==r.settings.mode)r.settings.adaptiveHeight&&r.viewport.height()!=f()&&r.viewport.animate({height:f()},r.settings.adaptiveHeightSpeed),r.children.filter(":visible").fadeOut(r.settings.speed).css({zIndex:0}),r.children.eq(r.active.index).css("zIndex",r.settings.slideZIndex+1).fadeIn(r.settings.speed,function(){e(this).css("zIndex",r.settings.slideZIndex),D()});else{r.settings.adaptiveHeight&&r.viewport.height()!=f()&&r.viewport.animate({height:f()},r.settings.adaptiveHeightSpeed);var i=0,o={left:0,top:0};if(!r.settings.infiniteLoop&&r.carousel&&r.active.last)if("horizontal"==r.settings.mode){var a=r.children.eq(r.children.length-1);o=a.position(),i=r.viewport.width()-a.outerWidth()}else{var l=r.children.length-r.settings.minSlides;o=r.children.eq(l).position()}else if(r.carousel&&r.active.last&&"prev"==n){var c=1==r.settings.moveSlides?r.settings.maxSlides-y():(v()-1)*y()-(r.children.length-r.settings.maxSlides),a=s.children(".bx-clone").eq(c);o=a.position()}else if("next"==n&&0==r.active.index)o=s.find("> .bx-clone").eq(r.settings.maxSlides).position(),r.active.last=!1;else if(t>=0){var u=t*y();o=r.children.eq(u).position()}if("undefined"!=typeof o){var d="horizontal"==r.settings.mode?-(o.left-i):-o.top;x(d,"slide",r.settings.speed)}}},s.goToNextSlide=function(){if(r.settings.infiniteLoop||!r.active.last){var e=parseInt(r.active.index)+1;s.goToSlide(e,"next")}},s.goToPrevSlide=function(){if(r.settings.infiniteLoop||0!=r.active.index){var e=parseInt(r.active.index)-1;s.goToSlide(e,"prev")}},s.startAuto=function(e){r.interval||(r.interval=setInterval(function(){"next"==r.settings.autoDirection?s.goToNextSlide():s.goToPrevSlide()},r.settings.pause),r.settings.autoControls&&1!=e&&L("stop"))},s.stopAuto=function(e){r.interval&&(clearInterval(r.interval),r.interval=null,r.settings.autoControls&&1!=e&&L("start"))},s.getCurrentSlide=function(){return r.active.index},s.getCurrentSlideElement=function(){return r.children.eq(r.active.index)},s.getSlideCount=function(){return r.children.length},s.redrawSlider=function(){r.children.add(s.find(".bx-clone")).width(g()),r.viewport.css("height",f()),r.settings.ticker||b(),r.active.last&&(r.active.index=v()-1),r.active.index>=v()&&(r.active.last=!0),r.settings.pager&&!r.settings.pagerCustom&&(w(),A(r.active.index))},s.destroySlider=function(){r.initialized&&(r.initialized=!1,e(".bx-clone",this).remove(),r.children.each(function(){void 0!=e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!=e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),r.controls.el&&r.controls.el.remove(),r.controls.next&&r.controls.next.remove(),r.controls.prev&&r.controls.prev.remove(),r.pagerEl&&r.settings.controls&&r.pagerEl.remove(),e(".bx-caption",this).remove(),r.controls.autoEl&&r.controls.autoEl.remove(),clearInterval(r.interval),r.settings.responsive&&e(window).unbind("resize",B))},s.reloadSlider=function(e){void 0!=e&&(o=e),s.destroySlider(),c()},e(window).resize(function(){r.settings.autoReload&&s.reloadSlider()}),c(),this}}(jQuery),$('[data-call="bxslider"]').each(function(){$(this).bxSlider()});