const tab = document.querySelector('.indicator').children;
console.log(tab)
const items = document.querySelector('.items').children;
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function() {
        for (let index = 0; index < tab.length; index++) {
            tab[index].classList.remove('active');

        }
        this.classList.add('active');
        const category = this.getAttribute('category');
        for (let j = 0; j < items.length; j++) {
            items[j].style.transform = 'scale(0)';
            setTimeout(() => {
                items[j].style.display = 'none'
            }, 500);
            if (items[j].getAttribute('topic') === category || category === 'all') {
                items[j].style.transform = 'scale(1)';
                setTimeout(() => {
                    items[j].style.display = 'block'
                }, 500);
            }
        }



    })
}