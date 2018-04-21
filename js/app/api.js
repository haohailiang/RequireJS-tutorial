define(['jquery'], function($) {
	return {
		getUser: function(){
			var def = $.Deferred();
			require(['./app/user'], function(user) {
				def.resolve(user);
			});

			return def;
		},

		getUserByJsonp: function() {
			$.ajax({
				url: 'http://127.0.0.1:8081/user.js',
				dataType: 'jsonp',
				jsonCallback: 'onloaded'
			});
		}
	}
});