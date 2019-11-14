$(function(){
  var text = $("#article").text();
  var text_part = text.substr(0, 140);
  var text_gray = text.substr(140, 10) + '...';
  $("#article").text(text_part);
  $("#article").after('<span id="text-gray">' + text_gray + '</span>');

  $("#expand").on('click', function(){
    $("#article").text(text);
    $("#expand").remove();
    $("#text-gray").remove();
  });
});
