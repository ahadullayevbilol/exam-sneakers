
function addToCart(){
    const cart = document.querySelector('.cart'),
    basket = document.querySelector('.basket1'),
    zero = document.querySelector('.zero'),
    button = document.querySelector('button'),
    product_numh4 = document.querySelector('.product_num h4'),
    product_num = document.querySelector('.product_num')

    basket.addEventListener('click', () => {
        cart.classList.toggle('active')
    })
    button.addEventListener('click', () => {
       if(zero.innerText > 0){
            cart.innerHTML = `
            <h1>Cart</h1>
            <div class='stripe'></div>
            <div class='product'>
                <div class='product_img'>
                    <img src='img/sneaker.png' alt="">
                </div>
                <div class='product_reference'>
                    <h3>Fall Limited Edition Sneakers</h3>
                    <h4>$125.00 x ${zero.innerText}  <span>$${125.00 * zero.innerText + '.00'}</span></h4>
                </div>
                <div class='del'>
                    <img src="img/delete.png" alt="">
                </div>
            </div>
            <div class='check'>
                <p>Checkout</p>
            </div>
    `
            let sneakerImg = document.querySelectorAll('.sneaker1 img')
            let product_img1 = document.querySelector('.product_img img')
                sneakerImg.forEach(item => {
                if(item.classList.contains('active')){
                    product_img1.setAttribute('src', item.src)
                }
            })
            
        const product = document.querySelector('.product'),
            stripe = document.querySelector('.stripe'),
            product_img = document.querySelector('.product_img'),
            product_img2 = document.querySelector('.product_img img'),
            product_reference = document.querySelector('.product_reference'),
            product_referenceh3 = document.querySelector('.product_reference h3'),
            product_referenceh4 = document.querySelector('.product_reference h4'),
            product_reference_span = document.querySelector('.product_reference span'),
            del = document.querySelector('.del'),
            check = document.querySelector('.check')
            

            

        cart.classList.add('active')

        del.addEventListener('click', () => {
            product.style.display = 'none'
            check.style.display = 'none'
            product_num.style.display = 'none'
            cart.innerHTML += `
                <h3 class='empty'>Your cart is empty.</h3>
            `
            const carth3 = document.querySelector('.cart .empty')
            carth3.style.cssText = `
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                color: #69707d;
                padding-top: 37px;
            `
        })

        check.style.cssText = `
            width: 80%;
            height: 56px;
            cursor: pointer;
            border-radius: 10px;
            margin-left: 24px;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
            padding-top: 18px;
            color: #FFFFFF;
            background: #FF7E1B;
        `

        del.style.cssText = `
            display: flex; 
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            cursor: pointer;
        `

        product_reference_span.style.cssText = `
            color: black;
        `

        product_referenceh4.style.cssText = `
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #69707D;
        `

        product_referenceh3.style.cssText = `
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #69707D;
            margin-bottom: 10px;
        `

        product_reference.style.cssText = `
            width: 220px;
            height: 100%;
        `

        product_img2.style.cssText = `
            width: 50px;
            height: 50px;
        `

        product_img.style.cssText = `
            width: 50px;
            height: 100%;
        `

        stripe.style.cssText = `
            margin-bottom: 24px;
        `

        product.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 50px;
            margin-bottom: 26px;
        `

        product_num.style.display = 'flex'

        product_numh4.innerText = zero.innerText

        }
    })

    
    
    // console.log(zero.innerText);
}

addToCart()