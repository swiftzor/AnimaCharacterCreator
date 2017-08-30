var ViewController = Backbone.View.extend({
    el: '#mainContent',
    events: {
        
    },
    initialize: function() {
        var base = new BaseStatsView({model : new BaseStatsModel()});
    }
});