//- Image Modal
//- jQuery Plugin
//- by Dillon Drenzek

//- v0.0.0

(function( $ ) {

	$.fn.initImageModal = function( options ){
		var defaults, pluginName;
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



		ImageModal.prototype.init = function(){
			console.log("init");
		};

		ImageModal.prototype.present = function(){
			console.log("present");
		};

		ImageModal.prototype.dismiss = function(){
			console.log("dismiss");
		};

		ImageModal.prototype.increment = function(){
			console.log("increment");
		};

		ImageModal.prototype.decrement = function(){
			console.log("decrement");
		};



		return new ImageModal();
	};

}( jQuery ));