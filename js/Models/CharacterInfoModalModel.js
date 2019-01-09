/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 var CharacterInfoModel = Backbone.Model.extend({
	initialize: function(options) {},
	attribtes: 
	{
		playerName: '',
		characterName: '',
		characterClass: '',
		level: 0,
		age: 0,
		gender: '',
		race: '',
		hair: '',
		eyes: '',
		devlPoints: 400,
		hFeet: 0,
		hInches: 0,
		apperance: 0,
		size: 0,
		experience: 0,
		nextLevel: 0
	}
});