define([

],
function(

) {

	function TheModule() {

		console.log('theModule loaded');

		require(['./inside'], function(insideScript) {
			insideScript();
			console.log("hello?");
		});

	}

	return TheModule;

});
