//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v1.0.0

//- this: refers to objects part of this plugin
//- $this: the jquery object this was called on

// TODO:
// - Remove dependency on CSS classes
// - Add 'esc' and arrow key functionality

(function( $, window ) {


	// TODO: Make Options relevant, implement 'fit' mode, add in 'fill' mode
	$.fn.sizeImage = function( options ){
		var $this = this;
		var defaults = {
			mode: 'fit',
			parentSelector: 'figure'
		};

		var options = this.options = $.extend(true, {}, defaults, options);

		var $frame = $this.closest(options.parentSelector);
		var imgRatio = $this.width()/$this.height();
		var frameRatio = $frame.width()/$frame.height();

		console.log("img", imgRatio, "frame", frameRatio);
		
		// TODO: Remove dependency on CSS class
		if (imgRatio > frameRatio) {
			$this.removeClass('portrait');
			$this.addClass('landscape'); // width 100% height auto 
		} else {
			$this.removeClass('landscape');
			$this.addClass('portrait'); // width auto height 100%
		}
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

				// Initialize Components
				this.$closeButton = $(this.options.templates.buttons.close);
				this.$leftButton = $(this.options.templates.buttons.left);
				this.$rightButton = $(this.options.templates.buttons.right);
				this.$frame = $(this.options.templates.frame);
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
				_this.index--;
			});

			_this.$rightButton.click(function(e){
				e.preventDefault();
				_this.index++;
			});

			// On Window Resize
			$(window).on('resize', function(){
				_this.resize();
				_this.alignSlides();
			});

			// Add Components to HTML
			$this
				.append(_this.$closeButton)
				.append(_this.$leftButton)
				.append(_this.$rightButton)
				.append(_this.$frame)
			// Hide Modal
				.hide();

		};



		// INDEX
		// updated v2.3.2
		var index = 0;
		Object.defineProperty(ImageModal.prototype, "index", {
			get: function(){return index;},
			set: function(val){

				// Variable Bounds
				var lowerBound = 0;
				var upperBound = $(this.options.selectors.slide).length-1;

				// Sanity Check
				if (lowerBound <= val && val <= upperBound) {
					index = val;
				} else {
					return;
				}

				// Hide Buttons based on Index
				( index === lowerBound ) ? this.$leftButton.hide() : this.$leftButton.show();
				( index === upperBound ) ? this.$rightButton.hide() : this.$rightButton.show();

				// ADD: update page counter/display

				// Align Slides based on Index
				this.alignSlides();
			}
		});



		// Align Slides
		// Updated: v2.3.2
		ImageModal.prototype.alignSlides = function(){

			// Current Index & Frame
			var index = this.index;
			var $frame = this.$frame;

			// Set Left Attribute based on index, frame width and slide order
			$(this.options.selectors.slide).each(function(i, e){
				$(e).css({"left": (i-index) * $frame.width()});
			});

		};



		// Add Images
		// updated v2.3.2
		ImageModal.prototype.addImages = function($container, $source){
			
			// For use inside each callback
			var modal = this;

			// Wrap each image in a slide and append slide to container
			$source
				.clone()
				.wrap( $('<div>', { "class" : modal.options.selectors.slide.replace('.','')}) )
				.show()
				.parent()
				.appendTo($container);
		};



		// Present Modal with Elements
		// updated v2.3.2
		ImageModal.prototype.present = function($elements){

			// Show Modal
			$this.show();

			// Add Elements to Frame
			this.addImages(this.$frame, $elements);

			// Set Start Index
			this.index = 0;

			// Resize Window 
			this.resize();
		};



		// Resize Slides According to Frame
		// updated v2.3.2
		ImageModal.prototype.resize = function(){

			// Size Slides
			$(this.options.selectors.slide)
				.height(this.$frame.height())
				.width(this.$frame.width())
				
			// Size Images based on size of slide
				.find('img')
				.sizeImage();
		};



		// Dismiss Modal
		// updated v2.3.2
		ImageModal.prototype.dismiss = function(){

			// Remove all created Slides
			$(this.options.selectors.slide).remove();

			// Hide Modal
			$this.hide();
		};



		return new ImageModal();
	};

}( jQuery, window ));




