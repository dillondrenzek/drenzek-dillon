// Main JS Script
// version 2.2.3

(function($, window){
	$(function(){

		// Global
		var $modal = $('#modal');
		Object.defineProperty($modal, "index", {
			get: function(){return index;},
			set: function(v){
				index = v;
				var numSlides = $modal.find('.slide').length;

				if (index < 0 ) { 
					index = 0;
					return; 
				} else if (index >= numSlides) {
					index = numSlides-1;
					return;
				}

				$modal.find('.slider').css({"left": -($modal.index*$modal.find('.slide').width())});
			}
		});
		$modal.index = 0;
		

		function sizeImage(img){
			var $img = (img instanceof jQuery) ? img : $(img);
			var frame = $img.closest('figure');
			// var frameRatio = frame.width()/frame.height();
			var imgRatio, frameRatio;
			$img.load(function(){
				imgRatio = this.width/this.height;
				frameRatio = frame.width()/frame.height();

				// console.log("-----")
				// console.log("frame", frame, frameRatio);
				// console.log("img", $img.attr("alt"), this.width, this.height, imgRatio);
				
				if (imgRatio > frameRatio) {
					// console.log("landscape");
					$img.addClass('landscape'); // width 100% height auto 
				} else {
					// console.log("portrait");
					$img.addClass('portrait'); // width auto height 100%
				}

			});
		};

		function initializeModal(){

			$('.close')
				.click(function(e){
					e.preventDefault();
					closeModal();

				});

			$('.arrow')
				.click(function(e){
					e.preventDefault();
					if ($(this).hasClass("left")) {
						// console.log("left");
						$modal.index--;

					} else if ($(this).hasClass("right")) {
						// console.log("right");
						$modal.index++
					} 
					
				});

			// Hide Modal
			$modal.hide();
		};

		function addModalImages($dest, images){
			images.each(function(){
				console.log(this);
				$dest
					.append($('<div>', {
						"class": "slide"
					})
						.append($('<img/>', {
							"src" : $(this).attr("src")
						})));
			});
		}

		function alignSlides(){
			var $modalFigure = $modal.find('figure');
			$('.slide')
				.height($modalFigure.height())
				.width($modalFigure.width())
				.each(function(i, e){
					$(e).css({"left": i*$modalFigure.width()});
				});
			sizeImage($('.slide').find('img'));
		}

		function presentModal(projectFigure){
			$modal.show();

			var $modalFigure = $modal.find('figure');
			var $modalSlider = $modal.find('.slider');

			// add in photos from projectFigure
			addModalImages($modalSlider, $(projectFigure).find('img'));
			console.log($modalSlider);

			// align those photos within a slider (by force?)
			alignSlides();
			
		}

		function closeModal(){
			$modal.index = 0;

			$modal
				.find('.slide')
				.remove();

			$modal.hide();
		}
		

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
					presentModal(this); 
				});
		}
		

		initializeProjectFigures();
		initializeModal();

		$(window).on('resize', function(){
			initializeProjectFigures();
			initializeModal();
			alignSlides();
		});
			
	});
})(jQuery, window);