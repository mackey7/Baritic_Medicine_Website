import './scss/main.scss';

(function () {



    const orderFrom = document.querySelector('#orderFrom');
    const inputs = orderFrom.querySelectorAll('input[required], select[required]');
    const buyProduct = document.querySelector('#buyProduct');
    const productImage = document.querySelector('#productImage');


    orderFrom.setAttribute('novalidate', true);
    productImage.addEventListener('click', countDown);
    buyProduct.addEventListener('click', function () {
        orderFrom.remove()
        createSummary();
        subtractProduct();
    })


    function countDown() {
        const productCount = document.querySelector('#productCount');
        let i = parseInt(productCount.textContent, 10);
        let myinterval = setInterval(function () {
            document.getElementById("productCount").innerHTML = i;
            if (i === 0) {
                clearInterval(myinterval);

            }
            else {
                i--;
            }
        }, 1000);
    }



    const subtractProduct = () => {
        const productCount = document.querySelector('#productCount');
        let product = parseInt(productCount.textContent, 10);
        product--;
        productCount.innerHTML = product;
    }

    const createSummary = () => {
        const summary = document.querySelector('#summary-conatainer')
        const p = document.createElement("p");
        p.classList.add("summaryParagraph")
        p.innerText = " Dziękujemy za zakup"
        summary.appendChild(p)
    }




    [...inputs].forEach(elem => {
        elem.addEventListener('input', function () {
            const pattern = elem.getAttribute('pattern');
            if (new RegExp(pattern).test(elem.value)) {
                let a = this.nextElementSibling
                a.classList.add('disable');
            } else {
                let a = this.nextElementSibling
                a.classList.remove('disable');

            }
        });
    });

})();
