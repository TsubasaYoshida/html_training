$(function(){
  var article = $(".article").html();
  article = article.replace("```s", "<pre>");
  article = article.replace("```e", "</pre>");
  $(".article").html(article);
});

