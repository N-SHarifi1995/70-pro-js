let sections = document.querySelectorAll('section');
let li = document.querySelectorAll('li');
let current;
window.addEventListener('scroll', function() {
    sections.forEach(sec => {
        if (pageYOffset >= sec.offsetTop - sec.clientHeight / 3) {
            current = sec.getAttribute('id')
        }
    })
    li.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})