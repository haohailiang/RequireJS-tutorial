requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': [
			'//cdn.bootcss.com/jquery/1.9.1/jquery.min',
			'./lib/jquery'
		]
	}
});

require(['jquery', './app/api'], function($, api) {
	$('#jUser').click(function(){
		api.getUser().then(function(user) {
			console.log(user);
		});
	});
});

require(['helper'], function(helper) {
	var str = helper.trim('   amd   ');
	console.log(str);
});