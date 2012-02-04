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

var getNextUrl = function() {
    var list    = window.location.getParameter('list'),
        videoId = $('#'+nextButtonId).get(0).getAttribute('data-tooltip-text').match(/ytimg\.com\/vi\/(.*)?\//)[1];
    return 'http://www.youtube.com/watch?v='+videoId+'&list='+list+'';
}

function nextVideo() {
    console.log($('#' + nextButtonId));
    $('#' + nextButtonId).click();
    console.log('Well this is emberessing. Nothing happened');
}

function prevVideo() {
    console.log($('#' + prevButtonId));
    var videoId = $('#' + prevButtonId).get(0).getAttribute('data-tooltip-text').match(/ytimg\.com\/vi\/(.*)?\//)[1];
    
    console.log('video id:',videoId);
    $('#' + prevButtonId).click();
    console.log('Well this is emberessing. Nothing happened');
}