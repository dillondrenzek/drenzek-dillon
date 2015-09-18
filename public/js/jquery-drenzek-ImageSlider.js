(function($, window, document) {
	$.fn.ImageSlider = function(){
		console.log(this);
		var $this = this;

		var frameRatio = 16/9;
		var frameWidth = $this.width();
		var frameHeight = $this.height(frameWidth / frameRatio);

		$this.find('img').each(function(i,e,a){
			var $e = $(e).remove();
			var $slide = $("<div>", {
				class: "slide"
			});
			$slide.append($e);
			$this.append($slide);

			if ($e.width() / $e.height() > frameRatio) {
				$e.addClass("landscape");
			} else {
				$e.addClass("portrait");
			};
		});

		// Initialize Navigation
		$this.navigation = $this.find('.navigation');
		if ($this.navigation.length == 0){
			$this.navigation = $('<div>', { class: "navigation created" });
		}
		if ($this.navigation.length > 0) {
			$this.prepend($this.navigation);
		}

		console.log($this.navigation);

		// Navigation Arrows
		$this.navigation.leftArrow = $this.navigation.find('.arrow.left'); 
		if ($this.navigation.leftArrow.length == 0) {
			$('<div>', {
				class: "arrow left created"
			});
			$this.navigation.append($this.navigation.leftArrow);
		}
		$this.navigation.rightArrow = $this.find('.arrow.right');
		if ($this.navigation.rightArrow.length == 0) { 
			$('<div>', {
				class: "arrow right created"
			});
			$this.navigation.append($this.navigation.rightArrow);
		}

		

		// $this.find('').each(function(i,e,a){

		// });

		// var array = $this.find('')

	};

})(jQuery, window, document);


