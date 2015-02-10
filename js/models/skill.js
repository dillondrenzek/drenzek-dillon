var Portfolio = Portfolio || {};

// Skill Model
// ----------

Portfolio.Skill =  Backbone.Model.extend({

	// Attributes

	defaults: {
		name: 'Skill',
		dateStart: '',
		XP: 0,
		projectedXP: 0,
		personalFavor: 5,
		projects: [],
		software: [],
		graph: []
	},

	initialize: function( options ){
		this.options = options || {};
		// console.log("Portfolio.Skill initialized.");

		this.on('change', function(){
			// console.log("Portfolio.Skill changed.");
		});
	}
});

Portfolio.Language = Portfolio.Skill.extend({

	initialize: function( options ){
		// Portfolio.Skill.prototype.initialize.call(this, options);

		this.attributes.name = "Language";

		this.options = options || {};
		// console.log("Portfolio.Language initialized.");

		this.on('change', function(){
			// console.log("Portfolio.Language changed.");
		});
	}
});