//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery_nested_form
//= require rails.validations



$(function () {
    $('.bxslider').bxSlider();

    $(function () {

        $(".toggle-radio").on('click', function () {
            var el = $(this);
            var to_hide = $(el.data('hide'));
            var to_show = $(el.data('target'));

            to_hide.find('input, select').attr('disabled', true);
            to_hide.hide();

            to_show.find('input, select').attr('disabled', false);
            to_show.show();
        });
    });


    $(document).on("hover",".image",function() {
        $(this).toggleClass("hover");
    });

});