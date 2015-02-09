var Portfolio = Portfolio || {};

var SkillCollection = Backbone.Collection.extend({

	model: Portfolio.Skill,

	localStorage: new Backbone.LocalStorage('skills-backbone'),

	favorites: function() {
		return this.where({ 'personalFavor': 5 });
	},

	comparator: function( skill ) {
		return skill.get('name');
	}
});

// Create the global collection of Skill objects
Portfolio.skills = new SkillCollection();
