$(function () {
    $('#toTop').click(function () {
        $("html,body").animate({scrollTop: 0});
    });

    $('#toBottom').click(function () {
        $("html,body").animate({scrollTop: $(document).height()});
    });
});
