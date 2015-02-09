var CardView = Backbone.View.extend({

	tagName:  	'div',

	cardTpl: 	_.template( "An Example Template" ),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit':   'close'
	},

	initialize: function (options) {
		// In Backbone 1.1.0, if you want to access passed options in
		// your view, you will need to save them as follows:
		this.options = options || {};
		// this.model.bind('change', _.bind(this.render, this));
	}, 

	render: function() {
	    this.$el.html( this.todoTpl( this.model.attributes ) );
	    this.input = this.$('.edit');
	    return this;
	},


// Event Handlers
	edit: function() {
		// executed when todo label is double clicked
	},

	close: function() {
		// executed when todo loses focus
	},

	updateOnEnter: function( e ) {
		// executed on each keypress when in todo edit mode,
		// but we'll wait for enter to get in action
	}
});