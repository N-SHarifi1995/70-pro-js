 let textErea = document.querySelector('#texterae');
 console.log(textErea.value.length)
 let remain = document.querySelector('.remaining');
 let Maxlenght = 150;
 textErea.addEventListener('input', () => {
     let capacity = Maxlenght - textErea.value.length
     console.log(capacity)

     let color = (capacity < Maxlenght * 0.1) ? 'red' : null;
     remain.style.color = color
     remain.textContent = `ظرفیت باقی ماند${capacity}`
     if (capacity === 0) {
         remain.textContent = `ظرفیت تکمیل است${capacity}`
     }

 })