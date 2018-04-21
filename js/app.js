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
		'text'          : './lib/require/text',
		'jquery-ui'     : './lib/jquery-ui',
		'css'           : './lib/require/css'
	},
	shim: {
		'modernizr' : {
			exports: 'Modernizr'
		},
		'bootstrap' : ['jquery'],
		'jquery-ui' : ['css!/css/jquery-ui/jquery-ui.css', 'css!/css/jquery-ui/jquery-ui.theme.css']
	},
	// map : {
	// 	'*' : {
	// 		'jquery' : './lib/jquery'
	// 	},
	// 	'app/api2' : {
	// 		'jquery' : './lib/jquery2'
	// 	}
	// }
	// map: {
	// 	'*' : {
	// 		'css' : './lib/require/css'
	// 	}
	// },
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-with', 'XMLHttpRequest')
			}
		}
	}
});

require([
	'./app/api', 
	'backbone', 
	'jquery-ui'
	// 'css!/css/jquery-ui/jquery-ui.css',
	// 'css!/css/jquery-ui/jquery-ui.theme.css',
	], function(api) {
	$('#jUser').click(function(){
		// api.getUserByJsonp();
		api.loadUser();
	});
});

// function onloaded(user) {
// 	console.log(user);
// }