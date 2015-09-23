//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v0.0.0

(function( $ ) {

	$.fn.initImageModal = function( options ){
		var defaults, pluginName, $this;
		$this = this;
		pluginName = "imagemodal";
		defaults = {

		};

		var ImageModal = (function(){

			function ImageModal( options ) {
				console.log("ImageModal()");
				this.options = $.extend(true, {}, defaults, options);
				this.init();
			}

			return ImageModal;

		})();

		// Define index property
		Object.defineProperty(ImageModal.prototype, "index", {
			get: function(){return index;},
			set: function(v){
				index = v;
				console.log("ImageModal.index set:", index);
			}
		});

		ImageModal.prototype.init = function(){
			console.log("init");
			this.index = 0;
			$this.hide();
		};

		ImageModal.prototype.present = function(element){
			console.log("present images from:", element);
			$this.show();

			// add in photos from element
			this.addImages($this, $(element).find('img'));
		};

		ImageModal.prototype.dismiss = function(){
			console.log("dismiss");
			$this.index = 0;
			$this.find('slide').remove();
			$this.hide();
		};

		ImageModal.prototype.increment = function(){
			console.log("increment");
		};

		ImageModal.prototype.decrement = function(){
			console.log("decrement");
		};

		ImageModal.prototype.addImages = function(container, source){};

		ImageModal.prototype.resize = function(){};



		return new ImageModal();
	};

}( jQuery ));