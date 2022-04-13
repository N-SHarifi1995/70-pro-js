let acardion = document.querySelectorAll('.acar-title');
acardion.forEach(acar => {
    acar.addEventListener('click', function() {
        acar.classList.toggle('active');
        let content = acar.nextElementSibling;
        if (content.style.height) {
            content.style.height = null
        } else {
            content.style.height = content.scrollHeight + 'px'

        }

    })
})