requirejs.config({
	baseUrl: '/js',
	urlArgs: '_=' + (+new Date),
	paths: {
		'jquery': [
			'//cdn.bootcss.com/jquery/1.9.1/jquery.min',
			'./lib/jquery'
		],
		// 'jquery'        : './lib/jquery',
		'bootstrap'     : './lib/bootstrap',
		'modernizr'     : './lib/modernizr',
		'backbone'      : './lib/backbone',
		'underscore'    : './lib/underscore',
		'text'          : './lib/text'
	},
	shim: {
		'modernizr' : {
			exports: 'Modernizr'
		},
		'bootstrap' : ['jquery']
	},
	// map : {
	// 	'*' : {
	// 		'jquery' : './lib/jquery'
	// 	},
	// 	'app/api2' : {
	// 		'jquery' : './lib/jquery2'
	// 	}
	// }
});

require(['./app/api'], function(api) {
	$('#jUser').click(function(){
		// api.getUserByJsonp();
		api.loadUser();
	});
});

// function onloaded(user) {
// 	console.log(user);
// }