const allSelect = document.querySelector('#selectall');
const Selectes = document.querySelectorAll('#select');
const but = document.querySelector('button')
console.log(allSelect)
allSelect.onclick = () => {
    if (allSelect.checked == true) {
        for (let index = 0; index < Selectes.length; index++) {
            Selectes[index].checked = true;

        }
        but.classList.add('active')
    } else {
        for (let index = 0; index < Selectes.length; index++) {
            Selectes[index].checked = false;
            but.classList.remove('active')

        }
    }

}