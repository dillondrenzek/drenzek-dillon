(function($){
	$(function(){





		function presentSlider(slider){
			var $slider = $(slider);
			$('#modal').show();
		};

		$('#modal').hide();

		var frameRatio = 4/3;

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

		$('.close')
			.click(function(e){
				e.preventDefault();
				$('#modal').hide(); });

		$('.arrow')
			.click(function(e){
				e.preventDefault();
				if ($(this).hasClass("left")) {
					console.log("left");
				} else if ($(this).hasClass("right")) {
					console.log("right");
				}
			})
			
	});
})(jQuery);