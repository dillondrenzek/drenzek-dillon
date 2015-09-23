// Main JS Script
// version 2.3.0

(function($, window){
	$(function(){

		// Global
		var $modal = $('#modal').initImageModal();





		// Helper : To be abstracted
		function sizeImage(img){
			var $img = (img instanceof jQuery) ? img : $(img);
			var frame = $img.closest('figure');
			var imgRatio, frameRatio;
			$img.load(function(){
				imgRatio = this.width/this.height;
				frameRatio = frame.width()/frame.height();

				if (imgRatio > frameRatio) {
					$img.addClass('landscape'); // width 100% height auto 
				} else {
					$img.addClass('portrait'); // width auto height 100%
				}

			});
		};





		// Initialize Project Figures
		// - improvements:
		// ?? call with $(...).initProjectFigure() 

		function initializeProjectFigures(){
			// Initialize Project Figures
			var frameRatio = 4/3;
			var $figure = $('.project').find('figure');

			if ($figure.find('a.image').length === 0) {
				$figure.prepend($("<a>", { "href" : "#",
									"class" : "image",
									"text" : "Click to View More Photos"}))
			};

			$('.project figure')
				.each(function(){
					var $this = $(this);
					// console.log("----");
					// console.log("this:", $this);

					// Size figure
					$this.height($this.width() / frameRatio);

					// size image
					$this.find('img').each(function(){
						sizeImage($(this));
					});
					 
				})
				.click(function(e){
					e.preventDefault();
					// presentModal(this);
					$modal.present(this); 
				});
		}

		initializeProjectFigures();
			
	});
})(jQuery, window);