$(document).ready(function() {

  $('.bGButton').find('button').click(function() {
    $('body').removeClass('red orange yellow green blue purple grey white black');
    var color = $(this).attr('class');
    $('body').addClass(color);
    console.log($('body').attr('class'));
  });

 	$('.textButton').find('button').click(function() {
    $('body').removeClass('redText orangeText yellowText greenText blueText purpleText greyText whiteText blackText');
    var tColor = $(this).attr('class');
    $('body').addClass(tColor);
    console.log($('body').attr('class'));
  });

});
