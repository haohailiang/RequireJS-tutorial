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
        app: '../app',
        nls           : '../nls',
        css           : '../../css',
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        'modernizr' : {
            exports: 'Modernizr'
        },
        'bootstrap' : ['jquery'],
        'jquery-ui' : ['css!css/jquery-ui/jquery-ui.css', 'css!css/jquery-ui/jquery-ui.theme.css']
    },
    config : {
        text: {
            onXhr: function(xhr, url) {
                xhr.setRequestHeader('X-Requested-with', 'XMLHttpRequest')
            }
        },
        i18n : {
            locale : typeof locale === 'undefined' ? 'zh' : locale
        }
    }
});
