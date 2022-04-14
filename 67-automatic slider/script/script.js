const slides = document.querySelector('.slide-item').children;
const next = document.querySelector('.next');
const per = document.querySelector('.per');
const tlenght = slides.length;
let index = 0;
let duration = 6000;
next.addEventListener('click', () => {
    slid('next')
});
per.addEventListener('click', () => {
    slid('per')
})

function slid(direction) {
    progress()
    if (direction == 'next') {
        if (index == tlenght - 1) {
            index = 0
        } else {
            index++
        }
    }
    if (direction == 'per') {
        if (index == 0) {
            index = tlenght - 1;
        } else {
            index--
        }
    }
    clearInterval = timer;
    timer = setInterval(autoslider, duration);
    for (let j = 0; j < slides.length; j++) {
        slides[j].classList.remove('active');

    }

    slides[index].classList.add('active');
}

function progress() {

    document.querySelector('.progress').innerHTML = "";
    const pro = document.createElement('div');
    pro.style.width = 0;
    pro.style.height = 5 + "px";
    pro.style.background = "red";
    pro.style.position = "absolute";
    pro.style.top = 0;
    pro.style.left = 0;
    pro.style.animation = 'progress ' + duration / 1000 + "s" + " linear";
    document.querySelector('.progress').appendChild(pro)




}

function autoslider() {
    slid('next');
}
let timer = setInterval(autoslider, duration);

progress()