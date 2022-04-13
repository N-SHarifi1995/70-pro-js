const counter = document.querySelectorAll('.counter');
counter.forEach(cnt => {
    cnt.innerHTML = '0';

    const updt = () => {
        const target = +cnt.getAttribute('target');
        const sum = +cnt.innerText;
        const icrment = target / 1000
        if (sum < target) {
            cnt.innerText = Math.ceil(sum + icrment);
            setTimeout(updt, 1);
        } else {
            cnt.innerText = target
        }

    }
    updt();
})