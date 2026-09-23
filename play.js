let player = null;
let currentSrc = null;

function playTrack(src) {
    if (currentSrc === src && player && !player.paused) {
        player.pause();
        return;
    }

    if (player) {
        player.pause();
        player.currentTime = 0;
    }

    player = new Audio(src);
    player.play();
    currentSrc = src;
}

function toggleElements() {
    const elements = document.querySelectorAll('.dummo');

    elements.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}