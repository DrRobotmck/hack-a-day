ChattrApp.Views.ChatroomPreview = Backbone.View.extend({
	initialize: function () {
		console.log('new chatroom');
		this.render();
	},
	template: Handlebars.compile('#chatroom-preview-template'),
	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
	},
	events: {
		'click': 'renderConversation'
	},
	renderConversation: function () {
		$('#chat-box').empty();
		var conversation = new ChattrApp.Collections.Conversation;
		var chatroom = new ChattrApp.Views.Conversation({ collection: conversation});
	}
});