$(document).ready(function() {

	/* меню */
	$("#my-menu").mmenu({
		extensions: ['effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo.svg" alt="Салон красоты в Минске">',
		},
		offCanvas: {
			position: 'right',
		}
	});

	/* гамбургег */
	var api = $('#my-menu').data('mmenu');
	api.bind('open', function(){
		console.log('sef');
	});

	$('.hamburger').click(function(){
		$(this).addClass('is-active');
	});

	$('#mm-blocker, .my-menu__item').click(function(){
		$('.hamburger').removeClass('is-active');
		console.log('awd');
	});


	/* слайдер */
	$('.owl-services').owlCarousel({
		items: 3,
	});
	
});
