/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 var CharacterInfoModalView = Backbone.View.extend({
	el: '#modal-lg',
	events: 
	{
		
	},
	initialize: function(options) 
	{
		console.log('hi');
		this.model = options.model;
        this.render();
	},
	attributes:
	{
		
	},
	render: function()
	{
		$('#modal-header').html('<h1>Edit Character Info</h1>');
		$('#modal-footer').html('<button type="button" class="btn btn-light" data-dismiss="modal">Okay</button>');
	}
});