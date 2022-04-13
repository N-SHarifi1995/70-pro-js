// const prgressSection = document.querySelector('.progress-section')
// const prgressBar = document.querySelector('.progress-line')
// const prgressNum = document.querySelector('.progress-num');

// function uppdate() {
//     prgressBar.style.height = `${getprecent()}%`;
//     prgressNum.innerText = `${Math.ceil(getprecent())}%`;
//     requestAnimationFrame(uppdate)
// }

// function getprecent() {
//     console.log(window.scrollY)
//     console.log(document.body.scrollHeight);
//     console.log(window.innerHeight);
//     return (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)

// }
// uppdate();
const prgressSection = document.querySelector('.progress-section')
const prgressBar = document.querySelector('.progress-line')
const prgressNum = document.querySelector('.progress-num');
window.addEventListener('scroll', () => {
    console.log(window.scrollY)

    prgressBar.style.height = getprecent() + '%';
    prgressNum.innerText = ` ${ Math.ceil(getprecent())} % `;

})

function getprecent() {

    return (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)
}