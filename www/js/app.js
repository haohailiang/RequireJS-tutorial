requirejs(['./require.config'], function () {
	require(['app/api','i18n!nls/messages', 'app/helper'], function(api, i18n, helper) {

		// promise使用
		// api.getUser().then(function(user) {
		// 	console.log(user);
		// });

		// 传统JSONP使用1
		// api.getUserByJsonp();

		// requiresjs-jsonp使用
		// api.getUserByJsonp2();
		
		$('#jUser').after('<button class="btn btn-default">' + i18n.edit + '</button>');

		var str = helper.trim('   amd   ');
		console.log(str);
	});
});

// app/user