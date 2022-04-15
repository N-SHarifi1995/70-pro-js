let imgbox = document.querySelector('.imgbox')
let slids = imgbox.getElementsByTagName('img')
let i = 0;

function next() {
    slids[i].classList.remove('active')
    i = (i + 1) % slids.length
    slids[i].classList.add('active');

}

function back() {
    slids[i].classList.remove('active')
    i = (i - 1 + slids.length) % slids.length
    slids[i].classList.add('active');

}