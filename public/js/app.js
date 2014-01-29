var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails"
	},

	initialize: function  () {
		this.menuItemModel = new MenuItem();
		this.menuItemView = new MenuItemDetails(
			{
				model: this.menuItemModel
			}
		);
		
		this.menuView = new MenuView(
			{
				items: [
					"Garden Salad",
					"Pizza",
					"Cheesecake"
				]
			}
		);
	},

	list: function () {
		$('#app').html(this.menuView.render().el);
	},

	itemDetails: function (item) {
		this.menuItemModel.set('name', item);
		$('#app').html(this.menuItemView.render().el);
	},

	itemForm: function () {
		$('#app').html('New item form');
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});