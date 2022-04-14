const img = document.querySelector('img');
const span = document.querySelector('span');
const div = document.querySelector('div');

let cx = div.offsetWidth / span.offsetWidth;
let cy = div.offsetHeight / span.offsetHeight;
(function zoom() {
    img.addEventListener('mousemove', move);
    span.addEventListener('mousemove', move);
    img.addEventListener('mouseleave', leave);
    span.addEventListener('mouseleave', leave);
})()

function leave() {
    span.style.visibility = "hidden";
    div.style.visibility = "hidden";
}

function move(e) {
    span.style.visibility = "visible";
    div.style.visibility = "visible";


    let pos = getcursorpos(e);
    let x, y;
    x = pos.x - (span.offsetWidth / 2);
    y = pos.y - (span.offsetHeight / 2);
    if (x > img.width - span.offsetWidth) {
        x = img.width - span.offsetWidth;
    }
    if (x < 0) {
        x = 0
    }
    if (y > img.height - span.offsetHeight) {
        y = img.height - span.offsetHeight;
    }
    if (y < 0) {
        y = 0
    }
    span.style.left = x + "px";
    span.style.top = y + "px";
    div.style.backgroundPosition = "-" + (x * cx) + "px -" + (cy * y) + "px"
    console.log("-" + (x * cx) + "px -" + (cy * y) + "px")

    function getcursorpos(e) {
        div.style.backgroundImage = "url('" + img.src + "')";
        let x = 0;
        let y = 0;
        let a;
        a = img.getBoundingClientRect();
        e = e || window.event;

        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y }
    }
}