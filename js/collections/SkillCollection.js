var Portfolio = Portfolio || {};

var Skills = Backbone.Collection.extend({

	model: Portfolio.Skill,

	initialize: function( options ) {
		this.options = options || {};
	},

	localStorage: new Backbone.LocalStorage('skills-backbone'),

	favorites: function() {
		return this.where({ 'personalFavor': 5 });
	},

	comparator: function( skill ) {
		return skill.get('name');
	}
});

// Create the global collection of Skill objects
Portfolio.Skills = new Skills();