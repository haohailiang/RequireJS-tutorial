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





































