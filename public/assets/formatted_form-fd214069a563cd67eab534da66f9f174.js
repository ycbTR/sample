$(document).ready(function(){$("body").on("submit","form",function(t){$("input[type=submit][data-loading-text]",t.target).button("loading")}),$("body").on("reset","form",function(t){$("input[type=submit][data-loading-text]",t.target).button("reset")})});