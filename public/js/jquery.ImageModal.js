//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v0.0.0

(function( $ ) {

	// Helper : To be abstracted
	function sizeImage(img){
			var $img = (img instanceof jQuery) ? img : $(img);
			var frame = $img.closest('figure');
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




	$.fn.initImageModal = function( options ){
		var defaults, pluginName, $this;
		$this = this;
		pluginName = "imagemodal";
		defaults = {
			imageContainer: '.slider',
			imageFrame: 'figure',
			imageSlide: '.slide'
		};

		var ImageModal = (function(){

			function ImageModal( options ) {
				console.log("ImageModal()");
				this.options = $.extend(true, {}, defaults, options);
				// this.index = 0;
				this.init();
			}

			return ImageModal;

		})();

		// Define index property
		var index = 0;
		Object.defineProperty(ImageModal.prototype, "index", {
			get: function(){return index;},
			set: function(val){

				
				

				// turn this into a stored variable
				var numSlides = $this.find(this.options.imageSlide).length || 0;
				console.log("numSlides", numSlides);

				// Sanity check: Bounds 0 =< (possible indexes) < numSlides
				if (0 <= val && val < numSlides) {
					index = val;
				} else {
					return;
				}

				console.log("ImageModal.index set:", index, " (tried:", val,")");

				this._gotoSlide(index);
			}
		});



		// Prototype Functions
		ImageModal.prototype.init = function(){
			console.log("init");
			this.index = 0;
			$this.hide();
		};

		ImageModal.prototype.present = function(element){
			// console.log("present images from:", element);
			$this.show();

			var $modalSlider = $this.find(this.options.imageContainer);

			// add in photos from element
			this.addImages($modalSlider, $(element).find('img'));

			this.resize();
		};

		ImageModal.prototype.dismiss = function(){
			console.log("dismiss");
			this.index = 0;
			$this.find('.slide').remove();
			$this.hide();
		};

		ImageModal.prototype._gotoSlide = function(index){
			// Adjust imageContainer according to value of index
			$this.find(this.options.imageContainer).css({"left": -(index * $this.find(this.options.imageSlide).width())});
		};

		ImageModal.prototype.increment = function(){
			this.index++;
		};

		ImageModal.prototype.decrement = function(){
			this.index--;
		};

		ImageModal.prototype.addImages = function($container, source){
			console.log("add images into", $container, "from", source);
			console.log("num images: ", source.length);
			source.each(function(){
				$container
					.append($('<div>', {
						"class": "slide"
					})
						.append($('<img/>', {
							"src" : $(this).attr("src")
						})));
			});
		};

		ImageModal.prototype.resize = function(){
			console.log("resize modal");
			var $modalFigure = $this.find(this.options.imageFrame);
			$(this.options.imageSlide)
				.height($modalFigure.height())
				.width($modalFigure.width())
				.each(function(i,e){
					$(e).css({"left": i * $modalFigure.width()});
				});
			sizeImage($(this.options.imageSlide).find('img'));
			this._gotoSlide(this.index);
		};

		

		return new ImageModal();
	};

}( jQuery ));