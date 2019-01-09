/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BaseStatsView = Backbone.View.extend({
    el: '#base',
    events: {
        'change .base' : 'setBonus',
        'change .act' : 'setActBonus',
		'change #baseCON' : 'setBaseLife',
		'change #baseAGI' : 'setBaseMove'
    },
    initialize: function(options) {
        this.model = options.model;
        this.render();
    },
    template: '<br><div class="col-xs-5">{{{stats}}}</div><div class="col-xs-2">{{{life}}}</div><div class="col-xs-3">{{{move}}}</div>',
    statTemplate: '<h3>Stats</h3>{{#stats}}<label>{{statLong}}</label><div class="input-group"><input id="base{{stat}}" type="text"' +
                  'class="form-control base" placeholder="BASE" aria-stat="{{stat}}"><span class="input-group-addon">ACT.</span><input id="act{{stat}}"' +
                  'type="text" class="form-control act" placeholder="ACT." aria-stat="{{stat}}"><span class="input-group-addon">BONUS</span>' +
                  '<input id="bonus{{stat}}" type="text" class="form-control readonly" placeholder="BONUS" readonly></div>{{/stats}}',
    lifeTemplate: '<h3>Health Points</h3>{{#life}}<label>{{title}}</label><div class="input-group"><input id="{{id}}LifeField"' + 
                  ' type="text" class="form-control" placeholder="{{hold}}"></div>{{/life}}',
    moveTemplate: '<h3>Movement</h3>{{#move}}<label>{{title}}</label><div class="input-group">' +
                  '<input id="{{id}}MoveField" type="text" class="form-control" placeholder="{{hold}}"></div>{{/move}}',
    attributes: {
        statBonuses: [-30, -20, -10, -5, 0, 5, 5, 10, 10, 15, 20, 20, 25, 25, 30, 35, 35, 40, 40, 45],
        baseLifePoints: [5, 20, 40, 55, 70, 85, 95, 110, 120, 135, 150, 160, 175, 185, 200, 215, 225, 240, 250, 265],
        baseMovement: [3, 15, 25, 50, 65, 70, 80, 90, 105, 115, 130, 160, 250, 500, 800, 1500, 3000, 15840, 79200, 396000],
        stats: [{stat: "AGI", statLong: "Agility"}, {stat: "CON", statLong: "Constitution"}, {stat: "DEX", statLong: "Dexterity"}, 
			{stat: "STR", statLong: "Strength"}, {stat: "INT", statLong: "Intelligence"}, {stat: "PER", statLong: "Perception"}, 
			{stat: "WP", statLong: "Willpower"}, {stat: "POW", statLong: "Power"}],
        life: [{title: "Multiple Cost", hold: "Mult Cost", id: "mult"}, {title: "Base", hold: "Base", id: "base"}, {title: "Class Bonus", hold: "Class Bonus", id: "class"}, 
            {title: "Number of Multiples", hold: "# of Multiples", id: "num"}, {title: "Final", hold: "Final", id: "final"}, {title: "Actual", hold: "Actual", id: "act"}],
        move: [{title: "Base", id: "base", hold: "Base Move"}, {title: "Penalty", id: "pen", hold: "Penalty"}, 
            {title: "Bonus", id: "bon", hold: "Bonus"}, {title: "Final", id: "fin", hold: "Final"}, 
            {title: "Movement per Turn", id: "act", hold: "Actual"}, {title: "1/4 Move", id: "quart", hold: "1/4 Move"},
            {title: "Running", id: "run", hold: "Running"}]
    },
    render: function() {
        var statsHtml = Mustache.to_html(this.statTemplate, {stats: this.attributes.stats});
        var lifeHtml = Mustache.to_html(this.lifeTemplate, {life: this.attributes.life});
        var moveHtml = Mustache.to_html(this.moveTemplate, {move: this.attributes.move});
        var html = Mustache.to_html(this.template, {stats: statsHtml, life: lifeHtml, move: moveHtml});
        this.$el.html(html);
    },
    setBonus: function(e) {
		var stat = $(e.target).attr('aria-stat');
		var statValue = $(e.target).val();
		$('#bonus' + stat).val(this.attributes.statBonuses[statValue]);		
    },
	setActBonus: function(e) {
		var stat = $(e.target).attr('aria-stat');
		var actStatValue = $('#act' + stat).val();
		if(actStatValue != '') {
			$('#bonus' + stat).val(this.attributes.statBonuses[actStatValue]);	
		}
		else {
			var statValue = $('#base' + stat).val();
			$('#bonus' + stat).val(this.attributes.statBonuses[statValue]);	
		}
	},
	setBaseLife: function(e) {
		var con = $(e.target).val();
		$('#baseLifeField').val(this.attributes.baseLifePoints[con]);
	},
	setBaseMove: function(e) {
		var agi = $(e.target).val();
		$('#baseMoveField').val(this.attributes.baseMovement[agi]);
		$('#finMoveField').val(this.attributes.baseMovement[agi]);
	}
});
