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
		this.page.callFromChild();
	},
	attributes: {
		sections: [{category: "Advantages", id: "advantages", btn: "success"}, {category: "Disadvantages", id: "disadvantages", btn: "danger"}],
		advantages: [],
		disadvantages: [],
		addCount: 0,
		disaddCount: 0,
		addCountCategories: [0, 0, 0, 0],
		disaddCountCategories: [0, 0, 0, 0]
	},
	template: "<br>{{#sections}}<div class='col-xs-6'><h3>{{category}}</h3><br><div class='col-sm-10'><ul class='list-group' id='{{id}}'></ul>" +
		"<button class='btn btn-{{btn}} pull-right' id='{{id}}Add'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span></button></div></div></div>{{/sections}}",
	displayTemplate: "{{#items}}<li class='list-group-item' id='{{type}}{{count}}'><span class='badge badge-secondary pull-left'>{{cost}}</span>&emsp;{{name}}" +
		"<button type='button' class='remove close'><span aria-hidden='true'>&times;</span></button></li>{{/items}}",
	render: function() 
	{
        var html = Mustache.to_html(this.template, { sections: this.attributes.sections });
		this.$el.html(html)
	},
	addAdvantage: function() {
		console.log('adding advantage');
		this.page.openModal('adv');
	},
	addDisadvantage: function() {
		var len = this.attributes.disadvantages.length;		
		this.attributes.disaddCount += 1;
		var disadds = $('#disadvantages');
		this.attributes.disadvantages[len] = {type: 'disadvantage', count: len, cost: 2, name: 'test'};
		var html = Mustache.to_html(this.displayTemplate, {items: this.attributes.disadvantages[len] });
		disadds.append(html);
	},
	removeElement: function(e) 
	{
		var elem = $(e.target).parent().parent();
		elem.remove();
		//this.attributes.disaddCount -= 1;
	}
});