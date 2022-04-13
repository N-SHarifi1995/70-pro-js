let context = ['طراحی وب', 'برنامه نویس', 'فول استک'];
let count = 0;
let index = 0;
let current = '';
letter = '';
(function type() {
    if (count === context.length) {
        count = 0;

    }
    current = context[count];
    letter = current.slice(0, index++)

    document.querySelector('span').textContent = letter;
    if (current.length === letter.length) {
        index = 0;
        count++
    }
    setTimeout(type, 500)

})()