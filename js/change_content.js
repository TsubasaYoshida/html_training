let which_display = 1;
$(function () {
    $('#change_button').click(function () {
        if (which_display == 1) {
            $('#content1').css('display', 'none');
            $('#content2').css('display', 'block');
            which_display = 2;
        } else {
            $('#content2').css('display', 'none');
            $('#content1').css('display', 'block');
            which_display = 1;
        }
    });
});