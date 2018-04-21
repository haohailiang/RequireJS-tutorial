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
## 


































