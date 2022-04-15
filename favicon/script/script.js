function change(color) {
    let icon = document.getElementById('icon')

    if (color == "green") { icon.setAttribute('href', 'img/close.png') } else {
        icon.setAttribute('href', 'img/1.png')

    }

}