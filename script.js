var player;
var currentMode = 0;

var modes = [
    {
        name: 'tv',
        enter: function () {
            $('#screen').html('<div id="video-placeholder"></div>');
            createPlayer();
        },
        leave: function () {
            if (player) {
                player.destroy();
                player = null;
            }
        }
    },
    {
        name: 'game',
        enter: function () {
            // Replace the src with your game URL or local file
            $('#screen').html('<iframe src="game/index.html" width="649" height="378" frameborder="0" scrolling="no"></iframe>');
        },
        leave: function () {
            $('#screen').empty();
        }
    },
    {
        name: 'noinput',
        enter: function () {
            $('#screen').html('<img src="images/noinput.jpg" width="649" height="378" alt="">');
        },
        leave: function () {
            $('#screen').empty();
        }
    }
];

function createPlayer() {
    if (typeof YT === 'undefined' || !YT.Player) {
        // API not ready yet — wait for it
        window._pendingPlayer = true;
        return;
    }
    player = new YT.Player('video-placeholder', {
        width: 649,
        height: 378,
        videoId: 'ExF3Azfa4sc',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            showinfo: 0,
            fs: 0,
            disablekb: 1,
            cc_load_policy: 0,
            playsinline: 1,
            playlist: 'ExF3Azfa4sc,j95TWbH3BqE,kzJvpfmHS3k,eK0tNJHGXNk,ic7zjjSQa-Q'
        },
        events: {
            onReady: function () { player.playVideo(); }
        }
    });
}

function onYouTubeIframeAPIReady() {
    if (window._pendingPlayer) {
        window._pendingPlayer = false;
        createPlayer();
    }
}

function switchMode(index) {
    modes[currentMode].leave();
    currentMode = index % modes.length;
    modes[currentMode].enter();
}

$(document).ready(function () {

    // Boot into TV mode
    modes[0].enter();

    $('.input-btn').on('click', function () {
        switchMode(currentMode + 1);
    });

    $('.next').on('click', function () {
        if (modes[currentMode].name === 'tv' && player) player.nextVideo();
    });

    $('.prev').on('click', function () {
        if (modes[currentMode].name === 'tv' && player) player.previousVideo();
    });

});
