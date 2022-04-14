const form = document.querySelector('.form');
const username = document.querySelector('.username');
const emial = document.querySelector('.email');
const pas1 = document.querySelector('.pas1');
const pas2 = document.querySelector('.pas2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    check();
})

function check() {


    const usernameval = username.value.trim()
    const emialval = emial.value.trim();
    const pas1val = pas1.value.trim()
    const pas2val = pas2.value.trim()

    if (usernameval === '') {
        sendEror(username, 'باید یک نام کاربری تعیین نمایید.')
    } else {
        sendsucess(username)
    }
    if (emialval === '') {
        sendEror(emial, 'باید یک ایمیل تعیین نمایید.')
    } else if (!checkEmail(emialval)) {
        sendEror(emial, 'ادرس ایمیل معتبر نیست')
    } else {
        sendsucess(emial)
    }
    if (pas1val === '') {
        sendEror(pas1, 'باید یک گذرئاژه تعیین نمایید.')
    } else {
        sendsucess(pas1)
    }
    if (pas2val === '') {
        sendEror(pas2, 'گروا|ه مجددا تکرار کنید.')
    } else if (pas1val !== pas2val) {
        sendEror(pas2, 'مقادیر یکسان نییست')
    } else {
        sendsucess(pas2)
    }
}

function sendEror(el, msg) {
    let parent = el.parentElement;
    let myspan = parent.querySelector('span')
    myspan.innerHTML = msg
    parent.className = "form-control eror"
    console.log('el')
}

function sendsucess(el) {
    let parent = el.parentElement;
    parent.className = "form-control sucess"

}
const patern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function checkEmail(eml) {
    return patern.test(eml)

}