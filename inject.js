var nextButtonId = 'playlist-bar-next-button';
var prevButtonId = 'playlist-bar-prev-button';

window.addEventListener("keydown", function(event) {
  var mediaNextTrackKey = 176;
  var mediaPrevTrackKey = 177;
  var mediaStopTrackKey = 178;
  var mediaPlayPauseTrackKey = 179;
  var mKey = 77; // Used for debugging - 'm' key

  if(event.keyCode == mKey) {
    nextVideo();
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
    console.log($('#' + nextButtonId));
    $('#' + nextButtonId).click();
    console.log('Well this is emberessing. Nothing happened');
}

function prevVideo() {
    console.log($('#' + prevButtonId));
    $('#' + prevButtonId).click();
    console.log('Well this is emberessing. Nothing happened');
}