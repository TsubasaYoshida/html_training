$(function(){
  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });
});