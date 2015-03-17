ChattrApp.Collections.Chatrooms = Backbone.Collection.extend({
	initialize: function () {
		console.log('new chatrooms collection');
	},
	model: ChattrApp.Models.Chatroom
});