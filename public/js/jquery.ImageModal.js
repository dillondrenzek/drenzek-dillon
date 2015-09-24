//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v1.0.0

//- this: refers to objects part of this plugin
//- $this: the jquery object this was called on



(function( $, window ) {

	// Helper : To be abstracted
	function sizeImage(img){
			var $img = (img instanceof jQuery) ? img : $(img);
			var $frame = $img.closest(this.options.selectors.slide);
			var imgRatio, frameRatio;
			imgRatio = $img.width()/$img.height();
			frameRatio = $frame.width()/$frame.height();

			console.log("img", imgRatio, "frame", frameRatio);
			
			if (imgRatio > frameRatio) {
				$img.removeClass('portrait');
				$img.addClass('landscape'); // width 100% height auto 
			} else {
				$img.removeClass('landscape');
				$img.addClass('portrait'); // width auto height 100%
			}

			// });
		};

	$.fn.sizeImage = function( options ){
		var defaults, $this;
		$this = this;
		defaults = {
			mode: 'fit',
			parentSelector: 'figure'
		};

		var options = this.options = $.extend(true, {}, defaults, options);


		// $this.load(function(){
		// 	var $parent = $this.closest(options.parentSelector);
		// 	console.log("parent", $parent);
		// 	console.log("parent ratio", $parent.width()/$parent.height());
		// 	console.log($this.attr("alt"), "ratio", $this.width()/$this.height());
		// });

		// var $img = (img instanceof jQuery) ? img : $(img);
		var $frame = $this.closest(options.parentSelector);
		var imgRatio = $this.width()/$this.height();
		var frameRatio = $frame.width()/$frame.height();

		console.log("img", imgRatio, "frame", frameRatio);
		
		if (imgRatio > frameRatio) {
			$this.removeClass('portrait');
			$this.addClass('landscape'); // width 100% height auto 
		} else {
			$this.removeClass('landscape');
			$this.addClass('portrait'); // width auto height 100%
		}
		// })();
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
				this._init();
			}

			return ImageModal;

		})();

		
		// Prototype Functions
		ImageModal.prototype._init = function(){
			var _this = this;

			// Default Values
			_this.index = 0;

			// Event Listeners
			_this.$closeButton.click(function(e){
				e.preventDefault();
				_this.dismiss();
			});

			_this.$leftButton.click(function(e){
				e.preventDefault();
				_this.decrement();
			});

			_this.$rightButton.click(function(e){
				e.preventDefault();
				_this.increment();
			});

			$(window).on('resize', function(){
				console.log("image modal resize");
				_this.resize();
			});

			// Add Static Items
			$this
				.append(_this.$closeButton)
				.append(_this.$leftButton)
				.append(_this.$rightButton)
				.append(_this.$frame)
				.hide();

			$('.slide').find('img').load(function(){
				sizeImage(this);
			});
		};

		ImageModal.prototype.present = function(element){
			// console.log("present images from:", element);
			$this.show();

			// add in photos from element
			this.addImages(this.$frame, $(element).find('img'));

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
			var $f = this.$frame;

			$('.slide').each(function(i, e){
				var left = parseInt($(e).css("left").replace('px', ''));
				console.log("left", left);
				$(e).css({"left": (i-index) * $f.width()})
			});

			console.log("_gotoSlide", index);
			console.log(" ",this);

			if (index === 0) {
				this.$leftButton.hide();
			} else {
				this.$leftButton.show();
			}

			if (index === ($(this.options.selectors.slide).length)-1 ) {
				this.$rightButton.hide();
			} else {
				this.$rightButton.show();
			}

			// $('.slide').css({"left": -(index * $f.width())});
		};

		ImageModal.prototype.increment = function(){
			this.index++;
		};

		ImageModal.prototype.decrement = function(){
			this.index--;
		};

		ImageModal.prototype.addImages = function($container, source){
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
			var $f = this.$frame;
			$(this.options.selectors.slide)
				.height($f.height())
				.width($f.width())
				.each(function(i,e){
					$(e).css({"left": i * $f.width()});
				});
			$(this.options.selectors.slide).find('img').sizeImage();
			// sizeImage($(this.options.selectors.slide).find('img'));
			this._gotoSlide(this.index);
		};

		// Define index property
		var index = 0;
		Object.defineProperty(ImageModal.prototype, "index", {
			get: function(){return index;},
			set: function(val){

				// turn this into a stored variable
				var numSlides = $(this.options.selectors.slide).length || 0;
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

}( jQuery, window ));




