{
	"appDir"                : "../www",
	"mainConfigFile"        : '../www/js/common.js',
	"dir"                   : "../www-built",
	"modules"               : [
		{
			name       : '../common',
			include    : ['jquery', 'i18n', 'modernizr', 'underscore', 'backbone', 'nls/messages', 'nls/zh/messages']
		},
		{
			name       : 'app/main1',
			exclude    : ['../common']
		},
	]
}
