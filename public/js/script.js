(function($){
	$(function(){

		// $this.images = $this.find('img');
		// $this.images.each(function(i,e,a){
		// 	var $e = $(e).remove();
		// 	var $slide = $("<div>", {
		// 		class: "slide"
		// 	});
		// 	$slide.append($e);
		// 	$this.tray.append($slide);

		// 	// $this.slides.push($slide);

		
		// });
		// $this.slides = $this.find('.slide');





		function presentSlider(slider){
			var $slider = $(slider);
			// console.log("slider clicked", slider);
			$('#modal').show();

			// $slider

			// $slider
			// 	.find('img')
			// 	.each(function(i, e){
			// 		var $e = $(e).remove();
			// 		var $slide = $("<div>", { class: "slide" })
			// 			.append($e);
			// 		if ($e.width() / $e.height() > frameRatio) {
			// 			$e.addClass("landscape");
			// 		} else {
			// 			$e.addClass("portrait");
			// 		};
			// 	})

		};

		$('#modal').hide();

		var frameRatio = 4/3;
		// var frameWidth = $this.width();
		// var frameHeight = $this.height(frameWidth / frameRatio);

		$('.image-slider')
			.prepend($("<a>", { "href" : "#",
								"class" : "image",
								"text" : "Click to View More Photos"}))
			.each(function(){
				$(this).height($(this).width() / frameRatio); })
			.click(function(e){
				e.preventDefault();
				presentSlider(this); 
			});

		// $('a.image')
		// 	;

		$('.close')
			.click(function(e){
				e.preventDefault();
				$('#modal').hide(); });
			
	});
})(jQuery);