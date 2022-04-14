const myicon = document.querySelector('.icon');
const mylist = document.querySelector('.select')
const mybuts = document.querySelectorAll('button');
for (buts of mybuts) {
    buts.addEventListener('click', (e) => {
        const counter = Number(myicon.getAttribute('data-count') || 0);
        myicon.setAttribute('data-count', counter + 1);
        myicon.classList.add('zero');
        let parent = e.target.parentNode;
        let mycopy = parent.cloneNode(true);
        mycopy.lastElementChild.innerText = 'حذف';
        mylist.appendChild(mycopy);
        if (mycopy) {
            myicon.addEventListener('click', function() {
                mylist.classList.toggle('show');
            })
        }
    })
}