jQuery(document).ready(function ($) {
	const slider = $(".customers__wrapper");

	if (slider) {
		gallerySlider();
	}

	function gallerySlider() {
		slider.slick({
			// infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 1000,
			arrows: false,
			dots: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
		const arrow_prev = $(".customers__arrow--prev");
		const arrow_next = $(".customers__arrow--next");
		arrow_prev.on("click", function () {
			slider.slick("slickPrev");
		});
		arrow_next.on("click", function () {
			slider.slick("slickNext");
		});
	}
});
