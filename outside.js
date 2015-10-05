require([
	'theModule'
],function(
	TheModule
){

	console.log('outside loaded');
	var m = new TheModule();

});
