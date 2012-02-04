var playlistBar = '.playlist-bar-item-playing';

window.addEventListener("keydown", function(event) {
  var mediaNextTrackKey = 176;
  var mediaPrevTrackKey = 177;
  var mediaStopTrackKey = 178;
  var mediaPlayPauseTrackKey = 179;
  var mKey = 77; // Used for debugging - 'm' key
  var nKey = 78; // Used for debugging - 'n' key

  if(event.keyCode == mKey) {
    nextVideo();
  }else if(event.keyCode == nKey) {
    prevVideo();
  }else if (event.keyCode == mediaNextTrackKey) {
   nextVideo();
  }else if (event.keyCode == mediaPrevTrackKey) {
   prevVideo();
  } else if (event.keyCode == mediaStopTrackKey) {
   // handle stop
  } else if (event.keyCode == mediaPlayPauseTrackKey) {
   // handle pause / play
  }
}, false);

function nextVideo() {
    var nextUrl = $(playlistBar).next().find('a').attr('href');
    redirectUrl(nextUrl);
}

function prevVideo() {
    var prevUrl = $(playlistBar).prev().find('a').attr('href');
    redirectUrl(prevUrl);
}

function redirectUrl(url) {
  chrome.extension.sendRequest({redirect: url})
}