$(function() {
  var options = ['javascript', 'operator', 'variable', 'naming', 'functions'];
  options.forEach(function(option) {
      $('#' + option).click(function() {
      $('.' + option).toggleClass('show');
    });
  });
});
