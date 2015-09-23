//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v0.0.0

//- this: refers to objects part of this plugin
//- $this: the jquery object this was called on



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
			
			selectors: {
				slide: '.slide'
			}, // unreliable
			templates: {
				frame: '<figure></figure>',
				tray: '<div class="slider"></div>',
				slide: '<div class="slide"></div>',// this is unstable (selectors.slide should be equivalent)
				buttons: {
					close: '<a href="#" class="close fa fa-remove"></a>',
					left: '<a href="#" class="arrow left fa fa-chevron-left"></a>',
					right: '<a href="#" class="arrow right fa fa-chevron-right"></a>'
				}
			}
			
		};

		var ImageModal = (function(){

			function ImageModal( options ) {
				console.log("ImageModal()");
				this.options = $.extend(true, {}, defaults, options);
				this.$closeButton = $(this.options.templates.buttons.close);
				this.$leftButton = $(this.options.templates.buttons.left);
				this.$rightButton = $(this.options.templates.buttons.right);
				this.$frame = $(this.options.templates.frame);
				this.$tray = $(this.options.templates.tray);
				this.$slide = $(this.options.selectors.slide);
				this.init();
			}

			return ImageModal;

		})();

		



		// Prototype Functions
		ImageModal.prototype.init = function(){
			console.log("init");
			this.index = 0;
			$this
				.append(this.$closeButton)
				.append(this.$leftButton)
				.append(this.$rightButton)
				.append(this.$frame
					.append(this.$tray))
				.hide();
		};

		ImageModal.prototype.present = function(element){
			// console.log("present images from:", element);
			$this.show();

			// add in photos from element
			this.addImages(this.$tray, $(element).find('img'));

			this.resize();
		};

		ImageModal.prototype.dismiss = function(){
			console.log("dismiss");
			this.index = 0;
			$(this.options.selectors.slide).remove();
			$this.hide();
		};

		ImageModal.prototype._gotoSlide = function(index){
			// Adjust imageContainer according to value of index
			// var $t = this.$tray,
			var $f = this.$frame;

			this.$tray.css({"left": -(index * $f.width())});
		};

		ImageModal.prototype.increment = function(){
			this.index++;
		};

		ImageModal.prototype.decrement = function(){
			this.index--;
		};

		ImageModal.prototype.addImages = function($container, source){
			// console.log("add images into", $container, "from", source);
			// console.log("num images: ", source.length);
			// var $slide = this.$slide;
			var modal = this;
			source.each(function(){
				$container
					.append($('<div>', {
						"class": "slide"
					})
						.append($('<img/>', {
							"src" : $(this).attr("src")
						})));
			});
			this.resize();
		};

		ImageModal.prototype.resize = function(){
			// console.log("resize modal");
			var $f = this.$frame;
			$('.slide')
				.height($f.height())
				.width($f.width())
				.each(function(i,e){
					$(e).css({"left": i * $f.width()});
				});
			sizeImage($(this.options.imageSlide).find('img'));
			this._gotoSlide(this.index);

			// console.log("this.$slide", this.$slide);
		};


		// var $slide;
		// Object.defineProperty(ImageModal.prototype, "$slide", {
		// 	get: function(){return $(this.options.imageSlide)}
		// });

		// Define index property
		var index = 0;
		Object.defineProperty(ImageModal.prototype, "index", {
			get: function(){return index;},
			set: function(val){

				// turn this into a stored variable
				var numSlides = $('.slide').length || 0;
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

		return new ImageModal();
	};

}( jQuery ));