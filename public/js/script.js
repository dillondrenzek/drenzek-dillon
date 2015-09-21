// Main JS Script
// version 2.2.3

(function($, window){
	$(function(){

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
					$('#modal').hide();
					$('#modal').find('img').removeClass("landscape portrait"); });

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
			var images = $slider
				.find('img')
			$('#modal')
				.find('img')
				.attr({"src": $(images[0]).attr("src")})
				.each(function(){
					console.log("modal");
					sizeImage($(this));
				});

			$('#modal').show();
		};
		

		function initializeProjectFigures(){
			// Initialize Project Figures
			var frameRatio = 4/3;
			$('.project figure')
				.prepend($("<a>", { "href" : "#",
									"class" : "image",
									"text" : "Click to View More Photos"}))
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
		});
			
	});
})(jQuery, window);