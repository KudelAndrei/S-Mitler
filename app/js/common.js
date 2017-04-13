$(document).ready(function() {

	$(window).on('load', function() {
    $('.loader').fadeOut('slow', function() {});
  });

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
	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	// $('.hamburger').click(function(){
	// 	$(this).addClass('is-active');
	// });

	// $('#mm-blocker, .my-menu__item').click(function(){
	// 	$('.hamburger').removeClass('is-active');
	// 	console.log('awd');
	// });


	/* слайдер сервиса*/
	$('.owl-services').owlCarousel({
		items: 3,
		dots: false,
		nav: false,
		smartSpeed: 600,
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
		smartSpeed: 500,
	});

	/* карусель клиентов */
	$('.owl-partners').owlCarousel({
		items: 4,
		nav: false,
		dots: true,
		smartSpeed: 600,
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
			1920: {
				items: 4,
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

	/* карусель блога */
	$('.owl-blog').owlCarousel({
		items: 4,
		margin: 10,
		smartSpeed: 800,
		dots: true,
		responsive : {
			0 : {
				items: 1,
			},
			580 : {
				items: 2,
			},
			800: {
				items: 3,
			},
			1250: {
				items: 4,
			},
			1920: {
				items: 5
			}
		}
	});

	// плавный скролл
	$(".top").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});


	$(window).scroll(function(){
		var wScroll = $(window).scrollTop(),
				hWindow = $(window).height();

		if (wScroll > hWindow) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	
});
