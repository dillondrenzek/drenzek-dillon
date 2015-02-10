var Portfolio = Portfolio || {};


var Profile = Backbone.Model.extend({
	
	languagesInput: "\
name          | dateStart                     | XP   | projectedXP | personalFavor *\
------------- | ----------------------------- | ---- | ----------- | ------------- *\
Haml          |                               |      |             |               *\
Sass          |                               |      |             |               *\
Ruby on Rails |                               |      |             | 3.79          *\
Sinatra       |                               |      |             |               *\
Backbone.js   | Wednesday, January 27th, 2015 |      |             |               *\
Node.js       |                               |      |             |               *\
C             |                               |      |             |               *\
C++           | Summer 2008                   |      |             |               *\
Python        |                               |      |             |               *\
Ruby          |                               |      |             | 4             *\
HTML          |                               |      |             |               *\
CSS           |                               | 9999 | 9999        | 5             *\
JavaScript    |                               |      |             |               *\
jQuery        |                               |      |             |               *\
Objective C   |                               |      |             |               *\
Swift         |                               |      |             |               *\
Java          |                               |      |             |               *\
Assembly      |                               |      |             |               *\
Scala         |                               |      |             |               \
",

	skillsInput: "\
name          | dateStart                     | XP   | projectedXP | personalFavor *\
------------- | ----------------------------- | ---- | ----------- | ------------- *\
Photoshop     | Wednesday, January 27th, 2015 | 93   | 100         | 4.5           *\
Illustrator   | Wednesday, January 27th, 2015 | 85   | 100         | 4.9           *\
InDesign      | Wednesday, January 27th, 2015 | 72   | 100         | 3.7           \
",

	parseInput: function ( inputString ) {
		// console.log(" ### Starting parse ### ");
		// console.log(" input string: ", input);

		var result = {

			input: inputString,

			// Split rows of table with * marker
			lines: inputString.split("*"),

			// Keys from header of table
			keys: function () {
				var result = [];
				var cells = this.lines[0].split("|");
				cells.forEach(function(element) {
					result.push(element.trim());
				});
				return result;
			},

			rows: function () {
				var array = this.lines;
				var result = [];
				for (var i = 2; i < array.length; i++) {

					array[i] = array[i].split("|");
					array[i].forEach(function (element, index, arr) {
						arr[index] = element.trim();
					});
					result.push(array[i]); 
					
				};
				return result;
			},

			objects: function () {

				var result = [];
				var raw = this.rows();
				var keys = this.keys();

				// console.log(keys);

				raw.forEach( function (element, index, array) {
					var object = {};

					element.forEach( function (element2, index2, array2) {
						var key = keys[index2];
						object[key] = element2;
					});

					result.push(object);

					// console.log(object);
					// console.log(result);

				});
				return result;
			}
		}
		return result;
	},

	initialize: function ( options ) {
		this.options = options || {}; 
		this.skills = this.parseInput( this.skillsInput ).objects();
		this.languages = this.parseInput( this.languagesInput ).objects();
	}
});



