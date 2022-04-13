 let items = document.querySelector('.sliderbox').children;
 let index = 0;
 let total = items.length
 console.log(total)

 function next(direction) {

     if (direction == 'next') {
         index++;
         if (index == total) {
             index = 0;
         }

     } else {
         if (index == 0) {
             index = total - 1;
         } else { index-- }
     }
     for (let i = 0; i < items.length; i++) {
         items[i].classList.remove('active')
     }
     items[index].classList.add('active')
 }