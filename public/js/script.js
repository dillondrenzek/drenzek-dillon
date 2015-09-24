// Main JS Script
// version 2.3.0

(function($, window){
	$(function(){

		// Initialize Modal
		var $modal = $('#modal').initImageModal();
		$('.project')
			.find('figure')
			.click(function(e){
				e.preventDefault();
				$modal.present($(this).find('img'));
			});
		


		// TODO: All Images will have either class (landscape or portrait)
		// based on their parent container
		// $('img').load(function(){
		// 	$(this).sizeImage();
		// });



		// Size <figure> inside a .project
		// new: v2.3.2
		function sizeProjectFigures(){

			var frameRatio = 4/3;
			$('.project').find('figure')
				.each(function(i,e){
					$(e).height($(e).width() / frameRatio);
				})
				.find('img')
				.sizeImage();

		}

		// Initialize Project Figures
		// updated: v2.3.2
		// - improvements:
		// ?? call with $(...).initProjectFigure() 
		function initializeProjectFigures(){

			// Initialize Project Figures
			var frameRatio = 4/3;
			var $figure = $('.project').find('figure');

			$('.project').find('figure')
				.each(function(i,e){
					var $e = $(e);
					var $img = $e.find('img');

					// Add Links for More Photos
					if ($img.length > 1) {
						$e.find('a.image').remove();
						$e.prepend($("<a>", { "href" : "#",
											"class" : "image",
											"text" : "Click to View More Photos"}));
					} else {
						$e.find('a.image').remove();
						$e.prepend($("<a>", { "href" : "#",
											"class" : "image",
											"text" : "Click to View Photo"}));
					}

					// Hide all Images but First
					$img.each(function(i,e){
						(i !== 0) ? $(e).hide() : $(e).show();
					});
				});

			sizeProjectFigures();

		}



		$(window).on('resize', function(){
			sizeProjectFigures();
		});



		initializeProjectFigures();
			
	});

})(jQuery, window);









