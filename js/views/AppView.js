var Portfolio = Portfolio || {};

Portfolio.AppView = Backbone.View.extend({

	el: '#app',

	initialize: function() {
		this.$list = this.$('#cards-container');

		this.listenTo(Portfolio.Skills, 'add', this.addOne);
		this.listenTo(Portfolio.Skills, 'reset', this.addAll);
		this.listenTo(Portfolio.Skills, 'all', this.render);

		Portfolio.Skills.fetch();

		// console.log("Portfolio.AppView initialized.");
	},

	render: function () {
		// console.log("Portfolio.AppView rendered.");
	},

	// Mostly a helper function for now
	addOne: function ( skill ) {
		var view = new Portfolio.CardView({ model: skill });
		$('#cards-container').append( view.render().el );
	},

	// Add all skills
	addAll: function() {
		this.$('#cards-container').html('');
		Portfolio.Skills.each(this.addOne, this);
	}
});