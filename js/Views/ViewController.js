var ViewController = Backbone.View.extend({
    el: '#main',
    events: {
        'click #editCharInfo': 'openCharacterEditModal'
    },
    initialize: function() {
        var base = new BaseStatsView({model : new BaseStatsModel()});
		var adv = new AdvDisadvView({});
    },
	openCharacterEditModal: function() {
		console.log('hi');
		var modal = null;
		modal = new CharacterInfoModalView({model : new CharacterInfoModel()});
	}
});