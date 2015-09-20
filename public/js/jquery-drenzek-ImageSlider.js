(function($, window, document) {
	$.fn.ImageSlider = function(){
		console.log(this);
		var $this = this;

		var frameRatio = 16/9;
		var frameWidth = $this.width();
		var frameHeight = $this.height(frameWidth / frameRatio);

		// Create Slide Container: Tray
		$this.tray = $("<div>", {
			class: "tray"
		});
		$this.append($this.tray);

		// Create Slides
		$this.slides = [];
		$this.images = $this.find('img');
		$this.images.each(function(i,e,a){
			var $e = $(e).remove();
			var $slide = $("<div>", {
				class: "slide"
			});
			$slide.append($e);
			$this.tray.append($slide);

			$this.slides.push($slide);

			if ($e.width() / $e.height() > frameRatio) {
				$e.addClass("landscape");
			} else {
				$e.addClass("portrait");
			};
		});




		// Index
		$this.index.value = 0;
		$this.tray.move = function(){

			$($this.slides).each(function(i,e,a){
				$(e).css({"top": -($this.height() * $this.index.value)});
			});
		};
		$this.index.increment = function(){
			if ($this.index.value < $this.images.length-1) {
				$this.index.value++;
				console.log("increment index:", $this.index.value);
				$this.tray.move();
			};
			
		};
		$this.index.decrement = function(){
			if ($this.index.value > 0) {
				$this.index.value--;
				console.log("decrement index:", $this.index.value);
				$this.tray.move();
			};
		};





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
			$this.navigation.leftArrow = $('<div>', {
				class: "arrow left created"
			}).append($('<div>', {
				class:"icon noselect"
			}).text("<"));

			$this.navigation.leftArrow.click(function(){
				$this.index.decrement();
			});

			$($this.navigation).append($this.navigation.leftArrow);
		}



		$this.navigation.rightArrow = $this.find('.arrow.right');
		if ($this.navigation.rightArrow.length == 0) { 

			$this.navigation.rightArrow = $('<div>', {
				class: "arrow right created"
			}).append($('<div>', {
				class:"icon noselect"
			}).text(">"));

			$this.navigation.rightArrow.click(function(){
				$this.index.increment();
			});

			$this.navigation.append($this.navigation.rightArrow);
		}


	};

})(jQuery, window, document);


