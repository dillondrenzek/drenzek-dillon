// var app = app || {};

// Skill Model
// ----------

var Skill = Backbone.Model.extend({

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
		console.log("Initialize Skill.");
		this.on('change', function(){
			console.log("Values for a skill have changed.");
		});
	}
});