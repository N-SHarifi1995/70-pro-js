 let layer = document.querySelector('.layer1');
 let open = document.querySelector('.openmenue');
 let close = document.querySelector('.close');
 open.onclick = () => {
     layer.classList.add('check');
 }
 close.onclick = () => {
     layer.classList.remove('check')
 }