ChattrApp.Views.Conversation = Backbone.View.extend({
	initialize: function () {
		console.log('new conversation');
		this.listenTo(this.collection, 'add', this.renderMessage);
		this.listenTo(this.collection, 'reset', this.renderAllMessages);
		this.render();
	},
	render: function () {
		this.collection.reset();
		$('#chat-box').append(this.el);
	},
	renderMessage: function (model) {
		var message = new ChattrApp.Views.Message({model: model});
		this.$el.append(message.el);
	},
	renderAllMessages: function () {
		var model;
		var numMessages = this.collection.length;
		for ( var i = 0; i < numMessages; i += 1) {
			model = this.collection.get(i);
			this.renderMessage(model);
		}
	}
});