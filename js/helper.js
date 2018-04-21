define('helper', ['./lib/jquery'], function($) {
	console.log($); //加载不到
	require(['jquery'], function($) {
		console.log($); //可以加载到
	});
	return {
		trim: function(str) {
			return $.trim(str);
		}
	}
});