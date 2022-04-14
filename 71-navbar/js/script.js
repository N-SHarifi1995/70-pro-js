const tabs = document.querySelector('.tab-btn').children;
const items = document.querySelector('.gallery').children;
for (let index = 0; index < tabs.length; index++) {
    tabs[index].onclick = () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active')

        }
        tabs[index].classList.add('active');
        let target = tabs[index].getAttribute('filtter');
        for (let j = 0; j < items.length; j++) {
            items[j].style.display = 'none';
            if (target == items[j].getAttribute('filtter')) {
                items[j].style.display = 'block';
            }
            if (target == 'all') {
                items[j].style.display = 'block';
            }

        }
    }

}
const myitems = document.querySelectorAll('.item');
const lightbox = document.querySelector('.lightbox');
const myimg = lightbox.querySelector('img');
const mysvg = lightbox.querySelector('.close');
myitems.forEach(item => {
    item.onclick = () => {
        console.log(mysvg)
        lightbox.classList.add('show')
        myimg.src = item.querySelector('img').getAttribute('src')
    }
})
mysvg.onclick = () => {
    console.log(mysvg)
    lightbox.classList.remove('show')
}
lightbox.onclick = (e) => {
    if (event.target !== myimg) {
        lightbox.classList.remove('show')
    }
}