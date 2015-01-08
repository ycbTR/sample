/* =========================================================
 * bootstrap-tag-cloud.js 
 * http://www.collectivepush.com/plugins/bootstrap/
 * =========================================================
 * Copyright 2012 Collective Push
 *
 *Permission is hereby granted, free of charge, to any person obtaining a copy
 *of this software and associated documentation files (the "Software"), to deal
 *in the Software without restriction, including without limitation the rights
 *to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *copies of the Software, and to permit persons to whom the Software is
 *furnished to do so, subject to the following conditions:

 *The above copyright notice and this permission notice shall be included in
 *all copies or substantial portions of the Software.

 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *THE SOFTWARE.
 * ========================================================= */
function addTagBindings(e){$(e+" > button").click(function(){addTag(e)}),$(e+" > input").keyup(function(t){13==t.keyCode&&addTag(e)})}function addTag(e){var t=$(e+" > input").val(),n="";"#tag"==e&&(n="tag-cloud"),"#tag-info"==e&&(n="tag-cloud tag-cloud-info"),"#tag-success"==e&&(n="tag-cloud tag-cloud-success"),"#tag-warning"==e&&(n="tag-cloud tag-cloud-warning"),"#tag-danger"==e&&(n="tag-cloud tag-cloud-danger"),"#tag-inverse"==e&&(n="tag-cloud tag-cloud-inverse"),""!=t&&($('<li class="'+n+'">'+t+"</li>").appendTo("#tag-cloud"),$(e+" > input").val(""))}$(document).on("click",".tag-cloud",function(){$(this).remove()}),$(document).ready(function(){$("#tag").length>0&&addTagBindings("#tag"),$("#tag-info").length>0&&addTagBindings("#tag-info"),$("#tag-success").length>0&&addTagBindings("#tag-success"),$("#tag-warning").length>0&&addTagBindings("#tag-warning"),$("#tag-danger").length>0&&addTagBindings("#tag-danger"),$("#tag-inverse").length>0&&addTagBindings("#tag-inverse")});