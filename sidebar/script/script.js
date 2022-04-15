let btn = document.querySelector('button');
let sidebar = document.querySelector('.sidebar');
btn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})