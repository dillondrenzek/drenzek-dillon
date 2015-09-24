// Main JS Script
// version 2.3.0

(function($, window){
	$(function(){

		// Global
		var $modal = $('#modal').initImageModal();
		$('.project')
			.find('figure')
			.click(function(e){
				e.preventDefault();
				$modal.present(this);
			});
		



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

			// Add Links for More Photos
			if ($figure.find('a.image').length === 0) {
				$figure.prepend($("<a>", { "href" : "#",
									"class" : "image",
									"text" : "Click to View More Photos"}))
			};

			$figure
				.each(function(){
					var $this = $(this);

					// Size figure
					$this.height($this.width() / frameRatio);

					// size image
					$this.find('img').each(function(i,e){
						// sizeImage($(this));
						if (i !== 0) { $(e).hide();	};
						// console.log(this);
						$(e).load(this.sizeImage);

					});
					 
				});

		}

		$(window).on('resize', function(){
			$('.project').find('img').sizeImage();
			$('.project').find('figure')
				.each(function(){
					var $this = $(this);

					// Size figure
					$this.height($this.width() / frameRatio);

					// size image
					$this.find('img').each(function(i,e){
						$(e).sizeImage();
					});
					 
				});
			// initializeProjectFigures();
		});

		initializeProjectFigures();
			
	});
})(jQuery, window);