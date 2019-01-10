/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BaseStatsModel = Backbone.Model.extend({
    initialize: function(options) {},
    attributes: {
		stats: [0, 0, 0, 0, 0, 0, 0, 0],
		baseLife: 0,
		lifeMultiples: 0,
		baseMove: 0,
		gnosis: 0,
		natura: 0,
		resistances: {},
		fatigue: 0,
		presence: 0
	}
});
