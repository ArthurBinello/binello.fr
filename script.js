$(document).ready(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() > 650 && !$('header').hasClass('fixed')) {
			$('header').addClass('fixed');
			$('header').slideDown(250);
		}
		else if($(this).scrollTop() <= 650) {
			$('header').removeClass('fixed');
			$('header').slideUp(250);
		}
	});
});

function moveTo(destination) {
	$('html, body').animate({scrollTop: $(destination).offset().top + 'px'}, 1000);
}