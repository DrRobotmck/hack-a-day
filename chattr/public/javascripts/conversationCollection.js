ChattrApp.Collections.Conversation = Backbone.Collection.extend({
	initialize: function () {
		console.log('New conversation!');
	},
	model: ChattrApp.Models.Message,
	fetch: function () {
		// go to firebase and get most recent representation of the conversation.
	},
	filter: function () {
		// filter last 50 messages from the conversation to be rendered
	}
});