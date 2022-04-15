 let imgbox = document.querySelectorAll('.imgBox');
 imgbox.forEach(item => {
     item.addEventListener('click', function() {
         item.classList.toggle('active');
     })
 })