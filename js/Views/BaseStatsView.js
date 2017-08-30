/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var BaseStatsView = Backbone.View.extend({
    el: '#base',
    events: {
        'change .base': 'setBonus'
    },
    initialize: function(options) {
        this.model = options.model;
        this.render();
    },
    template: '<br><div class="col-xs-5">{{{stats}}}</div><div class="col-xs-2">{{{life}}}</div><div class="col-xs-3">{{{move}}}</div>',
    statTemplate: '{{#stats}}<div class="input-group"><span class="input-group-addon">{{stat}}</span><input id="base{{stat}}" type="text"' +
                  'class="form-control base" placeholder="BASE" aria-stat="{{stat}}"><span class="input-group-addon">ACT.</span><input id="act{{stat}}"' +
                  'type="text" class="form-control act" placeholder="ACT."><span class="input-group-addon">BONUS</span>' +
                  '<input id="bonus{{stat}}" type="text" class="form-control" placeholder="BONUS"></div>{{/stats}}',
    lifeTemplate: '{{#life}}<div class="input-group"><span class="input-group-addon">{{title}}</span><input id="{{title}}LifeField"' + 
                  ' type="text" class="form-control" placeholder="{{hold}}"></div>{{/life}}',
    moveTemplate: '{{#move}}<div class="input-group"><span class="input-group-addon move-addon">{{title}}' +
                  '</span><input id="{{id}}MoveField" type="text" class="form-control" placeholder="{{hold}}"></div>{{/move}}',
    attributes: {
        statBonuses: [-30, -20, -10, -5, 0, 5, 5, 10, 10, 15, 20, 20, 25, 25, 30, 35, 35, 40, 40, 45],
        baseLifePoints: [5, 20, 40, 55, 70, 85, 95, 110, 120, 135, 150, 160, 175, 185, 200, 215, 225, 240, 250, 265],
        baseMovement: [3, 15, 25, 50, 65, 70, 80, 90, 105, 115, 130, 160, 250, 500, 800, 1500, 3000, 15840, 79200, 396000],
        stats: [{stat: "AGI"}, {stat: "CON"}, {stat: "DEX"}, {stat: "STR"}, {stat: "INT"}, {stat: "PER"}, {stat: "WP"}, {stat: "POW"}],
        life: [{title: "Cost", hold: "Mult Cost"}, {title: "Base", hold: "Base"}, {title: "Class", hold: "Class Bonus"}, 
            {title: "Mult", hold: "# of Multiples"}, {title: "Fin", hold: "Final"}, {title: "Act", hold: "Actual"}],
        move: [{title: "Base", id: "base", hold: "Base Move"}, {title: "Penalty", id: "pen", hold: "Penalty"}, 
            {title: "Bonus", id: "bon", hold: "Bonus"}, {title: "Final", id: "fin", hold: "Final"}, 
            {title: "M/Turn", id: "act", hold: "Actual"}, {title: "1/4 Move", id: "quart", hold: "1/4 Move"},
            {title: "Running", id: "run", hold: "Running"}]
    },
    render: function() {
        var statsHtml = Mustache.to_html(this.statTemplate, {stats: this.attributes.stats});
        var lifeHtml = Mustache.to_html(this.lifeTemplate, {life: this.attributes.life});
        var moveHtml = Mustache.to_html(this.moveTemplate, {move: this.attributes.move});
        var html = Mustache.to_html(this.template, {stats: statsHtml, life: lifeHtml, move: moveHtml});
        this.$el.html(html);
    },
    setBonus : function(e) {
        console.log(e);
    }
});
