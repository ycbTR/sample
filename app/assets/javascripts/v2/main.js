//= require jquery
//= require jquery_ujs
//= require ./bootstrap-tagsinput


$(function () {
    $('.bxslider').bxSlider();



    $(document).on("hover",".image",function() {
        $(this).toggleClass("hover");
    });

});