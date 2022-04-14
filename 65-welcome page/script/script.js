const intro = document.querySelector('.intro')
const logoes = document.querySelectorAll('.logo');
console.log(logoes)
window.addEventListener('load', () => {

    logoes.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('active')
        }, (index + 1) * 400);

    });
    setTimeout(() => {
        logoes.forEach((logo, index) => {
            setTimeout(() => {
                logo.classList.remove('active');
                logo.classList.add('fade')
            }, (index + 1) * 400);

        });
    }, 2000);
    setTimeout(() => {
        intro.style.top = '-100vh'
    }, 2800);

})