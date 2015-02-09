var Portfolio = Portfolio || {};

var Work = Backbone.Model.extend({

	defaults: {
		name: 'Work',
		projects: [],
		dates: {
			start: "July 27, 1992",
			end: "Today"
		},
		contact: {
			name: "Boss name"
		},
		skills: []
	},

	initialize: function(){
		console.log("Work object initialized.");
		this.on('change', function(){
			console.log("Something changed on a Work object");
		});
	}
});