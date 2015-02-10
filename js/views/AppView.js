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
		// this.$el.html( this.)
		// console.log("Portfolio.AppView rendered.");

		// this.$('h1').html(Portfolio.name);
		// console.log("H1 tag set to:", Portfolio);
	},

	// Mostly a helper function for now
	addOne: function ( skill ) {

		// console.log("Portfolio.AppView add one.");

		var view = new Portfolio.CardView({ model: skill });
		$('#cards-container').append( view.render().el );
	},

	// Add all skills
	addAll: function() {

		// console.log("Portfolio.AppView add all.");

		this.$('#cards-container').html('');
		Portfolio.Skills.each(this.addOne, this);
	}
});