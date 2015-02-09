var Portfolio = Portfolio || {};

Portfolio.AppView = Backbone.View.extend({

	el: '#app',

	initialize: function() {
		this.$list = this.$('#cards-container');


		this.listenTo(Portfolio.skills, 'add', this.addOne);
		this.listenTo(Portfolio.skills, 'reset', this.addAll);

		this.listenTo(Portfolio.skills, 'all', this.render);

		Portfolio.skills.fetch();

		console.log("Portfolio.AppView initialized.");
	},

	render: function () {
		// this.$el.html( this.)
		console.log("Portfolio.AppView rendered.");
	},

	// Mostly a helper function for now
	addOne: function ( skill ) {

		console.log("Portfolio.AppView add one.");

		var view = new Portfolio.CardView({ model: skill });
		$('#cards-container').append( view.render().el );
	},

	// Add all skills
	addAll: function() {

		console.log("Portfolio.AppView add all.");

		this.$('#cards-container').html('');
		Portfolio.skills.each(this.addOne, this);
	}
});