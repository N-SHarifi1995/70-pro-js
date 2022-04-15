const basket = document.querySelector('.cart_shoping');
const cart = document.querySelector('.cart-item');
const btns = document.querySelectorAll('.add-cart');
const totalcost = document.querySelector('.total');
const count = document.querySelector('.total-count');
let carditem = (JSON.parse(localStorage.getItem('storage')) || []);
document.addEventListener('DOMContentLoaded',
    loadadata)
basket.addEventListener('click', () => {
    cart.classList.toggle('active')
})
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let pro = btn.parentElement;
        const product = {
            id: pro.querySelector('input').value,
            name: pro.querySelector('.pro-name').innerText,
            price: pro.querySelector('.money h4').innerText,
            image: pro.querySelector('img').getAttribute('src'),

            quantity: 1
        }
        let isincard = carditem.filter(item => item.id === product.id).length > 0;
        if (!isincard) {
            additemdom(product)
        } else {
            alert('not');
            return

        }
        const itemincard = document.querySelectorAll('.cart-itemes')
        itemincard.forEach(item => {
            if (item.querySelector('#pro-id').value === product.id) {
                increase(item, product);
                decrease(item, product)
            }
        })

        carditem.push(product)
        calculate();
        savetolocalstorage()
    })
})

function savetolocalstorage() {
    localStorage.setItem('storage', JSON.stringify(carditem))
}

function additemdom(pro) {
    cart.insertAdjacentHTML("afterbegin",
        ` <div class="cart-itemes">
        <input type="hidden" name="" id="pro-id" value="${pro.id}">
        <img src="${pro.image}" alt="" id="img">
        <h4 id="pro-name">${pro.name}</h4>
        <a href="#" class="btn-small"action="minus">&minus;</a>
        <h4 id="pro-quanitity">${pro.quantity}</h4>
        <a href="#" class="btn-small" action="pluse">&plus;</a>
        <h4 id="pro-price">${pro.price}</h4>
        <a href="#" class="btn-small btn-delete">&times;</a>
    </div>`)
}

function calculate() {
    let total = 0;
    carditem.forEach(element => {
        total += element.quantity * element.price
    });
    totalcost.innerText = total;
    count.innerText = carditem.length
}

function increase(item, product) {
    item.querySelector('[action="pluse"]').addEventListener('click', () => {
        carditem.forEach(el => {
            if (el.id === product.id) {
                item.querySelector('#pro-quanitity').innerText = ++el.quantity;
                calculate();
                savetolocalstorage()
            }
        })
    })
}

function decrease(item, product) {
    item.querySelector('[action="minus"]').addEventListener('click', () => {
        carditem.forEach(el => {
            if (el.id === product.id) {
                if (el.quantity > 1) {
                    item.querySelector('#pro-quanitity').innerText = --el.quantity;
                } else {
                    carditem = carditem.filter((myitem => myitem.id !== product.id));
                    item.remove();
                }

                calculate();
                savetolocalstorage();
            }
        })
    })
}

function loadadata() {
    if (carditem.length > 1) {
        carditem.forEach(pro => {
            additemdom(pro);
            const itemincard = document.querySelectorAll('.cart-itemes')
            itemincard.forEach(item => {
                if (item.querySelector('#pro-id').value === pro.id) {
                    increase(item, pro);
                    decrease(item, pro)
                }
            })
        });
        calculate();
        savetolocalstorage();
    }
}