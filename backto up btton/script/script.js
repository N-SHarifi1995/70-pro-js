 let topb = document.querySelector('.top');

 window.addEventListener('scroll', function() {

     if (window.pageYOffset > 200) {
         topb.classList.add('active')
     } else {
         topb.classList.remove('active');
     }
 })