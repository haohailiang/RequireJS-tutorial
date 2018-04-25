## 开发阶段
不打包,不压缩,模块化开发
## 部署阶段
自动打包-压缩
## RequireJS
[RequireJS下载](https://github.com/requirejs/requirejs)
## 模块化开发
* 一个文件一个模块
* 减少全局变量
* 不用自己维护依赖
* define: 定义模块
```
define('helper', ['jquery'], function($) {
	return {
		trim: function(str) {
			return $.trim(str);
		}
	}
});
```
* require: 加载模块
```
require(['helper'], function(helper) {
	var str = helper.trim('   amd   ');
	console.log(str);
});
```
## 配置不支持AMD的库和插件
```
shim: {
	'modernizr' : {
		deps: ['jquery'],
		exports: 'Modernizr',
		init: function($) {
			return $;
		}
	}
}
```
### 加载不支持AMD的库[Modernizr.js]
```
shim: {
	'modernizr' : {
		exports: 'Modernizr'
	}
}
```
### 加载不支持AMD的框架[bootstrap]
```
shim: {
	'bootstrap' : ['jquery']
}
```
## map
同一个项目中可以使用不同的jquery版本
```
map : {
	'app/api' : {
		'jquery' : './lib/jquery'
	},
	'app/api2' : {
		'jquery' : './lib/jquery2'
	}
}
```
当app/api模块里加载jquery模块时,将加载jquery.js  
当app/api2模块里加载jquery模块时,将加载jquery2.js  
## waitSeconds
下载js等待的时间,默认7秒  
如果设为0, 则禁用等待超时  
## urlArgs
下载文件时,在url后面增加额外的query参数
```
urlArgs: '+=' + (new Date)
```
## 使用text插件加载html
[text插件](https://github.com/requirejs/text)  
用于加载文本文件的requirejs插件  
通过ajax请求来加载文本  
```
require(['text!user.html'], function(template) {
	$('#userinfo').html(template);
});
```
## 使用CSS插件加载样式
[CSS插件](https://github.com/guybedford/require-css)
```
require([
	'./app/api',
	'backbone',
	'jquery-ui',
	'css!/css/jquery-ui/jquery-ui.css',
	'css!/css/jquery-ui/jquery-ui.theme.css',
],function(api) {});
```
为了让CSS!生效, 在requirejs里设置
```
map: {
	'*' : {
		'css' : './lib/require/css'
	}
}
```
## i18n
[i18n插件](https://github.com/requirejs/i18n)
```
require([
	'./app/api',
	'backbone',
	'i18n!./nls/messages',
	'jquery-ui'
], function(api, Backbone, i18n) {});
```
## 如何制定使用哪种语言?
浏览器的navigator.language或navigator.userLanguage
```
config : {
	i18n: {
		locale : 'zh'
	}
}
```
## 打包工具r.js
[r.js插件](https://github.com/requirejs/r.js)
```
npm install -g requirejs
r.js -o baseUrl=js name=app out=build.js
node r.js -o baseUrl=js name=app out=build.js
```
## CSS插件的模块
[css插件](https://github.com/guybedford/require-css)




























