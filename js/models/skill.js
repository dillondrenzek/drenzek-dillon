var Portfolio = Portfolio || {};

// Skill Model
// ----------

Portfolio.Skill =  Backbone.Model.extend({

	// Attributes

	defaults: {
		name: 'Skill',
		dateStart: 'July 27, 1992',
		XP: 0,
		projectedXP: 0,
		personalFavor: 5,
		projects: [],
		software: [],
		graph: []
	},

	initialize: function(){
		console.log("Portfolio.Skill initialized.");

		this.on('change', function(){
			console.log("Portfolio.Skill changed.");
		});
	}
});