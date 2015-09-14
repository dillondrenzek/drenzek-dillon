$(document).ready(function(){

// Image Slider

	// ImageSlider Class Definition
	function ImageSlider(ImageSlider) {
		var IS = $(ImageSlider);

		var slider = IS.find('.slider');
		var slides = slider.find('.slide');

		var control = IS.find('.control');
		var left_arrow = $('<div class="arrow left"><div class="fa fa-chevron-left"></div></div>');
		var right_arrow = $('<div class="arrow right"><div class="fa fa-chevron-right"></div></div>');

		// Slide Index
		var i = 0;

		// Initialize Slides
		slides.each(function(i, e){
			$(e).css({"left": $(e).width()*i});
		});


		// Initialize Control
		left_arrow.on('click', function(){
			if (i>0) {
				i--;
				slider.css({"left": IS.width()*-(i)});
				IS.css({"height": slides[i].height});
			}
		});

		right_arrow.on('click', function(){
			if (i<slides.length-1) {
				i++;
				slider.css({"left": IS.width()*-(i)});
				IS.css({"height": slides[i].height});
			}
		});


		control.append(left_arrow).append(right_arrow);
		IS.css({"height": slides[i].height});
		



	}

	// All images in slider
	var sliders = $('.project .image-slider');
	sliders.each(function(i,e){
		var slider = new ImageSlider(e);
	});

	



	function initializeImageSlider (ImageSlider) {
		var IS = $(ImageSlider);
		var control = IS.find('.control');
		var slider = IS.find('.slider');
		var slides = slider.find('.slider');

		// Slide Index
		var i = 0;



		// Initialize Control
		var left_arrow = $('<div class="arrow left"></div>');
		var right_arrow = $('<div class="arrow right"></div>');

		left_arrow.on('click', function(){
			if (i>0) {
				i--;
			}
		});

		right_arrow.on('click', function(){
			if (i<slides.length) {
				i++;
			}
		});


		control.append(left_arrow).append(right_arrow);
		



	}

	

	






});