/*

Quicksand 1.2.2

Reorder and filter items with a nice shuffling animation.

Copyright (c) 2010 Jacek Galanciak (razorjack.net) and agilope.com
Big thanks for Piotr Petrus (riddle.pl) for deep code review and wonderful docs & demos.

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Project site: http://razorjack.net/quicksand
Github site: http://github.com/razorjack/quicksand

*/
!function(e){e.fn.quicksand=function(t,n){var i={duration:750,easing:"swing",attribute:"data-id",adjustHeight:"auto",useScaling:!0,enhancement:function(){},selector:"> *",dx:0,dy:0};e.extend(i,n),(e.browser.msie||"undefined"==typeof e.fn.scale)&&(i.useScaling=!1);var o;if("function"==typeof arguments[1])var o=arguments[1];else var o=arguments[2];return this.each(function(n){var r,s,a=[],l=e(t).clone(),c=e(this),u=e(this).css("height"),p=!1,f=e(c).offset(),h=[],g=e(this).find(i.selector);if(e.browser.msie&&e.browser.version.substr(0,1)<7)return void c.html("").append(l);var m=0,v=function(){m||(m=1,$toDelete=c.find("> *"),c.prepend(_.find("> *")),$toDelete.remove(),p&&c.css("height",s),i.enhancement(c),"function"==typeof o&&o.call(this))},y=c.offsetParent(),b=y.offset();"relative"==y.css("position")?"body"==y.get(0).nodeName.toLowerCase()||(b.top+=parseFloat(y.css("border-top-width"))||0,b.left+=parseFloat(y.css("border-left-width"))||0):(b.top-=parseFloat(y.css("border-top-width"))||0,b.left-=parseFloat(y.css("border-left-width"))||0,b.top-=parseFloat(y.css("margin-top"))||0,b.left-=parseFloat(y.css("margin-left"))||0),isNaN(b.left)&&(b.left=0),isNaN(b.top)&&(b.top=0),b.left-=i.dx,b.top-=i.dy,c.css("height",e(this).height()),g.each(function(t){h[t]=e(this).offset()}),e(this).stop();var x=0,w=0;g.each(function(t){e(this).stop();var n=e(this).get(0);"absolute"==n.style.position?(x=-i.dx,w=-i.dy):(x=i.dx,w=i.dy),n.style.position="absolute",n.style.margin="0",n.style.top=h[t].top-parseFloat(n.style.marginTop)-b.top+w+"px",n.style.left=h[t].left-parseFloat(n.style.marginLeft)-b.left+x+"px"});var _=e(c).clone(),C=_.get(0);for(C.innerHTML="",C.setAttribute("id",""),C.style.height="auto",C.style.width=c.width()+"px",_.append(l),_.insertBefore(c),_.css("opacity",0),C.style.zIndex=-1,C.style.margin="0",C.style.position="absolute",C.style.top=f.top-b.top+"px",C.style.left=f.left-b.left+"px","dynamic"===i.adjustHeight?c.animate({height:_.height()},i.duration,i.easing):"auto"===i.adjustHeight&&(s=_.height(),parseFloat(u)<parseFloat(s)?c.css("height",s):p=!0),g.each(function(){var t=[];"function"==typeof i.attribute?(r=i.attribute(e(this)),l.each(function(){return i.attribute(this)==r?(t=e(this),!1):void 0})):t=l.filter("["+i.attribute+"="+e(this).attr(i.attribute)+"]"),a.push(t.length?i.useScaling?{element:e(this),animation:{top:t.offset().top-b.top,left:t.offset().left-b.left,opacity:1,scale:"1.0"}}:{element:e(this),animation:{top:t.offset().top-b.top,left:t.offset().left-b.left,opacity:1}}:i.useScaling?{element:e(this),animation:{opacity:"0.0",scale:"0.0"}}:{element:e(this),animation:{opacity:"0.0"}})}),l.each(function(){var t=[],n=[];"function"==typeof i.attribute?(r=i.attribute(e(this)),g.each(function(){return i.attribute(this)==r?(t=e(this),!1):void 0}),l.each(function(){return i.attribute(this)==r?(n=e(this),!1):void 0})):(t=g.filter("["+i.attribute+"="+e(this).attr(i.attribute)+"]"),n=l.filter("["+i.attribute+"="+e(this).attr(i.attribute)+"]"));var o;if(0===t.length){o=i.useScaling?{opacity:"1.0",scale:"1.0"}:{opacity:"1.0"},d=n.clone();var s=d.get(0);s.style.position="absolute",s.style.margin="0",s.style.top=n.offset().top-b.top+"px",s.style.left=n.offset().left-b.left+"px",d.css("opacity",0),i.useScaling&&d.css("transform","scale(0.0)"),d.appendTo(c),a.push({element:e(d),animation:o})}}),_.remove(),i.enhancement(c),n=0;n<a.length;n++)a[n].element.animate(a[n].animation,i.duration,i.easing,v)})}}(jQuery);