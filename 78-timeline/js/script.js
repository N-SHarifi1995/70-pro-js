const bg = document.querySelector('.bg');
const spans = document.querySelectorAll('.text span');
const text = document.querySelector('.text');
const line = document.querySelector('.line');


spans.forEach(span => {
    span.addEventListener('mouseover', e => {
        const id = span.getAttribute('datasapn');
        console.log(id)
        const bgel = bg.querySelector(`.id-${id}`);
        bg.querySelectorAll('img').forEach(img => {
            img.style.display = "none";
        })
        bgel.style.display = 'block';
        bgel.style.animation = 'animate 1s ease forwards';
        let card = span.getBoundingClientRect();
        let textcard = text.getBoundingClientRect();
        line.style.width = card.width + "px";
        line.style.left = card.left - textcard.left + "px"

    })
})