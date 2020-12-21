$(document).ready(function() {
    $("[data-tooltip]").mousemove(function(eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip").text($data_tooltip)
            .show();

    }).mouseout(function() {

        $("#tooltip").hide()
            .text("")
    });

    $("[data-tooltip]").mousemove(function(eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip_2").text($data_tooltip)
            .show();

    }).mouseout(function() {

        $("#tooltip_2").hide()
            .text("")
    });

    $('ul.main-img__list').on('click', 'li:not(.main-img__active)', function() {
        $(this)
            .addClass('main-img__active').siblings().removeClass('main-img__active')
            .closest('div.container').find('img.main-img__icon').removeClass('main-img__icon_active').eq($(this).index()).addClass('main-img__icon_active');
    });

});