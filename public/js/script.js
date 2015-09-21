// Main JS Script
// version 2.2.3

(function($, window){
	$(function(){

		function sizeImage(img){
			var $img = (img instanceof jQuery) ? img : $(img);
			var frame = $img.closest('figure');
			var frameRatio = $(frame).width()/$(frame).height();
			console.log(frameRatio);

			if ($img.width()/$img.height() > frameRatio) {
				$img.addClass('landscape');
			} else {
				$img.addClass('portrait');
			}
		};

		function initializeModal(){

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
					} });

			sizeImage($('#modal').find('img'));

			// Hide Modal
			$('#modal').hide();
		};

		function presentModal(slider){
			var $slider = $(slider);
			var images = $slider
				.find('img')
			$('#modal')
				.find('img')
				.attr({"src": $(images[0]).attr("src")})
				.each(function(){
					sizeImage($(this));
				});

			

			$('#modal').show();

		};
		

		// Initialize Project Figures
		var frameRatio = 4/3;
		$('.project figure')
			.prepend($("<a>", { "href" : "#",
								"class" : "image",
								"text" : "Click to View More Photos"}))
			.each(function(){
				// Size figure
				$(this).height($(this).width() / frameRatio);

				// size image
				sizeImage($(this).find('img')[0]); 
			})
			.click(function(e){
				e.preventDefault();
				presentModal(this); 
			});

		initializeModal();
			
	});
})(jQuery, window);