/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Improvements by Sébastien Malot
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
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
 * ========================================================= */
!function(e){function t(){return new Date(Date.UTC.apply(Date,arguments))}var n=function(t,n){var o=this;this.element=e(t),this.language=n.language||this.element.data("date-language")||"en",this.language=this.language in i?this.language:"en",this.isRTL=i[this.language].rtl||!1,this.formatType=n.formatType||this.element.data("format-type")||"standard",this.format=r.parseFormat(n.format||this.element.data("date-format")||r.getDefaultFormat(this.formatType,"input"),this.formatType),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar").parent():!1,this.componentReset=this.element.is(".date")?this.element.find(".add-on .icon-remove").parent():!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.linkField=n.linkField||this.element.data("link-field")||!1,this.linkFormat=r.parseFormat(n.linkFormat||this.element.data("link-format")||r.getDefaultFormat(this.formatType,"link"),this.formatType),this.minuteStep=n.minuteStep||this.element.data("minute-step")||5,this.pickerPosition=n.pickerPosition||this.element.data("picker-position")||"bottom-right",this._attachEvents(),this.minView=0,"minView"in n?this.minView=n.minView:"minView"in this.element.data()&&(this.minView=this.element.data("min-view")),this.minView=r.convertViewMode(this.minView),this.maxView=r.modes.length-1,"maxView"in n?this.maxView=n.maxView:"maxView"in this.element.data()&&(this.maxView=this.element.data("max-view")),this.maxView=r.convertViewMode(this.maxView),this.startViewMode=2,"startView"in n?this.startViewMode=n.startView:"startView"in this.element.data()&&(this.startViewMode=this.element.data("start-view")),this.startViewMode=r.convertViewMode(this.startViewMode),this.viewMode=this.startViewMode,this.forceParse=!0,"forceParse"in n?this.forceParse=n.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=e(r.template).appendTo(this.isInline?this.element:"body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)}),this.picker.addClass(this.isInline?"datetimepicker-inline":this.component&&"bottom-left"==this.pickerPosition?"datetimepicker-dropdown-left dropdown-menu":"datetimepicker-dropdown dropdown-menu"),this.isRTL&&(this.picker.addClass("datetimepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("icon-arrow-left icon-arrow-right")),e(document).on("mousedown",function(t){0===e(t.target).closest(".datetimepicker").length&&o.hide()}),this.autoclose=!1,"autoclose"in n?this.autoclose=n.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in n?this.keyboardNavigation=n.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.todayBtn=n.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=n.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(n.weekStart||this.element.data("date-weekstart")||i[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-1/0,this.endDate=1/0,this.daysOfWeekDisabled=[],this.setStartDate(n.startDate||this.element.data("date-startdate")),this.setEndDate(n.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(n.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode(),this.isInline&&this.show()};n.prototype={constructor:n,_events:[],_attachEvents:function(){this._detachEvents(),this.isInput?this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}]]:this.component&&this.hasInput?(this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(this.update,this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]],this.componentReset&&this._events.push([this.componentReset,{click:e.proxy(this.reset,this)}])):this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:e.proxy(this.show,this)}]];for(var t,n,i=0;i<this._events.length;i++)t=this._events[i][0],n=this._events[i][1],t.on(n)},_detachEvents:function(){for(var e,t,n=0;n<this._events.length;n++)e=this._events[n][0],t=this._events[n][1],e.off(t);this._events=[]},show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.forceParse&&this.update(),this.place(),e(window).on("resize",e.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault()),this.element.trigger({type:"show",date:this.date})},hide:function(){this.isInline||(this.picker.hide(),e(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||e(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.element.trigger({type:"hide",date:this.date}))},remove:function(){this._detachEvents(),this.picker.remove(),delete this.element.data().datetimepicker},getDate:function(){var e=this.getUTCDate();return new Date(e.getTime()+6e4*e.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(e){this.setUTCDate(new Date(e.getTime()-6e4*e.getTimezoneOffset()))},setUTCDate:function(e){e>=this.startDate&&e<=this.endDate?(this.date=e,this.setValue(),this.viewDate=this.date,this.fill()):this.element.trigger({type:"outOfRange",date:e,startDate:this.startDate,endDate:this.endDate})},setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.prop("value",t):(this.component&&this.element.find("input").prop("value",t),this.element.data("date",t)),this.linkField&&e("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))},getFormattedDate:function(e){return void 0==e&&(e=this.format),r.formatDate(this.date,e,this.language,this.formatType)},setStartDate:function(e){this.startDate=e||-1/0,this.startDate!==-1/0&&(this.startDate=r.parseDate(this.startDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setEndDate:function(e){this.endDate=e||1/0,1/0!==this.endDate&&(this.endDate=r.parseDate(this.endDate,this.format,this.language,this.formatType)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(t){this.daysOfWeekDisabled=t||[],e.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=e.map(this.daysOfWeekDisabled,function(e){return parseInt(e,10)}),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var t,n,i=parseInt(this.element.parents().filter(function(){return"auto"!=e(this).css("z-index")}).first().css("z-index"))+10;this.component?(t=this.component.offset(),n=t.left,"bottom-left"==this.pickerPosition&&(n+=this.component.outerWidth()-this.picker.outerWidth())):(t=this.element.offset(),n=t.left),this.picker.css({top:t.top+this.height,left:n,zIndex:i})}},update:function(){var e,t=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(e=arguments[0],t=!0):e=this.isInput?this.element.prop("value"):this.element.data("date")||this.element.find("input").prop("value")||new Date,e||(e=new Date,t=!1),this.date=r.parseDate(e,this.format,this.language,this.formatType),t&&this.setValue(),this.viewDate=new Date(this.date<this.startDate?this.startDate:this.date>this.endDate?this.endDate:this.date),this.fill()},fillDow:function(){for(var e=this.weekStart,t="<tr>";e<this.weekStart+7;)t+='<th class="dow">'+i[this.language].daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datetimepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;12>t;)e+='<span class="month">'+i[this.language].monthsShort[t++]+"</span>";this.picker.find(".datetimepicker-months td").html(e)},fill:function(){if(null!=this.date&&null!=this.viewDate){var n=new Date(this.viewDate),o=n.getUTCFullYear(),s=n.getUTCMonth(),a=n.getUTCDate(),l=n.getUTCHours(),c=n.getUTCMinutes(),u=this.startDate!==-1/0?this.startDate.getUTCFullYear():-1/0,d=this.startDate!==-1/0?this.startDate.getUTCMonth():-1/0,h=1/0!==this.endDate?this.endDate.getUTCFullYear():1/0,p=1/0!==this.endDate?this.endDate.getUTCMonth():1/0,f=new t(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate()).valueOf(),m=new Date;this.picker.find(".datetimepicker-days thead th:eq(1)").text(i[this.language].months[s]+" "+o),this.picker.find(".datetimepicker-hours thead th:eq(1)").text(a+" "+i[this.language].months[s]+" "+o),this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(a+" "+i[this.language].months[s]+" "+o),this.picker.find("tfoot th.today").text(i[this.language].today).toggle(this.todayBtn!==!1),this.updateNavArrows(),this.fillMonths();var g=t(o,s-1,28,0,0,0,0),v=r.getDaysInMonth(g.getUTCFullYear(),g.getUTCMonth());g.setUTCDate(v),g.setUTCDate(v-(g.getUTCDay()-this.weekStart+7)%7);var y=new Date(g);y.setUTCDate(y.getUTCDate()+42),y=y.valueOf();for(var b,w=[];g.valueOf()<y;)g.getUTCDay()==this.weekStart&&w.push("<tr>"),b="",g.getUTCFullYear()<o||g.getUTCFullYear()==o&&g.getUTCMonth()<s?b+=" old":(g.getUTCFullYear()>o||g.getUTCFullYear()==o&&g.getUTCMonth()>s)&&(b+=" new"),this.todayHighlight&&g.getUTCFullYear()==m.getFullYear()&&g.getUTCMonth()==m.getMonth()&&g.getUTCDate()==m.getDate()&&(b+=" today"),g.valueOf()==f&&(b+=" active"),(g.valueOf()+864e5<this.startDate||g.valueOf()>this.endDate||-1!==e.inArray(g.getUTCDay(),this.daysOfWeekDisabled))&&(b+=" disabled"),w.push('<td class="day'+b+'">'+g.getUTCDate()+"</td>"),g.getUTCDay()==this.weekEnd&&w.push("</tr>"),g.setUTCDate(g.getUTCDate()+1);this.picker.find(".datetimepicker-days tbody").empty().append(w.join("")),w=[];for(var x=0;24>x;x++){var C=t(o,s,a,x);b="",C.valueOf()+36e5<this.startDate||C.valueOf()>this.endDate?b+=" disabled":l==x&&(b+=" active"),w.push('<span class="hour'+b+'">'+x+":00</span>")}this.picker.find(".datetimepicker-hours td").html(w.join("")),w=[];for(var x=0;60>x;x+=this.minuteStep){var C=t(o,s,a,l,x);b="",C.valueOf()<this.startDate||C.valueOf()>this.endDate?b+=" disabled":Math.floor(c/this.minuteStep)==Math.floor(x/this.minuteStep)&&(b+=" active"),w.push('<span class="minute'+b+'">'+l+":"+(10>x?"0"+x:x)+"</span>")}this.picker.find(".datetimepicker-minutes td").html(w.join(""));var _=this.date.getUTCFullYear(),k=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");_==o&&k.eq(this.date.getUTCMonth()).addClass("active"),(u>o||o>h)&&k.addClass("disabled"),o==u&&k.slice(0,d).addClass("disabled"),o==h&&k.slice(p+1).addClass("disabled"),w="",o=10*parseInt(o/10,10);var T=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(o+"-"+(o+9)).end().find("td");o-=1;for(var x=-1;11>x;x++)w+='<span class="year'+(-1==x||10==x?" old":"")+(_==o?" active":"")+(u>o||o>h?" disabled":"")+'">'+o+"</span>",o+=1;T.html(w)}},updateNavArrows:function(){var e=new Date(this.viewDate),t=e.getUTCFullYear(),n=e.getUTCMonth(),i=e.getUTCDate(),r=e.getUTCHours();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&n<=this.startDate.getUTCMonth()&&i<=this.startDate.getUTCDate()&&r<=this.startDate.getUTCHours()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&n>=this.endDate.getUTCMonth()&&i>=this.endDate.getUTCDate()&&r>=this.endDate.getUTCHours()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:this.picker.find(".prev").css(this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&n<=this.startDate.getUTCMonth()&&i<=this.startDate.getUTCDate()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&n>=this.endDate.getUTCMonth()&&i>=this.endDate.getUTCDate()?{visibility:"hidden"}:{visibility:"visible"});break;case 2:this.picker.find(".prev").css(this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()&&n<=this.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()&&n>=this.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 3:case 4:this.picker.find(".prev").css(this.startDate!==-1/0&&t<=this.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.endDate&&t>=this.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}},click:function(n){n.stopPropagation(),n.preventDefault();var i=e(n.target).closest("span, td, th");if(1==i.length){if(i.is(".disabled"))return void this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var o=r.modes[this.viewMode].navStep*("prev"==i[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,o);break;case 1:this.viewDate=this.moveDate(this.viewDate,o);break;case 2:this.viewDate=this.moveMonth(this.viewDate,o);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,o)}this.fill();break;case"today":var s=new Date;s=t(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds()),this.viewMode=this.startViewMode,this.showMode(0),this._setDate(s)}break;case"span":if(!i.is(".disabled")){if(i.is(".month")){this.viewDate.setUTCDate(1);var a=i.parent().find("span").index(i);this.viewDate.setUTCMonth(a),this.element.trigger({type:"changeMonth",date:this.viewDate})}else if(i.is(".year")){this.viewDate.setUTCDate(1);var l=parseInt(i.text(),10)||0;this.viewDate.setUTCFullYear(l),this.element.trigger({type:"changeYear",date:this.viewDate})}else if(i.is(".hour")){var c=parseInt(i.text(),10)||0,l=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),u=this.viewDate.getUTCDate(),d=this.viewDate.getUTCMinutes(),h=this.viewDate.getUTCSeconds();this._setDate(t(l,a,u,c,d,h,0))}else if(i.is(".minute")){var d=parseInt(i.text().substr(i.text().indexOf(":")+1),10)||0,l=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),u=this.viewDate.getUTCDate(),c=this.viewDate.getUTCHours(),h=this.viewDate.getUTCSeconds();this._setDate(t(l,a,u,c,d,h,0))}if(0!=this.viewMode){var p=this.viewMode;this.showMode(-1),this.fill(),p==this.viewMode&&this.autoclose&&this.hide()}else this.fill(),this.autoclose&&this.hide()}break;case"td":if(i.is(".day")&&!i.is(".disabled")){var u=parseInt(i.text(),10)||1,l=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),c=this.viewDate.getUTCHours(),d=this.viewDate.getUTCMinutes(),h=this.viewDate.getUTCSeconds();i.is(".old")?0===a?(a=11,l-=1):a-=1:i.is(".new")&&(11==a?(a=0,l+=1):a+=1),this._setDate(t(l,a,u,c,d,h,0))}var p=this.viewMode;this.showMode(-1),this.fill(),p==this.viewMode&&this.autoclose&&this.hide()}}},_setDate:function(e,t){t&&"date"!=t||(this.date=e),t&&"view"!=t||(this.viewDate=e),this.fill(),this.element.trigger({type:"changeDate",date:this.date}),this.setValue();var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input")),n&&(n.change(),this.autoclose&&(!t||"date"==t))},moveHour:function(e,t){if(!t)return e;var n=new Date(e.valueOf());return t=t>0?1:-1,n.setUTCHours(n.getUTCHours()+t),n},moveDate:function(e,t){if(!t)return e;var n=new Date(e.valueOf());return t=t>0?1:-1,n.setUTCDate(n.getUTCDate()+t),n},moveMonth:function(e,t){if(!t)return e;var n,i,r=new Date(e.valueOf()),o=r.getUTCDate(),s=r.getUTCMonth(),a=Math.abs(t);if(t=t>0?1:-1,1==a)i=-1==t?function(){return r.getUTCMonth()==s}:function(){return r.getUTCMonth()!=n},n=s+t,r.setUTCMonth(n),(0>n||n>11)&&(n=(n+12)%12);else{for(var l=0;a>l;l++)r=this.moveMonth(r,t);n=r.getUTCMonth(),r.setUTCDate(o),i=function(){return n!=r.getUTCMonth()}}for(;i();)r.setUTCDate(--o),r.setUTCMonth(n);return r},moveYear:function(e,t){return this.moveMonth(e,12*t)},dateWithinRange:function(e){return e>=this.startDate&&e<=this.endDate},keydown:function(e){if(this.picker.is(":not(:visible)"))return void(27==e.keyCode&&this.show());var t,n,i,r=!1;switch(e.keyCode){case 27:this.hide(),e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;t=37==e.keyCode?-1:1,e.ctrlKey?(n=this.moveYear(this.date,t),i=this.moveYear(this.viewDate,t)):e.shiftKey?(n=this.moveMonth(this.date,t),i=this.moveMonth(this.viewDate,t)):(n=new Date(this.date),n.setUTCDate(this.date.getUTCDate()+t),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+t)),this.dateWithinRange(n)&&(this.date=n,this.viewDate=i,this.setValue(),this.update(),e.preventDefault(),r=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;t=38==e.keyCode?-1:1,e.ctrlKey?(n=this.moveYear(this.date,t),i=this.moveYear(this.viewDate,t)):e.shiftKey?(n=this.moveMonth(this.date,t),i=this.moveMonth(this.viewDate,t)):(n=new Date(this.date),n.setUTCDate(this.date.getUTCDate()+7*t),i=new Date(this.viewDate),i.setUTCDate(this.viewDate.getUTCDate()+7*t)),this.dateWithinRange(n)&&(this.date=n,this.viewDate=i,this.setValue(),this.update(),e.preventDefault(),r=!0);break;case 13:this.hide(),e.preventDefault();break;case 9:this.hide()}if(r){this.element.trigger({type:"changeDate",date:this.date});var o;this.isInput?o=this.element:this.component&&(o=this.element.find("input")),o&&o.change()}},showMode:function(e){if(e){var t=Math.max(0,Math.min(r.modes.length-1,this.viewMode+e));t>=this.minView&&t<=this.maxView&&(this.viewMode=t)}this.picker.find(">div").hide().filter(".datetimepicker-"+r.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()},reset:function(){this._setDate(null,"date")}},e.fn.datetimepicker=function(t){var i=Array.apply(null,arguments);return i.shift(),this.each(function(){var r=e(this),o=r.data("datetimepicker"),s="object"==typeof t&&t;o||r.data("datetimepicker",o=new n(this,e.extend({},e.fn.datetimepicker.defaults,s))),"string"==typeof t&&"function"==typeof o[t]&&o[t].apply(o,i)})},e.fn.datetimepicker.defaults={},e.fn.datetimepicker.Constructor=n;var i=e.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today"}},r={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,r.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},getDefaultFormat:function(e,t){if("standard"==e)return"input"==t?"yyyy-mm-dd hh:ii":"yyyy-mm-dd hh:ii:ss";if("php"==e)return"input"==t?"Y-m-d H:i":"Y-m-d H:i:s";throw new Error("Invalid format type.")},validParts:function(e){if("standard"==e)return/hh?|ii?|ss?|dd?|mm?|MM?|yy(?:yy)?/g;if("php"==e)return/[dDjlNwzFmMnStyYaABgGhHis]/g;throw new Error("Invalid format type.")},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(e,t){var n=e.replace(this.validParts(t),"\x00").split("\x00"),i=e.match(this.validParts(t));if(!n||!n.length||!i||0==i.length)throw new Error("Invalid date format.");return{separators:n,parts:i}},parseDate:function(r,o,s,a){if(r instanceof Date){var l=new Date(r.valueOf()-6e4*r.getTimezoneOffset());return l}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(r)&&(o=this.parseFormat("yyyy-mm-dd",a)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(r)&&(o=this.parseFormat("yyyy-mm-dd hh:ii",a)),/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(r)&&(o=this.parseFormat("yyyy-mm-dd hh:ii:ss",a)),/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(r)){var c,u,d=/([-+]\d+)([dmwy])/,h=r.match(/([-+]\d+)([dmwy])/g);r=new Date;for(var p=0;p<h.length;p++)switch(c=d.exec(h[p]),u=parseInt(c[1]),c[2]){case"d":r.setUTCDate(r.getUTCDate()+u);break;case"m":r=n.prototype.moveMonth.call(n.prototype,r,u);break;case"w":r.setUTCDate(r.getUTCDate()+7*u);break;case"y":r=n.prototype.moveYear.call(n.prototype,r,u)}return t(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds())}var f,m,c,h=r&&r.match(this.nonpunctuation)||[],r=new Date(0,0,0,0,0,0),g={},v=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","d","dd"],y={hh:function(e,t){return e.setUTCHours(t)},h:function(e,t){return e.setUTCHours(t)},ii:function(e,t){return e.setUTCMinutes(t)},i:function(e,t){return e.setUTCMinutes(t)},ss:function(e,t){return e.setUTCSeconds(t)},s:function(e,t){return e.setUTCSeconds(t)},yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){for(t-=1;0>t;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!=t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}};if(y.M=y.MM=y.mm=y.m,y.dd=y.d,r=t(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds()),h.length==o.parts.length){for(var p=0,b=o.parts.length;b>p;p++){if(f=parseInt(h[p],10),c=o.parts[p],isNaN(f))switch(c){case"MM":m=e(i[s].months).filter(function(){var e=this.slice(0,h[p].length),t=h[p].slice(0,e.length);return e==t}),f=e.inArray(m[0],i[s].months)+1;break;case"M":m=e(i[s].monthsShort).filter(function(){var e=this.slice(0,h[p].length),t=h[p].slice(0,e.length);return e==t}),f=e.inArray(m[0],i[s].monthsShort)+1}g[c]=f}for(var w,p=0;p<v.length;p++)w=v[p],w in g&&!isNaN(g[w])&&y[w](r,g[w])}return r},formatDate:function(t,n,o,s){if(null==t)return"";var a;if("standard"==s)a={yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear(),m:t.getUTCMonth()+1,M:i[o].monthsShort[t.getUTCMonth()],MM:i[o].months[t.getUTCMonth()],d:t.getUTCDate(),h:t.getUTCHours(),i:t.getUTCMinutes(),s:t.getUTCSeconds()},a.hh=(a.h<10?"0":"")+a.h,a.ii=(a.i<10?"0":"")+a.i,a.ss=(a.s<10?"0":"")+a.s,a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m;else{if("php"!=s)throw new Error("Invalid format type.");a={y:t.getUTCFullYear().toString().substring(2),Y:t.getUTCFullYear(),F:i[o].months[t.getUTCMonth()],M:i[o].monthsShort[t.getUTCMonth()],n:t.getUTCMonth()+1,t:r.getDaysInMonth(t.getUTCFullYear(),t.getUTCMonth()),j:t.getUTCDate(),l:i[o].days[t.getUTCDay()],D:i[o].daysShort[t.getUTCDay()],w:t.getUTCDay(),N:0==t.getUTCDay()?7:t.getUTCDay(),S:t.getUTCDate()%10<=i[o].suffix.length?i[o].suffix[t.getUTCDate()%10-1]:"",a:2==i[o].meridiem.length?i[o].meridiem[t.getUTCHours()<12?0:1]:"",g:t.getUTCHours()%12==0?12:t.getUTCHours()%12,G:t.getUTCHours(),i:t.getUTCMinutes(),s:t.getUTCSeconds()},a.m=(a.n<10?"0":"")+a.n,a.d=(a.j<10?"0":"")+a.j,a.A=a.a.toString().toUpperCase(),a.h=(a.g<10?"0":"")+a.g,a.H=(a.G<10?"0":"")+a.G,a.i=(a.i<10?"0":"")+a.i,a.s=(a.s<10?"0":"")+a.s}for(var t=[],l=e.extend([],n.separators),c=0,u=n.parts.length;u>c;c++)l.length&&t.push(l.shift()),t.push(a[n.parts[c]]);return t.join("")},convertViewMode:function(e){switch(e){case 4:case"decade":e=4;break;case 3:case"year":e=3;break;case 2:case"month":e=2;break;case 1:case"day":e=1;break;case 0:case"hour":e=0}return e},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};r.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",e.fn.datetimepicker.DPGlobal=r}(window.jQuery);