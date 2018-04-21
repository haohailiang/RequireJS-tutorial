requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': [
			'//cdn.bootcss.com/jquery/1.9.1/jquery.min',
			'./lib/jquery'
		],
		// 'jquery'        : './lib/jquery',
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

require(['./app/api2'], function(api) {
	$('#jUser').click(function(){
		api.getUser().then(function(user) {
			console.log(user);
		});
	});
});