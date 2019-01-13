/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 var AdvantagesModalView = Backbone.View.extend({
	el: '#modal-content',
	events: {
		'click #okay': 'okay'
	},
	initialize: function(options) {
		this.page = options.page;
		$('#modal-lg').modal('toggle');
		this.render();
		this.source = options.source;
	},
	render: function(){
		$('#modal-header').html('<h1>Add Advantage</h1>');
		$('#modal-body').html('<div class="container-fluid"><div class="col-sm-12"><div class="form-group row"><label class="col-sm-2 col-form-label">Cost</label><div class="col-sm-10">' +
			'<input id="cost" type="number" class="form-control" min=1 max=3></div></div><div class="form-group row"><label class="col-sm-2 col-form-label">Name</label><div class="col-sm-10">' +
			'<input id="name" type="text" class="form-control"></div></div></div></div>');
		$('#modal-footer').html('<button id="okay" type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>' +
			'<button id="cancel" type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>');
	},
	okay: function() {
		this.page.passFromModal(this.source, {
			cost: $('#cost').val(),
			name: $('#name').val()
		});
		this.close();
	},
	close: function() {
		$(this.el).off();
	}
});