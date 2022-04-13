let boxes = document.querySelector('.content').children;
let boxHeight = boxes[0].querySelector('.inre').offsetHeight;
let boxWidth = boxes[0].querySelector('.inre').offsetWidth;

let div = document.createElement('div');
div.style.position = 'absolute';
div.style.left = boxes[0].querySelector('.inre').offsetLeft + "px"
div.style.top = boxes[0].querySelector('.inre').offsetTop + "px"
div.style.height = boxHeight + "px";
div.style.width = boxWidth + "px";
div.style.backgroundColor = 'red';
div.style.transition = " all 1s ease"
document.querySelector('.box-grid').appendChild(div);

for (let index = 0; index < boxes.length; index++) {
    boxes[index].addEventListener('mouseenter', function() {

        const x = this.offsetLeft;
        const y = this.offsetTop;
        div.style.left = x + "px";
        div.style.top = y + "px";
        div.style.height = this.offsetHeight + "px";
        div.style.width = this.offsetWidth + "px";
    })
}