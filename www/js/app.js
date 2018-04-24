requirejs(['./require.config'], function () {
	require(['app/api'], function(api) {

		// promise使用
		api.getUser().then(function(user) {
			console.log(user);
		});

		// 传统JSONP使用1
		api.getUserByJsonp();

		// requiresjs-jsonp使用
		api.getUserByJsonp2();
	});
});

// app/user