if (window.app) {
	app.onRenew = addListeners;
	addListeners(app);
}

function addListeners(player) {
	if (!player) return __s('cat=window&hit=error&label=NO-PLAYER');

	if ('listenChangeEpisode' in window) listenChangeEpisode(player);
	player.once('play', function () {
		post({ event: 'startWatching', id: id });
	});
	player.on('viewProgress', function (time, duration) {
		post({ event: 'viewProgress', id: id, time: time, duration: duration });
	});
	var rePost = function (ev, as) {
		player.on(ev, function () {
			post({ event: as });
		});
	};
	rePost('ready', 'playerReady');
	// ad
	rePost('AdStarted', 'adStart');
	rePost('AdStopped', 'adStop');
	rePost('AdError', 'adStop');
	rePost('AdClickThru', 'click overlay');
	player.once('played 25%', function () {
		var id = window.eventFranchiseID ? eventFranchiseID : window.id;
		var type = window.videoType ? '&type=' + videoType : '';
		__s('hit=view_quartile&sub=' + id + '&host=' + consumerHost + type);
	});
	[25, 33, 50, 66, 75, 99].forEach(function (p) {
		player.once('progress ' + p + '%', __s.bind(null, 'hit=view&sub=' + p + '&host=' + consumerHost));
	});
	// GA
	[25, 50, 75].forEach(function (p) {
		player.once('progress ' + p + '%', postAnalytics.bind(null, 'View ' + p + '% video'));
	});
	player.once('endedSoon', function () {
		post({ event: 'endedSoon' });
		postAnalytics('View 100% video');
	});
	player.once('ended', function () {
		post({ event: 'ended' });
	});

	addEventListener('message', function (e) {
		if (e.data.event === 'showRecommendations') {
			var r = e.data.recommendations;
			for (var i = 0; i < r.length; i++) {
				r[i].poster = r[i].poster.main || r[i].poster;
			}
			player.showRecommendations(e.data.recommendations);
		}
	});
	player.on('selectRecommendation', function (videoId) {
		post({ event: 'selectRecommendation', id: videoId });
	});
}

function post(data) {
	parent.postMessage(data, '*');
}

function postAnalytics(name) {
	post({ event: 'analytics', name: name });
}

function dummy() {
}
