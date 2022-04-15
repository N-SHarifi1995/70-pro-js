 window.addEventListener('scroll', function() {
     let header = document.querySelector('header');

     header.classList.toggle('myscroll', window.scrollY > 1100)




 })