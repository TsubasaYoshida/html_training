var text = '';

$(function(){
  text = $("#article").text();
  var text_part = text.substr(0, 140) + '...';
  $("#article").text(text_part);
});

function expand_article(){
  $("#article").text(text);
  $("#expand_point").remove();
}