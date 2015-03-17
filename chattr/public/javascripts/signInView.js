ChattrApp.Views.SignInView = Backbone.View.extend({
	el: '#sign-in'
	initialize: function () {
		console.log('new sign in');
		this.render();
	},
	template: Handlebars.compile('#sign-in-template'),
	render: function () {
		this.$el.html(this.template());
	}

});