var ViewController = Backbone.View.extend({
    el: '#main',
    events: {
        'click #editCharInfo': 'openCharacterEditModal'
    },
    initialize: function() {
        var base = new BaseStatsView({model : new BaseStatsModel()});
		var adv = new AdvDisadvView({page: this});
    },
	openCharacterEditModal: function() {
		console.log('hi');
		modal = new CharacterInfoModalView({model : new CharacterInfoModel()});
	},
	callFromChild: function() {
		console.log('called');
	}, 
	openModal: function(type) {
		console.log(type);
		if(type == "adv")
		{
			console.log(1);
			var modal = new AdvantagesModalView();
		}
	}
});