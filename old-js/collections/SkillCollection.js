var Portfolio = Portfolio || {};

var Skills = Backbone.Collection.extend({

	model: Portfolio.Skill,

	initialize: function( options ) {
		this.options = options || {};
		this.on('sort', function(){
            console.log("Portfolio.Skills sorted.");
        });
	},

	localStorage: new Backbone.LocalStorage('skills-backbone'),

	favorites: function() {
		return this.where({ 'personalFavor': 5 });
	},

	comparator: function( skill ) {
		// return skill.get('personalFavor') * -1;
		return skill.get('XP') * -1;
	},

	sorted: function () {
		console.log("Skills were sorted.");
	}
});

// Create the global collection of Skill objects
Portfolio.Skills = new Skills();