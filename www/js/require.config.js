var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh';
if(language) {
	// document.cookie = "language=en_US"
	locale = language[1].split('_')[0];
}

requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app    : '../app',
		nls    : '../nls'
	},
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