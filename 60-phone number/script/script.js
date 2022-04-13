const country = document.querySelector('#country');
country.addEventListener('change', () => {
    document.querySelector('span').innerHTML = country.value
})