var player;

function onYouTubeIframeAPIReady() {
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
            onReady: function() { player.playVideo(); }
        }
    });
}

$(document).ready(function () {

    $('.next').on('click', function () {
        if (player) player.nextVideo();
    });

    $('.prev').on('click', function () {
        if (player) player.previousVideo();
    });

});
