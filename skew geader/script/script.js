// const skewd = document.querySelector('.angle')
// window.addEventListener('scroll ', function() {
//     let value = -10 + windows.scrollY / 100;
//     skewd.style.transform = "skew(" + value + " deg)"





// }



let sw = document.querySelector('.angle')
window.addEventListener('scroll', function() {
    let valuee = -10 + (window.scrollY / 100)
    console.log(valuee)
    sw.style.transform = "skewY(" + valuee + "deg)"
})