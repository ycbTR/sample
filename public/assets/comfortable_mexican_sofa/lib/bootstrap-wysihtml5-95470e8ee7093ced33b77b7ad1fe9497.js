!function(t,e){"use strict";var n={"font-styles":function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li class='dropdown'><a class='btn dropdown-toggle"+n+"' data-toggle='dropdown' href='#'><i class='icon-font'></i>&nbsp;<span class='current-font'>"+t.font_styles.normal+"</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>"+t.font_styles.normal+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>"+t.font_styles.h1+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>"+t.font_styles.h2+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>"+t.font_styles.h3+"</a></li></ul></li>"},emphasis:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li><div class='btn-group'><a class='btn"+n+"' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>"+t.emphasis.bold+"</a><a class='btn"+n+"' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>"+t.emphasis.italic+"</a><a class='btn"+n+"' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>"+t.emphasis.underline+"</a></div></li>"},lists:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li><div class='btn-group'><a class='btn"+n+"' data-wysihtml5-command='insertUnorderedList' title='"+t.lists.unordered+"' tabindex='-1'><i class='icon-list'></i></a><a class='btn"+n+"' data-wysihtml5-command='insertOrderedList' title='"+t.lists.ordered+"' tabindex='-1'><i class='icon-th-list'></i></a><a class='btn"+n+"' data-wysihtml5-command='Outdent' title='"+t.lists.outdent+"' tabindex='-1'><i class='icon-indent-right'></i></a><a class='btn"+n+"' data-wysihtml5-command='Indent' title='"+t.lists.indent+"' tabindex='-1'><i class='icon-indent-left'></i></a></div></li>"},link:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li><div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>"+t.link.insert+"</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>"+t.link.cancel+"</a><a href='#' class='btn btn-primary' data-dismiss='modal'>"+t.link.insert+"</a></div></div><a class='btn"+n+"' data-wysihtml5-command='createLink' title='"+t.link.insert+"' tabindex='-1'><i class='icon-share'></i></a></li>"},image:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li><div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>"+t.image.insert+"</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn' data-dismiss='modal'>"+t.image.cancel+"</a><a href='#' class='btn btn-primary' data-dismiss='modal'>"+t.image.insert+"</a></div></div><a class='btn"+n+"' data-wysihtml5-command='insertImage' title='"+t.image.insert+"' tabindex='-1'><i class='icon-picture'></i></a></li>"},html:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li><div class='btn-group'><a class='btn"+n+"' data-wysihtml5-action='change_view' title='"+t.html.edit+"' tabindex='-1'><i class='icon-pencil'></i></a></div></li>"},color:function(t,e){var n=e&&e.size?" btn-"+e.size:"";return"<li class='dropdown'><a class='btn dropdown-toggle"+n+"' data-toggle='dropdown' href='#' tabindex='-1'><span class='current-color'>"+t.colours.black+"</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>"+t.colours.black+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>"+t.colours.silver+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>"+t.colours.gray+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>"+t.colours.maroon+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>"+t.colours.red+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>"+t.colours.purple+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>"+t.colours.green+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>"+t.colours.olive+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>"+t.colours.navy+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>"+t.colours.blue+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>"+t.colours.orange+"</a></li></ul></li>"}},i=function(t,e,i){return n[t](e,i)},o=function(e,i){this.el=e;var o=i||s;for(var r in o.customTemplates)n[r]=o.customTemplates[r];this.toolbar=this.createToolbar(e,o),this.editor=this.createEditor(i),window.editor=this.editor,t("iframe.wysihtml5-sandbox").each(function(e,n){t(n.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){t("li.dropdown").removeClass("open")}})})};o.prototype={constructor:o,createEditor:function(t){t=t||{},t.toolbar=this.toolbar[0];var n=new e.Editor(this.el[0],t);if(t&&t.events)for(var i in t.events)n.on(i,t.events[i]);return n},createToolbar:function(e,n){var o=this,r=t("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"}),l=n.locale||s.locale||"en";for(var c in s){var u=!1;void 0!==n[c]?n[c]===!0&&(u=!0):u=s[c],u===!0&&(r.append(i(c,a[l],n)),"html"===c&&this.initHtml(r),"link"===c&&this.initInsertLink(r),"image"===c&&this.initInsertImage(r))}if(n.toolbar)for(c in n.toolbar)r.append(n.toolbar[c]);return r.find("a[data-wysihtml5-command='formatBlock']").click(function(e){var n=e.target||e.srcElement,i=t(n);o.toolbar.find(".current-font").text(i.html())}),r.find("a[data-wysihtml5-command='foreColor']").click(function(e){var n=e.target||e.srcElement,i=t(n);o.toolbar.find(".current-color").text(i.html())}),this.el.before(r),r},initHtml:function(t){var e="a[data-wysihtml5-action='change_view']";t.find(e).click(function(){t.find("a.btn").not(e).toggleClass("disabled")})},initInsertImage:function(e){var n,i=this,o=e.find(".bootstrap-wysihtml5-insert-image-modal"),r=o.find(".bootstrap-wysihtml5-insert-image-url"),s=o.find("a.btn-primary"),a=r.val(),l=function(){var t=r.val();r.val(a),i.editor.currentView.element.focus(),n&&(i.editor.composer.selection.setBookmark(n),n=null),i.editor.composer.commands.exec("insertImage",t)};r.keypress(function(t){13==t.which&&(l(),o.modal("hide"))}),s.click(l),o.on("shown",function(){r.focus()}),o.on("hide",function(){i.editor.currentView.element.focus()}),e.find("a[data-wysihtml5-command=insertImage]").click(function(){var e=t(this).hasClass("wysihtml5-command-active");return e?!0:(i.editor.currentView.element.focus(!1),n=i.editor.composer.selection.getBookmark(),o.modal("show"),o.on("click.dismiss.modal",'[data-dismiss="modal"]',function(t){t.stopPropagation()}),!1)})},initInsertLink:function(e){var n,i=this,o=e.find(".bootstrap-wysihtml5-insert-link-modal"),r=o.find(".bootstrap-wysihtml5-insert-link-url"),s=o.find("a.btn-primary"),a=r.val(),l=function(){var t=r.val();r.val(a),i.editor.currentView.element.focus(),n&&(i.editor.composer.selection.setBookmark(n),n=null),i.editor.composer.commands.exec("createLink",{href:t,target:"_blank",rel:"nofollow"})};r.keypress(function(t){13==t.which&&(l(),o.modal("hide"))}),s.click(l),o.on("shown",function(){r.focus()}),o.on("hide",function(){i.editor.currentView.element.focus()}),e.find("a[data-wysihtml5-command=createLink]").click(function(){var e=t(this).hasClass("wysihtml5-command-active");return e?!0:(i.editor.currentView.element.focus(!1),n=i.editor.composer.selection.getBookmark(),o.appendTo("body").modal("show"),o.on("click.dismiss.modal",'[data-dismiss="modal"]',function(t){t.stopPropagation()}),!1)})}};var r={resetDefaults:function(){t.fn.wysihtml5.defaultOptions=t.extend(!0,{},t.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(e){return this.each(function(){var n=t(this);n.data("wysihtml5",new o(n,e))})},shallowExtend:function(e){var n=t.extend({},t.fn.wysihtml5.defaultOptions,e||{}),i=this;return r.bypassDefaults.apply(i,[n])},deepExtend:function(e){var n=t.extend(!0,{},t.fn.wysihtml5.defaultOptions,e||{}),i=this;return r.bypassDefaults.apply(i,[n])},init:function(t){var e=this;return r.shallowExtend.apply(e,[t])}};t.fn.wysihtml5=function(e){return r[e]?r[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.wysihtml5"):r.init.apply(this,arguments)},t.fn.wysihtml5.Constructor=o;var s=t.fn.wysihtml5.defaultOptions={"font-styles":!0,color:!1,emphasis:!0,lists:!0,html:!1,link:!0,image:!0,events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{set_attributes:{target:"_blank",rel:"nofollow"},check_attributes:{href:"url"}},span:1,div:1}},stylesheets:["./lib/css/wysiwyg-color.css"],locale:"en"};"undefined"==typeof t.fn.wysihtml5.defaultOptionsCache&&(t.fn.wysihtml5.defaultOptionsCache=t.extend(!0,{},t.fn.wysihtml5.defaultOptions));var a=t.fn.wysihtml5.locale={en:{font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}}}(window.jQuery,window.wysihtml5);