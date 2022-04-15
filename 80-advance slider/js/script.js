const slides = document.querySelector('.slider').children;
const next = document.querySelector('.next');
const per = document.querySelector('.per');
const indicat = document.querySelector('.indicator');
let index = 0;
next.addEventListener('click', () => {
    mynext();
    upd()
})
per.addEventListener('click', () => {
    myper();
    upd()
})

function createndi() {
    for (let j = 0; j < slides.length; j++) {
        const div = document.createElement('div');
        div.innerHTML = j + 1;
        div.setAttribute('onclick', 'shoslide(this)');
        div.id = j;
        if (j == 0) {
            div.className = "active"
        }
        indicat.appendChild(div);
    }
}
createndi()

function shoslide(el) {
    index = el.id;
    change();
    upd();

}

function upd() {
    for (let k = 0; k < indicat.children.length; k++) {
        indicat.children[k].classList.remove('active');
    }
    indicat.children[index].classList.add('active')
}

function mynext() {
    if (index >= slides.length - 1) {
        index = 0
    } else {
        index++
    }
    change()
}

function myper() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--
    }
    change()
}

function change() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')

    }
    slides[index].classList.add('active')
}