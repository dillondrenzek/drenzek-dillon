// Main JS Script
// version 2.3.0

(function($, window){
	$(function(){


		// $('input').focus(function(){
		// 	var $this = $(this);
		// 	$this.siblings().css({'color': $this.css('color')});

		// 	console.log($this.siblings());
		// });

		$('input').focusin(function(){
			var $this = $(this);
			$this.siblings().addClass('selected');
		});

		$('input').focusout(function(){
			var $this = $(this);
			$this.siblings().removeClass('selected');
		});


		// Initialize Modal
		var $modal = $('#modal').initImageModal();
		$('.project')
			.find('figure')
			.click(function(e){
				e.preventDefault();
				$modal.present($(this).find('img'));
			});
		


		// TODO: All Images will have either class (landscape or portrait)
		// based on their parent container
		//
		$('img:not(.author)').load(function(){
			$(this).sizeImage();
		});



		// Size <figure> inside a .project
		// new: v2.3.2
		function sizeProjectFigures(){

			var frameRatio = 4/3;
			$('.project').find('figure')
				.each(function(i,e){
					$(e).height($(e).width() / frameRatio);
				})
				.find('img')
				.sizeImage();

		}

		// Initialize Project Figures
		// updated: v2.3.2
		// - improvements:
		// ?? call with $(...).initProjectFigure() 
		function initializeProjectFigures(){

			// Initialize Project Figures
			var frameRatio = 4/3;
			var $figure = $('.project').find('figure');

			$('.project').find('figure')
				.each(function(i,e){
					var $e = $(e);
					var $img = $e.find('img');

					// Add Links for More Photos
					if ($img.length > 1) {
						$e.find('a.image').remove();
						$e.prepend($("<a>", { "href" : "#",
											"class" : "image",
											"text" : "Click to View More Photos"}));
					} else {
						$e.find('a.image').remove();
						$e.prepend($("<a>", { "href" : "#",
											"class" : "image",
											"text" : "Click to View Photo"}));
					}

					// Hide all Images but First
					$img.each(function(i,e){
						(i !== 0) ? $(e).hide() : $(e).show();
					});
				});

			

		}



		$(window).on('resize', function(){
			sizeProjectFigures();
		});



		initializeProjectFigures();
		sizeProjectFigures();

		

		// Aside & hover-description
		
		
		function aside_output(array, output) {
			
			var elementArray = ['<ul>'];
			array.forEach(function(el){
				elementArray.push("<li>"+el+"<br><br></li>");
			});
			elementArray.push('</ul>');


			var structure = elementArray.join('');
			output.html(structure);
		};

		var output = $('#leftside').find('aside');
		var aside = [
			"I’m totally psyched you’re here. I’ve found a passion in putting a bit of original artistry in Front-End Web Development and I’m eager to share with you.<br><br>",
			"My always-clever remarks appear throughout the site in this font. It\'s like your own personal tour!<br><br>",
			"Also, these photos..."
		];
		aside_output(aside, output);

		// aside_output([
		// 	"test", "test2", "test3"
		// 	], output);

			
	});

})(jQuery, window);









