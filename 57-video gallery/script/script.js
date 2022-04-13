const videoplayer = document.querySelector(".videoplayer");
const vid = document.querySelector('#myvideo')

function show(adrs) {
    videoplayer.style.display = 'block';
    vid.src = adrs;
}

function stop() {

    videoplayer.style.display = 'none';
}