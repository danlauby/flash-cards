$(function() {
  $('.button-javascript').click(function(){
    $('p#javascript').toggleClass('definitions');
  });

  $('.button-operator').click(function(){
    $('p#operators').toggleClass('definitions');
  });

  $('.button-variable').click(function(){
    $('p#variables').toggleClass('definitions');
  });

  $('.button-naming').click(function(){
    $('p#variable-naming-conventions').toggleClass('definitions');
  });

  $('.button-functions').click(function(){
    $('p#functions').toggleClass('definitions');
  });
});
