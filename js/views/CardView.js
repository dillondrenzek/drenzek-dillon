var Portfolio = Portfolio || {};

Portfolio.CardView = Backbone.View.extend({

	tagName:  	'li',

	template: 	_.template( $('#card-template').html() ),

	events: {
		// 'dblclick label': 'edit',
		// 'keypress .edit': 'updateOnEnter',
		// 'blur .edit':   'close'
	},

	initialize: function (options) {
		// In Backbone 1.1.0, if you want to access passed options in
		// your view, you will need to save them as follows:

		

		this.options = options || {};
		this.model = options.model;
		this.listenTo(this.model, 'change', this.render);
		// this.model.bind('change', _.bind(this.render, this));
		console.log("Portfolio.CardView initialized.");
	}, 

	render: function() {

		console.log("Portfolio.CardView rendered.");

	    this.$el.html( this.template( this.model.attributes ) );
	    // this.input = this.$('.edit');
	    return this;
	}


// Event Handlers
	// edit: function() {
	// 	// executed when todo label is double clicked
	// },

	// close: function() {
	// 	// executed when todo loses focus
	// },

	// updateOnEnter: function( e ) {
	// 	// executed on each keypress when in todo edit mode,
	// 	// but we'll wait for enter to get in action
	// }
});