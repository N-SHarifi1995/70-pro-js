 let header = document.querySelector('header');

 let stick = header.offsetTop;

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > stick) {
         header.classList.add('sticky');
     } else {
         header.classList.remove('sticky');
     }
 })