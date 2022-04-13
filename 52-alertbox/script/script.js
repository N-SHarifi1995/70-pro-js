let btn = document.querySelector('.mybtn');
let alertbox = document.querySelector('.alert-box');
let close = document.querySelector('.closebox')
let timer;
close.addEventListener('click', function() {
    hide();


})
btn.addEventListener('click',
    () => {
        show()

    })

function show() {

    if (alertbox.classList.contains('hide')) {
        alertbox.classList.remove('hide')
    }
    alertbox.classList.add('show');
    timer = setTimeout(() => {

        hide()
    }, 5000);

}

function hide() {
    clearTimeout(timer);
    alertbox.classList.remove('show');
    alertbox.classList.add('hiden');
}