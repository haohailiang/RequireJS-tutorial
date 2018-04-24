var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh';
if(language) {
	// document.cookie = "language=en_US"
	locale = language[1].split('_')[0];
}

requirejs.config({
	baseUrl: 'js/lib',
	urlArgs: '_=' + (+new Date),
	paths: {
		app           : '../app',
		nls           : '../nls',
		css           : '../../css',
		jquery        : [
			'//cdn.bootcss.com/jquery/1.9.1/jquery.min',
			'./jquery'
		],
	},
	shim: {
		'modernizr' : {
			exports: 'Modernizr'
		},
		'bootstrap' : ['jquery'],
		'jquery-ui' : ['css!css/jquery-ui/jquery-ui.css', 'css!css/jquery-ui/jquery-ui.theme.css']
	},
	// map : {
	// 	'*' : {
	// 		'jquery' : './jquery-1.9.1'
	// 	},
	// 	'app/api2' : {
	// 		'jquery' : './jquery-1.11.1'
	// 	}
	// },
	config : {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-with', 'XMLHttpRequest')
			}
		},
		i18n : {
			locale : locale
		}
	}
});

// app/user
// js/lib + app/user
// js/app/user