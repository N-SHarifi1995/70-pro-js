const inpt = document.querySelector('.inpt');

const text = document.querySelector('.text-prev');
const img = document.querySelector('.img-prev');
inpt.addEventListener('change', function() {

        const myfile = this.files[0];
        console.log(myfile)
        if (myfile) {
            text.style.display = 'none';
            img.style.display = 'block';
            const reder = new FileReader()
            reder.addEventListener('load', function() {
                img.setAttribute('src', this.result)
            })
            reder.readAsDataURL(myfile);

        } else {
            text.style.display = 'null';
            img.style.display = 'null';
            img.setAttribute('src', "")
        }
    }

)