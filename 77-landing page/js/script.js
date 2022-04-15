function applaythem(them) {
    document.body.classList.remove('auto', 'dark', 'light');
    document.body.classList.add(`${them}`);
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("hi");
    const selet = document.querySelector('.slt')
    selet.addEventListener("change", () => {
        console.log(selet.value)
        applaythem(selet.value);
    })
})