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

        $('li.dropdown').on('click', function () {
            $(this).addClass('open')
        });
    });


    $(document).on("hover", ".image", function () {
        $(this).toggleClass("hover");
    });

});

jQuery(function () {
    $('form').on('click', '.remove_fields', function (event) {
        $(this).closest('.field').remove();
        return event.preventDefault();
    });
    return $('form').on('click', '.add_fields', function (event) {
        var regexp, time;
        time = new Date().getTime();
        regexp = new RegExp($(this).data('id'), 'g');
        $(this).before($(this).data('fields').replace(regexp, time));
        return event.preventDefault();
    });
});
