const icon = document.querySelector('.close');
const myNav = document.querySelector('nav');
icon.addEventListener('click', () => {
    myNav.classList.toggle('active')
})