var Portfolio = Portfolio || {};

Portfolio.CardView = Backbone.View.extend({

	tagName:  	'li',
	className: 	'card',

	template: 	_.template( $('#card-template').html() ),

	events: {
		'dblclick .card': 'edit',
		'click': 'select',
		// 'keypress .edit': 'updateOnEnter',
		// 'blur .edit':   'close'
	},

	initialize: function (options) {
		// In Backbone 1.1.0, if you want to access passed options in
		// your view, you will need to save them as follows:

		this.options = options || {};
		this.model = options.model;
		this.listenTo(this.model, 'change', this.render);
		// $('.card').css("background", "red");

		// console.log("Portfolio.CardView initialized.");
	}, 

	render: function() {

		// console.log("Portfolio.CardView rendered.");

	    this.$el.html( this.template( this.model.attributes ) );
	    return this;
	},


// Event Handlers
	edit: function() {
		// executed when todo label is double clicked
		// console.log ("Portfolio.CardView double click.");
	},

	select: function() {
		// console.log ("Portfolio.CardView clicked.");
	},

	// close: function() {
	// 	// executed when todo loses focus
	// },

	// updateOnEnter: function( e ) {
	// 	// executed on each keypress when in todo edit mode,
	// 	// but we'll wait for enter to get in action
	// }
});