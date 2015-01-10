/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
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
 * ============================================================ */
!function(t){"use strict";function e(){t(".dropdown-backdrop").remove(),t(i).each(function(){n(t(this)).removeClass("open")})}function n(e){var n,i=e.attr("data-target");return i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),n=i&&t(i),n&&n.length||(n=e.parent()),n}var i="[data-toggle=dropdown]",o=function(e){var n=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var i,o,r=t(this);if(!r.is(".disabled, :disabled"))return i=n(r),o=i.hasClass("open"),e(),o||("ontouchstart"in document.documentElement&&t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click",e),i.toggleClass("open")),r.focus(),!1},keydown:function(e){var o,r,s,a,l;if(/(38|40|27)/.test(e.keyCode)&&(o=t(this),e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled"))){if(s=n(o),a=s.hasClass("open"),!a||a&&27==e.keyCode)return 27==e.which&&s.find(i).focus(),o.click();r=t("[role=menu] li:not(.divider):visible a",s),r.length&&(l=r.index(r.filter(":focus")),38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus())}}};var r=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var n=t(this),i=n.data("dropdown");i||n.data("dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})},t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",i,o.prototype.toggle).on("keydown.dropdown.data-api",i+", [role=menu]",o.prototype.keydown)}(window.jQuery);