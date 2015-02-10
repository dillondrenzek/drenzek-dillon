var Portfolio = Portfolio || {};

Portfolio.CardView = Backbone.View.extend({

	tagName:  	'li',
	className: 	'card',

	template: 	_.template( $('#card-template').html() ),

	events: {
		'dblclick': 'edit',
		'click': 'select',
	},

	initialize: function (options) {
		this.options = options || {};
		this.model = options.model;
		this.listenTo(this.model, 'change', this.render);

		// console.log("Portfolio.CardView initialized.");
	}, 

	render: function() {
		// console.log("Portfolio.CardView rendered.");

	    this.$el.html( this.template( this.model.attributes ) );
	    return this;
	},


// Event Handlers
	edit: function() {
		console.log ("Portfolio.CardView double click.");
	},

	select: function() {
		console.log ("Portfolio.CardView clicked.");
	},
});