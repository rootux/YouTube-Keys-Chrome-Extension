/*globals chrome*/
(function($, global, undefined) {
    var settings = {
    playlistCurrentVideo: '.playlist-bar-item-playing',
    mediaMap: {
      next      : 176,
      prev      : 177,
      stop      : 178,
      playPause : 179,
      debugKey  : 77 /* 'm' key for debugging keyboards without media keys */ 
    }
  }, 
  redirect  = function(url) {
    chrome.extension.sendRequest({redirect: url});
  },
  nextVideo = function() {
    var nextUrl = $(settings.playlistCurrentVideo).next().find('a').attr('href');
    if(nextUrl)
        redirect(nextUrl);
  },
  prevVideo = function() {
    var prevUrl = $(settings.playlistCurrentVideo).prev().find('a').attr('href');
    if(prevUrl)
        redirect(prevUrl);
  },
  stopVideo = function() {},
  playVideo = function() {};
  
  $(window).keyup(function(event) {
    var keyCode = event.keyCode;
    switch(keyCode) {
      case settings.mediaMap.debugKey:
      break;
      case settings.mediaMap.playPause:
        playVideo();
      break;
      case settings.mediaMap.stop:
        stopVideo();
      break;
      case settings.mediaMap.next:
        nextVideo();
      break;
      case settings.mediaMap.prev:
        prevVideo();
      break;
    }
  });
} (jQuery, window));