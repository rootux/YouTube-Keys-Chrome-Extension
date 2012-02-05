/*globals chrome*/
(function($, global, undefined) {
    var settings = {
		playlistCurrentVideo: '.playlist-bar-item-playing',
		mediaMap: {
			next      : 176,
			prev      : 177,
			stop      : 178,
			playPause : 179,
			debugKey  : 77 /* lower case 'm' */ 
		}
	}, 
	redirect  = function(url) {
		chrome.extension.sendRequest({redirect: url});
	},
	nextVideo = function() {
		var nextUrl = $(settings.playlistBar).next().find('a').attr('href');
    	redirect(nextUrl);
	},
	prevVideo = function() {
		var prevUrl = $(settings.playlistBar).prev().find('a').attr('href');
    	redirect(prevUrl);
	},
	stopVideo = function() {},
	playVideo = function() {};
	
	$('window').keyUp(function(event) {
		var keyCode = event.keyCode;
		switch(keyCode) {
			case settings.debugKey: 
			break;
			case settings.playPause:
				playVideo();
			break;
			case settings.stop:
				stopVideo();
			break;
			case settings.next:
				nextVideo();
			break;
			case settings.prev:
				prevVideo();
			break;
		}
	});
} (jQuery, window));