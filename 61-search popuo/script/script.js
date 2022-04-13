const showbtn = document.querySelector('.search-icon');
const myform = document.querySelector('.formsearch');
const overlay = document.querySelector('.overlay');
showbtn.addEventListener('click', () => {
    myform.classList.add('active');
    overlay.classList.add('active');
})
overlay.onclick = function() {
    myform.classList.remove('active');
    overlay.classList.remove('active');
}