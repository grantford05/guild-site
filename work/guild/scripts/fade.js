/*Fade in splash image on page load (5 seconds)*/
$(function(){ 
	$('#emblem').hide().fadeIn(5000);
});

/*Fade out splash and fade in home content on emblem click (3 seconds)*/
$("#emblem").click(function(){
  $("#emblem").fadeOut(3000);
});