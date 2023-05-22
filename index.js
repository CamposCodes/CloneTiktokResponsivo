const videos = document.querySelectorAll('video');
let video1 = document.querySelectorAll('#video1');

window.addEventListener('load', function () {
    video1.play();
});

for (const video of videos) {
    video.addEventListener('click', function () {
        console.log('clicked');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}
