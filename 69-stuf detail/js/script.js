const items = document.querySelector('.items').children;
const main = document.querySelector('.main-i');
const vid = document.querySelector('.vid');
for (let index = 0; index < items.length; index++) {
    items[index].onclick = (e) => {
        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('active')

        }
        e.target.classList.add('active');

        main.style.display = "block";
        vid.style.display = "none";

        vid.src = "";
        main.src = e.target.src;
        if (e.target == items[4]) {
            vid.src = "vid/vid.mp4";
            vid.style.display = "block";
            main.style.display = "none";
        }

    }

}
const buttons = document.querySelector('.add');
const notif = document.querySelector('h1');
buttons.addEventListener('click', () => {
    let count = Number(notif.getAttribute('data-count') || 0);
    notif.setAttribute('data-count', count + 1);
    if (count >= 1) {
        let div = document.createElement('div')
        div.classList.add('alert');
        div.innerHTML = "hdk lpw,g rfgh fi sfnjhk hqhti ani hsj"
        notif.appendChild(div);
        notif.setAttribute('data-count', 1)


    }
    notif.classList.add('zero')
})