requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': [
			'//cdn.bootcss.com/jquery/1.9.1/jquery.min',
			'./lib/jquery'
		],
		'bootstrap'     : './lib/bootstrap',
		'modernizr'     : './lib/modernizr',
		'backbone'      : './lib/backbone',
		'underscore'    : './lib/underscore'
	},
	shim: {
		'modernizr' : {
			exports: 'Modernizr'
		},
		'bootstrap' : ['jquery']
	}
});

require(['jquery', './app/api', 'modernizr', 'backbone', 'bootstrap'], function($, api, modernizr, backbone, bootstrap) {

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