$(function(){
	$('.header-menu').slicknav({
		prependTo: ".mobile-menu"
	});
	$('.slicknav_nav').addClass('clearfix');
});

$(document).ready(function(){
	$('.slider-wrap').slick({
		dots: false
	});
});