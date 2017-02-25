$(document).ready(function() {

  $('button').addClass('buttonClass');

  $('button').click(function() {
    $('body').removeClass();
    var color = $(this).attr('class');
    $('body').addClass(color);
  });

});
