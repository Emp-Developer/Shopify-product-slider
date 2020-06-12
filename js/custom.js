$(document).ready(function() {

	// Large slider #1
	$("#slider-1").flickity({
		cellAlign: 'center',
  		cellSelector: '.slide',
		contain: true,
		wrapAround: true,
		pageDots: false,
	})

	// Cards Stack slider #2
	let slider2 = $('#slider-2').cardslider({
		swipe: true,
		loop: true,
		nav: false,
		dots: false,
		direction:'right',
	}).data('cardslider');

	$(".stacked-cards-wrapper .global-actions .left-action").click(function(e) {
		e.preventDefault();
		slider2.nextCard("left");
	})
	$(".stacked-cards-wrapper .global-actions .right-action").click(function(e) {
		e.preventDefault();
		slider2.nextCard();
	})

})