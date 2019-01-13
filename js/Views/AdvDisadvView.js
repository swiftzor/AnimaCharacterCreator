/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var AdvDisadvView = Backbone.View.extend({
	el: '#adv',
	events: 
	{
		'click #advantagesAdd': 'addAdvantage',
		'click #disadvantagesAdd': 'addDisadvantage',
		'click .remove': 'removeElement'
	},
	initialize: function(options)
	{
		this.render();
		this.page = options.page;
		console.log(this.page);
	},
	attributes: {
		sections: [{category: "Advantages", id: "advantages", btn: "success"}, {category: "Disadvantages", id: "disadvantages", btn: "danger"}],
		advantages: [],
		disadvantages: [],
		addCount: 0,
		advNum: 0,
		disaddCount: 0,
		disAdvNum: 0,
		addCountCategories: [0, 0, 0, 0],
		disaddCountCategories: [0, 0, 0, 0]
	},
	template: "<br>{{#sections}}<div class='col-xs-6'><h3>{{category}}</h3><br><div class='col-sm-10'><ul class='list-group' id='{{id}}'></ul>" +
		"<button class='btn btn-{{btn}} pull-right' id='{{id}}Add'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span></button></div></div></div>{{/sections}}",
	displayTemplate: "{{#items}}<li class='list-group-item' id='{{type}}{{count}}' aria-type='{{type}}'><span class='badge badge-secondary pull-left'>{{cost}}</span>&emsp;{{name}}" +
		"<button type='button' class='remove close'><span aria-hidden='true'>&times;</span></button></li>{{/items}}",
	render: function() 
	{
        var html = Mustache.to_html(this.template, { sections: this.attributes.sections });
		this.$el.html(html)
	},
	addAdvantage: function() {
		this.page.openModal('adv', {type: 'adv'});
	},
	populateAdvantage: function(adv) {
		adv.type = 'advantage';
		adv.count = this.attributes.advNum += 1;
		this.attributes.addCount += 1;
		var len = this.attributes.advantages.length;
		this.attributes.advantages[len] = adv;
		var html = Mustache.to_html(this.displayTemplate, {items: this.attributes.advantages[len] });
		$('#advantages').append(html);
	},
	addDisadvantage: function() {
		if( this.attributes.disaddCount < 3) {
			this.page.openModal('adv', {type : 'disAdv'});
		}
	},
	populateDisadvantage: function(disAdv) {
		disAdv.type = 'disadvantage';
		disAdv.count = this.attributes.disAdvNum += 1;
		this.attributes.disaddCount += 1;
		var len = this.attributes.disadvantages.length;
		this.attributes.disadvantages[len] = disAdv;
		var html = Mustache.to_html(this.displayTemplate, {items: this.attributes.disadvantages[len] });
		$('#disadvantages').append(html);
	},
	removeElement: function(e) 
	{
		var elem = $(e.target).parent().parent();
		var type = elem.attr('aria-type');
		if(type == 'advantage') {
			this.attributes.addCount -= 1;
		}
		else if(type == 'disadvantage') {
			this.attributes.disaddCount -= 1;
		}
		elem.remove();
	}
});