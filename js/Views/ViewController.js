var ViewController = Backbone.View.extend({
    el: '#main',
    events: {
        'click #editCharInfo': 'openCharacterEditModal'
    },
    initialize: function() {
        this.base = new BaseStatsView({model : new BaseStatsModel()});
		this.adv = new AdvDisadvView({page: this});
    },
	openCharacterEditModal: function() {
		console.log('hi');
		modal = new CharacterInfoModalView({model : new CharacterInfoModel()});
	},
	openModal: function(type, options) {
		if(type == 'adv') {
			var modal = new AdvantagesModalView({page: this, source: options.type});
		}
	},
	passFromModal: function(target, obj) {
		console.log(target);
		console.log(obj);
		if(target == 'adv') {
			console.log(this.adv);
			this.adv.populateAdvantage(obj);
		}
		else if(target == 'disAdv') {
			this.adv.populateDisadvantage(obj);
		}
	}
});