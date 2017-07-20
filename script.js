$(document).ready(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() > 600 && !$('header').hasClass('down')) {
		   	$('header').addClass('down');
		   	$('header').slideDown("swing");
		}
		else if($(this).scrollTop() <= 600) {
		   	$('header').removeClass('down');
		   	$('header').slideUp("swing");
		}
	});
});