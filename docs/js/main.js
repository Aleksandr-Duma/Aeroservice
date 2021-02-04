$(function(){
	$('.burger').on('click', function(){
		$('.navigation__inner').addClass('active');
	});

	$('.button-close').on('click', function(){
		$('.navigation__inner').removeClass('active');
	})
});