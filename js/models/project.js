var Project = Backbone.Model.extend({

	defaults: {
		name: 'Work',
		projects: [],
		dates: {
			start: "July 27, 1992",
			end: "Today"
		},
		forString: {
			name: "Boss name"
		},
		skills: []
	},

	initialize: function(){
		console.log("Project object initialized.");
		this.on('change', function(){
			console.log("Something changed on a Project object");
		});
	}
});