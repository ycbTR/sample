//= require jquery
//= require jquery_ujs
//= require jquery_nested_form
//= require rails.validations


$(function () {
    $('.bxslider').bxSlider();


    $(".toggle-radio").on('click', function () {
        var el = $(this);
        var to_hide = $(el.data('hide'));
        var to_show = $(el.data('target'));

        to_hide.find('input, select').attr('disabled', true);
        to_hide.hide();

        to_show.find('input, select').attr('disabled', false);
        to_show.show();
    });


    $(document).on("hover", ".image", function () {
        $(this).toggleClass("hover");
    });


    if ($("#table-1").length > 0) {
        var tableOffset = $("#table-1").offset().top - 100;
        var $header = $("#table-1 > thead").clone();
        var $fixedHeader = $("#header-fixed").append($header);

        $(window).bind("scroll", function () {
            var offset = $(this).scrollTop();

            if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
                $fixedHeader.css("width", $("#table-1").css("width"));
                oths = $("#table-1 > thead").find('th');
                ths = $header.find("th");
                $.each(ths, function (i, el) {
                    $(el).css("width", $(oths[i]).css("width"));
                });
                $fixedHeader.show();
            }
            else if (offset < tableOffset) {
                $fixedHeader.hide();
            }
        });
    }

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
