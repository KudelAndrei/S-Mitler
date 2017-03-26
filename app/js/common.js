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


	/* слайдер сервиса*/
	$('.owl-services').owlCarousel({
		items: 3,
		dots: false,
		nav: false,
		responsive : {
			0 : {
				items: 1,
			},
			800: {
				items: 2,
			},
			1250: {
				items: 3,
			},
			1920: {
				items: 4
			}
		}
	});
	var owl = $('.owl-services');
	owl.owlCarousel();
	$('.services__next').click(function() {
			owl.trigger('next.owl.carousel');
	})
	$('.services__prev').click(function() {
			owl.trigger('prev.owl.carousel');
	})

	/* карусель отзывов */
	$('.owl-reviews').owlCarousel({
		items: 1,
		dots: true,
	});

	/* карусель клиентов */
	$('.owl-partners').owlCarousel({
		items: 4,
		nav: false,
		dots: true,
		responsive : {
			0 : {
				items: 1,
			},
			500 : {
				items: 2,
			},
			800: {
				items: 3,
			},
			1250: {
				items: 4,
			},
			1920: {
				items: 6
			}
		}
	});
	var owl2 = $('.owl-partners');
	owl2.owlCarousel();
	$('.partners__next').click(function() {
			owl2.trigger('next.owl.carousel');
	})
	$('.partners__prev').click(function() {
			owl2.trigger('prev.owl.carousel');
	})
	
});
