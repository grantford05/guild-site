//scrolls the page horizontally depending on which nav class is clicked
$("document").ready(function() {
 
    $('.home').click(function(){
 
   		$('html, body, container').animate({
       		scrollLeft: $("#splash").position().top
    	}, 1500);
 
    });
 
    $('.information').click(function(){
 
    	$('html, body, container').animate({
        	scrollLeft: $("#home").position().top
    	}, 1500);
 
    });
 
    $('.events').click(function(){
 
    	$('html, body, container').animate({
        	scrollLeft: $("#guildevents").position().top
    	}, 1500);
 
    });

    $('.contact').click(function(){
 
    	$('html, body, container').animate({
        	scrollLeft: $("#guildcontact").position().top
    	}, 1500);
 
    });
 
});
