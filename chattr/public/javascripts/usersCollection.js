ChattrApp.Collections.Users = Backbone.Collection.extend({
	initialize: function () {
		console.log('new users collections');
	},
	model: ChattrApp.Models.User
});