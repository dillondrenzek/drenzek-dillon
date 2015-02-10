var Portfolio = Portfolio || {};

Portfolio.AppView = Backbone.View.extend({

	el: '#app',

	initialize: function() {
		this.$list = this.$('#cards-container');

		this.listenTo(Portfolio.Skills, 'add', this.addOne);
		this.listenTo(Portfolio.Skills, 'reset', this.addAll);
		this.listenTo(Portfolio.Skills, 'all', this.addAll);

		this.listenTo(Portfolio.Skills, 'change:completed', this.filterOne);
		this.listenTo(Portfolio.Skills, 'filter', this.filterAll);
		this.listenTo(Portfolio.Skills, 'all', this.render);

		Portfolio.Skills.fetch();
	},

	render: function () {
		// console.log("Portfolio.AppView rendered.");
	},

	beep: function () {
		console.log("BEEP.");
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
	},

	// New
    filterOne : function ( skill ) {
      skill.trigger('visible');
    },

    // New
    filterAll : function () {
      Portfolio.Skills.each(this.filterOne, this);
    },
});