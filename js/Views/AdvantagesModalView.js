/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 var AdvantagesModalView = Backbone.View.extend({
	el: '#modal-content',
	events: 
	{
		
	},
	initialize: function(options) 
	{
		$('#modal-lg').modal('toggle');
		this.render();
	},
	attributes:
	{
		
	},
	render: function()
	{
		$('#modal-header').html('<h1>Add Advantage</h1>');
		$('#modal-body').html('<div class="container-fluid"><div class="col-sm-12"><h3>Please Select an Advantage</h3></div></div>');
		$('#modal-footer').html('<button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>' +
			'<button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>');
	}
});