var player,
    time_update_interval = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'J4hHh8Qp55M',
        playerVars: {
            // color: 'white',
            // controls: 0
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(player.getVolume()));
}

// Playback

$('#play, #plh').on('click', function () {
    $('#plh').hide();
    $('#play').hide();
    player.playVideo();
});


$('#pause').on('click', function () {
    player.pauseVideo();
});

