(function($, window){
	$(function(){

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

			// Hide Modal
			$('#modal').hide();
		};

		function presentModal(slider){
			var $slider = $(slider);
			var images = $slider.find('img');
			$('#modal')
				.find('img.modal')
				.attr({"src": $(images[0]).attr("src")});

			$('#modal').show();

		};

		

		// Initialize Project Figures
		var frameRatio = 4/3;
		$('.project figure')
			.prepend($("<a>", { "href" : "#",
								"class" : "image",
								"text" : "Click to View More Photos"}))
			.each(function(){
				$(this).height($(this).width() / frameRatio); })
			.click(function(e){
				e.preventDefault();
				presentModal(this); 
			});

		initializeModal();
			
	});
})(jQuery, window);